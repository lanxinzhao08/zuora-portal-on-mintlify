---
title: "Python client library 3.20.0 changelog"
sidebarTitle: "3.20.0"
---
## account\_detail\_response

* Added new field `e_reporting_profile`.

## async\_apply\_credit\_memo\_to\_invoice

* Added new field `invoice_number`.

## async\_unapply\_credit\_memo\_to\_invoice

* Added new field `invoice_number`.

## bill\_run

* Added new field `organization_labels`.

## bill\_run\_api

* Added new method update_bill_run.

## bill\_run\_filter

* Added new field `filter_id`.
* Added new enum value `billrunerrors`.

## bill\_run\_response

* Added new field `organization_labels`.

## cancel\_bill\_run\_response

* Added new field `organization_labels`.

## charge\_list\_price\_base

* Added new enum value `PER_VALIDITY_PERIOD`.

## collect\_debit\_memo\_request\_payment

* Added new field `balance_refresh`.

## create\_account\_request

* Added new field `e_reporting_profile`.

## create\_authorization\_request

* Added new field `currency`.

## create\_authorization\_response

* Added new field `currency`.

## create\_order\_charge\_update

* Added new field `clearing_custom_fields`.

## create\_order\_create\_subscription

* Added new field `bill_to_contact`.
* Added new field `ship_to_contact`.
* Added new field `sold_to_contact`.

## create\_order\_rate\_plan\_update

* Added new field `clearing_custom_fields`.

## create\_order\_response

* Added new field `payment_error_code`.
* Added new field `payment_error_message`.
* Added new field `payment_status`.

## create\_order\_result

* Added new field `payment_error_code`.
* Added new field `payment_error_message`.
* Added new field `payment_status`.

## create\_order\_subscription

* Added new field `clearing_custom_fields`.

## create\_order\_terms\_and\_conditions

* Added new field `bill_to_contact`.
* Added new field `ship_to_contact`.
* Added new field `sold_to_contact`.

## create\_order\_update\_product

* Added new field `clearing_custom_fields`.

## create\_payment\_method\_decryption\_request

* Added new field `payment_gateway_number`.

## create\_payment\_request

* Added new field `balance_refresh`.
* Added new field `number`.

## create\_payment\_run\_request

* Added new field `api_caller_type`.
* Added new field `ignore_payment_run_retry_rule`.
* Added new field `organization_labels`.
* Added new field `payment_gateway_number`.
* Added new field `use_custom_payment_methods`.

## create\_payment\_schedule\_items\_request\_items

* Added new field `billing_document`.
* Added new field `payment_gateway_number`.

## create\_payment\_schedule\_request

* Added new field `billing_documents`.
* Added new field `payment_gateway_number`.

## create\_payment\_schedule\_request\_items

* Added new field `payment_gateway_number`.

## create\_product\_rate\_plan\_charge\_request

* Added new field `drawdown_scope`.
* Added new field `prepayment_unit_type`.
* Added new field `validity_period_alignment`.
* Added new field `validity_period_proration_option`.
* Deprecated field `commitment_level`. Use `validity_period_anchor_date` instead.
* Deprecated field `commitment_type`. Use `validity_period_anchor_date` instead.

## create\_stored\_credential\_profile\_request

* Added new field `payment_gateway_number`.

## credit\_memo

* Added new field `ar_ereporting_request_id`.
* Added new field `sales_ereporting_request_id`.

## credit\_memo\_response

* Added new field `ar_ereporting_request_id`.
* Added new field `sales_ereporting_request_id`.

## custom\_object\_definition\_schema\_relationship\_cardinality

* Added new enum value `ONETOMANY`.

## debit\_memo

* Added new field `ar_ereporting_request_id`.
* Added new field `sales_ereporting_request_id`.

## debit\_memo\_response

* Added new field `ar_ereporting_request_id`.
* Added new field `sales_ereporting_request_id`.

## get\_async\_create\_order\_job\_response

* Added new field `payment_error_code`.
* Added new field `payment_error_message`.
* Added new field `payment_status`.

## get\_charge\_override

* Added new field `commitment_type`.

## get\_commitment\_response

* Added new field `child_commitments`.

## get\_product\_rate\_plan\_charge\_response

* Added new field `drawdown_scope`.
* Added new field `prepayment_unit_type`.
* Added new field `validity_period_alignment`.
* Added new field `validity_period_proration_option`.
* Deprecated field `commitment_level`. Use `validity_period_anchor_date` instead.
* Deprecated field `commitment_type`. Use `validity_period_anchor_date` instead.

## get\_subscription\_rate\_plan\_charges\_with\_all\_segments

* Added new field `drawdown_scope`.
* Added new field `prepayment_unit_type`.

## get\_subscription\_response

* Added new field `unique_token`.

## invoice

* Added new field `ar_ereporting_request_id`.
* Added new field `sales_ereporting_request_id`.

## invoice\_response

* Added new field `ar_ereporting_request_id`.
* Added new field `sales_ereporting_request_id`.

## migration\_update\_custom\_object\_definitions\_response

* Added new field `instant`.

## order\_action\_create\_subscription

* Added new field `unique_token`.

## order\_action\_owner\_transfer

* Added new field `bill_to_contact`.
* Added new field `ship_to_contact`.
* Added new field `sold_to_contact`.

## order\_action\_renew\_subscription

* Added new field `bill_to_contact`.
* Added new field `ship_to_contact`.
* Added new field `sold_to_contact`.

## order\_action\_terms\_and\_conditions

* Added new field `bill_to_contact`.
* Added new field `ship_to_contact`.
* Added new field `sold_to_contact`.

## payment

* Added new field `merchant_advice_code`.
* Added new field `merchant_advice_code_description`.
* Added new field `merchant_advice_code_recommendation`.
* Added new field `network_response_code`.
* Added new field `network_response_code_description`.

## payment\_response

* Added new field `merchant_advice_code`.
* Added new field `merchant_advice_code_description`.
* Added new field `merchant_advice_code_recommendation`.
* Added new field `network_response_code`.
* Added new field `network_response_code_description`.

## preview\_order\_charge\_override

* Added new field `commitment_level`.
* Added new field `commitment_type`.
* Added new field `drawdown_priority`.
* Added new field `drawdown_scope`.
* Added new field `fund_support_account_hierarchy`.
* Added new field `prepayment_unit_type`.
* Added new field `rollover_end_date`.
* Added new field `rollover_end_date_type`.
* Added new field `rollover_fund_priority`.
* Added new field `rollover_period_type`.

## preview\_order\_create\_subscription

* Added new field `bill_to_contact`.
* Added new field `ship_to_contact`.
* Added new field `sold_to_contact`.

## preview\_payment\_schedule

* Added new field `description`.
* Added new field `payment_gateway_number`.

## processing\_options

* Added new field `allow_payment_failure`.

## processing\_options\_with\_delayed\_capture\_payment

* Added new field `allow_payment_failure`.

## product\_rate\_plan\_charge

* Added new field `drawdown_scope`.
* Added new field `prepayment_unit_type`.
* Added new field `validity_period_alignment`.
* Added new field `validity_period_proration_option`.

## rate\_plan\_charge\_segment

* Added new field `drawdown_scope`.
* Added new field `prepayment_unit_type`.

## rate\_plan\_charge\_segment\_info

* Added new field `drawdown_scope`.
* Added new field `prepayment_unit_type`.

## retry\_payment\_schedule\_item

* Added new field `payment_gateway_number`.

## update\_account\_request

* Added new field `e_reporting_profile`.

## update\_payment\_run\_request

* Added new field `api_caller_type`.
* Added new field `data`.
* Added new field `ignore_payment_run_retry_rule`.
* Added new field `organization_labels`.
* Added new field `payment_gateway_number`.
* Added new field `use_custom_payment_methods`.

## update\_payment\_schedule\_item\_request

* Added new field `payment_gateway_number`.

## update\_payment\_schedule\_request

* Added new field `description`.
* Added new field `payment_gateway_number`.

## update\_product\_rate\_plan\_charge\_request

* Added new field `drawdown_scope`.
* Added new field `prepayment_unit_type`.
* Added new field `validity_period_alignment`.
* Added new field `validity_period_proration_option`.
* Deprecated field `commitment_level`. Use `validity_period_anchor_date` instead.
* Deprecated field `commitment_type`. Use `validity_period_anchor_date` instead.

## upsert\_create\_commitment\_input

* Added new field `child_commitments`.

## upsert\_update\_commitment\_input

* Added new field `child_commitments`.

## verify\_payment\_method\_request

* Added new field `payment_gateway_number`.

## zuora\_client

* Added CustomLogicApi.
* Added EComplianceApi.
* Added EReportingApi.
