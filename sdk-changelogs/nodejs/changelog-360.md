---
title: "Node.js client library 3.6.0 changelog"
sidebarTitle: "3.6.0"
---
## CreditMemosApi

* Added async methods for applying and unapplying credit memos: `applyCreditMemoAsync` and `unapplyCreditMemoAsync`.
* Introduced methods to retrieve async job status for applying and unapplying credit memos: `getApplyCreditMemoAsyncJob` and `getUnapplyCreditMemoAsyncJob`.

## index

* Added AsyncApplyCreditMemoRequest model.
* Added AsyncApplyCreditMemoToInvoice model.
* Added AsyncUnapplyCreditMemoRequest model.
* Added AsyncUnapplyCreditMemoToInvoice model.
* Added InvoiceSettlementAsyncJobOperationType model.
* Added InvoiceSettlementAsyncJobReferenceType model.
* Added InvoiceSettlementAsyncJobResponse model.
* Added InvoiceSettlementAsyncJobStatus model.

## AccountBillingAndPayment

* Added `gatewayRoutingEligible` property to indicate if gateway routing is eligible for the account.

## CreateAccountRequest

* Added `gatewayRoutingEligible` property to CreateAccountRequest, allowing developers to specify if an account is eligible for gateway routing.

## ExpandedInvoiceSchedule

* Added support for `ratePlanCharges` in the ExpandedInvoiceSchedule model, allowing developers to handle rate plan charges as part of the invoice schedule.

## ExpandedProduct

* The type of `versionOrdinal` has been changed from `String` to `Number`. This may require developers to update the code to handle `versionOrdinal` as a number instead of a string.

## GetSubscriptionRatePlanChargesWithAllSegments

* The `productCategory` field type has been changed from `ProductCategory` model to `String`. This may require developers to update their code to handle `productCategory` as a string instead of a model object.

## UpdateAccountRequest

* Added `gatewayRoutingEligible` property to the UpdateAccountRequest model, allowing developers to specify if an account is eligible for gateway routing.
