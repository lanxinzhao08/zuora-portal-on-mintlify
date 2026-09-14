---
markdown:
  toc:
    hide: false
---

# Python client library 3.10.0 changelog

## \_\_init\_\_

* Removed imports related to commitment segments and cycles, such as CommitmentCycleAttributes, CommitmentOutputSegmentsInner, CommitmentSegmentAttributes, CommitmentSegmentBaseAttributes, CommitmentSegmentInput, ExpandedCommitmentCycle, ExpandedCommitmentSegment, QueryCommitmentCyclesResponse, QueryCommitmentSegmentsResponse, UpsertCommitmentSegmentInput, UpsertCreateCommitmentInputAllOfSegments, UpsertCreateCommitmentSegmentInput, and UpsertUpdateCommitmentSegmentInput.
* Removed CyclePeriodTypeEnum and ProrationOptionEnum imports.
* Added imports related to commitment periods, such as CommitmentOutputPeriodsInner, CommitmentPeriodAttributes, CommitmentPeriodInput, ExpandedCommitmentPeriod, QueryCommitmentPeriodsResponse, UpsertCommitmentPeriodInput, UpsertCreateCommitmentInputAllOfPeriods, UpsertCreateCommitmentPeriodInput, and UpsertUpdateCommitmentPeriodInput.
* Added PaymentMethodPADBankAccountType import.

## payment\_methods\_api

* Added `bankAccountType` field to the PAD (Pre-Authorized Debit) payment method request body.

## models/\_\_init\_\_

* Removed imports related to commitment segments: CommitmentCycleAttributes, CommitmentOutputSegmentsInner, CommitmentSegmentAttributes, CommitmentSegmentBaseAttributes, CommitmentSegmentInput, ExpandedCommitmentCycle, ExpandedCommitmentSegment, UpsertCommitmentSegmentInput, UpsertCreateCommitmentInputAllOfSegments, UpsertCreateCommitmentSegmentInput, UpsertUpdateCommitmentSegmentInput.
* Removed CyclePeriodTypeEnum and ProrationOptionEnum imports.
* Added imports related to commitment periods: CommitmentOutputPeriodsInner, CommitmentPeriodAttributes, CommitmentPeriodInput, ExpandedCommitmentPeriod, QueryCommitmentPeriodsResponse, UpsertCommitmentPeriodInput, UpsertCreateCommitmentInputAllOfPeriods, UpsertCreateCommitmentPeriodInput, UpsertUpdateCommitmentPeriodInput.
* Added PaymentMethodPADBankAccountType import.

## billing\_period

* Added a new billing period option `SPECIFIC_DAYS` to the BillingPeriod enum.

## commitment\_base\_attributes

* Removed `proration_option` field from CommitmentBaseAttributes.
* Changed `priority` field from a required StrictInt to an optional StrictInt.
* Replaced `default_association_rule` with `association_rules`, changing from a single AssociationRule to a list of AssociationRules.

## commitment\_input

* Removed `proration_option`, `cycle_period_type`, `specific_cycle_period_length`, and `exclude_item_booking_from_revenue_accounting` fields.
* Replaced `segments` with `periods`.
* Renamed `tax_code_name` to `tax_code`.
* Changed `default_association_rule` to `association_rules` which is now a list.
* Added `account_receivable_accounting_code`, `revenue_recognition_timing`, and `revenue_amortization_method` fields.

## commitment\_output

* The `segments` attribute has been removed and replaced with `periods`. This change requires developers to update their code to use `periods` instead of `segments`.
* Added `start_date` and `end_date` attributes to define the start and end dates of the commitment.
* Introduced `amount` attribute to specify the total amount of the commitment.


## common\_revenue\_attributes

* Added new fields: `account_receivable_accounting_code`, `revenue_recognition_timing`, and `revenue_amortization_method`.

## common\_taxation\_attributes

* Renamed the field `taxCodeName` to `taxCode`. This change requires developers to update their code to use the new field name.

## create\_order\_create\_subscription

* Increased the maximum length of the `notes` field from 500 to 1000 characters, allowing for more detailed notes about the subscription.

## create\_pad\_payment\_method

* Added optional field `bankAccountType` to the CreatePADPaymentMethod model, allowing specification of the bank account type.

## create\_subscription\_request

* Increased the maximum length of the `notes` field from 500 to 1000 characters.


## expanded\_commitment

* Removed fields `commitmentTemplateId` and `commitmentTemplateNumber`.
* Renamed field `taxCodeName` to `taxCode`.
* Added fields `revenueRecognitionTiming`, `revenueAmortizationMethod`, and `accountReceivableAccountingCode`.


## expanded\_rate\_plan\_charge

* The `negotiatedPriceTable` field has been removed and replaced with `isDimensionalPrice`. This change requires updates to any code referencing `negotiatedPriceTable`.

## order\_action\_create\_subscription

* Increased the maximum length of the `notes` field from 500 to 1000 characters, allowing for more detailed notes about the subscription.

## payment\_method\_response

* Added `bankAccountType` as a new optional field in the PaymentMethodResponse model.

## payment\_method\_response\_bank\_transfer

* Added `bank_account_type` field to the PaymentMethodResponseBankTransfer model, allowing specification of the bank account type.

## preview\_options

* Added `skip_tax` field to PreviewOptions model, allowing developers to bypass tax calculation during order preview, which can improve performance.

## preview\_order\_create\_subscription

* Increased the maximum length of the `notes` field from 500 to 1000 characters.

## preview\_subscription\_request

* Increased the maximum length of the `notes` field from 500 to 1000 characters.


## subscription\_data

* Increased the maximum length of the `notes` field from 500 to 1000 characters, allowing for more detailed subscription notes.

## update\_subscription\_request

* Increased the maximum length of the `notes` field from 500 to 1000 characters.


## upsert\_create\_commitment\_input

* Removed `proration_option`, `cycle_period_type`, `specific_cycle_period_length`, and `default_association_rule` fields.
* Replaced `segments` with `periods`.
* Renamed `tax_code_name` to `tax_code`.
* Added `association_rules` field.
* Added `account_receivable_accounting_code`, `revenue_recognition_timing`, and `revenue_amortization_method` fields.
* Enhanced accounting code fields with strict validation and max length constraints using Annotated.

## upsert\_update\_commitment\_input

* Removed `default_association_rule` field from UpsertUpdateCommitmentInput model.
* Replaced `segments` field with `periods` field in UpsertUpdateCommitmentInput model.

