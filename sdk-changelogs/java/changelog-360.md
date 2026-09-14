---
markdown:
  toc:
    hide: false
---

# Java client library 3.6.0 changelog


## CreditMemosApi

* Added asynchronous methods for applying credit memos with `applyCreditMemoAsync` and `ApplyCreditMemoAsyncApi`.
* Introduced `getApplyCreditMemoAsyncJob` and `GetApplyCreditMemoAsyncJobApi` for retrieving information about async credit memo apply jobs.
* Added asynchronous methods for unapplying credit memos with `unapplyCreditMemoAsync` and `UnapplyCreditMemoAsyncApi`.
* Introduced `getUnapplyCreditMemoAsyncJob` and `GetUnapplyCreditMemoAsyncJobApi` for retrieving information about async credit memo unapply jobs.

## AccountBillingAndPayment

* Added a `gatewayRoutingEligible` field to the AccountBillingAndPayment class, allowing developers to determine if gateway routing is eligible for an account.

## CreateAccountRequest

* Added a `gatewayRoutingEligible` field to the CreateAccountRequest class, allowing developers to specify if gateway routing is eligible for the account.

## ExpandedInvoiceSchedule

* Added a `ratePlanCharges` field of type List\<ExpandedRatePlanCharge> to the ExpandedInvoiceSchedule class.

## ExpandedProduct
* Changed the type of `versionOrdinal` from String to Integer, which may require developers to update their code to handle the new type.

## GetSubscriptionRatePlanChargesWithAllSegments

* Changed the type of `productCategory` from `ProductCategory` to `String`. This change requires developers to update their code to handle `productCategory` as a String instead of a ProductCategory object.

## UpdateAccountRequest

* Added a `gatewayRoutingEligible` field to the UpdateAccountRequest class, allowing developers to specify if gateway routing is eligible for an account.
