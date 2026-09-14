---
seo:
  title: REST API Requests - Zuora
  description: Additional notes to REST API requests
  keywords: 'api requests, testing requests, timeout limit'
---


# REST API requests

## Object IDs

As a general rule, when asked to supply a key for an object (for example, accountKey), you can provide either the actual 32-digit ID or the number of the object.

## HTTP request body

Most parameters and data accompanying your requests will be contained in the body of the HTTP request.


### Data type

([Actions](/v1-api-reference/api/actions/) and CRUD operations only) We recommend that you do not specify the decimal values with quotation marks, commas, and spaces. Use characters of `+-0-9.eE`, for example, `5`, `1.9`, `-8.469`, and `7.7e2`. Also, Zuora does not convert currencies for decimal values.


## Testing a request

Use a third party client, such as <a href="https://curl.haxx.se" target="_blank">curl</a>, <a href="https://www.getpostman.com" target="_blank">Postman</a>, or <a href="https://advancedrestclient.com" target="_blank">Advanced REST Client</a>, to test the Zuora REST API.

You can test the Zuora REST API from the Zuora Sandbox or Production tenants. If connecting to Production, bear in mind that you are working with your live production data, not sample data or test data.

## Testing with credit cards

Sooner or later, it will probably be necessary to test some transactions that involve credit cards. For suggestions on how to handle this, see <a href="https://docs.zuora.com?resourceId=payments-going-live-with-your-payment-gateways" target="_blank">Going Live With Your Payment Gateway</a>.


## Timeout limit

If a request does not complete within 120 seconds, the request times out and Zuora returns a Gateway Timeout error.
