---
markdown:
  toc:
    hide: false
---

# Python client library 3.18.0 changelog

## \_\_init\_\_

* Added new class: CustomAmountConfig
* Added new class: CustomAmountConfigAttributesInner
* Added new class: CustomAmountConfigAttributesInnerMapping
* Added new class: CustomAmountConfigRateCardsInner
* Added new class: CustomAmountConfigRateCardsInnerConditionsInner
* Added new class: CustomAmountConfigRateCardsInnerPricing
* Added new class: ExpandedChildCommitment
* Added new class: QueryChildCommitmentsResponse
* Added new class: RolloverEndDateType
* Added new class: RolloverPeriodType
* Added new class: VpAlignment
* Added new class: VpProrationOption
* Added new class: WriteOffInvoiceAsyncJobResponse

## credit\_memos\_api

* Added a new optional field `transaction_id` to the CreditMemosApi class. This field is used for specifying a service-provider transaction ID for Re-Sync operations.

## debit\_memos\_api

* Added a new optional field `transaction_id` to the DebitMemosApi class. This field is used for specifying a service-provider transaction ID for Re-Sync operations.

## invoices\_api

* Added new method get_invoice_write_off_async_job to retrieve information about a specific asynchronous invoice write-off job.
* Added new method get_invoice_write_off_async_job_with_http_info to retrieve information about a specific asynchronous invoice write-off job with HTTP info.
* Added new method create_invoice_write_off_async to write off an invoice asynchronously.
* Added new method create_invoice_write_off_async_with_http_info to write off an invoice asynchronously with HTTP info.
* Added new field `transaction_id` to the `post_invoice` method for optional service-provider transaction ID in Re-Sync operations.

## object\_queries\_api

* Added new import: from zuora_sdk.models.expanded_child_commitment import ExpandedChildCommitment
* Added new import: from zuora_sdk.models.query_child_commitments_response import QueryChildCommitmentsResponse
* Added new method: query_child_commitment_by_key
* Added new method: query_child_commitment_by_key_with_http_info
* Added new method: query_child_commitments
* Added new method: query_child_commitments_with_http_info

## models/\_\_init\_\_

* Added new class: CustomAmountConfig
* Added new class: CustomAmountConfigAttributesInner
* Added new class: CustomAmountConfigAttributesInnerMapping
* Added new class: CustomAmountConfigRateCardsInner
* Added new class: CustomAmountConfigRateCardsInnerConditionsInner
* Added new class: CustomAmountConfigRateCardsInnerPricing
* Added new class: ExpandedChildCommitment
* Added new class: QueryChildCommitmentsResponse
* Added new class: RolloverEndDateType
* Added new class: RolloverPeriodType
* Added new class: VpAlignment
* Added new class: VpProrationOption
* Added new class: WriteOffInvoiceAsyncJobResponse

## base\_period

* Added new field `balance` to the BasePeriod class.
* Added new field `true_up_amount` to the BasePeriod class with alias `trueUpAmount`.
* Added new field `expired_amount` to the BasePeriod class with alias `expiredAmount`.
* Added new field `billed_total_spending` to the BasePeriod class with alias `billedTotalSpending`.

## charge\_override

* Added new field `prepayment_unit_type` with validation for enum values (`UNIT`, `CURRENCY`).
* Added new field `drawdown_scope` with validation for enum values (`RATEPLAN`, `SUBSCRIPTION`, `ACCOUNT`).
* Added new field `vp_alignment`.
* Added new field `vp_anchor_date`.
* Added new field `vp_proration_option`.
* Added new field `specific_validity_period_length`.
* Added new field `rollover_period_type`.
* Added new field `rollover_fund_priority`.
* Added new field `rollover_end_date_type`.
* Added new field `rollover_end_date`.
* Added new field `fund_support_account_hierarchy`.
* Added new field `drawdown_priority`.
* Added new field `clearing_existing_rollover_period_type`.
* Added new field `clearing_existing_rollover_period_length`.

## commitment\_schedule\_attributes

* The `amount` field has been changed to always be required, which is a change in nullability/optionality.
* Added a new import for CustomAmountConfig.
* Added a new optional field `custom_amount` of type CustomAmountConfig to the CommitmentScheduleAttributes class.
* Updated the `__properties` list to include the new `customAmount` field.
* Modified the `to_dict` method to include `customAmount` if it is present.
* Modified the `from_dict` method to handle the new `customAmount` field.

## commitment\_schedule\_input

* Field `amount` description changed to indicate it is always required.
* Added new import: `from zuora_sdk.models.custom_amount_config import CustomAmountConfig`.
* Added new field `custom_amount` of type Optional[CustomAmountConfig] to the class CommitmentScheduleInput.
* Updated `__properties` list to include `customAmount`.
* Added logic to handle `customAmount` in the `to_dict` method.
* Added logic to handle `customAmount` in the `from_dict` method.

## commitment\_schedule\_output

* The `amount` field's description changed to indicate it is always required, which implies a change from optional to required.
* Added a new import: `from zuora_sdk.models.custom_amount_config import CustomAmountConfig`.
* Added a new optional field `custom_amount` of type CustomAmountConfig to the CommitmentScheduleOutput class.
* Updated the `__properties` list to include the new `customAmount` field.
* Added logic to handle `custom_amount` in the `to_dict` method.
* Added logic to handle `custom_amount` in the `from_dict` method.

## create\_billing\_preview\_run\_request

* Added a new field `organization_labels` of type Optional[List[OrganizationLabel]] to the CreateBillingPreviewRunRequest class.

## create\_invoice\_item

* Added a new field `accounts_receivable_accounting_code` to the CreateInvoiceItem class.

## create\_invoice\_request

* Added a new optional field `currency` of type StrictStr to the CreateInvoiceRequest model.

## create\_product\_rate\_plan\_charge\_request

* Added new import: from zuora_sdk.models.commitment_level import CommitmentLevel
* Added new import: from zuora_sdk.models.rollover_end_date_type import RolloverEndDateType
* Added new import: from zuora_sdk.models.rollover_period_type import RolloverPeriodType
* Added new import: from zuora_sdk.models.vp_alignment import VpAlignment
* Added new import: from zuora_sdk.models.vp_proration_option import VpProrationOption
* Added new field: `commitment_level`: Optional[CommitmentLevel] with alias `CommitmentLevel`
* Added new field: `drawdown_priority`: Optional[StrictInt] with alias `DrawdownPriority`
* Added new field: `vp_alignment`: Optional[VpAlignment] with alias `VpAlignment`
* Added new field: `vp_proration_option`: Optional[VpProrationOption] with alias `VpProrationOption`
* Added new field: `specific_validity_period_length`: Optional[StrictInt] with alias `SpecificValidityPeriodLength`
* Added new field: `rollover_period_type`: Optional[RolloverPeriodType] with alias `RolloverPeriodType`
* Added new field: `rollover_fund_priority`: Optional[StrictInt] with alias `RolloverFundPriority`
* Added new field: `rollover_end_date_type`: Optional[RolloverEndDateType] with alias `RolloverEndDateType`
* Added new field: `fund_support_account_hierarchy`: Optional[StrictBool] with alias `FundSupportAccountHierarchy`

## create\_sequence\_set\_request

* Added a new optional field `sequence_set_number` with alias `sequenceSetNumber` to the CreateSequenceSetRequest class.

## credit\_memo\_item\_from\_write\_off\_invoice

* Added new field `exclude_item_billing_from_revenue_accounting` of type Optional[StrictBool] to the CreditMemoItemFromWriteOffInvoice class.

## expanded\_account

* Removed field: `integration_id__ns`

## expanded\_commitment

* Removed field: `overlap_drawdown_policy`
* Added new field: `child_commitments`

## expanded\_commitment\_associated\_item

* Added a new optional field `status` to the ExpandedCommitmentAssociatedItem class.

## expanded\_commitment\_period

* Added new field `expired_amount` of type Optional[Union[StrictFloat, StrictInt]] with alias `expiredAmount`.
* Added new field `true_up_amount` of type Optional[Union[StrictFloat, StrictInt]] with alias `trueUpAmount`.
* Added new field `balance` of type Optional[Union[StrictFloat, StrictInt]].

## expanded\_commitment\_schedule

* Added a new optional field `custom_amount` of type StrictStr to the ExpandedCommitmentSchedule model.

## expanded\_commitment\_transaction

* Added a new optional field `status` to the ExpandedCommitmentTransaction model.

## expanded\_invoice

* Removed field `integration_id__ns` from the ExpandedInvoice class.
* Removed `integrationId__NS` from the `__properties` list in the ExpandedInvoice class.

## expanded\_payment

* Removed field `integration_id__ns` from the ExpandedPayment model.
* Removed `integrationId__NS` from the `__properties` list in the ExpandedPayment model.

## expanded\_rate\_plan\_charge

* Added new field `total_entitled_quantity` of type Optional[Union[StrictFloat, StrictInt]] to the ExpandedRatePlanCharge class.
* Added new field `total_contract_value` of type Optional[Union[StrictFloat, StrictInt]] to the ExpandedRatePlanCharge class.

## get\_charge\_override

* Added new field `drawdown_scope` of type Optional[StrictStr] with a description and alias `drawdownScope`.
* Added new field `prepayment_unit_type` of type Optional[StrictStr] with a description and alias `prepaymentUnitType`.
* Added field validator `drawdown_scope_validate_enum` for `drawdown_scope` to validate against enum values (`RATEPLAN`, `SUBSCRIPTION`, `ACCOUNT`).
* Added field validator `prepayment_unit_type_validate_enum` for `prepayment_unit_type` to validate against enum values (`UNIT`, `CURRENCY`).

## get\_product\_rate\_plan\_charge\_response

* Added new import for CommitmentLevel.
* Added new import for RolloverEndDateType.
* Added new import for RolloverPeriodType.
* Added new import for VpAlignment.
* Added new import for VpProrationOption.
* Added new field `commitment_level` of type Optional[CommitmentLevel].
* Added new field `drawdown_priority` of type Optional[StrictInt].
* Added new field `vp_alignment` of type Optional[VpAlignment].
* Added new field `vp_proration_option` of type Optional[VpProrationOption].
* Added new field `specific_validity_period_length` of type Optional[StrictInt].
* Added new field `rollover_period_type` of type Optional[RolloverPeriodType].
* Added new field `rollover_fund_priority` of type Optional[StrictInt].
* Added new field `rollover_end_date_type` of type Optional[RolloverEndDateType].
* Added new field `fund_support_account_hierarchy` of type Optional[StrictBool].
* Added `CommitmentLevel` to the list of properties in `__properties`.
* Added `DrawdownPriority` to the list of properties in `__properties`.
* Added `VpAlignment` to the list of properties in `__properties`.
* Added `VpProrationOption` to the list of properties in `__properties`.
* Added `SpecificValidityPeriodLength` to the list of properties in `__properties`.
* Added `RolloverPeriodType` to the list of properties in `__properties`.
* Added `RolloverFundPriority` to the list of properties in `__properties`.
* Added `RolloverEndDateType` to the list of properties in `__properties`.
* Added `FundSupportAccountHierarchy` to the list of properties in `__properties`.

## get\_subscription\_rate\_plan\_charges\_with\_all\_segments

* Added new field `total_entitled_quantity` of type Optional[StrictStr] with alias `totalEntitledQuantity`.
* Added new field `total_contract_value` of type Optional[StrictStr] with alias `totalContractValue`.

## invoice\_settlement\_async\_job\_operation\_type

* New enum value `ASYNCINVOICEWRITEOFF` added to the InvoiceSettlementAsyncJobOperationType.

## invoice\_settlement\_async\_job\_reference\_type

* New enum value `INVOICE` added to InvoiceSettlementAsyncJobReferenceType.

## linkage\_linkage\_type

* New enum value `FOR_EACH` added to LinkageLinkageType.

## list\_commitment\_period\_output

* Added new field `balance` of type Optional[Union[StrictFloat, StrictInt]] with description `Remaining balance for this period (`committedAmount` - `billedTotalSpending` - `trueUpAmount` - `expiredAmount`). Balance is always non-negative. If the balance is 0, either `billedTotalSpending` exceeded the `committedAmount` or the period has been evaluated`.
* Added new field `true_up_amount` of type Optional[Union[StrictFloat, StrictInt]] with description `Total true-up amount for this commitment period. It will be null if it is a prepaid commitment or if it is not evaluated yet. This will be a non negative number.`.
* Added new field `expired_amount` of type Optional[Union[StrictFloat, StrictInt]] with description `Total expired amount for this commitment period. It will be null if it is a postpaid commitment or if the period is not evaluated yet. This will be a non negative number.`.
* Added new field `billed_total_spending` of type Optional[Union[StrictFloat, StrictInt]] with description `Sum of drawdown or drawdown reversal transactions.`.

## list\_commitment\_schedule\_output

* Added a new optional field `custom_amount` to the ListCommitmentScheduleOutput class with alias `customAmount`.

## override\_discount\_apply\_detail

* Field `product_rate_plan_id` changed from required to optional.
* Field `product_rate_plan_charge_id` changed from required to optional.
* New field `product_rate_plan_number` added.
* New field `product_rate_plan_charge_number` added.

## period\_balance

* Added new field `true_up_amount` to the PeriodBalance model.
* Added new field `expired_amount` to the PeriodBalance model.
* Added new field `billed_total_spending` to the PeriodBalance model.

## preview\_order\_charge\_override

* Added new field `specific_validity_period_length` to the PreviewOrderChargeOverride class.

## product\_rate\_plan\_charge

* Added new import: from zuora_sdk.models.commitment_level import CommitmentLevel
* Added new import: from zuora_sdk.models.rollover_end_date_type import RolloverEndDateType
* Added new import: from zuora_sdk.models.rollover_period_type import RolloverPeriodType
* Added new import: from zuora_sdk.models.vp_alignment import VpAlignment
* Added new import: from zuora_sdk.models.vp_proration_option import VpProrationOption
* Added new field: `commitment_level` (Optional[CommitmentLevel]) to ProductRatePlanCharge
* Added new field: `drawdown_priority` (Optional[StrictInt]) to ProductRatePlanCharge
* Added new field: `vp_alignment` (Optional[VpAlignment]) to ProductRatePlanCharge
* Added new field: `vp_proration_option` (Optional[VpProrationOption]) to ProductRatePlanCharge
* Added new field: `specific_validity_period_length` (Optional[StrictInt]) to ProductRatePlanCharge
* Added new field: `rollover_period_type` (Optional[RolloverPeriodType]) to ProductRatePlanCharge
* Added new field: `rollover_fund_priority` (Optional[StrictInt]) to ProductRatePlanCharge
* Added new field: `rollover_end_date_type` (Optional[RolloverEndDateType]) to ProductRatePlanCharge
* Added new field: `fund_support_account_hierarchy` (Optional[StrictBool]) to ProductRatePlanCharge

## rate\_plan\_charge\_segment

* Added new import: RolloverEndDateType
* Added new import: RolloverPeriodType
* Added new import: VpAlignment
* Added new import: VpProrationOption
* Added new field: `total_entitled_quantity`
* Added new field: `total_contract_value`
* Added new field: `vp_alignment`
* Added new field: `vp_anchor_date`
* Added new field: `vp_proration_option`
* Added new field: `specific_validity_period_length`
* Added new field: `rollover_period_type`
* Added new field: `rollover_fund_priority`
* Added new field: `rollover_end_date_type`
* Added new field: `rollover_end_date`
* Added new field: `fund_support_account_hierarchy`
* Added new field: `drawdown_priority`

## rate\_plan\_charge\_segment\_info

* Added new import: RolloverEndDateType
* Added new import: RolloverPeriodType
* Added new import: VpAlignment
* Added new import: VpProrationOption
* Added new field: `total_entitled_quantity`
* Added new field: `total_contract_value`
* Added new field: `vp_alignment`
* Added new field: `vp_anchor_date`
* Added new field: `vp_proration_option`
* Added new field: `specific_validity_period_length`
* Added new field: `rollover_period_type`
* Added new field: `rollover_fund_priority`
* Added new field: `rollover_end_date_type`
* Added new field: `rollover_end_date`
* Added new field: `fund_support_account_hierarchy`
* Added new field: `drawdown_priority`

## update\_discount\_invoice\_item

* Added a new field `accounts_receivable_accounting_code` to the UpdateDiscountInvoiceItem class.

## update\_invoice\_item

* Added a new field `accounts_receivable_accounting_code` to the UpdateInvoiceItem class.

## update\_product\_rate\_plan\_charge\_request

* Added new import: CommitmentLevel
* Added new import: RolloverEndDateType
* Added new import: RolloverPeriodType
* Added new import: VpAlignment
* Added new import: VpProrationOption
* Added new field: `commitment_level` (Optional[CommitmentLevel])
* Added new field: `drawdown_priority` (Optional[StrictInt])
* Added new field: `vp_alignment` (Optional[VpAlignment])
* Added new field: `vp_proration_option` (Optional[VpProrationOption])
* Added new field: `specific_validity_period_length` (Optional[StrictInt])
* Added new field: `rollover_period_type` (Optional[RolloverPeriodType])
* Added new field: `rollover_fund_priority` (Optional[StrictInt])
* Added new field: `rollover_end_date_type` (Optional[RolloverEndDateType])
* Added new field: `fund_support_account_hierarchy` (Optional[StrictBool])

## upsert\_create\_commitment\_input\_all\_of\_schedules

* The `amount` field has changed from optional to required.
* Added a new import for CustomAmountConfig.
* Added a new optional field `custom_amount` of type CustomAmountConfig.
* Updated the `__properties` list to include `customAmount`.
* Added logic to handle `custom_amount` in the `to_dict` method.
* Added logic to handle `customAmount` in the `from_dict` method.

## upsert\_create\_commitment\_schedule\_input

* The `amount` field`s description was changed to indicate it is always required, which implies a change from optional to required.
* Added a new import: `from zuora_sdk.models.custom_amount_config import CustomAmountConfig`.
* Added a new optional field `custom_amount` of type CustomAmountConfig to the UpsertCreateCommitmentScheduleInput class.
* Updated the `__properties` list to include the new `customAmount` field.
* Added logic to handle `custom_amount` in the `to_dict` method.
* Added logic to handle `customAmount` in the `from_dict` method.

## upsert\_update\_commitment\_input

* The description for the `schedules` field has been updated to include the ability to add new commitment schedules using "action: create" and to update existing ones using "action: update".

## upsert\_update\_commitment\_schedule\_input

* Added new field `period_type` of type Optional[PeriodTypeEnum] with default value `PeriodTypeEnum.MONTH`.
* Added new field `specific_period_length` of type Optional[StrictInt].
* Added new field `start_date` of type Optional[date].
* Added new field `end_date` of type Optional[date].
* Added new field `custom_amount` of type Optional[CustomAmountConfig].
* Added new field `clear_custom_amount` of type Optional[StrictBool].

## validity\_period\_type

* New enum value `SPECIFIC_DAYS` added to ValidityPeriodType.
* New enum value `SPECIFIC_WEEKS` added to ValidityPeriodType.
* New enum value `SPECIFIC_MONTHS` added to ValidityPeriodType.
