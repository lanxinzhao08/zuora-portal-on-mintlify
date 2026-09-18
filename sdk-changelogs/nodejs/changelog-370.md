---
title: "Node.js client library 3.7.0 changelog"
sidebarTitle: "3.7.0"
---
## CreditMemosApi

* Added method `downloadEInvoiceFileForCreditMemo` to download E-Invoice files for credit memos.
* Added method `getEInvoicingMandateForCreditMemo` to fetch the Avalara Mandate for a credit memo.
* Added method `updateCreditMemoInvokeSyncStatus` to update the E-Invoice status of a credit memo by invoking the sync status workflow.

## DebitMemosApi
* Added method `downloadEInvoiceFileForDebitMemo` to download E-Invoice files for debit memos.
* Added method `getEInvoicingMandateForDebitMemo` to fetch Avalara Mandate for debit memos.
* Added method `updateDebitMemoInvokeSyncStatus` to update the E-Invoice status of a debit memo by invoking the sync status workflow.

## EInvoicingApi
* Added new method `getEInvoicingMandatesWithHttpInfo` to retrieve a list of Avalara mandates for a given country code and process type.
* Added new method `getEInvoicingMandates` as a simplified version of `getEInvoicingMandatesWithHttpInfo`.

## ElectronicPaymentsHealthApi

* Added optional parameter `zuora_version` with default value `2024-05-20` to specify the minor version of the Zuora REST API.

## HostedPagesApi

* Added optional parameter `zuora_version` with a default value of `2024-05-20` for specifying the minor version of the Zuora REST API.

## InvoicesApi

* Added method `downloadEInvoiceFileForInvoice` to provide downloadable content in binary format of the E-Invoice file for a given billing document.
* Added method `getEInvoicingMandateForInvoice` to fetch the Avalara Mandate for a given document if submitted to Avalara.
* Added method `updateInvoiceInvokeSyncStatus` to invoke sync status API to update the E-Invoice status of the Invoice.

## ObjectQueriesApi
* Added support for querying ContactSnapshots with new methods: `queryContactSnapshotByKeyWithHttpInfo`, `queryContactSnapshotByKey`, `queryContactSnapshotsWithHttpInfo`, and `queryContactSnapshots`.
* Added the `fields` parameter to allow specifying which fields are returned in the response.


## ProductRatePlanChargeTiersApi
* Added optional parameter `accept_encoding` to compress responses as a gzipped file, reducing bandwidth for responses over 1000 bytes.

## SubscriptionsApi
* Added `as_of_date` parameter for charge-detail when `charge-detail` is `specific-segment`.

## index
* Added BusinessCategory model.
* Added EInvoiceProcessType model.
* Added EInvoicingFileFormat model.
* Added ExpandedContactSnapshot model.
* Added GetEInvoiceMandateResponse model.
* Added GetEInvoiceMandatesResponse model.
* Added QueryContactSnapshotsResponse model.

## BusinessRegion
* Added `fileFormat` property to the BusinessRegion model.

## BusinessRegionsResponse
* Added `fileFormat` property to BusinessRegionsResponse and BusinessRegion models.

## CreateAccountingCodeRequest
* Added `segmentConstantValues` property to CreateAccountingCodeRequest, available if GL Segmentation 2.0 is enabled.

## CreateOrderSubscription
* Added a new `notes` field to the CreateOrderSubscription model, allowing developers to include a string of up to 65,535 characters.

## ExpandedAccount
* Added `rollUpUsage` property to ExpandedAccount.
* Added `reservedPaymentAmount` property to ExpandedAccount.

## ExpandedCreditMemo
* Added `billToContactSnapshot` property to capture a snapshot of the billing contact.
* Added `soldToContactSnapshot` property to capture a snapshot of the sold-to contact.
* Added `shipToContactSnapshot` property to capture a snapshot of the shipping contact.

## ExpandedDebitMemo
* Added support for `billToContactSnapshot`, `soldToContactSnapshot`, and `shipToContactSnapshot` properties of type ExpandedContactSnapshot.

## ExpandedInvoice
* Added support for `billToContactSnapshot`, `soldToContactSnapshot`, and `shipToContactSnapshot` fields of type ExpandedContactSnapshot.

## OrderSubscriptions
* Added a new `notes` field to the OrderSubscriptions model, allowing for a string of up to 65,535 characters.

## ReverseCreditMemoResponse
* Added new properties `id` and `jobId` to ReverseCreditMemoResponse, allowing developers to access the credit memo ID and operation job ID.
* Introduced `jobStatus` property of type OperationJobStatus to track the status of the operation job.

## UpdateInvoiceRequest
* Added a new field `templateId` to the UpdateInvoiceRequest model, which requires Flexible Billing Attribute.

## UpdateInvoiceResponse
* Added `templateId` field to the UpdateInvoiceResponse model, allowing developers to access the ID of the invoice template.
