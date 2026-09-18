---
markdown:
  toc:
    hide: false
---

# C# client library 1.0.0 changelog

Note that the `1.0.0-beta.7` version is identical to `1.0.0`.

## ObjectQueriesApi

* Introduced the `includeNullFields` parameter to query methods, enabling the inclusion of null fields in the response.
* Added new methods for querying commitments, commitment segments, delivery adjustments, fulfillments, and ramps by key and with additional parameters.
* Introduced asynchronous versions of the new query methods for commitments, commitment segments, delivery adjustments, fulfillments, and ramps.
* Added QueryCommitments method to query commitments with various optional parameters.
* Introduced QueryDeliveryAdjustmentByKey method to query delivery adjustments by key.
* Added QueryDeliveryAdjustments method to query multiple delivery adjustments.
* Introduced QueryFulfillmentByKey method to query fulfillments by key.
* Added QueryFulfillments method to query multiple fulfillments.
* Introduced QueryRampByKey method to query ramps by key.
* Added QueryRamps method to query multiple ramps.
* Added new method `QueryRamps` for querying ramp objects synchronously.
* Added new asynchronous method `QueryRampsAsync` for querying ramp objects with support for cancellation tokens.
* Introduced support for additional optional parameters in `QueryRamps` and `QueryRampsAsync` methods, including `idempotencyKey`, `acceptEncoding`, `contentEncoding`, `zuoraTrackId`, `zuoraEntityIds`, `authorization`, `zuoraVersion`, `zuoraOrgIds`, `pageSize`, `cursor`, `sort`, `expand`, `filter`, `fields`, and `includeNullFields`.

## BulkUpdateInvoicesRequest
* Changed the type of the `invoices` parameter and property from List\<UpdateInvoiceRequest> to List\<InvoiceForBulkUpdate>.

## BulkUpdateOrderLineItem
* Removed the `itemNumber` parameter from the constructor and the corresponding property from the class.
* Added validation for various string properties to ensure they do not exceed specified maximum lengths.
* Added pattern validation for `BillTo` and `ShipTo` properties.
* Added minimum length validation for `InvoiceGroupNumber` and `SoldTo` properties.
* Added minimum value validation for `Quantity` property.

## CancelSubscriptionRequest
* Added validation for CreditMemoReasonCode to ensure its length is less than 25 characters.
* Added regex pattern validation for DocumentDate, InvoiceTargetDate, and TargetDate to ensure they match the pattern YYYY-MM-DD.

## CreateAccountPaymentMethod
* Added validation for AddressLine1 and AddressLine2 to ensure maximum length of 255 characters.
* Added validation for City to ensure maximum length of 40 characters.
* Added validation for Country to ensure maximum length of 64 characters.
* Added validation for Phone to ensure maximum length of 40 characters.
* Added validation for State to ensure maximum length of 50 characters.
* Added validation for ZipCode to ensure maximum length of 20 characters.
* Added validation for IBAN to ensure minimum length of 2 characters.
* Added validation for IdentityNumber to ensure maximum length of 256 characters.
* Added validation for MitProfileAgreedOn to match a specific date pattern.
* Added validation for SecondTokenId to ensure maximum length of 64 characters.
* Added validation for TokenId to ensure length between 1 and 255 characters.
* Added validation for BAID to ensure length between 1 and 64 characters.
* Added validation for Email to ensure maximum length of 80 characters.
* Added validation for PreapprovalKey to ensure length between 1 and 32 characters.
## CreateAccountRequest
* Removed parameters `organizationId` and `organizationName` from the CreateAccountRequest constructor.
* Removed properties `OrganizationId` and `OrganizationName` from the CreateAccountRequest class.
* Added validation for various fields including AccountNumber, CommunicationProfileId, CreditMemoReasonCode, CrmId, Currency, DocumentDate, HpmCreditCardPaymentMethodId, InvoiceTargetDate, InvoiceTemplateId, Name, Notes, PaymentGateway, SalesRep, SequenceSetId, TargetDate, CommunicationProfileName, PaymentGatewayNumber, PaymentGatewayName, ParentAccountNumber, SummaryStatementTemplateId, SequenceSetName, and PurchaseOrderNumber.
## CreateAccountingCodeRequest
* Added validation for GlAccountName to ensure its length does not exceed 255 characters.
* Added validation for GlAccountNumber to ensure its length does not exceed 255 characters.
* Added validation for Name to ensure its length does not exceed 100 characters.
* Added validation for Notes to ensure its length does not exceed 2000 characters.
## CreateAccountingPeriodRequest
* Added validation for `Name` field to ensure its length does not exceed 100 characters.
* Added validation for `Notes` field to ensure its length does not exceed 255 characters.
## CreateCatalogGroupRequest
* The `name` parameter is now required and cannot be null. An ArgumentNullException will be thrown if `name` is not provided.
* The `Name` property is now marked as required in the DataMember attribute.
* Added validation to ensure `Description` does not exceed 500 characters.
* Added validation to ensure `Name` does not exceed 255 characters.
## CreateContactRequest
* The maximum allowed length for the MobilePhone field has been reduced from 100 to 40 characters. This change may require developers to update their code to ensure that mobile phone numbers do not exceed the new limit.

## CreateCreditMemoFromCharge
* Added validation for `Comment` field to ensure its length does not exceed 255 characters.
* Added validation for `Number` field to ensure its length does not exceed 255 characters.

## CreateCreditMemoFromChargeRequest
* The `charges` parameter is now required and cannot be null. This change will require developers to ensure that a non-null value is provided for `charges` when creating an instance of CreateCreditMemoFromChargeRequest.
* Validation added for `Comment` and `Number` fields to ensure their lengths do not exceed 255 characters.

## CreateCreditMemoFromInvoice
* The `items` parameter is now required in the CreateCreditMemoFromInvoice constructor. Passing a null value will throw an ArgumentNullException.
* Added a protected constructor for CreateCreditMemoFromInvoice that initializes AdditionalProperties as a new Dictionary.

## CreateCreditMemoFromInvoiceRequest
* The `items` parameter is now required in the CreateCreditMemoFromInvoiceRequest constructor. Passing a null value will throw an ArgumentNullException.
* Added a protected constructor for CreateCreditMemoFromInvoiceRequest that initializes AdditionalProperties as a new Dictionary.
## CreateCreditMemoTaxationItemsRequest
* The constructor for CreateCreditMemoTaxationItemsRequest now requires a non-null list of taxationItems. Passing a null value will throw an ArgumentNullException.
* The DataMember attribute for TaxationItems now has IsRequired set to true, indicating that this property must be provided.
## CreateDebitMemoFromCharge
* Added validation for the `Number` field to ensure its length does not exceed 255 characters.
## CreateDebitMemoFromChargeRequest
* The `charges` parameter is now required and cannot be null. This change will require developers to ensure that a non-null value is provided for `charges` when creating an instance of CreateDebitMemoFromChargeRequest.
* Added validation to ensure the `Number` property does not exceed a length of 255 characters.
## CreateDebitMemoFromInvoiceRequest
* The `items` parameter is now required in the CreateDebitMemoFromInvoiceRequest constructor. Passing a null value will throw an ArgumentNullException.

## CreateDebitMemosFromInvoiceRequest
* The `items` parameter is now required in the CreateDebitMemosFromInvoiceRequest constructor. Passing a null value will throw an ArgumentNullException.

## CreateInvoiceCollectRequest
* Removed `invoiceNumber` parameter from the constructor and the corresponding property.
* Added validation for `PaymentGateway` to ensure its length does not exceed 40 characters.
## CreateInvoiceRequest
* Added validation for `Comments` field to ensure its length does not exceed 255 characters.
* Added validation for `InvoiceNumber` field to ensure its length does not exceed 255 characters.
* Added pattern validation for `BillToContactId`, `SoldToContactId`, `TemplateId`, and `ShipToContactId` fields to ensure they match a 32-character hexadecimal pattern.
* Added validation for `PaymentTerm` field to ensure its length does not exceed 100 characters.
* Added validation for `SequenceSet` field to ensure its length does not exceed 50 characters.
## CreateInvoiceScheduleRequest
* The `accountKey` parameter is now required and cannot be null. An ArgumentNullException will be thrown if it is not provided.
* The `orders` parameter is now required and cannot be null. An ArgumentNullException will be thrown if it is not provided.
* Added a protected constructor for CreateInvoiceScheduleRequest that initializes AdditionalProperties as a new Dictionary.
## CreateJournalEntryRequest
* Added validation for `Currency` field to ensure its length does not exceed 3 characters.
* Added validation for `Notes` field to ensure its length does not exceed 2000 characters.
## CreateOrderRequest
* Removed the `ExternallyManagedBy` property from the CreateOrderRequest class, which may require updates to code that previously utilized this property.
## CreatePaymentMethodACH
* Added validation for AddressLine1 with a maximum length of 255 characters.
* Added validation for AddressLine2 with a maximum length of 255 characters.
* Added validation for City with a maximum length of 40 characters.
* Added validation for Country with a maximum length of 64 characters.
* Added validation for Phone with a maximum length of 40 characters.
* Added validation for State with a maximum length of 50 characters.
* Added validation for ZipCode with a maximum length of 20 characters.
## CreatePaymentMethodBankTransfer
* Added validation for IBAN to ensure its length is greater than 2.
* Added validation for IdentityNumber to ensure its length is less than 256.
## CreatePaymentMethodCCReferenceTransaction
* Added validation for SecondTokenId with a maximum length of 64 characters.
* Added validation for TokenId with a maximum length of 255 characters and a minimum length of 1 character.
## CreatePaymentMethodDecryptionRequest
* Added validation for PaymentGateway field to ensure its length does not exceed 40 characters.
## CreatePaymentMethodPayPalAdaptive
* Added validation for PreapprovalKey to ensure its length is between 1 and 32 characters.
## CreatePaymentMethodPayPalECPayPalNativeECPayPalCP
* Added validation for BAID with constraints on maximum length (64 characters) and minimum length (1 character).
* Added validation for Email with a maximum length constraint of 80 characters.
## CreatePaymentMethodRequest
* The class CreatePaymentMethodRequest now extends AbstractOpenAPISchema instead of directly implementing IValidatableObject.
* The constructor for CreatePaymentMethodRequest has been changed to accept specific payment method instances (e.g., CreatePayPalECPaymentMethod) instead of individual parameters.
* The properties such as BAID, Email, CardNumber, etc., have been removed from CreatePaymentMethodRequest, and the class now uses a oneOf schema approach.
* The ActualInstance property now throws an exception if the instance type is not one of the predefined payment method types.
* Introduced multiple constructors for CreatePaymentMethodRequest to initialize with specific payment method types like CreatePayPalECPaymentMethod, CreateCreditCardPaymentMethod, etc.
* Added a custom JSON converter CreatePaymentMethodRequestJsonConverter for handling serialization and deserialization of CreatePaymentMethodRequest.
## CreatePaymentMethodUpdaterBatchRequest
* Added validation for UpdaterAccountId to ensure it matches a specific pattern of 32 hexadecimal characters.
## CreatePaymentRequest
* The property `GatewayOrderId` has been renamed to `PaymentGatewayNumber`. This change requires developers to update their code to use the new property name.
* The maximum length for `PaymentGatewayNumber` has been reduced from 50 to 40 characters. Developers need to ensure that the values assigned to this property do not exceed the new limit.
## CreatePaymentRunRequest
* Added validation for AccountId, BillingRunId, and PaymentGatewayId to ensure their lengths do not exceed 32 characters.
## CreatePaymentScheduleItemsRequest
* The constructor now throws an ArgumentNullException if `items` is null, making `items` a required parameter.
* Added a protected constructor that initializes AdditionalProperties as a new Dictionary.
## CreatePaymentScheduleRequest
* Added validation for `Description` field to ensure its length does not exceed 255 characters.
* Added validation for `Occurrences` field to ensure its value does not exceed 1000.
## CreatePaymentSchedulesRequest
* The constructor for CreatePaymentSchedulesRequest now requires a non-null `paymentSchedules` parameter. Passing a null value will throw an ArgumentNullException.
## CreateRSASignatureRequest
* Added validation for Uri property to ensure its length does not exceed 2000 characters.
## CreateSubscriptionRequest
* Added validation for CreditMemoReasonCode with a maximum length of 25 characters.
* Added validation for DocumentDate to match the pattern YYYY-M-D.
* Added validation for InitialTerm to ensure it is greater than or equal to 1.
* Added validation for InvoiceTargetDate to match the pattern YYYY-M-D.
* Added validation for Notes with a maximum length of 500 characters.
* Added validation for RenewalTerm to ensure it is greater than or equal to 0.
* Added validation for SubscriptionNumber with a maximum length of 100 characters.
* Added validation for TargetDate to match the pattern YYYY-M-D.
## CreateTaxationItemsRequest
* The constructor for CreateTaxationItemsRequest now requires a non-null list of taxationItems. Passing a null value will throw an ArgumentNullException.
* The DataMember attribute for TaxationItems now has IsRequired set to true, indicating that this property must be provided.
## EmailBillingDocumentRequest
* Added validation for PdfFileId to ensure it matches the pattern of a 32-character hexadecimal string.
## GenerateBillingDocumentRequest
* The `effectiveDate` parameter is now required and cannot be null.
* The `targetDate` parameter is now required and cannot be null.
* Added validation to ensure `CreditMemoReasonCode` does not exceed 25 characters.
## PreviewExistingSubscriptionRequest
* The `previewThroughDate` parameter is now required and cannot be null. This change will require developers to ensure that this parameter is provided when creating an instance of PreviewExistingSubscriptionRequest.
* Added a protected constructor for PreviewExistingSubscriptionRequest that initializes the AdditionalProperties dictionary.
## PreviewPaymentSchedule
* Added validation to ensure the `Occurrences` property does not exceed 1000.
## PreviewSubscriptionRequest
* Added validation for DocumentDate to ensure it matches the pattern YYYY-M-D.
* Added validation for InitialTerm to ensure it is greater than or equal to 1.
* Added validation for InvoiceTargetDate to ensure it matches the pattern YYYY-M-D.
* Added validation for Notes to ensure its length is less than 500 characters.
* Added validation for TargetDate to ensure it matches the pattern YYYY-M-D.
## PutAttachmentRequest
* Added validation for `Description` to ensure its length does not exceed 255 characters.
* Added validation for `FileName` to ensure its length does not exceed 255 characters.
* Added validation for `FileName` to ensure its length is at least 1 character.
## ReconcileRefundRequest
* The `action` property is now required and cannot be null.
* The `gatewayReconciliationStatus` property is now required and cannot be null.
* Added validation to ensure `GatewayReconciliationReason`, `GatewayReconciliationStatus`, and `PayoutId` have a maximum length of 64 characters.
## RefundCreditMemoRequest
* Added validation for GatewayId to ensure its length does not exceed 35 characters.
## RegenerateBillingRequest
* The constructor for RegenerateBillingRequest now requires the `type` parameter to be non-null, throwing an ArgumentNullException if it is null.
* The `documentId` property has been renamed to `id`.
* A protected constructor has been added to initialize the AdditionalProperties dictionary.
## RegenerateBookingRequest
* The `type` parameter is now required and cannot be null. An ArgumentNullException will be thrown if it is not provided.
* The `subscriptionNumber` parameter has been replaced with `subscriptionName`.
* Added a protected constructor for RegenerateBookingRequest that initializes AdditionalProperties as a new Dictionary.
## RejectPaymentRequest
* Added validation for GatewayReconciliationReason to ensure its length is less than 64 characters.
* Added validation for GatewayReconciliationStatus to ensure its length is less than 64 characters.
* Added validation for GatewayResponse to ensure its length is less than 500 characters.
* Added validation for GatewayResponseCode to ensure its length is less than 20 characters.
## RenewSubscriptionRequest
* Added validation for CreditMemoReasonCode to ensure its length does not exceed 25 characters.
* Introduced regex pattern validation for DocumentDate, InvoiceTargetDate, and TargetDate to ensure they match the pattern YYYY-MM-DD.
## ResumeSubscriptionRequest
* Added validation for CreditMemoReasonCode to ensure its length does not exceed 25 characters.
* Added regex pattern validation for DocumentDate, InvoiceTargetDate, and TargetDate to ensure they match the pattern YYYY-M-D.
## ReverseCreditMemoRequest
* Added validation for the `Comment` field to ensure its length does not exceed 255 characters.
## ReversePaymentRequest
* Added validation for GatewayReconciliationReason with a maximum length of 64 characters.
* Added validation for GatewayReconciliationStatus with a maximum length of 64 characters.
* Added validation for GatewayResponse with a maximum length of 500 characters.
* Added validation for GatewayResponseCode with a maximum length of 20 characters.
* Added validation for PayoutId with a maximum length of 64 characters.
## SettlePaymentRequest
* Added validation for GatewayReconciliationReason to ensure its length does not exceed 64 characters.
* Added validation for GatewayReconciliationStatus to ensure its length does not exceed 64 characters.
* Added validation for PayoutId to ensure its length does not exceed 64 characters.
## SubmitDataLabelingJobRequest
* Added validation to ensure the `Query` string length does not exceed 2000 characters.
## SuspendSubscriptionRequest
* Added validation for CreditMemoReasonCode to ensure its length does not exceed 25 characters.
* Introduced regex pattern validation for DocumentDate, InvoiceTargetDate, and TargetDate fields to ensure they match the pattern YYYY-MM-DD.
## UpdateAccountRequest
* Removed the `organizationLabel` parameter from the UpdateAccountRequest constructor and its associated property.
* Added regex pattern validation for `BillToContactId`, `ShipToContactId`, `DefaultPaymentMethodId`, and `SoldToContactId` to ensure they match a 32-character hexadecimal format.
* Added maxLength validation for `CrmId`, `Name`, `Notes`, `PaymentGateway`, `PurchaseOrderNumber`, `SalesRep`, `SequenceSetId`, `PaymentGatewayNumber`, and `SummaryStatementTemplateId`.
* Added minLength validation for `Name`.
## UpdateAccountingCodeRequest
* Added validation for GlAccountName to ensure its length does not exceed 255 characters.
* Added validation for GlAccountNumber to ensure its length does not exceed 255 characters.
* Added validation for Name to ensure its length does not exceed 100 characters.
* Added validation for Notes to ensure its length does not exceed 2000 characters.
## UpdateAccountingPeriodRequest
* Added validation for `Name` field to ensure its length does not exceed 100 characters.
* Added validation for `Notes` field to ensure its length does not exceed 255 characters.
## UpdateBasicSummaryJournalEntryRequest
* Added validation for the `Notes` field to ensure its length does not exceed 2000 characters.
## UpdateDebitMemoRequest
* Added validation for DueDate field to ensure it matches the pattern YYYY-MM-DD.
## UpdateDebitMemoWithId
* Added validation for DueDate field to ensure it matches the pattern YYYY-MM-DD.
## UpdateFulfillmentItemRequest
* Added validation for `Description` field to ensure its length does not exceed 255 characters.
* Added validation for `ItemIdentifier` field to ensure its length does not exceed 36 characters.
## UpdateFulfillmentRequest
* Removed properties: FulfillmentType, ExcludeItemBillingFromRevenueAccounting, ExcludeItemBookingFromRevenueAccounting, and OrderLineItemId from the UpdateFulfillmentRequest class.
* Added validation for maximum length constraints on Carrier, Description, ExternalId, FulfillmentLocation, FulfillmentSystem, and TrackingNumber fields.
## UpdateInvoiceRequest
* Removed the `Id` property from the UpdateInvoiceRequest class, which may require updates to code that previously set or accessed this property.
* Added validation for `DueDate` and `InvoiceDate` to ensure they match the pattern YYYY-MM-DD.
* Added a maximum length validation for `TemplateId`, restricting it to 32 characters.
## UpdateOrderAction
* Added validation for ChangeReason property to ensure its length does not exceed 255 characters.
## UpdateOrderActionRequest
* The constructor signature has changed. The parameter `orderAction` has been replaced with `changeReason` and `customFields`. This requires updates to any instantiation of UpdateOrderActionRequest.
* Added `changeReason` property to specify the reason for the change.
* Added `customFields` property to allow additional custom fields to be included in the request.
## UpdateOrderLineItem
* Removed the `itemNumber` parameter from the constructor and the corresponding property.
* Added validation for various string properties to enforce maximum length constraints.
* Added pattern validation for `BillTo` and `ShipTo` properties.
* Added minimum length validation for `InvoiceGroupNumber` and `SoldTo` properties.
* Added minimum value validation for `Quantity` property.
## UpdateOrderLineItemRequest
* Removed the `itemNumber` parameter from the constructor and the corresponding property.
* Added validation for maximum length constraints on various string properties such as AccountingCode, AdjustmentLiabilityAccountingCode, AdjustmentRevenueAccountingCode, and others.
* Added pattern validation for `BillTo` and `ShipTo` properties.
* Added minimum length validation for `InvoiceGroupNumber` and `SoldTo` properties.
* Added minimum value validation for `Quantity` property.
## UpdateOrderRequest
* Removed the `ExternallyManagedBy` property from the UpdateOrderRequest class, which may require updates to code that previously set or accessed this property.
## UpdatePaymentMethodRequest
* The class UpdatePaymentMethodRequest now inherits from AbstractOpenAPISchema instead of directly implementing IValidatableObject.
* Constructors for UpdatePaymentMethodRequest have been changed to require specific instances of payment method update classes (e.g., UpdateCreditCardPaymentMethod, UpdateACHPaymentMethod) instead of individual parameters.
* The ActualInstance property now throws an ArgumentException if the instance is null or not of the expected types.
* The ToJson method now serializes the ActualInstance instead of the entire UpdatePaymentMethodRequest object.
* Added support for multiple payment method update types using a oneOf schema, allowing UpdatePaymentMethodRequest to handle different payment method updates.
* Introduced a custom JSON converter, UpdatePaymentMethodRequestJsonConverter, to handle serialization and deserialization of UpdatePaymentMethodRequest objects.
* Added static method FromJson to deserialize JSON strings into UpdatePaymentMethodRequest instances based on the contained payment method type.
## UpdatePaymentMethodRequestCreditCardInfo
* The class UpdatePaymentMethodRequestCreditCardInfo has been removed, which will break any code relying on this class for updating credit card information.
## UpdatePaymentRunRequest
* Added validation for AccountId, BillingRunId, and PaymentGatewayId to ensure their lengths do not exceed 32 characters.
## UpdatePaymentScheduleItemRequest
* Added validation to ensure the `Description` field does not exceed 255 characters.
## UpdatePaymentScheduleRequest
* Added validation to ensure the `Occurrences` field does not exceed 1000.
## UpdateSequenceSetRequest
* Added validation for `Name` property to ensure its length is between 1 and 15 characters.
## UpdateSubscriptionRequest
* Added validation for CreditMemoReasonCode with a maximum length of 25 characters.
* Introduced validation for CurrentTerm to ensure it is greater than or equal to 1.
* Implemented pattern validation for DocumentDate, InvoiceTargetDate, and TargetDate to match the format YYYY-M-D.
* Added validation for Notes with a maximum length of 500 characters.
* Introduced validation for RenewalTerm to ensure it is greater than or equal to 0.
## UsageOveragePricingOverride
* Added a new parameter `originalListPrice` to the UsageOveragePricingOverride constructor.
## UsageOveragePricingUpdate
* Added a new property `OriginalListPrice` to the UsageOveragePricingUpdate class.
## WriteOffInvoiceRequest
* Added validation for NonRevenueWriteOffAccountingCode to ensure its length does not exceed 100 characters.
* Introduced a pattern validation for MemoDate to ensure it matches the format `yyyy-MM-dd`.
