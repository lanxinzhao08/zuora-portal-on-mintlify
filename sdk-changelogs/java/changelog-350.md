---
title: "Java client library 3.5.0 changelog"
sidebarTitle: "3.5.0"
---
## BulkUpdateOrderLineItem

* Added the `communicationProfileId` field to the BulkUpdateOrderLineItem class, allowing developers to associate a communication profile with an order line item. This field can be updated only for a sales order line item in the `Executing`, `Booked`, or `SentToBilling` state.


## CreateInvoiceRequest

* Added the `communicationProfileId` field to the CreateInvoiceRequest class, allowing developers to associate a communication profile with an invoice.


## CreateOrderCreateSubscription

* Added the `communicationProfileId` field to the CreateOrderCreateSubscription class, which allows associating a communication profile with the subscription. This feature is available only if the Flexible Billing Attributes feature is enabled.


## CreateOrderOrderLineItem

* Added the `communicationProfileId` field to the CreateOrderOrderLineItem class, allowing developers to specify a communication profile ID for an order line item.


## CreateOrderTermsAndConditions

* Added the `communicationProfileId` field to associate a communication profile with a subscription.
* Added the `clearingExistingCommunicationProfile` field to clear the existing communication profile at the subscription level.
* Added the `invoiceGroupNumber` field to associate an invoice group number with a subscription.
* Added the `clearingExistingInvoiceGroupNumber` field to clear the existing invoice group number at the subscription level.


## CreditMemo
* Added the `communicationProfileId` field to the CreditMemo class, allowing association of a communication profile with a credit memo.


## CreditMemoResponse

* Added the `communicationProfileId` field to the CreditMemoResponse class, allowing developers to associate a communication profile with a credit memo.


## DebitMemo

* Added the `communicationProfileId` field to the DebitMemo class, allowing association of a communication profile with a debit memo.


## DebitMemoResponse

* Added the `communicationProfileId` field to the DebitMemoResponse class, allowing developers to associate a communication profile with a debit memo.


## ExpandedCreditMemo
* Added the `communicationProfileId` field to the ExpandedCreditMemo class, allowing developers to set and retrieve the communication profile ID associated with a credit memo.


## ExpandedDebitMemo
* Added the `communicationProfileId` field to the ExpandedDebitMemo class.


## ExpandedInvoice
* Added the `communicationProfileId` field to the ExpandedInvoice class.


## ExpandedOrderAction
* Added the `communicationProfileId` field with associated methods.
* Added the field `clearingExistingCommunicationProfile` with associated methods.


## ExpandedProduct

* Added new fields: `state`, `version`, and `versionOrdinal` to the ExpandedProduct class.

## ExpandedProductRatePlan

* Added new fields: `state`, `version`, and `versionOrdinal` to the ExpandedProductRatePlan class.

## GetOrderLineItem

* Added the `communicationProfileId` field to the GetOrderLineItem class, allowing developers to set and retrieve the communication profile ID for an order line item.

## GetProductRatePlanResponse
* Added the `productRatePlanNumber` field to the GetProductRatePlanResponse class, which represents the natural key of the product rate plan.

## GetSubscriptionResponse
* Added the `communicationProfileId` field to the GetSubscriptionResponse class, which represents the ID of the communication profile associated with the subscription. This field is available only if the Flexible Billing Attributes feature is enabled.

## Invoice
* Added the `communicationProfileId` field to the Invoice class, allowing association of a communication profile with an invoice.

## InvoiceResponse

* Added the `communicationProfileId` field to the InvoiceResponse class, allowing developers to associate a communication profile with an invoice.

## OperationJobType

* Added a new operation job type: `REVERSE`.

## OrderActionCreateSubscription

* Added the `communicationProfileId` field to associate a communication profile with the subscription. This feature is available only if the Flexible Billing Attributes feature is enabled.
* Added the `currency` field to specify the currency of the subscription.

## OrderActionOwnerTransfer

* Added the `communicationProfileId` field to associate a communication profile with the subscription. This feature is available only if the Flexible Billing Attributes feature is enabled.
* Added the `clearingExistingCommunicationProfile` field to allow clearing the existing communication profile at the subscription level. This field is mutually exclusive with `communicationProfileId`.

## OrderActionRenewSubscription
* Added the `communicationProfileId` field to associate a communication profile with the subscription.
* Added the `clearingExistingCommunicationProfile` field to allow clearing the existing communication profile at the subscription level.

## OrderActionTermsAndConditions

* Added the `communicationProfileId` field to associate a communication profile with a subscription. This feature is available only if the Flexible Billing Attributes feature is enabled.
* Added the `clearingExistingCommunicationProfile` field to allow clearing the existing communication profile at the subscription level. This field is mutually exclusive with `communicationProfileId`.

## OrderLineItem

* Added the `communicationProfileId` field to the OrderLineItem class, allowing developers to specify and retrieve the communication profile ID associated with an order line item.

## PreviewExistingSubscriptionDiscountDetails

* Added the `discountChargeName` field to the PreviewExistingSubscriptionDiscountDetails class.

## PreviewOrderCreateSubscription

* Added the `communicationProfileId` field to associate a communication profile with the subscription. Available with the Flexible Billing Attributes feature.
* Added the `currency` field to specify the currency code for the subscription. Available with the Multiple Currencies feature.
* Added the `invoiceGroupNumber` field to associate an invoice group with the subscription. Available with the Flexible Billing Attributes feature.


## ProductRatePlanWithExternalId

* Added the `productRatePlanNumber` field to the ProductRatePlanWithExternalId class, allowing developers to set and retrieve the natural key of the product rate plan.


## ReverseInvoiceResponse

* Added new fields: `id`, `jobId`, and `jobStatus` to the ReverseInvoiceResponse class.
* Included validation for the new fields `id`, `jobId`, and `jobStatus` in JSON parsing.


## UpdateOrderLineItem

* Added the `communicationProfileId` field to the `UpdateOrderLineItem` class, allowing developers to associate a communication profile with an order line item. This field can be updated only for a sales order line item in specific states (`Executing`, `Booked`, `SentToBilling`).


## UpdateOrderLineItemRequest

* Added the `communicationProfileId` field to the UpdateOrderLineItemRequest class, allowing developers to associate a communication profile with an order line item. This field can be updated only for a sales order line item in specific states (Executing/Booked/SentToBilling).
