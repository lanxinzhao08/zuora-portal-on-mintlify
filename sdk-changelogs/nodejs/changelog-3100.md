---
markdown:
  toc:
    hide: false
---

# Node.js client library 3.10.0 changelog

## ObjectQueriesApi

* Renamed methods related to CommitmentCycle to CommitmentPeriod, including queryCommitmentCycleByKeyWithHttpInfo to queryCommitmentPeriodByKeyWithHttpInfo, queryCommitmentCycleByKey to queryCommitmentPeriodByKey, queryCommitmentCyclesWithHttpInfo to queryCommitmentPeriodsWithHttpInfo, and queryCommitmentCycles to queryCommitmentPeriods.

* Removed methods related to CommitmentSegment, including queryCommitmentSegmentByKeyWithHttpInfo, queryCommitmentSegmentByKey, queryCommitmentSegmentsWithHttpInfo, and queryCommitmentSegments.

## PaymentMethodsApi

* Added `bankAccountType` field to the PAD (Pre-Authorized Debit) payment method request body.

## index

* Replaced CommitmentSegment-related imports and exports with CommitmentPeriod-related ones.

## BillingPeriod

* Added a new billing period type `Specific_Days` to the BillingPeriod enum.

## CommitmentBaseAttributes

* Removed `priority` and `prorationOption` from the constructor and required properties.
* Replaced `defaultAssociationRule` with `associationRules`, which is now an array.


## CommitmentInput

* Removed CommitmentCycleAttributes and related properties: cyclePeriodType, specificCyclePeriodLength, and excludeItemBookingFromRevenueAccounting.
* Replaced `segments` with `periods`, changing the constructor and required properties.
* Removed `prorationOption` and `defaultAssociationRule` properties.
* Changed `taxCodeName` to `taxCode`.
* Added `associationRules` as an array of AssociationRule.
* Added new properties: `accountReceivableAccountingCode`, `revenueRecognitionTiming`, and `revenueAmortizationMethod`.

## CommitmentOutput

* Renamed `segments` to `periods`. This change requires developers to update their code to use `periods` instead of `segments`.
* Added `startDate` property to represent the start date of the commitment.
* Added `endDate` property to represent the end date of the commitment.
* Added `amount` property to represent the total amount of the commitment.


## CommonRevenueAttributes

* Removed `excludeItemBookingFromRevenueAccounting` property, which may require updates to code that relies on this field.
* Added `accountReceivableAccountingCode` property for specifying the accounting code on the Commitment object.
* Added `revenueRecognitionTiming` property to dictate the type of revenue recognition timing.
* Added `revenueAmortizationMethod` property to dictate the type of revenue amortization method.

## CommonTaxationAttributes

* Renamed the property `taxCodeName` to `taxCode`. This change requires developers to update their code to use the new property name.

## CreatePADPaymentMethod

* Added support for `bankAccountType` in CreatePADPaymentMethod, allowing specification of the bank account type using PaymentMethodPADBankAccountType.


## ExpandedCommitment

* Removed properties `commitmentTemplateId` and `commitmentTemplateNumber`.
* Renamed property `taxCodeName` to `taxCode`.
* Added new properties: `revenueRecognitionTiming`, `revenueAmortizationMethod`, and `accountReceivableAccountingCode`.


## ExpandedRatePlanCharge

* The `negotiatedPriceTable` property has been removed and replaced with `isDimensionalPrice`. This change requires developers to update their code to use `isDimensionalPrice` as a Boolean instead of `negotiatedPriceTable` as a String.

## PaymentMethodResponse

* Added support for `bankAccountType` in `PaymentMethodResponse` and `PaymentMethodResponseBankTransfer` models.

## PaymentMethodResponseBankTransfer

* Added support for `bankAccountType` in PaymentMethodResponseBankTransfer, allowing developers to specify the type of bank account using the PaymentMethodPADBankAccountType model.

## PreviewOptions

* Added a new property `skipTax` to the PreviewOptions class, allowing developers to bypass tax calculation during order preview. This can improve performance for customers using external tax engines.

## PreviewSubscriptionRequest

* Increased the maximum length of the `notes` field from 500 to 1000 characters.

## UpsertCommitmentInput

* Removed `prorationOption`, `defaultAssociationRule`, `cyclePeriodType`, `specificCyclePeriodLength`, `excludeItemBookingFromRevenueAccounting`, and `segments` properties.
* Renamed `taxCodeName` to `taxCode`.
* Added `associationRules`, `accountReceivableAccountingCode`, `revenueRecognitionTiming`, `revenueAmortizationMethod`, and `periods` properties.


## UpsertCreateCommitmentInput

* Removed parameters `priority`, `proration_option`, and `segments` from the constructor and replaced `segments` with `periods`.
* Removed `prorationOption`, `defaultAssociationRule`, `cyclePeriodType`, `specificCyclePeriodLength`, and `excludeItemBookingFromRevenueAccounting` properties.
* Renamed `taxCodeName` to `taxCode`.
* Added `periods` parameter to the constructor.
* Introduced `associationRules`, `accountReceivableAccountingCode`, `revenueRecognitionTiming`, and `revenueAmortizationMethod` properties.

## UpsertUpdateCommitmentInput

* The `segments` property has been replaced with `periods`. Developers need to update their code to use `periods` instead of `segments`.
* The `defaultAssociationRule` property has been removed. Any code relying on this property will need to be updated.

