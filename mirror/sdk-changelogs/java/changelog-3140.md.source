---
markdown:
  toc:
    hide: false
---

# Java client library 3.14.0 changelog


## CreditMemosApi

* Added a new parameter `shouldIncludeAcknowledged` to the method `updateCreditMemoInvokeSyncStatus` and its related methods. This parameter allows fetching notifications marked as acknowledged along with unacknowledged ones.

## CustomObjectRecordsApi

* The method signatures for getAllRecordsForCustomObjectType, getAllRecordsForCustomObjectTypeWithHttpInfo, getAllRecordsForCustomObjectTypeAsync, and getAllRecordsForCustomObjectTypeValidateBeforeCall have changed. The parameter `ids` has been changed from a String to a `List<String>`.

## DebitMemosApi

* Added a new parameter `shouldIncludeAcknowledged` to the method `updateDebitMemoInvokeSyncStatus`. This allows fetching notifications marked as acknowledged along with unacknowledged ones.

## HostedPagesApi

* Added `createHostedPage` method to create a new hosted payment page with customizable configurations.
* Introduced CreateHostedPageApi class for building and executing createHostedPage requests with optional parameters.

## InvoicesApi

* Added a new parameter `shouldIncludeAcknowledged` to the method `updateInvoiceInvokeSyncStatus`. This allows fetching notifications marked as acknowledged along with unacknowledged ones.

## ObjectQueriesApi

* Added new API methods for querying CommitmentSchedules, CommitmentTransactions, and CommitmentTransaction by key with filters, expands, and sort capabilities.
* Introduced new expand capabilities for querying commitments, including account, commitmentschedules, commitmentschedules.commitmentperiods, commitmentassociatedaccounts, commitmentassociateditems, and commitmentassociateditems.account.

## PaymentSchedulesApi

* Added `deletePaymentSchedule` method to delete a payment schedule by payment schedule key.
* Added `deletePaymentScheduleItem` method to delete a payment schedule item by ID.

## PaymentsApi

* Added `bulkUpsertPaymentProfilesApi` method to support bulk creation or update of payment profiles.
* Introduced BulkUpsertPaymentProfilesApi class to facilitate building and executing bulk upsert payment profiles requests.

## AccountSummaryResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the AccountSummaryResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## AssociationRule

* The AssociationRule class has been removed entirely, which will break any code that depends on it.

## BillingDocumentQueryResponseElement

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the BillingDocumentQueryResponseElement class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## BillingDocumentStatus

* Added a new status `SPLIT` to the BillingDocumentStatus enum, allowing developers to handle billing documents that have been split.

## CancelAuthorizationResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the CancelAuthorizationResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## CancelSubscriptionResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the CancelSubscriptionResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## CommitmentBaseAttributes

* Removed the `associationRules` field and its related methods from the CommitmentBaseAttributes class. This change will require developers to update their code if they were using this field.

## CommitmentInput

* Removed the `associationRules` field and its associated methods, which may require developers to update their code if they were using this field.
* Changed `periodAlignmentOption` from a required field to an optional field, which may affect validation logic in existing implementations.

## CommitmentScheduleInput

* Default value for `amountBase` set to `AmountBaseEnum.COMMITMENTPERIOD`.
* Default value for `periodType` set to `PeriodTypeEnum.MONTH`.

## CommitmentScheduleOutput

* Default value set for `amountBase` as `AmountBaseEnum.COMMITMENTPERIOD`.
* Default value set for `periodType` as `PeriodTypeEnum.MONTH`.

## CreateAccountingCodeResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the CreateAccountingCodeResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`.
* Added validation for the new fields in JSON parsing.

## CreateAccountingPeriodResponse

* The field `id` has been moved and is no longer the first field in the class. This may affect code that relies on the order of fields.
* The `id` field is no longer initialized with a default value.
* Added new field `processId` to track the process handling the operation.
* Added new field `requestId` to provide a unique identifier for the request.
* Added new field `reasons` to capture a list of reasons for failure, utilizing the new `FailedReason` class.

## CreateBillingDocumentFilesDeletionJobResponse

* Added new field `processId` to track the process handling the operation.
* Added new field `requestId` for unique request identification.
* Added new field `reasons` to capture reasons for failure, if any.

## CreateBillingPreviewResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the CreateBillingPreviewResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## CreateInvoiceCollectResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the CreateInvoiceCollectResponse class.
* Introduced validation for new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## CreateJournalEntryResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the CreateJournalEntryResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`.

## CreateJournalRunResponse

* Added new field `processId` to track the ID of the process handling the operation.
* Added new field `requestId` for unique request identification.
* Added new field `reasons` to capture a list of failed reasons.

## CreateMassUpdateResponse

* Added new field `processId` to identify the process handling the operation.
* Added new field `requestId` for unique request identification.
* Added new field `reasons` to capture failed reasons with validation logic.

## CreateOrderRatePlanUpdate

* Added support for chargeOverrides, allowing developers to specify charges to be added or modified in the rate plan.
* Introduced chargeRemovals, enabling developers to specify charges to be removed from the bundle rate plan.

## CreateOrderUpdateProduct

* Added support for chargeOverrides, allowing developers to specify charges to be added or modified in the rate plan.
* Added support for chargeRemovals, enabling developers to specify charges to be removed from the bundle rate plan.

## CreatePaymentMethodDecryptionResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the CreatePaymentMethodDecryptionResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## CreatePaymentPredebitNotifyResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the CreatePaymentPredebitNotifyResponse class.
* Introduced methods to manipulate the new fields: `processId`, `requestId`, `reasons`, and `success`.

## CreatePaymentRunRequest

* Added a new field `advancedFilter` to the CreatePaymentRunRequest class, allowing for advanced filtering of invoices when `useCustomPaymentMethods` is enabled.

## CreatePaymentSchedulesResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the CreatePaymentSchedulesResponse class.

## CreateSequenceSetsResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the CreateSequenceSetsResponse class.

## CreateSubscriptionResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the CreateSubscriptionResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## CreateUpdateStoredCredentialProfileResponse

* Added new fields: `processId`, `requestId`, `reasons` to the CreateUpdateStoredCredentialProfileResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`, including methods to add and retrieve `reasons`.

## CreditMemosResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the CreditMemosResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## DecryptRSASignatureResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the DecryptRSASignatureResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for the new fields in JSON parsing.

## DeleteOrderAsyncResponse

* Renamed `jobId` to `processId`. This change requires developers to update their code to use `processId` instead of `jobId`.
* Added `requestId` field to uniquely identify requests.
* Added `reasons` field to provide a list of reasons for failure, using the `FailedReason` class.

## DeleteSubscriptionResponse

* Added new field `processId` to track the process handling the operation.
* Added new field `requestId` for unique request identification.
* Added new field `reasons` to capture a list of failed reasons.

## ExpandedCommitment

* Added new fields: `startDate`, `endDate`, `totalAmount`, `accountId`, `periodAlignmentOption`, `specificPeriodAlignmentDate`, `account`, `commitmentSchedules`, `commitmentAssociatedAccounts`, and `commitmentAssociatedItems`.
* Introduced methods to manipulate new fields: `startDate`, `endDate`, `totalAmount`, `accountId`, `periodAlignmentOption`, `specificPeriodAlignmentDate`, `account`, `commitmentSchedules`, `commitmentAssociatedAccounts`, and `commitmentAssociatedItems`.
* Added validation for new fields to ensure correct JSON data types.

## ExpandedCommitmentPeriod

* Added new fields: `status`, `commitmentNumber`, `scheduleId`, `scheduleNumber`, `commitmentType`, `commitmentPriority`, `accountId`, `isProrated`, `billedTotalSpending`, `account`, and `commitmentTransactions`.
* Introduced methods to handle new fields: `status`, `commitmentNumber`, `scheduleId`, `scheduleNumber`, `commitmentType`, `commitmentPriority`, `accountId`, `isProrated`, `billedTotalSpending`, `account`, and `commitmentTransactions`.

## ExpandedCreditMemoItem

* Removed fields `invoiceSchedule` and `invoiceScheduleItem` from the ExpandedCreditMemoItem class.

## ExpandedInvoiceItem

* Removed fields and associated methods for `invoiceSchedule` and `invoiceScheduleItem`. This change will require developers to update their code if they were using these fields.

## ExpandedPrepaidBalance

* The ExpandedPrepaidBalance class has been removed entirely, which will break any code that relies on this class.

## ExpandedRatePlanCharge

* Added new Boolean field `isUnbilled` to the ExpandedRatePlanCharge class.
* Added new Boolean field `isAllocationEligible` to the ExpandedRatePlanCharge class.

## ExpandedSubscription

* Added a new field `soldToContact` of type ExpandedContact to the ExpandedSubscription class.

## ExpandedValidityPeriodSummary

* The class ExpandedValidityPeriodSummary has been removed, which will break any code relying on this class.

## GetAccountingCodeResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetAccountingCodeResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetAccountingCodesResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetAccountingCodesResponse class.
* Introduced validation for the new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## GetAccountingPeriodResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetAccountingPeriodResponse class.
* Introduced validation for the new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## GetAccountingPeriodsResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetAccountingPeriodsResponse class.
* Introduced validation for the new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## GetAsyncOrderJobResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetAsyncOrderJobResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for the new fields in JSON parsing.

## GetBillingDocumentFilesDeletionJobResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the GetBillingDocumentFilesDeletionJobResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`.

## GetBillingPreviewRunResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetBillingPreviewRunResponse class.
* Introduced validation for the new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## GetBulkPdfGenerationJobResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetBulkPdfGenerationJobResponse class.
* Introduced validation for the new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## GetCalloutHistoryVOsType

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetCalloutHistoryVOsType class.
* Introduced methods to manipulate the new fields: `processId`, `requestId`, `reasons`, and `success`.
* Validation logic added for new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## GetCommitmentOutput

* Removed the `associationRules` field and its associated methods from the GetCommitmentOutput class.

## GetCreditMemoItemPartsResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetCreditMemoItemPartsResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetCreditMemoPartsResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetCreditMemoPartsResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetCreditMemoPdfStatusBatchResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the GetCreditMemoPdfStatusBatchResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`, including adding items to the reasons list.

## GetCustomExchangeRatesType

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetCustomExchangeRatesType class.
* Introduced validation for the new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## GetDataLabelingJobResponse

* Changed type of `progress` from GetDataLabelingJobResponseProgress to GetDataLabelingJobResponseAllOfProgress.
* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetDataLabelingJobResponse class.

## GetDataLabelingJobResponseProgress

* The entire class GetDataLabelingJobResponseProgress has been removed, which will cause compatibility issues for any code relying on this class.

## GetDebitMemoApplicationPartsResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetDebitMemoApplicationPartsResponse class.
* Introduced methods to manipulate the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetDebitMemoPdfStatusBatchResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the GetDebitMemoPdfStatusBatchResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`.

## GetEmailHistoryVOsType

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetEmailHistoryVOsType class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetInvoiceApplicationPartsRequest

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetInvoiceApplicationPartsRequest class.
* Introduced validation for the new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## GetInvoicePdfStatusBatchResponse

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons.

## GetJournalEntriesInJournalRunResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to GetJournalEntriesInJournalRunResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetJournalEntryDetailResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetJournalEntryDetailResponse class.
* Introduced validation for the new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## GetJournalRunResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetJournalRunResponse class.
* Introduced validation for the new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## GetMassUpdateResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetMassUpdateResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetPaymentItemPartResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the GetPaymentItemPartResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`.

## GetPaymentItemPartsResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetPaymentItemPartsResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetPaymentPartResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the GetPaymentPartResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`.
* Added validation for the new fields in JSON parsing.

## GetPaymentPartsResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetPaymentPartsResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetPaymentRunDataArrayResponse

* Added `processId` field to track the process handling the operation.
* Added `requestId` field for unique request identification.
* Added `reasons` field to capture failure reasons with validation for JSON structure.

## GetPaymentRunSummaryResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetPaymentRunSummaryResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetPaymentRunsResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetPaymentRunsResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetPaymentScheduleStatisticResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetPaymentScheduleStatisticResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetPaymentsResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetPaymentsResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetProductRatePlanResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetProductRatePlanResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetProductRatePlansByExternalIdResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the GetProductRatePlansByExternalIdResponse class.

## GetProductRatePlansByProductResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetProductRatePlansByProductResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetProductsResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the GetProductsResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`.
* Added validation for the new fields in JSON parsing.

## GetRefundItemPartsResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetRefundItemPartsResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetRefundPartsResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the GetRefundPartsResponse class.

## GetRefundsResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetRefundsResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetSequenceSetsResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the GetSequenceSetsResponse class.

## GetSubscriptionRatePlan

* Added new field `productRatePlanType` to the GetSubscriptionRatePlan model.
* Added new field `originalRatePlanId` to the GetSubscriptionRatePlan model.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added new Boolean field `isLastSegment` to indicate if the charge segment is the last segment.
* Added new Boolean field `optional` to indicate if the charge is optional in a bundle rate plan.
* Introduced `StatusEnum` with possible values `removeDirectly` and `deleteWithRatePlan` to represent the status of the charge.

## GetSubscriptionsResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the GetSubscriptionsResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## GetTaxationItemsResponse

* Added new field `processId` to track the process handling the operation.
* Added new field `requestId` for unique request identification.
* Added new field `reasons` to capture a list of failure reasons using the `FailedReason` model.

## GetUsageRateDetailRequest

* Added new field `processId` to track the process handling the operation.
* Added new field `requestId` for unique request identification.
* Added new field `reasons` to capture a list of failure reasons.

## GetUsagesByAccountResponse

* Added new field `processId` to track the process handling the operation.
* Added new field `requestId` for unique request identification.
* Added new field `reasons` to capture a list of failure reasons.

## HostedPagesResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the HostedPagesResponse class.

## InvoiceSchedule

* Added a new field `organizationLabel` to the InvoiceSchedule class, allowing developers to set and retrieve an organization label associated with an invoice schedule.

## InvoiceScheduleItem

* Added a new field `organizationLabel` to the InvoiceScheduleItem class, allowing developers to set and retrieve an organization label for invoice schedule items.

## InvoiceScheduleResponse

* Added a new field `organizationLabel` to the InvoiceScheduleResponse class.

## OrderActionUpdateProduct

* Added support for chargeRemovals, allowing developers to specify charges to be removed from the bundle rate plan.
* Introduced chargeOverrides, enabling developers to add or modify charges in the rate plan.

## PaymentGatewaysResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the PaymentGatewaysResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`.
* Added validation for the new fields in JSON parsing.

## PaymentMethodUpdaterInstancesResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the PaymentMethodUpdaterInstancesResponse class.
* Introduced validation for the new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## PaymentRun

* Added `advancedFilter` field to the PaymentRun class, allowing for advanced filtering of invoices when `useCustomPaymentMethods` is enabled.

## PaymentRunResponse

* Added a new field `advancedFilter` to the PaymentRunResponse class, which allows specifying an advanced filter for selecting invoices when `useCustomPaymentMethods` is enabled.

## PreviewOrderRatePlanUpdate

* Added support for chargeOverrides, allowing developers to specify charges to be added or modified in the rate plan.
* Introduced chargeRemovals, enabling developers to specify charges to be removed from the bundle rate plan.

## PreviewSubscriptionResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the PreviewSubscriptionResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## PutRevproAccCodeResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the PutRevproAccCodeResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`, including methods to add items to the reasons list.

## QueryDailyConsumptionSummarysResponse

* The class QueryDailyConsumptionSummarysResponse has been removed entirely from the SDK.

## QueryInvoiceSchedulesResponse

* The class QueryInvoiceSchedulesResponse has been removed, which will break any code relying on this class.

## QueryValidityPeriodSummarysResponse

* The class QueryValidityPeriodSummarysResponse has been removed, which will break any code relying on this class.

## RSASignatureResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the RSASignatureResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`, including methods to add items to the reasons list.

## RatePlanChargeSegment

* Added new Boolean field `isLastSegment` to indicate if the charge segment is the last segment.
* Added new Boolean field `optional` to specify if a charge is optional in a bundle rate plan.
* Introduced `StatusEnum` with possible values `removeDirectly` and `deleteWithRatePlan` to represent the status of the charge.

## RatePlanChargeSegmentInfo

* Added new Boolean field `isLastSegment` to indicate if the charge segment is the last segment.
* Added new Boolean field `optional` to specify if the charge is optional in a bundle rate plan.
* Introduced `StatusEnum` with possible values `removeDirectly` and `deleteWithRatePlan` to represent the status of the charge.

## RatePlanUpdate

* Added support for chargeRemovals, allowing developers to specify charges to be removed from the bundle rate plan.
* Introduced chargeOverrides, enabling developers to add or modify charges in the rate plan.

## RegenerateRevRecEventsResponse

* Added a new field `requestId` to uniquely identify requests.
* Introduced a new field `reasons` which is a list of `FailedReason` objects to provide detailed failure reasons.

## RegenerateTransactionObjectResponse

* Added `requestId` field to uniquely identify requests.
* Added `reasons` field to provide detailed failure reasons.

## RenewSubscriptionResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the RenewSubscriptionResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## ResumeSubscriptionResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the ResumeSubscriptionResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.

## RetryPaymentScheduleItemResponse

* Added new field `processId` to track the process handling the operation.
* Added new field `requestId` for unique request identification.
* Added new field `reasons` to capture a list of failure reasons.

## StoredCredentialProfilesResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the StoredCredentialProfilesResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`.

## SubmitDataLabelingJobResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the SubmitDataLabelingJobResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`, including methods to add and retrieve reasons.

## SubscriptionRatePlan

* Added new field `productRatePlanType` to SubscriptionRatePlan.
* Added new field `originalRatePlanId` to SubscriptionRatePlan.

## SuspendSubscriptionResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the SuspendSubscriptionResponse class.
* Introduced validation for the new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## UpdatePaymentRunRequest

* Added `advancedFilter` field to the UpdatePaymentRunRequest class, allowing for advanced filtering of invoices when `useCustomPaymentMethods` is enabled.

## UpdateSequenceSetResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the UpdateSequenceSetResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, and `reasons`.

## UpdateSubscriptionResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the UpdateSubscriptionResponse class.
* Introduced validation for the new fields `processId`, `requestId`, and `reasons` in JSON parsing.

## UploadFileResponse

* The field `fileId` has been moved and is no longer the first field in the class. This may affect code that relies on the order of fields.
* The constructor and methods related to `fileId` have been moved, which may affect instantiation and method chaining.
* Added new field `processId` with associated methods for handling process identification.
* Added new field `requestId` with associated methods for handling request identification.
* Added new field `reasons` with associated methods for handling failure reasons, including validation logic for JSON input.

## UploadUsageFileResponse

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to the UploadUsageFileResponse class.
* Introduced methods to handle the new fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for the new fields in JSON parsing.

## UpsertCommitmentInput

* Removed import of AssociationRule, which may affect any code relying on this import.

## UpsertCreateCommitmentInput

* Removed the `associationRules` field and its associated methods, which may require developers to update their code if they were using this field.
* Changed `periodAlignmentOption` from a required field to an optional field, which may affect validation logic in existing implementations.

## UpsertCreateCommitmentScheduleInput

* Default value for `amountBase` set to `COMMITMENTPERIOD`.
* Default value for `periodType` set to `MONTH`.

## VerifyPaymentMethodResponse

* Added new field `processId` to track the process handling the operation.
* Added new field `requestId` for unique request identification.
* Introduced `reasons` field to capture a list of failure reasons.

## WriteOffInvoiceResponse

* Added new field `processId` to track the process handling the operation.
* Added new field `requestId` for unique request identification.
* Added new field `reasons` to capture a list of failed reasons.

## sdk/ZuoraClient (Quickstart API client)

* For all "Create Request" classes, such as OrderCreateRequest, made the following updates:
  * Changed the type of the `customFields` field from `HashMap<String, String>` to `HashMap<String, Object>`.
  * Changed the type of the returned custom field values from `HashMap<String, String>` to `HashMap<String, Object>`.

  Sample code (before this update):
  ```java
  HashMap<String, String> customFields = new HashMap<>();
  customFields.put("DateField__c", "2023-01-12");
  customFields.put("PicklistField__c", "option1");

  OrderCreateRequest createRequest = new OrderCreateRequest()
        .customFields(customFields)

  Order ret = zuoraClient.orders().createOrder(createRequest);
        Map<String, String> cf = ret.getCustomFields();
  ```

  Sample code (after this update):
  ```java
  HashMap<String, Object> customFields = new HashMap<>();
  customFields.put("IntegerField__c", 123);
  customFields.put("NumberField__c", 123.321);
  customFields.put("BooleanField__c", true);
  customFields.put("DateField__c", "2023-01-12");
  customFields.put("PicklistField__c", "option1");

  OrderCreateRequest createRequest = new OrderCreateRequest()
        .customFields(customFields)

  Order ret = zuoraClient.orders().createOrder(createRequest);
        Map<String, Object> cf = ret.getCustomFields();
  ```
