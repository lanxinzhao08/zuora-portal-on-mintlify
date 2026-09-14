---
markdown:
  toc:
    hide: false
---

# Node.js client library 3.16.0 changelog

## ObjectQueriesApi

* Changed supported expands for Query CommitmentAssociatedItem by key from `commitment,account` to `commitment,invoiceowner`.
* Changed supported expands for Query CommitmentAssociatedItems from `commitment,account` to `commitment,invoiceowner`.
* Changed supported expands for Query Commitment by key from `account,commitmentschedules,commitmentschedules.commitmentperiods,commitmentassociatedaccounts,commitmentassociateditems,commitmentassociateditems.account` to `commitmentowner,account,commitmentschedules,commitmentschedules.commitmentperiods,commitmentassociatedaccounts,commitmentassociatedaccounts.account,commitmentassociateditems,commitmentassociateditems.invoiceowner,commitmentschedules.prepaymentdefinitions,commitmentschedules.commitmentperiods.prepayments`.
* Changed supported expands for Query CommitmentPeriod by key from `account,commitmenttransactions` to `account,commitmenttransactions,prepayments`.
* Changed supported expands for Query CommitmentPeriods from `account,commitmenttransactions` to `account,commitmenttransactions,prepayments`.
* Changed supported expands for Query CommitmentSchedule by key from `commitmentperiods` to `commitmentperiods,prepaymentdefinitions,commitmentperiods.prepayments`.
* Changed supported expands for Query CommitmentSchedules from `commitmentperiods` to `commitmentperiods,prepaymentdefinitions,commitmentperiods.prepayments`.
* Changed supported expands for Query Commitments from `account,commitmentschedules,commitmentschedules.commitmentperiods,commitmentassociatedaccounts,commitmentassociateditems,commitmentassociateditems.account` to `commitmentowner,account,commitmentschedules,commitmentschedules.commitmentperiods,commitmentassociatedaccounts,commitmentassociatedaccounts.account,commitmentassociateditems,commitmentassociateditems.invoiceowner,commitmentschedules.prepaymentdefinitions,commitmentschedules.commitmentperiods.prepayments`.
* Added new method queryBundleByKeyWithHttpInfo.
* Added new method queryBundleByKey.
* Added new method queryBundlesWithHttpInfo.
* Added new method queryBundles.
* Added new method queryPrepaymentByKeyWithHttpInfo.
* Added new method queryPrepaymentByKey.
* Added new method queryPrepaymentDefinitionByKeyWithHttpInfo.
* Added new method queryPrepaymentDefinitionByKey.
* Added new method queryPrepaymentDefinitionsWithHttpInfo.
* Added new method queryPrepaymentDefinitions.
* Added new method queryPrepaymentsWithHttpInfo.
* Added new method queryPrepayments.

## index

* RemovedClass: ExpandedInvoiceScheduleBooking
* NewClass: CommitmentPrepaymentType
* NewClass: ExpandedBundle
* NewClass: ExpandedPrepayment
* NewClass: ExpandedPrepaymentDefinition
* NewClass: PrepaymentDefinition
* NewClass: PrepaymentFrequency
* NewClass: PrepaymentTypeEnum
* NewClass: QueryBundlesResponse
* NewClass: QueryPrepaymentDefinitionsResponse
* NewClass: QueryPrepaymentsResponse

## BillingDocumentItemProcessingType

* New enum value `PrepaymentBilling` added.
* New enum value `PrepaymentApplication` added.

## CommitmentBaseAttributes

* Added a new import for CommitmentPrepaymentType.
* Added a new field `prepaymentType` of type CommitmentPrepaymentType to the CommitmentBaseAttributes class.

## CommitmentInput

* Added a new import for CommitmentPrepaymentType.
* Added a new field `prepaymentType` to the CommitmentInput class.
* Added a new field `prepaymentType` to the CommitmentBaseAttributes class.

## CommitmentOutput

* Added new import for CommitmentPrepaymentType.
* Added new field `prepaymentType` to CommitmentOutput class.

## CommitmentOutputSchedulesInner

* Added a new import for PrepaymentDefinition.
* Added a new field `prepaymentDefinition` of type PrepaymentDefinition to the CommitmentOutputSchedulesInner model.
* Included validation for the new field `prepaymentDefinition` in the validateJSON method.

## CommitmentScheduleAttributes

* Added a new import for PrepaymentDefinition.
* Added a new field `prepaymentDefinition` of type `PrepaymentDefinition` to the CommitmentScheduleAttributes model.
* Added validation for the new optional field `prepaymentDefinition`.

## CommitmentScheduleInput

* Added a new import for PrepaymentDefinition.
* Added a new field `prepaymentDefinition` to the CommitmentScheduleInput class.
* Added validation for the new field `prepaymentDefinition`.
* Added a new field `prepaymentDefinition` to the CommitmentScheduleAttributes interface.

## CommitmentScheduleOutput

* Added a new import for PrepaymentDefinition.
* Added a new field `prepaymentDefinition` to the CommitmentScheduleOutput class.
* Added validation for the optional field `prepaymentDefinition`.
* Added a new field `prepaymentDefinition` to the CommitmentScheduleAttributes class.

## ExpandedAccount

* Added new field `creditMemoTemplateId` of type String to the ExpandedAccount class.
* Added new field `debitMemoTemplateId` of type String to the ExpandedAccount class.

## ExpandedCommitment

* Added new field `commitmentOwnerId` of type String.
* Added new field `commitmentOwnerNumber` of type String.
* Added new field `cancellationReason` of type String.
* Added new field `cancellationEffectiveDate` of type String.
* Added new field `cancellationPolicy` of type String.
* Added new field `organizationId` of type String.
* Added new field `prepaymentType` of type String.
* Added new field `commitmentOwner` of type module:model/ExpandedAccount.

## ExpandedCommitmentAssociatedAccount

* Added new field `organizationId` of type String to the class/model.

## ExpandedCommitmentAssociatedItem

* Added new import for ExpandedAccount.
* Added new field `organizationId` of type String.
* Added new field `invoiceOwner` of type ExpandedAccount.

## ExpandedCommitmentPeriod

* Added new import: ExpandedPrepayment.
* Added new field: amount of type Number.
* Added new field: committedAmount of type Number.
* Added new field: organizationId of type String.
* Added new field: prepayments of type `Array.<module:model/ExpandedPrepayment>`.

## ExpandedCommitmentSchedule

* Added new import for ExpandedPrepaymentDefinition.
* Added new field `organizationId` of type String to the ExpandedCommitmentSchedule model.
* Added new field `prepaymentDefinitions` of type `Array.<module:model/ExpandedPrepaymentDefinition>` to the ExpandedCommitmentSchedule model.

## ExpandedCommitmentTransaction

* New field `organizationId` added to the class/model.

## ExpandedCreditMemoItem

* Added new fields: `soldToContactSnapshotId`, `billToContactSnapshotId`, `shipToContactSnapshotId`, `invoiceSchedule`, `invoiceScheduleItem`.

## ExpandedCreditTaxationItem

* Added field `journalEntryId` to the class `ExpandedCreditTaxationItem`.

## ExpandedInvoice

* Added new Boolean field `isSplit` to the ExpandedInvoice class.

## ExpandedInvoiceItem

* Added new import: ExpandedInvoiceSchedule
* Added new import: ExpandedInvoiceScheduleItem
* Added new fields: `invoiceSchedule`, `invoiceScheduleItem`

## ExpandedInvoiceSchedule

* Removed fields: `invoiceScheduleItems`, `invoiceScheduleBookings`
* Removed imports: ExpandedInvoiceScheduleBooking, ExpandedInvoiceScheduleItem

## ExpandedInvoiceScheduleBooking

* The class ExpandedInvoiceScheduleBooking has been removed.
* The fields `id`, `createdById`, `createdDate`, `updatedById`, `updatedDate`, `invoiceScheduleId`, `orderId`, `orderNumber`, `subscriptionId`, `subscriptionNumber`, `chargeNumbers`, `order`, and `subscription` have been removed.
* The methods `fromObject`, `constructFromObject`, `validateJSON`, and the constructor for ExpandedInvoiceScheduleBooking have been removed.

## ExpandedInvoiceScheduleItem

* Removed fields: `invoice`, `creditMemo`

## ExpandedPaymentMethod

* Added new field `cardBrand` of type String.
* Added new field `cardClass` of type String.
* Added new field `cardProductType` of type String.
* Added new field `cardIssuingBank` of type String.
* Added new field `cardIssuingCountry` of type String.

## ExpandedPaymentRun

* Field type change: `runTime` changed from `Number` to `String`.
* New fields added: `accountId`, `batch`, `billingCycleDay`, `currency`, `paymentGatewayId`, `billingRunId`.

## ExpandedProduct

* Added new field `productType` of type String to the ExpandedProduct class.
* Added new field `bundleConfig` of type String to the ExpandedProduct class.

## ExpandedProductRatePlanCharge

* Field `optional` of type Boolean was added.

## ExpandedRatePlanCharge

* Field: `accountReceivableAccountingCodeId`, TypeChange: String to Number
* Field: `deferredRevenueAccountingCodeId`, TypeChange: String to Number
* Field: `recognizedRevenueAccountingCodeId`, TypeChange: String to Number
* Field: `prepaidUOM`, TypeChange: String to Number
* Field: `drawdownUom`, TypeChange: String to Number
* Field: `percentage`, Type: Number
* Field: `maximumAmount`, Type: Number
* Field: `minimumAmount`, Type: Number
* Field: `eligibleAccountConditions`, Type: String
* Field: `eligibleChargeConditions`, Type: String

## GetCommitmentOutput

* Added a new import for CommitmentPrepaymentType.
* Added a new field `prepaymentType` to the GetCommitmentOutput class.
* Added a new field `prepaymentType` to the CommitmentBaseAttributes class.

## GetCommitmentResponse

* Added a new import for PrepaymentTypeEnum.
* Added a new field `prepaymentType` of type PrepaymentTypeEnum to the GetCommitmentResponse class.

## InvoiceItemPreviewResultProcessingType

* New enum value `PrepaymentBilling` added.
* New enum value `PrepaymentApplication` added.

## ProductRatePlan

* Updated the import from ProductRatePlanCharge to ProductRatePlanChargeRest.
* Updated the item structure of the `productRatePlanCharges` array property.

## UpsertCommitmentInput

* Added a new field `prepaymentType` of type `CommitmentPrepaymentType` to the `UpsertCommitmentInput` model.

## UpsertCommitmentScheduleInput

* New field `prepaymentDefinition` of type `module:model/PrepaymentDefinition` added to UpsertCommitmentScheduleInput.

## UpsertCreateCommitmentInput

* Added a new import for CommitmentPrepaymentType.
* Added a new field `prepaymentType` of type CommitmentPrepaymentType to the UpsertCreateCommitmentInput class.
* Added a new field `prepaymentType` of type CommitmentPrepaymentType to the CommitmentInput class.

## UpsertCreateCommitmentInputAllOfSchedules

* Added a new import for PrepaymentDefinition.
* Added a new field `prepaymentDefinition` of type PrepaymentDefinition to the UpsertCreateCommitmentInputAllOfSchedules class.
* Added validation for the optional field `prepaymentDefinition`.
* Added a new field `prepaymentDefinition` of type PrepaymentDefinition to the CommitmentScheduleInput class.

## UpsertCreateCommitmentScheduleInput

* Added a new import for PrepaymentDefinition.
* Added a new field `prepaymentDefinition` to the UpsertCreateCommitmentScheduleInput class.
* Added validation for the new optional field `prepaymentDefinition`.
* Added a new field `prepaymentDefinition` to the CommitmentScheduleInput class.

## UpsertUpdateCommitmentInput

* Added a new import for CommitmentPrepaymentType.
* Added a new field `prepaymentType` of type CommitmentPrepaymentType to the UpsertUpdateCommitmentInput class.

## UpsertUpdateCommitmentScheduleInput

* Added a new import for PrepaymentDefinition.
* Added a new field `prepaymentDefinition` of type PrepaymentDefinition to the UpsertUpdateCommitmentScheduleInput model.
* Included validation for the new `prepaymentDefinition` field in the validateJSON method.
