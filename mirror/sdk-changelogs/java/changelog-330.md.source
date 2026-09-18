---
markdown:
  toc:
    hide: false
---

# Java client library 3.3.0 changelog


## ZuoraClient

* Added new API integrations: DataLabelingApi, DeploymentApi, DeploymentConfigurationTemplatesApi, and OmniChannelSubscriptionsApi.
* Introduced a new method `retryOnConnectionFailure` to configure HTTP client behavior regarding connection failures.
* Added support for new environments: `CSBX_AP` and `PROD_AP`.


## ContactsApi
* Added a new method `transferContact` to transfer a contact to another account under the same hierarchy. This includes the creation of a new API endpoint `/v1/contacts/{contactId}/transfer`.

## CreditMemosApi
* Parameter names `partid` and `itempartid` have been renamed to `partId` and `itemPartId` respectively. Developers will need to update their code to use the new parameter names.

## InvoiceSchedulesApi
* Added attachInvoiceSchedule method to attach charges to an invoice schedule.
* Added detachInvoiceSchedule method to detach charges from an invoice schedule.

## ObjectQueriesApi
* Added support for querying Invoice Schedules with new methods `queryInvoiceScheduleByKey` and `queryInvoiceSchedules`.
* Introduced new expand options for querying accounts, credit memo items, debit memo items, invoice items, payments, payment schedule items, and subscriptions.
* Added support for querying Rating Details with new methods `queryRatingDetailByKey` and `queryRatingDetails`.

## OrdersApi
* Added asynchronous delete order functionality with the method `deleteOrderAsynchronously`.

## PaymentGatewaysApi
* Added createPredebitNotification method to trigger a pre-debit notification for an invoice, applicable only for the Adyen payment gateway.
* Introduced CreatePredebitNotificationApi class to facilitate building and executing pre-debit notification requests.

## PaymentsApi
* Renamed parameters `partid` and `itempartid` to `partId` and `itemPartId` respectively in several methods. This change requires developers to update their code to use the new parameter names.

## ProductRatePlanChargesApi
* Added a new method `updateProductRatePlanChargeFinanceInformation` to update finance information for a specific Product Rate Plan Charge Key in Zuora Billing.
* Introduced a new class `UpdateProductRatePlanChargeFinanceInformationApi` to facilitate the update of finance information with various optional parameters.

## RefundsApi
* Method parameter names have been changed from camelCase to PascalCase (e.g., `itempartid` to `itemPartId`). This may require updates to method calls in existing code.

## AsyncOrderResultSubscriptionStatus
* The entire AsyncOrderResultSubscriptionStatus class has been removed, which will cause compilation errors for any code that references this class.

## AsyncOrderResultSubscriptions
* The class AsyncOrderResultSubscriptions has been removed, which will break any code that relies on this class.

## BillRunFilter
* Added a new field `condition` of type Condition to the BillRunFilter class.
* Added a new field `objectType` of type ObjectTypeEnum to the BillRunFilter class.
* Introduced `ObjectTypeEnum` enum with values ACCOUNT, SUBSCRIPTION, and RATEPLANCHARGE.


## BillingOptions
* Added support for excluding specific charge types from billing document generation with the new `chargeTypeToExclude` field.

## BulkPdfGenerationJobRequest
* Added a new field `ignoreArchivedFiles` to control whether to skip archived PDF files in the output. Setting it to `true` will skip archived files, while setting it to `false` will throw an error if archived files are encountered. The default value is `false`.

## ChargeOverride
* Added a new Boolean field `taxable` to indicate if a charge is taxable. When set to true, `taxCode` and `taxMode` are required.
* Introduced a new LocalDate field `estimatedStartDate` to represent the estimated start date of a charge. This is available when the Pending Charge Flexibility feature is enabled.

## ChargeTier
* Added a new field `originalListPrice` to the ChargeTier class, allowing developers to set and retrieve the original list price of a product or service.

## ChargeUpdate
* Added a new field `estimatedStartDate` to the ChargeUpdate class, which represents the estimated start date of the charge. This field is available when the Pending Charge Flexibility feature is enabled.

## CompareSchemaInfoResponse
* The entire CompareSchemaInfoResponse class has been removed, which will break any code that relies on this class.

## CreateAccountPaymentMethod
* Added support for `accountMaskNumber` field, allowing developers to handle masked account numbers in payment methods.

## CreateBatchQueryJobRequest
* The type of the `version` field has been changed from Float to String. This may require developers to update their code to handle the `version` field as a String instead of a Float.

## CreateBatchQueryJobResponse
* The type of the `version` field has been changed from Float to String. This change requires developers to update their code to handle `version` as a String instead of a Float.

## CreateBatchQueryResponse
* Changed the type of `recordCount` from String to BigDecimal, which may require developers to update their code to handle the new data type.

## CreateOrderChargeUpdate
* Added a new field `estimatedStartDate` to the CreateOrderChargeUpdate class, allowing developers to specify the estimated start date of a charge. This feature is available when the Pending Charge Flexibility feature is enabled.

## CreateOrderCreateSubscription
* Added `invoiceOwnerAccountNumber` field to specify the account number that will own the invoice.
* Added `uniqueToken` field to set a unique value for more than one create subscription order action within the same order.

## CreateOrderOrderLineItem
* Added a new field `uniqueToken` to the CreateOrderOrderLineItem class, allowing developers to set a unique token for order line items within the same order.

## CreateOrderResponse
* Removed validation that required the `status` field to be a primitive type in the JSON string. This may affect developers relying on this validation.

## CreatePaymentMethodBankTransfer
* Added support for `accountMaskNumber` field, allowing developers to handle masked account numbers for payment methods.

## CreatePaymentMethodRequest
* Added `accountMaskNumber` field to store the masked account number of the payment method.
* Introduced `tokenize` field to specify whether to tokenize the payment method.
* Added `tokens` field of type PaymentMethodRequestTokens for handling tokens.

## CreatePaymentSessionRequest
* Added a new field `gatewayOptions` to the CreatePaymentSessionRequest class, allowing developers to specify additional options for the payment gateway.

## CreateRefundwithAutoUnapply
* Added support for write-off functionality with the introduction of the `writeOff` boolean field.
* Introduced `writeOffOptions` field to specify options related to write-off operations.

## CreateTemplateRequestContent
* The entire CreateTemplateRequestContent class has been removed, which will break any code that relies on this class.

## CreditMemo
* Added a new field `taxAutoCalculation` to the CreditMemo class, allowing automatic tax calculation in credit memos.

## CreditMemoResponse
* Added a new field `taxAutoCalculation` to the CreditMemoResponse class, allowing automatic tax calculation in credit memos.

## DeleteBatchQueryJobResponse
* The type of the `version` field has been changed from Float to String. This change may require developers to update their code to handle the `version` field as a String instead of a Float.

## DeleteBatchQueryResponse
* Changed the type of `recordCount` from String to BigDecimal, which may require updates to code that interacts with this field.

## EInvoiceStatus
* Added new enum value `CONDITIONALSUCCESS` to EInvoiceStatus, allowing for more granular status reporting.

## ExpandedAccount
* Added new field `shipToId` with associated methods for handling shipping contact ID.
* Added new field `shipTo` with associated methods for handling shipping contact details.

## ExpandedContact
* Added new fields: `asBillTo`, `asSoldTo`, and `asShipTo` to the ExpandedContact class.

## ExpandedCreditMemo

* The type of the `revenueImpacting` field has been changed from Integer to String. This change may require developers to update their code to handle the new data type.
* Added a new field `shipToContactSnapshotId` to the ExpandedCreditMemo class, allowing developers to set and retrieve the shipping contact snapshot ID.

## ExpandedCreditMemoItem
* Changed the type of `revenueImpacting` from Integer to String, which may require developers to update their code to handle this type change.
* Added new field `itemShipToContactId` with associated methods.
* Added new field `shipToContactSnapshotId` with associated methods.
* Added new field `subscriptionOwnerId` with associated methods.
* Added new field `subscriptionOwner` of type ExpandedAccount with associated methods.
* Added new field `creditTaxationItems` of type List\<ExpandedCreditTaxationItem> with associated methods.

## ExpandedDebitMemo
* Added new field `shipToContactSnapshotId` with associated methods.
* Added new field `soldToContactId` with associated methods.

## ExpandedDebitMemoItem
* Added new field `itemShipToContactId` to represent the contact ID for shipping.
* Introduced `shipToContactSnapshotId` to capture snapshot ID for shipping contact.
* Added `subscriptionOwnerId` and `subscriptionOwner` fields to track subscription ownership details.
* Included `debitTaxationItems` field to handle taxation items related to debit memos.

## ExpandedInvoice
* Added new fields `shipToContactId` and `shipToContactSnapshotId` to the ExpandedInvoice class.

## ExpandedInvoiceItem
* Added new fields: `itemShipToContactId`, `shipToContactSnapshotId`, `shipToContactId`, `subscriptionOwnerId`, and `subscriptionOwner`.
* Introduced methods to handle new fields: `itemShipToContactId`, `shipToContactSnapshotId`, `shipToContactId`, `subscriptionOwnerId`, and `subscriptionOwner`.

## ExpandedOrderAction
* Added new field `subscriptionNumber` with associated methods.
* Added new field `shipToContactId` with associated methods.
* Added new field `clearingExistingShipToContact` with associated methods.

## ExpandedOrderLineItem

* Added new fields: `sequenceSetId`, `paymentTerm`, `invoiceTemplateId`, `shipToId`, and `shipToSnapshotId` to the ExpandedOrderLineItem class.

## ExpandedOrders

* Added new field `isScheduled` to track if an order is scheduled.
* Added new field `cancelReason` to specify the reason for order cancellation.

## ExpandedPayment

* Added a new field `paymentScheduleItemPayments` to the ExpandedPayment class, allowing developers to manage payment schedule item payments.

## ExpandedPaymentScheduleItem

* Added a new field `paymentScheduleItemPayments` to the `ExpandedPaymentScheduleItem` class, which is a list of `ExpandedPaymentScheduleItemPayment` objects.
* Introduced methods to manipulate `paymentScheduleItemPayments`: `paymentScheduleItemPayments(List<ExpandedPaymentScheduleItemPayment> paymentScheduleItemPayments)` and `addPaymentScheduleItemPaymentsItem(ExpandedPaymentScheduleItemPayment paymentScheduleItemPaymentsItem)`.

## ExpandedProcessedUsage

* Changed the type of `billingPeriodEndDate` and `billingPeriodStartDate` from String to LocalDate. This requires developers to update their code to handle LocalDate objects instead of Strings.

## ExpandedRatePlanCharge

* Added new fields `estimatedStartDate` and `estimatedEndDate` to the ExpandedRatePlanCharge class, allowing developers to set and retrieve estimated start and end dates for rate plan charges.

## ExpandedSubscription

* Added new fields `shipToContactId` and `shipToContactSnapshotId` to the ExpandedSubscription class.

## GetAccountingPeriodAllOfFieIdsResponse

* Added a new field `accountsReceivableDebitMemoAgingDetailExportFileId` to the GetAccountingPeriodAllOfFieIdsResponse class.

## GetAsyncOrderJobResponse

* The type of the `result` field has been changed from AsyncOrderJobResult to GetAsyncOrderJobResponseResult. This change requires developers to update their code to use the new type.

## GetBatchQueryJobResponse

* The type of the `version` field has been changed from Float to String. This change will require developers to update their code to handle `version` as a String instead of a Float.

## GetBatchQueryResponse
* Changed the type of `recordCount` from String to BigDecimal, which may require updates to code that interacts with this field.

## GetBulkPdfGenerationJobResponse
* Added support for `skippedDocuments` field, which includes a list of document IDs that were skipped during the bulk PDF generation job.

## GetChargeOverride
* Added `estimatedStartDate` field to support Pending Charge Flexibility feature.
* Introduced `taxable` field to indicate if a charge is taxable, available only with Taxation enabled.
* Added `taxMode` field to specify the tax mode, available only with Taxation enabled.
* Included `taxCode` field to define the tax code of a charge, available only with Taxation enabled.

## GetCustomExchangeRatesType

* Added a new field `rateSetName` to the GetCustomExchangeRatesType class, which represents the name of the rate set configured in the Finance Manage Currency Conversion settings for the Multi-Org feature.

## GetSubscriptionRatePlanChargesWithAllSegments
* Added new fields: `estimatedEndDate`, `estimatedStartDate`, `taxable`, `taxCode`, and `taxMode` to the GetSubscriptionRatePlanChargesWithAllSegments class.

## IntervalPricingTier
* Added a new field `originalListPrice` to the IntervalPricingTier class, allowing developers to access and set the original list price of a product or service.

## MigrationClientResponse
* The entire MigrationClientResponse class has been removed, which will break any code relying on this class.

## OrderActionCreateSubscription
* Added support for specifying an invoice owner account number with the new field `invoiceOwnerAccountNumber`.
* Introduced a new field `paymentProfile` to include payment profile information in the subscription creation process.

## OrderActionOwnerTransfer
* Added a new field `paymentProfile` to the OrderActionOwnerTransfer class, allowing developers to associate a PaymentProfile with an order action.

## OrderActionRatePlanAmendment
* Added support for custom fields in OrderActionRatePlanAmendment with a new Map<String, Object> customFields attribute.

## OrderActionRatePlanChargeOverride
* Added a new field `estimatedStartDate` to the OrderActionRatePlanChargeOverride class. This field is available if the Pending Charge Flexibility feature is enabled.

## OrderActionRatePlanChargeUpdate
* Added a new field `estimatedStartDate` to the OrderActionRatePlanChargeUpdate class, which is available if the Pending Charge Flexibility feature is enabled.

## OrderActionTermsAndConditions
* Added a new field `paymentProfile` to the OrderActionTermsAndConditions class, allowing developers to associate a PaymentProfile with an order action.

## PaymentMethodResponse
* Added a new field `cardBinInfo` of type `PaymentMethodResponseCardBinInfo` to the PaymentMethodResponse class.

## PaymentRun
* Changed the type of the `organizationLabels` field from String to List\<OrganizationLabel>, which may require updates to existing code that interacts with this field.
* Added the addOrganizationLabelsItem method to facilitate adding individual OrganizationLabel items to the organizationLabels list.

## PaymentRunResponse
* The type of `organizationLabels` has been changed from String to List\<OrganizationLabel>, which may require updates to existing code that interacts with this field.
* Added a method `addOrganizationLabelsItem` to facilitate adding individual OrganizationLabel items to the organizationLabels list.

## PostCompareTemplateRequest
* The class PostCompareTemplateRequest has been removed, which will break any code relying on this class.

## PreviewChargeMetrics
* Added a new field `isPending` to the PreviewChargeMetrics class, allowing developers to track the pending status of a charge.

## PreviewOptions
* Added a new field `chargeTypeToExclude` to allow exclusion of specific charge types from the forecast run.
* Introduced methods to manage `chargeTypeToExclude`, including `chargeTypeToExclude(List<ChargeType>)` and `addChargeTypeToExcludeItem(ChargeType)`.

## PreviewOrderChargeOverride
* Added new field `estimatedStartDate` to represent the estimated start date of the charge.
* Introduced `taxCode`, `taxMode`, and `taxable` fields to handle tax-related information for charges.

## PreviewOrderChargeUpdate
* Added a new field `estimatedStartDate` to the PreviewOrderChargeUpdate class. This field represents the estimated start date of the charge and is available when the Pending Charge Flexibility feature is enabled.

## PreviewOrderCreateSubscription
* Added support for specifying an invoice owner account number with the new field `invoiceOwnerAccountNumber`. This allows setting a different account to own the invoice separate from the order owner.

## PreviewOrderResultDeltaMetrics
* Added support for handling `orderDeltaQty` with new methods to manage a list of OrderDeltaQty objects.

## RatePlanChargeSegment
* Added new fields: `estimatedEndDate`, `estimatedStartDate`, `taxable`, `taxCode`, and `taxMode` to the RatePlanChargeSegment class.

## RatePlanChargeSegmentInfo
* Added new fields: `estimatedEndDate`, `estimatedStartDate`, `taxable`, `taxCode`, and `taxMode` to the RatePlanChargeSegmentInfo class.

## RatePlanChargeTier
* Added a new field `originalListPrice` to the RatePlanChargeTier class, allowing developers to access and set the original list price of a product or service.
## Refund
* Added a new field `writeOffResults` to the Refund class, allowing developers to handle write-off results associated with a refund.
## RefundResponse
* Added a new field `writeOffResults` to the RefundResponse class, allowing developers to access write-off results related to a refund.

## SettingSourceComponentResponse
* The class SettingSourceComponentResponse has been removed entirely, which will break any code relying on this class.

## TemplateMigrationClientRequest
* The entire class TemplateMigrationClientRequest has been removed, which will break any code relying on this class.

## TemplateResponse
* The entire TemplateResponse class has been removed, which will break any code relying on this class.

## UpdateProductRatePlanChargeRequest
* Changed the type of `productRatePlanChargeTierData` from `List<ProductRatePlanChargeTier>` to `ProductRatePlanChargeTierData`, which may require updates to code handling this data.
* Removed the method `addProductRatePlanChargeTierDataItem`, which may affect code that adds individual items to `productRatePlanChargeTierData`.

## WriteOffInvoiceRequest

* Added a new field `taxAutoCalculation` to the WriteOffInvoiceRequest class, allowing automatic tax calculation in credit memos.

## sdk/ZuoraClient (Quickstart API client)
* The OkHttpClient instantiation has been removed from the fetchBearerToken method. Developers must now rely on the ApiClient`s HttpClient for making requests.
* A new method getApiClient() has been added, allowing developers to access the ApiClient instance directly.
