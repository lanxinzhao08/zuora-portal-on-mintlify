---
title: "Python client library 3.16.0 changelog"
sidebarTitle: "3.16.0"
---
## \_\_init\_\_

* Removed ExpandedInvoiceScheduleBooking class.
* Added CommitmentPrepaymentType class.
* Added ExpandedBundle class.
* Added ExpandedPrepayment class.
* Added ExpandedPrepaymentDefinition class.
* Added PrepaymentDefinition class.
* Added PrepaymentFrequency class.
* Added PrepaymentTypeEnum class.
* Added QueryBundlesResponse class.
* Added QueryPrepaymentDefinitionsResponse class.
* Added QueryPrepaymentsResponse class.

## object\_queries\_api

* Changed supported expands for query\_commitment\_associated\_item\_by\_key from `commitment,account` to `commitment,invoiceowner`.
* Changed supported expands for query\_commitment\_associated\_items from `commitment,account` to `commitment,invoiceowner`.
* Changed supported expands for query\_commitment\_by\_key from `account,commitmentschedules,commitmentschedules.commitmentperiods,commitmentassociatedaccounts,commitmentassociateditems,commitmentassociateditems.account` to `commitmentowner,account,commitmentschedules,commitmentschedules.commitmentperiods,commitmentassociatedaccounts,commitmentassociatedaccounts.account,commitmentassociateditems,commitmentassociateditems.invoiceowner,commitmentschedules.prepaymentdefinitions,commitmentschedules.commitmentperiods.prepayments`.
* Changed supported expands for query\_commitment\_period\_by\_key from `account,commitmenttransactions` to `account,commitmenttransactions,prepayments`.
* Changed supported expands for query\_commitment\_periods from `account,commitmenttransactions` to `account,commitmenttransactions,prepayments`.
* Changed supported expands for query\_commitment\_schedule\_by\_key from `commitmentperiods` to `commitmentperiods,prepaymentdefinitions,commitmentperiods.prepayments`.
* Changed supported expands for query\_commitment\_schedules from `commitmentperiods` to `commitmentperiods,prepaymentdefinitions,commitmentperiods.prepayments`.
* Changed supported expands for query\_commitments from `account,commitmentschedules,commitmentschedules.commitmentperiods,commitmentassociatedaccounts,commitmentassociateditems,commitmentassociateditems.account` to `commitmentowner,account,commitmentschedules,commitmentschedules.commitmentperiods,commitmentassociatedaccounts,commitmentassociatedaccounts.account,commitmentassociateditems,commitmentassociateditems.invoiceowner,commitmentschedules.prepaymentdefinitions,commitmentschedules.commitmentperiods.prepayments`.
* Added new method: query\_bundle\_by\_key
* Added new method: query\_bundle\_by\_key\_with\_http\_info
* Added new method: query\_bundles
* Added new method: query\_bundles\_with\_http\_info
* Added new method: query\_prepayment\_by\_key
* Added new method: query\_prepayment\_by\_key\_with\_http\_info
* Added new method: query\_prepayment\_definition\_by\_key
* Added new method: query\_prepayment\_definition\_by\_key\_with\_http\_info
* Added new method: query\_prepayment\_definitions
* Added new method: query\_prepayment\_definitions\_with\_http\_info
* Added new method: query\_prepayments with various parameters including idempotency\_key, accept\_encoding, content\_encoding, zuora\_track\_id, zuora\_entity\_ids, authorization, zuora\_version, zuora\_org\_ids, page\_size, cursor, sort, expand, filter, fields, include\_null\_fields, \_request\_timeout, \_request\_auth, \_content\_type, \_headers, \_host\_index.
* Added new method: query\_prepayments\_with\_http\_info with similar parameters as query\_prepayments.
* Added new private method: \_query\_prepayments\_serialize to handle serialization of parameters for the query\_prepayments method.
* Added new parameters to the existing method \_query\_prepayment\_definitions\_serialize: zuora\_org\_ids, page\_size, cursor, sort, expand, filter, fields, include\_null\_fields, \_request\_auth, \_content\_type, \_headers, \_host\_index.

## models/\_\_init\_\_

* Removed class: ExpandedInvoiceScheduleBooking
* Added class: CommitmentPrepaymentType
* Added class: ExpandedBundle
* Added class: ExpandedPrepayment
* Added class: ExpandedPrepaymentDefinition
* Added class: PrepaymentDefinition
* Added class: PrepaymentFrequency
* Added class: PrepaymentTypeEnum
* Added class: QueryBundlesResponse
* Added class: QueryPrepaymentDefinitionsResponse
* Added class: QueryPrepaymentsResponse

## billing\_document\_item\_processing\_type

* New enum value `PREPAYMENTBILLING` added to BillingDocumentItemProcessingType.
* New enum value `PREPAYMENTAPPLICATION` added to BillingDocumentItemProcessingType.

## commitment\_base\_attributes

* Added a new field `prepayment_type` of type `Optional[CommitmentPrepaymentType]` to the `CommitmentBaseAttributes` class.

## commitment\_input

* Added a new field `prepayment_type` of type `Optional[CommitmentPrepaymentType]` to the `CommitmentInput` class.
* Included `prepaymentType` in the `__properties` list of the `CommitmentInput` class.

## commitment\_output

* Added a new field `prepayment_type` of type `CommitmentPrepaymentType` to the `CommitmentOutput` class.

## commitment\_output\_schedules\_inner

* Added a new field `prepayment_definition` of type `Optional[PrepaymentDefinition]` to the class `CommitmentOutputSchedulesInner`.
* Updated the `__properties` list to include the new field `prepaymentDefinition`.
* Modified the `to_dict` method to include the `prepaymentDefinition` field by calling its `to_dict` method if it is present.
* Updated the `from_dict` method to handle the `prepaymentDefinition` field by using `PrepaymentDefinition.from_dict` if it is present.

## commitment\_schedule\_attributes

* Added a new field `prepayment_definition` of type `Optional[PrepaymentDefinition]` to the CommitmentScheduleAttributes class.
* Included `prepaymentDefinition` in the \_\_properties list of the CommitmentScheduleAttributes class.
* Added logic to convert `prepayment_definition` to a dictionary in the to\_dict method of the CommitmentScheduleAttributes class.
* Added logic to initialize `prepaymentDefinition` from a dictionary in the from\_dict method of the CommitmentScheduleAttributes class.

## commitment\_schedule\_input

* Added a new field `prepayment_definition` of type `Optional[PrepaymentDefinition]` to the CommitmentScheduleInput class.

## commitment\_schedule\_output

* Added a new field `prepayment_definition` of type `Optional[PrepaymentDefinition]` to the CommitmentScheduleOutput class.
* Updated the `__properties` list to include `prepaymentDefinition`.
* Modified the `to_dict` method to include `prepaymentDefinition` by calling its `to_dict` method if it is not None.
* Updated the `from_dict` method to handle `prepaymentDefinition` by using `PrepaymentDefinition.from_dict` if it is present.

## expanded\_account

* Added new field `credit_memo_template_id` of type Optional[StrictStr] with alias `creditMemoTemplateId` to the ExpandedAccount model.
* Added new field `debit_memo_template_id` of type Optional[StrictStr] with alias `debitMemoTemplateId` to the ExpandedAccount model.

## expanded\_commitment

* Added new field `commitment_owner_id` of type Optional[StrictStr] with alias `commitmentOwnerId`.
* Added new field `commitment_owner_number` of type Optional[StrictStr] with alias `commitmentOwnerNumber`.
* Added new field `cancellation_reason` of type Optional[StrictStr] with alias `cancellationReason`.
* Added new field `cancellation_effective_date` of type Optional[date] with alias `cancellationEffectiveDate`.
* Added new field `cancellation_policy` of type Optional[StrictStr] with alias `cancellationPolicy`.
* Added new field `organization_id` of type Optional[StrictStr] with alias `organizationId`.
* Added new field `prepayment_type` of type Optional[StrictStr] with alias `prepaymentType`.
* Added new field `commitment_owner` of type Optional[ExpandedAccount] with alias `commitmentOwner`.

## expanded\_commitment\_associated\_account

* Added a new optional field `organization_id` to the ExpandedCommitmentAssociatedAccount model.

## expanded\_commitment\_associated\_item

* Added a new field `organization_id` of type Optional[StrictStr] with alias `organizationId` to the ExpandedCommitmentAssociatedItem class.
* Added a new field `invoice_owner` of type Optional[ExpandedAccount] with alias `invoiceOwner` to the ExpandedCommitmentAssociatedItem class.

## expanded\_commitment\_period

* Added import for ExpandedPrepayment.
* Added new field `committed_amount` of type Optional[Union[StrictFloat, StrictInt]] with alias `committedAmount`.
* Added new field `organization_id` of type Optional[StrictStr] with alias `organizationId`.
* Added new field `prepayments` of type Optional[List[ExpandedPrepayment]].
* Updated \_\_properties list to include `committedAmount`, `organizationId`, and `prepayments`.
* Modified to\_dict method to include `prepayments`.
* Modified from\_dict method to include `committedAmount`, `organizationId`, and `prepayments`.

## expanded\_commitment\_schedule

* Added new import for ExpandedPrepaymentDefinition.
* Added new field `organization_id` of type Optional[StrictStr] to the ExpandedCommitmentSchedule class.
* Added new field `prepayment_definitions` of type Optional[List[ExpandedPrepaymentDefinition]] to the ExpandedCommitmentSchedule class.
* Updated the \_\_properties list to include `organizationId` and `prepaymentDefinitions`.
* Modified the to\_dict method to include serialization logic for `prepayment_definitions`.
* Updated the from\_dict method to include deserialization logic for `organizationId` and `prepaymentDefinitions`.

## expanded\_commitment\_transaction

* Added new field `organization_id` to the ExpandedCommitmentTransaction model.

## expanded\_credit\_memo\_item

* Added new field `invoice_schedule` of type Optional[ExpandedInvoiceSchedule].
* Added new field `invoice_schedule_item` of type Optional[ExpandedInvoiceScheduleItem].

## expanded\_invoice

* Added new field `is_split` of type Optional[StrictBool] to the ExpandedInvoice class.

## expanded\_invoice\_item

* Added new field `invoice_schedule` of type Optional[ExpandedInvoiceSchedule] with alias `invoiceSchedule`.
* Added new field `invoice_schedule_item` of type Optional[ExpandedInvoiceScheduleItem] with alias `invoiceScheduleItem`.

## expanded\_invoice\_schedule

* Removed fields: `invoice_schedule_items`, `invoice_schedule_bookings`
* Removed methods: to\_dict() overrides for invoice\_schedule\_items and invoice\_schedule\_bookings
* Added model\_rebuild method call with raise\_errors=False

## expanded\_invoice\_schedule\_booking

* The class ExpandedInvoiceScheduleBooking has been removed.

## expanded\_invoice\_schedule\_item

* Removed fields: `invoice`, `credit_memo`
* Removed imports: ExpandedCreditMemo, ExpandedInvoice
* Removed method logic: to\_dict() calls for `invoice` and `credit_memo`

## expanded\_payment\_method

* New fields added: `card_brand`, `card_class`, `card_product_type`, `card_issuing_bank`, `card_issuing_country`

## expanded\_payment\_run

* Added new field `account_id` with alias `accountId` to the ExpandedPaymentRun class.
* Added new field `batch` to the ExpandedPaymentRun class.
* Added new field `billing_cycle_day` with alias `billingCycleDay` to the ExpandedPaymentRun class.
* Added new field `currency` to the ExpandedPaymentRun class.
* Added new field `payment_gateway_id` with alias `paymentGatewayId` to the ExpandedPaymentRun class.
* Added new field `billing_run_id` with alias `billingRunId` to the ExpandedPaymentRun class.

## expanded\_product

* Added new optional field `product_type` to the ExpandedProduct model.
* Added new optional field `bundle_config` to the ExpandedProduct model.

## expanded\_product\_rate\_plan\_charge

* Field `optional` was added.

## expanded\_rate\_plan\_charge

* Added new field `percentage` of type Optional[Union[StrictFloat, StrictInt]] to the ExpandedRatePlanCharge class.
* Added new field `maximum_amount` of type Optional[Union[StrictFloat, StrictInt]] with alias `maximumAmount` to the ExpandedRatePlanCharge class.
* Added new field `minimum_amount` of type Optional[Union[StrictFloat, StrictInt]] with alias `minimumAmount` to the ExpandedRatePlanCharge class.
* Added new field `eligible_account_conditions` of type Optional[StrictStr] with alias `eligibleAccountConditions` to the ExpandedRatePlanCharge class.
* Added new field `eligible_charge_conditions` of type Optional[StrictStr] with alias `eligibleChargeConditions` to the ExpandedRatePlanCharge class.

## get\_commitment\_output

* Added a new field `prepayment_type` of type `Optional[CommitmentPrepaymentType]` to the GetCommitmentOutput class.

## get\_commitment\_response

* Added a new import for PrepaymentTypeEnum.
* Added a new optional field `prepayment_type` of type PrepaymentTypeEnum to the GetCommitmentResponse class.

## invoice\_item\_preview\_result\_processing\_type

* New enum value `PrepaymentBilling` added to InvoiceItemPreviewResultProcessingType.
* New enum value `PrepaymentApplication` added to InvoiceItemPreviewResultProcessingType.

## product\_rate\_plan

* Updated the type of the `product_rate_plan_charges` field from `Optional[List[ProductRatePlanCharge]]` to `Optional[List[ProductRatePlanChargeRest]]`.

## upsert\_create\_commitment\_input

* Added a new field `prepayment_type` of type `CommitmentPrepaymentType` to the `UpsertCreateCommitmentInput` class.

## upsert\_create\_commitment\_input\_all\_of\_schedules

* Added a new field `prepayment_definition` of type `Optional[PrepaymentDefinition]` to the class `UpsertCreateCommitmentInputAllOfSchedules`.
* Updated the `__properties` list to include the new field `prepaymentDefinition`.
* Added logic to handle `prepayment_definition` in the `to_dict` method, ensuring it calls `to_dict()` on `prepayment_definition` if it is not None.
* Added logic to handle `prepaymentDefinition` in the `from_dict` method, using `PrepaymentDefinition.from_dict` if `prepaymentDefinition` is present in the input dictionary.

## upsert\_create\_commitment\_schedule\_input

* Added a new field `prepayment_definition` of type `Optional[PrepaymentDefinition]` to the `UpsertCreateCommitmentScheduleInput` class.

## upsert\_update\_commitment\_input

* Added a new field `prepayment_type` of type `Optional[CommitmentPrepaymentType]` to the `UpsertUpdateCommitmentInput` class.

## upsert\_update\_commitment\_schedule\_input

* Added a new field `prepayment_definition` of type `Optional[PrepaymentDefinition]` to the `UpsertUpdateCommitmentScheduleInput` class.
