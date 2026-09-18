---
title: "Python client library 3.8.0 changelog"
sidebarTitle: "3.8.0"
---
## object\_queries\_api

* Introduced the `include_null_fields` parameter to control inclusion of null fields in the response.
* Added `query_commitment_by_key` method to query commitments by key with filters, expands, and sort capabilities.
* Added `query_commitment_segment_by_key` method to query commitment segments by key with filters, expands, and sort capabilities.
* Added `query_commitment_segments` method to query multiple commitment segments with filters, expands, and sort capabilities.
* Added `query_commitments` method to query multiple commitments with filters, expands, and sort capabilities.
* Added `query_delivery_adjustment_by_key` method to query delivery adjustments by key with filters, expands, and sort capabilities.
* Added `query_delivery_adjustments` method to query multiple delivery adjustments with filters, expands, and sort capabilities.
* Added `query_fulfillment_by_key` method for querying fulfillment by key with filters, expands, and sort capabilities.
* Added `query_fulfillments` method for querying fulfillments with filters, expands, and sort capabilities.
* Added `query_ramp_by_key` method for querying ramp by key with filters, expands, and sort capabilities.
* Added `query_ramps` method for querying ramps with filters, expands, and sort capabilities.

## models/\_\_init\_\_
* Removed UpdatePaymentMethodRequestCreditCardInfo model.
* Added CreateACHPaymentMethod model.
* Added CreateAutogiroPaymentMethod model.
* Added CreateBacsPaymentMethod model.
* Added CreateBasePaymentMethod model.
* Added CreateBecsPaymentMethod model.
* Added CreateBecsnzPaymentMethod model.
* Added CreateBetalingsservicePaymentMethod model.
* Added CreateCCReferenceTransactionPaymentMethod model.
* Added CreateCreditCardPaymentMethod model.
* Added CreateOpenPaymentMethod model.
* Added CreatePADPaymentMethod model.
* Added CreatePayPalAdaptivePaymentMethod model.
* Added CreatePayPalCPPaymentMethod model.
* Added CreatePayPalECPaymentMethod model.
* Added CreatePayPalNativeECPaymentMethod model.
* Added CreateSEPAPaymentMethod model.
* Added ExpandedCommitment model.
* Added ExpandedCommitmentSegment model.
* Added ExpandedDeliveryAdjustment model.
* Added ExpandedFulfillment model.
* Added ExpandedRamp model.
* Added InvoiceForBulkUpdate model.
* Added QueryCommitmentSegmentsResponse model.
* Added QueryCommitmentsResponse model.
* Added QueryDeliveryAdjustmentsResponse model.
* Added QueryFulfillmentsResponse model.
* Added QueryRampsResponse model.
* Added UpdateACHPaymentMethod model.
* Added UpdateBankTransferPaymentMethod model.
* Added UpdateBasePaymentMethod model.
* Added UpdateCCReferenceTransactionPaymentMethod model.
* Added UpdateCreditCardPaymentMethod model.
* Added UpdateOpenPaymentMethod model.

## attach\_invoice\_schedule\_request
* Added validation constraints to `specific_subscriptions` field with a minimum length of 1 and a maximum length of 500.

## bulk\_create\_credit\_memos\_from\_charge\_request
* Removed the use of Annotated for the `memos` field, which may affect type checking and validation.

## bulk\_create\_debit\_memos\_from\_charge\_request
* Removed the use of Annotated for the `memos` field, which may affect type checking or validation if developers relied on Annotated.
## bulk\_create\_debit\_memos\_from\_invoice\_request
* Removed the use of Annotated for the `memos` field, which may affect type checking and validation.
## bulk\_update\_credit\_memos\_request
* Removed the use of Annotated for the `memos` field, which may affect validation behavior.
## bulk\_update\_debit\_memos\_request
* Removed the use of Annotated from the memos field, which may affect validation behavior.
## bulk\_update\_invoices\_request
* The type of the `invoices` field has changed from List[UpdateInvoiceRequest] to List[InvoiceForBulkUpdate]. This requires developers to update their code to use the new InvoiceForBulkUpdate model.
## bulk\_update\_order\_line\_item
* The `itemNumber` field has been removed from the properties list, which may affect code relying on this field.
* Regular expression validation has been added to `bill_to` and `ship_to` fields, requiring them to match a specific pattern.
* Introduced stricter validation for several fields using Annotated types with constraints like `strict`, `max_length`, and `min_length`.
* Added field validators for `bill_to` and `ship_to` to ensure they match a specific regular expression pattern.
## cancel\_subscription\_request
* Added validation for `credit_memo_reason_code` to ensure it is a strict string with a maximum length of 25 characters.
* Introduced field validators for `document_date`, `invoice_target_date`, and `target_date` to ensure they match the regular expression for date format `yyyy-mm-dd`.
## create\_account\_payment\_method
* Added strict validation with maximum length constraints for several fields including `address_line1`, `address_line2`, `city`, `country`, `phone`, `state`, `zip_code`, `identity_number`, `second_token_id`, `token_id`, `baid`, `email`, and `preapproval_key`.
* Introduced a new field validator for `mit_profile_agreed_on` to ensure it matches the regular expression pattern for dates.
## create\_account\_request
* Changed the maximum length of `account_number` from 50 to 70 characters.
* Changed `currency` field to have a strict length of 3 characters.
* Removed `organizationId` and `organizationName` fields.
* Added field validators for `communication_profile_id`, `document_date`, `hpm_credit_card_payment_method_id`, `invoice_target_date`, and `target_date` to enforce specific regular expression patterns.

## create\_accounting\_code\_request
* Replaced StrictStr with `Annotated[str, Field(strict=True, max_length=...)]` for fields `gl_account_name`, `gl_account_number`, `name`, and `notes`. This change enforces stricter validation on these fields, which may require developers to ensure their input data adheres to these constraints.

## create\_accounting\_period\_request
* The `name` field now uses `Annotated[str, Field(strict=True, max_length=100)]` instead of `StrictStr`. This change enforces stricter validation on the `name` field, which may require developers to ensure their input meets these constraints.
* The `notes` field now uses `Optional[Annotated[str, Field(strict=True, max_length=255)]]` instead of `Optional[StrictStr]`. This change enforces stricter validation on the `notes` field, which may require developers to ensure their input meets these constraints.

## create\_bill\_run\_request

* The `batches` field now requires a minimum length of 1 and a maximum length of 300.
* The `bill_cycle_day` field is now strictly typed as a string.
* The `charge_type_to_exclude` field now has a maximum length of 2.

## create\_catalog\_group\_request

* The `description` and `name` fields now use `Annotated` with `strict=True`, enforcing stricter type validation.
* The `name` field is now required and has a maximum length of 255 characters.
## create\_credit\_memo\_from\_charge

* The `charges` field no longer uses the `Annotated` type for specifying a maximum length, which might affect validation logic.
* The `comment` field now uses `Annotated` with a strict length validation of 255 characters, which may require updates if longer comments were previously allowed.
* The `number` field now uses `Annotated` with a strict length validation of 255 characters, which may require updates if longer numbers were previously allowed.

## create\_credit\_memo\_from\_charge\_request

* The `charges` field is now mandatory and no longer optional.
* The `comment` field now has a strict maximum length of 255 characters.
* The `number` field now has a strict maximum length of 255 characters.

## create\_credit\_memo\_from\_invoice
* The `items` field is now mandatory and no longer optional. Developers must provide a list of CreditMemoItemFromInvoiceItem when creating a credit memo from an invoice.

## create\_credit\_memo\_from\_invoice\_request
* The `items` field is no longer optional. It has been changed from `Optional[List[CreditMemoItemFromInvoiceItem]]` to `List[CreditMemoItemFromInvoiceItem]`, meaning it must now be provided when creating a credit memo from an invoice request.

## create\_credit\_memo\_taxation\_items\_request
* The `taxation_items` field is no longer optional. It has been changed from `Optional[List[CreateTaxationItemForCreditMemoRequest]]` to `List[CreateTaxationItemForCreditMemoRequest]`. This change requires developers to provide a value for `taxation_items` when creating an instance of CreateCreditMemoTaxationItemsRequest.

## create\_debit\_memo\_from\_charge
* Removed the Annotated type constraint from the `charges` field, which may affect type checking and validation.
* Changed the `number` field to use Annotated with a `max_length` of 255, which may affect validation if previously relying on a max length of 32.

## create\_debit\_memo\_from\_charge\_request
* The `charges` field is now mandatory and no longer optional. Developers must provide a list of `DebitMemoItemFromChargeDetail` when creating a debit memo.

## create\_debit\_memo\_from\_invoice\_request
* The `items` field is now mandatory. Previously, it was optional. Developers must provide a list of `DebitMemoItemFromInvoiceItemRequest` when creating a debit memo from an invoice.

## create\_debit\_memos\_from\_invoice\_request

* The `items` field is now mandatory and no longer optional. Developers must provide a list of `DebitMemoItemFromInvoiceItemRequest` when creating a debit memo.

## create\_invoice\_collect\_request

* Removed `invoiceNumber` field from the CreateInvoiceCollectRequest model, which may require updates to code that relied on this field.
* Updated `invoice_id` field to accept both ID and Number of an existing invoice, enhancing flexibility in specifying invoices.
* Added strictness and a maximum length of 40 characters to the `payment_gateway` field using Annotated type, which may require validation updates in code handling this field.

## create\_invoice\_request

* The `comments` field now has a strict length validation with a maximum of 255 characters.
* The `invoice_items` field now requires at least one item and has a maximum limit of 1000 items.
* The `invoice_number` field now has a strict length validation with a maximum of 255 characters.
* The `payment_term` field now has a strict length validation with a maximum of 100 characters.
* The `sequence_set` field now has a strict length validation with a maximum of 50 characters.
* Added regular expression validation for `bill_to_contact_id`, `sold_to_contact_id`, `template_id`, and `ship_to_contact_id` fields to ensure they match a 32-character hexadecimal format.

## create\_invoice\_schedule\_request

* The `account_key` field is now mandatory and no longer optional.
* The `orders` field is now mandatory and no longer optional.

## create\_journal\_entry\_request

* The `currency` field now uses `Annotated[str, Field(strict=True, max_length=3)]`, enforcing stricter validation on currency codes.
* The `journal_entry_items` field now uses `Annotated[List[CreateJournalEntryRequestItem], Field(max_length=100)]`, limiting the list to a maximum of 100 items.
* The `notes` field now uses `Optional[Annotated[str, Field(strict=True, max_length=2000)]]`, enforcing stricter validation on the notes string.

## create\_order\_request

* Removed the `externally_managed_by` field from the CreateOrderRequest model.

## create\_payment\_method\_ach

* Changed type annotations for `address_line1`, `address_line2`, `city`, `country`, `phone`, `state`, and `zip_code` to use Annotated with strict and `max_length` constraints. This may require developers to ensure that input data adheres to these constraints.

## create\_payment\_method\_bank\_transfer

* Changed the type of `iban` field to use Annotated with strict validation and a minimum length of 2.
* Changed the type of `identity_number` field to use Annotated with strict validation and a maximum length of 256.

## create\_payment\_method\_cc\_reference\_transaction

* The type for `second_token_id` and `token_id` has been changed from `StrictStr` to `Annotated[str, Field]`. This change may require developers to update their code to accommodate the new type annotations.

## create\_payment\_method\_credit\_card

* Added a field validator for `mit_profile_agreed_on` to ensure it matches the regular expression pattern `\d{4}-\d{1,2}-\d{1,2}`.

## create\_payment\_method\_decryption\_request

* Added strict validation for the `payment_gateway` field using Annotated with a maximum length of 40 characters.

## create\_payment\_method\_pay\_pal\_ec\_pay\_pal\_native\_ec\_pay\_pal\_cp

* The `baid` and `email` fields now use `Annotated` with stricter validation constraints. `baid` requires a minimum length of 1 and a maximum length of 64, while `email` has a maximum length of 80. This change may require developers to ensure that the values provided for these fields meet the new constraints.
## create\_payment\_method\_request
* Removed direct attribute assignments and validation bypass in the constructor. Developers must now use the new constructor logic with positional or keyword arguments.
* Removed the `to_dict` and `from_dict` methods, replaced with `to_json` and `from_json` methods for serialization and deserialization.
* Removed `additional_properties` handling, which may affect how extra fields are managed.
* Replaced individual field definitions with a oneOf schema validation approach, requiring developers to use specific payment method types.
* Introduced oneOf schema validation for `actual_instance`, allowing for more flexible and accurate type validation for different payment method types.
* Added `field_validator` for `actual_instance` to ensure only one valid schema is matched.
## create\_payment\_method\_updater\_batch\_request
* The type for `updater_account_id` has been changed from `StrictStr` to `Annotated[str, Field(strict=True)]`. This may require updates to code that interacts with this field.
* Added a field validator for `updater_account_id` to ensure it matches the regular expression /^[0-9a-fA-F]&#123;32&#125;$/.
## create\_payment\_request
* The `payment_gateway_number` field now uses `Annotated[str, Field(strict=True, max_length=40)]` instead of `Optional[StrictStr]`. This change enforces stricter validation on the field.
* The `gateway_order_id` field now uses `Optional[StrictStr]` instead of `Annotated[str, Field(strict=True, max_length=50)]`. This change modifies the validation approach for the field.
## create\_payment\_run\_request
* Changed the type of `account_id`, `billing_run_id`, and `payment_gateway_id` fields to use Annotated with strict=True and max_length=32, which may require developers to ensure these fields meet the new constraints.
## create\_payment\_schedule\_items\_request
* The `items` attribute is no longer optional. It must now be provided as a non-optional list of CreatePaymentScheduleItemsRequestItems.

## create\_payment\_schedule\_request
* The `description` field now uses `Annotated` with `strict=True` and a maximum length of 255, enforcing stricter validation.
* The `occurrences` field now uses `Annotated` with `strict=True` and a maximum value of 1000, enforcing stricter validation.

## create\_payment\_schedules\_request
* The `payment_schedules` attribute is no longer optional. It has been changed from `Optional[List[CreatePaymentScheduleRequest]]` to `List[CreatePaymentScheduleRequest]`. This change requires developers to always provide a list of payment schedules when creating a `CreatePaymentSchedulesRequest` instance.
## create\_rsa\_signature\_request
* Introduced the use of Annotated from typing_extensions to enforce stricter validation on the `uri` field, including a maximum length of 2000 characters.
## create\_stored\_credential\_profile\_request
* Added a field validator for `agreed_on` to ensure it matches the regular expression pattern `\d{4}-\d{1,2}-\d{1,2}`.
## create\_subscription\_request
* Changed `initial_term` from `Optional[StrictInt]` to `Optional[Annotated[int, Field(strict=True, ge=1)]]`, enforcing a minimum value of 1.
* Changed `renewal_term` from `StrictInt` to `Annotated[int, Field(strict=True, ge=0)]`, enforcing a minimum value of 0.
* Changed `credit_memo_reason_code`, `notes`, and `subscription_number` to use `Annotated[str, Field(strict=True, max_length=...)]`, enforcing maximum length constraints.
* Added regular expression validation for `document_date`, `invoice_target_date`, and `target_date` fields to ensure they match the `yyyy-mm-dd` format.

## create\_taxation\_items\_for\_debit\_memo\_request
* The `taxation_items` field has been changed from an Optional[List[CreateTaxationItemForDebitMemo]] to a List[CreateTaxationItemForDebitMemo]. This means that `taxation_items` can no longer be None and must always be provided as a list, even if empty.

## create\_taxation\_items\_request
* Changed the type of `taxation_items` from Optional[List[CreateTaxationItemForInvoiceRequest]] to Annotated[List[CreateTaxationItemForInvoiceRequest], Field(min_length=1, max_length=50)], enforcing a minimum of 1 and a maximum of 50 items. This change requires developers to ensure that the list of taxation items is not empty and does not exceed 50 items.
## detach\_invoice\_schedule\_request
* Added validation for `specific_subscriptions` field with a minimum length of 1 and a maximum length of 500 using Annotated.
## email\_billing\_document\_request
* Added a regular expression validator for the `pdf_file_id` field to ensure it matches a 32-character hexadecimal string.
## generate\_billing\_document\_request
* The `effective_date` field is now mandatory and no longer optional.
* The `target_date` field is now mandatory and no longer optional.
* The `credit_memo_reason_code` field now uses the Annotated type with a maximum length of 25 characters, enforcing stricter validation.
## preview\_existing\_subscription\_request
* The `preview_through_date` field is no longer optional and must be provided when creating a PreviewExistingSubscriptionRequest.
## preview\_payment\_schedule
* The `occurrences` field now uses `Annotated` with a constraint of `le=1000` and `strict=True`, which may require developers to ensure that the value for `occurrences` does not exceed 1000 and is strictly an integer.
## preview\_subscription\_request
* Replaced StrictInt with Annotated[int, Field(strict=True, ge=1)] for initial_term to enforce stricter validation.
* Replaced StrictStr with Annotated[str, Field(strict=True, max_length=500)] for notes to enforce stricter validation.
* Added field validators for document_date, invoice_target_date, and target_date to ensure they match the yyyy-mm-dd format.
## put\_attachment\_request
* The `description` and `file_name` fields now use Annotated with strict validation and have a maximum length of 255 characters. `file_name` also requires a minimum length of 1 character.
## reconcile\_refund\_request
* The `action` field is now required and no longer optional.
* The `gateway_reconciliation_status` field is now required and no longer optional.
* Added strict validation with a maximum length of 64 characters for `gateway_reconciliation_reason`, `gateway_reconciliation_status`, and `payout_id` fields using Annotated.
## refund\_credit\_memo\_request
* The `gateway_id` field now has a maximum length restriction of 35 characters and is strictly validated as a string. This may require developers to ensure that the gateway ID values they provide conform to this new constraint.
## regenerate\_billing\_request
* The `type` attribute is now mandatory (StrictStr) instead of optional.
* The `documentId` attribute has been renamed to `id`.
## regenerate\_booking\_request
* The `type` attribute is now mandatory and no longer optional.
* The `subscriptionNumber` attribute has been renamed to `subscriptionName`.
## reject\_payment\_request
* Changed type annotations for several fields to use Annotated with strict and max_length constraints, which may require developers to ensure their input data adheres to these new constraints.
## renew\_subscription\_request
* Added field validators for `document_date`, `invoice_target_date`, and `target_date` to ensure they match the regular expression pattern `\d{4}-\d{1,2}-\d{1,2}`.
* Updated `credit_memo_reason_code` to use `Annotated` with a strict string type and a maximum length of 25.
## resume\_subscription\_request
* Added validation for `credit_memo_reason_code` to enforce a maximum length of 25 characters.
* Introduced field validators for `document_date`, `invoice_target_date`, and `target_date` to ensure they match the regular expression pattern for date format `yyyy-mm-dd`.
## reverse\_credit\_memo\_request
* Introduced the use of `Annotated` from `typing_extensions` to enforce a maximum length of 255 characters on the `comment` field, ensuring stricter validation.

## reverse\_payment\_request
* The fields `gateway_reconciliation_reason`, `gateway_reconciliation_status`, `gateway_response`, `gateway_response_code`, and `payout_id` now enforce strict typing and have maximum length constraints. This may require developers to validate input lengths and types to avoid errors.
## settle\_payment\_request
* Added strict validation with a maximum length of 64 characters for `gateway_reconciliation_reason`, `gateway_reconciliation_status`, and `payout_id` fields using Annotated type.
## submit\_data\_labeling\_job\_request
* The `ids` field now has a maximum length constraint of 100,000.
* The `org_ids` field now has a maximum length constraint of 60.
* The `orgs` field now has a maximum length constraint of 60.
* The `query` field now has a maximum length constraint of 2000 and is marked as strict.
## suspend\_subscription\_request
* Added validation for `credit_memo_reason_code` to enforce a maximum length of 25 characters.
* Introduced field validators for `document_date`, `invoice_target_date`, and `target_date` to ensure they match the regular expression pattern for date format `yyyy-mm-dd`.
## update\_account\_request
* Added strict validation for `bill_to_contact_id`, `ship_to_contact_id`, `default_payment_method_id`, and `sold_to_contact_id` fields using regular expressions to ensure they match a 32-character hexadecimal format.
* Introduced `Annotated` type with `Field` for several string fields to enforce strict validation and length constraints.
## update\_accounting\_code\_request
* The type for `gl_account_name`, `gl_account_number`, `name`, and `notes` fields has been changed from `Optional[StrictStr]` to `Optional[Annotated[str, Field(strict=True, max_length=...)]`. This introduces strict validation on these fields, which may require developers to ensure that the input values conform to the specified constraints.
## update\_accounting\_period\_request
* The alias for `fiscal_quarter` has been changed to `fiscalQuarter`. This may require updates to code that references this field by its alias.
* The `name` field now enforces a maximum length of 100 characters and is strictly typed as a string.
* The `notes` field now enforces a maximum length of 255 characters and is strictly typed as a string.
## update\_basic\_summary\_journal\_entry\_request
* Removed StrictStr from the `notes` field, which may affect validation behavior.
* Added max_length constraint of 100 to `journal_entry_items` field.
* Added strict and max_length constraints to `notes` field, enforcing a maximum length of 2000 characters.
## update\_debit\_memo\_request
* Added a new field validator for `due_date` to ensure it matches the regular expression pattern `\d{4}-\d{1,2}-\d{1,2}`.
## update\_debit\_memo\_with\_id
* Added a field validator for `due_date` to ensure it matches the regular expression pattern `\d{4}-\d{1,2}-\d{1,2}`.
## update\_fulfillment\_item\_request
* The `description` field now uses `Annotated[str, Field(strict=True, max_length=255)]` instead of `Optional[StrictStr]`, enforcing stricter validation with a maximum length of 255 characters.
* The `item_identifier` field now uses `Annotated[str, Field(strict=True, max_length=36)]` instead of `Optional[StrictStr]`, enforcing stricter validation with a maximum length of 36 characters.
## update\_fulfillment\_request
* Removed fields `exclude_item_billing_from_revenue_accounting`, `exclude_item_booking_from_revenue_accounting`, `fulfillment_type`, and `order_line_item_id`.
* Changed type of `carrier`, `description`, `external_id`, `fulfillment_location`, `fulfillment_system`, and `tracking_number` to use Annotated with strict and max_length constraints.
## update\_invoice\_request
* Removed the `id` field from the UpdateInvoiceRequest model, which may require updates to code that relies on this field.
* Added validation for `due_date` and `invoice_date` fields to ensure they match the regular expression pattern `\d{4}-\d{1,2}-\d{1,2}`.
* Updated `invoice_items` field to enforce a minimum length of 1 and a maximum length of 1000.
* Added a maximum length constraint of 32 characters to the `template_id` field.
## update\_order\_action
* The type of `change_reason` has been modified from `Optional[StrictStr]` to `Optional[Annotated[str, Field(strict=True, max_length=255)]]`. This change enforces stricter validation on the `change_reason` field, which now has a maximum length of 255 characters and requires strict type checking.
## update\_order\_action\_request
* Removed `order_action` field, which may require updates to code that relied on this field.
* Added `change_reason` field with strict validation and a maximum length of 255 characters.
* Added `custom_fields` field to support custom fields for an Order Action object.
## update\_order\_line\_item
* Added strict validation for several fields using Annotated and Field, including `accounting_code`, `adjustment_liability_accounting_code`, `adjustment_revenue_accounting_code`, `bill_to`, `contract_asset_accounting_code`, `contract_liability_accounting_code`, `contract_recognized_revenue_accounting_code`, `deferred_revenue_accounting_code`, `description`, `invoice_group_number`, `owner_account_number`, `product_code`, `purchase_order_number`, `quantity`, `recognized_revenue_accounting_code`, `related_subscription_number`, `revenue_recognition_rule`, `sequence_set_id`, `payment_term`, `invoice_template_id`, `sold_to`, `ship_to`, `tax_code`, and `unbilled_receivables_accounting_code`.
* Introduced regular expression validators for `bill_to` and `ship_to` fields to ensure they match a specific pattern.
## update\_order\_line\_item\_request
* The `itemNumber` field has been removed from the properties list, which may affect code relying on this field.
* The `bill_to` and `ship_to` fields now have regular expression validation, which may cause validation errors if existing values do not conform to the specified pattern.
* Added strict validation and maximum length constraints to several fields, including `accounting_code`, `adjustment_liability_accounting_code`, `adjustment_revenue_accounting_code`, `contract_asset_accounting_code`, `contract_liability_accounting_code`, `contract_recognized_revenue_accounting_code`, `deferred_revenue_accounting_code`, `description`, `revenue_recognition_timing`, `revenue_amortization_method`, `item_name`, `owner_account_number`, `product_code`, `purchase_order_number`, `recognized_revenue_accounting_code`, `related_subscription_number`, `revenue_recognition_rule`, `sequence_set_id`, `payment_term`, `invoice_template_id`, `sold_to`, `ship_to`, `tax_code`, and `unbilled_receivables_accounting_code`.
* Introduced minimum length validation for `invoice_group_number` and `sold_to` fields.
## update\_order\_request
* Removed the `externally_managed_by` field from the UpdateOrderRequest model. This may require developers to update their code if they were using this field.
## update\_payment\_method\_request
* Removed direct attribute setting and validation bypass in the constructor. Developers must now use the new constructor logic that validates the `actual_instance` against one of the specified schemas.
* The `actual_instance` must match exactly one of the specified schemas: UpdateACHPaymentMethod, UpdateBankTransferPaymentMethod, UpdateCCReferenceTransactionPaymentMethod, UpdateCreditCardPaymentMethod, or UpdateOpenPaymentMethod. Multiple or no matches will raise a ValueError.
* Removed the `additional_properties` handling and related methods, which may affect how extra fields are managed.
* Introduced a new validation mechanism using `field_validator` to ensure `actual_instance` matches one of the specified schemas.
* Added support for deserializing JSON strings into specific payment method update types using the `from_json` method.
## update\_payment\_run\_request
* Changed the type of `account_id`, `billing_run_id`, and `payment_gateway_id` fields to use Annotated with strict=True and max_length=32, which may require developers to ensure that these fields conform to the new constraints.
## update\_payment\_schedule\_item\_request
* The `description` field now uses `Annotated` with `strict=True` and a maximum length of 255 characters. This change may require developers to ensure that any descriptions provided do not exceed this length and adhere to strict typing.
## update\_payment\_schedule\_request
* Added validation for `occurrences` field with a maximum limit of 1000 and strict type checking.
## update\_sequence\_set\_request
* The `name` field now uses `Annotated[str, Field(min_length=1, strict=True, max_length=15)]` instead of `Optional[StrictStr]`. This change enforces a minimum length of 1 and a maximum length of 15 for the `name` field, which may require developers to update their code to comply with these constraints.
## update\_subscription\_request
* Added strict validation for `credit_memo_reason_code`, `current_term`, `notes`, and `renewal_term` fields using Annotated with constraints.
* Introduced regular expression validators for `document_date`, `invoice_target_date`, and `target_date` fields to ensure they match the yyyy-mm-dd format.
## usage\_overage\_pricing\_override
* Added `originalListPrice` field to the UsageOveragePricingOverride model, allowing developers to access the original list price of a product or service.
## usage\_overage\_pricing\_update
* Added `originalListPrice` field to the UsageOveragePricingUpdate model, allowing developers to access or set the original list price of a product or service.
## write\_off\_credit\_memo\_request
* Added strict validation to the `comment` field using Annotated type with a maximum length of 255 characters.
