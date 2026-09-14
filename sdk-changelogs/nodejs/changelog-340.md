---
markdown:
  toc:
    hide: false
---

# Node.js client library 3.4.0 changelog


## ObjectQueriesApi

* Added support for expanding `invoiceschedulebookings`, `invoiceschedulebookings.order`, and `invoiceschedulebookings.subscription` to the Query InvoiceSchedule and Query InvoiceSchedules methods.

## RatePlansApi

* Added a new optional parameter `get_prev_rate_plan_version` to retrieve the previous version ID of the subscription rate plan.

## WorkflowsApi

* The endpoint for deleting a workflow version has changed from `/versions/{version_id}` to `/workflows/versions/{version_id}`.

## index

* Added CustomObjectDefinitionRelationship model.
* Added CustomObjectDefinitionRelationshipRecordConstraints model.
* Added CustomObjectDefinitionRelationshipRecordConstraintsCreate model.
* Added CustomObjectDefinitionSchemaRelationshipCardinality model.
* Added ExpandedInvoiceScheduleBooking model.
* Added SubmitDataQueryRequestWarehouseSize model.

## AccountData

* Added a new field `organizationLabel` to the AccountData model, allowing developers to include an organization label as a string.

## AccountSummaryBasicInfo

* Added `customerServiceRepName` field to the AccountSummaryBasicInfo model, allowing developers to access or set the name of the customer service representative associated with the account.

## BillRun

* Added `includeSubscriptions` property to specify whether to bill subscriptions.
* Added `includeOrderLineItems` property to specify whether to bill order line items.

## BillRunResponse

* Added `includeSubscriptions` property to specify whether to bill subscriptions.
* Added `includeOrderLineItems` property to specify whether to bill order line items.

## CancelBillRunResponse

* Added `includeSubscriptions` property to specify whether to bill subscriptions.
* Added `includeOrderLineItems` property to specify whether to bill order line items.

## CreateAccountRequest

* Added `purchaseOrderNumber` field to the CreateAccountRequest model, allowing developers to specify a purchase order number for services or products purchased.
* Added `customerServiceRepName` field to the CreateAccountRequest model, allowing developers to specify the name of the account`s customer service representative.

## CreateBillRunRequest
* Added `includeSubscriptions` property to specify whether to bill subscriptions, defaulting to true.
* Added `includeOrderLineItems` property to specify whether to bill order line items, defaulting to true.

## CustomObjectDefinitionSchema

* Changed the item type of the `relationships` field from Object to CustomObjectDefinitionRelationship, which may require developers to update the code to handle the new type.

* Added validation for `relationships` field to ensure each item in the array is validated using CustomObjectDefinitionRelationship.validateJSON.


## DataQueryJob

* Added `sourceData` property to DataQueryJob, allowing developers to specify source data for queries.
* Introduced `useIndexJoin` property to DataQueryJob, enabling the use of Index Join for queries.


## DataQueryJobCancelled

* Added `sourceData` property to DataQueryJobCancelled model, allowing developers to include source data in their queries.
* Introduced `useIndexJoin` property to DataQueryJobCancelled model, enabling the use of Index Join for queries.


## DataQueryJobCommon

* Added `sourceData` property to the DataQueryJobCommon model, allowing developers to include source data in their data query requests.
* Introduced `useIndexJoin` property to the DataQueryJobCommon model, enabling developers to specify whether to use Index Join in their queries.


## EInvoiceStatus

* Added new status `ApprovedByAuthority` to represent invoices approved by an authority.
* Added new status `Rejected` to represent invoices that have been rejected.

## ExpandedBillingRun

* Added `includeSubscriptions` property to specify whether subscriptions should be included.
* Added `includeOrderLineItems` property to specify whether order line items should be included.


## ExpandedInvoiceItem

* Added `productRatePlanChargeId` as a new field in the ExpandedInvoiceItem model.
* Added `orderLineItemId` as a new field in the ExpandedInvoiceItem model.


## ExpandedInvoiceSchedule

* Added support for `invoiceScheduleBookings` in the ExpandedInvoiceSchedule model, allowing developers to handle bookings associated with invoice schedules.


## ExpandedProcessedUsage
* Added validation for `billingPeriodEndDate` and `billingPeriodStartDate` fields to ensure they are primitive string types.


## GenerateBillingDocumentRequest
* Added `includeSubscriptions` property to specify whether to bill subscriptions.
* Added `includeOrderLineItems` property to specify whether to bill order line items.


## GenerateBillingDocumentResponse
* Integrated CommonResponse interface into GenerateBillingDocumentResponse, adding fields: processId, requestId, reasons, and success.
* Added validation for new fields: processId, requestId, and reasons to ensure correct data types.


## OmniChannelAccountData

* Added a new property `organizationLabel` to the OmniChannelAccountData model, allowing developers to include an organization label as a string.

## OrderActionRatePlanAmendment

* Added a new property `isCreatedByOrder` to indicate whether the amendment was created by an order.

## OrderActionRatePlanOrderAction
* Added a new property `sequence` to the OrderActionRatePlanOrderAction model, which represents the sequence of the order actions processed in the order.

## PostCustomObjectDefinitionsRequestDefinition

* Added import and usage of CustomObjectDefinitionRelationship for handling relationships.
* Implemented validation for the `relationships` field to ensure each item is validated using CustomObjectDefinitionRelationship.validateJSON.

## PreviewOrderRatePlanOverride
* The constructor no longer requires the `product_rate_plan_id` parameter.
* The `productRatePlanId` is no longer a required property in the JSON data validation.

## SettingSourceComponent

* Added support for `userRoles`, `taxation`, `billingDocuments`, `reporting`, `revenue`, and `mediation` fields, each as an array of SettingComponentKeyValue objects. These fields are now validated and converted from JSON data.

## SubmitDataQueryRequest

* Added a new property `warehouseSize` to the SubmitDataQueryRequest model, allowing developers to specify the size of the warehouse for data queries.

## SubmitDataQueryRequestSourceData

* Added a new enum value `WAREHOUSE` to the SubmitDataQueryRequestSourceData class.

## UpdateOrderActionChargeTriggerDate

* Added `estimatedStartDate` property to specify the estimated start date of the pending charge in YYYY-MM-DD format.
