---
markdown:
  toc:
    hide: false
---

# Python client library 3.5.0 changelog


## bulk\_update\_order\_line\_item
* Added a new optional field `communicationProfileId` to the `BulkUpdateOrderLineItem` model. This field allows updating the communication profile associated with the order line item when the sales OLI is in the `Executing`/`Booked`/`SentToBilling` state.

## create\_invoice\_request
* Added the `communicationProfileId` field to the CreateInvoiceRequest model, allowing developers to associate a communication profile with an invoice.

## create\_order\_create\_subscription
* Added a new optional field `communicationProfileId` to the CreateOrderCreateSubscription model, allowing the association of a communication profile with the subscription. This feature is available only if the Flexible Billing Attributes feature is enabled.

## create\_order\_order\_line\_item
* Added a new optional field `communicationProfileId` to the CreateOrderOrderLineItem model.

## create\_order\_terms\_and\_conditions
* Added the `communicationProfileId` field to associate a communication profile with the subscription.
* Added the `clearingExistingCommunicationProfile` field to clear the existing communication profile at the subscription level.
* Introduced `invoiceGroupNumber` field to specify the invoice group number associated with the subscription.
* Added the `clearingExistingInvoiceGroupNumber` field to clear the existing invoice group number at the subscription level.

## credit\_memo

* Added a new optional field `communicationProfileId` to the CreditMemo model, allowing association of a communication profile with the credit memo.

## credit\_memo\_response

* Added the `communicationProfileId` field to the CreditMemoResponse model, allowing developers to associate a communication profile with a credit memo.

## debit\_memo

* Added the `communicationProfileId` field to the DebitMemo model, allowing association of a communication profile with a debit memo.

## debit\_memo\_response

* Added the `communicationProfileId` field to the DebitMemoResponse model, allowing developers to access the ID of the communication profile associated with the debit memo.

## expanded\_credit\_memo
* Added the `communicationProfileId` as an optional field in the ExpandedCreditMemo model.

## expanded\_debit\_memo
* Added the `payment_term` field to the ExpandedDebitMemo model.
* Added the `communication_profile_id` field to the ExpandedDebitMemo model.

## expanded\_invoice
* Added the `payment\_term` field to the ExpandedInvoice model.
* Added the `communication_profile_id` field to the ExpandedInvoice model.

## expanded\_order\_action
* Added the `communicationProfileId` as a new optional field.
* Added the `clearing_existing_communication_profile` as a new optional field.

## expanded\_product
* Added the `state` attribute to ExpandedProduct model.
* Added the `version` attribute to ExpandedProduct model.
* Added the `versionOrdinal` attribute to ExpandedProduct model.

## expanded\_product\_rate\_plan
* Added the `state` field to ExpandedProductRatePlan model.
* Added the `version` field to ExpandedProductRatePlan model.
* Added the `versionOrdinal` field to ExpandedProductRatePlan model.

## get\_order\_line\_item
* Added the `communicationProfileId` field to the GetOrderLineItem model, allowing developers to specify or retrieve the communication profile ID associated with an order line item.

## get\_product\_rate\_plan\_response
* Added the `product_rate_plan_number` field to the GetProductRatePlanResponse model, allowing access to the natural key of the product rate plan.

## get\_subscription\_response
* Added the `communicationProfileId` field to GetSubscriptionResponse model, allowing access to the communication profile ID associated with the subscription. This feature is available only if the Flexible Billing Attributes feature is enabled.

## invoice
* Added the `communicationProfileId` field to the Invoice model, allowing developers to associate a communication profile with an invoice.

## invoice\_response
* Added the `communicationProfileId` field to the InvoiceResponse model, allowing developers to access the ID of the communication profile associated with the invoice.

## operation\_job\_type

* Added a new operation job type `REVERSE` to the OperationJobType enum.

## order\_action\_create\_subscription

* Added the `communication_profile_id` field to associate a communication profile with the subscription, available with the Flexible Billing Attributes feature enabled.
* Added the `currency` field to specify the currency of the subscription.

## order\_action\_owner\_transfer

* Added the `communicationProfileId` field to associate a communication profile with the subscription. This feature is available only if the Flexible Billing Attributes feature is enabled.
* Added the `clearingExistingCommunicationProfile` field to clear the existing communication profile at the subscription level. This field is mutually exclusive with the `communicationProfileId` field.

## order\_action\_renew\_subscription
* Added the `communicationProfileId` field to associate a communication profile with the subscription. This field is available only if the Flexible Billing Attributes feature is enabled.
* Added the `clearingExistingCommunicationProfile` field to clear the existing communication profile at the subscription level. This field is mutually exclusive with the `communicationProfileId` field.

## order\_action\_terms\_and\_conditions

* Added the `communicationProfileId` field to associate a communication profile with the subscription. This feature is available only if the Flexible Billing Attributes feature is enabled.
* Added the `clearingExistingCommunicationProfile` field to clear the existing communication profile at the subscription level. This field is mutually exclusive with the `communicationProfileId` field.

## order\_line\_item

* Added a new optional field `communicationProfileId` to the OrderLineItem model.

## preview\_existing\_subscription\_discount\_details

* Added the `discountChargeName` field to the PreviewExistingSubscriptionDiscountDetails model.

## preview\_order\_create\_subscription

* Added the `communicationProfileId` field to associate a communication profile with the subscription, available with the Flexible Billing Attributes feature.
* Added the `currency` field to specify the currency code for the subscription, available with the Multiple Currencies feature.
* Added the `invoiceGroupNumber` field to associate an invoice group with the subscription, available with the Flexible Billing Attributes feature.

## product\_rate\_plan\_with\_external\_id

* Added the `product_rate_plan_number` as a new optional field with alias `productRatePlanNumber`.

## reverse\_invoice\_response

* Added the `id` field to store the ID of the invoice.
* Added the `job_id` field to store the ID of the operation job.
* Added the `job_status` field to store the status of the operation job.

## update\_order\_line\_item

* Added a new optional field `communicationProfileId` to the `UpdateOrderLineItem` model. This field allows updating the communication profile associated with the order line item when the sales OLI is in the `Executing`/`Booked`/`SentToBilling` state.

## update\_order\_line\_item\_request

* Added a new optional field `communicationProfileId` to the UpdateOrderLineItemRequest model, allowing developers to associate a communication profile with an order line item when it is in the `Executing`, `Booked`, or `SentToBilling` state.
