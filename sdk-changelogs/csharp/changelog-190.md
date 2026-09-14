---
markdown:
  toc:
    hide: false
---

# C# client library 1.9.0 changelog

## BalanceTrackingApi

* The entire class BalanceTrackingApi and its associated interfaces and methods have been removed.

## CommitmentsApi

* Added new synchronous method GetCommitmentBalance to retrieve the balance for a specific commitment.
* Added new synchronous method GetCommitmentBalanceWithHttpInfo to retrieve the balance for a specific commitment with additional HTTP info.
* Added new asynchronous method GetCommitmentBalanceAsync to retrieve the balance for a specific commitment.
* Added new asynchronous method GetCommitmentBalanceWithHttpInfoAsync to retrieve the balance for a specific commitment with additional HTTP info.

## InvoicesApi

* Added method SplitInvoice to split an invoice.
* Added method SplitInvoiceWithHttpInfo to split an invoice with HTTP info.
* Added method UnpostInvoice to unpost an invoice.
* Added method UnpostInvoiceWithHttpInfo to unpost an invoice with HTTP info.
* Added asynchronous method SplitInvoiceAsync to split an invoice.
* Added asynchronous method SplitInvoiceWithHttpInfoAsync to split an invoice with HTTP info.
* Added asynchronous method UnpostInvoiceAsync to unpost an invoice.
* Added asynchronous method UnpostInvoiceWithHttpInfoAsync to unpost an invoice with HTTP info.

## ObjectQueriesApi

* Added new method QueryInformationalTaxationItemByKey with various optional parameters.
* Added new method QueryInformationalTaxationItemByKeyWithHttpInfo with various optional parameters.
* Added new method QueryInformationalTaxationItems with various optional parameters.
* Added new method QueryInformationalTaxationItemsWithHttpInfo with various optional parameters.
* Added new asynchronous method QueryInformationalTaxationItemByKeyAsync with various optional parameters.
* Added new asynchronous method QueryInformationalTaxationItemByKeyWithHttpInfoAsync with various optional parameters.
* Added new asynchronous method QueryInformationalTaxationItemsAsync with various optional parameters.
* Added new asynchronous method QueryInformationalTaxationItemsWithHttpInfoAsync with various optional parameters.

## SummaryJournalEntriesApi

* Added method ApproveSummaryJournalEntry to approve a summary journal entry.
* Added method ApproveSummaryJournalEntryWithHttpInfo to approve a summary journal entry with HTTP info.
* Added method RejectSummaryJournalEntry to reject a summary journal entry.
* Added method RejectSummaryJournalEntryWithHttpInfo to reject a summary journal entry with HTTP info.
* Added method ReturnSummaryJournalEntryToDraft to return a summary journal entry to draft.
* Added method ReturnSummaryJournalEntryToDraftWithHttpInfo to return a summary journal entry to draft with HTTP info.
* Added method SubmitSummaryJournalEntry to submit a summary journal entry.
* Added method SubmitSummaryJournalEntryWithHttpInfo to submit a summary journal entry with HTTP info.
* Added method UpdateDraftSummaryJournalEntry to update a draft summary journal entry.
* Added method UpdateDraftSummaryJournalEntryWithHttpInfo to update a draft summary journal entry with HTTP info.
* Added asynchronous method ApproveSummaryJournalEntryAsync to approve a summary journal entry.
* Added asynchronous method ApproveSummaryJournalEntryWithHttpInfoAsync to approve a summary journal entry with HTTP info.
* Added asynchronous method RejectSummaryJournalEntryAsync to reject a summary journal entry.
* Added asynchronous method RejectSummaryJournalEntryWithHttpInfoAsync to reject a summary journal entry with HTTP info.
* Added asynchronous method ReturnSummaryJournalEntryToDraftAsync to return a summary journal entry to draft.
* Added asynchronous method ReturnSummaryJournalEntryToDraftWithHttpInfoAsync to return a summary journal entry to draft with HTTP info.
* Added asynchronous method SubmitSummaryJournalEntryAsync to submit a summary journal entry.
* Added asynchronous method SubmitSummaryJournalEntryWithHttpInfoAsync to submit a summary journal entry with HTTP info.
* Added asynchronous method UpdateDraftSummaryJournalEntryAsync to update a draft summary journal entry.
* Added asynchronous method UpdateDraftSummaryJournalEntryWithHttpInfoAsync to update a draft summary journal entry with HTTP info.

## ZuoraClient

* Removed method: public virtual IBalanceTrackingApi BalanceTrackingApi
* Added method: public virtual ISummaryStatementsApi SummaryStatementsApi

## ActionType

* New enum value `Cancel` added with value 3.

## ApplyCreditMemoRequest

* Constructor parameter change: Added `ApplicationRuleEnum? applicationRule` as a new optional parameter to the constructor.
* Added new enum `ApplicationRuleEnum` with value `ApplyCreditToSourceItemRule`.
* Added new property `ApplicationRule` of type `ApplicationRuleEnum?` to the class `ApplyCreditMemoRequest`.

## ChargeOverride

* Added new constructor parameters: rolloverPeriodLength, chargeLevelMinCommitmentAmount.
* Added new properties: RolloverPeriodLength, ChargeLevelMinCommitmentAmount.

## CommitmentScheduleOutput

* Added new property `Action` of type `ActionType?` to the CommitmentScheduleOutput class.
* Added new property `Status` of type `CommitmentScheduleStatusOutput?` to the CommitmentScheduleOutput class.
* Added new constructor parameters `action` of type `ActionType?` and `status` of type `CommitmentScheduleStatusOutput?` to the CommitmentScheduleOutput constructor.

## CommitmentScheduleStatus

* Removed class: CommitmentScheduleStatus

## CommitmentScheduleStatusOutput

* Enum value `Cancelled` added with value: Cancelled
* Enum value `Canceled` added with value: Canceled
* Enum value `CancelledPendingEvaluation` added with value: CancelledPendingEvaluation
* Enum value `Canceled` for value: Canceled is implicitly deprecated by the addition of `Cancelled` and `CancelledPendingEvaluation`

## CommitmentStatusEnum

* Enum value `Evaluated` added with value: Evaluated
* Enum value `CancelledPendingEvaluation` added with value: CancelledPendingEvaluation

## CommitmentStatusInput

* The entire class `CommitmentStatusInput` has been removed.

## CommitmentStatusOutput

* Enum value `Evaluated` added with value 2.
* Enum value `Cancelled` added with value 3.
* Enum value `CancelledPendingEvaluation` added with value 5.

## Contact

* Added a new parameter `isSpecifiedInSubscription` to the Contact constructor.
* Added a new property `IsSpecifiedInSubscription` to the Contact class.

## ContactResponse

* Added a new parameter `isSpecifiedInSubscription` to the constructor of the ContactResponse class.
* Added a new property `IsSpecifiedInSubscription` to the ContactResponse class.

## CreateJournalEntryRequest

* Constructor parameter change: Added `transactionType` as a new parameter in the constructor.
* Added new field `TransactionType` to the CreateJournalEntryRequest class.

## CreateJournalEntryRequestItem

* Constructor parameter changes: Added new parameters `glString` and `notes` to the constructor.
* New fields added: `GlString` and `Notes` with corresponding DataMember attributes.
* New validation rules added for `GlString` and `Notes` to enforce maximum length constraints.

## DiscountPricingOverride

* Added new constructor parameters: originalListDiscountAmount, originalListDiscountPercentage.
* Added new properties: OriginalListDiscountAmount, OriginalListDiscountPercentage.

## DiscountPricingUpdate

* Constructor parameter changes: Added parameters `originalListDiscountAmount` and `originalListDiscountPercentage` to the constructor.
* New fields added: `OriginalListDiscountAmount` and `OriginalListDiscountPercentage`.
* New constructor parameters: `originalListDiscountAmount` and `originalListDiscountPercentage`.

## EndDateConditionProductRatePlanChargeRest

* New enum value `OneTime` added to EndDateConditionProductRatePlanChargeRest.

## ExpandedAccount

* Added a new parameter `integrationIdNS` to the constructor of the ExpandedAccount class.
* Added a new property `IntegrationIdNS` to the ExpandedAccount class.

## ExpandedCommitment

* Removed field: `CancellationReason`
* Removed constructor parameter: cancellationReason
* Added new field: OverlapDrawdownPolicy
* Added new constructor parameter: overlapDrawdownPolicy

## ExpandedCommitmentAssociatedItem

* Added a new parameter `commitmentNumber` to the constructor of the class ExpandedCommitmentAssociatedItem.
* Added a new property `CommitmentNumber` to the class ExpandedCommitmentAssociatedItem.

## ExpandedInvoice

* Added a new parameter `integrationIdNS` to the constructor of the ExpandedInvoice class.
* Added a new property `IntegrationIdNS` to the ExpandedInvoice class.

## ExpandedOrderLineItem

* Added new constructor parameters: orderNumber, billTo, soldToInfo, ownerAccount, invoiceOwnerAccount.
* Added new fields: OrderNumber, BillTo, SoldToInfo, OwnerAccount, InvoiceOwnerAccount.

## ExpandedPayment

* Added a new parameter `integrationIdNS` to the constructor of the ExpandedPayment class.
* Added a new property `IntegrationIdNS` to the ExpandedPayment class.

## ExpandedPrepaymentDefinition

* Constructor parameter added: specificFrequency of type int?
* New field added: `SpecificFrequency` of type int?

## GenerateBillingDocumentRequest

* Added a new parameter `commitmentKeys` to the constructor of GenerateBillingDocumentRequest.
* Added a new property `CommitmentKeys` to the GenerateBillingDocumentRequest class.

## GetChargeOverride

* Added new field `CommitmentLevel` to the class.
* Added new field `RolloverPeriodLength` to the class.
* Added new field `ChargeLevelMinCommitmentAmount` to the class.
* Added new constructor parameters: `rolloverPeriodLength`, `chargeLevelMinCommitmentAmount`, `commitmentLevel`.

## GetCommitmentOutput

* Added new property `Action` of type ActionType? to the GetCommitmentOutput class.
* Added new property `Status` of type CommitmentStatusOutput? to the GetCommitmentOutput class.
* Added new constructor parameters `action` of type ActionType? and `status` of type CommitmentStatusOutput? to the GetCommitmentOutput constructor.

## GetCommitmentResponse

* Added new parameter `cancellationPolicy` to the constructor.
* Added new parameter `cancellationEffectiveDate` to the constructor.
* Added new property `CancellationPolicy` to the class.
* Added new property `CancellationEffectiveDate` to the class.

## GetEInvoiceMandateResponse

* Constructor parameter changes: Added parameters `configurableFileFormatNames` and `configurableDefaultFileFormatNames` to the constructor.
* Added new field `ConfigurableFileFormatNames` to the class.
* Added new field `ConfigurableDefaultFileFormatNames` to the class.

## GetSubscriptionRatePlanChargesWithAllSegments

* Description: Field type change for `Mrr` from `string` to `decimal?`.
* Description: Field type change for `PrepaidQuantity` from `string` to `decimal?`.
* Description: Field type change for `PrepaidTotalQuantity` from `string` to `decimal?`.
* Description: Field type change for `Tcv` from `string` to `decimal?`.
* Description: Constructor parameter change: added `isChargeLevelMinCommit`, `chargeLevelMinCommitmentAmount`, and `commitmentLevel`.
* Description: Field name change from `DeliverySchedule` to `SubscriptionChargeDeliverySchedule`.
* Description: Added new field `CommitmentLevel` with type `CommitmentLevel?`.
* Description: Added new field `OriginalListDiscountAmount` with type `decimal?`.
* Description: Added new field `OriginalListDiscountPercentage` with type `decimal?`.
* Description: Added new field `IsChargeLevelMinCommit` with type `bool?`.
* Description: Added new field `ChargeLevelMinCommitmentAmount` with type `decimal?`.

## GetSubscriptionResponse

* Field `InvoiceSeparately` type changed from `string` to `bool?`
* Added new parameter `totalNumberOfChargeSegments` to the constructor of `GetSubscriptionResponse`.
* Added new field `TotalNumberOfChargeSegments` to the `GetSubscriptionResponse` class.

## OperationJobType

* Enum value `Split` added with value 5.
* Enum value `Unpost` added with value 6.

## Order

* Added new nullable property `State` of type `OrderState?` to the Order class.
* Added new property `CancelReason` of type `string` to the Order class.
* Added new constructor parameters `cancelReason` and `state` to the Order class constructor.

## OrderActionCreateSubscription

* Added new constructor parameters: clearingExistingBillToContact, clearingExistingInvoiceTemplate, clearingExistingPaymentTerm, clearingExistingSequenceSet, clearingExistingSoldToContact.
* Added new properties: ClearingExistingBillToContact, ClearingExistingInvoiceTemplate, ClearingExistingPaymentTerm, ClearingExistingSequenceSet, ClearingExistingSoldToContact.

## OrderSubscriptions

* Description: Field type change for `ramp` from `Object` to `RampResponse`.
* Description: Constructor parameter type change for `ramp` from `Object` to `RampResponse`.

## PaymentMethodResponse

* Added new enum NetworkTokenTypeEnum with values MPAN and DPAN.
* Added new property NetworkTokenType of type NetworkTokenTypeEnum? to the PaymentMethodResponse class.
* Added new enum NetworkTokenProviderEnum with value ApplePay.
* Added new property NetworkTokenProvider of type NetworkTokenProviderEnum? to the PaymentMethodResponse class.
* Added new constructor parameters networkTokenType and networkTokenProvider to the PaymentMethodResponse constructor.

## PaymentMethodResponseApplePay

* Constructor parameter changes: Added parameters `networkTokenType` and `networkTokenProvider` to the constructor.
* Added new enum `NetworkTokenTypeEnum` with values `MPAN` and `DPAN`.
* Added new property `NetworkTokenType` of type `NetworkTokenTypeEnum?` to the class.
* Added new enum `NetworkTokenProviderEnum` with value `ApplePay`.
* Added new property `NetworkTokenProvider` of type `NetworkTokenProviderEnum?` to the class.

## PeriodBalanceType

* Enum value `CANCELLEDPENDINGEVALUATION` added with value `CANCELLED_PENDING_EVALUATION`.

## PeriodStatusResponse

* Enum value `CancelledPendingEvaluation` added to the enum.
* Enum value `Canceled` implicitly deprecated and replaced by `Cancelled`.

## PreviewExistingSubscriptionRequest

* Added a new optional boolean parameter `skipTax` to the constructor of the PreviewExistingSubscriptionRequest class.
* Added a new nullable boolean property `SkipTax` to the PreviewExistingSubscriptionRequest class.

## PreviewOptions

* Added a new constructor parameter `validateScheduledOrders` with a default value of true.
* Added a new property `ValidateScheduledOrders` to the class.

## PreviewOrderChargeOverride

* Added new constructor parameters: pricingAttributes and negotiatedPriceTable.
* Added new property: `PricingAttributes` of type `Dictionary<string, Object>`.
* Added new property: `NegotiatedPriceTable` of type `List<Dictionary<string, Object>>`.

## PreviewOrderChargeUpdate

* Added new constructor parameters: pricingAttributes and negotiatedPriceTable.
* Added new property: `PricingAttributes` of type `Dictionary<string, Object>`.
* Added new property: `NegotiatedPriceTable` of type `List<Dictionary<string, Object>>`.

## PreviewSubscriptionRequest

* Description: Added a new optional parameter `skipTax` to the constructor of PreviewSubscriptionRequest with a default value of false.
* Description: Added a new property `SkipTax` to the PreviewSubscriptionRequest class.

## ProductRatePlan

* Field type change from `List<ProductRatePlanCharge>` to `List<ProductRatePlanChargeRest>` in the constructor parameter `productRatePlanCharges`.
* Field type change from `List<ProductRatePlanCharge>` to `List<ProductRatePlanChargeRest>` in the property `ProductRatePlanCharges`.

## RampResponse

* Constructor parameter change: Added `delete` parameter to the RampResponse constructor.
* New field added: `Delete` of type `bool?` to the RampResponse class.

## RatePlanChargeSegment

* Renamed constructor parameter `deliverySchedule` to `subscriptionChargeDeliverySchedule`.
* Renamed property `DeliverySchedule` to `SubscriptionChargeDeliverySchedule`.
* Added new property `CommitmentLevel` to the class.
* Added new property `OriginalListDiscountAmount` to the class.
* Added new property `OriginalListDiscountPercentage` to the class.
* Added new property `IsChargeLevelMinCommit` to the class.
* Added new property `ChargeLevelMinCommitmentAmount` to the class.
* Added new constructor parameters: `originalListDiscountAmount`, `originalListDiscountPercentage`, `isChargeLevelMinCommit`, `chargeLevelMinCommitmentAmount`, `commitmentLevel`.

## RatePlanChargeSegmentInfo

* Constructor parameter change: `deliverySchedule` parameter renamed to `subscriptionChargeDeliverySchedule`.
* Field name change: `DeliverySchedule` renamed to `SubscriptionChargeDeliverySchedule`.
* New field added: CommitmentLevel.
* New field added: OriginalListDiscountAmount.
* New field added: OriginalListDiscountPercentage.
* New field added: IsChargeLevelMinCommit.
* New field added: ChargeLevelMinCommitmentAmount.
* New constructor parameters added: isChargeLevelMinCommit, chargeLevelMinCommitmentAmount, commitmentLevel.

## ReverseInvoiceResponse

* Added a new constructor parameter `creditMemos` of type `List<ReverseInvoiceResponseCreditMemo>`.
* Added a new property `CreditMemos` of type `List<ReverseInvoiceResponseCreditMemo>` to the class.

## ScheduleStatusOutput

* Enum value `CancelledPendingEvaluation` added to the ScheduleStatusOutput enum.
* Enum value `Canceled` is implicitly deprecated and replaced by `Cancelled`.

## UpdateJournalEntryItemRequest

* Constructor parameter change: Added `notes` as a new parameter to the constructor.
* Added new field `Notes` to the UpdateJournalEntryItemRequest class.
* Added validation for `Notes` field with a maximum length of 1000 characters.

## UpsertCommitmentInput

* Updated the exception message in the setter of the ActualInstance property to include UpsertCancelCommitmentInput as a valid type.
* Added a new constructor to the UpsertCommitmentInput class that accepts an instance of UpsertCancelCommitmentInput.
* Added a new method GetUpsertCancelCommitmentInput() to retrieve the actual instance of UpsertCancelCommitmentInput.
* Updated the deserialization logic to handle UpsertCancelCommitmentInput, including adding it to the matched types list.

## UpsertUpdateCommitmentInput

* Removed field `CommitmentStatusInput? Status` from the class.
* Removed `status` parameter from the constructor of `UpsertUpdateCommitmentInput`.

## UpsertUpdateCommitmentScheduleInput

* Removed field `Status` from the class.
* Removed `status` parameter from the constructor of UpsertUpdateCommitmentScheduleInput.

## ZuoraSDKproj.FileListAbsolute

* Added new files to the project: ZuoraSDK.xml, ZuoraSDK.depson, ZuoraSDK.dll, ZuoraSDKproj.AssemblyReference.cache, ZuoraSDK.GeneratedMSBuildEditorConfig.editorconfig, ZuoraSDKproj.CoreCompileInputs.cache, ZuoraSDK.sourcelinkon, ZuoraSDK.dll (in obj directory), refint/ZuoraSDK.dll, ref/ZuoraSDK.dll.
