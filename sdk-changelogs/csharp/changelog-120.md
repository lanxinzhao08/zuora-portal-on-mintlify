---
title: "C# client library 1.2.0 changelog"
sidebarTitle: "1.2.0"
---
## ObjectQueriesApi

* Renamed methods and return types from `CommitmentCycle` to `CommitmentPeriod`. This affects methods such as QueryCommitmentCycleByKey, QueryCommitmentCycles, and their async counterparts.

## BillingPeriod

* Added a new enum value `SpecificDays` with a value of 13 to the BillingPeriod model.

## CommitmentBaseAttributes

* Removed the `ProrationOption` property, which was previously required.
* Changed `DefaultAssociationRule` to `AssociationRules`, altering its type from a single `AssociationRule` to a `List<AssociationRule>`.
* The `Priority` property is no longer required.


## CommitmentInput

* Removed properties: `ProrationOption`, `CyclePeriodType`, `SpecificCyclePeriodLength`, `DefaultAssociationRule`, `ExcludeItemBookingFromRevenueAccounting`, `TaxCodeName`, `Segments`.
* Changed property: `Priority` is no longer required.
* Changed property: `Segments` replaced with `Periods`, which is now required.
* Changed property: `DefaultAssociationRule` replaced with `AssociationRules`.
* Added properties: `AccountReceivableAccountingCode`, `RevenueRecognitionTiming`, `RevenueAmortizationMethod`.
* Added validation for string length on several accounting code properties and revenue-related properties.


## CommonRevenueAttributes

* Removed the parameter `excludeItemBookingFromRevenueAccounting` from the constructor and its associated property.
* Added new parameters `accountReceivableAccountingCode`, `revenueRecognitionTiming`, and `revenueAmortizationMethod` to the constructor.
* Introduced new properties `AccountReceivableAccountingCode`, `RevenueRecognitionTiming`, and `RevenueAmortizationMethod`.
* Implemented validation for maximum length constraints on several string properties, including `AccountingCode`, `AdjustmentLiabilityAccountingCode`, `AdjustmentRevenueAccountingCode`, `ContractAssetAccountingCode`, `ContractLiabilityAccountingCode`, `ContractRecognizedRevenueAccountingCode`, `DeferredRevenueAccountingCode`, `RecognizedRevenueAccountingCode`, `RevenueRecognitionRule`, `AccountReceivableAccountingCode`, `UnbilledReceivablesAccountingCode`, `RevenueRecognitionTiming`, and `RevenueAmortizationMethod`.

## CreateOrderCreateSubscription

* Increased the maximum length for the `Notes` field from 500 to 1000 characters.

## CreatePADPaymentMethod

* Added a new optional property `BankAccountType` to the CreatePADPaymentMethod class.

## CreateSubscriptionRequest

* Increased the maximum length for the `Notes` field from 500 to 1000 characters.


## ExpandedCommitment

* Removed parameters and properties: `commitmentTemplateId` and `commitmentTemplateNumber`.
* Renamed property: `taxCodeName` to `taxCode`.
* Added new parameters and properties: `revenueRecognitionTiming`, `revenueAmortizationMethod`, and `accountReceivableAccountingCode`.

## ExpandedRatePlanCharge

* The property `NegotiatedPriceTable` has been removed and replaced with `IsDimensionalPrice`. This change requires developers to update their code to use the new property.
* Added a new boolean property `IsDimensionalPrice` to the ExpandedRatePlanCharge class.

## PaymentMethodResponseBankTransfer

* Added a new property `BankAccountType` to the PaymentMethodResponseBankTransfer class, allowing specification of the bank account type.

## PreviewOptions

* Added a new optional parameter `skipTax` to the PreviewOptions constructor, allowing developers to specify whether to skip tax calculations.

## UpsertCreateCommitmentInput

* Removed `ProrationOption`, `CyclePeriodType`, and `ExcludeItemBookingFromRevenueAccounting` properties.
* Changed `priority` from required to optional.
* Replaced `segments` with `periods` as a required property.
* Replaced `DefaultAssociationRule` with `AssociationRules`.
* Renamed `TaxCodeName` to `TaxCode`.
* Added `AccountReceivableAccountingCode`, `RevenueRecognitionTiming`, and `RevenueAmortizationMethod` properties.


## UpsertUpdateCommitmentInput

* Removed the `DefaultAssociationRule` parameter and property, which may require updates to code that relied on this field.
* Replaced `Segments` with `Periods`, which changes the expected input type from `List<UpsertCommitmentSegmentInput>` to `List<UpsertCommitmentPeriodInput>`.
