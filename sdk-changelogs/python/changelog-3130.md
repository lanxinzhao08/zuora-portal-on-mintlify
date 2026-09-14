---
markdown:
  toc:
    hide: false
---

# Python client library 3.13.0 changelog


## \_\_init\_\_

* Added new model imports: AmountBaseEnum, BaseRevenueAttributes, CommitmentOutputSchedulesInner, CommitmentScheduleAttributes, CommitmentScheduleInput, CommitmentScheduleOutput, CommitmentScheduleStatus, CommitmentScheduleStatusOutput, CommitmentStatusInput, CommitmentStatusOutput, CommonRevenueAttributesOutput, PeriodAlignmentOptionEnum, PeriodTypeEnum, UpsertCommitmentScheduleInput, UpsertCreateCommitmentInputAllOfSchedules, UpsertCreateCommitmentScheduleInput, UpsertUpdateCommitmentScheduleInput.

## object\_queries\_api

* Added support for expanding `invoiceschedule` and `invoicescheduleitem` in query methods for CreditMemoItem and InvoiceItem.

## payment\_methods\_api

* Added support for creating payment methods with the PayPal Complete Payments gateway integration.

## models/\_\_init\_\_

* Added AmountBaseEnum to the models.
* Added BaseRevenueAttributes to the models.
* Added CommitmentOutputSchedulesInner to the models.
* Added CommitmentScheduleAttributes, CommitmentScheduleInput, CommitmentScheduleOutput, CommitmentScheduleStatus, CommitmentScheduleStatusOutput to the models.
* Added CommitmentStatusInput and CommitmentStatusOutput to the models.
* Added CommonRevenueAttributesOutput to the models.
* Added PeriodAlignmentOptionEnum and PeriodTypeEnum to the models.
* Added UpsertCommitmentScheduleInput to the models.
* Added UpsertCreateCommitmentInputAllOfSchedules and UpsertCreateCommitmentScheduleInput to the models.
* Added UpsertUpdateCommitmentScheduleInput to the models.

## commitment\_base\_attributes

* The `eligible_account_conditions` field is no longer optional. It has been changed from `Optional[Condition]` to `Condition`, which means it must now be provided when creating or updating a CommitmentBaseAttributes object.

## commitment\_input

* The `eligible_account_conditions` field is no longer optional and must be provided.
* The `exclude_item_booking_from_revenue_accounting` field has been removed.
* Added `period_alignment_option` field of type PeriodAlignmentOptionEnum.
* Added `specific_period_alignment_date` field of type date.
* Added `schedules` field which is a list of CommitmentScheduleInput.

## commitment\_output

* Added `total_amount` field to represent the total amount of the commitment.
* Introduced `status` field to include the commitment status.
* Added `schedules` field to include a list of commitment schedules.

## expanded\_commitment

* Removed fields: `cycle_period_type`, `cycle_period_length`, `cycle_day_type`, `cycle_day`, `cycle_alignment_date`, `accounting_code`, `exclude_item_booking_from_revenue_accounting`, `proration_option` from the ExpandedCommitment model.
* Added new field: `status` to the ExpandedCommitment model.

## expanded\_credit\_memo\_item

* Added new optional fields `invoiceSchedule` and `invoiceScheduleItem` to the ExpandedCreditMemoItem model.
* Implemented custom serialization for `invoiceSchedule` and `invoiceScheduleItem` using their respective `to_dict()` methods.

## expanded\_invoice\_item

* Added new optional fields `invoiceSchedule` and `invoiceScheduleItem` to the ExpandedInvoiceItem model.

## expanded\_invoice\_schedule

* Added a call to ExpandedInvoiceSchedule.model\_rebuild with raise\_errors set to False.

## expanded\_invoice\_schedule\_booking

* Added a call to model\_rebuild with raise\_errors set to False, which may impact error handling behavior during model rebuilding.

## get\_commitment\_output

* The `eligible_account_conditions` field is now mandatory and no longer optional.
* Added `period_alignment_option` field of type `PeriodAlignmentOptionEnum`.
* Added `specific_period_alignment_date` field of type `date`.
* Added `schedules` field which is a list of `CommitmentScheduleOutput`.

## upsert\_create\_commitment\_input

* Changed `eligible_account_conditions` from Optional to mandatory, which may require developers to ensure this field is always provided.
* Removed `exclude_item_booking_from_revenue_accounting` field, which may affect existing implementations relying on this field.
* Added `period_alignment_option` field to specify period alignment options.
* Added `specific_period_alignment_date` field to allow setting a specific date for period alignment.
* Introduced `schedules` field for creating new commitments with auto-generated periods.

## upsert\_update\_commitment\_input

* Replaced `commitment_number`, `name`, and `description` fields from StrictStr to Annotated[str, Field(strict=True, max_length=...)] which may require developers to ensure their input strings adhere to the specified max lengths.
* Added `schedules` field to the UpsertUpdateCommitmentInput model, allowing developers to include commitment schedules in their input.
