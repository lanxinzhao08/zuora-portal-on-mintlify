---
title: "C# client library 1.1.0 changelog"
sidebarTitle: "1.1.0"
---
## InvoicesApi

* Added optional parameters `pageSize` and `page` to the GetInvoiceApplicationParts and GetInvoiceApplicationPartsAsync methods, allowing for pagination of results.


## ObjectQueriesApi

* Changed endpoint paths for querying commitment segments from `/object-query/commitmentSegment` to `/object-query/commitment-segment`.
* Added new methods for querying commitment cycles: QueryCommitmentCycleByKey, QueryCommitmentCycleByKeyWithHttpInfo, QueryCommitmentCycles, and their asynchronous counterparts.
* Introduced support for querying commitment segments with updated endpoint paths.


## ZuoraClient

* Added SetRetryConfig method to configure retry attempts and base delay for authentication failures.
* Added GetRetryConfig method to retrieve the current retry configuration.
* Implemented retry logic with exponential backoff for FetchBearerToken method to handle authentication failures.


## ZuoraClientConfig

* Introduced configuration for retry attempts and base delay for authentication with default values.
* Added method to set retry configuration with validation for maxRetries (1-10) and retryBaseDelayMs (100-30000 ms).
* Added method to retrieve current retry configuration as a dictionary.


## AccountingCodeType

* Added new enum value `UnbilledReceivables` with value 15.
* Added new enum value `ContractAssets` with value 16.
* Added new enum value `ContractLiabilities` with value 17.
* Added new enum value `AdjustmentLiabilities` with value 18.
* Added new enum value `AdjustmentRevenue` with value 19.


## ChargeOverride

* Added new property `PricingAttributes` of type `Dictionary<string, Object>`.
* Added new property `NegotiatedPriceTable` of type `List<Dictionary<string, Object>>`.


## ChargeUpdate

* Added new constructor parameters: `pricingAttributes` and `negotiatedPriceTable`.
* Introduced new properties: PricingAttributes and NegotiatedPriceTable for handling additional pricing details.
* Added a new read-only property: IsDimensionalPrice.


## CollectDebitMemoRequestPayment

* Added a new parameter `cryptogram` to the CollectDebitMemoRequestPayment constructor.
* Introduced a new property `Cryptogram` to store cryptographic information.


## CreateAuthorizationRequest

* Added a new optional parameter `cryptogram` to the CreateAuthorizationRequest constructor.
* Introduced a new property `Cryptogram` to the CreateAuthorizationRequest class.


## CreateCreditCardPaymentMethod

* Added a new parameter `cryptogram` to the CreateCreditCardPaymentMethod constructor.
* Introduced a new property `Cryptogram` with a maximum length validation of 50 characters.


## CreateOrderChargeUpdate

* Added new parameter `pricingAttributes` to the CreateOrderChargeUpdate constructor.
* Added new parameter `negotiatedPriceTable` to the CreateOrderChargeUpdate constructor.


## CreateOrderRequest

* Added a new parameter `commitments` to the CreateOrderRequest constructor, allowing developers to include a list of UpsertCommitmentInput objects when creating an order.


## CreateOrderResponse

* Added a new property `Commitments` of type`List<CommitmentOutput>` to the CreateOrderResponse class.


## CreateOrderResult

* Added a new property `Commitments` of type `List<CommitmentOutput>` to the CreateOrderResult class.


## CreatePaymentRequest

* Added a new optional parameter `cryptogram` to the CreatePaymentRequest constructor.
* Introduced a new property `Cryptogram` in the CreatePaymentRequest class with a maximum length validation of 50 characters.


## ExpandedDailyConsumptionSummary

* Added new properties: AdjustmentRevenueGLString and RecognizedRevenueGLString to the ExpandedDailyConsumptionSummary class.


## ExpandedRatePlan

* Added a new parameter `pricingAttributes` to the constructor of the ExpandedRatePlan class.


## ExpandedRatePlanCharge

* Added new property `PricingAttributes` to the ExpandedRatePlanCharge model.
* Added new property `NegotiatedPriceTable` to the ExpandedRatePlanCharge model.


## GetAsyncCreateOrderJobResponse

* Added a new property `Commitments` of type `List<CommitmentOutput>` to the GetAsyncCreateOrderJobResponse class.

## GetChargeOverride

* Added new parameters `pricingAttributes` and `negotiatedPriceTable` to the GetChargeOverride constructor.
* Introduced new properties `PricingAttributes` and `NegotiatedPriceTable` to store additional pricing information.
* Added a new read-only property `IsDimensionalPrice` to indicate if the price is dimensional.


## GetInvoiceApplicationPartRequest

* Changed the data type of `CreatedDate` from DateTime to string.
* Changed the data type of `UpdatedDate` from DateTime to string.


## Order

* Added a new parameter `commitments` of type `List<UpsertCommitmentInput>` to the Order constructor.


## RatePlanChargeSegment

* Added new property `PricingAttributes` of type `Dictionary<string, Object>`.
* Added new property `IsDimensionalPrice` of type `bool?`.
* Added new property `IsPriceNegotiated` of type `bool?`.


## RatePlanChargeSegmentInfo

* Added new property `PricingAttributes` of type `Dictionary<string, Object>`.
* Added new property `IsDimensionalPrice` of type `bool?`.
* Added new property `IsPriceNegotiated` of type `bool?`.


## UpdateOrderRequest

* Added a new parameter `commitments` of type `List<UpsertCommitmentInput>` to the UpdateOrderRequest constructor.


## UsageTieredWithOveragePricingOverride

* Added a new property `OriginalListPrice` to the UsageTieredWithOveragePricingOverride class.


## UsageTieredWithOveragePricingUpdate

* Added a new optional parameter `originalListPrice` to the constructor of UsageTieredWithOveragePricingUpdate.


## VerifyPaymentMethodRequest

* Added a new parameter `cryptogram` to the VerifyPaymentMethodRequest constructor.
* Introduced a new property `Cryptogram` with a maximum length validation of 50 characters.
