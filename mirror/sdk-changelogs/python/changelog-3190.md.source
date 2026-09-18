---
markdown:
  toc:
    hide: false
---

# Python client library 3.19.0 changelog

## object\_queries\_api

* Added new import: from zuora_sdk.models.expanded_child_commitment_link import ExpandedChildCommitmentLink.
* Added new import: from zuora_sdk.models.expanded_cost_event import ExpandedCostEvent.
* Added new import: from zuora_sdk.models.query_child_commitment_links_response import QueryChildCommitmentLinksResponse.
* Added new import: from zuora_sdk.models.query_cost_events_response import QueryCostEventsResponse.
* Added new method query_child_commitment_link_by_key.
* Added new method query_child_commitment_link_by_key_with_http_info.
* Added new method query_child_commitment_links.
* Added new method query_child_commitment_links_with_http_info.
* Added new method query_cost_event_by_key.
* Added new method query_cost_event_by_key_with_http_info.
* Added new method query_cost_events.
* Added new method query_cost_events_with_http_info.

## \_\_init\_\_

* Added new class ExpandedChildCommitmentLink.
* Added new class ExpandedCostEvent.
* Added new class QueryChildCommitmentLinksResponse.
* Added new class QueryCostEventsResponse.

## models/\_\_init\_\_

* Added new class ExpandedChildCommitmentLink.
* Added new class ExpandedCostEvent.
* Added new class QueryChildCommitmentLinksResponse.
* Added new class QueryCostEventsResponse.

## charge\_override

* Added new field `validity_period_alignment` of type Optional[VpAlignment].
* Added new field `validity_period_anchor_date` of type Optional[date].
* Added new field `validity_period_proration_option` of type Optional[VpProrationOption].
* Deprecated field `vp_anchor_date`. Use `validity_period_anchor_date` instead.

## create\_order\_order\_line\_item

* Added new field `prepaid_quantity` with alias `prepaidQuantity`.
* Added new field `prepaid_uom` with alias `prepaidUom`.
* Added new field `drawdown_priority` with alias `drawdownPriority`.
* Added new field `prepayment_unit_type` with alias `prepaymentUnitType`.
* Added new field `drawdown_scope` with alias `drawdownScope`.
* Added new field `fund_credit_option` with alias `fundCreditOption`.
* Added new field `fund_support_account_hierarchy` with alias `fundSupportAccountHierarchy`.
* Added new field `vp_proration_option` with alias `vpProrationOption`.
* Added new field `is_rollover` with alias `isRollover`.
* Added new field `rollover_periods` with alias `rolloverPeriods`.
* Added new field `rollover_period_length` with alias `rolloverPeriodLength`.
* Added new field `rollover_period_type` with alias `rolloverPeriodType`.
* Added new field `rollover_apply` with alias `rolloverApply`.
* Added new field `rollover_fund_priority` with alias `rolloverFundPriority`.
* Added new field `rollover_end_date_type` with alias `rolloverEndDateType`.
* Added new field `rollover_end_date` with alias `rolloverEndDate`.
* Added field validators for `prepayment_unit_type`, `drawdown_scope`, `fund_credit_option`, and `vp_proration_option`.

## expanded\_account

* Added new field `e_reporting_profile_id` to the ExpandedAccount model.

## expanded\_child\_commitment

* Added field `parent_commitment_id` with alias `parentCommitmentId`.
* Added field `commitment_number` with alias `commitmentNumber`.
* Added field `version`.
* Added field `name`.
* Added field `status`.
* Added field `type`.
* Added field `description`.
* Added field `priority`.
* Added field `account_id` with alias `accountId`.
* Added field `account_number` with alias `accountNumber`.
* Added field `commitment_owner_id` with alias `commitmentOwnerId`.
* Added field `commitment_owner_number` with alias `commitmentOwnerNumber`.
* Added field `order_number` with alias `orderNumber`.
* Added field `currency`.
* Added field `taxable`.
* Added field `tax_code` with alias `taxCode`.
* Added field `tax_mode` with alias `taxMode`.
* Added field `start_date` with alias `startDate`.
* Added field `end_date` with alias `endDate`.
* Added field `total_amount` with alias `totalAmount`.
* Added field `prepayment_type` with alias `prepaymentType`.
* Added field `period_alignment_option` with alias `periodAlignmentOption`.
* Added field `specific_period_alignment_date` with alias `specificPeriodAlignmentDate`.
* Added field `cancellation_effective_date` with alias `cancellationEffectiveDate`.
* Added field `cancellation_policy` with alias `cancellationPolicy`.
* Added field `is_allocation_eligible` with alias `isAllocationEligible`.
* Added field `is_unbilled` with alias `isUnbilled`.
* Added field `eligible_account_conditions` with alias `eligibleAccountConditions`.
* Added field `eligible_charge_conditions` with alias `eligibleChargeConditions`.
* Added field `revenue_recognition_rule_name` with alias `revenueRecognitionRuleName`.
* Added field `revenue_recognition_timing` with alias `revenueRecognitionTiming`.
* Added field `revenue_amortization_method` with alias `revenueAmortizationMethod`.
* Added field `exclude_item_billing_from_revenue_accounting` with alias `excludeItemBillingFromRevenueAccounting`.
* Added field `adjustment_liability_accounting_code` with alias `adjustmentLiabilityAccountingCode`.
* Added field `adjustment_revenue_accounting_code` with alias `adjustmentRevenueAccountingCode`.
* Added field `contract_asset_accounting_code` with alias `contractAssetAccountingCode`.
* Added field `contract_liability_accounting_code` with alias `contractLiabilityAccountingCode`.
* Added field `contract_recognized_revenue_accounting_code` with alias `contractRecognizedRevenueAccountingCode`.
* Added field `deferred_revenue_accounting_code` with alias `deferredRevenueAccountingCode`.
* Added field `recognized_revenue_accounting_code` with alias `recognizedRevenueAccountingCode`.
* Added field `unbilled_receivables_accounting_code` with alias `unbilledReceivablesAccountingCode`.
* Added field `account_receivable_accounting_code` with alias `accountReceivableAccountingCode`.
* Added field `commitment_owner` of type ExpandedAccount.
* Added field `commitment_schedules` of type List[ExpandedCommitmentSchedule].
* Added field `commitment_associated_accounts` of type List[ExpandedCommitmentAssociatedAccount].
* Added field `commitment_associated_items` of type List[ExpandedCommitmentAssociatedItem].
* Added field `child_commitments` of type List[ExpandedChildCommitment].
* Removed field `child_commitment_id`.
* Removed field `child_commitment`.
* Changed fields `created_date` and `updated_date` from Optional[StrictStr] to Optional[date].

## expanded\_credit\_memo

* Added new field `e_invoice_business_status_update_id`.
* Added new field `sales_ereporting_request_id`.
* Added new field `ar_ereporting_request_id`.
* Added new field `e_reporting_ar_status`.
* Added new field `e_reporting_ar_error_code`.
* Added new field `e_reporting_ar_error_message`.
* Added new field `e_invoice_business_status`.
* Added new field `e_invoice_business_status_reason`.
* Added new field `seller_reason`.
* Added new field `e_reporting_sales_status`.
* Added new field `e_reporting_sales_error_code`.
* Added new field `e_reporting_sales_error_message`.

## expanded\_debit\_memo

* Added new field `e_invoice_business_status_update_id`.
* Added new field `sales_ereporting_request_id`.
* Added new field `ar_ereporting_request_id`.
* Added new field `e_reporting_ar_status`.
* Added new field `e_reporting_ar_error_code`.
* Added new field `e_reporting_ar_error_message`.
* Added new field `e_invoice_business_status`.
* Added new field `e_invoice_business_status_reason`.
* Added new field `seller_reason`.
* Added new field `e_reporting_sales_status`.
* Added new field `e_reporting_sales_error_code`.
* Added new field `e_reporting_sales_error_message`.

## expanded\_invoice

* Added new field `e_invoice_business_status_update_id` to the ExpandedInvoice model.
* Added new field `sales_ereporting_request_id` to the ExpandedInvoice model.
* Added new field `ar_ereporting_request_id` to the ExpandedInvoice model.
* Added new field `e_reporting_ar_status` to the ExpandedInvoice model.
* Added new field `e_reporting_ar_error_code` to the ExpandedInvoice model.
* Added new field `e_reporting_ar_error_message` to the ExpandedInvoice model.
* Added new field `e_invoice_business_status` to the ExpandedInvoice model.
* Added new field `e_invoice_business_status_reason` to the ExpandedInvoice model.
* Added new field `seller_reason` to the ExpandedInvoice model.
* Added new field `e_reporting_sales_status` to the ExpandedInvoice model.
* Added new field `e_reporting_sales_error_code` to the ExpandedInvoice model.
* Added new field `e_reporting_sales_error_message` to the ExpandedInvoice model.

## expanded\_invoice\_schedule

* Added new field `invoice_separately` of type Optional[StrictBool] to the ExpandedInvoiceSchedule class.

## expanded\_prepaid\_balance

* Added new optional field `scope` to the ExpandedPrepaidBalance class.

## expanded\_prepaid\_balance\_fund

* Added new field `rolled_over`.
* Added new field `expired`.

## expanded\_rate\_plan\_charge

* Removed fields `total_entitled_quantity` and `total_contract_value`.

## get\_charge\_override

* Added new import statements for RatingPropertiesOverride, RolloverEndDateType, RolloverPeriodType, VpAlignment, and VpProrationOption.
* Added new fields: `vp_alignment`, `vp_proration_option`, `validity_period_alignment`, `validity_period_anchor_date`, `validity_period_proration_option`, `specific_validity_period_length`, `rollover_period_type`, `rollover_fund_priority`, `rollover_end_date_type`, `rollover_end_date`, `fund_support_account_hierarchy`, `drawdown_priority`, and `rating_properties_override`.
* Added logic to override the default output from pydantic by calling to_dict() of `rating_properties_override`.
* Updated the __properties list to include new field aliases: `vpAlignment`, `vpProrationOption`, `validityPeriodAlignment`, `validityPeriodAnchorDate`, `validityPeriodProrationOption`, `specificValidityPeriodLength`, `rolloverPeriodType`, `rolloverFundPriority`, `rolloverEndDateType`, `rolloverEndDate`, `fundSupportAccountHierarchy`, `drawdownPriority`, and `ratingPropertiesOverride`.
* Updated from_dict to include new field aliases: `vpAlignment`, `vpAnchorDate`, `vpProrationOption`, `validityPeriodAlignment`, `validityPeriodAnchorDate`, `validityPeriodProrationOption`, `specificValidityPeriodLength`, `rolloverPeriodType`, `rolloverFundPriority`, `rolloverEndDateType`, `rolloverEndDate`, `fundSupportAccountHierarchy`, `drawdownPriority`, and `ratingPropertiesOverride`.
* Deprecated field `vp_anchor_date`. Use `validity_period_anchor_date` instead.

## get\_order\_line\_item

* Added new fields: `prepaid_quantity`, `prepaid_total_quantity`, `prepaid_uom`, `drawdown_priority`, `prepayment_unit_type`, `drawdown_scope`, `fund_credit_option`, `fund_support_account_hierarchy`, `vp_proration_option`, `is_rollover`, `rollover_periods`, `rollover_period_length`, `rollover_period_type`, `rollover_apply`, `rollover_fund_priority`, `rollover_end_date_type`, and `rollover_end_date`.
* Added field validators for `prepayment_unit_type`, `drawdown_scope`, `fund_credit_option`, and `vp_proration_option`.

## get\_subscription\_rate\_plan\_charges\_with\_all\_segments

* Added new fields: `vp_alignment`, `vp_proration_option`, `validity_period_alignment`, `validity_period_anchor_date`, `validity_period_proration_option`, `specific_validity_period_length`, `rollover_period_type`, `rollover_fund_priority`, `rollover_end_date_type`, `rollover_end_date`, `fund_support_account_hierarchy`, and `drawdown_priority`.
* Removed fields `total_entitled_quantity` and `total_contract_value`.
* Deprecated field `vp_anchor_date`. Use `validity_period_anchor_date` instead.

## order\_line\_item

* Added new field `prepaid_quantity` with alias `prepaidQuantity`.
* Added new field `prepaid_total_quantity` with alias `prepaidTotalQuantity`.
* Added new field `prepaid_uom` with alias `prepaidUom`.
* Added new field `drawdown_priority` with alias `drawdownPriority`.
* Added new field `prepayment_unit_type` with alias `prepaymentUnitType`.
* Added new field `drawdown_scope` with alias `drawdownScope`.
* Added new field `fund_credit_option` with alias `fundCreditOption`.
* Added new field `fund_support_account_hierarchy` with alias `fundSupportAccountHierarchy`.
* Added new field `vp_proration_option` with alias `vpProrationOption`.
* Added new field `is_rollover` with alias `isRollover`.
* Added new field `rollover_periods` with alias `rolloverPeriods`.
* Added new field `rollover_period_length` with alias `rolloverPeriodLength`.
* Added new field `rollover_period_type` with alias `rolloverPeriodType`.
* Added new field `rollover_apply` with alias `rolloverApply`.
* Added new field `rollover_fund_priority` with alias `rolloverFundPriority`.
* Added new field `rollover_end_date_type` with alias `rolloverEndDateType`.
* Added new field `rollover_end_date` with alias `rolloverEndDate`.
* Added field validators for `prepayment_unit_type`, `drawdown_scope`, `fund_credit_option`, and `vp_proration_option`.

## order\_line\_item\_type

* Added new enum value `PREPAYMENT`.

## prepayment\_proration\_rule

* Changed enum values from `prorateAmount` to `ProrateAmount` and from `chargeFullAmount` to `ChargeFullAmount`.

## preview\_order\_charge\_override

* Added new field `vp_alignment`.
* Added new field `vp_proration_option`.
* Added new field `validity_period_alignment`.
* Added new field `validity_period_anchor_date`.
* Added new field `validity_period_proration_option`.
* Deprecated field `vp_anchor_date`. Use `validity_period_anchor_date` instead.

## rate\_plan\_charge\_segment

* Added import: from zuora_sdk.models.rating_properties_override import RatingPropertiesOverride.
* Added new field `validity_period_alignment`.
* Added new field `validity_period_anchor_date`.
* Added new field `validity_period_proration_option`.
* Added new field `rating_properties`.
* Removed fields `total_entitled_quantity` and `total_contract_value`.
* Deprecated field `vp_anchor_date`. Use `validity_period_anchor_date` instead.

## rate\_plan\_charge\_segment\_info

* Added new import: from zuora_sdk.models.rating_properties_override import RatingPropertiesOverride.
* Added new field `validity_period_alignment`.
* Added new field `validity_period_anchor_date`.
* Added new field `validity_period_proration_option`.
* Added new field `rating_properties`.
* Removed fields `total_entitled_quantity` and `total_contract_value`.
* Deprecated field `vp_anchor_date`. Use `validity_period_anchor_date` instead.
