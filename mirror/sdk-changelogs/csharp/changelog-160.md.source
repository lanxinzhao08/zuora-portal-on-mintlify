---
markdown:
  toc:
    hide: false
---

# C# client library 1.6.0 changelog


## CreditMemosApi

* Added a new optional parameter `shouldIncludeAcknowledged` to the methods UpdateCreditMemoInvokeSyncStatus, UpdateCreditMemoInvokeSyncStatusWithHttpInfo, UpdateCreditMemoInvokeSyncStatusAsync, and UpdateCreditMemoInvokeSyncStatusWithHttpInfoAsync.

## CustomObjectRecordsApi

* The parameter `ids` in several methods has changed from `string?` to `List<string>?`. This change affects the following methods: GetAllRecordsForCustomObjectType, GetAllRecordsForCustomObjectTypeWithHttpInfo, GetAllRecordsForCustomObjectTypeAsync, and GetAllRecordsForCustomObjectTypeWithHttpInfoAsync. Developers will need to update their code to pass a list of strings instead of a single string.

## DebitMemosApi

* Added a new optional parameter `shouldIncludeAcknowledged` to the methods UpdateDebitMemoInvokeSyncStatus, UpdateDebitMemoInvokeSyncStatusWithHttpInfo, UpdateDebitMemoInvokeSyncStatusAsync, and UpdateDebitMemoInvokeSyncStatusWithHttpInfoAsync.

## HostedPagesApi

* Added synchronous and asynchronous methods for creating a hosted page: CreateHostedPage and CreateHostedPageAsync.
* Introduced methods to retrieve detailed API response information: CreateHostedPageWithHttpInfo and CreateHostedPageWithHttpInfoAsync.

## InvoicesApi

* Added a new optional parameter `shouldIncludeAcknowledged` to the methods `UpdateInvoiceInvokeSyncStatus`, `UpdateInvoiceInvokeSyncStatusWithHttpInfo`, `UpdateInvoiceInvokeSyncStatusAsync`, and `UpdateInvoiceInvokeSyncStatusWithHttpInfoAsync`. This parameter allows developers to specify whether acknowledged invoices should be included in the update.

## ObjectQueriesApi

* Method signatures have been changed for several query methods, including changes to return types and parameter lists.
* New methods have been introduced, such as `QueryCommitmentAssociatedAccountByKey`, `QueryCommitmentAssociatedAccounts`, `QueryCommitmentAssociatedItemByKey`, providing additional querying capabilities.
* Added method `QueryPaymentScheduleItemByKeyWithHttpInfo`.
* Added method `QueryPaymentScheduleItemsWithHttpInfo`.
* Added method `QueryPaymentSchedulesWithHttpInfo`.
* Added method `QueryPaymentsWithHttpInfo`.

## PaymentSchedulesApi

* Added DeletePaymentSchedule method to allow deletion of a payment schedule.
* Added DeletePaymentScheduleItem method to allow deletion of a payment schedule item.
* Introduced asynchronous versions of the delete methods: DeletePaymentScheduleAsync and DeletePaymentScheduleItemAsync.

## PaymentsApi

* Added BulkUpsertPaymentProfiles method for bulk creating or updating payment profiles.
* Added asynchronous method BulkUpsertPaymentProfilesAsync for bulk creating or updating payment profiles.

## AccountSummaryResponse

* Added new parameters to the AccountSummaryResponse constructor: `ProcessId`, `RequestId`, `Reasons`, and `Success` with a default value of true.

## AssociationRule

* The AssociationRule class has been removed, which will break any code that relies on this class.

## BillingDocumentQueryResponseElement

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the BillingDocumentQueryResponseElement constructor.
* The `Success` parameter in the constructor now defaults to true if not provided.

## BillingDocumentStatus

* Added a new enum value `Split` with an associated integer value of 7 to the BillingDocumentStatus enum.

## CancelAuthorizationResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, and `Reasons`.
* Default value for the `Success` parameter is now set to true if not provided.

## CancelSubscriptionResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the CancelSubscriptionResponse class.
* Default value for the `Success` property is now set to true if not provided.

## CommitmentBaseAttributes

* Removed the `AssociationRules` parameter from the CommitmentBaseAttributes constructor, which may require updates to code that previously utilized this parameter.
* Removed the `AssociationRules` property from the CommitmentBaseAttributes class, which may affect code that accessed or modified this property.

## CommitmentInput

* The `PeriodAlignmentOption` property is no longer required and is now nullable.
* The `AssociationRules` property has been removed from the CommitmentInput class.

## CreateAccountingCodeResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the CreateAccountingCodeResponse class.

## CreateAccountingPeriodResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the CreateAccountingPeriodResponse class.

## CreateBillingDocumentFilesDeletionJobResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the CreateBillingDocumentFilesDeletionJobResponse class.

## CreateBillingPreviewResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the CreateBillingPreviewResponse class.
* Default value for the `Success` property is now set to true if not provided.

## CreateInvoiceCollectResponse

* Added new parameters: `ProcessId`, `RequestId`, and `Reasons` to the CreateInvoiceCollectResponse constructor.

## CreateJournalEntryResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the CreateJournalEntryResponse class.

## CreateMassUpdateResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the CreateMassUpdateResponse class.

## CreateOrderRatePlanUpdate

* Added support for ChargeOverrides with a new parameter and property.
* Added support for ChargeRemovals with a new parameter and property.

## CreateOrderUpdateProduct

* Added support for ChargeOverrides, allowing developers to specify a list of charge overrides when creating or updating an order.
* Introduced ChargeRemovals, enabling developers to specify a list of charges to be removed during order updates.

## CreatePaymentMethodDecryptionResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the constructor.
* Default value for `Success` parameter is now set to true if not provided.

## CreatePaymentPredebitNotifyResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the constructor.
* Introduced a default value for `Success` parameter in the constructor, defaulting to true if not provided.

## CreatePaymentRunRequest

* Added `advancedFilter` parameter to the CreatePaymentRunRequest constructor, allowing for more refined payment run queries.

## CreatePaymentSchedulesResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the CreatePaymentSchedulesResponse class.

## CreateSequenceSetsResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the CreateSequenceSetsResponse class.

## CreateSubscriptionResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, `Reasons`, and `Success` with a default value of true.

## CreateUpdateStoredCredentialProfileResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the CreateUpdateStoredCredentialProfileResponse class.

## CreditMemosResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the CreditMemosResponse constructor.
* Default value for `Success` parameter in the constructor is now set to true if not provided.

## DecryptRSASignatureResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, and `Reasons`.
* Introduced new properties: `ProcessId`, `RequestId`, and `Reasons`.

## DeleteOrderAsyncResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the DeleteOrderAsyncResponse constructor.

## DeleteSubscriptionResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the DeleteSubscriptionResponse class.

## ExpandedCommitment

* Added new properties: `StartDate`, `EndDate`, `TotalAmount`, `AccountId`, `PeriodAlignmentOption`, `SpecificPeriodAlignmentDate`, `Account`, `CommitmentSchedules`, `CommitmentAssociatedAccounts`, and `CommitmentAssociatedItems` to the ExpandedCommitment model.

## ExpandedCommitmentPeriod

* Removed `type` and `priority` properties, which may require updates to existing code that relied on these fields.
* Added `status` property to track the status of the commitment period.
* Introduced `commitmentNumber`, `scheduleId`, `scheduleNumber`, `commitmentType`, and `commitmentPriority` properties for enhanced commitment tracking.
* Added `accountId` and `account` properties to associate commitment periods with specific accounts.
* Introduced `isProrated` property to indicate if the commitment period is prorated.
* Added `billedTotalSpending` property to track the total spending billed.
* Included `commitmentTransactions` property to manage related transactions.

## ExpandedCreditMemoItem

* Removed the parameters `invoiceSchedule` and `invoiceScheduleItem` from the constructor of ExpandedCreditMemoItem.
* Removed the properties `InvoiceSchedule` and `InvoiceScheduleItem` from the ExpandedCreditMemoItem class.

## ExpandedInvoiceItem

* Removed parameters `invoiceSchedule` and `invoiceScheduleItem` from the ExpandedInvoiceItem constructor.
* Removed properties `InvoiceSchedule` and `InvoiceScheduleItem` from the ExpandedInvoiceItem class.

## ExpandedRatePlanCharge

* Added new boolean property `IsUnbilled` to the ExpandedRatePlanCharge model.
* Added new boolean property `IsAllocationEligible` to the ExpandedRatePlanCharge model.

## ExpandedSubscription

* Added a new parameter `soldToContact` to the ExpandedSubscription constructor.
* Introduced a new property `SoldToContact` of type ExpandedContact.

## GetAccountingCodeResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, `Reasons`, and `Success` with a default value of true.
* Introduced new properties: `ProcessId`, `RequestId`, `Reasons`, and `Success`.

## GetAccountingCodesResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the GetAccountingCodesResponse constructor.

## GetAccountingPeriodResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, `Reasons`, and `Success` with a default value of true.
* Introduced new properties: `ProcessId`, `RequestId`, `Reasons`, and `Success`.

## GetAccountingPeriodsResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the GetAccountingPeriodsResponse class.

## GetAsyncOrderJobResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the GetAsyncOrderJobResponse class.

## GetBillingDocumentFilesDeletionJobResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the GetBillingDocumentFilesDeletionJobResponse class.
* Default value for the `Success` parameter is now set to true if not provided.

## GetBillingPreviewRunResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, `Reasons`, and `Success`.
* Introduced new properties: `ProcessId`, `RequestId`, `Reasons`, and `Success`.

## GetBulkPdfGenerationJobResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the constructor.
* Introduced a default value for the `Success` parameter in the constructor, defaulting to true if not provided.

## GetCalloutHistoryVOsType

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the constructor.
* Introduced new properties `ProcessId`, `RequestId`, and `Reasons` to the class.

## GetCommitmentOutput

* Removed the `AssociationRules` parameter from the constructor and the corresponding property from the class.

## GetCreditMemoItemPartsResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the constructor of GetCreditMemoItemPartsResponse.
* The `Success` parameter in the constructor now defaults to true if not provided.

## GetCreditMemoPartsResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the GetCreditMemoPartsResponse constructor.

## GetCreditMemoPdfStatusBatchResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, and `Reasons`.
* Introduced new properties: `ProcessId`, `RequestId`, and `Reasons`.

## GetCustomExchangeRatesType

* Added new parameters to the constructor: `ProcessId`, `RequestId`, `Reasons`, and `Success` with a default value of true.
* Introduced new properties: `ProcessId`, `RequestId`, `Reasons`, and `Success`.

## GetDataLabelingJobResponse

* The type of the `Progress` property has changed from `GetDataLabelingJobResponseProgress` to `GetDataLabelingJobResponseAllOfProgress`.
* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the GetDataLabelingJobResponse class.
* The `Success` property now defaults to true if not provided.

## GetDataLabelingJobResponseProgress

* The class GetDataLabelingJobResponseProgress has been removed, which will break any code relying on this class.

## GetDebitMemoApplicationPartsResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the GetDebitMemoApplicationPartsResponse class.

## GetDebitMemoPdfStatusBatchResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the GetDebitMemoPdfStatusBatchResponse class.

## GetEmailHistoryVOsType

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the constructor of GetEmailHistoryVOsType.
* Introduced new properties `ProcessId`, `RequestId`, and `Reasons` in the GetEmailHistoryVOsType class.

## GetInvoiceApplicationPartsRequest

* Added new parameters: `ProcessId`, `RequestId`, and `Reasons` to the constructor of GetInvoiceApplicationPartsRequest.

## GetInvoicePdfStatusBatchResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the GetInvoicePdfStatusBatchResponse class.

## GetJournalEntriesInJournalRunResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, and `Reasons`.
* Introduced new properties: `ProcessId`, `RequestId`, and `Reasons`.

## GetJournalEntryDetailResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, `Reasons`, and `Success` with a default value of true.
* Introduced new properties: `ProcessId`, `RequestId`, `Reasons`, and `Success`.

## GetJournalRunResponse

* Added new parameters: `ProcessId`, `RequestId`, and `Reasons` to the GetJournalRunResponse constructor.
* Introduced new properties: `ProcessId`, `RequestId`, and `Reasons`.

## GetMassUpdateResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, `Reasons`, and `Success` with a default value of true.
* Introduced new properties: `ProcessId`, `RequestId`, `Reasons`, and `Success`.

## GetPaymentItemPartResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the GetPaymentItemPartResponse class.

## GetPaymentItemPartsResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the GetPaymentItemPartsResponse class.

## GetPaymentPartResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the GetPaymentPartResponse constructor.

## GetPaymentPartsResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the GetPaymentPartsResponse constructor.
* Default value for `Success` parameter in the constructor is now set to true if not provided.

## GetPaymentRunDataArrayResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the GetPaymentRunDataArrayResponse class.

## GetPaymentRunSummaryResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, `Reasons`, and `Success` with a default value of true.

## GetPaymentScheduleStatisticResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the constructor.
* Introduced new properties `ProcessId`, `RequestId`, and `Reasons` to the class.

## GetPaymentsResponse

* Added new parameters to the GetPaymentsResponse constructor: `ProcessId`, `RequestId`, and `Reasons`.
* Default value for the `Success` parameter in the GetPaymentsResponse constructor is now true.

## GetProductRatePlanResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, `Reasons`, and `Success`.
* Introduced new properties: `ProcessId`, `RequestId`, and `Reasons`.

## GetProductRatePlansByExternalIdResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, and `Reasons`.
* Introduced new properties: `ProcessId`, `RequestId`, and `Reasons`.

## GetProductRatePlansByProductResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the constructor.
* Default value for `Success` parameter in the constructor is now set to true if not provided.

## GetProductsResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the GetProductsResponse constructor.

## GetRefundItemPartsResponse

* Added new parameters to the constructor: `ProcessId`, `RequestId`, and `Reasons`.
* Default value for `Success` parameter in the constructor is now true.
* Introduced new properties: `ProcessId`, `RequestId`, and `Reasons`.

## GetRefundPartsResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the GetRefundPartsResponse class.

## GetRefundsResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the GetRefundsResponse constructor.
* Introduced new properties `ProcessId`, `RequestId`, and `Reasons` in the GetRefundsResponse class.

## GetSequenceSetsResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the GetSequenceSetsResponse class.

## GetSubscriptionRatePlan

* Added new parameter `productRatePlanType` to the constructor and class properties.
* Added new parameter `originalRatePlanId` to the constructor and class properties.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added a new enum `StatusEnum` with values `RemoveDirectly` and `DeleteWithRatePlan`.
* Introduced new properties `IsLastSegment`, `Optional`, and `Status` to the class `GetSubscriptionRatePlanChargesWithAllSegments`.

## GetSubscriptionsResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the GetSubscriptionsResponse constructor.

## GetTaxationItemsResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the GetTaxationItemsResponse constructor.

## GetUsageRateDetailRequest

* Added new parameters to the constructor: `ProcessId`, `RequestId`, and `Reasons`.
* Introduced new properties: `ProcessId`, `RequestId`, and `Reasons`.

## HostedPagesResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the HostedPagesResponse class.

## InvoiceSchedule

* Added a new property `OrganizationLabel` to the InvoiceSchedule class, allowing developers to set and retrieve an organization label associated with an invoice schedule.

## InvoiceScheduleItem

* Added a new property `OrganizationLabel` to the InvoiceScheduleItem class.

## InvoiceScheduleResponse

* Added a new property `OrganizationLabel` to the InvoiceScheduleResponse class.

## OrderActionUpdateProduct

* Added support for ChargeRemovals in the OrderActionUpdateProduct class.
* Added support for ChargeOverrides in the OrderActionUpdateProduct class.

## PaymentGatewaysResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the PaymentGatewaysResponse class.

## PaymentMethodUpdaterInstancesResponse

* Added new parameters: `ProcessId`, `RequestId`, and `Reasons` to the constructor of PaymentMethodUpdaterInstancesResponse.
* Introduced new properties: `ProcessId`, `RequestId`, and `Reasons` in the PaymentMethodUpdaterInstancesResponse class.

## PaymentRun

* Added `AdvancedFilter` parameter to the PaymentRun constructor.
* Introduced `AdvancedFilter` property to the PaymentRun class with a maximum length validation of 1000 characters.

## PaymentRunResponse

* Added `AdvancedFilter` property to the PaymentRunResponse model, allowing for more detailed filtering options.

## PeriodTypeEnum

* Added a new enum value `SinglePeriod` with an underlying value of 6.

## PreviewOrderRatePlanUpdate

* Added support for ChargeOverrides in the PreviewOrderRatePlanUpdate class.
* Added support for ChargeRemovals in the PreviewOrderRatePlanUpdate class.

## PreviewSubscriptionResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the PreviewSubscriptionResponse class.
* Default value for the `Success` property is now set to true if not provided.

## PutRevproAccCodeResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the PutRevproAccCodeResponse class.

## QueryInvoiceSchedulesResponse

* The file QueryInvoiceSchedulesResponse has been deleted, which means the class QueryInvoiceSchedulesResponse is no longer available. Developers will need to remove any dependencies on this class.

## QueryPrepaidBalanceTransactionsResponse

* The file QueryPrepaidBalanceTransactionsResponse has been deleted, which means the class QueryPrepaidBalanceTransactionsResponse is no longer available. Developers will need to remove any dependencies on this class from their code.

## QueryValidityPeriodSummarysResponse

* The file QueryValidityPeriodSummarysResponse has been deleted, which means any references to this class in the code will need to be removed or replaced.

## RSASignatureResponse

* Added new parameters `ProcessId`, `RequestId`, and `Reasons` to the RSASignatureResponse constructor.
* Default value for `Success` parameter in the constructor is now set to true if not provided.

## RatePlanChargeSegment

* Added a new enum `StatusEnum` with values `RemoveDirectly` and `DeleteWithRatePlan`.
* Introduced a new property `Status` of type `StatusEnum` to the RatePlanChargeSegment class.
* Added new properties `IsLastSegment` and `Optional` to the RatePlanChargeSegment class.

## RatePlanChargeSegmentInfo

* Added a new enum `StatusEnum` with values `RemoveDirectly` and `DeleteWithRatePlan`.
* Introduced a new property `Status` of type `StatusEnum` to the class.
* Added new properties `IsLastSegment` and `Optional` to the class.

## RatePlanUpdate

* Added support for ChargeRemovals in RatePlanUpdate.
* Added support for ChargeOverrides in RatePlanUpdate.

## RegenerateRevRecEventsResponse

* The constructor signature for RegenerateRevRecEventsResponse has changed. It now requires a `ProcessId`, `RequestId`, `Reasons`, and an optional `Success` parameter. Developers will need to update their instantiation of this class accordingly.
* Added a new parameter `RequestId` to the RegenerateRevRecEventsResponse class.
* Added a new parameter `Reasons` to the RegenerateRevRecEventsResponse class, which is a list of FailedReason objects.

## RegenerateTransactionObjectResponse

* The constructor signature has changed. The `Success` parameter is now optional and defaults to true. The `RequestId` and `Reasons` parameters have been added.
* Added `RequestId` property to track the request identifier.
* Added `Reasons` property to provide a list of `Reasons` for failure.

## RenewSubscriptionResponse

* Added new parameters: `ProcessId`, `RequestId`, and `Reasons` to the RenewSubscriptionResponse constructor.
* Introduced default value for `Success` parameter in the constructor, defaulting to true if not provided.

## ResumeSubscriptionResponse

* Added new parameters: `ProcessId`, `RequestId`, and `Reasons` to the ResumeSubscriptionResponse constructor.
* Introduced a default value for the `Success` parameter in the constructor, defaulting to true if not provided.

## RetryPaymentScheduleItemResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the RetryPaymentScheduleItemResponse class.

## StoredCredentialProfilesResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the StoredCredentialProfilesResponse class.

## SubmitDataLabelingJobResponse

* Constructor signature changed to include new parameters: `ProcessId`, `RequestId`, `Reasons`, and default value for `Success`.
* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the SubmitDataLabelingJobResponse class.

## SubscriptionRatePlan

* Added new property `ProductRatePlanType` to the SubscriptionRatePlan model.
* Added new property `OriginalRatePlanId` to the SubscriptionRatePlan model.

## SuspendSubscriptionResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the SuspendSubscriptionResponse class.
* Default value for the `Success` property is now set to true if not provided.

## UpdatePaymentRunRequest

* Added `AdvancedFilter` parameter to the UpdatePaymentRunRequest constructor, allowing for more refined filtering options.
* Introduced `AdvancedFilter` property with a maximum length of 1000 characters.

## UpdateSequenceSetResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the UpdateSequenceSetResponse class.

## UpdateSubscriptionResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the UpdateSubscriptionResponse class.
* Default value for the `Success` property is now set to true if not provided.

## UploadFileResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the UploadFileResponse class.

## UploadUsageFileResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the UploadUsageFileResponse class.

## UpsertCreateCommitmentInput

* The `PeriodAlignmentOption` property is now nullable, which may require updates to handle null values.
* The `AssociationRules` property has been removed, which may require updates to code that previously used this property.

## VerifyPaymentMethodResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the VerifyPaymentMethodResponse class.

## WriteOffInvoiceResponse

* Added new properties: `ProcessId`, `RequestId`, and `Reasons` to the WriteOffInvoiceResponse class.
