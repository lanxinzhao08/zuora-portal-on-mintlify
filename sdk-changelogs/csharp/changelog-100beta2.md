---
title: "C# client library 1.0.0-beta.2 changelog"
sidebarTitle: "1.0.0-beta.2"
---
## DeploymentApi
* Added optional parameters to several methods: `zuoraVersion`, `zuoraOrgIds`, `acceptEncoding`, `contentEncoding`, `authorization`, and `zuoraTrackId`.

## ObjectQueriesApi
* Added optional parameter `zuoraOrgIds` to various query methods, both asynchronous and synchronous, allowing developers to specify organization IDs when querying different objects.
* Enhanced methods for querying payment methods, payment runs, payment schedules, payments, prepaid balances, and processed usages with the `zuoraOrgIds` parameter for more granular organization-specific queries.
* Updated methods for querying refunds, subscriptions, summary statements, taxation items, usages, and validity period summaries to include the `zuoraOrgIds` parameter, enabling developers to specify organization IDs in API requests.

## RatePlansApi
* Added optional parameter `getPrevRatePlanVersion` to GetRatePlan, GetRatePlanWithHttpInfo, GetRatePlanAsync, and GetRatePlanWithHttpInfoAsync methods to allow retrieval of previous rate plan versions.

## ApiException
* Added new properties to capture API response headers: ContentEncoding, RateLimitLimit, RateLimitRemaining, RateLimitReset, ZuoraTrackId, ZuoraRequestId, ConcurrencyLimitType, ConcurrencyLimitLimit, and ConcurrencyLimitRemaining.

## Configuration
* Added new server configurations for APAC Developer & Central Sandbox and APAC Production environments.

## ZuoraClient
* The constructor for ZuoraClient now requires a ZuoraClientConfig instance instead of individual parameters for clientId, clientSecret, and baseUrl.
* The method FetchBearerToken is now private, which may affect any external calls to this method.
* Introduced a Builder class for constructing instances of ZuoraClient using a builder pattern.
* Added methods for setting and getting various configuration parameters such as ClientId, ClientSecret, BaseUrl, ZuoraEnv, Timeout, Debugging, Headers, ZuoraVersion, ZuoraEntityIds, ZuoraOrgIds, and UserAgent.
* Added a method ToBuilder to create a new Builder initialized with the current instance`s values.

## AccountData
* Added a new property `OrganizationLabel` to the AccountData model, allowing developers to set and retrieve an organization label for an account.

## AccountSummaryBasicInfo
* Added a new property `CustomerServiceRepName` to the AccountSummaryBasicInfo class, allowing developers to set and retrieve the name of the customer service representative associated with an account.

## BillRun
* Added `IncludeSubscriptions` parameter to the BillRun constructor and class, allowing developers to specify whether to include subscriptions in the bill run.
* Added `IncludeOrderLineItems` parameter to the BillRun constructor and class, allowing developers to specify whether to include order line items in the bill run.

## BillRunResponse

* Added `includeSubscriptions` parameter to the BillRunResponse constructor and class, allowing developers to specify whether to include subscriptions in the bill run response.
* Added `includeOrderLineItems` parameter to the BillRunResponse constructor and class, enabling developers to specify whether to include order line items in the bill run response.

## CancelBillRunResponse

* Added `includeSubscriptions` parameter to the CancelBillRunResponse constructor.
* Added `includeOrderLineItems` parameter to the CancelBillRunResponse constructor.
* Introduced `IncludeSubscriptions` property to manage subscription inclusion in the response.
* Introduced `IncludeOrderLineItems` property to manage order line item inclusion in the response.

## CreateAccountRequest

* Added `purchaseOrderNumber` parameter to the CreateAccountRequest constructor.
* Added `customerServiceRepName` parameter to the CreateAccountRequest constructor.
* Introduced `PurchaseOrderNumber` property with DataMember attribute.
* Introduced `CustomerServiceRepName` property with DataMember attribute.

## CreateBillRunRequest

* Added `includeSubscriptions` parameter to the CreateBillRunRequest constructor with a default value of true.
* Added `includeOrderLineItems` parameter to the CreateBillRunRequest constructor with a default value of true.

## CustomObjectDefinitionSchema

* Changed the type of the `relationships` property from `List<Object>` to `List<CustomObjectDefinitionRelationship>`. This change may require developers to update the code to accommodate the new type.

## DataQueryJob

* Added a new property `SourceData` of type `SubmitDataQueryRequestSourceData?` to the DataQueryJob class.
* Introduced a new property `UseIndexJoin` of type `bool?` to the DataQueryJob class.

## DataQueryJobCancelled

* Added a new property `SourceData` of type `SubmitDataQueryRequestSourceData?` to the DataQueryJobCancelled class.
* Added a new property `UseIndexJoin` of type `bool?` to the DataQueryJobCancelled class.

## DataQueryJobCommon

* Added a new property `SourceData` of type `SubmitDataQueryRequestSourceData?` to the DataQueryJobCommon class.
* Added a new property `UseIndexJoin` of type `bool?` to the DataQueryJobCommon class.

## EInvoiceStatus

* Added new enum value `ApprovedByAuthority` with value 6.
* Added new enum value `Rejected` with value 7.

## ExpandedBillingRun

* Added `includeSubscriptions` parameter to the ExpandedBillingRun constructor.
* Added `includeOrderLineItems` parameter to the ExpandedBillingRun constructor.
* Introduced `IncludeSubscriptions` property to manage subscription inclusion in billing runs.
* Introduced `IncludeOrderLineItems` property to manage order line item inclusion in billing runs.

## ExpandedInvoiceItem

* Added `ProductRatePlanChargeId` as a new parameter in the constructor and as a new property.
* Added `OrderLineItemId` as a new parameter in the constructor and as a new property.

## ExpandedInvoiceSchedule

* Added a new property `InvoiceScheduleBookings` to the ExpandedInvoiceSchedule class, allowing developers to manage and access invoice schedule bookings.

## ExpandedProcessedUsage

* Changed the data type of BillingPeriodEndDate and BillingPeriodStartDate from DateOnly? to string. This may require developers to update their code to handle date strings instead of DateOnly objects.

## GenerateBillingDocumentRequest

* Added `includeSubscriptions` parameter to the GenerateBillingDocumentRequest constructor.
* Added `includeOrderLineItems` parameter to the GenerateBillingDocumentRequest constructor.

## GenerateBillingDocumentResponse

* Added new properties: ProcessId, RequestId, and Reasons to the GenerateBillingDocumentResponse class.

## OmniChannelAccountData

* Added a new optional parameter `organizationLabel` to the OmniChannelAccountData constructor.

## OrderActionRatePlanAmendment

* Added a new optional boolean property `IsCreatedByOrder` to the OrderActionRatePlanAmendment class, allowing developers to specify or retrieve whether the amendment was created by an order.

## OrderActionRatePlanOrderAction

* Added a new `sequence` parameter to the OrderActionRatePlanOrderAction constructor and class, allowing developers to specify the sequence of order actions.

## PostCustomObjectDefinitionsRequestDefinition

* The type of the `relationships` parameter in the constructor has changed from `List<Object>` to `List<CustomObjectDefinitionRelationship>`.
* The type of the `Relationships` property has changed from `List<Object>` to `List<CustomObjectDefinitionRelationship>`.

## PreviewOrderRatePlanOverride
* The `productRatePlanId` parameter is no longer required in the constructor of PreviewOrderRatePlanOverride. This change may require updates to code that assumes this parameter is mandatory.

## QueryAccountsResponse

* The constructor parameter order has been changed. `data` is now the first parameter, and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating QueryAccountsResponse.

## QueryBillingRunsResponse

* The constructor parameter order has changed. `data` is now the first parameter and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating QueryBillingRunsResponse.
* A new property `AdditionalProperties` has been added to the QueryBillingRunsResponse class, allowing for the inclusion of additional data not explicitly defined in the class.

## QueryContactsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating QueryContactsResponse.

## QueryCreditMemoApplicationsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second. This change requires developers to update their code to match the new parameter order when instantiating QueryCreditMemoApplicationsResponse.

## QueryCreditMemoItemsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second. This may require updates to code that initializes QueryCreditMemoItemsResponse objects.
* Added a new property `AdditionalProperties` to store extra data as a dictionary.

## QueryCreditMemosResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This may require updates to code instantiating this class.
* Added a new property `AdditionalProperties` to store extra data as a dictionary.

## QueryCustomObjectsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second. This may require updates to code instantiating QueryCustomObjectsResponse.
* Added a new property `AdditionalProperties` to store extra data as a dictionary.

## QueryDailyConsumptionSummarysResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating QueryDailyConsumptionSummarysResponse.
* Added a new property `AdditionalProperties` of type Dictionary&lt;string, object> to store additional data.

## QueryDebitMemoItemsResponse

* Changed the order of parameters in the constructor of QueryDebitMemoItemsResponse. The `data` parameter now comes before `nextPage`. This change requires developers to update their code to match the new parameter order.
* Added a new property `AdditionalProperties` to the QueryDebitMemoItemsResponse class, allowing for the inclusion of additional data not explicitly defined in the class.

## QueryDebitMemosResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating QueryDebitMemosResponse.

## QueryInvoiceItemsResponse

* The constructor parameter order has changed. `data` is now the first parameter and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating QueryInvoiceItemsResponse.
* Added a new property `AdditionalProperties` to store extra data as a dictionary of string and object.

## QueryInvoiceSchedulesResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second. This may require updates to code instantiating this class.
* Added a new property `AdditionalProperties` to store extra data as a dictionary.

## QueryInvoicesResponse

* Constructor parameter order changed: `data` is now the first parameter and `nextPage` is the second. This requires developers to update their code to match the new parameter order.

## QueryOrderActionsResponse
* The constructor parameter order has changed. `data` is now the first parameter and `nextPage` is the second. This may require updates to code instantiating QueryOrderActionsResponse objects.

## QueryOrderLineItemsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second. This change requires developers to update their code to match the new parameter order when instantiating QueryOrderLineItemsResponse.

## QueryOrderssResponse

* Changed the order of parameters in the constructor of QueryOrderssResponse. The `data` parameter now comes before `nextPage`. This change requires developers to update their code to match the new parameter order.

## QueryPaymentApplicationsResponse

* The constructor parameter order has been changed. `data` is now the first parameter and `nextPage` is the second parameter. This may require updates to code that instantiates QueryPaymentApplicationsResponse objects.

## QueryPaymentMethodSnapshotsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating the class.
* Added a new property `AdditionalProperties` to store additional data as a dictionary of string and object.

## QueryPaymentMethodsResponse

* The constructor parameter order has changed. `data` is now the first parameter and `nextPage` is the second. This may require updates to code instantiating QueryPaymentMethodsResponse.
* Added a new property `AdditionalProperties` to store extra data as a dictionary.

## QueryPaymentRunsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating QueryPaymentRunsResponse.

## QueryPaymentScheduleItemsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when initializing a QueryPaymentScheduleItemsResponse object.
* An AdditionalProperties dictionary has been added to the class, allowing for the storage of additional data not explicitly defined in the class properties.

## QueryPaymentSchedulesResponse

* Changed the order of parameters in the constructor of QueryPaymentSchedulesResponse. The `data` parameter now comes before `nextPage`. This change may require developers to update their code to match the new parameter order.

## QueryPaymentsResponse

* The constructor parameter order has changed. `data` is now the first parameter and `nextPage` is the second. This may require updates to code instantiating QueryPaymentsResponse objects.

## QueryPrepaidBalanceFundsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second. This may require developers to update their code to match the new parameter order.

## QueryPrepaidBalanceTransactionsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating the class.

## QueryPrepaidBalancesResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second. This change requires developers to update their code to match the new parameter order when instantiating QueryPrepaidBalancesResponse.
* Added a new property `AdditionalProperties` to store additional data as a dictionary of string and object.

## QueryProcessedUsagesResponse
* The constructor parameter order has changed. `data` is now the first parameter and `nextPage` is the second. This may require updates to code instantiating QueryProcessedUsagesResponse.

## QueryProductRatePlanChargeTiersResponse

* Changed the order of parameters in the constructor of QueryProductRatePlanChargeTiersResponse. The `data` parameter now comes before `nextPage`. This change may require developers to update their code to match the new parameter order.
* Added a new property `AdditionalProperties` to the QueryProductRatePlanChargeTiersResponse class, allowing for the inclusion of additional data not explicitly defined in the model.

## QueryProductRatePlanChargesResponse

* Changed the order of parameters in the constructor of QueryProductRatePlanChargesResponse. The `data` parameter now comes before `nextPage`. This change requires developers to update their code to match the new parameter order.

## QueryProductRatePlansResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating QueryProductRatePlansResponse.

## QueryProductsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating QueryProductsResponse.
* Added a new property `AdditionalProperties` to the QueryProductsResponse class, allowing for the inclusion of additional data not explicitly defined in the class.

## QueryRatePlanChargeTiersResponse

* The constructor parameter order has changed. `data` is now the first parameter and `nextPage` is the second parameter. This may require updates to code that initializes QueryRatePlanChargeTiersResponse objects.

## QueryRatePlanChargesResponse

* The constructor parameter order has changed. `data` is now the first parameter and `nextPage` is the second. This may require updates to code that initializes QueryRatePlanChargesResponse objects.

## QueryRatePlansResponse

* The constructor parameter order has changed. `data` is now the first parameter and `nextPage` is the second. This may require updates to code instantiating QueryRatePlansResponse objects.

## QueryRatingDetailsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This may require updates to code instantiating this class.
* Added a new property `AdditionalProperties` to store extra data as a dictionary.

## QueryRatingResultsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order.
* Added a new property `AdditionalProperties` to store additional data as a dictionary.

## QueryRefundApplicationItemsResponse
* The constructor parameter order has been changed. `data` is now the first parameter and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating QueryRefundApplicationItemsResponse.
* Added a new property `AdditionalProperties` to store additional data as a dictionary of string and object.

## QueryRefundApplicationsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when initializing a QueryRefundApplicationsResponse object.

## QueryRefundsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second. This may require updates to code that instantiates QueryRefundsResponse.

## QuerySubscriptionsResponse

* Changed the order of parameters in the constructor of QuerySubscriptionsResponse. `data` is now the first parameter and `nextPage` is the second. This may require updates to code that initializes this class.

## QuerySummaryStatementRunsResponse

* Changed the order of parameters in the constructor of QuerySummaryStatementRunsResponse. The `data` parameter now comes before `nextPage`. This change may require updates to existing code that instantiates this class.
* Added a new property `AdditionalProperties` to the QuerySummaryStatementRunsResponse class, allowing for the inclusion of additional data not explicitly defined in the class.

## QuerySummaryStatementsResponse

* Constructor parameter order changed: `data` is now the first parameter and `nextPage` is the second. This may require updates to code instantiating this class.
* Added `AdditionalProperties` dictionary to store extra properties.

## QueryTaxationItemsResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second. This may require updates to code instantiating QueryTaxationItemsResponse objects.
* Added a new property `AdditionalProperties` to store extra data as a dictionary.

## QueryUsagesResponse

* The constructor parameter order has changed. `data` is now the first parameter, and `nextPage` is the second. This may require updates to code that instantiates QueryUsagesResponse objects.
* Added a new property `AdditionalProperties` to store extra data as a dictionary of string and object.

## QueryValidityPeriodSummarysResponse

* The constructor parameter order has changed. `data` is now the first parameter and `nextPage` is the second parameter. This change requires developers to update their code to match the new parameter order when instantiating the class.
* An `AdditionalProperties` dictionary has been added to the class, allowing for the storage of extra properties not explicitly defined in the class.

## SettingSourceComponent

* Added new parameters to the SettingSourceComponent constructor: userRoles, taxation, billingDocuments, reporting, revenue, and mediation. These parameters allow developers to specify additional settings components.

## SubmitDataQueryRequest

* Added a new property `WarehouseSize` to the SubmitDataQueryRequest class, allowing developers to specify the size of the warehouse.

## SubmitDataQueryRequestSourceData

* Added a new enum value `WAREHOUSE` to the SubmitDataQueryRequestSourceData class, allowing developers to specify `WAREHOUSE` as a source data option.

## UpdateOrderActionChargeTriggerDate

* Added a new parameter `estimatedStartDate` to the constructor of UpdateOrderActionChargeTriggerDate.
* Introduced a new property `EstimatedStartDate` to the UpdateOrderActionChargeTriggerDate class.
