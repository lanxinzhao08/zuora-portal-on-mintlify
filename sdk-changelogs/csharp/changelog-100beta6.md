---
markdown:
  toc:
    hide: false
---

# C# client library 1.0.0-beta.6 changelog


## CreditMemosApi

* Added method `DownloadEInvoiceFileForCreditMemo` to provide downloadable content in binary format of the E-Invoice file for a given billing document.
* Added method `DownloadEInvoiceFileForCreditMemoAsync` for asynchronous downloading of E-Invoice files.
* Added method `GetEInvoicingMandateForCreditMemo` to fetch the Avalara Mandate for a given document if submitted to Avalara.
* Added method `GetEInvoicingMandateForCreditMemoAsync` for asynchronous fetching of Avalara Mandate.
* Added method `UpdateCreditMemoInvokeSyncStatus` to update the E-Invoice status of a Credit Memo.
* Added method `UpdateCreditMemoInvokeSyncStatusAsync` for asynchronous updating of E-Invoice status.

## DebitMemosApi

* Added method `DownloadEInvoiceFileForDebitMemo` to download E-Invoice files for a given billing document.
* Added method `GetEInvoicingMandateForDebitMemo` to fetch the Avalara Mandate for a document submitted to Avalara.
* Added method `UpdateDebitMemoInvokeSyncStatus` to update the E-Invoice status of a Debit Memo.

## EInvoicingApi

* Added `GetEInvoicingMandates` method to provide a list of Avalara mandates for a given country code and process type.
* Added `GetEInvoicingMandatesWithHttpInfo` method to provide detailed HTTP response information for Avalara mandates retrieval.
* Introduced asynchronous methods `GetEInvoicingMandatesAsync` and `GetEInvoicingMandatesWithHttpInfoAsync` for non-blocking Avalara mandates retrieval.

## InvoicesApi

* Added method `DownloadEInvoiceFileForInvoice` to download E-Invoice files in binary format.
* Added method `GetEInvoicingMandateForInvoice` to fetch the Avalara Mandate for a given document.
* Added method `UpdateInvoiceInvokeSyncStatus` to update the E-Invoice status of an invoice.

## ObjectQueriesApi

* Added optional `fields` parameter to various query methods, allowing developers to specify which fields to include in the response.
* Introduced new methods for querying contact snapshots: `QueryContactSnapshotByKey` and `QueryContactSnapshots`, providing functionality to retrieve contact snapshot data.

## SubscriptionsApi

* Added the `asOfDate` parameter for chargeDetail when `chargeDetail` is `SPECIFIC_SEGMENT`.

## BusinessRegion

* Added a new property `FileFormat` to the BusinessRegion class, allowing developers to specify or retrieve the file format associated with a business region.

## BusinessRegionsResponse

* Added a new parameter `fileFormat` to the BusinessRegionsResponse constructor.

## CreateAccountingCodeRequest

* Added a new parameter `segmentConstantValues` of type Dictionary<string, Object> to the CreateAccountingCodeRequest constructor.

## CreateOrderSubscription
* Added a new `notes` parameter to the CreateOrderSubscription constructor, allowing developers to include additional notes when creating an order subscription.

## ExpandedAccount
* Added new property `RollUpUsage` to the ExpandedAccount class.
* Added new property `ReservedPaymentAmount` to the ExpandedAccount class.

## ExpandedCreditMemo
* Added new properties: `BillToContactSnapshot`, `SoldToContactSnapshot`, and `ShipToContactSnapshot` to the ExpandedCreditMemo class.

## ExpandedDebitMemo

* Added new properties: `BillToContactSnapshot`, `SoldToContactSnapshot`, and `ShipToContactSnapshot` to the ExpandedDebitMemo class.

## ExpandedInvoice

* Added new properties: `BillToContactSnapshot`, `SoldToContactSnapshot`, and `ShipToContactSnapshot` to the ExpandedInvoice class.

## OrderSubscriptions

* Added a new parameter `notes` to the OrderSubscriptions constructor, allowing developers to include additional notes when creating an OrderSubscription.

## ReverseCreditMemoResponse

* Added new property `JobStatus` to track the status of the operation job.
* Added new properties `Id` and `JobId` to store additional identifiers for the response.

## UpdateInvoiceRequest
* Added a new parameter `templateId` to the UpdateInvoiceRequest constructor, allowing developers to specify a template ID when updating an invoice.

## UpdateInvoiceResponse
* Added a new parameter `templateId` to the UpdateInvoiceResponse constructor.
