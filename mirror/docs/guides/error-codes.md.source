---
seo:
  title: Error Codes
  description: Explains how Zuora handles errors.
  keywords: error handling, error codes
markdown:
  toc:
    hide: true
redirects:
  /quickstart-api/tutorial/error-handling/: {}
  /api-references/quickstart-api/tag/Errors/: {}
  /quickstart-api/tutorial/payment-auth-errors/: {}
---

# Error codes

{% tabsComponent %}
  {% tabComponent title="v1 API" %}


If a request to Zuora API with an endpoint starting with `/v1`
(except [Actions](/v1-api-reference/api/actions) and
CRUD operations) fails, the response will contain an eight-digit error code
with a corresponding error message to indicate the details of the error.


The following code snippet is a sample error response that contains an error
code and message pair:

```json
{
  "success": false,
  "processId": "CBCFED6580B4E076",
  "reasons":  [
    {
    "code": 53100320,
    "message": "'termType' value should be one of: TERMED, EVERGREEN"
    }
  ]
}
```


The `success` field indicates whether the API request has succeeded. The
`processId` field is a Zuora internal ID that you can provide to Zuora
Global Support for troubleshooting purposes.


The `reasons` field contains the actual error code and message pair. The
error code begins with `5` or `6` means that you encountered a certain issue
that is specific to a REST API resource in Zuora Billing, Payments, and
Central Platform. For example, `53100320` indicates that an invalid value is
specified for the `termType` field of the `subscription` object.


The error code beginning with `9` usually indicates that an
authentication-related issue occurred, and it can also indicate other
unexpected errors depending on different cases. For example, `90000011`
indicates that an invalid credential is provided in the request header.


When troubleshooting the error, you can divide the error code into two
components: REST API resource code and error category code. See the
following Zuora error code sample:


<img src="/images/ZuoraErrorCode.jpeg" alt="Zuora Sample Error Code"/> <br />



**Note:** Zuora determines resource codes based on the request payload.
Therefore, if GET and DELETE requests that do not contain payloads fail, you
will get `500000` as the resource code, which indicates an unknown object
and an unknown field.

The error category code of these requests is valid and follows the rules
described in the [Error Category Codes](#Error-Category-Codes)
section.

In such case, you can refer to the returned error message to troubleshoot.


## REST API Resource Codes


The 6-digit resource code indicates the REST API resource, typically a field
of a Zuora object, on which the issue occurs. In the preceding example,
`531003` refers to the `termType` field of the `subscription` object.


The value range for all REST API resource codes is from `500000` to
`679999`. See <a
href="https://docs.zuora.com/en/zuora-platform/integration/apis/rest-api/resource-codes-for-billing-and-payments-rest-api"
target="_blank">Resource Codes</a> in Zuora Product Documentation for a full list
of resource codes.


## Error Category Codes


The 2-digit error category code identifies the type of error, for example,
resource not found or missing required field.


The following table describes all error categories and the corresponding
resolution:


| Code    | Error category           | Description    | Resolution    |
|:-------- |:-------- |:-------- |:-------- |
| 10      | Permission or access denied | The request cannot be processed because a certain tenant or user permission is missing. | Check the missing tenant or user permission in the response message and contact <a href="https://support.zuora.com" target="_blank">Zuora Global Support</a> for enablement. |
| 11      | Authentication failed       | Authentication fails due to invalid API authentication credentials. | Ensure that a valid API credential is specified. |
| 20      | Invalid format or value     | The request cannot be processed due to an invalid field format or value. | Check the invalid field in the error message, and ensure that the format and value of all fields you passed in are valid. |
| 21      | Unknown field in request    | The request cannot be processed because an unknown field exists in the request body. | Check the unknown field name in the response message, and ensure that you do not include any unknown field in the request body. |
| 22      | Missing required field      | The request cannot be processed because a required field in the request body is missing. | Check the missing field name in the response message, and ensure that you include all required fields in the request body. |
| 23      | Missing required parameter  | The request cannot be processed because a required query parameter is missing. | Check the missing parameter name in the response message, and ensure that you include the parameter in the query. |
| 27      | Invalid query parameter     | The request cannot be processed because of an invalid query parameter.   | Check the query parameter in the response message, and ensure that you have provided the correct parameter name and value.  |
| 30      | Rule restriction            | The request cannot be processed due to the violation of a Zuora business rule. | Check the response message and ensure that the API request meets the specified business rules. |
| 40      | Not found                   | The specified resource cannot be found. | Check the response message and ensure that the specified resource exists in your Zuora tenant. |
| 45      | Unsupported request         | The requested endpoint does not support the specified HTTP method. | Check your request and ensure that the endpoint and method matches. |
| 50      | Locking contention          | This request cannot be processed because the objects this request is trying to modify are being modified by another API request, UI operation, or batch job process. | <p>Resubmit the request first to have another try.</p> <p>If this error still occurs, contact <a href="https://support.zuora.com" target="_blank">Zuora Global Support</a> with the returned `Zuora-Request-Id` value in the response header for assistance.</p> |
| 60      | Internal error              | The server encounters an internal error. | Contact <a href="https://support.zuora.com" target="_blank">Zuora Global Support</a> with the returned `Zuora-Request-Id` value in the response header for assistance. |
| 61      | Temporary error             | A temporary error occurs during request processing, for example, a database communication error. | <p>Resubmit the request first to have another try.</p> <p>If this error still occurs, contact <a href="https://support.zuora.com" target="_blank">Zuora Global Support</a> with the returned `Zuora-Request-Id` value in the response header for assistance. </p> |
| 70      | Request exceeded limit      | The total number of concurrent requests exceeds the limit allowed by the system. | <p>Resubmit the request after the number of seconds specified by the `Retry-After` value in the response header.</p> <p>Check [Concurrent request limits](/rest-api/general-concepts/rate-concurrency-limits/) for details about Zuora’s concurrent request limit policy.</p> |
| 90      | Malformed request           | The request cannot be processed due to JSON syntax errors. | Check the syntax error in the JSON request body and ensure that the request is in the correct JSON format. |
| 99      | Integration error           | The server encounters an error when communicating with an external system, for example, payment gateway, tax engine provider. | Check the response message and take action accordingly. |


  {% /tabComponent %}
  {% tabComponent title="Quickstart API" %}

Zuora uses conventional HTTP response codes to indicate the success or
failure of an API request. In general: Codes in the 2xx range indicate
success. Codes in the 4xx range indicate an error that failed given the
information provided (e.g., a required parameter was omitted, a payment
attempt failed, etc.). Codes in the 5xx range indicate an error with
Zuora's servers.


Some 4xx errors that could be handled programmatically include an error
code that briefly explains the error reported.

An error response contains the following attributes:


|Attribute|Type|Description|
| ---- | ---- | -------- |
|type|enum|Type of the error. See the [Error types](#error-types) section below for details.|
|code|string|An error code indicating the reported error. See the [Error codes](#error-codes) section below for details.|
|message|string|A human-readable message providing more details about the error.|
|parameter|string|If the error is parameter-specific, it shows the parameter related to the error. For example, you can use this attribute to display a message near the correct form field.|


If the error is parameter-specific, the parameter related to the error.
For example, you can use this to display a message near the correct form
field.


## HTTP status codes

The following table lists the HTTP status codes you might receiving when working with the Quickstart API:

|HTTP status code|Description|
| ---- | -------- |
|200 - OK|Everything worked as expected.|
|201 - Created|Everything worked as expected and a resource was created.|
|202 - Accepted|Your request has been accepted, but processing has not been completed and may not have been started.|
|400 - Bad Request|The request contains invalid parameters.|
|401 - Unauthorized|The request requires user authentication. Resend the request with valid authentication credentials for the resource.|
|403 - Forbidden|Access is forbidden to users with your authentication credentials.|
|404 - Not Found|The server cannot find the requested resource.|
|408 - Request Timeout|The server has decided to close this connection rather than continue waiting.|
|409 - Conflict|The request conflicts with the current state of the target resource.|
|429 - Too Many Requests|Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.|
|500, 501, 502, 503, 504 - Server Errors|Something went wrong on Zuora’s end.|

## Error types

The following table lists values of the `type` field in the error response, and their corresponding description:

|Error Type|Description|
| ---- | -------- |
|`bad_request`|The request contains invalid parameters.|
|`unauthorized`|The request requires user authentication. Resend the request with valid authentication credentials for the resource.|
|`forbidden`|Access is forbidden to users with your authentication credentials.|
|`method_not_allowed`|The server does not recognize the request method and is incapable of supporting it.|
|`conflict`|The request conflicts with the current state of the target resource.|
|`not_found`|The server cannot find the requested resource.|
|`locked`|This request cannot be processed because the objects this request is trying to modify are being modified by another process.|
|`too_many_requests`|Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.|
|`internal_server_error`|Something went wrong on Zuora’s end.|
|`conflict`|The request cannot be processed due to the violation of a Zuora business rule.|
|`request_failed`|The request failed because the payment gateway declines the transaction or a payment gateway error.|
|`request_timeout`|The client connection has timed out.|
|`gateway_timeout`|Th host connection has timed out.|
|`payment_gateway_timeout`|The payment gateway connection has timed out.|
|`payment_gateway_unavailable`|The payment gateway server is busy.|
|`payment_gateway_error`|General transaction error.|

## Error codes

Some errors include an error code - a short string with a brief explanation.

Below is a list of possible error codes, along with additional information about how to resolve them.

|Error code|Description|
| ---- | -------- |
|`invalid_parameter`|One or more of the parameters requires a value of a specific type, but the values provided were a different type. Make sure that only supported values are provided for each attribute. Refer to our [Quickstart API Reference](/other-api/quickstart-api/) to look up the type of data each attribute supports.|
|`invalid_parameter_integer` | One or more of the parameters requires an integer, but the values provided were a different type. Make sure that only support values are provided for each attribute. Refer to our [Quickstart API Reference](/other-api/quickstart-api/) to look up the type of data each attribute supports.|
|`invalid_parameter_number` | One or more of the parameters requires a number, but the values provided were a different type. Make sure that only support values are provided for each attribute. Refer to our [Quickstart API Reference](/other-api/quickstart-api/) to look up the type of data each attribute supports.|
|`invalid_parameter_boolean` | One or more of the parameters requires a boolean, but the values provided were a different type. Make sure that only support values are provided for each attribute. Refer to our [Quickstart API Reference](/other-api/quickstart-api/) to look up the type of data each attribute supports.|
|`invalid_parameter_string` | One or more of the parameters requires a string, but the values provided were a different type. Make sure that only support values are provided for each attribute. Refer to our [Quickstart API Reference](/other-api/quickstart-api/) to look up the type of data each attribute supports.|
|`unknown_parameter`|The request contains one or more unexpected parameters. Remove these parameters and try again.|
|`missing_parameter`|One or more required values are missing. Check our [Quickstart API Reference](/other-api/quickstart-api/) to see which values are required to create or modify the specified resource.|
|`parameters_exclusive`|Two or more mutually exclusive parameters were provided. Check our [Quickstart API Reference](/other-api/quickstart-api/) or the returned error message to see which values are permitted when creating or modifying the specified resource.|
|`invalid_request`|The request could not be understood by the server due to malformed syntax. Check our [Quickstart API Reference](/other-api/quickstart-api/) to see how to create or modify the specified resource and modify your request accordingly.|
|`not_found`|The requested resource does not exist.|
|`card_error`|An error occurred while processing the card. Try again later or with a different payment method.|
|`authorization_token_expired`|The authorization token provided has expired. Obtain a new authorization token and try again.|
|`resource_not_found`|The resource identifier provided is not found.<br />**Note**: This error code applies to a resource referenced in a POST, PUT, or PATCH request. For example, when creating a payment method for an account by specifying either an `account_number` or `account_id` that does not exist. It will result in an error where the type is `bad_request` instead of `not_found`.|
|`in_use`|The resource cannot be deleted because it is being used.|
|`invalid_value`| The values of one or more parameters you specified are invalid. Check the parameter values you specified, update them to valid values, then try again.|
|`delete_not_allowed`|The specified order cannot be deleted. This error is specific to the "Delete an order" operation.|

## Payment authorization errors

The following table summarizes the payment authorization error responses returned from the gateway, and the corresponding Zuora error information when you are making requests to the [Create a payment authorization](/other-api/quickstart-api/payment-methods/authorizepaymentmethod) operation.


| Authorization error | HTTP status code | Error type | Error code | Parameter to check |
| ------------------------------- | ------------------------- | ---------- | ---------- | ------------------ |
| 1: The request is declined.                                                                  | 402                       | request\_failed              |    N/A  |     N/A    |
| 7: The field format is not correct.                                                          | 400                       | bad\_request                 |     N/A     |  N/A   |
| 10: Client connection has timed out.                                                         | 408                       | request\_timeout            |   N/A       |   N/A   |
| 11: Host connection has timed out.                                                           | 504                       | gateway\_timeout           |   N/A       |   N/A    |
| 12: Processor connection has timed out.                                                      | 504                       | payment\_gateway\_timeout     |    N/A    |  N/A     |
| 13: Gateway server is busy.                                                                  | 503                       | payment\_gateway\_unavailable |    N/A  |     N/A    |
| 20: The card type is not supported.                                                          | 409                       | conflict                    | unknown\_card\_type            | `brand`              |
| 21: The merchant account information is invalid.                                             | 400                   | bad\_request       | incorrect\_merchant\_account\_information   |    N/A  |
| 22: A generic error occurred on the processor.                                               | 402                       | request\_failed              | generic\_processor\_error    |    N/A  |
| 40: The card type has not been set up yet.                                                   | 409                       | conflict                    | card\_type\_not\_enabled                  | `brand`               |
| 41: The limit for a single transaction is exceeded.                                          | 402                       | request\_failed              | transaction\_limit\_exceeded             | `amount`              |
| 42: Address checking failed.                                                                 | 402                       | request\_failed              | incorrect\_address                      | `address`            |
| 43: Card security code checking failed.                                                      | 402                       | request\_failed              | incorrect\_security\_code                | `security_code`      |
| 44: Failed due to the gateway security setting.                                              | 402                       | request\_failed              | gateway\_security\_setting               |                     |
| 45: Fraud protection is declined.                                                            | 402                       | request\_failed              | card\_declined                          | `card`               |
| 46: Address checking or card security code checking failed (for Authorize.net gateway only). | 402                       | request\_failed              | incorrect\_card\_details                 | `card`              |
| 47: The maximum amount is exceeded (for Authorize.net gateway only).                         | 402                       | request\_failed              | card\_limit\_exceeded   |    N/A       |
| 48: The IP address is blocked by the gateway (for Authorize.net gateway only).               | 402                       | request\_failed              | ip\_address\_blocked                     | `ip_address`         |
| 49: Card security code checking failed (for Authorize.net gateway only).                     | 402                       | request\_failed              | incorrect\_security\_code                | `security_code`       |
| 60: User authentication failed.                                                              | 402                       | request\_failed              | user\_authentication\_failed      |   N/A  |
| 61: The currency code is invalid.                                                            | 400                       | bad\_request                 | invalid\_currency                       | `currency`           |
| 62: The transaction ID is invalid.                                                           | 400                       | bad\_request                 | incorrect\_transaction\_id               | `authorization_id`   |
| 63: The credit card number is invalid.                                                       | 400                       | bad\_request                 | incorrect\_card\_number                  | `card_number`         |
| 64: The card expiration date is invalid.                                                     | 400                       | bad\_request                 | incorrect\_expiration\_date              | `card`               |
| 65: The transaction is duplicated.                                                           | 409                       | conflict                    | duplicate\_transaction\_id               | `authorization_id`    |
| 66: Credit transaction error.                                                                | 402                       | request\_failed              | credit\_transaction\_failed    |   N/A |
| 67: Void transaction error.                                                                  | 402                       | request\_failed              | void\_transaction\_failed      |   N/A |
| 90: A valid amount is required.                                                              | 400                       | bad\_request                 | invalid\_amount     | `amount`        |
| 91: The BA code is invalid.                                                                  | 400                       | bad\_request     |    N/A     |        N/A  |
| 92: The account number is invalid.                                                           | 400                       | bad\_request    | invalid\_account\_number   | `bank_account_number` |
| 93: The ACH transaction is not accepted by the merchant.                                     | 402                       | request\_failed              | ach\_transaction\_not\_accepted   |   N/A    |
| 94: An error occurred for the ACH transaction.                                               | 402                       | request\_failed              | ach\_transaction\_failed      |     N/A   |
| 95: The version parameter is invalid.                                                        | 400                       | bad\_request                 | invalid\_version     |      N/A  |
| 96: The transaction type is invalid.                                                         | 400                       | bad\_request                 | invalid\_transaction\_type       |     N/A   |
| 97: The transaction method is invalid.                                                       | 400                       | bad\_request                 | invalid\_transaction\_method   |    N/A  |
| 98: The bank account type is invalid.                                                        | 400                       | bad\_request      | invalid\_bank\_account\_type  | `bank_account_type`   |
| 99: The authorization code is invalid.                                                       | 500                       | payment\_gateway\_error       |    N/A     |         N/A           |
| 200: General transaction error.                                                              | 500                       | payment\_gateway\_error       |    N/A     |         N/A           |
| 500: The transaction is queued for submission.                                               | 200                       | OK                          |          N/A       |         N/A     |
| 999: Unknown error.          | 500          | internal\_server\_error       |   N/A     | N/A|


## Handling errors

If you use the Zuora SDK, use the following template to handle errors:
{% tabs %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  try {

    // Use Zuora's client library to make requests

  } catch (RateLimitException e) {
    // Too many requests made to the API too quickly
  } catch (InvalidRequestException e) {
    // Invalid parameters were supplied to Zuora's API
  } catch (AuthenticationException e) {
    // Authentication with Zuora's API failed (maybe you changed API keys recently)
  } catch (APIConnectionException e) {
    // Network communication with Zuora failed
  } catch (ZuoraException e) {
    // Display a very generic error to the user, and maybe send yourself an email
  } catch (Exception e) {
    // Something else happened, completely unrelated to Zuora
  }
  ```
  {% /tab %}
  {% tab label="Node" %}
  ```javascript {% title="Node" %}
  (async () => {
    try {

    // Use Zuora's client library to make requests

    }
    catch (error) {
      console.log(error);
    }
  })();
  ```
  {% /tab %}
{% /tabs %}

  {% /tabComponent %}

{% /tabsComponent %}

