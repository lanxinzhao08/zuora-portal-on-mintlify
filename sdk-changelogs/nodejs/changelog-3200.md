---
title: "Node.js client library 3.20.0 changelog"
sidebarTitle: "3.20.0"
---
## AccountDetailResponse

* Added new field `eReportingProfile`.

## AsyncApplyCreditMemoToInvoice

* Added new field `invoiceNumber`.

## AsyncUnapplyCreditMemoToInvoice

* Added new field `invoiceNumber`.

## BillRun

* Added new field `organizationLabels`.

## BillRunApi

* Added new method updateBillRun.

## BillRunFilter

* Added new field `filterId`.
* Added new enum value `BillRunErrors`.

## BillRunResponse

* Added new field `organizationLabels`.

## CancelBillRunResponse

* Added new field `organizationLabels`.

## ChargeListPriceBase

* Added new enum value `Per_Validity_Period`.

## CollectDebitMemoRequestPayment

* Added new field `balanceRefresh`.

## CreateAccountRequest

* Added new field `eReportingProfile`.

## CreateAuthorizationRequest

* Added new field `currency`.

## CreateAuthorizationResponse

* Added new field `currency`.

## CreateOrderChargeUpdate

* Added new field `clearingCustomFields`.

## CreateOrderCreateSubscription

* Added new field `billToContact`.
* Added new field `shipToContact`.
* Added new field `soldToContact`.

## CreateOrderRatePlanUpdate

* Added new field `clearingCustomFields`.

## CreateOrderResponse

* Added new field `paymentErrorCode`.
* Added new field `paymentErrorMessage`.
* Added new field `paymentStatus`.

## CreateOrderResult

* Added new field `paymentErrorCode`.
* Added new field `paymentErrorMessage`.
* Added new field `paymentStatus`.

## CreateOrderSubscription

* Added new field `clearingCustomFields`.

## CreateOrderTermsAndConditions

* Added new field `billToContact`.
* Added new field `shipToContact`.
* Added new field `soldToContact`.

## CreateOrderUpdateProduct

* Added new field `clearingCustomFields`.

## CreatePaymentMethodDecryptionRequest

* Added new field `paymentGatewayNumber`.

## CreatePaymentRequest

* Added new field `balanceRefresh`.
* Added new field `number`.

## CreatePaymentRunRequest

* Added new field `apiCallerType`.
* Added new field `ignorePaymentRunRetryRule`.
* Added new field `organizationLabels`.
* Added new field `paymentGatewayNumber`.
* Added new field `useCustomPaymentMethods`.

## CreatePaymentScheduleItemsRequestItems

* Added new field `billingDocument`.
* Added new field `paymentGatewayNumber`.

## CreatePaymentScheduleRequest

* Added new field `billingDocuments`.
* Added new field `paymentGatewayNumber`.

## CreatePaymentScheduleRequestItems

* Added new field `paymentGatewayNumber`.

## CreateProductRatePlanChargeRequest

* Added new field `drawdownScope`.
* Added new field `prepaymentUnitType`.
* Added new field `validityPeriodAlignment`.
* Added new field `validityPeriodProrationOption`.
* Deprecated field `commitmentLevel`. Use `validityPeriodAnchorDate` instead.
* Deprecated field `commitmentType`. Use `validityPeriodAnchorDate` instead.

## CreateStoredCredentialProfileRequest

* Added new field `paymentGatewayNumber`.

## CreditMemo

* Added new field `arEreportingRequestId`.
* Added new field `salesEreportingRequestId`.

## CreditMemoResponse

* Added new field `arEreportingRequestId`.
* Added new field `salesEreportingRequestId`.

## CustomObjectDefinitionSchemaRelationshipCardinality

* Added new enum value `ONETOMANY`.

## DebitMemo

* Added new field `arEreportingRequestId`.
* Added new field `salesEreportingRequestId`.

## DebitMemoResponse

* Added new field `arEreportingRequestId`.
* Added new field `salesEreportingRequestId`.

## GetAsyncCreateOrderJobResponse

* Added new field `paymentErrorCode`.
* Added new field `paymentErrorMessage`.
* Added new field `paymentStatus`.

## GetChargeOverride

* Added new field `commitmentType`.

## GetCommitmentResponse

* Added new field `childCommitments`.

## GetProductRatePlanChargeResponse

* Added new field `drawdownScope`.
* Added new field `prepaymentUnitType`.
* Added new field `validityPeriodAlignment`.
* Added new field `validityPeriodProrationOption`.
* Deprecated field `commitmentLevel`. Use `validityPeriodAnchorDate` instead.
* Deprecated field `commitmentType`. Use `validityPeriodAnchorDate` instead.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added new field `drawdownScope`.
* Added new field `prepaymentUnitType`.

## GetSubscriptionResponse

* Added new field `uniqueToken`.

## Invoice

* Added new field `arEreportingRequestId`.
* Added new field `salesEreportingRequestId`.

## InvoiceResponse

* Added new field `arEreportingRequestId`.
* Added new field `salesEreportingRequestId`.

## MigrationUpdateCustomObjectDefinitionsResponse

* Added new field `instant`.

## OrderActionCreateSubscription

* Added new field `uniqueToken`.

## OrderActionOwnerTransfer

* Added new field `billToContact`.
* Added new field `shipToContact`.
* Added new field `soldToContact`.

## OrderActionRenewSubscription

* Added new field `billToContact`.
* Added new field `shipToContact`.
* Added new field `soldToContact`.

## OrderActionTermsAndConditions

* Added new field `billToContact`.
* Added new field `shipToContact`.
* Added new field `soldToContact`.

## Payment

* Added new field `merchantAdviceCode`.
* Added new field `merchantAdviceCodeDescription`.
* Added new field `merchantAdviceCodeRecommendation`.
* Added new field `networkResponseCode`.
* Added new field `networkResponseCodeDescription`.

## PaymentResponse

* Added new field `merchantAdviceCode`.
* Added new field `merchantAdviceCodeDescription`.
* Added new field `merchantAdviceCodeRecommendation`.
* Added new field `networkResponseCode`.
* Added new field `networkResponseCodeDescription`.

## PreviewOrderChargeOverride

* Added new field `commitmentLevel`.
* Added new field `commitmentType`.
* Added new field `drawdownPriority`.
* Added new field `drawdownScope`.
* Added new field `fundSupportAccountHierarchy`.
* Added new field `prepaymentUnitType`.
* Added new field `rolloverEndDate`.
* Added new field `rolloverEndDateType`.
* Added new field `rolloverFundPriority`.
* Added new field `rolloverPeriodType`.

## PreviewOrderCreateSubscription

* Added new field `billToContact`.
* Added new field `shipToContact`.
* Added new field `soldToContact`.

## PreviewPaymentSchedule

* Added new field `description`.
* Added new field `paymentGatewayNumber`.

## ProcessingOptions

* Added new field `allowPaymentFailure`.

## ProcessingOptionsWithDelayedCapturePayment

* Added new field `allowPaymentFailure`.

## ProductRatePlanCharge

* Added new field `drawdownScope`.
* Added new field `prepaymentUnitType`.
* Added new field `validityPeriodAlignment`.
* Added new field `validityPeriodProrationOption`.

## RatePlanChargeSegment

* Added new field `drawdownScope`.
* Added new field `prepaymentUnitType`.

## RatePlanChargeSegmentInfo

* Added new field `drawdownScope`.
* Added new field `prepaymentUnitType`.

## RetryPaymentScheduleItem

* Added new field `paymentGatewayNumber`.

## UpdateAccountRequest

* Added new field `eReportingProfile`.

## UpdatePaymentRunRequest

* Added new field `apiCallerType`.
* Added new field `data`.
* Added new field `ignorePaymentRunRetryRule`.
* Added new field `organizationLabels`.
* Added new field `paymentGatewayNumber`.
* Added new field `useCustomPaymentMethods`.

## UpdatePaymentScheduleItemRequest

* Added new field `paymentGatewayNumber`.

## UpdatePaymentScheduleRequest

* Added new field `description`.
* Added new field `paymentGatewayNumber`.

## UpdateProductRatePlanChargeRequest

* Added new field `drawdownScope`.
* Added new field `prepaymentUnitType`.
* Added new field `validityPeriodAlignment`.
* Added new field `validityPeriodProrationOption`.
* Deprecated field `commitmentLevel`. Use `validityPeriodAnchorDate` instead.
* Deprecated field `commitmentType`. Use `validityPeriodAnchorDate` instead.

## UpsertCreateCommitmentInput

* Added new field `childCommitments`.

## UpsertUpdateCommitmentInput

* Added new field `childCommitments`.

## VerifyPaymentMethodRequest

* Added new field `paymentGatewayNumber`.

## ZuoraClient

* Added CustomLogicApi.
* Added EComplianceApi.
* Added EReportingApi.
