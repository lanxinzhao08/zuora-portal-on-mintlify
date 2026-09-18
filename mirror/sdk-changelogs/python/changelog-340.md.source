---
markdown:
  toc:
    hide: false
---

# Python client library 3.4.0 changelog

## \_\_init\_\_

* Added CustomObjectDefinitionRelationship model.
* Added CustomObjectDefinitionRelationshipRecordConstraints model.
* Added CustomObjectDefinitionRelationshipRecordConstraintsCreate model.
* Added CustomObjectDefinitionSchemaRelationshipCardinality model.
* Added ExpandedInvoiceScheduleBooking model.
* Added SubmitDataQueryRequestWarehouseSize model.


## object\_queries\_api

* Added support for expanding `invoiceschedulebookings`, `invoiceschedulebookings.order`, and `invoiceschedulebookings.subscription` in the query\_invoice\_schedule\_by\_key and query\_invoice\_schedules methods.


## rate\_plans\_api

* Added a new optional parameter `get_prev_rate_plan_version` of type `StrictBool` to retrieve the previous version ID of the rate plan.

## workflows\_api

* The resource path for deleting a version has been changed from `/versions/{version_id}` to `/workflows/versions/{version_id}`. This change requires developers to update their code to use the new resource path when calling the DELETE method.


## models/\_\_init\_\_

* Added CustomObjectDefinitionRelationship model.
* Added CustomObjectDefinitionRelationshipRecordConstraints model.
* Added CustomObjectDefinitionRelationshipRecordConstraintsCreate model.
* Added CustomObjectDefinitionSchemaRelationshipCardinality model.
* Added ExpandedInvoiceScheduleBooking model.
* Added SubmitDataQueryRequestWarehouseSize model.

## account\_data

* Added a new optional field `organizationLabel` to the AccountData model.

## account\_summary\_basic\_info
* Added `customerServiceRepName` field to the AccountSummaryBasicInfo model, allowing developers to access or set the customer service representative`s name associated with an account.

## bill\_run

* Added `include_subscriptions` field to specify whether to bill subscriptions.
* Added `include_order_line_items` field to specify whether to bill order line items.


## bill\_run\_response
* Added `include_subscriptions` field to specify whether to bill subscriptions.
* Added `include_order_line_items` field to specify whether to bill order line items.


## cancel\_bill\_run\_response
* Added `include_subscriptions` field to specify whether to bill subscriptions.
* Added `include_order_line_items` field to specify whether to bill order line items.


## create\_account\_request

* Added `purchaseOrderNumber` field to store the purchase order number provided by the customer.
* Added `customerServiceRepName` field to store the name of the account’s customer service representative, with a maximum length of 50 characters.


## create\_bill\_run\_request

* Added `include_subscriptions` field to specify whether to bill subscriptions.
* Added `include_order_line_items` field to specify whether to bill order line items.


## custom\_object\_definition\_schema

* The `relationships` field type has been changed from `List[Dict[str, Any]]` to `List[CustomObjectDefinitionRelationship]`. This change requires developers to update the code to use the new `CustomObjectDefinitionRelationship` model for relationships.

* Added custom serialization for the `relationships` field by implementing `to_dict()` for each item in the list, allowing for more structured and consistent data handling.


## data\_query\_job

* Added `source_data` field of type SubmitDataQueryRequestSourceData to the DataQueryJob model.
* Added `use_index_join` field of type StrictBool to the DataQueryJob model, indicating whether to use Index Join.


## data\_query\_job\_cancelled

* Added `source_data` field of type SubmitDataQueryRequestSourceData to the DataQueryJobCancelled model.
* Added `use_index_join` field of type StrictBool to the DataQueryJobCancelled model.


## data\_query\_job\_common

* Added `source_data` field of type `SubmitDataQueryRequestSourceData` to the DataQueryJobCommon model.
* Added `use_index_join` field of type `StrictBool` to the DataQueryJobCommon model.


## e\_invoice\_status
* Added new status `ApprovedByAuthority` to the EInvoiceStatus enum.
* Added new status `Rejected` to the EInvoiceStatus enum.


## expanded\_billing\_run

* Added `include_subscriptions` field to the ExpandedBillingRun model, allowing developers to specify whether subscriptions should be included.
* Added `include_order_line_items` field to the ExpandedBillingRun model, enabling the inclusion of order line items.


## expanded\_invoice\_item

* Added `productRatePlanChargeId` as a new optional field in the ExpandedInvoiceItem model.
* Added `orderLineItemId` as a new optional field in the ExpandedInvoiceItem model.


## expanded\_invoice\_schedule

* Added a new field `invoice_schedule_bookings` to the `ExpandedInvoiceSchedule` model, which is a list of `ExpandedInvoiceScheduleBooking` objects. This allows developers to include and manage invoice schedule bookings within the invoice schedule.


## expanded\_processed\_usage

* Changed the type of `billing_period_end_date` and `billing_period_start_date` from `date` to `StrictStr`. This may require developers to update their code to handle these fields as strings instead of date objects.


## generate\_billing\_document\_request

* Added `includeSubscriptions` field to specify whether to bill subscriptions.
* Added `includeOrderLineItems` field to specify whether to bill order line items.


## generate\_billing\_document\_response

* Added `process_id` and `request_id` fields to track the process and request identifiers.
* Introduced `reasons` field to capture a list of `FailedReason` objects, providing more detailed error information.
* Updated the `to_dict` method to include the `reasons` field, allowing for detailed serialization of failure reasons.


## omni\_channel\_account\_data

* Added a new optional field `organizationLabel` to the OmniChannelAccountData model.


## order\_action\_rate\_plan\_amendment


* Added a new field `isCreatedByOrder` of type StrictBool to the OrderActionRatePlanAmendment model, indicating whether the amendment was created by an order.

## order\_action\_rate\_plan\_order\_action

* Added a new optional field `sequence` of type StrictInt to the OrderActionRatePlanOrderAction model, allowing developers to specify the sequence of order actions processed in the order.


## post\_custom\_object\_definitions\_request\_definition


* Introduced `CustomObjectDefinitionRelationship` for defining relationships in `PostCustomObjectDefinitionsRequestDefinition`, replacing the previous generic dictionary approach.


## preview\_order\_rate\_plan\_override

* The `product_rate_plan_id` field is now optional. Previously, it was a required field. Developers may need to update their code to handle cases where this field is not provided.

## setting\_source\_component

* Added new optional fields: `user_roles`, `taxation`, `billing_documents`, `reporting`, `revenue`, and `mediation` to the SettingSourceComponent model.

## submit\_data\_query\_request


* Added a new optional field `warehouseSize` to the SubmitDataQueryRequest model, allowing developers to specify the warehouse size for data queries.


## submit\_data\_query\_request\_source\_data

* Added a new enum value `WAREHOUSE` to the SubmitDataQueryRequestSourceData class.

## update\_order\_action\_charge\_trigger\_date

* Added `estimatedStartDate` field to the UpdateOrderActionChargeTriggerDate model, allowing developers to specify the estimated start date of a pending charge.
