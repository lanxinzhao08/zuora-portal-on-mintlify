---
excludeFromSearch: true
markdown:
  toc:
    hide: false
    maxDepth: 2
---

# v1 API changelog - 2023

This page summarizes the changes that are made to the API Reference for Billing, Payments, and Central Platform in 2023.

For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.


## December 22, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/47_2024_releases/30_Zuora_Release_2024.01.R1" target="_blank">Zuora Release 2024.01.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for the Billing Schedule feature

The following items are the API updates specific to the General Availability announcement of the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Billing_Schedule/Billing_Schedule_overview" target="_blank">Billing Schedule</a> feature.

- [Invoice Schedules](/v1-api-reference/api/invoice-schedules/) - In the description of each of the following operations, changed the Early Adopter note to the General Availability note for the Billing Schedule feature:
  - Create an invoice schedule
  - Retrieve an invoice schedule
  - Update an invoice schedule
  - Execute an invoice schedule
  - Pause an invoice schedule
  - Resume an invoice schedule
  - Delete an invoice schedule

- [Credit Memos](/v1-api-reference/api/credit-memos) - Made the following updates:
  - In the response body of the "Retrieve a credit memo item" operation, updated the availability note in the description of each of the following fields:
      - `invoiceScheduleId`
      - `invoiceScheduleItemId`
  - In the response body of the "List credit memo items" operation, updated the availability note in the description of each of the following fields:
      - `items` > `invoiceScheduleId`
      - `items` > `invoiceScheduleItemId`

- [Invoices](/v1-api-reference/api/invoices) - In the response body of the "List all items of an invoice" operation, updated the availability note in the description of each of the following fields:
  - `invoiceItems` > `invoiceScheduleId`
  - `invoiceItems` > `invoiceScheduleItemId`

- [Orders](/v1-api-reference/api/orders) - Made the following updates:
  - In the response body of each of the following operations, updated the availability note in the description of the `order` > `invoiceScheduleId` field:
      - Retrieve an order
      - List order metrics for an evergreen subscription (in the Older API Reference)

  - In the response body of each of the following operations, updated the availability note in the description of the `orders` > `invoiceScheduleId` field:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following updates:
  - In the response body of the "List subscriptions by account key" operation, updated the availability note in the description of each of the following fields:
      - `subscriptions` > `invoiceScheduleId`
      - `subscriptions` > `ratePlans` > `ratePlanCharges` > `invoiceScheduleId`

  - In the response body of each of the following operations, updated the availability note in the description of each of the `invoiceScheduleId` and `ratePlans` > `ratePlanCharges` > `invoiceScheduleId` fields:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version


#### API updates for the Multiple Currencies feature

The following items are the API updates specific to the General Availability announcement of the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Multiple_Currencies" target="_blank">Multiple Currencies</a> feature.

- [Accounts](/v1-api-reference/api/accounts) - In the response body of the "Retrieve an account" operation, updated the availability note in the description of each of the following fields:
  - `metrics`
  - `metricsData`

- [Credit Memos](/v1-api-reference/api/credit-memos) - Made the following updates:
  - In the request body of the "Create a credit memo from a charge" operation, updated the availability note in the description of the `currency` field.
  - In the request body of the "Create credit memos" operation, updated the availability note in the description of the `memos` > `currency`  field.

- [Debit Memos](/v1-api-reference/api/debit-memos) - Made the following updates:
  - In the request body of the "Create a debit memo from a charge" operation, updated the availability note in the description of the `currency` field.
  - In the request body of the "Create debit memos" operation, updated the availability note in the description of the `memos` > `currency`  field.

- [Invoices](/v1-api-reference/api/invoices) - Made the following updates:
  - In the request body and response body of the "Create a standalone invoice" operation, updated the availability note in the description of the `currency` field.
  - In the request body and response body of the "Create standalone invoices" operation, updated the availability note in the description of the `invoices` > `currency`  field.
  - In the response body of the "Retrieve an invoice" operation, updated the availability note in the description of the `currency` field.

- [Invoice Schedules](/v1-api-reference/api/invoice-schedules) - In the response body of each of the following operations, updated the availability note in the description of the `currency` field:
  - Create an invoice schedule
  - Update an invoice schedule
  - Retrieve an invoice schedule
  - Pause an invoice schedule
  - Resume an invoice schedule

- [Orders](/v1-api-reference/api/orders) - Made the following updates:
  - In the request body of each of the following operations, updated the availability note in the description of the `subscriptions` > `orderActions` > `createSubscription` > `currency` field:
      - Create an order
      - Create an order asynchronously
      - Preview an order
      - Preview an order asynchronously

  - In the response body of the "Retrieve an order" operation, updated the availability note in the description of the `order` > `subscriptions` > `orderActions` > `createSubscription` > `currency` field.

  - In the response body of each of the following operations, updated the availability note in the description of the `orders` > `subscriptions` > `orderActions` > `createSubscription` > `currency` field:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

The following updates apply to the Older API Reference:

- [Orders](/api-references/older-api/tag/Orders) - In the response body of the "List order metrics for an evergreen subscription" operation, updated the availability note in the description of the `order` > `subscriptions` > `orderActions` > `createSubscription` > `currency` field.

- [Subscriptions](/v1-api-reference/api/subscriptions) - In the response body of the "CRUD: Retrieve a subscription" operation, updated the availability note in the description of the `Currency` field.

#### API updates for the E-Invoicing feature

The following items are the API updates specific to the the General Availability announcement of the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/E-Invoicing" target="_blank">E-Invoicing</a> feature.

- [E-Invoicing](https://www.zuora.com/developer/v1-api-reference/api/e-invoicing) - Made the following updates:
  - In the request body of each of the following operations:
      - Create an e-invoicing business region
      - Update an e-invoicing business region

      Added the following fields:
      - `digitalSignatureEnable`
      - `digitalSignatureBoxEnable`
      - `digitalSignatureBoxPosX`
      - `digitalSignatureBoxPosY`

  - In the response body of each of the following operations:
      - Create an e-invoicing business region
      - Update an e-invoicing business region
      - Retrieve an e-invoicing business region

      Added the following fields:
      - `digitalSignatureEnable`
      - `digitalSignatureBoxEnable`
      - `digitalSignatureBoxPosX`
      - `digitalSignatureBoxPosY`

  - In the response body of the "List e-invoicing business regions" operation, added the following nested fields to the `regions` field:
      - `digitalSignatureEnable`
      - `digitalSignatureBoxEnable`
      - `digitalSignatureBoxPosX`
      - `digitalSignatureBoxPosY`

### Other API updates

The following items are other API updates included in this release:

- [Metadata](/v1-api-reference/api/metadata/) - Added a section called "Metadata", containing the following operations:
  - Compare and deploy a source tenant to a target tenant
  - Compare and deploy a template to a tenant
  - Revert a deployment
  - Retrieve a deployment log
  - Compare and deploy the product catalog of a tenant to a target tenant
  - Compare and deploy a template for the product catalog to a tenant

- [Workflows](/v1-api-reference/api/workflows/) - Added the "Stop a workflow run" operation.

- [Payment Gateway Reconciliation](/v1-api-reference/api/payment-gateway-reconciliation/) - Updated the description of each of the following operations for the Gateway Reconciliation enhancements:
  - Reject a payment
  - Reverse a payment

- [Payments](/v1-api-reference/api/payments/) - In the request body of each of the following operations, added the `refundTransactionType` field:
  - Refund a payment
  - Refund a payment with auto-unapplying


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- Removed the "Offers" and "Price Book Items" sections as well as all related fields in other corresponding operations for the Offers feature and the Price Book Item feature, which are superseded by the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Attribute-based_pricing/AA_Overview_of_Attribute-based_Pricing" target="_blank">Attribute-based Pricing</a> feature. When creating a subscription, you can only use the `subscribeToRatePlans` field to subscribe to a product rate plan because the `subscribeToProducts` field is removed.


## December 15, 2023

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- Updated the description of each of the following operations for better clarity:
  - Create a draft custom payment method type
  - Update a custom payment method type

- In the response body of the "List all items of an invoice" operation, updated the description of the `invoiceItems` > `balance` field for better clarity.

- In the 200 response body of the "Retrieve a product rate plan charge" operation, added the following missing fields:
  - `excludeItemBillingFromRevenueAccounting`
  - `excludeItemBookingFromRevenueAccounting`
  - `isAllocationEligible`
  - `isUnbilled`
  - `productCategory`
  - `productClass`
  - `productFamily`
  - `productLine`

- In the 200 response body of the "CRUD: Retrieve a product rate plan charge" operation, added the following missing fields:
  - `IsAllocationEligible`
  - `IsUnbilled`
  - `ProductCategory`
  - `ProductClass`
  - `ProductFamily`
  - `ProductLine`

- In the request body of each of the following operations:
  - Create a product charge definition
  - Update a product charge definition

  Added the following missing fields:
  - `excludeItemBillingFromRevenueAccounting`
  - `excludeItemBookingFromRevenueAccounting`
  - `isAllocationEligible`
  - `isUnbilled`
  - `productCategory`
  - `productClass`
  - `productFamily`
  - `productLine`

- In the request body of each of the following operations:
  - Create product charge definitions
  - Update product charge definitions

  Added the following missing fields:
  - `productChargeDefinitions` > `excludeItemBillingFromRevenueAccounting`
  - `productChargeDefinitions` > `excludeItemBookingFromRevenueAccounting`
  - `productChargeDefinitions` > `isAllocationEligible`
  - `productChargeDefinitions` > `isUnbilled`
  - `productChargeDefinitions` > `productCategory`
  - `productChargeDefinitions` > `productClass`
  - `productChargeDefinitions` > `productFamily`
  - `productChargeDefinitions` > `productLine`

- In the 200 response body of the "Retrieve a product charge definition" operation, added the following missing fields:
  - `excludeItemBillingFromRevenueAccounting`
  - `excludeItemBookingFromRevenueAccounting`
  - `isAllocationEligible`
  - `isUnbilled`
  - `productCategory`
  - `productClass`
  - `productFamily`
  - `productLine`

- In the 200 response body of the "List product charge definitions" operation, added the following missing fields:
  - `chargeDefinitions` > `excludeItemBillingFromRevenueAccounting`
  - `chargeDefinitions` > `excludeItemBookingFromRevenueAccounting`
  - `chargeDefinitions` > `isAllocationEligible`
  - `chargeDefinitions` > `isUnbilled`
  - `chargeDefinitions` > `productCategory`
  - `chargeDefinitions` > `productClass`
  - `chargeDefinitions` > `productFamily`
  - `chargeDefinitions` > `productLine`

- In the 200 response body of "Retrieve a product rate plan charge" operation, corrected the enum values of the `model` field.

- Updated the description of the "Query" action for better clarity.


## December 8, 2023

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of each of the following operations, updated the description of the `existingAccountNumber` field for better clarity:
  - Preview an order
  - Preview an order asynchronously
  - Create an order
  - Create an order asynchronously
  - Update an order

- Updated the description of each of the following operations for better consistency:
  - Create authorization
  - Cancel authorization



## December 1, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/08_Zuora_Release_2023.12.R1" target="_blank">Zuora Release 2023.12.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Settings](/v1-api-reference/api/settings) -  Made the following updates:
  - Added the following parameters to the `BillingRules` setting:
      - `discountConsolidated`
      - `availableToCreditIncludingRbeCreditMemo`
  - Added the `jsonFields` parameter to the following settings:
      - `AllTaxEngines`
      - `CreateGlobalTaxHubTaxEngine`
      - `GlobalTaxHubTaxEngine`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).

- [Orders](/v1-api-reference/api/orders/) - Made the following updates:
  - In the request body of the "Create an order" operation, added the following nested fields to the `processingOptions` > `electronicPaymentOption` field:
      - `authTransactionId`
      - `gatewayOrderId`
  - In the source YAML file, added the `processingOptionsOrdersWithDelayedCapturePayment` definition, and updated the schema reference of the `processingOptions` field in the request body of the "Create an order" operation to this definition.

- [Payment Authorization](/v1-api-reference/api/payment-authorization) - In the section description, added the "Create an order" operation as a supported operation for the Delayed Capture feature.


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- For the "CRUD: Create usage record" operation, made the following updates:
  - Added the missing `X-Zuora-WSDL-Version` header parameter.
  - In the request body, added the missing `UniqueKey` field.

- Updated field descriptions for E-Invocing operations.

## November 24, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/08_Zuora_Release_2023.12.R1" target="_blank">Zuora Release 2023.12.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for the Order to Revenue feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue" target="_blank">Order to Revenue</a> feature.

- [Regenerate](/v1-api-reference/api/regenerate/) - Added a section called "Regenerate", containing the following operations:
  - Regenerate booking transactions
  - Regenerate billing transactions
  - Regenerate revenue recognition events transactions for Delivery Schedule
  - Regenerate revenue recognition events transactions for Daily Consumption

#### API updates for the Billing Schedule feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Billing_Schedule/Billing_Schedule_overview" target="_blank">Billing Schedule</a> feature.

- [Invoice Schedules](/v1-api-reference/api/invoice-schedules/) - Made the following updates:
  - In the request body of each of the following operations:
      - Create an invoice schedule
      - Update an invoice schedule

      Made the following updates:
      - Added the `percentage` nested field to the `scheduleItems` field.
      - Updated the description of the `scheduleItems` > `amount` field to clarify the incompatibility with the `scheduleItems` > `percentage` field.
      - Added the `chargeNumbers` nested field to the `specificSubscriptions` field.

  - In the response body of each of the following operations, added the `percentage` nested field to the `scheduleItems` field:
      - Create an invoice schedule
      - Update an invoice schedule
      - Retrieve an invoice schedule
      - Pause an invoice schedule
      - Resume an invoice schedule

      Made the following updates:
      - Added the `percentage` nested field to the `scheduleItems` field.
      - Added the `chargeNumbers` nested field to the `specificSubscriptions` field.

#### API updates for the Delivery Pricing charge model

The following items are the API updates specific to the Delivery Pricing charge model.

- [Credit Memos](/v1-api-reference/api/credit-memos/) - Made the following updates:
  - In the response body of the "Retrieve a credit memo item" operation, added the `numberOfDeliveries` field.
  - In the response body of the "List credit memo items" operation, added the `numberOfDeliveries` nested field to the `items` field.

- [Invoices](/v1-api-reference/api/invoices) - In the response body of the "List all items of an invoice" operation, added the `numberOfDeliveries` nested field to the `invoiceItems` field.

- [Operations](/v1-api-reference/api/operations/) - In the response body of the "Generate a billing preview" operation, added the following fields:
  - `invoiceItems` > `numberOfDeliveries`
  - `creditMemoItems` > `numberOfDeliveries`

- [Orders](/v1-api-reference/api/orders/) - In the response body of the "Preview an order" operation, added the `numberOfDeliveries` nested field to each of the following fields:
  - `previewResult` > `invoices` > `invoiceItems` > `additionalInfo`
  - `previewResult` > `creditMemos` > `creditMemoItems` > `additionalInfo`


#### Other API updates

The following items are the other general API updates included in this release:

- [Orders](/v1-api-reference/api/orders/) - Made the following changes:
  - In the request body of each of the following operations:
      - Preview an order
      - Preview an order asynchronously
      - Create an order
      - Create an order asynchronously
      - Update an order

      Added the following fields, and removed the requirement of enabling the Standalone Orders feature for using this field in other order actions:
      - `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `usageFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates` > `chargeUpdates` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates` > `chargeUpdates` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates` > `chargeUpdates` > `pricing` > `usageFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates` > `chargeUpdates` > `pricing` > `usagePerUnit` > `originalListPrice`

- [Product Charge Definitions](/v1-api-reference/api/product-charge-definitions/) - Made the following updates to support the Discount - Fixed Amount and Discount Percentage charge models for the Attribute-based Pricing feature:
  - In the request body of each of the following operations:
      - Create a product charge definition
      - Update a product charge definition

      Made the following updates:
      - Added the `DiscountFixedAmount` and `DiscountPercentage` enum values for the `chargeModel` field.
      - Added the `prices` > `discountAmount` and `prices` > `discountPercentage` fields.

  - In the request body of each of the following operations:
      - Create product charge definitions
      - Update product charge definitions

      Made the following updates:
      - Added the `DiscountFixedAmount` and `DiscountPercentage` enum values for the `productChargeDefinitions` > `chargeModel` field.
      - Added the `productChargeDefinitions` > `prices` > `discountAmount` and `productChargeDefinitions` > `prices` > `discountPercentage` fields.

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of each of the following operations, updated the description of the ID array for better clarity:
  - Resend email notifications
  - Resend callout notifications

- Updated the description of each of the following operations for better clarity:
  - Preview an order
  - Preview an order asynchronously
  - Create an order
  - Create an order asynchronously

- Removed the following operations:
  - List all credit memo part items
  - Retrieve a credit memo part item

- In the request body of the "Refund a payment with auto-unapplying" operation, added the availability note for the following fields:
  - `writeOff`
  - `writeOffOptions`

- In the response body of the "Refund a payment with auto-unapplying" operation, added the availability note for the `writeOffResults` field.

- In each of the following operations, updated the description of the `product-rateplan-definition-key` path parameter for better clarity:
  - Retrieve a product rate plan definition
  - Delete a product rate plan definition


## November 17, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/09_Zuora_Release_2023.11.R2" target="_blank">Zuora Release 2023.11.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Product Charge Definitions](/v1-api-reference/api/product-charge-definitions/) - Added the following operations to create or update multiple product charge definitions in one request:
  - Create product charge definitions
  - Update product charge definitions


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the 200 response body of the "List product charge definitions" operation, made the following updates:
  - Added the missing `chargeDefinitions` > `isDefault` field.
  - Corrected the field name for each of the following fields to comply with the actual API:
      - `chargeDefinitions` > `productRatePlanChargeId`
      - `chargeDefinitions` > `productRatePlanChargeNumber`

- In the 200 response body of each of the following operations:
  - Retrieve a product charge definition
  - Update a product charge definition

  Made the following updates:
  - Added the missing `isDefault` field.
  - Corrected the field name for each of the following fields to comply with the actual API:
      - `productRatePlanChargeId`
      - `productRatePlanChargeNumber`

- In the response body of the "List all product rate plans of a product" operation, corrected the `Semi-Annual` enum value to `Semi_Annual` for the `productRatePlans` > `productRatePlanCharges` > `billingPeriod` field.

- Updated the cURL request sample for each of the following operations:
  - List API volume summary records
  - List billing document volume summary records





## November 10, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/10_Zuora_Release_2023.11.R1" target="_blank">Zuora Release 2023.11.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following changes:
  - In the response body of each of the following operations, added the `currency` field:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

  - In the response body of the "List subscriptions by account key" operation, added the `currency` nested field to the `subscriptions` field.

  - In the response body of each of the following operations:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

      Added the following fields:
      - `ratePlans` > `ratePlanCharges` > `isStackedDiscount`
      - `offers` > `ratePlans` > `ratePlanCharges` > `isStackedDiscount`

  - In the response body of the "List subscriptions by account key" operation, added the following fields:
      - `subscriptions` >`ratePlans` > `ratePlanCharges` > `isStackedDiscount`
      - `offers` > `ratePlans` > `ratePlanCharges` > `isStackedDiscount`

- [Orders](/v1-api-reference/api/orders/) - Made the following changes to add validation on the non-revenue data exclusion fields to fulfill the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue" target="_blank">Order to Revenue</a> feature's support for <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_for_usage_or_prepaid_products/Advanced_Consumption_Billing" target="_blank">Advanced Consumption Billing</a>:
  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Update an order

      Enhanced the behavior of each of the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`


  - In the request body of each of the following operations:
      - Preview an order
      - Preview an order asynchronously

      Enhanced the behavior of each of the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`


  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Enhanced the behavior of each of the following fields:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`


  - In the response body of the "Retrieve an order" operation, enhanced the behavior of each of the following fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`

- [Settings](/v1-api-reference/api/settings) - Added the following parameters to the `NumberAndSku` setting:
  - `eInvoiceBusinessRegionNumberPrefix`
  - `eInvoiceServiceProviderNumberPrefix`
  - `eInvoiceTemplateNumberPrefix`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.
- Corrected the enum values for the `ListPriceBase` field by removing redundant underscores in the following operations:
  - CRUD: Create a product rate plan charge
  - CRUD: Retrieve a product rate plan charge
  - CRUD: Update a product rate plan charge

- Updated the availability notes for the Offer and Price Book Item related operations to indicate that these objects and operations are in the Beta phase.

- In the source YAML file, renamed the `PostContactType` definition to `PostCreateInvoiceContactType` and updated its description for each of the following operations:
  - Create a standalone invoice
  - Create standalone invoices


- In the request body of the "Create a notification definition" operation, corrected the following fields from required to optional:
  - `callout` > `eventTypeName`
  - `callout` > `requiredAuth`

- In the request body of the "Update a notification definition" operation, corrected the following fields from required to optional:
  - `callout` > `calloutBaseurl`
  - `callout` > `httpMethod`
  - `callout` > `name`
  - `callout` > `requiredAuth`

- In the request body of each of the following operations:
  - Create a notification definition
  - Update a notification definition

  Made the following updates:
  - Updated the description of the `callout` > `requiredAuth` field for better clarity.
  - Added the following missing fields:
      - `callout` > `requiredOauth2`
      - `callout` > `oauth2ProviderId`

- In the 200 response body of each of the following operations:
  - Create a notification definition
  - Update a notification definition
  - Retrieve a notification definition

  Made the following updates:
  - Updated the description of the `callout` > `requiredAuth` field for better clarity.
  - Added the following missing fields:
      - `callout` > `requiredOauth2`
      - `callout` > `oauth2ProviderId`

- In the 200 response body of the "List notification definitions" operator, made the following updates:
  - Updated the description of the `data` > `callout` > `requiredAuth` field for better clarity.
  - Added the following missing fields:
      - `data` > `callout` > `requiredOauth2`
      - `data` > `callout` > `oauth2ProviderId`

- Made the following updates to add the missing clarification that these fields are also available for the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Enable_Order_to_Revenue" target="_blank">Order to Revenue</a> feature:
  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Update an order

      Updated the description of each of the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`


  - In the request body of each of the following operations:
      - Preview an order
      - Preview an order asynchronously

      Updated the description of each of the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`


  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Updated the description of each of the following fields:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`


  - In the response body of the "Retrieve an order" operation, updated the description of each of the following fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`


- In the source YAML file, duplicated the `CreateOrderChargeOverride` reference object as a new reference object called `ChangePlanChargeOverride`, which is used in the following locations:
  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Update an order
      - Preview an order
      - Preview an order asynchronously
  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number
  - In the response body of the "Retrieve an order" operation

- Updated the request sample of each of the following operations:
  - List API volume summary records
  - List billing document volume summary records
  - List payment volume summary records

The following updates applies to the Older API Reference:

- In the request body of the "Subscribe" action, removed the limitation note for the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Adjust_invoice_amounts/Invoice_Settlement" target="_blank">Invoice Settlement</a> feature from the description of the `subscribes` > `SubscribeOptions` > `ProcessPayments` field.

- In the request body of the "Amend" action, removed the limitation note for the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Adjust_invoice_amounts/Invoice_Settlement" target="_blank">Invoice Settlement</a> feature from the description of the `requests` > `AmendOptions` > `ProcessPayments` field.

- In the request body of the "CRUD: Create a bill run" operation, updated the description of the `Batch` field for better clarity.



## November 3, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/10_Zuora_Release_2023.11.R1" target="_blank">Zuora Release 2023.11.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Settings](/v1-api-reference/api/settings) - Added the support for GET and PUT methods to the `StandaloneOrders` setting.

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json) and [200 response sample in CSV format](/settings-api/ListAllSettingsResponseSample.csv).



### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the response body of each of the following operations, updated the minimum and maximum character limits on the fields of string type:
  - Create an order
  - Update an order
  - Activate an order

- In the response body of the "Cancel a subscription" operation, updated the description of the `cancelledDate` field to clarify that this field is not available in the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Orders" target="_blank">Orders tenants</a>.




## October 27, 2023

- [API updates](#item-zero)
  - [API updates in Release 2023.10.R2](#item-one)
      - [API updates for the E-Invoicing feature](#item-two)
      - [Other API updates](#item-three)
  - [API updates in Release 2023.11.R1](#item-four)
      - [API updates for the Multi-Org feature](#item-five)
      - [API updates for the Flexible Billing Attributes feature](#item-six)
      - [API updates for the Standalone Orders feature](#item-seven)
      - [Other API updates](#item-eight)
- [Doc updates](#item-nine)


 <!-- headings -->
<a id="item-zero"></a>

### API updates

This section lists operations and fields that were added, changed, or removed. See the following list for a quick reference:


The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/11_Zuora_Release_2023.10.R2" target="_blank">Zuora Release 2023.10.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.



 <!-- headings -->
<a id="item-one"></a>

#### API updates in Release 2023.10.R2


 <!-- headings -->
<a id="item-two"></a>

##### API updates for the E-Invoicing feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/E-Invoicing" target="_blank">E-Invoicing</a> feature.

**Note**: The E-Invoicing feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at <a href="http://support.zuora.com/" target=“_blank”>Zuora Global Support</a>.

- [E-Invoicing](/v1-api-reference/api/e-invoicing) - Added a section called E-Invoicing, containing the following operations:
  - Create an e-invoicing service provider
  - Update an e-invoicing service provider
  - Retrieve an e-invoicing service provider
  - List e-invoicing service providers
  - Delete an e-invoicing service provider
  - Create an e-invoicing business region
  - Update an e-invoicing business region
  - Retrieve an e-invoicing business region
  - List e-invoicing business regions
  - Delete an e-invoicing business region
  - Create an e-invoice file template
  - Update an e-e-invoice file template
  - Retrieve an e-invoice file template
  - List e-invoice file templates
  - Delete an e-invoice file template

- [Accounts](/v1-api-reference/api/accounts) - Made the following updates:
  - In the request body of each of the following operations, added the `einvoiceProfile` field and its nested fields:
      - Create an account
      - Update an account
  - In the response body of the "Retrieve an account" operation, added the `einvoiceProfile` field and its nested fields.

- [Invoices](/v1-api-reference/api/invoices) - Made the following updates:
  - Added an operation called "Generate an e-invoice file for an invoice".
  - In the response body of the "Retrieve an invoice" operation, added the following fields:
      - `eInvoiceStatus`
      - `eInvoiceErrorCode`
      - `eInvoiceErrorMessage`
      - `eInvoiceFileId`

- [Credit Memos](/v1-api-reference/api/credit-memos) - Made the following updates:
  - Added an operation called "Generate an e-invoice file for a credit memo".
  - In the response body of each of the following operations
      - Create credit memos
      - Update credit memos

      Added the following fields:
      - `memos` > `eInvoiceStatus`
      - `memos` > `eInvoiceErrorCode`
      - `memos` > `eInvoiceErrorMessage`
      - `memos` > `eInvoiceFileId`

  - In the response body of each of the following operations:
      - Create a credit memo from a charge
      - Create a credit memo from an invoice
      - Retrieve a credit memo
      - Update a credit memo
      - Apply a credit memo
      - Unapply a credit memo
      - Cancel a credit memo
      - Post a credit memo
      - Unpost a credit memo

      Added the following fields:
      - `eInvoiceStatus`
      - `eInvoiceErrorCode`
      - `eInvoiceErrorMessage`
      - `eInvoiceFileId`

  - In the response body of the "List credit memos" operation, added the following fields:
      - `creditmemos` > `eInvoiceStatus`
      - `creditmemos` > `eInvoiceErrorCode`
      - `creditmemos` > `eInvoiceErrorMessage`
      - `creditmemos` > `eInvoiceFileId`

- [Debit Memos](/v1-api-reference/api/debit-memos) - Made the following updates:
  - Added an operation called "Generate an e-invoice file for a debit memo".
  - In the response body of each of the following operations
      - Create debit memos
      - Update debit memos

      Added the following fields:
      - `memos` > `eInvoiceStatus`
      - `memos` > `eInvoiceErrorCode`
      - `memos` > `eInvoiceErrorMessage`
      - `memos` > `eInvoiceFileId`

  - In the response body of each of the following operations:
      - Create a debit memo from a charge
      - Create a debit memo from an invoice
      - Retrieve a debit memo
      - Update a debit memo
      - Cancel a debit memo
      - Post a debit memo
      - Unpost a debit memo

      Added the following fields:
      - `eInvoiceStatus`
      - `eInvoiceErrorCode`
      - `eInvoiceErrorMessage`
      - `eInvoiceFileId`

  - In the response body of the "List debit memos" operation, added the following fields:
      - `debitmemos` > `eInvoiceStatus`
      - `debitmemos` > `eInvoiceErrorCode`
      - `debitmemos` > `eInvoiceErrorMessage`
      - `debitmemos` > `eInvoiceFileId`

- [Files](/v1-api-reference/api/files/) - For the "Retrieve a file" operation, added support for retrieving e-invoicing files.

<a id="item-three"></a>

##### Other API updates

The following items are the other general API updates included in this release:

- [Payment Methods](/v1-api-reference/api/payment-methods) - In the request body of the "Create a payment method" operation, made the following updates for the newly supported tokenization of payment methods on Adyen and Stripe:
  - Added the following fields:
      - `tokens` and its nested fields
      - `tokenize`
      - `accountMaskNumber`
  - Updated the description of each of the following fields:
      - `IBAN`
      - `accountNumber`

- [Accounts](/v1-api-reference/api/accounts) - In the response body of the "Retrieve an account" operation, added the `balance` nested field to the `metricsData` field.



 <!-- headings -->
<a id="item-four"></a>

#### API updates in Release 2023.11.R1

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/10_Zuora_Release_2023.11.R1" target="_blank">Zuora Release 2023.11.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.


<!-- headings -->
<a id="item-five"></a>

##### API updates for the Multi-Org feature

The following items are the API updates specific to the Early Adopter announcement of the <a href="https://knowledgecenter.zuora.com/Zuora_Central_Platform/Multi-Org" target="_blank">Multi-Org</a> feature.

- [Multiple Organizations](/v1-api-reference/api/data-labeling) - Added a section called "Multiple Organizations", containing the following operations:
  - Submit a data labeling job
  - Retrieve a data labeling job

- Added the `Zuora-Org-Ids` request header for all operations.

- [Accounts](/v1-api-reference/api/accounts/) - Made the following changes:

  - In the response body of each of the following operations:
      - Retrieve an account
      - Retrieve an account summary

      Added the following fields:
      - `basicInfo` > `organizationLabel`
      - `basicInfo` > `tags`

  - In the request body of the "Create an account" operation, added the following fields:
      - `organizationLabel`
      - `tagging`

- [Attachments](/v1-api-reference/api/attachments/) - Made the following changes:

  - In the response body of the "List attachments by object type and key" operation, added the `organizationLabel` nested field to the  `attachments` field.

  - In the response body of the "Retrieve an attachment" operation, added the `organizationLabel` field.

- [Credit Memos](/v1-api-reference/api/credit-memos/) - Made the following changes:

  - In the response body of the "List credit memos" operation, added the `organizationLabel` nested field to the `creditmemos` field.

  - In the response body of each of the following operations, added the `organizationLabel` field:
      - Retrieve a credit memo
      - Retrieve a credit memo item
      - Retrieve a credit memo part
      - Retrieve a credit memo part item
      - Create a credit memo from a charge
      - Create a credit memo from an invoice
      - Update a credit memo
      - Apply a credit memo
      - Cancel a credit memo
      - Post a credit memo
      - Unapply a credit memo
      - Unpost a credit memo

  - In the response body of each of the following operations, added the `organizationLabel` nested field to the `memos` field:
      - Update credit memos
      - Create credit memos

- [Debit Memos](https://www.zuora.com/deorganizationveloper/v1-api-reference/api/debit-memos/) - Made the following changes:

  - In the response body of each of the following operations, added the `organizationLabel` field:
      - Retrieve a debit memo
      - Create a debit memo from a charge
      - Create a debit memo from an invoice
      - Collect a posted debit memo
      - Update a debit memo
      - Cancel a debit memo
      - Post a debit memo
      - Unpost a debit memo

  - In the response body of each of the following operations, added the `organizationLabel` nested field to the `memos` field:
      - Create debit memos
      - Update debit memos

- [Invoices](/v1-api-reference/api/invoices) - Made the following changes:

  - In the response body of each of the following operations, added the `organizationLabel` field:
      - Retrieve an invoice
      - Create a standalone invoice

  - In the response body of the "Create standalone invoices" operation, added the `organizationLabel` nested field to the` invoices` field.

- [Summary Journal Entries](/v1-api-reference/api/summary-journal-entries/) - Made the following changes:

  - In the response body of the "Retrieve a summary journal entry" operation, added the `organizationLabel` field.

  - In the response body of the "List all summary journal entries in a journal run" operation, added the `organizationLabel` nested field to the `journalEntries` field.

  - In the request body of the "Create a summary journal entry" operation, added the `organizationLabels` field and its nested fields.

- [Orders](/v1-api-reference/api/orders/) - Made the following changes:

  - In the response body of each of the following operations, added the `organizationLabel` nested field to the `orders` field:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

  - In the response body of the "Retrieve an order" operation, added the `organizationLabel` nested field to the `orders` field.

  - In the request body of each of the following operations:
      - Create an order
      - Update an order

      Added the following fields:
      - `newAccount` > `organizationName`
      - `newAccount` > `tagging`

- [Payments](/v1-api-reference/api/payments/) - Made the following changes:

  - In the response body of each of the following operations, added the `organizationLabel` field:
      - Retrieve a payment
      - Retrieve a payment part
      - Retrieve a payment part item
      - Create a payment
      - Refund a payment
      - Update a payment
      - Transfer a payment
      - Apply a payment
      - Cancel a payment
      - Unapply a payment

  - In the response body of the "List payments" operation, added the `organizationLabel` nested field to the `payments` field.

  - In the response body of the "List all parts of a payment" operation, added the `organizationLabel` nested field to the `parts` field.

  - In the response body of the "List all payment part items" operation, added the `organizationLabel` nested field to the `itemParts` field.

- [Refunds](/v1-api-reference/api/refunds/) - Made the following changes:

  - In the response body of each of the following operations, added the `organizationLabel` field:
      - Update a refund
      - Cancel a refund
      - Retrieve a refund
      - Retrieve a refund part
      - Retrieve a refund part item

  - In the response body of the "List refunds" operation, added the `organizationLabel` nested field to the `refunds` field.

  - In the response body of the "List all parts of a refund" operation, added the `organizationLabel` nested field to the `parts` field.

  - In the response body of the "List all refund part items" operation, added the `organizationLabel` nested field to the `itemParts` field.

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following changes:

  - In the response body of each of the following operations, added the `organizationLabel` field:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

  - In the response body of the "List subscriptions by account key" operation, added the `organizationLabel` nested field to the `subscriptions` field.

- [Usage](/v1-api-reference/api/usage/) - In the response body of the "Retrieve a usage record" operation, added the `organizationLabel` nested field to the `usage` field.

- [Bill Run](/v1-api-reference/api/bill-run/) - Made the following changes:

  - In the response body of each of the following operations, added the `organizationLabels` field and its nested fields.
      - Delete bill run
      - Retrieve a bill run
      - Create a bill run
      - Post a bill run
      - Cancel a bill run

  - In the request body of the "Create a bill run" operation, added `organizationLabels` field and its nested fields.

- [Payment Gateway Reconciliation](/v1-api-reference/api/payment-gateway-reconciliation/) - In the response body of each of the following operations, added the `organizationLabel` field:
  - Settle a paymnet
  - Reject a payment
  - Reverse a payment
  - Reconcile a payment

- [Bill Run Previews](/v1-api-reference/api/billing-preview-run) - Made the following changes:

  - In the response body of the "Retrieve a billing preview run" operation, added the `organizationLabels` field and its nested fields.

  - In the request body of the "Create a bill run preview" operation, added the `organizationLabels` field and its nested fields.

- [Catalog Groups](/v1-api-reference/api/catalog-groups/) - Made the following changes:

  - In the response body of the "List all catalog groups" operation, added the `catalogGroups` > `productRatePlans` > `organizationLabels` field and its nested fields.

  - In the response body of each of the following operations, added the `productRatePlans` > `organizationLabels`field and its nested fields.
      - Retrieve a catalog group
      - Update a catalog group

- [Catalog](/v1-api-reference/api/catalog) - Made the following changes:

  - In the response body of the "List all products" operation, added the `products` > `organizationLabels` field and its nested fields.

  - In the response body of the "Retrieve a product" operation, added the `organizationLabels` field and its nested fields.

  - In the response body of the "Retrieve a product" operation, added the `tags` field.

  - In the response body of the "List all products" operation, added the `tags` nested field to the `products` field.

- [Journal Runs](/v1-api-reference/api/journal-runs/) - Made the following changes:

  - In the response body of the "Retrieve a journal run" operation, added the `organizationLabels` field and its nested fields.

  - In the request body of each of the "Create a journal run" operation, added the `organizationLabels` field and its nested fields.

- [Payment Runs](/v1-api-reference/api/payment-runs/) - Made the following changes:

  - In the response body of each of the following operations, added the `organizationLabels` field and its nested fields.
      - Retrieve a payment run
      - Create a payment run
      - Update a payment run

  - In the response body of the "List payment runs" operation, added the `paymentRun` > `organizationLabels` field and its nested fields.

  - In the request body of each of the following operations, added the `organizationLabels` field and its nested fields.
      - Create a payment run
      - Update a payment run

- [Product Rate Plans](/v1-api-reference/api/product-rate-plans/) - In the response body of each of the following operations, added the `organizationLabels` field and its nested fields.
      - Retrieve a product rate plan by ID
      - List product rate plans by external ID

- [Invoice Schedules](/v1-api-reference/api/invoice-schedules/) - In the response body of the "Execute an invoice schedule" operation, added the `organizationLabels` field and its nested fields.

- [Accounting Periods](/v1-api-reference/api/accounting-periods/) - Made the following changes:

  - In the response body of the "List all accounting periods" operation, added the `accountingPeriods` > `organizationLabels` field and its nested fileds.

  - In the response body of the "Retrieve an accounting period" operation, added the `organizationLabels` field and its nested fields.

  - In the request body of the "Create an accounting period" operation, added the `organizationLabels` field and its nested fields.

<!-- headings -->
<a id="item-six"></a>

##### API updates for the Flexible Billing Attributes feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes" target="_blank">Flexible Billing Attributes</a> feature.

- [Invoices](/v1-api-reference/api/invoices) - Made the following updates:
  - In the request body of the “Create a standalone invoice” operation, added the following fields:
      - `billToContact` and its nested fields
      - `billToContactId`
      - `paymentTerm`
      - `sequenceSet`
      - `soldToContact` and its nested fields
      - `soldToContactId`
      - `soldToSameAsBillTo`
      - `templateId`
  - In the request body of the "Create standalone invoices" operation, added the following fields:
      - `invoices` > `billToContact` and its nested fields
      - `invoices` > `billToContactId`
      - `invoices` > `paymentTerm`
      - `invoices` > `sequenceSet`
      - `invoices` > `soldToContact` and its nested fields
      - `invoices` > `soldToContact`
      - `invoices` > `soldToSameAsBillTo`
      - `invoices` > `templateId`

<!-- headings -->
<a id="item-seven"></a>

##### API updates for the Standalone Orders feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Manage_subscription_transactions/Orders/Standalone_Orders/AA_Overview_of_Standalone_Orders" target="_blank">Standalone Orders</a> feature.

**Note**: The Standalone Orders feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at <a href="http://support.zuora.com/" target="_blank">Zuora Global Support</a>.

- [Orders](/v1-api-reference/api/orders/) - Made the following changes:
  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Update an order

      Added the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `isFromExternalCatalog`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanName`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `name`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pobPolicy`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productCategory`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productClass`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productFamily`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productLine`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `chargeType`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `chargeModel`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `contractAssetAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `taxCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `taxMode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `name`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pobPolicy`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productCategory`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productClass`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productFamily`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productLine`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `chargeType`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `chargeModel`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `contractAssetAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `taxCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `taxMode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `isFromExternalCatalog`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `ratePlanName`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `name`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pobPolicy`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productCategory`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productClass`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productFamily`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productLine`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeType`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeModel`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `contractAssetAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxMode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `isFromExternalCatalog`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanName`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `name`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pobPolicy`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productCategory`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productClass`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productFamily`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productLine`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeType`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeModel`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `contractAssetAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxMode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `name`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pobPolicy`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productCategory`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productClass`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productFamily`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productLine`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `chargeType`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `chargeModel`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `contractAssetAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `taxCode`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `taxMode`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `isFromExternalCatalog`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `ratePlanName`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `name`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pobPolicy`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productCategory`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productClass`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productFamily`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productLine`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeType`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeModel`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `contractAssetAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `taxCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `taxMode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`

  - In the request body of each of the following operations:
      - Preview an order
      - Preview an order asynchronously

      Added the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `isFromExternalCatalog`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `ratePlanName`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `name`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pobPolicy`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productCategory`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productClass`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productFamily`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productLine`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeType`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeModel`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `contractAssetAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxCode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxMode`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `isFromExternalCatalog`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanName`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `name`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pobPolicy`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productCategory`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productClass`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productFamily`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productLine`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeType`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeModel`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `contractAssetAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxCode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxMode`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `isFromExternalCatalog`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `ratePlanName`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `name`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pobPolicy`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productCategory`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productClass`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productFamily`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productLine`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeType`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeModel`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `contractAssetAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `taxCode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `taxMode`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`

  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Added the following fields:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `isFromExternalCatalog`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanName`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `name`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pobPolicy`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productCategory`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productClass`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productFamily`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productLine`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `chargeType`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `chargeModel`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `contractAssetAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `taxCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `taxMode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `name`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pobPolicy`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productCategory`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productClass`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productFamily`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productLine`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `chargeType`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `chargeModel`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `contractAssetAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `taxCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `taxMode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `isFromExternalCatalog`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `ratePlanName`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `name`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pobPolicy`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productCategory`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productClass`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productFamily`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productLine`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeType`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeModel`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `contractAssetAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxCode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxMode`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `isFromExternalCatalog`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanName`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `name`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pobPolicy`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productCategory`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productClass`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productFamily`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productLine`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeType`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeModel`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `contractAssetAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxMode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `name`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pobPolicy`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productCategory`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productClass`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productFamily`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productLine`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `chargeType`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `chargeModel`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `contractAssetAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `taxCode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `taxMode`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `isFromExternalCatalog`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `ratePlanName`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `name`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pobPolicy`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productCategory`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productClass`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productFamily`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productLine`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeType`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeModel`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `contractAssetAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `taxCode`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `taxMode`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`

  - In the response body of the "Retrieve an order" operation, added the following fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `isFromExternalCatalog`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanName`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `name`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pobPolicy`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productCategory`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productClass`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productFamily`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productLine`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `chargeType`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `chargeModel`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `contractAssetAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `taxCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `taxMode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `name`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pobPolicy`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productCategory`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productClass`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productFamily`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productLine`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `chargeType`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `chargeModel`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `contractAssetAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `taxCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `taxMode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `isFromExternalCatalog`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `ratePlanName`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `name`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pobPolicy`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productCategory`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productClass`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productFamily`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productLine`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeType`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `chargeModel`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `contractAssetAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxCode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `taxMode`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `isFromExternalCatalog`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanName`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `name`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pobPolicy`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productCategory`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productClass`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productFamily`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productLine`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeType`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `chargeModel`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `contractAssetAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `taxMode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `name`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pobPolicy`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productCategory`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productClass`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productFamily`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productLine`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `chargeType`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `chargeModel`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `contractAssetAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `taxCode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `taxMode`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `isFromExternalCatalog`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `ratePlanName`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `name`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pobPolicy`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productCategory`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productClass`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productFamily`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productLine`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeType`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `chargeModel`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `accountReceivableAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `adjustmentLiabilityAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `adjustmentRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `contractAssetAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `contractLiabilityAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `contractRecognizedRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `deferredRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `recognizedRevenueAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `unBilledReceivablesAccountingCode`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `taxCode`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `taxMode`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeFlatFee` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimePerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usagePerUnit` > `originalListPrice`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usagePerUnit` > `uom`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `oneTimeVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `uom`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `usageVolume` > `uom`

 <!-- headings -->
 <a id="item-eight"></a>

##### Other API updates

The following items are the other general API updates included in this release:

- [Delivery Adjustments](/v1-api-reference/api/delivery-adjustments) - In the response body of each of the following operations, renamed the `totalQuantity` field to `totalNumberOfDeliveries`.
  - Create a delivery adjustment
  - Preview a delivery adjustment

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following changes:

  - In the response body of the "List subscriptions by account key" operation, added the `numberOfDeliveries` nested field to the `subscriptions` > `ratePlans` > `ratePlanCharges` field.

  - In the response body of each of the following operations, added the `numberOfDeliveries` nested field to the `ratePlans` > `ratePlanCharges` field.
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

- [Settings](/v1-api-reference/api/settings) -  Made the following updates:
  - Added the `Specific_Days` enum value to the `billingPeriods` parameter of the `BillingPeriod` setting.
  - Added the following parameters to the `NumberAndSku` setting:
      - `creditMemoTemplateNumberPrefix`
      - `debitMemoTemplateNumberPrefix`
      - `invoiceTemplateNumberPrefix`
      - `productNumberPrefix`
      - `productRatePlanChargeNumberPrefix`
      - `productRatePlanNumberPrefix`
      - `sequenceSetNumberPrefix`
      - `subscriptionRatePlanNumberPrefix`
  - Updated the `voidTemplate` parameter of each of the following settings to add the support of the `null` value:
      - `AllTaxEngines`
      - `CreateGlobalTaxHubTaxEngine`
      - `GlobalTaxHubTaxEngine`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).

- [Aggregate Queries](/v1-api-reference/api/aggregate-queries) - Made the following updates:
  - In the request body of the "Submit an aggregate query job" operation, added the following fields:
      - `sourceData`
      - `warehouseSize`
  - In the 200 response body of each of the following operations, added the `sourceData` field:
      - Submit an aggregate query job
      - Retrieve an aggregate query job
      - Cancel a running aggregate query job
      - Retrieve the last completed aggregate query job

- [Data Queries](/v1-api-reference/api/data-queries/) - Made the following updates:
  - In the request body of the "Submit a data query" operation, made the following updates:
      - Updated the description of the `sourceData` field to add the support of the Zuora Warehouse feature.
      - Added the `warehouseSize` field.
  - In the 200 response body of each of the following operations, added the `sourceData` nested field to the `data` field:
      - Submit a data query
      - List data query jobs
      - Retrieve a data query job
      - Cancel a data query job

 <!-- headings -->
 <a id="item-nine"></a>

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of the "Create a product charge definition" operation, removed the `productChargeDefinitionId` and `productChargeDefinitionNumber` fields.

- In the request body of each of the following operations:
  - Create a product charge definition
  - Update a product charge definition

  Made the following updates:
  - Corrected the enum values of the `chargeModel` field.
  - Updated the format of each of the `effectiveStartDate` and `effectiveEndDate` fields.

- In the response body of the "Retrieve a product charge definition" operations, made the following updates:
  - Corrected the enum values of the `chargeModel` field.
  - Updated the format of each of the `effectiveStartDate` and `effectiveEndDate` fields.

- In the response body of the "List product charge definitions", made the following updates:
  - Corrected the enum values of the `chargeDefinitions` > `chargeModel` field.
  - Updated the format of each of the `chargeDefinitions` > `effectiveStartDate` and `chargeDefinitions` > `effectiveEndDate` fields.

- Updated the description of each of the `recurringDelivery` and `recurringDeliveryBased` fields to clarify the access approach. The following operations are affected:
    - Preview an order
    - Preview an order asynchronously
    - Create an order
    - Create an order asynchronously
    - Update an order
    - List orders
    - Retrieve an order
    - List orders of a subscription owner
    - List orders by subscription number
    - List orders of an invoice owner
    - List pending orders by subscription number

- In the 200 response body of each of the following operations, added the missing `useIndexJoin` nested field to the `data` field:
  - Submit a data query
  - List data query jobs
  - Retrieve a data query job
  - Cancel a data query job

- In the request sample of the "Update credit memo" operation, corrected the format of the `id` field.

- Updated the request sample of each of the following operations:
  - List API volume summary records
  - List billing document volume summary records
  - List payment volume summary records

- In the response body of the "Create a payment schedule" operation, updated the description of the `totalAmount` field.

- In the request body of the "Update a payment schedule" operation, added a note to the `paymentOption` field.



## October 20, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/12_Zuora_Release_2023.10.R1" target="_blank">Zuora Release 2023.10.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Invoices](/v1-api-reference/api/invoices) - Made the following updates:
- In the response body of the "List all items of an invoice" operation, added the _`property name*`_ nested field to the `invoiceItems` > `taxationItems` > `data` field for supporting custom fields on the Invoice Taxation Item object.
- In the response body of the "List all taxation items of an invoice item" operation, added the _`property name*`_ nested field to the `data` field for supporting custom fields on the Invoice Taxation Item object.

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- For operations in the following sections, updated the availability note to indicate that you must reach out to your CSM if you want to access the operations in the Early Adopter phase.
  - [Product Rate Plan Definitions](/v1-api-reference/api/product-rate-plan-definitions/)
  - [Product Charge Definitions](/v1-api-reference/api/product-charge-definitions)

- In the description of the "List subscriptions by account key" operation, added a note about the return order of rate plan charges in a subscription.

## October 13, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/12_Zuora_Release_2023.10.R1" target="_blank">Zuora Release 2023.10.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for the Attribute-based Pricing feature

The following items are the API updates specific to the Early Adopter announcement of the Attribute-based Pricing feature.

- [Product Rate Plan Definitions](/v1-api-reference/api/product-rate-plan-definitions/) - Added a section called "Product Rate Plan Definitions", containing the following operations:
  - Create a product rate plan definition
  - Delete a product rate plan definition
  - List product rate plan definitions
  - Retrieve a product rate plan definition

- [Product Charge Definitions](/v1-api-reference/api/product-charge-definitions) - Added a section called "Product Charge Definitions", containing the following operations:
  - Create a product charge definition
  - Delete a product charge definition
  - List product charge definitions
  - Retrieve a product charge definition
  - Update a product charge definition

- [Product Rate Plan Charges](/v1-api-reference/api/product-rate-plan-charges) - Added an operation called "Retrieve a product rate plan charge" to facilitate retrieving a charge information including its charge definition information.

#### Other API updates

The following items are the other general API updates included in this release:

- [Custom Event Triggers](/v1-api-reference/api/custom-event-triggers/) - Made the following updates:
  - Updated the description of the "Custom Event Triggers" section to add the support for custom objects.
  - Updated the description of the "Create an event trigger" operation to add the support for custom objects.
  - In the request body of the "Create an event trigger" operation, updated the description of the `baseObject` field.
  - In the 200 response body of each of the following operations, updated the description of the `baseObject` field:
      - Create an event trigger
      - Retrieve an event trigger
      - Update an event trigger
  - In the "List event triggers" operation, updated the description of the `baseObject` query parameter.
  - In the 200 response body of the "List event triggers" operation, updated the description of the `data` > `baseObject` field.


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- For the "List records for a custom object" operation, removed the unsupported `page` query parameter.
- In the description of the "Create an order" operation, added the description for the Scheduled Orders feature.
- In the request body of each of the following operations, updated the descriptions of the `status` and `schedulingOptions` fields for better clarity:
  - Create an order
  - Update an order
- In the response body of each of the following operations, updated the descriptions of the `status` and `schedulingOptions` nested fields of the `orders` field for better clarity:
  - List orders
  - List orders by subscription number
  - List orders of an invoice owner
- In the response body of the "Retrieve an order" operation, updated the description of the `status` and `schedulingOptions` nested fields of the `order` field for better clarity.
- In the request body of each of the following operations, updated the character length of the `personalEmail` and `workEmail` fields.
  - Create a contact
  - Update a contact

- In the response body of each of the following operations, updated the character length of the `personalEmail` and `workEmail` fields.
  - Create a contact
  - Retrieve a contact
  - Update a contact

- In the request body and response body of the "Create a payment" operation, removed the version control information from the `paymentOption` field because this field is no longer version controlled.

- In the response body of the "List payments" operation, removed the version control information from the `payments` > `paymentOption` field description because this field is no longer version controlled.

- Removed the version control information from the description of the `paymentOption` field on the Payment Schedule object and Payment Schedule Item object because these fields are no longer version controlled. The following operations are affected:

  - Create a payment schedule
  - Retrieve a payment schedule
  - Create multiple payment schedules at once
  - Add payment schedule items to a custom payment schedule
  - Update a payment schedule
  - Update a payment schedule item
  - Preview the result of payment schedule update
  - Retrieve a payment schedule item
  - List payment schedules by customer account
  - Cancel a payment schedule
  - Cancel a payment schedule item
  - Skip a payment schedule item
  - Retry failed payment schedule items

- In the response body of the "Retrieve an account" operation, updated the description of the `metrics` field for better clarity.



## September 28, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/12_Zuora_Release_2023.10.R1" target="_blank">Zuora Release 2023.10.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for the Enhanced Discounts feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Basic_concepts_and_terms/B_Charge_Models/D_Manage_Enhanced_Discount" target="_blank">Enhanced Discounts</a> feature.

- [Orders](/v1-api-reference/api/orders/) - Made the following changes:
  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Update an order

      Added the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `startDate` > `periodsAfterChargeStart`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `startDate` > `startDatePolicy`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `startDate` > `startPeriodsType`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `endDate` > `endDatePolicy`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `discount` > `applyToBillingPeriodPartially`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `discount` > `discountApplyDetails` and its nested fields
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `discount` > `discountClass`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `startDate` > `periodsAfterChargeStart`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` >`chargeOverrides` > `startDate` > `startDatePolicy`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` >`chargeOverrides` > `startDate` > `startPeriodsType`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` >`chargeOverrides` > `endDate` > `endDatePolicy`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `discount` > `applyToBillingPeriodPartially`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `discount` > `discountApplyDetails`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `discount` > `discountClass`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `startDate` > `periodsAfterChargeStart`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `startDate` > `startDatePolicy`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `startDate` > `startPeriodsType`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `endDate` > `endDatePolicy`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `discount` > `applyToBillingPeriodPartially`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `discount` > `discountApplyDetails` and its nested fields
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `discount` > `discountClass`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `startDate` > `periodsAfterChargeStart`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `startDate` > `startDatePolicy`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `startDate` > `startPeriodsType`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `endDate` > `endDatePolicy`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `discount` > `applyToBillingPeriodPartially`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `discount` > `discountApplyDetails` and its nested fields
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `discount` > `discountClass`

  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Added the following fields:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `startDate` > `periodsAfterChargeStart`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `startDate` > `startDatePolicy`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `startDate` > `startPeriodsType`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `endDate` > `endDatePolicy`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `discount` > `applyToBillingPeriodPartially`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `discount` > `discountApplyDetails` and its nested fields
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `discount` > `discountClass`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `startDate` > `periodsAfterChargeStart`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` >`chargeOverrides` > `startDate` > `startDatePolicy`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` >`chargeOverrides` > `startDate` > `startPeriodsType`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` >`chargeOverrides` > `endDate` > `endDatePolicy`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `discount` > `applyToBillingPeriodPartially`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `discount` > `discountApplyDetails`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `discount` > `discountClass`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `startDate` > `periodsAfterChargeStart`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `startDate` > `startDatePolicy`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `startDate` > `startPeriodsType`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `endDate` > `endDatePolicy`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `discount` > `applyToBillingPeriodPartially`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `discount` > `discountApplyDetails` and nested fields
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `discount` > `discountClass`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `startDate` > `periodsAfterChargeStart`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `startDate` > `startDatePolicy`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `startDate` > `startPeriodsType`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `endDate` > `endDatePolicy`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `discount` > `applyToBillingPeriodPartially`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `discount` > `discountApplyDetails` and its nested fields
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `discount` > `discountClass`

  - In the response body of the "Retrieve an order" operation, added the following fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `startDate` > `periodsAfterChargeStart`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `startDate` > `startDatePolicy`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `startDate` > `startPeriodsType`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `endDate` > `endDatePolicy`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `discount` > `applyToBillingPeriodPartially`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `discount` > `discountApplyDetails` and its nested fields
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `discount` > `discountClass`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `startDate` > `periodsAfterChargeStart`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` >`chargeOverrides` > `startDate` > `startDatePolicy`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` >`chargeOverrides` > `startDate` > `startPeriodsType`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` >`chargeOverrides` > `endDate` > `endDatePolicy`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `discount` > `applyToBillingPeriodPartially`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `discount` > `discountApplyDetails`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `pricing` > `discount` > `discountClass`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `startDate` > `periodsAfterChargeStart`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `startDate` > `startDatePolicy`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `startDate` > `startPeriodsType`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `endDate` > `endDatePolicy`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `discount` > `applyToBillingPeriodPartially`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `discount` > `discountApplyDetails` and its nested fields
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `discount` > `discountClass`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `startDate` > `periodsAfterChargeStart`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `startDate` > `startDatePolicy`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `startDate` > `startPeriodsType`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `endDate` > `endDatePolicy`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `discount` > `applyToBillingPeriodPartially`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `discount` > `discountApplyDetails` and its nested fields
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `discount` > `discountClass`

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following changes:
  - In the response body of each of the following operations:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

      Added the following fields:
      - `ratePlans` > `ratePlanCharges` > `applyToBillingPeriodPartially`
      - `offers` > `ratePlans` > `ratePlanCharges` > `applyToBillingPeriodPartially`

  - In the response body of the "List subscriptions by account key" operation, added the following fields:
      - `subscriptions` >`ratePlans` > `ratePlanCharges` > `applyToBillingPeriodPartially`
      - `offers` > `ratePlans` > `ratePlanCharges` > `applyToBillingPeriodPartially`

- [Product Rate Plan Charges](/v1-api-reference/api/product-rate-plan-charges/) - Made the following changes:
  - In the request body of each of the following operations, added the `applyToBillingPeriodPartially` field:
      - CRUD: Create a product rate plan charge
      - CRUD: Update a product rate plan charge

  - In the response body of the "CRUD: Retrieve a product" operation, added the `applyToBillingPeriodPartially` field.


#### API updates for the Multiple Currencies feature

The following items are the API updates specific to the Early Adopter announcement of the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Multiple_Currencies" target="_blank">Multiple Currencies</a> feature.

- [Accounts](/v1-api-reference/api/accounts) - In the response body of the "Retrieve an account" operation, added the `metricsData` field and its nested fields.

- [Credit Memos](/v1-api-reference/api/credit-memos) - Made the following updates:
  - In the request body of the "Create a credit memo from a charge" operation, added the `currency` field.
  - In the request body of the "Create credit memos" operation, added the `currency` nested field to the `memos` field.

- [Debit Memos](/v1-api-reference/api/debit-memos) - Made the following updates:
  - In the request body of the "Create a debit memo from a charge" operation, added `currency` field.
  - In the request body of the "Create debit memos" operation, added the `currency` nested field to the `memos` field.

- [Invoices](/v1-api-reference/api/invoices) - Made the following updates:
  - In the request body and response body of the "Create a standalone invoice" operation, added the `currency` field.
  - In the request body and response body of the "Create standalone invoices" operation, added the `currency` nested field to the `invoices` field.
  - In the response body of the "Retrieve an invoice" operation, added the `currency` field.

- [Invoice Schedules](/v1-api-reference/api/invoice-schedules) - In the response body of each of the following operations, added the `currency` field:
  - Create an invoice schedule
  - Update an invoice schedule
  - Retrieve an invoice schedule
  - Pause an invoice schedule
  - Resume an invoice schedule

- [Orders](/v1-api-reference/api/orders) - Made the following updates:
  - In the request body of each of the following operations, added the `currency` nested field to  the `subscriptions` > `orderActions` > `createSubscription` field:
      - Create an order
      - Create an order asynchronously
      - Preview an order
      - Preview an order asynchronously

  - In the response body of the "Retrieve an order" operation, added the `currency` nested field to the `order` > `subscriptions` > `orderActions` > `createSubscription` field.

  - In the response body of each of the following operations, added the `currency` nested field to the `orders` > `subscriptions` > `orderActions` > `createSubscription` field:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

The following updates apply to the Older API Reference:

- [Orders](/api-references/older-api/tag/Orders) - In the response body of the "List order metrics for an evergreen subscription" operation, added the `currency` nested field to  the `order` > `subscriptions` > `orderActions` > `createSubscription` field.

- [Subscriptions](/v1-api-reference/api/subscriptions) - In the response body of the "CRUD: Retrieve a subscription" operation, added the `Currency` field.


#### Other API updates

The following items are the other general API updates included in this release:

- [Product Rate Plans](/v1-api-reference/api/product-rate-plans/) - Changed the endpoint of the "List all product rate plans of a product" operation from `/v1/rateplan/{product-key}/productRatePlan` to `/v1/products/{product-key}/product-rate-plans`. Note that if you have integrated with the `/v1/rateplan/{product-key}/productRatePlan` endpoint, you do not need to make any update for this change because the previous endpoint is still supported for backward compatibility.

- [Payments](/v1-api-reference/api/payments) - Made the following changes:
  - In the request body of the "Refund a payment with auto-unapplying" operation, added the following fields:
      - `writeOff`
      - `writeOffOptions` and its nested fields

  - In the response body of the "Refund a payment with auto-unapplying" operation, added the `writeOffResults` field and its nested fields.

  - In the request body of the "Create a payment" operation, added the `paymentGatewayNumber` field.

  - In the response body of each of the following operations, added the `paymentGatewayNumber` field.
      - Create a payment
      - Update a payment
      - Retrieve a payment
      - Transfer a payment
      - Apply a payment
      - Cancel a payment
      - Refund a payment
      - Unapply a payment
      - Refund a payment with auto-unapplying

  - In the response body of the "List payments" operation, added the `paymentGatewayNumber` nested field to the `payments` field.

- [Payment Runs](/v1-api-reference/api/payment-runs) - In the request body of the "Create a payment run" operation, added the `dataItems` field and its nested fields.

- [Settings](/v1-api-reference/api/settings) - Added the `copyBillingAttributesFromAccountForStandaloneInvoice` parameter to the `BillingRules` setting.

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- [Product Rate Plan Charges](/v1-api-reference/api/product-rate-plan-charges/) - In the request body of the "CRUD: Create a product rate plan charge" operation and the "CRUD: Update a product rate plan charge" operation, added the following missing fields:
  - `IsAllocationEligible`
  - `IsUnbilled`
  - `ProductCategory`
  - `ProductClass`
  - `ProductFamily`
  - `ProductLine`



## September 22, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/12_Zuora_Release_2023.10.R1" target="_blank">Zuora Release 2023.10.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Settings](/v1-api-reference/api/settings) - Made the following updates:
  - Added the support for GET and POST methods to the `AllSummaryStatementTemplates` setting.
  - Added the support for POST method to the `SummaryStatementTemplatesReplacements` setting.
  - Added the support for GET, PUT, and DELETE methods to the `SummaryStatementTemplate` setting.
  - Added the following parameters to the `AuditTrailSettings` setting:
      - `advancedSMTPServerSetting`
      - `calloutOption`
      - `campaignDefinition`
      - `communicationProfile`
      - `customEvent`
      - `customScheduledEvent`
      - `emailTemplate`
      - `notificationDefinition`
      - `oauth2Provider`

  - Added the following parameters to the `AllTaxEngines` setting:
      - `accessTokenUrl`
      - `authenticationType`
      - `clientId`
      - `clientSecret`
      - `description`
      - `networkOpenTimeoutInSeconds`
      - `networkReadTimeoutInSeconds`
      - `password`
      - `requestHeaders`
      - `requestTemplate`
      - `responseMappings`
      - `securityToken`
      - `sellerInfo`
      - `url`
      - `vendor`
      - `voidTemplate`
      - `voidUrl`

  - Added the `GlobalTaxHub` enum value to the `taxEngineType` parameter of the `AllTaxEngines` setting.

  - For each of the following settings:
      - `CreateGlobalTaxHubTaxEngine`
      - `GlobalTaxHubTaxEngine`

      Made the following updates:
      - Added the following parameters:
          - `securityToken`
          - `sellerInfo`
      - Added the `ConnectTaxEngine` enum value to the `taxEngineType` parameter.
      - Added the `PrivateToken` enum value to the `authenticationType` parameter.
      - Added the following enum values to the `vendor` parameter:
          - `Anrok`
          - `AvaTax`
          - `OneSource_SOAP`
          - `SovosTaxware`
          - `SureTax_REST`
          - `SureTax_SOAP`
          - `Taxamo`
          - `Vertex_REST`
          - `Vertex_SOAP`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json) and [200 response sample in CSV format](/settings-api/ListAllSettingsResponseSample.csv).




## September 15, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/13_Zuora_Release_2023.09.R2" target="_blank">Zuora Release 2023.09.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for the Prepaid with Drawdown feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Invoicing/JA_Advanced_Consumption_Billing/Prepaid_with_Drawdown" target="_blank">Prepaid with Drawdown</a> feature.

- [Prepaid with Drawdown](/v1-api-reference/api/prepaid-with-drawdown/) - Added a section called "Prepaid with Drawdown", containing the following operations:
    - Trigger fund rollover
    - Reverse fund rollover

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following changes:
  - In the response body of each of the following operations:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

      Added the following fields:
      - `ratePlans` > `ratePlanCharges` > `rolloverPeriodLength`
      - `offers` > `ratePlans` > `ratePlanCharges` > `rolloverPeriodLength`

  - In the response body of the "List subscriptions by account key" operation, added the following field:
      - `subscriptions` >`ratePlans` > `ratePlanCharges` > `rolloverPeriodLength`
      - `offers` > `ratePlans` > `ratePlanCharges` > `rolloverPeriodLength`

- [Product Rate Plan Charges](/v1-api-reference/api/product-rate-plan-charges/) - In the request body of each of the following operations, added the `rolloverPeriodLength` field:
  - CRUD: Create a product rate plan charge
  - CRUD: Update a product rate plan charge

- [Product Rate Plans](/v1-api-reference/api/product-rate-plans/) - In the response body of the "List all product rate plans of a product" operation, added the `productRatePlans` > `productRatePlanCharges` > `rolloverPeriodLength` field.

- [Orders](/v1-api-reference/api/orders/) - Made the following changes:
  - In the request body of each of the following operations:
      - Preview an order
      - Preview an order asynchronously
      - Create an order
      - Create an order asynchronously
      - Update an order

      Added the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverPeriodLength`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `rolloverPeriodLength`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverPeriodLength`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverPeriodLength`

  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Added the following fields:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverPeriodLength`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `rolloverPeriodLength`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverPeriodLength`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverPeriodLength`

  - In the response body of the "Retrieve an order" operation, added the following fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverPeriodLength`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `rolloverPeriodLength`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverPeriodLength`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverPeriodLength`

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- Renamed the "List all delivery adjustments of the latest version subscription" operation to "List all delivery adjustments of a subscription" and updated the description of the operation.
- In the request body of each of the following operations, updated the description of the `subscriptions` > `orderActions` > `changePlan` > `effectivePolicy` field for better clarity:
  - Create an order
  - Create an order asynchronously
  - Update an order
  - Preview an order
  - Preview an order asynchronously

- In the request body of the "Update a subscription" operation, updated the description of the `change` > `effectivePolicy` field for better clarity.

- In the response body of each of the following operations:
  - Retrieve a subscription by key
  - Retrieve a subscription by key and version

  Updated the description of each of the following fields to remove the WSDL version information:
  - `ratePlans` > `ratePlanCharges` > `isRollover`
  - `ratePlans` > `ratePlanCharges` > `rolloverApply`
  - `ratePlans` > `ratePlanCharges` > `rolloverPeriods`
  - `offers` > `ratePlans` > `ratePlanCharges` > `isRollover`
  - `offers` > `ratePlans` > `ratePlanCharges` > `rolloverApply`
  - `offers` > `ratePlans` > `ratePlanCharges` > `rolloverPeriods`

- In the response body of the "List subscriptions by account key" operation, added the following field:
  - `subscriptions` >`ratePlans` > `ratePlanCharges` > `isRollover`
  - `subscriptions` >`ratePlans` > `ratePlanCharges` > `rolloverApply`
  - `subscriptions` >`ratePlans` > `ratePlanCharges` > `rolloverPeriods`
  - `offers` > `ratePlans` > `ratePlanCharges` > `isRollover`
  - `offers` > `ratePlans` > `ratePlanCharges` > `rolloverApply`
  - `offers` > `ratePlans` > `ratePlanCharges` > `rolloverPeriods`

- In the response body of the "List all product rate plans of a product" operation, updated the description of each of the following fields to remove the WSDL version information:
  - `productRatePlans` > `productRatePlanCharges` > `isRollover`
  - `productRatePlans` > `productRatePlanCharges` > `rolloverApply`
  - `productRatePlans` > `productRatePlanCharges` > `rolloverPeriods`

- In the request body of each of the following operations:
  - Preview an order
  - Preview an order asynchronously
  - Create an order
  - Create an order asynchronously
  - Update an order

  Updated the description of each of the following fields to remove the WSDL version information:
  - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isRollover`
  - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isRollover`
  - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `isRollover`
  - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverApply`
  - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverApply`
  - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverApply`
  - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverPeriods`
  - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverPeriods`
  - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverPeriods`

- In the response body of each of the following operations:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

  Updated the description of each of the following fields to remove the WSDL version information:
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isRollover`
  - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isRollover`
  - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `isRollover`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverApply`
  - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverApply`
  - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverApply`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverPeriods`
  - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverPeriods`
  - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverPeriods`

- In the response body of the "Retrieve an order" operation, updated the description of each of the following fields to remove the WSDL version information:
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isRollover`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isRollover`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `isRollover`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverApply`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverApply`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverApply`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverPeriods`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverPeriods`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverPeriods`

- In the request body of the "Update subscription custom fields" operation, made the following updates:
  - Added the missing `chargeId` nested field to the `ratePlans` > `charges` field.
  - Added the missing description for the `ratePlans` > `charges` > `chargeNumber` field.



## September 11, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/14_Zuora_Release_2023.09.R1" target="_blank">Zuora Release 2023.09.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for the Asynchronous Payment Statuses feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Payments/Payment_Operations/DA_Electronic_Payment_Processing#Asynchronous_payment_flow" target="_blank">Asynchronous Payment Statuses</a> feature.

- [Payments](/v1-api-reference/api/payments) - In the response body of the "Create a payment" operation, updated the description of the `status` field for a system behavior change.

- [Payment Gateway Reconciliation](/v1-api-reference/api/payment-gateway-reconciliation) - Updated the description of each of the following operations for a system behavior change:
  - Settle a payment
  - Reject a payment
  - Reverse a payment

#### API updates for customer batches

The following items are the API updates specific to the limit on the number of batches.

- [Accounts](/v1-api-reference/api/accounts) - In the request body of each of the following operations, updated the description of the `batch` field to increase the limit on the number of account batches from 50 to 200:
  - Create an account
  - Update an account

- [Bill Run](/v1-api-reference/api/bill-run) - In the request body of the "Create a bill run" operation, updated the description of the `batches` field to increase the limit on the number of account batches from 50 to 200.

- [Billing Preview Run](/v1-api-reference/api/billing-preview-run/) - In the request body of the "Create a billing preview run" operation, updated the description of each of the following fields to increase the limit on the number of account batches from 50 to 200.
  - `batch`
  - `batches`

- [Payment Runs](/v1-api-reference/api/payment-runs) - In the request body of each of the following operations, updated the description of the `batch` field to increase the limit on the number of account batches from 50 to 200:
  - Create a payment run
  - Update a payment run

- [Orders](/v1-api-reference/api/orders) - In the request body of each of the following operations, updated the description of the `newAccount` > `batch` field to increase the limit on the number of account batches from 50 to 200:
  - Create an order
  - Create an order asynchronously
  - Update an order

- [Sign Up](/v1-api-reference/api/sign-up) - In the request body of each of the following operation, updated the description of the `accountData` > `batch` field to increase the limit on the number of account batches from 50 to 200.

The following updates applies to the Older API Reference:

- [Actions](/api-references/older-api/tag/Actions/) - In the request body of the "Subscribe" action, pdated the description of the `subscribes` > `Account` > `Batch` field to increase the limit on the number of account batches from 50 to 200.

- [Accounts](/api-references/older-api/tag/Accounts/) - In the request body of each of the following operations, updated the description of the `Batch` field to increase the limit on the number of account batches from 50 to 200:
  - CRUD: Create an account
  - CRUD: Update an account

- [Bill Run](/v1-api-reference/api/bill-run) - In the request body of the "Create a bill run" operation, updated the description of each of the following fields to increase the limit on the number of account batches from 50 to 200.
  - `Batch`
  - `Batches`



#### Other API updates

The following items are the other general API updates included in this release:

- [Catalog](/v1-api-reference/api/catalog) - Changed the endpoint of the "Retrieve a product" operation from `/v1/catalog/product/{product-key}` to `/v1/catalog/products/{product-key}`. Note that if you have integrated with the `/v1/catalog/product/{product-key}` endpoint, you do not need to make any update for this change because the previous endpoint is still supported for backward compatibility.

- [Accounts](/v1-api-reference/api/accounts) - In the request body of the "Create an account" operation, added the `screeningAmount` nested field to the `paymentMethod` field.

- [Payment Methods](/v1-api-reference/api/payment-methods) - Made the following updates:
  - Added the following operations:
      - Register an Apple Pay domain
      - List registered Apple Pay domains
      - Unregister an Apple Pay domain
  - In the request body of the "Create a payment method" operation, added the `screeningAmount` field.


- [Orders](/v1-api-reference/api/orders) - Made the following updates:
  - In the request body of each of the following operations, added the `screeningAmount` nested field to the `newAccount` > `paymentMethod`  field:
      - Create an order
      - Create an order asynchronously
      - Update an order
  - In the request body of each of the following operations, added a query parameter called `status`, which supports for listing orders by status:
      - List orders
      - List orders by subscription number
      - List orders of an invoice owner

- [Delivery Adjustments](/v1-api-reference/api/delivery-adjustments) - Made the following updates:
  - In the response body of the "List all delivery adjustments of the latest version subscription" operation, added the `debitMemoNumber` nested field to the `adjustments` field.
  - In the response body of the "Retrieve a delivery adjustment" operation, added the `debitMemoNumber` field.
  - In the source YAML file, added the `GETAdjustmentByIdResponseType` definition, and updated the response body schema reference of each of the following operations to this definition:
      - List all delivery adjustments of the latest version subscription
      - Retrieve a delivery adjustment

- [Invoices](/v1-api-reference/api/invoices) - Made the following updates:
  - In the request body of the “Create a standalone invoice” operation, updated the description of the `invoiceNumber` field to support purely numerical prefixes or prefixes ending with a number.
  - In the request body of the "Create standalone invoices" operation, updated the description of the `invoices` > `invoiceNumber` field to support purely numerical prefixes or prefixes ending with a number.

- [Price book items](https://developer.zuora.com/api-references/api/tag/Price-Book-Items/) - Updated the availability note for the following operations. Now you need to submit a request at Zuora Global Support to use these operations.
    - Create a price book item
    - Update a price book item
    - List all price book items
    - Retrieve a price book item
    - Delete a price book item

- [Settings](/v1-api-reference/api/settings) -  Made the following updates:
  - Updated the pattern value of the `batch` parameter of the `BatchAliases` setting.
  - Added the `templateNumber` parameter to each of the following settings:
      - `InvoiceTemplate`
      - `CreditMemoTemplate`
      - `DebitMemoTemplate`
      - `AllInvoiceTemplates`
      - `AllCreditMemoTemplates`
      - `AllDebitMemoTemplates`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).



### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- Renamed the "Adjustments" section to "Delivery Adjustments", and updated the name for each specific operation to be as follows:
  - Create a delivery adjustment
  - List all delivery adjustments of the latest version subscription
  - Retrieve a delivery adjustment
  - Preview a delivery adjustment
  - Cancel a delivery adjustment

- In the request body of the "Create a bill run" operation, added the missing `billRunType` field.

- In the response body of each of the following operations:
  - Submit an aggregate query job
  - Retrieve an aggregate query job
  - Cancel a running aggregate query job
  - Retrieve the last completed aggregate query job

  Made the following updates:
  - Removed the unsupported `pending` enum value from the `status` field.
  - Added the following missing enum values to the `status` field:
      - `submitted`
      - `error`
  - Updated the description of the `status` field for better clarity.
  - Removed the unsupported `cancelled` enum value from the `batches` > `status` field.
  - Added the following missing enum values to the `batches` > `status` field:
      - `submitted`
      - `deleted_notallowed`
  - Updated the description of the `batches` > `status` field for better clarity.




## September 1, 2023

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of each of the following operations, updated the description of the `effectiveDate` field:
  - Apply a payment
  - Unapply a payment

- In the request body of the "Refund a payment with auto-applying" operation, updated the description of the `totalAmount` field.

- In the request body of the "Retry failed payment schedule items" operation, updated the description of the `items` field.

- For the fields that are affected by [minor versions](/api-references/api/overview/#section/API-Versions/Minor-Version), updated the description for each field in all API operations.

- In the request body of the "CRUD: Update a payment" operation in the Older API Reference, removed the following unsupported fields:
  - `AccountId`
  - `Amount`
  - `PaymentMethodId`
  - `ReferenceId`
  - `Type`
  - `EffectiveDate`


## August 25, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/15_Zuora_Release_2023.08.R2" target="_blank">Zuora Release 2023.08.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Adjustments](/v1-api-reference/api/delivery-adjustments) - Made the following updates:
  - In the response body of each of the following operations, renamed the `adjustments` > `memoNumber` field to `adjustments` > `creditMemoNumber`:
      - Create an adjustment
      - List all adjustments of the latest version subscription
      - Preview an adjustment
  - In the response body of the "Retrieve an adjustment" operation, renamed the `memoNumber` field to `creditMemoNumber`.

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- Updated the description of the "Minor Version History" section to list all supported minor versions for bettery clarity.



## August 18, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/16_Zuora_Release_2023.08.R1" target="_blank">Zuora Release 2023.08.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Settings](/v1-api-reference/api/settings) - Added the following parameters to the `PaymentRules` setting:
  - `displayUnapplyWhenCancelPayment`
  - `enableUnapplyWhenCancelPayment`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

#### Doc updates for the Flexible Billing Attributes feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Bill_customers_at_subscription_level/Flexible_Billing_Attributes" target="_blank">Flexible Billing Attributes</a> feature.

- In the request body of each of the following operations:
  - Create an order
  - Create an order asynchronously
  - Update an order
  - Preview an order
  - Preview an order asynchronously

  Updated the description of each of the following fields for better clarity:
  - `subscriptions` > `orderActions` > `createSubscription` > `billToContactId`
  - `subscriptions` > `orderActions` > `createSubscription` > `paymentTerm`
  - `subscriptions` > `orderActions` > `createSubscription` > `invoiceTemplateId`
  - `subscriptions` > `orderActions` > `createSubscription` > `sequenceSetId`
  - `subscriptions` > `orderActions` > `createSubscription` > `soldToContactId`
  - `subscriptions` > `orderActions` > `ownerTransfer` > `billToContactId`
  - `subscriptions` > `orderActions` > `ownerTransfer` > `paymentTerm`
  - `subscriptions` > `orderActions` > `ownerTransfer` > `invoiceTemplateId`
  - `subscriptions` > `orderActions` > `ownerTransfer` > `sequenceSetId`
  - `subscriptions` > `orderActions` > `ownerTransfer` > `soldToContactId`
  - `subscriptions` > `orderActions` > `renewSubscription` > `billToContactId`
  - `subscriptions` > `orderActions` > `renewSubscription` > `paymentTerm`
  - `subscriptions` > `orderActions` > `renewSubscription` > `invoiceTemplateId`
  - `subscriptions` > `orderActions` > `renewSubscription` > `sequenceSetId`
  - `subscriptions` > `orderActions` > `renewSubscription` > `soldToContactId`
  - `subscriptions` > `orderActions` > `termsAndConditions` > `billToContactId`
  - `subscriptions` > `orderActions` > `termsAndConditions` > `paymentTerm`
  - `subscriptions` > `orderActions` > `termsAndConditions` > `invoiceTemplateId`
  - `subscriptions` > `orderActions` > `termsAndConditions` > `sequenceSetId`
  - `subscriptions` > `orderActions` > `termsAndConditions` > `soldToContactId`

- In the response body of each of the following operations:
  - Retrieve an order
  - List order metrics for an evergreen subscription (in the Older API Reference)

  Updated the description of each of the following fields for better clarity:
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `billToContactId`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `paymentTerm`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `invoiceTemplateId`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `sequenceSetId`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `soldToContactId`
  - `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `billToContactId`
  - `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `paymentTerm`
  - `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `invoiceTemplateId`
  - `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `sequenceSetId`
  - `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `soldToContactId`
  - `order` > `subscriptions` > `orderActions` > `renewSubscription` > `billToContactId`
  - `order` > `subscriptions` > `orderActions` > `renewSubscription` > `paymentTerm`
  - `order` > `subscriptions` > `orderActions` > `renewSubscription` > `invoiceTemplateId`
  - `order` > `subscriptions` > `orderActions` > `renewSubscription` > `sequenceSetId`
  - `order` > `subscriptions` > `orderActions` > `renewSubscription` > `soldToContactId`
  - `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `billToContactId`
  - `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `paymentTerm`
  - `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `invoiceTemplateId`
  - `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `sequenceSetId`
  - `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `soldToContactId`

- In the response body of each of the following operations:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

  Updated the description of each of the following fields for better clarity:
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `billToContactId`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `paymentTerm`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `invoiceTemplateId`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `sequenceSetId`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `soldToContactId`
  - `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `billToContactId`
  - `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `paymentTerm`
  - `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `invoiceTemplateId`
  - `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `sequenceSetId`
  - `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `soldToContactId`
  - `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `billToContactId`
  - `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `paymentTerm`
  - `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `invoiceTemplateId`
  - `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `sequenceSetId`
  - `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `soldToContactId`
  - `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `billToContactId`
  - `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `paymentTerm`
  - `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `invoiceTemplateId`
  - `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `sequenceSetId`
  - `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `soldToContactId`


- In the response body of each of the following operations:
  - Retrieve a subscription by key
  - Retrieve a subscription by key and version

  Updated the description of each of the following fields for better clarity:
  - `billToContact`
  - `paymentTerm`
  - `invoiceTemplateId`
  - `invoiceTemplateName`
  - `sequenceSetId`
  - `sequenceSetName`
  - `soldToContact`

- In the response body of the "List subscriptions by account key" operation, updated the description of each of the following fields for better clarity:
  - `subscriptions` > `billToContactId`
  - `subscriptions` > `paymentTerm`
  - `subscriptions` > `invoiceTemplateId`
  - `subscriptions` > `invoiceTemplateName`
  - `subscriptions` > `sequenceSetId`
  - `subscriptions` > `sequenceSetName`
  - `subscriptions` > `soldToContact`

The following updates applies to the Older API Reference:

- In the response body of the "CRUD: Retrieve a subscription" operation, updated the description of the `PaymentTerm` field for better clarity.

#### Other doc updates

The following items are the other general documentation updates included in this release:

- For each of the following operations, updated the description of the `SpecificListPriceBase` field to indicate that you must set the `X-Zuora-WSDL-Version` request header to `129` or later to use this field:
  - "CRUD: Create a product rate plan charge" operation: request body
  - "CRUD: Update a product rate plan charge" operation: request body
  - "CRUD: Retrieve a product rate plan charge" operation: 200 response body




## August 14, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/16_Zuora_Release_2023.08.R1" target="_blank">Zuora Release 2023.08.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Product Rate Plans](/v1-api-reference/api/product-rate-plans/) - Increased the character limit of the `Name` field from `100` to `255` in the following operations:
  - "CRUD: Create a product rate plan" operation: request body
  - "CRUD: Update a product rate plan" operation: request body
  - "CRUD: Retrieve a product rate plan" operation: 200 response body

- [Payments](/v1-api-reference/api/payments) - In the request body of the "Update a payment" operation, added the `gatewayState` field.

- [Accounts](/v1-api-reference/api/accounts) - Made the following updates:
  - In the response body of the "List payment methods of an account" operation, updated the description of each of the following fields for a system behavior change:
      - `returnedPaymentMethodType` > `appleCardType`
      - `returnedPaymentMethodType` > `googleCardType`
  - In the response body of the "Retrieve the default payment method of an account" operation, updated the description of each of the following fields for a system behavior change:
      - `appleCardType`
      - `googleCardType`

- [Payment Methods](/v1-api-reference/api/payment-methods) - Made the following updates:
  - In the response body of the "Retrieve a payment method" operation, updated the description of each of the following fields for a system behavior change:
      - `appleCardType`
      - `googleCardType`
  - In the request body of the "Update a payment method" operation, added the `accountKey` field.

- [Billing Preview Run](/v1-api-reference/api/billing-preview-run/) - For the "Create a billing preview run" operation, made the following updates for behavior enhancements:
  - In the description of the operation, stated that the maximum supported preview duration is 20 years.
  - In the request body, updated the description of the `targetDate` field by stating that the value for this field must be in _`YYYY-MM-DD`_ format.

- [Rate Plans](/api-references/older-api/tag/Rate-Plans/) - In the response body of the "CRUD: Retrieve a rate plan" operation, added the `OriginalRatePlanId` field. This change applies to the Older API Reference.

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- For each of the following operations:
  - "CRUD: Create a product rate plan charge" operation: request body
  - "CRUD: Update a product rate plan charge" operation: request body
  - "CRUD: Retrieve a product rate plan charge" operation: 200 response body

  Corrected the format for the enum values of each of the following fields:
  - `ApplyDiscountTo`
  - `BillCycleType`
  - `BillingPeriod`
  - `BillingPeriodAlignment`
  - `BillingTiming`
  - `ChargeModel`
  - `ChargeType` (not applicable for the "CRUD: Update a product rate plan charge" operation)
  - `DiscountLevel`
  - `EndDateCondition`
  - `OverageCalculationOption`
  - `OverageUnusedUnitsCreditOption`
  - `PriceChangeOption`
  - `RatingGroup`
  - `RevRecTriggerCondition`
  - `RevenueRecognitionRuleName`
  - `SmoothingModel`
  - `TaxMode`
  - `TriggerEvent`
  - `UpToPeriodsType`
  - `WeeklyBillCycleDay`

- In the response body of each of the "Query" and "QueryMore" actions, updated the description of each of the following fields for better clarity:
  - `done`
  - `queryLocator`
  - `records`
  - `size`

- In the request body of the "QueryMore" action, updated the description of the `queryLocator` field.




## August 4, 2023

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of the "Create an order" operation, updated the description of each of the following fields for better clarity:
  - `processingOptions` > `refund`
  - `processingOptions` > `writeOff`

- In the "API Health" section, updated the time limit to view the API data from 7 days to 14 days.

- In the "Refund a payment with auto-unapplying" operation, made the following changes:
  - Corrected the endpoint to `/v1/payments/{paymentKey}/refunds/unapply`.
  - Removed the unsupported `customRates` field from the request body and the request sample.

## July 31, 2023

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the response body of each of the following operations, removed the incorrect availability note from the description of the `orderLineItem` > `sequenceSetId` field:
  - Retrieve an order line item
  - Update order line items

- In the request body of the "Update an order line item" operation, removed the incorrect availability note from the description of the `sequenceSetId` field.

- In the request body of the "Update order line items" operation, removed the incorrect availability note from the description of the `orderLineItems` > `sequenceSetId` field.

- In the request body of each of the following operations, removed the incorrect availability note from the description of the `orderLineItems` > `sequenceSetId` field:
  - Create an order
  - Create an order asynchronously
  - Update an order
  - Preview an order
  - Preview an order asynchronously

- In the response body of each of the following operations, removed the incorrect availability note from the description of the `orders` > `orderLineItems` > `sequenceSetId` field:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

- In the response body of the "Retrieve an order" operation, removed the incorrect availability note from the description of the `order` > `orderLineItems` > `sequenceSetId` field.


## July 28, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/17_Zuora_Release_2023.07.R2" target="_blank">Zuora Release 2023.07.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Settings](/v1-api-reference/api/settings) -  Made the following updates:
  - Added the support for the GET and PUT methods to the `SafeHtmlSetting` setting.
  - Added the `enableCustomPaymentNumber` parameter to the `PaymentRules` setting.
  - Added the following parameters to the `BillingRules` setting:
      - `autoRenewalBillRun`
      - `catchUpBillRun`
      - `copyBillingAttributesFromAccount`
      - `customerHierarchy`
      - `recurringCreditProrationOption`
      - `taxPreview`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json) and [200 response sample in CSV format](/settings-api/ListAllSettingsResponseSample.csv).

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the description of the "Run a workflow" operation, emphasized that the following parameters cannot be used in the request body:
  - `controller`
  - `action`
  - `id`
  - `user_email`
  - `user_token`
  - `format`

- In the request body of the "Update a fulfillment" operation, removed the unsupported `fulfillment` field and corrected the location of each of the following fields:
  - `orderLineItemId`
  - `fulfillmentDate`
  - `fulfillmentType`
  - `quantity`
  - `state`
  - `billTargetDate`
  - `description`
  - `trackingNumber`
  - `carrier`
  - `fulfillmentSystem`
  - `fulfillmentLocation`
  - `externalId`
  - `excludeItemBillingFromRevenueAccounting`
  - `excludeItemBookingFromRevenueAccounting`
  - `customFields`


- In the request body of the "Update a fulfillment item" operation, removed the unsupported `fulfillmentItem` field and corrected the location of each of the following fields:
  - `customFields`
  - `description`
  - `itemIdentifier`

- In the request body of the "Create a draft custom payment method type" operation, fixed the broken link in the description of the `entityId` field.

- In the request body of each of the following operations, corrected the data type of the `orderLineItems` > `productRatePlanChargeId` field:
  - Create an order
  - Create an order asynchronously
  - Update an order
  - Preview an order
  - Preview an order asynchronously

- In the response body of each of the following operations, corrected the data type of the `orders` > `orderLineItems` > `productRatePlanChargeId` field:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

- In the response body of the "Retrieve an order" operation, corrected the data type of the `order` > `orderLineItems` > `productRatePlanChargeId` field.

- In the request body of the "Create an account" operation, removed the `default` property from the `invoiceCollect` field and updated the field description for better clarity.

- In the table of the "API Names for Zuora Objects" section, added the following missing objects and their corresponding API names:
  - Billing Preview Run
  - Invoice Schedule Item


## July 24, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/17_Zuora_Release_2023.07.R2" target="_blank">Zuora Release 2023.07.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for the Reseller Account feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Manage_customer_accounts/AAA_Overview_of_customer_accounts/Reseller_Account" target="_blank">Reseller Account</a> feature.

- [Accounts](/v1-api-reference/api/accounts) - Made the following updates:
  - In the request body of each of the following operations, added the `partnerAccount` field:
      - Create an account
      - Update an account
  - In the response body of each of the "Retrieve an account" and "Retrieve an account summary" operations, added the following fields:
      - `basicInfo` > `partnerAccount`
      - `basicInfo` > `lastMetricsUpdate`

- [Orders](/v1-api-reference/api/orders) - In the request body of each of the following operation, added the `partnerAccount` nested field to the `newAccount` field:
  - Create an order
  - Create an order asynchronously
  - Update an order

The following updates applies to the Older API Reference:
- [Accounts](/v1-api-reference/api/accounts) - Made the following updates:
  - For each of the following operations, added the `X-Zuora-WSDL-Version` request header parameter and the `PartnerAccount` field in the request body:
      - CRUD: Create an account
      - CRUD: Update an account
  - For the "CRUD: Retrieve an account" operation, added the `X-Zuora-WSDL-Version` request header parameter and the following fields in the response body:
      - `PartnerAccount`
      - `LastMetricsUpdate`

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the response body of the "List stored credential profiles of a payment method" operation, corrected the type of the `profiles` field to `array`.



## July 18, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/17_Zuora_Release_2023.07.R2" target="_blank">Zuora Release 2023.07.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for automatic creation of stored credential profiles

The following items are the API updates specific to the support for creating stored credential profiles automatically when creating payment methods.

- [Payment Methods](/v1-api-reference/api/payment-methods) - In the request body of each of the following operations:
  - Create a payment method
  - Create an Apple Pay payment method

  Added the support for the automatic creation of stored credential profiles to the description of each of the following fields:
  - `mitProfileAction`
  - `mitProfileType`
  - `mitConsentAgreementSrc`

- [Accounts](/v1-api-reference/api/accounts) - In the request body of the "Create an account" operation, added the support for the automatic creation of stored credential profiles to the description of each of the following fields:
  - `paymentMethod` > `mitProfileAction`
  - `paymentMethod` > `mitProfileType`
  - `paymentMethod` > `mitConsentAgreementSrc`

- [Orders](/v1-api-reference/api/orders) - In the request body of each of the following operations:
  - Create an order
  - Create an order asynchronously

  Added the support for the automatic creation of stored credential profiles to the description of each of the following fields:
  - `newAccount` > `paymentMethod` > `mitProfileAction`
  - `newAccount` > `paymentMethod` > `mitProfileType`
  - `newAccount` > `paymentMethod` > `mitConsentAgreementSrc`
  - `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `paymentMethod` > `mitProfileAction`
  - `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `paymentMethod` > `mitProfileType`
  - `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `paymentMethod` > `mitConsentAgreementSrc`

- [Sign Up](/v1-api-reference/api/sign-up) - In the request body of the "Sign up" operation, added the support for the automatic creation of stored credential profiles to the description of each of the following fields:
  - `accountData` > `paymentMethod` > `mitProfileAction`
  - `accountData` > `paymentMethod` > `mitProfileType`
  - `accountData` > `paymentMethod` > `mitConsentAgreementSrc`

The following updates apply to the Older API Reference:

- [Actions](/v1-api-reference/api/actions) - In the request body of the "Subscribe" action, added the support for the automatic creation of stored credential profiles to the description of each of the following fields:
  - `subscribes` > `PaymentMethod` > `MitProfileAction`
  - `subscribes` > `PaymentMethod` > `MitProfileType`
  - `subscribes` > `PaymentMethod` > `MitConsentAgreementSrc`

- [Payment Methods](/api-references/older-api/tag/payment-methods/) - Made the following updates:
  - In the request body of the "Create a credit card payment method" operation, added the support for the automatic creation of stored credential profiles to the description of each of the following fields:
      - `mitProfileAction`
      - `mitProfileType`
      - `mitConsentAgreementSrc`
  - In the request body of the "CRUD: Create a payment method" operation, added the support for the automatic creation of stored credential profiles to the description of each of the following fields:
      - `MitProfileAction`
      - `MitProfileType`
      - `MitConsentAgreementSrc`

#### API updates for natural keys of product catelog objects

The following natural keys are removed from several operations in this release due to some issues:

- [Products](/v1-api-reference/api/products/) - In the 200 response body of the "CRUD: Retrieve a product" operation, removed the `ProductNumber` field.

- [Product Rate Plans](/v1-api-reference/api/product-rate-plans/) - In the 200 response body of the "CRUD: Retrieve a product rate plan" operation, removed the `ProductRatePlanNumber` field.

- [Product Rate Plan Charges](/v1-api-reference/api/product-rate-plan-charges/) - In the 200 response body of the "CRUD: Retrieve a product rate plan charge" operation, removed the `ProductRatePlanChargeNumber` field.

The following natural keys are added:

- [Orders](/v1-api-reference/api/orders) - Made the following updates:

  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Update an order

      Added the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `subscriptions` > `orderActions` > `addProduct` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `subscriptions` > `orderActions` > `updateProduct` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `updateProduct` > `subscriptionRatePlanNumber`
      - `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates` > `subscriptionRatePlanNumber`
      - `subscriptions` > `orderActions` > `removeProduct` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `removeProduct` > `subscriptionRatePlanNumber`
      - `subscriptions` > `orderActions` > `changePlan` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `changePlan` > `subscriptionRatePlanNumber`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productRatePlanChargeNumber`

  - In the request body of each of the following operations:
      - Preview an order
      - Preview an order asynchronously

      Added the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `subscriptions` > `orderActions` > `addProduct` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `subscriptions` > `orderActions` > `updateProduct` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `updateProduct` > `subscriptionRatePlanNumber`
      - `subscriptions` > `orderActions` > `removeProduct` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `removeProduct` > `subscriptionRatePlanNumber`
      - `subscriptions` > `orderActions` > `changePlan` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `changePlan` > `subscriptionRatePlanNumber`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `productRatePlanNumber`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productRatePlanChargeNumber`

  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Added the following fields:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `productRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `productRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `productRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `productRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `productRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `orders` > `subscriptions` > `orderActions` > `updateProduct` > `productRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `updateProduct` > `subscriptionRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates` > `productRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates` > `subscriptionRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `removeProduct` > `productRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `removeProduct` > `subscriptionRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `productRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `subscriptionRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `productRatePlanNumber`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productRatePlanChargeNumber`

  - In the response body of the "Retrieve an order" operation, added the following fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `productRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `productRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `productRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `ratePlanOverrides` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `productRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `productRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `order` > `subscriptions` > `orderActions` > `updateProduct` > `productRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `updateProduct` > `subscriptionRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates` > `productRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates` > `subscriptionRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `removeProduct` > `productRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `removeProduct` > `subscriptionRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `productRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `subscriptionRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `productRatePlanNumber`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `productRatePlanChargeNumber`

#### API updates for the Billing Schedule feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Billing_Schedule/Billing_Schedule_overview" target="_blank">Billing Schedule</a> feature.

- [Invoice Schedules](/v1-api-reference/api/invoice-schedules) - Made the following updates:
  - In the request body of each of the following operations:
      - Create an invoice schedule
      - Update an invoice schedule

      Added the following fields for supporting custom fields:
      - _`property name*`_
      - `scheduleItems` > _`property name*`_

  - In the response body of each of the following operations:
      - Create an invoice schedule
      - Update an invoice schedule
      - Retrieve an invoice schedule
      - Pause an invoice schedule
      - Resume an invoice schedule

      Added the following fields for supporting custom fields:
      - _`property name*`_
      - `scheduleItems` > _`property name*`_

#### API updates for the Annual List Price feature

The following items are the API updates specific to the General Availability announcement of the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Build_products_and_prices/Set_up_recurring_charges_with_annual_list_price/Overview_of_Annual_List_Pricee" target="_blank">Annual List Price</a> feature.

- [Accounts](/v1-api-reference/api/accounts) - In the request body of the "Create an account" operation, removed the availability note from the description of the `subscription` > `subscribeToRatePlans` > `chargeOverrides` > `listPriceBase` field.

- [Offers](https://developer.zuora.com/api-references/api/tag/Offers/) - Made the following updates:
  - In the request body of the "Create an offer" operation, removed the availability note from the description of the `productRatePlans` > `chargeOverrides` > `prices` > `listPriceBase` field.
  - In the response body of the "Retrieve an offer" operation, removed the availability note from the description of the `productRatePlanCharges` > `priceBookItems` > `listPriceBase` field.

- [Price Book Items](https://developer.zuora.com/api-references/api/tag/Price-Book-Items/) - Made the following updates:
  - In the response body of the "List price book items" operation, removed the availability note from the description of the `offers` > `productRatePlanCharges` > `priceBookItems` > `listPriceBase` field.

  - In the request body and response body of each of the following operations, removed the availability note from the description of the `listPriceBase` field:
      - Create a price book item
      - Update a price book item
  - In the response body of the "Retrieve a price book item" operation, removed the availability note from the description of the `listPriceBase` field.
  - In the response body of the "List price book items" operation, removed the availability note from the description of the `priceBookItems` > `listPriceBase` field.

- [Orders](/v1-api-reference/api/orders) - Made the following updates:
  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Preview an order
      - Preview an order asynchronously
      - Update an order

      Removed the availability note from the description of each of the following fields:
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`


  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Update an order

      Removed the availability note from the description of each of the following fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`


  - In the response body of each of the following operations:
      - Retrieve an order
      - List order metrics for an evergreen subscription (in the Older API Reference)

      Removed the availability note from the description of each of the following fields:
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`


  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Removed the availability note from the description of each of the following fields:
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`


- [Subscriptions](/v1-api-reference/api/subscriptions) - Made the following updates:
  - In the request body of each of the following operations:
      - Create a subscription
      - Preview a subscription

      Removed the availability note from the description of the `subscribeToRatePlans` > `chargeOverrides` > `listPriceBase` field.

  - In the request body of the "Update a subscription" operation, removed the availability note from the description of each of the following fields:
      - `add` > `chargeOverrides` > `listPriceBase`
      - `change` > `chargeOverrides` > `listPriceBase`


  - In the response body of each of the following operations:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

      Removed the availability note from the description of the `ratePlans` > `ratePlanCharges` > `listPriceBase` field.

  - In the response body of the "List subscriptions by account key" operation, removed the availability note from the description of the `subscriptions` > `ratePlans` > `ratePlanCharges` > `listPriceBase` field.

- [Product Rate Plan Charges](/v1-api-reference/api/product-rate-plan-charges) - Made the following updates:
  - In the request body of each of the following operations, removed the availability note from the description of the `ListPriceBase` field:
      - CRUD: Create a product rate plan charge
      - CRUD: Update a product rate plan charge

  - In the response body of the "CRUD: Retrieve a product rate plan charge" operation, removed the availability note from the description of the `ListPriceBase` field.


- [Product Rate Plans](/v1-api-reference/api/product-rate-plans) - In the response body of the "List all product rate plans of a product" operation, removed the availability note from the description of each of the `productRatePlans` > `productRatePlanCharges` > `listPriceBase` field.


- [Rate Plans](/v1-api-reference/api/rate-plans) - In the response body of the "Retrieve a rate plan" operation, removed the availability note from the description of each of the following fields:
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`


The following updates applies to the Older API Reference:

- [Actions](/api-references/older-api/tag/Actions/) - Made the following updates:
  - In the request body of the "Amend" action, removed the availability note from the description of the `requests` > `Amendments` > `RatePlanData` > `RatePlanChargeData` > `RatePlanCharge` > `ListPriceBase` field.

  - In the request body of the "Subscribe" action, removed the availability note from the description of the `subscribes` > `SubscriptionData` > `RatePlanData` > `RatePlanChargeData` > `RatePlanCharge` > `ListPriceBase` field.

- [Rate Plan Charges](/api-references/older-api/tag/Rate-Plan-Charges/) - Made the following updates:
    - In the request body of the "CRUD: Update a rate plan charge" operation, removed the availability note from the description of each of the `ListPriceBase` field.
    - In the response body of the "CRUD: Retrieve a rate plan charge" operation, removed the availability note from the description of each of the `ListPriceBase` field.


#### Other API updates

The following items are the other general API updates included in this release:

- [Adjustments](/v1-api-reference/api/delivery-adjustments) - Made the following updates:
  - In the request body of the "Create an adjustment" operation, added the `exclusion` and `accountNumber` fields.
  - In the request body of each of the following operations, changed the `subscriptionNumber` field from required to optional:
      - Create an adjustment
      - Preview an adjustment
  - In the response body of each of the following operations, renamed the `id` nested field to `adjustmentId` for the `adjustments` and `ineligibleAdjustments` fields:
      - Create an adjustment
      - Preview an adjustment
  - In the response body of the "List all adjustments of the latest version subscription" operation, renamed the `id` nested field to `adjustmentId` for the `adjustments` field.
  - In the response body of the "Retrieve an adjustment" operation, renamed the `id` field to `adjustmentId`.
  - In the response body of each of the following operations:
      - Create an adjustment
      - Preview an adjustment

      Updated the description of each of the following fields:
      - `adjustments` > `status`
      - `ineligibleAdjustments` > `status`
  - In the response body of the "List all adjustments of the latest version subscription" operation, updated the description of the `adjustments` > `status` field.
  - In the response body of the "Retrieve an adjustment" operation, updated the description of the `status` field.
  - In the request body of each of the following operations:
      - Create an adjustment
      - Preview an adjustment

      Updated the description of each of the following fields:
      - `adjustments` > `billingDate`
      - `ineligibleAdjustments` > `billingDate`
  - In the response body of the "List all adjustments of the latest version subscription" operation, updated the description of the `adjustments` > `billingDate` field.
  - In the response body of the "Retrieve an adjustment" operation, updated the description of the `billingDate` field.

- [Accounts](/v1-api-reference/api/accounts) - Made the following updates:
  - In the request body of each of the following operations:
      - Create an account
      - Update an account

      Made the following changes:
      - Added the `profileNumber` field.
      - Updated the description of the `communicationProfileId` field for the compatibility with the `profileNumber` field.

  - In the response body of the "Retrieve an account" operation, made the following changes:
      - Added the `basicInfo` > `profileNumber` field.
      - Updated the description of the `basicInfo` > `communicationProfileId` field for the compatibility with the `profileNumber` field.

- [API Health](/v1-api-reference/api/api-health) - Added a section called "API Health", containing the "Retrieve API volume summary records" operation.

- [Bill Run Health](/v1-api-reference/api/bill-run-health) - Added a section called "Bill Run Health", containing the "Retrieve billing documents volume summary records" operation.

- [Electronic Payments Health](/v1-api-reference/api/electronic-payments-health) - Added a section called "Electronic Payments Health", containing the "Retrieve payments volume summary records" operation.

- [Payment Method Updater](/v1-api-reference/api/payment-method-updater/) - Added a section called "Payment Method Updater", containing the following operations:
    - Create a Payment Method Updater batch asynchronously
    - List Payment Method Updater instances

- [Custom Object Jobs](/v1-api-reference/api/custom-object-jobs) - Made the following updates:
  - Updated the description of the "Custom Object Jobs" section to add the support for updating custom object records in bulk.
  - Updated the description of the "Submit a custom object bulk job" operation to add the support for updating custom object records in bulk.
  - In the request body of the "Submit a custom object bulk job" operation, added the `update` enum value to the `operation` field.
  - In the 200 response body of each of the following operations, added the `update` enum value to the `operation` field:
      - Submit a custom object bulk job
      - Retrieve a custom object bulk job
      - Upload a file for a custom object bulk job
      - Cancel a custom object bulk job
  - In the 200 response body of the "List all custom object bulk jobs" operation, added the `update` enum value to the `jobs` > `operation` field:

- [Bill Run](/v1-api-reference/api/bill-run) - In the description of the "Delete a bill run", added support for deleting bill runs in Error status.

- [Invoices](/v1-api-reference/api/invoices) - Made the following updates:
  - In the request body of the "Create a standalone invoice" operation, added the `invoiceNumber` field to 32 characters.
  - In the request body of the "Create standalone invoices" operation, increased the character limit on the `invoices` > `invoiceNumber` field to 32 characters.

- [Order Line Items](/v1-api-reference/api/order-line-items) - Made the following updates:

  - In the response body of each of the following operations, added the `orderLineItem` > `sequenceSetId` field:
      - Retrieve an order line item
      - Update order line items

  - In the request body of the "Update an order line item" operation, added the `sequenceSetId` field.

  - In the request body of the "Update order line items" operation, added the `orderLineItems` > `sequenceSetId` field.


- [Orders](/v1-api-reference/api/orders) - Made the following updates:

  - In the request body of each of the following operations, added the `orderLineItems` > `sequenceSetId` field:
      - Create an order
      - Create an order asynchronously
      - Update an order

  - In the request body of each of the following operations, added the `orderLineItems` > `sequenceSetId` field:
      - Preview an order
      - Preview an order asynchronously

  - In the response body of each of the following operations, added the `orders` > `orderLineItem` > `sequenceSetId` field:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

  - In the response body of the "Retrieve an order" operation, added the `order` > `orderLineItem` > `sequenceSetId` field.

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of the "Preview an order" operation, added the following missing fields:
  - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isAllocationEligible`
  - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isUnbilled`
  - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
  - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
  - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isAllocationEligible`
  - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isUnbilled`
  - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
  - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
  - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isAllocationEligible`
  - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isUnbilled`

- In the request body of the "Preview an order asynchronously“ operation, added the following missing fields:
  - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isAllocationEligible`
  - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isUnbilled`
  - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
  - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
  - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isAllocationEligible`
  - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isUnbilled`
  - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBookingFromRevenueAccounting`
  - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `excludeItemBillingFromRevenueAccounting`
  - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isAllocationEligible`
  - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isUnbilled`

- In the request body and response body of the Payment Schedules operations, corrected the description of the `paymentOption` field.

- In the request body and response body of the "Create a payment" operation, corrected the description of the `paymentOption` field.

- In the response body of the "List payments" operation, corrected the description of the `payments` > `paymentOption` field.



## July 7, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/18_Zuora_Release_2023.07.R1" target="_blank">Zuora Release 2023.07.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Adjustments](/v1-api-reference/api/delivery-adjustments) - Made the following updates:
  - In the request body of each of the following operations, removed the `billingDate` field:
      - Create an adjustment
      - Preview an adjustment
  - In the response body of each of the following operations, added the `memoNumber` nested field to the `adjustments` field:
      - Create an adjustment
      - List all adjustments of the latest version subscription
      - Preview an adjustment
  - In the response body of the "Retrieve an adjustment" operation, added the `memoNumber` field.
  - In the response body of the "Cancel an adjustment" operation, added the `debitMemoNumber` field.

- [Payment Authorization](/v1-api-reference/api/payment-authorization) - In the description of each of the following operations, added SaferPay as a supported payment gateway integration:
  - Create authorization
  - Cancel authorization

- [Order Line Items](/v1-api-reference/api/order-line-items) - Made the following updates:

  - In the response body of each of the following operations:
      - Retrieve an order line item
      - Update order line items

      Added the following fields:
      - `orderLineItem` > `isAllocationEligible`
      - `orderLineItem` > `isUnbilled`

  - In the request body of the "Update an order line item" operation, added the following fields:
      - `isAllocationEligible`
      - `isUnbilled`

  - In the request body of the "Update order line items" operation, added the following fields:
      - `orderLineItems` > `isAllocationEligible`
      - `orderLineItems` > `isUnbilled`

- [Orders](/v1-api-reference/api/orders) - Made the following updates:

  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Update an order

      Added the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isAllocationEligible`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isUnbilled`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `isAllocationEligible`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `isUnbilled`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isAllocationEligible`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isUnbilled`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isAllocationEligible`
      - `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isUnbilled`
      - `orderLineItems` > `isAllocationEligible`
      - `orderLineItems` > `isUnbilled`

  - In the request body of each of the following operations:
      - Preview an order
      - Preview an order asynchronously

      Added the following fields:
      - `orderLineItems` > `isAllocationEligible`
      - `orderLineItems` > `isUnbilled`

  - In the response body of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Added the following fields:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isAllocationEligible`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isUnbilled`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `isAllocationEligible`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `isUnbilled`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isAllocationEligible`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isUnbilled`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isAllocationEligible`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isUnbilled`
      - `orders` > `orderLineItem` > `isAllocationEligible`
      - `orders` > `orderLineItem` > `isUnbilled`

  - In the response body of the "Retrieve an order" operation, added the following fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isAllocationEligible`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isUnbilled`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `isAllocationEligible`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `isUnbilled`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isAllocationEligible`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isUnbilled`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isAllocationEligible`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `isUnbilled`
      - `order` > `orderLineItem` > `isAllocationEligible`
      - `order` > `orderLineItem` > `isUnbilled`

- [Product Rate Plans](/v1-api-reference/api/product-rate-plans) - In the response body of the "List all product rate plans of a product" operation, added the following fields:
  - `productRatePlans` > `productRatePlanCharges` > `isAllocationEligible`
  - `productRatePlans` > `productRatePlanCharges` > `isUnbilled`

- [Subscriptions](/v1-api-reference/api/subscriptions) - Made the following updates:

  - In the request body of each of the following operations:
      - Preview a subscription
      - Create a subscription

      Added the following fields:
      - `subscribeToRatePlans` > `chargeOverrides` > `isAllocationEligible`
      - `subscribeToRatePlans` > `chargeOverrides` > `isUnbilled`
      - `subscribeToRatePlans` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `subscribeToRatePlans` > `productRatePlanNumber`

  - In the request body of the "Update a subscription" operation, added the following fields:
      - `add` > `chargeOverrides` > `isAllocationEligible`
      - `add` > `chargeOverrides` > `isUnbilled`
      - `add` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `add` > `productRatePlanNumber`
      - `change` > `chargeOverrides` > `productRatePlanChargeNumber`
      - `change` > `productRatePlanNumber`
      - `remove` > `subscriptionRatePlanNumber`
      - `remove` > `productRatePlanNumber`
      - `update` > `subscriptionRatePlanNumber`
      - `update` > `productRatePlanNumber`

  - In the response body of the "List subscriptions by account key" operation, added the following fields:
      - `subscriptions` > `ratePlans` > `ratePlanCharges` >  `isAllocationEligible`
      - `subscriptions` > `ratePlans` > `ratePlanCharges` >  `isUnbilled`
      - `subscriptions` > `ratePlans` > `ratePlanCharges` >  `productCategory`
      - `subscriptions` > `ratePlans` > `ratePlanCharges` >  `productClass`
      - `subscriptions` > `ratePlans` > `ratePlanCharges` >  `productFamily`
      - `subscriptions` > `ratePlans` > `ratePlanCharges` >  `productLine`

  - In the response body of each of the following operations:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

      Added the following fields:
      - `ratePlans` > `ratePlanCharges` >  `isAllocationEligible`
      - `ratePlans` > `ratePlanCharges` >  `isUnbilled`
      - `ratePlans` > `ratePlanCharges` >  `productCategory`
      - `ratePlans` > `ratePlanCharges` >  `productClass`
      - `ratePlans` > `ratePlanCharges` >  `productFamily`
      - `ratePlans` > `ratePlanCharges` >  `productLine`

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the "Payment Schedules" section, updated the description of all operations for the self-service interface.
- In the "Adjustments" section, updated the description of this section and all operations for the self-service interface.
- Updated the description of the "Create a payment" operation for the self-service interface.


## June 30, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/19_Zuora_Release_2023.06.R2" target="_blank">Zuora Release 2023.06.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Orders](/v1-api-reference/api/orders) - In the request body of each of the following operations, added the `Specific_Days` enum value to the `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `billing` > `billingPeriod` field:
  - Create an order
  - Create an order asynchronously

- [Product Rate Plan Charges](/v1-api-reference/api/product-rate-plan-charges) - In the request body of each of the following operations, added the `Specific Days` enum value to the `BillingPeriod` field:
  - CRUD: Create a product rate plan charge
  - CRUD: Update a product rate plan charge

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the description of the "Create a payment method" operation, removed the Early Adopter note for each of the following features because these features are generally available:
  - Google Pay on Adyen Integration v2.0
  - Google Pay on Chase Paymentech Orbital Gateway
  - PayPal Commerce Platform payment gateway integration


## June 26, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/19_Zuora_Release_2023.06.R2" target="_blank">Zuora Release 2023.06.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for natural key support of product catalog objects

To support natural keys in product catalog, the following fields are added to different objects, which involves various operations.

- [Products](/v1-api-reference/api/products/) - Made the following updates:
  - In the 200 response body of the "CRUD: Retrieve a product" operation, added the `ProductNumber` field.
  - In the request body of the following operations, added the `ProductNumber` field:
      - CRUD: Create a product
      - CRUD: Update a product
- [Catalog](/v1-api-reference/api/catalog) - Made the following updates:
  - In the 200 response body of the "List all products" operation, added the `products` > `productNumber` field.
  - In the 200 response body of the "Retrieve a product" operation, added the `productNumber` field.
- [Product Rate Plans](/v1-api-reference/api/product-rate-plans/) - Made the following updates:
  - In the 200 response body of the "List all product rate plans of a product" operation, added the `productRatePlans` > `productRatePlanNumber` field.
  - In the 200 response body of the "Retrieve a product rate plan by ID" operation, added the `productRatePlanNumber` field.
  - In the 200 response body of the "CRUD: Retrieve a product rate plan" operation, added the `ProductRatePlanNumber` field.
  - In the request body of the following operations, added the `ProductRatePlanNumber` field:
      - CRUD: Create a product rate plan
      - CRUD: Update a product rate plan
- [Product Rate Plan Charges](/v1-api-reference/api/product-rate-plan-charges/) - Made the following updates:
  - In the 200 response body of the "CRUD: Retrieve a product rate plan charge" operation, added the `ProductRatePlanChargeNumber` field.
  - In the request body of the following operations, added the `ProductRatePlanChargeNumber` field:
      - CRUD: Create a product rate plan charge
      - CRUD: Update a product rate plan charge

#### Other API updates

The following items are the other general API updates included in this release:

- [Contacts](/v1-api-reference/api/contacts/) - Added the following operations:
  - Create a contact
  - Retrieve a contact
  - Update a contact
  - Delete a contact

- [Custom Event Triggers](/v1-api-reference/api/custom-event-triggers/) - In the description of the "Create an event trigger" operation, added `UpdaterDetail` to the supported base object list.

- [Custom Object Definitions](/v1-api-reference/api/custom-object-definitions/) - Made the following updates:
  - Updated the description of the "Create custom object definitions" operation to clarify the maximum number of multiselect options.
  - In the 200 response body of each of the following operations:
      - List custom object definitions
      - Create custom object definitions

      Made the following updates:
      - Updated the description of the `definitions` > _`property name*`_ > `schema` > `properties` > _`property name*`_ > `maxLength` field for better clarity.
      - Added the following fields:
          - `definitions` > _`property name*`_ > `schema` > `properties` > _`property name*`_ > `displayName`
          - `definitions` > _`property name*`_ > `schema` > `properties` > _`property name*`_ > `multiselect`

  - In the request body of the "Create custom object definitions" operation, made the following updates:
      - Updated the description of the `definitions` > _`property name*`_ > `properties` > _`property name*`_ > `maxLength` field for better clarity.
      - Added the following fields:
          - `definitions` > _`property name*`_ > `properties` > _`property name*`_ > `displayName`
          - `definitions` > _`property name*`_ > `properties` > _`property name*`_ > `multiselect`

  - In the 200 response body of the "Retrieve a custom object definition" operation, made the following updates:
      - Updated the description of the `schema` > `properties` > _`property name*`_ > `maxLength` field for better clarity.
      - Added the following fields:
          - `schema` > `properties` > _`property name*`_ > `displayName`
          - `schema` > `properties` > _`property name*`_ > `multiselect`

  - In the request body and 200 response body of the "Update a custom object definition" operation, made the following updates:
      - Updated the description of the `actions` > `field` > `definition` > `maxLength` field for better clarity.
      - Added the following fields:
          - `actions` > `field` > `definition` > `displayName`
          - `actions` > `field` > `definition` > `multiselect`

- [Describe](/v1-api-reference/api/describe/) - For the "Describe an object" operation, added a query parameter called `showCurrencyConversionInformation`, which gives additional information about currency conversion.

- [Payments](/v1-api-reference/api/payments/) - Added an operation called "Refund a payment with auto-unapplying".

- [Invoice Schedules](/v1-api-reference/api/invoice-schedules) - In the request body of the "Create an invoice schedule" operation, added support for specifying blank dates to the description of the `scheduleItems` > `runDate` field.

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of the "Create an order" operation, updated the description of each of the following fields for better clarity:
  - `processingOptions` > `refund`
  - `processingOptions` > `writeOff`

- Updated the description of each of the following operations:
  - Preview an order
  - Preview an order asynchronously
  - Create an order
  - Create an order asynchronously

- In the description of the "Update an account" operation, corrected the information about the email addresses and email delivery preference.

- Updated the description of the "Upload a file for a custom object bulk job" operation for better clarity.

- Relocated the following operations from the REST API Reference to the Older API Reference:
  - CRUD: Create a contact
  - CRUD: Retrieve a contact
  - CRUD: Update a contact
  - CRUD: Delete a contact

## June 16, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/20_Zuora_Release_2023.06.R1" target="_blank">Zuora Release 2023.06.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Payment Methods](/v1-api-reference/api/payment-methods) - In the request body of the "Create an Apple Pay payment method" operation, updated the description of each of the following fields by adding the support for Stripe v2 payment gateway integration:
  - `mitConsentAgreementSrc`
  - `mitProfileAction`
  - `mitProfileType`

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of each of the following operations, added the missing `orderDate` field:

  - Renew a subscription
  - Cancel a subscription
  - Suspend a subscription
  - Resume a subscription

- In the description of each of the following operations, added the missing description for the billing preview behavior:

  - Preview an order
  - Preview an order asynchronously

- In the request body and response body of each of the following operations, renamed the `consolidateBillingDocuments` field to `invoiceSeparately`:
  - Create an invoice schedule
  - Update an invoice schedule

- In the response body of each of the following operations, renamed the `consolidateBillingDocuments` field to `invoiceSeparately`:
  - Retrieve an invoice schedule
  - Pause an invoice schedule
  - Resume an invoice schedule



## June 9, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/21_Zuora_Release_2023.06.R1" target="_blank">Zuora Release 2023.06.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Payment Methods](/v1-api-reference/api/payment-methods) - Added an operation called "Create a payment session" for Apple Pay integration.

- [Settings](/v1-api-reference/api/settings) - Added the following parameters to the `DocPrefix` setting:
  - `refundPrefix`
  - `paymentPrefix`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of the "Cancel a subscription" operation, corrected the `invoiceCollect` field from required to version-controlled.

- In the "Submit an aggregate query job" operation, corrected the endpoint to `/v1/batch-query/`.

- In the request body and response body of the "Submit an aggregate query job" operation, added the following missing fields:
  - `queries` > `deleted`
  - `notifyUrl`
  - `incrementalTime`
  - `offset`

- In the response body of each of the following operations, added the missing `batches` > `full` field.
  - Submit an aggregate query job
  - Retrieve an aggregate query job
  - Retrieve the last completed aggregate query job

- In the description of the "Create a billing preview run" operation, clarified that billing preview results will be stored in the system for only 180 days.



## June 2, 2023

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- Added a section called [Aggregate Queries](/v1-api-reference/api/aggregate-queries), containing the following operations. Previously, such information was stored in the <a href="https://knowledgecenter.zuora.com/Zuora_Central_Platform/API/AB_Aggregate_Query_API" target="_blank">Aggregate Query API</a> section in the Knowledge Center.
    - Submit an aggregate query job
  - Retrieve an aggregate query job
  - Cancel a running aggregate query job
  - Retrieve the last completed aggregate query job

- In the "List data query jobs" operation, removed the unsupported `page` query parameter.

- In the 200 response body of each of the following operations:
  - List custom object definitions
  - Create custom object definitions

  Added the following missing fields:
  - `definitions` > _`property name*`_ > `schema` > `enableCreateRecordAuditing`
  - `definitions` > _`property name*`_ > `schema` > `enableDeleteRecordAuditing`

- In the request body of the "Create custom object definitions" operation, added the following missing fields:
  - `definitions` > _`property name*`_ > `enableCreateRecordAuditing`
  - `definitions` > _`property name*`_ > `enableDeleteRecordAuditing`

- In the 200 response body of the "Retrieve a custom object definition" operation, added the following missing fields:
  - `schema` > `enableCreateRecordAuditing`
  - `schema` > `enableDeleteRecordAuditing`

- In the request body and 200 response body of the "Update a custom object definition" operation, added the following missing fields:
  - `actions` > `enableCreateRecordAuditing`
  - `actions` > `enableDeleteRecordAuditing`

- In the request body of each of the following operations, fixed the hyperlink for <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Subscriptions/Orders/AA_Overview_of_Orders/Pending_orders_and_subscriptions" target="_blank">Pending orders and subscriptions</a> in the description of the `subscriptions` > `orderActions` > `changePlan` field:
  - Preview an order
  - Preview an order asynchronously
  - Create an order
  - Create an order asynchronously
  - Update an order

- In the response body of the "Apply a credit memo" operation, updated the description of each of the following fields to clarify the source and target field requirements:
  - `debitMemos` > `items`
  - `invoices` > `items`

- In the request body of the "Amend" action, updated the description of the `Amendments` > `BookingDate` field for better clarity. This change applies to the Older API Reference.


## May 26, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/22_Zuora_Release_2023.05.R2" target="_blank">Zuora Release 2023.05.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for Adyen Apple Pay and Adyen Google Pay payment methods

The following items are the API updates specific to using the `email` field to pass email information to Adyen for Apple Pay and Google Pay payment methods.

- [Payment Methods](/v1-api-reference/api/payment-methods) - In the request body of the "Create a payment method" operation, added Adyen Apple Pay and Google Pay to the description of the `email` field.

- [Accounts](/v1-api-reference/api/accounts) - In the request body of the "Create an account" operation, added Adyen Apple Pay and Google Pay to the description of the `paymentMethod` > `email` field.

- [Orders](/v1-api-reference/api/orders) - In the request body of each of the following operations:
  - Create an order
  - Create an order asynchronously

  Added Adyen Apple Pay and Google Pay to the description of each of the following fields:
  - `newAccount` > `paymentMethod` > `email`
  - `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `paymentMethod` > `email`


#### Other API updates

The following items are the other general API updates included in this release:

- For CRUD operations and the [Delete](/api-references/api/operation/Action_POSTdelete/) action, the HTTP response status code is now updated to 200 from 400 in the case that you attempt to delete an object with an invalid ID. Note that this change is currently live in Sandbox and Central Sandbox environments, and it will be deployed to Production no earlier than June 3, 2023. <br/> For more information about this change, see the <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/21_Zuora_Release_2023.05.R2#HTTP_response_status_code_change_for_the_Delete_action_and_DELETE_calls_to_CRUD_operations" target="_blank">2023.05.R2 Release Notes</a>.

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following updates:
  - In the response body of each of the following operations, added the `property name *` and `productOfferName` nested fields to the `offers` field:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version
  - In the response body of the "List subscriptions by account key" operation, added the `property name *` and `productOfferName` nested fields to the `subscriptions` > `offers` field.

- [Orders](/v1-api-reference/api/orders) - Made the following updates:
  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Update an order

      Updated the description of each of the following fields to clarify that custom fields are available for subscription offers:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `customFields`
      - `subscriptions` > `orderActions` > `addProduct`
      - `subscriptions` > `orderActions` > `addProduct` > `customFields`
      - `subscriptions` > `orderActions` > `updateProduct`
      - `subscriptions` > `orderActions` > `updateProduct` > `customFields`

  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Updated the description of each of the following fields to clarify that custom fields are available for subscription offers:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `customFields`
      - `orders` > `subscriptions` > `orderActions` > `addProduct`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `customFields`
      - `orders` > `subscriptions` > `orderActions` > `updateProduct`
      - `orders` > `subscriptions` > `orderActions` > `updateProduct` > `customFields`

  - In the response body of the "Retrieve an order" operation, updated the description of each of the following fields to clarify that custom fields are available for subscription offers:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `customFields`
      - `order` > `subscriptions` > `orderActions` > `addProduct`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `customFields`
      - `order` > `subscriptions` > `orderActions` > `updateProduct`
      - `order` > `subscriptions` > `orderActions` > `updateProduct` > `customFields`

- [Settings](/v1-api-reference/api/settings) -  Made the following updates:
  - Added the `number` parameter for each of the following settings:
      - `AllCommunicationProfiles`
      - `CommunicationProfile`

  - Added the following enum values to the `billingCycleTypes` parameter of the `BillingCycleType` setting:
      - `TermStartDay`
      - `TermEndDay`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).

- [Payment Schedules](/v1-api-reference/api/payment-schedules/) - Made the following updates:

  - For the "Update a payment schedule item" operation, made the following updates:
      - Removed the version control information from the description of each of the following fields:
          - `linkPayments` and `unlinkPayments` fields in the request body
          - `psiPayments` field in the response body
      - Updated the description of the `zuora-version` request header.

  - In the response body of each of the following operations, updated the description of `zuora-version` request header and removed the version control information from the description of the `items` > `psiPayments` field:
      - Create a payment schedule
      - List payment schedules by customer account
      - Retrieve a payment schedule
      - Update a payment schedule
      - Preview the result of payment schedule updates
      - Cancel a payment schedule
      - Retrieve a payment schedule item
      - Cancel a payment schedule item
      - Skip a payment schedule item
      - Retry failed payment schedule item
      - Update a payment schedule item
      - Add payment schedule items to a custom payment schedule

- In the "Minor Version History" table of the "API Versions" section, removed the following fields and their corresponding entries:
  - `linkPayments`
  - `unlinkPayments`
  - `psiPayments`


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

#### Doc updates for the Annual List Price feature

The following items are the documentation updates specific to the <a href="https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price" target="_blank">Annual List Price</a> feature.

- In the request body of the "Create an account" operation, updated the description of each of the following fields for better clarity:
    - `subscription` > `subscribeToRatePlans` > `chargeOverrides` > `listPriceBase`
    - `subscription` > `subscribeToRatePlans` > `chargeOverrides` > `specificListPriceBase`

- In the request body of the "Create an offer" operation, updated the description of the `productRatePlans` > `chargeOverrides` > `prices` > `listPriceBase` field for better clarity.
- In the response body of the "Retrieve an offer" operation, updated the description of the `productRatePlanCharges` > `priceBookItems` > `listPriceBase` field for better clarity.
- In the response body of the "List price book items" operation, updated the description of the `offers` > `productRatePlanCharges` > `priceBookItems` > `listPriceBase` field for better clarity.

- In the request body and response body of each of the following operations, updated the description of the `listPriceBase` field for better clarity.
  - Create a price book item
  - Update a price book item
- In the response body of the "Retrieve a price book item" operation, updated the description of the `listPriceBase` field for better clarity.
- In the response body of the "List price book items" operation, updated the description of the `priceBookItems` > `listPriceBase` field for better clarity.

- In the request body of each of the following operations:
  - Create an order
  - Create an order asynchronously
  - Preview an order
  - Preview an order asynchronously
  - Update an order

  Updated the description of each of the following fields for better clarity:
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`

- In the request body of each of the following operations:
  - Create an order
  - Create an order asynchronously
  - Update an order

  Updated the description of each of the following fields for better clarity:
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`

- In the response body of each of the following operations:
  - Retrieve an order
  - List order metrics for an evergreen subscription (in the Older API Reference)

  Updated the description of each of the following fields for better clarity:
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`

- In the response body of each of the following operations:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

  Updated the description of each of the following fields for better clarity:
  - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`


- In the request body of each of the following operations:
  - Create a subscription
  - Preview a subscription

  Updated the description of each of the following fields for better clarity:
  - `subscribeToRatePlans` > `chargeOverrides` > `listPriceBase`
  - `subscribeToRatePlans` > `chargeOverrides` > `specificListPriceBase`

- In the request body of the "Update a subscription" operation, updated the description of each of the following fields for better clarity:
  - `add` > `chargeOverrides` > `listPriceBase`
  - `change` > `chargeOverrides` > `listPriceBase`
  - `add` > `chargeOverrides` > `specificListPriceBase`
  - `change` > `chargeOverrides` > `specificListPriceBase`

- In the response body of each of the following operations:
  - Retrieve a subscription by key
  - Retrieve a subscription by key and version

  Updated the description of each of the following fields for better clarity:
  - `ratePlans` > `ratePlanCharges` > `listPriceBase`
  - `ratePlans` > `ratePlanCharges` > `specificListPriceBase`

- In the response body of the "List subscriptions by account key" operation, updated the description of each of the following fields for better clarity:
  - `subscriptions` > `ratePlans` > `ratePlanCharges` > `listPriceBase`
  - `subscriptions` > `ratePlans` > `ratePlanCharges` > `specificListPriceBase`


- In the request body of each of the following operations in the Older API Reference:
  - CRUD: Create a product rate plan charge
  - CRUD: Update a product rate plan charge

  Updated the description of each of the following fields for better clarity:
  - `ListPriceBase`
  - `SpecificListPriceBase`

- In the response body of the "CRUD: Retrieve a product rate plan charge" operation, updated the description of each of the following fields for better clarity:
  - `ListPriceBase`
  - `SpecificListPriceBase`


- In the response body of the "List all product rate plans of a product" operation, updated the description of each of the following fields for better clarity:
    - `productRatePlans` > `productRatePlanCharges` > `listPriceBase`
    - `productRatePlans` > `productRatePlanCharges` > `specificListPriceBase`


- In the response body of the "Retrieve a rate plan" operation, updated the description of each of the following fields for better clarity:
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `specificListPriceBase`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `specificListPriceBase`

The following updates applies to the Older API Reference:

- In the request body of the "Amend" action, updated the description of each of the following fields for better clarity:
  - `requests` > `Amendments` > `RatePlanData` > `RatePlanChargeData` > `RatePlanCharge` > `ListPriceBase`
  - `requests` > `Amendments` > `RatePlanData` > `RatePlanChargeData` > `RatePlanCharge` > `SpecificListPriceBase`
- In the request body of the "Subscribe" action, updated the description of each of the following fields for better clarity:
  - `subscribes` > `SubscriptionData` > `RatePlanData` > `RatePlanChargeData` > `RatePlanCharge` > `ListPriceBase`
  - `subscribes` > `SubscriptionData` > `RatePlanData` > `RatePlanChargeData` > `RatePlanCharge` > `SpecificListPriceBase`


- In the request body of the "CRUD: Update a rate plan charge" operation, updated the description of each of the following fields for better clarity:
  - `ListPriceBase`
  - `SpecificListPriceBase`
- In the response body of the "CRUD: Retrieve a rate plan charge" operation, updated the description of each of the following fields for better clarity:
  - `ListPriceBase`
  - `SpecificListPriceBase`


#### Other doc updates

The following items are the other general documentation updates included in this release:

- In the response body of each of the following operations, updated the description of the `memos` > `source` field for better clarity:
  - Create credit memos
  - Update credit memos
- In the response body of each of the following operations, updated the description of the `source` field for better clarity:
  - Create a credit memo from a charge
  - Create a credit memo from an invoice
  - Retrieve a credit memo
  - Update a credit memo
  - Apply a credit memo
  - Unapply a credit memo
  - Cancel a credit memo
  - Post a credit memo
  - Unpost a credit memo
- In the response body of the "List credit memos" operation, updated the description of the `creditmemos` > `source` field for better clarity.

- In the response body of the "List subscriptions by account key" operation, corrected the format and description of the `SpecificDayofMonth(# of the month)` enum value field for the `subscriptions` > `ratePlans` > `ratePlanCharges` > `billingDay` field.

- In the response body of each of the following operations, corrected the format and description of the `SpecificDayofMonth(# of the month)` enum value field for the `ratePlans` > `ratePlanCharges` > `billingDay` field:
  - Retrieve a subscription by key
  - Retrieve a subscription by key and version

- In the request body and request sample of the "Generate a billing preview" operation, corrected the `accountKey` field to `accountNumber`.

- Updated the description of the "Retrieve a billing preview run" operation for better clarity.

- In the response body of the "Retrieve a refund" operation, removed the unsupported `PaymentId` field. This change applies to the Older API Reference.


## May 19, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/23_Zuora_Release_2023.05.R1" target="_blank">Zuora Release 2023.05.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for the Billing Schedule feature

The following items are the API updates specific to the Early Adopter announcement of the <a href="https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Billing_Schedule" target=“_blank”>Billing Schedule</a> feature.

**Note**: The Billing Schedule feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at <a href="http://support.zuora.com/" target=“_blank”>Zuora Global Support</a>.

- [Invoice Schedules](/v1-api-reference/api/invoice-schedules) - Made the following updates:
    - Added the following operations:
      - Pause an invoice schedule
      - Resume an invoice schedule

  - In the response body of each of the following operations, added the `Paused` enum value to the `status` field:
      - Create an invoice schedule
      - Update an invoice schedule
      - Retrieve an invoice schedule
      - Execute an invoice schedule

  - In the request body and response body of each of the following operations:
      - Create an invoice schedule
      - Update an invoice schedule

      Added the following fields:
      - `consolidateBillingDocuments`
      - `additionalSubscriptionsToBill`
      - `nextRunDate`
      - `scheduleItems` > `targetDateForAdditionalSubscriptions`

    - In the response body of the "Retrieve an invoice schedule" operation, added the following fields:
      - `consolidateBillingDocuments`
      - `additionalSubscriptionsToBill`
      - `nextRunDate`
      - `scheduleItems` > `targetDateForAdditionalSubscriptions`

    - In the request body and reresponse body of the "Update an invoice schedule" operation, added the `nextRunDate` field.

    - In the response body of the "Create an invoice schedule" operation, added the `nextRunDate` field.

- [Credit Memos](/v1-api-reference/api/credit-memos) - Made the following updates:
  - In the response body of the "Retrieve a credit memo item" operation, added the following fields:
      - `invoiceScheduleId`
      - `invoiceScheduleItemId`
  - In the response body of the "List credit memo items" operation, added the following fields:
      - `items` > `invoiceScheduleId`
      - `items` > `invoiceScheduleItemId`

- [Invoices](/v1-api-reference/api/invoices) - In the response body of the "List all items of an invoice" operation, added the following fields:
  - `invoiceItems` > `invoiceScheduleId`
  - `invoiceItems` > `invoiceScheduleItemId`

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following updates:
    - In the response body of the "List subscriptions by account key" operation, added the `invoiceScheduleId` nested field to the `subscriptions` > `ratePlans` > `ratePlanCharges` field.
    - In the response body of each of the following operations, added the `invoiceScheduleId` nested field to the `ratePlans` > `ratePlanCharges` field:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

#### Other API updates

The following items are the other general API updates included in this release:

- [Accounts](/v1-api-reference/api/accounts) - In the request body of the "Update an account” operation, added the following fields:
  - `purchaseOrderNumber`
  - `customerServiceRepName`

- [Credit Memos](/v1-api-reference/api/credit-memos) - In the request body of the "Create a credit memo from a charge" operation, changed the behavior of the following fields that can now be both specified in a request:
  - `accountId`
  - `accountNumber`

- [Data Queries](/v1-api-reference/api/data-queries/) - In the request body of the "Submit a data query" operation, made the following updates:
  - Removed the unsupported `DATAHUB` enum value from the `sourceData` field.
  - Updated the description of the `sourceData` field for better clarity.

- [Billing Preview Run](/v1-api-reference/api/billing-preview-run/) - Made the following updates:
  - In the request body of the "Create a billing preview run" operation, added the `storageOption` field.

  - In the response body of the "Retrieve a billing preview run" operation, made the following updates:
      - Added the `storageOption` field.
      - Updated the description of the `resultFileUrl` field to reflect the effects of the `storageOption` field.

- [Orders](/v1-api-reference/api/orders) - Made the following updates:
  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Preview an order
      - Preview an order asynchronously
      - Update an order

      Added the following fields:
      - `orderLineItems` > `billTo`
      - `orderLineItems` > `ownerAccountNumber`

  - In the response body of the "Retrieve an order" operation, added the following fields:
      - `order` > `orderLineItems` > `billTo`
      - `order` > `orderLineItems` > `billToSnapshotId`
      - `order` > `orderLineItems` > `ownerAccountId`
      - `order` > `orderLineItems` > `ownerAccountNumber`
      - `order` > `orderLineItems` > `ownerAccountName`
      - `order` > `orderLineItems` > `invoiceOwnerAccountId`
      - `order` > `orderLineItems` > `invoiceOwnerAccountNumber`
      - `order` > `orderLineItems` > `invoiceOwnerAccountName`

  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Added the following fields:
      - `orders` > `orderLineItems` > `billTo`
      - `orders` > `orderLineItems` > `billToSnapshotId`
      - `orders` > `orderLineItems` > `ownerAccountId`
      - `orders` > `orderLineItems` > `ownerAccountNumber`
      - `orders` > `orderLineItems` > `ownerAccountName`
      - `orders` > `orderLineItems` > `invoiceOwnerAccountId`
      - `orders` > `orderLineItems` > `invoiceOwnerAccountNumber`
      - `orders` > `orderLineItems` > `invoiceOwnerAccountName`

  - In the request body of each of the following operations, changed the behavior of the `orderLineItems` > `soldTo` field:
      - Create an order
      - Create an order asynchronously
      - Preview an order
      - Preview an order asynchronously
      - Update an order

  - In the response body of the "Retrieve an order" operation, changed the behavior of the `order` > `orderLineItems` > `soldTo` field.

  - In the response body of each of the following operations, changed the behavior of the `orders` > `orderLineItems` > `soldTo` field:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

- [Order Line Items](/v1-api-reference/api/order-line-items) - Made the following updates:
  - In the request body of the "Update an order line item" operation, added the following fields:
      - `billTo`
      - `ownerAccountNumber`

  - In the request body of the "Update order line items" operation, added the following fields:
      - `orderLineItems` > `billTo`
      - `orderLineItems` > `ownerAccountNumber`

  - In the response body of each of the following operations:
      - Update order line items
      - Retrieve an order line item

      Added the following fields:
      - `orderLineItem` > `billTo`
      - `orderLineItem` > `billToSnapshotId`
      - `orderLineItem` > `ownerAccountId`
      - `orderLineItem` > `ownerAccountNumber`
      - `orderLineItem` > `ownerAccountName`
      - `orderLineItem` > `invoiceOwnerAccountId`
      - `orderLineItem` > `invoiceOwnerAccountNumber`
      - `orderLineItem` > `invoiceOwnerAccountName`

  - In the request body of the "Update an order line item" operation, changed the behavior of the `soldTo` field.

  - In the request body of the "Update order line items" operation, changed the behavior of the `orderLineItems` > `soldTo` field.

  - In the response body of each of the following operations, changed the behavior of the `orderLineItem` > `soldTo` field:
      - Update order line items
      - Retrieve an order line item

- [Communication Profiles](/api-references/older-api/tag/Communication-Profiles/) - In the 200 response body of the "CRUD: Retrieve a communication profile" operation, added the `ProfileNumber` field. This change applies to the Older API Reference.


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

#### Doc updates for clarifying the maximum length for the accountHolderName field

The following items are the documentation updates specific to clarifying a maximum of 60 characters are allowed for the `accountHolderName` field:

- In the request body of the "Create an account" operation, updated the description of the `paymentMethod` > `accountHolderInfo` > `accountHolderName` field.

- In the request body of each of the following operations:
  - Create an order
  - Create an order asynchronously

  Updated the description of each of the following fields:
  - `newAccount` > `paymentMethod` > `accountHolderInfo` > `accountHolderName`
  - `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `paymentMethod` > `accountHolderInfo` > `accountHolderName`

- In the request body of the "Create a payment method" operation, updated the description of the `accountHolderInfo` > `accountHolderName` field.

#### Doc updates for the accountNumber field in memo API operations

The following items are the documentation updates specific to the `accountNumber` field in credit memo and debit memo API operations, available only if you have the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Invoicing/Invoice_Settlement" target="_blank">Invoice Settlement</a> feature enabled.

- In the request body of the "Create a credit memo from a charge" operation, changed the `accountId` field from required to conditionally required.
- In the request body of the "Create credit memos" operation, updated the `memos` > `accountId` field from required to conditionally required.
- In the 200 response body and sample of each of the following operations, added the missing `memos` > `accountNumber` field with its value.
  - Create credit memos
  - Update credit memos
  - Create debit memos
  - Update debit memos
- In the 200 response body and sample of each of the following operations, added the missing `accountNumber` field with its value:
  - Create a credit memo from a charge
  - Create a credit memo from an invoice
  - Retrieve a credit memo
  - Update a credit memo
  - Apply a credit memo
  - Unapply a credit memo
  - Cancel a credit memo
  - Post a credit memo
  - Unpost a credit memo
  - Create a debit memo from a charge
  - Create a debit memo from an invoice
  - Retrieve a debit memo
  - Update a debit memo
  - Cancel a debit memo
  - Post a debit memo
  - Unpost a debit memo
- In the 200 response body and sample of the "List credit memos" operation, added the missing `creditmemos` > `accountNumber` field with its value.
- In the 200 response body and sample of the "List debit memos" operation, added the missing `debitmemos` > `accountNumber` field with its value.


#### Doc updates for the Orders feature

The following items are the documentation updates specific to the Orders feature.

- Updated the description of the "Update an order" operation for better clarity.

- In the request body of each of the following operations:
  - Create an order
  - Create an order asynchronously
  - Update an order

  Updated the description of each of the following fields for better clarity:
  - `subscriptions` > `orderActions` > `addProduct`
  - `subscriptions` > `orderActions` > `updateProduct`
  - `subscriptions` > `orderActions` > `removeProduct`

- In the response body of each of the following operations:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

  Updated the description of each of the following fields for better clarity:
  - `orders` > `subscriptions` > `orderActions` > `addProduct`
  - `orders` > `subscriptions` > `orderActions` > `updateProduct`
  - `orders` > `subscriptions` > `orderActions` > `removeProduct`

- In the response body of the "Retrieve an order" operation, updated the description of each of the following fields for better clarity:
  - `order` > `subscriptions` > `orderActions` > `addProduct`
  - `order` > `subscriptions` > `orderActions` > `updateProduct`
  - `order` > `subscriptions` > `orderActions` > `removeProduct`

- In the request body of each of the following operations, updated the description of the `processingOptions` field for better clarity:
  - Create an order
  - Create an order asynchronously
  - Update an order

- In the request body of each of the following operations, updated the description of the `previewOptions` > `previewThruType` field for better clarity:
  - Preview an order
  - Preview an order asynchronously

#### Other doc updates

The following items are the other general documentation updates included in this release:

- Updated the note description of the "Retry failed payment schedule items" operation because the conditions of the payment schedule items are changed.

- In the request body of the "Upload a usage file" operation, updated the description of the `file` field for better clarity.

- In the description of the "Upload a usage file" operation, updated the description of the `UNIQUE_KEY` heading for better clarity in the Usage File Format section.


## May 5, 2023

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of the "Create a payment" operation, updated the description of the `authTransactionId` field to clarify that the Stripe v2 payment gateway integration support this field.

- In the request body of the "Create a payment" operation, added the missing `paymentMethodType` field.

- Updated the note description of the "Retry failed payment schedule items" operation because the status options of the payment schedule items are changed.

- In the request body of each of the following operations, added the missing `IsStackedDiscount` field, which is used to specify whether the discount percentage is to be calculated by stacking with other discount percentages:
  - CRUD: Create a product rate plan charge
  - CRUD: Update a product rate plan charge

- In the response body of the "List all product rate plans of a product" operation, added the missing `isStackedDiscount` nested field to the `productRatePlans` > `productRatePlanCharges` field.

- For Settings API operations, made the following updates:
  - Added the support for the POST method to each of the following settings:
      - `CreateGlobalTaxHubTaxCode`
      - `CreateGlobalTaxHubTaxEngine`
  - Added the support for the GET, PUT, and DELETE methods to each of the following settings:
      - `GlobalTaxHubTaxCode`
      - `GlobalTaxHubTaxEngine`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json) and [200 response sample in CSV format](/settings-api/ListAllSettingsResponseSample.csv).

 - Updated the description of the "Reporting" section for better clarity. This change applies to the Older API Reference.


## April 27, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/23_Zuora_Release_2023.04.R2" target="_blank">Zuora Release 2023.04.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Custom Object Definitions](/v1-api-reference/api/custom-object-definitions/) - Made the following updates:
  - In each of the following operations, removed the `enableRecordMigration` field because the Deployment Manager will no longer support migrating custom object records:
      - List custom object definitions
      - Create custom object definitions
      - Retrieve a custom object definition
      - Update a custom object definition
  - In the 200 response body of each of the following operations, added the `definitions` > `property name` > `schema` > `auditable` field:
      - List custom object definitions
      - Create custom object definitions
  - In the request body of the "Create custom object definitions" operation, added the `definitions` > `property name` > `auditable` field.
  - In the 200 response body of the "Retrieve a custom object definition" operation, added the `schema` > `auditable` field.
  - In the request body and response body of the "Update a custom object definition" operation, added the `actions` > `field` > `auditable` field.

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of each of the following operations, updated the description of the `processingOptions` field for better clarity:
  - Create an order
  - Update an order

- In the request body of each of the following operations, updated the description of the `subscriptions` > `orderActions` > `changePlan` > `ratePlanId` field to clarify that the Change Plan order action supports the function of removal before future-dated removals:
  - Preview an order
  - Preview an order asynchronously
  - Create an order
  - Create an order asynchronously
  - Update an order

- In the response body of each of the following operations, updated description of the `subscriptionNumbers` field for better clarity:
  - Create an order
  - Update an order

- In the request body of the "Update a subscription" operation, updated the description of the `change` > `ratePlanId` field to clarify that the Change Plan amendment supports the function of removal before future-dated removals.

- In the request body of the "Update a subscription" operation, updated the description of the `change` > `productRatePlanId` field for better clarity.

- In the description of the “Create a payment schedule” operation, removed the Early Adopter note because the Payment Schedules feature has become generally available.

- In the request body of the “Create a payment schedule” operation, updated the description of the `billingDocument` field.

- In the response body of the "List payment schedules by customer account" operation, added the missing `prepayment` field.

- In the response body of each of the following operations, updated the description of the `prepayment` field for better clarity:
  - Create a payment schedule
  - Retrieve a payment schedule
  - Add payment schedule items to a custom payment schedule
  - Update a payment schedule
  - Preview the result of payment schedule updates
  - Cancel a payment schedule

- In the request body of the "Create a payment schedule" operation, updated the description of the `prepayment` field for better clarity.

- Renamed the Flexible Billing feature to Flexible Billing Attributes​​ in all related operation.

- In the request body of each of the following operations, updated the description of the `processingOptions` > `applyCredit` field:
  - Create an order
  - Create an order asynchronously

- In the request body of each of the following operations, updated the description of the `applyCredit` field:
  - Cancel a subscription
  - Create a subscription
  - Renew a subscription
  - Resume a subscription
  - Suspend a subscription
  - Update a subscription

- In the request body of the “Amend” action in the Older API Reference, updated the description of the `requests` > `AmendOptions` > `ApplyCredit` field.

- In the request body of the “Subscribe” action in the Older API Reference, updated the description of the `subscribes` > `SubscribeOptions` > `ApplyCredit` field.



## April 20, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/23_Zuora_Release_2023.04.R2" target="_blank">Zuora Release 2023.04.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for the Prepaid Cash with Drawdown feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Invoicing/JA_Advanced_Consumption_Billing/Prepaid_Cash_with_Drawdown" target="_blank">Prepaid Cash with Drawdown</a> feature.

- [Payments](/v1-api-reference/api/payments/) - Made the following updates:

  - In the request body of the "Create a payment"  operation, added the `prepayment` field.

  - In the response body of each of the following operations, added the `prepayment` field:
      - Create a payment
      - Update a payment
      - Retrieve a payment
      - Transfer a payment
      - Apply a payment
      - Cancel a payment

  - In the response body of the "List payments" operation, added the `payments` > `prepayment` field.

- [Payment Schedules](/v1-api-reference/api/payment-schedules/) - Made the following updates:

  - In the request body of the "Create a payment schedule" operation, added the `prepayment` field.

  - In the request body of the "Create multiple payment schedules at once" operation, added the `paymentSchedules` > `prepayment` field.

  - In the response body of each of the following operations, added the `prepayment` field:
      - Create a payment schedule
      - List payment schedules by customer account
      - Retrieve a payment schedule
      - Update a payment schedule
      - Preview the result of payment schedule updates
      - Cancel a payment schedule
      - Add payment schedule items to a custom payment schedule

- [Subscriptions](/v1-api-reference/api/subscriptions/) - In the request body of the "Create a subscription" operation, added the `prepayment` field.

- [Accounts](/v1-api-reference/api/accounts/) - In the response body of the "Retrieve an account" operation, added the `metrics` > `reservedPaymentAmount` field.

#### Other API updates

The following items are the other general API updates included in this release:

- [Accounts](/v1-api-reference/api/accounts) - Made the following updates:
  - In the response body of the "List payment methods of an account" operation, updated the description of each of the following fields for a system behavior change:
      - `returnedPaymentMethodTyp` > `appleCardType`
      - `returnedPaymentMethodTyp` > `googleCardTyp`

  - In the response body of the "Retrieve the default payment method of an account" operation, updated the description of each of the following fields for a system behavior change:
      - `appleCardType`
      - `googleCardTyp`

- [Payment Methods](/v1-api-reference/api/payment-methods) - In the response body of the "Retrieve a payment method" operation, updated the description of each of the following fields for a system behavior change:
  - `appleCardType`
  - `googleCardTyp`


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of each of the following operations, updated the description of the `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` field for better clarity:
  - Create an order
  - Create an order asynchronously
  - Update an order

- Moved the "Mass Updater" section from the Older API Reference to REST API Reference.

- In the description of the "List records for a custom object" operation, clarified the scenarios where you might confront a latency when retrieving custom object records.

- In the request body of the "Sign up" operation, updated the description of each of the following fields for better clarity:
  - `customFields` > _`property name *`_
  - `accountData` > `customFields` > _`property name *`_
  - `subscriptionData` > `customFields` > _`property name *`_

- In the response body of each of the following operations:
  - Retrieve a payment method
  - Retrieve the default payment method of an account

  Added the following missing fields:
  - `googleGatewayToken`
  - `googleCardType`
  - `googleCardNumber`
  - `googleBIN`
  - `googleExpiryDate`
  - `appleGatewayToken`
  - `appleCardType`
  - `appleCardNumber`
  - `appleBIN`
  - `appleExpiryDate`

- In the response body of the "List payment methods of an account" operation, added the following missing fields:
  - `returnedPaymentMethodTyp` > `googleGatewayToken`
  - `returnedPaymentMethodTyp` > `googleCardTyp`
  - `returnedPaymentMethodTyp` > `googleCardNumber`
  - `returnedPaymentMethodTyp` > `googleBIN`
  - `returnedPaymentMethodTyp` > `googleExpiryDate`
  - `returnedPaymentMethodTyp` > `appleGatewayToken`
  - `returnedPaymentMethodTyp` > `appleCardType`
  - `returnedPaymentMethodTyp` > `appleCardNumber`
  - `returnedPaymentMethodTyp` > `appleBIN`
  - `returnedPaymentMethodTyp` > `appleExpiryDate`

- In the response body of each of the following operations:
  - Create an invoice schedule
  - Update an invoice schedule
  - Retrieve an invoice schedule

  Added the following missing fields:
  - `actualAmount`
  - `scheduleItems` > `actualAmount`

- In the response body of each of the following operations:
  - Create an invoice schedule
  - Update an invoice schedule
  - Retrieve an invoice schedule

  Updated the description of each of the following fields for better clarity:
  - `totalAmount`
  - `scheduleItems` > `amount`

- In the response body of each of the following operations, updated the description of the `invoiceScheduleId` field for better clarity:
  - Retrieve a subscription by key
  - Retrieve a subscription by key and version

- In the response body of the "List subscriptions by account key" operation, updated the description of the `subscriptions` > `invoiceScheduleId` field for better clarity.

- In each of the Orders operations, updated the general availability note about the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Orders" target="_blank">Orders</a> feature.

- In each of the Order Line Items operations, removed the general availability note about the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Orders" target="_blank">Orders</a> feature.

- In the source YAML file of each of the following operations:
  - List payment methods of an account
  - Retrieve the default payment method of an account

  Made the following changes:
  - Renamed the `GETPMAccountHolderInfo` definition to `GETAccountPMAccountHolderInfo`.
  - Renamed the `POSTPMMandateInfo` definition to `POSTAccountPMMandateInfo`.

- In each of the Custom Object Records operations, added the length of the `Id` field.

- In each of the following operations, added the length of the `id` path parameter:
  - Retrieve a custom object record
  - Update a custom object record
  - Partially update a custom object record
  - Delete a custom object record

- In the description of the `ids` query parameter of the "List records for a custom object" operation, clarified that each ID must be a string of 36 characters.


## April 14, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/23_Zuora_Release_2023.04.R2" target="_blank">Zuora Release 2023.04.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Orders](/v1-api-reference/api/orders) - Made the following updates:
  - In the request body of each of the following operations, added the `refundReasonCode` nested field to the `processingOptions` field:
      - Create an order
      - Update an order

  - In the response body of each of the "Create an order" and "Update an order" operations, added the following fields:
      - `refunds` > `refundInvoiceNumbers`
      - `writeOff` > `writeOffCreditMemoNumber`

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of the "Create a payment run" operation, updated the description of the `applyCreditBalance` field for better clarity.

- In the request body of each of the following operations, updated the description of the `newAccount` > `paymentTerm` field for better clarity:
  - Create an order
  - Create an order asynchronously
  - Update an order

- In the request body of the "Create an account" operation, updated the description of the `paymentTerm` field for better clarity.

- In the request body of the "Create an Apple Pay payment method" operation, updated the description of each of the following fields to clarify the payment gateway integrations that support the field:
  - `mitConsentAgreementSrc`
  - `mitProfileAction`
  - `mitProfileType`

- In the description of the "Update an order" operation, added a note to clarify that this operation does not support auto-refund and invoice write-off during subscription cancellation.

- Updated the description of the "Configuration Templates" section as the feature is now generally available to all Zuora customers.


## April 10, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/24_Zuora_Release_2023.04.R1" target="_blank">Zuora Release 2023.04.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for the Flexible Billing feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Flexible_Billing" target="_blank">Flexible Billing</a> feature.

- [Credit Memos](/v1-api-reference/api/credit-memos) - Made the following updates:
  - In the response body of the "Retrieve a credit memo item" operation, added the following fields:
      - `soldToContactId`
      - `soldToContactSnapshotId`
  - In the response body of the "List credit memo items" operation, added the following fields:
      - `items` > `soldToContactId`
      - `items` > `soldToContactSnapshotId`

- [Debit Memos](/v1-api-reference/api/debit-memos) - Made the following updates:
  - In the response body of the "Retrieve a debit memo item" operation, added the following fields:
      - `soldToContactId`
      - `soldToContactSnapshotId`
  - In the response body of the "List debit memo items" operation, added the following fields:
      - `items` > `soldToContactId`
      - `items` > `soldToContactSnapshotId`

- [Invoices](/v1-api-reference/api/invoices) - In the response body of the "List all items of an invoice" operation, added the following fields:
  - `invoiceItems` > `soldToContactId`
  - `invoiceItems` > `soldToContactSnapshotId`

- [Orders](/v1-api-reference/api/orders) - Made the following updates:
  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Preview an order
      - Preview an order asynchronously
      - Update an order

      Added the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `soldToContactId`
      - `subscriptions` > `orderActions` > `ownerTransfer` > `soldToContactId`
      - `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingSoldToContact`
      - `subscriptions` > `orderActions` > `renewSubscription` > `soldToContactId`
      - `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingSoldToContact`
      - `subscriptions` > `orderActions` > `termsAndConditions` > `soldToContactId`
      - `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingSoldToContact`

  - In the response body of the "Retrieve an order" operation, added the following fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `soldToContactId`
      - `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `soldToContactId`
      - `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingSoldToContact`
      - `order` > `subscriptions` > `orderActions` > `renewSubscription` > `soldToContactId`
      - `order` > `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingSoldToContact`
      - `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `soldToContactId`
      - `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingSoldToContact`

  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Added the following fields:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `soldToContactId`
      - `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `soldToContactId`
      - `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingSoldToContact`
      - `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `soldToContactId`
      - `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingSoldToContact`
      - `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `soldToContactId`
      - `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingSoldToContact`

- [Subscriptions](/v1-api-reference/api/subscriptions) - Made the following updates:
  - In the response body of each of the following operations, add the `soldToContact` field and its nested fields:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

  - In the response body of the "List subscriptions by account key" operation, add the `soldToContact` field and its nested fields to the `subscriptions` field.

#### Other API updates

The following items are the other general API updates included in this release:

- [Contact Snapshots](/v1-api-reference/api/contact-snapshots) - Added a resource called "Contact Snapshots", with the "Retrieve a contact snapshot" operation.

- [Orders](/v1-api-reference/api/orders) - In the request body of each of the following operations, added the `generateDraftInvoice` nested field to the `processingOptions` > `billingOptions` field:
  - Create an order
  - Create an order asynchronously
  - Update an order

- [Payments](/v1-api-reference/api/payments/) - In the request body of the "Create a payment" operation, updated the description of the `mitTransactionSource` field for the support of MOTO transactions.

- [Payment Authorization](/v1-api-reference/api/payment-authorization) - In the request body of the "Create authorization" operation, updated the description of the `mitTransactionSource` field for the support of MOTO transactions.

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- Sorted all sections based on business logic and areas.

- Created a new section called "Payment Authorization" that contains the following operations:
  - Create an authorization
  - Cancel an authorization

  Previously, the preceding operations were in the "Payment Methods" section.

- In the request body of each of the following operations, updated the description of the `processingOptions` field for better clarity:
  - Create an order
  - Create an order asynchronously
  - Update an order

- In the request body of each of the following operations, added the missing `subscriptionOfferUniqueToken` nested field to the `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` field:
  - Create an order
  - Create an order asynchronously
  - Update an order

- In the request body of the "Upload a file for a custom object bulk job" operation, clarified that the uploaded file must be encoded in UTF-8.

- In the request body of the "Submit a data query" operation, updated the description of the `readDeleted` field by clarifying an exception when using this field.



## March 31, 2023

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

#### Doc updates for canceling subscriptions with a refund and write-off

The following items are the documentation updates specific to canceling subscriptions with a refund and write-off:

- In the request body of the "Create an order" operation, updated the description of the `processingOptions` field to clarify the following two behaviors:
  - The operation partially succeeds even if a refund or write-off fails.
  - The cases in which the operation rolls back.

- In the request body of the "Create an order" operation, updated the descriptions of the `processingOptions` > `refund` and `processingOptions` > `writeOff` fields.

#### Doc updates for the Delivery Pricing charge model

The following items are the documentation updates specific to the Delivery Pricing charge model:

- In the response body of the "Retrieve a rate plan" operation, added the following missing fields:
  - `order` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringDelivery`
  - `order` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringDelivery`

- In the request body of each of the following operations:
  - Create an order
  - Create an order asynchronously
  - Update an order

  Added the following missing fields:
  - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringDeliveryBased`
  - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringDeliveryBased`
  - `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringDeliveryBased`

- In the response body of each of the following operations:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

  Added the following missing fields:
  - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringDelivery`
  - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringDelivery`
  - `orders` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringDelivery`

- In the response body of the "Retrieve an order" operation, added the following missing fields:
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringDelivery`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringDelivery`
  - `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` > `recurringDelivery`

#### Other doc updates

The following items are the other general documentation updates included in this release:

- In the description of the "Create an account" operation, updated the note on the  `invoiceDeliveryPrefsEmail` field for better clarity.

- In the source YAML file, renamed the `TaxInfo` definition to `SignUpTaxInfo` in the "Sign up" operation.

- For each of the following operations, updated the description of each of request and response fields:
    - Create a price book item
    - Update a price book item
    - List all price book items
    - Retrieve a price book item
    - Delete a price book item

- In the "Minor Version History" table of the "API Versions" section, updated minor version from `196.0` to `206.0` for the following fields:
    - `includeExistingDraftInvoiceItems`
    - `previewType`
    - `invoiceTargetDate`

- In the request body of each of the "Preview a subscription" and "Update a subscription" operations, added minor version `206.0` to the description of each of the following fields:
  - `includeExistingDraftInvoiceItems`
  - `previewType`

- In the request body and response body of the "Preview a subscription" operation, added minor version `206.0` to the description of the `invoiceTargetDate` field.



## March 24, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/25_Zuora_Release_2023.03.R2" target="_blank">Zuora Release 2023.03.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

#### API updates for the Offers feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Product_Catalog/Offers" target="_blank">Offers</a> feature.

- [Offers](https://developer.zuora.com/api-references/api/tag/Offers/) - Added a resource called "Offers", with the following operations:
    - Create an offer
    - List all offers
    - Retrieve an offer
    - Delete an offer

- [Price Book Items](https://developer.zuora.com/api-references/api/tag/Price-Book-Items/) - Added a resource called "Price Book Items", with the following operations:
    - Create a price book item
    - Update a price book item
    - List all price book items
    - Retrieve a price book item
    - Delete a price book item

#### API updates for the Delivery Pricing charge model

The following items are the API updates specific to the Delivery Pricing charge model.

- [Product Rate Plan Charges](/v1-api-reference/api/product-rate-plan-charges) - In the request body of each of the following operations:
    - CRUD: Create a product rate plan charge
    - CRUD: Update a product rate plan charge

    Made the following updates:
    - Added the `DeliverySchedule` field and its nested fields.
    - Added the `Delivery Pricing` enum value to the `ChargeModel` field.

- [Product Rate Plans](/v1-api-reference/api/product-rate-plans) - In the response body of the “List product rate plans” operation, made the following updates:
    - Added the `productRatePlans` > `productRatePlanCharges`  > `deliverySchedule` field and its nested fields.
    - Added the `Delivery` enum value to the `productRatePlans` > `productRatePlanCharges` > `model` field.

#### Other API updates

The following items are the other general API updates included in this release:

- [Accounts](/v1-api-reference/api/accounts) - In the request body of the "Create an account" operation, added the following fields:
    - `paymentMethod` > `ipAddress`
    - `paymentMethod` > `accountHolderInfo` > `country`

- [Orders](/v1-api-reference/api/orders) - In the request body of each of the following operations:
  - Create an order
  - Create an order asynchronously
  - Update an order

  Added the following fields:
  - `newAccount` > `paymentMethod` > `ipAddress`
  - `newAccount` > `paymentMethod` > `accountHolderInfo` > `country`
  - `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `paymentMethod` > `ipAddress`
  - `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `paymentMethod` > `accountHolderInfo` > `country`

- [Payment Methods](/v1-api-reference/api/payment-methods) - In the request body of each of the following operations:
  - Create a payment method
  - Update a payment method

  Added the following fields:
  - `ipAddress`
  - `accountHolderInfo` > `country`

- [Sign Up](/v1-api-reference/api/sign-up) - In the request body of the "Sign up" operation, added the `ipAddress` nested field to the `newAccount` > `paymentMethod` field.


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the source YAML file, made the following changes to the "Sign up" operation:
  - Renamed the `PaymentMethod` definition to `SignUpPaymentMethod`.
  - Renamed the `CreatePaymentMethodCreditCardReferenceTransaction` definition to `SignUpCreatePaymentMethodCreditCardReferenceTransaction`.
  - Renamed the `CreatePMPayPalECPayPalNativeEC` definition to `SignUpCreatePMPayPalECPayPalNativeEC`.
  - Renamed the `CreatePaymentMethodPayPalAdaptive` definition to `SignUpCreatePaymentMethodPayPalAdaptive`.
  - Renamed the `CreatePaymentMethodCreditCard` definition to `SignUpCreatePaymentMethodCreditCard`.
  - Renamed the `CreatePaymentMethodCommon` definition to `CreatePaymentMethodCommon`.
  - Renamed the `PaymentMethodObjectCustomFields` definition to `SignUpPaymentMethodObjectCustomFields`.
  - Renamed the `CreatePaymentMethodCardholderInfo` definition to `SignUpCreatePaymentMethodCardholderInfo`.

- In the request body of each of the following operations, aligned descriptions of the fields for creating stored credential profiles:
  - Create a payment method
  - Create a stored credential profile

- In the description of the "Retrieve a rate plan" operation, added a note to clarify that you can only retrieve information about the following order actions:
  - `addProduct`
  - `updateProduct`
  - `removeProduct`
  - `changePlan`

- Updated the limitations for the "Delete an account" operation.

- In the request body of the "Create an order" operation, updated the refunding requirements in the description of the `processingOptions` > `refund` field.



## March 17, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/26_Zuora_Release_2023.03.R1" target="_blank">Zuora Release 2023.03.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases"  target="_blank">Latest releases</a>.

- [Adjustments](/v1-api-reference/api/delivery-adjustments) - In the request body of each of the following operations, added the `chargeNumbers` field:
  - Create an adjustment
  - Preview an adjustment

- [Orders](/v1-api-reference/api/orders) - Made the following updates:

  - In the request body of each of the following operations:
      - Preview an order
      - Preview an order asynchronously

      Added the following fields and their nested fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `priceIntervals`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `priceIntervals`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `priceIntervals`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `priceIntervals`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `priceIntervals`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `priceIntervals`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `priceIntervals`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `priceIntervals`

  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Update an order

      Added the following fields and their nested fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `priceIntervals`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `priceIntervals`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringTiered` > `priceIntervals`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `priceIntervals`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringDeliveryBased` > `priceIntervals`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `priceIntervals`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `priceIntervals`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `priceIntervals`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `priceIntervals`
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringDeliveryBased` > `priceIntervals`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `priceIntervals`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `priceIntervals`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `priceIntervals`
      - `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `priceIntervals`


  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Added the following fields and their nested fields:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `priceIntervals`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `priceIntervals`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringTiered` > `priceIntervals`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `priceIntervals`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `priceIntervals`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `priceIntervals`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `priceIntervals`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `priceIntervals`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `priceIntervals`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `priceIntervals`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `priceIntervals`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `priceIntervals`

  - In the response body of the "Retrieve an order" operation, added the following fields and their nested fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `priceIntervals`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `priceIntervals`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringTiered` > `priceIntervals`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts` > `chargeOverrides` > `pricing` > `recurringVolume` > `priceIntervals`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `priceIntervals`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `priceIntervals`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `priceIntervals`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `priceIntervals`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `priceIntervals`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `priceIntervals`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `priceIntervals`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `priceIntervals`

  - In the description of the "Create an order" operation, deleted a limitation for draft orders.

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following updates:
  - In the request body of the "Update a subscription" operation, added the following fields:
      - `bookingDate`
      - `add` > `bookingDate`
      - `change` > `bookingDate`
      - `remove` > `bookingDate`
      - `update` > `bookingDate`

  - In the request body of each of the following operations, added the `bookingDate` field:
      - Cancel a subscription
      - Resume a subscription
      - Suspend a subscription


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

#### Doc updates for passing in email information when creating payment methods

The following items are the documentation updates specific to the clarification that the `email` field is only supported for creating PayPal payment methods:

- In the request body of the "Create a payment method" operation, updated the description of the `email` field.
- In the request body of the "Create an account" operation, updated the description of the `paymentMethod` > `email` field.
- In the request body of the "Sign up" operation, updated the description of the `accountData` > `paymentMethod` > `email` field.
- In the request body of each of the following operations:
  - Create an order
  - Create an order asynchronously

  Updated the description of each of the following fields:
  - `newAccount` > `paymentMethod` > `email`
  - `subscriptions` > `orderActions` > `createSubscription` > `newSubscriptionOwnerAccount` > `paymentMethod` > `email`

#### Other doc updates

The following items are the other general documentation updates included in this release:

- In the request body of the "Update a payment method" operation, updated the description of each of the following fields to clarify that the field is not supported for updating Credit Card Reference Transaction payment methods:
  - `authGateway`
  - `gatewayOptions`
  - `accountHolderInfo`
  - Custom fields

- In the request body of each of the following operations, added descriptions for the `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` field and its nested fields:
  - Create an order
  - Create an order asynchronously

- In the response body of each of the following operations, added descriptions for the `orders` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` field and its nested fields:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

- For each of the following operations, added the missing `exclude-rate-plans-with-no-charges` query parameter:
  - List subscriptions by account key
  - Retrieve a subscription by key
  - Retrieve a subscription by key and version

- In the response body of the "Retrieve an order" operation, added descriptions for the `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `pricing` field and its nested fields.

- In the source YAML file, added the `CreateOfferRatePlanOverride` definition, and updated the request body schema reference of each of the following operations to this definition:
  - Create an order
  - Update an order

- In the source YAML file, added the `GetOfferRatePlanOverride` definition, and updated the request body schema reference of each of the following operations to this definition:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

- In the source YAML file, added the `GetOfferRatePlanUpdate` definition, and updated the request body schema reference of each of the following operations to this definition:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

- In the response body of the "Retrieve an invoice" operation, updated the description of the `templateId` field for better clarity.


## March 10, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a  href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/26_Zuora_Release_2023.03.R1"  target="_blank">Zuora Release 2023.03.R1</a>. For release notes for all Zuora products, see <a  href="https://knowledgecenter.zuora.com/Releases/Latest_releases"  target="_blank">Latest releases</a>.

#### API updates for the Offers feature

The following items are the API updates specific to the Offers feature.

- [Orders](/v1-api-reference/api/orders) - Made the following updates:

  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Update an order

      Added the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts`
      - `subscriptions` > `orderActions` > `addProduct` > `productOfferId`
      - `subscriptions` > `orderActions` > `addProduct` > `productOfferNumber`
      - `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides`
      - `subscriptions` > `orderActions` > `updateProduct` > `subscriptionOfferNumber`
      - `subscriptions` > `orderActions` > `updateProduct` > `subscriptionOfferId`
      - `subscriptions` > `orderActions` > `updateProduct` > `subscriptionOfferUniqueToken`
      - `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates`
      - `subscriptions` > `orderActions` > `removeProduct` > `subscriptionOfferNumber`
      - `subscriptions` > `orderActions` > `removeProduct` > `subscriptionOfferId`
      - `subscriptions` > `orderActions` > `removeProduct` > `subscriptionOfferUniqueToken`

  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Added the following fields:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `productOfferId`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `productOfferNumber`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `newSubscriptionOfferId`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `newSubscriptionOfferNumber`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `subscriptionOfferUniqueToken`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides`
      - `orders` > `subscriptions` > `orderActions` > `updateProduct` > `subscriptionOfferId`
      - `orders` > `subscriptions` > `orderActions` > `updateProduct` > `productOfferNumber`
      - `orders` > `subscriptions` > `orderActions` > `updateProduct` > `subscriptionOfferNumber`
      - `orders` > `subscriptions` > `orderActions` > `updateProduct` > `subscriptionOfferUniqueToken`
      - `orders` > `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates`
      - `orders` > `subscriptions` > `orderActions` > `removeProduct` > `subscriptionOfferId`
      - `orders` > `subscriptions` > `orderActions` > `removeProduct` > `subscriptionOfferNumber`
      - `orders` > `subscriptions` > `orderActions` > `removeProduct` > `subscriptionOfferUniqueToken`

  - In the response body of the "Retrieve an order" operation, added the following fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToProducts`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `productOfferId`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `productOfferNumber`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `newSubscriptionOfferId`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `newSubscriptionOfferNumber`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `subscriptionOfferUniqueToken`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `ratePlanOverrides`
      - `order` > `subscriptions` > `orderActions` > `updateProduct` > `subscriptionOfferId`
      - `order` > `subscriptions` > `orderActions` > `updateProduct` > `productOfferNumber`
      - `order` > `subscriptions` > `orderActions` > `updateProduct` > `subscriptionOfferNumber`
      - `order` > `subscriptions` > `orderActions` > `updateProduct` > `subscriptionOfferUniqueToken`
      - `order` > `subscriptions` > `orderActions` > `updateProduct` > `ratePlanUpdates`
      - `order` > `subscriptions` > `orderActions` > `removeProduct` > `subscriptionOfferId`
      - `order` > `subscriptions` > `orderActions` > `removeProduct` > `subscriptionOfferNumber`
      - `order` > `subscriptions` > `orderActions` > `removeProduct` > `subscriptionOfferUniqueToken`

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following updates:
    - In the response body of the "List subscriptions by account key" operation, added the `subscriptions` > `offers` field.
    - In the response body of each of the following operations, added the `offers` field:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

#### API updates for the Delivery Pricing charge model

The following items are the API updates specific to the Delivery Pricing charge model.

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following updates:

  - In the response body of each of the following operations:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

      Added the following fields:
      - `ratePlans` > `ratePlanCharges` > `deliverySchedule`
      - `ratePlans` > `ratePlanCharges` > `subscriptionChargeIntervalPricing`

  - In the response body of each of the following operations, added the `Delivery` enum value to the `ratePlans` > `ratePlanCharges` > `model` field:
      - Retrieve a subscription by key
      -	Retrieve a subscription by key and version

  - In the response body of the "List subscriptions by account key" operation, added the following fields:
      - `subscriptions` > `ratePlans` > `ratePlanCharges` > `deliverySchedule`
      - `subscriptions` > `ratePlans` > `ratePlanCharges` > `subscriptionChargeIntervalPricing`

  - In the response body of the "List subscriptions by account key" operation, added the `Delivery` enum value to the `subscriptions` > `ratePlans` > `ratePlanCharges` > `model` field.

#### API updates for the Scheduled Orders feature

The following items are the API updates specific to the [Scheduled Orders](https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Orders/AA_Overview_of_Orders/P_Scheduled_Orders) feature.

- [Orders](/v1-api-reference/api/orders) - Made the following updates:

  - In the description of the "Cancel an order" operation, added a note to clarify that cancellation is only valid for draft or scheduled orders.

  - In the description of each of the following operations, added a note to clarify that you cannot retrieve detailed information about draft orders or scheduled orders through this operation:
      - List orders of a subscription owner
      - List orders of an invoice owner

  - In the request body of each of the following operations, added the `status` and `schedulingOptions` fields:
      - Create an order
      - Update an order

  - In the response body of each of the following operations:
      - List orders
      - List orders by subscription number

      Made the following updates:
      - Added the `Scheduled`, `Executing`, and `Failed` enum values to the `orders` > `status` field.
      - Added the `orders` > `schedulingOptions` field.

  - In the response body of the "Retrieve an order" operation, made the following updates:
      - Added the `Scheduled`, `Executing`, and `Failed` enum values to the `status` field.
      - Added the `schedulingOptions` field.

#### API updates for the Adjustments feature

The following items are the API updates specific to the Adjustments feature.

- [Adjustments](/v1-api-reference/api/delivery-adjustments) - Added a resource called "Adjustments", with the following operations:
  - Create an adjustment
  - List all adjustments of the latest version subscription
  - Retrieve an adjustment
  - Preview an adjustment
  - Cancel an adjustment

#### Other API updates

The following items are the other general API updates included in this release:

- [Subscriptions](/v1-api-reference/api/subscriptions/) - In the request body and response body of the "Preview a subscription" operation, added the `documentDate` field.

- [Order Actions](/v1-api-reference/api/order-actions/) - Added an API operation called "Update an order action".

- [Accounts](/v1-api-reference/api/accounts/) - Made the following updates:
    - In the response body of the "Retrieve an account" operation, added the `autoPay`  field nested field to the `billingAndPayment` field.
    - In the response body of the "Retrieve an account summary" operation, added the `autoPay`  field nested field to the `basicInfo` field.

- [Credit Memos](/v1-api-reference/api/credit-memos) - Made the following updates:
  - In the response body of each of the following operations, added the `billToContactSnapshotId`  field:
      - Create a credit memo from a charge
      - Create a credit memo from an invoice
      - Retrieve a credit memo
      - Update a credit memo
      - Apply a credit memo
      - Unapply a credit memo
      - Cancel a credit memo
      - Post a credit memo
      - Unpost a credit memo
  - In the response body of each of the following operations, added the `billToContactSnapshotId` nested field to the `memos` field:
      - Create credit memos
      - Update credit memos
  - In the response body of the "List credit memos" operation, added the `billToContactSnapshotId` nested field to the `creditmemos` field.

- [Debit Memos](/v1-api-reference/api/debit-memos) - Made the following updates:
  - In the response body of each of the following operations, added the `billToContactSnapshotId` field:
      - Create a debit memo from a charge
      - Create a debit memo from an invoice
      - Retrieve a debit memo
      - Update a debit memo
      - Cancel a debit memo
      - Post a debit memo
      - Unpost a debit memo
  - In the response body of each of the following operations, added the `billToContactSnapshotId` nested field to the `memos` field:
      - Create debit memos
      - Update debit memos
  - In the response body of the "List debit memos" operation, added the `billToContactSnapshotId` nested field to the `debitmemos` field.

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of the "Update a subscription" operation, updated the description of each of the following fields to state that the field is not updatable:
  - `add` > `chargeOverrides` > `originalOrderDate`
  - `change` > `chargeOverrides` > `originalOrderDate`

- In the request body of each of the following operations, updated the description of the `processingOptions` > `applyCredit` field for better clarity:
    - Create an order
    - Create an order asynchronously
    - Update an order


## March 3, 2023

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of each of the following operations, added a limitation on the Change Plan order action in the description of the `subscriptions` > `orderActions` > `changePlan` > `effectivePolicy` field.:
  - Preview an order
  - Preview an order asynchronously
  - Create an order
  - Create an order asynchronously
  - Update an order

- In the request body of the "Update a subscription" operation, added a limitation on the Change Plan amendment in the description of the `change` > `effectivePolicy` field.

- In the request body of the "Update a subscription" operation, updated the description of the `change` > `chargeOverrides` > `amendedByOrderOn` field to state that the field is not updatable.

- In the request body of the "Create a payment schedule" operation, updated the description of each of the following fields:
  - `runHour`
  - `items` > `runHour`

- In the request body of the "Create multiple payment schedules at once" operation, updated the description of each of the following fields:
  - `paymentSchedules` > `runHour`
  - `paymentSchedules` > `items` > `runHour`

- In the request body of the "Add payment schedule items to a custom payment schedule" operation, updated the description of the `items` > `runHour` field.

- In the request body of each of the following operations, updated the description of the `runHour` field:
  - Update a payment schedule item
  - Update a payment schedule
  - Preview the result of payment schedule updates


## February 24, 2023

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the response body of the "Retrieve an order" operation, updated the description of the `order` > `subscriptions` > `orderActions` > `updateProduct` > `ratePlanId` field to clarify that the version ID of the history can also be used.

- In the request body of the "Create an account" operation, removed the unsupported `country` nested field from the `paymentMethod` > `accountHolderInfo` field.

- In the request body of each of the following operations, removed the unsupported `country` nested field from the `newAcccount` > `paymentMethod` > `accountHolderInfo` field:
  - Create an order
  - Create an order asynchronously

- In the request body of each of the following operations, removed the unsupported `country` nested field from the `accountHolderInfo` field:
  - Create a payment method
  - Update a payment method

- In the source YAML file, added the `PUTOrderRequestType` definition, and updated the request body schema reference of the "Update an order" operation to this definition.

- In the source YAML file, renamed the `PaymentMethod` definition to `PostOrderAccountPaymentMethod` for the following operations:
  - Create an order
  - Create an order asynchronously


## February 21, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a  href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/27_Zuora_Release_2023.02.R2"  target="_blank">Zuora Release 2023.02.R2</a>. For release notes for all Zuora products, see <a  href="https://knowledgecenter.zuora.com/Releases/Latest_releases"  target="_blank">Latest releases</a>.

- [Bill Runs](/v1-api-reference/api/bill-run/) - In the response body of each of the following operations, added the `name` field:
  - Create a bill run
  - Post a bill run
  - Cancel a bill run
  - Retrieve a bill run


The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/28_Zuora_Release_2023.02.R1" target="_blank">Zuora Release 2023.02.R1</a>.

- [Usage](/v1-api-reference/api/usage/) - In the response body of the "Retrieve a usage record" operation, added the `fileName` field.


#### API updates for the paymentOption field

The following items are the API updates specific to the `paymentOption` field that is only available if you set `zuora-version` to `337.0` or later.

- [Payment Schedules](/v1-api-reference/api/payment-schedules/) - Made the following updates:
  - In the request body and response body of each of the following operations, added the `paymentOption` field:
      - Create a payment schedule
      - Preview the result of payment schedule update
      - Update a payment schedule
      - Update a payment schedule item
  - In the request body and response body of each of the following operations, added the `paymentOption` nested field to the `items` field:
      - Add payment schedule items to a custom payment schedule
      - Create a payment schedule
  - In the request body of the "Create multiple payment schedules at once" operation, added the `paymentOption` nested field to each of the following fields:
      - `paymentSchedules`
      - `paymentSchedules` > `items`
  - In the response body of each of the following operations, added the `paymentOption` field:
      - Cancel a payment schedule
      - Cancel a payment schedule item
      - List payment schedules by customer account
      - Retrieve a payment schedule
      - Retrieve a payment schedule item
      - Skip a payment schedule item
  - In the response body of each of the following operations, added the `paymentOption` nested field to the `items` field:
      - Cancel a payment schedule
      - List payment schedules by customer account
      - Preview the result of payment schedule update
      - Retrieve a payment schedule
      - Retry failed payment schedule items
      - Update a payment schedule
  - In the "Create a payment schedule" operation, added the following fields to the description of the `zuora-version` request header:
      - `paymentOption`
      - `items` > `paymentOption`
  - In the "Create multiple payment schedules at once" operation, added the following fields to the description of the `zuora-version` request header:
      - `paymentSchedules` > `paymentOption`
      - `paymentSchedules` > `items` > `paymentOption`
  - In each of the following operations, added the `paymentOption` field to the description of the `zuora-version` request header:
      - Update a payment schedule item
      - Update a payment schedule
      - Preview the result of payment schedule update
      - Retrieve a payment schedule
      - Retrieve a payment schedule item
      - List payment schedules by customer account
      - Cancel a payment schedule
      - Cancel a payment schedule item
      - Skip a payment schedule item
  - In each of the following operations, added the `items` > `paymentOption` field to the description of the `zuora-version` request header:
      - Add payment schedule items to a custom payment schedule
      - Retry failed payment schedule items
      - Retrieve a payment schedule
      - Cancel a payment schedule

- [Payments](/v1-api-reference/api/payments) - Made the following updates:
  - For the "Create a payment" operation, made the following updates:
      - In the request body and response body, added the `paymentOption` field.
      - In the description of the `zuora-version` request header, added the `paymentOption` field.
  - For the "List payments" operation, made the following updates:
      - In the response body, added the `paymentOption` nested field to the `payments` field.
      - In the description of the `zuora-version` request header, added `payments` > `paymentOption`.


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the response body of the "CRUD: Retrieve a bill run" operation, added the following missing enum values to the `Status` field:
  - `PostInProgress`
  - `CancelInProgress`
  - `RemoveInProgress`
  - `Paused`

- Updated the description of the "Create an OAuth token" operation.

- In the "API Versions" section, added the following missing fields to the "Minor Version History" table:
  - `billingDocument`
  - `paymentId`
  - `linkPayments`
  - `unlinkPayments`
  - `psiPayments`

- In the "Update a payment schedule item" operation, added the missing `zuora-version` request header.

- In each of the following operations, added the missing fields in version control to the description of the `zuora-version` request header:
  - Create a payment schedule
  - Create multiple payment schedules at once
  - List payment schedules by customer account
  - Retrieve a payment schedule
  - Update a payment schedule
  - Preview the result of payment schedule updates
  - Cancel a payment schedule
  - Add payment schedule items to a custom payment schedule
  - Retrieve a payment schedule item
  - Update a payment schedule item
  - Cancel a payment schedule item
  - Skip a payment schedule item
  - Retry failed payment schedule items

- Moved the following CRUD operations to the Older API Reference to avoid confusion:
  - CRUD: Delete an account
  - CRUD: Create a bill run
  - CRUD: Retrieve a bill run
  - CRUD: Post or cancel a bill run
  - CRUD: Delete a bill run
  - CRUD: Retrieve an invoice
  - CRUD: Delete an invoice

- In the request body of the "Amend" action in the Older API Reference, corrected the name of the `requests` > `Amendments` > `bookingDate` field to `requests` > `Amendments` > `BookingDate`.


## February 13, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/28_Zuora_Release_2023.02.R1" target="_blank">Zuora Release 2023.02.R1</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

- [Bill Runs](/v1-api-reference/api/bill-run/) - Added the following operations:
    - Create a bill run
    - Post a bill run
    - Cancel a bill run
    - Retrieve a bill run
    - Delete a bill run

- [Orders](/v1-api-reference/api/orders) - Made the following updates:

  - Added the following operations only applied to orders in `Draft` status:
      - Update an order
      - Activate an order
      - Cancel an order

  - In the request body of the "Create an order" operation, added the `status` field.

  - In the response body of the "Create an order" operation, added the `Draft` enum value to the `status` field.

  - In the response body of each of the following operations, added the `Draft` enum value to the `orders` > `status` field:
      - List orders
      - List orders by subscription number
      - List pending orders by subscription number

  - In the response body of the "Retrieve an order" operation, added the `Draft` enum value to the `order` > `status` field.

  - In the description of each of the following operations, added a note to clarify that you cannot retrieve the detailed information about draft orders:
      - List orders of a subscription owner
      - List orders of an invoice owner

- [Custom Object Jobs](/v1-api-reference/api/custom-object-jobs) - For the "List all custom object bulk jobs" operation, added a query parameter called `status` that accepts the status of bulk jobs.


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the description of the "List all settings" operation, added the following common use cases for notification definitions:
  - <a href="https://knowledgecenter.zuora.com/Zuora_Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Get_a_notification_definition" target="_blank">Get a notification definition</a>
  - <a href="https://knowledgecenter.zuora.com/Zuora_Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Update_a_notification_definition" target="_blank">Update a notification definition</a>
  - <a href="https://knowledgecenter.zuora.com/Zuora_Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Delete_a_notification_definition" target="_blank">Delete a notification definition</a>

- In the description of each of the following operations, added an alternative Settings API operation that applies to standard, custom, and custom scheduled events:
  - List notification definitions
  - Retrieve a notification definition
  - Update a notification definition
  - Delete a notification definition

- For the "List all custom object bulk jobs" operation, removed the unsupported `page` query parameter.

- Added the "Reporting" section that contains the following operations to the Older API Reference:
  - Retrieve a report run
  - Cancel a report run
  - Run a report
  - Search reports by name
  - Retrieve the last completed report run
  - Retrieve report data
  - Export results of a report run

  Previously, these operations were documented in the Knowledge Center.


## February 2, 2023

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- Relocated the following files:
   - Source Swagger file: / yaml/swagger.yaml
   - Settings API CSV file: / settings-api/ListAllSettingsResponseSample.csv
   - Settings API JSON file: / settings-api/ListAllSettingsResponseSample.json

  Previously, they were located in the assets.zuora.com domain. For information about other relocated resources, see <a href="https://community.zuora.com/discussion/relocation-of-zuora-api-specifications#bm0e72de89-993a-46be-b528-06cf1fbfd8a2" target="_blank">this Community post</a>.

- Removed the `Idempotency-Key` header parameter from all PUT and GET methods.

- For the `AllCustomObjects` and `CustomObject` settings of Settings API, corrected the name of each of the following fields by capitalizing the first letter:
  - `Id`
  - `CreatedById`
  - `UpdatedById`
  - `CreatedDate`
  - `UpdatedDate`

- In the response body of the "List all product rate plans of a product" operation, added the `ConsumptionBased` enum value back to the `creditOption` > `productRatePlans` > `productRatePlanCharges` field.

- In the request body of each of the following operations, added the `ConsumptionBased` enum value back to the `CreditOption` field:
  - CRUD: Create a product rate plan charge
  - CRUD: Update a product rate plan charge

- In the response body of the "List subscriptions by account key" operation, added the `ConsumptionBased` enum value back to the `subscriptions` > `ratePlans` > `ratePlanCharges` > `creditOption` field.

- In the response body of each of the following operations, added the `ConsumptionBased` enum value back to the `ratePlans` > `ratePlanCharges` > `creditOption` field:
  - Retrieve a subscription by key
  - Retrieve a subscription by key and version


## January 19, 2023

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- Updated the default MIME type for all operations from `application/json;charset=utf-8` to `application/json`.

- In the request body of the "Create a payment method" operation, updated the description of the `bankAccountName` field to clarify requirements specific to the BlueSnap integration.

- In the request body of the "Create an account" operation, updated the description of the `paymentMethod` > `bankAccountName` field to clarify requirements specific to the BlueSnap integration.

- In the request body of the "Create an order" operation, updated the description of the `newAccount` > `paymentMethod` > `bankAccountName` field to clarify requirements specific to the BlueSnap integration.

- Fixed the broken links in the description of the "Payment Gateway Reconciliation" section.

- Updated the description of each of the following operations:
  - Upload a usage file
  - Update an account
  - List all products
  - List all product rate plans of a product
  - Refund a payment
  - Delete a payment method
  - Create a credit memo from a charge
  - Create a notification definition
  - Create an order
  - Preview an order
  - CRUD: Update a contact
  - CRUD: Update a payment method
  - List all invoices for an account

- In the request body of the "CRUD: Create a product rate plan" operation, updated the description of the `ActiveCurrencies` field.

- In the response body of the "List subscriptions by account key" operation, updated the description of the `subscriptions` > `ratePlans` > `lastChangeType` field.

- In the response body of each of the following operations, updated the description of the `ratePlans` > `lastChangeType` field:
  - Retrieve a subscription by key
  - Retrieve a subscription by key and version

- In the description of the `subscription-key` path parameter of the "Update a subscription" operation, suggested retrieving the latest or history version of the subscription ID before updating a specific version of the subscription.

- In the response body of the "Retrieve an order line item" operation, corrected the data type of the `orderLineItem` > `productRatePlanChargeId` field.

- In the description of the "Cancel a payment schedule" operation, clarified that only pending payment schedule items will be canceled.

- In the response body of each of the following operations:

  - Retrieve a payment schedule item
  - Update a payment schedule item
  - Cancel a payment schedule item
  - Skip a payment schedule item

  Updated the description of each of the following fields to state the requirement on the API version:

  - `balance`
  - `psiPayments`

- In the response body of each of the following operations:

  - Create a payment schedule
  - List payment schedule by customer account
  - Create multiple payment schedules at once
  - Retrieve a payment schedule
  - Add payment schedule items to a custom payment schedule
  - Retry failed payment schedule items

  Updated the description of each of the following fields to state the requirement on the API version:

  - `items` > `balance`
  - `items` > `psiPayments`



## January 13, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/29_Zuora_Release_2023.01.R2" target="_blank">Zuora Release 2023.01.R2</a>. For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

### API updates for the Flexible Billing feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Billing/Subscriptions/Flexible_Billing" target=“_blank”>Flexible Billing</a> feature.

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following updates:
    - In the response body of the "List subscriptions by account key" operation, added the following nested field to the `subscriptions` field:
          - `invoiceTemplateName`
          - `sequenceSetName`
    - In the response body of each of the following operations, added the `invoiceTemplateName` and `sequenceSetName` fields:
        - Retrieve a subscription by key
        - Retrieve a subscription by key and version

#### API updates for the Billing Schedule feature

The following items are the API updates specific to the Early Adopter announcement of the <a href="https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Billing_Schedule" target=“_blank”>Billing Schedule</a> feature.

- [Orders](/v1-api-reference/api/orders) - Made the following updates:
  - In the response body of each of the following operations, added the `invoiceScheduleId` nested field to the `order` field:
      - Retrieve an order
      - List order metrics for an evergreen subscription

  - In the response body of each of the following operations, added the `invoiceScheduleId` nested field to the `orders` field:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following updates:
    - In the response body of the "List subscriptions by account key" operation, added the `invoiceScheduleId` nested field to the `subscriptions` field:
    - In the response body of each of the following operations, added the `invoiceScheduleId` field:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version


#### API updates for the Payment Schedules feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Billing_and_Payments/Payment_Schedules" target="_blank">Payment Schedules</a> feature.

- [Payment Schedules](/v1-api-reference/api/payment-schedules/) - Made the following updates:

  - In the request body of the “Update a payment schedule item” operation, added the following fields to support linking multiple payments to a payment schedule item:

      - `linkPayments`
      - `unlinkPayments`

  - In the response body of each of the following operations:

      - Retrieve a payment schedule item
      - Update a payment schedule item
      - Cancel a payment schedule item
      - Skip a payment schedule item

      Added the following fields to support linking multiple payments to a payment schedule item and payment schedule item balance:

      - `balance`
      - `psiPayments`

  - In the response body of each of the following operations:

      - Create a payment schedule
      - List payment schedule by customer account
      - Create multiple payment schedules at once
      - Retrieve a payment schedule
      - Add payment schedule items to a custom payment schedule
      - Retry failed payment schedule items

      Added the following fields to support linking multiple payments to a payment schedule item and payment schedule item balance:

      - `items` > `balance`
      - `items` > `psiPayments`

#### Other API updates

The following items are the other general API updates included in this release:

- [Accounts](/v1-api-reference/api/accounts/) - Added an operation called "Delete an account".

- [Invoices](/v1-api-reference/api/invoices) - Made the following updates:
    - Added an operation called "Retrieve an invoice".
    - In the request body of the "Post invoices" operation, added the support for custom fields to the `invoices` field.

- [Custom Object Jobs](/v1-api-reference/api/custom-object-jobs) - Added an operation called "Cancel a custom object bulk job".

- [Communication Profiles](/api-references/older-api/tag/Communication-Profiles/) - In the response body of the "CRUD: Retrieve a communication profile" operation, added the following fields:
  - `IsDefault`
  - `Muted`


### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- Updated the description of each of the following actions:
  - Create
  - Update

- In the request body of each of the following operations, removed the unsupported `SubmissionDateTime` field:
  - CRUD: Create a usage record
  - CRUD: Retrive a usage record
  - CRUD: Update a usage record

- In the description of the “Update a payment schedule item” operation, added notes on linking and unlinking multiple payments to a payment schedule item.

- In the response body of the "List credit memo items" operations, added the missing `OrderLineItem` enum value to each of the following fields:
  - `items` > `sourceItemType`
  - `items` > `sourceItemId`

- In the response body of the "Retrive a credit memo item" operation, added the missing `OrderLineItem` enum value to each of the following fields:
  - `sourceItemType`
  - `sourceItemId`

- In the response body of the "List credit memos” operation, added the missing `Order`, `CreditMemo`, and `Consolidation` enum values to the `creditmemos` > `sourceType` field.

- In the response body of each of the following operation, added the missing `Order`, `CreditMemo`, and `Consolidation` enum values to the `memos` > `sourceType` field:
  - Create credit memos
  - Update credit memos

- In the response body of each of the following operations, added the missing `Order`, `CreditMemo`, and `Consolidation` enum values to the `sourceType` field:
  - Retrive a credit memo
  - Create a credit memo from a charge
  - Create a credit memo from an invoice
  - Update a credit memo
  - Apply a credit memo
  - Cancel a credit memo
  - Post a credit memo
  - Unapply a credit memo
  - Unpost a credit memo




## January 6, 2023

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/48_2023_Releases/30_Zuora_Release_2023.01.R1" target="_blank">Zuora Release 2023.01.R1</a>.

- [Settings](/v1-api-reference/api/settings) - Added the `Per_Specific_Months` enum value to the `listPriceBase` parameter of the `BillingListPriceBase` setting.

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of each of the following operations, updated the description of the `gatewayOptions` field by adding a link to the relevant article in the Knowledge Center:
  - Create a payment method
  - Update a payment method
  - Verify a payment method
  - Create authorization
  - Cancel authorization
  - Create a payment
  - Refund a payment

- In the request body of the “Create a standalone invoice” operation, updated the description of the `invoiceItems` > `unitPrice` field to state this field is required for passing Level 3 card data to the gateway.

- In the request body of the “Create standalone invoices” operation, updated the description of the `invoices` > `invoiceItems` > `unitPrice` field to state this field is required for passing Level 3 card data to the gateway.

- In each of the Orders operations and Order Line Items operations, updated the general availability note about the <a href="https://knowledgecenter.zuora.com/Zuora_Billing/Subscriptions/Orders" target="_blank">Orders</a> feature.

- In the request body of the “Create a standalone invoice” operation, added a note to the description of each of the following fields about the permission control information:
  - `invoiceItems` > `taxItems`
  - `invoiceItems` > `discountItems` > `taxItems`

- In the request body of the “Create standalone invoices” operation, added a note to the description of each of the following fields about the permission control information:
  - `invoices` > `invoiceItems` > `taxItems`
  - `invoices` > `invoiceItems` > `discountItems` > `taxItems`







