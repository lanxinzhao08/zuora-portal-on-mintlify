---
markdown:
  toc:
    hide: false
---

# Java client library 3.8.0 changelog

## ObjectQueriesApi

* Introduced the `includeNullFields` parameter to control the inclusion of null fields in the response.
* Added queryCommitmentByKeyApi method to query commitments by key with filters, expands, and sort capabilities.
* Introduced queryCommitmentSegmentByKeyApi method to query commitment segments by key with similar capabilities.
* Added queryCommitmentSegmentsApi method to query multiple commitment segments with filters, expands, and sort capabilities.
* Introduced queryCommitmentsApi method to query multiple commitments with similar capabilities.
* Added queryDeliveryAdjustmentByKeyApi method to query delivery adjustments by key with filters, expands, and sort capabilities.
* Added asynchronous and synchronous methods for querying DeliveryAdjustment by key with various parameters.
* Introduced QueryDeliveryAdjustmentByKeyApi class for building and executing queries for DeliveryAdjustment by key.
* Added methods for querying DeliveryAdjustments with filters, expands, and sort capabilities.
* Introduced QueryDeliveryAdjustmentsApi class for building and executing queries for DeliveryAdjustments.
* Added methods for querying Fulfillment by key with various parameters.
* Introduced QueryFulfillmentByKeyApi class for building and executing queries for Fulfillment by key.
* Added methods for querying Fulfillments with filters, expands, and sort capabilities.
* Introduced QueryFulfillmentsApi class for building and executing queries for Fulfillments.
* Added methods for querying Ramp by key with various parameters.
* Introduced QueryRampByKeyApi class for building and executing queries for Ramp by key.
* Added methods for querying Ramps with filters, expands, and sort capabilities.
* Introduced QueryRampsApi class for building and executing queries for Ramps.

## BulkUpdateInvoicesRequest
* The type of the `invoices` field has been changed from `List<UpdateInvoiceRequest>` to `List<InvoiceForBulkUpdate>`.

## BulkUpdateOrderLineItem
* Removed the `itemNumber` field, which may require developers to update their code if they were using this field.

## CreateAccountRequest
* Removed fields `organizationId` and `organizationName` from CreateAccountRequest class. This may require updates to code that previously used these fields.

## CreateCatalogGroupRequest
* The `name` field is now required (changed from @Nullable to @Nonnull). JSON requests must include this field.

## CreateCreditMemoFromChargeRequest
* The `charges` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The JSON validation now requires the `charges` field to be present and non-null in the JSON string.
* The `charges` field must be an array in the JSON string; otherwise, an IllegalArgumentException will be thrown.

## CreateCreditMemoFromInvoice
* The `items` field is now marked as @Nonnull, indicating it is required and cannot be null.
* Validation added to ensure `items` is present and is an array in the JSON input.

## CreateCreditMemoFromInvoiceRequest
* The `items` field is now marked as @Nonnull, indicating it is a required field. Developers must ensure this field is always provided.
* Validation has been added to ensure `items` is present and is an array in the JSON string. Missing or incorrect types will result in an IllegalArgumentException.

## CreateCreditMemoTaxationItemsRequest
* The `taxationItems` field is now marked as `@Nonnull`, indicating it is required and cannot be null.
* The JSON validation logic now enforces that the `taxationItems` field must be present and must be an array, throwing an exception if these conditions are not met.

## CreateDebitMemoFromChargeRequest
* The `charges` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The `charges` field is now validated to ensure it is present and is an array in the JSON input.

## CreateDebitMemoFromInvoiceRequest
* The `items` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The `items` field is now required in the JSON input, and an exception will be thrown if it is missing.
* The validation logic for the `items` field has been updated to ensure it is an array and validate each element, with exceptions thrown for invalid formats.

## CreateDebitMemosFromInvoiceRequest
* The `items` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The `items` field is now required in the JSON input, and an exception will be thrown if it is missing.
* Validation has been added to ensure `items` is an array in the JSON input, and an exception will be thrown if it is not.

## CreateInvoiceCollectRequest
* Removed the `invoiceNumber` field, which may require updates to code that previously used this field.

## CreateInvoiceScheduleRequest
* The `accountKey` field is now required (changed from @Nullable to @Nonnull).
* The `orders` field is now required (changed from @Nullable to @Nonnull).
* JSON validation now enforces the presence of `accountKey` and `orders` fields, throwing an IllegalArgumentException if they are missing.

## CreateOrderRequest
* Removed the `externallyManagedBy` field from the CreateOrderRequest class. This change will require developers to update their code if they were using this field.

## CreatePaymentMethodRequest

* The class now extends AbstractOpenApiSchema, which may affect how instances are created and used.
* The previous fields and methods related to payment method details have been removed in favor of a oneOf schema approach.
* Developers need to update their code to use the new oneOf schema approach for handling different payment method types.
* Removed the CustomTypeAdapterFactory class, which may affect custom serialization and deserialization logic.
* Introduced a new oneOf schema approach for handling different payment method types, including various specific payment methods like CreatePayPalECPaymentMethod, CreateCreditCardPaymentMethod, etc.
* Added a custom TypeAdapterFactory for serializing and deserializing instances based on the new oneOf schema.
* Added methods to retrieve specific payment method instances like CreatePayPalAdaptivePaymentMethod, CreateCreditCardPaymentMethod, etc.
* Implemented a new validation mechanism for JSON elements using oneOf schemas, which validates against multiple payment method types.

## CreatePaymentScheduleItemsRequest
* The `items` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The JSON validation now requires the `items` field to be present and to be a non-null array, otherwise an IllegalArgumentException will be thrown.

## CreatePaymentScheduleRequest
* Added a maximum constraint of 1000 to the `occurrences` field.

## CreatePaymentSchedulesRequest
* The `paymentSchedules` field is now marked as @Nonnull, indicating it is required and cannot be null.
* The JSON validation now requires `paymentSchedules` to be present and non-null in the JSON string, and it must be an array.

## CreateSubscriptionRequest
* Added a minimum value constraint of 1 for the initial subscription term when termType is `TERMED`.
* Added a minimum value constraint of 0 for the subscription renewal term.

## CreateTaxationItemsForDebitMemoRequest

* The `taxationItems` field is now marked as `@Nonnull`, indicating it is required and cannot be null.
* The JSON validation logic now enforces that the `taxationItems` field must be present and must be an array, throwing an exception if these conditions are not met.

## CreateTaxationItemsRequest
* The `taxationItems` field is now marked as `@Nonnull`, indicating it is required and cannot be null.
* The JSON validation logic now enforces that the `taxationItems` field must be present and must be an array, throwing an exception if these conditions are not met.

## GenerateBillingDocumentRequest

* The `effectiveDate` and `targetDate` fields are now marked as @Nonnull, indicating they are required and cannot be null. This change may require developers to ensure these fields are always provided when creating instances of GenerateBillingDocumentRequest.

## PreviewExistingSubscriptionRequest

* The `previewThroughDate` field is now required. Any JSON input must include this field, otherwise an IllegalArgumentException will be thrown.

## PreviewPaymentSchedule

* Added a maximum limit of 1000 for the number of payment schedule items that can be created by the payment schedule.

## PreviewSubscriptionRequest

* Added a minimum constraint of 1 for the initialTerm when termType is `TERMED`.

## ReconcileRefundRequest

* The `action` and `gatewayReconciliationStatus` fields are now marked as @Nonnull, meaning they are required and cannot be null.
* Validation added to ensure `action` and `gatewayReconciliationStatus` fields are present and of the correct type in JSON input.

## RegenerateBillingRequest

* Renamed field `documentId` to `id`. This change requires updates to any code referencing `documentId`.
* The `type` field is now marked as @Nonnull, indicating it is required and cannot be null.

## RegenerateBookingRequest

* Renamed field `subscriptionNumber` to `subscriptionName`. This change requires updates to any code referencing `subscriptionNumber`.
* The `type` field is now marked as @Nonnull, indicating it is a required field and cannot be null.

## UpdateAccountRequest

* The `organizationLabel` field has been removed from the UpdateAccountRequest class. Any code relying on this field will need to be updated.

## UpdateAccountingPeriodRequest

* Renamed serialized field `fiscal_quarter` to `fiscalQuarter`. This change may require updates to JSON serialization/deserialization logic in client applications.

## UpdateFulfillmentRequest
* Removed the `fulfillmentType` field and its associated methods.
* Removed the `orderLineItemId` field and its associated methods.
* Removed the `excludeItemBillingFromRevenueAccounting` field and its associated methods.
* Removed the `excludeItemBookingFromRevenueAccounting` field and its associated methods.

## UpdateInvoiceRequest
* The `id` field has been removed from the UpdateInvoiceRequest class. Any code that relies on setting or getting the `id` field will need to be updated.

## UpdateOrderActionRequest
* Removed the `orderAction` field, which may require developers to update their code if they were using this field.
* Added `changeReason` field to specify the reason for the change when updating an order action.
* Introduced `customFields` map to allow additional custom fields to be included in an order action update.

## UpdateOrderLineItem
* Removed the `itemNumber` field, which may require developers to update their code if they were using this field.

## UpdateOrderLineItemRequest
* The `itemNumber` field has been removed. Any code relying on this field will need to be updated.

## UpdateOrderRequest
* Removed the `externallyManagedBy` field and its associated methods. Developers using this field will need to update their code to remove any references to it.

## UpdatePaymentMethodRequest
* The class UpdatePaymentMethodRequest has been refactored to extend AbstractOpenApiSchema, which may affect how instances of this class are created and used.
* The previous fields and methods related to payment method details have been removed, and the class now uses a oneOf schema approach with multiple payment method types.
* Developers will need to update their code to handle the new oneOf schema structure for payment methods.
* Introduced a new oneOf schema structure to support multiple payment method types: UpdateACHPaymentMethod, UpdateBankTransferPaymentMethod, UpdateCCReferenceTransactionPaymentMethod, UpdateCreditCardPaymentMethod, and UpdateOpenPaymentMethod.
* Added a custom TypeAdapterFactory to handle serialization and deserialization of the new oneOf schema structure.

## UpdatePaymentScheduleRequest
* Added a maximum limit of 1000 for the number of payment schedule items that can be updated.

## UpdateSubscriptionRequest
* Added a minimum constraint of 1 for the current subscription term when termType is `TERMED`.
* Added a minimum constraint of 0 for the subscription renewal term.

## UsageOveragePricingOverride
* Added a new field `originalListPrice` to the UsageOveragePricingOverride class.

## UsageOveragePricingUpdate
* Added a new field `originalListPrice` to the UsageOveragePricingUpdate class.
