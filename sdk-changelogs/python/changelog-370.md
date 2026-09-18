---
title: "Python client library 3.7.0 changelog"
sidebarTitle: "3.7.0"
---
## credit\_memos\_api
* Added method `download_e_invoice_file_for_credit_memo` to provide downloadable content in binary format of the E-Invoice file for a given billing document.
* Added method `get_e_invoicing_mandate_for_credit_memo` to fetch the Avalara Mandate for a given document if submitted to Avalara.
* Added method `update_credit_memo_invoke_sync_status` to invoke sync status API to update the E-Invoice status of the Credit Memo.


## debit\_memos\_api
* Added method `download_e_invoice_file_for_debit_memo` to provide downloadable content in binary format of the E-Invoice file for a given debit memo.
* Added method `get_e_invoicing_mandate_for_debit_memo` to fetch the Avalara Mandate for a given debit memo if submitted to Avalara.
* Added method `update_debit_memo_invoke_sync_status` to invoke sync status API and update the E-Invoice status of the debit memo.

## e\_invoicing\_api
* Added new method `get_e_invoicing_mandates` to provide a list of Avalara mandates for a given country code and process type.
* Added new method `get_e_invoicing_mandates_with_http_info` to provide detailed HTTP information along with the list of Avalara mandates.

## invoices\_api
* Added method `download_e_invoice_file_for_invoice` to provide downloadable content in binary format of the E-Invoice file for a given billing document.
* Added method `get_e_invoicing_mandate_for_invoice` to fetch the Avalara Mandate for a given document if submitted to Avalara.
* Added method `update_invoice_invoke_sync_status` to invoke sync status API and update the E-Invoice status of the Invoice.

## object\_queries\_api
* Added support for querying contact snapshots with new methods `query_contact_snapshot_by_key` and `query_contact_snapshots`.
* Introduced the `fields` parameter to support specifying which fields are returned in the response.

## subscriptions\_api
* Added `as_of_date` parameter to multiple methods for specifying the date for charge-detail when `charge-detail` is `specific-segment`.

## models/\_\_init\_\_
* Added BusinessCategory model import.
* Added EInvoiceProcessType model import.
* Added EInvoicingFileFormat model import.
* Added ExpandedContactSnapshot model import.
* Added GetEInvoiceMandateResponse model import.
* Added GetEInvoiceMandatesResponse model import.
* Added QueryContactSnapshotsResponse model import.

## business\_region
* Added `fileFormat` as an optional field in the BusinessRegion model.

## business\_regions\_response
* Added a new optional field `fileFormat` to the BusinessRegionsResponse model.

## create\_accounting\_code\_request
* Added `segmentConstantValues` field to CreateAccountingCodeRequest, available if GL Segmentation 2.0 is enabled.

## create\_order\_subscription
* Added a new optional field `notes` to the CreateOrderSubscription model, allowing for a string of up to 65,535 characters.

## expanded\_account
* Removal of fields from the \_\_properties list may affect serialization or deserialization processes.
* Added `roll_up_usage` and `reserved_payment_amount` fields to the ExpandedAccount model.

## expanded\_credit\_memo
* Added new fields: `bill_to_contact_snapshot`, `sold_to_contact_snapshot`, and `ship_to_contact_snapshot` of type ExpandedContactSnapshot to the ExpandedCreditMemo model.
* Enhanced the `to_dict()` method to include the new snapshot fields: billToContactSnapshot, soldToContactSnapshot, and shipToContactSnapshot.
* Updated the `from_dict()` method to handle the new snapshot fields: billToContactSnapshot, soldToContactSnapshot, and shipToContactSnapshot.

## expanded\_debit\_memo

* Added new fields: `bill_to_contact_snapshot`, `sold_to_contact_snapshot`, and `ship_to_contact_snapshot` of type ExpandedContactSnapshot to the ExpandedDebitMemo model.
* Updated the `to_dict` method to include the new snapshot fields for custom serialization.

## expanded\_invoice
* Added new fields: `bill_to_contact_snapshot`, `sold_to_contact_snapshot`, and `ship_to_contact_snapshot` of type ExpandedContactSnapshot.

## order\_subscriptions
* Added a new optional field `notes` to the OrderSubscriptions model, allowing developers to include a string of up to 65,535 characters.

## reverse\_credit\_memo\_response
* Added `id` field to store the ID of the credit memo.
* Added `job_id` field to store the ID of the operation job.
* Added `job_status` field to store the status of the operation job.
## update\_invoice\_request
* Added a new optional field `template_id` to specify the ID of the invoice template. This field requires the Flexible Billing Attribute.

## update\_invoice\_response
* Added `template_id` field to the UpdateInvoiceResponse model.
