---
title: "Java client library 3.12.0 changelog"
sidebarTitle: "3.12.0"
---
## ContactSnapshotsApi

* Removed pagination parameters `page` and `pageSize` from methods: getContactSnapshotCall, getContactSnapshotValidateBeforeCall, getContactSnapshot, getContactSnapshotWithHttpInfo, getContactSnapshotAsync, and related builder methods. This change requires developers to update their code if they were using pagination.

## InvoicesApi

* Added a new method `cancelEInvoiceByInvoiceKey` to cancel E-Invoice for a given billing document using invoice key.
* Introduced `CancelEInvoiceByInvoiceKeyApi` class to facilitate the cancellation of E-Invoice with various optional parameters.

## ObjectQueriesApi

* Removed support for querying bundles by key and querying bundles with filters, expands, and sort capabilities. This includes the removal of methods related to ExpandedBundle and QueryBundlesResponse.


## RegenerateApi

* Removed `page` and `pageSize` parameters from several methods, which may require developers to update their code if they were using pagination.

## AccountCreditCardHolder

* The `cardHolderName` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The JSON validation now requires `cardHolderName` to be present in the JSON string, throwing an IllegalArgumentException if it is missing.

## AddSubscriptionComponent

* Removed fields: `amendedByOrderOn`, `originalOrderDate`, and `specificListPriceBase`. Developers using these fields will need to update their code.

## BillingAdjustmentExclusion

* The `deliveryDate` field is now marked as @Nonnull, indicating it is required and cannot be null.

## BillingDocumentItemProcessingType

* Added new enum value `COMMITMENTTRUEUP` to BillingDocumentItemProcessingType.

## BillingDocumentItemSourceType

* Added new enum value `COMMITMENT` to BillingDocumentItemSourceType.

## ChargeModel

* Added a new charge model type `CALCULATED` to the ChargeModel enum.

## ChargeOverridePricing

* Added support for RecurringCalculatedPricingOverride in ChargeOverridePricing, allowing developers to specify recurring calculated pricing overrides.

## ChargeUpdate

* The `isDimensionalPrice` field has been removed, which may affect any code relying on this field.
* The type of `negotiatedPriceTable` has changed from `Map<String, Object>` to `List<Map<String, Object>>`, which may require updates to code handling this data structure.

## CommitmentBaseAttributes

* Added eligibleAccountConditions and eligibleChargeConditions fields to the CommitmentBaseAttributes class, allowing for additional conditions to be specified for account and charge eligibility.

## CommitmentInput

* Removed the `accountingCode` field from the CommitmentInput class.
* Added `eligibleAccountConditions` and `eligibleChargeConditions` fields to the CommitmentInput class.
* Introduced `excludeItemBookingFromRevenueAccounting` field to the CommitmentInput class.

## CommitmentOutput

* Changed the type of `amount` from Double to BigDecimal, which may require developers to update their code to handle BigDecimal instead of Double.

## CommitmentOutputPeriodsInner

* Changed the type of `startDate` and `endDate` from String to LocalDate.
* Changed the type of `amount` from Double to BigDecimal.

## CommitmentPeriodAttributes

* Changed the type of `amount` from Double to BigDecimal, which may require developers to update their code to handle BigDecimal instead of Double.

## CommitmentPeriodInput

* Changed the type of `amount` from Double to BigDecimal, which may require developers to update their code to handle BigDecimal instead of Double.

## CommonRevenueAttributes

* Removed the `accountingCode` field from the CommonRevenueAttributes class.
* Added a new field `excludeItemBookingFromRevenueAccounting` to the CommonRevenueAttributes class.

## ContactInfo

* Renamed the field `customFields` to `customFieldsData`. This change affects all methods and references to this field, including constructors and any method calls that previously used `customFields`.

## CreateBillingPreviewRunRequest

* Added support for `filters` in CreateBillingPreviewRunRequest, allowing developers to apply a list of filters to the billing preview run.

## CreateCCReferenceTransactionPaymentMethod

* Renamed class `CreatePaymentMethodCardholderInfo` to `CreateCreditCardReferenceCardholderInfo`. This change affects the type of the `cardHolderInfo` field and related methods.

## GetPaymentMethodForAccountResponse

* Renamed the following fields and updated their data types to be consistent with REST API fields:
  * `createdOn`(OffsetDateTime) to `createdDate`(String)
  * `updatedOn`(OffsetDateTime) to `updatedDate`(String)
  * `lastTransactionTime`(OffsetDateTime) to `lastTransactionDateTime`(String)
  * `lastFailedSaleTransactionDate`(OffsetDateTime) to `lastFailedSaleTransactionDate`(String)


## PaymentMethodResponse

* Renamed the following fields and updated their data types to be consistent with REST API fields:
  * `createdOn`(OffsetDateTime) to `createdDate`(String)
  * `updatedOn`(OffsetDateTime) to `updatedDate`(String)
  * `lastTransactionTime`(OffsetDateTime) to `lastTransactionDateTime`(String)
  * `lastFailedSaleTransactionDate`(OffsetDateTime) to `lastFailedSaleTransactionDate`(String)

## CreateCreditMemoFromCharge

* The `charges` field is now marked as @Nonnull, indicating it is a required field and cannot be null.
* The JSON validation logic now enforces that the `charges` field must be present and must be an array, throwing an IllegalArgumentException if these conditions are not met.

## CreateDebitMemoFromCharge

* The `charges` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The JSON validation now requires the `charges` field to be present and to be an array, throwing an IllegalArgumentException if these conditions are not met.

## CreateFulfillment

* Removed fields `excludeItemBillingFromRevenueAccounting` and `excludeItemBookingFromRevenueAccounting`. This may affect integrations relying on these fields.
* Changed annotations for `fulfillmentDate`, `orderLineItemId`, and `quantity` from @Nullable to @Nonnull, indicating these fields are now required.

## CreateInvoiceScheduleRequest

* Added support for handling Map data structures, which may allow for more flexible data handling in invoice schedule creation.

## CreateOrUpdateCatalogGroupProductRatePlan

* The `id` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The `id` field is now added to the set of required fields, and its absence in the JSON string will throw an IllegalArgumentException.

## CreateOrderOrderLineItem

* Added a minimum constraint of 0 to the quantity field, ensuring that the quantity cannot be negative.

## CreateOrderSubscription

* The `orderActions` field is now marked as @Nonnull, indicating it is a required field. This change requires developers to ensure that `orderActions` is always provided and not null.
* Validation logic has been updated to enforce that `orderActions` must be present and must be an array in the JSON input. Missing or incorrectly formatted `orderActions` will result in an IllegalArgumentException.

## CreatePaymentScheduleRequestItems

* The `amount` field is now required (changed from @Nullable to @Nonnull).
* The `scheduledDate` field is now required (changed from @Nullable to @Nonnull).

## CreateProductRatePlanChargeRequest

* Changed the type of `revenueRecognitionRuleName` from `RevenueRecognitionRuleName` to `String`. This change requires developers to update their code to use a String instead of the custom type.

## CreateSubscriptionComponent

* Removed fields: `amendedByOrderOn`, `originalOrderDate`, and `specificListPriceBase`. These fields are no longer available in the CreateSubscriptionComponent class.

## CreditCard

* Changed annotations from @Nullable to @Nonnull for methods getCardNumber, getCardType, getExpirationMonth, and getExpirationYear, indicating these fields are now required and cannot be null.
* Added validation to ensure required fields cardNumber, cardType, expirationMonth, and expirationYear are present in JSON input, throwing an IllegalArgumentException if any are missing.

## CreditMemoEntityPrefix

* The `prefix` and `startNumber` fields are now marked as @Nonnull, meaning they cannot be null. This change requires developers to ensure these fields are always provided and not null.

## CreditMemoItem

* Added new fields `commitmentId` and `commitmentPeriodId` to the CreditMemoItem class.

## CreditMemoItemFromWriteOffInvoice

* The `invoiceItemId` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The `invoiceItemId` field is now added to `openapiRequiredFields`, enforcing its presence in JSON input.
* Validation added to ensure `invoiceItemId` is present and is a primitive type in JSON input.

## CreditMemoItemResponse

* Added new fields `commitmentId` and `commitmentPeriodId` to the CreditMemoItemResponse class.

## CreditMemoTaxationItemFromWriteOffInvoice

* The method getTaxationItemId() now requires a non-null return value, changing its annotation from @Nullable to @Nonnull.
* The field `taxationItemId` is now a required field in JSON, and its absence will throw an IllegalArgumentException.

## DebitMemoEntityPrefix

* The `prefix` and `startNumber` fields are now required and cannot be null. This change may require developers to ensure these fields are always provided when creating or updating a DebitMemoEntityPrefix.

## DocumentIdList

* The `docType` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The `docType` field is now a required field in JSON input, and its absence will result in an IllegalArgumentException.

## ExpandedCommitment

* Added new field `eligibleAccountConditions` with associated methods.
* Added new field `eligibleChargeConditions` with associated methods.

## ExpandedCreditMemoItem

* Added new fields `commitmentId` and `commitmentPeriodId` to the `ExpandedCreditMemoItem` class.

## ExpandedInvoiceItem

* Added new fields `commitmentId` and `commitmentPeriodId` to the ExpandedInvoiceItem class.
* Introduced methods to set and retrieve `commitmentId` and `commitmentPeriodId`.

## ExpandedRatePlanCharge

* Added new fields: `productCategory`, `productClass`, `productFamily`, and `productLine` to the ExpandedRatePlanCharge class.

## ExpandedUsage

* Added a new field `ratedAmount` of type BigDecimal to the ExpandedUsage class.

## Fulfillment

* Removed the `excludeItemBillingFromRevenueAccounting` field and its associated methods.
* Removed the `excludeItemBookingFromRevenueAccounting` field and its associated methods.

## GetAccountingPeriodResponse

* Changed the type of `fiscalYear` from String to Integer.
* Changed the type of `fiscalQuarter` from Long to Integer.
* Updated JSON serialization name for `fiscalQuarter` from `fiscal_quarter` to `fiscalQuarter`.

## GetBillingPreviewRunResponse

* Added a new field `filters` of type `List<BillingPreviewRunFilter>` to the GetBillingPreviewRunResponse class.
* Introduced methods to manipulate the `filters` field: `filters(List<BillingPreviewRunFilter> filters)`, `addFiltersItem(BillingPreviewRunFilter filtersItem)`, and `setFilters(List<BillingPreviewRunFilter> filters)`.
* Implemented validation for the `filters` field to ensure it is an array in the JSON string.

## GetChargeOverride

* The `negotiatedPriceTable` field has been changed from a `Map<String, Object>` to a `List<Map<String, Object>>`. This change will require developers to update their code to handle the new data structure.
* The `isDimensionalPrice` field has been removed. Any code relying on this field will need to be updated.

## GetFulfillment

* Removed fields `excludeItemBillingFromRevenueAccounting` and `excludeItemBookingFromRevenueAccounting`. This may require developers to update their code if they were using these fields.

## GetProductRatePlanChargeResponse

* Changed the type of `revenueRecognitionRuleName` from `RevenueRecognitionRuleName` to `String`. This may require developers to update their code to handle the new type.
* Removed validation for `RevenueRecognitionRuleName` as a complex type and added a check to ensure it is a primitive type in JSON.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added new field `pricingAttributes` to support dynamic pricing attributes.
* Introduced `isDimensionalPrice` field to indicate if the charge uses dimensional pricing.
* Added `isPriceNegotiated` field to specify if the charge uses negotiated pricing.

## InvoiceEntityPrefix

* The `prefix` and `startNumber` fields are now required and cannot be null. This change may require developers to ensure these fields are always provided when working with InvoiceEntityPrefix.

## InvoiceForBulkUpdate

* The `id` field is now marked as @Nonnull, indicating it is required and cannot be null.
* Validation added to ensure the `id` field is present in the JSON string, throwing an IllegalArgumentException if missing.

## InvoiceItem

* Added new field `commitmentId` with associated methods for setting and retrieving its value.
* Added new field `commitmentPeriodId` with associated methods for setting and retrieving its value.

## InvoiceScheduleSubscription

* Changed the annotations for getOrderKey() and getSubscriptionKey() from @Nullable to @Nonnull, making these fields mandatory.
* Added validation to ensure `orderKey` and `subscriptionKey` are present in the JSON string, throwing an IllegalArgumentException if they are missing.

## Order

* The type of the `commitments` field has changed from `List<UpsertCommitmentInput>` to `List<GetCommitmentOutput>`.
* The method signatures for `commitments`, `addCommitmentsItem`, and `setCommitments` have changed to use GetCommitmentOutput instead of UpsertCommitmentInput.
* Validation logic now uses GetCommitmentOutput.validateJsonElement instead of UpsertCommitmentInput.validateJsonElement.

## PaymentData

* Changed annotations from @Nullable to @Nonnull for getAuthTransactionId, getAuthorizedAmount, and getAuthorizedCurrency methods, requiring non-null values.
* Added validation to ensure required fields `authTransactionId`, `authorizedAmount`, and `authorizedCurrency` are present in JSON input, throwing an exception if missing.

## PaymentEntityPrefix

* The `prefix` field is now marked as @Nonnull, meaning it cannot be null. This change requires developers to ensure that this field is always provided and not null.
* The `startNumber` field is now marked as @Nonnull, meaning it cannot be null. This change requires developers to ensure that this field is always provided and not null.
* JSON validation now requires the `prefix` and `startNumber` fields to be present in the JSON string. Missing these fields will result in an IllegalArgumentException.

## PostInvoiceRequest

* The `id` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The `id` field is now added to the set of required fields, and its presence is validated in JSON input.

## PreviewContactInfo

* Added new fields `address1` and `address2` to the PreviewContactInfo class.

## PreviewExistingSubscriptionDiscountDetails

* Added `serviceStartDate` and `serviceEndDate` fields to the PreviewExistingSubscriptionDiscountDetails class.

## PreviewOptions

* Added a minimum constraint of 1 to the `previewNumberOfPeriods` when `previewThroughType` is set to `NumberOfPeriods`.

## PreviewOrderSubscriptions

* The `orderActions` field is now marked as @Nonnull, indicating it is required and cannot be null. This change may require developers to ensure that `orderActions` is always provided and not null in their implementations.

## PreviewStartDate

* The `previewStartDatePolicy` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The JSON validation now requires `previewStartDatePolicy` to be present in the JSON string, throwing an IllegalArgumentException if it is missing.

## PreviewThroughDate

* The method getPreviewThruDatePolicy is now annotated with @Nonnull, indicating that it will no longer return null. This change requires developers to ensure that their code does not expect a null value from this method.
* The field `previewThruDatePolicy` is now required in JSON input. Any JSON string missing this field will result in an IllegalArgumentException.

## ProductRatePlanCharge

* Changed the type of `revenueRecognitionRuleName` from `RevenueRecognitionRuleName` to `String`. This change requires developers to update their code to handle `revenueRecognitionRuleName` as a String instead of a custom type.

## QuantityForUsageCharges

* The `chargeId` and `quantity` fields are now marked as @Nonnull, indicating they are required and cannot be null.
* JSON validation now requires `chargeId` and `quantity` fields to be present in the JSON string, otherwise an IllegalArgumentException will be thrown.

## QueryBundlesResponse

* The entire QueryBundlesResponse class has been removed, which will break any code relying on this class.

## RatePlanChargeSegment

* Renamed serialized field `IsPriceNegotiated` to `isPriceNegotiated`. This change may require updates to JSON serialization/deserialization logic in client applications.

## RefundEntityPrefix

* The `prefix` field is now marked as @Nonnull, meaning it cannot be null. This change requires developers to ensure that this field is always provided.
* The `startNumber` field is now marked as @Nonnull, meaning it cannot be null. This change requires developers to ensure that this field is always provided.
* JSON validation now requires the `prefix` and `startNumber` fields to be present in the JSON string. Missing these fields will result in an IllegalArgumentException.

## RemoveCatalogGroupProductRatePlan

* The `id` field is now marked as @Nonnull, indicating it is required and cannot be null. This change may require developers to ensure that the `id` field is always provided and not null when using this class.
* Validation has been added to ensure that the `id` field is present in the JSON string. If the `id` field is missing, an IllegalArgumentException will be thrown.

## RetryPaymentScheduleItem

* The `id` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The `id` field is now added to `openapiRequiredFields`, enforcing its presence in JSON input.

## SubscriptionData

* The `startDate` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The `startDate` field is added to the set of required fields in JSON, and its absence will throw an IllegalArgumentException.

## UpdateAccountingPeriodRequest

* Changed the type of `fiscalYear` from String to Integer.
* Changed the type of `fiscalQuarter` from Long to Integer.

## UpdateCatalogGroupRequest

* Changed the type of `remove` from `List<List<RemoveCatalogGroupProductRatePlan>>` to `List<RemoveCatalogGroupProductRatePlan>`, which may require updates to code that interacts with this field.
* Updated method signatures for `remove`, `addRemoveItem`, and `setRemove` to reflect the new type of `remove`.

## UpdateCreditMemoWithId

* The `id` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The `id` field is added to the set of required fields, and its absence in JSON will throw an IllegalArgumentException.

## UpdateDebitMemoWithId

* The `id` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The `id` field is added to the set of required fields, and its presence is now validated in JSON input. Missing `id` in JSON will throw an IllegalArgumentException.

## UpdateDiscountInvoiceItem

* The `processingType` field has been removed from the UpdateDiscountInvoiceItem class. Any code relying on this field will need to be updated.

## UpdateSubscriptionRatePlan

* Removed the field `externallyManagedPlanId` from the UpdateSubscriptionRatePlan class. This may affect developers relying on this field for third-party store integrations.

## UpdateSubscriptionRatePlanCustomFields

* The `ratePlanId` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The JSON validation now requires the `ratePlanId` field to be present and a primitive type, otherwise an IllegalArgumentException will be thrown.

## UpsertCreateCommitmentInput

* Removed the `accountingCode` field from the UpsertCreateCommitmentInput class.
* Added `eligibleAccountConditions` and `eligibleChargeConditions` fields to the UpsertCreateCommitmentInput class.
* Introduced `excludeItemBookingFromRevenueAccounting` field to the UpsertCreateCommitmentInput class.

## UpsertCreateCommitmentInputAllOfPeriods

* The type of the `amount` field has been changed from Double to BigDecimal. This change requires developers to update their code to handle BigDecimal instead of Double for the `amount` field.

## UpsertCreateCommitmentPeriodInput

* Changed the type of `amount` from Double to BigDecimal, which may require developers to update their code to handle BigDecimal instead of Double.

## UpsertUpdateCommitmentInput

* Added a new field `status` of type CommitmentStatus to the UpsertUpdateCommitmentInput class.

## UpsertUpdateCommitmentPeriodInput

* The `endDate` field has been removed and replaced with the `status` field. This change requires developers to update their code to use `status` instead of `endDate`.
* Added a new field `status` of type `CommitmentPeriodStatus`.
