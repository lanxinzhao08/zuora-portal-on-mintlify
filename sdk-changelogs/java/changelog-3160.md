---
title: "Java client library 3.16.0 changelog"
sidebarTitle: "3.16.0"
---
## ObjectQueriesApi

* Changed supported expands for queryCommitmentAssociatedItemByKey from `commitment,account` to `commitment,invoiceowner`.
* Changed supported expands for queryCommitmentAssociatedItems from `commitment,account` to `commitment,invoiceowner`.
* Changed supported expands for queryCommitmentByKey from `account,commitmentschedules,commitmentschedules.commitmentperiods,commitmentassociatedaccounts,commitmentassociateditems,commitmentassociateditems.account` to `commitmentowner,account,commitmentschedules,commitmentschedules.commitmentperiods,commitmentassociatedaccounts,commitmentassociatedaccounts.account,commitmentassociateditems,commitmentassociateditems.invoiceowner,commitmentschedules.prepaymentdefinitions,commitmentschedules.commitmentperiods.prepayments`.
* Changed supported expands for queryCommitmentPeriodByKey from `account,commitmenttransactions` to `account,commitmenttransactions,prepayments`.
* Changed supported expands for queryCommitmentPeriods from `account,commitmenttransactions` to `account,commitmenttransactions,prepayments`.
* Changed supported expands for queryCommitmentScheduleByKey from `commitmentperiods` to `commitmentperiods,prepaymentdefinitions,commitmentperiods.prepayments`.
* Changed supported expands for queryCommitmentSchedules from `commitmentperiods` to `commitmentperiods,prepaymentdefinitions,commitmentperiods.prepayments`.
* Changed supported expands for queryCommitments from `account,commitmentschedules,commitmentschedules.commitmentperiods,commitmentassociatedaccounts,commitmentassociateditems,commitmentassociateditems.account` to `commitmentowner,account,commitmentschedules,commitmentschedules.commitmentperiods,commitmentassociatedaccounts,commitmentassociatedaccounts.account,commitmentassociateditems,commitmentassociateditems.invoiceowner,commitmentschedules.prepaymentdefinitions,commitmentschedules.commitmentperiods.prepayments`.
* Added new method queryBundleByKeyCall.
* Added new method queryBundleByKeyValidateBeforeCall.
* Added new method queryBundleByKey.
* Added new method queryBundleByKeyWithHttpInfo.
* Added new method queryBundleByKeyAsync.
* Added new class QueryBundleByKeyApi.
* Added new method queryBundleByKeyApi.
* Added new method queryBundlesCall.
* Added new method queryBundlesValidateBeforeCall.
* Added new method queryBundles.
* Added new method queryBundlesWithHttpInfo.
* Added new method queryBundlesAsync.
* Added new class QueryBundlesApi.
* Added new method queryBundlesApi.
* Added new method queryPrepaymentByKeyCall.
* Added new method queryPrepaymentByKeyValidateBeforeCall.
* Added new method queryPrepaymentByKey.
* Added new method queryPrepaymentByKeyWithHttpInfo.
* Added new method queryPrepaymentByKeyAsync.
* Added new class QueryPrepaymentByKeyApi.
* Added new method queryPrepaymentByKeyApi.
* Added new method queryPrepaymentDefinitionByKeyCall.
* Added new method queryPrepaymentDefinitionByKeyValidateBeforeCall.
* Added new method queryPrepaymentDefinitionByKey.
* Added new method queryPrepaymentDefinitionByKeyWithHttpInfo.
* Added new method queryPrepaymentDefinitionByKeyAsync.
* Added new class QueryPrepaymentDefinitionByKeyApi.
* Added new method queryPrepaymentDefinitionByKeyApi.
* Added new method queryPrepaymentDefinitionsCall.
* Added new method queryPrepaymentDefinitionsValidateBeforeCall.
* Added new method queryPrepaymentDefinitions.
* Added new method queryPrepaymentDefinitionsWithHttpInfo.
* Added new method queryPrepaymentDefinitionsAsync.
* Added new class QueryPrepaymentDefinitionsApi.
* Added new method queryPrepaymentDefinitionsApi.
* Added new method queryPrepaymentsCall.
* Added new method queryPrepaymentsValidateBeforeCall.
* Added new method queryPrepaymentsWithHttpInfo.
* Added new method queryPrepaymentsAsync.
* Added new class QueryPrepaymentsApi.
* Added new method queryPrepaymentsApi.

## BillingDocumentItemProcessingType

* New enum value `PREPAYMENTBILLING` added.
* New enum value `PREPAYMENTAPPLICATION` added.

## CommitmentBaseAttributes

* Added a new field `prepaymentType` of type `CommitmentPrepaymentType` to the CommitmentBaseAttributes class.
* Added a new method `prepaymentType(CommitmentPrepaymentType prepaymentType)` to set the `prepaymentType` field.
* Added a new method `getPrepaymentType()` to retrieve the `prepaymentType` field.
* Added a new method `setPrepaymentType(CommitmentPrepaymentType prepaymentType)` to set the `prepaymentType` field.

## CommitmentInput

* Changed the nullability of the `prepaymentType` field to @Nullable in the CommitmentInput class.
* Added a new field `prepaymentType` of type `CommitmentPrepaymentType` to the CommitmentInput class.
* Added a new method `prepaymentType` to set the `prepaymentType` field in the CommitmentInput class.
* Added a new method `getPrepaymentType` to retrieve the `prepaymentType` field in the CommitmentInput class.
* Added a new method `setPrepaymentType` to set the `prepaymentType` field in the CommitmentInput class.
* Added validation for the new field `prepaymentType` in the CommitmentInput class.

## CommitmentOutput

* Field `prepaymentType` added with @Nullable annotation, indicating a change in the class structure that could affect existing integrations if they assume a fixed set of fields.
* Added new field `prepaymentType` of type CommitmentPrepaymentType to the CommitmentOutput class.
* Added new method `prepaymentType(CommitmentPrepaymentType prepaymentType)` to set the `prepaymentType` field.
* Added new method `getPrepaymentType()` to retrieve the `prepaymentType` field.
* Added new method `setPrepaymentType(CommitmentPrepaymentType prepaymentType)` to set the `prepaymentType` field.
* Added validation for the new field `prepaymentType` in JSON parsing logic.

## CommitmentOutputSchedulesInner

* Added a new field `prepaymentDefinition` of type `PrepaymentDefinition` to the class `CommitmentOutputSchedulesInner`.
* Added a new method `prepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Added a new method `getPrepaymentDefinition()` to retrieve the `prepaymentDefinition` field.
* Added a new method `setPrepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Included `prepaymentDefinition` in the `equals` method for comparison.
* Included `prepaymentDefinition` in the `hashCode` method.
* Included `prepaymentDefinition` in the `toString` method.
* Added `prepaymentDefinition` to the `openapiFields` set for JSON serialization.
* Added validation for the `prepaymentDefinition` field in the JSON object.

## CommitmentScheduleAttributes

* Added a new field `prepaymentDefinition` of type `PrepaymentDefinition` to the CommitmentScheduleAttributes class.
* Added a new method `prepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Added a new method `getPrepaymentDefinition()` to retrieve the `prepaymentDefinition` field.
* Added a new method `setPrepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Included `prepaymentDefinition` in the equals, hashCode, and toString methods.
* Added `prepaymentDefinition` to the openapiFields set for JSON serialization/deserialization.
* Added validation for the `prepaymentDefinition` field in the JSON object.

## CommitmentScheduleInput

* Field `prepaymentDefinition` changed from non-existent to optional with @Nullable annotation.
* Added new field `prepaymentDefinition` of type `PrepaymentDefinition` to the class `CommitmentScheduleInput`.
* Added new method `prepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Added new method `getPrepaymentDefinition()` to retrieve the `prepaymentDefinition` field.
* Added new method `setPrepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Added validation for the new field `prepaymentDefinition` in the JSON object.

## CommitmentScheduleOutput

* Added a new field `prepaymentDefinition` of type `PrepaymentDefinition` to the CommitmentScheduleOutput class.
* Added a new method `prepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Added a new method `getPrepaymentDefinition()` to retrieve the `prepaymentDefinition` field.
* Added a new method `setPrepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Included `prepaymentDefinition` in the equals, hashCode, and toString methods.
* Added `prepaymentDefinition` to the list of openapiFields for JSON serialization/deserialization.
* Added validation for the `prepaymentDefinition` field in the JSON object.

## ExpandedAccount

* Added new field `creditMemoTemplateId` with associated getter, setter, and builder methods.
* Added new field `debitMemoTemplateId` with associated getter, setter, and builder methods.

## ExpandedCommitment

* Field `commitmentOwnerId` is marked as @Nullable, indicating a change in nullability.
* Field `commitmentOwnerNumber` is marked as @Nullable, indicating a change in nullability.
* Field `cancellationReason` is marked as @Nullable, indicating a change in nullability.
* Field `cancellationEffectiveDate` is marked as @Nullable, indicating a change in nullability.
* Field `cancellationPolicy` is marked as @Nullable, indicating a change in nullability.
* Field `organizationId` is marked as @Nullable, indicating a change in nullability.
* Field `prepaymentType` is marked as @Nullable, indicating a change in nullability.
* Field `commitmentOwner` is marked as @Nullable, indicating a change in nullability.
* Added new field `commitmentOwnerId` with getter, setter, and builder methods.
* Added new field `commitmentOwnerNumber` with getter, setter, and builder methods.
* Added new field `cancellationReason` with getter, setter, and builder methods.
* Added new field `cancellationEffectiveDate` with getter, setter, and builder methods.
* Added new field `cancellationPolicy` with getter, setter, and builder methods.
* Added new field `organizationId` with getter, setter, and builder methods.
* Added new field `prepaymentType` with getter, setter, and builder methods.
* Added new field `commitmentOwner` of type `ExpandedAccount` with getter, setter, and builder methods.

## ExpandedCommitmentAssociatedAccount

* Field `organizationId` has been added with @Nullable annotation, indicating a change in nullability.
* New field `organizationId` added to the class ExpandedCommitmentAssociatedAccount.

## ExpandedCommitmentAssociatedItem

* Added new field `organizationId` with getter, setter, and associated methods.
* Added new field `invoiceOwner` of type `ExpandedAccount` with getter, setter, and associated methods.

## ExpandedCommitmentPeriod

* Field `amount` moved from below `isProrated` to above it, which may affect serialization order if order is significant.
* Field `amount` was previously defined and is now redefined, which may affect its usage.
* Field `isProrated` moved in the order of fields, which may affect serialization order if order is significant.
* Added new field `committedAmount` of type BigDecimal.
* Added new field `organizationId` of type String.
* Added new field `prepayments` of type `List<ExpandedPrepayment>`.
* Added new method `committedAmount(BigDecimal committedAmount)` to set the committedAmount.
* Added new method `getCommittedAmount()` to retrieve the committedAmount.
* Added new method `setCommittedAmount(BigDecimal committedAmount)` to set the committedAmount.
* Added new method `organizationId(String organizationId)` to set the organizationId.
* Added new method `getOrganizationId()` to retrieve the organizationId.
* Added new method `setOrganizationId(String organizationId)` to set the organizationId.
* Added new method `prepayments(List<ExpandedPrepayment> prepayments)` to set the prepayments.
* Added new method `addPrepaymentsItem(ExpandedPrepayment prepaymentsItem)` to add an item to prepayments.
* Added new method `getPrepayments()` to retrieve the prepayments.
* Added new method `setPrepayments(List<ExpandedPrepayment> prepayments)` to set the prepayments.

## ExpandedCommitmentSchedule

* Added new field `organizationId` with getter, setter, and fluent method.
* Added new field `prepaymentDefinitions` with getter, setter, and fluent methods.
* Added validation for `organizationId` to ensure it is a primitive type in JSON.
* Added validation for `prepaymentDefinitions` to ensure it is an array in JSON.

## ExpandedCommitmentTransaction

* Added a new field `organizationId` to the ExpandedCommitmentTransaction class.
* Added a new method `organizationId(String organizationId)` to set the `organizationId` field.
* Added a new method `getOrganizationId()` to retrieve the `organizationId` field.
* Added a new method `setOrganizationId(String organizationId)` to set the `organizationId` field.

## ExpandedCreditMemoItem

* Added new fields: `soldToContactSnapshotId`, `billToContactSnapshotId`, `shipToContactSnapshotId`, `invoiceSchedule`, `invoiceScheduleItem`.
* Added new methods for new fields: `soldToContactSnapshotId`, `billToContactSnapshotId`, `shipToContactSnapshotId`, `invoiceSchedule`, `invoiceScheduleItem`.

## ExpandedInvoice

* Field `isSplit` changed from non-existent to @Nullable
* Added new field `isSplit` to the ExpandedInvoice class
* Added new method `isSplit(Boolean isSplit)` to set the `isSplit` field
* Added new method `getIsSplit()` to retrieve the `isSplit` field
* Added new method `setIsSplit(Boolean isSplit)` to set the `isSplit` field

## ExpandedInvoiceItem

* Added new fields: `invoiceSchedule` and `invoiceScheduleItem` with their respective types `ExpandedInvoiceSchedule` and `ExpandedInvoiceScheduleItem`.
* Added new methods for the new fields: `invoiceSchedule` and `invoiceScheduleItem`.

## ExpandedInvoiceSchedule

* Removed field: `List<ExpandedInvoiceScheduleItem> invoiceScheduleItems`
* Removed field: `List<ExpandedInvoiceScheduleBooking> invoiceScheduleBookings`
* Removed methods related to `invoiceScheduleItems`: getInvoiceScheduleItems, setInvoiceScheduleItems, invoiceScheduleItems, addInvoiceScheduleItemsItem
* Removed methods related to `invoiceScheduleBookings`: getInvoiceScheduleBookings, setInvoiceScheduleBookings, invoiceScheduleBookings, addInvoiceScheduleBookingsItem

## ExpandedInvoiceScheduleBooking

* The class ExpandedInvoiceScheduleBooking has been removed.

## ExpandedInvoiceScheduleItem

* Removed field: `ExpandedInvoice invoice`
* Removed field: `ExpandedCreditMemo creditMemo`
* Removed method: ExpandedInvoice getInvoice()
* Removed method: void setInvoice(ExpandedInvoice invoice)
* Removed method: ExpandedCreditMemo getCreditMemo()
* Removed method: void setCreditMemo(ExpandedCreditMemo creditMemo)
* Removed method: ExpandedInvoiceScheduleItem invoice(ExpandedInvoice invoice)
* Removed method: ExpandedInvoiceScheduleItem creditMemo(ExpandedCreditMemo creditMemo)

## ExpandedPaymentMethod

* New field `cardBrand` added to the ExpandedPaymentMethod class.
* New field `cardClass` added to the ExpandedPaymentMethod class.
* New field `cardProductType` added to the ExpandedPaymentMethod class.
* New field `cardIssuingBank` added to the ExpandedPaymentMethod class.
* New field `cardIssuingCountry` added to the ExpandedPaymentMethod class.

## ExpandedPaymentRun

* Added new field `accountId` with getter and setter methods.
* Added new field `batch` with getter and setter methods.
* Added new field `billingCycleDay` with getter and setter methods.
* Added new field `currency` with getter and setter methods.
* Added new field `paymentGatewayId` with getter and setter methods.
* Added new field `billingRunId` with getter and setter methods.

## ExpandedProduct

* Added new field `productType` with getter, setter, and fluent method.
* Added new field `bundleConfig` with getter, setter, and fluent method.

## ExpandedProductRatePlanCharge

* Field `optional` was added.

## ExpandedRatePlanCharge

* Field `accountReceivableAccountingCodeId` changed from String to BigDecimal.
* Field `deferredRevenueAccountingCodeId` changed from String to BigDecimal.
* Field `recognizedRevenueAccountingCodeId` changed from String to BigDecimal.
* Field `prepaidUOM` changed from String to BigDecimal.
* Field `drawdownUom` changed from String to BigDecimal.
* Added new field `percentage` of type BigDecimal.
* Added new field `maximumAmount` of type BigDecimal.
* Added new field `minimumAmount` of type BigDecimal.
* Added new field `eligibleAccountConditions` of type String.
* Added new field `eligibleChargeConditions` of type String.

## GetCommitmentOutput

* Field `prepaymentType` changed from required to optional (added @Nullable annotation).
* Added new field `prepaymentType` of type `CommitmentPrepaymentType` to the `GetCommitmentOutput` class.
* Added new method `prepaymentType(CommitmentPrepaymentType prepaymentType)` to set the `prepaymentType` field.
* Added new method `getPrepaymentType()` to retrieve the `prepaymentType` field.
* Added new method `setPrepaymentType(CommitmentPrepaymentType prepaymentType)` to set the `prepaymentType` field.
* Added validation for the new field `prepaymentType` in JSON object processing.

## GetCommitmentResponse

* Field `prepaymentType` changed from required to optional with the addition of @Nullable annotation.
* Added new field `prepaymentType` of type PrepaymentTypeEnum to the GetCommitmentResponse class.

## InvoiceItemPreviewResultProcessingType

* New enum value `PrepaymentBilling` added to InvoiceItemPreviewResultProcessingType.
* New enum value `PrepaymentApplication` added to InvoiceItemPreviewResultProcessingType.

## ProductRatePlan

* Updated the type of the `productRatePlanCharges` field from `List<ProductRatePlanCharge>` to `List<ProductRatePlanChargeRest>`.

## UpsertCommitmentInput

* Added import for CommitmentPrepaymentType.

## UpsertCommitmentScheduleInput

* Added import for com.zuora.model.PrepaymentDefinition

## UpsertCreateCommitmentInput

* Field `prepaymentType` changed from non-existent to optional with @Nullable annotation.
* Added new field `prepaymentType` of type `CommitmentPrepaymentType` to the class `UpsertCreateCommitmentInput`.
* Added new method `prepaymentType(CommitmentPrepaymentType prepaymentType)` to set the `prepaymentType` field.
* Added new method `getPrepaymentType()` to retrieve the `prepaymentType` field.
* Added new method `setPrepaymentType(CommitmentPrepaymentType prepaymentType)` to set the `prepaymentType` field.
* Added validation for the new field `prepaymentType` in JSON object processing.

## UpsertCreateCommitmentInputAllOfSchedules

* Field `prepaymentDefinition` changed from non-existent to optional with @Nullable annotation.
* Added new field `prepaymentDefinition` of type `PrepaymentDefinition` to the class `UpsertCreateCommitmentInputAllOfSchedules`.
* Added new method `prepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Added new method `getPrepaymentDefinition()` to retrieve the `prepaymentDefinition` field.
* Added new method `setPrepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Added validation for the new field `prepaymentDefinition` in JSON object processing.

## UpsertCreateCommitmentScheduleInput

* Added a new field `prepaymentDefinition` of type `PrepaymentDefinition` to the class `UpsertCreateCommitmentScheduleInput`.
* Added a new method `prepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Added a new method `getPrepaymentDefinition()` to retrieve the `prepaymentDefinition` field.
* Added a new method `setPrepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Included `prepaymentDefinition` in the `equals`, `hashCode`, and `toString` methods.
* Added validation for the `prepaymentDefinition` field in the JSON object validation logic.

## UpsertUpdateCommitmentInput

* Added a new field `prepaymentType` of type `CommitmentPrepaymentType` to the `UpsertUpdateCommitmentInput` class.
* Added a new method `prepaymentType(CommitmentPrepaymentType prepaymentType)` to set the `prepaymentType` field.
* Added a new method `getPrepaymentType()` to retrieve the `prepaymentType` field.
* Added a new method `setPrepaymentType(CommitmentPrepaymentType prepaymentType)` to set the `prepaymentType` field.
* Included `prepaymentType` in the equals, hashCode, and toString methods.

## UpsertUpdateCommitmentScheduleInput

* Added a new field `prepaymentDefinition` of type `PrepaymentDefinition` to the class `UpsertUpdateCommitmentScheduleInput`.
* Added a new method `prepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Added a new method `getPrepaymentDefinition()` to retrieve the `prepaymentDefinition` field.
* Added a new method `setPrepaymentDefinition(PrepaymentDefinition prepaymentDefinition)` to set the `prepaymentDefinition` field.
* Included `prepaymentDefinition` in the `toString`, `equals`, and `hashCode` methods.
* Added validation for the `prepaymentDefinition` field in the JSON object validation logic.
