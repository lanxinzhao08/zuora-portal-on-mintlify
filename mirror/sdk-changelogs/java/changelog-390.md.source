---
markdown:
  toc:
    hide: false
---

# Java client library 3.9.0 changelog


## ZuoraClient


* Added retry configuration for authentication failures with exponential backoff. Developers can now set the maximum number of retry attempts and the base delay for retries using the `withRetryConfig` method in the Builder class.
* Introduced `setRetryConfig` and `getRetryConfig` methods to configure and retrieve retry settings for authentication failures.


## ZuoraClientConfig

* Added retry configuration for authentication with methods to set and get maximum retry attempts and base delay for exponential backoff.


## InvoicesApi

* Added pagination support with new parameters `pageSize` and `page` to the method `getInvoiceApplicationParts`. This allows developers to specify the number of records per page and the page index to retrieve.


## ObjectQueriesApi

* Changed the endpoint path for commitment segments from `/object-query/commitmentSegment` to `/object-query/commitment-segment`. <!--Commitments related APIs are not published yet. Do we need to announce it here? -->
* Added new methods to query CommitmentCycle by key with various parameters such as filters, expands, sort capabilities.
* Introduced new API methods to query multiple CommitmentCycles with similar capabilities.


## ChargeOverride

* Added `pricingAttributes` field to support dynamic pricing with a map of attributes.
* Introduced the `negotiatedPriceTable` field as a list of maps to handle negotiated pricing details.


## ChargeUpdate

* Added new field `isDimensionalPrice` to indicate if the charge uses dimensional pricing.
* Introduced `pricingAttributes` field as a container for dynamic pricing attributes.
* Introduced `negotiatedPriceTable` field to hold negotiated price table information.


## CollectDebitMemoRequestPayment

* Added a new field `cryptogram` to the CollectDebitMemoRequestPayment class, allowing the inclusion of a cryptogram value supplied by the token provider.


## CreateAuthorizationRequest

* Added a new field `cryptogram` to the CreateAuthorizationRequest class, allowing developers to include a cryptogram value supplied by the token provider.


## CreateCreditCardPaymentMethod

* Added support for `cryptogram` field in CreateCreditCardPaymentMethod class, allowing developers to include cryptogram values supplied by token providers.


## CreateOrderChargeUpdate

* Added support for `pricingAttributes`, allowing developers to provide additional context for dynamic pricing.
* Introduced `negotiatedPriceTable`, enabling developers to include an array of negotiated price table information.


## CreateOrderRequest

* Added support for handling commitments with the introduction of the `commitments` field, allowing developers to create or update commitments using the `UpsertCommitmentInput` model.


## CreateOrderResponse

* Added a new field `commitments` of type `List<CommitmentOutput>` to the CreateOrderResponse class.


## CreateOrderResult

* Added a new field `commitments` of type `List<CommitmentOutput>` to the CreateOrderResult class.


## CreatePaymentRequest

* Added a new field `cryptogram` to the CreatePaymentRequest class, allowing developers to include a cryptogram value supplied by the token provider.


## ExpandedDailyConsumptionSummary

* Added new field `adjustmentRevenueGLString` to the ExpandedDailyConsumptionSummary class.
* Added new field `recognizedRevenueGLString` to the ExpandedDailyConsumptionSummary class.


## ExpandedRatePlan

* Added a new field `pricingAttributes` to the ExpandedRatePlan class.


## ExpandedRatePlanCharge

* Added new field `pricingAttributes` to the ExpandedRatePlanCharge class.
* Added new field `negotiatedPriceTable` to the ExpandedRatePlanCharge class.


## GetAsyncCreateOrderJobResponse

* Added a new field `commitments` of type `List<CommitmentOutput>` to the GetAsyncCreateOrderJobResponse class.


## GetChargeOverride

* Added new field `isDimensionalPrice` to indicate if the charge uses dimensional pricing.
* Introduced `pricingAttributes` field as a container for dynamic pricing attributes.
* Introduced `negotiatedPriceTable` field to hold negotiated price table information.


## GetInvoiceApplicationPartRequest

* The data type for `createdDate` and `updatedDate` has been changed from OffsetDateTime to String. This change requires developers to update their code to handle date strings instead of OffsetDateTime objects.


## Order

* Added support for handling commitments in the Order class. This includes new methods to set, add, and retrieve commitments, as well as validation for the commitments field in JSON input.


## RatePlanChargeSegment

* Added new field `pricingAttributes` to support dynamic pricing attributes.
* Introduced `isDimensionalPrice` field to indicate if the charge uses dimensional pricing.
* Added `isPriceNegotiated` field to specify if the charge uses negotiated pricing.


## RatePlanChargeSegmentInfo

* Added new field `pricingAttributes` to support dynamic pricing attributes.
* Introduced `isDimensionalPrice` field to indicate if the charge uses dimensional pricing.
* Added `isPriceNegotiated` field to specify if the charge uses negotiated pricing.


## UpdateOrderRequest

* Added support for handling commitments in UpdateOrderRequest with a new field `commitments` of type `List<UpsertCommitmentInput>`.


## UsageTieredWithOveragePricingOverride

* Added a new field `originalListPrice` to the UsageTieredWithOveragePricingOverride class.


## UsageTieredWithOveragePricingUpdate

* Added a new field `originalListPrice` to the UsageTieredWithOveragePricingUpdate class.


## VerifyPaymentMethodRequest

* Added a new field `cryptogram` to the VerifyPaymentMethodRequest class, allowing developers to include a cryptogram value supplied by the token provider.

## Quickstart API model

* Changed the `revenue_recognition_rule` field in Price, PricePatchRequest, and PriceCreateRequest classes from Enum to String type.
