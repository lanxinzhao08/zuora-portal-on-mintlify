---
markdown:
  toc:
    hide: false
---

# Java client library 3.17.0 changelog

## ZuoraClient

* Removed method: public BalanceTrackingApi balanceTrackingApi()
* Added method: public SummaryStatementsApi summaryStatementsApi()

## BalanceTrackingApi

* The entire class BalanceTrackingApi has been removed, including all its methods and inner classes.

## CommitmentsApi

* Added a new method getCommitmentBalanceCall to initiate a call to get the balance for a specific commitment.
* Added a new method getCommitmentBalanceValidateBeforeCall to validate parameters before calling getCommitmentBalance.
* Added a new method getCommitmentBalance to get the balance for a specific commitment.
* Added a new method getCommitmentBalanceWithHttpInfo to get the balance for a specific commitment with HTTP info.
* Added a new method getCommitmentBalanceAsync to execute the getCommitmentBalance request asynchronously.
* Added a new inner class GetCommitmentBalanceApi to build and execute getCommitmentBalance requests.
* Added a new method getCommitmentBalanceApi to create an instance of GetCommitmentBalanceApi.

## InvoicesApi

* Added new class SplitInvoiceApi with methods for setting headers and executing split invoice requests.
* Added new method splitInvoiceApi to create an instance of SplitInvoiceApi.
* Added new class UnpostInvoiceApi with methods for setting headers and executing unpost invoice requests.
* Added new method unpostInvoiceApi to create an instance of UnpostInvoiceApi.
* Added new method splitInvoice to split a draft invoice into multiple invoices by percentage.
* Added new method unpostInvoice to unpost an invoice that is in Posted status.

## ObjectQueriesApi

* Added new import for com.zuora.model.ExpandedInformationalTaxationItem.
* Added new import for com.zuora.model.QueryInformationalTaxationItemsResponse.
* Added new method queryInformationalTaxationItemByKeyCall to query InformationalTaxationItem by key.
* Added new method queryInformationalTaxationItemByKeyValidateBeforeCall for validation before querying InformationalTaxationItem by key.
* Added new method queryInformationalTaxationItemByKey to execute the query for InformationalTaxationItem by key.
* Added new method queryInformationalTaxationItemByKeyWithHttpInfo to execute the query for InformationalTaxationItem by key with HTTP info.
* Added new method queryInformationalTaxationItemByKeyAsync for asynchronous execution of the query for InformationalTaxationItem by key.
* Added new class QueryInformationalTaxationItemByKeyApi for building and executing the query for InformationalTaxationItem by key.
* Added new method queryInformationalTaxationItemByKeyApi to return an instance of QueryInformationalTaxationItemByKeyApi.
* Added new method queryInformationalTaxationItemsCall to query InformationalTaxationItems.
* Added new method queryInformationalTaxationItemsValidateBeforeCall for validation before querying InformationalTaxationItems.
* Added new method queryInformationalTaxationItems to execute the query for InformationalTaxationItems.
* Added new method queryInformationalTaxationItemsWithHttpInfo to execute the query for InformationalTaxationItems with HTTP info.
* Added new method queryInformationalTaxationItemsAsync for asynchronous execution of the query for InformationalTaxationItems.
* Added new class QueryInformationalTaxationItemsApi for building and executing the query for InformationalTaxationItems.
* Added new method queryInformationalTaxationItemsApi to return an instance of QueryInformationalTaxationItemsApi.
* Expanded supported expands for Query OrderLineItem by key to include: billto, soldtoinfo, owneraccount, invoiceowneraccount, invoiceitems.
* Expanded supported expands for Query OrderLineItems to include: billto, soldtoinfo, owneraccount, invoiceowneraccount, invoiceitems.

## SummaryJournalEntriesApi

* Added new class UpdateDraftSummaryJournalEntryRequest.
* Added new class UpdateJournalEntryWorkflowRequest.
* Added new method approveSummaryJournalEntryCall.
* Added new method approveSummaryJournalEntryValidateBeforeCall.
* Added new method approveSummaryJournalEntry.
* Added new method approveSummaryJournalEntryWithHttpInfo.
* Added new method approveSummaryJournalEntryAsync.
* Added new class ApproveSummaryJournalEntryApi.
* Added new method rejectSummaryJournalEntryCall.
* Added new method rejectSummaryJournalEntryValidateBeforeCall.
* Added new method rejectSummaryJournalEntry.
* Added new method rejectSummaryJournalEntryWithHttpInfo.
* Added new method rejectSummaryJournalEntryAsync.
* Added new class RejectSummaryJournalEntryApi.
* Added new method returnSummaryJournalEntryToDraftCall.
* Added new method returnSummaryJournalEntryToDraftValidateBeforeCall.
* Added new method returnSummaryJournalEntryToDraft.
* Added new method returnSummaryJournalEntryToDraftWithHttpInfo.
* Added new method returnSummaryJournalEntryToDraftAsync.
* Added new class ReturnSummaryJournalEntryToDraftApi.
* Added new method submitSummaryJournalEntryCall.
* Added new method submitSummaryJournalEntryValidateBeforeCall.
* Added new method submitSummaryJournalEntry.
* Added new method submitSummaryJournalEntryWithHttpInfo.
* Added new method submitSummaryJournalEntryAsync.
* Added new class SubmitSummaryJournalEntryApi.
* Added new method updateDraftSummaryJournalEntryCall.
* Added new method updateDraftSummaryJournalEntryValidateBeforeCall.
* Added new method updateDraftSummaryJournalEntry.
* Added new method updateDraftSummaryJournalEntryWithHttpInfo.
* Added new method updateDraftSummaryJournalEntryAsync.
* Added new class UpdateDraftSummaryJournalEntryApi.

## ActionType

* New enum value `CANCEL` added to ActionType.

## ApplyCreditMemoRequest

* Changed the nullability of the `applicationRule` field from non-existent to @Nullable.
* Added a new enum ApplicationRuleEnum with a value `ApplyCreditToSourceItemRule`.
* Added a new field `applicationRule` of type ApplicationRuleEnum to the ApplyCreditMemoRequest class.

## ChargeOverride

* Field `rolloverPeriodLength` added with @Nullable annotation, indicating it is optional.
* Field `chargeLevelMinCommitmentAmount` added with @Nullable annotation, indicating it is optional.
* Added new field `rolloverPeriodLength` of type Integer.
* Added new field `chargeLevelMinCommitmentAmount` of type BigDecimal.

## CommitmentScheduleOutput

* Added new field `action` of type ActionType to the CommitmentScheduleOutput class.
* Added new field `status` of type CommitmentScheduleStatusOutput to the CommitmentScheduleOutput class.

## CommitmentScheduleStatus

* The class CommitmentScheduleStatus has been removed.

## CommitmentScheduleStatusOutput

* ACTIVE enum value added
* CANCELLED enum value added
* CANCELLEDPENDINGEVALUATION enum value added

## CommitmentStatusEnum

* New enum value `CANCELLED` added.
* New enum value `EVALUATED` added.
* New enum value `CANCELLEDPENDINGEVALUATION` added.

## CommitmentStatusInput

* Removed class CommitmentStatusInput

## CommitmentStatusOutput

* EVALUATED enum value added.
* CANCELLED enum value added.
* CANCELLEDPENDINGEVALUATION enum value added.

## Contact

* Field `isSpecifiedInSubscription` added with @Nullable annotation, indicating a change in nullability.
* New field `isSpecifiedInSubscription` added to the Contact class.

## ContactResponse

* Field `isSpecifiedInSubscription` changed from non-existent to @Nullable.
* New field `isSpecifiedInSubscription` added to the ContactResponse class.

## CreateJournalEntryRequest

* Field `transactionType` is marked with @Nullable, indicating it is optional.
* Added new field `transactionType` to the CreateJournalEntryRequest class.
* Added new method `transactionType(String transactionType)` to set the `transactionType` field.
* Added new method `getTransactionType()` to retrieve the `transactionType` field.
* Added new method `setTransactionType(String transactionType)` to set the `transactionType` field.

## CreateJournalEntryRequestItem

* Added new field `glString` with a character limit of 350.
* Added new field `notes` with a character limit of 1,000.

## DiscountPricingOverride

* Field `originalListDiscountAmount` added with @Nullable annotation, indicating a change in nullability.
* Field `originalListDiscountPercentage` added with @Nullable annotation, indicating a change in nullability.
* New field `originalListDiscountAmount` added to the class.
* New field `originalListDiscountPercentage` added to the class.

## DiscountPricingUpdate

* Field `originalListDiscountAmount` added with @Nullable annotation, indicating a change in nullability.
* Field `originalListDiscountPercentage` added with @Nullable annotation, indicating a change in nullability.
* New field `originalListDiscountAmount` of type BigDecimal added.
* New field `originalListDiscountPercentage` of type BigDecimal added.

## EndDateConditionProductRatePlanChargeRest

* New enum value `ONETIME` added to EndDateConditionProductRatePlanChargeRest.

## ExpandedAccount

* Changed the nullability of the `integrationIdNS` field by adding @Nullable annotation.
* Added new field `integrationIdNS` with serialization name `integrationId__NS` to the ExpandedAccount class.
* Added new method `integrationIdNS(String integrationIdNS)` to set the `integrationIdNS` field in a fluent style.
* Added new method `getIntegrationIdNS()` to retrieve the value of `integrationIdNS`.
* Added new method `setIntegrationIdNS(String integrationIdNS)` to set the value of `integrationIdNS`.

## ExpandedCommitment

* Removed field `cancellationReason` from the ExpandedCommitment class.
* Added new field `overlapDrawdownPolicy` to the ExpandedCommitment class.

## ExpandedCommitmentAssociatedItem

* Field `commitmentNumber` changed from non-existent to @Nullable, indicating a change in nullability.
* Added new field `commitmentNumber` with associated getter, setter, and builder method.

## ExpandedInvoice

* Added new field `integrationIdNS` with serialization name `integrationId__NS`.
* Added new method `integrationIdNS(String integrationIdNS)` to set the `integrationIdNS` field.
* Added new method `getIntegrationIdNS()` to retrieve the `integrationIdNS` field.
* Added new method `setIntegrationIdNS(String integrationIdNS)` to set the `integrationIdNS` field.
* Updated `equals` method to include `integrationIdNS` in comparison.
* Updated `hashCode` method to include `integrationIdNS`.
* Updated `toString` method to include `integrationIdNS`.
* Updated JSON validation to include `integrationId__NS` as a primitive type.

## ExpandedOrderLineItem

* Changed nullability of field `orderNumber` from non-existent to @Nullable.
* Added new field `orderNumber` with getter, setter, and fluent method.
* Added new field `billTo` of type ExpandedContact with getter, setter, and fluent method.
* Added new field `soldToInfo` of type ExpandedContact with getter, setter, and fluent method.
* Added new field `ownerAccount` of type ExpandedAccount with getter, setter, and fluent method.
* Added new field `invoiceOwnerAccount` of type ExpandedAccount with getter, setter, and fluent method.

## ExpandedPayment

* Field `integrationIdNS` changed from non-existent to optional with @Nullable annotation.
* Added new field `integrationIdNS` with serialization name `integrationId__NS`.
* Added new method `integrationIdNS(String integrationIdNS)` for setting the `integrationIdNS` field.
* Added new method `getIntegrationIdNS()` for retrieving the `integrationIdNS` field.
* Added new method `setIntegrationIdNS(String integrationIdNS)` for setting the `integrationIdNS` field.
* Updated `equals` method to include `integrationIdNS`.
* Updated `hashCode` method to include `integrationIdNS`.
* Updated `toString` method to include `integrationIdNS`.
* Updated `openapiFields` to include `integrationId__NS`.
* Added validation for `integrationId__NS` to ensure it is a primitive type in JSON.

## ExpandedPrepaymentDefinition

* Field `specificFrequency` added with @Nullable annotation, indicating a change in nullability.
* New field `specificFrequency` of type Integer added to the class.
* New method `specificFrequency(Integer specificFrequency)` added to set the `specificFrequency` field.
* New method `getSpecificFrequency()` added to retrieve the `specificFrequency` field.
* New method `setSpecificFrequency(Integer specificFrequency)` added to set the `specificFrequency` field.

## GenerateBillingDocumentRequest

* Added a new field `commitmentKeys` of type `List<String>` to the GenerateBillingDocumentRequest class.
* Added a new method `commitmentKeys(List<String> commitmentKeys)` to set the `commitmentKeys` field.
* Added a new method `addCommitmentKeysItem(String commitmentKeysItem)` to add an item to the `commitmentKeys` list.
* Added a new method `getCommitmentKeys()` to retrieve the `commitmentKeys` field.
* Added a new method `setCommitmentKeys(List<String> commitmentKeys)` to set the `commitmentKeys` field.

## GetChargeOverride

* Added new field `rolloverPeriodLength` of type Integer with @Nullable annotation.
* Added new field `chargeLevelMinCommitmentAmount` of type BigDecimal with @Nullable annotation.
* Added new field `commitmentLevel` of type CommitmentLevel with @Nullable annotation.
* Added new method `rolloverPeriodLength(Integer rolloverPeriodLength)` to set the `rolloverPeriodLength` field.
* Added new method `chargeLevelMinCommitmentAmount(BigDecimal chargeLevelMinCommitmentAmount)` to set the `chargeLevelMinCommitmentAmount` field.
* Added new method `commitmentLevel(CommitmentLevel commitmentLevel)` to set the `commitmentLevel` field.
* Added validation for the optional field `commitmentLevel` in JSON object.

## GetCommitmentOutput

* Added new field `action` of type ActionType to the GetCommitmentOutput class.
* Added new field `status` of type CommitmentStatusOutput to the GetCommitmentOutput class.

## GetCommitmentResponse

* Field `cancellationPolicy` added with @Nullable annotation, indicating a change in the class structure.
* Field `cancellationEffectiveDate` added with @Nullable annotation, indicating a change in the class structure.
* Added new field `cancellationPolicy` of type `CancellationPolicy`.
* Added new field `cancellationEffectiveDate` of type `LocalDate`.
* Added new method `cancellationPolicy(CancellationPolicy cancellationPolicy)` to set the `cancellationPolicy` field.
* Added new method `getCancellationPolicy()` to retrieve the `cancellationPolicy` field.
* Added new method `setCancellationPolicy(CancellationPolicy cancellationPolicy)` to set the `cancellationPolicy` field.
* Added new method `cancellationEffectiveDate(LocalDate cancellationEffectiveDate)` to set the `cancellationEffectiveDate` field.
* Added new method `getCancellationEffectiveDate()` to retrieve the `cancellationEffectiveDate` field.
* Added new method `setCancellationEffectiveDate(LocalDate cancellationEffectiveDate)` to set the `cancellationEffectiveDate` field.

## GetEInvoiceMandateResponse

* Added new field `configurableFileFormatNames` of type `List<String>` with associated methods.
* Added new field `configurableDefaultFileFormatNames` of type `List<String>` with associated methods.

## GetSubscriptionRatePlanChargesWithAllSegments

* Change: Field type change, Details: Field `mrr` changed from String to BigDecimal
* Change: Field type change, Details: Field `prepaidQuantity` changed from String to BigDecimal
* Change: Field type change, Details: Field `prepaidTotalQuantity` changed from String to BigDecimal
* Change: Field type change, Details: Field `tcv` changed from String to BigDecimal
* Change: Field nullability change, Details: Field `deliverySchedule` renamed to `subscriptionChargeDeliverySchedule`
* Change: New field added, Details: Field `originalListDiscountAmount` of type BigDecimal added
* Change: New field added, Details: Field `originalListDiscountPercentage` of type BigDecimal added
* Change: New field added, Details: Field `isChargeLevelMinCommit` of type Boolean added
* Change: New field added, Details: Field `chargeLevelMinCommitmentAmount` of type BigDecimal added
* Change: New field added, Details: Field `commitmentLevel` of type CommitmentLevel added

## GetSubscriptionResponse

* Field `invoiceSeparately` type changed from String to Boolean.
* Added new field `totalNumberOfChargeSegments` of type Integer.

## Invoice

* Added @JsonInclude annotation with Include.NON_NULL to the Invoice class.

## OperationJobType

* New enum value `SPLIT` added to OperationJobType.
* New enum value `UNPOST` added to OperationJobType.

## Order

* Added new field `cancelReason` with associated getter, setter, and validation logic.
* Added new field `state` of type `OrderState` with associated getter, setter, and validation logic.

## OrderActionCreateSubscription

* Field `clearingExistingBillToContact` added with @Nullable annotation.
* Field `clearingExistingInvoiceTemplate` added with @Nullable annotation.
* Field `clearingExistingPaymentTerm` added with @Nullable annotation.
* Field `clearingExistingSequenceSet` added with @Nullable annotation.
* Field `clearingExistingSoldToContact` added with @Nullable annotation.
* Added new field `clearingExistingBillToContact` of type Boolean.
* Added new field `clearingExistingInvoiceTemplate` of type Boolean.
* Added new field `clearingExistingPaymentTerm` of type Boolean.
* Added new field `clearingExistingSequenceSet` of type Boolean.
* Added new field `clearingExistingSoldToContact` of type Boolean.

## OrderSubscriptions

* Description: Field type change for `ramp` from Object to RampResponse.
* Description: Added new field `ramp` of type RampResponse.
* Description: Added validation for the optional field `ramp` using RampResponse.validateJsonElement.

## PaymentMethodResponse

* Field `networkTokenType` changed from non-existent to @Nullable.
* Field `networkTokenProvider` changed from non-existent to @Nullable.
* Added new enum `NetworkTokenTypeEnum` with values `MPAN` and `DPAN`.
* Added new field `networkTokenType` of type `NetworkTokenTypeEnum`.
* Added new enum `NetworkTokenProviderEnum` with value `ApplePay`.
* Added new field `networkTokenProvider` of type `NetworkTokenProviderEnum`.
* Added new method `networkTokenType(NetworkTokenTypeEnum networkTokenType)` to set `networkTokenType`.
* Added new method `getNetworkTokenType()` to retrieve `networkTokenType`.
* Added new method `setNetworkTokenType(NetworkTokenTypeEnum networkTokenType)` to set `networkTokenType`.
* Added new method `networkTokenProvider(NetworkTokenProviderEnum networkTokenProvider)` to set `networkTokenProvider`.
* Added new method `getNetworkTokenProvider()` to retrieve `networkTokenProvider`.
* Added new method `setNetworkTokenProvider(NetworkTokenProviderEnum networkTokenProvider)` to set `networkTokenProvider`.

## PaymentMethodResponseApplePay

* Added new enum NetworkTokenTypeEnum with values MPAN and DPAN.
* Added new field `networkTokenType` of type NetworkTokenTypeEnum to PaymentMethodResponseApplePay.
* Added new enum NetworkTokenProviderEnum with value APPLEPAY.
* Added new field `networkTokenProvider` of type NetworkTokenProviderEnum to PaymentMethodResponseApplePay.

## PeriodBalanceType

* New enum value added: CANCELLED_PENDING_EVALUATION

## PeriodStatusResponse

* Enum value `CANCELLEDPENDINGEVALUATION` added.
* Enum value `CANCELED` implicitly deprecated in favor of `CANCELLED`.

## PreviewExistingSubscriptionRequest

* Field `skipTax` changed from non-nullable to nullable with @Nullable annotation.
* Added new field `skipTax` of type Boolean to the class `PreviewExistingSubscriptionRequest`.
* Added new method `skipTax(Boolean skipTax)` to set the `skipTax` field in `PreviewExistingSubscriptionRequest`.
* Added new method `getSkipTax()` to retrieve the `skipTax` field in `PreviewExistingSubscriptionRequest`.

## PreviewOptions

* Field `validateScheduledOrders` changed from non-nullable to nullable with @Nullable annotation.
* Added new field `validateScheduledOrders` with default value `true`.
* Added new method `validateScheduledOrders(Boolean validateScheduledOrders)` to set the `validateScheduledOrders` field.
* Added new method `getValidateScheduledOrders()` to retrieve the `validateScheduledOrders` field.
* Added new method `setValidateScheduledOrders(Boolean validateScheduledOrders)` to set the `validateScheduledOrders` field.

## PreviewOrderChargeOverride

* Added new field `pricingAttributes` of type `Map<String, Object>` with @SerializedName annotation.
* Added new field `negotiatedPriceTable` of type `List<Map<String, Object>>` with @SerializedName annotation.
* Added method `pricingAttributes(Map<String, Object> pricingAttributes)` to set the `pricingAttributes` field.
* Added method `putPricingAttributesItem(String key, Object pricingAttributesItem)` to add an item to the `pricingAttributes` map.
* Added method `getPricingAttributes()` to retrieve the `pricingAttributes` field.
* Added method `setPricingAttributes(Map<String, Object> pricingAttributes)` to set the `pricingAttributes` field.
* Added method `negotiatedPriceTable(List<Map<String, Object>> negotiatedPriceTable)` to set the `negotiatedPriceTable` field.
* Added method `addNegotiatedPriceTableItem(Map<String, Object> negotiatedPriceTableItem)` to add an item to the `negotiatedPriceTable` list.
* Added method `getNegotiatedPriceTable()` to retrieve the `negotiatedPriceTable` field.
* Added method `setNegotiatedPriceTable(List<Map<String, Object>> negotiatedPriceTable)` to set the `negotiatedPriceTable` field.

## PreviewOrderChargeUpdate

* Added new field `pricingAttributes` of type Map<String, Object> with @SerializedName annotation.
* Added new field `negotiatedPriceTable` of type List<Map<String, Object>> with @SerializedName annotation.
* Added method `pricingAttributes(Map<String, Object> pricingAttributes)` to set the `pricingAttributes` field.
* Added method `putPricingAttributesItem(String key, Object pricingAttributesItem)` to add an item to the `pricingAttributes` map.
* Added method `getPricingAttributes()` to retrieve the `pricingAttributes` field.
* Added method `setPricingAttributes(Map<String, Object> pricingAttributes)` to set the `pricingAttributes` field.
* Added method `negotiatedPriceTable(List<Map<String, Object>> negotiatedPriceTable)` to set the `negotiatedPriceTable` field.
* Added method `addNegotiatedPriceTableItem(Map<String, Object> negotiatedPriceTableItem)` to add an item to the `negotiatedPriceTable` list.
* Added method `getNegotiatedPriceTable()` to retrieve the `negotiatedPriceTable` field.
* Added method `setNegotiatedPriceTable(List<Map<String, Object>> negotiatedPriceTable)` to set the `negotiatedPriceTable` field.

## PreviewSubscriptionRequest

* Field `skipTax` changed from non-nullable to nullable with @Nullable annotation.
* New field `skipTax` added to the class `PreviewSubscriptionRequest`.

## RampResponse

* Field `delete` changed from required to optional with @Nullable annotation.
* New field `delete` of type Boolean added to the RampResponse class.
* New method `delete(Boolean delete)` added to set the `delete` field.
* New method `getDelete()` added to retrieve the `delete` field.
* New method `setDelete(Boolean delete)` added to set the `delete` field.

## RatePlanChargeSegment

* Field `deliverySchedule` has been renamed to `subscriptionChargeDeliverySchedule`.
* Field `deliverySchedule` has been replaced with `subscriptionChargeDeliverySchedule` in the equals, hashCode, and toString methods.
* Field `deliverySchedule` has been replaced with `subscriptionChargeDeliverySchedule` in JSON validation.
* Added new field `originalListDiscountAmount` of type BigDecimal.
* Added new field `originalListDiscountPercentage` of type BigDecimal.
* Added new field `isChargeLevelMinCommit` of type Boolean.
* Added new field `chargeLevelMinCommitmentAmount` of type BigDecimal.
* Added new field `commitmentLevel` of type CommitmentLevel.

## RatePlanChargeSegmentInfo

* Change: Field `deliverySchedule` renamed to `subscriptionChargeDeliverySchedule`.
* Change: Added new field `originalListDiscountAmount` of type BigDecimal.
* Change: Added new field `originalListDiscountPercentage` of type BigDecimal.
* Change: Added new field `isChargeLevelMinCommit` of type Boolean.
* Change: Added new field `chargeLevelMinCommitmentAmount` of type BigDecimal.
* Change: Added new field `commitmentLevel` of type CommitmentLevel.

## ReverseInvoiceResponse

* Field `creditMemos` changed from non-existent to optional with @Nullable annotation.
* Added new field `creditMemos` of type `List<ReverseInvoiceResponseCreditMemo>`.
* Added method `creditMemos(List<ReverseInvoiceResponseCreditMemo> creditMemos)` to set the `creditMemos` field.
* Added method `addCreditMemosItem(ReverseInvoiceResponseCreditMemo creditMemosItem)` to add items to the `creditMemos` list.
* Added method `getCreditMemos()` to retrieve the `creditMemos` field.
* Added method `setCreditMemos(List<ReverseInvoiceResponseCreditMemo> creditMemos)` to set the `creditMemos` field.
* Updated `equals` method to include `creditMemos`.
* Updated `hashCode` method to include `creditMemos`.
* Updated `toString` method to include `creditMemos`.
* Updated JSON validation to include `creditMemos`.

## ScheduleStatusOutput

* Enum value `CANCELLEDPENDINGEVALUATION` added.
* Enum value `CANCELED` implicitly deprecated by the addition of `CANCELLED`.

## UpdateJournalEntryItemRequest

* Added a new field `notes` of type String to the UpdateJournalEntryItemRequest class.
* Added a new method `notes(String notes)` to set the `notes` field in a fluent style.
* Added a new method `getNotes()` to retrieve the value of the `notes` field.
* Added a new method `setNotes(String notes)` to set the value of the `notes` field.

## UpsertCommitmentInput

* Added import for com.zuora.model.CommitmentCancellationPolicy.
* Added import for com.zuora.model.UpsertCancelCommitmentInput.
* Added TypeAdapter for UpsertCancelCommitmentInput in the Gson serialization/deserialization logic.
* Added handling for UpsertCancelCommitmentInput in the serialization logic.
* Added handling for UpsertCancelCommitmentInput in the deserialization logic.
* Added UpsertCancelCommitmentInput to the schemas map.
* Added UpsertCancelCommitmentInput to the setActualInstance method.
* Added getUpsertCancelCommitmentInput method to retrieve the actual instance of UpsertCancelCommitmentInput.
* Added validation logic for UpsertCancelCommitmentInput in the validateJsonElement method.

## UpsertCommitmentScheduleInput

* Removed import of CommitmentScheduleStatus class.

## UpsertUpdateCommitmentInput

* Removed field `status` of type CommitmentStatusInput.
* Removed method `status(CommitmentStatusInput status)`
* Removed method `getStatus()`
* Removed method `setStatus(CommitmentStatusInput status)`

## UpsertUpdateCommitmentScheduleInput

* Removed field `status` of type CommitmentScheduleStatus
* Removed method `status(CommitmentScheduleStatus status)`
* Removed method `getStatus()`
* Removed method `setStatus(CommitmentScheduleStatus status)`
