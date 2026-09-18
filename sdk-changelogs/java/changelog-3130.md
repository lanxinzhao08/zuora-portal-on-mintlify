---
title: "Java client library 3.13.0 changelog"
sidebarTitle: "3.13.0"
---
## ObjectQueriesApi

* Added support for expanding `invoiceschedule` and `invoicescheduleitem` in queries for CreditMemoItem and InvoiceItem.

## PaymentMethodsApi

* Added support for creating payment methods with the PayPal Complete Payments gateway integration.

## CommitmentBaseAttributes

* The method getEligibleAccountConditions() is now annotated with @Nonnull, indicating it must not return null.
* `eligibleAccountConditions` is now a required field in openapiRequiredFields, which may require updates to JSON handling.

## CommitmentInput

* The field `excludeItemBookingFromRevenueAccounting` has been removed.
* The `eligibleAccountConditions` field is now required.
* The `periods` field is now optional.
* The `periodAlignmentOption` and `schedules` fields are now required.
* Added `periodAlignmentOption` field of type PeriodAlignmentOptionEnum.
* Added `specificPeriodAlignmentDate` field of type LocalDate.
* Added `schedules` field which is a list of CommitmentScheduleInput.

## CommitmentOutput

* Added new field `totalAmount` to represent the total amount of the commitment.
* Added new field `status` of type CommitmentStatusOutput to represent the status of the commitment.
* Added new field `schedules` which is a list of CommitmentOutputSchedulesInner to represent the schedules associated with the commitment.

## CommitmentStatus

* The CommitmentStatus enum has been removed, which will cause compilation errors for any code referencing this enum.

## CommonRevenueAttributes

* The entire class CommonRevenueAttributes has been removed, which will break any code relying on this class.

## ExpandedCommitment

* Removed fields: `cyclePeriodType`, `cyclePeriodLength`, `cycleDayType`, `cycleDay`, `cycleAlignmentDate`, `accountingCode`, `excludeItemBookingFromRevenueAccounting`, `prorationOption`. This may affect any code relying on these fields.
* Added new field: `status`. This allows developers to set and retrieve the status of an ExpandedCommitment.

## ExpandedCreditMemoItem

* Added new field `invoiceSchedule` of type ExpandedInvoiceSchedule.
* Added new field `invoiceScheduleItem` of type ExpandedInvoiceScheduleItem.

## ExpandedInvoiceItem

* Added new fields `invoiceSchedule` and `invoiceScheduleItem` to the ExpandedInvoiceItem class.

## GetCommitmentOutput

* The field `eligibleAccountConditions` is now required, which may require developers to update their code to ensure this field is provided.
* Added new field `periodAlignmentOption` of type PeriodAlignmentOptionEnum.
* Added new field `specificPeriodAlignmentDate` of type LocalDate.
* Added new field `schedules` which is a list of CommitmentScheduleOutput.

## UpsertCreateCommitmentInput

* Removed the field `excludeItemBookingFromRevenueAccounting`.
* Changed `eligibleAccountConditions` from @Nullable to @Nonnull, making it a required field.
* Changed `periods` from @Nonnull to @Nullable, making it optional.
* Added `periodAlignmentOption` and `schedules` as required fields.
* Added new fields `periodAlignmentOption`, `specificPeriodAlignmentDate`, and `schedules`.

## UpsertUpdateCommitmentInput

* Changed the type of the `status` field from CommitmentStatus to CommitmentStatusInput.
* Added a new field `schedules` of type List&lt;UpsertCommitmentScheduleInput>.
