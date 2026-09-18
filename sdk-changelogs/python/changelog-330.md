---
title: "Python client library 3.3.0 changelog"
sidebarTitle: "3.3.0"
---
## api/__init__

* Added DataLabelingApi for handling data labeling operations.
* Introduced DeploymentApi for managing deployments.
* Included DeploymentConfigurationTemplatesApi for deployment configuration templates management.
* Added OmniChannelSubscriptionsApi for omni-channel subscription management.
* Removed ConfigurationTemplatesApi, which may require developers to update their code if they were using this API.

## zuora_client
* Added new environment `CSBX_AP` with URL https://rest.test.ap.zuora.com.
* Added new environment `PROD_AP` with URL https://rest.ap.zuora.com.
* Added new API method data_labeling_api.
* Added new API method deployment_api.
* Added new API method omni_channel_subscriptions_api.
* Renamed the configuration_templates_api method to deployment_configuration_templates_api.

## contacts_api
* Added `transfer_contact` method to transfer a contact to another account under the same hierarchy.
* Added `transfer_contact_with_http_info` method for transferring a contact with additional HTTP information.
## credit_memos_api
* Resource paths have been updated to use hyphens instead of camel case. For example, `/v1/creditmemos` is now `/v1/credit-memos`. This change affects all endpoints and requires developers to update their API calls accordingly.
* Parameter names have been changed from camel case to snake case. For example, `partid` is now `part_id`. This change affects method signatures and requires developers to update their code to use the new parameter names.
## debit_memos_api
* Updated API endpoint paths from `/v1/debitmemos` to `/v1/debit-memos`. This change affects all methods interacting with debit memos and requires developers to update their API calls to the new endpoint format.
## invoice_schedules_api
* Added `attach_invoice_schedule` method to attach charges to an invoice schedule.
* Added `detach_invoice_schedule` method to detach charges from an invoice schedule.
## invoices_api
* The resource path for taxation items in invoices has been changed from `/v1/invoices/{invoiceKey}/taxationitems` to `/v1/invoices/{invoiceKey}/taxation-items`. This change requires developers to update any code that interacts with this endpoint to use the new path.
## object_queries_api
* Added support for querying invoice schedules with new methods: query_invoice_schedule_by_key and query_invoice_schedules.
* Introduced new methods for querying rating details: query_rating_detail_by_key and query_rating_details.
* Expanded supported expands for query_account_by_key and query_accounts to include `shipto`.
* Expanded supported expands for query_credit_memo_item_by_key and query_credit_memo_items to include `subscriptionowner` and `credittaxationitems`.
* Expanded supported expands for query_debit_memo_item_by_key and query_debit_memo_items to include `subscriptionowner` and `debittaxationitems`.
* Expanded supported expands for query_invoice_item_by_key and query_invoice_items to include `subscriptionowner`.
* Expanded supported expands for query_payment_by_key and query_payments to include `paymentscheduleitempayments` and `paymentscheduleitempayments.paymentscheduleitem`.
* Expanded supported expands for query_payment_schedule_item_by_key and query_payment_schedule_items to include `paymentscheduleitempayments` and `paymentscheduleitempayments.payment`.
* Expanded supported expands for query_subscription_by_key and query_subscriptions to include `account.shipto`.

## orders_api

* Added a new method `delete_order_asynchronously` to delete an order asynchronously.
* Introduced `delete_order_asynchronously_with_http_info` method for additional HTTP info when deleting an order asynchronously.

## payment_gateways_api
* Added `create_predebit_notification` method to trigger a pre-debit notification for an invoice, applicable only for the Adyen payment gateway.
* Added `create_predebit_notification_with_http_info` method to trigger a pre-debit notification with additional HTTP information.
## payments_api
* Renamed parameters `partid` to `part_id` and `itempartid` to `item_part_id` in multiple methods. This change requires developers to update their code to use the new parameter names.
* Updated resource paths to use `partId` and `itemPartId` instead of `partid` and `itempartid`. This change affects API endpoint URLs and requires developers to update their code accordingly.

## product_rate_plan_charges_api
* Added method `update_product_rate_plan_charge_finance_information` to update finance information for a specific Product Rate Plan Charge Key in Zuora Billing.
* Introduced method `update_product_rate_plan_charge_finance_information_with_http_info` for updating finance information with additional HTTP response details.

## refunds_api
* Renamed parameters `itempartid` to `item_part_id` and `refundpartid` to `refund_part_id` across multiple methods. Developers will need to update their code to use the new parameter names.
* Updated resource paths to use `itemPartId` and `refundPartId` instead of `itempartid` and `refundpartid`. This change affects API endpoint paths and requires developers to update their API calls accordingly.

## taxation_items_api
* Updated resource path from `/v1/taxationitems/{id}` to `/v1/taxation-items/{id}` for DELETE, GET, and PUT methods. This change requires developers to update their API endpoint paths to ensure compatibility.

## models/__init__
* Added AttachInvoiceScheduleRequest model.
* Added CompareTemplateResponse model.
* Added Condition model.
* Added CreateDeploymentTemplateRequest model.
* Added CreateOmniChannelSubscriptionRequest and CreateOmniChannelSubscriptionResponse models.
* Added CreateOrderResult model.
* Added CreatePaymentPredebitNotifyRequest and CreatePaymentPredebitNotifyResponse models.
* Added DeleteOrderAsyncResponse model.
* Added DeploymentResponse, DeploymentTemplate, and DeploymentTemplatesResponse models.
* Added DetachInvoiceScheduleRequest model.
* Added ExpandedCreditTaxationItem, ExpandedDebitTaxationItem, ExpandedInvoiceSchedule, and ExpandedInvoiceScheduleItem models.
* Added ExpandedPaymentScheduleItemPayment model.
* Added ExpandedRatingDetail model.
* Added GetAsyncCreateOrderJobResponse, GetAsyncOrderJobResponseResult, and GetAsyncPreviewOrderJobResponse models.
* Added GetDataLabelingJobResponse and GetDataLabelingJobResponseProgress models.
* Added GetOmniChannelSubscriptionResponse model.
* Added MigrateTenantSettingsRequest and MigrateTenantSettingsResponse models.
* Added OmniChannelAccountData model.
* Added OrderDeltaQty model.
* Added PaymentMethodCardBinInfoCardClass, PaymentMethodCardBinInfoProductType, PaymentMethodRequestTokens, and PaymentMethodResponseCardBinInfo models.
* Added PaymentProfile model.
* Added ProductRatePlanChargeFinanceInformation model.
* Added QueryInvoiceSchedulesResponse and QueryRatingDetailsResponse models.
* Added RetrieveDeploymentResponse and related models.
* Added RevertDeploymentResponse model.
* Added SettingSourceComponent model.
* Added SubmitDataLabelingJobRequest and SubmitDataLabelingJobResponse models.
* Added TransferContactRequest model.
* Added WriteOffOptions, WriteOffResultTransaction, and WriteOffResults models.
* Removed AsyncOrderJobResult model.
* Removed AsyncOrderResultSubscriptionStatus and AsyncOrderResultSubscriptions models.
* Removed CompareSchemaInfoResponse model.
* Removed CreateTemplateRequestContent model.
* Removed TemplateDetailResponse, TemplateMigrationClientRequest, and TemplateResponse models.

## async_order_job_result
* The class AsyncOrderJobResult has been removed entirely, which will break any code relying on this class.

## async_order_result_subscription_status
* The file async_order_result_subscription_status has been removed, which may cause compatibility issues for developers relying on this file.

## async_order_result_subscriptions

* The entire AsyncOrderResultSubscriptions model has been removed, which will break any code relying on this model.

## bill_run_filter

* Added `condition` field to support additional filtering logic.
* Introduced `object_type` field with validation for enum values (`Account`, `Subscription`, `RatePlanCharge`).

## billing_options

* Added a new field `charge_type_to_exclude` to the BillingOptions model, allowing developers to specify types of charges to be excluded from billing document generation.
## bulk_pdf_generation_job_request
* Added a new optional field `ignoreArchivedFiles` to control whether to skip archived PDF files in the output. Setting it to true will skip archived files, while setting it to false will throw an error if archived files are encountered. The default value is false.

## charge_override

* Added `taxable` field to indicate if a charge is taxable. If set to true, `taxCode` and `taxMode` are required.
* Introduced `estimatedStartDate` field for charges, available when the Pending Charge Flexibility feature is enabled.

## charge_tier

* Added `originalListPrice` field to the ChargeTier model, allowing developers to access the original list price of a product or service.
## charge_update
* Added `estimated_start_date` field to the ChargeUpdate model, allowing developers to specify an estimated start date for charges when the Pending Charge Flexibility feature is enabled.
## compare_schema_info_response
* The CompareSchemaInfoResponse class has been removed entirely, which will break any code relying on this class.
## create_account_payment_method
* Added `accountMaskNumber` field to the CreateAccountPaymentMethod model, allowing developers to handle masked account numbers for payment methods.

## create_batch_query_job_request
* The `version` field type has changed from `Optional[Union[StrictFloat, StrictInt]]` to `Optional[StrictStr]`. This may require developers to update their code to ensure compatibility with the new type.

## create_batch_query_job_response
* The `version` field type has changed from `Optional[Union[StrictFloat, StrictInt]]` to `Optional[StrictStr]`. This may require developers to update their code to handle version values as strings instead of numbers.

## create_batch_query_response
* The type of `record_count` field has changed from Optional[StrictStr] to Optional[Union[StrictFloat, StrictInt]]. This may require developers to update their code to handle numeric types instead of strings for this field.

## create_order_charge_update
* Added `estimated_start_date` field to the CreateOrderChargeUpdate model, allowing developers to specify the estimated start date of a charge when the charge is changed through related order actions. This feature is available when the Pending Charge Flexibility feature is enabled.

## create_order_create_subscription
* Added `invoiceOwnerAccountNumber` field to specify the account number that will own the invoice.
* Introduced `uniqueToken` field to set relatedSubscriptionNumber in OLI within the same order, ensuring uniqueness for multiple create subscription order actions.

## create_order_order_line_item
* Added a new optional field `uniqueToken` to the CreateOrderOrderLineItem model. This field allows setting the relatedSubscriptionNumber in OLI within the same order. The unique token should be a valid value belonging to any of the create sub-order actions within the same order.

## create_order_response

* The `status` field type has changed from `Optional[StrictStr]` to `Optional[OrderStatus]`. This may require developers to update their code to handle the new `OrderStatus` type.

## create_payment_method_bank_transfer
* Added a new optional field `accountMaskNumber` to the CreatePaymentMethodBankTransfer model, allowing developers to specify a masked account number for the payment method.

## create_payment_method_request
* Added `accountMaskNumber` field to store the masked account number of the payment method.
* Introduced `tokenize` field to specify whether to tokenize the payment method.
* Added `tokens` field of type `PaymentMethodRequestTokens` to handle token-related information.

## create_payment_session_request
* Added a new optional field `gatewayOptions` to the `CreatePaymentSessionRequest` model, allowing developers to specify additional options for the payment gateway.
## create_refundwith_auto_unapply
* Added `write_off` field to indicate whether to write off a document.
* Introduced `write_off_options` field for specifying write-off options.
## create_template_request_content
* The entire CreateTemplateRequestContent class has been removed, which will break any code relying on this class.
## credit_memo
* Added `tax_auto_calculation` field to the CreditMemo model, allowing automatic tax calculation for credit memos.
## credit_memo_response
* Added `taxAutoCalculation` field to the CreditMemoResponse model, allowing automatic tax calculation in credit memos.
## delete_batch_query_job_response
* Changed the type of the `version` field from Optional[Union[StrictFloat, StrictInt]] to Optional[StrictStr]. This may require developers to update their code if they were using numeric types for the `version` field.
## delete_batch_query_response
* The type of `record_count` field has been changed from Optional[StrictStr] to Optional[Union[StrictFloat, StrictInt]]. This may require developers to update their code to handle numeric types instead of strings for this field.
## e_invoice_status
* Added a new status `CONDITIONALSUCCESS` to the EInvoiceStatus enum, allowing for more granular status reporting.
## expanded_account
* Added `ship_to_id` and `ship_to` fields to the ExpandedAccount model, allowing developers to specify and retrieve shipping information.
## expanded_contact
* Added new boolean fields: `asBillTo`, `asSoldTo`, and `asShipTo` to the ExpandedContact model.
## expanded_credit_memo
* Changed the type of `revenueImpacting` from Optional[StrictInt] to Optional[StrictStr]. This may require developers to update their code to handle the new type.
* Added a new field `shipToContactSnapshotId` to the ExpandedCreditMemo model.
## expanded_credit_memo_item
* Changed the type of `revenue_impacting` from Optional[StrictInt] to Optional[StrictStr], which may require developers to update their code to handle this field as a string instead of an integer.
* Added `item_ship_to_contact_id` field to the ExpandedCreditMemoItem model.
* Added `ship_to_contact_snapshot_id` field to the ExpandedCreditMemoItem model.
* Added `subscription_owner_id` field to the ExpandedCreditMemoItem model.
* Added `subscription_owner` field to the ExpandedCreditMemoItem model, which is an instance of ExpandedAccount.
* Added `credit_taxation_items` field to the ExpandedCreditMemoItem model, which is a list of ExpandedCreditTaxationItem instances.
## expanded_debit_memo
* Added `shipToContactSnapshotId` field to the ExpandedDebitMemo model.
* Added `soldToContactId` field to the ExpandedDebitMemo model.
## expanded_debit_memo_item
* Added `item_ship_to_contact_id` and `ship_to_contact_snapshot_id` fields to the ExpandedDebitMemoItem model.
* Introduced `subscription_owner_id` and `subscription_owner` fields to the ExpandedDebitMemoItem model.
* Included `debit_taxation_items` field, which is a list of ExpandedDebitTaxationItem, in the ExpandedDebitMemoItem model.

## expanded_invoice
* Added new optional fields `ship_to_contact_id` and `ship_to_contact_snapshot_id` to the ExpandedInvoice model.

## expanded_invoice_item
* Added new field `itemShipToContactId` to track the contact ID for shipping items.
* Added new field `shipToContactSnapshotId` to track the snapshot ID for shipping contact.
* Added new field `shipToContactId` to track the contact ID for shipping.
* Added new field `subscriptionOwnerId` to track the owner ID of the subscription.
* Added new field `subscriptionOwner` to represent the expanded account of the subscription owner.

## expanded_order_action
* Added `subscription_number` field to the ExpandedOrderAction model.
* Added `ship_to_contact_id` field to the ExpandedOrderAction model.
* Added `clearing_existing_ship_to_contact` field to the ExpandedOrderAction model.

## expanded_order_line_item
* Added new optional fields: `sequenceSetId`, `paymentTerm`, and `invoiceTemplateId` to the ExpandedOrderLineItem model.
* Introduced new optional fields: `shipToId` and `shipToSnapshotId` to the ExpandedOrderLineItem model.

## expanded_orders
* Added `isScheduled` field to the ExpandedOrders model.
* Added `cancelReason` field to the ExpandedOrders model.

## expanded_payment
* Added a new optional field `payment_schedule_item_payments` to the ExpandedPayment model, allowing developers to include payment schedule item payments in their payment data.

## expanded_payment_schedule_item
* Added a new field `paymentScheduleItemPayments` to the `ExpandedPaymentScheduleItem` model, allowing for a list of `ExpandedPaymentScheduleItemPayment` objects.

## expanded_processed_usage
* Changed the type of `billing_period_end_date` and `billing_period_start_date` from `Optional[StrictStr]` to `Optional[date]`. This may require developers to update their code to handle date objects instead of strings.

## expanded_rate_plan_charge
* Added new optional fields `estimatedStartDate` and `estimatedEndDate` to the ExpandedRatePlanCharge model.
## expanded_subscription
* Added new optional fields `ship_to_contact_id` and `ship_to_contact_snapshot_id` to the ExpandedSubscription model.
## get_accounting_period_all_of_fie_ids_response
* Added a new field `accountsReceivableDebitMemoAgingDetailExportFileId` to the GetAccountingPeriodAllOfFieIdsResponse model, allowing retrieval of the file ID for the Accounts Receivable Aging Debit Memo Detail report.
## get_async_order_job_response
* The `result` field type has changed from `AsyncOrderJobResult` to `GetAsyncOrderJobResponseResult`.
* The `status` field type has changed from `StrictStr` to `JobStatus`.
## get_batch_query_job_response
* The `version` field type has changed from `Optional[Union[StrictFloat, StrictInt]]` to `Optional[StrictStr]`. This change may require developers to update their code to handle version values as strings instead of numbers.
## get_batch_query_response
* The type of `record_count` field has changed from `Optional[StrictStr]` to `Optional[Union[StrictFloat, StrictInt]]`. This may require developers to update their code to handle numeric types instead of strings.
## get_bulk_pdf_generation_job_response
* Added `skippedDocuments` field to the GetBulkPdfGenerationJobResponse model, which includes an array of objects containing billing document types and their IDs that were skipped during execution.
## get_charge_override
* Added `estimated_start_date` field for charges with Pending Charge Flexibility enabled.
* Introduced `taxable` field to indicate if a charge is taxable, available with Taxation enabled.
* Added `tax_mode` and `tax_code` fields for charges, available with Taxation enabled.
## get_custom_exchange_rates_type
* Added a new optional field `rateSetName` of type StrictStr to the GetCustomExchangeRatesType model. This field represents the name of the rate set configured in the Finance Manage Currency Conversion settings for the Multi-Org feature.
## get_subscription_rate_plan_charges_with_all_segments
* Added new fields: `estimatedEndDate`, `estimatedStartDate`, `taxable`, `taxCode`, and `taxMode` to the GetSubscriptionRatePlanChargesWithAllSegments model.

## interval_pricing_tier
* Added a new field `originalListPrice` to the `IntervalPricingTier` model, which represents the original list price of a product or service.
## migration_client_response
* The entire MigrationClientResponse model has been removed, which will cause compatibility issues for any code relying on this model.
## order_action_create_subscription
* Added `invoiceOwnerAccountNumber` field to specify the account number that will own the invoice.
* Introduced `paymentProfile` field to associate a payment profile with the subscription.
## order_action_owner_transfer
* Added a new optional field `payment_profile` of type `PaymentProfile` to the `OrderActionOwnerTransfer` model.
## order_action_rate_plan_amendment
* Added `customFields` attribute to the OrderActionRatePlanAmendment model, allowing developers to include custom fields in amendments.
## order_action_rate_plan_charge_override
* Added `estimatedStartDate` field to the OrderActionRatePlanChargeOverride model. This field is available if the Pending Charge Flexibility feature is enabled and represents the estimated start date of the charge.
## order_action_rate_plan_charge_update
* Added `estimatedStartDate` field to the OrderActionRatePlanChargeUpdate model, which is available if the Pending Charge Flexibility feature is enabled. This field represents the estimated start date of the charge.
## order_action_terms_and_conditions
* Added a new optional field `payment_profile` of type `PaymentProfile` to the `OrderActionTermsAndConditions` model.
## payment_method_response
* Added a new optional field `cardBinInfo` to the `PaymentMethodResponse` model, which includes additional card information.
* Updated the `to_dict()` method to include `cardBinInfo` if present, allowing for more detailed serialization of payment method data.
* Enhanced the `from_dict()` method to handle the new `cardBinInfo` field, enabling deserialization of this additional data.
## payment_run
* The type of `organization_labels` field has changed from Optional[StrictStr] to Optional[List[OrganizationLabel]]. This may require developers to update their code to handle a list of OrganizationLabel objects instead of a single string.
* Added detailed handling for `organization_labels` field, allowing it to store multiple organization labels as a list of OrganizationLabel objects. Each item in the list can be converted to a dictionary using the `to_dict()` method.
## payment_run_response
* The `organization_labels` field in `PaymentRunResponse` has been updated to accept a list of `OrganizationLabel` objects instead of a single string. This change allows for more detailed information about the organizations associated with a payment run.
## preview_charge_metrics
* Added a new field `isPending` of type StrictBool to the PreviewChargeMetrics model.

## preview_options
* Added a new field `charge_type_to_exclude` to the PreviewOptions model, allowing developers to specify charge types to exclude from the forecast run.

## preview_order_charge_override

* Added `estimated_start_date` field to specify the estimated start date of the charge.
* Introduced `tax_code`, `tax_mode`, and `taxable` fields to handle tax-related information for charges.

## preview_order_charge_update
* Added `estimated_start_date` field to PreviewOrderChargeUpdate model, which provides the estimated start date of the charge. This field is available when the Pending Charge Flexibility feature is enabled.
## preview_order_create_subscription
* Added `invoiceOwnerAccountNumber` field to specify the account number of an existing account that will own the invoice.
## preview_order_result_delta_metrics
* Added support for `orderDeltaQty` in the PreviewOrderResultDeltaMetrics model, allowing developers to handle quantity changes in orders.
## rate_plan_charge_segment
* Added new fields: estimatedEndDate, estimatedStartDate, taxable, taxCode, and taxMode to the RatePlanChargeSegment model.
## rate_plan_charge_segment_info
* Added new fields: estimatedEndDate, estimatedStartDate, taxable, taxCode, and taxMode to RatePlanChargeSegmentInfo class.
## rate_plan_charge_tier
* Added `originalListPrice` field to the RatePlanChargeTier model, allowing developers to access the original list price of a product or service.

## refund
* Added a new optional field `write_off_results` of type `WriteOffResults` to the `Refund` model.

## refund_response
* Added a new optional field `write_off_results` of type WriteOffResults to the RefundResponse model.

## setting_source_component_response
* The entire SettingSourceComponentResponse class has been removed, which will break any code relying on this class.

## template_detail_response
* The entire TemplateDetailResponse class has been removed, which will break any code relying on this class.

## template_migration_client_request

* The class TemplateMigrationClientRequest has been removed entirely, which will break any code relying on it.
## template_response
* The entire TemplateResponse class has been removed, which includes all its methods and properties. This will break any code that relies on this class.

## update_product_rate_plan_charge_request
* Changed the type of `product_rate_plan_charge_tier_data` from a list of ProductRatePlanChargeTier to a single ProductRatePlanChargeTierData object. This requires developers to update their code to handle a single object instead of a list.

## write_off_invoice_request
* Added a new optional field `tax_auto_calculation` of type `StrictBool` to the `WriteOffInvoiceRequest` model, allowing automatic tax calculation in the credit memo.
