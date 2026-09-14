---
markdown:
  toc:
    hide: true
---


# C# client library reference

The latest C# client library version is **1.12.0**.


## Requirements

- **C#**: 12 or later
- **.NET**: 8.0 or later

## Installation

See [Zuora Client Libraries](/docs/guides/libraries/).

## Classes and methods

The following table summarizes all available classes and methods for the Zuora C# client library.

<table style="word-break: break-word;">
<thead>
<tr>
<th>Class</th>
<th>Method</th>
<th>HTTP request</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><em>APIHealthApi</em></td>
<td><strong>GetSystemHealthApiVolumeSummary</strong></td>
<td><strong>GET</strong> /system-health/api-requests/volume-summary</td>
<td>List API volume summary records</td>
</tr>
<tr>
<td><em>AccountingCodesApi</em></td>
<td><strong>ActivateAccountingCode</strong></td>
<td><strong>PUT</strong> /v1/accounting-codes/{ac-id}/activate</td>
<td>Activate an accounting code</td>
</tr>
<tr>
<td><em>AccountingCodesApi</em></td>
<td><strong>CreateAccountingCode</strong></td>
<td><strong>POST</strong> /v1/accounting-codes</td>
<td>Create an accounting code</td>
</tr>
<tr>
<td><em>AccountingCodesApi</em></td>
<td><strong>DeactivateAccountingCode</strong></td>
<td><strong>PUT</strong> /v1/accounting-codes/{ac-id}/deactivate</td>
<td>Deactivate an accounting code</td>
</tr>
<tr>
<td><em>AccountingCodesApi</em></td>
<td><strong>DeleteAccountingCode</strong></td>
<td><strong>DELETE</strong> /v1/accounting-codes/{ac-id}</td>
<td>Delete an accounting code</td>
</tr>
<tr>
<td><em>AccountingCodesApi</em></td>
<td><strong>GetAccountingCode</strong></td>
<td><strong>GET</strong> /v1/accounting-codes/{ac-id}</td>
<td>Retrieve an accounting code</td>
</tr>
<tr>
<td><em>AccountingCodesApi</em></td>
<td><strong>GetAllAccountingCodes</strong></td>
<td><strong>GET</strong> /v1/accounting-codes</td>
<td>List all accounting codes</td>
</tr>
<tr>
<td><em>AccountingCodesApi</em></td>
<td><strong>UpdateAccountingCode</strong></td>
<td><strong>PUT</strong> /v1/accounting-codes/{ac-id}</td>
<td>Update an accounting code</td>
</tr>
<tr>
<td><em>AccountingPeriodsApi</em></td>
<td><strong>CloseAccountingPeriod</strong></td>
<td><strong>PUT</strong> /v1/accounting-periods/{ap-id}/close</td>
<td>Close an accounting period</td>
</tr>
<tr>
<td><em>AccountingPeriodsApi</em></td>
<td><strong>CreateAccountingPeriod</strong></td>
<td><strong>POST</strong> /v1/accounting-periods</td>
<td>Create an accounting period</td>
</tr>
<tr>
<td><em>AccountingPeriodsApi</em></td>
<td><strong>DeleteAccountingPeriod</strong></td>
<td><strong>DELETE</strong> /v1/accounting-periods/{ap-id}</td>
<td>Delete an accounting period</td>
</tr>
<tr>
<td><em>AccountingPeriodsApi</em></td>
<td><strong>GetAccountingPeriod</strong></td>
<td><strong>GET</strong> /v1/accounting-periods/{ap-id}</td>
<td>Retrieve an accounting period</td>
</tr>
<tr>
<td><em>AccountingPeriodsApi</em></td>
<td><strong>GetAllAccountingPeriods</strong></td>
<td><strong>GET</strong> /v1/accounting-periods</td>
<td>List all accounting periods</td>
</tr>
<tr>
<td><em>AccountingPeriodsApi</em></td>
<td><strong>PendingCloseAccountingPeriod</strong></td>
<td><strong>PUT</strong> /v1/accounting-periods/{ap-id}/pending-close</td>
<td>Set an accounting period to pending close</td>
</tr>
<tr>
<td><em>AccountingPeriodsApi</em></td>
<td><strong>ReopenAccountingPeriod</strong></td>
<td><strong>PUT</strong> /v1/accounting-periods/{ap-id}/reopen</td>
<td>Reopen an accounting period</td>
</tr>
<tr>
<td><em>AccountingPeriodsApi</em></td>
<td><strong>RunTrialBalance</strong></td>
<td><strong>PUT</strong> /v1/accounting-periods/{ap-id}/run-trial-balance</td>
<td>Run trial balance</td>
</tr>
<tr>
<td><em>AccountingPeriodsApi</em></td>
<td><strong>UpdateAccountingPeriod</strong></td>
<td><strong>PUT</strong> /v1/accounting-periods/{ap-id}</td>
<td>Update an accounting period</td>
</tr>
<tr>
<td><em>AccountsApi</em></td>
<td><strong>CreateAccount</strong></td>
<td><strong>POST</strong> /v1/accounts</td>
<td>Create an account</td>
</tr>
<tr>
<td><em>AccountsApi</em></td>
<td><strong>DeleteAccount</strong></td>
<td><strong>DELETE</strong> /v1/accounts/{account-key}</td>
<td>Delete an account</td>
</tr>
<tr>
<td><em>AccountsApi</em></td>
<td><strong>GetAccount</strong></td>
<td><strong>GET</strong> /v1/accounts/{account-key}</td>
<td>Retrieve an account</td>
</tr>
<tr>
<td><em>AccountsApi</em></td>
<td><strong>GetAccountDefaultPaymentMethod</strong></td>
<td><strong>GET</strong> /v1/accounts/{account-key}/payment-methods/default</td>
<td>Retrieve the default payment method of an account</td>
</tr>
<tr>
<td><em>AccountsApi</em></td>
<td><strong>GetAccountPaymentMethods</strong></td>
<td><strong>GET</strong> /v1/accounts/{account-key}/payment-methods</td>
<td>List payment methods of an account</td>
</tr>
<tr>
<td><em>AccountsApi</em></td>
<td><strong>GetAccountSummary</strong></td>
<td><strong>GET</strong> /v1/accounts/{account-key}/summary</td>
<td>Retrieve an account summary</td>
</tr>
<tr>
<td><em>AccountsApi</em></td>
<td><strong>UpdateAccount</strong></td>
<td><strong>PUT</strong> /v1/accounts/{account-key}</td>
<td>Update an account</td>
</tr>
<tr>
<td><em>ActionsApi</em></td>
<td><strong>ActionPostCreate</strong></td>
<td><strong>POST</strong> /v1/action/create</td>
<td>Create</td>
</tr>
<tr>
<td><em>ActionsApi</em></td>
<td><strong>ActionPostDelete</strong></td>
<td><strong>POST</strong> /v1/action/delete</td>
<td>Delete</td>
</tr>
<tr>
<td><em>ActionsApi</em></td>
<td><strong>ActionPostQuery</strong></td>
<td><strong>POST</strong> /v1/action/query</td>
<td>Query</td>
</tr>
<tr>
<td><em>ActionsApi</em></td>
<td><strong>ActionPostqueryMore</strong></td>
<td><strong>POST</strong> /v1/action/queryMore</td>
<td>QueryMore</td>
</tr>
<tr>
<td><em>ActionsApi</em></td>
<td><strong>ActionPostupdate</strong></td>
<td><strong>POST</strong> /v1/action/update</td>
<td>Update</td>
</tr>
<tr>
<td><em>AdjustmentsApi</em></td>
<td><strong>CancelBillingAdjustment</strong></td>
<td><strong>PUT</strong> /v1/adjustments/{adjustmentId}/cancel</td>
<td>Cancel an adjustment</td>
</tr>
<tr>
<td><em>AdjustmentsApi</em></td>
<td><strong>CreateBillingAdjustment</strong></td>
<td><strong>POST</strong> /v1/adjustments</td>
<td>Create an adjustment</td>
</tr>
<tr>
<td><em>AdjustmentsApi</em></td>
<td><strong>GetBillingAdjustment</strong></td>
<td><strong>GET</strong> /v1/adjustments/{adjustment-key}</td>
<td>Retrieve an adjustment</td>
</tr>
<tr>
<td><em>AdjustmentsApi</em></td>
<td><strong>GetSubscriptionAdjustments</strong></td>
<td><strong>GET</strong> /v1/adjustments</td>
<td>List all adjustments of the latest version subscription</td>
</tr>
<tr>
<td><em>AdjustmentsApi</em></td>
<td><strong>PreviewBillingAdjustment</strong></td>
<td><strong>POST</strong> /v1/adjustments/preview</td>
<td>Preview an adjustment</td>
</tr>
<tr>
<td><em>AggregateQueriesApi</em></td>
<td><strong>CreateBatchQuery</strong></td>
<td><strong>POST</strong> /v1/batch-query/</td>
<td>Submit an aggregate query job</td>
</tr>
<tr>
<td><em>AggregateQueriesApi</em></td>
<td><strong>DeleteBatchQueryJob</strong></td>
<td><strong>DELETE</strong> /v1/batch-query/jobs/{jobid}</td>
<td>Cancel a running aggregate query job</td>
</tr>
<tr>
<td><em>AggregateQueriesApi</em></td>
<td><strong>GetBatchQueryJob</strong></td>
<td><strong>GET</strong> /v1/batch-query/jobs/{jobid}</td>
<td>Retrieve an aggregate query job</td>
</tr>
<tr>
<td><em>AttachmentsApi</em></td>
<td><strong>DeleteAttachments</strong></td>
<td><strong>DELETE</strong> /v1/attachments/{attachment-id}</td>
<td>Delete an attachment</td>
</tr>
<tr>
<td><em>AttachmentsApi</em></td>
<td><strong>GetAttachments</strong></td>
<td><strong>GET</strong> /v1/attachments/{attachment-id}</td>
<td>Retrieve an attachment</td>
</tr>
<tr>
<td><em>AttachmentsApi</em></td>
<td><strong>GetAttachmentsList</strong></td>
<td><strong>GET</strong> /v1/attachments/{object-type}/{object-key}</td>
<td>List attachments by object type and key</td>
</tr>
<tr>
<td><em>AttachmentsApi</em></td>
<td><strong>PostAttachments</strong></td>
<td><strong>POST</strong> /v1/attachments</td>
<td>Create an attachment</td>
</tr>
<tr>
<td><em>AttachmentsApi</em></td>
<td><strong>PutAttachments</strong></td>
<td><strong>PUT</strong> /v1/attachments/{attachment-id}</td>
<td>Update an attachment</td>
</tr>
<tr>
<td><em>BillRunApi</em></td>
<td><strong>CancelBillRun</strong></td>
<td><strong>PUT</strong> /v1/bill-runs/{billRunId}/cancel</td>
<td>Cancel a bill run</td>
</tr>
<tr>
<td><em>BillRunApi</em></td>
<td><strong>CreateBillRun</strong></td>
<td><strong>POST</strong> /v1/bill-runs</td>
<td>Create a bill run</td>
</tr>
<tr>
<td><em>BillRunApi</em></td>
<td><strong>DeleteBillRun</strong></td>
<td><strong>DELETE</strong> /v1/bill-runs/{billRunId}</td>
<td>Delete a bill run</td>
</tr>
<tr>
<td><em>BillRunApi</em></td>
<td><strong>EmailBillRun</strong></td>
<td><strong>POST</strong> /v1/bill-runs/{billRunKey}/emails</td>
<td>Email billing documents generated from a bill run</td>
</tr>
<tr>
<td><em>BillRunApi</em></td>
<td><strong>GetBillRun</strong></td>
<td><strong>GET</strong> /v1/bill-runs/{billRunId}</td>
<td>Retrieve a bill run</td>
</tr>
<tr>
<td><em>BillRunApi</em></td>
<td><strong>PostBillRun</strong></td>
<td><strong>PUT</strong> /v1/bill-runs/{billRunId}/post</td>
<td>Post a bill run</td>
</tr>
<tr>
<td><em>BillRunHealthApi</em></td>
<td><strong>GetSystemHealthBillingDocVolumeSummary</strong></td>
<td><strong>GET</strong> /system-health/billing-documents/volume-summary</td>
<td>List billing document volume summary records</td>
</tr>
<tr>
<td><em>BillingDocumentsApi</em></td>
<td><strong>CreateBillingDocumentFilesDeletionJob</strong></td>
<td><strong>POST</strong> /v1/accounts/billing-documents/files/deletion-jobs</td>
<td>Create a job to hard delete billing document files</td>
</tr>
<tr>
<td><em>BillingDocumentsApi</em></td>
<td><strong>GenerateBillingDocuments</strong></td>
<td><strong>POST</strong> /v1/accounts/{key}/billing-documents/generate</td>
<td>Generate billing documents by account ID</td>
</tr>
<tr>
<td><em>BillingDocumentsApi</em></td>
<td><strong>GetBillingDocumentFilesDeletionJob</strong></td>
<td><strong>GET</strong> /v1/accounts/billing-documents/files/deletion-jobs/{jobId}</td>
<td>Retrieve a job of hard deleting billing document files</td>
</tr>
<tr>
<td><em>BillingDocumentsApi</em></td>
<td><strong>GetBillingDocuments</strong></td>
<td><strong>GET</strong> /v1/billing-documents</td>
<td>List billing documents for an account</td>
</tr>
<tr>
<td><em>BillingPreviewRunApi</em></td>
<td><strong>CreateBillingPreviewRun</strong></td>
<td><strong>POST</strong> /v1/billing-preview-runs</td>
<td>Create a billing preview run</td>
</tr>
<tr>
<td><em>BillingPreviewRunApi</em></td>
<td><strong>GetBillingPreviewRun</strong></td>
<td><strong>GET</strong> /v1/billing-preview-runs/{billingPreviewRunId}</td>
<td>Retrieve a billing preview run</td>
</tr>
<tr>
<td><em>BookingDateBackfillJobApi</em></td>
<td><strong>GETBookingDateBackfillJobById</strong></td>
<td><strong>GET</strong> /v1/uno/data-backfill/bookingdate/jobs/{jobId}</td>
<td>Find BookingDate Backfill job by ID</td>
</tr>
<tr>
<td><em>BookingDateBackfillJobApi</em></td>
<td><strong>GETListBookingDateBackfillJobs</strong></td>
<td><strong>GET</strong> /v1/uno/data-backfill/bookingdate/jobs</td>
<td>Query all Booking Date Backfill Jobs</td>
</tr>
<tr>
<td><em>BookingDateBackfillJobApi</em></td>
<td><strong>POSTCreateBookingDateBackfillJob</strong></td>
<td><strong>POST</strong> /v1/uno/data-backfill/bookingdate/jobs</td>
<td>Create a new BookingDate Backfil job</td>
</tr>
<tr>
<td><em>BookingDateBackfillJobApi</em></td>
<td><strong>PUTStopBookingDateBackfillJobById</strong></td>
<td><strong>PUT</strong> /v1/uno/data-backfill/bookingdate/jobs/{jobId}</td>
<td>Stop BookingDate Backfill job by ID</td>
</tr>
<tr>
<td><em>CatalogGroupsApi</em></td>
<td><strong>CreateCatalogGroup</strong></td>
<td><strong>POST</strong> /v1/catalog-groups</td>
<td>Create a catalog group</td>
</tr>
<tr>
<td><em>CatalogGroupsApi</em></td>
<td><strong>DeleteCatalogGroup</strong></td>
<td><strong>DELETE</strong> /v1/catalog-groups/{catalog-group-key}</td>
<td>Delete a catalog group</td>
</tr>
<tr>
<td><em>CatalogGroupsApi</em></td>
<td><strong>GetCatalogGroup</strong></td>
<td><strong>GET</strong> /v1/catalog-groups/{catalog-group-key}</td>
<td>Retrieve a catalog group</td>
</tr>
<tr>
<td><em>CatalogGroupsApi</em></td>
<td><strong>GetCatalogGroups</strong></td>
<td><strong>GET</strong> /v1/catalog-groups</td>
<td>List all catalog groups</td>
</tr>
<tr>
<td><em>CatalogGroupsApi</em></td>
<td><strong>UpdateCatalogGroup</strong></td>
<td><strong>PUT</strong> /v1/catalog-groups/{catalog-group-key}</td>
<td>Update a catalog group</td>
</tr>
<tr>
<td><em>ContactSnapshotsApi</em></td>
<td><strong>GetContactSnapshot</strong></td>
<td><strong>GET</strong> /v1/contact-snapshots/{contact-snapshot-id}</td>
<td>Retrieve a contact snapshot</td>
</tr>
<tr>
<td><em>ContactsApi</em></td>
<td><strong>CreateContact</strong></td>
<td><strong>POST</strong> /v1/contacts</td>
<td>Create a contact</td>
</tr>
<tr>
<td><em>ContactsApi</em></td>
<td><strong>DeleteContact</strong></td>
<td><strong>DELETE</strong> /v1/contacts/{contactId}</td>
<td>Delete a contact</td>
</tr>
<tr>
<td><em>ContactsApi</em></td>
<td><strong>GetContact</strong></td>
<td><strong>GET</strong> /v1/contacts/{contactId}</td>
<td>Retrieve a contact</td>
</tr>
<tr>
<td><em>ContactsApi</em></td>
<td><strong>ScrubContact</strong></td>
<td><strong>PUT</strong> /v1/contacts/{contactId}/scrub</td>
<td>Scrub a contact</td>
</tr>
<tr>
<td><em>ContactsApi</em></td>
<td><strong>TransferContact</strong></td>
<td><strong>PUT</strong> /v1/contacts/{contactId}/transfer</td>
<td>Transfer a contact</td>
</tr>
<tr>
<td><em>ContactsApi</em></td>
<td><strong>UpdateContact</strong></td>
<td><strong>PUT</strong> /v1/contacts/{contactId}</td>
<td>Update a contact</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>ApplyCreditMemo</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/{creditMemoKey}/apply</td>
<td>Apply a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>ApplyCreditMemoAsync</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/{creditMemoKey}/apply-async</td>
<td>Async Apply a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>BulkCreateCreditMemos</strong></td>
<td><strong>POST</strong> /v1/credit-memos/bulk</td>
<td>Create credit memos</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>BulkUpdateCreditMemos</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/bulk</td>
<td>Update credit memos</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>CancelAsyncCreditMemo</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/{creditMemoKey}/cancel-async</td>
<td>Cancel a Credit Memo in async</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>CancelCreditMemo</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/{creditMemoKey}/cancel</td>
<td>Cancel a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>CreateCreditMemoFromCharge</strong></td>
<td><strong>POST</strong> /v1/credit-memos</td>
<td>Create a credit memo from a charge</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>CreateCreditMemoFromInvoice</strong></td>
<td><strong>POST</strong> /v1/credit-memos/invoice/{invoiceKey}</td>
<td>Create a credit memo from an invoice</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>CreateCreditMemoTaxationItems</strong></td>
<td><strong>POST</strong> /v1/credit-memos/{creditMemoKey}/taxation-items</td>
<td>Create taxation items for a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>DeleteCreditMemo</strong></td>
<td><strong>DELETE</strong> /v1/credit-memos/{creditMemoKey}</td>
<td>Delete a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>EmailCreditMemo</strong></td>
<td><strong>POST</strong> /v1/credit-memos/{creditMemoKey}/emails</td>
<td>Email a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GenerateCreditMemoPdf</strong></td>
<td><strong>POST</strong> /v1/credit-memos/{creditMemoKey}/pdfs</td>
<td>Generate a credit memo PDF file</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GetApplyCreditMemoAsyncJob</strong></td>
<td><strong>GET</strong> /v1/credit-memos/apply-async-jobs/{applyAsyncJobId}</td>
<td>Get Async Apply Credit Memo Job by Id</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GetCreditMemo</strong></td>
<td><strong>GET</strong> /v1/credit-memos/{creditMemoKey}</td>
<td>Retrieve a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GetCreditMemoItem</strong></td>
<td><strong>GET</strong> /v1/credit-memos/{creditMemoKey}/items/{creditMemoItemId}</td>
<td>Retrieve a credit memo item</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GetCreditMemoItemPart</strong></td>
<td><strong>GET</strong> /v1/credit-memos/{creditMemoKey}/parts/{partId}/item-parts/{itemPartId}</td>
<td>Retrieve a credit memo part item</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GetCreditMemoItemParts</strong></td>
<td><strong>GET</strong> /v1/credit-memos/{creditMemoKey}/parts/{partId}/item-parts</td>
<td>List all credit memo part items</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GetCreditMemoItems</strong></td>
<td><strong>GET</strong> /v1/credit-memos/{creditMemoKey}/items</td>
<td>List credit memo items</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GetCreditMemoPart</strong></td>
<td><strong>GET</strong> /v1/credit-memos/{creditMemoKey}/parts/{partId}</td>
<td>Retrieve a credit memo part</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GetCreditMemoParts</strong></td>
<td><strong>GET</strong> /v1/credit-memos/{creditMemoKey}/parts</td>
<td>List all parts of a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GetCreditMemoPdfStatus</strong></td>
<td><strong>GET</strong> /v1/credit-memos/pdf-status</td>
<td>Retrieve PDF status of credit memos in a batch.</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GetCreditMemos</strong></td>
<td><strong>GET</strong> /v1/credit-memos</td>
<td>List credit memos</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GetTaxationItemsOfCreditMemoItem</strong></td>
<td><strong>GET</strong> /v1/credit-memos/{creditMemoKey}/items/{creditMemoItemId}/taxation-items</td>
<td>List all taxation items of a credit memo item</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>GetUnapplyCreditMemoAsyncJob</strong></td>
<td><strong>GET</strong> /v1/credit-memos/unapply-async-jobs/{unapplyAsyncJobId}</td>
<td>Get Async Unapply Credit Memo Job by Id</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>PostAsyncCreditMemo</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/{creditMemoKey}/post-async</td>
<td>Post a Credit Memo in async</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>PostCreditMemo</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/{creditMemoKey}/post</td>
<td>Post a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>RefundCreditMemo</strong></td>
<td><strong>POST</strong> /v1/credit-memos/{creditMemoKey}/refund</td>
<td>Refund a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>ReverseCreditMemo</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/{creditMemoKey}/reverse</td>
<td>Reverse a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>UnapplyCreditMemo</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/{creditMemoKey}/unapply</td>
<td>Unapply a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>UnapplyCreditMemoAsync</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/{creditMemoKey}/unapply-async</td>
<td>Async Unapply a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>UnpostCreditMemo</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/{creditMemoKey}/unpost</td>
<td>Unpost a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>UpdateCreditMemo</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/{creditMemoKey}</td>
<td>Update a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>UploadFileForCreditMemo</strong></td>
<td><strong>POST</strong> /v1/credit-memos/{creditMemoKey}/files</td>
<td>Upload a file for a credit memo</td>
</tr>
<tr>
<td><em>CreditMemosApi</em></td>
<td><strong>WriteOffCreditMemo</strong></td>
<td><strong>PUT</strong> /v1/credit-memos/{creditMemoKey}/write-off</td>
<td>Write off a credit memo</td>
</tr>
<tr>
<td><em>CustomEventTriggersApi</em></td>
<td><strong>DeleteEventTrigger</strong></td>
<td><strong>DELETE</strong> /events/event-triggers/{id}</td>
<td>Delete an event trigger</td>
</tr>
<tr>
<td><em>CustomEventTriggersApi</em></td>
<td><strong>GetEventTrigger</strong></td>
<td><strong>GET</strong> /events/event-triggers/{id}</td>
<td>Retrieve an event trigger</td>
</tr>
<tr>
<td><em>CustomEventTriggersApi</em></td>
<td><strong>GetEventTriggers</strong></td>
<td><strong>GET</strong> /events/event-triggers</td>
<td>List event triggers</td>
</tr>
<tr>
<td><em>CustomEventTriggersApi</em></td>
<td><strong>PostEventTrigger</strong></td>
<td><strong>POST</strong> /events/event-triggers</td>
<td>Create an event trigger</td>
</tr>
<tr>
<td><em>CustomEventTriggersApi</em></td>
<td><strong>PutEventTrigger</strong></td>
<td><strong>PUT</strong> /events/event-triggers/{id}</td>
<td>Update an event trigger</td>
</tr>
<tr>
<td><em>CustomExchangeRatesApi</em></td>
<td><strong>GetCustomExchangeRates</strong></td>
<td><strong>GET</strong> /v1/custom-exchange-rates/{currency}</td>
<td>List custom exchange rates by currency</td>
</tr>
<tr>
<td><em>CustomObjectDefinitionsApi</em></td>
<td><strong>DeleteCustomObjectDefinitionByType</strong></td>
<td><strong>DELETE</strong> /objects/definitions/default/{object}</td>
<td>Delete a custom object definition</td>
</tr>
<tr>
<td><em>CustomObjectDefinitionsApi</em></td>
<td><strong>GetAllCustomObjectDefinitionsInNamespace</strong></td>
<td><strong>GET</strong> /objects/definitions/default</td>
<td>List custom object definitions</td>
</tr>
<tr>
<td><em>CustomObjectDefinitionsApi</em></td>
<td><strong>GetCustomObjectDefinitionByType</strong></td>
<td><strong>GET</strong> /objects/definitions/default/{object}</td>
<td>Retrieve a custom object definition</td>
</tr>
<tr>
<td><em>CustomObjectDefinitionsApi</em></td>
<td><strong>PostCustomObjectDefinitions</strong></td>
<td><strong>POST</strong> /objects/definitions/default</td>
<td>Create custom object definitions</td>
</tr>
<tr>
<td><em>CustomObjectDefinitionsApi</em></td>
<td><strong>PostUpdateCustomObjectDefinition</strong></td>
<td><strong>POST</strong> /objects/migrations</td>
<td>Update a custom object definition</td>
</tr>
<tr>
<td><em>CustomObjectJobsApi</em></td>
<td><strong>GetAllCustomObjectBulkJobs</strong></td>
<td><strong>GET</strong> /objects/jobs</td>
<td>List all custom object bulk jobs</td>
</tr>
<tr>
<td><em>CustomObjectJobsApi</em></td>
<td><strong>GetCustomObjectBulkJob</strong></td>
<td><strong>GET</strong> /objects/jobs/{id}</td>
<td>Retrieve a custom object bulk job</td>
</tr>
<tr>
<td><em>CustomObjectJobsApi</em></td>
<td><strong>GetCustomObjectBulkJobErrors</strong></td>
<td><strong>GET</strong> /objects/jobs/{id}/errors</td>
<td>List all errors for a custom object bulk job</td>
</tr>
<tr>
<td><em>CustomObjectJobsApi</em></td>
<td><strong>PATCHCustomObjectBulkJob</strong></td>
<td><strong>PATCH</strong> /objects/jobs/{id}/cancel</td>
<td>Cancel a custom object bulk job</td>
</tr>
<tr>
<td><em>CustomObjectJobsApi</em></td>
<td><strong>PostCustomObjectBulkJob</strong></td>
<td><strong>POST</strong> /objects/jobs</td>
<td>Submit a custom object bulk job</td>
</tr>
<tr>
<td><em>CustomObjectJobsApi</em></td>
<td><strong>PostUploadFileForCustomObjectBulkJob</strong></td>
<td><strong>POST</strong> /objects/jobs/{id}/files</td>
<td>Upload a file for a custom object bulk job</td>
</tr>
<tr>
<td><em>CustomObjectRecordsApi</em></td>
<td><strong>DeleteCustomObjectRecordByID</strong></td>
<td><strong>DELETE</strong> /objects/records/default/{object}/{id}</td>
<td>Delete a custom object record</td>
</tr>
<tr>
<td><em>CustomObjectRecordsApi</em></td>
<td><strong>GetAllRecordsForCustomObjectType</strong></td>
<td><strong>GET</strong> /objects/records/default/{object}</td>
<td>List records for a custom object</td>
</tr>
<tr>
<td><em>CustomObjectRecordsApi</em></td>
<td><strong>GetCustomObjectRecordByID</strong></td>
<td><strong>GET</strong> /objects/records/default/{object}/{id}</td>
<td>Retrieve a custom object record</td>
</tr>
<tr>
<td><em>CustomObjectRecordsApi</em></td>
<td><strong>PatchPartialUpdateCustomObjectRecord</strong></td>
<td><strong>PATCH</strong> /objects/records/default/{object}/{id}</td>
<td>Partially update a custom object record</td>
</tr>
<tr>
<td><em>CustomObjectRecordsApi</em></td>
<td><strong>PostCustomObjectRecords</strong></td>
<td><strong>POST</strong> /objects/records/default/{object}</td>
<td>Create custom object records</td>
</tr>
<tr>
<td><em>CustomObjectRecordsApi</em></td>
<td><strong>PostCustomObjectRecordsBatchUpdateOrDelete</strong></td>
<td><strong>POST</strong> /objects/batch/default/{object}</td>
<td>Update or delete custom object records</td>
</tr>
<tr>
<td><em>CustomObjectRecordsApi</em></td>
<td><strong>PutCustomObjectRecord</strong></td>
<td><strong>PUT</strong> /objects/records/default/{object}/{id}</td>
<td>Update a custom object record</td>
</tr>
<tr>
<td><em>CustomPaymentMethodTypesApi</em></td>
<td><strong>CreateOpenPaymentMethodType</strong></td>
<td><strong>POST</strong> /open-payment-method-types</td>
<td>Create a draft custom payment method type</td>
</tr>
<tr>
<td><em>CustomPaymentMethodTypesApi</em></td>
<td><strong>GetOpenPaymentMethodTypeRevision</strong></td>
<td><strong>GET</strong> /open-payment-method-types/{paymentMethodTypeName}/draft/{revisionNumber}</td>
<td>Retrieve a specific draft revision of a custom payment method type</td>
</tr>
<tr>
<td><em>CustomPaymentMethodTypesApi</em></td>
<td><strong>GetPublishedOpenPaymentMethodType</strong></td>
<td><strong>GET</strong> /open-payment-method-types/{paymentMethodTypeName}/published</td>
<td>Retrieve a published custom payment method type</td>
</tr>
<tr>
<td><em>CustomPaymentMethodTypesApi</em></td>
<td><strong>PublishOpenPaymentMethodType</strong></td>
<td><strong>PUT</strong> /open-payment-method-types/publish/{paymentMethodTypeName}</td>
<td>Publish a custom payment method type</td>
</tr>
<tr>
<td><em>CustomPaymentMethodTypesApi</em></td>
<td><strong>UpdateOpenPaymentMethodType</strong></td>
<td><strong>PUT</strong> /open-payment-method-types/{paymentMethodTypeName}</td>
<td>Update a custom payment method type</td>
</tr>
<tr>
<td><em>CustomScheduledEventsApi</em></td>
<td><strong>DeleteScheduledEventByID</strong></td>
<td><strong>DELETE</strong> /events/scheduled-events/{id}</td>
<td>Delete a scheduled event by ID</td>
</tr>
<tr>
<td><em>CustomScheduledEventsApi</em></td>
<td><strong>GetScheduledEventByID</strong></td>
<td><strong>GET</strong> /events/scheduled-events/{id}</td>
<td>Retrieve a scheduled event by ID</td>
</tr>
<tr>
<td><em>CustomScheduledEventsApi</em></td>
<td><strong>GetScheduledEvents</strong></td>
<td><strong>GET</strong> /events/scheduled-events</td>
<td>List all scheduled events</td>
</tr>
<tr>
<td><em>CustomScheduledEventsApi</em></td>
<td><strong>PostScheduledEvent</strong></td>
<td><strong>POST</strong> /events/scheduled-events</td>
<td>Create a scheduled event</td>
</tr>
<tr>
<td><em>CustomScheduledEventsApi</em></td>
<td><strong>UpdateScheduledEventByID</strong></td>
<td><strong>PUT</strong> /events/scheduled-events/{id}</td>
<td>Update a scheduled event by ID</td>
</tr>
<tr>
<td><em>DataBackfillJobApi</em></td>
<td><strong>GETDataBackfillJobById</strong></td>
<td><strong>GET</strong> /v1/uno/data-backfill/jobs/{jobId}</td>
<td>Find Data Backfill job by ID</td>
</tr>
<tr>
<td><em>DataBackfillJobApi</em></td>
<td><strong>GETDataBackfillTemplate</strong></td>
<td><strong>GET</strong> /v1/uno/data-backfill/jobs/{type}/template</td>
<td>Download a Data Backfill template file</td>
</tr>
<tr>
<td><em>DataBackfillJobApi</em></td>
<td><strong>GETListDataBackfillJobs</strong></td>
<td><strong>GET</strong> /v1/uno/date-backfill/listjobs</td>
<td>Query all data backfill jobs</td>
</tr>
<tr>
<td><em>DataBackfillJobApi</em></td>
<td><strong>POSTCreateDataBackfillJob</strong></td>
<td><strong>POST</strong> /v1/uno/data-backfill/jobs</td>
<td>Create a new Data Backfil job</td>
</tr>
<tr>
<td><em>DataBackfillJobApi</em></td>
<td><strong>PUTStopDataBackfillJobById</strong></td>
<td><strong>PUT</strong> /v1/uno/data-backfill/jobs/{jobId}</td>
<td>Stop Data Backfill job by ID</td>
</tr>
<tr>
<td><em>DataLabelingApi</em></td>
<td><strong>GetDataLabelingJob</strong></td>
<td><strong>GET</strong> /v1/multi-organizations/data-labeling-job/{job-id}</td>
<td>Retrieve a data labeling job</td>
</tr>
<tr>
<td><em>DataLabelingApi</em></td>
<td><strong>SubmitDataLabelingJob</strong></td>
<td><strong>POST</strong> /v1/multi-organizations/data-labeling-job</td>
<td>Submit a data labeling job</td>
</tr>
<tr>
<td><em>DataQueriesApi</em></td>
<td><strong>DeleteDataQueryJob</strong></td>
<td><strong>DELETE</strong> /query/jobs/{job-id}</td>
<td>Cancel a data query job</td>
</tr>
<tr>
<td><em>DataQueriesApi</em></td>
<td><strong>GetDataQueryJob</strong></td>
<td><strong>GET</strong> /query/jobs/{job-id}</td>
<td>Retrieve a data query job</td>
</tr>
<tr>
<td><em>DataQueriesApi</em></td>
<td><strong>GetDataQueryJobs</strong></td>
<td><strong>GET</strong> /query/jobs</td>
<td>List data query jobs</td>
</tr>
<tr>
<td><em>DataQueriesApi</em></td>
<td><strong>PostDataQueryJob</strong></td>
<td><strong>POST</strong> /query/jobs</td>
<td>Submit a data query</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>BulkCreateDebitMemos</strong></td>
<td><strong>POST</strong> /v1/debit-memos/bulk</td>
<td>Create debit memos</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>BulkUpdateDebitMemos</strong></td>
<td><strong>PUT</strong> /v1/debit-memos/bulk</td>
<td>Update debit memos</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>CancelAsyncDebitMemo</strong></td>
<td><strong>PUT</strong> /v1/debit-memos/{debitMemoKey}/cancel-async</td>
<td>Cancel a Debit Memo in async</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>CancelDebitMemo</strong></td>
<td><strong>PUT</strong> /v1/debit-memos/{debitMemoKey}/cancel</td>
<td>Cancel a debit memo</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>CollectDebitMemo</strong></td>
<td><strong>POST</strong> /v1/debit-memos/{debitMemoKey}/collect</td>
<td>Collect a posted debit memo</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>CreateDebitMemoFromCharge</strong></td>
<td><strong>POST</strong> /v1/debit-memos</td>
<td>Create a debit memo from a charge</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>CreateDebitMemoFromInvoice</strong></td>
<td><strong>POST</strong> /v1/debit-memos/invoice/{invoiceKey}</td>
<td>Create a debit memo from an invoice</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>CreateTaxationItemsForDebitMemo</strong></td>
<td><strong>POST</strong> /v1/debit-memos/{debitMemoKey}/taxation-items</td>
<td>Create taxation items for a debit memo</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>DeleteDebitMemo</strong></td>
<td><strong>DELETE</strong> /v1/debit-memos/{debitMemoKey}</td>
<td>Delete a debit memo</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>EmailDebitMemo</strong></td>
<td><strong>POST</strong> /v1/debit-memos/{debitMemoKey}/emails</td>
<td>Email a debit memo</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>GenerateDebitMemoPdf</strong></td>
<td><strong>POST</strong> /v1/debit-memos/{debitMemoKey}/pdfs</td>
<td>Generate a debit memo PDF file</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>GetDebitMemo</strong></td>
<td><strong>GET</strong> /v1/debit-memos/{debitMemoKey}</td>
<td>Retrieve a debit memo</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>GetDebitMemoApplicationParts</strong></td>
<td><strong>GET</strong> /v1/debit-memos/{debitMemoKey}/application-parts</td>
<td>List all application parts of a debit memo</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>GetDebitMemoItem</strong></td>
<td><strong>GET</strong> /v1/debit-memos/{debitMemoKey}/items/{debitMemoItemId}</td>
<td>Retrieve a debit memo item</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>GetDebitMemoItems</strong></td>
<td><strong>GET</strong> /v1/debit-memos/{debitMemoKey}/items</td>
<td>List debit memo items</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>GetDebitMemoPdfStatus</strong></td>
<td><strong>GET</strong> /v1/debit-memos/pdf-status</td>
<td>Retrieve PDF status of debit memos in a batch.</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>GetDebitMemos</strong></td>
<td><strong>GET</strong> /v1/debit-memos</td>
<td>List debit memos</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>GetTaxationItemsOfDebitMemoItem</strong></td>
<td><strong>GET</strong> /v1/debit-memos/{debitMemoKey}/items/{debitMemoItemId}/taxation-items</td>
<td>List all taxation items of a debit memo item</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>PostAsyncDebitMemo</strong></td>
<td><strong>PUT</strong> /v1/debit-memos/{debitMemoKey}/post-async</td>
<td>Post a Debit Memo in async</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>PostDebitMemo</strong></td>
<td><strong>PUT</strong> /v1/debit-memos/{debitMemoKey}/post</td>
<td>Post a debit memo</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>UnpostDebitMemo</strong></td>
<td><strong>PUT</strong> /v1/debit-memos/{debitMemoKey}/unpost</td>
<td>Unpost a debit memo</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>UpdateDebitMemo</strong></td>
<td><strong>PUT</strong> /v1/debit-memos/{debitMemoKey}</td>
<td>Update a debit memo</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>UpdateDebitMemosDueDates</strong></td>
<td><strong>PUT</strong> /v1/debit-memos</td>
<td>Update due dates for debit memos</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>UploadFileForDebitMemo</strong></td>
<td><strong>POST</strong> /v1/debit-memos/{debitMemoKey}/files</td>
<td>Upload a file for a debit memo</td>
</tr>
<tr>
<td><em>DebitMemosApi</em></td>
<td><strong>WriteOffDebitMemo</strong></td>
<td><strong>PUT</strong> /v1/debitmemos/{debitMemoKey}/write-off</td>
<td>Write off an debit memo</td>
</tr>
<tr>
<td><em>DeploymentApi</em></td>
<td><strong>CompareAndDeployProductCatalogTemplate</strong></td>
<td><strong>POST</strong> /deployment-manager/deployments/template/product_catalog</td>
<td>Compare and Deploy a template for product catalog to a target tenant</td>
</tr>
<tr>
<td><em>DeploymentApi</em></td>
<td><strong>CompareAndDeployProductCatalogTenant</strong></td>
<td><strong>POST</strong> /deployment-manager/deployments/tenant/product_catalog</td>
<td>Compare and Deploy product catalog between a source tenant and a target tenant</td>
</tr>
<tr>
<td><em>DeploymentApi</em></td>
<td><strong>CompareAndDeployTemplate</strong></td>
<td><strong>POST</strong> /deployment-manager/deployments/templates</td>
<td>Compare and Deploy settings from a template to a target tenant</td>
</tr>
<tr>
<td><em>DeploymentApi</em></td>
<td><strong>CompareAndDeployTenant</strong></td>
<td><strong>POST</strong> /deployment-manager/deployments/tenants</td>
<td>Compare and Deploy settings between a source tenant and a target tenant</td>
</tr>
<tr>
<td><em>DeploymentApi</em></td>
<td><strong>RetrieveDeployment</strong></td>
<td><strong>GET</strong> /deployment-manager/deployments/{migrationId}</td>
<td>Retrieves a deployment log.</td>
</tr>
<tr>
<td><em>DeploymentApi</em></td>
<td><strong>RevertDeployment</strong></td>
<td><strong>POST</strong> /deployment-manager/deployments/{migrationId}/revert</td>
<td>Reverts the deployment.</td>
</tr>
<tr>
<td><em>DeploymentConfigurationTemplatesApi</em></td>
<td><strong>CompareTemplate</strong></td>
<td><strong>POST</strong> /deployment-manager/deployment_artifacts/compare</td>
<td>Compare settings between a source tenant and a target tenant</td>
</tr>
<tr>
<td><em>DeploymentConfigurationTemplatesApi</em></td>
<td><strong>CreateDeploymentTemplate</strong></td>
<td><strong>POST</strong> /deployment-manager/deployment_templates</td>
<td>Create a deployment template</td>
</tr>
<tr>
<td><em>DeploymentConfigurationTemplatesApi</em></td>
<td><strong>DeleteDeploymentTemplate</strong></td>
<td><strong>DELETE</strong> /deployment-manager/deployment_templates/{id}</td>
<td>Delete a template</td>
</tr>
<tr>
<td><em>DeploymentConfigurationTemplatesApi</em></td>
<td><strong>DownloadDeploymentTemplate</strong></td>
<td><strong>GET</strong> /deployment-manager/deployment_artifacts</td>
<td>Download a template</td>
</tr>
<tr>
<td><em>DeploymentConfigurationTemplatesApi</em></td>
<td><strong>GetDeploymentTemplateDetail</strong></td>
<td><strong>GET</strong> /deployment-manager/deployment_templates/{id}</td>
<td>List all details of a template</td>
</tr>
<tr>
<td><em>DeploymentConfigurationTemplatesApi</em></td>
<td><strong>GetDeploymentTemplates</strong></td>
<td><strong>GET</strong> /deployment-manager/deployment_templates</td>
<td>List all templates</td>
</tr>
<tr>
<td><em>DeploymentConfigurationTemplatesApi</em></td>
<td><strong>GetSourceComponentDetails</strong></td>
<td><strong>GET</strong> /deployment-manager/deployment_artifacts/retrieve-settings</td>
<td>List all details of source components</td>
</tr>
<tr>
<td><em>DeploymentConfigurationTemplatesApi</em></td>
<td><strong>MigrateTenantSettings</strong></td>
<td><strong>POST</strong> /deployment-manager/deployment_artifacts/deploy</td>
<td>Migrate settings from source tenant to target tenant</td>
</tr>
<tr>
<td><em>DescribeApi</em></td>
<td><strong>GetDescribe</strong></td>
<td><strong>GET</strong> /v1/describe/{object}</td>
<td>Describe an object</td>
</tr>
<tr>
<td><em>EInvoicingApi</em></td>
<td><strong>DeleteBusinessRegion</strong></td>
<td><strong>DELETE</strong> /v1/e-invoice/business-regions/{key}</td>
<td>Delete a Business Region</td>
</tr>
<tr>
<td><em>EInvoicingApi</em></td>
<td><strong>DeleteServiceProvider</strong></td>
<td><strong>DELETE</strong> /v1/e-invoice/service-providers/{key}</td>
<td>Delete a Service Provider</td>
</tr>
<tr>
<td><em>EInvoicingApi</em></td>
<td><strong>GetBusinessRegion</strong></td>
<td><strong>GET</strong> /v1/e-invoice/business-regions/{key}</td>
<td>Retrieve a Business Region</td>
</tr>
<tr>
<td><em>EInvoicingApi</em></td>
<td><strong>GetBusinessRegions</strong></td>
<td><strong>GET</strong> /v1/e-invoice/business-regions</td>
<td>List business region</td>
</tr>
<tr>
<td><em>EInvoicingApi</em></td>
<td><strong>GetServiceProvider</strong></td>
<td><strong>GET</strong> /v1/e-invoice/service-providers/{key}</td>
<td>Retrieve a Service Provider</td>
</tr>
<tr>
<td><em>EInvoicingApi</em></td>
<td><strong>GetServiceProviders</strong></td>
<td><strong>GET</strong> /v1/e-invoice/service-providers</td>
<td>List Service Provider</td>
</tr>
<tr>
<td><em>EInvoicingApi</em></td>
<td><strong>PostBusinessRegion</strong></td>
<td><strong>POST</strong> /v1/e-invoice/business-regions</td>
<td>Post a Business Region</td>
</tr>
<tr>
<td><em>EInvoicingApi</em></td>
<td><strong>PostServiceProvider</strong></td>
<td><strong>POST</strong> /v1/e-invoice/service-providers</td>
<td>Post a Service Provider</td>
</tr>
<tr>
<td><em>EInvoicingApi</em></td>
<td><strong>UpdateBusinessRegion</strong></td>
<td><strong>PUT</strong> /v1/e-invoice/business-regions/{key}</td>
<td>Update a Business Region</td>
</tr>
<tr>
<td><em>EInvoicingApi</em></td>
<td><strong>UpdateServiceProvider</strong></td>
<td><strong>PUT</strong> /v1/e-invoice/service-providers/{key}</td>
<td>Update a Service Provider</td>
</tr>
<tr>
<td><em>ElectronicPaymentsHealthApi</em></td>
<td><strong>GetSystemHealthPaymentVolumeSummary</strong></td>
<td><strong>GET</strong> /system-health/payments/volume-summary</td>
<td>List payment volume summary records</td>
</tr>
<tr>
<td><em>FilesApi</em></td>
<td><strong>GetFiles</strong></td>
<td><strong>GET</strong> /v1/files/{file-id}</td>
<td>Retrieve a file</td>
</tr>
<tr>
<td><em>FulfillmentsApi</em></td>
<td><strong>CreateFulfillment</strong></td>
<td><strong>POST</strong> /v1/fulfillments</td>
<td>Create fulfillments</td>
</tr>
<tr>
<td><em>FulfillmentsApi</em></td>
<td><strong>CreateFulfillmentItem</strong></td>
<td><strong>POST</strong> /v1/fulfillment-items</td>
<td>Create fulfillment items</td>
</tr>
<tr>
<td><em>FulfillmentsApi</em></td>
<td><strong>DeleteFulfillment</strong></td>
<td><strong>DELETE</strong> /v1/fulfillments/{key}</td>
<td>Delete a fulfillment</td>
</tr>
<tr>
<td><em>FulfillmentsApi</em></td>
<td><strong>DeleteFulfillmentItem</strong></td>
<td><strong>DELETE</strong> /v1/fulfillment-items/{id}</td>
<td>Delete a fulfillment item</td>
</tr>
<tr>
<td><em>FulfillmentsApi</em></td>
<td><strong>GetFulfillment</strong></td>
<td><strong>GET</strong> /v1/fulfillments/{key}</td>
<td>Retrieve a fulfillment</td>
</tr>
<tr>
<td><em>FulfillmentsApi</em></td>
<td><strong>GetFulfillmentItem</strong></td>
<td><strong>GET</strong> /v1/fulfillment-items/{id}</td>
<td>Retrieve a fulfillment item</td>
</tr>
<tr>
<td><em>FulfillmentsApi</em></td>
<td><strong>UpdateFulfillment</strong></td>
<td><strong>PUT</strong> /v1/fulfillments/{key}</td>
<td>Update a fulfillment</td>
</tr>
<tr>
<td><em>FulfillmentsApi</em></td>
<td><strong>UpdateFulfillmentItem</strong></td>
<td><strong>PUT</strong> /v1/fulfillment-items/{id}</td>
<td>Update a fulfillment item</td>
</tr>
<tr>
<td><em>HostedPagesApi</em></td>
<td><strong>GetHostedPages</strong></td>
<td><strong>GET</strong> /v1/hostedpages</td>
<td>List hosted pages</td>
</tr>
<tr>
<td><em>ImportsApi</em></td>
<td><strong>ObjectGetImport</strong></td>
<td><strong>GET</strong> /v1/object/import/{id}</td>
<td>CRUD: Retrieve an import</td>
</tr>
<tr>
<td><em>ImportsApi</em></td>
<td><strong>ObjectPostImport</strong></td>
<td><strong>POST</strong> /v1/object/import</td>
<td>CRUD: Create an import</td>
</tr>
<tr>
<td><em>InvoiceSchedulesApi</em></td>
<td><strong>AttachInvoiceSchedule</strong></td>
<td><strong>PUT</strong> /v1/invoice-schedules/{scheduleKey}/attach</td>
<td>Attach an invoice schedule</td>
</tr>
<tr>
<td><em>InvoiceSchedulesApi</em></td>
<td><strong>CreateInvoiceSchedule</strong></td>
<td><strong>POST</strong> /v1/invoice-schedules</td>
<td>Create an invoice schedule</td>
</tr>
<tr>
<td><em>InvoiceSchedulesApi</em></td>
<td><strong>DeleteInvoiceSchedule</strong></td>
<td><strong>DELETE</strong> /v1/invoice-schedules/{scheduleKey}</td>
<td>Delete an invoice schedule</td>
</tr>
<tr>
<td><em>InvoiceSchedulesApi</em></td>
<td><strong>DetachInvoiceSchedule</strong></td>
<td><strong>PUT</strong> /v1/invoice-schedules/{scheduleKey}/detach</td>
<td>Detach an invoice schedule</td>
</tr>
<tr>
<td><em>InvoiceSchedulesApi</em></td>
<td><strong>ExecuteInvoiceSchedule</strong></td>
<td><strong>POST</strong> /v1/invoice-schedules/{scheduleKey}/execute</td>
<td>Execute an invoice schedule</td>
</tr>
<tr>
<td><em>InvoiceSchedulesApi</em></td>
<td><strong>GetInvoiceSchedule</strong></td>
<td><strong>GET</strong> /v1/invoice-schedules/{scheduleKey}</td>
<td>Retrieve an invoice schedule</td>
</tr>
<tr>
<td><em>InvoiceSchedulesApi</em></td>
<td><strong>PauseInvoiceSchedule</strong></td>
<td><strong>PUT</strong> /v1/invoice-schedules/{scheduleKey}/pause</td>
<td>Pause an invoice schedule</td>
</tr>
<tr>
<td><em>InvoiceSchedulesApi</em></td>
<td><strong>ResumeInvoiceSchedule</strong></td>
<td><strong>PUT</strong> /v1/invoice-schedules/{scheduleKey}/resume</td>
<td>Resume an invoice schedule</td>
</tr>
<tr>
<td><em>InvoiceSchedulesApi</em></td>
<td><strong>UpdateInvoiceSchedule</strong></td>
<td><strong>PUT</strong> /v1/invoice-schedules/{scheduleKey}</td>
<td>Update an invoice schedule</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>BulkCreateStandaloneInvoices</strong></td>
<td><strong>POST</strong> /v1/invoices/batch</td>
<td>Create standalone invoices</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>BulkPostInvoices</strong></td>
<td><strong>POST</strong> /v1/invoices/bulk-post</td>
<td>Post invoices</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>BulkUpdateInvoices</strong></td>
<td><strong>PUT</strong> /v1/invoices</td>
<td>Update invoices</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>CancelInvoice</strong></td>
<td><strong>PUT</strong> /v1/invoices/{invoiceKey}/cancel</td>
<td>Cancel an invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>CreateInvoiceTaxationItems</strong></td>
<td><strong>POST</strong> /v1/invoices/{invoiceKey}/taxation-items</td>
<td>Create taxation items for an invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>CreateStandaloneInvoice</strong></td>
<td><strong>POST</strong> /v1/invoices</td>
<td>Create a standalone invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>DeleteInvoice</strong></td>
<td><strong>DELETE</strong> /v1/invoices/{invoiceKey}</td>
<td>Delete an invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>EmailInvoice</strong></td>
<td><strong>POST</strong> /v1/invoices/{invoiceKey}/emails</td>
<td>Email an invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>GetInvoice</strong></td>
<td><strong>GET</strong> /v1/invoices/{invoiceKey}</td>
<td>Retrieve an invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>GetInvoiceApplicationParts</strong></td>
<td><strong>GET</strong> /v1/invoices/{invoiceKey}/application-parts</td>
<td>List all application parts of an invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>GetInvoiceFiles</strong></td>
<td><strong>GET</strong> /v1/invoices/{invoiceKey}/files</td>
<td>List all files of an invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>GetInvoiceItems</strong></td>
<td><strong>GET</strong> /v1/invoices/{invoiceKey}/items</td>
<td>List all items of an invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>GetInvoicePdfStatus</strong></td>
<td><strong>GET</strong> /v1/invoices/pdf-status</td>
<td>Retrieve PDF status of invoices in a batch.</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>GetTaxationItemsOfInvoiceItem</strong></td>
<td><strong>GET</strong> /v1/invoices/{invoiceKey}/items/{itemId}/taxation-items</td>
<td>List all taxation items of an invoice item</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>PostInvoice</strong></td>
<td><strong>PUT</strong> /v1/invoices/{invoiceKey}/post</td>
<td>Cancel an invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>ReverseInvoice</strong></td>
<td><strong>PUT</strong> /v1/invoices/{invoiceKey}/reverse</td>
<td>Reverse an invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>UpdateInvoice</strong></td>
<td><strong>PUT</strong> /v1/invoices/{invoiceKey}</td>
<td>Update an invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>UploadFileForInvoice</strong></td>
<td><strong>POST</strong> /v1/invoices/{invoiceKey}/files</td>
<td>Upload a file for an invoice</td>
</tr>
<tr>
<td><em>InvoicesApi</em></td>
<td><strong>WriteOffInvoice</strong></td>
<td><strong>PUT</strong> /v1/invoices/{invoiceKey}/write-off</td>
<td>Write off an invoice</td>
</tr>
<tr>
<td><em>JournalRunsApi</em></td>
<td><strong>CancelJournalRun</strong></td>
<td><strong>PUT</strong> /v1/journal-runs/{jr-number}/cancel</td>
<td>Cancel a journal run</td>
</tr>
<tr>
<td><em>JournalRunsApi</em></td>
<td><strong>CreateJournalRun</strong></td>
<td><strong>POST</strong> /v1/journal-runs</td>
<td>Create a journal run</td>
</tr>
<tr>
<td><em>JournalRunsApi</em></td>
<td><strong>DeleteJournalRun</strong></td>
<td><strong>DELETE</strong> /v1/journal-runs/{jr-number}</td>
<td>Delete a journal run</td>
</tr>
<tr>
<td><em>JournalRunsApi</em></td>
<td><strong>GetJournalRun</strong></td>
<td><strong>GET</strong> /v1/journal-runs/{jr-number}</td>
<td>Retrieve a journal run</td>
</tr>
<tr>
<td><em>MassUpdaterApi</em></td>
<td><strong>CreateMassUpdater</strong></td>
<td><strong>POST</strong> /v1/bulk</td>
<td>Perform a mass action</td>
</tr>
<tr>
<td><em>MassUpdaterApi</em></td>
<td><strong>GetMassUpdater</strong></td>
<td><strong>GET</strong> /v1/bulk/{bulk-key}</td>
<td>List all results of a mass action</td>
</tr>
<tr>
<td><em>MassUpdaterApi</em></td>
<td><strong>StopMassUpdater</strong></td>
<td><strong>PUT</strong> /v1/bulk/{bulk-key}/stop</td>
<td>Stop a mass action</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>CreateNotificationDefinition</strong></td>
<td><strong>POST</strong> /notifications/notification-definitions</td>
<td>Create a notification definition</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>CreateOrUpdateEmailTemplates</strong></td>
<td><strong>POST</strong> /notifications/email-templates/import</td>
<td>Create or update email templates</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>DeleteEmailTemplate</strong></td>
<td><strong>DELETE</strong> /notifications/email-templates/{id}</td>
<td>Delete an email template</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>DeleteNotificationDefinition</strong></td>
<td><strong>DELETE</strong> /notifications/notification-definitions/{id}</td>
<td>Delete a notification definition</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>DeleteNotificationHistoryForAccount</strong></td>
<td><strong>DELETE</strong> /notifications/history</td>
<td>Delete notification histories for an account</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>GetCalloutHistory</strong></td>
<td><strong>GET</strong> /v1/notification-history/callout</td>
<td>List callout notification histories</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>GetEmailHistory</strong></td>
<td><strong>GET</strong> /v1/notification-history/email</td>
<td>List email notification histories</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>GetEmailTemplate</strong></td>
<td><strong>GET</strong> /notifications/email-templates/{id}</td>
<td>Retrieve an email template</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>GetNotificationDefinition</strong></td>
<td><strong>GET</strong> /notifications/notification-definitions/{id}</td>
<td>Retrieve a notification definition</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>GetNotificationHistoryDeletionTask</strong></td>
<td><strong>GET</strong> /notifications/history/tasks/{id}</td>
<td>Retrieve a notification history deletion task</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>PostCreateEmailTemplate</strong></td>
<td><strong>POST</strong> /notifications/email-templates</td>
<td>Create an email template</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>QueryEmailTemplates</strong></td>
<td><strong>GET</strong> /notifications/email-templates</td>
<td>List email templates</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>QueryNotificationDefinitions</strong></td>
<td><strong>GET</strong> /notifications/notification-definitions</td>
<td>List notification definitions</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>ResendCalloutNotifications</strong></td>
<td><strong>POST</strong> /notifications/callout-histories/resend</td>
<td>Resend callout notifications</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>ResendEmailNotifications</strong></td>
<td><strong>POST</strong> /notifications/email-histories/resend</td>
<td>Resend email notifications</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>UpdateEmailTemplate</strong></td>
<td><strong>PUT</strong> /notifications/email-templates/{id}</td>
<td>Update an email template</td>
</tr>
<tr>
<td><em>NotificationsApi</em></td>
<td><strong>UpdateNotificationDefinition</strong></td>
<td><strong>PUT</strong> /notifications/notification-definitions/{id}</td>
<td>Update a notification definition</td>
</tr>
<tr>
<td><em>OAuthApi</em></td>
<td><strong>CreateToken</strong></td>
<td><strong>POST</strong> /oauth/token</td>
<td>Create an OAuth token</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryAccountByKey</td>
<td><strong>GET</strong> /object-query/accounts/{key}</td>
<td>Retrieve an account</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryAccounts</td>
<td><strong>GET</strong> /object-query/accounts</td>
<td>List accounts</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryAmendmentByKey</td>
<td><strong>GET</strong> /object-query/amendments/{key}</td>
<td>Retrieve an amendment</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryAmendments</td>
<td><strong>GET</strong> /object-query/amendments</td>
<td>List amendments</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryBillingRunByKey</td>
<td><strong>GET</strong> /object-query/billing-runs/{key}</td>
<td>Retrieve a billing run</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryBillingRuns</td>
<td><strong>GET</strong> /object-query/billing-runs</td>
<td>List bill runs</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryContactByKey</td>
<td><strong>GET</strong> /object-query/contacts/{key}</td>
<td>Retrieve a contact</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryContacts</td>
<td><strong>GET</strong> /object-query/contacts</td>
<td>List contacts</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryCreditMemoApplicationByKey</td>
<td><strong>GET</strong> /object-query/credit-memo-applications/{key}</td>
<td>Retrieve a credit memo application</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryCreditMemoApplications</td>
<td><strong>GET</strong> /object-query/credit-memo-applications</td>
<td>List credit memo applications</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryCreditMemoByKey</td>
<td><strong>GET</strong> /object-query/credit-memos/{key}</td>
<td>Retrieve a credit memo</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryCreditMemoItemByKey</td>
<td><strong>GET</strong> /object-query/credit-memo-items/{key}</td>
<td>Retrieve a credit memo item</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryCreditMemoItems</td>
<td><strong>GET</strong> /object-query/credit-memo-items</td>
<td>List credit memo items</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryCreditMemos</td>
<td><strong>GET</strong> /object-query/credit-memos</td>
<td>List credit memos</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryCustomObjectBykey</td>
<td><strong>GET</strong> /object-query/{custom-object-name}/{key}</td>
<td>Retrieve a custom object</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryCustomObjects</td>
<td><strong>GET</strong> /object-query/{custom-object-name}</td>
<td>List custom objects</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryDailyConsumptionSummaryByKey</td>
<td><strong>GET</strong> /object-query/daily-consumption-summaries/{key}</td>
<td>Retrieve a daily consumption summary</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryDailyConsumptionSummarys</td>
<td><strong>GET</strong> /object-query/daily-consumption-summaries</td>
<td>List daily consumption summaries</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryDebitMemoByKey</td>
<td><strong>GET</strong> /object-query/debit-memos/{key}</td>
<td>Retrieve a debit memo</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryDebitMemoItemByKey</td>
<td><strong>GET</strong> /object-query/debit-memo-items/{key}</td>
<td>Retrieve a debit memo item</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryDebitMemoItems</td>
<td><strong>GET</strong> /object-query/debit-memo-items</td>
<td>List debit memo items</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryDebitMemos</td>
<td><strong>GET</strong> /object-query/debit-memos</td>
<td>List debit memos</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryInvoiceByKey</td>
<td><strong>GET</strong> /object-query/invoices/{key}</td>
<td>Retrieve an invoice</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryInvoiceItemByKey</td>
<td><strong>GET</strong> /object-query/invoice-items/{key}</td>
<td>Retrieve an invoice item</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryInvoiceItems</td>
<td><strong>GET</strong> /object-query/invoice-items</td>
<td>List invoice items</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryInvoices</td>
<td><strong>GET</strong> /object-query/invoices</td>
<td>List invoices</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td><strong>QueryInvoiceScheduleByKey</strong></td>
<td><strong>GET</strong> /object-query/invoice-schedules/{key}</td>
<td>Retrieve an invoice schedule</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td><strong>QueryInvoiceSchedules</strong></td>
<td><strong>GET</strong> /object-query/invoice-schedules</td>
<td>List invoice schedules</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryOrderActionByKey</td>
<td><strong>GET</strong> /object-query/order-actions/{key}</td>
<td>Retrieve an order action</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryOrderActions</td>
<td><strong>GET</strong> /object-query/order-actions</td>
<td>List order actions</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryOrderLineItemByKey</td>
<td><strong>GET</strong> /object-query/order-line-items/{key}</td>
<td>Retrieve an order line item</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryOrderLineItems</td>
<td><strong>GET</strong> /object-query/order-line-items</td>
<td>List order line items</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryOrdersByKey</td>
<td><strong>GET</strong> /object-query/orders/{key}</td>
<td>Retrieve an order</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryOrderss</td>
<td><strong>GET</strong> /object-query/orders</td>
<td>List orders</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentApplicationByKey</td>
<td><strong>GET</strong> /object-query/payment-applications/{key}</td>
<td>Retrieve a payment application</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentApplications</td>
<td><strong>GET</strong> /object-query/payment-applications</td>
<td>List payment applications</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentByKey</td>
<td><strong>GET</strong> /object-query/payments/{key}</td>
<td>Retrieve a payment</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentMethodByKey</td>
<td><strong>GET</strong> /object-query/payment-methods/{key}</td>
<td>Retrieve a payment method</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentMethodSnapshotByKey</td>
<td><strong>GET</strong> /object-query/payment-method-snapshots/{key}</td>
<td>Retrieve a payment method snapshot</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentMethodSnapshots</td>
<td><strong>GET</strong> /object-query/payment-method-snapshots</td>
<td>List payment method snapshots</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentMethods</td>
<td><strong>GET</strong> /object-query/payment-methods</td>
<td>List payment methods</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentRunByKey</td>
<td><strong>GET</strong> /object-query/payment-runs/{key}</td>
<td>Retrieve a payment run</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentRuns</td>
<td><strong>GET</strong> /object-query/payment-runs</td>
<td>List payment runs</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentScheduleByKey</td>
<td><strong>GET</strong> /object-query/payment-schedules/{key}</td>
<td>Retrieve a payment schedule</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentScheduleItemByKey</td>
<td><strong>GET</strong> /object-query/payment-schedule-items/{key}</td>
<td>Retrieve a payment schedule item</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentScheduleItems</td>
<td><strong>GET</strong> /object-query/payment-schedule-items</td>
<td>List payment schedule items</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPaymentSchedules</td>
<td><strong>GET</strong> /object-query/payment-schedules</td>
<td>List payment schedules</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPayments</td>
<td><strong>GET</strong> /object-query/payments</td>
<td>List payments</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPrepaidBalanceByKey</td>
<td><strong>GET</strong> /object-query/prepaid-balances/{key}</td>
<td>Retrieve a prepaid balance</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPrepaidBalanceFundByKey</td>
<td><strong>GET</strong> /object-query/prepaid-balance-funds/{key}</td>
<td>Retrieve a prepaid balance fund</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPrepaidBalanceFunds</td>
<td><strong>GET</strong> /object-query/prepaid-balance-funds</td>
<td>List prepaid balance funds</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPrepaidBalanceTransactionByKey</td>
<td><strong>GET</strong> /object-query/prepaid-balance-transactions/{key}</td>
<td>Retrieve a prepaid balance transaction</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPrepaidBalanceTransactions</td>
<td><strong>GET</strong> /object-query/prepaid-balance-transactions</td>
<td>List prepaid balance transactions</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryPrepaidBalances</td>
<td><strong>GET</strong> /object-query/prepaid-balances</td>
<td>List prepaid balances</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryProcessedUsageByKey</td>
<td><strong>GET</strong> /object-query/processed-usages/{key}</td>
<td>Retrieve a processed usage record</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryProcessedUsages</td>
<td><strong>GET</strong> /object-query/processed-usages</td>
<td>List processed usage records</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryProductByKey</td>
<td><strong>GET</strong> /object-query/products/{key}</td>
<td>Retrieve a product</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryProductRatePlanByKey</td>
<td><strong>GET</strong> /object-query/product-rate-plans/{key}</td>
<td>Retrieve a product rate plan</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryProductRatePlanChargeByKey</td>
<td><strong>GET</strong> /object-query/product-rate-plan-charges/{key}</td>
<td>Retrieve a product rate plan charge</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryProductRatePlanChargeTierByKey</td>
<td><strong>GET</strong> /object-query/product-rate-plan-charge-tiers/{key}</td>
<td>Retrieve a product rate plan charge tier</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryProductRatePlanChargeTiers</td>
<td><strong>GET</strong> /object-query/product-rate-plan-charge-tiers</td>
<td>List product rate plan charge tiers</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryProductRatePlanCharges</td>
<td><strong>GET</strong> /object-query/product-rate-plan-charges</td>
<td>List product rate plan charges</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryProductRatePlans</td>
<td><strong>GET</strong> /object-query/product-rate-plans</td>
<td>List product rate plans</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryProducts</td>
<td><strong>GET</strong> /object-query/products</td>
<td>List products</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRatePlanByKey</td>
<td><strong>GET</strong> /object-query/rate-plans/{key}</td>
<td>Retrieve a rate plan</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRatePlanChargeByKey</td>
<td><strong>GET</strong> /object-query/rate-plan-charges/{key}</td>
<td>Retrieve a rate plan charge</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRatePlanChargeTierByKey</td>
<td><strong>GET</strong> /object-query/rate-plan-charge-tiers/{key}</td>
<td>Retrieve a rate plan charge tier</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRatePlanChargeTiers</td>
<td><strong>GET</strong> /object-query/rate-plan-charge-tiers</td>
<td>List rate plan charge tiers</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRatePlanCharges</td>
<td><strong>GET</strong> /object-query/rate-plan-charges</td>
<td>List rate plan charges</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRatePlans</td>
<td><strong>GET</strong> /object-query/rate-plans</td>
<td>List rate plans</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td><strong>QueryRatingDetailByKey</strong></td>
<td><strong>GET</strong> /object-query/rating-details/{key}</td>
<td>Retrieve a rating detail</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td><strong>QueryRatingDetails</strong></td>
<td><strong>GET</strong> /object-query/rating-details</td>
<td>List rating details</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRatingResultByKey</td>
<td><strong>GET</strong> /object-query/rating-results/{key}</td>
<td>Retrieve a rating result</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRatingResults</td>
<td><strong>GET</strong> /object-query/rating-results</td>
<td>List rating results</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRefundApplicationByKey</td>
<td><strong>GET</strong> /object-query/refund-applications/{key}</td>
<td>Retrieve a refund application</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRefundApplicationItemByKey</td>
<td><strong>GET</strong> /object-query/refund-application-items/{key}</td>
<td>Retrieve a refund application item</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRefundApplicationItems</td>
<td><strong>GET</strong> /object-query/refund-application-items</td>
<td>List refund application items</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRefundApplications</td>
<td><strong>GET</strong> /object-query/refund-applications</td>
<td>List refund applications</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRefundByKey</td>
<td><strong>GET</strong> /object-query/refunds/{key}</td>
<td>Retrieve a refund</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryRefunds</td>
<td><strong>GET</strong> /object-query/refunds</td>
<td>List refunds</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QuerySubscriptionByKey</td>
<td><strong>GET</strong> /object-query/subscriptions/{key}</td>
<td>Retrieve a subscription</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QuerySubscriptions</td>
<td><strong>GET</strong> /object-query/subscriptions</td>
<td>List subscriptions</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QuerySummaryStatementByKey</td>
<td><strong>GET</strong> /object-query/summarystatements/{key}</td>
<td>Retrieve a summary statement</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QuerySummaryStatementRunByKey</td>
<td><strong>GET</strong> /object-query/summarystatementruns/{key}</td>
<td>Retrieve a summary statement run</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QuerySummaryStatementRuns</td>
<td><strong>GET</strong> /object-query/summarystatementruns</td>
<td>List summary statement runs</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QuerySummaryStatements</td>
<td><strong>GET</strong> /object-query/summarystatements</td>
<td>List summary statements</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryTaxationItemByKey</td>
<td><strong>GET</strong> /object-query/taxation-items/{key}</td>
<td>Retrieve a taxation item</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryTaxationItems</td>
<td><strong>GET</strong> /object-query/taxation-items</td>
<td>List taxation items</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryUsageByKey</td>
<td><strong>GET</strong> /object-query/usages/{key}</td>
<td>Retrieve a usage record</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryUsages</td>
<td><strong>GET</strong> /object-query/usages</td>
<td>List usage records</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryValidityPeriodSummaryByKey</td>
<td><strong>GET</strong> /object-query/validity-period-summaries/{key}</td>
<td>Retrieve a validity period summary</td>
</tr>
<tr>
<td><em>ObjectQueriesApi</em></td>
<td>QueryValidityPeriodSummarys</td>
<td><strong>GET</strong> /object-query/validity-period-summaries</td>
<td>List validity period summaries</td>
</tr>
<tr>
<td><em>OmniChannelSubscriptionsApi</em></td>
<td><strong>CreateOmniChannelSubscription</strong></td>
<td><strong>POST</strong> /v1/omni-channel-subscriptions</td>
<td>Create an omnichannel subscription</td>
</tr>
<tr>
<td><em>OmniChannelSubscriptionsApi</em></td>
<td><strong>DeleteOmniChannelSubscription</strong></td>
<td><strong>DELETE</strong> /v1/omni-channel-subscriptions/{subscriptionKey}</td>
<td>Delete an omnichannel subscription</td>
</tr>
<tr>
<td><em>OmniChannelSubscriptionsApi</em></td>
<td><strong>GetOmniChannelSubscription</strong></td>
<td><strong>GET</strong> /v1/omni-channel-subscriptions/{subscriptionKey}</td>
<td>Retrieve an omnichannel subscription</td>
</tr>
<tr>
<td><em>OperationsApi</em></td>
<td><strong>CreateBillingPreview</strong></td>
<td><strong>POST</strong> /v1/operations/billing-preview</td>
<td>Generate a billing preview</td>
</tr>
<tr>
<td><em>OperationsApi</em></td>
<td><strong>CreateBulkPDFToZIPGeneration</strong></td>
<td><strong>POST</strong> /v1/operations/bulk-pdf</td>
<td>Export bulk PDF files</td>
</tr>
<tr>
<td><em>OperationsApi</em></td>
<td><strong>CreateInvoiceCollect</strong></td>
<td><strong>POST</strong> /v1/operations/invoice-collect</td>
<td>Invoice and collect</td>
</tr>
<tr>
<td><em>OperationsApi</em></td>
<td><strong>GetBulkPDFToZIPGeneration</strong></td>
<td><strong>GET</strong> /v1/operations/bulk-pdf/{jobId}</td>
<td>Retrieve information of a bulk PDF file generation job</td>
</tr>
<tr>
<td><em>OperationsApi</em></td>
<td><strong>GetOperationJob</strong></td>
<td><strong>GET</strong> /v1/operations/jobs/{jobId}</td>
<td>Retrieve an operation job</td>
</tr>
<tr>
<td><em>OrderActionsApi</em></td>
<td><strong>UpdateOrderAction</strong></td>
<td><strong>PUT</strong> /v1/orderActions/{id}</td>
<td>Update an order action</td>
</tr>
<tr>
<td><em>OrderLineItemsApi</em></td>
<td><strong>GetOrderLineItem</strong></td>
<td><strong>GET</strong> /v1/order-line-items/{itemId}</td>
<td>Retrieve an order line item</td>
</tr>
<tr>
<td><em>OrderLineItemsApi</em></td>
<td><strong>UpdateOrderLineItem</strong></td>
<td><strong>PUT</strong> /v1/order-line-items/{itemId}</td>
<td>Update an order line item</td>
</tr>
<tr>
<td><em>OrderLineItemsApi</em></td>
<td><strong>UpdateOrderLineItems</strong></td>
<td><strong>POST</strong> /v1/order-line-items/bulk</td>
<td>Update order line items</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>ActivateOrder</strong></td>
<td><strong>PUT</strong> /v1/orders/{orderNumber}/activate</td>
<td>Activate an order</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>CancelOrder</strong></td>
<td><strong>PUT</strong> /v1/orders/{orderNumber}/cancel</td>
<td>Cancel an order</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>CreateOrder</strong></td>
<td><strong>POST</strong> /v1/orders</td>
<td>Create an order</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>CreateOrderAsynchronously</strong></td>
<td><strong>POST</strong> /v1/async/orders</td>
<td>Create an order asynchronously</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>DeleteOrder</strong></td>
<td><strong>DELETE</strong> /v1/orders/{orderNumber}</td>
<td>Delete an order</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>DeleteOrderAsynchronously</strong></td>
<td><strong>DELETE</strong> /v1/async/orders/{orderNumber}</td>
<td>Async Delete an order</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>GetJobStatusAndResponse</strong></td>
<td><strong>GET</strong> /v1/async-jobs/{jobId}</td>
<td>Retrieve the status and response of a job</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>GetOrder</strong></td>
<td><strong>GET</strong> /v1/orders/{orderNumber}</td>
<td>Retrieve an order</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>GetOrders</strong></td>
<td><strong>GET</strong> /v1/orders</td>
<td>List orders</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>GetOrdersByInvoiceOwner</strong></td>
<td><strong>GET</strong> /v1/orders/invoiceOwner/{accountNumber}</td>
<td>List orders of an invoice owner</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>GetOrdersBySubscriptionNumber</strong></td>
<td><strong>GET</strong> /v1/orders/subscription/{subscriptionNumber}</td>
<td>List orders by subscription number</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>GetOrdersBySubscriptionOwner</strong></td>
<td><strong>GET</strong> /v1/orders/subscriptionOwner/{accountNumber}</td>
<td>List orders of a subscription owner</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>GetPendingOrdersBySubscriptionNumber</strong></td>
<td><strong>GET</strong> /v1/orders/subscription/{subscription-key}/pending</td>
<td>List pending orders by subscription number</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>PreviewOrder</strong></td>
<td><strong>POST</strong> /v1/orders/preview</td>
<td>Preview an order</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>PreviewOrderAsynchronously</strong></td>
<td><strong>POST</strong> /v1/async/orders/preview</td>
<td>Preview an order asynchronously</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>RevertOrder</strong></td>
<td><strong>POST</strong> /v1/orders/{orderNumber}/revert</td>
<td>Revert an order</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>UpdateOrder</strong></td>
<td><strong>PUT</strong> /v1/orders/{orderNumber}</td>
<td>Update an order</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>UpdateOrderCustomFields</strong></td>
<td><strong>PUT</strong> /v1/orders/{orderNumber}/customFields</td>
<td>Update order custom fields</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>UpdateOrderTriggerDates</strong></td>
<td><strong>PUT</strong> /v1/orders/{orderNumber}/triggerDates</td>
<td>Update order action trigger dates</td>
</tr>
<tr>
<td><em>OrdersApi</em></td>
<td><strong>UpdateSubscriptionCustomFields</strong></td>
<td><strong>PUT</strong> /v1/subscriptions/{subscriptionNumber}/customFields</td>
<td>Update subscription custom fields</td>
</tr>
<tr>
<td><em>PaymentAuthorizationApi</em></td>
<td><strong>CancelAuthorization</strong></td>
<td><strong>POST</strong> /v1/payment-methods/{payment-method-id}/voidAuthorize</td>
<td>Cancel authorization</td>
</tr>
<tr>
<td><em>PaymentAuthorizationApi</em></td>
<td><strong>CreateAuthorization</strong></td>
<td><strong>POST</strong> /v1/payment-methods/{payment-method-id}/authorize</td>
<td>Create authorization</td>
</tr>
<tr>
<td><em>PaymentGatewayReconciliationApi</em></td>
<td><strong>ReconcileRefund</strong></td>
<td><strong>POST</strong> /v1/refunds/{refund-key}/reconcile</td>
<td>Reconcile a refund</td>
</tr>
<tr>
<td><em>PaymentGatewayReconciliationApi</em></td>
<td><strong>RejectPayment</strong></td>
<td><strong>POST</strong> /v1/gateway-settlement/payments/{payment-key}/reject</td>
<td>Reject a payment</td>
</tr>
<tr>
<td><em>PaymentGatewayReconciliationApi</em></td>
<td><strong>ReversePayment</strong></td>
<td><strong>POST</strong> /v1/gateway-settlement/payments/{payment-key}/chargeback</td>
<td>Reverse a payment</td>
</tr>
<tr>
<td><em>PaymentGatewayReconciliationApi</em></td>
<td><strong>SettlePayment</strong></td>
<td><strong>POST</strong> /v1/gateway-settlement/payments/{payment-key}/settle</td>
<td>Settle a payment</td>
</tr>
<tr>
<td><em>PaymentGatewaysApi</em></td>
<td><strong>CreatePredebitNotification</strong></td>
<td><strong>POST</strong> /v1/payment-gateways/pre-debit-notification</td>
<td>Trigger a pre-debit notification</td>
</tr>
<tr>
<td><em>PaymentGatewaysApi</em></td>
<td><strong>GetPaymentGateways</strong></td>
<td><strong>GET</strong> /v1/payment-gateways</td>
<td>List all payment gateways</td>
</tr>
<tr>
<td><em>PaymentMethodSnapshotsApi</em></td>
<td><strong>GetPaymentMethodSnapshot</strong></td>
<td><strong>GET</strong> /v1/object/payment-method-snapshot/{id}</td>
<td>CRUD: Retrieve a payment method snapshot</td>
</tr>
<tr>
<td><em>PaymentMethodTransactionLogsApi</em></td>
<td><strong>GetPaymentMethodTransactionLog</strong></td>
<td><strong>GET</strong> /v1/object/payment-method-transaction-log/{id}</td>
<td>CRUD: Retrieve a payment method transaction log</td>
</tr>
<tr>
<td><em>PaymentMethodUpdaterApi</em></td>
<td><strong>CreatePaymentMethodUpdaterBatch</strong></td>
<td><strong>POST</strong> /v1/payment-method-updaters/batches</td>
<td>Create a Payment Method Updater batch asynchronously</td>
</tr>
<tr>
<td><em>PaymentMethodUpdaterApi</em></td>
<td><strong>GetPaymentMethodUpdaterInstances</strong></td>
<td><strong>GET</strong> /v1/payment-method-updaters</td>
<td>List Payment Method Updater instances</td>
</tr>
<tr>
<td><em>PaymentMethodsApi</em></td>
<td><strong>CancelStoredCredentialProfile</strong></td>
<td><strong>POST</strong> /v1/payment-methods/{payment-method-id}/profiles/{profile-number}/cancel</td>
<td>Cancel a stored credential profile</td>
</tr>
<tr>
<td><em>PaymentMethodsApi</em></td>
<td><strong>CreatePaymentMethod</strong></td>
<td><strong>POST</strong> /v1/payment-methods</td>
<td>Create a payment method</td>
</tr>
<tr>
<td><em>PaymentMethodsApi</em></td>
<td><strong>CreatePaymentSession</strong></td>
<td><strong>POST</strong> /web-payments/sessions</td>
<td>Create a payment session</td>
</tr>
<tr>
<td><em>PaymentMethodsApi</em></td>
<td><strong>CreateStoredCredentialProfile</strong></td>
<td><strong>POST</strong> /v1/payment-methods/{payment-method-id}/profiles</td>
<td>Create a stored credential profile</td>
</tr>
<tr>
<td><em>PaymentMethodsApi</em></td>
<td><strong>DecryptPaymentMethod</strong></td>
<td><strong>POST</strong> /v1/payment-methods/decryption</td>
<td>Create an Apple Pay payment method</td>
</tr>
<tr>
<td><em>PaymentMethodsApi</em></td>
<td><strong>DeletePaymentMethod</strong></td>
<td><strong>DELETE</strong> /v1/payment-methods/{payment-method-id}</td>
<td>Delete a payment method</td>
</tr>
<tr>
<td><em>PaymentMethodsApi</em></td>
<td><strong>ExpireStoredCredentialProfile</strong></td>
<td><strong>POST</strong> /v1/payment-methods/{payment-method-id}/profiles/{profile-number}/expire</td>
<td>Expire a stored credential profile</td>
</tr>
<tr>
<td><em>PaymentMethodsApi</em></td>
<td><strong>GetPaymentMethod</strong></td>
<td><strong>GET</strong> /v1/payment-methods/{payment-method-id}</td>
<td>Retrieve a payment method</td>
</tr>
<tr>
<td><em>PaymentMethodsApi</em></td>
<td><strong>GetStoredCredentialProfiles</strong></td>
<td><strong>GET</strong> /v1/payment-methods/{payment-method-id}/profiles</td>
<td>List stored credential profiles of a payment method</td>
</tr>
<tr>
<td><em>PaymentMethodsApi</em></td>
<td><strong>ScrubPaymentMethod</strong></td>
<td><strong>PUT</strong> /v1/payment-methods/{payment-method-id}/scrub</td>
<td>Scrub a payment method</td>
</tr>
<tr>
<td><em>PaymentMethodsApi</em></td>
<td><strong>UpdatePaymentMethod</strong></td>
<td><strong>PUT</strong> /v1/payment-methods/{payment-method-id}</td>
<td>Update a payment method</td>
</tr>
<tr>
<td><em>PaymentMethodsApi</em></td>
<td><strong>VerifyPaymentMethod</strong></td>
<td><strong>PUT</strong> /v1/payment-methods/{payment-method-id}/verify</td>
<td>Verify a payment method</td>
</tr>
<tr>
<td><em>PaymentRunsApi</em></td>
<td><strong>CreatePaymentRun</strong></td>
<td><strong>POST</strong> /v1/payment-runs</td>
<td>Create a payment run</td>
</tr>
<tr>
<td><em>PaymentRunsApi</em></td>
<td><strong>DeletePaymentRun</strong></td>
<td><strong>DELETE</strong> /v1/payment-runs/{paymentRunKey}</td>
<td>Delete a payment run</td>
</tr>
<tr>
<td><em>PaymentRunsApi</em></td>
<td><strong>GetPaymentRun</strong></td>
<td><strong>GET</strong> /v1/payment-runs/{paymentRunKey}</td>
<td>Retrieve a payment run</td>
</tr>
<tr>
<td><em>PaymentRunsApi</em></td>
<td><strong>GetPaymentRunData</strong></td>
<td><strong>GET</strong> /v1/payment-runs/{paymentRunKey}/data</td>
<td>Retrieve payment run data</td>
</tr>
<tr>
<td><em>PaymentRunsApi</em></td>
<td><strong>GetPaymentRunSummary</strong></td>
<td><strong>GET</strong> /v1/payment-runs/{paymentRunKey}/summary</td>
<td>Retrieve a payment run summary</td>
</tr>
<tr>
<td><em>PaymentRunsApi</em></td>
<td><strong>GetPaymentRuns</strong></td>
<td><strong>GET</strong> /v1/payment-runs</td>
<td>List payment runs</td>
</tr>
<tr>
<td><em>PaymentRunsApi</em></td>
<td><strong>UpdatePaymentRun</strong></td>
<td><strong>PUT</strong> /v1/payment-runs/{paymentRunKey}</td>
<td>Update a payment run</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>AddItemsToCustomPaymentSchedule</strong></td>
<td><strong>POST</strong> /v1/payment-schedules/{paymentScheduleKey}/items</td>
<td>Add payment schedule items to a custom payment schedule</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>CancelPaymentSchedule</strong></td>
<td><strong>PUT</strong> /v1/payment-schedules/{paymentScheduleKey}/cancel</td>
<td>Cancel a payment schedule</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>CancelPaymentScheduleItem</strong></td>
<td><strong>PUT</strong> /v1/payment-schedule-items/{item-id}/cancel</td>
<td>Cancel a payment schedule item</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>CreatePaymentSchedule</strong></td>
<td><strong>POST</strong> /v1/payment-schedules</td>
<td>Create a payment schedule</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>CreatePaymentSchedules</strong></td>
<td><strong>POST</strong> /v1/payment-schedules/batch</td>
<td>Create multiple payment schedules at once</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>GetPaymentSchedule</strong></td>
<td><strong>GET</strong> /v1/payment-schedules/{paymentScheduleKey}</td>
<td>Retrieve a payment schedule</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>GetPaymentScheduleItem</strong></td>
<td><strong>GET</strong> /v1/payment-schedule-items/{item-id}</td>
<td>Retrieve a payment schedule item</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>GetPaymentScheduleStatistic</strong></td>
<td><strong>GET</strong> /v1/payment-schedules/statistics/{yyyy-mm-dd}</td>
<td>Retrieve payment schedule statistic of a date</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>GetPaymentSchedules</strong></td>
<td><strong>GET</strong> /v1/payment-schedules</td>
<td>List payment schedules by customer account</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>RetryPaymentScheduleItem</strong></td>
<td><strong>POST</strong> /v1/payment-schedule-items/retry-payment</td>
<td>Retry failed payment schedule items</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>SkipPaymentScheduleItem</strong></td>
<td><strong>PUT</strong> /v1/payment-schedule-items/{item-id}/skip</td>
<td>Skip a payment schedule item</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>UpdatePaymentSchedule</strong></td>
<td><strong>PUT</strong> /v1/payment-schedules/{paymentScheduleKey}</td>
<td>Update a payment schedule</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>UpdatePaymentScheduleItem</strong></td>
<td><strong>PUT</strong> /v1/payment-schedule-items/{item-id}</td>
<td>Update a payment schedule item</td>
</tr>
<tr>
<td><em>PaymentSchedulesApi</em></td>
<td><strong>UpdatePaymentSchedulePreview</strong></td>
<td><strong>PUT</strong> /v1/payment-schedules/{paymentScheduleKey}/preview</td>
<td>Preview the result of payment schedule updates</td>
</tr>
<tr>
<td><em>PaymentTransactionLogsApi</em></td>
<td><strong>GetPaymentTransactionLog</strong></td>
<td><strong>GET</strong> /v1/object/payment-transaction-log/{id}</td>
<td>CRUD: Retrieve a payment transaction log</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>ApplyPayment</strong></td>
<td><strong>PUT</strong> /v1/payments/{paymentKey}/apply</td>
<td>Apply a payment</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>CancelPayment</strong></td>
<td><strong>PUT</strong> /v1/payments/{paymentKey}/cancel</td>
<td>Cancel a payment</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>CreatePayment</strong></td>
<td><strong>POST</strong> /v1/payments</td>
<td>Create a payment</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>CreateRefundPayment</strong></td>
<td><strong>POST</strong> /v1/payments/{paymentKey}/refunds</td>
<td>Refund a payment</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>DeletePayment</strong></td>
<td><strong>DELETE</strong> /v1/payments/{paymentKey}</td>
<td>Delete a payment</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>GetPayment</strong></td>
<td><strong>GET</strong> /v1/payments/{paymentKey}</td>
<td>Retrieve a payment</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>GetPaymentItemPart</strong></td>
<td><strong>GET</strong> /v1/payments/{paymentKey}/parts/{partId}/item-parts/{itemPartId}</td>
<td>Retrieve a payment part item</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>GetPaymentItemParts</strong></td>
<td><strong>GET</strong> /v1/payments/{paymentKey}/parts/{partId}/item-parts</td>
<td>List all payment part items</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>GetPaymentPart</strong></td>
<td><strong>GET</strong> /v1/payments/{paymentKey}/parts/{partId}</td>
<td>Retrieve a payment part</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>GetPaymentParts</strong></td>
<td><strong>GET</strong> /v1/payments/{paymentKey}/parts</td>
<td>List all parts of a payment</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>GetRetrieveAllPayments</strong></td>
<td><strong>GET</strong> /v1/payments</td>
<td>List payments</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>RefundPaymentwithAutoUnapply</strong></td>
<td><strong>POST</strong> /v1/payments/{paymentKey}/refunds/unapply</td>
<td>Refund a payment with auto-unapplying</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>TransferPayment</strong></td>
<td><strong>PUT</strong> /v1/payments/{paymentKey}/transfer</td>
<td>Transfer a payment</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>UnapplyPayment</strong></td>
<td><strong>PUT</strong> /v1/payments/{paymentKey}/unapply</td>
<td>Unapply a payment</td>
</tr>
<tr>
<td><em>PaymentsApi</em></td>
<td><strong>UpdatePayment</strong></td>
<td><strong>PUT</strong> /v1/payments/{paymentId}</td>
<td>Update a payment</td>
</tr>
<tr>
<td><em>ProductRatePlanChargeTiersApi</em></td>
<td><strong>GetProductRatePlanChargeTier</strong></td>
<td><strong>GET</strong> /v1/object/product-rate-plan-charge-tier/{id}</td>
<td>CRUD: Retrieve a product rate plan charge tier</td>
</tr>
<tr>
<td><em>ProductRatePlanChargeTiersApi</em></td>
<td><strong>UpdateProductRatePlanChargeTier</strong></td>
<td><strong>PUT</strong> /v1/object/product-rate-plan-charge-tier/{id}</td>
<td>CRUD: Update a product rate plan charge tier</td>
</tr>
<tr>
<td><em>ProductRatePlanChargesApi</em></td>
<td><strong>CreateProductRatePlanCharge</strong></td>
<td><strong>POST</strong> /v1/object/product-rate-plan-charge</td>
<td>CRUD: Create a product rate plan charge</td>
</tr>
<tr>
<td><em>ProductRatePlanChargesApi</em></td>
<td><strong>DeleteProductRatePlanCharge</strong></td>
<td><strong>DELETE</strong> /v1/object/product-rate-plan-charge/{id}</td>
<td>CRUD: Delete a product rate plan charge</td>
</tr>
<tr>
<td><em>ProductRatePlanChargesApi</em></td>
<td><strong>GetProductRatePlanCharge</strong></td>
<td><strong>GET</strong> /v1/object/product-rate-plan-charge/{id}</td>
<td>CRUD: Retrieve a product rate plan charge</td>
</tr>
<tr>
<td><em>ProductRatePlanChargesApi</em></td>
<td><strong>UpdateProductRatePlanCharge</strong></td>
<td><strong>PUT</strong> /v1/object/product-rate-plan-charge/{id}</td>
<td>CRUD: Update a product rate plan charge</td>
</tr>
<tr>
<td><em>ProductRatePlanChargesApi</em></td>
<td><strong>UpdateProductRatePlanChargeFinanceInformation</strong></td>
<td><strong>PUT</strong> /v1/product-rate-plan-charges/{product-rate-plan-charge-key}/finance-information</td>
<td>Update a Zuora Revenue accounting code</td>
</tr>
<tr>
<td><em>ProductRatePlansApi</em></td>
<td><strong>CreateProductRatePlan</strong></td>
<td><strong>POST</strong> /v1/object/product-rate-plan</td>
<td>CRUD: Create a product rate plan</td>
</tr>
<tr>
<td><em>ProductRatePlansApi</em></td>
<td><strong>DeleteProductRatePlan</strong></td>
<td><strong>DELETE</strong> /v1/object/product-rate-plan/{id}</td>
<td>CRUD: Delete a product rate plan</td>
</tr>
<tr>
<td><em>ProductRatePlansApi</em></td>
<td><strong>GetProductRatePlan</strong></td>
<td><strong>GET</strong> /v1/product-rate-plans/{id}</td>
<td>Retrieve a product rate plan by ID</td>
</tr>
<tr>
<td><em>ProductRatePlansApi</em></td>
<td><strong>GetProductRatePlansByExternalID</strong></td>
<td><strong>GET</strong> /v1/product-rate-plans/external-id/{externalId}</td>
<td>List product rate plans by external ID</td>
</tr>
<tr>
<td><em>ProductRatePlansApi</em></td>
<td><strong>GetRatePlansByProduct</strong></td>
<td><strong>GET</strong> /v1/rateplan/{product-key}/productRatePlan</td>
<td>List all product rate plans of a product</td>
</tr>
<tr>
<td><em>ProductRatePlansApi</em></td>
<td><strong>UpdateProductRatePlan</strong></td>
<td><strong>PUT</strong> /v1/object/product-rate-plan/{id}</td>
<td>CRUD: Update a product rate plan</td>
</tr>
<tr>
<td><em>ProductsApi</em></td>
<td><strong>CreateProduct</strong></td>
<td><strong>POST</strong> /v1/object/product</td>
<td>Create a product</td>
</tr>
<tr>
<td><em>ProductsApi</em></td>
<td><strong>DeleteProduct</strong></td>
<td><strong>DELETE</strong> /v1/object/product/{id}</td>
<td>CRUD: Delete a product</td>
</tr>
<tr>
<td><em>ProductsApi</em></td>
<td><strong>GetProduct</strong></td>
<td><strong>GET</strong> /v1/catalog/product/{product-key}</td>
<td>Retrieve a product</td>
</tr>
<tr>
<td><em>ProductsApi</em></td>
<td><strong>GetProducts</strong></td>
<td><strong>GET</strong> /v1/catalog/products</td>
<td>Get all products</td>
</tr>
<tr>
<td><em>ProductsApi</em></td>
<td><strong>UpdateProduct</strong></td>
<td><strong>PUT</strong> /v1/object/product/{id}</td>
<td>CRUD: Update a product</td>
</tr>
<tr>
<td><em>RSASignaturesApi</em></td>
<td><strong>CreateRSASignature</strong></td>
<td><strong>POST</strong> /v1/rsa-signatures</td>
<td>Generate an RSA signature</td>
</tr>
<tr>
<td><em>RSASignaturesApi</em></td>
<td><strong>DecryptRSASignature</strong></td>
<td><strong>POST</strong> /v1/rsa-signatures/decrypt</td>
<td>Decrypt an RSA signature</td>
</tr>
<tr>
<td><em>RampsApi</em></td>
<td><strong>GetRampByNumber</strong></td>
<td><strong>GET</strong> /v1/ramps/{rampNumber}</td>
<td>Retrieve a ramp</td>
</tr>
<tr>
<td><em>RampsApi</em></td>
<td><strong>GetRampMetricsByNumber</strong></td>
<td><strong>GET</strong> /v1/ramps/{rampNumber}/ramp-metrics</td>
<td>List all ramp metrics of a ramp</td>
</tr>
<tr>
<td><em>RampsApi</em></td>
<td><strong>GetRampMetricsByOrderNumber</strong></td>
<td><strong>GET</strong> /v1/orders/{orderNumber}/ramp-metrics</td>
<td>List ramp metrics by order number</td>
</tr>
<tr>
<td><em>RampsApi</em></td>
<td><strong>GetRampMetricsBySubscriptionKey</strong></td>
<td><strong>GET</strong> /v1/subscriptions/{subscriptionKey}/ramp-metrics</td>
<td>List ramp metrics by subscription key</td>
</tr>
<tr>
<td><em>RampsApi</em></td>
<td><strong>GetRampsBySubscriptionKey</strong></td>
<td><strong>GET</strong> /v1/subscriptions/{subscriptionKey}/ramps</td>
<td>Retrieve a ramp by subscription key</td>
</tr>
<tr>
<td><em>RatePlansApi</em></td>
<td><strong>GetRatePlan</strong></td>
<td><strong>GET</strong> /v1/rateplans/{ratePlanId}</td>
<td>Retrieve a rate plan</td>
</tr>
<tr>
<td><em>RefundsApi</em></td>
<td><strong>CancelRefund</strong></td>
<td><strong>PUT</strong> /v1/refunds/{refundKey}/cancel</td>
<td>Cancel a refund</td>
</tr>
<tr>
<td><em>RefundsApi</em></td>
<td><strong>DeleteRefund</strong></td>
<td><strong>DELETE</strong> /v1/refunds/{refundKey}</td>
<td>Delete a refund</td>
</tr>
<tr>
<td><em>RefundsApi</em></td>
<td><strong>GetRefund</strong></td>
<td><strong>GET</strong> /v1/refunds/{refundKey}</td>
<td>Retrieve a refund</td>
</tr>
<tr>
<td><em>RefundsApi</em></td>
<td><strong>GetRefundItemPart</strong></td>
<td><strong>GET</strong> /v1/refunds/{refundKey}/parts/{refundPartId}/item-parts/{itemPartId}</td>
<td>Retrieve a refund part item</td>
</tr>
<tr>
<td><em>RefundsApi</em></td>
<td><strong>GetRefundItemParts</strong></td>
<td><strong>GET</strong> /v1/refunds/{refundKey}/parts/{refundPartId}/item-parts</td>
<td>List all refund part items</td>
</tr>
<tr>
<td><em>RefundsApi</em></td>
<td><strong>GetRefundPart</strong></td>
<td><strong>GET</strong> /v1/refunds/{refundKey}/parts/{refundPartId}</td>
<td>Retrieve a refund part</td>
</tr>
<tr>
<td><em>RefundsApi</em></td>
<td><strong>GetRefundParts</strong></td>
<td><strong>GET</strong> /v1/refunds/{refundKey}/parts</td>
<td>List all parts of a refund</td>
</tr>
<tr>
<td><em>RefundsApi</em></td>
<td><strong>GetRefunds</strong></td>
<td><strong>GET</strong> /v1/refunds</td>
<td>List refunds</td>
</tr>
<tr>
<td><em>RefundsApi</em></td>
<td><strong>UpdateRefund</strong></td>
<td><strong>PUT</strong> /v1/refunds/{refundId}</td>
<td>Update a refund</td>
</tr>
<tr>
<td><em>RegenerateApi</em></td>
<td><strong>POSTCreateRevRecEvents</strong></td>
<td><strong>POST</strong> /v1/uno-regenerate/rev-rec-events</td>
<td>Regenerate Rev Rec Event</td>
</tr>
<tr>
<td><em>RegenerateApi</em></td>
<td><strong>POSTGenerateRevRecEventsForDailyConsumption</strong></td>
<td><strong>POST</strong> /v1/uno-regenerate/rev-rec-events/daily-consumption</td>
<td>Regenerate Rev Rec Event</td>
</tr>
<tr>
<td><em>RegenerateApi</em></td>
<td><strong>POSTRegenerateBillingTransaction</strong></td>
<td><strong>POST</strong> /v1/uno-regenerate/billing-transaction</td>
<td>Regenerate Billing Transaction</td>
</tr>
<tr>
<td><em>RegenerateApi</em></td>
<td><strong>POSTRegenerateBookingTransaction</strong></td>
<td><strong>POST</strong> /v1/uno-regenerate/booking-transaction</td>
<td>Regenerate Booking Transaction</td>
</tr>
<tr>
<td><em>RevenueAccountingCodesApi</em></td>
<td><strong>PutRevProAccountingCodes</strong></td>
<td><strong>PUT</strong> /v1/revpro-accounting-codes</td>
<td>Update a Zuora Revenue accounting code</td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>DescribeViewColumns</strong></td>
<td><strong>GET</strong> /integration/v2/biviews/{view_name}/describe-columns</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>DownloadReport</strong></td>
<td><strong>GET</strong> /integration/v1/reports/download/{filename}</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>GenerateJWTToken</strong></td>
<td><strong>POST</strong> /integration/v1/authenticate</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>GetBIViewCount</strong></td>
<td><strong>GET</strong> /integration/v2/biviews/count/{view_name}</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>GetBIViewStatus</strong></td>
<td><strong>GET</strong> /integration/v2/biviews-status</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>GetBIViewTaskDetails</strong></td>
<td><strong>GET</strong> /integration/v2/biviews-status/{task_id}</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>GetBIViews</strong></td>
<td><strong>GET</strong> /integration/v1/biviews/{view_name}</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>GetBIViewsV2</strong></td>
<td><strong>GET</strong> /integration/v2/biviews/{view_name}</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>GetCsvUploadStatus</strong></td>
<td><strong>GET</strong> /integration/v1/csv/upload/status</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>GetFileUploadStatusByRequestId</strong></td>
<td><strong>GET</strong> /integration/v1/fileupload/status/{file_request_id}</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>GetReportsById</strong></td>
<td><strong>GET</strong> /integration/v1/reports/{report_id}</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>GetStageError</strong></td>
<td><strong>GET</strong> /integration/v1/stage/error/{errortype}</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>IntegrationV2ReportsSignedurlReportIdGet</strong></td>
<td><strong>GET</strong> /integration/v2/reports/signedurl/{report_id}</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>ListReports</strong></td>
<td><strong>GET</strong> /integration/v1/reports/list</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>SelectBIView</strong></td>
<td><strong>POST</strong> /integration/v1/biviews/{view_name}</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>UploadCsv</strong></td>
<td><strong>POST</strong> /integration/v1/csv/upload</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>UploadFile</strong></td>
<td><strong>POST</strong> /integration/v1/upload/file</td>
<td></td>
</tr>
<tr>
<td><em>RevenueIntegrationApi</em></td>
<td><strong>UploadMapping</strong></td>
<td><strong>POST</strong> /integration/v1/upload/mapping</td>
<td></td>
</tr>
<tr>
<td><em>SequenceSetsApi</em></td>
<td><strong>CreateSequenceSets</strong></td>
<td><strong>POST</strong> /v1/sequence-sets</td>
<td>Create sequence sets</td>
</tr>
<tr>
<td><em>SequenceSetsApi</em></td>
<td><strong>DeleteSequenceSet</strong></td>
<td><strong>DELETE</strong> /v1/sequence-sets/{id}</td>
<td>Delete a sequence set</td>
</tr>
<tr>
<td><em>SequenceSetsApi</em></td>
<td><strong>GetSequenceSet</strong></td>
<td><strong>GET</strong> /v1/sequence-sets/{id}</td>
<td>Retrieve a sequence set</td>
</tr>
<tr>
<td><em>SequenceSetsApi</em></td>
<td><strong>GetSequenceSets</strong></td>
<td><strong>GET</strong> /v1/sequence-sets</td>
<td>List sequence sets</td>
</tr>
<tr>
<td><em>SequenceSetsApi</em></td>
<td><strong>UpdateSequenceSet</strong></td>
<td><strong>PUT</strong> /v1/sequence-sets/{id}</td>
<td>Update a sequence set</td>
</tr>
<tr>
<td><em>SettingsApi</em></td>
<td><strong>GetListAllSettings</strong></td>
<td><strong>GET</strong> /settings/listing</td>
<td>List all settings</td>
</tr>
<tr>
<td><em>SettingsApi</em></td>
<td><strong>PostProcessSettingsBatchRequest</strong></td>
<td><strong>POST</strong> /settings/batch-requests</td>
<td>Submit settings requests</td>
</tr>
<tr>
<td><em>SignUpApi</em></td>
<td><strong>PostSignUp</strong></td>
<td><strong>POST</strong> /v1/sign-up</td>
<td>Sign up</td>
</tr>
<tr>
<td><em>SubscriptionChangeLogsApi</em></td>
<td><strong>GetSubscriptionChangeLogsByOrderNumber</strong></td>
<td><strong>GET</strong> /subscription-change-logs/orders/{orderNumber}</td>
<td>Retrieve change logs for a subscription</td>
</tr>
<tr>
<td><em>SubscriptionChangeLogsApi</em></td>
<td><strong>GetSubscriptionChangeLogsBySubscriptionNumber</strong></td>
<td><strong>GET</strong> /subscription-change-logs/{subscriptionNumber}</td>
<td>Retrieve change logs for a subscription</td>
</tr>
<tr>
<td><em>SubscriptionChangeLogsApi</em></td>
<td><strong>GetSubscriptionChangeLogsBySubscriptionNumberAndVersion</strong></td>
<td><strong>GET</strong> /subscription-change-logs/{subscriptionNumber}/versions/{version}</td>
<td>Retrieve change logs for a subscription</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>CancelSubscription</strong></td>
<td><strong>PUT</strong> /v1/subscriptions/{subscription-key}/cancel</td>
<td>Cancel a subscription</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>CreateSubscription</strong></td>
<td><strong>POST</strong> /v1/subscriptions</td>
<td>Create a subscription</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>DeleteSubscription</strong></td>
<td><strong>PUT</strong> /v1/subscriptions/{subscription-key}/delete</td>
<td>Delete a subscription by number</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>GetMetricsBySubscriptionNumbers</strong></td>
<td><strong>GET</strong> /v1/subscriptions/subscription-metrics</td>
<td>List subscriptions metrics by subscription numbers</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>GetSubscriptionByKey</strong></td>
<td><strong>GET</strong> /v1/subscriptions/{subscription-key}</td>
<td>Retrieve a subscription by key</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>GetSubscriptionByKeyAndVersion</strong></td>
<td><strong>GET</strong> /v1/subscriptions/{subscription-key}/versions/{version}</td>
<td>Retrieve a subscription by key and version</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>GetSubscriptionsByAccount</strong></td>
<td><strong>GET</strong> /v1/subscriptions/accounts/{account-key}</td>
<td>List subscriptions by account key</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>PreviewExistingSubscription</strong></td>
<td><strong>POST</strong> /v1/subscriptions/{subscription-key}/preview</td>
<td>Preview a subscription by key</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>PreviewSubscription</strong></td>
<td><strong>POST</strong> /v1/subscriptions/preview</td>
<td>Preview a subscription</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>RenewSubscription</strong></td>
<td><strong>PUT</strong> /v1/subscriptions/{subscription-key}/renew</td>
<td>Renew a subscription</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>ResumeSubscription</strong></td>
<td><strong>PUT</strong> /v1/subscriptions/{subscription-key}/resume</td>
<td>Resume a subscription</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>SuspendSubscription</strong></td>
<td><strong>PUT</strong> /v1/subscriptions/{subscription-key}/suspend</td>
<td>Suspend a subscription</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>UpdateSubscription</strong></td>
<td><strong>PUT</strong> /v1/subscriptions/{subscription-key}</td>
<td>Update a subscription</td>
</tr>
<tr>
<td><em>SubscriptionsApi</em></td>
<td><strong>UpdateSubscriptionCustomFieldsOfASpecifiedVersion</strong></td>
<td><strong>PUT</strong> /v1/subscriptions/{subscriptionNumber}/versions/{version}/customFields</td>
<td>Update subscription custom fields of a subscription version</td>
</tr>
<tr>
<td><em>SummaryJournalEntriesApi</em></td>
<td><strong>CancelSummaryJournalEntry</strong></td>
<td><strong>PUT</strong> /v1/journal-entries/{je-number}/cancel</td>
<td>Cancel a summary journal entry</td>
</tr>
<tr>
<td><em>SummaryJournalEntriesApi</em></td>
<td><strong>CreateSummaryJournalEntry</strong></td>
<td><strong>POST</strong> /v1/journal-entries</td>
<td>Create a summary journal entry</td>
</tr>
<tr>
<td><em>SummaryJournalEntriesApi</em></td>
<td><strong>DeleteSummaryJournalEntry</strong></td>
<td><strong>DELETE</strong> /v1/journal-entries/{je-number}</td>
<td>Delete a summary journal entry</td>
</tr>
<tr>
<td><em>SummaryJournalEntriesApi</em></td>
<td><strong>GetAllSummaryJournalEntries</strong></td>
<td><strong>GET</strong> /v1/journal-entries/journal-runs/{jr-number}</td>
<td>List all summary journal entries in a journal run</td>
</tr>
<tr>
<td><em>SummaryJournalEntriesApi</em></td>
<td><strong>GetSummaryJournalEntry</strong></td>
<td><strong>GET</strong> /v1/journal-entries/{je-number}</td>
<td>Retrieve a summary journal entry</td>
</tr>
<tr>
<td><em>SummaryJournalEntriesApi</em></td>
<td><strong>UpdateBasicSummaryJournalEntry</strong></td>
<td><strong>PUT</strong> /v1/journal-entries/{je-number}/basic-information</td>
<td>Update a summary journal entry</td>
</tr>
<tr>
<td><em>TaxationItemsApi</em></td>
<td><strong>CreateTaxationItem</strong></td>
<td><strong>POST</strong> /v1/object/taxation-item</td>
<td>CRUD: Create a taxation item</td>
</tr>
<tr>
<td><em>TaxationItemsApi</em></td>
<td><strong>DeleteTaxationItem</strong></td>
<td><strong>DELETE</strong> /v1/taxation-items/{id}</td>
<td>Delete a taxation item</td>
</tr>
<tr>
<td><em>TaxationItemsApi</em></td>
<td><strong>GetTaxationItem</strong></td>
<td><strong>GET</strong> /v1/taxation-items/{id}</td>
<td>Retrieve a taxation item </td>
</tr>
<tr>
<td><em>TaxationItemsApi</em></td>
<td><strong>PutTaxationItem</strong></td>
<td><strong>PUT</strong> /v1/taxation-items/{id}</td>
<td>Update a taxation item</td>
</tr>
<tr>
<td><em>UsageApi</em></td>
<td><strong>CreateUsage</strong></td>
<td><strong>POST</strong> /v1/object/usage</td>
<td>CRUD: Create a usage record</td>
</tr>
<tr>
<td><em>UsageApi</em></td>
<td><strong>DeleteUsage</strong></td>
<td><strong>DELETE</strong> /v1/object/usage/{id}</td>
<td>CRUD: Delete a usage record</td>
</tr>
<tr>
<td><em>UsageApi</em></td>
<td><strong>GetUsage</strong></td>
<td><strong>GET</strong> /v1/object/usage/{id}</td>
<td>CRUD: Retrieve a usage record</td>
</tr>
<tr>
<td><em>UsageApi</em></td>
<td><strong>GetUsageRateDetailByInvoiceItem</strong></td>
<td><strong>GET</strong> /v1/invoices/invoice-item/{invoice-item-id}/usage-rate-detail</td>
<td>Retrieve usage rate detail for an invoice item</td>
</tr>
<tr>
<td><em>UsageApi</em></td>
<td><strong>GetUsagesByAccount</strong></td>
<td><strong>GET</strong> /v1/usage/accounts/{account-key}</td>
<td>Retrieve usage records by account</td>
</tr>
<tr>
<td><em>UsageApi</em></td>
<td><strong>UpdateUsage</strong></td>
<td><strong>PUT</strong> /v1/object/usage/{id}</td>
<td>CRUD: Update a usage record</td>
</tr>
<tr>
<td><em>UsageApi</em></td>
<td><strong>UploadUsageFile</strong></td>
<td><strong>POST</strong> /v1/usage</td>
<td>Upload a usage file</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>DeleteWorkflow</strong></td>
<td><strong>DELETE</strong> /workflows/{workflow_id}</td>
<td>Delete a workflow</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>DeleteWorkflowVersion</strong></td>
<td><strong>DELETE</strong> /workflows/versions/{version_id}</td>
<td>Delete a workflow version</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>GetWorkflow</strong></td>
<td><strong>GET</strong> /workflows/{workflow_id}</td>
<td>Retrieve a workflow</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>GetWorkflowExport</strong></td>
<td><strong>GET</strong> /workflows/{workflow_id}/export</td>
<td>Export a workflow version</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>GetWorkflowRun</strong></td>
<td><strong>GET</strong> /workflows/workflow_runs/{workflow_run_id}</td>
<td>Retrieve a workflow run</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>GetWorkflowVersions</strong></td>
<td><strong>GET</strong> /workflows/{workflow_id}/versions</td>
<td>List all versions of a workflow definition</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>GetWorkflows</strong></td>
<td><strong>GET</strong> /workflows</td>
<td>List workflows</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>GetWorkflowsTask</strong></td>
<td><strong>GET</strong> /workflows/tasks/{task_id}</td>
<td>Retrieve a workflow task</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>GetWorkflowsTasks</strong></td>
<td><strong>GET</strong> /workflows/tasks</td>
<td>List workflow tasks</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>GetWorkflowsUsages</strong></td>
<td><strong>GET</strong> /workflows/metrics.json</td>
<td>Retrieve workflow task usage</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>PATCHUpdateWorkflow</strong></td>
<td><strong>PATCH</strong> /workflows/{workflow_id}</td>
<td>Update a workflow</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>PostRunWorkflow</strong></td>
<td><strong>POST</strong> /workflows/{workflow_id}/run</td>
<td>Run a workflow</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>PostWorkflowImport</strong></td>
<td><strong>POST</strong> /workflows/import</td>
<td>Import a workflow</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>PostWorkflowVersionsImport</strong></td>
<td><strong>POST</strong> /workflows/{workflow_id}/versions/import</td>
<td>Import a workflow version</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>PostWorkflowsTaskRerun</strong></td>
<td><strong>POST</strong> /workflows/tasks/{task_id}/rerun</td>
<td>Rerun a workflow task</td>
</tr>
<tr>
<td><em>WorkflowsApi</em></td>
<td><strong>PutWorkflowsTasksUpdate</strong></td>
<td><strong>PUT</strong> /workflows/tasks/batch_update</td>
<td>Update workflow tasks</td>
</tr>
</tbody>
</table>
