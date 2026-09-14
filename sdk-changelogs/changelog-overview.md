---
markdown:
  toc:
    hide: true
---

# Changelog for Zuora client libraries

## August 17, 2026

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.20.0`

- In the ZuoraClient class, added CustomLogicApi, EComplianceApi, and EReportingApi.

- In the CreateOrderResponse, CreateOrderResult, and GetAsyncCreateOrderJobResponse classes, added the following fields:
  - `paymentErrorCode`
  - `paymentErrorMessage`
  - `paymentStatus`

- In the CreateProductRatePlanChargeRequest, GetProductRatePlanChargeResponse, ProductRatePlanCharge, and UpdateProductRatePlanChargeRequest classes, added the following fields:
  - `drawdownScope`
  - `prepaymentUnitType`
  - `validityPeriodAlignment`
  - `validityPeriodProrationOption`

  The `commitmentLevel` and `commitmentType` fields are now deprecated. Use `validityPeriodAnchorDate` instead.

- In the CreateOrderCreateSubscription, CreateOrderTermsAndConditions, OrderActionOwnerTransfer, OrderActionRenewSubscription, OrderActionTermsAndConditions, and PreviewOrderCreateSubscription classes, added the following fields:
  - `billToContact`
  - `shipToContact`
  - `soldToContact`

For more detailed changes, see [Java client library changelog](java/changelog-3200.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.20.0`

- In the ZuoraClient class, added CustomLogicApi, EComplianceApi, and EReportingApi.

- In the CreateOrderResponse, CreateOrderResult, and GetAsyncCreateOrderJobResponse classes, added the following properties:
  - `paymentErrorCode`
  - `paymentErrorMessage`
  - `paymentStatus`

- In the CreateProductRatePlanChargeRequest, GetProductRatePlanChargeResponse, ProductRatePlanCharge, and UpdateProductRatePlanChargeRequest classes, added the following properties:
  - `drawdownScope`
  - `prepaymentUnitType`
  - `validityPeriodAlignment`
  - `validityPeriodProrationOption`

  The `commitmentLevel` and `commitmentType` properties are now deprecated. Use `validityPeriodAnchorDate` instead.

- In the CreateOrderCreateSubscription, CreateOrderTermsAndConditions, OrderActionOwnerTransfer, OrderActionRenewSubscription, OrderActionTermsAndConditions, and PreviewOrderCreateSubscription classes, added the following properties:
  - `billToContact`
  - `shipToContact`
  - `soldToContact`

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-3200.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.20.0`

- In the zuora\_client module, added CustomLogicApi, EComplianceApi, and EReportingApi.

- In the create\_order\_response, create\_order\_result, and get\_async\_create\_order\_job\_response models, added the following fields:
  - `payment_error_code`
  - `payment_error_message`
  - `payment_status`

- In the create\_product\_rate\_plan\_charge\_request, get\_product\_rate\_plan\_charge\_response, product\_rate\_plan\_charge, and update\_product\_rate\_plan\_charge\_request models, added the following fields:
  - `drawdown_scope`
  - `prepayment_unit_type`
  - `validity_period_alignment`
  - `validity_period_proration_option`

  The `commitment_level` and `commitment_type` fields are now deprecated. Use `validity_period_anchor_date` instead.

- In the create\_order\_create\_subscription, create\_order\_terms\_and\_conditions, order\_action\_owner\_transfer, order\_action\_renew\_subscription, order\_action\_terms\_and\_conditions, and preview\_order\_create\_subscription models, added the following fields:
  - `bill_to_contact`
  - `ship_to_contact`
  - `sold_to_contact`

For more detailed changes, see [Python client library changelog](python/changelog-3200.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.12.0`

- In the ZuoraClient class, added CustomLogicApi, EComplianceApi, and EReportingApi.

- In the CreateOrderResponse, CreateOrderResult, and GetAsyncCreateOrderJobResponse classes, added the following properties:
  - `PaymentErrorCode`
  - `PaymentErrorMessage`
  - `PaymentStatus`

- In the CreateProductRatePlanChargeRequest, GetProductRatePlanChargeResponse, ProductRatePlanCharge, and UpdateProductRatePlanChargeRequest classes, added the following properties:
  - `DrawdownScope`
  - `PrepaymentUnitType`
  - `ValidityPeriodAlignment`
  - `ValidityPeriodProrationOption`

  The `CommitmentLevel` and `CommitmentType` properties are now deprecated. Use `ValidityPeriodAnchorDate` instead.

- In the CreateOrderCreateSubscription, CreateOrderTermsAndConditions, OrderActionOwnerTransfer, OrderActionRenewSubscription, OrderActionTermsAndConditions, and PreviewOrderCreateSubscription classes, added the following properties:
  - `BillToContact`
  - `ShipToContact`
  - `SoldToContact`

For more detailed changes, see [C# client library changelog](csharp/changelog-1120.md).

  {% /tabComponent %}

{% /tabsComponent %}

## July 17, 2026

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.19.0`


- In the ObjectQueriesApi class, added methods to query ChildCommitmentLink and CostEvent objects by key or with filters, expands, and sorting.

- In the CreateOrderOrderLineItem, GetOrderLineItem, and OrderLineItem classes, added support for prepaid order line item fields and related enums, including:
  - `prepaidQuantity`
  - `prepaidTotalQuantity`
  - `prepaidUom`
  - `drawdownPriority`
  - `prepaymentUnitType`
  - `drawdownScope`
  - `fundCreditOption`
  - `fundSupportAccountHierarchy`
  - `vpProrationOption`
  - `isRollover`
  - `rolloverPeriods`
  - `rolloverPeriodLength`
  - `rolloverPeriodType`
  - `rolloverApply`
  - `rolloverFundPriority`
  - `rolloverEndDateType`
  - `rolloverEndDate`

- In the ChargeOverride, GetChargeOverride, PreviewOrderChargeOverride, RatePlanChargeSegment, and RatePlanChargeSegmentInfo classes, added validity period fields:
  - `validityPeriodAlignment`
  - `validityPeriodAnchorDate`
  - `validityPeriodProrationOption`

  The `vpAnchorDate` field is now deprecated. Use `validityPeriodAnchorDate` instead.

- In the ExpandedRatePlanCharge, GetSubscriptionRatePlanChargesWithAllSegments, RatePlanChargeSegment, and RatePlanChargeSegmentInfo classes, removed the following fields:
  - `totalEntitledQuantity`
  - `totalContractValue`


For more detailed changes, see [Java client library changelog](java/changelog-3190.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.19.0`

- In the ObjectQueriesApi class, added the ExpandedChildCommitmentLink, ExpandedCostEvent, QueryChildCommitmentLinksResponse, and QueryCostEventsResponse models and the queryChildCommitmentLinkByKey, queryChildCommitmentLinks, queryCostEventByKey, and queryCostEvents methods.

- In the CreateOrderOrderLineItem, GetOrderLineItem, and OrderLineItem classes, added support for prepaid order line item properties and related enums, including:
  - `prepaidQuantity`
  - `prepaidTotalQuantity`
  - `prepaidUom`
  - `drawdownPriority`
  - `prepaymentUnitType`
  - `drawdownScope`
  - `fundCreditOption`
  - `fundSupportAccountHierarchy`
  - `vpProrationOption`
  - `isRollover`
  - `rolloverPeriods`
  - `rolloverPeriodLength`
  - `rolloverPeriodType`
  - `rolloverApply`
  - `rolloverFundPriority`
  - `rolloverEndDateType`
  - `rolloverEndDate`

- In the ChargeOverride, GetChargeOverride, PreviewOrderChargeOverride, RatePlanChargeSegment, and RatePlanChargeSegmentInfo classes, added validity period properties:
  - `validityPeriodAlignment`
  - `validityPeriodAnchorDate`
  - `validityPeriodProrationOption`

  The `vpAnchorDate` property is now deprecated. Use `validityPeriodAnchorDate` instead.


- In the ExpandedRatePlanCharge, GetSubscriptionRatePlanChargesWithAllSegments, RatePlanChargeSegment, and RatePlanChargeSegmentInfo classes, removed the following properties:
  - `totalEntitledQuantity`
  - `totalContractValue`

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-3190.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.19.0`

- In the object\_queries\_api module, added the ExpandedChildCommitmentLink, ExpandedCostEvent, QueryChildCommitmentLinksResponse, and QueryCostEventsResponse models and the query\_child\_commitment\_link\_by\_key, query\_child\_commitment\_links, query\_cost\_event\_by\_key, and query\_cost\_events methods.

- In the create\_order\_order\_line\_item, get\_order\_line\_item, and order\_line\_item models, added support for prepaid order line item fields and related enum validation, including:
  - `prepaid_quantity`
  - `prepaid_total_quantity`
  - `prepaid_uom`
  - `drawdown_priority`
  - `prepayment_unit_type`
  - `drawdown_scope`
  - `fund_credit_option`
  - `fund_support_account_hierarchy`
  - `vp_proration_option`
  - `is_rollover`
  - `rollover_periods`
  - `rollover_period_length`
  - `rollover_period_type`
  - `rollover_apply`
  - `rollover_fund_priority`
  - `rollover_end_date_type`
  - `rollover_end_date`

- In the charge\_override, get\_charge\_override, preview\_order\_charge\_override, rate\_plan\_charge\_segment, and rate\_plan\_charge\_segment\_info models, added validity period fields:
  - `validity_period_alignment`
  - `validity_period_anchor_date`
  - `validity_period_proration_option`

  The `vp_anchor_date` field is now deprecated. Use `validity_period_anchor_date` instead.

- In the expanded\_rate\_plan\_charge, get\_subscription\_rate\_plan\_charges\_with\_all\_segments, rate\_plan\_charge\_segment, and rate\_plan\_charge\_segment\_info models, removed the following fields:
  - `total_entitled_quantity`
  - `total_contract_value`

For more detailed changes, see [Python client library changelog](python/changelog-3190.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.11.0`

- In the ObjectQueriesApi class, added the QueryChildCommitmentLinkByKey, QueryChildCommitmentLinks, QueryCostEventByKey, and QueryCostEvents methods, including async and WithHttpInfo variants.

- In the CreateOrderOrderLineItem, GetOrderLineItem, and OrderLineItem classes, added support for prepaid order line item properties and related enums, including:
  - `PrepaidQuantity`
  - `PrepaidTotalQuantity`
  - `PrepaidUom`
  - `DrawdownPriority`
  - `PrepaymentUnitType`
  - `DrawdownScope`
  - `FundCreditOption`
  - `FundSupportAccountHierarchy`
  - `VpProrationOption`
  - `IsRollover`
  - `RolloverPeriods`
  - `RolloverPeriodLength`
  - `RolloverPeriodType`
  - `RolloverApply`
  - `RolloverFundPriority`
  - `RolloverEndDateType`
  - `RolloverEndDate`

- In the ChargeOverride, GetChargeOverride, PreviewOrderChargeOverride, RatePlanChargeSegment, and RatePlanChargeSegmentInfo classes, added validity period properties:
  - `ValidityPeriodAlignment`
  - `ValidityPeriodAnchorDate`
  - `ValidityPeriodProrationOption`

  The `VpAnchorDate` property is now deprecated. Use `ValidityPeriodAnchorDate` instead.

- In the ExpandedRatePlanCharge, GetSubscriptionRatePlanChargesWithAllSegments, RatePlanChargeSegment, and RatePlanChargeSegmentInfo classes, removed the following fields:
  - `TotalEntitledQuantity`
  - `TotalContractValue`

For more detailed changes, see [C# client library changelog](csharp/changelog-1110.md).

  {% /tabComponent %}

{% /tabsComponent %}

## June 11, 2026

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.18.0`

- In the ObjectQueriesApi class, added the ExpandedChildCommitment and QueryChildCommitmentsResponse models. 

- In the InvoicesApi class:
  - Added new method createInvoiceWriteOffAsync to asynchronously write off a posted invoice.
  - Added new method getInvoiceWriteOffAsyncJob to retrieve information about a specific asynchronous invoice write-off job.

- In the ExpandedAccount, ExpandedInvoice, and ExpandedPayment classes, removed the `integrationIdNS` field.

- In the following models:
  - ChargeOverride
  - ProductRatePlanCharge
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo
  - CreateProductRatePlanChargeRequest
  - UpdateProductRatePlanChargeRequest
  - GetProductRatePlanChargeResponse 

  Added the following fields and related enums: 
  - `commitmentLevel`
  - `vpAlignment`
  - `vpProrationOption`
  - `rolloverPeriodType`
  - `rolloverEndDate`
  - `rolloverFundPriority`
  - `drawdownPriority`
  - `fundSupportAccountHierarchy`
  - `specificValidityPeriodLength`


- In the UpsertUpdateCommitmentScheduleInput model, added the following fields:
  - `periodType`
  - `specificPeriodLength`
  - `startDate`
  - `endDate`
  - `customAmount`
  - `clearCustomAmount`

- In the OverrideDiscountApplyDetail model, added the `productRatePlanNumber` and `productRatePlanChargeNumber` fields. The `productRatePlanId` and `productRatePlanChargeId` fields are no longer required.


For more detailed changes, see [Java client library changelog](java/changelog-3180.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.18.0`

- In the ObjectQueriesApi class, added the ExpandedChildCommitment and QueryChildCommitmentsResponse models and the queryChildCommitmentByKey and queryChildCommitments methods.

- In the InvoicesApi class:
  - Added new method createInvoiceWriteOffAsync to asynchronously write off a posted invoice.
  - Added new method getInvoiceWriteOffAsyncJob to retrieve information about a specific asynchronous invoice write-off job.

- In the ExpandedAccount, ExpandedInvoice, and ExpandedPayment models, removed the `integrationId__NS` property.

- In the ChargeOverride model, added the following properties:
  - `drawdownScope`
  - `prepaymentUnitType`
  - `clearingExistingRolloverPeriodType`
  - `clearingExistingRolloverPeriodLength`


- In the following models:
  - ChargeOverride
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo

  Added the following properties:
  - `vpAlignment`
  - `vpAnchorDate`
  - `vpProrationOption`
  - `specificValidityPeriodLength`
  - `rolloverPeriodType`
  - `rolloverEndDate`
  - `rolloverEndDateType`
  - `rolloverFundPriority`
  - `drawdownPriority`
  - `fundSupportAccountHierarchy`

- In the following models:
  - ProductRatePlanCharge
  - CreateProductRatePlanChargeRequest
  - UpdateProductRatePlanChargeRequest
  - GetProductRatePlanChargeResponse

  Added the following properties:
  - `VpAlignment`
  - `CommitmentLevel`
  - `VpProrationOption`
  - `SpecificValidityPeriodLength`
  - `RolloverPeriodType`
  - `RolloverFundPriority`
  - `RolloverEndDateType`
  - `FundSupportAccountHierarchy`
  - `DrawdownPriority` 

- In the UpsertUpdateCommitmentScheduleInput model, added the following properties:
  - `periodType`
  - `specificPeriodLength`
  - `startDate`
  - `endDate`
  - `customAmount`
  - `clearCustomAmount`

- In the OverrideDiscountApplyDetail model, added the `productRatePlanNumber` and `productRatePlanChargeNumber` properties. The `productRatePlanId` and `productRatePlanChargeId` properties are no longer required.

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-3180.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.18.0`

- In the object\_queries\_api module, added the ExpandedChildCommitment and QueryChildCommitmentsResponse models and the query\_child\_commitment\_by\_key and query\_child\_commitments methods.

- In the invoices_api module:
  - Added new method create\_invoice\_write\_off\_async to asynchronously write off a posted invoice.
  - Added new method get\_invoice\_write\_off\_async\_job to retrieve information about a specific asynchronous invoice write-off job.

- In the ExpandedAccount, ExpandedInvoice, and ExpandedPayment models, removed the `integration_id__ns` field.

- In the following models:
  - ChargeOverride
  - ProductRatePlanCharge
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo
  - CreateProductRatePlanChargeRequest
  - UpdateProductRatePlanChargeRequest
  - GetProductRatePlanChargeResponse

  Added the following fields and related enums:
  - `commitment_level`
  - `vp_alignment`
  - `vp_proration_option`
  - `rollover_period_type`
  - `rollover_end_date`
  - `rollover_fund_priority`
  - `drawdown_priority`
  - `fund_support_account_hierarchy`
  - `specific_validity_period_length`

- In the ChargeOverride model, also added `drawdown_scope` and `prepayment_unit_type` with enum validation.

- In the UpsertUpdateCommitmentScheduleInput model, added the following fields:
  - `period_type`
  - `specific_period_length`
  - `start_date`
  - `end_date`
  - `custom_amount`
  - `clear_custom_amount`

- In the OverrideDiscountApplyDetail model, added the `product_rate_plan_number` and `product_rate_plan_charge_number` fields. The `product_rate_plan_id` and `product_rate_plan_charge_id` fields are no longer required.

For more detailed changes, see [Python client library changelog](python/changelog-3180.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.10.0`

- In the ObjectQueriesApi class, added the QueryChildCommitmentByKey and QueryChildCommitments methods (including async and WithHttpInfo variants).

- In the InvoicesApi class:
  - Added new method CreateInvoiceWriteOffAsync to asynchronously write off a posted invoice.
  - Added new method GetInvoiceWriteOffAsyncJob to retrieve information about a specific asynchronous invoice write-off job.

- In the ExpandedAccount, ExpandedInvoice, and ExpandedPayment classes, removed the `IntegrationIdNS` property.

- In the following classes:
  - ChargeOverride
  - ProductRatePlanCharge
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo
  - CreateProductRatePlanChargeRequest
  - UpdateProductRatePlanChargeRequest
  - GetProductRatePlanChargeResponse

  Added the following properties and related enums:
  - `CommitmentLevel`
  - `VpAlignment`
  - `VpProrationOption`
  - `RolloverPeriodType`
  - `RolloverEndDate`
  - `RolloverFundPriority`
  - `DrawdownPriority`
  - `FundSupportAccountHierarchy`
  - `SpecificValidityPeriodLength`

- In the ChargeOverride class, also added `DrawdownScope` and `PrepaymentUnitType`.

- In the UpsertUpdateCommitmentScheduleInput class, added the following properties:
  - `PeriodType`
  - `SpecificPeriodLength`
  - `StartDate`
  - `EndDate`
  - `CustomAmount`
  - `ClearCustomAmount`

- In the OverrideDiscountApplyDetail class, added the `ProductRatePlanNumber` and `ProductRatePlanChargeNumber` properties. The `productRatePlanId` and `productRatePlanChargeId` constructor parameters are no longer required.

For more detailed changes, see [C# client library changelog](csharp/changelog-1100.md).
  {% /tabComponent %}

{% /tabsComponent %}


## May 8, 2026

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.17.0`

- Removed the following classes:
  - BalanceTrackingApi
  - CommitmentScheduleStatus
  - CommitmentStatusInput

- In the ExpandedCommitment class, removed the `cancellationReason` field.

- In the GetSubscriptionRatePlanChargesWithAllSegments class, changed the type of each of the following fields from String to BigDecimal:
  - `mrr`
  - `prepaidQuantity`
  - `prepaidTotalQuantity`
  - `tcv`

- In the GetSubscriptionResponse class, changed the type of the `invoiceSeparately` field from String to Boolean.

- In the OrderSubscriptions class, changed the type of the `ramp` field from Object to RampResponse.

- In the following classes, renamed the `deliverySchedule` field to `subscriptionChargeDeliverySchedule`:
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo

- In the following classes, removed the `status` field:
  - UpsertUpdateCommitmentInput
  - UpsertUpdateCommitmentScheduleInput

For more detailed changes, see [Java client library changelog](java/changelog-3170.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.17.0`

- Removed the following classes:
  - BalanceTrackingApi
  - CommitmentScheduleStatus
  - CommitmentStatusInput

- In the ExpandedCommitment class, removed the `cancellationReason` property.

- In the GetSubscriptionRatePlanChargesWithAllSegments class, changed the type of each of the following properties from String to Number:
  - `mrr`
  - `prepaidQuantity`
  - `prepaidTotalQuantity`
  - `tcv`

- In the GetSubscriptionResponse class, changed the type of the `invoiceSeparately` property from String to Boolean.

- In the OrderSubscriptions class, changed the type of the `ramp` property from `Object` to `module:model/RampResponse`.

- In the following classes, renamed the `deliverySchedule` property to `subscriptionChargeDeliverySchedule`:
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo

- In the following classes, removed the `status` property:
  - UpsertUpdateCommitmentInput
  - UpsertUpdateCommitmentScheduleInput

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-3170.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.17.0`

- Removed the following models:
  - BalanceTrackingApi
  - CommitmentScheduleStatus
  - CommitmentStatusInput

- In the ExpandedCommitment model, removed the `cancellationReason` field.

- In the GetSubscriptionRatePlanChargesWithAllSegments model, changed the type of each of the following fields from `Optional[StrictStr]` to `Optional[Union[StrictFloat, StrictInt]]`:
  - `mrr`
  - `prepaid_quantity`
  - `prepaid_total_quantity`
  - `tcv`

- In the GetSubscriptionResponse model, changed the type of the `invoice_separately` field from `Optional[StrictStr]` to `Optional[StrictBool]`.

- In the OrderSubscriptions model, changed the type of the `ramp` field from `Optional[Dict[str, Any]]` to `Optional[RampResponse]`.

- In the following models, renamed the `delivery_schedule` field to `subscription_charge_delivery_schedule`:
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo

- In the following models, removed the `status` field:
  - UpsertUpdateCommitmentInput
  - UpsertUpdateCommitmentScheduleInput

For more detailed changes, see [Python client library changelog](python/changelog-3170.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.9.0`

- Removed the following classes:
  - BalanceTrackingApi
  - CommitmentScheduleStatus
  - CommitmentStatusInput

- In the ExpandedCommitment class, removed the `CancellationReason` property.

- In the GetSubscriptionRatePlanChargesWithAllSegments class, changed the type of each of the following properties from `string` to `decimal?`:
  - `Mrr`
  - `PrepaidQuantity`
  - `PrepaidTotalQuantity`
  - `Tcv`

- In the GetSubscriptionResponse class, changed the type of the `InvoiceSeparately` property from `string` to `bool?`.

- In the OrderSubscriptions class, changed the type of the `Ramp` property from Object to RampResponse.

- In the following classes, renamed the `DeliverySchedule` property to `SubscriptionChargeDeliverySchedule`:
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo

- In the following classes, removed the `Status` property:
  - UpsertUpdateCommitmentInput
  - UpsertUpdateCommitmentScheduleInput

For more detailed changes, see [C# client library changelog](csharp/changelog-190.md).
  {% /tabComponent %}

{% /tabsComponent %}


## April 2, 2026

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.16.0`

- In the ProductRatePlan class, updated the type of the `productRatePlanCharges` field from `List<ProductRatePlanCharge>` to `List<ProductRatePlanChargeRest>`.

- Removed the ExpandedInvoiceScheduleBooking class.

- Removed the following fields from the ExpandedInvoiceSchedule class:
  - `invoiceScheduleItems`
  - `invoiceScheduleBookings`

- Removed the following fields from the ExpandedInvoiceScheduleItem class:
  - `invoice`
  - `creditMemo`

For more detailed changes, see [Java client library changelog](java/changelog-3160.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.16.0`

- In the ProductRatePlan class, updated the item structure of the `productRatePlanCharges` array property.

- Removed the ExpandedInvoiceScheduleBooking class.

- Removed the following properties from the ExpandedInvoiceSchedule class:
  - `invoiceScheduleItems`
  - `invoiceScheduleBookings`

- Removed the following properties from the ExpandedInvoiceScheduleItem class:
  - `invoice`
  - `creditMemo`

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-3160.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.16.0`

- In the ProductRatePlan model, updated the type of the `product_rate_plan_charges` field from `Optional[List[ProductRatePlanCharge]]` to `Optional[List[ProductRatePlanChargeRest]]`.

- Removed the ExpandedInvoiceScheduleBooking model.

- Removed the following fields from the ExpandedInvoiceSchedule model:
  - `invoice_schedule_items`
  - `invoice_schedule_bookings`

- Removed the following fields from the ExpandedInvoiceScheduleItem model:
  - `invoice`
  - `credit_memo`

For more detailed changes, see [Python client library changelog](python/changelog-3160.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.8.0`

- In the ProductRatePlan class, updated the type of the `ProductRatePlanCharges` property from `List<ProductRatePlanCharge>` to `List<ProductRatePlanChargeRest>`.

- Removed the ExpandedInvoiceScheduleBooking class.

- Removed the following properties from the ExpandedInvoiceSchedule class:
  - `invoiceScheduleItems`
  - `invoiceScheduleBookings`

- Removed the following properties from the ExpandedInvoiceScheduleItem class:
  - `invoice`
  - `creditMemo`

For more detailed changes, see [C# client library changelog](csharp/changelog-180.md).
  {% /tabComponent %}

{% /tabsComponent %}


## March 10, 2026

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.15.0`

- Added the BalanceTrackingApi and CommitmentsApi classes for managing commitments.

- In the following classes, added the new status values `removedDirectly` and `removedWithRatePlan` to `StatusEnum` to replace the existing values `removeDirectly` and `deleteWithRatePlan`, which will be deprecated in a future release:
  - GetSubscriptionRatePlanChargesWithAllSegments
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo

For more detailed changes, see [Java client library changelog](java/changelog-3150.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.15.0`

- Added the BalanceTrackingApi and CommitmentsApi classes for managing commitments.

- In the following classes, added the new status values `removedDirectly` and `removedWithRatePlan` to `StatusEnum` to replace the existing values `removeDirectly` and `deleteWithRatePlan`, which will be deprecated in a future release:
  - GetSubscriptionRatePlanChargesWithAllSegments
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-3150.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.15.0`

- Added the BalanceTrackingApi and CommitmentsApi classes for managing commitments.

- In the following models, added the new status values `removedDirectly` and `removedWithRatePlan` to `StatusEnum` to replace the existing values `removeDirectly` and `deleteWithRatePlan`, which will be deprecated in a future release:
  - get_subscription_rate_plan_charges_with_all_segments
  - rate_plan_charge_segment
  - rate_plan_charge_segment_info

For more detailed changes, see [Python client library changelog](python/changelog-3150.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.7.0`

- Added the BalanceTrackingApi and CommitmentsApi classes for managing commitments.

- In the following classes, added the new status values `removedDirectly` and `removedWithRatePlan` to `StatusEnum` to replace the existing values `removeDirectly` and `deleteWithRatePlan`, which will be deprecated in a future release:
  - GetSubscriptionRatePlanChargesWithAllSegments
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo

For more detailed changes, see [C# client library changelog](csharp/changelog-170.md).
  {% /tabComponent %}

{% /tabsComponent %}


## January 26, 2026

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.14.0`

- Added the following missing fields to all applicable classes:
  - `processId`
  - `requestId`
  - `reasons`
  - `success`

  Previously, when these fields were not explicitly defined, they were treated as additional properties, and you could retrieve their values by calling `getAdditionalProperties()`. For example:

  ```java
  String id = writeOffInvoiceResponse.getAdditionalProperties().get("processId");
  ```

  Now, these fields are explicitly defined and are no longer present in the additional properties map. You must use the dedicated methods to retrieve their values. For example:

  ```java
  String id = writeOffInvoiceResponse.getProcessId();
  ```

- In the CustomObjectRecordsApi class, changed the type of the `ids` parameter from String to `List<String>`.

- Removed the AssociationRule class.

- Removed the `associationRules` field from each of the following classes:
  - CommitmentBaseAttributes
  - CommitmentInput
  - GetCommitmentOutput
  - UpsertCreateCommitmentInput

- In the GetDataLabelingJobResponse class, changed the type of the `progress` field from GetDataLabelingJobResponseProgress to GetDataLabelingJobResponseAllOfProgress.

For more detailed changes, see [Java client library changelog](java/changelog-3140.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.14.0`

- Added the following missing properties to all applicable classes:
  - `processId`
  - `requestId`
  - `reasons`
  - `success`

- In the CustomObjectRecordsApi class, changed the type of the `ids` parameter from String to an array of Strings.

- Removed the AssociationRule class.

- Removed the `associationRules` property from each of the following classes:
  - CommitmentBaseAttributes
  - CommitmentInput
  - GetCommitmentOutput
  - UpsertCreateCommitmentInput

- In the GetDataLabelingJobResponse class, changed the type of the `progress` property from GetDataLabelingJobResponseProgress to GetDataLabelingJobResponseAllOfProgress.

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-3140.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.14.0`

- Added the following missing fields to all applicable models:
  - `process_id`
  - `request_id`
  - `reasons`
  - `success`

  Previously, when these fields were not explicitly defined, they were treated as additional properties, and you could retrieve their values from the `additional_properties` dictionary. For example:

  ```python
  id = writeOffInvoiceResponse.additional_properties.get("process_id");
  ```

  Now, these fields are explicitly defined and are no longer present in the `additional_properties` dictionary. You must access the dedicated attributes to retrieve their values. For example:

  ```python
  id = writeOffInvoiceResponse.process_id;
  ```

- In the CustomObjectRecordsApi model, changed the type of the `ids` parameter from `Optional[StrictStr]` to `Optional[List[StrictStr]]`.

- Removed the AssociationRule model.

- Removed the `association_rules` field from each of the following models:
  - CommitmentBaseAttributes
  - CommitmentInput
  - GetCommitmentOutput
  - UpsertCreateCommitmentInput

- In the GetDataLabelingJobResponse model, changed the type of the `progress` field from GetDataLabelingJobResponseProgress to GetDataLabelingJobResponseAllOfProgress.

For more detailed changes, see [Python client library changelog](python/changelog-3140.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.6.0`

- Added the following missing properties to all applicable classes:
  - `ProcessId`
  - `RequestId`
  - `Reasons`
  - `Success`

  Previously, when these properties were not explicitly defined, they were treated as additional properties, and you could retrieve their values from the `AdditionalProperties` dictionary. For example:

  ```csharp
  var id = writeOffInvoiceResponse.AdditionalProperties["ProcessId"];
  ```

  Now, these properties are explicitly defined and are no longer present in the `AdditionalProperties` dictionary. You must use the dedicated properties to retrieve their values. For example:

  ```csharp
  var id = writeOffInvoiceResponse.ProcessId;
  ```

- In the CustomObjectRecordsApi class, changed the type of the `ids` parameter from `string?` to `List<string>?`.

- Removed the AssociationRule class.

- Removed the `AssociationRules` property from each of the following classes:
  - CommitmentBaseAttributes
  - CommitmentInput
  - GetCommitmentOutput
  - UpsertCreateCommitmentInput

- In the GetDataLabelingJobResponse class, changed the type of the `Progress` property from GetDataLabelingJobResponseProgress to GetDataLabelingJobResponseAllOfProgress.

For more detailed changes, see [C# client library changelog](csharp/changelog-160.md).
  {% /tabComponent %}

{% /tabsComponent %}


## December 12, 2025

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.13.0`

- For the CommitmentInput and UpsertCreateCommitmentInput classes, removed the `excludeItemBookingFromRevenueAccounting` field.

- For the ExpandedCommitment class, removed the following fields:
  - `cyclePeriodType`
  - `cyclePeriodLength`
  - `cycleDayType`
  - `cycleDay`
  - `cycleAlignmentDate`
  - `accountingCode`
  - `excludeItemBookingFromRevenueAccounting`
  - `prorationOption`

- In the following classes, the `eligibleAccountConditions` field is now required:
  - CommitmentBaseAttributes
  - CommitmentInput
  - GetCommitmentOutput
  - UpsertCreateCommitmentInput

- Removed the CommonRevenueAttributes class.

For more detailed changes, see [Java client library changelog](java/changelog-3130.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.13.0`

- For the CommitmentInput class, replaced CommonRevenueAttributes with BaseRevenueAttributes.

- For the following classes, removed the `excludeItemBookingFromRevenueAccounting` property:
  - CommitmentInput
  - UpsertCommitmentInput
  - UpsertCreateCommitmentInput

- For the ExpandedCommitment class, removed the following properties:
  - `cyclePeriodType`
  - `cyclePeriodLength`
  - `cycleDayType`
  - `cycleDay`
  - `cycleAlignmentDate`
  - `accountingCode`
  - `excludeItemBookingFromRevenueAccounting`
  - `prorationOption`

- In the following classes, added the `eligibleAccountConditions` required property:
  - CommitmentInput
  - GetCommitmentOutput
  - UpsertCreateCommitmentInput

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-3130.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.13.0`

- For the CommitmentInput and UpsertCreateCommitmentInput models, removed the `exclude_item_booking_from_revenue_accounting` field.

- For the ExpandedCommitment model, removed the following fields:
  - `cycle_period_type`
  - `cycle_period_length`
  - `cycle_day_type`
  - `cycle_day`
  - `cycle_alignment_date`
  - `accounting_code`
  - `exclude_item_booking_from_revenue_accounting`
  - `proration_option`

- In the following models, the `eligible_account_conditions` field is now required:
  - CommitmentBaseAttributes
  - CommitmentInput
  - GetCommitmentOutput
  - UpsertCreateCommitmentInput

For more detailed changes, see [Python client library changelog](python/changelog-3130.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.5.0`

- For the CommitmentInput and UpsertCreateCommitmentInput classes, removed the `ExcludeItemBookingFromRevenueAccounting` property.

- For the ExpandedCommitment class, removed the following properties:
  - `CyclePeriodType`
  - `CyclePeriodLength`
  - `CycleDayType`
  - `CycleDay`
  - `CycleAlignmentDate`
  - `AccountingCode`
  - `ExcludeItemBookingFromRevenueAccounting`
  - `ProrationOption`

- In the following classes, the `EligibleAccountConditions` property is now required:
  - CommitmentBaseAttributes
  - CommitmentInput
  - GetCommitmentOutput
  - UpsertCreateCommitmentInput

For more detailed changes, see [C# client library changelog](csharp/changelog-150.md).
  {% /tabComponent %}

{% /tabsComponent %}


## November 12, 2025

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.12.0`

- (Breaking change) For GetPaymentMethodForAccountResponse and PaymentMethodResponse classes, renamed the following fields and their data types to be consistent with REST API fields:
  - `createdOn`(OffsetDateTime) to `createdDate`(String)
  - `updatedOn`(OffsetDateTime) to `updatedDate`(String)
  - `lastTransactionTime`(OffsetDateTime) to `lastTransactionDateTime`(String)
  - `lastFailedSaleTransactionDate`(OffsetDateTime) to `lastFailedSaleTransactionDate`(String)

  The developers who use these fields will need to update the library or API client code to reference the new field names, and adjust integrations or mappers that previously relied on OffsetDateTime parsing to accommodate string-based timestamps.

- In the ObjectQueriesApi class, removed support for querying bundles by key and querying bundles.

For more detailed changes, see [Java client library changelog](java/changelog-3120.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.12.0`

* (Breaking change) For GetPaymentMethodForAccountResponse and PaymentMethodResponse classes, renamed the following fields and their data types to be consistent with REST API fields:
  * `createdOn`(Date) to `createdDate`(String)
  * `updatedOn`(Date) to `updatedDate`(String)
  * `lastTransactionTime`(Date) to `lastTransactionDateTime`(String)
  * `lastFailedSaleTransactionDate`(Date) to `lastFailedSaleTransactionDate`(String)

  The developers who use these fields will need to update the library or API client code to reference the new field names, and adjust integrations or mappers that previously relied on Date parsing to accommodate string-based timestamps.

- In the ObjectQueriesApi class, removed methods related to querying Bundles, including queryBundleByKey and queryBundles.

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-3120.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.12.0`

* (Breaking change) For GetPaymentMethodForAccountResponse and PaymentMethodResponse models, renamed the following fields and their data types to be consistent with REST API fields:
  * `created_on`(datetime) to `created_date`(str)
  * `updated_on`(datetime) to `updated_date`(str)
  * `last_transaction_time`(datetime) to `last_transaction_date_time`(str)
  * `last_failed_sale_transaction_date`(datetime) to `last_failed_sale_transaction_date`(str)

  The developers who use these fields will need to update the library or API client code to reference the new field names, and adjust integrations or mappers that previously relied on datetime parsing to accommodate string-based timestamps.

- In the ObjectQueriesApi model, removed methods related to querying bundles: `query_bundle_by_key`, `query_bundle_by_key_with_http_info`, `query_bundles`, and `query_bundles_with_http_info`.

For more detailed changes, see [Python client library changelog](python/changelog-3120.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.4.0`

* (Breaking change) For the GetPaymentMethodForAccountResponse and PaymentMethodResponse classes, renamed the following fields and their data types to match the date type and be consistent with REST API fields.
  * `CreatedOn`(DateTimeOffset) to `CreatedDate`(String)
  * `UpdatedOn`(DateTimeOffset) to `UpdatedDate`(String)
  * `LastTransactionTime`(DateTimeOffset) to `LastTransactionDateTime`(String)
  * `LastFailedSaleTransactionDate`(DateTimeOffset) to `LastFailedSaleTransactionDate`(String)

  The developers who use these fields will need to update the library or API client code to reference the new field names, and adjust integrations or mappers that previously relied on DateTimeOffset parsing to accommodate string-based timestamps.

- In the ObjectQueriesApi class, removed the QueryBundleByKey and QueryBundles methods along with their corresponding methods with HttpInfo.

For more detailed changes, see [C# client library changelog](csharp/changelog-140.md).
  {% /tabComponent %}

{% /tabsComponent %}


## October 10, 2025

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.11.0`

- Added `queryBundleByKey` and `queryBundles` methods to the ObjectQueriesApi class to support querying bundles.
- Added a `soldToInfoId` field to the ExpandedOrderLineItem class, allowing developers to retrieve this information.

For more detailed changes, see [Java client library changelog](java/changelog-3110.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.11.0`

- Added `queryBundleByKey` and `queryBundles` methods to the ObjectQueriesApi class to support querying bundles.
- Added a `soldToInfoId` property to the ExpandedOrderLineItem class, allowing developers to handle additional information related to the `soldTo` entity.

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-3110.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.11.0`

- Added `query_bundle_by_key` and `query_bundles` methods to the ObjectQueriesApi model to support querying bundles.
- Added a `sold_to_info_id` field to the ExpandedOrderLineItem model, allowing for more detailed information about the `sold to` entity.

For more detailed changes, see [Python client library changelog](python/changelog-3110.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.3.0`

- Added `QueryBundleByKey` and `QueryBundles` methods to the ObjectQueriesApi class to support querying bundles.
- Added a `SoldToInfoId` property to the ExpandedOrderLineItem class, allowing developers to retrieve this information.

For more detailed changes, see [C# client library changelog](csharp/changelog-130.md).
  {% /tabComponent %}

{% /tabsComponent %}



## September 18, 2025

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.10.0`

- Updated the ZuoraClient behavior when fetching an OAuth bearer token. Based on the existing HttpClient, a new ApiClient is now generated to fetch a bearer token. With this change, only the headers required by ApiClient are used while other headers are ignored.
- For the CommitmentInput class:
  - Renamed the `taxCodeName` field to `taxCode`, and renamed `segments` to `periods`.
  - Added new fields: `associationRules`, `accountReceivableAccountingCode`, `revenueRecognitionTiming`, `revenueAmortizationMethod`.
- For the CommitmentOutput class:
  - Replaced `segments` field with `periods`. This change will require developers to update their code to use the new `periods` field instead of `segments`.
  - Added new fields: `startDate`, `endDate`, and `amount`, providing additional information about the commitment.
- For the ObjectQueriesApi class, renamed methods and classes related to `CommitmentCycle` to `CommitmentPeriod`. This includes method names, class names, and API paths.
- For the PaymentMethodsApi class, added support for specifying `bankAccountType` in the PAD (Pre-Authorized Debit) payment method.
- Added a `skipTax` field to the PreviewOptions class, allowing developers to bypass tax calculation during order preview, which can improve performance for customers using external tax engines.

For more detailed changes, see [Java client library changelog](java/changelog-3100.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}
Version: `3.10.0`

- In the CommitmentInput class:
  - Removed CommitmentCycleAttributes and related properties: `cyclePeriodType`, `specificCyclePeriodLength`, and `excludeItemBookingFromRevenueAccounting`.
  - Replaced `segments` with `periods`.
  - Renamed `taxCodeName` with `taxCode`.
  - Removed `prorationOption` and `defaultAssociationRule` properties.
  - Added new properties: `associationRules`, `accountReceivableAccountingCode`, `revenueRecognitionTiming`, and `revenueAmortizationMethod`.
- In the CommitmentOutput class:
  - Renamed `segments` to `periods`. This change requires developers to update their code to use `periods` instead of `segments`.
  - Added `startDate`, `endDate`, and `amount` properties.
- In the PaymentMethodsApi class, added `bankAccountType` field to the PAD (Pre-Authorized Debit) payment method request body.
- Added a new property `skipTax` to the PreviewOptions class, allowing developers to bypass tax calculation during order preview. This can improve performance for customers using external tax engines.
- In the ObjectQueriesApi class, renamed methods related to CommitmentCycle to CommitmentPeriod.

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-3100.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.10.0`

- In the CommitmentInput model:
  - Removed `proration_option`, `cycle_period_type`, `specific_cycle_period_length`, and `exclude_item_booking_from_revenue_accounting` fields.
  - Replaced `segments` with `periods`, and `tax_code_name` with `tax_code`.
  - Changed `default_association_rule` to `association_rules` which is now a list.
  - Added `account_receivable_accounting_code`, `revenue_recognition_timing`, and `revenue_amortization_method` fields.

- In the CommitmentOutput model:
  - Replaced the `segments` with `periods`. This change requires developers to update their code to use `periods` instead of `segments`.
  - Added `start_date`, `end_date`, and `amount` attributes.

- In the ExpandedCommitment model:
  - Removed fields `commitmentTemplateId` and `commitmentTemplateNumber`.
  - Renamed the `taxCodeName` field to `taxCode`.
  - Added fields `revenueRecognitionTiming`, `revenueAmortizationMethod`, and `accountReceivableAccountingCode`.
- Added optional field `bankAccountType` to the CreatePADPaymentMethod model, allowing specification of the bank account type.
- Added `skip_tax` field to PreviewOptions model, allowing developers to bypass tax calculation during order preview, which can improve performance.

For more detailed changes, see [Python client library changelog](python/changelog-3100.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.2.0`

- In the CommitmentInput class:
  - Removed properties: `ProrationOption`, `CyclePeriodType`, `SpecificCyclePeriodLength`, `DefaultAssociationRule`, `ExcludeItemBookingFromRevenueAccounting`, `TaxCodeName`, and `Segments`.
  - Changed property: `Priority` is no longer required.
  - Replaced the `Segments` property with `Periods`, which is now required.
  - Replaced `DefaultAssociationRule` with `AssociationRules`.
  - Added properties: `AccountReceivableAccountingCode`, `RevenueRecognitionTiming`, `RevenueAmortizationMethod`.
- In the ExpandedCommitment class:
  - Removed parameters and properties: `commitmentTemplateId` and `commitmentTemplateNumber`.
  - Renamed the `taxCodeName` property to `taxCode`.
  - Added new parameters and properties: `revenueRecognitionTiming`, `revenueAmortizationMethod`, and `accountReceivableAccountingCode`.
- Added a new optional property `BankAccountType` to the CreatePADPaymentMethod class.
- In the ObjectQueriesApi class, renamed methods and return types from `CommitmentCycle` to `CommitmentPeriod`. This affects methods such as QueryCommitmentCycleByKey, QueryCommitmentCycles, and their async counterparts.
- Added a new optional parameter `skipTax` to the PreviewOptions constructor, allowing developers to specify whether to skip tax calculations.

For more detailed changes, see [C# client library changelog](csharp/changelog-120.md).
  {% /tabComponent %}

{% /tabsComponent %}


## August 15, 2025

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.9.0`

- The global `zuoraVersion` property in ZuoraClient has been changed to `2025-08-12` (the latest Zuora version).
- Added the `pricingAttributes` field to each of the following classes to support dynamic pricing:
  - ChargeOverride
  - ChargeUpdate
  - CreateOrderChargeUpdate
  - ExpandedRatePlan
  - ExpandedRatePlanCharge
  - GetChargeOverride
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo
- Added the `cryptogram` field to each of the following classes, allowing developers to include a cryptogram value supplied by the token provider:
  - CollectDebitMemoRequestPayment
  - CreateAuthorizationRequest
  - CreateCreditCardPaymentMethod
  - CreatePaymentRequest
  - VerifyPaymentMethodRequest

- For the Quickstart API model, changed the `revenue_recognition_rule` field in Price, PricePatchRequest, and PriceCreateRequest classes from Enum to String type.

For more detailed changes, see [Java client library changelog](java/changelog-390.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.9.0`

- The global `zuoraVersion` property in ZuoraClient has been changed to `2025-08-12` (the latest Zuora version).
- Added the `pricingAttributes` field to each of the following classes to support dynamic pricing:
  - ChargeOverride
  - ChargeUpdate
  - CreateOrderChargeUpdate
  - ExpandedRatePlan
  - ExpandedRatePlanCharge
  - GetChargeOverride
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo
- Added the `cryptogram` field to each of the following classes, allowing developers to include a cryptogram value supplied by the token provider:
  - CollectDebitMemoRequestPayment
  - CreateAuthorizationRequest
  - CreateCreditCardPaymentMethod
  - CreatePaymentRequest
  - VerifyPaymentMethodRequest

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-390.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.9.0`

- The global `zuoraVersion` property in ZuoraClient has been changed to `2025-08-12` (the latest Zuora version).
- Added the `pricingAttributes` field to each of the following models to support dynamic pricing:
  - ChargeOverride
  - ChargeUpdate
  - CreateOrderChargeUpdate
  - ExpandedRatePlan
  - ExpandedRatePlanCharge
  - GetChargeOverride
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo
- Added the `cryptogram` field to each of the following models, allowing developers to include a cryptogram value supplied by the token provider:
  - CollectDebitMemoRequestPayment
  - CreateAuthorizationRequest
  - CreateCreditCardPaymentMethod
  - CreatePaymentRequest
  - VerifyPaymentMethodRequest

For more detailed changes, see [Python client library changelog](python/changelog-390.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.1.0`

- The global `zuoraVersion` property in ZuoraClient has been changed to `2025-08-12` (the latest Zuora version).
- Added the `PricingAttributes` property to each of the following classes to support dynamic pricing:
  - ChargeOverride
  - ChargeUpdate
  - CreateOrderChargeUpdate
  - ExpandedRatePlan
  - ExpandedRatePlanCharge
  - GetChargeOverride
  - RatePlanChargeSegment
  - RatePlanChargeSegmentInfo
- Added the `cryptogram` field to each of the following classes, allowing developers to include a cryptogram value supplied by the token provider:
  - CollectDebitMemoRequestPayment
  - CreateAuthorizationRequest
  - CreateCreditCardPaymentMethod
  - CreatePaymentRequest
  - VerifyPaymentMethodRequest

For more detailed changes, see [C# client library changelog](csharp/changelog-110.md).

  {% /tabComponent %}

{% /tabsComponent %}



## July 18, 2025

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.8.0`

* Introduced the `includeNullFields` parameter to all query methods in the ObjectQueriesApi class. This parameter is used to control whether to include fields with `null` values in the response.
* Added a the `originalListPrice` field to the UsageOveragePricingOverride and UsageOveragePricingUpdate classes.
* For the BulkUpdateInvoicesRequest class, the type of the `invoices` field has been changed from `List<UpdateInvoiceRequest>` to `List<InvoiceForBulkUpdate>`.
* Refactored the CreatePaymentMethodRequest and UpdatePaymentMethodRequest classes to more intuitive type-specific classes for different payment method types, such as CreateCreditCardPaymentMethod and UpdateCreditCardPaymentMethod.

  Now you can use the corresponding payment method class depending on the payment method type you want to create or update. For example:

  ```java
  CreateCreditCardPaymentMethod creditCardPaymentMethod = new CreateCreditCardPaymentMethod();
  creditCardPaymentMethod.type("CreditCard");
  ...
  CreatePaymentMethodRequest createCreditCardRequest = new CreatePaymentMethodRequest(creditCardPaymentMethod);
  ```

  Previously, CreatePaymentMethodRequest supported all types of payment methods in a single class, containing all possible fields across all payment method types. You had to instantiate the payment method type using the following format, which were more prone to errors:

  ```java
  CreatePaymentMethodRequest creditCardRequest = new CreatePaymentMethodRequest()
        .type("CreditCard")
        ...;
  ```


For more detailed changes, see [Java client library changelog](java/changelog-380.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.8.0`

* Introduced the `include_null_fields` parameter to all query methods in the ObjectQueriesApi class. This parameter is used to control whether to include fields with `null` values in the response.
* Added `originalListPrice` property to the UsageOveragePricingOverride and UsageOveragePricingUpdate classes, allowing developers to access the original list price of a product or service.
* For the BulkUpdateInvoicesRequest class, replaced the use of `UpdateInvoiceRequest` with `InvoiceForBulkUpdate` for handling invoice updates.
* Refactored the CreatePaymentMethodRequest and UpdatePaymentMethodRequest classes to more intuitive type-specific classes for different payment method types, such as CreateCreditCardPaymentMethod and UpdateCreditCardPaymentMethod.

  Now you can use the corresponding payment method class depending on the payment method type you want to create or update. For example:

  ```javascript
  const creditCardPaymentMethod = new CreateCreditCardPaymentMethod();
  creditCardPaymentMethod.type('CreditCard');
  ...
  const creditCardRequest = new CreatePaymentMethodRequest(creditCardPaymentMethod);
  ```

  Previously, CreatePaymentMethodRequest supported all types of payment methods in a single class, containing all possible fields across all payment method types. You had to instantiate the payment method type using the following format, which were more prone to errors:

  ```javascript
  const creditCardPaymentMethod = new CreatePaymentMethodRequest();
  creditCardPaymentMethod.type = 'CreditCard';
  ...
  ```

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-380.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.8.0`

* Introduced the `include_null_fields` parameter to all query methods in the ObjectQueriesApi model. This parameter is used to control whether to include fields with `null` values in the response.
* Added `originalListPrice` field to the UsageOveragePricingOverride and UsageOveragePricingUpdate models, allowing developers to access the original list price of a product or service.
* For the BulkUpdateInvoicesRequest model, the type of the `invoices` field has changed from `List[UpdateInvoiceRequest]` to `List[InvoiceForBulkUpdate]`.
* Refactored the CreatePaymentMethodRequest and UpdatePaymentMethodRequest classes to more intuitive type-specific classes for different payment method types, such as CreateCreditCardPaymentMethod and UpdateCreditCardPaymentMethod.

  Now you can use the corresponding payment method class depending on the payment method type you want to create or update. For example:

  ```python
  credit_card_payment_method = CreateCreditCardPaymentMethod(
      type="CreditCard",
      ...
  )
  payment_method = CreatePaymentMethodRequest(credit_card_payment_method)
  ```

  Previously, CreatePaymentMethodRequest supported all types of payment methods in a single class, containing all possible fields across all payment method types. You had to instantiate the payment method type using the following format, which were more prone to errors:

  ```python
  payment_method = CreatePaymentMethodRequest(
      type="CreditCard",
      ...
  )
  ```

For more detailed changes, see [Python client library changelog](python/changelog-380.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.0.0` and `1.0.0-beta.7`

* Introduced the `includeNullFields` parameter to all query methods in the ObjectQueriesApi class. This parameter is used to control whether to include fields with `null` values in the response.
* Added a new parameter `originalListPrice` to the UsageOveragePricingOverride and UsageOveragePricingUpdate classes.
* For the BulkUpdateInvoicesRequest class, changed the type of the `invoices` parameter and property from `List<UpdateInvoiceRequest>` to `List<InvoiceForBulkUpdate>`.
* Refactored the CreatePaymentMethodRequest and UpdatePaymentMethodRequest classes to more intuitive type-specific classes for different payment method types, such as CreateCreditCardPaymentMethod and UpdateCreditCardPaymentMethod.

  Now you can use the corresponding payment method class depending on the payment method type you want to create or update. For example:

  ```csharp
  CreateCreditCardPaymentMethod creditCardPaymentMethod = new CreateCreditCardPaymentMethod(
          type: "CreditCard",
          ...
  );

  CreatePaymentMethodRequest createCreditCardRequest = new CreatePaymentMethodRequest(creditCardPaymentMethod);
  ```

  Previously, CreatePaymentMethodRequest supported all types of payment methods in a single class, containing all possible fields across all payment method types. You had to instantiate the payment method type using the following format, which were more prone to errors:

  ```csharp
  CreatePaymentMethodRequest createPaymentMethodRequest = new CreatePaymentMethodRequest(
        type: "CreditCard",
        ...
  );
  ```

For more detailed changes, see [C# client library changelog](csharp/changelog-100.md).

  {% /tabComponent %}

{% /tabsComponent %}

## June 24, 2025

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.7.0`

* For the ObjectQueriesApi class, added support for querying ContactSnapshots with filters, expands, and sort capabilities.
* For the ObjectQueriesApi class, added the `fields` parameter to allow specifying which fields are returned in the response.
* For the SubscriptionsApi class, added the `asOfDate` parameter for chargeDetail when `chargeDetail` is `SPECIFIC_SEGMENT`.
* Added the `billToContactSnapshot`, `soldToContactSnapshot`, and `shipToContactSnapshot` fields to the ExpandedInvoice, ExpandedCreditMemo, and ExpandedDebitMemo classes, respectively.

For more detailed changes, see [Java client library changelog](java/changelog-370.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.7.0`

* For the ObjectQueriesApi class, added support for querying ContactSnapshots with new methods: `queryContactSnapshotByKeyWithHttpInfo`, `queryContactSnapshotByKey`, `queryContactSnapshotsWithHttpInfo`, and `queryContactSnapshots`.
* For the ObjectQueriesApi class, added the `fields` parameter to allow specifying which fields are returned in the response.
* For the SubscriptionsApi class, added `as_of_date` parameter for charge-detail when `charge-detail` is `specific-segment`.
* Added the `billToContactSnapshot`, `soldToContactSnapshot`, and `shipToContactSnapshot` fields of type ExpandedContactSnapshot to the ExpandedInvoice, ExpandedCreditMemo, and ExpandedDebitMemo classes, respectively.

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-370.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.7.0`

* For the object\_queries\_api class, added support for querying contact snapshots with new methods `query_contact_snapshot_by_key` and `query_contact_snapshots`.
* For the object\_queries\_api class, added the `fields` parameter to support specifying which fields are returned in the response.
* For the subscriptions\_api class, added `as_of_date` parameter to multiple methods for specifying the date for charge-detail when `charge-detail` is `specific-segment`.
* Added the `bill_to_contact_snapshot`, `sold_to_contact_snapshot`, and `ship_to_contact_snapshot` fields of type ExpandedContactSnapshot to the ExpandedInvoice, ExpandedCreditMemo, and ExpandedDebitMemo models, respectively.

For more detailed changes, see [Python client library changelog](python/changelog-370.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.0.0-beta.6`

* For the ObjectQueriesApi class, added the optional `fields` parameter to various query methods, allowing developers to specify which fields to include in the response.
* For the ObjectQueriesApi class, added new methods for querying contact snapshots: `QueryContactSnapshotByKey` and `QueryContactSnapshots`, providing functionality to retrieve contact snapshot data.
* For the SubscriptionsApi class, added the `asOfDate` parameter for chargeDetail when `chargeDetail` is `SPECIFIC_SEGMENT`.
* Added the `BillToContactSnapshot`, `SoldToContactSnapshot`, and `ShipToContactSnapshot` properties to the ExpandedInvoice, ExpandedCreditMemo, and ExpandedDebitMemo classes, respectively.

For more detailed changes, see [C# client library changelog](csharp/changelog-100beta6.md).

  {% /tabComponent %}

{% /tabsComponent %}


## May 8, 2025

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.6.0`

* Added asynchronous methods for applying credit memos with `applyCreditMemoAsync` and `ApplyCreditMemoAsyncApi` to the CreditMemosApi class.
* Added asynchronous methods for unapplying credit memos with `unapplyCreditMemoAsync` and `UnapplyCreditMemoAsyncApi` to the CreditMemosApi class.
* Added `getApplyCreditMemoAsyncJob` and `GetApplyCreditMemoAsyncJobApi` to the CreditMemosApi class for retrieving information about async credit memo apply jobs.
* Added `getUnapplyCreditMemoAsyncJob` and `GetUnapplyCreditMemoAsyncJobApi` to the CreditMemosApi class for retrieving information about async credit memo unapply jobs.
* Changed the type of `productCategory` from `ProductCategory` to `String` for the GetSubscriptionRatePlanChargesWithAllSegments class. This change requires developers to update the code to handle `productCategory` as a String instead of a ProductCategory object.


For more detailed changes, see [Java client library changelog](java/changelog-360.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.6.0`

* Added async methods for applying and unapplying credit memos: `applyCreditMemoAsync` and `unapplyCreditMemoAsync` to the CreditMemosApi model.
* Added methods to retrieve async job status for applying and unapplying credit memos: `getApplyCreditMemoAsyncJob` and `getUnapplyCreditMemoAsyncJob` to the CreditMemosApi model.
* Changed the `productCategory` field type from `ProductCategory` model to `String` for the GetSubscriptionRatePlanChargesWithAllSegments model. This may require developers to update the code to handle `productCategory` as a string instead of a model object.

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-360.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.6.0`

* Added async methods for applying and unapplying credit memos: `apply_credit_memo_async`, `unapply_credit_memo_async` to the CreditMemosApi model.
* Added methods to retrieve async job status: `get_apply_credit_memo_async_job`, `get_unapply_credit_memo_async_job` to the CreditMemosApi model.
* Changed the `product_category` field type from `Optional[ProductCategory]` to `Optional[StrictStr]` for the GetSubscriptionRatePlanChargesWithAllSegments model. This change may require developers to update the code to handle `product_category` as a string instead of a `ProductCategory` object.

For more detailed changes, see [Python client library changelog](python/changelog-360.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.0.0-beta.4`

* Added asynchronous methods for applying and unapplying credit memos: ApplyCreditMemoAsync, UnapplyCreditMemoAsync, and their corresponding WithHttpInfo and Async variants to CreditMemosApi.
* Added methods to retrieve the status of asynchronous apply and unapply credit memo jobs by ID: GetApplyCreditMemoAsyncJob and GetUnapplyCreditMemoAsyncJob, along with their WithHttpInfo and Async variants to CreditMemosApi.
* Changed the type of the `ProductCategory` property from `ProductCategory?` to `string` for the GetSubscriptionRatePlanChargesWithAllSegments model. This may require developers to update the code to handle the new type.

For more detailed changes, see [C# client library changelog](csharp/changelog-100beta4.md).

  {% /tabComponent %}

{% /tabsComponent %}


## April 11, 2025

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.5.0`

* Added the `communicationProfileId` field to the multiple classes, allowing developers to associate a communication profile with an object such as order line item, subscription, and invoice.
* Added the `clearingExistingCommunicationProfile` field to allow clearing the existing communication profile at the subscription level. This field is mutually exclusive with `communicationProfileId`.
* Added the `REVERSE` operation job type to the OperationJobType class.

For more detailed changes, see [Java client library changelog](java/changelog-350.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.5.0`

* Added the `communicationProfileId` field to the multiple models, allowing developers to associate a communication profile with an object such as order line item, subscription, and invoice.
* Added the `clearingExistingCommunicationProfile` field to clear the existing communication profile at the subscription level. This field is mutually exclusive with `communicationProfileId`.
* Added the `Reverse` enum value to the OperationJobType class.

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-350.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.5.0`

* Added the `communicationProfileId` field to multiple models, allowing developers to associate a communication profile with an object such as order line item, subscription, and invoice.
* Added the `clearingExistingCommunicationProfile` field to clear the existing communication profile at the subscription level. This field is mutually exclusive with `communicationProfileId`.
* Added the `REVERSE` operation job type to the OperationJobType enum.

For more detailed changes, see [Python client library changelog](python/changelog-350.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.0.0-beta.3`

* Added the `communicationProfileId` parameter to the multiple constructors and classes, allowing developers to specify a communication profile when creating an object such as order line item, subscription, and invoice.
* Added the `clearingExistingCommunicationProfile` parameter to multiple Order Action constructors, and the `clearingExistingCommunicationProfile` property to counterpart Order Action classes.
* Added the `Reverse` enum value with an associated value of 4 to the OperationJobType class.

For more detailed changes, see [C# client library changelog](csharp/changelog-100beta3.md).

  {% /tabComponent %}

{% /tabsComponent %}


## March 19, 2025

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.4.0`

- Introduced a Builder pattern for ZuoraClient, allowing for more flexible and readable client configuration.
- Changed the type of `relationships` of CustomObjectDefinitionSchema from `List<Object>` to `List<CustomObjectDefinitionRelationship>`, which may require developers to update the code to handle the new type.
- Added support for expanding `invoiceschedulebookings`, `invoiceschedulebookings.order`, and `invoiceschedulebookings.subscription` to the query methods for InvoiceSchedule.


For more detailed changes, see [Java client library changelog](java/changelog-340.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.4.0`

- Added support for expanding `invoiceschedulebookings`, `invoiceschedulebookings.order`, and `invoiceschedulebookings.subscription` to the Query InvoiceSchedule and Query InvoiceSchedules methods.
- Changed the item type of the `relationships` field from `Object` to `CustomObjectDefinitionRelationship`, which may require developers to update the code to handle the new type.

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-340.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.4.0`

- Added support for expanding `invoiceschedulebookings`, `invoiceschedulebookings.order`, and `invoiceschedulebookings.subscription` to the query_invoice_schedule_by_key and query_invoice_schedules methods.
- Changed the `relationships` field type of custom_object_definition_schema from `List[Dict[str, Any]]` to `List[CustomObjectDefinitionRelationship]`.

For more detailed changes, see [Python client library changelog](python/changelog-340.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.0.0-beta.2`

- Introduced a Builder class for constructing instances of ZuoraClient using a builder pattern.
- Changed the type of the `relationships` property of CustomObjectDefinitionSchema from `List<Object>` to `List<CustomObjectDefinitionRelationship>`.
- Added support for expanding `invoiceschedulebookings`, `invoiceschedulebookings.order`, and `invoiceschedulebookings.subscription` to the query_invoice_schedule_by_key and query_invoice_schedules methods.

For more detailed changes, see [C# client library changelog](csharp/changelog-100beta2.md).

  {% /tabComponent %}

{% /tabsComponent %}

## February 11, 2025

{% tabsComponent %}
  {% tabComponent title="Java" %}

Version: `3.3.0`

- Introduced support for APAC environments: `CSBX_AP` and `PROD_AP`.
- Added DataLabelingApi API integration to support the Multi-Org feature.
- Added new API integrations, DeploymentApi and DeploymentConfigurationTemplatesApi, to support the Deployment Manager feature.
- Added OmniChannelSubscriptionsApi API integration for omni-channel subscription management.
- Added CreatePredebitNotificationApi class and createPredebitNotification method to support triggering a pre-debit notification for an invoice.
- Added the retryOnConnectionFailure method to configure HTTP client behavior regarding connection failures.
- Added field `condition` of type Condition and `objectType` of type ObjectTypeEnum to the BillRunFilter class to support bill run advanced filters.
- Fixed issue: The OrdersApi.previewOrderApi() method throws errors when high-volume concurrent requests are submitted.
- Fixed issue: The UsageRecordsApi.createUsage() method could not parse response and throws exceptions.

For more detailed changes, see [Java client library changelog](java/changelog-330.md).

  {% /tabComponent %}
  {% tabComponent title="Node.js" %}

Version: `3.3.0`

* Introduced support for APAC environments: `CSBX_AP` and `PROD_AP`.
* Added DeploymentConfigurationTemplatesApi access method for deployment configuration templates, and DeploymentApi access method for deployment functionalities for the Deployment Manager feature.
* Added DataLabelingApi access method for data labeling functionalities for the Multi-Org feature.
* Added OmniChannelSubscriptionsApi access method for omni-channel subscription management.
* Added the createPredebitNotification method to support triggering pre-debit notification for an invoice.
* Added a new `condition` property of type `Condition` and the `objectType` property to the BillRunFilter model to support bill run advanced filters.

For more detailed changes, see [Node.js client library changelog](nodejs/changelog-330.md).

  {% /tabComponent %}
  {% tabComponent title="Python" %}

Version: `3.3.0`

* Introduced support for APAC environments: `CSBX_AP` and `PROD_AP`.
* Added DataLabelingApi for handling data labeling operations for the Multi-Org feature.
* Added DeploymentApi for managing deployments, and DeploymentConfigurationTemplatesApi for deployment configuration templates management for the Deployment Manager feature.
* Added OmniChannelSubscriptionsApi for omni-channel subscription management.
* Added create_predebit_notification method to support triggering a pre-debit notification for an invoice.
* Added `condition` field to bill_run_filter to support bill run advanced filters.

For more detailed changes, see [Python client library changelog](python/changelog-330.md).

  {% /tabComponent %}
  {% tabComponent title="C#" %}

Version: `1.1.0-beta.1`

\<Typography>
We released the C# library <code>1.1.0-beta.1</code> as a beta version product.

There is no changelog available for this release.
</Typography>

  {% /tabComponent %}

{% /tabsComponent %}
