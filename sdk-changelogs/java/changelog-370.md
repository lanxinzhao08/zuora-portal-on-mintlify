---
title: "Java client library 3.7.0 changelog"
sidebarTitle: "3.7.0"
---
## CreditMemosApi
* Added method `downloadEInvoiceFileForCreditMemo` to download E-Invoice files for credit memos.
* Added method `getEInvoicingMandateForCreditMemo` to fetch Avalara Mandate for credit memos.
* Added method `updateCreditMemoInvokeSyncStatus` to update E-Invoice status of credit memos by invoking sync status workflow.

## DebitMemosApi

* Added method `downloadEInvoiceFileForDebitMemo` to provide downloadable content in binary format of the E-Invoice file for a given billing document.
* Added method `getEInvoicingMandateForDebitMemo` to fetch the Avalara Mandate for a given document if submitted to Avalara.
* Added method `updateDebitMemoInvokeSyncStatus` to invoke sync status API to update the E-Invoice status of the Debit Memo.

## EInvoicingApi

* Added a new API method `getEInvoicingMandatesApi` to retrieve Avalara mandates for a given country code and process type.

## InvoicesApi

* Added method `downloadEInvoiceFileForInvoice` to provide downloadable content in binary format of the E-Invoice file for a given billing document.
* Added method `getEInvoicingMandateForInvoice` to fetch the Avalara Mandate for a given document if submitted to Avalara.
* Added method `updateInvoiceInvokeSyncStatus` to invoke sync status API to update the E-Invoice status of the Invoice.

## ObjectQueriesApi

* Added support for querying ContactSnapshots with filters, expands, and sort capabilities.
* Added the `fields` parameter to allow specifying which fields are returned in the response.

## SubscriptionsApi

* Added the `asOfDate` parameter for chargeDetail when `chargeDetail` is `SPECIFIC_SEGMENT`.

## BusinessRegion
* Added a new field `fileFormat` to the BusinessRegion class, allowing developers to specify or retrieve the file format associated with a business region.

## BusinessRegionsResponse

* Added a new field `fileFormat` to the BusinessRegionsResponse class, allowing developers to specify or retrieve the file format associated with a business region.

## CreateAccountingCodeRequest

* Added support for `segmentConstantValues`, allowing developers to include segment constant values when creating an accounting code. This feature is available if GL Segmentation 2.0 is enabled.

## CreateOrderSubscription
* Added a new field `notes` to the CreateOrderSubscription class, allowing developers to include a string of up to 65,535 characters.

## ExpandedAccount
* Added new field `rollUpUsage` and `reservedPaymentAmount` to the ExpandedAccount class.

## ExpandedCreditMemo
* Added new fields: `billToContactSnapshot`, `soldToContactSnapshot`, and `shipToContactSnapshot` to the ExpandedCreditMemo class.

## ExpandedDebitMemo

* Added new fields: `billToContactSnapshot`, `soldToContactSnapshot`, and `shipToContactSnapshot` with corresponding methods.

## ExpandedInvoice
* Added new fields: `billToContactSnapshot`, `soldToContactSnapshot`, and `shipToContactSnapshot` of type ExpandedContactSnapshot.

## OrderSubscriptions
* Added a new field `notes` to the OrderSubscriptions class, allowing developers to include a string of up to 65,535 characters.

## ReverseCreditMemoResponse
* Added new fields: `id`, `jobId`, and `jobStatus` to the ReverseCreditMemoResponse class.

## UpdateInvoiceRequest
* Added a new field `templateId` to the UpdateInvoiceRequest class, allowing specification of the invoice template ID. This field requires the Flexible Billing Attribute feature.

## UpdateInvoiceResponse
* Added a new field `templateId` to the UpdateInvoiceResponse class, allowing developers to set and retrieve the ID of the invoice template.
