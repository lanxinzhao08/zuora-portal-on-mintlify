---
title: "Python client library 3.14.0 changelog"
sidebarTitle: "3.14.0"
---
## zuora\_sdk/\_\_init\_\_

* Removed import for AssociationRule, ExpandedDailyConsumptionSummary, ExpandedInvoiceSchedule, ExpandedInvoiceScheduleBooking, ExpandedInvoiceScheduleItem, ExpandedPrepaidBalance, ExpandedPrepaidBalanceFund, ExpandedPrepaidBalanceTransaction, ExpandedValidityPeriodSummary, QueryDailyConsumptionSummarysResponse, QueryInvoiceSchedulesResponse, QueryPrepaidBalanceFundsResponse, QueryPrepaidBalanceTransactionsResponse, QueryPrepaidBalancesResponse, and QueryValidityPeriodSummarysResponse.
* Added import for BulkPaymentOptionItem, BulkPaymentProfileRequest, BulkPaymentProfileResponse, BulkPaymentProfileResponseReasonsInner, ChargeRemoval, CreateHostedPageRequest, CreateHostedPageResponse, ExpandedCommitmentAssociatedAccount, ExpandedCommitmentAssociatedItem, ExpandedCommitmentSchedule, ExpandedCommitmentTransaction, QueryCommitmentAssociatedAccountsResponse, QueryCommitmentAssociatedItemsResponse, QueryCommitmentSchedulesResponse, and QueryCommitmentTransactionsResponse.
* Renamed import from GetDataLabelingJobResponseProgress to GetDataLabelingJobResponseAllOfProgress.

## credit\_memos\_api

* Added a new optional parameter `should_include_acknowledged` to fetch notifications marked as acknowledged along with unacknowledged ones.

## custom\_object\_records\_api

* The `ids` parameter type has changed from `Optional[StrictStr]` to `Optional[List[StrictStr]]`. This requires developers to update their code to pass a list of strings instead of a single string.
* Added support for multiple `ids` in query parameters by changing the collection format to `multi`.

## debit\_memos\_api

* Added a new optional parameter `should_include_acknowledged` to fetch notifications marked as acknowledged along with unacknowledged ones.

## hosted\_pages\_api

* Added `create_hosted_page` method to create a new hosted payment page with customizable configurations.
* Added `create_hosted_page_with_http_info` method to create a new hosted payment page and retrieve HTTP response information.

## invoices\_api

* Added a new optional parameter `should_include_acknowledged` to fetch notifications marked as acknowledged along with unacknowledged ones.

## object\_queries\_api

* Removed parameter `include_null_fields` from several methods.
* Added new models: ExpandedCommitmentAssociatedAccount, ExpandedCommitmentAssociatedItem, ExpandedCommitmentSchedule, ExpandedCommitmentTransaction.
* Added new response models: QueryCommitmentAssociatedAccountsResponse, QueryCommitmentAssociatedItemsResponse, QueryCommitmentSchedulesResponse, QueryCommitmentTransactionsResponse.
* Added support for querying custom objects with the method `query_custom_objects`.
* Added method `query_payment_schedule_items_with_http_info` for querying payment schedule items with filters, expands, and sort capabilities.
* Added method `query_payment_schedules` for querying payment schedules with filters, expands, and sort capabilities.
* Added method `query_payments` for querying payments with filters, expands, and sort capabilities.

## payment\_schedules\_api

* Added `delete_payment_schedule` method to delete a payment schedule by its key.
* Added `delete_payment_schedule_with_http_info` method to delete a payment schedule with additional HTTP info.
* Added `delete_payment_schedule_item` method to delete a payment schedule item by its ID.
* Added `delete_payment_schedule_item_with_http_info` method to delete a payment schedule item with additional HTTP info.

## payments\_api

* Added `bulk_upsert_payment_profiles` method to bulk create or update payment profiles, allowing up to 50 profiles in a single call.
* Introduced `bulk_upsert_payment_profiles_with_http_info` method for bulk operations with detailed HTTP response information.

## account\_summary\_response

* Added new fields: `processId`, `requestId`, `reasons`, and `success` to AccountSummaryResponse model.

## billing\_document\_query\_response\_element

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Modified `success` field to default to `true` if not explicitly set.

## cancel\_authorization\_response

* Added `process_id` and `request_id` fields to the CancelAuthorizationResponse model.
* Introduced `reasons` field, which is a list of FailedReason objects, to provide detailed failure reasons.
* Default value for `success` field is now set to True if not provided.

## cancel\_subscription\_response

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of failed reasons using the `FailedReason` model.
* Modified `success` field to default to True, indicating the call succeeded unless specified otherwise.

## commitment\_base\_attributes

* Removed the `association_rules` attribute from the CommitmentBaseAttributes model. This may require updates to code that previously utilized this attribute.

## commitment\_input

* Removed the `association_rules` field from the CommitmentInput model, which may require updates to code that relied on this field.
* Changed `period_alignment_option` to be optional with a default value of PeriodAlignmentOptionEnum.COMMITMENTSTARTDATE. This may affect code that assumed this field was mandatory.

## commitment\_schedule\_attributes

* Default value for `amountBase` is now set to `AmountBaseEnum.COMMITMENTPERIOD` if not provided.
* Default value for `periodType` is now set to `PeriodTypeEnum.MONTH` if not provided.

## commitment\_schedule\_input

* Default value for `amountBase` is now set to `AmountBaseEnum.COMMITMENTPERIOD` if not provided.
* Default value for `periodType` is now set to `PeriodTypeEnum.MONTH` if not provided.

## commitment\_schedule\_output

* Default values have been added for `amountBase` and `periodType`. `amountBase` now defaults to `AmountBaseEnum.COMMITMENTPERIOD` and `periodType` defaults to `PeriodTypeEnum.MONTH`.

## create\_accounting\_code\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of `FailedReason` objects, providing more detailed error information.
* Default value for `success` field is now set to True if not explicitly provided.

## create\_accounting\_period\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Introduced `reasons` field to provide a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True if not provided.

## create\_billing\_document\_files\_deletion\_job\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to provide detailed failure reasons.
* Default value for `success` field is now set to True.

## create\_billing\_preview\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to provide a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to true.

## create\_invoice\_collect\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to provide detailed failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## create\_journal\_entry\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## create\_journal\_run\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Introduced `reasons` field to provide a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True if not provided.

## create\_mass\_update\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Introduced `reasons` field to capture a list of failed reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## create\_order\_rate\_plan\_update

* Added `chargeOverrides` field to support specifying charges to be added or modified in the rate plan.
* Added `chargeRemovals` field to support specifying charges to be removed from the bundle rate plan.

## create\_order\_update\_product

* Added `chargeOverrides` field to support specifying charges to be added or modified in the rate plan.
* Added `chargeRemovals` field to support specifying charges to be removed from the bundle rate plan.

## create\_payment\_method\_decryption\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Introduced `reasons` field to provide detailed failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True if not provided.

## create\_payment\_predebit\_notify\_response

* Added new fields: `process_id`, `request_id`, `reasons`, and `success` to the CreatePaymentPredebitNotifyResponse model.
* Enhanced the `to_dict` method to include a custom serialization for the `reasons` field.

## create\_payment\_run\_request

* Added `advancedFilter` field to the CreatePaymentRunRequest model, allowing for advanced filtering of invoices when `useCustomPaymentMethods` is enabled.

## create\_payment\_schedules\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to provide detailed failure reasons.
* Default value for `success` field is now set to True.

## create\_sequence\_sets\_response

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## create\_subscription\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Modified `success` field to default to True, indicating the success status of the call.

## create\_update\_stored\_credential\_profile\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Introduced `reasons` field to capture a list of failure reasons.
* Default value for `success` field is now set to True.

## credit\_memos\_response

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of `FailedReason` objects, providing more detailed error information.
* Default value for `success` field is now set to True, indicating successful operation by default.

## decrypt\_rsa\_signature\_response

* Added new fields: `process_id`, `request_id`, and `reasons` to the DecryptRSASignatureResponse model.
* Enhanced the `to_dict` method to include a custom serialization for the `reasons` field.

## delete\_order\_async\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True if not provided.

## expanded\_commitment

* Added new fields: `start_date`, `end_date`, `total_amount`, `account_id`, `period_alignment_option`, and `specific_period_alignment_date` to the ExpandedCommitment model.
* Introduced associations with ExpandedAccount, ExpandedCommitmentSchedule, ExpandedCommitmentAssociatedAccount, and ExpandedCommitmentAssociatedItem models.
* Enhanced `to_dict` method to include new fields and associations, providing more detailed serialization.
* Updated `from_dict` method to handle deserialization of new fields and associated models.

## expanded\_commitment\_period

* Added new optional fields: `status`, `commitment_number`, `schedule_id`, `schedule_number`, `commitment_type`, `commitment_priority`, `account_id`, `is_prorated`, `billed_total_spending`, `account`, and `commitment_transactions`.
* Integration with ExpandedAccount and ExpandedCommitmentTransaction models, allowing for nested data structures.

## expanded\_credit\_memo\_item

* Removed `invoice_schedule` and `invoice_schedule_item` fields from the ExpandedCreditMemoItem model.

## expanded\_invoice\_item

* Removed `invoice_schedule` and `invoice_schedule_item` fields from the ExpandedInvoiceItem model.
* Removed import statements for ExpandedInvoiceSchedule and ExpandedInvoiceScheduleItem.

## expanded\_rate\_plan\_charge

* Added `is_unbilled` field to the ExpandedRatePlanCharge model.
* Added `is_allocation_eligible` field to the ExpandedRatePlanCharge model.

## expanded\_subscription

* Added `sold_to_contact` field to the ExpandedSubscription model, allowing developers to specify and retrieve the sold-to contact information.

## get\_accounting\_code\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to provide a list of failure reasons using the `FailedReason` model.
* Updated `success` field to default to True, indicating the success status of the call.

## get\_accounting\_codes\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Modified `success` field to default to true if not explicitly set.

## get\_accounting\_period\_response

* Added `processId` field to track the process handling the operation.
* Added `requestId` field for unique request identification.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Enhanced `success` field to default to True, indicating the success of the call.

## get\_accounting\_periods\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## get\_async\_order\_job\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True, indicating the call succeeded unless specified otherwise.

## get\_billing\_document\_files\_deletion\_job\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to provide detailed failure reasons using the FailedReason model.
* Default value for `success` field is now set to True, indicating successful operation by default.

## get\_billing\_preview\_run\_response

* Added `processId` field to track the process handling the operation.
* Added `requestId` field for unique request identification.
* Added `reasons` field to capture failure reasons using the `FailedReason` model.
* Added `success` field to indicate if the call succeeded.

## get\_bulk\_pdf\_generation\_job\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the new `FailedReason` model.
* Modified `success` field to default to True, indicating the call's success status.

## get\_callout\_history\_vos\_type

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of `FailedReason` objects.
* Default value for `success` field is now set to `True`.

## get\_commitment\_output

* Removed the `association_rules` field from the GetCommitmentOutput model, which may affect any code relying on this field.
* Changed the default value of `period_alignment_option` to PeriodAlignmentOptionEnum.COMMITMENTSTARTDATE if not provided.

## get\_credit\_memo\_item\_parts\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of `FailedReason` objects, providing more detailed error information.
* Default value for `success` field is now set to `True`.

## get\_credit\_memo\_parts\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failed reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## get\_credit\_memo\_pdf\_status\_batch\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## get\_custom\_exchange\_rates\_type

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Modified `success` field to default to `True` if not explicitly set.

## get\_data\_labeling\_job\_response

* The `progress` field type has changed from GetDataLabelingJobResponseProgress to GetDataLabelingJobResponseAllOfProgress.
* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Added `reasons` field to capture a list of FailedReason objects.
* The `success` field now defaults to True if not specified.

## get\_debit\_memo\_application\_parts\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Modified `success` field to default to True if not explicitly set.

## get\_debit\_memo\_pdf\_status\_batch\_response

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons.
* Default value for `success` field is now set to True.

## get\_email\_history\_vos\_type

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## get\_invoice\_application\_parts\_request

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Modified `success` field to default to true, indicating the call succeeded unless specified otherwise.

## get\_invoice\_pdf\_status\_batch\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## get\_journal\_entries\_in\_journal\_run\_response

* Added `processId` and `requestId` fields to the response model for tracking process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Modified `success` field to default to `true` if not explicitly set.

## get\_journal\_entry\_detail\_response

* Added `processId` field to track the ID of the process handling the operation.
* Added `requestId` field for unique request identification.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Added `success` field to indicate whether the call succeeded, defaulting to true.

## get\_mass\_update\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Modified `success` field to default to true, indicating the success of the call.

## get\_payment\_item\_part\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Modified `success` field default value to True, indicating the call succeeded by default.

## get\_payment\_item\_parts\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True, indicating successful processing by default.

## get\_payment\_part\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field which is a list of `FailedReason` objects to provide detailed failure reasons.
* Default value for `success` field changed to True.

## get\_payment\_parts\_response

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## get\_payment\_run\_data\_array\_response

* Added `process_id` and `request_id` fields to the GetPaymentRunDataArrayResponse model, allowing developers to access process and request identifiers.
* Introduced `reasons` field as a list of FailedReason objects, providing detailed failure reasons.
* Default value for `success` field is now set to True, indicating successful processing by default.

## get\_payment\_run\_summary\_response

* Added `process_id` and `request_id` fields to the GetPaymentRunSummaryResponse model, allowing developers to access process and request identifiers.
* Introduced `reasons` field, which is a list of FailedReason objects, providing detailed failure reasons.
* Modified `success` field to default to True, indicating the success status of the call.

## get\_payment\_runs\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Introduced `reasons` field to capture a list of failure reasons.
* Modified `success` field to default to True, indicating the call succeeded unless specified otherwise.

## get\_payment\_schedule\_statistic\_response

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## get\_product\_rate\_plan\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Included `success` field to indicate if the request was processed successfully.

## get\_product\_rate\_plans\_by\_external\_id\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## get\_product\_rate\_plans\_by\_product\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## get\_refund\_item\_parts\_response

* Added `process_id` and `request_id` fields to the GetRefundItemPartsResponse model, providing additional context for operations.
* Introduced `reasons` field, which is a list of FailedReason objects, to provide detailed failure reasons.
* Modified `success` field default value to True, indicating successful processing by default.

## get\_refund\_parts\_response

* Added `process_id` and `request_id` fields to the GetRefundPartsResponse model.
* Introduced `reasons` field which is a list of FailedReason objects.
* The `success` field now defaults to True if not provided.

## get\_refunds\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failed reasons.
* Default value for `success` field is now set to True.

## get\_sequence\_sets\_response

* Added `process_id` and `request_id` fields to the GetSequenceSetsResponse model.
* Introduced `reasons` field, which is a list of FailedReason objects, to the GetSequenceSetsResponse model.
* Default value for `success` field is now set to True if not provided.

## get\_subscription\_rate\_plan

* Added `product_rate_plan_type` field to specify the type of the product rate plan.
* Added `original_rate_plan_id` field to capture the original rate plan ID.

## get\_subscription\_rate\_plan\_charges\_with\_all\_segments

* Added `isLastSegment` field to indicate if the charge segment is the last segment.
* Added `optional` field to indicate if the charge is optional in a bundle rate plan.
* Added `status` field with possible values `removeDirectly` and `deleteWithRatePlan`.

## get\_subscriptions\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True, indicating successful processing by default.

## get\_taxation\_items\_response

* Added `processId` and `requestId` fields to the GetTaxationItemsResponse model, providing additional identifiers for process and request tracking.
* Introduced `reasons` field, which is a list of FailedReason objects, allowing for detailed failure information.

## get\_usage\_rate\_detail\_request

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field, which is a list of `FailedReason` objects, to provide detailed failure reasons.
* Default value for `success` field is now set to True, indicating the call succeeded unless specified otherwise.

## get\_usages\_by\_account\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Introduced `reasons` field to capture failure reasons.
* Default value for `success` field is now set to True.

## hosted\_pages\_response

* Added new fields `processId` and `requestId` to the HostedPagesResponse model, providing additional identifiers for processes and requests.
* Introduced a new `reasons` field in the HostedPagesResponse model, which is a list of FailedReason objects, allowing for detailed error reporting.
* Changed the default value of the `success` field to True, indicating that requests are assumed successful unless specified otherwise.

## invoice\_schedule

* Added `organizationLabel` as a new optional field in the InvoiceSchedule model.

## invoice\_schedule\_item

* Added `organizationLabel` field to the InvoiceScheduleItem model, allowing developers to specify an organization label.

## invoice\_schedule\_response

* Added `organizationLabel` as a new optional field in the InvoiceScheduleResponse model.

## order\_action\_update\_product

* Added `chargeRemovals` field to support removal of charges in the `updateProduct` order action.
* Added `chargeOverrides` field to allow adding or modifying charges in the rate plan for the `updateProduct` order action.

## payment\_gateways\_response

* Added `process_id` and `request_id` fields to the PaymentGatewaysResponse model.
* Introduced `reasons` field, which is a list of FailedReason objects, to the PaymentGatewaysResponse model.
* Modified `success` field to default to True if not provided.

## payment\_method\_updater\_instances\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of `FailedReason` objects, providing more detailed error information.

## payment\_run

* Added `advanced_filter` field to the PaymentRun model, allowing for advanced filtering of invoices when `useCustomPaymentMethods` is enabled.

## payment\_run\_response

* Added `advanced_filter` field to the PaymentRunResponse model, allowing for advanced filtering of invoices when `useCustomPaymentMethods` is enabled.

## preview\_order\_rate\_plan\_update

* Added `chargeOverrides` field to support specifying charge overrides for the UpdateProduct order action.
* Added `chargeRemovals` field to support specifying charge removals for the UpdateProduct order action.

## preview\_subscription\_response

* Added new fields: `process_id`, `request_id`, `reasons`, and `success` to the PreviewSubscriptionResponse model.

## put\_revpro\_acc\_code\_response

* Added `process_id` and `request_id` fields to the PutRevproAccCodeResponse model for tracking process and request identifiers.
* Introduced `reasons` field in the PutRevproAccCodeResponse model to provide detailed failure reasons using the FailedReason model.

## rate\_plan\_charge\_segment

* Added `isLastSegment` field to indicate if the charge segment is the last segment.
* Added `optional` field to indicate if the charge is optional in a bundle rate plan.
* Added `status` field to represent the status of the charge with possible values `removeDirectly` and `deleteWithRatePlan`.

## rate\_plan\_charge\_segment\_info

* Added `isLastSegment` field to indicate if the charge segment is the last segment.
* Added `optional` field to indicate if the charge is optional in a bundle rate plan.
* Added `status` field to represent the status of the charge with possible values `removeDirectly` and `deleteWithRatePlan`.

## rate\_plan\_update

* Added `charge_removals` field to support specifying charges to be removed from the bundle rate plan.
* Added `charge_overrides` field to support specifying charges to be added or modified in the rate plan.

## regenerate\_rev\_rec\_events\_response

* Added `request_id` field to provide a unique request identifier.
* Introduced `reasons` field, which is a list of `FailedReason` objects, to provide detailed failure reasons.

## regenerate\_transaction\_object\_response

* Added `request_id` field to provide a unique request identifier.
* Introduced `reasons` field which is a list of `FailedReason` objects to provide detailed failure reasons.
* Changed default value of `success` field to True.

## renew\_subscription\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the FailedReason model.
* Default value for `success` field is now set to True if not provided.

## resume\_subscription\_response

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True if not provided.

## retry\_payment\_schedule\_item\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to provide a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## rsa\_signature\_response

* Added `processId` and `requestId` fields to the RSASignatureResponse model.
* Introduced `reasons` field, which is a list of FailedReason objects, to provide detailed failure reasons.
* Default value for `success` field is now set to True if not provided.

## stored\_credential\_profiles\_response

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## submit\_data\_labeling\_job\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Introduced `reasons` field to capture a list of failure reasons.
* Default value for `success` field is now set to True.

## subscription\_rate\_plan

* Added `product_rate_plan_type` field to SubscriptionRatePlan model.
* Added `original_rate_plan_id` field to SubscriptionRatePlan model.

## suspend\_subscription\_response

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Added `success` field with a default value of True to indicate the success status of the call.

## update\_payment\_run\_request

* Added `advancedFilter` field to the UpdatePaymentRunRequest model, allowing for advanced filtering of invoices when `useCustomPaymentMethods` is enabled.

## update\_sequence\_set\_response

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of `FailedReason` objects, providing more detailed error information.

## update\_subscription\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Added `reasons` field to capture a list of failure reasons.
* Updated `success` field to default to True, indicating the call succeeded.

## upload\_file\_response

* Added `process_id` field to track the process handling the operation.
* Added `request_id` field for unique request identification.
* Introduced `reasons` field to provide detailed failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## upload\_usage\_file\_response

* Added `processId` and `requestId` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True.

## upsert\_create\_commitment\_input

* Removed `association_rules` field from UpsertCreateCommitmentInput model, which may affect any code relying on this field.
* Changed `period_alignment_option` field to be optional with a default value of PeriodAlignmentOptionEnum.COMMITMENTSTARTDATE.

## upsert\_create\_commitment\_schedule\_input

* Default value for `amountBase` is now set to `AmountBaseEnum.COMMITMENTPERIOD` if not provided.
* Default value for `periodType` is now set to `PeriodTypeEnum.MONTH` if not provided.

## verify\_payment\_method\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of failure reasons using the `FailedReason` model.
* Default value for `success` field is now set to True if not provided.

## write\_off\_invoice\_response

* Added `process_id` and `request_id` fields to track process and request identifiers.
* Introduced `reasons` field to capture a list of `FailedReason` objects.
* Default value for `success` field is now set to True.
