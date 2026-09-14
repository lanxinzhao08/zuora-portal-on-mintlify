---
markdown:
  toc:
    hide: false
---

# C# client library 1.12.0 changelog

## AccountDetailResponse

* Added new property `EReportingProfile`.

## AsyncApplyCreditMemoToInvoice

* Added new property `InvoiceNumber`.

## AsyncUnapplyCreditMemoToInvoice

* Added new property `InvoiceNumber`.

## BillRun

* Added new property `OrganizationLabels`.

## BillRunApi

* Added new method UpdateBillRun.

## BillRunFilter

* Added new property `FilterId`.
* Added new enum value `BillRunErrors`.

## BillRunResponse

* Added new property `OrganizationLabels`.

## CancelBillRunResponse

* Added new property `OrganizationLabels`.

## ChargeListPriceBase

* Added new enum value `ValidityPeriod`.

## CollectDebitMemoRequestPayment

* Added new property `BalanceRefresh`.

## CreateAccountRequest

* Added new property `EReportingProfile`.

## CreateAuthorizationRequest

* Added new property `Currency`.

## CreateAuthorizationResponse

* Added new property `Currency`.

## CreateOrderChargeUpdate

* Added new property `ClearingCustomFields`.

## CreateOrderCreateSubscription

* Added new property `BillToContact`.
* Added new property `ShipToContact`.
* Added new property `SoldToContact`.

## CreateOrderRatePlanUpdate

* Added new property `ClearingCustomFields`.

## CreateOrderResponse

* Added new property `PaymentErrorCode`.
* Added new property `PaymentErrorMessage`.
* Added new property `PaymentStatus`.

## CreateOrderResult

* Added new property `PaymentErrorCode`.
* Added new property `PaymentErrorMessage`.
* Added new property `PaymentStatus`.

## CreateOrderSubscription

* Added new property `ClearingCustomFields`.

## CreateOrderTermsAndConditions

* Added new property `BillToContact`.
* Added new property `ShipToContact`.
* Added new property `SoldToContact`.

## CreateOrderUpdateProduct

* Added new property `ClearingCustomFields`.

## CreatePaymentMethodDecryptionRequest

* Added new property `PaymentGatewayNumber`.

## CreatePaymentRequest

* Added new property `BalanceRefresh`.
* Added new property `Number`.

## CreatePaymentRunRequest

* Added new property `ApiCallerType`.
* Added new property `IgnorePaymentRunRetryRule`.
* Added new property `OrganizationLabels`.
* Added new property `PaymentGatewayNumber`.
* Added new property `UseCustomPaymentMethods`.

## CreatePaymentScheduleItemsRequestItems

* Added new property `BillingDocument`.
* Added new property `PaymentGatewayNumber`.

## CreatePaymentScheduleRequest

* Added new property `BillingDocuments`.
* Added new property `PaymentGatewayNumber`.

## CreatePaymentScheduleRequestItems

* Added new property `PaymentGatewayNumber`.

## CreateProductRatePlanChargeRequest

* Added new property `DrawdownScope`.
* Added new property `PrepaymentUnitType`.
* Added new property `ValidityPeriodAlignment`.
* Added new property `ValidityPeriodProrationOption`.
* Deprecated field `CommitmentLevel`. Use `ValidityPeriodAnchorDate` instead.
* Deprecated field `CommitmentType`. Use `ValidityPeriodAnchorDate` instead.

## CreateStoredCredentialProfileRequest

* Added new property `PaymentGatewayNumber`.

## CreditMemo

* Added new property `ArEreportingRequestId`.
* Added new property `SalesEreportingRequestId`.

## CreditMemoResponse

* Added new property `ArEreportingRequestId`.
* Added new property `SalesEreportingRequestId`.

## CustomObjectDefinitionSchemaRelationshipCardinality

* Added new enum value `ONETOMANY`.

## DebitMemo

* Added new property `ArEreportingRequestId`.
* Added new property `SalesEreportingRequestId`.

## DebitMemoResponse

* Added new property `ArEreportingRequestId`.
* Added new property `SalesEreportingRequestId`.

## GetAsyncCreateOrderJobResponse

* Added new property `PaymentErrorCode`.
* Added new property `PaymentErrorMessage`.
* Added new property `PaymentStatus`.

## GetChargeOverride

* Added new property `CommitmentType`.

## GetCommitmentResponse

* Added new property `ChildCommitments`.

## GetProductRatePlanChargeResponse

* Added new property `DrawdownScope`.
* Added new property `PrepaymentUnitType`.
* Added new property `ValidityPeriodAlignment`.
* Added new property `ValidityPeriodProrationOption`.
* Deprecated field `CommitmentLevel`. Use `ValidityPeriodAnchorDate` instead.
* Deprecated field `CommitmentType`. Use `ValidityPeriodAnchorDate` instead.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added new property `DrawdownScope`.
* Added new property `PrepaymentUnitType`.

## GetSubscriptionResponse

* Added new property `UniqueToken`.

## Invoice

* Added new property `ArEreportingRequestId`.
* Added new property `SalesEreportingRequestId`.

## InvoiceResponse

* Added new property `ArEreportingRequestId`.
* Added new property `SalesEreportingRequestId`.

## MigrationUpdateCustomObjectDefinitionsResponse

* Added new property `Instant`.

## OrderActionCreateSubscription

* Added new property `UniqueToken`.

## OrderActionOwnerTransfer

* Added new property `BillToContact`.
* Added new property `ShipToContact`.
* Added new property `SoldToContact`.

## OrderActionRenewSubscription

* Added new property `BillToContact`.
* Added new property `ShipToContact`.
* Added new property `SoldToContact`.

## OrderActionTermsAndConditions

* Added new property `BillToContact`.
* Added new property `ShipToContact`.
* Added new property `SoldToContact`.

## Payment

* Added new property `MerchantAdviceCode`.
* Added new property `MerchantAdviceCodeDescription`.
* Added new property `MerchantAdviceCodeRecommendation`.
* Added new property `NetworkResponseCode`.
* Added new property `NetworkResponseCodeDescription`.

## PaymentResponse

* Added new property `MerchantAdviceCode`.
* Added new property `MerchantAdviceCodeDescription`.
* Added new property `MerchantAdviceCodeRecommendation`.
* Added new property `NetworkResponseCode`.
* Added new property `NetworkResponseCodeDescription`.

## PreviewOrderChargeOverride

* Added new property `CommitmentLevel`.
* Added new property `CommitmentType`.
* Added new property `DrawdownPriority`.
* Added new property `DrawdownScope`.
* Added new property `FundSupportAccountHierarchy`.
* Added new property `PrepaymentUnitType`.
* Added new property `RolloverEndDate`.
* Added new property `RolloverEndDateType`.
* Added new property `RolloverFundPriority`.
* Added new property `RolloverPeriodType`.

## PreviewOrderCreateSubscription

* Added new property `BillToContact`.
* Added new property `ShipToContact`.
* Added new property `SoldToContact`.

## PreviewPaymentSchedule

* Added new property `Description`.
* Added new property `PaymentGatewayNumber`.

## ProcessingOptions

* Added new property `AllowPaymentFailure`.

## ProcessingOptionsWithDelayedCapturePayment

* Added new property `AllowPaymentFailure`.

## ProductRatePlanCharge

* Added new property `DrawdownScope`.
* Added new property `PrepaymentUnitType`.
* Added new property `ValidityPeriodAlignment`.
* Added new property `ValidityPeriodProrationOption`.

## RatePlanChargeSegment

* Added new property `DrawdownScope`.
* Added new property `PrepaymentUnitType`.

## RatePlanChargeSegmentInfo

* Added new property `DrawdownScope`.
* Added new property `PrepaymentUnitType`.

## RetryPaymentScheduleItem

* Added new property `PaymentGatewayNumber`.

## UpdateAccountRequest

* Added new property `EReportingProfile`.

## UpdatePaymentRunRequest

* Added new property `ApiCallerType`.
* Added new property `Data`.
* Added new property `IgnorePaymentRunRetryRule`.
* Added new property `OrganizationLabels`.
* Added new property `PaymentGatewayNumber`.
* Added new property `UseCustomPaymentMethods`.

## UpdatePaymentScheduleItemRequest

* Added new property `PaymentGatewayNumber`.

## UpdatePaymentScheduleRequest

* Added new property `Description`.
* Added new property `PaymentGatewayNumber`.

## UpdateProductRatePlanChargeRequest

* Added new property `DrawdownScope`.
* Added new property `PrepaymentUnitType`.
* Added new property `ValidityPeriodAlignment`.
* Added new property `ValidityPeriodProrationOption`.
* Deprecated field `CommitmentLevel`. Use `ValidityPeriodAnchorDate` instead.
* Deprecated field `CommitmentType`. Use `ValidityPeriodAnchorDate` instead.

## UpsertCreateCommitmentInput

* Added new property `ChildCommitments`.

## UpsertUpdateCommitmentInput

* Added new property `ChildCommitments`.

## VerifyPaymentMethodRequest

* Added new property `PaymentGatewayNumber`.

## ZuoraClient

* Added CustomLogicApi.
* Added EComplianceApi.
* Added EReportingApi.
