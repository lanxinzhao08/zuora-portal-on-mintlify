---
excludeFromSearch: true
---


# Rate and concurrent request limits


This article describes the request rate limits, concurrent request limits, and other limits that Zuora enforces to maximize the stability of its service.

Note that these limits apply only to the API operations in the [REST API Reference](/api-references/api/overview/).

## Rate limits

Zuora employs a number of tenant-level rate limits against bursts of incoming traffic to maximize the stability of its service. Note that the rate limits are in addition to, and independent of, the [concurrent request limits](#Concurrent-request-limits).

### Rate-limiting and quotas

Zuora sets limits on the type and number of requests that a tenant can make per minute, per hour, and per day. All incoming requests are classified as follows:

- UI requests: all UI requests
- Authentication requests: all [OAuth authentication](/api-references/api/operation/createToken), [Establish a connection to Zuora REST API](/v1-api-reference/older-api/exports/object_postexport) and <a href="https://docs.zuora.com?resourceId=platform-soap-api-calls-login" target="_blank">SOAP login</a> requests
- API requests: all API requests other than authentication requests

Zuora enforces the following rate limits on each tenant.

| Request type | Quota per minute | Quota per hour | Quota per day  |
| --- | --- | --- | --- |
| UI | 20,000 | 1,200,000 | 14,400,000 |
| Authentication | 2,000 <br /> (100 for each IP address)  | 67,500 | 810,000 |
| API | 50,000 | 2,250,000 | 27,000,000 |

We recommend that you treat these limits as maximums and avoid generating unnecessary load. We may reduce limits to prevent abuse, or increase limits to enable high-traffic applications. To request an increased rate limit, contact <a href="https://support.zuora.com/" target="_blank">Zuora Global Support</a>.

### RateLimit response headers

Zuora counts your UI, authentication and API requests in the time window of one minute, one hour or one day.  The system communicates the quota that you are closest to exhausting in the HTTP response header in compliance with the <a href="https://tools.ietf.org/html/draft-polli-ratelimit-headers-02" target="_blank">IETF draft policy for rate limiting v2</a>.

| HTTP response header | Description |
| --- | --- |
| RateLimit-Limit | The request limit quota for the time window closest to exhaustion. |
| RateLimit-Remaining | The number of requests remaining in the time window closest to quota exhaustion. |
| RateLimit-Reset | The number of seconds until the quota resets for the time window closest to quota exhaustion. |

#### Use cases

Consider that you have a tenant with the default rate limits of API requests. Assume that your tenant's API request numbers for the current time windows at a certain point of time are as follows:

| Time window | API request rate limit | API request number for the current time window |
| --- | --- | --- |
| One minute | 50,000 | 49,500 |
| One hour | 2,250,000 | 2,249,600 |
| One day | 27,000,000 | 25,900,000 |

At this time point, you are closest to exhausting the hourly limit of API requests. If you make an API request, the response headers convey the hourly rate limit information of your tenant. You can see the rate limit information as in the following snippet of the response headers:

`HTTP/1.1 200 OK\
Content-Type: application/json\
RateLimit-Limit : 2250000, 50000;w=60, 2250000;w=3600, 27000000;w=86400\
RateLimit-Remaining : 399\
RateLimit-Reset : 1200`

#### Error messages

In the above use case, the headers inform that you can make, at most, 399 API requests further in the next 1,200 seconds (or 20 minutes). Suppose that you make 399 API requests within the next 10 minutes, and then if you make the 400th API request at the time point of 10 minutes before the current time window is closed, you will receive a response with HTTP status code 429 - Too Many Requests and a response body in JSON as follows:

`HTTP/1.1 429 - Too Many Requests\
Content-Type: application/json\
RateLimit-Limit : 2250000, 50000;w=60, 2250000;w=3600, 27000000;w=86400\
RateLimit-Remaining : 0\
RateLimit-Reset : 600`

```
{
  "reasons": [
    {
      "code": 70,
      "message": "API Rate limit exceeded for the <minute|hour|day>, retry after 600 seconds"
    }
  ]
}
```

## Concurrent request limits

Zuora employs a number of concurrent request limits to maximize the stability of its service. The concurrent request limits apply at the tenant level. However, if the <a href="https://docs.zuora.com?resourceId=platform-multi-entity-overview" target="_blank">Multi-entity</a> feature is enabled in your tenant, the concurrent **API** request limits apply at the entity level.

### Concurrent request limit types

Zuora applies different request limits to different types of requests. The request limits are:

- Total Request limit - 40 concurrent requests by default\
  Most UI and API requests are counted towards your Total Request limit.\
  Some requests require a large amount of processing or data transfer. The following additional concurrent limits apply to such requests:

    - Big Process Request limit - 20 concurrent requests by default. All big process requests are also counted towards your Total Request limit. The requests that require heavy database operations are big process requests. For example, requests for retrieving payments for a specified account. See the Big Process Requests table below for more information.

    - Big Data Request limit - 20 concurrent requests by default. All big data requests are also counted towards your Total Request limit.

- Custom Request limit - 200 concurrent requests by default. Custom requests are NOT counted towards your Total Request limit.

See the following table for the concurrent request limits that apply to different product areas.

<table>

<thead>

<tr>

<th scope="col" >Product Area</th>

<th scope="col" >Operations</th>

<th scope="col" >Total Request Limit</th>

<th scope="col" >Big Data Request Limit</th>

<th scope="col" >Big Process Request Limit</th>

<th scope="col" >Custom Request Limit</th>

</tr>
</thead>
<tbody>
<tr>

<td style="vertical-align:middle;">

Subscriptions

</td>

<td>

Subscribe and amend REST method calls:

* [Create a subscription](/v1-api-reference/api/subscriptions/post_subscription)

* [Update a subscription](/v1-api-reference/api/subscriptions/put_subscription)

* [Cancel a subscription](/v1-api-reference/api/subscriptions/put_cancelsubscription)

* [Renew a subscription](/v1-api-reference/api/subscriptions/put_renewsubscription)

* [Preview a subscription](/api-references/api/operation/POST_PreviewSubscription)

* [Create Account](/v1-api-reference/api/accounts/post_account)

Subscribe and amend SOAP calls, and the corresponding [Actions](/api-references/older-api/tag/Actions/) calls in the REST API Reference:

* [Amend](/api-references/older-api/operation/Action_POSTamend/)
* [Subscribe](/api-references/older-api/operation/Action_POSTsubscribe/)
* Subscribe with an existing account

</td>

<td> </td>

<td> </td>

<td> </td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

</tr>

<tr>

<td colspan="1" rowspan="2" style="vertical-align:middle;">Orders</td>

<td>

Orders:

*   Preview order
*   Create order

</td>

<td> </td>

<td> </td>

<td> </td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

</tr>

<tr>

<td>

Orders:

*   All requests except Preview order and Create order

</td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td style="vertical-align:middle;">Login</td>

<td>Login Requests:

*   Login API calls (REST and SOAP)
*   UI login requests

(No applicable concurrent limit for Login requests)

</td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td style="vertical-align:middle;">HPM</td>

<td>

Hosted Payment Method Pages:

*  <a href="https://docs.zuora.com?resourceId=payments-integrate-payment-pages-2.0" target="_blank">Payment Pages 2.0</a> (`PublicHostedPageLite.do`)

</td>

<td> </td>

<td> </td>

<td> </td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

</tr>

<tr>

<td colspan="1" rowspan="2" style="vertical-align:middle;">CPQ</td>

<td>Zuora 360 Order Builder (includes APEX wrappers for SOAP APIs)</td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>Zuora for Salesforce

*   360 Sync
*   Zuora Quotes

(No applicable concurrent limit)

</td>

<td> </td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td colspan="1" rowspan="2" style="vertical-align:middle;">AQuA</td>

<td>AQuA API requests

*   Post query
*   Get job results
*   Get results files

</td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>AQuA results files download</td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

<td> </td>

<td> </td>

</tr>

<tr>

<td colspan="1" rowspan="2" style="vertical-align:middle;">Usage</td>

<td>

Usage request

*   Post usage

</td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

<td> </td>

<td> </td>

</tr>

<tr>

<td>

Usage request

*   Check import status

</td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

<td> </td>

<td> </td>

<td> </td>

</tr>

<tr>

<td colspan="1" style="vertical-align:middle;">Data Source Export</td>

<td>Data source file download</td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

<td> </td>

<td> </td>

</tr>

<tr>

<td colspan="1" style="vertical-align:middle;">Invoicing</td>

<td>

Transactions

*   Get payments

</td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

<td> </td>

<td><img src="../images/icons/green_checkmark_icon.png" alt="green_checkmark" /></td>

<td> </td>

</tr>

</tbody>

</table>

#### Big process requests

<a href="https://docs.zuora.com?resourceId=platform-soap-api-calls-overview" target="_blank">SOAP API calls</a> on some objects are handled as Big Process Requests. See the following table for details. The corresponding [Actions](/v1-api-reference/api/actions/) are also handled as big process requests.

| SOAP API Calls | Objects |
| --- | --- |
| Create | invoice |
| Generate | invoice |
| QueryMore | Account <br/>InvoiceItem <br/>PaymentTransactionLog<br/>RatePlan<br/>RatePlanCharge<br/>RatePlanChargeTier<br/>Subscription|
| Query | Account<br/>Invoice<br/>InvoicePayment<br/>Payment<br/>PaymentTransactionLog<br/>RatePlan<br/>RatePlanCharge<br/>Subscription<br/>Usage<br/>ProcessedUsage|


#### Errors when reaching concurrent request limits

You will encounter the following error codes, error messages, or HTTP status codes:

| Request Type | Error Code | Error Message | HTTP Status Code - Response Header |
| --- | --- | --- | --- |
| User Interface | N/A | "The total number of concurrent requests has exceeded the limit allowed by the system. Please resubmit your request later." | N/A |
| REST API | `50000070` | "The total number of concurrent requests has exceeded the limit allowed by the system. Please resubmit your request later." | HTTP Status:429 \ Response Header:  `"Retry-After:120" |
| SOAP API, version 51.0 and later | `<fns:FaultCode> REQUEST_EXCEEDED_LIMIT</fns:FaultCode>`|`<fns:FaultMessage>The total number of concurrent requests has exceeded the limit allowed by the system. Please resubmit your request later.</fns:FaultMessage>`| HTTP Status:429 <br/> Response Header:`"Retry-After:120"` |
| SOAP API, versions prior to 51.0 | `<fns:FaultCode>UNKNOWN_ERROR </fns:FaultCode>`| `<fns:FaultMessage>The total number of concurrent requests has exceeded the limit allowed by the system. Please resubmit your request later.</fns:FaultMessage>` | HTTP Status:429 <br/> Response Header:`"Retry-After:120"`|
| File Download API | N/A | "The total number of concurrent requests has exceeded the limit allowed by the system. Please resubmit your request later." | HTTP Status:429 <br/> Response Header:`"Retry-After:120"`|

We recommend that you retry sending the request after 120 seconds. Test your integration in [Zuora Sandbox](https://apisandbox.zuora.com/) and make sure you do not hit the concurrent request limits. Contact <a href="https://support.zuora.com/" target="_blank">Zuora Global Support</a> if you require additional assistance.


## Other Limitations

### Limitations on HTML Templates

The <a href="https://docs.zuora.com?resourceId=billing-configure-html-templates-for-billing-documents" target="_blank">HTML Templates</a> feature has the following limitations in concurrent request limits:

- **A maximum of 1.5 million records can be processed in total to generate an invoice, a credit memo, or a debit memo.**

  Assume that you want to display a subscription summary table for an account. The account has 25,000 subscriptions, with 20 rate plan charges per subscription. Therefore, an invoice with a total of 500,000 invoice items might be generated for the account. To display a table that summarizes charges by subscription, it needs to sum up charge amount by charge type and sum up tax amount from invoice items, and the invoice items need to be grouped by subscription number. During the process, Zuora needs to process 25,000 subscriptions, 500,000 invoice items, 500,000 subscription charges, and 1 account with 2 contacts. In other words, a total of 1,025,000 (1.025 million) records need to be processed, under the total number limit of 1.5 million.

- **A maximum of 1 million records can be processed for each object type.**

  Assume that an account has 20,000 subscriptions, with 40 rate plan charges per subscription. Therefore, an invoice with a total of 800,000 invoice items might be generated for the account. To display a table that summarizes charges by subscription, it needs to sum up the charge amount by subscription number, it doesn't need to process rate plan charges. During the process, Zuora needs to process 20,000 subscriptions, 800,000 invoice items, and 1 account with 2 contacts. In other words, a total of 820,003 records need to be processed, under the total number limit of 1.5 million. The number of invoice items that need to be processed is 800,000, under the limit of 1 million.

- **A maximum sum of 25,000 invoice items, usage charges, and taxation items can be displayed in a detailed table or nested table on a PDF file generated from an HTML template.**

  If you have a large invoice to display, aggregate the items and ensure that the generated invoice PDF file contains no more than 25,000 lines. Otherwise, the PDF generation might fail.\
  Assume that you want to display a subscription summary table for an invoice with a large number of items. The account has 25,000 subscriptions, with 20 rate plan charges per subscription. Therefore, an invoice with a total of 500,000 invoice items might be generated for the account. You use an HTML template to display a table that summarizes charges by subscription. The table displays 25,000 rows and 7 columns. It might take 40 minutes to generate a PDF file for the invoice. The PDF file size is around 80 MB.

### Limitations on Word templates

The Word templates for billing documents have the following limitations in concurrent request limits:

### Limitations on Memo PDF files

Up to 20,000 line items are allowed in a single memo PDF file.

### Limitations on Invoice PDF files

- A maximum of 100,000 usage charges can be processed to generate a <a href="https://docs.zuora.com?resourceId=billing-example-create-invoice-item-nested-tables" target="_blank">usage nested table</a> on a PDF file.

- A maximum of 100,000 invoice items can be processed to generate an <a href="https://docs.zuora.com?resourceId=billing-example-create-invoice-item-nested-tables" target="_blank">invoice item nested table</a> on a PDF file. Consider this scenario, even if you only display summary columns in a nested table and there are only ten lines, the system cannot process more than 100,000 records to generate those ten lines.

- A maximum sum of 20,000 invoice items, usage charges, and taxation items can be displayed in a detailed table or nested table on a PDF file.

- A maximum of 2,000 records are allowed for each of the following tables to be generated into a PDF file (2,000 is the default limit; the maximum limit is 10,000. Contact <a href="https://support.zuora.com/" target="_blank">Zuora Global Support</a> if you want to raise the limit):

  - Transactions
  - Previous transactions
  - Subscriptions

When generating an invoice PDF file, you will receive an error message if the maximum number is exceeded.

#### Amendments per subscription

Zuora recommends that you create no more than 100 amendments on a subscription to ensure high performance of the subscriptions. The limit of amendments allowed on a subscription is 1000. However, if you create more than 100 amendments, the performance may be severely degraded, depending on the products and charges set up in your subscription.

The limit of subscriptions allowed on an account is by default 12,000. However, if you have overridden the value of this limit for your tenant, the value will remain per your configuration.

If the renewal term period of the latest version of the subscription is Day or Week, the limit of amendments allowed on a subscription is 100.

The 100 amendment limit does not apply to Orders. See <a href="https://docs.zuora.com?resourceId=billing-orders-performance-guidance" target="_blank">Orders Performance Guidance</a> for more information.

### Limitations on Orders


If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see <a href="https://docs.zuora.com?resourceId=billing-overview-orders-harmonization" target="_blank">What is Orders Harmonization</a> for more information.
If you want to enable Orders, submit a request at <a href="https://support.zuora.com/" target="_blank">Zuora Global Support</a>.

The limit of orders allowed on a subscription is 1000.

Zuora has the following limits on the Orders synchronous API to prevent performance degradation:

- Up to 50 subscriptions are allowed in a single [Create an order](/api-references/api/operation/POST_Order) or [Preview an order](/api-references/api/operation/POST_PreviewOrder) operation call.
- Up to 50 order actions are allowed in a single [Create an order](/api-references/api/operation/POST_Order) or [Preview an order](/api-references/api/operation/POST_PreviewOrder) operation call.
- Up to 50 order actions are allowed on a single subscription in a [Create an order](/api-references/api/operation/POST_Order) or [Preview an order](/api-references/api/operation/POST_PreviewOrder) operation call.

If you have an Order that exceeds any limits of the above, Zuora recommends you use the following asynchronous API operations:

- [Preview an order asynchronously](/api-references/api/operation/POST_PreviewOrderAsynchronously)
- [Create an order asynchronously](/api-references/api/operation/POST_CreateOrderAsynchronously)

Zuora has the following limits on the Orders asynchronous API operations to prevent performance degradation:

- Up to 300 subscriptions are allowed in a single [Create an order asynchronously](/api-references/api/operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](/api-references/api/operation/POST_PreviewOrderAsynchronously) operation call.
- Up to 300 order actions are allowed in a single [Create an order asynchronously](/api-references/api/operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](/api-references/api/operation/POST_PreviewOrderAsynchronously) operation call.
- Up to 300 order actions are allowed on a single subscription in a [Create an order asynchronously](/api-references/api/operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](/api-references/api/operation/POST_PreviewOrderAsynchronously) operation call.

If you have a need for a large order that exceeds any limits of the above, you can request a limit increase for the Orders asynchronous API by submitting a request at <a href="https://support.zuora.com/" target="_blank">Zuora Global Support</a>.

### Limitation on numbers

Zuora Billing uses decimal data type to hold numbers, meaning that numeric fields, like list price, are limited to the range from -9999999999999.99 to 9999999999999.99.
