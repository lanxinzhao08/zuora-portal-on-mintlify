---
title: "Node.js client library 3.18.0 changelog"
sidebarTitle: "3.18.0"
---
## CreditMemosApi

* Added an optional parameter `transaction_id` to the method for Re-Sync operation. This parameter allows overriding the transaction ID stored from the last executed run.

## DebitMemosApi

* Added an optional parameter `transaction_id` to the API method. This parameter allows specifying a service-provider transaction ID for Re-Sync operations, which can override the stored transaction ID from the last executed run.

## InvoicesApi

* Added new method getInvoiceWriteOffAsyncWithHttpInfo to retrieve information about a specific asynchronous invoice write-off job.
* Added new method getInvoiceWriteOffAsync as a simplified version of getInvoiceWriteOffAsyncWithHttpInfo.
* Added new method createInvoiceWriteOffAsyncWithHttpInfo to write off an invoice asynchronously.
* Added new method createInvoiceWriteOffAsync as a simplified version of createInvoiceWriteOffAsyncWithHttpInfo.
* Added new optional parameter `transaction_id` to an existing method for Re-Sync operation.


## ObjectQueriesApi

* Added new import for ExpandedChildCommitment.
* Added new import for QueryChildCommitmentsResponse.
* Added new method queryChildCommitmentByKeyWithHttpInfo to query ChildCommitment by key with filters, expands, and sort capabilities.
* Added new method queryChildCommitmentByKey to query ChildCommitment by key with filters, expands, and sort capabilities.
* Added new method queryChildCommitmentsWithHttpInfo to query ChildCommitments with filters, expands, and sort capabilities.
* Added new method queryChildCommitments to query ChildCommitments with filters, expands, and sort capabilities.
* Expanded the supported expands for querying Commitment by key to include `childcommitments` and `childcommitments.childcommitment`.
* Expanded the supported expands for querying Commitments to include `childcommitments` and `childcommitments.childcommitment`.


## index

* CustomAmountConfig model constructor added.
* CustomAmountConfigAttributesInner model constructor added.
* CustomAmountConfigAttributesInnerMapping model constructor added.
* CustomAmountConfigRateCardsInner model constructor added.
* CustomAmountConfigRateCardsInnerConditionsInner model constructor added.
* CustomAmountConfigRateCardsInnerPricing model constructor added.
* ExpandedChildCommitment model constructor added.
* QueryChildCommitmentsResponse model constructor added.
* RolloverEndDateType model constructor added.
* RolloverPeriodType model constructor added.
* VpAlignment model constructor added.
* VpProrationOption model constructor added.
* WriteOffInvoiceAsyncJobResponse model constructor added.

## BasePeriod

* Added the `balance` field, indicating the remaining balance for this period (`committedAmount` - `billedTotalSpending` - `trueUpAmount` - `expiredAmount`). Balance is always non-negative.
* Added the `trueUpAmount` field, indicating the total true-up amount for this commitment period. It will be null if it is a prepaid commitment or if it is not evaluated yet. This will be a non-negative number.
* Added the `expiredAmount` field, indicating the total expired amount for this commitment period. It will be null if it is a postpaid commitment or if the period is not evaluated yet. This will be a non-negative number.
* Added the `billedTotalSpending` field, indicating the sum of drawdown or drawdown reversal transactions.

## ChargeOverride

* Added new import statements for RolloverEndDateType, RolloverPeriodType, VpAlignment, and VpProrationOption.
* Added new field `prepaymentUnitType` with type String.
* Added new field `drawdownScope` with type String.
* Added new field `vpAlignment` with type VpAlignment.
* Added new field `vpAnchorDate` with type String.
* Added new field `vpProrationOption` with type VpProrationOption.
* Added new field `specificValidityPeriodLength` with type Number.
* Added new field `rolloverPeriodType` with type RolloverPeriodType.
* Added new field `rolloverFundPriority` with type Number.
* Added new field `rolloverEndDateType` with type RolloverEndDateType.
* Added new field `rolloverEndDate` with type String.
* Added new field `fundSupportAccountHierarchy` with type Boolean.
* Added new field `drawdownPriority` with type Number.
* Added new field `clearingExistingRolloverPeriodType` with type Boolean.
* Added new field `clearingExistingRolloverPeriodLength` with type Boolean.
* Added new enum `PrepaymentUnitTypeEnum` with values `UNIT` and `CURRENCY`.
* Added new enum `DrawdownScopeEnum` with values `RATEPLAN`, `SUBSCRIPTION`, and `ACCOUNT`.

## CommitmentScheduleAttributes

* The `amount` parameter in the constructor is now marked as `Always required`, indicating a change in its requirement status.
* Added a new import for CustomAmountConfig.
* Added a new field `customAmount` of type CustomAmountConfig to the CommitmentScheduleAttributes class.
* Added validation for the new `customAmount` field in the `validateJSON` method.

## CommitmentScheduleInput

* The `amount` field is now marked as `Always required`.
* Added a new import for CustomAmountConfig.
* Added a new field `customAmount` of type CustomAmountConfig to the CommitmentScheduleInput class.
* Added validation for the new `customAmount` field in the `constructFromObject` and `validateJSON` methods.

## CommitmentScheduleOutput

* The `amount` field is now marked as `Always required`.
* Added a new import for CustomAmountConfig.
* Added a new field `customAmount` of type CustomAmountConfig to the CommitmentScheduleOutput class.
* Added validation for the new `customAmount` field in the CommitmentScheduleOutput class.

## CreateBillingPreviewRunRequest

* Added a new import for OrganizationLabel.
* Added a new field `organizationLabels` of type Array to the CreateBillingPreviewRunRequest class.

## CreateInvoiceItem

* Added a new field `accountsReceivableAccountingCode` to the CreateInvoiceItem class.

## CreateInvoiceRequest

* Added a new field `currency` to the CreateInvoiceRequest model.

## CreateProductRatePlanChargeRequest

* Added new import for CommitmentLevel.
* Added new import for RolloverEndDateType.
* Added new import for RolloverPeriodType.
* Added new import for VpAlignment.
* Added new import for VpProrationOption.
* Added new field `CommitmentLevel` to CreateProductRatePlanChargeRequest.
* Added new field `DrawdownPriority` to CreateProductRatePlanChargeRequest.
* Added new field `VpAlignment` to CreateProductRatePlanChargeRequest.
* Added new field `VpProrationOption` to CreateProductRatePlanChargeRequest.
* Added new field `SpecificValidityPeriodLength` to CreateProductRatePlanChargeRequest.
* Added new field `RolloverPeriodType` to CreateProductRatePlanChargeRequest.
* Added new field `RolloverFundPriority` to CreateProductRatePlanChargeRequest.
* Added new field `RolloverEndDateType` to CreateProductRatePlanChargeRequest.
* Added new field `FundSupportAccountHierarchy` to CreateProductRatePlanChargeRequest.

## CreateSequenceSetRequest

* Added a new field `sequenceSetNumber` of type String to the CreateSequenceSetRequest class.

## CreditMemoItemFromWriteOffInvoice

* Added new field `excludeItemBillingFromRevenueAccounting` of type Boolean to the CreditMemoItemFromWriteOffInvoice class.

## ExpandedAccount

* Removed field `integrationId__NS` from the ExpandedAccount model.

## ExpandedCommitment

* Removed field `overlapDrawdownPolicy` from the ExpandedCommitment class.
* Added new import ExpandedChildCommitment.
* Added new field `childCommitments` to the ExpandedCommitment class.

## ExpandedCommitmentAssociatedItem

* Added a new field `status` of type String to the ExpandedCommitmentAssociatedItem class.

## ExpandedCommitmentPeriod

* Added new field `expiredAmount` of type Number to the ExpandedCommitmentPeriod model.
* Added new field `trueUpAmount` of type Number to the ExpandedCommitmentPeriod model.
* Added new field `balance` of type Number to the ExpandedCommitmentPeriod model.

## ExpandedCommitmentSchedule

* Added new field `customAmount` of type String to the ExpandedCommitmentSchedule model.

## ExpandedCommitmentTransaction

* Added a new field `status` of type String to the ExpandedCommitmentTransaction model.

## ExpandedInvoice

* Removed field `integrationId__NS` from the ExpandedInvoice class.

## ExpandedPayment

* Removed field `integrationId__NS` from the ExpandedPayment model.

## ExpandedRatePlanCharge

* Added new field `totalEntitledQuantity` of type Number to the ExpandedRatePlanCharge model.
* Added new field `totalContractValue` of type Number to the ExpandedRatePlanCharge model.

## GetChargeOverride

* Added new field `drawdownScope` to the GetChargeOverride model.
* Added new field `prepaymentUnitType` to the GetChargeOverride model.
* Added new enum `DrawdownScopeEnum` with values `RATEPLAN`, `SUBSCRIPTION`, and `ACCOUNT`.
* Added new enum `PrepaymentUnitTypeEnum` with values `UNIT` and `CURRENCY`.

## GetProductRatePlanChargeResponse

* Added new import for CommitmentLevel.
* Added new import for RolloverEndDateType.
* Added new import for RolloverPeriodType.
* Added new import for VpAlignment.
* Added new import for VpProrationOption.
* Added new field `CommitmentLevel` to GetProductRatePlanChargeResponse.
* Added new field `DrawdownPriority` to GetProductRatePlanChargeResponse.
* Added new field `VpAlignment` to GetProductRatePlanChargeResponse.
* Added new field `VpProrationOption` to GetProductRatePlanChargeResponse.
* Added new field `SpecificValidityPeriodLength` to GetProductRatePlanChargeResponse.
* Added new field `RolloverPeriodType` to GetProductRatePlanChargeResponse.
* Added new field `RolloverFundPriority` to GetProductRatePlanChargeResponse.
* Added new field `RolloverEndDateType` to GetProductRatePlanChargeResponse.
* Added new field `FundSupportAccountHierarchy` to GetProductRatePlanChargeResponse.
* Added new field `CommitmentLevel` to ProductRatePlanCharge.
* Added new field `DrawdownPriority` to ProductRatePlanCharge.
* Added new field `VpAlignment` to ProductRatePlanCharge.
* Added new field `VpProrationOption` to ProductRatePlanCharge.
* Added new field `SpecificValidityPeriodLength` to ProductRatePlanCharge.
* Added new field `RolloverPeriodType` to ProductRatePlanCharge.
* Added new field `RolloverFundPriority` to ProductRatePlanCharge.
* Added new field `RolloverEndDateType` to ProductRatePlanCharge.
* Added new field `FundSupportAccountHierarchy` to ProductRatePlanCharge.

## GetSubscriptionRatePlanChargesWithAllSegments

* Added new field `totalEntitledQuantity` to the GetSubscriptionRatePlanChargesWithAllSegments model.
* Added new field `totalContractValue` to the GetSubscriptionRatePlanChargesWithAllSegments model.

## InvoiceSettlementAsyncJobOperationType

* New enum value `AsyncInvoiceWriteOff` added to the InvoiceSettlementAsyncJobOperationType class.

## InvoiceSettlementAsyncJobReferenceType

* New enum value `Invoice` added to the InvoiceSettlementAsyncJobReferenceType class.

## LinkageLinkageType

* New enum value `For Each` added to the LinkageLinkageType class.

## ListCommitmentPeriodOutput

* Added new field `balance` of type Number to ListCommitmentPeriodOutput.
* Added new field `trueUpAmount` of type Number to ListCommitmentPeriodOutput.
* Added new field `expiredAmount` of type Number to ListCommitmentPeriodOutput.
* Added new field `billedTotalSpending` of type Number to ListCommitmentPeriodOutput.
* Added new field `balance` of type Number to BasePeriod.
* Added new field `trueUpAmount` of type Number to BasePeriod.
* Added new field `expiredAmount` of type Number to BasePeriod.
* Added new field `billedTotalSpending` of type Number to BasePeriod.

## ListCommitmentScheduleOutput

* Added new field `customAmount` to the ListCommitmentScheduleOutput model.

## OverrideDiscountApplyDetail

* Constructor parameter changes: Removed parameters `product_rate_plan_id` and `product_rate_plan_charge_id` from the constructor.
* Fields `productRatePlanId` and `productRatePlanChargeId` are no longer required as indicated by the removal of `OverrideDiscountApplyDetail.RequiredProperties`.
* Added new field `productRatePlanNumber`.
* Added new field `productRatePlanChargeNumber`.

## PeriodBalance

* Added new field `trueUpAmount` to the PeriodBalance model.
* Added new field `expiredAmount` to the PeriodBalance model.
* Added new field `billedTotalSpending` to the PeriodBalance model.

## PreviewOrderChargeOverride

* Added new field `specificValidityPeriodLength` to the PreviewOrderChargeOverride model. This field is available when the Prepaid Drawdown Proration feature is enabled and specifies the number of days, weeks, or months for the validity period when ValidityPeriodType is `SPECIFIC_DAYS`, `SPECIFIC_WEEKS`, or `SPECIFIC_MONTHS`.

## ProductRatePlanCharge

* Added new import for CommitmentLevel.
* Added new import for RolloverEndDateType.
* Added new import for RolloverPeriodType.
* Added new import for VpAlignment.
* Added new import for VpProrationOption.
* Added new field `CommitmentLevel` to ProductRatePlanCharge.
* Added new field `DrawdownPriority` to ProductRatePlanCharge.
* Added new field `VpAlignment` to ProductRatePlanCharge.
* Added new field `VpProrationOption` to ProductRatePlanCharge.
* Added new field `SpecificValidityPeriodLength` to ProductRatePlanCharge.
* Added new field `RolloverPeriodType` to ProductRatePlanCharge.
* Added new field `RolloverFundPriority` to ProductRatePlanCharge.
* Added new field `RolloverEndDateType` to ProductRatePlanCharge.
* Added new field `FundSupportAccountHierarchy` to ProductRatePlanCharge.

## RatePlanChargeSegment

* Added new import for RolloverEndDateType.
* Added new import for RolloverPeriodType.
* Added new import for VpAlignment.
* Added new import for VpProrationOption.
* Added new field `totalEntitledQuantity` of type String.
* Added new field `totalContractValue` of type String.
* Added new field `vpAlignment` of type VpAlignment.
* Added new field `vpAnchorDate` of type String.
* Added new field `vpProrationOption` of type VpProrationOption.
* Added new field `specificValidityPeriodLength` of type Number.
* Added new field `rolloverPeriodType` of type RolloverPeriodType.
* Added new field `rolloverFundPriority` of type Number.
* Added new field `rolloverEndDateType` of type RolloverEndDateType.
* Added new field `rolloverEndDate` of type String.
* Added new field `fundSupportAccountHierarchy` of type Boolean.
* Added new field `drawdownPriority` of type Number.
* Added new field `totalEntitledQuantity` to RatePlanChargeSegmentInfo of type String.
* Added new field `totalContractValue` to RatePlanChargeSegmentInfo of type String.
* Added new field `vpAlignment` to RatePlanChargeSegmentInfo of type VpAlignment.
* Added new field `vpAnchorDate` to RatePlanChargeSegmentInfo of type String.
* Added new field `vpProrationOption` to RatePlanChargeSegmentInfo of type VpProrationOption.
* Added new field `specificValidityPeriodLength` to RatePlanChargeSegmentInfo of type Number.
* Added new field `rolloverPeriodType` to RatePlanChargeSegmentInfo of type RolloverPeriodType.
* Added new field `rolloverFundPriority` to RatePlanChargeSegmentInfo of type Number.
* Added new field `rolloverEndDateType` to RatePlanChargeSegmentInfo of type RolloverEndDateType.
* Added new field `rolloverEndDate` to RatePlanChargeSegmentInfo of type String.
* Added new field `fundSupportAccountHierarchy` to RatePlanChargeSegmentInfo of type Boolean.
* Added new field `drawdownPriority` to RatePlanChargeSegmentInfo of type Number.

## RatePlanChargeSegmentInfo

* Added new import for RolloverEndDateType.
* Added new import for RolloverPeriodType.
* Added new import for VpAlignment.
* Added new import for VpProrationOption.
* Added new field `totalEntitledQuantity` of type String.
* Added new field `totalContractValue` of type String.
* Added new field `vpAlignment` of type VpAlignment.
* Added new field `vpAnchorDate` of type String.
* Added new field `vpProrationOption` of type VpProrationOption.
* Added new field `specificValidityPeriodLength` of type Number.
* Added new field `rolloverPeriodType` of type RolloverPeriodType.
* Added new field `rolloverFundPriority` of type Number.
* Added new field `rolloverEndDateType` of type RolloverEndDateType.
* Added new field `rolloverEndDate` of type String.
* Added new field `fundSupportAccountHierarchy` of type Boolean.
* Added new field `drawdownPriority` of type Number.

## UpdateDiscountInvoiceItem

* Added a new field `accountsReceivableAccountingCode` to the UpdateDiscountInvoiceItem model.

## UpdateInvoiceItem

* Added new field `accountsReceivableAccountingCode` to the UpdateInvoiceItem model.

## UpdateProductRatePlanChargeRequest

* Added new import for CommitmentLevel.
* Added new import for RolloverEndDateType.
* Added new import for RolloverPeriodType.
* Added new import for VpAlignment.
* Added new import for VpProrationOption.
* Added new field `CommitmentLevel` to UpdateProductRatePlanChargeRequest.
* Added new field `DrawdownPriority` to UpdateProductRatePlanChargeRequest.
* Added new field `VpAlignment` to UpdateProductRatePlanChargeRequest.
* Added new field `VpProrationOption` to UpdateProductRatePlanChargeRequest.
* Added new field `SpecificValidityPeriodLength` to UpdateProductRatePlanChargeRequest.
* Added new field `RolloverPeriodType` to UpdateProductRatePlanChargeRequest.
* Added new field `RolloverFundPriority` to UpdateProductRatePlanChargeRequest.
* Added new field `RolloverEndDateType` to UpdateProductRatePlanChargeRequest.
* Added new field `FundSupportAccountHierarchy` to UpdateProductRatePlanChargeRequest.

## UpsertCommitmentInput

* Added functionality to add new commitment schedules using `action: create`.
* Prepayment definition and charges are created automatically for prepaid commitments.
* Added functionality to update existing schedules using `action: update` (requires `id`).

## UpsertCommitmentScheduleInput

* Added new import for CustomAmountConfig.
* Added new field `customAmount` of type module:model/CustomAmountConfig.
* Added new field `clearCustomAmount` of type Boolean.

## UpsertCreateCommitmentInputAllOfSchedules

* The `amount` field is now marked as always required.
* Added a new import for CustomAmountConfig.
* Introduced a new field `customAmount` of type CustomAmountConfig in the UpsertCreateCommitmentInputAllOfSchedules class.
* Added validation for the new `customAmount` field in the `constructFromObject` method.
* Added validation for the `customAmount` field in the `validateJSON` method.
* Introduced a new field `customAmount` of type CustomAmountConfig in the CommitmentScheduleInput interface.

## UpsertCreateCommitmentScheduleInput

* The `amount` field is now marked as Always required.
* Added a new import for CustomAmountConfig.
* Added a new field `customAmount` of type CustomAmountConfig to the UpsertCreateCommitmentScheduleInput class.
* Added validation for the new `customAmount` field in the `constructFromObject` and `validateJSON` methods.

## UpsertUpdateCommitmentInput

* Added functionality to add new commitment schedules using `action: create`.
* Prepayment definition and charges are created automatically for prepaid commitments.
* Added functionality to update existing schedules using `action: update` which requires `id`.

## UpsertUpdateCommitmentScheduleInput

* Added new import for CustomAmountConfig.
* Added new import for PeriodTypeEnum.
* Added new field `periodType` of type PeriodTypeEnum.
* Added new field `specificPeriodLength` of type Number.
* Added new field `startDate` of type String.
* Added new field `endDate` of type String.
* Added new field `customAmount` of type CustomAmountConfig.
* Added new field `clearCustomAmount` of type Boolean.

## ValidityPeriodType

* New enum value `SPECIFIC_DAYS` added.
* New enum value `SPECIFIC_WEEKS` added.
* New enum value `SPECIFIC_MONTHS` added.
