---
title: "C# client library 1.11.0 changelog"
sidebarTitle: "1.11.0"
---
## ObjectQueriesApi

* Added new method QueryChildCommitmentLinkByKey with various optional parameters.
* Added new method QueryChildCommitmentLinkByKeyWithHttpInfo with various optional parameters.
* Added new method QueryChildCommitmentLinks with various optional parameters.
* Added new method QueryChildCommitmentLinksWithHttpInfo with various optional parameters.
* Added new asynchronous method QueryChildCommitmentLinkByKeyAsync with various optional parameters and a cancellation token.
* Added new asynchronous method QueryChildCommitmentLinkByKeyWithHttpInfoAsync with various optional parameters and a cancellation token.
* Added new asynchronous method QueryChildCommitmentLinksAsync with various optional parameters and a cancellation token.
* Added new asynchronous method QueryChildCommitmentLinksWithHttpInfoAsync with various optional parameters and a cancellation token.
* Added new method QueryCostEventByKey with various optional parameters.
* Added new method QueryCostEventByKeyWithHttpInfo with various optional parameters.
* Added new method QueryCostEvents with various optional parameters.
* Added new method QueryCostEventsWithHttpInfo with various optional parameters.
* Added new asynchronous method QueryCostEventByKeyAsync with various optional parameters and a cancellation token.
* Added new asynchronous method QueryCostEventByKeyWithHttpInfoAsync with various optional parameters and a cancellation token.
* Added new asynchronous method QueryCostEventsAsync with various optional parameters and a cancellation token.
* Added new asynchronous method QueryCostEventsWithHttpInfoAsync with various optional parameters and a cancellation token.

## ChargeOverride

* Added new property `ValidityPeriodAlignment` with type VpAlignment?.
* Added new property `ValidityPeriodProrationOption` with type VpProrationOption?.
* Added new property `ValidityPeriodAnchorDate` with type DateOnly?.
* Added new constructor parameters validityPeriodAlignment, validityPeriodAnchorDate, and validityPeriodProrationOption.
* Deprecated field `VpAnchorDate`. Use `ValidityPeriodAnchorDate` instead.

## CreateOrderOrderLineItem

* Added new enum PrepaymentUnitTypeEnum with values `UNIT` and `CURRENCY`.
* Added new property `PrepaymentUnitType` with type PrepaymentUnitTypeEnum.
* Added new enum DrawdownScopeEnum with values `SUBSCRIPTION` and `ACCOUNT`.
* Added new property `DrawdownScope` with type DrawdownScopeEnum.
* Added new enum FundCreditOptionEnum with values `FullCreditBack`, `NoCreditBack`, `ConsumptionBased`, `TimeBased`, and `Custom`.
* Added new property `FundCreditOption` with type FundCreditOptionEnum.
* Added new enum VpProrationOptionEnum with values `ProrateUnits` and `NoProrate`.
* Added new property `VpProrationOption` with type VpProrationOptionEnum.
* Added new properties: `PrepaidQuantity`, `PrepaidUom`, `DrawdownPriority`, `FundSupportAccountHierarchy`, `IsRollover`, `RolloverPeriods`, `RolloverPeriodLength`, `RolloverPeriodType`, `RolloverApply`, `RolloverFundPriority`, `RolloverEndDateType`, and `RolloverEndDate`.
* Added new constructor parameters prepaidQuantity, prepaidUom, drawdownPriority, prepaymentUnitType, drawdownScope, fundCreditOption, fundSupportAccountHierarchy, vpProrationOption, isRollover, rolloverPeriods, rolloverPeriodLength, rolloverPeriodType, rolloverApply, rolloverFundPriority, rolloverEndDateType, and rolloverEndDate.

## ExpandedAccount

* Added new constructor parameter eReportingProfileId.
* Added new property `EReportingProfileId`.

## ExpandedChildCommitment

* Removed constructor parameter childCommitmentId and added constructor parameter parentCommitmentId.
* Removed field `ChildCommitmentId` and added field `ParentCommitmentId`.
* Added new constructor parameters commitmentNumber, varVersion, name, status, type, description, priority, accountId, accountNumber, commitmentOwnerId, commitmentOwnerNumber, orderNumber, currency, taxable, taxCode, taxMode, startDate, endDate, totalAmount, prepaymentType, periodAlignmentOption, specificPeriodAlignmentDate, cancellationEffectiveDate, cancellationPolicy, isAllocationEligible, isUnbilled, eligibleAccountConditions, eligibleChargeConditions, revenueRecognitionRuleName, revenueRecognitionTiming, revenueAmortizationMethod, excludeItemBillingFromRevenueAccounting, adjustmentLiabilityAccountingCode, adjustmentRevenueAccountingCode, contractAssetAccountingCode, contractLiabilityAccountingCode, contractRecognizedRevenueAccountingCode, deferredRevenueAccountingCode, recognizedRevenueAccountingCode, unbilledReceivablesAccountingCode, accountReceivableAccountingCode, commitmentOwner, commitmentSchedules, commitmentAssociatedAccounts, commitmentAssociatedItems, and childCommitments.
* Added new fields: `CommitmentNumber`, `VarVersion`, `Name`, `Status`, `Type`, `Description`, `Priority`, `AccountId`, `AccountNumber`, `CommitmentOwnerId`, `CommitmentOwnerNumber`, `OrderNumber`, `Currency`, `Taxable`, `TaxCode`, `TaxMode`, `StartDate`, `EndDate`, `TotalAmount`, `PrepaymentType`, `PeriodAlignmentOption`, `SpecificPeriodAlignmentDate`, `CancellationEffectiveDate`, `CancellationPolicy`, `IsAllocationEligible`, `IsUnbilled`, `EligibleAccountConditions`, `EligibleChargeConditions`, `RevenueRecognitionRuleName`, `RevenueRecognitionTiming`, `RevenueAmortizationMethod`, `ExcludeItemBillingFromRevenueAccounting`, `AdjustmentLiabilityAccountingCode`, `AdjustmentRevenueAccountingCode`, `ContractAssetAccountingCode`, `ContractLiabilityAccountingCode`, `ContractRecognizedRevenueAccountingCode`, `DeferredRevenueAccountingCode`, `RecognizedRevenueAccountingCode`, `UnbilledReceivablesAccountingCode`, `AccountReceivableAccountingCode`, `CommitmentOwner`, `CommitmentSchedules`, `CommitmentAssociatedAccounts`, `CommitmentAssociatedItems`, and `ChildCommitments`.

## ExpandedCreditMemo

* Added new constructor parameters eInvoiceBusinessStatusUpdateId, salesEreportingRequestId, arEreportingRequestId, eReportingARStatus, eReportingARErrorCode, eReportingARErrorMessage, eInvoiceBusinessStatus, eInvoiceBusinessStatusReason, sellerReason, eReportingSalesStatus, eReportingSalesErrorCode, and eReportingSalesErrorMessage.
* Added new fields: `EInvoiceBusinessStatusUpdateId`, `SalesEreportingRequestId`, `ArEreportingRequestId`, `EReportingARStatus`, `EReportingARErrorCode`, `EReportingARErrorMessage`, `EInvoiceBusinessStatus`, `EInvoiceBusinessStatusReason`, `SellerReason`, `EReportingSalesStatus`, `EReportingSalesErrorCode`, and `EReportingSalesErrorMessage`.

## ExpandedDebitMemo

* Added new constructor parameters eInvoiceBusinessStatusUpdateId, salesEreportingRequestId, arEreportingRequestId, eReportingARStatus, eReportingARErrorCode, eReportingARErrorMessage, eInvoiceBusinessStatus, eInvoiceBusinessStatusReason, sellerReason, eReportingSalesStatus, eReportingSalesErrorCode, and eReportingSalesErrorMessage.
* Added new fields: `EInvoiceBusinessStatusUpdateId`, `SalesEreportingRequestId`, `ArEreportingRequestId`, `EReportingARStatus`, `EReportingARErrorCode`, `EReportingARErrorMessage`, `EInvoiceBusinessStatus`, `EInvoiceBusinessStatusReason`, `SellerReason`, `EReportingSalesStatus`, `EReportingSalesErrorCode`, and `EReportingSalesErrorMessage`.

## ExpandedInvoice

* Added new constructor parameters eInvoiceBusinessStatusUpdateId, salesEreportingRequestId, arEreportingRequestId, eReportingARStatus, eReportingARErrorCode, eReportingARErrorMessage, eInvoiceBusinessStatus, eInvoiceBusinessStatusReason, sellerReason, eReportingSalesStatus, eReportingSalesErrorCode, and eReportingSalesErrorMessage.
* Added new fields: `EInvoiceBusinessStatusUpdateId`, `SalesEreportingRequestId`, `ArEreportingRequestId`, `EReportingARStatus`, `EReportingARErrorCode`, `EReportingARErrorMessage`, `EInvoiceBusinessStatus`, `EInvoiceBusinessStatusReason`, `SellerReason`, `EReportingSalesStatus`, `EReportingSalesErrorCode`, and `EReportingSalesErrorMessage`.

## ExpandedInvoiceSchedule

* Added new property `InvoiceSeparately` with type bool? to the ExpandedInvoiceSchedule class.
* Added new optional constructor parameter invoiceSeparately.

## ExpandedPrepaidBalance

* Added new constructor parameter scope.
* Added new property `Scope` with type string.

## ExpandedPrepaidBalanceFund

* Added new constructor parameters rolledOver and expired.
* Added new properties: `RolledOver` and `Expired`.

## ExpandedRatePlanCharge

* Removed constructor parameters totalEntitledQuantity and totalContractValue.
* Removed fields: `TotalEntitledQuantity` and `TotalContractValue`.

## GetChargeOverride

* Added new property `VpAlignment` with type VpAlignment?.
* Added new property `VpProrationOption` with type VpProrationOption?.
* Added new property `ValidityPeriodAlignment` with type VpAlignment?.
* Added new property `ValidityPeriodProrationOption` with type VpProrationOption?.
* Added new property `RolloverPeriodType` with type RolloverPeriodType?.
* Added new property `RolloverEndDateType` with type RolloverEndDateType?.
* Added new constructor parameters vpAlignment, vpProrationOption, validityPeriodAlignment, validityPeriodAnchorDate, validityPeriodProrationOption, specificValidityPeriodLength, rolloverPeriodType, rolloverFundPriority, rolloverEndDateType, rolloverEndDate, fundSupportAccountHierarchy, drawdownPriority, and ratingPropertiesOverride.
* Added new property `ValidityPeriodAnchorDate` with type DateOnly?.
* Added new property `SpecificValidityPeriodLength` with type int?.
* Added new property `RolloverFundPriority` with type int?.
* Added new property `RolloverEndDate` with type DateOnly?.
* Added new property `FundSupportAccountHierarchy` with type bool?.
* Added new property `DrawdownPriority` with type int?.
* Added new property `RatingPropertiesOverride` with type RatingPropertiesOverride.
* Deprecated field `VpAnchorDate`. Use `ValidityPeriodAnchorDate` instead.

## GetOrderLineItem

* Added new enum PrepaymentUnitTypeEnum with values `UNIT` and `CURRENCY`.
* Added new enum DrawdownScopeEnum with values `SUBSCRIPTION` and `ACCOUNT`.
* Added new enum FundCreditOptionEnum with values `FullCreditBack`, `NoCreditBack`, `ConsumptionBased`, `TimeBased`, and `Custom`.
* Added new enum VpProrationOptionEnum with values `ProrateUnits` and `NoProrate`.
* Added new fields: `PrepaidQuantity`, `PrepaidTotalQuantity`, `PrepaidUom`, `DrawdownPriority`, `PrepaymentUnitType`, `DrawdownScope`, `FundCreditOption`, `FundSupportAccountHierarchy`, `VpProrationOption`, `IsRollover`, `RolloverPeriods`, `RolloverPeriodLength`, `RolloverPeriodType`, `RolloverApply`, `RolloverFundPriority`, `RolloverEndDateType`, and `RolloverEndDate`.
* Added new constructor parameters prepaidQuantity, prepaidUom, drawdownPriority, prepaymentUnitType, drawdownScope, fundCreditOption, fundSupportAccountHierarchy, vpProrationOption, isRollover, rolloverPeriods, rolloverPeriodLength, rolloverPeriodType, rolloverApply, rolloverFundPriority, rolloverEndDateType, and rolloverEndDate.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added new fields: `VpAlignment`, `VpProrationOption`, `ValidityPeriodAlignment`, `ValidityPeriodProrationOption`, `RolloverPeriodType`, `RolloverEndDateType`, `ValidityPeriodAnchorDate`, `SpecificValidityPeriodLength`, `RolloverFundPriority`, `RolloverEndDate`, `FundSupportAccountHierarchy`, and `DrawdownPriority`.
* Added new constructor parameters vpAlignment, vpProrationOption, validityPeriodAlignment, validityPeriodAnchorDate, validityPeriodProrationOption, specificValidityPeriodLength, rolloverPeriodType, rolloverFundPriority, rolloverEndDateType, rolloverEndDate, fundSupportAccountHierarchy, and drawdownPriority.
* Deprecated field `VpAnchorDate`. Use `ValidityPeriodAnchorDate` instead.
* Removed fields: `TotalEntitledQuantity` and `TotalContractValue`.
* Removed constructor parameters totalEntitledQuantity and totalContractValue.

## OrderLineItem

* Added new enum PrepaymentUnitTypeEnum with values `UNIT` and `CURRENCY`.
* Added new enum DrawdownScopeEnum with values `SUBSCRIPTION` and `ACCOUNT`.
* Added new enum FundCreditOptionEnum with values `FullCreditBack`, `NoCreditBack`, `ConsumptionBased`, `TimeBased`, and `Custom`.
* Added new enum VpProrationOptionEnum with values `ProrateUnits` and `NoProrate`.
* Added new properties: `PrepaidQuantity`, `PrepaidTotalQuantity`, `PrepaidUom`, `DrawdownPriority`, `PrepaymentUnitType`, `DrawdownScope`, `FundCreditOption`, `FundSupportAccountHierarchy`, `VpProrationOption`, `IsRollover`, `RolloverPeriods`, `RolloverPeriodLength`, `RolloverPeriodType`, `RolloverApply`, `RolloverFundPriority`, `RolloverEndDateType`, and `RolloverEndDate`.
* Added new constructor parameters prepaidQuantity, prepaidUom, drawdownPriority, prepaymentUnitType, drawdownScope, fundCreditOption, fundSupportAccountHierarchy, vpProrationOption, isRollover, rolloverPeriods, rolloverPeriodLength, rolloverPeriodType, rolloverApply, rolloverFundPriority, rolloverEndDateType, and rolloverEndDate.

## OrderLineItemType

* Added new enum value `Prepayment`.

## PreviewOrderChargeOverride

* Added new property `VpAlignment` with type VpAlignment?.
* Added new property `VpProrationOption` with type VpProrationOption?.
* Added new property `ValidityPeriodAlignment` with type VpAlignment?.
* Added new property `ValidityPeriodProrationOption` with type VpProrationOption?.
* Added new property `ValidityPeriodAnchorDate` with type DateOnly?.
* Added new constructor parameters vpAlignment, vpProrationOption, validityPeriodAlignment, validityPeriodAnchorDate, and validityPeriodProrationOption.
* Deprecated field `VpAnchorDate`. Use `ValidityPeriodAnchorDate` instead.

## RatePlanChargeSegment

* Added new fields: `ValidityPeriodAlignment`, `ValidityPeriodProrationOption`, `ValidityPeriodAnchorDate`, and `RatingProperties`.
* Added new constructor parameters validityPeriodAlignment, validityPeriodAnchorDate, validityPeriodProrationOption, and ratingProperties.
* Deprecated field `VpAnchorDate`. Use `ValidityPeriodAnchorDate` instead.
* Removed fields: `TotalEntitledQuantity` and `TotalContractValue`.
* Removed constructor parameters totalEntitledQuantity and totalContractValue.

## RatePlanChargeSegmentInfo

* Added new fields: `ValidityPeriodAlignment`, `ValidityPeriodProrationOption`, `ValidityPeriodAnchorDate`, and `RatingProperties`.
* Added new constructor parameters validityPeriodAlignment, validityPeriodAnchorDate, validityPeriodProrationOption, and ratingProperties.
* Deprecated field `VpAnchorDate`. Use `ValidityPeriodAnchorDate` instead.
* Removed fields: `TotalEntitledQuantity` and `TotalContractValue`.
* Removed constructor parameters totalEntitledQuantity and totalContractValue.
