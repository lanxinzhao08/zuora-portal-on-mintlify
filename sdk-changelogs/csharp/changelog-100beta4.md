---
title: "C# client library 1.0.0-beta.4 changelog"
sidebarTitle: "1.0.0-beta.4"
---
## CreditMemosApi

* Added asynchronous methods for applying and unapplying credit memos: ApplyCreditMemoAsync, UnapplyCreditMemoAsync, and their corresponding WithHttpInfo and Async variants.
* Introduced methods to retrieve the status of asynchronous apply and unapply credit memo jobs by ID: GetApplyCreditMemoAsyncJob and GetUnapplyCreditMemoAsyncJob, along with their WithHttpInfo and Async variants.

## AccountBillingAndPayment

* Added a new property `GatewayRoutingEligible` to the AccountBillingAndPayment model, allowing developers to specify if an account is eligible for gateway routing.

## CreateAccountRequest

* Added a new optional parameter `gatewayRoutingEligible` to the CreateAccountRequest constructor.

## ExpandedInvoiceSchedule

* Added a new property `RatePlanCharges` to the ExpandedInvoiceSchedule class, allowing developers to access and manipulate rate plan charges associated with an invoice schedule.

## ExpandedProduct

* The type of the `versionOrdinal` parameter in the ExpandedProduct constructor has changed from `string` to `int`. This requires developers to update their code to pass an integer value instead of a string.

## GetSubscriptionRatePlanChargesWithAllSegments

* The type of the `ProductCategory` property has been changed from `ProductCategory?` to `string`. This may require developers to update their code to handle the new type.

## UpdateAccountRequest

* Added a new optional boolean property `GatewayRoutingEligible` to the UpdateAccountRequest model.
