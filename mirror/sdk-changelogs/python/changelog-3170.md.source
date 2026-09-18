---
markdown:
  toc:
    hide: false
---

# Python client library 3.17.0 changelog

## \_\_init\_\_

* Removed BalanceTrackingApi import
* Removed CommitmentScheduleStatus import
* Removed CommitmentStatusInput import
* Added SummaryStatementsApi import
* Added CancellationPolicy import
* Added CommitmentCancellationPolicy import
* Added CommitmentSettlementType import
* Added ExpandedInformationalTaxationItem import
* Added OrderState import
* Added QueryInformationalTaxationItemsResponse import
* Added SettlementTypeEnum import
* Added SplitInvoiceItem import
* Added SplitInvoiceRequest import
* Added SplitInvoiceResponse import
* Added UnpostInvoiceResponse import
* Added UpdateDraftSummaryJournalEntryRequest import
* Added UpdateJournalEntryWorkflowRequest import
* Added UpsertCancelCommitmentInput import

## api/\_\_init\_\_

* Removed BalanceTrackingApi class
* Added SummaryStatementsApi class

## commitments\_api

* Added a new method `get_commitment_balance` to retrieve the balance for a specific commitment.
* Added a new method `get_commitment_balance_with_http_info` to retrieve the balance for a specific commitment with HTTP info.
* Introduced a new private method `_get_commitment_balance_serialize` to handle serialization for the `get_commitment_balance` method.

## invoices\_api

* Added new import for SplitInvoiceRequest and SplitInvoiceResponse.
* Added new import for UnpostInvoiceResponse.
* Added new method split\_invoice with parameters: invoice\_key, request, accept\_encoding, content\_encoding, authorization, zuora\_track\_id, zuora\_entity\_ids, zuora\_version, zuora\_org\_ids, \_request\_timeout, \_request\_auth, \_content\_type, \_headers, \_host\_index.
* Added new method split\_invoice\_with\_http\_info with parameters: invoice\_key, request, accept\_encoding, content\_encoding, authorization, zuora\_track\_id, zuora\_entity\_ids, zuora\_version, zuora\_org\_ids, \_request\_timeout, \_request\_auth, \_content\_type, \_headers, \_host\_index.
* Added new method \_split\_invoice\_serialize with parameters: invoice\_key, request, accept\_encoding, content\_encoding, authorization, zuora\_track\_id, zuora\_entity\_ids, zuora\_version, zuora\_org\_ids, \_request\_auth, \_content\_type, \_headers, \_host\_index.
* Added new method unpost\_invoice with parameters: invoice\_key, accept\_encoding, content\_encoding, authorization, zuora\_track\_id, zuora\_entity\_ids, zuora\_version, zuora\_org\_ids, \_request\_timeout, \_request\_auth, \_content\_type, \_headers, \_host\_index.
* Added new method unpost\_invoice\_with\_http\_info with parameters: invoice\_key, accept\_encoding, content\_encoding, authorization, zuora\_track\_id, zuora\_entity\_ids, zuora\_version, zuora\_org\_ids, \_request\_timeout, \_request\_auth, \_content\_type, \_headers, \_host\_index.
* Added new method \_unpost\_invoice\_serialize with parameters: invoice\_key, accept\_encoding, content\_encoding, authorization, zuora\_track\_id, zuora\_entity\_ids, zuora\_version, zuora\_org\_ids, \_request\_auth, \_content\_type, \_headers, \_host\_index.

## object\_queries\_api

* Added import for ExpandedInformationalTaxationItem.
* Added import for QueryInformationalTaxationItemsResponse.
* Added method query\_informational\_taxation\_item\_by\_key with various parameters and return type ExpandedInformationalTaxationItem.
* Added method query\_informational\_taxation\_item\_by\_key\_with\_http\_info with various parameters and return type ApiResponse[ExpandedInformationalTaxationItem].
* Added method query\_informational\_taxation\_items with various parameters and return type QueryInformationalTaxationItemsResponse.
* Added method query\_informational\_taxation\_items\_with\_http\_info with various parameters and return type ApiResponse[QueryInformationalTaxationItemsResponse].

## summary\_journal\_entries\_api

* Added new method approve\_summary\_journal\_entry to approve a manual journal entry that is currently in review.
* Added new method approve\_summary\_journal\_entry\_with\_http\_info to approve a manual journal entry with HTTP info.
* Added new method reject\_summary\_journal\_entry to reject a manual journal entry that is currently in review.
* Added new method reject\_summary\_journal\_entry\_with\_http\_info to reject a manual journal entry with HTTP info.
* Added new method return\_summary\_journal\_entry\_to\_draft to return a rejected manual journal entry to draft status.
* Added new method return\_summary\_journal\_entry\_to\_draft\_with\_http\_info to return a rejected manual journal entry to draft status with HTTP info.
* Added new method submit\_summary\_journal\_entry to submit a draft manual journal entry for review.
* Added new method submit\_summary\_journal\_entry\_with\_http\_info to submit a draft manual journal entry for review with HTTP info.
* Added new method update\_draft\_summary\_journal\_entry to update a draft manual journal entry.
* Added new method update\_draft\_summary\_journal\_entry\_with\_http\_info to update a draft manual journal entry with HTTP info.
* Added new import for UpdateDraftSummaryJournalEntryRequest.
* Added new import for UpdateJournalEntryWorkflowRequest.

## models/\_\_init\_\_

* Added new class CancellationPolicy
* Added new class CommitmentCancellationPolicy
* Added new class CommitmentSettlementType
* Added new class ExpandedInformationalTaxationItem
* Added new class OrderState
* Added new class QueryInformationalTaxationItemsResponse
* Added new class SettlementTypeEnum
* Added new class SplitInvoiceItem
* Added new class SplitInvoiceRequest
* Added new class SplitInvoiceResponse
* Added new class UnpostInvoiceResponse
* Added new class UpdateDraftSummaryJournalEntryRequest
* Added new class UpdateJournalEntryWorkflowRequest
* Added new class UpsertCancelCommitmentInput

## action\_type

* New enum value `CANCEL` added to the ActionType enum.

## apply\_credit\_memo\_request

* Added a new optional field `application_rule` of type `StrictStr` to the ApplyCreditMemoRequest class.
* Added a new field validator `application_rule_validate_enum` to validate the `application_rule` field against the enum value `ApplyCreditToSourceItemRule`.

## charge\_override

* Added new field `rollover_period_length` to the ChargeOverride class.
* Added new field `charge_level_min_commitment_amount` to the ChargeOverride class.

## commitment\_schedule\_output

* Added new field `action` of type `Optional[ActionType]` to the CommitmentScheduleOutput class.
* Added new field `status` of type `Optional[CommitmentScheduleStatusOutput]` to the CommitmentScheduleOutput class.

## commitment\_schedule\_status\_output

* New enum value `CANCELLED` added.
* New enum value `CANCELLEDPENDINGEVALUATION` added.

## commitment\_status\_enum

* New enum value `Evaluated` added to CommitmentStatusEnum.
* New enum value `CancelledPendingEvaluation` added to CommitmentStatusEnum.
* Enum value `Canceled` is implicitly deprecated by the addition of `Cancelled`.

## commitment\_status\_output

* New enum value `EVALUATED` added to CommitmentStatusOutput.
* New enum value `CANCELLED` added to CommitmentStatusOutput.
* New enum value `CANCELLEDPENDINGEVALUATION` added to CommitmentStatusOutput.

## contact

* Added new field `is_specified_in_subscription` to the Contact model.

## contact\_response

* Added new field `is_specified_in_subscription` to the ContactResponse model.

## create\_journal\_entry\_request

* Added a new optional field `transaction_type` of type StrictStr to the CreateJournalEntryRequest class.

## create\_journal\_entry\_request\_item

* Added new optional field `gl_string` with a character limit of 350.
* Added new optional field `notes` with a character limit of 1,000.

## discount\_pricing\_override

* Added new field `originalListDiscountAmount` to the DiscountPricingOverride model.
* Added new field `originalListDiscountPercentage` to the DiscountPricingOverride model.

## discount\_pricing\_update

* Added new field `originalListDiscountAmount` to the DiscountPricingUpdate class.
* Added new field `originalListDiscountPercentage` to the DiscountPricingUpdate class.

## end\_date\_condition\_product\_rate\_plan\_charge\_rest

* New enum value `ONETIME` added to EndDateConditionProductRatePlanChargeRest.

## expanded\_account

* Added new field `integration_id__ns` of type Optional[StrictStr] to the ExpandedAccount model.

## expanded\_commitment

* Removed field: cancellationReason
* Added new field: overlapDrawdownPolicy

## expanded\_commitment\_associated\_item

* Added new field `commitment_number` with alias `commitmentNumber` to the ExpandedCommitmentAssociatedItem class.

## expanded\_invoice

* Added new optional field `integrationId__ns` to the ExpandedInvoice model.

## expanded\_order\_line\_item

* Added new field `order_number` of type Optional[StrictStr] to the ExpandedOrderLineItem class.
* Added new field `bill_to` of type Optional[ExpandedContact] to the ExpandedOrderLineItem class.
* Added new field `sold_to_info` of type Optional[ExpandedContact] to the ExpandedOrderLineItem class.
* Added new field `owner_account` of type Optional[ExpandedAccount] to the ExpandedOrderLineItem class.
* Added new field `invoice_owner_account` of type Optional[ExpandedAccount] to the ExpandedOrderLineItem class.
* Added import for ExpandedContact from zuora\_sdk.models.expanded\_contact.
* Added import for ExpandedAccount from zuora\_sdk.models.expanded\_account.

## expanded\_payment

* Added new field `integration_id__ns` to the ExpandedPayment class.

## expanded\_prepayment\_definition

* Added a new field `specific_frequency` of type Optional[StrictInt] to the ExpandedPrepaymentDefinition class.

## generate\_billing\_document\_request

* Added a new optional field `commitment_keys` of type List[StrictStr] to the GenerateBillingDocumentRequest class.

## get\_charge\_override

* Added new field `rollover_period_length` of type Optional[StrictInt] to the GetChargeOverride class.
* Added new field `charge_level_min_commitment_amount` of type Optional[Union[StrictFloat, StrictInt]] to the GetChargeOverride class.
* Added new field `commitment_level` of type Optional[CommitmentLevel] to the GetChargeOverride class.

## get\_commitment\_output

* Added new field `action` of type `Optional[ActionType]` to the GetCommitmentOutput class.
* Added new field `status` of type `Optional[CommitmentStatusOutput]` to the GetCommitmentOutput class.

## get\_commitment\_response

* Added a new field `cancellation_policy` of type `Optional[CancellationPolicy]` to the GetCommitmentResponse class.
* Added a new field `cancellation_effective_date` of type `Optional[date]` to the GetCommitmentResponse class.

## get\_e\_invoice\_mandate\_response

* Added new field `configurable_file_format_names` of type Optional[List[StrictStr]] to the class GetEInvoiceMandateResponse.
* Added new field `configurable_default_file_format_names` of type Optional[List[StrictStr]] to the class GetEInvoiceMandateResponse.

## get\_subscription\_rate\_plan\_charges\_with\_all\_segments

* Field `delivery_schedule` changed to `subscription_charge_delivery_schedule`.
* Field type for `mrr` changed from `Optional[StrictStr]` to `Optional[Union[StrictFloat, StrictInt]]`.
* Field type for `prepaid_quantity` changed from `Optional[StrictStr]` to `Optional[Union[StrictFloat, StrictInt]]`.
* Field type for `prepaid_total_quantity` changed from `Optional[StrictStr]` to `Optional[Union[StrictFloat, StrictInt]]`.
* Field type for `tcv` changed from `Optional[StrictStr]` to `Optional[Union[StrictFloat, StrictInt]]`.
* Added import for `CommitmentLevel`.
* Added field `original_list_discount_amount`.
* Added field `original_list_discount_percentage`.
* Added field `is_charge_level_min_commit`.
* Added field `charge_level_min_commitment_amount`.
* Added field `commitment_level`.
* Field `status` value `removeDirectly` is deprecated and will be removed in future releases.
* Field `status` value `deleteWithRatePlan` is deprecated and will be removed in future releases.

## get\_subscription\_response

* Field: `invoice_separately`, Change: Type changed from Optional[StrictStr] to Optional[StrictBool]
* Field: `total_number_of_charge_segments`, Description: New field added to the GetSubscriptionResponse model

## operation\_job\_type

* New enum value `SPLIT` added to OperationJobType.
* New enum value `UNPOST` added to OperationJobType.

## order

* Added a new field `cancel_reason` of type Optional[StrictStr] to the Order class.
* Added a new field `state` of type Optional[OrderState] to the Order class.

## order\_action\_create\_subscription

* Added new field `clearing_existing_bill_to_contact` of type Optional[StrictBool] to the OrderActionCreateSubscription model.
* Added new field `clearing_existing_invoice_template` of type Optional[StrictBool] to the OrderActionCreateSubscription model.
* Added new field `clearing_existing_payment_term` of type Optional[StrictBool] to the OrderActionCreateSubscription model.
* Added new field `clearing_existing_sequence_set` of type Optional[StrictBool] to the OrderActionCreateSubscription model.
* Added new field `clearing_existing_sold_to_contact` of type Optional[StrictBool] to the OrderActionCreateSubscription model.

## order\_subscriptions

* Description: Field type change for `ramp` from `Optional[Dict[str, Any]]` to `Optional[RampResponse]`.
* Description: Added import for `RampResponse` from `zuora_sdk.models.ramp_response`.
* Description: Modified the `to_dict` method to include `ramp.to_dict()` when `ramp` is present.
* Description: Modified the `from_dict` method to use `RampResponse.from_dict` for `ramp` when `ramp` is present.

## payment\_method\_response

* Added new field `network_token_type` to the PaymentMethodResponse class.
* Added new field `network_token_provider` to the PaymentMethodResponse class.
* Added new method `network_token_type_validate_enum` for validating `network_token_type` field.
* Added new method `network_token_provider_validate_enum` for validating `network_token_provider` field.

## payment\_method\_response\_apple\_pay

* Added new field `network_token_type` with possible values `MPAN` and `DPAN`.
* Added new field `network_token_provider` with possible value `ApplePay`.
* Added field validators for `network_token_type` and `network_token_provider` to ensure they match the specified enum values.

## period\_balance\_type

* New enum value `CANCELLED_PENDING_EVALUATION` added to PeriodBalanceType.

## period\_status\_response

* New enum value `CancelledPendingEvaluation` added.
* Enum value `Canceled` is implicitly deprecated and replaced by `Cancelled`.

## preview\_existing\_subscription\_request

* Added a new field `skip_tax` of type Optional[StrictBool] to the PreviewExistingSubscriptionRequest class.

## preview\_options

* Added a new field `validate_scheduled_orders` to the PreviewOptions class with a default value of true.

## preview\_order\_charge\_override

* Added new field `pricingAttributes` to the PreviewOrderChargeOverride class.
* Added new field `negotiatedPriceTable` to the PreviewOrderChargeOverride class.

## preview\_order\_charge\_update

* Added new field `pricingAttributes` to the PreviewOrderChargeUpdate class. This field is a container for pricing attributes used in dynamic pricing and requires the DynamicPricing permission.
* Added new field `negotiatedPriceTable` to the PreviewOrderChargeUpdate class. This field is an array of negotiated price table information and requires the NegotiatedPriceTable permission.

## preview\_subscription\_request

* Description: Added new optional field `skip_tax` to the PreviewSubscriptionRequest model. This field allows skipping tax calculation during subscription preview.

## ramp\_response

* Description: Added new field `delete` of type Optional[StrictBool] to the RampResponse class.

## rate\_plan\_charge\_segment

* Renamed field `delivery_schedule` to `subscription_charge_delivery_schedule`.
* Added new import for CommitmentLevel.
* Added new field `subscription_charge_delivery_schedule` of type Optional[DeliverySchedule] with alias `subscriptionChargeDeliverySchedule`.
* Added new field `original_list_discount_amount` of type Optional[Union[StrictFloat, StrictInt]] with alias `originalListDiscountAmount`.
* Added new field `original_list_discount_percentage` of type Optional[Union[StrictFloat, StrictInt]] with alias `originalListDiscountPercentage`.
* Added new field `is_charge_level_min_commit` of type Optional[StrictBool] with alias `isChargeLevelMinCommit`.
* Added new field `charge_level_min_commitment_amount` of type Optional[Union[StrictFloat, StrictInt]] with alias `chargeLevelMinCommitmentAmount`.
* Added new field `commitment_level` of type Optional[CommitmentLevel] with alias `commitmentLevel`.
* Field `status` has deprecated values `removeDirectly` and `deleteWithRatePlan`, replaced by `removedDirectly` and `removedWithRatePlan`.

## rate\_plan\_charge\_segment\_info

* Field `delivery_schedule` has been renamed to `subscription_charge_delivery_schedule`.
* Added new import for `CommitmentLevel`.
* Added new field `original_list_discount_amount` to the class `RatePlanChargeSegmentInfo`.
* Added new field `original_list_discount_percentage` to the class `RatePlanChargeSegmentInfo`.
* Added new field `is_charge_level_min_commit` to the class `RatePlanChargeSegmentInfo`.
* Added new field `charge_level_min_commitment_amount` to the class `RatePlanChargeSegmentInfo`.
* Added new field `commitment_level` to the class `RatePlanChargeSegmentInfo`.
* Field status value `removeDirectly` is deprecated and will be removed in future releases.
* Field status value `deleteWithRatePlan` is deprecated and will be removed in future releases.

## reverse\_invoice\_response

* Description: Added a new field `credit_memos` to the ReverseInvoiceResponse class. This field is a list of ReverseInvoiceResponseCreditMemo objects and is used to store all credit memos created during the reverse operation.

## schedule\_status\_output

* New enum value `CancelledPendingEvaluation` added to ScheduleStatusOutput.
* Enum value `Canceled` is implicitly deprecated due to the addition of `Cancelled`.

## update\_journal\_entry\_item\_request

* Added a new optional field `notes` with a character limit of 1,000 to the UpdateJournalEntryItemRequest class.

## upsert\_commitment\_input

* Added a new class `UpsertCancelCommitmentInput` to the list of schemas in `UPSERTCOMMITMENTINPUT_ONE_OF_SCHEMAS`.
* Added a new optional field `oneof_schema_3_validator` of type `UpsertCancelCommitmentInput`.
* Updated `actual_instance` to include `UpsertCancelCommitmentInput` in its Union type.
* Updated `one_of_schemas` to include `UpsertCancelCommitmentInput`.
* Added validation logic for `UpsertCancelCommitmentInput` in the `_validate_oneof_schema` method.
* Added deserialization logic for `UpsertCancelCommitmentInput` in the `from_json` method.
* Updated the `to_dict` method to include `UpsertCancelCommitmentInput` in its return type.

## upsert\_update\_commitment\_input

* Removed field `status` of type `Optional[CommitmentStatusInput]` from the `UpsertUpdateCommitmentInput` class.
* Added description to the `schedules` field in the `UpsertUpdateCommitmentInput` class, detailing modification and deletion rules.

## upsert\_update\_commitment\_schedule\_input

* Removed field `status` of type `CommitmentScheduleStatus`.
* Field `amount` description modified with additional modification rules.

## zuora\_client

* Removed method: balance\_tracking\_api
* Added method: summary\_statements\_api
