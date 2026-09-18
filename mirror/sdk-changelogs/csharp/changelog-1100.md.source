---
markdown:
  toc:
    hide: false
---

# C# client library 1.10.0 changelog


## CreditMemosApi

* Added optional parameter `transactionId` to the following methods: UpdateCreditMemoInvokeSyncStatus, UpdateCreditMemoInvokeSyncStatusWithHttpInfo, UpdateCreditMemoInvokeSyncStatusAsync, UpdateCreditMemoInvokeSyncStatusWithHttpInfoAsync.

## DebitMemosApi

* Added optional parameter `transactionId` to the following methods: UpdateDebitMemoInvokeSyncStatus, UpdateDebitMemoInvokeSyncStatusWithHttpInfo, UpdateDebitMemoInvokeSyncStatusAsync, UpdateDebitMemoInvokeSyncStatusWithHttpInfoAsync.

## InvoicesApi

* Added method GetInvoiceWriteOffAsyncJob to retrieve an invoice write-off async job.
* Added method GetInvoiceWriteOffAsyncJobWithHttpInfo to retrieve an invoice write-off async job with HTTP info.
* Added method CreateInvoiceWriteOffAsync to write off an invoice asynchronously.
* Added method CreateInvoiceWriteOffAsyncWithHttpInfo to write off an invoice asynchronously with HTTP info.
* Added async method GetInvoiceWriteOffAsyncJobAsync to retrieve an invoice write-off async job.
* Added async method GetInvoiceWriteOffAsyncJobWithHttpInfoAsync to retrieve an invoice write-off async job with HTTP info.
* Added async method CreateInvoiceWriteOffAsyncAsync to write off an invoice asynchronously.
* Added async method CreateInvoiceWriteOffAsyncWithHttpInfoAsync to write off an invoice asynchronously with HTTP info.
* Added optional parameter `transactionId` to the method UpdateInvoiceInvokeSyncStatus.
* Added optional parameter `transactionId` to the method UpdateInvoiceInvokeSyncStatusWithHttpInfo.
* Added optional parameter `transactionId` to the async method UpdateInvoiceInvokeSyncStatusAsync.
* Added optional parameter `transactionId` to the async method UpdateInvoiceInvokeSyncStatusWithHttpInfoAsync.

## ObjectQueriesApi

* Added new method QueryChildCommitmentByKey with various optional parameters.
* Added new method QueryChildCommitmentByKeyWithHttpInfo with various optional parameters.
* Added new method QueryChildCommitments with various optional parameters.
* Added new method QueryChildCommitmentsWithHttpInfo with various optional parameters.
* Added new asynchronous method QueryChildCommitmentByKeyAsync with various optional parameters.
* Added new asynchronous method QueryChildCommitmentByKeyWithHttpInfoAsync with various optional parameters.
* Added new asynchronous method QueryChildCommitmentsAsync with various optional parameters.
* Added new asynchronous method QueryChildCommitmentsWithHttpInfoAsync with various optional parameters.

## BasePeriod

* Constructor parameter changes: Added new parameters `balance`, `trueUpAmount`, `expiredAmount`, `billedTotalSpending` to the constructor.
* New field added: `Balance` of type `double?`
* New field added: `TrueUpAmount` of type `double?`
* New field added: `ExpiredAmount` of type `double?`
* New field added: `BilledTotalSpending` of type `double?`

## ChargeOverride

* Constructor parameter changes: Added new parameters `prepaymentUnitType`, `drawdownScope`, `vpAlignment`, `vpAnchorDate`, `vpProrationOption`, `specificValidityPeriodLength`, `rolloverPeriodType`, `rolloverFundPriority`, `rolloverEndDateType`, `rolloverEndDate`, `fundSupportAccountHierarchy`, `drawdownPriority`, `clearingExistingRolloverPeriodType`, `clearingExistingRolloverPeriodLength`.
* Added new enum `PrepaymentUnitTypeEnum` with values `UNIT` and `CURRENCY`.
* Added new property `PrepaymentUnitType` of type `PrepaymentUnitTypeEnum?`.
* Added new enum `DrawdownScopeEnum` with values `RATEPLAN`, `SUBSCRIPTION`, and `ACCOUNT`.
* Added new property `DrawdownScope` of type `DrawdownScopeEnum?`.
* Added new property `VpAlignment` of type `VpAlignment?`.
* Added new property `VpProrationOption` of type `VpProrationOption?`.
* Added new property `RolloverPeriodType` of type `RolloverPeriodType?`.
* Added new property `RolloverEndDateType` of type `RolloverEndDateType?`.
* Added new property `VpAnchorDate` of type `DateOnly?`.
* Added new property `SpecificValidityPeriodLength` of type `int?`.
* Added new property `RolloverFundPriority` of type `int?`.
* Added new property `RolloverEndDate` of type `DateOnly?`.
* Added new property `FundSupportAccountHierarchy` of type `bool?`.
* Added new property `DrawdownPriority` of type `int?`.
* Added new property `ClearingExistingRolloverPeriodType` of type `bool?`.
* Added new property `ClearingExistingRolloverPeriodLength` of type `bool?`.

## CommitmentScheduleAttributes

* Added a new constructor parameter `customAmount` of type `CustomAmountConfig`.
* Added a new property `CustomAmount` of type `CustomAmountConfig` to the CommitmentScheduleAttributes class.

## CommitmentScheduleInput

* Added a new parameter `customAmount` of type `CustomAmountConfig` to the constructor of CommitmentScheduleInput.
* Added a new property `CustomAmount` of type `CustomAmountConfig` to the CommitmentScheduleInput class.

## CommitmentScheduleOutput

* Constructor parameter change: Added `CustomAmountConfig customAmount` as a new parameter to the constructor.
* New field added: `CustomAmountConfig CustomAmount` with DataMember attribute.

## CreateBillingPreviewRunRequest

* Constructor parameter added: `List<OrganizationLabel> organizationLabels`
* New field added: `List<OrganizationLabel> OrganizationLabels`

## CreateInvoiceItem

* Added a new parameter `accountsReceivableAccountingCode` to the constructor of the CreateInvoiceItem class.
* Added a new property `AccountsReceivableAccountingCode` to the CreateInvoiceItem class.

## CreateInvoiceRequest

* Added a new parameter `currency` to the constructor of CreateInvoiceRequest.
* Added a new field `Currency` to the CreateInvoiceRequest class.

## CreateProductRatePlanChargeRequest

* Added new field `CommitmentLevel` of type `CommitmentLevel?`
* Added new field `VpAlignment` of type `VpAlignment?`
* Added new field `VpProrationOption` of type `VpProrationOption?`
* Added new field `RolloverPeriodType` of type `RolloverPeriodType?`
* Added new field `RolloverEndDateType` of type `RolloverEndDateType?`
* Added new field `DrawdownPriority` of type `int?`
* Added new field `SpecificValidityPeriodLength` of type `int?`
* Added new field `RolloverFundPriority` of type `int?`
* Added new field `FundSupportAccountHierarchy` of type `bool?`
* Added new constructor parameters: `commitmentLevel`, `vpAlignment`, `vpProrationOption`, `specificValidityPeriodLength`, `rolloverPeriodType`, `rolloverFundPriority`, `rolloverEndDateType`, `fundSupportAccountHierarchy`, `drawdownPriority`

## CreateSequenceSetRequest

* Added a new constructor parameter `sequenceSetNumber` to the CreateSequenceSetRequest class.
* Added a new property `SequenceSetNumber` to the CreateSequenceSetRequest class.

## CreditMemoItemFromWriteOffInvoice

* Constructor parameter added: `excludeItemBillingFromRevenueAccounting`
* New field added: `ExcludeItemBillingFromRevenueAccounting`

## ExpandedAccount

* Removed constructor parameter: `integrationIdNS`
* Removed field: `IntegrationIdNS`

## ExpandedCommitment

* Removed constructor parameter: `overlapDrawdownPolicy`
* Removed field: `OverlapDrawdownPolicy`
* Added new constructor parameter: `childCommitments`
* Added new field: `ChildCommitments`

## ExpandedCommitmentAssociatedItem

* Added a new parameter `status` to the constructor of the ExpandedCommitmentAssociatedItem class.
* Added a new property `Status` to the ExpandedCommitmentAssociatedItem class.

## ExpandedCommitmentPeriod

* Constructor parameter changes: Added parameters `expiredAmount`, `trueUpAmount`, and `balance` to the constructor.
* New field `ExpiredAmount` added to the class.
* New field `TrueUpAmount` added to the class.
* New field `Balance` added to the class.

## ExpandedCommitmentSchedule

* Added a new parameter `customAmount` to the constructor of the ExpandedCommitmentSchedule class.
* Added a new property `CustomAmount` to the ExpandedCommitmentSchedule class.

## ExpandedCommitmentTransaction

* Constructor parameter change: Added `status` as a new parameter in the constructor.
* Added new field `Status` to the ExpandedCommitmentTransaction class.

## ExpandedInvoice

* Removed constructor parameter: `integrationIdNS`
* Removed field: `IntegrationIdNS`

## ExpandedPayment

* Removed constructor parameter: `integrationIdNS`
* Removed field: `IntegrationIdNS`

## ExpandedRatePlanCharge

* Added new constructor parameters: `totalEntitledQuantity`, `totalContractValue`.
* Added new properties: `TotalEntitledQuantity`, `TotalContractValue`.

## GetChargeOverride

* Added new enum `DrawdownScopeEnum` with values `RATEPLAN`, `SUBSCRIPTION`, and `ACCOUNT`.
* Added new property `DrawdownScope` of type `DrawdownScopeEnum?` to the GetChargeOverride class.
* Added new enum `PrepaymentUnitTypeEnum` with values `UNIT` and `CURRENCY`.
* Added new property `PrepaymentUnitType` of type `PrepaymentUnitTypeEnum?` to the GetChargeOverride class.
* Added new constructor parameters `drawdownScope` of type `DrawdownScopeEnum?` and `prepaymentUnitType` of type `PrepaymentUnitTypeEnum?` to the GetChargeOverride constructor.

## GetProductRatePlanChargeResponse

* Added new field `CommitmentLevel` of type `CommitmentLevel?`
* Added new field `VpAlignment` of type `VpAlignment?`
* Added new field `VpProrationOption` of type `VpProrationOption?`
* Added new field `RolloverPeriodType` of type `RolloverPeriodType?`
* Added new field `RolloverEndDateType` of type `RolloverEndDateType?`
* Added new field `DrawdownPriority` of type `int?`
* Added new field `SpecificValidityPeriodLength` of type `int?`
* Added new field `RolloverFundPriority` of type `int?`
* Added new field `FundSupportAccountHierarchy` of type `bool?`
* Added new constructor parameters: `CommitmentLevel?`, `VpAlignment?`, `VpProrationOption?`, `SpecificValidityPeriodLength?`, `RolloverPeriodType?`, `RolloverFundPriority?`, `RolloverEndDateType?`, `FundSupportAccountHierarchy?`, `DrawdownPriority?`

## GetSubscriptionRatePlanChargesWithAllSegments

* Added new constructor parameters: `totalEntitledQuantity`, `totalContractValue`.
* Added new fields to the class: `TotalEntitledQuantity`, `TotalContractValue`.

## InvoiceSettlementAsyncJobOperationType

* New enum value `AsyncInvoiceWriteOff` added.

## InvoiceSettlementAsyncJobReferenceType

* New enum value `Invoice` added to the InvoiceSettlementAsyncJobReferenceType enum.

## LinkageLinkageType

* New enum value `ForEach` added with value `For Each`.

## ListCommitmentPeriodOutput

* Constructor parameter changes: Added new parameters `balance`, `trueUpAmount`, `expiredAmount`, and `billedTotalSpending` to the constructor.
* New field added: `Balance` of type `double?`
* New field added: `TrueUpAmount` of type `double?`
* New field added: `ExpiredAmount` of type `double?`
* New field added: `BilledTotalSpending` of type `double?`

## ListCommitmentScheduleOutput

* Added a new parameter `customAmount` of type `Dictionary<string, Object>` to the constructor of ListCommitmentScheduleOutput.
* Added a new property `CustomAmount` of type `Dictionary<string, Object>` to the ListCommitmentScheduleOutput class.

## OverrideDiscountApplyDetail

* Fields `productRatePlanId` and `productRatePlanChargeId` changed from required to optional.
* Added new constructor parameters: `productRatePlanNumber` and `productRatePlanChargeNumber`.
* Added new fields: `ProductRatePlanNumber` and `ProductRatePlanChargeNumber`.

## PeriodBalance

* Constructor parameter changes: Added parameters `trueUpAmount`, `expiredAmount`, `billedTotalSpending` to the constructor of PeriodBalance.
* New field added: `TrueUpAmount` of type `double?` to the PeriodBalance class.
* New field added: `ExpiredAmount` of type `double?` to the PeriodBalance class.
* New field added: `BilledTotalSpending` of type `double?` to the PeriodBalance class.

## PreviewOrderChargeOverride

* Added a new constructor parameter: `specificValidityPeriodLength` of type `int?`.
* Added a new property: `SpecificValidityPeriodLength` of type `int?`.

## ProductRatePlanCharge

* Added new field `CommitmentLevel` of type `CommitmentLevel?`
* Added new field `VpAlignment` of type `VpAlignment?`
* Added new field `VpProrationOption` of type `VpProrationOption?`
* Added new field `RolloverPeriodType` of type `RolloverPeriodType?`
* Added new field `RolloverEndDateType` of type `RolloverEndDateType?`
* Added new field `DrawdownPriority` of type `int?`
* Added new field `SpecificValidityPeriodLength` of type `int?`
* Added new field `RolloverFundPriority` of type `int?`
* Added new field `FundSupportAccountHierarchy` of type `bool?`
* Added new constructor parameters: `CommitmentLevel?`, `VpAlignment?`, `VpProrationOption?`, `RolloverPeriodType?`, `RolloverEndDateType?`, `DrawdownPriority?`, `SpecificValidityPeriodLength?`, `RolloverFundPriority?`, `FundSupportAccountHierarchy?`

## RatePlanChargeSegment

* Constructor parameter changes: Added parameters `totalEntitledQuantity`, `totalContractValue`, `vpAlignment`, `vpAnchorDate`, `vpProrationOption`, `specificValidityPeriodLength`, `rolloverPeriodType`, `rolloverFundPriority`, `rolloverEndDateType`, `rolloverEndDate`, `fundSupportAccountHierarchy`, `drawdownPriority`.
* Added new field `VpAlignment` with type `VpAlignment?`
* Added new field `VpProrationOption` with type `VpProrationOption?`
* Added new field `RolloverPeriodType` with type `RolloverPeriodType?`
* Added new field `RolloverEndDateType` with type `RolloverEndDateType?`
* Added new field `TotalEntitledQuantity` with type `string`
* Added new field `TotalContractValue` with type `string`
* Added new field `VpAnchorDate` with type `DateOnly?`
* Added new field `SpecificValidityPeriodLength` with type `int?`
* Added new field `RolloverFundPriority` with type `int?`
* Added new field `RolloverEndDate` with type `DateOnly?`
* Added new field `FundSupportAccountHierarchy` with type `bool?`
* Added new field `DrawdownPriority` with type `int?`

## RatePlanChargeSegmentInfo

* Constructor parameter changes: Added parameters `totalEntitledQuantity`, `totalContractValue`, `vpAlignment`, `vpAnchorDate`, `vpProrationOption`, `specificValidityPeriodLength`, `rolloverPeriodType`, `rolloverFundPriority`, `rolloverEndDateType`, `rolloverEndDate`, `fundSupportAccountHierarchy`, `drawdownPriority` to the constructor of RatePlanChargeSegmentInfo.
* Added new field `VpAlignment` with type `VpAlignment?`
* Added new field `VpProrationOption` with type `VpProrationOption?`
* Added new field `RolloverPeriodType` with type `RolloverPeriodType?`
* Added new field `RolloverEndDateType` with type `RolloverEndDateType?`
* Added new field `TotalEntitledQuantity` with type `string`
* Added new field `TotalContractValue` with type `string`
* Added new field `VpAnchorDate` with type `DateOnly?`
* Added new field `SpecificValidityPeriodLength` with type `int?`
* Added new field `RolloverFundPriority` with type `int?`
* Added new field `RolloverEndDate` with type `DateOnly?`
* Added new field `FundSupportAccountHierarchy` with type `bool?`
* Added new field `DrawdownPriority` with type `int?`

## UpdateDiscountInvoiceItem

* Added a new parameter `accountsReceivableAccountingCode` to the constructor of the UpdateDiscountInvoiceItem class.
* Added a new property `AccountsReceivableAccountingCode` to the UpdateDiscountInvoiceItem class.

## UpdateInvoiceItem

* Added a new parameter `accountsReceivableAccountingCode` to the constructor of the UpdateInvoiceItem class.
* Added a new property `AccountsReceivableAccountingCode` to the UpdateInvoiceItem class.

## UpdateProductRatePlanChargeRequest

* Added new field `CommitmentLevel` of type `CommitmentLevel?`
* Added new field `VpAlignment` of type `VpAlignment?`
* Added new field `VpProrationOption` of type `VpProrationOption?`
* Added new field `RolloverPeriodType` of type `RolloverPeriodType?`
* Added new field `RolloverEndDateType` of type `RolloverEndDateType?`
* Added new field `DrawdownPriority` of type `int?`
* Added new field `SpecificValidityPeriodLength` of type `int?`
* Added new field `RolloverFundPriority` of type `int?`
* Added new field `FundSupportAccountHierarchy` of type `bool?`
* Added new constructor parameters: `commitmentLevel`, `vpAlignment`, `vpProrationOption`, `specificValidityPeriodLength`, `rolloverPeriodType`, `rolloverFundPriority`, `rolloverEndDateType`, `fundSupportAccountHierarchy`, `drawdownPriority`

## UpsertCreateCommitmentInputAllOfSchedules

* Constructor parameter change: Added `CustomAmountConfig customAmount` as a new parameter to the constructor `UpsertCreateCommitmentInputAllOfSchedules`.
* New field added: `CustomAmountConfig CustomAmount` with DataMember attribute `customAmount`.

## UpsertCreateCommitmentScheduleInput

* Constructor parameter change: Added `CustomAmountConfig customAmount` as a new parameter to the constructor.
* Added new property `CustomAmount` of type `CustomAmountConfig` to the class.

## UpsertUpdateCommitmentScheduleInput

* Constructor parameter changes: New parameters added - `periodType`, `specificPeriodLength`, `startDate`, `endDate`, `customAmount`, `clearCustomAmount`.
* New field added: `PeriodType` of type `PeriodTypeEnum?`
* New field added: `SpecificPeriodLength` of type `int?`
* New field added: `StartDate` of type `DateOnly?`
* New field added: `EndDate` of type `DateOnly?`
* New field added: `CustomAmount` of type `CustomAmountConfig`
* New field added: `ClearCustomAmount` of type `bool?`

## ValidityPeriodType

* Enum value `SPECIFICDAYS` added with value `SPECIFIC_DAYS`
* Enum value `SPECIFICWEEKS` added with value `SPECIFIC_WEEKS`
* Enum value `SPECIFICMONTHS` added with value `SPECIFIC_MONTHS`
