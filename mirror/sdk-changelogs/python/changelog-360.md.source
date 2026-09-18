---
markdown:
  toc:
    hide: false
---

# Python client library 3.6.0 changelog


## credit\_memos\_api

* Added async methods for applying and unapplying credit memos: `apply_credit_memo_async`, `unapply_credit_memo_async`.
* Introduced methods to retrieve async job status: `get_apply_credit_memo_async_job`, `get_unapply_credit_memo_async_job`.

## models/\_\_init\_\_
* Added AsyncApplyCreditMemoRequest model.
* Added AsyncApplyCreditMemoToInvoice model.
* Added AsyncUnapplyCreditMemoRequest model.
* Added AsyncUnapplyCreditMemoToInvoice model.
* Added InvoiceSettlementAsyncJobOperationType model.
* Added InvoiceSettlementAsyncJobReferenceType model.
* Added InvoiceSettlementAsyncJobResponse model.
* Added InvoiceSettlementAsyncJobStatus model.

## account\_billing\_and\_payment

* Added `gatewayRoutingEligible` field to AccountBillingAndPayment model, allowing developers to check if gateway routing is eligible for an account.

## create\_account\_request

* Added an `gatewayRoutingEligible` optional field to the CreateAccountRequest model, allowing developers to specify if an account is eligible for gateway routing.

## expanded\_invoice\_schedule

* Added a `rate_plan_charges` field to the ExpandedInvoiceSchedule model, allowing for the inclusion of rate plan charges in invoice schedules.

## expanded\_product

* The type of `version_ordinal` has been changed from `Optional[StrictStr]` to `Optional[StrictInt]`. This may require developers to update their code if they were previously using string values for `versionOrdinal`.

## get\_subscription\_rate\_plan\_charges\_with\_all\_segments

* The `product_category` field type has been changed from `Optional[ProductCategory]` to `Optional[StrictStr]`. This change may require developers to update their code to handle `product_category` as a string instead of a `ProductCategory` object.

## update\_account\_request

* Added `gatewayRoutingEligible` field to the UpdateAccountRequest model, allowing developers to specify if an account is eligible for gateway routing.
