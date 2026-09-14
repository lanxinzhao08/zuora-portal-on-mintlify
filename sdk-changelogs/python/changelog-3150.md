---
markdown:
  toc:
    hide: false
---

# Python client library 3.15.0 changelog

## \_\_init\_\_

* Added BalanceTrackingApi to the available APIs.
* Added CommitmentsApi to the available APIs.
* Introduced new models: AlignmentOptionEnum, AmountBase, AssociationRule, BasePeriod, CommitmentCommonErrorResponse, CommitmentCommonErrorResponseErrorsInner, CommitmentStatusEnum, CommonRevenueAttributes, EligibleAccountCondition, EligibleChargeCondition, ExtendedCondition, ExtendedGroupCondition, ExtendedGroupConditionConditionsInner, GetCommitmentBalance, GetCommitmentResponse, GetOrderChargeRemoval, ListCommitmentPeriodOutput, ListCommitmentScheduleOutput, ListCommitmentsOutput, ListPeriods200Response, ListSchedulesByCommitment200Response, PeriodBalance, PeriodBalanceType, PeriodFrequencyEnum, PeriodStatusResponse, ScheduleStatusOutput, SubscriptionRampResponse.

## models/\_\_init\_\_

* Added new model imports: AlignmentOptionEnum, AmountBase, AssociationRule, BasePeriod, CommitmentCommonErrorResponse, CommitmentCommonErrorResponseErrorsInner, CommitmentStatusEnum, CommonRevenueAttributes, EligibleAccountCondition, EligibleChargeCondition, ExtendedCondition, ExtendedGroupCondition, ExtendedGroupConditionConditionsInner, GetCommitmentBalance, GetCommitmentResponse, GetOrderChargeRemoval, ListCommitmentPeriodOutput, ListCommitmentScheduleOutput, ListCommitmentsOutput, ListPeriods200Response, ListSchedulesByCommitment200Response, PeriodBalance, PeriodBalanceType, PeriodFrequencyEnum, PeriodStatusResponse, ScheduleStatusOutput, SubscriptionRampResponse.

## account\_billing\_and\_payment

* Added a new field `bcd_setting_option` to the AccountBillingAndPayment model, allowing developers to specify whether the bill cycle day is set manually or automatically.

## charge\_model\_product\_rate\_plan\_charge\_rest

* Added a new pricing model `Calculated` to the ChargeModelProductRatePlanChargeRest enum.

## charge\_removal

* The `charge_number` field is now optional instead of required, which may require developers to handle None values.
* Added `unique_token` as an optional field to represent the charge in the order. Developers can now specify either `chargeNumber` or `uniqueToken`.

## create\_product\_rate\_plan\_charge\_request

* Added `eligible_account_conditions` and `eligible_charge_conditions` fields to `CreateProductRatePlanChargeRequest` class, allowing conditions to determine eligible accounts and charges for calculated charges.

## get\_product\_rate\_plan\_charge\_response

* Added `eligible_account_conditions` and `eligible_charge_conditions` fields to the GetProductRatePlanChargeResponse model, allowing conditions to determine eligible accounts and charges for calculated charges.

## get\_subscription\_rate\_plan\_charges\_with\_all\_segments

* Added new status values `removedDirectly` and `removedWithRatePlan` to the StatusEnum.
* The status values `removeDirectly` and `deleteWithRatePlan` are deprecated and will be removed in future releases.

## get\_subscription\_response

* Added a new optional field `ramp` of type `SubscriptionRampResponse` to the GetSubscriptionResponse model.

## order\_action\_rate\_plan\_update

* Added `chargeOverrides` field to support charge overrides in the UpdateProduct order action.
* Added `chargeRemovals` field to support charge removals in the UpdateProduct order action.

## order\_action\_update\_product

* Replaced `ChargeRemoval` with `GetOrderChargeRemoval` for `charge_removals`.
* Replaced `ChargeOverride` with `GetChargeOverride` for `charge_overrides`.

## product\_rate\_plan\_charge

* Added `eligible_account_conditions` field to determine which accounts are eligible for calculated charges.
* Added `eligible_charge_conditions` field to determine which charges are eligible to be calculated by this charge.

## product\_rate\_plan\_charge\_tier

* Added `minimum_amount` and `maximum_amount` fields to the ProductRatePlanChargeTier model, applicable when the ChargeModel is `Calculated`.

## rate\_plan\_charge\_segment

* Added new status values `removedDirectly` and `removedWithRatePlan` to the StatusEnum.
* The status values `removeDirectly` and `deleteWithRatePlan` are deprecated and will be removed in future releases.

## rate\_plan\_charge\_segment\_info

* Added new status values `removedDirectly` and `removedWithRatePlan` to the StatusEnum.
* The status values `removeDirectly` and `deleteWithRatePlan` are deprecated and will be removed in future releases.

## rate\_plan\_update

* Replaced ChargeRemoval with GetOrderChargeRemoval in `charge_removals` field.
* Replaced ChargeOverride with GetChargeOverride in `charge_overrides` field.

## transfer\_payment

* Added `effectiveDate` field to the TransferPayment model, allowing developers to specify the date when the transfer payment takes effect.

## update\_product\_rate\_plan\_charge\_request

* Added `eligible_account_conditions` field to specify conditions for account eligibility when `ChargeModel` is `Calculated`.
* Added `eligible_charge_conditions` field to specify conditions for charge eligibility when `ChargeModel` is `Calculated`.

## upsert\_update\_commitment\_input

* Added new optional fields for accounting codes and revenue recognition: `adjustmentLiabilityAccountingCode`, `adjustmentRevenueAccountingCode`, `contractAssetAccountingCode`, `contractLiabilityAccountingCode`, `contractRecognizedRevenueAccountingCode`, `deferredRevenueAccountingCode`, `recognizedRevenueAccountingCode`, `revenueRecognitionRule`, `accountReceivableAccountingCode`, `unbilledReceivablesAccountingCode`, `revenueRecognitionTiming`, `revenueAmortizationMethod`.
* Introduced new optional boolean fields: `excludeItemBillingFromRevenueAccounting`, `isAllocationEligible`, `isUnbilled`, `taxable`.
* Added new optional fields for tax handling: `taxCode` and `taxMode`.
* Implemented a field validator for `tax_mode` to ensure it is either `TaxInclusive` or `TaxExclusive`.

## zuora\_client

* Added balance\_tracking\_api method to access BalanceTrackingApi.
* Added commitments\_api method to access CommitmentsApi.
