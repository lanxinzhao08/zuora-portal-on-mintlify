---
markdown:
  toc:
    hide: false
---

# Node.js client library 3.12.0 changelog


## ContactSnapshotsApi

* Removed pagination parameters `page` and `page_size` from the API call, which may affect how data is retrieved in paginated form.


## InvoicesApi

* Added new method `cancelEInvoiceByInvoiceKey` to cancel E-Invoice for a given billing document using invoice key.

## ObjectQueriesApi

* Removed methods related to querying Bundles, including queryBundleByKey and queryBundles.

## src/zuora_api/index

* Added BillingPreviewRunFilter model.
* Added CommitmentPeriodOutput model.
* Added CommitmentPeriodStatus model.
* Added CommitmentStatus model.
* Added CreateCreditCardReferenceCardholderInfo model.
* Added GetCommitmentOutput model.
* Added PutCancelEInvoiceRequest model.
* Added RecurringCalculatedPricingOverride model.
* Removed ExpandedBundle model.
* Removed QueryBundlesResponse model.

## AddSubscriptionComponent

* Removed `amendedByOrderOn` property, which may affect code relying on this field.
* Removed `originalOrderDate` property, which may affect code relying on this field.
* Removed `specificListPriceBase` property, which may affect code relying on this field.

## BillingAdjustmentExclusion

* The constructor now requires a `delivery_date` parameter, which must be provided when creating a new instance of BillingAdjustmentExclusion.
* Added `deliveryDate` as a required property for BillingAdjustmentExclusion, which specifies the date on which the adjustment has to be excluded.
* Implemented validation to ensure `deliveryDate` is present in the JSON data when using validateJSON method.

## BillingDocumentItemProcessingType

* Added new enum value `CommitmentTrueUp` to BillingDocumentItemProcessingType.

## BillingDocumentItemSourceType

* Added a new enum value `Commitment` to BillingDocumentItemSourceType.

## ChargeModel

* Added a new enum value `Calculated` to the ChargeModel class.

## ChargeOverridePricing

* Added support for `recurringCalculated` pricing override with the inclusion of RecurringCalculatedPricingOverride.

## ChargeUpdate

* The `negotiatedPriceTable` field has changed from an object to an array of objects. This requires updates to any code that interacts with this field.
* The `isDimensionalPrice` field has been removed, which may affect any code relying on this field.

## CommitmentBaseAttributes

* Added `eligibleAccountConditions` as a new optional field of type `Condition`.
* Added `eligibleChargeConditions` as a new optional field of type `Condition`.

## CommitmentInput

* Removed the `accountingCode` property from CommitmentInput and CommonRevenueAttributes, which may require updates to code relying on this property.
* Added `eligibleAccountConditions` and `eligibleChargeConditions` properties to CommitmentInput and CommitmentBaseAttributes, allowing for more detailed condition handling.
* Introduced `excludeItemBookingFromRevenueAccounting` property to CommitmentInput and CommonRevenueAttributes, providing additional control over revenue accounting.

## CommitmentOutput

* Added `id` property to CommitmentOutput.
* Added `commitmentNumber` property to CommitmentOutput.

## CommitmentOutputPeriodsInner

* Validation for `startDate` and `endDate` fields being strictly strings has been removed. This may affect code that relies on these validations.

## CommonRevenueAttributes

* Removed the `accountingCode` property from CommonRevenueAttributes, which may require updates to code that relies on this property.
* Added `excludeItemBookingFromRevenueAccounting` property to CommonRevenueAttributes, allowing developers to exclude rate plan charges from revenue accounting.

## ContactInfo

* The property `customFields` has been renamed to `customFieldsData`. This change requires developers to update their code to use the new property name.

## CreateAccountContact

* Increased character limit for `city` field from 40 to 100 characters.
* Increased character limit for `county` field from 32 to 100 characters.

## CreateAccountingPeriodRequest

* Added `fiscalQuarter` property to specify the fiscal quarter of the accounting period.

## CreateBillingPreviewRunRequest

* Added support for a new `filters` property, allowing developers to apply a list of filters to the billing preview run. This includes validation to ensure the `filters` field is an array and each item is validated using BillingPreviewRunFilter.

## CreateCCReferenceTransactionPaymentMethod

* Renamed import and usage of CreatePaymentMethodCardholderInfo to CreateCreditCardReferenceCardholderInfo. Developers need to update their code to use the new class name.

## CreateCreditMemoFromCharge

* The constructor of CreateCreditMemoFromCharge now requires a `charges` parameter, which is an array of CreditMemoItemFromChargeDetail. This change requires developers to update their code to pass this parameter when creating an instance of CreateCreditMemoFromCharge.
* Added validation to ensure that the `charges` property is present in the JSON data when creating a CreateCreditMemoFromCharge object. This ensures that the required field is always provided.

## CreateCreditMemoFromChargeRequest

* The constructor of CreateCreditMemoFromChargeRequest now requires `charges` as a parameter due to the change in the initialization method.

## CreateDebitMemoFromChargeRequest

* The constructor of CreateDebitMemoFromChargeRequest now requires `charges` as a parameter for initialization. This change may require updates to existing code where the constructor is used without this parameter.

## CreateFulfillment

* Constructor now requires `fulfillment_date`, `order_line_item_id`, and `quantity` as parameters.
* Removed properties `excludeItemBillingFromRevenueAccounting` and `excludeItemBookingFromRevenueAccounting`.
* Added validation to ensure required properties `fulfillmentDate`, `orderLineItemId`, and `quantity` are present in JSON data.

## CreateInvoiceScheduleRequest

* Removed inheritance from Object, which may affect code relying on Object`s prototype methods.
* Removed the call to ApiClient.constructFromObject, which may affect how objects are constructed from data.

## CreateOrUpdateCatalogGroupProductRatePlan

* The constructor now requires an `id` parameter, which is a mandatory field for initializing the CreateOrUpdateCatalogGroupProductRatePlan object.
* Added validation to ensure that the `id` property is present and is a string in the JSON data.

## CreateOrderSubscription

* The constructor now requires an `order_actions` parameter, which must be provided when creating a new instance of CreateOrderSubscription.
* Added validation to ensure that the `orderActions` property is present in the JSON data when creating a CreateOrderSubscription instance.

## CreatePaymentMethodBankTransferAccountHolderInfo

* The constructor now requires an `account_holder_name` parameter, which is mandatory for initialization.
* Added validation to ensure that the `accountHolderName` field is present in the JSON data.

## CreatePaymentMethodRequest

* The type of `cardHolderInfo` has been changed from `CreatePaymentMethodCardholderInfo` to `CreateCreditCardReferenceCardholderInfo`. This may require updates to code that interacts with this property.

## GetPaymentMethodForAccountResponse

* Renamed the following fields and updated their data types to be consistent with REST API fields:
  * `createdOn`(Date) to `createdDate`(String)
  * `updatedOn`(Date) to `updatedDate`(String)
  * `lastTransactionTime`(Date) to `lastTransactionDateTime`(String)
  * `lastFailedSaleTransactionDate`(Date) to `lastFailedSaleTransactionDate`(String)

## PaymentMethodResponse

* Renamed the following fields and updated their data types to be consistent with REST API fields:
  * `createdOn`(Date) to `createdDate`(String)
  * `updatedOn`(Date) to `updatedDate`(String)
  * `lastTransactionTime`(Date) to `lastTransactionDateTime`(String)
  * `lastFailedSaleTransactionDate`(Date) to `lastFailedSaleTransactionDate`(String)

## CreatePaymentScheduleRequestItems

* Constructor now requires `amount` and `scheduled_date` parameters.
* Added validation to ensure `amount` and `scheduledDate` are present in JSON data.

## CreateProductRatePlanChargeRequest

* The `RevenueRecognitionRuleName` field is now expected to be a primitive string type instead of an object constructed from `RevenueRecognitionRuleName`.

## CreateSubscriptionComponent

* Removed the `amendedByOrderOn` property, which may affect code relying on this field.
* Removed the `originalOrderDate` property, which may affect code relying on this field.
* Removed the `specificListPriceBase` property, which may affect code relying on this field.

## CreditCard

* Constructor now requires four parameters: card_number, card_type, expiration_month, and expiration_year.
* Added validation to ensure all required properties (cardNumber, cardType, expirationMonth, expirationYear) are present in JSON data.

## CreditMemoEntityPrefix

* The constructor of CreditMemoEntityPrefix now requires `prefix` and `start_number` parameters.
* Added validation to ensure required properties `prefix` and `startNumber` are present in JSON data.

## CreditMemoItem

* Added `commitmentId` field to CreditMemoItem, allowing developers to associate a commitment ID with a credit memo item.
* Added `commitmentPeriodId` field to CreditMemoItem, enabling developers to link a commitment period ID with a credit memo item.

## CreditMemoItemFromWriteOffInvoice

* The constructor now requires an `invoice_item_id` parameter, which must be provided when creating an instance of CreditMemoItemFromWriteOffInvoice.
* Added validation to ensure that the `invoiceItemId` property is present in the JSON data when validating with validateJSON method.

## CreditMemoItemResponse

* Added `commitmentId` property to CreditMemoItemResponse and CreditMemoItem.
* Added `commitmentPeriodId` property to CreditMemoItemResponse and CreditMemoItem.

## CreditMemoTaxationItemFromWriteOffInvoice

* The constructor now requires a `taxation_item_id` parameter, which must be provided when creating an instance of CreditMemoTaxationItemFromWriteOffInvoice.
* Added validation to ensure that the `taxationItemId` field is present and is of the correct type in the JSON data.

## DebitMemoEntityPrefix

* Constructor now requires `prefix` and `start_number` parameters, which may require updates to existing code that instantiates DebitMemoEntityPrefix without arguments.
* Added validation to ensure required properties `prefix` and `startNumber` are present in JSON data.

## DocumentIdList

* The constructor of DocumentIdList now requires a `doc_type` parameter. This change will require developers to update their code to pass this parameter when creating a new instance of DocumentIdList.
* Added a new static property `RequiredProperties` to enforce the presence of `docType` in JSON data during validation.

## ExpandedBundle

* The ExpandedBundle class has been removed entirely, which will break any code relying on this class.

## ExpandedCommitment

* Added `eligibleAccountConditions` property to ExpandedCommitment.
* Added `eligibleChargeConditions` property to ExpandedCommitment.

## ExpandedCreditMemoItem

* Added `commitmentId` as a new property to the ExpandedCreditMemoItem class.
* Added `commitmentPeriodId` as a new property to the ExpandedCreditMemoItem class.

## ExpandedInvoiceItem

* Added new properties `commitmentId` and `commitmentPeriodId` to the ExpandedInvoiceItem class, allowing developers to handle commitment-related data.

## ExpandedRatePlanCharge

* Added new properties: productCategory, productClass, productFamily, and productLine to the ExpandedRatePlanCharge class.

## ExpandedUsage

* Added a new property `ratedAmount` to the ExpandedUsage model, allowing developers to access and manipulate the rated amount as a Number.

## Fulfillment

* Removed `excludeItemBillingFromRevenueAccounting` property from Fulfillment class.
* Removed `excludeItemBookingFromRevenueAccounting` property from Fulfillment class.

## GetAccountingPeriodResponse

* The type of `fiscalYear` has been changed from String to Number.
* The property `fiscal_quarter` has been renamed to `fiscalQuarter`.

## GetBillingPreviewRunResponse

* Added a new property `filters` to the GetBillingPreviewRunResponse model, which stores an array of BillingPreviewRunFilter objects. This allows developers to access the filters applied when creating a billing preview run.

## GetChargeOverride

* The `negotiatedPriceTable` field is now expected to be an array instead of an object. This change requires developers to update their code to handle `negotiatedPriceTable` as an array.
* The `isDimensionalPrice` field has been removed, which may affect any code relying on this field.

## GetFulfillment

* Removed `excludeItemBillingFromRevenueAccounting` property from GetFulfillment and Fulfillment classes.
* Removed `excludeItemBookingFromRevenueAccounting` property from GetFulfillment and Fulfillment classes.

## GetProductRatePlanChargeResponse

* The RevenueRecognitionRuleName field is now expected to be a primitive string type instead of an object constructed from RevenueRecognitionRuleName.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added `pricingAttributes` property to support dynamic pricing when DynamicPricing permission is enabled.
* Added `isDimensionalPrice` property to indicate if the charge uses dimensional pricing, available with DynamicPricing permission.
* Added `isPriceNegotiated` property to indicate if the charge uses negotiated pricing, available with NegotiatedPriceTable permission.

## InvoiceForBulkUpdate

* The constructor of InvoiceForBulkUpdate now requires an `id` parameter, which is a mandatory field.
* Added validation to ensure that the `id` property is present in the JSON data for InvoiceForBulkUpdate.

## InvoiceItem

* Added `commitmentId` property to InvoiceItem.
* Added `commitmentPeriodId` property to InvoiceItem.

## InvoiceScheduleSubscription

* Constructor now requires `order_key` and `subscription_key` parameters, which may require updates to existing code that instantiates InvoiceScheduleSubscription.
* Added validation to ensure `orderKey` and `subscriptionKey` are present in JSON data, improving data integrity checks.

## Order

* The type for the `commitments` property has changed from `UpsertCommitmentInput` to `GetCommitmentOutput`. This may require updates to code that interacts with the `commitments` property.

## PaymentData

* Constructor now requires three parameters: auth_transaction_id, authorized_amount, and authorized_currency.
* Added validation to ensure required properties (authTransactionId, authorizedAmount, authorizedCurrency) are present in JSON data.

## PaymentEntityPrefix

* Constructor now requires `prefix` and `start_number` parameters, which may break existing code that does not provide these arguments.
* Added validation to ensure required properties `prefix` and `startNumber` are present in JSON data.

## PostInvoiceRequest

* The constructor now requires an `id` parameter, which is a breaking change for any existing code that instantiates PostInvoiceRequest without arguments.
* Added validation to ensure that the `id` property is present and is a string in the JSON data.

## PreviewContactInfo

* Added new fields `address1` and `address2` to the PreviewContactInfo model, allowing developers to include the first and second lines of a contact`s address.

## PreviewExistingSubscriptionDiscountDetails

* Added `serviceStartDate` property to define the start date of the service period for a discount charge.
* Added `serviceEndDate` property to define the end date of the service period for a discount charge.

## PreviewStartDate

* The constructor of the PreviewStartDate class now requires a parameter `preview_start_date_policy`. This change will require developers to update their instantiation of the PreviewStartDate class to include this new parameter.
* Added a new static property `RequiredProperties` to the PreviewStartDate class, which includes `previewStartDatePolicy`. This ensures that the JSON data includes all required properties.

## PreviewThroughDate

* Constructor now requires a `preview_thru_date_policy` parameter.
* Added validation to ensure `previewThruDatePolicy` is present in JSON data.

## ProductRatePlanCharge

* The `RevenueRecognitionRuleName` field now expects a primitive string type instead of an object constructed from `RevenueRecognitionRuleName`.

## QuantityForUsageCharges

* Constructor now requires `charge_id` and `quantity` parameters, which may require updates to existing instantiations of QuantityForUsageCharges.
* Added validation to ensure `chargeId` and `quantity` are present in JSON data, improving data integrity checks.

## QueryBundlesResponse

* The entire QueryBundlesResponse class has been removed, which will break any code that relies on this class.

## RatePlanChargeSegment

* Renamed property `IsPriceNegotiated` to `isPriceNegotiated`. This change requires developers to update their code to use the new property name.

## RatePlanChargeSegmentInfo

* Renamed property `IsPriceNegotiated` to `isPriceNegotiated`. This change requires developers to update their code to use the new property name.

## RefundEntityPrefix

* The constructor of RefundEntityPrefix now requires `prefix` and `start_number` as parameters.
* Added validation to ensure required properties `prefix` and `startNumber` are present in JSON data.

## RemoveCatalogGroupProductRatePlan

* The constructor now requires an `id` parameter, which is a mandatory field for initializing the RemoveCatalogGroupProductRatePlan object.
* Added validation to ensure that the `id` property is present and is of the correct type in the JSON data.

## RetryPaymentScheduleItem

* The constructor now requires an `id` parameter, which is a mandatory field for creating an instance of RetryPaymentScheduleItem.
* Added validation to ensure that the `id` field is present and is a string in the JSON data.

## SubscriptionData

* The constructor of SubscriptionData now requires a `start_date` parameter. Existing code that instantiates SubscriptionData without this parameter will need to be updated.
* Added validation to ensure that the `startDate` property is present in the JSON data when creating a SubscriptionData instance.

## UpdateAccountingPeriodRequest

* The `fiscalYear` property type has changed from `String` to `Number`. This may require developers to update their code to ensure `fiscalYear` is provided as a number instead of a string.

## UpdateCatalogGroupRequest

* The `remove` field type has been changed from an array of arrays to a single array of `RemoveCatalogGroupProductRatePlan`. This may require updates to how developers construct the `remove` field in their requests.

## UpdateCreditMemoWithId

* The constructor of UpdateCreditMemoWithId now requires an `id` parameter. Existing code that instantiates this class without providing an `id` will break.
* Added validation to ensure that the `id` property is present in the JSON data when using the validateJSON method.

## UpdateDebitMemoWithId

* The constructor of UpdateDebitMemoWithId now requires an `id` parameter, which is a breaking change for any existing instantiation of this class.
* Added validation to ensure that the `id` property is present in the JSON data when using the validateJSON method.

## UpdateDiscountInvoiceItem

* The `processingType` field has been removed from the UpdateDiscountInvoiceItem model. Any code relying on this field will need to be updated.

## UpdateSubscriptionRatePlan

* Removed the `externallyManagedPlanId` property from the UpdateSubscriptionRatePlan class. This may affect any code relying on this property.

## UpdateSubscriptionRatePlanCustomFields

* The constructor now requires a `rate_plan_id` parameter, which must be provided when creating an instance of UpdateSubscriptionRatePlanCustomFields.
* Added validation to ensure that the `ratePlanId` property is present in the JSON data when using validateJSON.

## UpsertCommitmentInput

* Added `eligibleAccountConditions` and `eligibleChargeConditions` as new properties of type `Condition`.
* Introduced `excludeItemBookingFromRevenueAccounting` as a new boolean property.
* Added `status` as a new property of type `CommitmentStatus`.

## UpsertCommitmentPeriodInput

* Added a new property `status` of type `CommitmentPeriodStatus` to the UpsertCommitmentPeriodInput model.

## UpsertCreateCommitmentInput

* Removed `accountingCode` property from the UpsertCreateCommitmentInput class.
* Added `eligibleAccountConditions` and `eligibleChargeConditions` properties to the UpsertCreateCommitmentInput class.
* Introduced `excludeItemBookingFromRevenueAccounting` property to the UpsertCreateCommitmentInput class.

## UpsertUpdateCommitmentInput

* Added a new property `status` of type CommitmentStatus to UpsertUpdateCommitmentInput.

## UpsertUpdateCommitmentPeriodInput

* The `endDate` property has been removed.
* The `status` property has been added, which uses the CommitmentPeriodStatus model.
