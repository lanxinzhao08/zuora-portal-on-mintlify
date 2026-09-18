---
title: "C# client library 1.5.0 changelog"
sidebarTitle: "1.5.0"
---
## CommitmentBaseAttributes

* The `eligibleAccountConditions` parameter is now required and cannot be null. This change will require developers to ensure that this parameter is provided when creating an instance of CommitmentBaseAttributes.

## CommitmentInput

* Removed the `ExcludeItemBookingFromRevenueAccounting` property.
* The `eligibleAccountConditions` parameter is now required and cannot be null.
* The `periods` parameter is no longer required.
* The `schedules` parameter is now required and cannot be null.
* Added `PeriodAlignmentOption` property.
* Added `SpecificPeriodAlignmentDate` property.
* Added `Schedules` property.

## CommitmentOutput

* Added `Status` property to CommitmentOutput.
* Added `TotalAmount` property to CommitmentOutput.
* Added `Schedules` property to CommitmentOutput.

## CommitmentStatus

* The CommitmentStatus enum has been removed, which may cause compatibility issues for developers relying on this enum in their code.

## ExpandedCommitment

* Removed parameters and properties related to cycle period and accounting: `CyclePeriodType`, `CyclePeriodLength`, `CycleDayType`, `CycleDay`, `CycleAlignmentDate`, `AccountingCode`, `ExcludeItemBookingFromRevenueAccounting`, and `ProrationOption`.
* Added a new parameter and property: `Status`.

## ExpandedCreditMemoItem

* Added new properties `InvoiceSchedule` and `InvoiceScheduleItem` to the ExpandedCreditMemoItem class.

## ExpandedInvoiceItem

* Added new properties `InvoiceSchedule` and `InvoiceScheduleItem` to the ExpandedInvoiceItem class.

## GetCommitmentOutput

* `EligibleAccountConditions` is now a required property and cannot be null.
* Added `PeriodAlignmentOption` property.
* Added `SpecificPeriodAlignmentDate` property.
* Added `Schedules` property.

## UpsertCreateCommitmentInput

* Removed the `ExcludeItemBookingFromRevenueAccounting` property.
* The `eligibleAccountConditions` parameter is now required and cannot be null.
* The `schedules` parameter is now required and cannot be null.
* The `periods` parameter is no longer required.
* Added `PeriodAlignmentOption` property.
* Added `SpecificPeriodAlignmentDate` property.
* Added `Schedules` property.

## UpsertUpdateCommitmentInput

* The type of the `Status` property has changed from `CommitmentStatus?` to `CommitmentStatusInput?`.
* Added a new property `Schedules` of type `List<UpsertCommitmentScheduleInput>` to the class.
