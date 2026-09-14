---
markdown:
  toc:
    hide: false
---

# Java client library 3.10.0 changelog

## ZuoraClient

* Updated the client behavior when fetching an OAuth bearer token. Based on the existing HttpClient, a new ApiClient is now generated to fetch a bearer token. With this change, only the headers required by ApiClient are used while other headers are ignored.



## ObjectQueriesApi

* Renamed methods and classes related to `CommitmentCycle` to `CommitmentPeriod`. This includes method names, class names, and API paths. Developers will need to update their code to use the new `CommitmentPeriod` terminology.

## PaymentMethodsApi

* Added support for specifying `bankAccountType` in the PAD (Pre-Authorized Debit) payment method.

## BillingPeriod

* Added a new billing period option `SPECIFIC_DAYS` to the BillingPeriod enum.

## CommitmentBaseAttributes

* Removed the `prorationOption` field and its associated methods.
* Removed the `defaultAssociationRule` field and its associated methods.
* Changed the `priority` field to be nullable.
* Added `associationRules` field as a List of AssociationRule objects.
* Added methods to manage `associationRules`, including `addAssociationRulesItem`.

## CommitmentInput

* Renamed fields: `taxCodeName` to `taxCode`, `segments` to `periods`.
* Changed priority field annotation from @Nonnull to @Nullable.
* Added fields: `associationRules`, `accountReceivableAccountingCode`, `revenueRecognitionTiming`, `revenueAmortizationMethod`.

## CommitmentOutput

* The `segments` field has been removed and replaced with `periods`. This change will require developers to update their code to use the new `periods` field instead of `segments`.
* Added new fields: `startDate`, `endDate`, and `amount` to the CommitmentOutput class, providing additional information about the commitment.


## CommonRevenueAttributes

* Added new field `accountReceivableAccountingCode`.
* Added new field `revenueRecognitionTiming`.
* Added new field `revenueAmortizationMethod`.

## CommonTaxationAttributes

* Renamed the field `taxCodeName` to `taxCode`.

## CreatePADPaymentMethod

* Added support for specifying the bank account type with the new field `bankAccountType` in the `CreatePADPaymentMethod` class.


## ExpandedCommitment

* Renamed field `taxCodeName` to `taxCode`.
* Added new fields: `revenueRecognitionTiming`, `revenueAmortizationMethod`, and `accountReceivableAccountingCode`.


## ExpandedRatePlanCharge

* The field `negotiatedPriceTable` has been removed and replaced with `isDimensionalPrice`. This change requires developers to update their code to use the new field.
* Added a new Boolean field `isDimensionalPrice` to the ExpandedRatePlanCharge class.

## PaymentMethodResponse

* Added support for `bankAccountType` in PaymentMethodResponse, allowing developers to specify and retrieve the type of bank account associated with a payment method.

## PaymentMethodResponseBankTransfer

* Added a new field `bankAccountType` of type `PaymentMethodPADBankAccountType` to the `PaymentMethodResponseBankTransfer` class.

## PreviewOptions

* Added a new field `skipTax` to the PreviewOptions class, allowing developers to bypass tax calculation during order preview, which can improve performance for customers using external tax engines.


## UpsertCreateCommitmentInput

* Removed fields: `prorationOption`, `defaultAssociationRule`, `cyclePeriodType`, `specificCyclePeriodLength`, `excludeItemBookingFromRevenueAccounting`, `taxCodeName`, `segments`.
* Changed field: `priority` is now nullable.
* Renamed field: `taxCodeName` to `taxCode`.
* Renamed field: `segments` to `periods`.
* Added fields: `associationRules`, `accountReceivableAccountingCode`, `revenueRecognitionTiming`, `revenueAmortizationMethod`.


## UpsertUpdateCommitmentInput

* Removed the `defaultAssociationRule` field and its associated methods.
* Replaced `segments` field with `periods`, including associated methods and validation logic.


## sdk/ZuoraClient (Quickstart API client)

* Updated the client behavior when fetching an OAuth bearer token. Based on the existing HttpClient, a new ApiClient is now generated to fetch a bearer token. With this change, only the headers required by ApiClient are used while other headers are ignored.
