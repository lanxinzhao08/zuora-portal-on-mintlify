---
markdown:
  toc:
    hide: false
---

# Java client library 3.19.0 changelog

## ObjectQueriesApi

* Added import com.zuora.model.ExpandedChildCommitmentLink.
* Added import com.zuora.model.ExpandedCostEvent.
* Added import com.zuora.model.QueryChildCommitmentLinksResponse.
* Added import com.zuora.model.QueryCostEventsResponse.
* Added method queryChildCommitmentLinkByKeyApi(String key) to query ChildCommitmentLink by key with filters, expands, and sorting.
* Added method queryChildCommitmentLinksApi() to query ChildCommitmentLink objects with filters, expands, and sorting.
* Added method queryCostEventByKeyApi(String key) to query CostEvent by key with filters, expands, and sorting.
* Added method queryCostEventsApi() to query CostEvent objects with filters, expands, and sorting.

## ChargeOverride

* Added new field `validityPeriodAlignment`.
* Added new field `validityPeriodAnchorDate`.
* Added new field `validityPeriodProrationOption`.
* Deprecated field `vpAnchorDate`. Use `validityPeriodAnchorDate` instead.

## CreateOrderOrderLineItem

* Added new field `prepaidQuantity`.
* Added new field `prepaidUom`.
* Added new field `drawdownPriority`.
* Added new enum PrepaymentUnitTypeEnum with values `UNIT` and `CURRENCY`.
* Added new field `prepaymentUnitType`.
* Added new enum DrawdownScopeEnum with values `SUBSCRIPTION` and `ACCOUNT`.
* Added new field `drawdownScope`.
* Added new enum FundCreditOptionEnum with values `FullCreditBack`, `NoCreditBack`, `ConsumptionBased`, `TimeBased`, and `Custom`.
* Added new field `fundCreditOption`.
* Added new field `fundSupportAccountHierarchy`.
* Added new enum VpProrationOptionEnum with values `ProrateUnits` and `NoProrate`.
* Added new field `vpProrationOption`.
* Added new field `isRollover`.
* Added new field `rolloverPeriods`.
* Added new field `rolloverPeriodLength`.
* Added new field `rolloverPeriodType`.
* Added new field `rolloverApply`.
* Added new field `rolloverFundPriority`.
* Added new field `rolloverEndDateType`.
* Added new field `rolloverEndDate`.

## ExpandedAccount

* Added new field `eReportingProfileId` to the ExpandedAccount class.

## ExpandedChildCommitment

* Removed field `childCommitmentId`.
* Removed field `childCommitment`.
* Changed field `parentCommitmentId` from @Nonnull to @Nullable.
* Changed field `commitmentNumber` from @Nonnull to @Nullable.
* Changed field `version` from @Nonnull to @Nullable.
* Changed field `name` from @Nonnull to @Nullable.
* Changed field `status` from @Nonnull to @Nullable.
* Changed field `type` from @Nonnull to @Nullable.
* Changed field `description` from @Nonnull to @Nullable.
* Changed field `priority` from @Nonnull to @Nullable.
* Changed field `accountId` from @Nonnull to @Nullable.
* Changed field `accountNumber` from @Nonnull to @Nullable.
* Changed field `commitmentOwnerId` from @Nonnull to @Nullable.
* Changed field `commitmentOwnerNumber` from @Nonnull to @Nullable.
* Changed field `orderNumber` from @Nonnull to @Nullable.
* Changed field `currency` from @Nonnull to @Nullable.
* Changed field `taxable` from @Nonnull to @Nullable.
* Changed field `taxCode` from @Nonnull to @Nullable.
* Changed field `taxMode` from @Nonnull to @Nullable.
* Changed field `startDate` from @Nonnull to @Nullable.
* Changed field `endDate` from @Nonnull to @Nullable.
* Changed field `totalAmount` from @Nonnull to @Nullable.
* Changed field `prepaymentType` from @Nonnull to @Nullable.
* Changed field `periodAlignmentOption` from @Nonnull to @Nullable.
* Changed field `specificPeriodAlignmentDate` from @Nonnull to @Nullable.
* Changed field `cancellationEffectiveDate` from @Nonnull to @Nullable.
* Changed field `cancellationPolicy` from @Nonnull to @Nullable.
* Changed field `isAllocationEligible` from @Nonnull to @Nullable.
* Changed field `isUnbilled` from @Nonnull to @Nullable.
* Changed field `eligibleAccountConditions` from @Nonnull to @Nullable.
* Changed field `eligibleChargeConditions` from @Nonnull to @Nullable.
* Changed field `revenueRecognitionRuleName` from @Nonnull to @Nullable.
* Changed field `revenueRecognitionTiming` from @Nonnull to @Nullable.
* Changed field `revenueAmortizationMethod` from @Nonnull to @Nullable.
* Changed field `excludeItemBillingFromRevenueAccounting` from @Nonnull to @Nullable.
* Changed field `adjustmentLiabilityAccountingCode` from @Nonnull to @Nullable.
* Changed field `adjustmentRevenueAccountingCode` from @Nonnull to @Nullable.
* Changed field `contractAssetAccountingCode` from @Nonnull to @Nullable.
* Changed field `contractLiabilityAccountingCode` from @Nonnull to @Nullable.
* Changed field `contractRecognizedRevenueAccountingCode` from @Nonnull to @Nullable.
* Changed field `deferredRevenueAccountingCode` from @Nonnull to @Nullable.
* Changed field `recognizedRevenueAccountingCode` from @Nonnull to @Nullable.
* Changed field `unbilledReceivablesAccountingCode` from @Nonnull to @Nullable.
* Changed field `accountReceivableAccountingCode` from @Nonnull to @Nullable.
* Added field `parentCommitmentId`.
* Added field `commitmentNumber`.
* Added field `version`.
* Added field `name`.
* Added field `status`.
* Added field `type`.
* Added field `description`.
* Added field `priority`.
* Added field `accountId`.
* Added field `accountNumber`.
* Added field `commitmentOwnerId`.
* Added field `commitmentOwnerNumber`.
* Added field `orderNumber`.
* Added field `currency`.
* Added field `taxable`.
* Added field `taxCode`.
* Added field `taxMode`.
* Added field `startDate`.
* Added field `endDate`.
* Added field `totalAmount`.
* Added field `prepaymentType`.
* Added field `periodAlignmentOption`.
* Added field `specificPeriodAlignmentDate`.
* Added field `cancellationEffectiveDate`.
* Added field `cancellationPolicy`.
* Added field `isAllocationEligible`.
* Added field `isUnbilled`.
* Added field `eligibleAccountConditions`.
* Added field `eligibleChargeConditions`.
* Added field `revenueRecognitionRuleName`.
* Added field `revenueRecognitionTiming`.
* Added field `revenueAmortizationMethod`.
* Added field `excludeItemBillingFromRevenueAccounting`.
* Added field `adjustmentLiabilityAccountingCode`.
* Added field `adjustmentRevenueAccountingCode`.
* Added field `contractAssetAccountingCode`.
* Added field `contractLiabilityAccountingCode`.
* Added field `contractRecognizedRevenueAccountingCode`.
* Added field `deferredRevenueAccountingCode`.
* Added field `recognizedRevenueAccountingCode`.
* Added field `unbilledReceivablesAccountingCode`.
* Added field `accountReceivableAccountingCode`.
* Added field `commitmentOwner`.
* Added field `commitmentSchedules`.
* Added field `commitmentAssociatedAccounts`.
* Added field `commitmentAssociatedItems`.
* Added field `childCommitments`.

## ExpandedCreditMemo

* Added new field `eInvoiceBusinessStatusUpdateId`.
* Added new field `salesEreportingRequestId`.
* Added new field `arEreportingRequestId`.
* Added new field `eReportingARStatus`.
* Added new field `eReportingARErrorCode`.
* Added new field `eReportingARErrorMessage`.
* Added new field `eInvoiceBusinessStatus`.
* Added new field `eInvoiceBusinessStatusReason`.
* Added new field `sellerReason`.
* Added new field `eReportingSalesStatus`.
* Added new field `eReportingSalesErrorCode`.
* Added new field `eReportingSalesErrorMessage`.

## ExpandedDebitMemo

* Added new field `eInvoiceBusinessStatusUpdateId`.
* Added new field `salesEreportingRequestId`.
* Added new field `arEreportingRequestId`.
* Added new field `eReportingARStatus`.
* Added new field `eReportingARErrorCode`.
* Added new field `eReportingARErrorMessage`.
* Added new field `eInvoiceBusinessStatus`.
* Added new field `eInvoiceBusinessStatusReason`.
* Added new field `sellerReason`.
* Added new field `eReportingSalesStatus`.
* Added new field `eReportingSalesErrorCode`.
* Added new field `eReportingSalesErrorMessage`.

## ExpandedInvoice

* Added new field `eInvoiceBusinessStatusUpdateId`.
* Added new field `salesEreportingRequestId`.
* Added new field `arEreportingRequestId`.
* Added new field `eReportingARStatus`.
* Added new field `eReportingARErrorCode`.
* Added new field `eReportingARErrorMessage`.
* Added new field `eInvoiceBusinessStatus`.
* Added new field `eInvoiceBusinessStatusReason`.
* Added new field `sellerReason`.
* Added new field `eReportingSalesStatus`.
* Added new field `eReportingSalesErrorCode`.
* Added new field `eReportingSalesErrorMessage`.

## ExpandedInvoiceSchedule

* Added new field `invoiceSeparately`.
* Added new method invoiceSeparately(Boolean invoiceSeparately) to set the `invoiceSeparately` field.
* Added new method getInvoiceSeparately() to retrieve the `invoiceSeparately` field.
* Added new method setInvoiceSeparately(Boolean invoiceSeparately) to set the `invoiceSeparately` field.

## ExpandedPrepaidBalance

* Added new field `scope` of type String to the ExpandedPrepaidBalance class.
* Added new method scope(String scope) to set the `scope` field in a fluent style.
* Added new method getScope() to retrieve the `scope` field.
* Added new method setScope(String scope) to set the `scope` field.

## ExpandedPrepaidBalanceFund

* Added field `rolledOver` with the @Nullable annotation.
* Added field `expired` with the @Nullable annotation.
* Added new field `rolledOver` of type BigDecimal.
* Added new field `expired` of type BigDecimal.

## ExpandedRatePlanCharge

* Removed field `totalEntitledQuantity`.
* Removed field `totalContractValue`.
* Removed method totalEntitledQuantity(BigDecimal totalEntitledQuantity).
* Removed method getTotalEntitledQuantity().
* Removed method setTotalEntitledQuantity(BigDecimal totalEntitledQuantity).
* Removed method totalContractValue(BigDecimal totalContractValue).
* Removed method getTotalContractValue().
* Removed method setTotalContractValue(BigDecimal totalContractValue).

## GetChargeOverride

* Added new field `vpAlignment`.
* Added new field `vpProrationOption`.
* Added new field `validityPeriodAlignment`.
* Added new field `validityPeriodAnchorDate`.
* Added new field `validityPeriodProrationOption`.
* Added new field `specificValidityPeriodLength`.
* Added new field `rolloverPeriodType`.
* Added new field `rolloverFundPriority`.
* Added new field `rolloverEndDateType`.
* Added new field `rolloverEndDate`.
* Added new field `fundSupportAccountHierarchy`.
* Added new field `drawdownPriority`.
* Added new field `ratingPropertiesOverride`.
* Deprecated field `vpAnchorDate`. Use `validityPeriodAnchorDate` instead.

## GetOrderLineItem

* Added field `prepaidQuantity` of type BigDecimal.
* Added field `prepaidTotalQuantity` of type BigDecimal.
* Added field `prepaidUom` of type String.
* Added field `drawdownPriority` of type Integer.
* Added enum PrepaymentUnitTypeEnum with values `UNIT` and `CURRENCY`.
* Added field `prepaymentUnitType` of type PrepaymentUnitTypeEnum.
* Added enum DrawdownScopeEnum with values `SUBSCRIPTION` and `ACCOUNT`.
* Added field `drawdownScope` of type DrawdownScopeEnum.
* Added enum FundCreditOptionEnum with values `FullCreditBack`, `NoCreditBack`, `ConsumptionBased`, `TimeBased`, and `Custom`.
* Added field `fundCreditOption` of type FundCreditOptionEnum.
* Added field `fundSupportAccountHierarchy` of type Boolean.
* Added enum VpProrationOptionEnum with values `ProrateUnits` and `NoProrate`.
* Added field `vpProrationOption` of type VpProrationOptionEnum.
* Added field `isRollover` of type Boolean.
* Added field `rolloverPeriods` of type Integer.
* Added field `rolloverPeriodLength` of type Integer.
* Added field `rolloverPeriodType` of type String.
* Added field `rolloverApply` of type String.
* Added field `rolloverFundPriority` of type Integer.
* Added field `rolloverEndDateType` of type String.
* Added field `rolloverEndDate` of type LocalDate.
* Added constructor parameter `prepaidTotalQuantity` of type BigDecimal.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added field `vpAlignment`.
* Added field `vpProrationOption`.
* Added field `validityPeriodAlignment`.
* Added field `validityPeriodAnchorDate`.
* Added field `validityPeriodProrationOption`.
* Added field `specificValidityPeriodLength`.
* Added field `rolloverPeriodType`.
* Added field `rolloverFundPriority`.
* Added field `rolloverEndDateType`.
* Added field `rolloverEndDate`.
* Added field `fundSupportAccountHierarchy`.
* Added field `drawdownPriority`.
* Removed field `totalEntitledQuantity`.
* Removed field `totalContractValue`.
* Deprecated field `vpAnchorDate`.

## OrderLineItem

* Added new fields: `prepaidQuantity`, `prepaidTotalQuantity`, `prepaidUom`, `drawdownPriority`, `prepaymentUnitType`, `drawdownScope`, `fundCreditOption`, `fundSupportAccountHierarchy`, `vpProrationOption`, `isRollover`, `rolloverPeriods`, `rolloverPeriodLength`, `rolloverPeriodType`, `rolloverApply`, `rolloverFundPriority`, `rolloverEndDateType`, and `rolloverEndDate`.
* Added new enum PrepaymentUnitTypeEnum with values `UNIT` and `CURRENCY`.
* Added new enum DrawdownScopeEnum with values `SUBSCRIPTION` and `ACCOUNT`.
* Added new enum FundCreditOptionEnum with values `FULLCREDITBACK`, `NOCREDITBACK`, `CONSUMPTIONBASED`, `TIMEBASED`, and `CUSTOM`.
* Added new enum VpProrationOptionEnum with values `PRORATEUNITS` and `NOPRORATE`.
* Added new constructor parameter `prepaidTotalQuantity` to OrderLineItem.

## OrderLineItemType

* Added new enum value `PREPAYMENT`.

## PreviewOrderChargeOverride

* Added new field `vpAlignment`.
* Added new field `vpProrationOption`.
* Added new field `validityPeriodAlignment`.
* Added new field `validityPeriodAnchorDate`.
* Added new field `validityPeriodProrationOption`.
* Added new method vpAlignment(VpAlignment vpAlignment) to set the `vpAlignment` field.
* Added new method getVpAlignment() to retrieve the `vpAlignment` field.
* Added new method setVpAlignment(VpAlignment vpAlignment) to set the `vpAlignment` field.
* Added new method vpProrationOption(VpProrationOption vpProrationOption) to set the `vpProrationOption` field.
* Added new method getVpProrationOption() to retrieve the `vpProrationOption` field.
* Added new method setVpProrationOption(VpProrationOption vpProrationOption) to set the `vpProrationOption` field.
* Added new method validityPeriodAlignment(VpAlignment validityPeriodAlignment) to set the `validityPeriodAlignment` field.
* Added new method getValidityPeriodAlignment() to retrieve the `validityPeriodAlignment` field.
* Added new method setValidityPeriodAlignment(VpAlignment validityPeriodAlignment) to set the `validityPeriodAlignment` field.
* Added new method validityPeriodAnchorDate(LocalDate validityPeriodAnchorDate) to set the `validityPeriodAnchorDate` field.
* Added new method getValidityPeriodAnchorDate() to retrieve the `validityPeriodAnchorDate` field.
* Added new method setValidityPeriodAnchorDate(LocalDate validityPeriodAnchorDate) to set the `validityPeriodAnchorDate` field.
* Added new method validityPeriodProrationOption(VpProrationOption validityPeriodProrationOption) to set the `validityPeriodProrationOption` field.
* Added new method getValidityPeriodProrationOption() to retrieve the `validityPeriodProrationOption` field.
* Added new method setValidityPeriodProrationOption(VpProrationOption validityPeriodProrationOption) to set the `validityPeriodProrationOption` field.
* Deprecated field `vpAnchorDate`. Use `validityPeriodAnchorDate` instead.
* Deprecated method vpAnchorDate(LocalDate vpAnchorDate).
* Deprecated method getVpAnchorDate().
* Deprecated method setVpAnchorDate(LocalDate vpAnchorDate).

## RatePlanChargeSegment

* Added field `validityPeriodAlignment`.
* Added field `validityPeriodAnchorDate`.
* Added field `validityPeriodProrationOption`.
* Added field `ratingProperties`.
* Removed field `totalEntitledQuantity`.
* Removed field `totalContractValue`.
* Deprecated field `vpAnchorDate`.

## RatePlanChargeSegmentInfo

* Added field `validityPeriodAlignment`.
* Added field `validityPeriodAnchorDate`.
* Added field `validityPeriodProrationOption`.
* Added field `ratingProperties`.
* Removed field `totalEntitledQuantity`.
* Removed field `totalContractValue`.
* Deprecated field `vpAnchorDate`.

## UpsertCreateCommitmentInput

* Changed field `eligibleChargeConditions` from required to optional.
