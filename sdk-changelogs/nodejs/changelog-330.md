---
title: "Node.js client library 3.3.0 changelog"
sidebarTitle: "3.3.0"
---
## ZuoraClient

* Added DataLabelingApi access method for data labeling functionalities.
* Added DeploymentApi access method for deployment functionalities.
* Renamed the ConfigurationTemplatesApi access method to DeploymentConfigurationTemplatesApi for deployment configuration templates.
* Added OmniChannelSubscriptionsApi access method for omni-channel subscription management.
* Introduced support for APAC environments: `CSBX_AP` and `PROD_AP`.

## ContactsApi
* Added a new method `transferContact` to transfer a contact to another account under the same hierarchy. This requires Ship To Contact permission and the billing rule for Account Hierarchy to be enabled.

## CreditMemosApi
* API endpoint paths have been updated to use hyphens instead of camel case. For example, `/v1/creditmemos` is now `/v1/credit-memos`. This change affects all API calls and requires developers to update their endpoint paths accordingly.
* Parameter names have been updated to use underscores instead of camel case. For example, `partid` is now `part_id`. This change affects method signatures and requires developers to update their code to use the new parameter names.

## DebitMemosApi

* All API endpoint paths have been updated to use hyphenated `debit-memos` instead of `debitmemos`. This change will require developers to update their API calls to the new endpoint paths.

## InvoiceSchedulesApi

* Added `attachInvoiceSchedule` method to attach charges to an invoice schedule.
* Added `detachInvoiceSchedule` method to detach charges from an invoice schedule.

## InvoicesApi
* Endpoint path changed from `/v1/invoices/{invoiceKey}/taxationitems` to `/v1/invoices/{invoiceKey}/taxation-items`. This requires developers to update their API calls to the new endpoint path.

## ObjectQueriesApi
* Added support for querying InvoiceSchedule by key with filters, expands, and sort capabilities.
* Added support for querying InvoiceSchedules with filters, expands, and sort capabilities.
* Added support for querying RatingDetail by key with filters, expands, and sort capabilities.
* Added support for querying RatingDetails with filters, expands, and sort capabilities.
* Expanded supported expands for querying Account by key to include `shipto`.
* Expanded supported expands for querying CreditMemoItem by key to include `subscriptionowner` and `credittaxationitems`.
* Expanded supported expands for querying DebitMemoItem by key to include `subscriptionowner` and `debittaxationitems`.
* Expanded supported expands for querying InvoiceItem by key to include `subscriptionowner`.
* Expanded supported expands for querying Payment by key to include `paymentscheduleitempayments` and `paymentscheduleitempayments.paymentscheduleitem`.
* Expanded supported expands for querying PaymentScheduleItem by key to include `paymentscheduleitempayments` and `paymentscheduleitempayments.payment`.
* Expanded supported expands for querying Subscription by key to include `account.shipto`.

## OrdersApi
* Added asynchronous order deletion functionality with the method `deleteOrderAsynchronously`. This allows developers to delete orders asynchronously, rolling back subscriptions to their previous versions and deleting order line items, provided the charges are not invoiced.

## PaymentGatewaysApi

* Added a new method `createPredebitNotificationWithHttpInfo` to trigger a pre-debit notification for an invoice, specifically for the Adyen payment gateway.
* Introduced `createPredebitNotification` method as a simplified interface to trigger pre-debit notifications, returning only the data part of the response.

## PaymentsApi

* Renamed parameters `partid` to `part_id` and `itempartid` to `item_part_id` in methods getPaymentItemPartWithHttpInfo, getPaymentItemPart, getPaymentItemPartsWithHttpInfo, getPaymentItemParts, getPaymentPartWithHttpInfo, and getPaymentPart. This change requires developers to update their code to use the new parameter names.
* Updated API endpoint paths to use `partId` and `itemPartId` instead of `partid` and `itempartid`. This change requires developers to update any hardcoded API paths in their code.

## ProductRatePlanChargesApi
* Added a new method `updateProductRatePlanChargeFinanceInformationWithHttpInfo` to update finance information for a specific Product Rate Plan Charge Key in Zuora Billing.
* Introduced a simplified method `updateProductRatePlanChargeFinanceInformation` that returns the data directly from the update operation.

## RefundsApi
* Parameter names have been changed from camelCase to snake_case in several methods. Developers will need to update their code to use the new parameter names: `item_part_id` instead of `itempartid` and `refund_part_id` instead of `refundpartid`.
* API endpoint paths have been updated to use snake_case for path parameters. Developers will need to update their API calls to reflect these changes.

## ReportsApi
* The entire ReportsApi class has been removed, which includes all methods for downloading and fetching reports. Developers will need to update their code to accommodate this removal.

## TaxationItemsApi
* Updated API endpoint paths from `/v1/taxationitems/{id}` to `/v1/taxation-items/{id}` for DELETE, GET, and PUT operations. Developers need to update their code to use the new endpoint paths.

## src/zuora_api/index
* Removal of AsyncOrderJobResult, AsyncOrderResultSubscriptionStatus, AsyncOrderResultSubscriptions, CreateTemplateRequestContent, TemplateDetailResponse, TemplateMigrationClientRequest, TemplateResponse, and ConfigurationTemplatesApi. Developers using these models or API services will need to update their code.
* Addition of new models: AttachInvoiceScheduleRequest, CompareAndDeployProductCatalogTemplateRequest, CompareAndDeployProductCatalogTenantRequest, CompareAndDeployTemplateRequest, CompareAndDeployTenantRequest, CompareTemplateRequest, CompareTemplateResponse, Condition, CreateDeploymentTemplateRequest, CreateOmniChannelSubscriptionRequest, CreateOmniChannelSubscriptionResponse, CreateOrderResult, CreatePaymentPredebitNotifyRequest, CreatePaymentPredebitNotifyResponse, DeleteOrderAsyncResponse, DeploymentResponse, DeploymentTemplate, DeploymentTemplatesResponse, DetachInvoiceScheduleRequest, ExpandedCreditTaxationItem, ExpandedDebitTaxationItem, ExpandedInvoiceSchedule, ExpandedInvoiceScheduleItem, ExpandedPaymentScheduleItemPayment, ExpandedRatingDetail, GetAsyncCreateOrderJobResponse, GetAsyncOrderJobResponseResult, GetAsyncPreviewOrderJobResponse, GetDataLabelingJobResponse, GetDataLabelingJobResponseProgress, GetOmniChannelSubscriptionResponse, MigrateTenantSettingsRequest, MigrateTenantSettingsResponse, OmniChannelAccountData, OrderDeltaQty, PaymentMethodCardBinInfoCardClass, PaymentMethodCardBinInfoProductType, PaymentMethodRequestTokens, PaymentMethodResponseCardBinInfo, PaymentProfile, ProductRatePlanChargeFinanceInformation, QueryInvoiceSchedulesResponse, QueryRatingDetailsResponse, RetrieveDeploymentResponse, RetrieveDeploymentResponseFailedInner, RetrieveDeploymentResponseSkippedInner, RetrieveDeploymentResponseSucceededInner, RetrieveDeploymentResponseTargetTenant, RevertDeploymentResponse, SettingSourceComponent, SubmitDataLabelingJobRequest, SubmitDataLabelingJobResponse, TransferContactRequest, WriteOffOptions, WriteOffResultTransaction, WriteOffResults.
* Addition of new API services: DataLabelingApi, DeploymentApi, DeploymentConfigurationTemplatesApi, OmniChannelSubscriptionsApi.

## AsyncOrderJobResult

* The entire AsyncOrderJobResult class has been removed, which will break any code that relies on this class.

## AsyncOrderResultSubscriptionStatus

* The AsyncOrderResultSubscriptionStatus class has been removed, which will cause compatibility issues for any code relying on this class.

## AsyncOrderResultSubscriptions
* The AsyncOrderResultSubscriptions class has been removed, which will break any code that relies on this class.

## BillRunFilter
* Added a new `condition` property of type `Condition` to the BillRunFilter model.
* Added a new `objectType` property to specify the target object type when using FilterCondition filterType.
* Defined allowed values for the `objectType` property, including `Account`, `Subscription`, and `RatePlanCharge`.

## BillingOptions
* Added a new property `chargeTypeToExclude` to the BillingOptions model, allowing developers to specify types of charges to be excluded from billing document generation.

## BulkPdfGenerationJobRequest
* Added a new boolean property `ignoreArchivedFiles` to control whether to skip archived PDF files in the job. Setting it to true will skip archived files, and they will be listed in the skippedDocuments field of the GET by Job Id API response. Setting it to false will result in an error if archived files are encountered. The default value is false.

## ChargeOverride

* Added `taxable` field to indicate if a charge is taxable. When set to true, `taxCode` and `taxMode` are required.
* Introduced `estimatedStartDate` field for charges changed through related order actions, available with the Pending Charge Flexibility feature.

## ChargeTier

* Added `originalListPrice` property to ChargeTier, representing the price of a product or service as listed for sale by a manufacturer or retailer.

## ChargeUpdate
* Added `estimatedStartDate` property to ChargeUpdate class. This field is available when the Pending Charge Flexibility feature is enabled and is used to specify the estimated start date of the charge when changed through related order actions.
## CompareSchemaInfoResponse
* The entire CompareSchemaInfoResponse class has been removed, which will break any code relying on this class.
## CreateAccountPaymentMethod
* Added support for `accountMaskNumber` field in CreateAccountPaymentMethod and CreatePaymentMethodBankTransfer classes.
## CreateBatchQueryJobRequest
* The `version` field type has been changed from `Number` to `String`. This may require developers to update their code to ensure that the `version` field is handled as a string.
## CreateBatchQueryJobResponse
* The `version` field type has been changed from `Number` to `String`. This may require developers to update their code to handle `version` as a string instead of a number.
## CreateBatchQueryResponse
* The type of `recordCount` has been changed from `String` to `Number`. This may require developers to update their code to handle `recordCount` as a number instead of a string.
## CreateOrderChargeUpdate
* Added `estimatedStartDate` property to the CreateOrderChargeUpdate model. This field is available when the Pending Charge Flexibility feature is enabled and represents the estimated start date of the charge when changed through related order actions.
## CreateOrderCreateSubscription
* Added `invoiceOwnerAccountNumber` field to specify the account number of an existing account that will own the invoice.
* Added `uniqueToken` field to set relatedSubscriptionNumber in OLI within the same order, ensuring a unique value for multiple create subscription order actions within the same order.
## CreateOrderOrderLineItem
* Added a new property `uniqueToken` to the CreateOrderOrderLineItem class. This token is used to set the relatedSubscriptionNumber in OLI within the same order. It must be a valid value belonging to any of the create sub-order actions within the same order.
## CreateOrderResponse
* Implemented CreateOrderResult interface, adding fields such as accountId, accountNumber, creditMemoIds, creditMemoNumbers, invoiceIds, invoiceNumbers, orderId, orderNumber, paidAmount, paymentId, paymentNumber, ramps, refunds, status, subscriptionIds, subscriptionNumbers, subscriptions, and writeOff.
## CreatePaymentMethodBankTransfer
* Added support for `accountMaskNumber` field, allowing developers to handle masked account numbers for payment methods.
## CreatePaymentMethodRequest
* Added support for `accountMaskNumber` field to store masked account numbers.
* Introduced `tokenize` field to specify whether to tokenize the payment method.
* Added `tokens` field with validation support for handling payment method tokens.
## CreatePaymentSessionRequest
* Added `gatewayOptions` property to CreatePaymentSessionRequest, allowing additional configuration for payment gateways.
## CreateRefundwithAutoUnapply
* Added a new boolean property `writeOff` to indicate whether to write off a document.
* Introduced `writeOffOptions` property of type `WriteOffOptions` to provide additional options for write-off operations.
## CreateTemplateRequestContent
* The entire CreateTemplateRequestContent class has been removed, which will break any code that relies on this class for creating template requests.
## CreditMemo
* Added `taxAutoCalculation` property to CreditMemo, allowing automatic tax calculation in credit memos.
## CreditMemoResponse
* Added `taxAutoCalculation` property to CreditMemoResponse and CreditMemo models, allowing automatic tax calculation in credit memos.
## DeleteBatchQueryJobResponse
* The `version` field type has been changed from `Number` to `String`. This may require developers to update their code to handle `version` as a string instead of a number.
## DeleteBatchQueryResponse
* The type of `recordCount` has been changed from `String` to `Number`. This may require updates to code that interacts with this property.

## EInvoiceStatus
* Added a new status `ConditionalSuccess` to the EInvoiceStatus class.

## ExpandedAccount
* Added `shipToId` as a new property of type String.
* Added `shipTo` as a new property of type ExpandedContact.

## ExpandedContact
* Added new Boolean properties: asBillTo, asSoldTo, and asShipTo to the ExpandedContact model.

## ExpandedCreditMemo
* Changed the type of `revenueImpacting` from Number to String, which may require updates to code handling this field.
* Added a new field `shipToContactSnapshotId` of type String.

## ExpandedCreditMemoItem
* Changed the type of `revenueImpacting` from Number to String, which may require developers to update their code to handle this field as a string.
* Added `itemShipToContactId` as a new field of type String.
* Added `shipToContactSnapshotId` as a new field of type String.
* Added `subscriptionOwnerId` as a new field of type String.
* Added `subscriptionOwner` as a new field of type ExpandedAccount.
* Added `creditTaxationItems` as a new field, which is an array of ExpandedCreditTaxationItem.

## ExpandedDebitMemo
* Added `shipToContactSnapshotId` as a new field in the ExpandedDebitMemo model.
* Added `soldToContactId` as a new field in the ExpandedDebitMemo model.

## ExpandedDebitMemoItem
* Added new property `itemShipToContactId` to store the ID of the contact to which the item is shipped.
* Added new property `shipToContactSnapshotId` to store the snapshot ID of the contact to which the item is shipped.
* Added new property `subscriptionOwnerId` to store the ID of the subscription owner.
* Added new property `subscriptionOwner` to store the expanded account details of the subscription owner.
* Added new property `debitTaxationItems` to store an array of expanded debit taxation items.
## ExpandedInvoice
* Added new fields `shipToContactId` and `shipToContactSnapshotId` to the ExpandedInvoice model.
## ExpandedInvoiceItem
* Added new property `itemShipToContactId` to track the contact ID for shipping items.
* Added new property `shipToContactSnapshotId` to track the snapshot ID for shipping contacts.
* Added new property `shipToContactId` to track the contact ID for shipping.
* Added new property `subscriptionOwnerId` to track the owner ID of the subscription.
* Added new property `subscriptionOwner` of type `ExpandedAccount` to track the subscription owner details.
## ExpandedOrderAction
* Added `subscriptionNumber` as a new string field.
* Added `shipToContactId` as a new string field.
* Added `clearingExistingShipToContact` as a new boolean field.
## ExpandedOrderLineItem
* Added new properties: sequenceSetId, paymentTerm, invoiceTemplateId, shipToId, and shipToSnapshotId. These properties are now available for use in the ExpandedOrderLineItem model.
## ExpandedOrders
* Added `isScheduled` property to indicate if an order is scheduled.
* Added `cancelReason` property to provide a reason for order cancellation.
## ExpandedPayment
* Added support for `paymentScheduleItemPayments` in the ExpandedPayment model, allowing developers to handle payment schedule item payments as an array of ExpandedPaymentScheduleItemPayment objects.
## ExpandedPaymentScheduleItem
* Added a new property `paymentScheduleItemPayments` to the `ExpandedPaymentScheduleItem` model, which is an array of `ExpandedPaymentScheduleItemPayment` objects.
## ExpandedProcessedUsage
* Removed validation checks for `billingPeriodEndDate` and `billingPeriodStartDate` fields to ensure they are strings. This may affect code that relies on these validations.
## ExpandedRatePlanCharge
* Added `estimatedStartDate` property to ExpandedRatePlanCharge.
* Added `estimatedEndDate` property to ExpandedRatePlanCharge.
## ExpandedSubscription
* Added new fields `shipToContactId` and `shipToContactSnapshotId` to the ExpandedSubscription model.
## GetAccountingPeriodAllOfFieIdsResponse
* Added support for `accountsReceivableDebitMemoAgingDetailExportFileId`, allowing retrieval of the File ID for the Accounts Receivable Aging Debit Memo Detail report.
## GetAsyncOrderJobResponse
* Replaced `AsyncOrderJobResult` with `GetAsyncOrderJobResponseResult` for the `result` property. Developers need to update their code to use the new class name.
## GetBatchQueryJobResponse
* The `version` field type has been changed from `Number` to `String`. This may require developers to update their code to handle `version` as a string instead of a number.
## GetBatchQueryResponse
* The type of `recordCount` has been changed from `String` to `Number`. This may require developers to update their code to handle `recordCount` as a number instead of a string.
## GetBulkPdfGenerationJobResponse
* Added support for `skippedDocuments` field, which contains an array of objects with billing document types and their IDs that were skipped during execution.
## GetChargeOverride
* Added `estimatedStartDate` field for charges, available with Pending Charge Flexibility feature.
* Introduced `taxable` field to indicate if a charge is taxable, available with Taxation enabled.
* Added `taxMode` field to specify the tax mode of a charge.
* Included `taxCode` field for specifying the tax code of a charge, available with Taxation enabled.
## GetCustomExchangeRatesType
* Added a new field `rateSetName` to the GetCustomExchangeRatesType class, which represents the name of the rate set configured in the Finance Manage Currency Conversion settings for the Multi-Org feature.
## GetSubscriptionRatePlanChargesWithAllSegments
* Added new properties: estimatedEndDate, estimatedStartDate, taxable, taxCode, and taxMode to the GetSubscriptionRatePlanChargesWithAllSegments class.
## IntervalPricingTier
* Added `originalListPrice` property to IntervalPricingTier and RatePlanChargeTier, representing the original list price of a product or service.
## MigrationClientResponse
* The entire MigrationClientResponse class has been removed, which will break any code relying on this class.
## OrderActionCreateSubscription
* Added support for `invoiceOwnerAccountNumber` to specify the account number of an existing account that will own the invoice.
* Introduced `paymentProfile` to handle payment profile information within the subscription creation process.
## OrderActionOwnerTransfer
* Added a new optional field `paymentProfile` to the OrderActionOwnerTransfer model, allowing developers to include payment profile information.
* Introduced validation for the `paymentProfile` field to ensure correct data structure.
## OrderActionRatePlanAmendment
* Added support for custom fields in the Amendment object through the `customFields` property.
## OrderActionRatePlanChargeOverride
* Added `estimatedStartDate` field to the OrderActionRatePlanChargeOverride class. This field is available if the Pending Charge Flexibility feature is enabled and represents the estimated start date of the charge.
## OrderActionRatePlanChargeUpdate
* Added `estimatedStartDate` field to OrderActionRatePlanChargeUpdate, available with the Pending Charge Flexibility feature enabled.
## OrderActionTermsAndConditions
* Added support for `paymentProfile` in OrderActionTermsAndConditions, allowing developers to include payment profile information in their order actions.
## PaymentMethodResponse
* Added support for `cardBinInfo` in PaymentMethodResponse, allowing developers to access card BIN information.
## PaymentRun
* The type of `organizationLabels` has changed from a `String` to an `Array` of `OrganizationLabel` objects. This requires updating any code that interacts with `organizationLabels` to handle an array instead of a string.
* Added validation for `organizationLabels` to ensure it is an array and each item is validated as an `OrganizationLabel`.
## PaymentRunResponse
* The type of `organizationLabels` has changed from `String` to `Array.<module:model/OrganizationLabel>`. This may require updates to code handling this field.
* Added validation for `organizationLabels` to ensure it is an array and each item is validated using `OrganizationLabel.validateJSON`.
## PostCompareTemplateRequest
* The PostCompareTemplateRequest class has been removed, which will break any code that relies on this class.
## PreviewChargeMetrics
* Added a new property `isPending` to the PreviewChargeMetrics class, allowing developers to check if a charge is pending.
## PreviewOrderChargeOverride
* Added `estimatedStartDate` property to specify the estimated start date of a charge when changed through related order actions.
* Introduced `taxCode` property to define the tax code of a charge, available when `taxable` is true.
* Added `taxMode` property to specify the tax mode of a charge.
* Introduced `taxable` property to indicate if a charge is taxable, requiring `taxCode` and `taxMode` when true.
## PreviewOrderChargeUpdate
* Added `estimatedStartDate` property to PreviewOrderChargeUpdate, which provides the estimated start date of the charge. This is available when the Pending Charge Flexibility feature is enabled.
## PreviewOrderCreateSubscription
* Added support for `invoiceOwnerAccountNumber` field, allowing specification of an account number that will own the invoice. If not set, the account that owns the order will also own the invoice.
## PreviewOrderResultDeltaMetrics
* Added support for `orderDeltaQty` field, which is an array of OrderDeltaQty objects. This includes validation to ensure the field is an array in the JSON data.
## RatePlanChargeSegment
* Added new properties: `estimatedEndDate`, `estimatedStartDate`, `taxable`, `taxCode`, and `taxMode` to the RatePlanChargeSegment model.
* Implemented validation for `taxCode` and `taxMode` to ensure they are strings.
## RatePlanChargeSegmentInfo
* Added `estimatedEndDate` property of type String.
* Added `estimatedStartDate` property of type String.
* Added `taxable` property of type Boolean.
* Added `taxCode` property of type String.
* Added `taxMode` property of type String.
## RatePlanChargeTier
* Added `originalListPrice` property to RatePlanChargeTier, allowing developers to access the original list price of a product or service.
## Refund
* Added a new property `writeOffResults` to the Refund model, allowing developers to access write-off results associated with a refund.
## RefundResponse
* Added support for `writeOffResults` in the RefundResponse model, allowing developers to handle write-off results in refund operations.
## SettingSourceComponentResponse
* The entire SettingSourceComponentResponse class has been removed, which will cause compatibility issues for any code relying on this class.
## TemplateDetailResponse
* The entire TemplateDetailResponse class has been removed, which will break any code relying on this class.
## TemplateMigrationClientRequest
* The entire TemplateMigrationClientRequest class has been removed, which will break any code relying on this class.
## TemplateResponse
* The entire TemplateResponse class has been removed, which will break any code relying on this class.
## UpdateProductRatePlanChargeRequest
* Changed the type of `ProductRatePlanChargeTierData` from an array of `ProductRatePlanChargeTier` to `ProductRatePlanChargeTierData`. This may require updates to how this data is handled in existing implementations.

## WriteOffInvoiceRequest
* Added `taxAutoCalculation` property to WriteOffInvoiceRequest to enable automatic tax calculation in credit memos.
