---
excludeFromSearch: true
redirects:
  /rest-api/changelog/2022q4-changelog/: {}
---


# 2022 Changelog

This page summarizes the changes that are made to the API Reference for Billing, Payments, and Central Platform from October 2022 to December 2022. For the REST API updates and documentation updates that were made before September 2022, see <a href="https://community.zuora.com/discussion/2022-api-changelog" target="_blank">2022 API Changelog</a> in the Zuora Community.

For release notes for all Zuora products, see <a href="https://knowledgecenter.zuora.com/Releases/Latest_releases" target="_blank">Latest releases</a>.

<!--
**Note:** Starting from **January 2023** (<i>tentative</i>), we will upgrade our OpenAPI specification (OAS) to version 3.0.
We will NOT continue to maintain our API specification in OAS 2.0 after this cutover date. For more information, see <a href="https://community.zuora.com/discussion/upcoming-upgrade-of-zuora-api-documentation-to-openapi-specification-version-30#bm4be6b8db-ca44-45d5-8b05-172204b1c5a8" target="_blank">this post</a>.
-->


## 2022-12-21

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- Separated the documentation for some of older API operations into [Older API Reference](/v1-api-reference/older-api/).

- In the request body of each of the following operations:
  - Create a standalone invoice
  - Create a credit memo from a charge
  - Refund a credit memo
  - Create a debit memo from a charge
  - Create a payment
  - Refund a payment

  Made the following changes:
    - Added a note to the description of the `customRates` field about the permission control information.
    - Corrected the note information for each of the following fields:
      - `customRates` > `currency`
      - `customRates` > `rateDate`




## 2022-12-16

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/49_2022_Releases/11_Zuora_Release_2022.12.R2" target="_blank">Zuora Release 2022.12.R2</a>.

- [Invoices](/v1-api-reference/api/invoices) - Added an operation called "Delete an invoice".
- [Operations](/v1-api-reference/api/operations) - Added an operation called "Retrieve an operation job".
- [Sign Up](/v1-api-reference/api/sign-up) - Added an operation called "Sign up".

### Doc updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of the "CRUD: Update a product rate plan charge" operation, corrected the `Name` field to a non-required one as this is not required for the update call.



## 2022-12-09

### API updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of <a href="https://knowledgecenter.zuora.com/Releases/49_2022_Releases/12_Zuora_Release_2022.12.R1" target="_blank">Zuora Release 2022.12.R1</a>.

#### API updates for the Fulfillment and Return feature

The following items are API updates specific to the General Availability announcement of the Fulfillment and Return feature.

- [Orders](/v1-api-reference/api/orders) - In the description of each of the following operations, removed the Early Adopter note for the Fulfillment and Return feature:
  - Preview an order
  - Preview an order asynchronously
  - Create an order
  - Create an order asynchronously
  - List orders
  - Retrieve an order
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

- [Order Line Items](/v1-api-reference/api/order-line-items) - In the description of each of the following operations, removed the Early Adopter note for the Fulfillment and Return feature:
  - Retrieve an order line item
  - Update an order line item
  - Update order line items

- [Fulfillments](/v1-api-reference/api/fulfillments) - In the description of each of the following operations, removed the Early Adopter note for the Fulfillment and Return feature:
  - Create fulfillments
  - Retrieve a fulfillment
  - Update a fulfillment
  - Delete a fulfillment
  - Create fulfillment items
  - Retrieve a fulfillment item
  - Update a fulfillment item
  - Delete a fulfillment item

#### API updates for the Change Plan feature

The following items are API updates specific to the General Availability announcement of the Change subscription amendment and the Change Plan order action.

- [Subscriptions](/v1-api-reference/api/subscriptions) - In the description of the “Update a subscription” operation and the description of the `change` field in the request body of the “Update a subscription” operation, removed the Early Adopter note for the Change subscription amendment and added a note for the [Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature.

- [Orders](/v1-api-reference/api/orders) - Made the following updates:

  - In the request body of each of the following operations:
      - Preview an order
      - Preview an order asynchronously
      - Create an order
      - Create an order asynchronously

      Removed the Early Adopter note for the Change Plan order action and added a note for the [Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature in the following fields:

      - `subscriptions` > `orderActions` > `type`
      - `subscriptions` > `orderActions` > `changePlan`

  - In the response body of the "Retrieve an order" operation, removed the Early Adopter note for the Change Plan order action and added a note for the [Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature in the following fields:
      - `order` > `subscriptions` > `orderActions` > `type`
      - `order` > `subscriptions` > `orderActions` > `changePlan`

  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Removed the Early Adopter note for the Change Plan order action and added a note for the [Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Zuora_Billing_-_Revenue_Integration) feature in the following fields:
      - `orders` > `subscriptions` > `orderActions` > `type`
      - `orders` > `subscriptions` > `orderActions` > `changePlan`

#### API updates for the Billing Schedule feature

The following items are the API updates specific to the Early Adopter announcement of the <a href="https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Billing_Schedule" target="_blank">Billing Schedule</a> feature.

**Note**: The Billing Schedule feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at <a href="https://support.zuora.com/" target="_blank">Zuora Global Support</a>.

- [Invoice Schedules](/v1-api-reference/api/invoice-schedules) - Made the following updates:
	- In the request body and response body of each of the following operations, added the `name` nested field to the `scheduleItems` field:
      - Create an invoice schedule
      - Update an invoice schedule
	- In the response body of the "Retrieve an invoice schedule" operation, added the `name` nested field to the `scheduleItems` field.


#### API updates for the Annual List Price feature

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price" target="_blank">Annual List Price</a> feature.

**Note**: The Annual List Price feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at <a href="https://support.zuora.com/" target="_blank">Zuora Global Support</a>.

- [Accounts](/v1-api-reference/api/accounts) - In the request body of the "Create an account" operation, made the following changes:
	- Added the `Per_Specific_Months` enum value to the `subscription` > `subscribeToRatePlans` > `chargeOverrides` > `listPriceBase` field.
	- Added the `specificListPriceBase` nested field to the `subscription` > `subscribeToRatePlans` > `chargeOverrides` field.

- [Actions](/api-references/older-api/tag/Actions) - Made the following updates:
  - In the request body of the "Amend" action, made the following changes:
      - Added the `Per Specific Months` enum value to the `requests` > `Amendments` > `RatePlanData` > `RatePlanChargeData` > `RatePlanCharge` > `ListPriceBase` field.
      - Added the `SpecificListPriceBase` nested field to the `requests` > `Amendments` > `RatePlanData` > `RatePlanChargeData` > `RatePlanCharge` field.
  - In the request body of the "Subscribe" action, made the following changes:
      - Added the `Per Specific Months` enum value to the `subscribes` > `SubscriptionData` > `RatePlanData` > `RatePlanChargeData` > `RatePlanCharge` > `ListPriceBase` field.
      - Added the `SpecificListPriceBase` nested field to the `subscribes` > `SubscriptionData` > `RatePlanData` > `RatePlanChargeData` > `RatePlanCharge` field.


- [Orders](/v1-api-reference/api/orders) - Made the following updates:
  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Preview an order
      - Preview an order asynchronously

      Made the following changes:
      - Added the `Per_Specific_Months` enum value to each of the following fields:
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
      - Added the `specificListPriceBase` nested field to each of the following fields:
          - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee`
          - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit`
          - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered`
          - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume`
          - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee`
          - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit`
          - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered`
          - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume`
          - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee`
          - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit`
          - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered`
          - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume`

  - In the response body of each of the "Retrieve an order" and "List order metrics for an evergreen subscription" operations, made the following changes:
      - Added the `Per_Specific_Months` enum value to each of the following fields:
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
      - Added the `specificListPriceBase` nested field to each of the following fields:
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


  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Made the following changes:
      - Added the `Per_Specific_Months` enum value to each of the following fields:
          - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
      - Added the `specificListPriceBase` nested field to each of the following fields:
          - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
          - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`

- [Subscriptions](/v1-api-reference/api/subscriptions) - Made the following updates:
	- In the request body of each of the "Create a subscription" and "Preview a subscription" operations, made the following changes:
	    - Added the `Per_Specific_Months` enum value to the `subscribeToRatePlans` > `chargeOverrides` > `listPriceBase` field.
	    - Added the `specificListPriceBase` nested field to the `subscribeToRatePlans` > `chargeOverrides` field.

	- In the request body of the "Update a subscription" operation, made the following changes:
      - Added the `Per_Specific_Months` enum value to each of the following fields:
          - `add` > `chargeOverrides` > `listPriceBase`
          - `change` > `chargeOverrides` > `listPriceBase`
      - Added the `SpecificListPriceBase` nested field to each of the following fields:
          - `add` > `chargeOverrides`
          - `change` > `chargeOverrides`

	- In the response body of each of the "Retrieve a subscription by key" and "Retrieve a subscription by key and version" operations, made the following changes:
	    - Added the `Per_Specific_Months` enum value to the `ratePlans` > `ratePlanCharges` > `listPriceBase` field.
	    - Added the `specificListPriceBase` nested field to the `ratePlans` > `ratePlanCharges` field.

	- In the response body of the "List subscriptions by account key" operation, made the following changes:
		- Added the `Per_Specific_Months` enum value to the `subscriptions` > `ratePlans` > `ratePlanCharges` > `listPriceBase` field.
		- Added the `specificListPriceBase` nested field to the `subscriptions` > `ratePlans` > `ratePlanCharges` field.


- [Product Rate Plan Charges](/v1-api-reference/api/product-rate-plan-charges) - Made the following updates:
  - In the request body of each of the "CRUD: Create a product rate plan charge" and "CRUD: Update a product rate plan charge" operations, made the following changes:
      - Added the `Per Specific Months` enum value to the `ListPriceBase` field.
      - Added the `SpecificListPriceBase` field.

  - In the response body of the "CRUD: Retrieve a product rate plan charge" operation, made the following changes:
      - Added the `Per Specific Months` enum value to the `ListPriceBase` field.
      - Added the `SpecificListPriceBase` field.

- [Product Rate Plans](/v1-api-reference/api/product-rate-plans) - In the response body of the "List all product rate plans of a product" operation, made the following changes:
    - Added the `Per_Specific_Months` enum value to the `productRatePlans` > `productRatePlanCharges` > `listPriceBase` field.
    - Added the `specificListPriceBase` nested field to the `productRatePlans` > `productRatePlanCharges` field.

- [Rate Plan Charges](/api-references/older-api/tag/Rate-Plan-Charges/) - Made the following updates:
	- In the request body of the "CRUD: Update a rate plan charge" operation, made the following changes:
      - Added the `Per Specific Months` enum value to the `ListPriceBase` field.
      - Added the `SpecificListPriceBase` field.
	- In the response body of the "CRUD: Retrieve a rate plan charge" operation, made the following changes:
      - Added the `Per Specific Months` enum value to the `ListPriceBase` field.
      - Added the `SpecificListPriceBase` field.

- [Rate Plans](/api-references/older-api/tag/Rate-Plans/) - In the response body of the "Retrieve a rate plan" operation, made the following changes:
	- Added the `Per_Specific_Months` enum value to each of the following fields:
	    - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
	    - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
	    - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
	    - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
	- Added the `specificListPriceBase` nested field to each of the following fields:
	    - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee`
	    - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit`
	    - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered`
	    - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume`



#### Other API Updates

The following items are the other general API updates included in this release:

- [Orders](/v1-api-reference/api/orders) - Made the following updates:

  - In the response body of the "Preview an order" operation, added the `previewResult` > `invoices` > `invoiceItems` > `unitPrice` field.

  - In the request body of the "Create an order" operation, added the following fields to support automatic refunding and write-off during subscription cancellation:
      - `processingOptions` > `refund`
      - `processingOptions` > `refundAmount`
      - `processingOptions` > `writeOff`
      - `processingOptions` > `writeOffBehavior` and its nested fields

  - In the response body of the "Create an order" operation, added the following fields and their nested fields to support automatic refunding and write-off during subscription cancellation:
      - `refunds`
      - `writeOff`

- [Payment Methods](/v1-api-reference/api/payment-methods) - In the response body of the "Create authorization" operation, added the following fields:
    - `paymentGatewayResponse`
    - `processId`
    - `reasons` and its nested fields
    - `requestId`


### Doc Updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the description of the "CURD: Create a usage record" operation, removed a note about custom fields.

- In the description of the "Create an order asynchronously" operation, added a note stating that automatic refunding and write-off during subscription cancellation is not supported.

- In the request body of the “Write off an invoice” operation, updated the description of the `items` field to state if this field is specified, all items of the invoice must be filled into the array. Otherwise, an error will occur.

- In the request body of the “Update a payment schedule” operation, updated the description of the `occurrences` field to clarify the behavioral differences in conditions.

- In the request body of each of the following operations, updated the description of the `amount` field to clarify the two available options to specify amounts.
  - Create a payment schedule
  - Create multiple payment schedules at once

- In the description of the “Retry failed payment schedule items” operation, added more details of how this operation works.

- In the response body of the "List order metrics for an evergreen subscription" operation, added the missing `changePlan` field and its nested field to the `order` > `subscriptions` > `orderActions` field.



## 2022-12-02

### Doc Updates

This section lists the documentation updates that were made in this version of the API Reference.

- Relocated the following sections from the API Reference to be under the "Core concepts" section in the Developer Center:
	- Requests and responses
	- Rate and concurrent request limits
	- Making asynchronous requests
	- Authentication
	- Pagination

- Removed unsupported code samples in different programming languages from all operations.

## 2022-11-25


### API Updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of Zuora Release 2022.11.R3.

- [Payment Methods](/v1-api-reference/api/payment-methods/) - Made the following updates:
  - Updated the description of each of the following operations for the newly supported Delayed Capture feature on Stripe v2:
      - Create authorization
      - Cancel authorization
  - In the request body of each of the following operations, updated the description of the `IPAddress` field for the newly introduced IPv6 support:
      - CRUD: Create a payment method
      - CRUD: Update a payment method
- [Actions](/api-references/older-api/tag/Actions/) - In the request body of the "Subscribe" action, updated the description of the `subscribes` > `PaymentMethod` > `IPAddress` field for the newly introduced IPv6 support.

- [Settings](/v1-api-reference/api/settings/) - Added the following parameters to the `SubscriptionSettings` setting:
  - `autoRenewByOrder`
  - `enableOrderCpq`
  - `skipAmendmentGenerationBySubscribe`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).

- [Credit Memos](/v1-api-reference/api/credit-memos/) - In the request body of the “Refund a credit memo” operation, added the `customRates` field and its nested fields.

- [Payments](/v1-api-reference/api/payments/) - In the request body of the “Refund a payment” operation, added the `customRates` field and its nested fields.


### Doc Updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the request body of the “Amend” action, added the missing `bookingDate` field.

- In the request body of the “Create a payment” operation, updated the description of each of the following fields to clarify the requirements on the invoices being passed in:
  - `invoice` > `amount`
  - `invoice` > `invoiceId`

- Removed unused parameters and reference objects from the source YAML file

- In the description of the "Query" action, added a limitation about Active Rating under the "Limitations" section.

- In the description of the "CURD: create a usage record" operation, added a note about custom fields.


## 2022-11-18


### API Updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of Zuora Release 2022.11.R4.

- [Credit Memos](/v1-api-reference/api/credit-memos/) - Made the following updates:

   - In the request body of the "Create a credit memo from a charge" operation, added the `customRates` field and its nested fields.
   - In the request body of the "Create credit memos" operation, added the `customRates` field and its nested fields to the `memos` field.

- [Debit Memos](/v1-api-reference/api/debit-memos/) - Made the following updates:

   - In the request body of the "Create a debit memo from a charge" operation, added the `customRates` field and its nested fields.
   - In the request body of the "Create debit memos" operation, added the `customRates` field and its nested fields to the `memos` field.

- [Invoices](/v1-api-reference/api/invoices) - Made the following updates:

   - In the request body of the "Create a standalone invoice" operation, added the `customRates` field and its nested fields.
   - In the request body of the "Create standalone invoices" operation, added the `customRates` field and its nested fields to the `invoices` field.

- [Payments](/v1-api-reference/api/payments/) - In the request body of the “Create a payment” operation, added the `customRates` field and its nested fields.


### Doc Updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the path parameter description of each of the following operations, clarified that the value passed must be the workflow definition ID, instead of the workflow ID:
   - List workflows
   - Retrieve a workflow
   - Delete a workflow
   - Update a workflow
   - Run a workflow
   - Export a workflow version



## 2022-11-14


### API Updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of Zuora Release 2022.11.R3.

#### API Updates for Billing Schedule

The following items are the API updates specific to the Early Adopter announcement of the <a href="https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Billing_Schedule" target="_blank">Billing Schedule</a> feature.

**Note**: The Billing Schedule feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at <a href="https://support.zuora.com/" target="_blank">Zuora Global Support</a>.

- [Invoice Schedules](/v1-api-reference/api/invoice-schedules/) - Added a resource called "Invoice Schedules", with the following operations:
  - Create an invoice schedule
  - Update an invoice schedule
  - Retrieve an invoice schedule
  - Execute invoice schedule
  - Delete an invoice schedule


#### API Updates for Annual List Price

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Billing/Subscriptions/Product_Catalog/I_Annual_List_Price" target="_blank">Annual List Price</a> feature.

**Note**: The Annual List Price feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at <a href="https://support.zuora.com/" target="_blank">Zuora Global Support</a>.

- [Accounts](/v1-api-reference/api/accounts/) - In the request body of the "Create an account" operation, added the `Per_Year` enum value to the `subscription` > `subscribeToRatePlans` > `chargeOverrides` > `listPriceBase` field.

- [Actions](/api-references/older-api/tag/Actions/) - Made the following updates:
  - In the request body of the "Amend" action, added the `Per Year` enum value to the `requests` > `Amendments` > `RatePlanData` > `RatePlanChargeData` > `RatePlanCharge` > `ListPriceBase` field.
  - In the request body of the "Subscribe" action, added the `Per Year` enum value to the `subscribes` > `SubscriptionData` > `RatePlanData` > `RatePlanChargeData` > `RatePlanCharge` > `ListPriceBase` field.


- [Orders](/v1-api-reference/api/orders) - Made the following updates:
  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Preview an order
      - Preview an order asynchronously

      Added the `Per_Year` enum value to each of the following fields:
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

  - In the response body of the "Retrieve an order" operation, added the `Per_Year` enum value to each of the following fields:
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

  - In the response body of the “List order metrics for an evergreen subscription” operation, added the `Per_Year` enum value to each of the following fields:
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`

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

      Added the `Per_Year` enum value to each of the following fields:
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`


- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following updates:
	- In the request body of the "Update a subscription" operation, added the `Per_Year` enum value to each of the following fields:
		- `add` > `chargeOverrides` > `listPriceBase`
		- `change` > `chargeOverrides` > `listPriceBase`

	- In the request body of each of the following operations, added the `Per_Year` enum value to each of the `subscribeToRatePlans` > `chargeOverrides ` > `listPriceBase` field:
		- Create a subscription
	  - Preview a subscription

	- In the response body of each of the following operations, added the `Per_Year` enum value to the `ratePlans` > `ratePlanCharges` > `listPriceBase` field:
		- Retrieve a subscription by key
		- Retrieve a subscription by key and version

	- In the response body of the "List subscriptions by account key" operation, added the `Per_Year` enum value to the `subscriptions` > `ratePlans` > `ratePlanCharges` > `listPriceBase` field.


- [Product Rate Plan Charges](/v1-api-reference/api/product-rate-plan-charges/) - Made the following updates:
  - In the request body of each of the following operations, added the `Per Year` enum value to the `ListPriceBase` field:
      - CRUD: Create a product rate plan charge
      - CRUD: Update a product rate plan charge

  - In the response body of the "CRUD: Retrieve a product rate plan charge" operation, added the `Per Year` enum value to the `ListPriceBase` field.

- [Product Rate Plans](/v1-api-reference/api/product-rate-plans/) - In the response body of the "List all product rate plans of a product" operation, added the `Per_Year` enum value to the `productRatePlans` > `productRatePlanCharges` > `listPriceBase` field.

- [Rate Plan Charges](/api-references/older-api/tag/Rate-Plan-Charges/) - In the response body of the "CRUD: Retrieve a rate plan charge" operation, added the `Per Year` enum value to the `ListPriceBase` field.

- [Rate Plans](/api-references/older-api/tag/Rate-Plans/) - In the response body of the "Retrieve a rate plan" operation, added the `Per_Year` enum value to each of the following fields:
    - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringFlatFee` > `listPriceBase`
    - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringPerUnit` > `listPriceBase`
    - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringTiered` > `listPriceBase`
    - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `pricing` > `recurringVolume` > `listPriceBase`


#### Other API Updates

The following items are the other general API updates included in this release:

- [Payment Schedules](/v1-api-reference/api/payment-schedules/) - In the response body of each of the following operations, added the `cancellationReason` field:
  - Retrieve a payment schedule item
  - Update a payment schedule item
  - Cancel a payment schedule item
  - Skip a payment schedule item

- [Invoices](/v1-api-reference/api/invoices) - In the response body of the "CRUD: Retrieve an invoice" operation, added the `CreditMemoAmount` field.

- [Settings](/v1-api-reference/api/settings/) - Added a parameter called `muted` for each of the following settings:
  - `AllCommunicationProfiles`
  - `CommunicationProfile`
  - `AllCommunicationProfileNotifications`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).

### Doc Updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the description of the "Update a fulfillment" operation, clarified that the operation can also be used to cancel a fulfillment.

- In the description of the "Subscribe" action, clarified that the subscribe call for subscription preview will not consolidate invoices.

- In the description of the "List all settings" operation, added common use cases for the following setting items:
  - Communication Profiles
  - Connect Tax Engines
  - Units of Measure



## 2022-11-04

### Doc Updates

This section lists the documentation updates that were made in this version of the API Reference.

- For all operations except the "Create an OAuth token" operation, added the following missing header parameters:
  - `Idempotency-Key`
  - `Content-Encoding`
  - `Accept-Encoding`

- In the 200 response of each operation except the "Create an OAuth token" operation, added the missing `Content-Encoding` response header.


## 2022-10-28

### Doc Updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the description of the "Create a credit card payment method" operation, clarified that it is a legacy operation and the "Create a payment method" operation is the replacement.

- For the "Update a payment" operation, updated the `paymentKey` path parameter to `paymentId`, which only accepts the unique ID of the payment.

- For the "Update a refund" operation, updated the `refundKey` path parameter to `refundId`, which only accepts the unique ID of the refund.

- In the response body of the "List all product rate plans of a product" operation, removed the unsupported `ConsumptionBased` enum value from the `creditOption` > `productRatePlans` > `productRatePlanCharges` field.

- In the request body of each of the following operations, removed the unsupported `ConsumptionBased` enum value from the `CreditOption` field:
  - CRUD: Create a product rate plan charge
  - CRUD: Update a product rate plan charge

- In the response body of the "List subscriptions by account key" operation, removed the unsupported `ConsumptionBased` enum value from the `subscriptions` > `ratePlans` > `ratePlanCharges` > `creditOption` field.

- In the response body of each of the following operations, removed the unsupported `ConsumptionBased` enum value from the `ratePlans` > `ratePlanCharges` > `creditOption` field:
  - Retrieve a subscription by key
  - Retrieve a subscription by key and version


## 2022-10-21


### API Updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of Zuora Release 2022.11.R1.

- [Settings](/v1-api-reference/api/settings/) - Added the `ReturnOrder` enum value to the `reasonCodeTransactionType` parameter for each of the following settings:
  - `AllReasonCodes`
  - `ReasonCode`

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).

### Doc Updates

This section lists the documentation updates that were made in this version of the API Reference.

- In the response body of the "List all items of an invoice" operation, added the following missing nested fields to the `invoiceItems` field:
	- `chargeDate`
	- `chargeType`
	- `processingType`
- In the request body of the “CRUD: Update an account” operation, updated the display name format of the `PaymentGateway` field.
- In the description of the “Create an order” operation, added a note to clarify that if a timeout error message is received when creating an order, the call is still running in the backend and the order will be created.



## 2022-10-14


### API Updates

This section lists operations and fields that were added, changed, or removed.

The following API updates are available as of Zuora Release 2022.10.R2.

#### API Updates for Flexible Billing

The following items are the API updates specific to the <a href="https://knowledgecenter.zuora.com/Billing/Subscriptions/Flexible_Billing" target="_blank">Flexible Billing</a> feature.

**Note**: The Flexible Billing feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at <a href="https://support.zuora.com/" target="_blank">Zuora Global Support</a>.

- [Credit Memos](/v1-api-reference/api/credit-memos/) - Made the following updates:
  - In the response body of each of the following operations, added the `sequenceSetId`  field:
      - Create a credit memo from a charge
      - Create a credit memo from an invoice
      - Retrieve a credit memo
      - Update a credit memo
      - Apply a credit memo
      - Unapply a credit memo
      - Cancel a credit memo
      - Post a credit memo
      - Unpost a credit memo
  - In the response body of each of the following operations, added the `sequenceSetId` nested field to the `memos` field:
	    - Create credit memos
	    - Update credit memos
  - In the response body of the "List credit memos" operation, added the `sequenceSetId` nested field to the `creditmemos` field.

- [Debit Memos](/v1-api-reference/api/debit-memos/) - Made the following updates:
  - In the response body of each of the following operations, added the `sequenceSetId` field:
      - Create a debit memo from a charge
      - Create a debit memo from an invoice
      - Retrieve a debit memo
      - Update a debit memo
      - Cancel a debit memo
      - Post a debit memo
      - Unpost a debit memo
  - In the response body of each of the following operations, added the `sequenceSetId` nested field to the `memos` field:
	    - Create debit memos
	    - Update debit memos
  - In the response body of the "List debit memos" operation, added the `sequenceSetId` nested field to the `debitmemos` field.

- [Invoices](/v1-api-reference/api/invoices) - In the response body of the "CRUD: Retrieve an invoice" operation, added the `SequenceSetId` field.

- [Orders](/v1-api-reference/api/orders/) - Made the following updates:
  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Preview an order
      - Preview an order asynchronously

      Added the following fields:
      - `subscriptions` > `orderActions` > `createSubscription` > `invoiceTemplateId`
      - `subscriptions` > `orderActions` > `createSubscription` > `sequenceSetId`
      - `subscriptions` > `orderActions` > `ownerTransfer` > `invoiceTemplateId`
      - `subscriptions` > `orderActions` > `ownerTransfer` > `sequenceSetId`
      - `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingInvoiceTemplate`
      - `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingSequenceSet`
      - `subscriptions` > `orderActions` > `renewSubscription` > `invoiceTemplateId`
      - `subscriptions` > `orderActions` > `renewSubscription` > `sequenceSetId`
      - `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingInvoiceTemplate`
      - `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingSequenceSet`
      - `subscriptions` > `orderActions` > `termsAndConditions` > `invoiceTemplateId`
      - `subscriptions` > `orderActions` > `termsAndConditions` > `sequenceSetId`
      - `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingInvoiceTemplate`
      - `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingSequenceSet`

  - In the response body of each of the following operations:
      - Retrieve an order
      - List order metrics for an evergreen subscription

      Added the following fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `invoiceTemplateId`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `sequenceSetId`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `invoiceTemplateId`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `sequenceSetId`
      - `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `invoiceTemplateId`
      - `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `sequenceSetId`
      - `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingInvoiceTemplate`
      - `order` > `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingSequenceSet`
      - `order` > `subscriptions` > `orderActions` > `renewSubscription` > `invoiceTemplateId`
      - `order` > `subscriptions` > `orderActions` > `renewSubscription` > `sequenceSetId`
      - `order` > `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingInvoiceTemplate`
      - `order` > `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingSequenceSet`
      - `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `invoiceTemplateId`
      - `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `sequenceSetId`
      - `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingInvoiceTemplate`
      - `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingSequenceSet`
  - In the response body of each of the following operations:
      - List orders
      - List orders of a subscription owner
      - List orders by subscription number
      - List orders of an invoice owner
      - List pending orders by subscription number

      Added the following fields:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `invoiceTemplateId`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `sequenceSetId`
      - `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `invoiceTemplateId`
      - `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `sequenceSetId`
      - `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingInvoiceTemplate`
      - `orders` > `subscriptions` > `orderActions` > `ownerTransfer` > `clearingExistingSequenceSet`
      - `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `invoiceTemplateId`
      - `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `sequenceSetId`
      - `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingInvoiceTemplate`
      - `orders` > `subscriptions` > `orderActions` > `renewSubscription` > `clearingExistingSequenceSet`
      - `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `invoiceTemplateId`
      - `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `sequenceSetId`
      - `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingInvoiceTemplate`
      - `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `clearingExistingSequenceSet`

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following updates:

	- In the response body of each of the following operations:
		- Retrieve a subscription by key
		- Retrieve a subscription by key and version

		Added the following fields:
	    - `invoiceTemplateId`
	    - `sequenceSetId`

	- In the response body of the "List subscriptions by account key" operation, added the following fields:
	    - `subscriptions` > `invoiceTemplateId`
	    - `subscriptions` > `sequenceSetId`


#### Other API updates

The following items are the other general API updates included in this release:

- [Settings](/v1-api-reference/api/settings/) - Added a parameter called `useSystemDefaultSuffixForCreditItems` to the `BillingRules` setting.

  See [200 response sample in JSON format](/settings-api/ListAllSettingsResponseSample.json).

- [Orders](/v1-api-reference/api/orders/) - Made the following updates:

  - In the request body of each of the following operations:
      - Create an order
      - Create an order asynchronously
      - Preview an order
      - Preview an order asynchronously

      Added the following fields:

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

      Added the following fields:
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isRollover`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isRollover`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `isRollover`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverApply`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverApply`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverApply`
      - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverPeriods`
      - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverPeriods`
      - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverPeriods`

  - In the response body of the “Retrieve an order” operation, added the following fields:
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `isRollover`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `isRollover`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `isRollover`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverApply`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverApply`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverApply`
      - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `rolloverPeriods`
      - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `rolloverPeriods`
      - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `rolloverPeriods`

- [Subscriptions](/v1-api-reference/api/subscriptions/) - Made the following updates:

  - In the response body of the “List subscriptions by account key” operation, added the following fields:

      - `subscriptions`>`ratePlans`>`ratePlanCharges`>`isRollover`
      - `subscriptions`>`ratePlans`>`ratePlanCharges`>`rolloverApply`
      - `subscriptions`>`ratePlans`>`ratePlanCharges`>`rolloverPeriods`

  - In the response body of each of the following operations:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

      Added the following fields:
        - `ratePlans`>`ratePlanCharges`>`isRollover`
        - `ratePlans`>`ratePlanCharges`>`rolloverApply`
        - `ratePlans`>`ratePlanCharges`>`rolloverPeriods`

  - In the response body of the "List subscriptions by account key" operation, corrected the behavior of the `subscriptions` > `ratePlans` > `ratePlanCharges` > `discountApplyDetails` field from returning an empty array object to returning `null` for the situation when no value is returned for the field.

  - In the response body of each of the following operations, corrected the behavior of the `ratePlans` > `ratePlanCharges` > `discountApplyDetails` field from returning an empty array object to returning `null` for the situation when no value is returned for the field:
      - Retrieve a subscription by key
      - Retrieve a subscription by key and version

- [Product Rate Plans](/v1-api-reference/api/product-rate-plans/) - In the response body of the “List all product rate plans of a product” operation, added the following fields:
  - `productRatePlans` > `productRatePlanCharges`>`isRollover`
  - `productRatePlans` > `productRatePlanCharges`>`rolloverApply`
  - `productRatePlans` > `productRatePlanCharges`>`rolloverPeriods`

- [Product Rate Plan Charges](/v1-api-reference/api/product-rate-plan-charges/) - In the request body of each of the following operations,
  - CRUD: Create a product rate plan charge
  - CRUD: Update a product rate plan charge

  Added the following fields:
  - `IsRollover`
  - `RolloverApply`
  - `RolloverPeriods`


### Doc Updates

This section lists the documentation updates that were made in this version of the API Reference.

#### Doc Updates for Creating Credit Card Reference Transaction Payment Methods

The following items are the documentation updates specific to requirement clarification for creating Credit Card Reference Transaction payment methods:

- In the request body of the Subscribe action, updated the description of the `subscribes` > `PaymentMethod` > `TokenId` field.

- In the request body of the “Create an account” operation, updated the description of the `paymentMethod` > `tokenId` field.

- In the request body of each of the “Create an order” and “Create an order asynchronously” operations, updated the description of the `newAccount` > `paymentMethod` > `tokenId` field.

- In the request body of the “Create a payment method” operation, updated the description of the `tokenId` field.

- In the request body of the “CRUD: Create a payment method” operation, updated the description of the `TokenId` field.


#### Other doc updates

The following items are the other general doc updates included in this release:

- In the request body of each of the following operations, updated the description of the `previewAccountInfo` field to clarify that previewing an order does not consume the account number sequence:
  - Preview an order
  - Preview an order asynchronously

- In the request body of each of the following operations, removed the `100` maximum limit of the integer value from the `subscriptions` > `orderActions` > `termsAndConditions` > `lastTerm` > `period` field:
  - Create an order
  - Create an order asynchronously
  - Preview an order
  - Preview an order asynchronously

- In the response body of each of the following operations, removed the `100` maximum limit of the integer value from the `orders` > `subscriptions` > `orderActions` > `termsAndConditions` > `initialTerm` > `period` field:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

- In the response body of each of the following operations, removed the `100` maximum limit of the integer value from the `order` > `subscriptions` > `orderActions` > `termsAndConditions` > `initialTerm` > `period` field:
  - Retrieve an order
  - List order metrics for an evergreen subscription

- In the response body of each of the following operations:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

  Added the missing `SpecificDate` enum value to each of the following fields：
   - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `startDate` > `triggerEvent`
   - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `startDate` > `triggerEvent`
   - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `startDate` > `triggerEvent`
   - `orders` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `effectiveDate` > `triggerEvent`

- In the response body of the "Retrieve an order" operation, added the missing `SpecificDate` enum value to each of the following fields：
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `startDate` > `triggerEvent`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `startDate` > `triggerEvent`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `startDate` > `triggerEvent`
  - `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `effectiveDate` > `triggerEvent`

- In the response body of the "List order metrics for an evergreen subscription" operation, added the missing `SpecificDate` enum value to each of the following fields：
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `startDate` > `triggerEvent`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `startDate` > `triggerEvent`
  - `order` > `subscriptions` > `orderActions` > `updateProduct` > `chargeUpdates` > `effectiveDate` > `triggerEvent`

- In the request body of each of the following operations:
  - Create an order
  - Create an order asynchronously
  - Preview an order
  - Preview an order asynchronously

  Corrected the type of the field to `string` for each of the following fields:
   - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `revenueRecognitionRuleName`
   - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `revenueRecognitionRuleName`
   - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `revenueRecognitionRuleName`

- In the response body of each of the following operations:
  - List orders
  - List orders of a subscription owner
  - List orders by subscription number
  - List orders of an invoice owner
  - List pending orders by subscription number

  Corrected the type of the field to `string` for each of the following fields:
   - `orders` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `revenueRecognitionRuleName`
   - `orders` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `revenueRecognitionRuleName`
   - `orders` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `revenueRecognitionRuleName`

- In the response body of the "Retrieve an order" operation, corrected the type of the field to `string` for each of the following fields:
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `revenueRecognitionRuleName`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `revenueRecognitionRuleName`
  - `order` > `subscriptions` > `orderActions` > `changePlan` > `newProductRatePlan`>`chargeOverrides` > `revenueRecognitionRuleName`

- In the response body of the "List order metrics for an evergreen subscription" operation, corrected the type of the field to `string` for each of the following fields:
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `subscribeToRatePlans` > `chargeOverrides` > `revenueRecognitionRuleName`
  - `order` > `subscriptions` > `orderActions` > `addProduct` > `chargeOverrides` > `revenueRecognitionRuleName`

- In the request body of the "Create a payment" operation, updated the description of the `effectiveDate` field to clarify that `effectiveDate` is only required for electronic payments.

- In the request body of the "CRUD: Create a payment" operation, updated the description of the `EffectiveDate` field to clarify that `EffectiveDate` is only required for electronic payments.

- In the description of the "Create multiple payment schedules at once" operation, added the maximum number of payment schedules and payment schedule items that can be created in a single request.

- In the request body of the "Update a subscription" operation, removed the following unsupported fields:
	- `clearingExistingBillToContactId`
	- `clearingExistingPaymentTerm`

- In the response body of the "List order metrics for an evergreen subscription" operation, added the following missing fields:
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `billToContactId`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `paymentTerm`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `clearingExistingBillToContactId`
  - `order` > `subscriptions` > `orderActions` > `createSubscription` > `clearingExistingPaymentTerm`
