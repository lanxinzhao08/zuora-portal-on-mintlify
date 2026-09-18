---
markdown:
  toc:
    hide: false
---

# Node.js client library 3.13.0 changelog


## ObjectQueriesApi

* Added support for expanding `invoiceschedule` and `invoicescheduleitem` in queries for CreditMemoItem and InvoiceItem.

## PaymentMethodsApi

* Added support for creating payment methods with the PayPal Complete Payments gateway integration.

## src/zuora_api/index

* Added new model imports: AmountBaseEnum, BaseRevenueAttributes, CommitmentOutputSchedulesInner, CommitmentScheduleAttributes, CommitmentScheduleInput, CommitmentScheduleOutput, CommitmentScheduleStatus, CommitmentScheduleStatusOutput, CommitmentStatusInput, CommitmentStatusOutput, CommonRevenueAttributesOutput, PeriodAlignmentOptionEnum, PeriodTypeEnum, UpsertCommitmentScheduleInput, UpsertCreateCommitmentInputAllOfSchedules, UpsertCreateCommitmentScheduleInput, UpsertUpdateCommitmentScheduleInput.

## CommitmentInput

* Replaced CommonRevenueAttributes with BaseRevenueAttributes, which may require updates to code that relied on the former.
* Constructor signature changed: `periods` parameter replaced with `eligible_account_conditions`, `period_alignment_option`, and `schedules`.
* Removed `excludeItemBookingFromRevenueAccounting` property.
* Added `eligibleAccountConditions` parameter to the constructor.
* Added `periodAlignmentOption` and `schedules` parameters to the constructor.
* Introduced `periodAlignmentOption`, `specificPeriodAlignmentDate`, and `schedules` properties.

## CommitmentOutput

* Added `totalAmount` property to represent the total amount of the commitment.
* Added `status` property with CommitmentStatusOutput type to represent the status of the commitment.
* Added `schedules` property as an array of CommitmentOutputSchedulesInner to represent the schedules associated with the commitment.

## CommitmentStatus

* The CommitmentStatus enum class has been removed, which may cause compatibility issues for developers relying on this class.

## ExpandedCommitment

* Removed properties: `cyclePeriodType`, `cyclePeriodLength`, `cycleDayType`, `cycleDay`, `cycleAlignmentDate`, `accountingCode`, `excludeItemBookingFromRevenueAccounting`, `prorationOption`. Developers need to update their code if they rely on these properties.
* Added new property: `status`. Developers can now utilize this property in their implementations.

## ExpandedCreditMemoItem

* Added `invoiceSchedule` property to ExpandedCreditMemoItem.
* Added `invoiceScheduleItem` property to ExpandedCreditMemoItem.

## ExpandedInvoiceItem

* Added `invoiceSchedule` property to ExpandedInvoiceItem.
* Added `invoiceScheduleItem` property to ExpandedInvoiceItem.

## GetCommitmentOutput

* The constructor now requires an additional parameter `eligible_account_conditions`.
* The `CommonRevenueAttributes` interface has been replaced with `CommonRevenueAttributesOutput`.
* The `excludeItemBookingFromRevenueAccounting` property has been moved within the JSON structure, which may affect JSON parsing logic.
* Added `eligibleAccountConditions` as a required property.
* Introduced `periodAlignmentOption`, `specificPeriodAlignmentDate`, and `schedules` properties to the model.

## UpsertCommitmentInput

* The type for `status` has been changed from CommitmentStatus to CommitmentStatusInput.
* The property `excludeItemBookingFromRevenueAccounting` has been removed.
* Added `periodAlignmentOption` property of type PeriodAlignmentOptionEnum.
* Added `specificPeriodAlignmentDate` property of type String.
* Added `schedules` property which is an array of UpsertCommitmentScheduleInput.

## UpsertCreateCommitmentInput

* Constructor signature changed: `periods` parameter replaced with `eligible_account_conditions`, `period_alignment_option`, and `schedules`.
* Required properties updated: `periods` replaced with `eligibleAccountConditions`, `periodAlignmentOption`, and `schedules`.
* Added `eligible_account_conditions` parameter to constructor.
* Added `period_alignment_option` parameter to constructor.
* Added `schedules` parameter to constructor.
* Added `periodAlignmentOption` and `specificPeriodAlignmentDate` properties.
* Added validation for `schedules` array.
* Removed `excludeItemBookingFromRevenueAccounting` property.

## UpsertUpdateCommitmentInput

* Replaced import of CommitmentStatus with CommitmentStatusInput, which may require updates to code using the previous CommitmentStatus.
* Added support for `schedules` field with validation, allowing developers to include and validate commitment schedules in their input.
