---
markdown:
  toc:
    hide: false
---

# Node.js client library 3.14.0 changelog


## CreditMemosApi

* Added a new optional parameter `should_include_acknowledged` to fetch notifications marked as acknowledged along with unacknowledged ones.

## CustomObjectRecordsApi

* The `ids` parameter type has changed from a String to an Array of Strings. This requires developers to update their code to pass an array of UUIDs instead of a single string.

## DebitMemosApi

* Added a new optional parameter `should_include_acknowledged` to fetch notifications marked as acknowledged along with unacknowledged ones.

## HostedPagesApi

* Added createHostedPageWithHttpInfo method to create a new hosted payment page with detailed HTTP response.
* Added createHostedPage method to create a new hosted payment page with simplified response.

## InvoicesApi

* Added a new optional parameter `should_include_acknowledged` to fetch all notifications marked as acknowledged along with unacknowledged ones.

## ObjectQueriesApi

* Added new import statements for models related to ExpandedCommitmentAssociatedAccount, ExpandedCommitmentAssociatedItem, ExpandedCommitmentSchedule, and ExpandedCommitmentTransaction.
* Added new import statements for response models related to QueryCommitmentAssociatedAccounts, QueryCommitmentAssociatedItems, QueryCommitmentSchedules, and QueryCommitmentTransactions.
* Introduced new methods `queryPaymentScheduleItemByKeyWithHttpInfo` and `queryPaymentScheduleItemByKey` requiring a `key` parameter.

## PaymentSchedulesApi

* Added deletePaymentScheduleWithHttpInfo method to delete a payment schedule by key with detailed HTTP response.
* Added deletePaymentSchedule method to delete a payment schedule by key.
* Added deletePaymentScheduleItemWithHttpInfo method to delete a payment schedule item by ID with detailed HTTP response.
* Added deletePaymentScheduleItem method to delete a payment schedule item by ID.

## PaymentsApi

* Added bulkUpsertPaymentProfilesWithHttpInfo method to bulk create or update payment profiles with detailed HTTP info.
* Added bulkUpsertPaymentProfiles method to bulk create or update payment profiles.

## index

* Removed import and export of AssociationRule model.
* Removed import and export of ExpandedDailyConsumptionSummary model.
* Removed import and export of ExpandedInvoiceSchedule, ExpandedInvoiceScheduleBooking, and ExpandedInvoiceScheduleItem models.
* Removed import and export of ExpandedPrepaidBalance, ExpandedPrepaidBalanceFund, and ExpandedPrepaidBalanceTransaction models.
* Removed import and export of ExpandedValidityPeriodSummary model.
* Removed import and export of QueryDailyConsumptionSummarysResponse model.
* Removed import and export of QueryInvoiceSchedulesResponse model.
* Removed import and export of QueryPrepaidBalanceFundsResponse, QueryPrepaidBalanceTransactionsResponse, and QueryPrepaidBalancesResponse models.
* Removed import and export of QueryValidityPeriodSummarysResponse model.
* Added import and export of BulkPaymentOptionItem, BulkPaymentProfileRequest, BulkPaymentProfileResponse, and BulkPaymentProfileResponseReasonsInner models.
* Added import and export of ChargeRemoval model.
* Added import and export of CreateHostedPageRequest and CreateHostedPageResponse models.
* Added import and export of ExpandedCommitmentAssociatedAccount, ExpandedCommitmentAssociatedItem, ExpandedCommitmentSchedule, and ExpandedCommitmentTransaction models.
* Added import and export of QueryCommitmentAssociatedAccountsResponse, QueryCommitmentAssociatedItemsResponse, QueryCommitmentSchedulesResponse, and QueryCommitmentTransactionsResponse models.

## AccountSummaryResponse

* Integrated CommonResponse interface into AccountSummaryResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.

## AssociationRule

* The AssociationRule class has been removed entirely, which will break any code that relies on this class.

## BillingDocumentQueryResponseElement

* Implemented CommonResponse interface, adding properties such as `processId`, `requestId`, `reasons`, and `success` to BillingDocumentQueryResponseElement.
* Added validation for new fields `processId`, `requestId`, and `reasons` in the JSON data.

## BillingDocumentStatus

* Added a new billing document status `Split`.

## CancelAuthorizationResponse

* Integrated CommonResponse interface into CancelAuthorizationResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.

## CancelSubscriptionResponse

* Integrated CommonResponse interface into CancelSubscriptionResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## CommitmentBaseAttributes

* Removed the `associationRules` property from CommitmentBaseAttributes, which may require updates to code that utilizes this property.

## CommitmentInput

* Removed `period_alignment_option` from the constructor and initialization method, which may require updates to code that previously used this parameter.
* Removed `associationRules` property, which may affect code relying on this property.

## CreateAccountingCodeResponse

* Integrated CommonResponse interface into CreateAccountingCodeResponse.
* Added new fields: `processId`, `requestId`, and `reasons` to CreateAccountingCodeResponse.

## CreateAccountingPeriodResponse

* Integrated CommonResponse interface into CreateAccountingPeriodResponse.
* Added new properties: `processId`, `requestId`, and `reasons` to CreateAccountingPeriodResponse.

## CreateBillingDocumentFilesDeletionJobResponse

* Integrated CommonResponse interface into CreateBillingDocumentFilesDeletionJobResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## CreateBillingPreviewResponse

* Integrated CommonResponse interface into CreateBillingPreviewResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields `processId`, `requestId`, and `reasons` in JSON data.

## CreateInvoiceCollectResponse

* Integrated CommonResponse interface into CreateInvoiceCollectResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for JSON fields `processId`, `requestId`, and `reasons` to ensure correct data types.

## CreateJournalEntryResponse

* Integrated CommonResponse interface into CreateJournalEntryResponse.
* Added new properties: `processId`, `requestId`, and `reasons` to CreateJournalEntryResponse.

## CreateJournalRunResponse

* Integrated CommonResponse interface into CreateJournalRunResponse.
* Added new properties: `processId`, `requestId`, and `reasons` to CreateJournalRunResponse.

## CreateMassUpdateResponse

* Added implementation of CommonResponse interface.
* Introduced new properties: `processId`, `requestId`, and `reasons`.
* Enhanced JSON validation for new properties: `processId`, `requestId`, and `reasons`.

## CreateOrderRatePlanUpdate

* Added support for `chargeOverrides`, allowing developers to specify charges to be added or modified in the rate plan.
* Added support for `chargeRemovals`, enabling developers to specify charges to be removed from the bundle rate plan. Note: This requires the EnableHardBundle permission.

## CreateOrderUpdateProduct

* Added support for `chargeOverrides` in CreateOrderUpdateProduct, allowing specification of charges to be added or modified in the rate plan.
* Added support for `chargeRemovals` in CreateOrderUpdateProduct, allowing specification of charges to be removed from the bundle rate plan.

## CreatePaymentMethodDecryptionResponse

* Integrated CommonResponse interface into CreatePaymentMethodDecryptionResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields `processId`, `requestId`, and `reasons` to ensure correct data types.

## CreatePaymentPredebitNotifyResponse

* Integrated CommonResponse interface into CreatePaymentPredebitNotifyResponse.
* Added new properties: `processId`, `requestId`, `reasons`, and `success` to CreatePaymentPredebitNotifyResponse.

## CreatePaymentRunRequest

* Added support for `advancedFilter` property to select invoices when `useCustomPaymentMethods` is enabled.

## CreatePaymentSchedulesResponse

* Integrated CommonResponse interface, adding `processId`, `requestId`, and `reasons` properties to CreatePaymentSchedulesResponse.
* Added validation for `processId` and `requestId` to ensure they are strings.
* Added validation for `reasons` to ensure it is an array and each item is validated.

## CreateSequenceSetsResponse

* Added implementation of CommonResponse interface.
* Introduced new properties: `processId`, `requestId`, and `reasons`.

## CreateSubscriptionResponse

* Integrated CommonResponse interface into CreateSubscriptionResponse.
* Added new fields: `processId`, `requestId`, `reasons`, and `success` to CreateSubscriptionResponse.

## CreateUpdateStoredCredentialProfileResponse

* Integrated CommonResponse interface into CreateUpdateStoredCredentialProfileResponse.
* Added new properties: `processId`, `requestId`, `reasons`, and `success` to CreateUpdateStoredCredentialProfileResponse.

## CreditMemosResponse

* Integrated CommonResponse interface into CreditMemosResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## DecryptRSASignatureResponse

* Integrated CommonResponse interface into DecryptRSASignatureResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons` in JSON data.

## DeleteOrderAsyncResponse

* Integrated CommonResponse interface into DeleteOrderAsyncResponse.
* Added new properties: `processId`, `requestId`, and `reasons` to DeleteOrderAsyncResponse.

## DeleteSubscriptionResponse

* Integrated CommonResponse interface into DeleteSubscriptionResponse.
* Added new properties: `processId`, `requestId`, and `reasons` to DeleteSubscriptionResponse.

## ExpandedCommitment

* Added new properties: `startDate`, `endDate`, `totalAmount`, `accountId`, `periodAlignmentOption`, `specificPeriodAlignmentDate`.
* Introduced new associations: account (ExpandedAccount), commitmentSchedules (Array of ExpandedCommitmentSchedule), commitmentAssociatedAccounts (Array of ExpandedCommitmentAssociatedAccount), commitmentAssociatedItems (Array of ExpandedCommitmentAssociatedItem).

## ExpandedCommitmentPeriod

* Added new properties: `status`, `commitmentNumber`, `scheduleId`, `scheduleNumber`, `commitmentType`, `commitmentPriority`, `accountId`, `isProrated`, `billedTotalSpending`, `account`, and `commitmentTransactions`.
* Integrated new models: ExpandedAccount and ExpandedCommitmentTransaction.

## ExpandedCreditMemoItem

* Removed `invoiceSchedule` property from ExpandedCreditMemoItem.
* Removed `invoiceScheduleItem` property from ExpandedCreditMemoItem.

## ExpandedDailyConsumptionSummary

* The file ExpandedDailyConsumptionSummary has been completely removed from the SDK. Any functionality provided by this model will no longer be available, and developers will need to remove or replace any references to this model in their code.

## ExpandedInvoiceItem

* Removed properties `invoiceSchedule` and `invoiceScheduleItem` from ExpandedInvoiceItem. Developers need to update their code to remove any dependencies on these properties.

## ExpandedInvoiceSchedule

* The ExpandedInvoiceSchedule class has been removed entirely, which will break any code relying on this class.

## ExpandedInvoiceScheduleBooking

* The ExpandedInvoiceScheduleBooking class has been removed, which will cause compatibility issues for any code relying on this class.

## ExpandedInvoiceScheduleItem

* The ExpandedInvoiceScheduleItem class has been removed entirely, which will break any code relying on this class.

## ExpandedPrepaidBalance

* The ExpandedPrepaidBalance class has been removed entirely, which will break any code relying on this class.

## ExpandedPrepaidBalanceFund

* The ExpandedPrepaidBalanceFund class has been removed entirely, which will break any code relying on this class.

## ExpandedRatePlanCharge

* Added `isUnbilled` property to ExpandedRatePlanCharge model.
* Added `isAllocationEligible` property to ExpandedRatePlanCharge model.

## ExpandedValidityPeriodSummary

* The ExpandedValidityPeriodSummary class has been removed entirely, which will cause compatibility issues for any code relying on this class.

## GetAccountingCodeResponse

* Integrated CommonResponse interface into GetAccountingCodeResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.

## GetAccountingCodesResponse

* Integrated CommonResponse interface into GetAccountingCodesResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields `processId`, `requestId`, and `reasons` in JSON data.

## GetAccountingPeriodResponse

* Integrated CommonResponse interface into GetAccountingPeriodResponse, adding fields such as `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields `processId`, `requestId`, and `reasons` to ensure correct data types.

## GetAccountingPeriodsResponse

* Integration of CommonResponse interface, adding `processId`, `requestId`, `reasons`, and `success` properties to GetAccountingPeriodsResponse.

## GetAsyncOrderJobResponse

* Implemented CommonResponse interface in GetAsyncOrderJobResponse.
* Added new properties: `processId`, `requestId`, `reasons`, and `success` to GetAsyncOrderJobResponse.

## GetBillingDocumentFilesDeletionJobResponse

* Added implementation of CommonResponse interface, providing additional fields: `processId`, `requestId`, `reasons`, and `success`.
* Introduced validation for new fields `processId`, `requestId`, and `reasons` to ensure correct data types.

## GetBillingPreviewRunResponse

* Implemented CommonResponse interface, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## GetBulkPdfGenerationJobResponse

* Added implementation of CommonResponse interface, providing additional fields: `processId`, `requestId`, `reasons`, and `success`.
* Introduced new fields: `processId`, `requestId`, `reasons`, and `success` to GetBulkPdfGenerationJobResponse.

## GetCalloutHistoryVOsType

* Implemented the CommonResponse interface, adding properties such as `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields `processId`, `requestId`, and `reasons` in the JSON data.

## GetCommitmentOutput

* The `associationRules` property has been removed from the GetCommitmentOutput class. Any code relying on this property will need to be updated.

## GetCreditMemoItemPartsResponse

* Integrated CommonResponse interface into GetCreditMemoItemPartsResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons` to ensure correct data types.

## GetCreditMemoPartsResponse

* Integrated CommonResponse interface into GetCreditMemoPartsResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons` to ensure correct data types.

## GetCreditMemoPdfStatusBatchResponse

* Added implementation of CommonResponse interface.
* Introduced new properties: `processId`, `requestId`, and `reasons`.
* Enhanced JSON validation for new fields: `processId`, `requestId`, and `reasons`.

## GetCustomExchangeRatesType

* Integrated CommonResponse interface into GetCustomExchangeRatesType, adding fields: `processId`, `requestId`, `reasons`, and `success`.

## GetDataLabelingJobResponse

* Added new properties `processId`, `requestId`, `reasons`, and `success` to the GetDataLabelingJobResponse model.
* Implemented CommonResponse interface in GetDataLabelingJobResponse.
* Replaced GetDataLabelingJobResponseProgress with GetDataLabelingJobResponseAllOfProgress for the `progress` property.

## GetDataLabelingJobResponseProgress

* The file GetDataLabelingJobResponseProgress has been deleted, which means any references to this class in the codebase will need to be removed or replaced.

## GetDebitMemoApplicationPartsResponse

* Integrated CommonResponse interface, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## GetDebitMemoPdfStatusBatchResponse

* Added implementation of CommonResponse interface, including properties: `processId`, `requestId`, `reasons`, and `success`.
* Introduced validation for new fields `processId`, `requestId`, and `reasons` in JSON data.

## GetEmailHistoryVOsType

* Integrated CommonResponse interface into GetEmailHistoryVOsType, adding fields such as `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields `processId`, `requestId`, and `reasons` to ensure correct data types.

## GetInvoiceApplicationPartsRequest

* Implemented CommonResponse interface, adding properties: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## GetInvoicePdfStatusBatchResponse

* Added implementation of CommonResponse interface, providing common fields such as `processId`, `requestId`, and `reasons`.
* Introduced `processId` and `requestId` fields to track the process and request identifiers.
* Added `reasons` field to capture an array of FailedReason objects for detailed error information.

## GetJournalEntriesInJournalRunResponse

* Integrated CommonResponse interface, adding `processId`, `requestId`, `reasons`, and `success` properties to the response model.
* Added validation for `processId` and `requestId` to ensure they are strings.
* Added validation for `reasons` to ensure it is an array and each item is validated using FailedReason.

## GetJournalEntryDetailResponse

* Integrated CommonResponse interface, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## GetJournalRunResponse

* Integrated CommonResponse interface into GetJournalRunResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## GetMassUpdateResponse

* Integration of CommonResponse interface, providing additional fields such as `processId`, `requestId`, `reasons`, and `success`.
* Addition of validation for JSON fields `processId`, `requestId`, and `reasons` to ensure correct data types.

## GetPaymentItemPartResponse

* Integrated CommonResponse interface into GetPaymentItemPartResponse.
* Added new properties: `processId`, `requestId`, and `reasons` to GetPaymentItemPartResponse.

## GetPaymentItemPartsResponse

* Integrated CommonResponse interface into GetPaymentItemPartsResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields `processId`, `requestId`, and `reasons` in JSON data.

## GetPaymentPartResponse

* Integrated CommonResponse interface into GetPaymentPartResponse, adding `processId`, `requestId`, and `reasons` properties.
* Added validation for `processId`, `requestId`, and `reasons` fields in JSON data.

## GetPaymentPartsResponse

* Integrated CommonResponse interface into GetPaymentPartsResponse.
* Added new properties: `processId`, `requestId`, `reasons`, and `success` to GetPaymentPartsResponse.

## GetPaymentRunDataArrayResponse

* Integrated CommonResponse interface, adding fields: `processId`, `requestId`, and `reasons`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## GetPaymentRunSummaryResponse

* Integrated CommonResponse interface, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## GetPaymentRunsResponse

* Integrated CommonResponse interface into GetPaymentRunsResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields `processId`, `requestId`, and `reasons` to ensure correct data types.

## GetPaymentScheduleStatisticResponse

* Integrated CommonResponse interface, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## GetPaymentsResponse

* Integrated CommonResponse interface into GetPaymentsResponse, adding `processId`, `requestId`, `reasons`, and `success` properties.
* Added validation for `processId`, `requestId`, and `reasons` fields in JSON data.

## GetProductRatePlanResponse

* Implemented CommonResponse interface, adding fields: `processId`, `requestId`, `reasons`, and `success`.

## GetProductRatePlansByExternalIdResponse

* Integrated CommonResponse interface, adding `processId`, `requestId`, and `reasons` properties to the response model.

## GetProductRatePlansByProductResponse

* Integrated CommonResponse interface, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## GetProductsResponse

* Integrated CommonResponse interface into GetProductsResponse, adding `processId`, `requestId`, and `reasons` properties.
* Added validation for `processId`, `requestId`, and `reasons` fields in JSON data.

## GetRefundItemPartsResponse

* Integrated CommonResponse interface into GetRefundItemPartsResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## GetRefundPartsResponse

* Integrated CommonResponse interface into GetRefundPartsResponse.
* Added new properties: `processId`, `requestId`, and `reasons` to GetRefundPartsResponse.

## GetRefundsResponse

* Integrated CommonResponse interface into GetRefundsResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons` in JSON data.

## GetSequenceSetsResponse

* Integrated CommonResponse interface, adding `processId`, `requestId`, and `reasons` properties.
* Added validation for `processId` and `requestId` to ensure they are strings.
* Added validation for `reasons` to ensure it is an array and validate each item.

## GetSubscriptionRatePlan

* Added `productRatePlanType` field to the GetSubscriptionRatePlan model.
* Added `originalRatePlanId` field to the GetSubscriptionRatePlan model.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added `isLastSegment` property to indicate if the charge segment is the last segment.
* Added `optional` property to indicate if the charge is optional in a bundle rate plan.
* Added `status` property with possible values `removeDirectly` and `deleteWithRatePlan` to indicate the status of the charge.

## GetSubscriptionsResponse

* Implemented CommonResponse interface, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## GetTaxationItemsResponse

* Integrated CommonResponse interface into GetTaxationItemsResponse, adding `processId`, `requestId`, and `reasons` properties.
* Added validation for `processId` and `requestId` to ensure they are strings.
* Added validation for `reasons` to ensure it is an array and each item is validated.

## GetUsageRateDetailRequest

* Integrated CommonResponse interface into GetUsageRateDetailRequest, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## GetUsagesByAccountResponse

* Integrated CommonResponse interface into GetUsagesByAccountResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## HostedPagesResponse

* Implemented CommonResponse interface, adding properties: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields `processId`, `requestId`, and `reasons` in JSON data.

## InvoiceSchedule

* Added a new field `organizationLabel` to the InvoiceSchedule model, allowing developers to include and validate an organization label as a string.

## InvoiceScheduleItem

* Added a new property `organizationLabel` to the InvoiceScheduleItem class, allowing developers to set and retrieve an organization label for invoice schedule items.

## InvoiceScheduleResponse

* Added `organizationLabel` property to InvoiceScheduleResponse and InvoiceSchedule, allowing developers to access the organization label associated with an invoice schedule.

## OrderActionUpdateProduct

* Added support for `chargeRemovals` in OrderActionUpdateProduct, allowing charges to be removed from the bundle rate plan.
* Added support for `chargeOverrides` in OrderActionUpdateProduct, enabling charges to be added or modified in the rate plan.

## PaymentGatewaysResponse

* Integrated CommonResponse interface into PaymentGatewaysResponse, adding properties: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields `processId`, `requestId`, and `reasons` in the JSON data.

## PaymentMethodUpdaterInstancesResponse

* Integrated CommonResponse interface into PaymentMethodUpdaterInstancesResponse.
* Added new properties: `processId`, `requestId`, and `reasons` to PaymentMethodUpdaterInstancesResponse.

## PaymentRun

* Added `advancedFilter` property to the PaymentRun model, allowing for advanced filtering of invoices when `useCustomPaymentMethods` is enabled.

## PaymentRunResponse

* Added `advancedFilter` property to PaymentRunResponse and PaymentRun models, allowing selection of invoices when `useCustomPaymentMethods` is enabled.

## PeriodTypeEnum

* Added a new enum value `SinglePeriod` to the PeriodTypeEnum class.

## PreviewOrderRatePlanUpdate

* Added support for `chargeOverrides` which allows specifying charges to be added or modified in the rate plan.
* Added support for `chargeRemovals` which allows specifying charges to be removed from the bundle rate plan, requiring the EnableHardBundle permission.

## PreviewSubscriptionResponse

* Integrated CommonResponse interface into PreviewSubscriptionResponse, adding `processId`, `requestId`, `reasons`, and `success` properties.

## PutRevproAccCodeResponse

* Integrated CommonResponse interface into PutRevproAccCodeResponse, adding properties: `processId`, `requestId`, and `reasons`.
* Added validation for `processId` and `requestId` to ensure they are strings.
* Added validation for `reasons` to ensure it is an array and each item is validated using FailedReason.

## QueryDailyConsumptionSummarysResponse

* The entire QueryDailyConsumptionSummarysResponse class has been removed, which will break any code relying on this class.

## QueryInvoiceSchedulesResponse

* The entire QueryInvoiceSchedulesResponse class has been removed, which will break any code relying on this class.

## QueryPrepaidBalanceFundsResponse

* The entire QueryPrepaidBalanceFundsResponse class has been removed, which will cause compatibility issues for any code relying on this class.

## QueryPrepaidBalanceTransactionsResponse

* The entire QueryPrepaidBalanceTransactionsResponse class has been removed, which will break any code relying on this class.

## QueryValidityPeriodSummarysResponse

* The file QueryValidityPeriodSummarysResponse has been completely removed, which will break any code relying on this class.

## RSASignatureResponse

* Integrated CommonResponse interface into RSASignatureResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields `processId`, `requestId`, and `reasons` in the JSON data.

## RatePlanChargeSegment

* Added `isLastSegment` property to indicate if the charge segment is the last segment.
* Added `optional` property to indicate if the charge is optional in a bundle rate plan.
* Added `status` property with possible values `removeDirectly` and `deleteWithRatePlan` to indicate the status of the charge.

## RatePlanChargeSegmentInfo

* Added `isLastSegment` property to indicate if the charge segment is the last segment.
* Added `optional` property to indicate if the charge is optional in a bundle rate plan.
* Added `status` property with possible values `removeDirectly` and `deleteWithRatePlan` to indicate the status of the charge.

## RatePlanUpdate

* Added support for `chargeRemovals` to specify charges to be removed from the bundle rate plan.
* Added support for `chargeOverrides` to specify charges to be added or modified in the rate plan.

## RegenerateRevRecEventsResponse

* Integrated CommonResponse interface, adding common response properties.
* Added `requestId` property for unique request identification.
* Added `reasons` property to capture failure reasons.

## RegenerateTransactionObjectResponse

* Integrated CommonResponse interface into RegenerateTransactionObjectResponse.
* Added `requestId` property to RegenerateTransactionObjectResponse.
* Added `reasons` property to RegenerateTransactionObjectResponse, which is an array of FailedReason objects.

## RenewSubscriptionResponse

* Integrated CommonResponse interface into RenewSubscriptionResponse.
* Added new properties: `processId`, `requestId`, `reasons`, and `success` to RenewSubscriptionResponse.

## ResumeSubscriptionResponse

* Integrated CommonResponse interface, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## RetryPaymentScheduleItemResponse

* Implemented CommonResponse interface, adding `processId`, `requestId`, `reasons`, and `success` properties.
* Added validation for `processId` and `requestId` to ensure they are strings.
* Added validation for `reasons` to ensure it is an array and validate each item.

## StoredCredentialProfilesResponse

* Integrated CommonResponse interface into StoredCredentialProfilesResponse, adding `processId`, `requestId`, and `reasons` fields.
* Added validation for `processId` and `requestId` to ensure they are strings.
* Added validation for `reasons` to ensure it is an array and each item is validated.

## SubmitDataLabelingJobResponse

* Integrated CommonResponse interface into SubmitDataLabelingJobResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons` to ensure correct data types.

## SubscriptionRatePlan

* Added `productRatePlanType` property to SubscriptionRatePlan and GetSubscriptionRatePlan interfaces.
* Added `originalRatePlanId` property to SubscriptionRatePlan and GetSubscriptionRatePlan interfaces.

## SuspendSubscriptionResponse

* Integrated CommonResponse interface into SuspendSubscriptionResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.

## UpdatePaymentRunRequest

* Added support for `advancedFilter` property to select invoices when `useCustomPaymentMethods` is enabled.

## UpdateSequenceSetResponse

* Added implementation of CommonResponse interface, providing additional fields: `processId`, `requestId`, and `reasons`.
* Introduced validation for JSON data fields: `processId`, `requestId`, and `reasons`.

## UpdateSubscriptionResponse

* Implemented CommonResponse interface, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.

## UploadFileResponse

* Integrated CommonResponse interface into UploadFileResponse, adding `processId`, `requestId`, and `reasons` properties.
* Added validation for `processId`, `requestId`, and `reasons` fields in JSON data.

## UploadUsageFileResponse

* Integrated CommonResponse interface into UploadUsageFileResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for JSON fields `processId`, `requestId`, and `reasons` to ensure correct data types.

## UpsertCommitmentInput

* Removal of `associationRules` property from UpsertCommitmentInput. Developers using this property will need to update their code accordingly.

## UpsertCreateCommitmentInput

* Removed `period_alignment_option` from the constructor and required properties.
* Removed `associationRules` from the constructor, initialization, and validation logic.

## VerifyPaymentMethodResponse

* Integrated CommonResponse interface into VerifyPaymentMethodResponse.
* Added new fields: `processId`, `requestId`, and `reasons` to VerifyPaymentMethodResponse.

## WriteOffInvoiceResponse

* Integrated CommonResponse interface into WriteOffInvoiceResponse, adding fields: `processId`, `requestId`, `reasons`, and `success`.
* Added validation for new fields: `processId`, `requestId`, and `reasons`.
