---
markdown:
  toc:
    hide: false
---

# Node.js client library 3.5.0 changelog


## BulkUpdateOrderLineItem

* Added a new field `communicationProfileId` to the BulkUpdateOrderLineItem and UpdateOrderLineItem models. This field allows updating the communication profile associated with the order line item for sales OLIs in specific states (`Executing`, `Booked`, `SentToBilling`).


## CreateInvoiceRequest

* Added a new field `communicationProfileId` to the CreateInvoiceRequest model, allowing developers to associate a communication profile with an invoice.

## CreateOrderCreateSubscription

* Added a new field `communicationProfileId` to the CreateOrderCreateSubscription model. This field is available only if the Flexible Billing Attributes feature is enabled.

## CreateOrderOrderLineItem

* Added a new field `communicationProfileId` to the CreateOrderOrderLineItem model, allowing developers to specify the communication profile ID for an order line item.

## CreateOrderTermsAndConditions

* Added `communicationProfileId` field to associate a communication profile with the subscription. Available with the Flexible Billing Attributes feature.
* Added `clearingExistingCommunicationProfile` field to clear the existing communication profile at the subscription level. Mutually exclusive with `communicationProfileId`.
* Added `invoiceGroupNumber` field to associate an invoice group with the subscription. Available with the Flexible Billing Attributes feature.
* Added `clearingExistingInvoiceGroupNumber` field to clear the existing invoice group number at the subscription level. Mutually exclusive with `invoiceGroupNumber`. Defaults to false.

## CreditMemo

* Added a new field `communicationProfileId` to the CreditMemo model, which represents the ID of the communication profile associated with the credit memo.

## CreditMemoResponse

* Added `communicationProfileId` property to the CreditMemoResponse model, allowing developers to associate a communication profile with a credit memo.

## DebitMemo

* Added a new field `communicationProfileId` to the DebitMemo model, allowing association of a communication profile with a debit memo.

## DebitMemoResponse

* Added `communicationProfileId` property to the DebitMemoResponse model, allowing developers to access the ID of the communication profile associated with the debit memo.

## ExpandedCreditMemo

* Added a new property `communicationProfileId` to the ExpandedCreditMemo model, allowing developers to specify or retrieve the communication profile associated with a credit memo.

## ExpandedDebitMemo

* Added `paymentTerm` as a new property to the ExpandedDebitMemo model.
* Added `communicationProfileId` as a new property to the ExpandedDebitMemo model.

## ExpandedInvoice

* Added `paymentTerm` as a new property to the ExpandedInvoice model.
* Added `communicationProfileId` as a new property to the ExpandedInvoice model.

## ExpandedOrderAction

* Added `communicationProfileId` as a new string property to the ExpandedOrderAction model.
* Added `clearingExistingCommunicationProfile` as a new boolean property to the ExpandedOrderAction model.

## ExpandedProduct

* Added new properties: `state`, `version`, and `versionOrdinal` to the ExpandedProduct model.

## ExpandedProductRatePlan

* Added new properties: `state`, `version`, and `versionOrdinal` to the ExpandedProductRatePlan model.

## GetOrderLineItem

* Added a new field `communicationProfileId` to the GetOrderLineItem model, allowing developers to specify or retrieve the communication profile ID associated with an order line item.

## GetProductRatePlanResponse

* Added `productRatePlanNumber` field to GetProductRatePlanResponse and ProductRatePlanWithExternalId models.

## GetSubscriptionResponse

* Added a new field `communicationProfileId` to the GetSubscriptionResponse model. This field is available only if the Flexible Billing Attributes feature is enabled.

## Invoice

* Added a new field `communicationProfileId` to the Invoice model, allowing developers to associate a communication profile with an invoice.

## InvoiceResponse

* Added a new field `communicationProfileId` to the InvoiceResponse model, which represents the ID of the communication profile associated with the invoice.

## OperationJobType

* Added a new enum value `Reverse` to the OperationJobType class.

## OrderActionCreateSubscription

* Added `communicationProfileId` field to associate a communication profile with the subscription. Available with the Flexible Billing Attributes feature.
* Added `currency` field to specify the currency of the subscription.

## OrderActionOwnerTransfer

* Added `communicationProfileId` property to associate a communication profile with a subscription, available with the Flexible Billing Attributes feature.
* Introduced `clearingExistingCommunicationProfile` property to clear the existing communication profile at the subscription level, mutually exclusive with `communicationProfileId`.

## OrderActionRenewSubscription

* Added `communicationProfileId` field to associate a communication profile with the subscription. This feature is available only if the Flexible Billing Attributes feature is enabled.
* Added `clearingExistingCommunicationProfile` field to clear the existing communication profile at the subscription level. This field is mutually exclusive with `communicationProfileId`.

## OrderActionTermsAndConditions

* Added `communicationProfileId` property to associate a communication profile with a subscription. This feature is available with the Flexible Billing Attributes feature enabled.
* Introduced `clearingExistingCommunicationProfile` property to clear the existing communication profile at the subscription level. This field is mutually exclusive with `communicationProfileId`.

## OrderLineItem

* Added a new property `communicationProfileId` to the OrderLineItem model, allowing developers to specify a communication profile ID for an order line item.

## PreviewExistingSubscriptionDiscountDetails
* Added a new property `discountChargeName` to the `PreviewExistingSubscriptionDiscountDetails` model.

## PreviewOrderCreateSubscription

* Added `communicationProfileId` field to associate a communication profile with the subscription, available with the Flexible Billing Attributes feature.
* Added `currency` field to specify the currency for the subscription, available with the Multiple Currencies feature.
* Added `invoiceGroupNumber` field to associate an invoice group with the subscription, available with the Flexible Billing Attributes feature.

## ProductRatePlanWithExternalId

* Added a new property `productRatePlanNumber` to the ProductRatePlanWithExternalId model, which serves as the natural key of the product rate plan.

## ReverseInvoiceResponse

* Added `id` property to store the ID of the invoice.
* Added `jobId` property to store the ID of the operation job.
* Added `jobStatus` property to store the status of the operation job using the new OperationJobStatus model.

## UpdateOrderLineItem

* Added a new field `communicationProfileId` to the UpdateOrderLineItem model. This field allows updating the communication profile associated with a sales order line item when it is in the `Executing`, `Booked`, or `SentToBilling` state.

## UpdateOrderLineItemRequest

* Added a new field `communicationProfileId` to the UpdateOrderLineItemRequest and UpdateOrderLineItem models. This field allows updating the communication profile associated with the order line item, applicable only for sales OLIs in the `Executing`, `Booked`, or `SentToBilling` states.
