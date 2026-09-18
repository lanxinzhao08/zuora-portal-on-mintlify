---
title: "C# client library 1.0.0-beta.3 changelog"
sidebarTitle: "1.0.0-beta.3"
---
## BulkUpdateOrderLineItem

* Added a new parameter `communicationProfileId` to the BulkUpdateOrderLineItem constructor.
* Introduced a new property `CommunicationProfileId` in the BulkUpdateOrderLineItem class.


## CreateInvoiceRequest

* Added a new parameter `communicationProfileId` to the CreateInvoiceRequest constructor and class, allowing developers to specify a communication profile when creating an invoice.

## CreateOrderCreateSubscription

* Added a new parameter `communicationProfileId` to the CreateOrderCreateSubscription constructor, allowing developers to specify a communication profile ID when creating a subscription.

## CreateOrderOrderLineItem

* Added a new parameter `communicationProfileId` to the CreateOrderOrderLineItem constructor, allowing developers to specify a communication profile ID when creating an order line item.

## CreateOrderTermsAndConditions

* Added new parameter `communicationProfileId` to the constructor.
* Added new parameter `clearingExistingCommunicationProfile` to the constructor.
* Added new parameter `invoiceGroupNumber` to the constructor.
* Added new parameter `clearingExistingInvoiceGroupNumber` to the constructor with a default value of false.
* Introduced `CommunicationProfileId` property.
* Introduced `ClearingExistingCommunicationProfile` property.
* Introduced `InvoiceGroupNumber` property.
* Introduced `ClearingExistingInvoiceGroupNumber` property.
* Added validation for `InvoiceGroupNumber` to ensure its length is less than 255 characters.

## CreditMemo
* Added a new property `CommunicationProfileId` to the CreditMemo class, allowing developers to set and retrieve the communication profile ID associated with a credit memo.

## CreditMemoResponse

* Added a new parameter `communicationProfileId` to the CreditMemoResponse constructor.
* Introduced a new property `CommunicationProfileId` in the CreditMemoResponse class.

## DebitMemo

* Added a new property `CommunicationProfileId` to the DebitMemo class, allowing developers to set and retrieve the communication profile ID associated with a debit memo.

## DebitMemoResponse

* Added a new parameter `communicationProfileId` to the DebitMemoResponse constructor.
* Introduced a new property `CommunicationProfileId` in the DebitMemoResponse class.

## ExpandedCreditMemo
* Added a new parameter `communicationProfileId` to the constructor of the ExpandedCreditMemo class.
* Introduced a new property `CommunicationProfileId` in the ExpandedCreditMemo class.

## ExpandedDebitMemo
* Added `paymentTerm` as a parameter in the constructor.
* Added `communicationProfileId` as a parameter in the constructor.
* Introduced `PaymentTerm` property with DataMember attribute.
* Introduced `CommunicationProfileId` property with DataMember attribute.

## ExpandedInvoice
* Added `paymentTerm` as a parameter in the constructor.
* Added `communicationProfileId` as a parameter in the constructor.
* Introduced `PaymentTerm` property with DataMember attribute.
* Introduced `CommunicationProfileId` property with DataMember attribute.

## ExpandedOrderAction
* Added new parameter `communicationProfileId` to the constructor.
* Added new parameter `clearingExistingCommunicationProfile` to the constructor.
* Introduced new property `CommunicationProfileId`.
* Introduced new property `ClearingExistingCommunicationProfile`.

## ExpandedProduct

* Added new properties: `State`, `VarVersion`, and `VersionOrdinal` to the ExpandedProduct class.

## ExpandedProductRatePlan

* Added new parameters `state`, `varVersion`, and `versionOrdinal` to the ExpandedProductRatePlan constructor.
* Introduced new properties `State`, `VarVersion`, and `VersionOrdinal` to the ExpandedProductRatePlan class.

## GetOrderLineItem

* Added a new parameter `communicationProfileId` to the GetOrderLineItem constructor.
* Introduced a new property `CommunicationProfileId` in the GetOrderLineItem class.

## GetProductRatePlanResponse

* Added a new property `ProductRatePlanNumber` to the GetProductRatePlanResponse class.

## GetSubscriptionResponse

* Added a new parameter `communicationProfileId` to the GetSubscriptionResponse constructor.
* Introduced a new property `CommunicationProfileId` in the GetSubscriptionResponse class.

## Invoice
* Added a new parameter `communicationProfileId` to the Invoice constructor.
* Introduced a new property `CommunicationProfileId` in the Invoice class.

## InvoiceResponse
* Added a new parameter `communicationProfileId` to the InvoiceResponse constructor.
* Introduced a new property `CommunicationProfileId` in the InvoiceResponse class.

## OperationJobType

* Added a new enum value `Reverse` with an associated value of 4.

## OrderActionCreateSubscription

* Added `communicationProfileId` parameter to the constructor and as a property.
* Added `currency` parameter to the constructor and as a property.

## OrderActionOwnerTransfer
* Added new parameter `communicationProfileId` to the constructor.
* Added new parameter `clearingExistingCommunicationProfile` to the constructor.
* Introduced new property `CommunicationProfileId` with DataMember attribute.
* Introduced new property `ClearingExistingCommunicationProfile` with DataMember attribute.

## OrderActionRenewSubscription
* Added new parameter `communicationProfileId` to the constructor.
* Added new parameter `clearingExistingCommunicationProfile` to the constructor.
* Introduced properties `CommunicationProfileId` and `ClearingExistingCommunicationProfile` to manage communication profiles.

## OrderActionTermsAndConditions
* Added new parameter `communicationProfileId` to the constructor.
* Added new parameter `clearingExistingCommunicationProfile` to the constructor.
* Introduced new property `CommunicationProfileId` with DataMember attribute.
* Introduced new property `ClearingExistingCommunicationProfile` with DataMember attribute.

## OrderLineItem
* Added a new parameter `communicationProfileId` to the OrderLineItem constructor.
* Introduced a new property `CommunicationProfileId` in the OrderLineItem class.

## PreviewExistingSubscriptionDiscountDetails
* Added a new parameter `discountChargeName` to the constructor of PreviewExistingSubscriptionDiscountDetails.
* Introduced a new property `DiscountChargeName` with DataMember attribute for serialization.

## PreviewOrderCreateSubscription
* Added new parameters to the constructor: communicationProfileId, currency, and invoiceGroupNumber.
* Introduced new properties: CommunicationProfileId, Currency, and InvoiceGroupNumber with corresponding DataMember attributes.
* Added validation for the Currency property to ensure its length does not exceed 3 characters.
* Added validation for the InvoiceGroupNumber property to ensure its length does not exceed 255 characters.

## ProductRatePlanWithExternalId
* Added a new parameter `productRatePlanNumber` to the constructor.
* Introduced a new property `ProductRatePlanNumber` to the ProductRatePlanWithExternalId class.

## ReverseInvoiceResponse
* Added new property `JobStatus` to track the status of the operation job.
* Added new properties `Id` and `JobId` to store identifiers related to the reverse invoice operation.

## UpdateOrderLineItem
* Added a new parameter `communicationProfileId` to the UpdateOrderLineItem constructor, allowing developers to specify a communication profile ID when updating an order line item.

## UpdateOrderLineItemRequest
* Added a new parameter `communicationProfileId` to the UpdateOrderLineItemRequest constructor.
* Introduced a new property `CommunicationProfileId` in the UpdateOrderLineItemRequest class.
