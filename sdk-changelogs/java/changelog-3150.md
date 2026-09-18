---
title: "Java client library 3.15.0 changelog"
sidebarTitle: "3.15.0"
---
## ZuoraClient

* Added BalanceTrackingApi to the ZuoraClient, allowing developers to access balance tracking functionalities.
* Added CommitmentsApi to the ZuoraClient, enabling developers to manage commitments through the API.

## AccountBillingAndPayment

* Added BcdSettingOptionEnum to specify whether the bill cycle day is set manually or automatically.
* Introduced a new field `bcdSettingOption` in the AccountBillingAndPayment class to store the bill cycle day setting option.

## ChargeModelProductRatePlanChargeRest

* Added a new charge model type `CALCULATED` to the ChargeModelProductRatePlanChargeRest enum.

## ChargeRemoval

* The `chargeNumber` field is now marked as @Nullable instead of @Nonnull, which may require developers to handle null values.
* Added a new field `uniqueToken` to the ChargeRemoval class, allowing developers to specify a unique identifier for charges.

## CreateProductRatePlanChargeRequest

* Added new field `eligibleAccountConditions` of type ExtendedGroupCondition to specify conditions for eligible accounts.
* Added new field `eligibleChargeConditions` of type ExtendedGroupCondition to specify conditions for eligible charges.

## GetProductRatePlanChargeResponse

* Added new field `eligibleAccountConditions` of type ExtendedGroupCondition to determine eligible accounts for calculated charges.
* Added new field `eligibleChargeConditions` of type ExtendedGroupCondition to determine eligible charges for calculation.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added new status values `removedDirectly` and `removedWithRatePlan` to the StatusEnum.
* Deprecated status values `removeDirectly` and `deleteWithRatePlan` in the StatusEnum.

## GetSubscriptionResponse

* Added a new field `ramp` of type SubscriptionRampResponse to the GetSubscriptionResponse class.

## OrderActionRatePlanUpdate

* Added support for chargeOverrides, allowing developers to specify charges added to the bundle rate plan.
* Added support for chargeRemovals, allowing developers to specify optional charges removed from the bundle rate plan.

## OrderActionUpdateProduct

* Replaced ChargeRemoval with GetOrderChargeRemoval for chargeRemovals.
* Replaced ChargeOverride with GetChargeOverride for chargeOverrides.

## ProductRatePlanCharge

* Added new field `eligibleAccountConditions` of type ExtendedGroupCondition to determine account eligibility for calculated charges.
* Added new field `eligibleChargeConditions` of type ExtendedGroupCondition to determine charge eligibility for calculation.

## ProductRatePlanChargeTier

* Added new fields `minimumAmount` and `maximumAmount` to the ProductRatePlanChargeTier class, allowing specification of minimum and maximum amounts for calculated charges.

## RatePlanChargeSegment

* Added new status values `removedDirectly` and `removedWithRatePlan` to the StatusEnum.
* Deprecated status values `removeDirectly` and `deleteWithRatePlan` in the StatusEnum.

## RatePlanChargeSegmentInfo

* Added new status values `removedDirectly` and `removedWithRatePlan` to the StatusEnum.
* The status values `removeDirectly` and `deleteWithRatePlan` in StatusEnum are deprecated and will be removed in future releases.

## RatePlanUpdate

* Replaced ChargeRemoval with GetOrderChargeRemoval for chargeRemovals.
* Replaced ChargeOverride with GetChargeOverride for chargeOverrides.

## TransferPayment

* Added a new field `effectiveDate` to the TransferPayment class, allowing developers to specify the date when the transfer payment takes effect.

## UpdateProductRatePlanChargeRequest

* Added new field `eligibleAccountConditions` of type ExtendedGroupCondition to specify conditions for eligible accounts.
* Added new field `eligibleChargeConditions` of type ExtendedGroupCondition to specify conditions for eligible charges.

## UpsertUpdateCommitmentInput

* Added new fields related to accounting codes and revenue recognition, including `adjustmentLiabilityAccountingCode`, `adjustmentRevenueAccountingCode`, `contractAssetAccountingCode`, `contractLiabilityAccountingCode`, `contractRecognizedRevenueAccountingCode`, `deferredRevenueAccountingCode`, `recognizedRevenueAccountingCode`, `revenueRecognitionRule`, `accountReceivableAccountingCode`, `unbilledReceivablesAccountingCode`, `revenueRecognitionTiming`, `revenueAmortizationMethod`, `taxable`, `taxCode`, and `taxMode`.
* Introduced a new enum TaxModeEnum to determine whether the tax amount is inclusive or exclusive for the transaction line item.
* Added new boolean fields `excludeItemBillingFromRevenueAccounting`, `isAllocationEligible`, and `isUnbilled` to provide additional configuration options for revenue accounting.

## Security and dependency updates

* Upgraded kotlin-stdlib from 1.9.10 to 2.1.0. It resolves CVE-2020-29582 (Medium), a temporary file/folder creation vulnerability with insecure permissions in JetBrains Kotlin. Also upgraded transitive kotlin-stdlib-jdk7 and kotlin-stdlib-jdk8 to 2.1.0, and excluded deprecated kotlin-stdlib-common (merged into kotlin-stdlib in Kotlin 2.x).
* Upgraded jackson-databind from 2.14.0-rc2 to 2.16.1. It resolves CVE-2023-35116 (Medium), a potential Denial of Service vulnerability via deeply nested JSON input. Also aligns jackson-databind with the jackson-core and jackson-annotations versions (2.16.1) already in the dependency tree.
