---
markdown:
  toc:
    hide: false
---

# Node.js client library 3.17.0 changelog

## ZuoraClient

* Removed method: get balanceTrackingApi
* Added method: get summaryStatementsApi

## BalanceTrackingApi

* The entire class BalanceTrackingApi has been removed.
* The method getCommitmentBalanceWithHttpInfo has been removed.
* The method getCommitmentBalance has been removed.

## CommitmentsApi

* Added a new import for GetCommitmentBalance model.
* Added a new method getCommitmentBalanceWithHttpInfo to retrieve the balance for a specific commitment, including optional parameters for pagination, date, and various headers.
* Added a new method getCommitmentBalance as a simplified version of getCommitmentBalanceWithHttpInfo, returning only the data.

## InvoicesApi

* Added new import for SplitInvoiceRequest from `../model/SplitInvoiceRequest`.
* Added new import for SplitInvoiceResponse from `../model/SplitInvoiceResponse`.
* Added new import for UnpostInvoiceResponse from `../model/UnpostInvoiceResponse`.
* Added new method splitInvoiceWithHttpInfo to split a draft invoice into multiple invoices by percentage.
* Added new method splitInvoice as a wrapper for splitInvoiceWithHttpInfo.
* Added new method unpostInvoiceWithHttpInfo to unpost an invoice that is in Posted status.
* Added new method unpostInvoice as a wrapper for unpostInvoiceWithHttpInfo.

## ObjectQueriesApi

* Added import for ExpandedInformationalTaxationItem.
* Added import for QueryInformationalTaxationItemsResponse.
* Added method queryInformationalTaxationItemByKeyWithHttpInfo to query InformationalTaxationItem by key with filters, expands, and sort capabilities.
* Added method queryInformationalTaxationItemByKey to query InformationalTaxationItem by key with filters, expands, and sort capabilities.
* Added method queryInformationalTaxationItemsWithHttpInfo to query InformationalTaxationItems with filters, expands, and sort capabilities.
* Added method queryInformationalTaxationItems to query InformationalTaxationItems with filters, expands, and sort capabilities.
* Expanded supported expands for Query OrderLineItem by key to include billto, soldtoinfo, owneraccount, invoiceowneraccount, and invoiceitems.
* Expanded supported expands for Query OrderLineItems to include billto, soldtoinfo, owneraccount, invoiceowneraccount, and invoiceitems.

## SummaryJournalEntriesApi

* Added new import: UpdateDraftSummaryJournalEntryRequest
* Added new import: UpdateJournalEntryWorkflowRequest
* Added new method: approveSummaryJournalEntryWithHttpInfo
* Added new method: approveSummaryJournalEntry
* Added new method: rejectSummaryJournalEntryWithHttpInfo
* Added new method: rejectSummaryJournalEntry
* Added new method: returnSummaryJournalEntryToDraftWithHttpInfo
* Added new method: returnSummaryJournalEntryToDraft
* Added new method: submitSummaryJournalEntryWithHttpInfo
* Added new method: submitSummaryJournalEntry
* Added new method: updateDraftSummaryJournalEntryWithHttpInfo
* Added new method: updateDraftSummaryJournalEntry

## index

* Removed CommitmentScheduleStatus model constructor.
* Removed CommitmentStatusInput model constructor.
* Removed BalanceTrackingApi service constructor.
* Added CancellationPolicy model constructor.
* Added CommitmentCancellationPolicy model constructor.
* Added CommitmentSettlementType model constructor.
* Added ExpandedInformationalTaxationItem model constructor.
* Added OrderState model constructor.
* Added QueryInformationalTaxationItemsResponse model constructor.
* Added SettlementTypeEnum model constructor.
* Added SplitInvoiceItem model constructor.
* Added SplitInvoiceRequest model constructor.
* Added SplitInvoiceResponse model constructor.
* Added UnpostInvoiceResponse model constructor.
* Added UpdateDraftSummaryJournalEntryRequest model constructor.
* Added UpdateJournalEntryWorkflowRequest model constructor.
* Added UpsertCancelCommitmentInput model constructor.
* Added SummaryStatementsApi service constructor.

## ActionType

* New enum value `cancel` added to the ActionType class.

## ApplyCreditMemoRequest

* Added a new field `applicationRule` to the ApplyCreditMemoRequest class.
* Added a new enum `ApplicationRuleEnum` with the value `ApplyCreditToSourceItemRule` to the ApplyCreditMemoRequest class.

## ChargeOverride

* Description: Added new field `rolloverPeriodLength` to the ChargeOverride class. This field is available only if the Prepaid with Drawdown feature is enabled., Field: rolloverPeriodLength, Type: Number
* Description: Added new field `chargeLevelMinCommitmentAmount` to the ChargeOverride class. This field is available only when the AdvancedConsumptionRating permission is enabled., Field: chargeLevelMinCommitmentAmount, Type: Number

## CommitmentScheduleOutput

* Added new import for ActionType.
* Added new import for CommitmentScheduleStatusOutput.
* Added new field `action` of type ActionType to CommitmentScheduleOutput.
* Added new field `status` of type CommitmentScheduleStatusOutput to CommitmentScheduleOutput.

## CommitmentScheduleStatus

* Removed class CommitmentScheduleStatus

## CommitmentScheduleStatusOutput

* New enum value `CancelledPendingEvaluation` added.
* Enum value `Canceled` is implicitly deprecated by the addition of `Cancelled`.

## CommitmentStatusEnum

* New enum value `Cancelled` added.
* New enum value `Evaluated` added.
* New enum value `CancelledPendingEvaluation` added.

## CommitmentStatusInput

* Removed class CommitmentStatusInput

## CommitmentStatusOutput

* New enum value `Evaluated` added.
* New enum value `Cancelled` added.
* New enum value `CancelledPendingEvaluation` added.

## Contact

* Description: Added new field `isSpecifiedInSubscription` to the Contact model.

## ContactResponse

* Description: Added new field `isSpecifiedInSubscription` to the ContactResponse class.
* Description: Added new field `isSpecifiedInSubscription` to the Contact class.

## CreateJournalEntryRequest

* Added a new field `transactionType` of type String to the CreateJournalEntryRequest class.

## CreateJournalEntryRequestItem

* Added new field `glString` of type String with a character limit of 350.
* Added new field `notes` of type String with a character limit of 1,000.

## DiscountPricingOverride

* Description: Added new field `originalListDiscountAmount` to the DiscountPricingOverride class. This field represents the original list discount amount from the product catalog for dynamic pricing and is applicable when the discount charge is a fixed-amount discount.
* Description: Added new field `originalListDiscountPercentage` to the DiscountPricingOverride class. This field represents the original list discount percentage from the product catalog for dynamic pricing and is applicable when the discount charge is a percentage discount.

## DiscountPricingUpdate

* Description: Added new field `originalListDiscountAmount` to the DiscountPricingUpdate class.
* Description: Added new field `originalListDiscountPercentage` to the DiscountPricingUpdate class.

## EndDateConditionProductRatePlanChargeRest

* Added a new enum value `OneTime` to the EndDateConditionProductRatePlanChargeRest class.

## ExpandedAccount

* Added a new field `integrationId__NS` of type String to the ExpandedAccount class.

## ExpandedCommitment

* Removed field `cancellationReason` from the class/model.
* Added new field `overlapDrawdownPolicy` to the class/model.

## ExpandedCommitmentAssociatedItem

* Added a new field `commitmentNumber` of type String to the class/model.

## ExpandedInvoice

* Added a new field `integrationId__NS` of type String to the ExpandedInvoice class.

## ExpandedOrderLineItem

* Added new import for ExpandedAccount.
* Added new import for ExpandedContact.
* Added new field `orderNumber` of type String.
* Added new field `billTo` of type ExpandedContact.
* Added new field `soldToInfo` of type ExpandedContact.
* Added new field `ownerAccount` of type ExpandedAccount.
* Added new field `invoiceOwnerAccount` of type ExpandedAccount.

## ExpandedPayment

* New field `integrationId__NS` added to the ExpandedPayment class.

## ExpandedPrepaymentDefinition

* Description: New field `specificFrequency` of type `Number` added to the class.

## GenerateBillingDocumentRequest

* Added a new field `commitmentKeys` to the GenerateBillingDocumentRequest class. This field is an array of strings and represents the IDs of the commitments to include in billing document generation.

## GetChargeOverride

* Added new import for CommitmentLevel.
* Added new field `rolloverPeriodLength` of type Number.
* Added new field `chargeLevelMinCommitmentAmount` of type Number.
* Added new field `commitmentLevel` of type CommitmentLevel.

## GetCommitmentOutput

* Description: Added new import for ActionType.
* Description: Added new import for CommitmentStatusOutput.
* Description: Added new field `action` of type ActionType to GetCommitmentOutput.
* Description: Added new field `status` of type CommitmentStatusOutput to GetCommitmentOutput.

## GetCommitmentResponse

* Added a new import for CancellationPolicy.
* Added a new field `cancellationPolicy` of type CancellationPolicy to the GetCommitmentResponse class.
* Added a new field `cancellationEffectiveDate` of type String to the GetCommitmentResponse class.

## GetEInvoiceMandateResponse

* Description: Added new field `configurableFileFormatNames` to the GetEInvoiceMandateResponse class.
* Description: Added new field `configurableDefaultFileFormatNames` to the GetEInvoiceMandateResponse class.

## GetSubscriptionRatePlanChargesWithAllSegments

* Field: `mrr`, Change: Type changed from String to Number
* Field: `prepaidQuantity`, Change: Type changed from String to Number
* Field: `prepaidTotalQuantity`, Change: Type changed from String to Number
* Field: `tcv`, Change: Type changed from String to Number
* Field: `deliverySchedule`, Change: Renamed to subscriptionChargeDeliverySchedule
* Field: `originalListDiscountAmount`, Description: Added new field for original list discount amount from the product catalog for dynamic pricing.
* Field: `originalListDiscountPercentage`, Description: Added new field for original list discount percentage from the product catalog for dynamic pricing.
* Field: `isChargeLevelMinCommit`, Description: Added new field to indicate whether the charge has charge-level minimum commitment.
* Field: `chargeLevelMinCommitmentAmount`, Description: Added new field for the minimum commitment amount at the charge level.
* Field: `commitmentLevel`, Description: Added new field of type CommitmentLevel.

## GetSubscriptionResponse

* Description: Field type change for `invoiceSeparately` from `String` to `Boolean`.
* Description: New field `totalNumberOfChargeSegments` of type `Number` added.

## OperationJobType

* New enum value `Split` added to OperationJobType.
* New enum value `Unpost` added to OperationJobType.

## Order

* Added a new import for OrderState.
* Added a new field `cancelReason` of type String to the Order class.
* Added a new field `state` of type OrderState to the Order class.

## OrderActionCreateSubscription

* Added new Boolean field `clearingExistingBillToContact` to clear the existing bill-to contact ID at the subscription level.
* Added new Boolean field `clearingExistingInvoiceTemplate` to clear the existing invoice template ID at the subscription level.
* Added new Boolean field `clearingExistingPaymentTerm` to clear the existing payment term at the subscription level.
* Added new Boolean field `clearingExistingSequenceSet` to clear the existing sequence set ID at the subscription level.
* Added new Boolean field `clearingExistingSoldToContact` to clear the existing sold-to contact ID at the subscription level.

## OrderSubscriptions

* Description: Field type change for `ramp` from `Object` to `module:model/RampResponse`.
* Description: New import added for `RampResponse`.
* Description: New validation added for the `ramp` field using `RampResponse.validateJSON`.

## PaymentMethodResponse

* Description: Added new field `networkTokenType` to the PaymentMethodResponse class.
* Description: Added new field `networkTokenProvider` to the PaymentMethodResponse class.
* Description: Added new field `networkTokenType` to the PaymentMethodResponseApplePay class.
* Description: Added new field `networkTokenProvider` to the PaymentMethodResponseApplePay class.
* Description: Added new enum `NetworkTokenTypeEnum` with values `MPAN` and `DPAN` to the PaymentMethodResponse class.
* Description: Added new enum `NetworkTokenProviderEnum` with value `ApplePay` to the PaymentMethodResponse class.

## PaymentMethodResponseApplePay

* Added new field `networkTokenType` to the PaymentMethodResponseApplePay class.
* Added new field `networkTokenProvider` to the PaymentMethodResponseApplePay class.
* Introduced new enum `NetworkTokenTypeEnum` with possible values `MPAN` and `DPAN`.
* Introduced new enum `NetworkTokenProviderEnum` with possible value `ApplePay`.

## PeriodBalanceType

* New enum value `CANCELLED_PENDING_EVALUATION` added to PeriodBalanceType.

## PeriodStatusResponse

* Enum value `CancelledPendingEvaluation` added to PeriodStatusResponse.
* Enum value `Canceled` is implicitly deprecated and replaced by `Cancelled`.

## PreviewExistingSubscriptionRequest

* Description: Added a new field `skipTax` to the PreviewExistingSubscriptionRequest class. This field is a Boolean and defaults to false. It allows skipping tax calculation during subscription preview to improve performance.

## PreviewOptions

* New field `validateScheduledOrders` added to the PreviewOptions class.

## PreviewOrderChargeOverride

* Description: Added new field `pricingAttributes` to the class `PreviewOrderChargeOverride`. This field is a container for pricing attributes used in dynamic pricing and requires the DynamicPricing permission to be accessible., Field_Type: Object.<String, Object>
* Description: Added new field `negotiatedPriceTable` to the class `PreviewOrderChargeOverride`. This field is an array of negotiated price table information and requires the NegotiatedPriceTable permission to be enabled., Field_Type: Array.<Object.<String, Object>>

## PreviewOrderChargeUpdate

* Description: Added new field `pricingAttributes` to the class. This field is a container for pricing attributes used in dynamic pricing and requires the DynamicPricing permission to be accessible., Type: Object.<String, Object>
* Description: Added new field `negotiatedPriceTable` to the class. This field is an array of negotiated price table information and requires the NegotiatedPriceTable permission to be enabled., Type: Array.<Object.<String, Object>>

## PreviewSubscriptionRequest

* Description: Added a new field `skipTax` to the PreviewSubscriptionRequest class. This field allows users to bypass tax calculation during subscription preview, which can improve performance for customers using external tax engines.

## RampResponse

* Added a new field `delete` of type Boolean to the RampResponse class.

## RatePlanChargeSegment

* description: Field `deliverySchedule` has been renamed to `subscriptionChargeDeliverySchedule`.
* description: New field `originalListDiscountAmount` added to RatePlanChargeSegment.
* description: New field `originalListDiscountPercentage` added to RatePlanChargeSegment.
* description: New field `isChargeLevelMinCommit` added to RatePlanChargeSegment.
* description: New field `chargeLevelMinCommitmentAmount` added to RatePlanChargeSegment.
* description: New field `commitmentLevel` added to RatePlanChargeSegment.
* description: New field `originalListDiscountAmount` added to RatePlanChargeSegmentInfo.
* description: New field `originalListDiscountPercentage` added to RatePlanChargeSegmentInfo.
* description: New field `isChargeLevelMinCommit` added to RatePlanChargeSegmentInfo.
* description: New field `chargeLevelMinCommitmentAmount` added to RatePlanChargeSegmentInfo.
* description: New field `commitmentLevel` added to RatePlanChargeSegmentInfo.

## RatePlanChargeSegmentInfo

* Change: Field name changed from `deliverySchedule` to `subscriptionChargeDeliverySchedule`.
* Change: Added new import `CommitmentLevel`.
* Change: Added new field `originalListDiscountAmount` of type `Number`.
* Change: Added new field `originalListDiscountPercentage` of type `Number`.
* Change: Added new field `isChargeLevelMinCommit` of type `Boolean`.
* Change: Added new field `chargeLevelMinCommitmentAmount` of type `Number`.
* Change: Added new field `commitmentLevel` of type `CommitmentLevel`.

## ReverseInvoiceResponse

* Description: Added a new field `creditMemos` to the ReverseInvoiceResponse class. This field is an array of ReverseInvoiceResponseCreditMemo objects and contains all credit memos created during the reverse operation.

## ScheduleStatusOutput

* New enum value `CancelledPendingEvaluation` added.
* Enum value `Canceled` is implicitly deprecated and replaced by `Cancelled`.

## UpdateJournalEntryItemRequest

* Added a new field `notes` to the UpdateJournalEntryItemRequest class. This field is a string with a character limit of 1,000.

## UpsertCommitmentInput

* Added import for CommitmentCancellationPolicy.
* Added import for UpsertCancelCommitmentInput.
* Updated constructor to handle UpsertCancelCommitmentInput.
* Added handling for UpsertCancelCommitmentInput in constructor logic.
* Updated error messages to include UpsertCancelCommitmentInput.
* Updated getActualInstance method to include UpsertCancelCommitmentInput.
* Updated setActualInstance method to include UpsertCancelCommitmentInput.
* Added new field `cancellationEffectiveDate` to UpsertCommitmentInput.
* Added new field `cancellationPolicyOverride` to UpsertCommitmentInput.
* Updated OneOf schema to include UpsertCancelCommitmentInput.

## UpsertCommitmentScheduleInput

* Removed field: CommitmentScheduleStatus from UpsertCommitmentScheduleInput

## UpsertUpdateCommitmentInput

* Removed field `status` of type CommitmentStatusInput from UpsertUpdateCommitmentInput class.

## UpsertUpdateCommitmentScheduleInput

* Removed field `status` of type CommitmentScheduleStatus
