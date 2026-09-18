---
title: "Choose the right query option"
sidebarTitle: "Query options"
---
For historical reasons, there are multiple ways to extract your data from Zuora Billing. Choosing the correct one for your use case can be tricky. Here is our decision table to guide you to the right choice every time.

This tutorial assumes you are using either the [Zuora Billing v1 API](/v1-api-reference/introduction) or the [v3 or higher SDK client libraries](/docs/guides/libraries).

The choices for Zuora Revenue and Zephr are much simpler and do not require a guide.


## Query decision tree

<a href="/static/images/Query-method-decision-tree.png" target="_blank"><img src="/static/images/Query-method-decision-tree.png" alt="Which query option should I use?" width="760px" /></a>


**Documentation in the decision tree**

* [Object Query Tutorial](/docs/guides/expand-filter-fields-sort)
* [Data Sources](https://docs.zuora.com?resourceId=platform-introduction-to-data-sources)
* [Data Query (SQL)](https://docs.zuora.com?resourceId=platform-data-query-overview)
* [Zuora UI Reporting Feature](https://docs.zuora.com?resourceId=platform-reporting-overview)
* [AQUA](https://docs.zuora.com?resourceId=platform-aqua-api-introduction)

## Query option summary table
|Categories| Object Query |Data Source Export&lt;br>(Export ZOQL)|Data Query(SQL)|AQUA|
| :---     |    :----   |  :--- |  :--- |  :--- |
|Type|Real-Time|Batch|Batch|Batch|
|Synchronous Responses?|Yes|No|No|No|
|Output Formats|JSON, CSV|CSV|JSON, CSV, DSV, TSV|CSV|
|Main features|Synchronous access to all fields from core object as well as related objects. Expand, filter and sort options. Ideal for &lt;100 records|Asychronous retrieval of data from multiple related objects. Easy UI reporting. Export ZOQL language for API use. Great for operational reporting involving thousands of records.|Custom SQL query statements, full SQL Select implementation, 200+ functions. Data Query UI feature for iterative SQL development prior to embedding in code. Must know SQL and our data model. Excellent for data transformations upon extract.|Asynchronous periodic bulk data extract option intended for custom data warehouse integration. We now have a collection of 12+ data warehouse connectors. To save time and money use an OOTB connector if available.|
|Sample Use Cases|Retrieve Account data for this Invoice. Retrieve charges for this Billing Account. Retrieve charge data for the Invoice Items on this Invoice.|Operational reporting, see Data Sources and Reporting options in UI. Good for month end reporting and reconciliation. Reports can also be scheduled and distributed automatically without code but Export ZOQL created for API use.|Functional overlap with Data Sources only our SQL has many more functions and richer grouping and sorting than Export ZOQL. But you need to make sure the SQL joins are correct, so TEST.|Periodic bulk data extracts for your data warehouse.|
|Documentation|[Object Query API](/v1-api-reference/api/object-queries/queryaccounts), [Object Query examples](/docs/guides/expand-filter-fields-sort)|[Data Sources](https://docs.zuora.com?resourceId=platform-data-sources-and-exports), [API](/v1-api-reference/older-api/exports/object_postexport)|[Data Query Overview](https://docs.zuora.com?resourceId=platform-data-query-overview), [Data Query API](/v1-api-reference/api/data-queries/get_dataqueryjobs)|[AQuA Introduction](https://docs.zuora.com?resourceId=platform-aqua-api-introduction), [AQuA API](/v1-api-reference/api/aggregate-queries/post_batchqueryjob)|


## Why do we have so many query choices?

Historical reasons, based on your feedback we've iterated and improved data query and extraction from Zuora over the past 20 years. Of the options listed, Data Source Exports are the oldest, then came AQUA, then Data Query (SQL), then came our OOTB Connectors and most recently Object Query. And before Data Sources we had "Action Query".

With the release of Object Query, Action Query is no longer recommended for any use case, but we do see a lot of Action Query in our customer's implementations, more on that below.

**For real time queries we now recommend Object Query, supported in both our v1 API and the v3 and above Client Libraries (SDKs).**

For batch queries you should use either Data Sources or Data Query based on yur skills and use case. **Data Sources** have a very easy to use UI and Reporting feature, along with full API support with our proprietary query language, **Export ZOQL**, a small subset of SQL. But if you are comfortable with SQL and our data model, Data Query is probably the better choice. If your SQL skills are rusty or absent, Data Sources will work. AQUA should only be considered if no [out-of-the-box data warehouse connector](https://docs.zuora.com?resourceId=platform-zuora-connectors-for-data-warehouses) exists for your data warehouse, or if there is no third party connector. AQUA was built on top of Data Sources and uses the same Export ZOQL query language.

Many long standing customers have used [Action Query](/v1-api-reference/api/actions/action_postquery), also known as "ZOQL" queries, extensively since they are also synchronous. But they don't support querying related tables. You must submit multiple queries to view details of a billing account as an example. Note that [Action Query ZOQL](https://docs.zuora.com?resourceId=platform-zoql) is not the same as [Export ZOQL](https://docs.zuora.com?resourceId=platform-export-zoql) used by Data Sources. Action Query ZOQL calls will continue to work. There are no deprecation plans, but consider refactoring your code to utilize Object Query. Your new code will be shorter and easier to maintain along with performance improvements that may be significant since you can replace multiple queries with a single query.


## Reference

Supplemental material for your consideration:
* Zuora University modules: [Zuora's Object Model](https://university.zuora.com/series/courses-by-topic/zuoras-object-model), [Standard Zuora Architecture](https://university.zuora.com/series/courses-by-topic/standard-zuora-architecture). While you need to register, all of these self paced modules are free for you to consume. Check to see if your organization purchased a Zuora University seat, which provides access to live, instructor led, training and the option to become officially certified.
* [Object Query API documentation](/v1-api-reference/api/object-queries/queryaccounts)
* [Extensive Object Query tutorial with code samples](/docs/guides/expand-filter-fields-sort)
* [Check account details](/docs/get-started/tutorials/check-account-details)
* [View all the invoices on an account](/docs/get-started/tutorials/view-all-invoices)
* [Data Sources](https://docs.zuora.com?resourceId=platform-introduction-to-data-sources)
* [Data Query (SQL)](https://docs.zuora.com?resourceId=platform-data-query-overview)
* [Zuora UI Reporting feature](https://docs.zuora.com?resourceId=platform-reporting-overview)
* [AQUA](https://docs.zuora.com?resourceId=platform-aqua-api-introduction)
