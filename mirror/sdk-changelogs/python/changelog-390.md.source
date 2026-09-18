---
markdown:
  toc:
    hide: false
---

# Python client library 3.9.0 changelog

## \_\_init\_\_

* Added new model `ActionType`.
* Added new model `AssociationRule`.
* Added new models related to commitments: `CommitmentBaseAttributes`, `CommitmentCycleAttributes`, `CommitmentInput`, `CommitmentOutput`, `CommitmentOutputSegmentsInner`, `CommitmentSegmentAttributes`, `CommitmentSegmentBaseAttributes`, `CommitmentSegmentInput`, `CommitmentTypeEnum`.
* Added new models `CommonRevenueAttributes` and `CommonTaxationAttributes`.
* Added new model `CyclePeriodTypeEnum`.
* Added new model `ExpandedCommitmentCycle`.
* Added new model `ProrationOptionEnum`.
* Added new model `QueryCommitmentCyclesResponse`.
* Added new models related to upsert operations: `UpsertCommitmentInput`, `UpsertCommitmentSegmentInput`, `UpsertCreateCommitmentInput`, `UpsertCreateCommitmentInputAllOfSegments`, `UpsertCreateCommitmentSegmentInput`, `UpsertUpdateCommitmentInput`, `UpsertUpdateCommitmentSegmentInput`.


## invoices\_api

* Added pagination support with `page_size` and `page` parameters to control the number of records returned per page and the index of the page to retrieve.


## object\_queries\_api

* Resource path for commitment segment queries has been changed from `/object-query/commitmentSegment` to `/object-query/commitment-segment`.
* Added new method `query_commitment_cycle_by_key` to query CommitmentCycle by key with filters, expands, and sort capabilities.
* Added new method `query_commitment_cycles` to query CommitmentCycles with filters, expands, and sort capabilities.


## models/\_\_init\_\_

* Added new model `ActionType`.
* Added new model `AssociationRule`.
* Added new models related to commitments: `CommitmentBaseAttributes`, `CommitmentCycleAttributes`, `CommitmentInput`, `CommitmentOutput`, `CommitmentOutputSegmentsInner`, `CommitmentSegmentAttributes`, `CommitmentSegmentBaseAttributes`, `CommitmentSegmentInput`, `CommitmentTypeEnum`.
* Added new models `CommonRevenueAttributes` and `CommonTaxationAttributes`.
* Added new model `CyclePeriodTypeEnum`.
* Added new model `ExpandedCommitmentCycle`.
* Added new model `ProrationOptionEnum`.
* Added new model `QueryCommitmentCyclesResponse`.
* Added new models related to upsert operations: `UpsertCommitmentInput`, `UpsertCommitmentSegmentInput`, `UpsertCreateCommitmentInput`, `UpsertCreateCommitmentInputAllOfSegments`, `UpsertCreateCommitmentSegmentInput`, `UpsertUpdateCommitmentInput`, `UpsertUpdateCommitmentSegmentInput`.


## accounting\_code\_type

* Added new accounting code types: UNBILLEDRECEIVABLES, CONTRACTASSETS, CONTRACTLIABILITIES, ADJUSTMENTLIABILITIES, and ADJUSTMENTREVENUE.


## charge\_override

* Added `pricingAttributes` field to support dynamic pricing with the DynamicPricing permission.
* Introduced `negotiatedPriceTable` field to handle negotiated price table information with the NegotiatedPriceTable permission.


## charge\_update

* Added `is_dimensional_price` field to indicate if the charge uses dimensional pricing.
* Introduced `pricing_attributes` field for dynamic pricing attributes.
* Added `negotiated_price_table` field for negotiated price table information.


## collect\_debit\_memo\_request\_payment

* Added a new optional field `cryptogram` to the CollectDebitMemoRequestPayment model, which allows specifying a cryptogram value supplied by the token provider.


## create\_authorization\_request

* Added `cryptogram` field to CreateAuthorizationRequest model with a maximum length of 50 characters.


## create\_credit\_card\_payment\_method

* Added a new optional field `cryptogram` to the CreateCreditCardPaymentMethod model, which allows for the inclusion of a cryptogram value supplied by the token provider if a DPAN or network scheme token is present.


## create\_order\_charge\_update

* Added `pricingAttributes` field to support dynamic pricing with the DynamicPricing permission.
* Introduced `negotiatedPriceTable` field to handle negotiated price table information with the NegotiatedPriceTable permission.


## create\_order\_request

* Added `commitments` field to CreateOrderRequest, allowing developers to include a list of commitments to create or update.


## create\_order\_response

* Added a new field `commitments` to the CreateOrderResponse model, which includes a list of CommitmentOutput objects. This allows developers to access commitments created by an order request.


## create\_order\_result

* Added a new optional field `commitments` of type List[CommitmentOutput] to the CreateOrderResult model.


## create\_payment\_request

* Added a new optional field `cryptogram` to the CreatePaymentRequest model for handling cryptogram values supplied by the token provider.


## expanded\_daily\_consumption\_summary

* Added new fields `adjustmentRevenueGLString` and `recognizedRevenueGLString` to the ExpandedDailyConsumptionSummary model.


## expanded\_rate\_plan

* Added a new optional field `pricingAttributes` to the ExpandedRatePlan model.


## expanded\_rate\_plan\_charge

* Added `pricingAttributes` as an optional field in the ExpandedRatePlanCharge model.
* Added `negotiatedPriceTable` as an optional field in the ExpandedRatePlanCharge model.


## get\_async\_create\_order\_job\_response

* Added a new optional field `commitments` of type List[CommitmentOutput] to the GetAsyncCreateOrderJobResponse model.


## get\_charge\_override

* Added `is_dimensional_price` field to indicate if the charge uses dimensional pricing.
* Introduced `pricing_attributes` field for dynamic pricing attributes, requiring DynamicPricing permission.
* Added `negotiated_price_table` field for negotiated price table information, requiring NegotiatedPriceTable permission.


## get\_invoice\_application\_part\_request

* The `created_date` and `updated_date` fields have changed from `datetime` to `StrictStr`. This may require developers to update their code to handle these fields as strings instead of datetime objects.


## order

* Added a new field `commitments` to the Order model, which is a list of UpsertCommitmentInput objects. This allows developers to include commitments in their order processing.


## rate\_plan\_charge\_segment

* Added `pricingAttributes` field for dynamic pricing, available when DynamicPricing permission is enabled.
* Added `isDimensionalPrice` field to indicate dimensional pricing, available when DynamicPricing permission is enabled.
* Added `isPriceNegotiated` field to indicate negotiated pricing, available when NegotiatedPriceTable permission is enabled.


## rate\_plan\_charge\_segment\_info

* Added `pricingAttributes` field for dynamic pricing, available with DynamicPricing permission.
* Added `isDimensionalPrice` field to indicate dimensional pricing, available with DynamicPricing permission.
* Added `isPriceNegotiated` field to indicate negotiated pricing, available with NegotiatedPriceTable permission.


## update\_order\_request

* Added `commitments` field to the UpdateOrderRequest model, allowing developers to include a list of UpsertCommitmentInput objects in their order updates.


## usage\_tiered\_with\_overage\_pricing\_override

* Added `originalListPrice` field to the UsageTieredWithOveragePricingOverride model, allowing developers to access the original list price of a product or service.


## usage\_tiered\_with\_overage\_pricing\_update

* Added `originalListPrice` field to the UsageTieredWithOveragePricingUpdate model, allowing developers to access or set the original list price of a product or service.


## verify\_payment\_method\_request

* Added a new optional field `cryptogram` to the VerifyPaymentMethodRequest model, which allows developers to include a cryptogram value supplied by the token provider.


## zuora\_client

* Added automatic token refresh functionality with a background thread.
* Introduced retry logic with exponential backoff for authentication failures.
* Added methods to configure and retrieve token refresh intervals and retry configurations.
* Provided manual token refresh capability.
* Implemented thread safety measures for token and configuration operations.

