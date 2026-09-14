---
markdown:
  toc:
    hide: false
---

# Node.js client library 3.9.0 changelog

## ZuoraClient

* Added automatic token refresh with configurable refresh intervals and retry logic.

## InvoicesApi

* Added pagination support with new parameters `page_size` and `page` to control the number of records returned per page and the specific page to retrieve.


## ObjectQueriesApi

* Changed API endpoint path for querying CommitmentSegment by key from `/object-query/commitmentSegment/{key}` to `/object-query/commitment-segment/{key}`.
* Changed API endpoint path for querying multiple CommitmentSegments from `/object-query/commitmentSegment` to `/object-query/commitment-segment`.
* Added queryCommitmentCycleByKeyWithHttpInfo and queryCommitmentCycleByKey methods for querying CommitmentCycle by key with filters, expands, and sort capabilities.
* Introduced queryCommitmentCyclesWithHttpInfo and queryCommitmentCycles methods for querying multiple CommitmentCycles with filters, expands, and sort capabilities.


## OrdersApi

* Reverting changes applied on commitments when an order is deleted.


## index

* Added new model imports: ActionType, AssociationRule, CommitmentBaseAttributes, CommitmentCycleAttributes, CommitmentInput, CommitmentOutput, CommitmentOutputSegmentsInner, CommitmentSegmentAttributes, CommitmentSegmentBaseAttributes, CommitmentSegmentInput, CommitmentTypeEnum, CommonRevenueAttributes, CommonTaxationAttributes, CyclePeriodTypeEnum, ExpandedCommitmentCycle, ProrationOptionEnum, QueryCommitmentCyclesResponse, UpsertCommitmentInput, UpsertCommitmentSegmentInput, UpsertCreateCommitmentInput, UpsertCreateCommitmentInputAllOfSegments, UpsertCreateCommitmentSegmentInput, UpsertUpdateCommitmentInput, UpsertUpdateCommitmentSegmentInput.


## AccountingCodeType

* Added new accounting code types: UnbilledReceivables, ContractAssets, ContractLiabilities, AdjustmentLiabilities, and AdjustmentRevenue.


## ChargeOverride

* Validation added to ensure `negotiatedPriceTable` is an array, which may require developers to update their data structures accordingly.
* Added `pricingAttributes` field to support dynamic pricing with the required DynamicPricing permission.
* Introduced `negotiatedPriceTable` field to handle arrays of negotiated price table information, requiring the NegotiatedPriceTable permission.


## ChargeUpdate

* Added `isDimensionalPrice` property to indicate if the charge uses dimensional pricing.
* Introduced `pricingAttributes` property for dynamic pricing attributes, requiring DynamicPricing permission.
* Introduced `negotiatedPriceTable` property for negotiated price table information, requiring NegotiatedPriceTable permission.


## CollectDebitMemoRequestPayment

* Added support for `cryptogram` field in CollectDebitMemoRequestPayment, allowing developers to include a cryptogram value supplied by the token provider.


## CreateAuthorizationRequest

* Added support for `cryptogram` field in CreateAuthorizationRequest, allowing developers to include a cryptogram value supplied by the token provider.


## CreateCreditCardPaymentMethod

* Added support for `cryptogram` field in CreateCreditCardPaymentMethod, allowing developers to include a cryptogram value supplied by the token provider.


## CreateOrderChargeUpdate

* Added support for `pricingAttributes` to provide additional context for dynamic pricing.
* Introduced `negotiatedPriceTable` to handle arrays of negotiated price table information.


## CreateOrderRequest

* Added support for `commitments` field in CreateOrderRequest, allowing developers to create or update commitments using UpsertCommitmentInput.


## CreateOrderResponse

* Added a new property `commitments` to the CreateOrderResponse class, which includes an array of CommitmentOutput objects. This allows developers to access commitments created by an order request.


## CreateOrderResult

* Added support for `commitments` in CreateOrderResult, allowing developers to access commitments created by an order request.


## CreatePaymentRequest

* Added support for a new `cryptogram` field in the CreatePaymentRequest model. This field is used to supply a cryptogram value provided by the token provider when a DPAN or network scheme token is present.


## ExpandedDailyConsumptionSummary

* Added new properties `adjustmentRevenueGLString` and `recognizedRevenueGLString` to the ExpandedDailyConsumptionSummary class.


## ExpandedRatePlan

* Added a new property `pricingAttributes` to the `ExpandedRatePlan` class, allowing developers to handle pricing attributes as a string.


## ExpandedRatePlanCharge

* Added `pricingAttributes` as a new property to the ExpandedRatePlanCharge model.
* Added `negotiatedPriceTable` as a new property to the ExpandedRatePlanCharge model.


## GetAsyncCreateOrderJobResponse

* Added a new property `commitments` to the GetAsyncCreateOrderJobResponse and CreateOrderResult classes, which holds an array of CommitmentOutput objects.


## GetAsyncOrderJobResponseResult

* Added a new property `commitments` to GetAsyncOrderJobResponseResult, which is an array of CommitmentOutput objects. This allows developers to access commitments created by the order request.


## GetChargeOverride

* Added `isDimensionalPrice` property to indicate if the charge uses dimensional pricing.
* Introduced `pricingAttributes` property for dynamic pricing attributes, requiring DynamicPricing permission.
* Introduced `negotiatedPriceTable` property for negotiated price table information, requiring NegotiatedPriceTable permission.


## GetInvoiceApplicationPartRequest

* The `createdDate` and `updatedDate` fields have changed from `Date` type to `String` type. This may require developers to update their code to handle these fields as strings instead of dates.


## Order

* Added support for `commitments` field in the Order model, allowing developers to include an array of UpsertCommitmentInput objects.


## RatePlanChargeSegment

* Added `pricingAttributes` to support dynamic pricing when DynamicPricing permission is enabled.
* Added `isDimensionalPrice` to indicate if the charge uses dimensional pricing when DynamicPricing permission is enabled.
* Added `IsPriceNegotiated` to indicate if the charge uses negotiated pricing when NegotiatedPriceTable permission is enabled.


## RatePlanChargeSegmentInfo

* Added `pricingAttributes` property to support dynamic pricing attributes.
* Added `isDimensionalPrice` property to indicate if the charge uses dimensional pricing.
* Added `IsPriceNegotiated` property to indicate if the charge uses negotiated pricing.


## UpdateOrderRequest

* Added support for `commitments` field in UpdateOrderRequest, allowing developers to include an array of UpsertCommitmentInput objects.


## UsageTieredWithOveragePricingOverride

* Added `originalListPrice` property to the UsageTieredWithOveragePricingOverride class, allowing developers to access the original list price of a product or service.


## UsageTieredWithOveragePricingUpdate

* Added `originalListPrice` property to UsageTieredWithOveragePricingUpdate class, allowing developers to access the original list price of a product or service.


## VerifyPaymentMethodRequest

* Added support for a new `cryptogram` field in the VerifyPaymentMethodRequest class. This field is a string that represents the cryptogram value supplied by the token provider if a DPAN or network scheme token is present.

