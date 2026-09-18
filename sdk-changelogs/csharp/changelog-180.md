---
title: "C# client library 1.8.0 changelog"
sidebarTitle: "1.8.0"
---
## ObjectQueriesApi

* Changed nullability of parameters in new methods to optional (e.g., string? idempotencyKey = default(string?)).
* Added new method QueryBundleByKey with various optional parameters.
* Added new method QueryBundleByKeyWithHttpInfo with various optional parameters.
* Added new method QueryBundles with various optional parameters.
* Added new method QueryBundlesWithHttpInfo with various optional parameters.
* Added new method QueryCommitmentAssociatedAccountByKey with various optional parameters.
* Added new method QueryPrepaymentByKey with various optional parameters.
* Added new method QueryPrepaymentByKeyWithHttpInfo with various optional parameters.
* Added new method QueryPrepaymentDefinitionByKey with various optional parameters.
* Added new method QueryPrepaymentDefinitionByKeyWithHttpInfo with various optional parameters.
* Added new method QueryPrepaymentDefinitions with various optional parameters.
* Added new method QueryPrepaymentDefinitionsWithHttpInfo with various optional parameters.
* Added new method QueryPrepayments with various optional parameters.
* Added new method QueryPrepaymentsWithHttpInfo with various optional parameters.
* Added new async method QueryBundleByKeyAsync with various optional parameters.
* Added new async method QueryBundleByKeyWithHttpInfoAsync with various optional parameters.
* Added new async method QueryBundlesAsync with various optional parameters.
* Added new async method QueryBundlesWithHttpInfoAsync with various optional parameters.
* Added new async method QueryCommitmentAssociatedAccountByKeyAsync with various optional parameters.
* Added new async method QueryPrepaymentByKeyAsync with various optional parameters.
* Added new async method QueryPrepaymentByKeyWithHttpInfoAsync with various optional parameters.
* Added new async method QueryPrepaymentDefinitionByKeyAsync with various optional parameters.
* Added new async method QueryPrepaymentDefinitionByKeyWithHttpInfoAsync with various optional parameters.
* Added new async method QueryPrepaymentDefinitionsAsync with various optional parameters.
* Added new async method QueryPrepaymentDefinitionsWithHttpInfoAsync with various optional parameters.
* Added new async method QueryPrepaymentsAsync with various optional parameters.
* Added new async method QueryPrepaymentsWithHttpInfoAsync with various optional parameters.

## BillingDocumentItemProcessingType

* Enum value `PrepaymentBilling` added with value 8.
* Enum value `PrepaymentApplication` added with value 9.

## CommitmentBaseAttributes

* Added new property `PrepaymentType` of type `CommitmentPrepaymentType?` to the class.
* Added new constructor parameter `prepaymentType` of type `CommitmentPrepaymentType?` to the constructor of the class.

## CommitmentInput

* Added a new nullable field `PrepaymentType` of type `CommitmentPrepaymentType?` to the CommitmentInput class.
* Added a new constructor parameter `prepaymentType` of type `CommitmentPrepaymentType?` to the CommitmentInput constructor.

## CommitmentOutput

* Constructor parameter change: Added `CommitmentPrepaymentType? prepaymentType` as a new parameter in the constructor.
* Added new property `CommitmentPrepaymentType? PrepaymentType` to the CommitmentOutput class.

## CommitmentOutputSchedulesInner

* Constructor parameter added: PrepaymentDefinition prepaymentDefinition
* New field added: `PrepaymentDefinition`

## CommitmentScheduleAttributes

* Constructor parameter change: Added `PrepaymentDefinition prepaymentDefinition = default(PrepaymentDefinition)` to the constructor.
* New field added: `PrepaymentDefinition` in the CommitmentScheduleAttributes class.

## CommitmentScheduleInput

* Added a new parameter `prepaymentDefinition` to the constructor of CommitmentScheduleInput.
* Added a new property `PrepaymentDefinition` to the CommitmentScheduleInput class.

## CommitmentScheduleOutput

* Constructor parameter change: Added `PrepaymentDefinition prepaymentDefinition` as a new parameter to the constructor.
* Added new field `PrepaymentDefinition` to the class `CommitmentScheduleOutput`.
* Added new constructor parameter `PrepaymentDefinition prepaymentDefinition`.

## ExpandedAccount

* Added new constructor parameters: creditMemoTemplateId, debitMemoTemplateId.
* Added new properties: `CreditMemoTemplateId`, `DebitMemoTemplateId`.

## ExpandedCommitment

* Constructor parameter changes: Added new parameters `commitmentOwnerId`, `commitmentOwnerNumber`, `cancellationReason`, `cancellationEffectiveDate`, `cancellationPolicy`, `organizationId`, `prepaymentType`, and `commitmentOwner` to the constructor.
* Added new field `CommitmentOwnerId` with DataMember attribute.
* Added new field `CommitmentOwnerNumber` with DataMember attribute.
* Added new field `CancellationReason` with DataMember attribute.
* Added new field `CancellationEffectiveDate` with DataMember attribute.
* Added new field `CancellationPolicy` with DataMember attribute.
* Added new field `OrganizationId` with DataMember attribute.
* Added new field `PrepaymentType` with DataMember attribute.
* Added new field `CommitmentOwner` with DataMember attribute.

## ExpandedCommitmentAssociatedAccount

* Added a new parameter `organizationId` to the constructor of the ExpandedCommitmentAssociatedAccount class.
* Added a new property `OrganizationId` to the ExpandedCommitmentAssociatedAccount class.

## ExpandedCommitmentAssociatedItem

* Constructor parameter changes: Added `organizationId` and `invoiceOwner` parameters to the constructor.
* Added new field `OrganizationId` to the class.
* Added new field `InvoiceOwner` to the class.

## ExpandedCommitmentPeriod

* Added new constructor parameter `committedAmount`.
* Added new constructor parameter `organizationId`.
* Added new constructor parameter `prepayments`.
* Added new field `CommittedAmount` with DataMember `committedAmount`.
* Added new field `OrganizationId` with DataMember `organizationId`.
* Added new field `Prepayments` with DataMember `prepayments`.

## ExpandedCommitmentSchedule

* Added new constructor parameter `organizationId`.
* Added new constructor parameter `prepaymentDefinitions`.
* Added new property `OrganizationId` to the class.
* Added new property `PrepaymentDefinitions` to the class.

## ExpandedCommitmentTransaction

* Constructor parameter change: Added `organizationId` as a new parameter to the constructor.
* Added new field `OrganizationId` to the ExpandedCommitmentTransaction class.

## ExpandedCreditMemoItem

* Added new constructor parameters: invoiceSchedule, invoiceScheduleItem.
* Added new fields: `InvoiceSchedule`, `InvoiceScheduleItem`.

## ExpandedInvoice

* Added a new parameter `isSplit` to the constructor of the ExpandedInvoice class.
* Added a new property `IsSplit` to the ExpandedInvoice class.

## ExpandedInvoiceItem

* Added new parameters to the constructor: `invoiceSchedule`, `invoiceScheduleItem`.
* Added new fields: `InvoiceSchedule`, `InvoiceScheduleItem`.

## ExpandedInvoiceSchedule

* Removed constructor parameters: `List<ExpandedInvoiceScheduleItem> invoiceScheduleItems`, `List<ExpandedInvoiceScheduleBooking> invoiceScheduleBookings`
* Removed fields: `List<ExpandedInvoiceScheduleItem> InvoiceScheduleItems`, `List<ExpandedInvoiceScheduleBooking> InvoiceScheduleBookings`

## ExpandedInvoiceScheduleBooking

* The class ExpandedInvoiceScheduleBooking has been removed.

## ExpandedInvoiceScheduleItem

* Removed constructor parameters: ExpandedInvoice invoice, ExpandedCreditMemo creditMemo
* Removed fields: `ExpandedInvoice Invoice`, `ExpandedCreditMemo CreditMemo`

## ExpandedPaymentMethod

* Constructor parameter order changed: `cardBrand`, `cardClass`, `cardProductType`, `cardIssuingBank`, `cardIssuingCountry` moved to the beginning of the parameter list.
* New fields added: `CardBrand`, `CardClass`, `CardProductType`, `CardIssuingBank`, `CardIssuingCountry`.

## ExpandedPaymentRun

* Constructor parameter order changed: `accountId`, `batch`, `billingCycleDay`, `currency`, `paymentGatewayId`, `billingRunId` moved before `repeatType`, `repeatFrom`, `repeatTo`, `runTime`, `varTimeZone`, `monthlyOnDay`, `weeklyOnDay`.
* New fields added: `AccountId`, `Batch`, `BillingCycleDay`, `Currency`, `PaymentGatewayId`, `BillingRunId`.

## ExpandedProduct

* Constructor parameter changes: Added parameters `productType` and `bundleConfig` to the constructor.
* New field added: `ProductType` with DataMember attribute.
* New field added: `BundleConfig` with DataMember attribute.
* New constructor parameters: `productType` and `bundleConfig`.

## ExpandedProductRatePlanCharge

* New field `Optional` was added.

## ExpandedRatePlanCharge

* Constructor parameter changes: New parameters added - percentage, maximumAmount, minimumAmount, eligibleAccountConditions, eligibleChargeConditions, isProratePartialMonth, prorationUnit, daysInMonth.
* New fields added: `Percentage`, `MaximumAmount`, `MinimumAmount`, `EligibleAccountConditions`, `EligibleChargeConditions`, `IsProratePartialMonth`, `ProrationUnit`, `DaysInMonth`.

## GetCommitmentOutput

* Added new property `PrepaymentType` of type `CommitmentPrepaymentType?` to the class.
* Added new constructor parameter `prepaymentType` of type `CommitmentPrepaymentType?`.

## GetCommitmentResponse

* Added new property `PrepaymentType` of type `PrepaymentTypeEnum?` to the GetCommitmentResponse class.
* Added new constructor parameter `prepaymentType` of type `PrepaymentTypeEnum?` to the GetCommitmentResponse constructor.

## InvoiceItemPreviewResultProcessingType

* Enum value `PrepaymentBilling` added with value 4
* Enum value `PrepaymentApplication` added with value 5

## ProductRatePlan

* Updated the type of the `ProductRatePlanCharges` property from `List<ProductRatePlanCharge>` to `List<ProductRatePlanChargeRest>`.

## UpsertCreateCommitmentInput

* Added new property `PrepaymentType` of type `CommitmentPrepaymentType?` to the class.
* Added new constructor parameter `prepaymentType` of type `CommitmentPrepaymentType?`.

## UpsertCreateCommitmentInputAllOfSchedules

* Added a new parameter `prepaymentDefinition` to the constructor of the class `UpsertCreateCommitmentInputAllOfSchedules`.
* Added a new property `PrepaymentDefinition` to the class `UpsertCreateCommitmentInputAllOfSchedules`.

## UpsertCreateCommitmentScheduleInput

* Constructor parameter added: PrepaymentDefinition prepaymentDefinition
* New field added: `PrepaymentDefinition`
* New constructor parameter: PrepaymentDefinition prepaymentDefinition

## UpsertUpdateCommitmentInput

* Added a new property `PrepaymentType` of type `CommitmentPrepaymentType?` to the class.
* Added a new constructor parameter `prepaymentType` of type `CommitmentPrepaymentType?`.

## UpsertUpdateCommitmentScheduleInput

* Added a new constructor parameter `PrepaymentDefinition` to the constructor of UpsertUpdateCommitmentScheduleInput.
* Added a new property `PrepaymentDefinition` to the UpsertUpdateCommitmentScheduleInput class.
