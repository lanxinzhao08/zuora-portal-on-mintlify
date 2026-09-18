---
title: "Java client library 3.18.0 changelog"
sidebarTitle: "3.18.0"
---
## CreditMemosApi

* Added a new parameter `transactionId` to the method updateCreditMemoInvokeSyncStatusCall.
* Added a new parameter `transactionId` to the method updateCreditMemoInvokeSyncStatusValidateBeforeCall.
* Added a new parameter `transactionId` to the method updateCreditMemoInvokeSyncStatus.
* Added a new parameter `transactionId` to the method updateCreditMemoInvokeSyncStatusWithHttpInfo.
* Added a new parameter `transactionId` to the method updateCreditMemoInvokeSyncStatusAsync.
* Added a new field `transactionId` to the class UpdateCreditMemoInvokeSyncStatusApi.
* Added a new method transactionId to set the `transactionId` field in the class UpdateCreditMemoInvokeSyncStatusApi.

## DebitMemosApi

* Added a new parameter `transactionId` to the method updateDebitMemoInvokeSyncStatusCall.
* Added a new parameter `transactionId` to the method updateDebitMemoInvokeSyncStatusValidateBeforeCall.
* Added a new parameter `transactionId` to the method updateDebitMemoInvokeSyncStatus.
* Added a new parameter `transactionId` to the method updateDebitMemoInvokeSyncStatusWithHttpInfo.
* Added a new parameter `transactionId` to the method updateDebitMemoInvokeSyncStatusAsync.
* Added a new field `transactionId` to the class UpdateDebitMemoInvokeSyncStatusApi.
* Added a new method transactionId to set the `transactionId` field in the class UpdateDebitMemoInvokeSyncStatusApi.

## InvoicesApi

* Added new method getInvoiceWriteOffAsyncJobCall to handle GET requests for invoice write-off async jobs.
* Added new method getInvoiceWriteOffAsyncJobValidateBeforeCall to validate parameters before calling getInvoiceWriteOffAsyncJob.
* Added new method getInvoiceWriteOffAsyncJob to retrieve information about a specific asynchronous invoice write-off job.
* Added new method getInvoiceWriteOffAsyncJobWithHttpInfo to execute the GET request with HTTP info.
* Added new method getInvoiceWriteOffAsyncJobAsync to execute the GET request asynchronously.
* Added new class getInvoiceWriteOffAsyncJobApi to encapsulate the API call for getting invoice write-off async jobs.
* Added new method createInvoiceWriteOffAsyncCall to handle POST requests for writing off invoices asynchronously.
* Added new method createInvoiceWriteOffAsyncValidateBeforeCall to validate parameters before calling createInvoiceWriteOffAsync.
* Added new method createInvoiceWriteOffAsyncApi to asynchronously write off a posted invoice.
* Added new method createInvoiceWriteOffAsyncWithHttpInfo to execute the POST request with HTTP info.
* Added new method createInvoiceWriteOffAsyncAsync to execute the POST request asynchronously.
* Added new class createInvoiceWriteOffAsyncApi to encapsulate the API call for posting invoice write-off async jobs.
* Added new optional parameter `transactionId` to the updateInvoiceInvokeSyncStatusCall method.
* Added new method transactionId to the UpdateInvoiceInvokeSyncStatusApi class to set the `transactionId` parameter.

## ObjectQueriesApi

* Added new model: ExpandedChildCommitment.
* Added new model: QueryChildCommitmentsResponse.
* Added new method: queryChildCommitmentByKeyCall.
* Added new method: queryChildCommitmentByKeyValidateBeforeCall.
* Added new method: queryChildCommitmentByKey.
* Added new method: queryChildCommitmentByKeyWithHttpInfo.
* Added new method: queryChildCommitmentByKeyAsync.
* Added new class: QueryChildCommitmentByKeyApi.
* Added new method: queryChildCommitmentByKeyApi.
* Added new method: queryChildCommitmentsCall.
* Added new method: queryChildCommitmentsValidateBeforeCall.
* Added new method: queryChildCommitments.
* Added new method: queryChildCommitmentsWithHttpInfo.
* Added new method: queryChildCommitmentsAsync.
* Added new class: QueryChildCommitmentsApi.
* Added new method: queryChildCommitmentsApi.
* Added support for new expands: `childcommitments`, `childcommitments.childcommitment` in existing methods.

## BasePeriod

* Field `balance` added with @Nullable annotation, indicating it is optional.
* Field `trueUpAmount` added with @Nullable annotation, indicating it is optional.
* Field `expiredAmount` added with @Nullable annotation, indicating it is optional.
* Field `billedTotalSpending` added with @Nullable annotation, indicating it is optional.
* New field `balance` added to the BasePeriod class.
* New field `trueUpAmount` added to the BasePeriod class.
* New field `expiredAmount` added to the BasePeriod class.
* New field `billedTotalSpending` added to the BasePeriod class.

## ChargeOverride

* Changed nullability of field `prepaymentUnitType` from non-nullable to @Nullable.
* Changed nullability of field `drawdownScope` from non-nullable to @Nullable.
* Changed nullability of field `vpAlignment` from non-nullable to @Nullable.
* Changed nullability of field `vpAnchorDate` from non-nullable to @Nullable.
* Changed nullability of field `vpProrationOption` from non-nullable to @Nullable.
* Changed nullability of field `specificValidityPeriodLength` from non-nullable to @Nullable.
* Changed nullability of field `rolloverPeriodType` from non-nullable to @Nullable.
* Changed nullability of field `rolloverFundPriority` from non-nullable to @Nullable.
* Changed nullability of field `rolloverEndDateType` from non-nullable to @Nullable.
* Changed nullability of field `rolloverEndDate` from non-nullable to @Nullable.
* Changed nullability of field `fundSupportAccountHierarchy` from non-nullable to @Nullable.
* Changed nullability of field `drawdownPriority` from non-nullable to @Nullable.
* Changed nullability of field `clearingExistingRolloverPeriodType` from non-nullable to @Nullable.
* Changed nullability of field `clearingExistingRolloverPeriodLength` from non-nullable to @Nullable.
* Added new enum PrepaymentUnitTypeEnum with values `UNIT` and `CURRENCY`.
* Added new field `prepaymentUnitType` of type PrepaymentUnitTypeEnum.
* Added new enum DrawdownScopeEnum with values `RATEPLAN`, `SUBSCRIPTION`, and `ACCOUNT`.
* Added new field `drawdownScope` of type DrawdownScopeEnum.
* Added new field `vpAlignment` of type VpAlignment.
* Added new field `vpAnchorDate` of type LocalDate.
* Added new field `vpProrationOption` of type VpProrationOption.
* Added new field `specificValidityPeriodLength` of type Integer.
* Added new field `rolloverPeriodType` of type RolloverPeriodType.
* Added new field `rolloverFundPriority` of type Integer.
* Added new field `rolloverEndDateType` of type RolloverEndDateType.
* Added new field `rolloverEndDate` of type LocalDate.
* Added new field `fundSupportAccountHierarchy` of type Boolean.
* Added new field `drawdownPriority` of type Integer.
* Added new field `clearingExistingRolloverPeriodType` of type Boolean.
* Added new field `clearingExistingRolloverPeriodLength` of type Boolean.

## CommitmentScheduleAttributes

* Field `amount` changed from optional to required with the addition of @Nonnull annotation.
* Added new import: com.zuora.model.CustomAmountConfig.
* Added new field `customAmount` of type CustomAmountConfig to the CommitmentScheduleAttributes class.
* Added new method customAmount(CustomAmountConfig `customAmount`) to set the `customAmount` field.
* Added new method getCustomAmount() to retrieve the `customAmount` field.
* Added new method setCustomAmount(CustomAmountConfig `customAmount`) to set the `customAmount` field.
* Added validation for the new field `customAmount` in the JSON object.

## CommitmentScheduleInput

* The field `amount` is now marked as always required with the annotation @Nonnull.
* Added a new field `customAmount` of type CustomAmountConfig to the class CommitmentScheduleInput.
* Added a new method customAmount(CustomAmountConfig `customAmount`) to set the `customAmount` field.
* Added a new method getCustomAmount() to retrieve the `customAmount` field.
* Added a new method setCustomAmount(CustomAmountConfig `customAmount`) to set the `customAmount` field.
* Added validation for the new optional field `customAmount` in the JSON object.

## CommitmentScheduleOutput

* The field `amount` has been changed to always be required, as indicated by the comment change from `The amount of each period in the schedule.` to `The amount of each period in the schedule. Always required.`
* Added a new field `customAmount` of type CustomAmountConfig to the CommitmentScheduleOutput class.
* Added a new method customAmount(CustomAmountConfig `customAmount`) to set the `customAmount` field.
* Added a new method getCustomAmount() to retrieve the `customAmount` field.
* Added a new method setCustomAmount(CustomAmountConfig `customAmount`) to set the `customAmount` field.
* Included `customAmount` in the equals, hashCode, and toString methods.
* Added validation for the `customAmount` field in the JSON validation logic.

## CreateBillingPreviewRunRequest

* Added a new field `organizationLabels` of type List&lt;OrganizationLabel> to the CreateBillingPreviewRunRequest class.
* Added a new method organizationLabels to set the `organizationLabels` field in a fluent style.
* Added a new method addOrganizationLabelsItem to add an item to the `organizationLabels` list.
* Added a new getter method getOrganizationLabels for the `organizationLabels` field.
* Added a new setter method setOrganizationLabels for the `organizationLabels` field.
* Added validation logic for the new `organizationLabels` field in JSON parsing.

## CreateInvoiceItem

* Added a new field `accountsReceivableAccountingCode` with its corresponding getter, setter, and fluent method.
* Included `accountsReceivableAccountingCode` in the equals, hashCode, and toString methods.
* Added validation for `accountsReceivableAccountingCode` to ensure it is a primitive type in JSON.

## CreateInvoiceRequest

* Field `currency` changed from required to optional with the addition of @Nullable annotation.
* New field `currency` added to the CreateInvoiceRequest class.

## CreateProductRatePlanChargeRequest

* Added new field `commitmentLevel` of type CommitmentLevel.
* Added new field `drawdownPriority` of type Integer.
* Added new field `vpAlignment` of type VpAlignment.
* Added new field `vpProrationOption` of type VpProrationOption.
* Added new field `specificValidityPeriodLength` of type Integer.
* Added new field `rolloverPeriodType` of type RolloverPeriodType.
* Added new field `rolloverFundPriority` of type Integer.
* Added new field `rolloverEndDateType` of type RolloverEndDateType.
* Added new field `fundSupportAccountHierarchy` of type Boolean.

## CreateSequenceSetRequest

* Changed the nullability annotation of the `sequenceSetNumber` field to @Nullable, indicating it is now optional.
* Added a new field `sequenceSetNumber` of type String to the CreateSequenceSetRequest class.
* Added a new method sequenceSetNumber(String `sequenceSetNumber`) to set the `sequenceSetNumber` field in a fluent style.
* Added a new getter method getSequenceSetNumber() for the `sequenceSetNumber` field.
* Added a new setter method setSequenceSetNumber(String `sequenceSetNumber`) for the `sequenceSetNumber` field.

## CreditMemoItemFromWriteOffInvoice

* Added new field `excludeItemBillingFromRevenueAccounting` of type Boolean to the class CreditMemoItemFromWriteOffInvoice.
* Changed the `excludeItemBillingFromRevenueAccounting` field to @Nullable.
* Added new method excludeItemBillingFromRevenueAccounting(Boolean `excludeItemBillingFromRevenueAccounting`) to set the `excludeItemBillingFromRevenueAccounting` field.
* Added new method getExcludeItemBillingFromRevenueAccounting() to retrieve the `excludeItemBillingFromRevenueAccounting` field.
* Added new method setExcludeItemBillingFromRevenueAccounting(Boolean `excludeItemBillingFromRevenueAccounting`) to set the `excludeItemBillingFromRevenueAccounting` field.

## ExpandedAccount

* Removed field: `integrationIdNS`
* Removed method: integrationIdNS(String `integrationIdNS`)
* Removed method: getIntegrationIdNS()
* Removed method: setIntegrationIdNS(String `integrationIdNS`)

## ExpandedCommitment

* Removed field: `overlapDrawdownPolicy`
* Removed method: overlapDrawdownPolicy(String `overlapDrawdownPolicy`)
* Removed method: getOverlapDrawdownPolicy()
* Removed method: setOverlapDrawdownPolicy(String `overlapDrawdownPolicy`)
* Added new field: `childCommitments`
* Added new method: childCommitments(List&lt;ExpandedChildCommitment> `childCommitments`)
* Added new method: addChildCommitmentsItem(ExpandedChildCommitment `childCommitmentsItem`)
* Added new method: getChildCommitments()
* Added new method: setChildCommitments(List&lt;ExpandedChildCommitment> `childCommitments`)

## ExpandedCommitmentAssociatedItem

* Added a new field `status` with its corresponding getter, setter, and fluent method status(String `status`).
* Included `status` in the equals, hashCode, and toString methods.
* Added validation for `status` to ensure it is a primitive type in JSON.

## ExpandedCommitmentPeriod

* Added new field `expiredAmount` of type BigDecimal.
* Added new field `trueUpAmount` of type BigDecimal.
* Added new field `balance` of type BigDecimal.
* Changed the `expiredAmount` field to @Nullable.
* Changed the `trueUpAmount` field to @Nullable.
* Changed the `balance` field to @Nullable.

## ExpandedCommitmentSchedule

* Field `customAmount` added with @Nullable annotation.
* New field `customAmount` added to the ExpandedCommitmentSchedule class.
* New method customAmount(String `customAmount`) added to set the `customAmount` field.
* New method getCustomAmount() added to retrieve the `customAmount` field.
* New method setCustomAmount(String `customAmount`) added to set the `customAmount` field.

## ExpandedCommitmentTransaction

* Added new field `status` to the ExpandedCommitmentTransaction class.
* Changed `status` to @Nullable.

## ExpandedInvoice

* Removed field: `integrationIdNS`
* Removed method: integrationIdNS(String `integrationIdNS`)
* Removed method: getIntegrationIdNS()
* Removed method: setIntegrationIdNS(String `integrationIdNS`)

## ExpandedPayment

* Removed field: `integrationIdNS`
* Removed method: integrationIdNS(String `integrationIdNS`)
* Removed method: getIntegrationIdNS()
* Removed method: setIntegrationIdNS(String `integrationIdNS`)

## ExpandedRatePlanCharge

* Field `totalEntitledQuantity` changed from non-nullable to nullable (@Nonnull to @Nullable).
* Field `totalContractValue` changed from non-nullable to nullable (@Nonnull to @Nullable).
* Added new field `totalEntitledQuantity` of type BigDecimal.
* Added new field `totalContractValue` of type BigDecimal.

## GetChargeOverride

* Added new enum DrawdownScopeEnum with values `RATEPLAN`, `SUBSCRIPTION`, `ACCOUNT`.
* Added new field `drawdownScope` of type DrawdownScopeEnum.
* Added new enum PrepaymentUnitTypeEnum with values `UNIT`, `CURRENCY`.
* Added new field `prepaymentUnitType` of type PrepaymentUnitTypeEnum.
* Added new method drawdownScope(DrawdownScopeEnum `drawdownScope`) to set the `drawdownScope` field.
* Added new method getDrawdownScope() to retrieve the `drawdownScope` field.
* Added new method setDrawdownScope(DrawdownScopeEnum `drawdownScope`) to set the `drawdownScope` field.
* Added new method prepaymentUnitType(PrepaymentUnitTypeEnum `prepaymentUnitType`) to set the `prepaymentUnitType` field.
* Added new method getPrepaymentUnitType() to retrieve the `prepaymentUnitType` field.
* Added new method setPrepaymentUnitType(PrepaymentUnitTypeEnum `prepaymentUnitType`) to set the `prepaymentUnitType` field.
* Changed the `drawdownScope` field to optional with @Nullable annotation.
* Changed the `prepaymentUnitType` field to optional with @Nullable annotation.

## GetProductRatePlanChargeResponse

* Added new field `commitmentLevel` of type CommitmentLevel.
* Added new field `drawdownPriority` of type Integer.
* Added new field `vpAlignment` of type VpAlignment.
* Added new field `vpProrationOption` of type VpProrationOption.
* Added new field `specificValidityPeriodLength` of type Integer.
* Added new field `rolloverPeriodType` of type RolloverPeriodType.
* Added new field `rolloverFundPriority` of type Integer.
* Added new field `rolloverEndDateType` of type RolloverEndDateType.
* Added new field `fundSupportAccountHierarchy` of type Boolean.
* Changed `commitmentLevel` to @Nullable.
* Changed `drawdownPriority` to @Nullable.
* Changed `vpAlignment` to @Nullable.
* Changed `vpProrationOption` to @Nullable.
* Changed `specificValidityPeriodLength` to @Nullable.
* Changed `rolloverPeriodType` to @Nullable.
* Changed `rolloverFundPriority` to @Nullable.
* Changed `rolloverEndDateType` to @Nullable.
* Changed `fundSupportAccountHierarchy` to @Nullable.

## GetSubscriptionRatePlanChargesWithAllSegments

* Field `totalEntitledQuantity` added with @Nullable annotation.
* Field `totalContractValue` added with @Nullable annotation.
* New field `totalEntitledQuantity` added to the class.
* New field `totalContractValue` added to the class.

## InvoiceSettlementAsyncJobOperationType

* New enum value `ASYNCINVOICEWRITEOFF` added to InvoiceSettlementAsyncJobOperationType.

## InvoiceSettlementAsyncJobReferenceType

* New enum value `INVOICE` added to InvoiceSettlementAsyncJobReferenceType.

## LinkageLinkageType

* New enum value `FOR_EACH` added to LinkageLinkageType.

## ListCommitmentPeriodOutput

* Changed the field `balance` to @Nullable.
* Changed the field `trueUpAmount` to @Nullable.
* Changed the field `expiredAmount` to @Nullable.
* Changed the field `billedTotalSpending` to @Nullable.
* Added new field `balance` with @SerializedName annotation.
* Added new field `trueUpAmount` with @SerializedName annotation.
* Added new field `expiredAmount` with @SerializedName annotation.
* Added new field `billedTotalSpending` with @SerializedName annotation.

## ListCommitmentScheduleOutput

* Field `customAmount` changed to @Nullable.
* Added new field `customAmount` of type Map&lt;String, Object> to the class ListCommitmentScheduleOutput.
* Added new method customAmount(Map&lt;String, Object> `customAmount`) to set the `customAmount` field.
* Added new method putCustomAmountItem(String `key`, Object `customAmountItem`) to add items to the `customAmount` map.
* Added new method getCustomAmount() to retrieve the `customAmount` field.
* Added new method setCustomAmount(Map&lt;String, Object> `customAmount`) to set the `customAmount` field.

## OverrideDiscountApplyDetail

* Field `productRatePlanId` changed from @Nonnull to @Nullable.
* Field `productRatePlanChargeId` changed from @Nonnull to @Nullable.
* New field `productRatePlanNumber` added to the class.
* New field `productRatePlanChargeNumber` added to the class.

## PeriodBalance

* Field `trueUpAmount` added with @Nullable annotation, indicating it is optional.
* Field `expiredAmount` added with @Nullable annotation, indicating it is optional.
* Field `billedTotalSpending` added with @Nullable annotation, indicating it is optional.
* New field `trueUpAmount` added to the PeriodBalance class.
* New field `expiredAmount` added to the PeriodBalance class.
* New field `billedTotalSpending` added to the PeriodBalance class.

## PreviewOrderChargeOverride

* Changed the `specificValidityPeriodLength` field to @Nullable.
* Added new field `specificValidityPeriodLength` of type Integer to the class PreviewOrderChargeOverride.
* Added new method specificValidityPeriodLength(Integer `specificValidityPeriodLength`) to set the `specificValidityPeriodLength` field.
* Added new method getSpecificValidityPeriodLength() to retrieve the `specificValidityPeriodLength` field.
* Added new method setSpecificValidityPeriodLength(Integer `specificValidityPeriodLength`) to set the `specificValidityPeriodLength` field.

## ProductRatePlanCharge

* Added new field `commitmentLevel` of type CommitmentLevel.
* Added new field `drawdownPriority` of type Integer.
* Added new field `vpAlignment` of type VpAlignment.
* Added new field `vpProrationOption` of type VpProrationOption.
* Added new field `specificValidityPeriodLength` of type Integer.
* Added new field `rolloverPeriodType` of type RolloverPeriodType.
* Added new field `rolloverFundPriority` of type Integer.
* Added new field `rolloverEndDateType` of type RolloverEndDateType.
* Added new field `fundSupportAccountHierarchy` of type Boolean.

## RatePlanChargeSegment

* Field `totalEntitledQuantity` added with @Nullable annotation.
* Field `totalContractValue` added with @Nullable annotation.
* Field `vpAlignment` added with @Nullable annotation.
* Field `vpAnchorDate` added with @Nullable annotation.
* Field `vpProrationOption` added with @Nullable annotation.
* Field `specificValidityPeriodLength` added with @Nullable annotation.
* Field `rolloverPeriodType` added with @Nullable annotation.
* Field `rolloverFundPriority` added with @Nullable annotation.
* Field `rolloverEndDateType` added with @Nullable annotation.
* Field `rolloverEndDate` added with @Nullable annotation.
* Field `fundSupportAccountHierarchy` added with @Nullable annotation.
* Field `drawdownPriority` added with @Nullable annotation.
* Added new field `totalEntitledQuantity` with type String.
* Added new field `totalContractValue` with type String.
* Added new field `vpAlignment` with type VpAlignment.
* Added new field `vpAnchorDate` with type LocalDate.
* Added new field `vpProrationOption` with type VpProrationOption.
* Added new field `specificValidityPeriodLength` with type Integer.
* Added new field `rolloverPeriodType` with type RolloverPeriodType.
* Added new field `rolloverFundPriority` with type Integer.
* Added new field `rolloverEndDateType` with type RolloverEndDateType.
* Added new field `rolloverEndDate` with type LocalDate.
* Added new field `fundSupportAccountHierarchy` with type Boolean.
* Added new field `drawdownPriority` with type Integer.

## RatePlanChargeSegmentInfo

* Field `totalEntitledQuantity` added with @Nullable annotation.
* Field `totalContractValue` added with @Nullable annotation.
* Field `vpAlignment` added with @Nullable annotation.
* Field `vpAnchorDate` added with @Nullable annotation.
* Field `vpProrationOption` added with @Nullable annotation.
* Field `specificValidityPeriodLength` added with @Nullable annotation.
* Field `rolloverPeriodType` added with @Nullable annotation.
* Field `rolloverFundPriority` added with @Nullable annotation.
* Field `rolloverEndDateType` added with @Nullable annotation.
* Field `rolloverEndDate` added with @Nullable annotation.
* Field `fundSupportAccountHierarchy` added with @Nullable annotation.
* Field `drawdownPriority` added with @Nullable annotation.
* Added new field `totalEntitledQuantity` of type String.
* Added new field `totalContractValue` of type String.
* Added new field `vpAlignment` of type VpAlignment.
* Added new field `vpAnchorDate` of type LocalDate.
* Added new field `vpProrationOption` of type VpProrationOption.
* Added new field `specificValidityPeriodLength` of type Integer.
* Added new field `rolloverPeriodType` of type RolloverPeriodType.
* Added new field `rolloverFundPriority` of type Integer.
* Added new field `rolloverEndDateType` of type RolloverEndDateType.
* Added new field `rolloverEndDate` of type LocalDate.
* Added new field `fundSupportAccountHierarchy` of type Boolean.
* Added new field `drawdownPriority` of type Integer.

## UpdateDiscountInvoiceItem

* Added a new field `accountsReceivableAccountingCode` with its corresponding getter, setter, and fluent method.

## UpdateInvoiceItem

* Added new field `accountsReceivableAccountingCode` that is @Nullable.
* Added new field `accountsReceivableAccountingCode` to the UpdateInvoiceItem class.

## UpdateProductRatePlanChargeRequest

* Added new field `commitmentLevel` of type CommitmentLevel.
* Added new field `drawdownPriority` of type Integer.
* Added new field `vpAlignment` of type VpAlignment.
* Added new field `vpProrationOption` of type VpProrationOption.
* Added new field `specificValidityPeriodLength` of type Integer.
* Added new field `rolloverPeriodType` of type RolloverPeriodType.
* Added new field `rolloverFundPriority` of type Integer.
* Added new field `rolloverEndDateType` of type RolloverEndDateType.
* Added new field `fundSupportAccountHierarchy` of type Boolean.

## UpsertCommitmentScheduleInput

* Added import for com.zuora.model.CustomAmountConfig.

## UpsertCreateCommitmentInputAllOfSchedules

* Field `amount` description changed to indicate it is always required.
* Added new field `customAmount` of type CustomAmountConfig to the class UpsertCreateCommitmentInputAllOfSchedules.

## UpsertCreateCommitmentScheduleInput

* Field `amount` changed from optional to required, as indicated by the change in the comment from `The amount of each period in the schedule.` to `The amount of each period in the schedule. Always required.`
* Added new field `customAmount` of type CustomAmountConfig to the class UpsertCreateCommitmentScheduleInput.

## UpsertUpdateCommitmentInput

* Updated the method description to include the ability to add new commitment schedules using "action: create" and modify existing ones using "action: update".

## UpsertUpdateCommitmentScheduleInput

* Field `periodType` added with @Nullable annotation, changing the class structure.
* Field `specificPeriodLength` added with @Nullable annotation, changing the class structure.
* Field `startDate` added with @Nullable annotation, changing the class structure.
* Field `endDate` added with @Nullable annotation, changing the class structure.
* Field `customAmount` added with @Nullable annotation, changing the class structure.
* Field `clearCustomAmount` added with @Nullable annotation, changing the class structure.
* Added new field `periodType` of type PeriodTypeEnum.
* Added new field `specificPeriodLength` of type Integer.
* Added new field `startDate` of type LocalDate.
* Added new field `endDate` of type LocalDate.
* Added new field `customAmount` of type CustomAmountConfig.
* Added new field `clearCustomAmount` of type Boolean.

## ValidityPeriodType

* New enum value `SPECIFIC_DAYS` added.
* New enum value `SPECIFIC_WEEKS` added.
* New enum value `SPECIFIC_MONTHS` added.
