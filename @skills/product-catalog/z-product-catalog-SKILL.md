---
name: zuora-products-oneshot
description: >
  Create or extend Zuora Billing product catalog records by gathering requirements, validating supported pricing models, presenting a deployment confirmation, and creating Products, Product Rate Plans, and Product Rate Plan Charges. Use when your AI Client needs help with Zuora catalog setup or changes for flat fee, per unit, volume, tiered, or discount pricing through Zuora APIs or Zuora MCP tools.
---

# Zuora Products Oneshot

Create catalog changes with a strict intake -> confirmation -> deployment workflow.

Treat this skill as an operator runbook. Do not create or update anything until the user explicitly approves the final summary.

## Guardrails

- Support only these pricing models: `flat fee`, `per unit`, `volume`, `tiered`, `Discount-Percentage`, `Discount-Fixed Amount`.
- Reject unsupported pricing models and ask the user to choose from the supported list.
- Require a positive price for non-discount charges. For discount charges, require a positive discount amount or percentage. Do not allow zero-value pricing or zero-value discounts.
- If any material detail is missing or invalid, stop and ask clarifying questions.

## Step 1: Intake

Collect and validate:

1. Product name
2. Price for each non-discount charge, and discount amount or percentage for each discount charge
3. Charge type for each charge: `One-Time`, `Recurring`, or `Usage`
4. Currency
5. Billing cadence for `Recurring` or `Usage` charges if not already specified, and the cadence of the charge being discounted for discount charges
6. UOM when required
7. Revenue settings

Apply these defaults:

- Map cadence to Zuora billing periods as follows: Monthly -> `Month`, Quarterly -> `Quarter`, Annually -> `Annual`.
- When a UOM is required and the user did not provide one, default to `Each`.
- Use these revenue defaults unless the user overrides them:
  - Accounting code: `Deferred SaaS Revenue`
  - Deferred revenue account: `Deferred SaaS Revenue`
  - Recognized revenue account: `Earned SaaS Revenue`

Apply these special rules:

- Do not ask for `Billing Period`, `Billing Period Alignment`, or `End Date Condition` on `One-Time` charges.
- For `volume` or `tiered` pricing, require at least one tier.
- Each tier must include `starting value`, `ending value`, `price`, and `price format`.
- Default tier `price format` to `per unit` when omitted.
- Do not guess tier boundaries.
- Enforce contiguity: each tier after the first must start at the previous tier's ending value plus 1.
- For discount charges, collect the discount amount or percentage, the discount level (`rateplan`, `subscription`, or `account`), the cadence of the charge being discounted, and the discount duration or end condition.

## Step 2: Confirmation

Before making any API or MCP create/update call, present a structured summary that includes:

- Product name
- SKU handling
- Effective dates
- Planned product rate plan name
- Charge type and billing period for each charge
- Pricing details, including every tier for `volume` or `tiered`
- Discount details for each discount charge, including amount or percentage, discount level, cadence of the discounted charge, and duration or end condition
- UOM when applicable
- Accounting code
- Deferred revenue account
- Recognized revenue account

For new products, state that SKU will be system-assigned unless the user explicitly asked for a custom SKU.

Use these default effective dates unless the user overrides them:

- Product effective start: `2020-01-01`
- Product effective end: `2100-12-31`
- Product rate plan effective start: `2020-01-01`
- Product rate plan effective end: `2100-12-31`

Then ask exactly:

`Do you want me to proceed with deploying these product catalog changes?`

Wait for an explicit yes or proceed signal. If the user changes the requirements, return to Step 1 and produce a new confirmation summary.

## Step 3: Deployment

After explicit approval, execute in this order.

### 3.1 Create or verify product

- For a new catalog entry, create the Product with the approved name and effective dates.
- Do not invent a SKU. Let Zuora assign it unless the user explicitly requires a custom SKU.
- Save the returned Product ID and Product name.

For enhancements to an existing product:

- Confirm the existing product by name and verified Product ID before proceeding.
- Skip product creation after verification.

### 3.2 Create product rate plan

- Use the verified Product ID.
- Name the rate plan as `{Product name} {billing frequency} Plan` when frequency is known, for example `Acme CRM Monthly Plan`.
- If frequency is not part of the intake, use `{Product name} Plan` only when that remains unambiguous.
- Use the approved effective dates.
- Before creating a new rate plan on an existing product, check whether the planned rate plan name already exists. If it does, ask the user for a different name.
- Save the returned Product Rate Plan ID and Product Rate Plan name.

### 3.3 Create product rate plan charges

- Use the Product Rate Plan ID from the previous step for every charge.
- Name each charge as `{Product name} {charge type or model hint} {billing frequency if applicable} Charge`.
- Default trigger event/condition should be `Upon Contract Effective` unless the user overrides it.
- For `Recurring` and `Usage` charges, set billing period to the agreed cadence.
- Default billing period alignment to:
  - `Align to Charge` for monthly charges
  - `Align to Subscription Start` otherwise
- With `One-Time` charges do not specify billing period, BillingPeriod or billingPeriod, billing period alignment, or end date condition. Send only fields that apply to one-time pricing.
- If Zuora returns an error indicating the UOM is unsupported or unavailable, stop, show the exact error, and ask the user to create that UOM in Zuora or choose another one.
- Save every created charge name and charge ID.
- When the user mentions discounts you should create additional discount charges. These have charge models that are either `Discount-Percentage` or `Discount-Fixed Amount`. Name the charge as `{Product name} {charge type or model hint} {billing frequency if applicable} Discount Charge`. All discounts in Zuora Billing are recurring charges even though you may be asked to discount a one-time or usage charge. When discounts are requested, ensure you know the billing frequency of the charge being discounted, the percentage amount or fixed amount to discount, the discount level, one of `rateplan`, `subscription`, or `account`, and the discount duration or end condition. Use `rateplan` if no discount level is specified. Set `specified accounting codes` to false unless the user specifies accounting or revenue codes for the discount. Discount charges typically have no price, included units, or UOM. If the user does not specify the discount period length then ask, because discounts usually have end conditions or periods shorter than a regular charge.

## Step 4: Completion Summary

After successful deployment, report:

- Product name and ID
- Product rate plan name, ID, effective start, and effective end
- Each product rate plan charge name, ID, charge model, and charge type

## Existing Product Flow

When the user wants to add catalog items to an existing product, use this sequence:

1. Verify the product name and Product ID.
2. Run the normal intake and confirmation flow.
3. Create the rate plan and charges.
4. Return the completion summary.
