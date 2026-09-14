---
name: z-orders-skill
description: >
  Use with Zuora MCP tools,trigger when using Zuora MCP tools such as create_subscriptions, renew_subscriptions, cancel_subscriptions, manage_orders, manage_subscriptions, or equivalent order/subscription tools. Do not use for standalone account creation, only if the account is being created as part of a subscription order.

---

# z-orders-skill

## Purpose

Create accurate Zuora Orders that create, modify, renew, cancel, or preview subscriptions without accidentally billing, collecting payment, or using the wrong account or catalog IDs.

## Core Rules

- Do not guess account IDs, account numbers, product rate plan IDs, product rate plan charge IDs, subscription IDs, or subscription numbers.
- If a lookup returns zero matches or multiple plausible matches, stop and ask the user to choose.
- Use dates in `YYYY-MM-DD` format.
- Resolve "today" at runtime from the current environment date.
- Only create billing documents when the user explicitly asks to invoice, bill, generate an invoice, or collect payment.
- Never collect payment unless the user explicitly asks for payment collection.
- Never request, collect, or create `payment methods` such as credit cards or ACH or direct debit details, through MCP, even if the user asks.
- If payment collection is requested, explain that MCP is not approved for PCI-sensitive payment data and proceed only with non-payment subscription/account actions if possible.
- If a tool returns `STOP_AND_CONFIRM`, stop immediately and ask the user for the requested values. Do not retry with guessed IDs.

## Tool Selection

- Use order/subscription tools for subscription lifecycle work: create, suspend, resume, renew, cancel, preview.
- Use `preview_order` feature of the manage_orders tool when the user asks for a quote, estimate, preview, or "what would this invoice be if I place this order or create this subscription?". Do not create a billing account or subscription for a quote or preview, just run the preview_order tool.
- Use the create_customer_account feature of the manage_customer_account tool for standalone billing-account work with no subscription order.
- For standalone catalog lookup, use object query tools for `Products`, `ProductRatePlans`, and `ProductRatePlanCharges`.

## Lookup Workflow

Before creating or modifying an order:

1. Identify the account.
   - If the user provided an account number or ID, use it.
   - If the user provided only a name or partial details, query accounts and confirm the exact account if more than one match is plausible.
   - Capture account number, account name, currency, and status.

2. Identify the subscription for resume, suspend, renewal, or cancellation.
   - Query by subscription number, subscription ID, or account.
   - Confirm the target subscription if the account has multiple active subscriptions and the user did not specify which one.

3. Identify catalog IDs for create or add-product actions.
   - Query product, product rate plan, and product rate plan charge records from the user's product description.
   - Confirm exact IDs when multiple products, rate plans, currencies, or charges match.
   - Do not proceed with placeholder catalog IDs.

4. Build the order payload.
   - Include only fields required by the selected operation and the user's request.
   - Preserve existing term length and renewal settings unless the user explicitly asks to change them.
   - Include custom fields only when provided or clearly required.

## Billing And Payment Defaults

Unless the user explicitly requests invoicing or billing, pass processing options equivalent to:

```json
{"runBilling": false, "collectPayment": false}
```

If the user asks to invoice or bill, use:

```json
{"runBilling": true, "collectPayment": false}
```

If the user explicitly asks to collect payment, use:

```json
{"runBilling": true, "collectPayment": true}
```

Do not rely on a Zuora MCP tool's default billing behavior.

## Charge Override Guidance

When the user specifies quantities, unit prices, or tiered pricing for a subscription:

1. **Query ProductRatePlanCharges** for the target rate plan to identify all charges
    - Get the charge ID and charge model (PerUnit, Volume, Tiered, etc.)
    - Example: `query_objects(ProductRatePlanCharges, filter=["productRatePlanId.EQ:{ratePlanId}"])`

2. **Build chargeOverrides using the correct pricing structure**

    Each chargeOverride requires:
    - `productRatePlanChargeId` (REQUIRED) — the charge ID from step 1
    - `pricing` — object with charge-model-specific pricing override fields

3. **Use the correct pricing override based on charge model:**

    **For Per-Unit Charges (RecurringPerUnit):**
    ```json
    {
    "productRatePlanChargeId": "chargeId",
    "pricing": {
        "recurringPerUnit": {
        "quantity": 60,
        "listPrice": 19.99
        }
    }
    }```

    **For Volume Pricing (RecurringVolume):**
    ```json
    {
    "productRatePlanChargeId": "chargeId",
    "pricing": {
        "recurringVolume": {
        "quantity": 120,
        "tiers": [
            {"startingUnit": 1, "endingUnit": 50, "price": 10.00},
            {"startingUnit": 51, "endingUnit": -1, "price": 8.00}
        ]
        }
    }
    }```

    **For Tiered Pricing (RecurringTiered):**
    ```json
    {
    "productRatePlanChargeId": "chargeId",
    "pricing": {
        "recurringTiered": {
        "quantity": 120,
        "tiers": [
            {"startingUnit": 1, "endingUnit": 120, "price": 0.75},
            {"startingUnit": 121, "endingUnit": -1, "price": 0.50}
        ]
        }
    }
    }```
  (Use endingUnit: -1 for unlimited upper bound)

    **For Flat Fee (RecurringFlatFee):**
    ```json
    {
    "productRatePlanChargeId": "chargeId",
    "pricing": {
        "recurringFlatFee": {
        "listPrice": 99.99
        }
    }
    }```

    **For Percentage Discount (discountPercentage):**
    ```json
    {
        "productRatePlanChargeId": "chargeId",
        "pricing": {
            "discount":
            {
                "discountPercentage": 30
            }
        }
    }```

    **For Fixed Amount Discount (discountAmount):**
    ```json
    {
        "productRatePlanChargeId": "chargeId",
        "pricing": {
            "discount":
            {
                "discountAmount": 10
            }
        }
    }```

4. Include chargeOverrides in subscribeToRatePlans:
    ```json
    {
    "subscribeToRatePlans": [
        {
        "productRatePlanId": "ratePlanId",
        "chargeOverrides": [
            {chargeOverride1},
            {chargeOverride2}
        ]
        }
    ]
    }```

5. Always do this when user specifies:
- Specific quantities (e.g., "10 seats", "quantity 60")
- Unit prices (e.g., "$0.75 per seat", "special pricing of...")
- Tiered/negotiated pricing (e.g., "$0.75 for first 120, then $0.50 for additional")
- discounts, either percentage or fixed amount discounts, e.g. 15% or $10 reduction.


## New Account Defaults

When creating a new account as part of an order:

- Require account name, bill-to contact, country, and currency.
- If country is US or Canada, require state or province.
- If currency is not specified, infer it from country only when obvious, such as Canada `CAD`, Australia `AUD`, Germany `EUR`, United States `USD`; otherwise ask.
- Use bill cycle day `0` unless the user specifies a billing day, also referred to as BCD.
- Do not create a standalone account with no subscription using this skill.

## Trigger Date Rules

For create, suspend, resume, and cancellation order actions:

- Include Contract Effective, Service Activation, and Customer Acceptance dates unless the selected tool explicitly does not support them.
- If no date is specified, use today for Contract Effective, Service Activation, and Customer Acceptance 
- If only Contract Effective is specified or derived from today, set Service Activation and Customer Acceptance to the Contract Effective date.
- If only Contract Effective and Service Activation are specified, set Customer Acceptance to the Service Activation date.

For update, add product, remove product, and exchange order actions:

- Do not use the Zuora MCP server, it does not support these functions yet, inform the user and stop.

For renewals:

- Use the renewal order action.
- Do not change the term length unless the user explicitly asks.
- Specify only the renewal contract-effective/order date fields required by the selected tool.
- Do not add Service Activation or Customer Acceptance dates for renewal.

## Validation Checklist

Before submitting:

- Account is uniquely identified.
- Subscription is uniquely identified when modifying, renewing, or cancelling.
- Product rate plan and charge IDs are real catalog IDs, not placeholders.
- Order date is set.
- Trigger dates follow the operation-specific rules above.
- Billing and payment flags match the user's explicit request.
- New account payload has required contact, country, state/province when applicable, currency, and bill cycle day.
- Preview requests do not create orders, invoices, or payments.

After submitting:

- Report account number and account name.
- Report subscription number or subscription ID.
- For previews, report preview totals and key billing assumptions.
- If invoicing was requested, report invoice number, amount, and balance.
- If payment collection was requested, report payment status and payment amount.
