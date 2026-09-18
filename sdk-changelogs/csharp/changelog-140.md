---
title: "C# client library 1.4.0 changelog"
sidebarTitle: "1.4.0"
---
## ContactSnapshotsApi

* Removed `page` and `pageSize` parameters from GetContactSnapshot and GetContactSnapshotAsync methods, which may affect pagination handling in existing implementations.


## InvoicesApi

* Added new method `CancelEInvoiceByInvoiceKey` to cancel E-Invoice files for invoices.
* Added asynchronous support for `CancelEInvoiceByInvoiceKey` with `CancelEInvoiceByInvoiceKeyAsync`.


## ObjectQueriesApi

* The methods QueryBundleByKey and QueryBundles, along with their corresponding methods with HttpInfo, have been removed.


## RegenerateApi

* Removed `page` and `pageSize` parameters from multiple methods, which may require updates to method calls in existing code.


## AccountCreditCardHolder

* The `cardHolderName` parameter is now required in the AccountCreditCardHolder constructor. It cannot be null, and an ArgumentNullException will be thrown if it is not provided.
* Added a protected constructor for AccountCreditCardHolder that initializes AdditionalProperties as a new Dictionary.
* Added validation to ensure `cardHolderName` has a minimum length of 1 character.

## AccountData

* Added validation for CommunicationProfileId to ensure it matches a specific pattern.
* Added validation for Currency to ensure its length is exactly 3 characters.
* Added validation for InvoiceTemplateId to ensure its length is less than 32 characters.
* Added validation for SequenceSetId to ensure it matches a specific pattern.

## AccountEInvoiceProfile

* The `businessName` parameter is now required and cannot be null. An ArgumentNullException will be thrown if it is not provided.
* The `BusinessName` property is now marked as required with a DataMember attribute.
* Added validation for `BusinessName` to ensure its length is between 1 and 255 characters.
* Added validation for `BusinessNumber` to ensure its length is less than 50 characters.
* Added validation for `BusinessNumberSchemeId` to ensure its length is less than 20 characters.
* Added validation for `EndpointId` to ensure its length is less than 50 characters.
* Added validation for `EndpointSchemeId` to ensure its length is less than 20 characters.
* Added validation for `TaxRegisterNumber` to ensure its length is less than 50 characters.

## AddSubscriptionComponent

* Removed parameters: `amendedByOrderOn`, `originalOrderDate`, and `specificListPriceBase` from the constructor.
* Removed properties: `AmendedByOrderOn`, `OriginalOrderDate`, and `SpecificListPriceBase`.
* Validation for `SpecificListPriceBase` has been removed.
* Added validation for `Description` to ensure its length is less than 500.
* Added validation for `Number` to ensure its length is less than 50.
* Added validation for `NumberOfPeriods` to ensure it is greater than or equal to 1.
* Added regex pattern validation for `ProductRatePlanChargeId` to ensure it matches a 32-character hexadecimal string.

## AddSubscriptionRatePlan

* Added validation for ProductRatePlanId to ensure it matches the pattern ^[0-9a-fA-F]&#123;32&#125;$.

## BillRunFilter

* Added validation for AccountId to ensure it matches the pattern of a 32-character hexadecimal string.
* Added validation for SubscriptionId to ensure it matches the pattern of a 32-character hexadecimal string.

## BillingAdjustmentExclusion

* The `deliveryDate` parameter is now required in the BillingAdjustmentExclusion constructor. Passing a null value will throw an ArgumentNullException.
* The `DeliveryDate` property is now marked as required with IsRequired set to true.

## BillingDocumentItemProcessingType

* Added new enum value `CommitmentTrueUp`.

## BillingDocumentItemSourceType

* Added a new enum value `Commitment`.

## BillingOptions

* Added validation for CreditMemoReasonCode to ensure its length does not exceed 25 characters.

## BulkPdfGenerationJobRequest

* Added validation for FileName to ensure its length is greater than 1.

## ChangeSubscriptionRatePlan

* Added validation for NewProductRatePlanId to ensure it matches a 32-character hexadecimal pattern.
* Added validation for ProductRatePlanId to ensure it matches a 32-character hexadecimal pattern.
* Added validation for RatePlanId to ensure it matches a 32-character hexadecimal pattern.

## ChargeModel

* Added a new enum value `Calculated` to the ChargeModel.

## ChargeOverridePricing

* Added a new property `RecurringCalculated` to the ChargeOverridePricing class, allowing for additional recurring pricing calculations.

## ChargeType

* Added a new enum value `Others` with an underlying value of 4 to the ChargeType enum.

## ChargeUpdate

* Changed the type of `NegotiatedPriceTable` from `Dictionary<string, Object>` to `List<Dictionary<string, Object>>`. This change may require developers to update their code to handle the new data structure.
* Removed the `IsDimensionalPrice` property, which was previously read-only and not serialized. Developers relying on this property will need to adjust their implementations.

## CommitmentBaseAttributes

* Added new properties `EligibleAccountConditions` and `EligibleChargeConditions` to the CommitmentBaseAttributes class.
* Included validation for `CommitmentNumber`, `Name`, and `Description` with maximum length constraints.

## CommitmentInput

* Removed `accountingCode` parameter from the CommitmentInput constructor.
* Added `eligibleAccountConditions` and `eligibleChargeConditions` parameters to the CommitmentInput constructor.
* Introduced `ExcludeItemBookingFromRevenueAccounting` property as a read-only field.

## CommitmentOutput

* Changed the data type of `amount` from double? to decimal?. This may require developers to update their code to handle the new data type.

## CommitmentPeriodAttributes

* Changed the data type of `amount` from double? to decimal?. This may require developers to update their code to handle the new data type.

## CommitmentPeriodInput

* Changed the type of `amount` from double? to decimal? in the CommitmentPeriodInput constructor and property. This may require developers to update their code to handle decimal types instead of double.

## CommonRevenueAttributes

* Removed the `AccountingCode` parameter from the constructor and its associated property. This change requires developers to update their code if they were using this parameter.
* Added a new read-only property `ExcludeItemBookingFromRevenueAccounting`.

## CommonTaxationAttributes

* Added validation for TaxCode to ensure its length does not exceed 100 characters.

## Contact

* Increased maximum length for `City` from 40 to 100 characters.
* Increased maximum length for `County` from 32 to 100 characters.
* Increased maximum length for `State` from 40 to 100 characters.
* Increased maximum length for `TaxRegion` from 32 to 100 characters.

## ContactInfo

* Renamed parameter and property `customFields` to `customFieldsData`. This change will require updates to any code referencing the old name.
* Increased maximum length for `City`, `County`, `State`, and `TaxRegion` fields to 100 characters.
* Added minimum length validation for `FirstName` and `LastName` fields, requiring at least 1 character.

## CreateAccountContact

* Added validation for maximum length constraints on various fields including Address1, Address2, City, Country, County, Fax, FirstName, HomePhone, LastName, MobilePhone, Nickname, OtherPhone, PersonalEmail, State, TaxRegion, WorkEmail, WorkPhone, and ZipCode.
* Added validation for minimum length constraints on FirstName and LastName.

## CreateAccountCreditCardHolderInfo

* Added validation for AddressLine1, AddressLine2, CardHolderName, City, Country, Email, Phone, State, and ZipCode fields to ensure they do not exceed specified maximum lengths.
* Introduced minimum length validation for CardHolderName to ensure it is greater than 1 character.

## CreateAccountRequest

* Added validation to ensure that the `Name` field has a minimum length of 1 character.

## CreateAccountSubscription

* Added validation for InitialTerm to ensure it is greater than or equal to 1.
* Added validation for Notes to ensure its length is less than 500 characters.
* Added validation for RenewalTerm to ensure it is greater than or equal to 0.
* Added validation for SubscriptionNumber to ensure its length is less than 100 characters.

## CreateAccountingCodeRequest

* Added validation to ensure that the `Name` field has a minimum length of 1 character.

## CreateAccountingPeriodRequest

* Added validation to ensure the `Name` field has a minimum length of 1 character.

## CreateAutogiroPaymentMethod

* Added validation for IdentityNumber to ensure its length is greater than 1.
* Added validation for BranchCode to ensure its length is greater than 1.
* Added validation for AccountNumber to ensure its length is greater than 1.

## CreateBecsPaymentMethod

* Added validation for AccountNumber to ensure its length is greater than 1.
* Added validation for BranchCode to ensure its length is greater than 1.

## CreateBecsnzPaymentMethod

* Added validation for AccountNumber to ensure its length is greater than 1.
* Added validation for BankCode to ensure its length is greater than 1.
* Added validation for BranchCode to ensure its length is greater than 1.

## CreateBetalingsservicePaymentMethod

* Added validation for IdentityNumber to ensure its length is greater than 1.
* Added validation for BankCode to ensure its length is greater than 1.
* Added validation for AccountNumber to ensure its length is greater than 1.

## CreateBillingPreviewRunRequest

* Added a new optional parameter `filters` of type `List<BillingPreviewRunFilter>` to the CreateBillingPreviewRunRequest constructor.

## CreateCCReferenceTransactionPaymentMethod

* The type of the `cardHolderInfo` parameter in the constructor and the `CardHolderInfo` property has been changed from `CreatePaymentMethodCardholderInfo` to `CreateCreditCardReferenceCardholderInfo`. This change requires developers to update their code to use the new type.

## CreateCatalogGroupRequest

* Added validation to ensure that the `Name` field has a minimum length of 1 character.

## CreateContactRequest

* Increased maximum length for `City` from 40 to 100 characters.
* Increased maximum length for `County` from 32 to 100 characters.
* Increased maximum length for `State` from 40 to 100 characters.
* Increased maximum length for `TaxRegion` from 32 to 100 characters.
* Added minimum length validation for `FirstName`, requiring at least 1 character.
* Added minimum length validation for `LastName`, requiring at least 1 character.

## CreateCreditMemoFromCharge

* The `charges` parameter is now required and cannot be null. An ArgumentNullException will be thrown if it is not provided.
* Added a protected constructor for CreateCreditMemoFromCharge that initializes AdditionalProperties as a new dictionary.

## CreateDebitMemoFromCharge

* The `charges` parameter is now required and cannot be null. This change will require developers to ensure that a non-null value is provided for `charges` when creating an instance of CreateDebitMemoFromCharge.
* Added a protected constructor for CreateDebitMemoFromCharge that initializes AdditionalProperties as a new dictionary.

## CreateDebitMemoFromChargeRequest

* Added a new conditional block for DueDate, indicating potential future logic or validation related to DueDate.

## CreateDiscountItem

* Added validation for maximum length constraints on several string properties: AccountingCode, AccountsReceivableAccountingCode, AdjustmentLiabilityAccountingCode, AdjustmentRevenueAccountingCode, BookingReference, ChargeName, ContractAssetAccountingCode, ContractLiabilityAccountingCode, ContractRecognizedRevenueAccountingCode, DeferredRevenueAccountingCode, Description, ItemType, PurchaseOrderNumber, RecognizedRevenueAccountingCode, RevRecCode, RevenueRecognitionRuleName, Sku, and UnbilledReceivablesAccountingCode.

## CreateFulfillment

* Removed properties `ExcludeItemBillingFromRevenueAccounting` and `ExcludeItemBookingFromRevenueAccounting`.
* `fulfillmentDate`, `orderLineItemId`, and `quantity` are now required properties and cannot be null.
* Added validation for maximum length of `Carrier`, `Description`, `ExternalId`, `FulfillmentLocation`, `FulfillmentSystem`, and `TrackingNumber`.
* Added validation for minimum length of `OrderLineItemId`.

## CreateFulfillmentItem

* FulfillmentId length validation now requires exactly 32 characters, previously it was only a maximum length constraint.
* Added validation for Description with a maximum length of 255 characters.
* Added validation for ItemIdentifier with a maximum length of 36 characters.
* Added validation for FulfillmentExternalId with a maximum length of 50 characters.
* Added validation for FulfillmentNumber with a maximum length of 100 characters.

## CreateInvoiceItem

* Added validation for maximum length constraints on various string fields including AccountingCode, AdjustmentLiabilityAccountingCode, AdjustmentRevenueAccountingCode, BookingReference, ChargeName, ContractAssetAccountingCode, ContractLiabilityAccountingCode, ContractRecognizedRevenueAccountingCode, DeferredRevenueAccountingCode, Description, ItemType, PurchaseOrderNumber, RecognizedRevenueAccountingCode, RevRecCode, RevenueRecognitionRuleName, Sku, TaxCode, UnbilledReceivablesAccountingCode, and Uom.

## CreateOrUpdateCatalogGroupProductRatePlan

* The `id` parameter is now required in the constructor. Passing a null value will throw an ArgumentNullException.
* The `Id` property is now marked as required with DataMember attribute, and EmitDefaultValue is set to true.
* Added validation for `Id` property to ensure it has a minimum length of 1.
* Added regex pattern validation for `Id` property to match a 32-character hexadecimal string.

## CreateOrderAction

* Added validation for `ChangeReason` property to ensure its length does not exceed 255 characters.

## CreateOrderOrderLineItem

* Added validation for maximum length constraints on various string fields such as AccountingCode, AdjustmentLiabilityAccountingCode, AdjustmentRevenueAccountingCode, PaymentTerm, InvoiceTemplateId, ContractAssetAccountingCode, ContractLiabilityAccountingCode, ContractRecognizedRevenueAccountingCode, DeferredRevenueAccountingCode, Description, ItemName, ItemNumber, OriginalOrderLineItemNumber, OriginalOrderNumber, OwnerAccountNumber, ProductCode, PurchaseOrderNumber, RecognizedRevenueAccountingCode, RelatedSubscriptionNumber, RevenueRecognitionRule, SequenceSetId, SoldTo, TaxCode, UnbilledReceivablesAccountingCode, and UniqueToken.
* Added validation for minimum length constraints on fields such as Currency, InvoiceGroupNumber, ProductRatePlanChargeId, and SoldTo.
* Added pattern validation for fields BillTo and ShipTo to ensure they match a specific regex pattern.
* Added validation to ensure Quantity is a non-negative decimal.

## CreateOrderSubscription

* The `orderActions` parameter is now required in the CreateOrderSubscription constructor and cannot be null. This change will require developers to ensure that they provide a non-null value for `orderActions` when creating an instance of CreateOrderSubscription.
* Added validation to ensure that the `SubscriptionNumber` does not exceed a length of 100 characters.

## CreatePADPaymentMethod

* Added validation for `AccountNumber` to ensure its length is greater than 1.
* Added validation for `BankCode` to ensure its length is greater than 1.
* Added validation for `BranchCode` to ensure its length is greater than 1.

## CreatePaymentMethodBankTransferAccountHolderInfo

* The `accountHolderName` parameter is now required and cannot be null. An ArgumentNullException will be thrown if it is not provided.
* The `AccountHolderName` property is now marked as required and will emit default values.
* Added validation for `AccountHolderName` to ensure its length is greater than 1.
* Added maximum length validation for `AddressLine1`, `AddressLine2`, `City`, `Country`, `Email`, `FirstName`, `LastName`, `Phone`, `State`, and `ZipCode` properties.

## CreatePaymentMethodCardholderInfo

* Added validation for maximum length constraints on various fields: AddressLine1 (255), AddressLine2 (255), CardHolderName (50), City (40), Country (64), Email (80), Phone (40), State (50), and ZipCode (20).

## GetPaymentMethodForAccountResponse

* Renamed the following fields and updated their data types to be consistent with REST API fields:
  * `CreatedOn`(DateTimeOffset) to `CreatedDate`(String)
  * `UpdatedOn`(DateTimeOffset) to `UpdatedDate`(String)
  * `LastTransactionTime`(DateTimeOffset) to `LastTransactionDateTime`(String)
  * `LastFailedSaleTransactionDate`(DateTimeOffset) to `LastFailedSaleTransactionDate`(String)


## PaymentMethodResponse

* Renamed the following fields and updated their data types to be consistent with REST API fields:
  * `CreatedOn`(DateTimeOffset) to `CreatedDate`(String)
  * `UpdatedOn`(DateTimeOffset) to `UpdatedDate`(String)
  * `LastTransactionTime`(DateTimeOffset) to `LastTransactionDateTime`(String)
  * `LastFailedSaleTransactionDate`(DateTimeOffset) to `LastFailedSaleTransactionDate`(String)


## CreatePaymentRunData

* Added validation for `AccountId` with a maximum length of 32 characters.
* Added validation for `AccountNumber` with a maximum length of 70 characters.
* Added validation for `Comment` with a maximum length of 255 characters.
* Added validation for `Currency` with a maximum length of 3 characters.
* Added validation for `DocumentId` with a maximum length of 32 characters.
* Added validation for `PaymentGatewayId` with a maximum length of 32 characters.
* Added validation for `PaymentMethodId` with a maximum length of 32 characters.

## CreatePaymentRunDataItem

* Added validation for `DocumentItemId` to ensure its length does not exceed 32 characters.
* Added validation for `TaxItemId` to ensure its length does not exceed 32 characters.

## CreatePaymentScheduleItemsRequestItems

* Added validation for the `Description` field to ensure its length does not exceed 255 characters.

## CreatePaymentScheduleRequestItems

* The `amount` parameter is now required and cannot be null. An ArgumentNullException will be thrown if it is not provided.
* The `scheduledDate` parameter is now required and cannot be null. An ArgumentNullException will be thrown if it is not provided.
* Added a protected constructor for CreatePaymentScheduleRequestItems that initializes AdditionalProperties.
* Added validation to ensure the `Description` field does not exceed 255 characters.

## CreateProductRatePlanChargeRequest

* Added a new property `RevenueRecognitionRuleName` as a string to the CreateProductRatePlanChargeRequest class.

## CreateRSASignatureRequest

* Added validation to ensure that the Uri string has a minimum length of 1 character.

## CreateRamp

* Added validation for `Description` field to ensure its length does not exceed 500 characters.
* Added validation for `Name` field to ensure its length does not exceed 150 characters.

## CreateSequenceSetRequest

* Added validation for `Name` property to ensure its length is between 1 and 15 characters.

## CreateSubscriptionComponent

* Removed constructor parameters: `amendedByOrderOn`, `originalOrderDate`, and `specificListPriceBase`.
* Removed properties: `AmendedByOrderOn`, `OriginalOrderDate`, and `SpecificListPriceBase`.
* Added validation for `Description` to ensure its length is less than 500 characters.
* Added validation for `Number` to ensure its length is less than 50 characters.
* Added regex pattern validation for `ProductRatePlanChargeId` to ensure it matches a 32-character hexadecimal string.

## CreateSubscriptionRatePlan

* Added validation for `ProductRatePlanId` to ensure it matches a specific pattern of a 32-character hexadecimal string.

## CreateTaxationItem

* Added validation for `Jurisdiction` to ensure its length does not exceed 255 characters.
* Added validation for `LocationCode` to ensure its length does not exceed 32 characters.
* Added validation for `Name` to ensure its length is between 1 and 128 characters.
* Added validation for `TaxCode` to ensure its length is between 1 and 64 characters.
* Added validation for `TaxCodeDescription` to ensure its length does not exceed 255 characters.
* Added validation for `TaxRateDescription` to ensure its length does not exceed 255 characters.

## CreateTaxationItemForInvoiceRequest

* Added validation for `InvoiceItemId` to ensure it has a minimum length of 1 and matches a specific pattern.
* Added validation for `Jurisdiction` to ensure it has a minimum length of 1.
* Added validation for `Name` to ensure it has a minimum length of 1.

## CreditCard

* `CardType` is now a required field and cannot be null.
* `CardNumber` is now a required field and cannot be null.
* `ExpirationMonth` is now a required field and cannot be null.
* `ExpirationYear` is now a required field and cannot be null.
* Added validation to ensure `CardNumber` has a minimum length of 1.

## CreditMemoEntityPrefix

* The constructor for CreditMemoEntityPrefix now requires `prefix` and `startNumber` parameters to be non-null, throwing an ArgumentNullException if they are null.
* Validation added for `Prefix` to ensure its length is between 1 and 16 characters.
* Validation added for `StartNumber` to ensure it is greater than or equal to 1.

## CreditMemoItem

* Added new properties `CommitmentId` and `CommitmentPeriodId` to the CreditMemoItem class.

## CreditMemoItemFromWriteOffInvoice

* The `invoiceItemId` parameter is now required and cannot be null. An ArgumentNullException will be thrown if it is not provided.
* Added validation to ensure `Comment` length does not exceed 255 characters.

## CreditMemoItemResponse

* Added new properties `CommitmentId` and `CommitmentPeriodId` to the CreditMemoItemResponse class.

## CreditMemoTaxationItemFromWriteOffInvoice

* The `taxationItemId` parameter is now required in the constructor. An ArgumentNullException will be thrown if it is null.
* A protected constructor has been added to initialize the `AdditionalProperties` dictionary.

## CustomRates

* Added validation for the `Currency` field to ensure its length does not exceed 3 characters.

## DebitMemoDueDate

* Added a conditional block for `DueDate` validation in the Validate method, although the actual validation logic is not yet implemented.

## DebitMemoEntityPrefix

* Constructor now throws ArgumentNullException if `prefix` or `startNumber` is null.
* `Prefix` and `StartNumber` are now required fields with `IsRequired` set to true in DataMember attribute.
* Added validation for `Prefix` to ensure its length is between 1 and 16 characters.
* Added validation for `StartNumber` to ensure it is greater than or equal to 1.

## DecryptRSASignatureRequest

* Added validation for PublicKey to ensure its length is greater than 1.
* Added validation for Signature to ensure its length is greater than 1.

## DocumentIdList

* The `DocType` property is now required and no longer nullable. This change requires developers to provide a value for `DocType` when creating an instance of `DocumentIdList`.
* A new constructor for `DocumentIdList` has been added, which initializes `AdditionalProperties` as a dictionary.

## ElectronicPaymentOptionsWithDelayedCapturePayment

* Removed validation for AuthTransactionId and GatewayOrderId fields, which previously enforced a maximum length of 50 characters. This change may affect systems relying on these validations.

## ExpandedCommitment

* Added new parameters `eligibleAccountConditions` and `eligibleChargeConditions` to the ExpandedCommitment constructor.

## ExpandedCreditMemoItem

* Added new properties `CommitmentId` and `CommitmentPeriodId` to the ExpandedCreditMemoItem class.

## ExpandedInvoiceItem

* Added new properties `CommitmentId` and `CommitmentPeriodId` to the ExpandedInvoiceItem class.

## ExpandedRatePlanCharge

* Added new properties: `ProductCategory`, `ProductClass`, `ProductFamily`, and `ProductLine` to the ExpandedRatePlanCharge class.

## ExpandedUsage

* Added a new property `RatedAmount` to the ExpandedUsage model, allowing developers to set and retrieve the rated amount for usage.

## Fulfillment

* Removed parameters `excludeItemBillingFromRevenueAccounting` and `excludeItemBookingFromRevenueAccounting` from the Fulfillment constructor.
* Removed properties `ExcludeItemBillingFromRevenueAccounting` and `ExcludeItemBookingFromRevenueAccounting` from the Fulfillment class.
* Added validation for string length constraints on properties: Carrier, Description, ExternalId, FulfillmentLocation, FulfillmentSystem, OrderLineItemId, and TrackingNumber.

## FulfillmentItem

* Added validation for `Description` field to ensure its length does not exceed 255 characters.
* Added validation for `ItemIdentifier` field to ensure its length does not exceed 36 characters.
* Added validation for `FulfillmentId` field to ensure its length is exactly 32 characters.
* Added validation for `FulfillmentExternalId` field to ensure its length does not exceed 50 characters.

## GetAccountingPeriodResponse

* Changed type of `FiscalYear` from string to int?.
* Changed type of `FiscalQuarter` from long? to int?.

## GetBillingPreviewRunResponse

* Added a new property `Filters` of type `List<BillingPreviewRunFilter>` to the GetBillingPreviewRunResponse class.

## GetChargeOverride

* The type of `NegotiatedPriceTable` has been changed from `Dictionary<string, Object>` to `List<Dictionary<string, Object>>`. This change requires developers to update their code to handle the new data structure.
* The `IsDimensionalPrice` property has been removed. Any code relying on this property will need to be updated.

## GetFulfillment

* Removed parameters `excludeItemBillingFromRevenueAccounting` and `excludeItemBookingFromRevenueAccounting` from the GetFulfillment constructor.
* Removed properties `ExcludeItemBillingFromRevenueAccounting` and `ExcludeItemBookingFromRevenueAccounting`.
* Added validation for maximum length constraints on several string properties: Carrier (max 25), Description (max 255), ExternalId (max 50), FulfillmentLocation (max 50), FulfillmentSystem (max 25), OrderLineItemId (max 32), and TrackingNumber (max 50).
* Added validation for minimum length constraint on OrderLineItemId (min 32).

## GetFulfillmentItem

* Added validation for `Description` field to ensure its length does not exceed 255 characters.
* Added validation for `ItemIdentifier` field to ensure its length does not exceed 36 characters.
* Added validation for `FulfillmentExternalId` field to ensure its length does not exceed 50 characters.

## GetProductRatePlanChargeResponse

* The property `RevenueRecognitionRuleName` has changed from type `RevenueRecognitionRuleName?` to `string`. This may require developers to update their code to handle the new type.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added new property `PricingAttributes` of type `Dictionary<string, Object>`.
* Added new property `IsDimensionalPrice` of type `bool?`.
* Added new property `IsPriceNegotiated` of type `bool?`.

## InvoiceEntityPrefix

* Constructor now throws ArgumentNullException if `prefix` or `startNumber` is null.
* `Prefix` and `StartNumber` are now required fields in the DataMember attribute.
* Added validation for `Prefix` to ensure its length is between 1 and 16 characters.
* Added validation for `StartNumber` to ensure it is greater than or equal to 1.

## InvoiceForBulkUpdate

* The `id` parameter is now required for the InvoiceForBulkUpdate constructor. Passing a null value will throw an ArgumentNullException.
* Added a protected constructor for InvoiceForBulkUpdate that initializes AdditionalProperties.

## InvoiceItem

* Added new properties `CommitmentId` and `CommitmentPeriodId` to the InvoiceItem class.

## InvoiceScheduleSubscription

* The constructor for InvoiceScheduleSubscription now requires `orderKey` and `subscriptionKey` as mandatory parameters. Passing null for these parameters will throw an ArgumentNullException.
* Added a protected constructor for InvoiceScheduleSubscription that initializes AdditionalProperties.

## Order

* The type of the `Commitments` property in the Order class has changed from `List<UpsertCommitmentInput>` to `List<GetCommitmentOutput>`.

## OrderCreateAccount

* Removed validation for `AdditionalEmailAddresses` with max length of 1200.
* Removed validation for `CustomerServiceRepName` with max length of 50.
* Removed validation for `PurchaseOrderNumber` with max length of 100.
* Removed validation for `SalesRep` with max length of 50.
* Added validation for `CommunicationProfileId` to match a specific pattern.
* Added validation for `Currency` with max length of 3 and min length of 3.
* Added validation for `HpmCreditCardPaymentMethodId` to match a specific pattern.
* Added validation for `InvoiceTemplateId` with max length of 32.
* Added validation for `Name` with min length of 1.
* Added validation for `SequenceSetId` with max length of 32.

## OrderCreateAccountContact

* Increased maximum length for `City` from 40 to 100 characters.
* Increased maximum length for `County` from 32 to 100 characters.
* Added minimum length validation for `FirstName`, requiring at least 1 character.
* Added minimum length validation for `LastName`, requiring at least 1 character.
* Increased maximum length for `State` from 40 to 100 characters.
* Increased maximum length for `TaxRegion` from 32 to 100 characters.

## PaymentData

* Constructor parameters `authTransactionId`, `authorizedAmount`, and `authorizedCurrency` are now required and cannot be null. This may require updates to code where these parameters were previously optional or set to null.
* Added validation to ensure `AuthTransactionId` has a minimum length of 1.

## PaymentEntityPrefix

* The constructor for PaymentEntityPrefix now throws an ArgumentNullException if `prefix` or `startNumber` is null.
* The `Prefix` and `StartNumber` properties are now marked as required with DataMember attribute changes.
* Added validation for `Prefix` to ensure its length is between 1 and 16 characters.
* Added validation for `StartNumber` to ensure it is greater than or equal to 1.

## PaymentMethodRequestTokens

* Added validation for TokenId with constraints on maximum length (255) and minimum length (1).
* Added validation for SecondTokenId with constraints on maximum length (64) and minimum length (1).
* Added validation for ThirdTokenId with constraints on maximum length (64) and minimum length (1).

## PaymentWithCustomRates

* Added validation for the `Currency` field to ensure its length does not exceed 3 characters.

## PostInvoiceRequest

* The `id` parameter is now required and cannot be null. This change will require developers to ensure that they provide a non-null `id` when creating a PostInvoiceRequest instance.
* The `Id` property now has a maximum length of 32 characters. Developers must ensure that the `Id` they provide does not exceed this length.
* A protected constructor for PostInvoiceRequest has been added, initializing AdditionalProperties as a new dictionary.

## PreviewAccountInfo

* Added validation to ensure that the `Currency` field has a minimum length of 3 characters.

## PreviewContactInfo

* Added new fields `Address1` and `Address2` to the PreviewContactInfo model.

## PreviewExistingSubscriptionDiscountDetails

* Added new properties `ServiceStartDate` and `ServiceEndDate` to the PreviewExistingSubscriptionDiscountDetails class.

## PreviewOptions

* Added validation for `PreviewNumberOfPeriods` to ensure it is greater than or equal to 1.

## PreviewOrderOrderAction

* Added validation for `ChangeReason` property to ensure its length does not exceed 255 characters.

## PreviewOrderSubscriptions

* The `orderActions` parameter is now required in the constructor of PreviewOrderSubscriptions. Passing a null value will throw an ArgumentNullException.
* The `OrderActions` property is now marked as required with IsRequired = true.
* Added validation to ensure `SubscriptionNumber` does not exceed a length of 100 characters.

## PreviewStartDate

* The `PreviewStartDatePolicy` property is now required and no longer nullable. This change requires developers to provide a value for `PreviewStartDatePolicy` when creating an instance of `PreviewStartDate`.
* A protected constructor `PreviewStartDate()` has been added, initializing `AdditionalProperties` as a new dictionary.

## PreviewSubscriptionAccountInfo

* Added validation for `BillCycleDay` to ensure it is within the range of 0 to 31.
* Added validation for `Currency` to ensure its length is exactly 3 characters.

## PreviewSubscriptionBillToContact

* Added validation for `City`, `Country`, `County`, `State`, `TaxRegion`, and `ZipCode` fields to ensure they do not exceed specified maximum lengths.

## PreviewThroughDate

* The `PreviewThruDatePolicy` property is now required and no longer nullable. This change requires developers to always provide a value for this property when creating an instance of `PreviewThroughDate`.
* A protected constructor `PreviewThroughDate()` has been added, initializing `AdditionalProperties` as a new dictionary. This allows for handling additional properties dynamically.

## QuantityForUsageCharges

* The constructor for QuantityForUsageCharges now requires `chargeId` and `quantity` parameters to be non-null. Passing null will throw an ArgumentNullException.

## RampChargeRequest

* Added validation for `ChargeNumber` to ensure its length does not exceed 50 characters.
* Added validation for `UniqueToken` to ensure its length does not exceed 50 characters.

## RampIntervalRequest

* Added validation for `Description` field to ensure its length does not exceed 500 characters.
* Added validation for `Name` field to ensure its length does not exceed 150 characters.

## RatePlan

* Added validation for `ProductRatePlanId` to ensure it matches a specific pattern of 32 hexadecimal characters.

## RefundEntityPrefix

* The constructor for RefundEntityPrefix now throws an ArgumentNullException if `prefix` or `startNumber` is null.
* The `Prefix` and `StartNumber` properties are now marked as required with DataMember attribute changes.
* Added validation to ensure `Prefix` length is between 1 and 16 characters.
* Added validation to ensure `StartNumber` is greater than or equal to 1.

## RegenerateBillingRequest

* Added validation for the `Type` property to ensure its length is greater than 1.

## RegenerateBookingRequest

* Added validation to ensure that the `Type` string property must have a minimum length of 1.

## RemoveCatalogGroupProductRatePlan

* The constructor now throws an ArgumentNullException if the `id` parameter is null, making `id` a required property.
* The `Id` property is now marked as required with DataMember attribute, which may affect serialization/deserialization.
* Added validation for `Id` property to ensure it has a minimum length of 1 and matches a specific regex pattern.

## RemoveSubscriptionRatePlan

* Added validation for `RatePlanId` to ensure it matches the pattern of a 32-character hexadecimal string.

## RetryPaymentScheduleItem

* The constructor now throws an ArgumentNullException if `id` is null, making `id` a required parameter.
* Added a protected constructor with JsonConstructorAttribute to initialize AdditionalProperties as a new dictionary.

## SignUpTaxInfo

* Added new properties `ExemptEffectiveDate` and `ExemptExpirationDate` to the SignUpTaxInfo model.

## SubmitDataLabelingJobRequest

* Added validation for ObjectType to ensure its length is greater than 1.

## SubscriptionData

* The `startDate` parameter is now required in the SubscriptionData constructor. Passing a null value will throw an ArgumentNullException.
* A protected constructor for SubscriptionData has been added, initializing AdditionalProperties as a new Dictionary.

## TaxInfo

* Reduced the maximum length of ExemptEntityUseCode from 64 to 32 characters.

## UpdateAccountContact

* Added validation for maximum length constraints on various fields such as Address1, Address2, City, Country, County, Fax, FirstName, HomePhone, LastName, MobilePhone, Nickname, OtherPhone, PersonalEmail, State, TaxRegion, WorkEmail, WorkPhone, and ZipCode.
* Added validation for minimum length constraints on FirstName and LastName.

## UpdateAccountingPeriodRequest

* Changed the type of `FiscalYear` from `string` to `int?`.
* Changed the type of `FiscalQuarter` from `long?` to `int?`.

## UpdateCatalogGroupRequest

* The type of the `remove` parameter in the UpdateCatalogGroupRequest constructor has changed from `List<List<RemoveCatalogGroupProductRatePlan>>` to `List<RemoveCatalogGroupProductRatePlan>`.

## UpdateContactRequest

* Increased maximum length for `City` from 40 to 100 characters.
* Increased maximum length for `County` from 32 to 100 characters.
* Increased maximum length for `State` from 40 to 100 characters.
* Increased maximum length for `TaxRegion` from 32 to 100 characters.

## UpdateCreditMemoWithId

* The `id` parameter is now required for the UpdateCreditMemoWithId constructor. Passing a null value will throw an ArgumentNullException.
* Added a protected constructor for UpdateCreditMemoWithId that initializes AdditionalProperties.

## UpdateDiscountInvoiceItem

* Removed the `processingType` parameter from the constructor and its associated property.
* Added validation for maximum length constraints on various string properties such as AccountingCode, AdjustmentLiabilityAccountingCode, AdjustmentRevenueAccountingCode, and others.

## UpdateInvoiceItem

* Added validation for maximum length constraints on various string properties such as AccountingCode, AdjustmentLiabilityAccountingCode, AdjustmentRevenueAccountingCode, BookingReference, ChargeName, ContractAssetAccountingCode, ContractLiabilityAccountingCode, ContractRecognizedRevenueAccountingCode, DeferredRevenueAccountingCode, Description, Id, ItemType, PurchaseOrderNumber, RecognizedRevenueAccountingCode, RevRecCode, RevenueRecognitionRuleName, Sku, TaxCode, UnbilledReceivablesAccountingCode, and Uom.

## UpdateOrderActionChargeTriggerDate

* Added validation for ChargeNumber to ensure its length does not exceed 50 characters.

## UpdateRatePlanCharge

* Added validation for `Description` to ensure its length does not exceed 500 characters.
* Added validation for `RatePlanChargeId` to ensure its length is greater than 1 character.
* Introduced a regex pattern validation for `RatePlanChargeId` to match a 32-character hexadecimal string.

## UpdateSubscriptionRatePlan

* Removed the `externallyManagedPlanId` parameter from the constructor and the corresponding property from the class.
* Added validation for `RatePlanId` to ensure it matches a specific pattern.

## UpdateSubscriptionRatePlanCustomFields

* The `ratePlanId` parameter is now required and cannot be null. An ArgumentNullException will be thrown if it is not provided.
* Added a protected constructor that initializes the `AdditionalProperties` dictionary.

## UpdaterPaymentMethodRequestAccountHolderInfo

* Added validation for `AddressLine1`, `AddressLine2`, `City`, `Country`, `Email`, `Phone`, `State`, and `ZipCode` fields to ensure their lengths do not exceed specified maximum limits.

## UpsertCreateCommitmentInput

* Removed `accountingCode` parameter from the constructor and its associated property.
* Added `eligibleAccountConditions` and `eligibleChargeConditions` parameters to the constructor.
* Introduced `EligibleAccountConditions` and `EligibleChargeConditions` properties.
* Added `ExcludeItemBookingFromRevenueAccounting` property as a read-only field.

## UpsertCreateCommitmentInputAllOfPeriods

* Changed the type of `amount` from double? to decimal?. This may require developers to update their code to handle the new type.

## UpsertCreateCommitmentPeriodInput

* The type of the `amount` parameter and property has been changed from `double?` to `decimal?`. This change may require developers to update their code to handle `decimal` types instead of `double`.

## UpsertUpdateCommitmentPeriodInput

* Removed the `endDate` parameter from the constructor and class properties.
* Added a new `status` parameter to the constructor and class properties.
