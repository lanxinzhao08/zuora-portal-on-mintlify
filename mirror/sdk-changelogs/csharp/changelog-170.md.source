---
markdown:
  toc:
    hide: false
---

# C# client library 1.7.0 changelog

## ZuoraClient

* Added BalanceTrackingApi to the ZuoraClient, allowing developers to access balance tracking functionalities.
* Added CommitmentsApi to the ZuoraClient, providing access to commitments-related operations.

## AccountBillingAndPayment

* Added BcdSettingOptionEnum to define billing cycle day setting options with values ManualSet and AutoSet.
* Introduced a new property `BcdSettingOption` in the AccountBillingAndPayment class to specify the billing cycle day setting option.

## ChargeModelProductRatePlanChargeRest

* Added a new charge model type `Calculated` to the ChargeModelProductRatePlanChargeRest enum.

## ChargeRemoval

* Removed the requirement for `chargeNumber` to be non-null, which may affect validation logic in existing implementations.
* Added a new property `uniqueToken` to the ChargeRemoval class, allowing for additional identification of charges.

## CreateProductRatePlanChargeRequest

* Added new parameters `eligibleAccountConditions` and `eligibleChargeConditions` to the CreateProductRatePlanChargeRequest constructor.
* Introduced properties `EligibleAccountConditions` and `EligibleChargeConditions` of type ExtendedGroupCondition.

## GetProductRatePlanChargeResponse

* Added new properties `EligibleAccountConditions` and `EligibleChargeConditions` to the GetProductRatePlanChargeResponse class.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added new enum value `RemovedDirectly` with value 3.
* Added new enum value `RemovedWithRatePlan` with value 4.
* Deprecated status values `removeDirectly` and `deleteWithRatePlan` in the StatusEnum.

## GetSubscriptionResponse

* Added a new property `Ramp` of type `SubscriptionRampResponse` to the GetSubscriptionResponse class.

## OrderActionRatePlanUpdate

* Added support for chargeOverrides with a new parameter in the constructor and corresponding property.
* Added support for chargeRemovals with a new parameter in the constructor and corresponding property.

## OrderActionUpdateProduct

* The type for `ChargeRemovals` has changed from `List<ChargeRemoval>` to `List<GetOrderChargeRemoval>`.
* The type for `ChargeOverrides` has changed from `List<ChargeOverride>` to `List<GetChargeOverride>`.

## ProductRatePlanCharge

* Added new parameters `eligibleAccountConditions` and `eligibleChargeConditions` to the ProductRatePlanCharge constructor.
* Introduced new properties `EligibleAccountConditions` and `EligibleChargeConditions` of type ExtendedGroupCondition.

## ProductRatePlanChargeTier

* Added new properties `MinimumAmount` and `MaximumAmount` to the ProductRatePlanChargeTier class.

## RatePlanChargeSegment

* Added new enum value `RemovedDirectly` with value 3.
* Added new enum value `RemovedWithRatePlan` with value 4.
* Deprecated status values `removeDirectly` and `deleteWithRatePlan` in the StatusEnum.

## RatePlanChargeSegmentInfo

* Added new enum value `RemovedDirectly` with value 3.
* Added new enum value `RemovedWithRatePlan` with value 4.
* Deprecated status values `removeDirectly` and `deleteWithRatePlan` in the StatusEnum.

## RatePlanUpdate

* Changed type of ChargeRemovals from `List<ChargeRemoval>` to `List<GetOrderChargeRemoval>`.
* Changed type of ChargeOverrides from `List<ChargeOverride>` to `List<GetChargeOverride>`.

## TransferPayment

* Added a new parameter `effectiveDate` to the TransferPayment constructor, allowing developers to specify an effective date for the transfer payment.

## UpdateProductRatePlanChargeRequest

* Added new parameters `eligibleAccountConditions` and `eligibleChargeConditions` to the UpdateProductRatePlanChargeRequest constructor.
* Introduced new properties `EligibleAccountConditions` and `EligibleChargeConditions` in the UpdateProductRatePlanChargeRequest class.

## UpsertUpdateCommitmentInput

* Added new enum TaxModeEnum with values TaxInclusive and TaxExclusive.
* Introduced new properties: `AdjustmentLiabilityAccountingCode`, `AdjustmentRevenueAccountingCode`, `ContractAssetAccountingCode`, `ContractLiabilityAccountingCode`, `ContractRecognizedRevenueAccountingCode`, `DeferredRevenueAccountingCode`, `ExcludeItemBillingFromRevenueAccounting`, `IsAllocationEligible`, `IsUnbilled`, `RecognizedRevenueAccountingCode`, `RevenueRecognitionRule`, `AccountReceivableAccountingCode`, `UnbilledReceivablesAccountingCode`, `RevenueRecognitionTiming`, `RevenueAmortizationMethod`, `Taxable`, `TaxCode`, and `TaxMode`.
* Implemented validation for new properties with specific length constraints.
