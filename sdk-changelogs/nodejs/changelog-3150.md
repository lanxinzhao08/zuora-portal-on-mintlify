---
title: "Node.js client library 3.15.0 changelog"
sidebarTitle: "3.15.0"
---
## ZuoraClient

* Added BalanceTrackingApi for managing balance tracking.
* Added CommitmentsApi for handling commitments.

## src/zuora_api/index

* Added new model imports: AlignmentOptionEnum, AmountBase, AssociationRule, BasePeriod, CommitmentCommonErrorResponse, CommitmentCommonErrorResponseErrorsInner, CommitmentStatusEnum, CommonRevenueAttributes, EligibleAccountCondition, EligibleChargeCondition, ExtendedCondition, ExtendedGroupCondition, ExtendedGroupConditionConditionsInner, GetCommitmentBalance, GetCommitmentResponse, GetOrderChargeRemoval, ListCommitmentPeriodOutput, ListCommitmentScheduleOutput, ListCommitmentsOutput, ListPeriods200Response, ListSchedulesByCommitment200Response, PeriodBalance, PeriodBalanceType, PeriodFrequencyEnum, PeriodStatusResponse, ScheduleStatusOutput, SubscriptionRampResponse.
* Added new API service imports: BalanceTrackingApi, CommitmentsApi.

## AccountBillingAndPayment

* Added `bcdSettingOption` property to AccountBillingAndPayment model, allowing developers to specify whether the bill cycle day is set manually or automatically.
* Introduced `BcdSettingOptionEnum` enumeration with values `ManualSet` and `AutoSet` for the `bcdSettingOption` property.

## ChargeModelProductRatePlanChargeRest

* Added a new pricing model option `Calculated`.

## ChargeRemoval

* The constructor no longer requires `charge_number` as a parameter. This may require updates to code that instantiates ChargeRemoval objects.
* Added support for `uniqueToken` as an alternative to `chargeNumber`. Developers can now specify either `chargeNumber` or `uniqueToken` when removing a charge.

## CreateProductRatePlanChargeRequest

* Added `eligibleAccountConditions` property to specify conditions for account eligibility when `ChargeModel` is `Calculated`.
* Added `eligibleChargeConditions` property to specify conditions for charge eligibility when `ChargeModel` is `Calculated`.

## GetProductRatePlanChargeResponse

* Added `eligibleAccountConditions` property to determine which accounts are eligible for calculated charges.
* Added `eligibleChargeConditions` property to determine which charges are eligible to be calculated by this charge.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added new status values: `removedDirectly` and `removedWithRatePlan` to the StatusEnum.
* The status values `removeDirectly` and `deleteWithRatePlan` are deprecated and will be removed in future releases.

## GetSubscriptionResponse

* Added support for `ramp` field in GetSubscriptionResponse, allowing developers to access subscription ramp details.

## OrderActionRatePlanUpdate

* Added support for `chargeOverrides` which allows specifying charges added to the bundle rate plan. This feature is available with the Hard Bundle feature enabled.
* Added support for `chargeRemovals` which allows specifying optional charges removed from the bundle rate plan. This feature is available with the Hard Bundle feature enabled.

## OrderActionUpdateProduct

* Replaced `ChargeRemoval` with `GetOrderChargeRemoval` for handling charge removals.
* Replaced `ChargeOverride` with `GetChargeOverride` for handling charge overrides.

## ProductRatePlanCharge

* Added `eligibleAccountConditions` property to determine which accounts are eligible for calculated charges when `ChargeModel` is `Calculated`.
* Added `eligibleChargeConditions` property to determine which charges are eligible to be calculated by this charge when `ChargeModel` is `Calculated`.

## ProductRatePlanChargeTier

* Added `MinimumAmount` property to define the minimum amount for a tier when used in a calculated charge.
* Added `MaximumAmount` property to define the maximum amount for a tier when used in a calculated charge.

## RatePlanChargeSegment

* Added new status values: `removedDirectly` and `removedWithRatePlan` to RatePlanChargeSegment and RatePlanChargeSegmentInfo.
* Deprecated status values: `removeDirectly` and `deleteWithRatePlan`. These will be removed in future releases.

## RatePlanChargeSegmentInfo

* Added new status values `removedDirectly` and `removedWithRatePlan` to the RatePlanChargeSegmentInfo.StatusEnum.
* The status values `removeDirectly` and `deleteWithRatePlan` are deprecated and will be removed in future releases.

## RatePlanUpdate

* Replaced `ChargeRemoval` with `GetOrderChargeRemoval` for chargeRemovals.
* Replaced `ChargeOverride` with `GetChargeOverride` for chargeOverrides.

## TransferPayment

* Added `effectiveDate` property to TransferPayment model, allowing developers to specify the date when the transfer payment takes effect.

## UpdateProductRatePlanChargeRequest

* Added `eligibleAccountConditions` property to specify conditions for account eligibility when `ChargeModel` is `Calculated`.
* Added `eligibleChargeConditions` property to specify conditions for charge eligibility when `ChargeModel` is `Calculated`.

## UpsertUpdateCommitmentInput

* Added implementation of BaseRevenueAttributes and CommonTaxationAttributes interfaces.
* Introduced new properties related to revenue and taxation attributes, such as `adjustmentLiabilityAccountingCode`, `adjustmentRevenueAccountingCode`, `contractAssetAccountingCode`, `contractLiabilityAccountingCode`, `contractRecognizedRevenueAccountingCode`, `deferredRevenueAccountingCode`, `excludeItemBillingFromRevenueAccounting`, `isAllocationEligible`, `isUnbilled`, `recognizedRevenueAccountingCode`, `revenueRecognitionRule`, `accountReceivableAccountingCode`, `unbilledReceivablesAccountingCode`, `revenueRecognitionTiming`, `revenueAmortizationMethod`, `taxable`, `taxCode`, and `taxMode`.
* Added validation to ensure certain fields are of the correct primitive type (e.g., String, Boolean).
* Introduced TaxModeEnum with values `TaxInclusive` and `TaxExclusive`.
