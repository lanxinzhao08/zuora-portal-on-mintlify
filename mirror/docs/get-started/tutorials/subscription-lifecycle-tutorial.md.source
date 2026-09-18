---
markdown:
  toc:
    hide: false
    maxDepth: 3
---


# Manage subscription lifecycle


## Overview

### Purpose of this tutorial

Build a reusable, developer-friendly integration kit to simplify and accelerate implementations of Zuora's Subscription Lifecycle APIs. These are the most common and essential APIs used across Zuora Billing implementations. We name endpoints, we review best practices, provide sequence diagrams and sample Postman Collections and calls, everything you need for your subscription business implementation.

Included:

* API sequencing guidance including sequence diagrams
* Integration best practices
* Postman collections


#### "Subscription lifecycle" with Zuora Billing

The subscription lifecycle is not just about customer acquisition, but about billing your customers throughout your relationship with them, relationships that can last years. Customers will want additional products, change the quantities of their existing products, remove products, swap one product for another, request a temporary suspension, or perhaps even cancellation. Our support for the subscription lifecycle is unparalleled. This tutorial helps you understand how to make effective use of Zuora's APIs for your subscribers subscription lifecycles.

### Target audience

This accelerator pack is designed for those responsible for integrating Zuora into your customer’s monetization or subscription flow. The primary personas include:

#### Persona 1: Developer or integration engineer

**Role / Title**: Developer or Engineer, may be in customer IT or Engineering organizations.

**Goals**:
  * Implement business defined use cases using Zuora APIs quickly and accurately
  * Connect Zuora to their front-end signup experience or backend systems
  * Reduce hand-coded trial-and-error with pre-built payloads and flows

**Pain Points**:
  * API documentation and tutorials exist but may lack context for the business use cases.
  * Errors such as invalid payloads, missing field logic.
  * Missing end-to-end tested journey from account → subscription → invoice → payment

**Needs**:
  * Working Postman collections with payloads and sequence
  * SDK examples in languages like Python
  * Clear instructions on sequence and error logic
  * API endpoint and field guidance.

#### Persona 2: Architect

**Role / Title**: Architect responsible for project design and orchestration

**Goals**:
  * Understand Zuora implementation best practices
  * Design scalable and repeatable Zuora solutions

**Pain Points**:
  * No reusable blueprints for subscription lifecycle events such as upgrade flows
  * Development of technical design document is time-consuming

**Needs**:
  * Reusable API flows aligned to common subscription change use cases
  * Clear instructions on sequence and error logic
  * API endpoint and field guidance.


### The problems we are solving

Even though Zuora provides detailed documentation, many struggle with:

* Understanding the order in which to call Zuora Billing APIs
* Writing correct and validated payloads
* Figuring out required vs optional fields
* Handling common errors such as validation and object mapping
* Repeating this work from scratch in every project

We aim to eliminate trial-and-error saving hundreds of hours of development per mid-size implementation.


### The problems we are not solving

The focus of this project is on implementing the subscription lifecycle quickly for our customers regardless of their business. Here we will NOT describe or tackle:

* <a href="https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms/product-catalog-concepts" target="_blank">Product catalog structure</a>
* [Physical goods purchases using Order Line Items](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-item-introduction/overview-of-order-line-items)
* [Ramps, discounting, trials or other free periods](https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/charge-models---configure-any-pricing)
* [Mediation or usage](https://docs.zuora.com/en/zuora-platform/extensibility/mediation/mediation-overview)
* [Payment method choice or payment method effectiveness](https://docs.zuora.com?resourceId=payments-setup-payment-methods)
* [Collections or Dunning](https://docs.zuora.com/en/accounts-receivable/collections/account-settings/collections-management)
* [Revenue guidance nor the Zuora Billing to Revenue integration](https://docs.zuora.com/en/zuora-revenue/getting-started/overview-of-zuora-revenue)
* [Taxes](https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/apply-taxes/overview-of-zuora-tax)
* [Zephr personalized experiences](https://docs.zuora.com/en/zephr/integration/integration-methods)
* [ERP integration](/quickstart-guides/integrate-erp-with-zuora-billing-summarygl/)
* [Provisioning of your services or fulfillment of your products](https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-non-subscription-transactions/order-line-items/order-line-item-introduction/manage-order-line-items/details-view-of-fulfillments)
* [Standalone orders, draft orders, standalone invoicing or dynamic usage](https://docs.zuora.com?resourceId=billing-overview-standalone-orders)
* [Payment or invoice schedules](https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule)

These are all worthy topics, each deserving their own tutorial, but not in this tutorial. Here we're focused on subscription lifecycle management.


## Prerequisites

* Familiarity with the Zuora product catalog and the difference between <a href="https://docs.zuora.com/en/zuora-billing/set-up-zuora-billing/build-product-and-prices/basic-concepts-and-terms/product-catalog-concepts" target="_blank">products and rate plans</a> in Zuora.
* Familiarity with the <a href="/v1-api-reference/object-model" target="_blank">Zuora business model basics</a>.
* Familiar with the <a href="/faq/billing-faq/" target="_blank">Billing FAQ</a> and the <a href="/faq/payments-faq/" target="_blank">Payments FAQ</a>.
* Completed the <a href="/docs/get-started/introduction/" target="_blank">Get Started tutorial</a> and the <a href="/docs/get-started/basics/" target="_blank">Basics tutorial</a>, and you have a suitable sandbox tenant and the related OAuth client ID and secret. You have also <a href="/docs/get-started/basics/#prerequisites" target="_blank">downloaded the "Basics" Postman collection</a> and have the four calls in that collection running in your Postman against your sandbox.
* You have reviewed our <a href="/docs/guides/rate-limits/" target="_blank">API rate limits</a>.
* You have reviewed our <a href="https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/common-subscription-information/subscription-limits" target="_blank">subscription</a> and <a href="https://docs.zuora.com/en/zuora-billing/manage-accounts-subscriptions-and-non-subscriptions/manage-subscription-transactions/orders/orders-limitations-and-performance/orders-performance-guidance" target="_blank">order limits</a>.


## Subscription lifecycle API basics

### Major steps in any subscription lifecycle

This section includes examples of each of the major endpoints commonly used in the subscription lifecycle.

We provide three sequence diagrams for the following scenarios, and their corresponding Postman collections for you to download and run in Postman:

- New customer acquisition
- Subscription lifecycle updates for upsells, down-sells, and add-ons
- Subscription lifecycle updates for renewals, cancellations, suspensions, and resumptions

We also provide a collection to create a recurring per-unit product that you can use in other collections, but we recommend that you use your own products.

#### New customer acquisition basics

![Typical Order Flow](../../images/tutorials-images/typical-order-flow.png)

Here is that same generalized order flow as a simplified sequence diagram:

[New customer acquisition sequence diagram](../../../static/images/Tutorials/new-customer-acquisition-flow.svg)

[New customer acquisition sequence diagram source](../../../static/tutorial-resources/new-customer-acquisition-flow.txt). The sequence diagrams were created using <a href="https://sequencediagram.org/" target="_blank">SequenceDiagram.org</a>. We've included the source text files so you can customize them for your use cases.


<a href="../../../static/postman-collection/new-customer-flow-postman_collection.json" download>New customer acquisition Postman collection</a>


#### Subscription lifecycle basics

Here's what a typical flow is for an **existing customer** making changes to any of the rate plans in their subscription, for example an add-on, upsell, swap or removal:

[Post-acquisition order (rate plan changes) sequence diagram](../../../static/images/Tutorials/post-acquisition-order-flow-rateplan-changes.svg)

[Post-acquisition order (rate plan changes) sequence diagram source](../../../static/tutorial-resources/post-acquisition-order-flow-rateplan-changes.txt)

<a href="../../../static/postman-collection/post-acquisition-rateplan-changes-postman_collection.json" download>Post-acquisition order (rate plan changes) Postman collection</a>

Basic flow for subscription level changes such as renewal, suspension, resumption or cancellation:

[Post-acquisition subscription changes order flow sequence diagram](../../../static/images/Tutorials/post-acquisition-order-flow-subscription-changes.svg)

[Post-acquisition subscription changes order flow sequence diagram source](../../../static/tutorial-resources/post-acquisition-order-flow-subscription-changes.txt)


<a href="../../../static/postman-collection/post-acquisition-subscription-level-changes-postman_collection.json" download>Post-acquisition order flow (subscription changes) Postman collection</a>

This last Postman Collection creates a recurring charge and rate plan in case your tenant has nothing suitable for you to use. You should use the preceding collections with some products and charges specific to your business. However, if you have nothing, you can use the following Postman collection:

<a href="../../../static/postman-collection/zuora-catalog-create-PRPC-postman_collection.json" download>Simple recurring charge Postman collection</a>


### Importance of "Create an order" call in the subscription lifecycle


Some Zuora endpoints offer overlapping features, which causes confusion. One such area is subscription creation. Zuora offers "Create an account" (`/v1/accounts`), Sign up (`/v1/sign-up`), "Create a subscription" (`/v1/subscription`) and "Create an order" (`v1/orders`) endpoints, and all can create subscriptions. We strongly recommend the most powerful of these, `POST /v1/orders`.

Only the `POST /v1/orders` call:

* Provides options for managing the entire subscription lifecycle from creation through to cancellation using different order actions.
* Allows the creation or modifying of multiple subscriptions in a single order.
* Allows a single order to combine both recurring subscription digital goods or services with order line items for physical goods.
* Are always treated as atomic transactions, if any part of the order process fails the entire order, subscription and billing account creation are rolled back cleanly.

`POST /v1/orders` also supports:

* Combinging multiple actions into a single order, so renew and change the quantity in a single order.
* Future dating any order action, capture the order today, Zuora automatically remembers to trigger the order action on the specified future date.
* Back dating order actions, which is useful in migrations from other billing systems.
* Optionally invoice and attempt payment collection at order creation time. These are also atomic, should either step fail the entire order is rolled back.

We will discuss alternatives, but our first recommendation is usually <code>POST /v1/orders</code>.

### Payment method collection and the subscription lifecycle

To aid clarity, the above sequence diagrams have simplified the payment method collection process, for example, "I want to pay for my subscription using credit card, ACH, Direct Debit, or check". While each sequence clearly marks where payment collection can often occur, your particular needs may require payment method collection be done at a different time. This is a highly variable step of the customer acquisition and lifecycle flow, and you should modify the sequence to suit your exact needs. You may even need different flows for different payment method types.

Many older Zuora implementations use our Payment Pages feature to display a credit card or bank details but now have additional options, all options are PCI-compliant and secure:

* If your use case is streamlining multiple payment options, Cards, eCheck/ACH, Apple and Google Pay, into a single and cohesive form, the <a href="https://docs.zuora.com?resourceId=payments-payment-form-overview" target="_blank">Payment Form</a> is the recommended choice. Presents payment methods dynamically, minimizes required code and complexity compared to Payment Pages but has limited, but growing, Payment Gateway support. Consult the Overview page for supported options and limitations. Our documentation includes <a href="https://docs.zuora.com?resourceId=payments-integrate-payment-form-with-website" target="_blank">a sequence diagram for implementation.</a>
* Use <a href="https://docs.zuora.com/en/zuora-payments/process-payments/integrate-payment-pages-2.0" target="_blank">Payment Pages 2.0</a> for when you need total control over the look and feel, optionally includes a **Direct Post** option where you create the capture form. Does not support Apple Pay or Google Pay. Sequence diagram included on the linked page.
* If your use case is collecting payment for a single, specific invoice via email or text message, and minimal setup is desired:
<a href="https://docs.zuora.com?resourceId=payments-overview-of-zuora-payment-link" target="_blank">Payment Link</a> is the best choice. This solution is template-based and requires no coding. It lacks support for debit memos and each link is for only one invoice. Payment Link is quickest to implement, but normally will augment use of either Payment Forms or Payment Pages, not replace them. Payment methods are not stored unless cardholders give their consent.

These options are not mutually exclusive, many implementations will combine Payment Links with either Payment Forms or Payment Pages. All options will automatically create a payment method object when successful, the payment method object ID is returned to you and can be used in later calls. A billing account can have multiple payment methods on file and one can be designated the default and used automatically during payment runs or later payment requests.

These options will use Zuora's PCI-compliant secure credit card vault to store and manage the card details. Some of our gateway integrations also support tokenization or credit card reference tokens where the payment gateway vault is used with a token issued. The tokens can then be stored in Zuora using a Payment Method object. The specifics vary by gateway and so are not covered in detail here.

Zuora also supports a collection of traditional payment method types such as Check and Wire Transfer. Consult with your Finance team on the variety of options they wish to utilize and ensure they are enabled in your tenant. Note that you cannot specify one of these traditional options as the default payment method in an order. You must update the billing account later.


## Common subscription lifecycle errors and anti-patterns

* Single most frequent error reported by developers is an authentication error. You must review and complete the [Get Started](/docs/get-started/introduction/) and [Basics](/docs/get-started/basics/) tutorials. These include written instructions as well as videos on how to obtain a valid OAuth client id, secret and token. You likely have the right client ID and secret, often you're using the wrong REST end point and are trying to access a tenant other than the one you intended. The result is an authentication error.
* We see many `Malformed request/invalid format` error due to localized dates, missing required fields, or typos in expected enum values. Normalize date strings to ISO 8601 (`YYYY‑MM‑DD`), verify presence of key order fields such as contract/service/acceptance dates where applicable, and preflight with a lightweight preview using the code samples provided here.
* Using SOAP, or sticking with SOAP. It's time to move to REST. It's been nearly 10 years since new features were only added to the REST APIs. Zuora is all about backward compatability, but it's very unlikely that your business is the same as it was a year ago, let alone ten years. You need to refactor and move to REST so you can stay current with your business needs using out-of-the-box features such as the newer charge models.
* Implement client‑side exponential backoff, ideally with jitter, rate limit or lock contention errors. Respect `ratelimit-remaining` and smooth out bursts during month‑end or batch processing. This pattern alone resolves most repeated “spike” incidents. Zuora returns [rate limit related response headers](/docs/guides/rate-limits/#rate-limits-in-headers), so use that knowledge, you will know when you are running out of allowed requests in your tenant's rate limits.
* Make sure you understand how our [idempotency](/docs/guides/idempotent-requests/) works and how our [asynchronous requests](/docs/guides/async-requests/) work.
* Creating a billing account and then in the next call creating a subscription. Take advantage of the 'combo' support where both billing account and subscription can be created in a single call. This saves you from having to manage multi-step purchase flow states.
* Creating a subscription and in the next call changing the price or quantity on a rate plan in your new subscription. When adding a product rate plan to a subscription, regardless if it's a new or existing subscription, you can always change the quantity or pricing.
* Failing to use either the <code>processingOptions</code> the <code>billingOptions</code> flags. We architected this system to enable you to immediately collect, not just invoice, but collect cash, when ANY order is placed. Not just orders for new customers, but for existing customers also.
* Failing to adopt <a href="https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/overview-of-flexible-billing" target="_blank">flexible billing attributes</a>. Each subscription on an account can now have a different currency, contacts, payment terms, invoice format, and communication profile.
* Not using <a href="https://docs.zuora.com/en/zuora-billing/bill-your-customer/leverage-advanced-capabilities/flexible-billing/billing-schedule/overview-of-billing-schedule" target="_blank">billing schedules</a> or payment schedules to manage non-standard timing of invoices.
* Not utilizing cancellation options, instead an immediately cancellation is recorded, this then results in a credit memo for the unused prepaid portion of the billing period. The credit memo must then be separately written off. A cancellation order can specify cancellation to take effect on the next billing day or at the end of the current term ensuring no over billing or credit memos occur.
* Using the wrong query feature for your use case. Use Object Query for synchronous but small response payloads. Use either Data Query or Data Source for large response payloads. [Pros and Cons of each feature including a decision tree](/docs/guides/query-guide/) is on our Developer Center.



## Subscription lifecycle deep dive

<table class="subscription-table">
<tr>
<th>Subscription lifecycle step</th>
<th>Recommended API endpoint</th>
<th>Notes</th>
</tr>
<tr>
<td>Display product offerings and pricing</td>
<td><a href="/v1-api-reference/api/catalog/get_catalog" target="_blank"><code>GET v1/catalog/products</code></a> or <a href="/v1-api-reference/api/catalog/get_product" target="_blank"><code>GET v1/catalog/products/{product-key}</code></a></td>
<td><a href="/v1-api-reference/api/object-queries/queryproducts" target="_blank"><code>GET /object-query/products</code></a>, <a href="/v1-api-reference/api/object-queries/queryproductrateplans" target="_blank"><code>GET /object-query/productrateplans</code></a>, or <a href="/v1-api-reference/api/object-queries/queryproductrateplans" target="_blank"><code>GET /object-query/productrateplancharges</code></a> is an alternative that can provide more granular and focused response payloads. Unless pricing changes frequently, you should consider caching pricing locally to avoid making any of these calls every time a prospect lands on your site. You must always have a product rate plan ID to place an order preview or order and you must also have the product rate plan charge ID of any charge you want to override the quantity or pricing of.</td>
</tr>
<tr>
<td>Quote or preview</td>
<td><a href="/v1-api-reference/api/orders/post_previeworder" target="_blank"><code>POST /v1/orders/preview</code></a></td>
<td>This call allows you to retrieve accurate billing information, including proration and taxes, without actually creating the order, the subscription or billing account. The results are usually presented to the prospect or customer in a 'Confirm purchase?' step in your customer's onboarding and purchase flow. Remember you can optionally over-ride the pricing and quantities on any product catalog item when adding that item to a subscription, see 'chargeOverrides' clause under subscribeToRatePlans in both order preview and order calls. </td>
</tr>
<tr>
<td>Capture a payment method</td>
<td>For Credit Cards, Direct Debit, ACH, Google Pay, or Apple Pay, <a href="/docs/get-started/tutorials/payment-form/" target="_blank">use our Payment Forms feature.</a> Do not try to capture credit card data yourself.</td>
<td>Payment Pages 2.0 is designed for more granular implementations but the implementation cost is higher.
Payment Forms is much simpler and faster to implement. Do not use <a href="/v1-api-reference/api/payment-methods/post_paymentmethods" target="_blank"><code>POST v1/payment-methods</code></a> to capture credit card or bank account information.</td>
</tr>
<tr>
<td>Create a billing account</td>
<td><a href="/v1-api-reference/api/accounts/post_account" target="_blank"><code>POST v1/accounts</code></a></td>
<td>This should only be used when you must create the billing account ahead of creating the first subscription. The preferred <a href="/v1-api-reference/api/orders/post_order" target="_blank"><code>POST v1/orders</code></a> call can create both the billing account and the subscription in a single call and is recommended unless there are use case complications requiring a billing account be created ahead of subscription creation. Also <a href="/v1-api-reference/api/accounts/post_account" target="_blank"><code>POST v1/accounts</code></a> can create multiple subscriptions in a single call. We do not recommend using <a href="//v1-api-reference/api/sign-up/post_signup" target="_blank"><code>POST v1/sign-up</code></a> at this time.</td>
</tr>
<tr>
<td>Create a subscription</td>
<td><a href="https://docs.zuora.com?resourceId=billing-create-subscription-rest-api" target="_blank"><code>POST /v1/orders</code> </a>with <code>CreateSubscription</code> order action</td>
<td>Can optionally create the billing account as well as a subscription in a single call. <a href="/v1-api-reference/api/subscriptions/post_subscription" target="_blank"><code>POST v1/subscriptions</code></a> can be used to create a subscription for an existing billing account but we recommend the superior <a href="/v1-api-reference/api/orders/post_order" target="_blank"><code>POST v1/orders</code></a> call. While this call supports creating a billing account and a subscription in a single call, that is optional, you can create a subscription for an existing billing account just as easily. We do not recommend using <a href="/v1-api-reference/api/sign-up/post_signup" target="_blank"><code>POST v1/sign-up</code></a> at this time.</td>
</tr>
<tr>
<td>Provisioning and fulfillment</td>
<td>Your service should manage provisioning and fulfillment of purchased product and features throughout the subscription lifecycle.</td>
<td>Your systems should continue to manage provisioning and fulfillment of purchased products or services outside of Zuora. </td>
</tr>
<tr>
<td>Change quantity or pricing for rate plans on an existing subscription</td>
<td><a href="https://docs.zuora.com?resourceId=billing-update-rate-plan-rest-api" target="_blank"><code>POST /v1/orders</code></a> with <code>UpdateProduct</code> order action</td>
<td>Changing the price in the product catalog only changes prices for new purchases and add-ons, when added to a subscription the charge details are copied, not referenced, to the subscription. So a mandated price increase across your subscriber base requires updating the subscriptions using the old pricing. More details on the specifics of this to come.</td>
</tr>
<tr>
<td>Add a new product to an existing subscription</td>
<td><a href="https://docs.zuora.com?resourceId=billing-add-product-rate-plan-rest-api" target="_blank"><code>POST /v1/orders</code></a> with <code>AddProduct</code> order action</td>
<td><a href="/v1-api-reference/api/subscriptions/put_subscription" target="_blank"><code>PUT v1/subscriptions/{subscription-key}</code></a> is an older alternative that also supports this use case.</td>
</tr>
<tr>
<td>Exchange one product or rate plan for another on an existing subscription</td>
<td><a href="https://docs.zuora.com?resourceId=billing-change-rate-plan-rest-api" target="_blank"><code>POST /v1/orders</code></a> with <code>ChangePlan</code> order action</td>
<td><a href="/v1-api-reference/api/subscriptions/put_subscription" target="_blank"><code>PUT v1/subscriptions/{subscription-key}</code></a> also supports this use case, for new development we recommend the orders call.</td>
</tr>
<tr>
<td>Remove a product or rate plan from an existing subscription</td>
<td><a href="https://docs.zuora.com?resourceId=billing-remove-rate-plan-rest-api" target="_blank"><code>POST /v1/orders</code></a> with <code>RemoveProduct</code> order action</td>
<td><a href="/v1-api-reference/api/subscriptions/put_subscription" target="_blank"><code>PUT v1/subscriptions/{subscription-key}</code></a> also supports this use case, for new development we recommend the orders call.</td>
</tr>
<tr>
<td>Renew a subscription</td>
<td><a href="https://docs.zuora.com?resourceId=billing-renew-subscriptions-rest-api" target="_blank"><code>POST /v1/orders</code></a> with <code>Renewal</code> order action</td>
<td><a href="/v1-api-reference/api/subscriptions/put_renewsubscription" target="_blank"><code>PUT v1/subscriptions/{subscription-key}/renew</code></a> also supports this use case but you can only renew a single subscription per call. With <a href="/v1-api-reference/api/orders/post_order" target="_blank"><code>v1/orders</code></a> you can renew multiple subscriptions on the same billing account in a single call.</td>
</tr>
<tr>
<td>Suspend a subscription</td>
<td><a href="https://docs.zuora.com?resourceId=billing-suspend-subscriptions-rest-api" target="_blank"><code>POST /v1/orders</code></a> with <code>Suspend</code> order action</td>
<td><a href="/v1-api-reference/api/subscriptions/put_suspendsubscription" target="_blank"><code>PUT v1/subscriptions/{subscription-key}/suspend</code></a> also supports this use case but you can only suspend a single subscription per call. With <a href="/v1-api-reference/api/orders/post_order" target="_blank"><code>v1/orders</code></a> you can suspend multiple subscriptions on the same billing account in a single call.</td>
</tr>
<tr>
<td>Resume a suspended subscription</td>
<td><a href="https://docs.zuora.com?resourceId=billing-resume-subscriptions-rest-api" target="_blank"><code>POST /v1/orders</code></a> with <code>Resume</code> order action</td>
<td><a href="/v1-api-reference/api/subscriptions/put_resumesubscription" target="_blank"><code>PUT v1/subscriptions/{subscription-key}/resume</code></a> also supports this use case but you can only resume a single subscription per call. With <a href="/v1-api-reference/api/orders/post_order" target="_blank"><code>POST v1/orders</code></a> you can resume multiple subscriptions on the same billing account in a single call.</td>
</tr>
<tr>
<td>Cancel a subscription</td>
<td><a href="/docs/get-started/api-tutorials/orders-tutorials/modify-subscriptions/#cancel-a-subscription" target="_blank"><code>POST /v1/orders</code></a> with <code>CancelSubscription</code> order action</td>
<td><a href="/v1-api-reference/api/subscriptions/put_cancelsubscription" target="_blank"><code>PUT v1/subscriptions/{subscription-key}/cancel</code></a> also supports this use case but you can only cancel a single subscription per call. With <a href="/v1-api-reference/api/orders/post_order" target="_blank"><code>POST v1/orders</code></a> you can cancel multiple subscriptions on the same billing account in a single call. Orders-Cancel also supports <a href="https://docs.zuora.com?resourceId=billing-cancel-subscription-and-write-off-all-unpaid-invoices" target="_blank">writing off unpaid invoices</a> or <a href="https://docs.zuora.com?resourceId=billing-subscriptions-cancelation-and-refund-end-customers" target="_blank">refunding automatically.</a></td>
</tr>
<tr>
<td>Fetch billing account and subscription data</td>
<td><a href="/v1-api-reference/api/subscriptions/get_subscriptionsbyaccount" target="_blank"><code>GET v1/subscriptions/accounts/{account-key}</code></a></td>
<td>For more granular control over the response payload consider <a href="/v1-api-reference/api/object-queries/queryaccounts" target="_blank"><code>GET /object-query/accounts</code></a> or <a href="/v1-api-reference/api/object-queries/querysubscriptions" target="_blank"><code>GET /object-query/subscriptions</code></a>. While <a href="/v1-api-reference/api/accounts/get_account" target="_blank"><code>GET v1/accounts/{account-key}</code></a> is in common usage, the recommended call provides complete rate plan charge detail needed for some update scenarios. For invoice details you can use <a href="/v1-api-reference/api/accounts/get_accountsummary" target="_blank"><code>GET v1/accounts/{account-key}/summary</code></a> </td>
</tr>
<tr>
<td>Fetch invoice and other billing document data</td>
<td>
<ul><li><a href="/v1-api-reference/api/object-queries/queryinvoices" target="_blank"><code>GET /object-query/invoices</code></a></li>
<li><a href="/v1-api-reference/api/object-queries/querycreditmemos" target="_blank"><code>GET /object-query/credit-memos</code></a></li>
<li><a href="/v1-api-reference/api/object-queries/querydebitmemos" target="_blank"><code>GET /object-query/debit-memos</code></a></li>
<li><a href="/v1-api-reference/api/object-queries/querypayments" target="_blank"><code>GET /object-query/payments</code></a></li>
<li><a href="/v1-api-reference/api/object-queries/queryrefunds" target="_blank"><code>GET /object-query/refunds</code></a></li></ul>
</td>
<td>We have a tutorial with examples on how to use <a href="/docs/guides/expand-filter-fields-sort/" target="_blank">Object Query's powerful, flexible, synchronous query capability.</a>. But each document type also has their own endpoint:
<ul>
<li><a href="/v1-api-reference/api/invoices/get_getinvoice" target="_blank"><code>GET v1/invoices/{invoiceKey}</code></a></li>
<li><a href="/v1-api-reference/api/credit-memos/get_creditmemoitem" target="_blank"><code>GET v1/credit-memos/{creditMemoKey}</code></a></li>
<li><a href="/v1-api-reference/api/debit-memos/get_debitmemo" target="_blank"><code>GET v1/debit-memos/{debitMemoKey}</code></a></li>
</ul>
</td>
</tr>
<tr>
<td>Fetch PDF files</td>
<td><ul>
<li><a href="/v1-api-reference/api/invoices/get_invoicefiles" target="_blank"><code>GET v1/invoices/{invoiceKey}/files</code></a></li>
<li><a href="/v1-api-reference/api/credit-memos/get_creditmemofiles" target="_blank"><code>GET v1/credit-memos/{creditMemoKey}/files</code></a></li>
<li><a href="/v1-api-reference/api/debit-memos/get_debitmemofiles" target="_blank"><code>GET v1/debit-memos/{debitMemoKey}/files</code></a></li>
</ul></td>
<td>
</td>
</tr>
</table>



## Zuora core object reference

This document lists the required fields and commonly referenced optional fields for three core Zuora objects: **Account**, **Subscription**, and **Order**.

---

### Account

Only use `POST v1/accounts` if you have to create the billing account ahead of subscription creation.

| Field | Required? | Type | Purpose |
|:---|:---|:---|:---|
| `accountNumber` | No | string | Custom account number; autogenerated if omitted. |
| `name` | Yes | string | Typically company name or customer name. |
| `currency` | Yes | string | Default currency for all charges, you optionally create subscriptions with a different default currency. |
| `billToContact` | Yes | object | Bill-to contact details for the account. |
| `billCycleDay` | Conditionally | integer | Required if no subscription is created in the same call; determines billing cycle day. |
| `autoPay` | No | boolean | Enables automatic payment collection, default is False. |
| `paymentMethod` | Conditionally | object | Required if `autoPay=true` (or use `hpmCreditCardPaymentMethodId`). |
| `hpmCreditCardPaymentMethodId` | Conditionally | string | This Id is returned by Payment Pages or Payment Forms card capture processes. |
| `paymentTerm` | No | string | Payment terms for invoices (e.g., Net 30), set the default value in your tenant's 'Billing Settings' administration page. |
| `batch` | No | string | Assigns the account to a billing batch, default is 'Batch1'. |
| `taxInfo` | No | object | Can optionally be used to define tax exempt status or VAT Id. |
| `communicationProfileId` / `profileNumber` | No | string | Link to a communication profile for notifications, your administrator can specify the default. |
| `runBilling` / `collect` | No | boolean | Generate invoice and optionally collect payment during creation, default is false. |
| `soldToContact` / `shipToContact` | No | object | Optional sold-to and ship-to contact details, there are boolean flags for `soldToSameAsBillTo` and `shipToSameAsBillTo`. |

---

### Subscription

| Field | Required? | Type | Purpose |
|---|---|---|---|
| `accountKey` | Yes | string | Account number or ID that owns the subscription. |
| `subscriptionNumber` | No | string | Custom subscription number; autogenerated if omitted. |
| `status` | Yes | string | Automatically set by system, beware poor terminology. An 'Active' subscription is the most recent version of the subscription with the most up to date charge values and most reporting should only report on subscription objects that have a status of 'Active'. 'Expired' status does not mean the subscription has expired, it means this is an older version of the 'Active' subscription and should be ignored unless you are interested in understanding subscription history. |
| `version` | Yes | string | Maintained by system, not user settable. As order actions change subscriptions, e.g. add, remove or replace rate plans, a copy of the subscription is created and the version number on the new copy incremented. |
| `contractEffectiveDate` | Yes | date | Contract effective trigger date, almost always the effective start date of billing for the subscription. Support for additional trigger dates is provided, see below. All trigger dates are dates and NOT timestamps.|
| `termType` | Conditionally | string | `TERMED` or `EVERGREEN`; determines term behavior. |
| `initialTerm` | Conditionally | integer | Required if `termType=TERMED`; defines initial term length. |
| `initialTermPeriodType` | Conditionally | string | Period unit for the initial term (Month, Year, etc.). |
| `autoRenew` | Conditionally | boolean | Required when `termType=TERMED`; controls renewal, default is false. |
| `renewalSetting` | Often | string | Renewal behavior (`RENEW_WITH_SPECIFIC_TERM` or `RENEW_TO_EVERGREEN`). |
| `renewalTerm` | Often | integer | Renewal term length. |
| `renewalTermPeriodType` | Often | string | Period unit for the renewal term. |
| `customerAcceptanceDate` / `serviceActivationDate` | No | date | Additional trigger dates, may be required based on tenant configuration. Permits you to define staggered billing starts for different charges in the same rate plan or subscription. Charges also support simply specifying the date you want them to start billing as a charge override. |
| `invoiceSeparately` | No | boolean | Bill this subscription on its own invoice. |
| `subscriptionStartDate` / `termStartDate` | Yes | date | Managed by system, term start moves forward the renewal term length each time the subscription renews. End dates are also tracked automatically by system for termed subscriptions. Evergreen subscriptions have no end dates. |
---

### Order

Creating an order involves many of the fields listed in the previous two tables, here the focus is only on fields unique to orders.

| Field | Required? | Type | Purpose |
|---|---|---|---|
| `orderDate` | Yes | date | Signing date; default contract effective date for order actions if not set. |
| `orderNumber` | No | string | Custom order number; autogenerated if omitted. |
| `subscriptions[].orderActions[]` | Yes | array | Contains at least one action (e.g., `CreateSubscription`, `AddProduct`, etc.). |
| `existingAccountId` / `existingAccountNumber` **or** `newAccount` | Required (one of) | string / object | Specifies the account to use or to create for the order. |
| `processingOptions` | No | object | Options for billing and payment behavior (`runBilling`, `collectPayment`). |
| `orderLineItems` | No | array | Non-subscription line items typically used for physical goods. |
| `schedulingOptions` | No | object | Schedule the order for future execution. |

---

### Notes

- "Conditionally required" means the field must be included only if certain flags or configurations are present (for example, `autoPay=true`, `termType=TERMED`).
- Dates follow the ISO-8601 format (`YYYY-MM-DD`).
- Most ID fields accept either UUID IDs or human-readable strings, for example, A00001234, depending on context.
- All Zuora objects have system maintained `createddate` and `updateddate` that are actually datetimes.

