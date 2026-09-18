---
title: "Node.js client library 3.8.0 changelog"
sidebarTitle: "3.8.0"
---
## ObjectQueriesApi
* Introduced the `include_null_fields` parameter to control inclusion of null fields in the response.
* Added queryCommitmentByKey and queryCommitmentByKeyWithHttpInfo methods for querying Commitment objects by key.
* Added queryCommitmentSegmentByKey and queryCommitmentSegmentByKeyWithHttpInfo methods for querying CommitmentSegment objects by key.
* Added queryCommitmentSegments and queryCommitmentSegmentsWithHttpInfo methods for querying multiple CommitmentSegment objects.
* Added queryCommitments and queryCommitmentsWithHttpInfo methods for querying multiple Commitment objects.
* Added queryDeliveryAdjustmentByKey and queryDeliveryAdjustmentByKeyWithHttpInfo methods for querying DeliveryAdjustment objects by key.
* Added queryDeliveryAdjustments and queryDeliveryAdjustmentsWithHttpInfo methods for querying multiple DeliveryAdjustment objects.
* Added queryFulfillmentByKey and queryFulfillmentByKeyWithHttpInfo methods for querying Fulfillment objects by key.
* Added queryFulfillments and queryFulfillmentsWithHttpInfo methods for querying multiple Fulfillment objects.
* Added queryRampByKey and queryRampByKeyWithHttpInfo methods for querying Ramp objects by key.
* Added queryRamps and queryRampsWithHttpInfo methods for querying multiple Ramp objects.

## src/zuora_api/index
* Added new payment method models: CreateACHPaymentMethod, CreateAutogiroPaymentMethod, CreateBacsPaymentMethod, CreateBasePaymentMethod, CreateBecsPaymentMethod, CreateBecsnzPaymentMethod, CreateBetalingsservicePaymentMethod, CreateCCReferenceTransactionPaymentMethod, CreateCreditCardPaymentMethod, CreateOpenPaymentMethod, CreatePADPaymentMethod, CreatePayPalAdaptivePaymentMethod, CreatePayPalCPPaymentMethod, CreatePayPalECPaymentMethod, CreatePayPalNativeECPaymentMethod, CreateSEPAPaymentMethod.
* Added new expanded models: ExpandedCommitment, ExpandedCommitmentSegment, ExpandedDeliveryAdjustment, ExpandedFulfillment, ExpandedRamp.
* Added new query response models: QueryCommitmentSegmentsResponse, QueryCommitmentsResponse, QueryDeliveryAdjustmentsResponse, QueryFulfillmentsResponse, QueryRampsResponse.
* Added new update payment method models: UpdateACHPaymentMethod, UpdateBankTransferPaymentMethod, UpdateBasePaymentMethod, UpdateCCReferenceTransactionPaymentMethod,UpdateCreditCardPaymentMethod, UpdateOpenPaymentMethod.
* Added InvoiceForBulkUpdate model.
* Removed UpdatePaymentMethodRequestCreditCardInfo model.
## BulkUpdateInvoicesRequest
* Replaced the use of `UpdateInvoiceRequest` with `InvoiceForBulkUpdate` for handling invoice updates. This change requires developers to update their code to use the new `InvoiceForBulkUpdate` model when working with bulk invoice updates.
## BulkUpdateOrderLineItem
* The `itemNumber` field has been removed from the BulkUpdateOrderLineItem class. This may require developers to update their code if they were using this field.
## CreateAccountRequest
* Removed `organizationId` and `organizationName` properties from CreateAccountRequest. Developers using these properties will need to update their code.
## CreateCatalogGroupRequest
* Constructor now requires a `name` parameter, which is a mandatory field for creating a catalog group.
* Added validation to ensure that the `name` property is present in the JSON data when creating a catalog group.
## CreateCreditMemoFromInvoice
* Constructor now requires `items` parameter, which is a mandatory field.
* Added validation to ensure `items` property is present in JSON data.

## CreateCreditMemoFromInvoiceRequest
* The constructor now requires an `items` parameter, which is an array of CreditMemoItemFromInvoiceItem. This change requires developers to update their code to pass this parameter when creating a new instance of CreateCreditMemoFromInvoiceRequest.
* Added validation to ensure that the `items` property is present in the JSON data, throwing an error if it is missing. This ensures that the required data is provided when creating a credit memo from an invoice.
## CreateCreditMemoTaxationItemsRequest
* The constructor now requires a `taxation_items` parameter, which is mandatory for initialization.
* The `initialize` method now requires a `taxation_items` parameter.
* Added validation to ensure that the `taxationItems` property is present in the JSON data.
## CreateDebitMemoFromChargeRequest
* The constructor now requires a `charges` parameter, which is an array of DebitMemoItemFromChargeDetail. This change requires developers to update their code to pass this parameter when creating an instance of CreateDebitMemoFromChargeRequest.
* Added validation to ensure that the `charges` property is present in the JSON data. This enhances data integrity by ensuring required fields are included.
## CreateDebitMemoFromInvoiceRequest
* The constructor now requires an `items` parameter, which is an array of DebitMemoItemFromInvoiceItemRequest objects. This change requires developers to update their code to pass this parameter when creating an instance of CreateDebitMemoFromInvoiceRequest.
* Added validation to ensure that the `items` property is present in the JSON data, throwing an error if it is missing. This ensures that the required data is provided when creating a debit memo from an invoice.
## CreateDebitMemosFromInvoiceRequest
* The constructor now requires an `items` parameter, which is an array of DebitMemoItemFromInvoiceItemRequest objects. This change requires developers to update their code to pass this parameter when creating a new instance of CreateDebitMemosFromInvoiceRequest.
* Added validation to ensure that the `items` property is present in the JSON data, throwing an error if it is missing. This enhances data integrity by ensuring required fields are provided.
## CreateInvoiceCollectRequest
* Removed support for `invoiceNumber` field. Developers must now use `invoiceId` for identifying invoices.
## CreateOrderRequest
* The `externallyManagedBy` property has been removed from the CreateOrderRequest model. This may require updates to code that previously utilized this property.
## CreatePaymentMethodRequest
* The constructor now accepts an instance parameter instead of a type parameter, which may require changes in how instances are created.
* The method `constructFromObject` now returns a new instance of CreatePaymentMethodRequest directly from data, which may affect how objects are constructed from plain JavaScript objects.
* The `validateJSON` method has been removed, which may affect validation processes previously relying on it.
* Added support for multiple payment method types using a oneOf schema, allowing for more flexible payment method creation.
* Introduced a new method `fromJSON` to create an instance of CreatePaymentMethodRequest from a JSON string.
* Added new fields such as `mandateId`, `mandateReceivedStatus`, `existingMandateStatus`, `mandateCreationDate`, and `mandateUpdateDate` for enhanced mandate management.
## CreatePaymentScheduleItemsRequest
* The constructor now requires an `items` parameter, which must be provided when creating an instance of CreatePaymentScheduleItemsRequest.
* Added validation to ensure that the `items` property is present in the JSON data and is an array.
## CreatePaymentSchedulesRequest
* Constructor now requires a `payment_schedules` parameter, which may require updates to existing code that uses this constructor without arguments.
* Added validation to ensure `paymentSchedules` is present and is an array in the JSON data.
## CreateTaxationItemsForDebitMemoRequest
* Constructor now requires a `taxation_items` parameter, which may require updates to existing code that instantiates this class.
* Added validation to ensure `taxationItems` is present in JSON data, throwing an error if missing.
## CreateTaxationItemsRequest
* The constructor now requires a `taxation_items` parameter, which must be provided when creating an instance of CreateTaxationItemsRequest.
* Added validation to ensure that the `taxationItems` property is present in the JSON data when creating a CreateTaxationItemsRequest instance.
## GenerateBillingDocumentRequest
* Constructor now requires `effective_date` and `target_date` parameters, which may require updates to existing code that uses this constructor.
* Added validation to ensure `effectiveDate` and `targetDate` are present in the JSON data, improving data integrity.
## PreviewExistingSubscriptionRequest
* The constructor now requires a `preview_through_date` parameter, which is a breaking change for any existing code that instantiates `PreviewExistingSubscriptionRequest` without this parameter.
* Added validation to ensure the `previewThroughDate` property is present in the JSON data, enhancing data integrity checks.
## ReconcileRefundRequest
* Constructor now requires `action` and `gateway_reconciliation_status` parameters.
* Added validation to ensure required properties `action` and `gatewayReconciliationStatus` are present in JSON data.
## RegenerateBillingRequest
* The constructor now requires a `type` parameter.
* The `documentId` property has been renamed to `id`.
* Added validation to ensure all required properties, including `type`, are present in the JSON data.
## RegenerateBookingRequest
* The constructor now requires a `type` parameter.
* The property `subscriptionNumber` has been renamed to `subscriptionName`.
* Added validation to ensure all required properties, including `type`, are present in the JSON data.
## UpdateAccountRequest
* The `organizationLabel` property has been removed from the UpdateAccountRequest model. Any code relying on this property will need to be updated.
## UpdateAccountingPeriodRequest
* Renamed property `fiscal_quarter` to `fiscalQuarter`. This change requires developers to update their code to use the new property name.
## UpdateFulfillmentRequest
* Removed properties `excludeItemBillingFromRevenueAccounting` and `excludeItemBookingFromRevenueAccounting`.
* Removed property `fulfillmentType`.
* Removed property `orderLineItemId`.
## UpdateInvoiceRequest
* The `id` field has been removed from the UpdateInvoiceRequest model. Any code relying on this field will need to be updated.
## UpdateOrderActionRequest
* Added `changeReason` property to UpdateOrderActionRequest and UpdateOrderAction, allowing developers to specify a reason for the order action change.
* Introduced `customFields` property to UpdateOrderActionRequest and UpdateOrderAction, enabling developers to include custom fields in an Order Action object.
## UpdateOrderLineItem
* The `itemNumber` field has been removed. This may affect any code that relies on this field for order line items.
## UpdateOrderLineItemRequest
* The `itemNumber` field has been removed from the UpdateOrderLineItemRequest model. Any code relying on this field will need to be updated.
## UpdateOrderRequest
* Removed the `externallyManagedBy` property from the UpdateOrderRequest model. This may require updates to code that relied on this property.
## UpdatePaymentMethodRequest
* Removed PaymentMethodObjectCustomFields and UpdatePaymentMethodRequestCreditCardInfo from the constructor and initialization process.
* Changed the constructor to accept an instance of one of the specific payment method update types (e.g., UpdateACHPaymentMethod, UpdateBankTransferPaymentMethod, etc.) instead of initializing with UpdatePaymentMethodRequestCreditCardInfo and PaymentMethodObjectCustomFields.
* Updated constructFromObject method to return a new UpdatePaymentMethodRequest instance directly.
* Removed validation logic for JSON data fields like securityCode, accountKey, authGateway, etc.
* Added support for multiple payment method update types: UpdateACHPaymentMethod, UpdateBankTransferPaymentMethod, UpdateCCReferenceTransactionPaymentMethod, UpdateCreditCardPaymentMethod, and UpdateOpenPaymentMethod.
* Introduced a mechanism to handle multiple matches when constructing UpdatePaymentMethodRequest with oneOf schemas.
* Added methods to get and set the actual instance of the payment method update type.
* Added toJSON and fromJSON methods for JSON serialization and deserialization.
## UsageOveragePricingOverride
* Added `originalListPrice` property to the UsageOveragePricingOverride class, allowing developers to access the original list price of a product or service.
## UsageOveragePricingUpdate
* Added `originalListPrice` property to the UsageOveragePricingUpdate model, allowing developers to access the original list price of a product or service.
