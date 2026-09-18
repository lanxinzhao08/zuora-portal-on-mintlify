---
title: "Java client library 3.4.0 changelog"
sidebarTitle: "3.4.0"
---
## ZuoraClient

* The constructor ZuoraClient(String clientId, String clientSecret, String zuoraBaseUrl) now uses ZuoraClientConfig for configuration, which may require updates to how instances are created.

* The internal handling of default headers and timeouts has been refactored to use ZuoraClientConfig, which may affect custom configurations.

* Introduced a Builder pattern for ZuoraClient, allowing for more flexible and readable client configuration.
* Added methods to configure various client settings such as timeouts, debugging, and headers through the Builder.

* Added a method to create a builder from an existing ZuoraClient instance, enabling easy modification of existing configurations.

## ObjectQueriesApi

* Added support for expanding `invoiceschedulebookings`, `invoiceschedulebookings.order`, and `invoiceschedulebookings.subscription` in the query methods for InvoiceSchedule.

## RatePlansApi

* Added a new optional parameter `getPrevRatePlanVersion` to the getRatePlan method and its related methods. This allows developers to specify if they want to retrieve the previous version ID of the rate plan.

## WorkflowsApi

* The API endpoint path has been changed from `/versions/{version_id}` to `/workflows/versions/{version_id}`.

## AccountData

* Added a new field `organizationLabel` to the AccountData class, allowing developers to set and retrieve an organization label for an account.

## AccountSummaryBasicInfo

* Added a new field `customerServiceRepName` to the AccountSummaryBasicInfo class.

## BillRun

* Added `includeSubscriptions` field to specify whether to bill subscriptions.
* Added `includeOrderLineItems` field to specify whether to bill order line items.

## BillRunResponse
* Added `includeSubscriptions` field to specify whether to bill subscriptions.
* Added `includeOrderLineItems` field to specify whether to bill order line items.

## CancelBillRunResponse

* Added `includeSubscriptions` field to specify whether to bill subscriptions.
* Added `includeOrderLineItems` field to specify whether to bill order line items.

## CreateAccountRequest

* Added `purchaseOrderNumber` field to CreateAccountRequest.
* Added `customerServiceRepName` field to CreateAccountRequest.

## CreateBillRunRequest

* Added `includeSubscriptions` field to specify whether to bill subscriptions.
* Added `includeOrderLineItems` field to specify whether to bill order line items.

## CustomObjectDefinitionSchema

* Changed the type of `relationships` from `List<Object>` to `List<CustomObjectDefinitionRelationship>`, which may require developers to update the code to handle the new type.
* Added validation for each element in the `relationships` array to ensure they conform to the CustomObjectDefinitionRelationship structure.

## DataQueryJob

* Added a new field `sourceData` of type SubmitDataQueryRequestSourceData to the DataQueryJob class.
* Introduced a new field `useIndexJoin` of type Boolean to the DataQueryJob class.


## DataQueryJobCancelled

* Added new field `sourceData` of type SubmitDataQueryRequestSourceData.
* Added new field `useIndexJoin` of type Boolean.


## DataQueryJobCommon

* Added a new field `sourceData` of type SubmitDataQueryRequestSourceData.
* Added a new field `useIndexJoin` of type Boolean to indicate whether to use Index Join.


## EInvoiceStatus

* Added new status `APPROVEDBYAUTHORITY` to represent invoices approved by an authority.
* Added new status `REJECTED` to represent invoices that have been rejected.


## ExpandedBillingRun

* Added `includeSubscriptions` field to allow inclusion of subscriptions in billing runs.
* Added `includeOrderLineItems` field to allow inclusion of order line items in billing runs.


## ExpandedInvoiceItem

* Added new field `productRatePlanChargeId` with associated methods.
* Added new field `orderLineItemId` with associated methods.


## ExpandedInvoiceSchedule

* Added a new field `invoiceScheduleBookings` to the `ExpandedInvoiceSchedule` class, allowing developers to manage a list of `ExpandedInvoiceScheduleBooking` objects.


## ExpandedProcessedUsage

* Changed the data type of `billingPeriodEndDate` and `billingPeriodStartDate` from LocalDate to String. This requires developers to update their code to handle date strings instead of LocalDate objects.


## GenerateBillingDocumentRequest

* Added `includeSubscriptions` field to specify whether to bill subscriptions.
* Added `includeOrderLineItems` field to specify whether to bill order line items.

## GenerateBillingDocumentResponse

* Added new fields: `processId`, `requestId`, and `reasons` to the GenerateBillingDocumentResponse class.


## OmniChannelAccountData

* Added a new field `organizationLabel` to the OmniChannelAccountData class, allowing developers to set and retrieve an organization label for an account.

## OrderActionRatePlanAmendment

* Added a new field `isCreatedByOrder` to indicate whether the amendment was created by an order.


## OrderActionRatePlanOrderAction

* Added a new field `sequence` to the OrderActionRatePlanOrderAction class, allowing developers to specify the sequence of order actions processed in the order.


## PostCustomObjectDefinitionsRequestDefinition

* Changed the type of `relationships` from `List<Object>` to `List<CustomObjectDefinitionRelationship>`, which may require developers to update their code to use the new type.
* Added validation for each element in the `relationships` array to ensure they conform to the CustomObjectDefinitionRelationship structure.


## PreviewOrderRatePlanOverride

* The `productRatePlanId` field is no longer marked as a required field. This change may affect validation logic that relies on this field being present.

## SettingSourceComponent

* Added new fields: `userRoles`, `taxation`, `billingDocuments`, `reporting`, `revenue`, and `mediation` to the SettingSourceComponent class.
* Introduced methods to manipulate the new fields: `userRoles`, `taxation`, `billingDocuments`, `reporting`, `revenue`, and `mediation`, including methods to add items to these lists.


## SubmitDataQueryRequest

* Added a new field `warehouseSize` to the SubmitDataQueryRequest class, allowing users to specify the warehouse size for data queries.


## SubmitDataQueryRequestSourceData

* Added a new enum value `WAREHOUSE` to SubmitDataQueryRequestSourceData, allowing developers to specify `WAREHOUSE` as a source data option.


## UpdateOrderActionChargeTriggerDate

* Added a new field `estimatedStartDate` to represent the estimated start date of the pending charge.
