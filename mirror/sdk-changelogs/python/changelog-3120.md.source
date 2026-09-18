---
markdown:
  toc:
    hide: false
---

# Python client library 3.12.0 changelog

## \_\_init\_\_

* Removed ExpandedBundle model import.
* Removed QueryBundlesResponse model import.
* Added BillingPreviewRunFilter model import.
* Added CommitmentPeriodOutput model import.
* Added CommitmentPeriodStatus model import.
* Added CommitmentStatus model import.
* Added CreateCreditCardReferenceCardholderInfo model import.
* Added GetCommitmentOutput model import.
* Added RecurringCalculatedPricingOverride model import.

## contact\_snapshots\_api

* Removed `page` and `page_size` parameters from the ContactSnapshotsApi class. This change may require developers to update their code if they were using pagination functionality.

## invoices\_api

* Added `cancel_e_invoice_by_invoice_key` method to cancel E-Invoice for a given billing document.
* Added `cancel_e_invoice_by_invoice_key_with_http_info` method to cancel E-Invoice for a given billing document with HTTP info.

## object\_queries\_api

* Removed methods related to querying bundles: `query_bundle_by_key`, `query_bundle_by_key_with_http_info`, `query_bundles`, and `query_bundles_with_http_info`.

## regenerate\_api

* Removed `page` and `page_size` parameters from the RegenerateApi class, which may affect pagination functionality in existing implementations.

## account\_credit\_card\_holder

* The `card_holder_name` field is now mandatory. It was previously optional but now requires a minimum length of 1.

## account\_data

* Added field validators for `communication_profile_id` and `sequence_set_id` to enforce a regular expression pattern, ensuring they match a 32-character hexadecimal string.

## account\_e\_invoice\_profile

* Changed type of `business_name` from Optional[StrictStr] to Annotated[str, Field(min_length=1, strict=True, max_length=255)], making it a required field with constraints.
* Added constraints to `business_number`, `business_number_scheme_id`, `endpoint_id`, `endpoint_scheme_id`, and `tax_register_number` fields using Annotated with Field, which may affect validation and require updates to input data.

## add\_subscription\_component

* Removed `amended_by_order_on`, `original_order_date`, and `specific_list_price_base` fields from the AddSubscriptionComponent model.
* Changed `description` field to use Annotated type with strict and max_length constraints.
* Changed `number` field to use Annotated type with strict and max_length constraints.
* Changed `number_of_periods` field to use Annotated type with strict and minimum value constraints.
* Changed `product_rate_plan_charge_id` field to use Annotated type with strict constraint.
* Added a field validator for `product_rate_plan_charge_id` to enforce a regular expression pattern.

## add\_subscription\_rate\_plan

* The `product_rate_plan_id` field now uses `Annotated[str, Field(strict=True)]`, which enforces stricter type checking. This may require developers to ensure that the input for this field is strictly a string.
* A new field validator `product_rate_plan_id_validate_regular_expression` has been added to enforce that `product_rate_plan_id` must match the regular expression /^[0-9a-fA-F]{32}$/. This change requires developers to ensure that the `product_rate_plan_id` adheres to this format.

## bill\_run\_filter

* Added strict validation for `account_id` and `subscription_id` fields using regular expressions to ensure they match a 32-character hexadecimal format.

## bill\_run\_schedule

* Added validation for `weekly_on_day` field to ensure the list has a minimum length of 1 and a maximum length of 7.

## billing\_adjustment\_exclusion

* The `delivery_date` field is now mandatory. Previously, it was optional. Developers must ensure that this field is provided when creating or updating a BillingAdjustmentExclusion object.

## billing\_document\_item\_source\_type

* Added a new enum value `COMMITMENT` to the BillingDocumentItemSourceType class.

## billing\_options

* Changed the type of `credit_memo_reason_code` from `Optional[StrictStr]` to `Optional[Annotated[str, Field(strict=True, max_length=25)]]`. This change enforces stricter validation on the `credit_memo_reason_code` field, which may require developers to ensure that the value does not exceed 25 characters.

## bulk\_pdf\_generation\_job\_request

* Added a minimum length constraint of 1 to the `file_name` field, ensuring that the file name cannot be empty.

## change\_subscription\_rate\_plan

* Introduced strict validation for `new_product_rate_plan_id`, `product_rate_plan_id`, and `rate_plan_id` fields using regular expressions to ensure they match a 32-character hexadecimal format.

## charge\_model

* Added a new charge model type `CALCULATED` to the ChargeModel enum.

## charge\_override\_pricing

* Added support for RecurringCalculatedPricingOverride in ChargeOverridePricing model.

## charge\_type

* Added a new charge type `OTHERS` to the ChargeType enum.

## charge\_update

* Removed the `is_dimensional_price` field from the ChargeUpdate model, which may affect any code relying on this field.
* Changed `negotiated_price_table` from a Dict to a List of Dicts, which may require updates to code handling this field.

## commitment\_input

* Added `eligible_account_conditions` and `eligible_charge_conditions` fields to the CommitmentInput model.
* Introduced `exclude_item_booking_from_revenue_accounting` field to the CommitmentInput model.

## commitment\_output\_periods\_inner

* The `start_date` and `end_date` fields have changed from `Optional[StrictStr]` to `Optional[date]`. This requires developers to update their code to handle date objects instead of strings.

## common\_revenue\_attributes

* Removed `accounting_code` property from the CommonRevenueAttributes class.
* Added `exclude_item_booking_from_revenue_accounting` property to the CommonRevenueAttributes class.

## common\_taxation\_attributes

* Introduced the use of Annotated type for the `tax_code` field with strict validation and a maximum length of 100 characters.

## contact

* Increased maximum length for `city` from 40 to 100 characters.
* Increased maximum length for `county` from 32 to 100 characters.
* Increased maximum length for `state` from 40 to 100 characters.
* Increased maximum length for `tax_region` from 32 to 100 characters.

## contact\_info

* Increased max_length for `city`, `county`, `state`, and `tax_region` fields, which may affect validation logic.
* Renamed `custom_fields` to `custom_fields_data`, which requires updates to any code referencing this field.
* Added min_length constraint of 1 for `first_name` and `last_name` fields, ensuring these fields cannot be empty.

## contact\_response

* Increased maximum length for `city` from 40 to 100 characters.
* Increased maximum length for `county` from 32 to 100 characters.
* Increased maximum length for `state` from 40 to 100 characters.
* Increased maximum length for `tax_region` from 32 to 100 characters.

## create\_account\_contact

* Changed data type annotations for several fields to use Annotated with strict and max_length constraints, which may require developers to update their code to ensure compatibility with these stricter validations.

## create\_account\_credit\_card\_holder\_info

* Replaced StrictStr with Annotated[str, Field(strict=True, max_length=X)] for all string fields, which may affect validation behavior.

## create\_account\_request

* The `name` field now requires a minimum length of 1 character. Previously, there was no minimum length enforced.

## create\_account\_subscription

* Changed `initial_term` from Optional[StrictInt] to Optional[Annotated[int, Field(strict=True, ge=1)]], enforcing a minimum value of 1.
* Changed `renewal_term` from Optional[StrictInt] to Optional[Annotated[int, Field(strict=True, ge=0)]], enforcing a minimum value of 0.
* Changed `notes` from Optional[StrictStr] to Optional[Annotated[str, Field(strict=True, max_length=500)]], enforcing a maximum length of 500 characters.
* Changed `subscription_number` from Optional[StrictStr] to Optional[Annotated[str, Field(strict=True, max_length=100)]], enforcing a maximum length of 100 characters.

## create\_accounting\_code\_request

* The `name` field now requires a minimum length of 1 character. Previously, there was no minimum length constraint.

## create\_becs\_payment\_method

* The `account_number` and `branch_code` fields now require a minimum length of 1 and strict type checking.

## create\_becsnz\_payment\_method

* The types for `account_number`, `bank_code`, and `branch_code` have been changed from `StrictStr` to `Annotated[str, Field(min_length=1, strict=True)]`. This change enforces a minimum length of 1 and strict type checking, which may require developers to ensure these fields are not empty and are strictly strings.

## create\_betalingsservice\_payment\_method

* Changed type annotations for `identity_number`, `bank_code`, and `account_number` from `StrictStr` to `Annotated[str, Field(min_length=1, strict=True)]`. This may require developers to ensure these fields are not empty and adhere to stricter validation.

## create\_billing\_preview\_run\_request

* Added a new optional `filters` field to the CreateBillingPreviewRunRequest model, allowing developers to apply up to one filter to the billing preview run.

## create\_cc\_reference\_transaction\_payment\_method

* Renamed import from CreatePaymentMethodCardholderInfo to CreateCreditCardReferenceCardholderInfo, which may require updates to import statements in existing code.
* Changed type of card_holder_info from CreatePaymentMethodCardholderInfo to CreateCreditCardReferenceCardholderInfo, which may affect how cardholder information is handled in the application.

## create\_contact\_request

* Increased maximum length for `city`, `county`, `state`, and `tax_region` fields from 40, 32, 40, and 32 to 100 characters respectively.
* Added minimum length constraint of 1 character for `first_name` and `last_name` fields.

## create\_credit\_memo\_from\_charge

* The `charges` field is now mandatory. Previously, it was optional. Developers must ensure that this field is provided when creating a credit memo from charge.

## create\_debit\_memo\_from\_charge

* The `charges` field is now mandatory. Previously, it was optional.
* Added a validator for the `due_date` field to ensure it matches the `yyyy-mm-dd` format.

## create\_debit\_memo\_from\_charge\_request

* Added a new field validator `due_date_validate_regular_expression` to ensure `due_date` follows the format YYYY-MM-DD.

## create\_discount\_item

* Changed type of several fields to Annotated[str, Field(strict=True, max_length=N)] with specific max_length constraints, which may require developers to ensure their input strings do not exceed these lengths.

## create\_fulfillment

* Removed StrictBool type from fields `exclude_item_billing_from_revenue_accounting` and `exclude_item_booking_from_revenue_accounting`. These fields have been completely removed.
* Changed `fulfillment_date` from Optional to a required field.
* Changed `order_line_item_id` from Optional to a required field with a minimum length of 32.
* Added strict and max_length constraints to several string fields using Annotated, such as `carrier`, `description`, `external_id`, `fulfillment_location`, `fulfillment_system`, and `tracking_number`.

## create\_fulfillment\_item

* Replaced StrictStr with Annotated for fields: description, item_identifier, fulfillment_id, fulfillment_external_id, and fulfillment_number. This introduces strict type checking and length constraints, which may require developers to update their code to ensure compliance with these constraints.

## create\_invoice\_item

* Changed type of several fields to Annotated[str, Field(strict=True, max_length=N)] with specific max_length constraints, which may require developers to ensure that input data conforms to these new length restrictions.

## create\_or\_update\_catalog\_group\_product\_rate\_plan

* The `id` field now requires a non-empty string with strict validation and must match the regular expression /^[0-9a-fA-F]{32}$/.

## create\_order\_action

* Introduced the use of Annotated from typing_extensions to enforce stricter validation on the change_reason field, including a maximum length of 255 characters.

## create\_order\_order\_line\_item

* Changed data types for several fields to use Annotated with Field constraints, which may require updates to code that sets these fields.
* Added strict validation for `bill_to` and `ship_to` fields using regular expressions, which may cause validation errors if existing values do not match the required format.
* Introduced field length and strictness constraints on multiple fields, enhancing data validation.

## create\_order\_subscription

* The `order_actions` field is now required. Previously, it was optional.
* The `subscription_number` field now has a strict string type with a maximum length of 100 characters.

## create\_pad\_payment\_method

* Changed type annotations for `account_number`, `bank_code`, and `branch_code` to use `Annotated[str, Field(min_length=1, strict=True)]`, which enforces stricter validation. This may require developers to ensure these fields are not empty and adhere to stricter type checks.

## create\_payment\_method\_bank\_transfer\_account\_holder\_info

* The `account_holder_name` field is now required and must have a minimum length of 1.
* The `account_holder_name`, `address_line1`, `address_line2`, `city`, `country`, `email`, `first_name`, `last_name`, `phone`, `state`, and `zip_code` fields now have strict string validation with specified maximum lengths.

## create\_payment\_method\_cardholder\_info

* Replaced StrictStr with Annotated[str, Field(strict=True, max_length=N)] for all string fields, which may affect validation behavior.

## create\_payment\_method\_updater\_batch\_request

* The `updater_account_id` field now has a minimum length constraint of 1, which may require validation updates in existing code.

## get\_payment\_method\_for\_account\_response

* Renamed the following fields and updated their data types to be consistent with REST API fields:
  * `created_on`(datetime) to `created_date`(str)
  * `updated_on`(datetime) to `updated_date`(str)
  * `last_transaction_time`(datetime) to `last_transaction_date_time`(str)
  * `last_failed_sale_transaction_date`(datetime) to `last_failed_sale_transaction_date`(str)


## payment\_method\_response

* Renamed the following fields and updated their data types to be consistent with REST API fields:
  * `created_on`(datetime) to `created_date`(str)
  * `updated_on`(datetime) to `updated_date`(str)
  * `last_transaction_time`(datetime) to `last_transaction_date_time`(str)
  * `last_failed_sale_transaction_date`(datetime) to `last_failed_sale_transaction_date`(str)

## create\_payment\_run\_data

* Introduced stricter validation for several fields using Annotated with strict=True and max_length constraints: account_id, account_number, comment, currency, document_id, payment_gateway_id, and payment_method_id.

## create\_payment\_run\_data\_item

* The type for `document_item_id` and `tax_item_id` has been changed from `Optional[StrictStr]` to `Optional[Annotated[str, Field(strict=True, max_length=32)]]`. This enforces stricter validation with a maximum length of 32 characters, which may require developers to update their code to ensure compliance with these constraints.

## create\_payment\_schedule\_items\_request\_items

* The `description` field now uses `Annotated` with `strict=True` and a maximum length of 255 characters. This change enforces stricter validation on the `description` field, which may require developers to update their code to ensure descriptions meet these constraints.

## create\_payment\_schedule\_request\_items

* The `amount` field is now required and no longer optional.
* The `scheduled_date` field is now required and no longer optional.
* The `description` field now supports a maximum length of 255 characters with strict validation using Annotated.

## create\_product\_rate\_plan\_charge\_request

* The type for `revenue_recognition_rule_name` has been changed from `RevenueRecognitionRuleName` to `StrictStr`. This change may require developers to update their code to ensure compatibility with the new type.

## create\_rsa\_signature\_request

* Added a minimum length constraint of 1 to the `uri` field, ensuring that it cannot be empty.

## create\_sequence\_set\_request

* The `name` field type has been changed from `StrictStr` to `Annotated[str, Field(min_length=1, strict=True, max_length=15)]`. This change enforces a minimum and maximum length for the `name` field, which may require developers to update their code to ensure compliance with these constraints.

## create\_subscription\_component

* Removed `amended_by_order_on`, `original_order_date`, and `specific_list_price_base` fields from the CreateSubscriptionComponent model.
* Changed `description` and `number` fields to use Annotated with strict and max_length constraints.
* Added a regular expression validator for `product_rate_plan_charge_id` field, requiring it to match a 32-character hexadecimal pattern.
* Introduced a field validator for `product_rate_plan_charge_id` to ensure it matches a specific regular expression pattern.

## create\_subscription\_rate\_plan

* Added a new field validator for `product_rate_plan_id` to ensure it matches a specific regular expression pattern.

## create\_taxation\_item

* The `jurisdiction`, `location_code`, `name`, `tax_code`, `tax_code_description`, and `tax_rate_description` fields now use the Annotated type with strict and max_length constraints. This change may require developers to ensure that the values provided for these fields meet the new constraints.

## create\_taxation\_item\_for\_invoice\_request

* Changed `invoice_item_id`, `jurisdiction`, and `name` fields to use Annotated with min_length=1 and strict=True, which may require developers to ensure these fields are not empty and strictly typed as strings.
* Added a field validator for `invoice_item_id` to enforce a regular expression pattern, ensuring it matches a 32-character hexadecimal string.

## credit\_card

* The `card_number` field is now required and must have a minimum length of 1.
* The `card_type` field is now required.

## credit\_memo\_item

* Added new fields `commitmentId` and `commitmentPeriodId` to the CreditMemoItem model.

## credit\_memo\_item\_from\_write\_off\_invoice

* The `invoice_item_id` field is now required and no longer optional.
* The `comment` field now has a strict length validation with a maximum of 255 characters.
* Added regular expression validation for `service_end_date` and `service_start_date` fields to ensure they match the format YYYY-MM-DD.

## credit\_memo\_item\_response

* Added `commitmentId` and `commitmentPeriodId` fields to the CreditMemoItemResponse model.

## credit\_memo\_taxation\_item\_from\_write\_off\_invoice

* The `taxation_item_id` field is now required (StrictStr) instead of optional (Optional[StrictStr]). This change requires developers to provide a value for `taxation_item_id` when creating instances of CreditMemoTaxationItemFromWriteOffInvoice.

## custom\_rates

* The `currency` field type has changed from `StrictStr` to `Annotated[str, Field(strict=True, max_length=3)]`. This may require updates to code that interacts with this field to ensure it adheres to the new constraints.

## debit\_memo\_due\_date

* Added a new field validator for `due_date` to ensure it matches the regular expression pattern `\d{4}-\d{1,2}-\d{1,2}`.

## decrypt\_rsa\_signature\_request

* The `public_key` and `signature` fields now use `Annotated[str, Field(min_length=1, strict=True)]` instead of `StrictStr`. This change enforces a minimum length of 1 and strict type checking, which may require developers to ensure these fields are not empty and are strictly strings.

## document\_id\_list

* The `doc_type` attribute is now required and no longer optional. Developers must provide a value for `doc_type` when creating instances of DocumentIdList.

## electronic\_payment\_options\_with\_delayed\_capture\_payment

* Removed the use of Annotated type for `auth_transaction_id` and `gateway_order_id`, which may affect type validation and constraints.

## expanded\_commitment

* Added `eligibleAccountConditions` and `eligibleChargeConditions` fields to the ExpandedCommitment model.

## expanded\_credit\_memo\_item

* Added new fields `commitmentId` and `commitmentPeriodId` to the ExpandedCreditMemoItem model.

## expanded\_invoice\_item

* Added new fields `commitmentId` and `commitmentPeriodId` to the ExpandedInvoiceItem model.

## expanded\_rate\_plan\_charge

* Added new optional fields: productCategory, productClass, productFamily, and productLine to the ExpandedRatePlanCharge model.

## expanded\_usage

* Added a new optional field `rated_amount` to the ExpandedUsage model, allowing developers to include rated amounts in their usage data.

## fulfillment

* Removed StrictBool type from `exclude_item_billing_from_revenue_accounting` and `exclude_item_booking_from_revenue_accounting` fields.
* Replaced StrictStr with Annotated[str, Field(strict=True, max_length=...)] for several fields, which may affect validation behavior.

## fulfillment\_item

* Replaced StrictStr with Annotated for fields: description, item_identifier, fulfillment_id, and fulfillment_external_id. This change enforces stricter validation rules, including max_length and min_length constraints, which may require developers to update their code to comply with these new constraints.

## get\_accounting\_period\_response

* Changed the type of `fiscal_year` from StrictStr to StrictInt, which may require developers to update their code to handle integer values instead of strings.
* Added a description for `fiscal_quarter` field, providing more clarity on its purpose.

## get\_billing\_preview\_run\_response

* Added a new optional field `filters` of type List[BillingPreviewRunFilter] to the GetBillingPreviewRunResponse model, allowing developers to access filters applied during the billing preview run.

## get\_charge\_override

* The `is_dimensional_price` field has been removed from the GetChargeOverride model. This may affect any code that relies on this field.
* The `negotiated_price_table` field has been changed from a dictionary to a list of dictionaries. This change allows for multiple negotiated price tables to be handled.

## get\_fulfillment

* Removed StrictBool type from `exclude_item_billing_from_revenue_accounting` and `exclude_item_booking_from_revenue_accounting` fields.
* Replaced StrictStr with Annotated[str, Field(strict=True, max_length=...)] for several fields, enforcing stricter validation on `carrier`, `description`, `external_id`, `fulfillment_location`, `fulfillment_system`, `order_line_item_id`, and `tracking_number`.

## get\_fulfillment\_item

* The `description` field now has a strict maximum length of 255 characters.
* The `item_identifier` field now has a strict maximum length of 36 characters.
* The `fulfillment_external_id` field now has a strict maximum length of 50 characters.

## get\_product\_rate\_plan\_charge\_response

* Changed the type of `revenue_recognition_rule_name` from `RevenueRecognitionRuleName` to `StrictStr`. This may require developers to update their code to handle the new type.

## get\_subscription\_rate\_plan\_charges\_with\_all\_segments

* Added `pricingAttributes` field for dynamic pricing, available when DynamicPricing permission is enabled.
* Added `isDimensionalPrice` field to indicate dimensional pricing, available when DynamicPricing permission is enabled.
* Added `isPriceNegotiated` field to indicate negotiated pricing, available when NegotiatedPriceTable permission is enabled.

## invoice\_entity\_prefix

* The `prefix` field now requires a non-empty string with a maximum length of 16 characters and strict type enforcement.
* The `start_number` field now requires a strict integer greater than or equal to 1.

## invoice\_for\_bulk\_update

* The `id` field is now mandatory (StrictStr) and no longer optional. Developers must ensure that this field is provided when updating an invoice.

## invoice\_item

* Added `commitment_id` and `commitment_period_id` fields to the InvoiceItem model.

## invoice\_schedule\_subscription

* The `order_key` and `subscription_key` fields are now required and no longer accept None as a valid value. This change requires developers to provide non-null values for these fields when creating or updating an InvoiceScheduleSubscription instance.

## order

* The `commitments` field in the Order model now uses `GetCommitmentOutput` instead of `UpsertCommitmentInput`. This change requires developers to update their code to handle the new data structure.

## order\_create\_account

* Changed `additional_email_addresses` from Annotated[str, Field(strict=True, max_length=1200)] to StrictStr.
* Changed `communication_profile_id` from StrictStr to Annotated[str, Field(strict=True)].
* Changed `currency` from StrictStr to Annotated[str, Field(min_length=3, strict=True, max_length=3)].
* Changed `customer_service_rep_name` from Annotated[str, Field(strict=True, max_length=50)] to StrictStr.
* Changed `hpm_credit_card_payment_method_id` from StrictStr to Annotated[str, Field(strict=True)].
* Changed `invoice_template_id` from StrictStr to Annotated[str, Field(strict=True, max_length=32)].
* Changed `name` from Annotated[str, Field(strict=True, max_length=255)] to Annotated[str, Field(min_length=1, strict=True, max_length=255)].
* Changed `purchase_order_number` from Annotated[str, Field(strict=True, max_length=100)] to StrictStr.
* Changed `sales_rep` from Annotated[str, Field(strict=True, max_length=50)] to StrictStr.
* Changed `sequence_set_id` from StrictStr to Annotated[str, Field(strict=True, max_length=32)].
* Added field validators for `communication_profile_id` and `hpm_credit_card_payment_method_id` to enforce regular expression validation.

## order\_create\_account\_contact

* Increased max_length for `city`, `county`, `state`, and `tax_region` fields from 40, 32, 40, and 32 to 100 respectively. This change may affect validation logic if developers have hardcoded length checks.
* Added min_length=1 constraint to `first_name` and `last_name` fields, which may require developers to ensure these fields are not empty.

## payment\_data

* The `auth_transaction_id` field now requires a non-empty string due to the addition of a minimum length constraint.
* The `authorized_amount` field is no longer optional and must be provided.
* The `authorized_currency` field is no longer optional and must be provided.

## payment\_entity\_prefix

* Changed `prefix` from Optional[StrictStr] to Annotated[str, Field(min_length=1, strict=True, max_length=16)], enforcing stricter validation on the prefix field.
* Changed `start_number` from Optional[StrictInt] to Annotated[int, Field(strict=True, ge=1)], enforcing stricter validation on the start_number field.

## payment\_method\_request\_tokens

* Introduced stricter validation for `token_id`, `second_token_id`, and `third_token_id` fields using Annotated with min_length and max_length constraints.

## payment\_with\_custom\_rates

* The `currency` field type has been changed from `StrictStr` to `Annotated[str, Field(strict=True, max_length=3)]`, which may require developers to update their code to ensure compatibility with the new type constraints.

## preview\_account\_info

* The `currency` field now requires a minimum length of 3 characters, enforcing stricter validation on currency codes.

## preview\_contact\_info

* Increased maximum length for `city`, `county`, `state`, and `tax_region` fields to 100 characters.
* Added new fields `address1` and `address2` with a maximum length of 255 characters each.

## preview\_existing\_subscription\_discount\_details

* Added `serviceStartDate` and `serviceEndDate` fields to the PreviewExistingSubscriptionDiscountDetails model.

## preview\_options

* The type of `preview_number_of_periods` has been changed from `Optional[StrictInt]` to `Optional[Annotated[int, Field(strict=True, ge=1)]]`. This enforces stricter validation, requiring the value to be an integer greater than or equal to 1.

## preview\_order\_order\_action

* The `change_reason` field now uses `Annotated[str, Field(strict=True, max_length=255)]`, which enforces stricter validation on the string length and strictness. This may require developers to ensure that any input for `change_reason` adheres to these constraints.

## preview\_order\_subscriptions

* The `order_actions` field is now required and no longer optional.
* The `subscription_number` field now uses `Annotated[str, Field(strict=True, max_length=100)]` instead of `Optional[StrictStr]`, enforcing stricter validation.

## preview\_start\_date

* The `preview_start_date_policy` attribute is now mandatory and no longer optional. Developers must provide a value for `previewStartDatePolicy` when using the PreviewStartDate model.

## preview\_subscription\_account\_info

* Changed `bill_cycle_day` from StrictInt to Annotated[int, Field(le=31, strict=True, ge=0)], enforcing a range between 0 and 31.
* Changed `currency` from StrictStr to Annotated[str, Field(min_length=3, strict=True, max_length=3)], enforcing a strict length of 3 characters.

## preview\_subscription\_bill\_to\_contact

* Changed type of `city`, `country`, `county`, `state`, `tax_region`, and `zip_code` fields from Optional[StrictStr] to Optional[Annotated[str, Field(strict=True, max_length=...)]] which may require developers to ensure that these fields adhere to the new strictness and length constraints.

## preview\_through\_date

* The `preview_thru_date_policy` attribute is now mandatory and no longer accepts None as a default value. Developers must provide a value for `previewThruDatePolicy`.

## product\_rate\_plan\_charge

* The type of `revenue_recognition_rule_name` has been changed from `RevenueRecognitionRuleName` to `StrictStr`. This may require developers to update their code to handle the new type.

## quantity\_for\_usage\_charges

* The `charge_id` field is now required and no longer optional.
* The `quantity` field is now required and no longer optional.

## ramp\_charge\_request

* The type for `charge_number` and `unique_token` has been changed from `Optional[StrictStr]` to `Optional[Annotated[str, Field(strict=True, max_length=50)]]`. This change enforces stricter validation on these fields, which may require developers to ensure that the values provided do not exceed 50 characters.

## ramp\_interval\_request

* The `description` and `name` fields now use Annotated with strict=True and have maximum length constraints (500 for `description` and 150 for `name`). This change may require developers to update their code to ensure these constraints are met.

## rate\_plan

* Changed `product_rate_plan_id` from Optional[StrictStr] to Optional[Annotated[str, Field(strict=True)]], which may require developers to update their code to handle the new type.
* Added a field validator for `product_rate_plan_id` to enforce a regular expression pattern, ensuring it matches a 32-character hexadecimal string.

## rate\_plan\_charge\_segment

* The alias for the field `is_price_negotiated` has been changed from `IsPriceNegotiated` to `isPriceNegotiated`. This may require updates in code where this alias is used.

## rate\_plan\_charge\_segment\_info

* Renamed alias for `is_price_negotiated` from `IsPriceNegotiated` to `isPriceNegotiated`. This change may require updates to code that references this field by its alias.

## regenerate\_booking\_request

* The `type` field now uses `Annotated[str, Field(min_length=1, strict=True)]` instead of `StrictStr`, enforcing a minimum length of 1 and strict type checking.

## remove\_catalog\_group\_product\_rate\_plan

* The `id` field now requires a non-empty string with a strict type and must match the regular expression /^[0-9a-fA-F]{32}$/.

## remove\_subscription\_rate\_plan

* Added a strict validation for the `rate_plan_id` field using a regular expression to ensure it matches a 32-character hexadecimal format.

## retry\_payment\_schedule\_item

* The `id` field is now required and no longer optional. Developers must provide a value for `id` when creating or updating a RetryPaymentScheduleItem.

## sign\_up\_tax\_info

* Added validation for `exempt_effective_date` and `exempt_expiration_date` fields to ensure they match the regular expression pattern `\d{4}-\d{1,2}-\d{1,2}`.

## submit\_data\_labeling\_job\_request

* Changed the type of `object_type` from `StrictStr` to `Annotated[str, Field(min_length=1, strict=True)]`. This may require developers to ensure that the `object_type` field is not empty and adheres to stricter validation rules.

## subscription\_data

* The `start_date` field is now mandatory. Previously, it was optional. Developers must ensure that a `start_date` is provided when creating or updating a SubscriptionData instance.

## tax\_info

* Reduced the maximum length of `exempt_entity_use_code` from 64 to 32 characters, which may require developers to update their code if they rely on longer codes.
* Added field validators for `exempt_effective_date` and `exempt_expiration_date` to ensure they match the regular expression pattern `\d{4}-\d{1,2}-\d{1,2}`.

## update\_account\_contact

* Changed data type for fields such as address1, address2, city, country, county, fax, first_name, home_phone, last_name, mobile_phone, nickname, other_phone, personal_email, state, tax_region, work_email, work_phone, and zip_code to use Annotated with strict and max_length constraints. This may require developers to update their code to ensure compatibility with the new type constraints.

## update\_accounting\_period\_request

* Changed `fiscal_year` from Optional[StrictStr] to Optional[StrictInt], which may require developers to update their code to ensure the fiscal year is provided as an integer.

## update\_catalog\_group\_request

* The `remove` field type has been changed from a list of lists to a single list of RemoveCatalogGroupProductRatePlan objects. This change requires developers to update their code to accommodate the new structure.

## update\_contact\_request

* Increased maximum length for `city` from 40 to 100 characters.
* Increased maximum length for `county` from 32 to 100 characters.
* Increased maximum length for `state` from 40 to 100 characters.
* Increased maximum length for `tax_region` from 32 to 100 characters.

## update\_credit\_memo\_with\_id

* The `id` field is now required (StrictStr) instead of optional (Optional[StrictStr]). This change requires developers to provide an `id` when using the UpdateCreditMemoWithId model.

## update\_debit\_memo\_with\_id

* The `id` field is now mandatory (StrictStr) instead of optional (Optional[StrictStr]). This change requires developers to provide an `id` value when using the UpdateDebitMemoWithId model.

## update\_discount\_invoice\_item

* Removed `processingType` field from the model, which may require updates to code that relied on this field.
* Introduced strict length validation for several fields using Annotated[str, Field(strict=True, max_length=N)], which may require developers to ensure input data adheres to these constraints.

## update\_invoice\_item

* Changed the type of several fields to Annotated[str, Field(strict=True, max_length=N)], which may require developers to ensure that string lengths do not exceed specified limits.
* Updated the `discount_items` and `tax_items` fields to include a maximum length constraint, which may require developers to adjust their data handling to comply with these limits.

## update\_order\_action\_charge\_trigger\_date

* The type for `charge_number` has been changed from `Optional[StrictStr]` to `Optional[Annotated[str, Field(strict=True, max_length=50)]]`. This change enforces a maximum length of 50 characters and strict type checking, which may require developers to update their code to comply with these constraints.

## update\_rate\_plan\_charge

* The `description` field now uses `Annotated` with `strict=True` and a maximum length of 500 characters, which may require updates to ensure compliance.
* The `rate_plan_charge_id` field now uses `Annotated` with `strict=True` and a minimum length of 1, which may require updates to ensure compliance.
* A new field validator for `rate_plan_charge_id` has been added to enforce a regular expression pattern, which may require updates to ensure compliance.

## update\_subscription\_rate\_plan

* Removed the `externally_managed_plan_id` field from the UpdateSubscriptionRatePlan model, which may affect code relying on this field.
* Changed `rate_plan_id` to use Annotated[str, Field(strict=True)], which enforces stricter type checking and may require code updates.
* Added a field validator for `rate_plan_id` to ensure it matches a specific regular expression pattern.

## update\_subscription\_rate\_plan\_custom\_fields

* The `rate_plan_id` field is now mandatory. Previously, it was optional.

## updater\_payment\_method\_request\_account\_holder\_info

* Replaced StrictStr with Annotated[str, Field(strict=True, max_length=...)] for fields: address_line1, address_line2, city, country, email, phone, state, zip_code. This change enforces stricter validation with maximum length constraints, which may require developers to update their data handling to comply with these constraints.

## upsert\_create\_commitment\_input

* The `accounting_code` field has been removed from the properties list, which may affect any code relying on this field.
* Added `eligible_account_conditions` and `eligible_charge_conditions` fields to the UpsertCreateCommitmentInput model.
* Introduced `exclude_item_booking_from_revenue_accounting` field to the UpsertCreateCommitmentInput model.

## upsert\_update\_commitment\_input

* Added a new optional field `status` of type CommitmentStatus to the UpsertUpdateCommitmentInput model.

## upsert\_update\_commitment\_period\_input

* The `end_date` field has been removed and replaced with a `status` field of type `CommitmentPeriodStatus`. This change requires developers to update their code to use the new `status` field instead of `end_date`.
