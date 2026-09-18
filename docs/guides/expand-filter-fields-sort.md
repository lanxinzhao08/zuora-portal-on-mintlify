---
title: "Object Query - Expand, filter, fields, and sort"
description: "Describes query parameters for using the Zuora API."
---
<Tabs>
<Tab title="v1 API">

The <a href="/v1-api-reference/api/object-queries/queryaccounts">Object Query</a> API operations allow you to query objects in your Zuora Billing tenant in an efficient, consistent, and flexible manne. Object Queries calls are synchronous. You can:

- Dictate which object fields are returned for each record using `fields[]`
- Retrieve fields from related records using `expand[]`
- `filter[]` the records returned using logical operators
- Sort the returned records using `sort[]`

For detailed information about the filterable, expandable, and sortable fields on each object, refer to the Query Parameters section for each API operation in the [API reference](/v1-api-reference/api/object-queries/queryaccounts).

Unlike Data Query, not every field can be filtered on or sorted on, and the list of related objects you can pull into your query is predefined. For detailed information about each object, check the Query Parameters section for each API operation in the <a href="/v1-api-reference/api/object-queries/queryaccounts">API reference</a>.

![Object Query explained](/docs/images/api-guides-images/object_query_explained.png)



## Using fields[] query parameter

The `fields[]` query parameter allows you to specify a subset of the fields on the named object that will be returned.
A Billing Account object, for example, has at least 50 fields. The exact number depends on what options you have enabled and what custom fields you have added.
When you query for multiple accounts, you might not want to see all 50+ fields for each account.
Using the `fields[]` query parameter is how you get just the fields you care about.

Suppose that you want to query all accounts that use the Canadian Dollar as their currency, and you only want to see the name, number, and balance for each account:

```bash cURL
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?account.fields[]=id,name,accountNumber,balance&filter[]=currency.EQ:CAD' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

If the call succeeds, you would see results similar to this:

```json
{
  "data": [
    {
      "accountNumber": "A00024791",
      "balance": 0.0,
      "id": "8ad081dd904da165019051b001a02a3b",
      "name": "Oh Canada"
    },
    {
      "accountNumber": "A00024278",
      "balance": 0.0,
      "id": "e41259a16cb1f3aa5f4fd705bf3b05c4",
      "name": "Toronto Storage Co"
    }
  ]
}
```

Note that the order you list the fields in `fields[]` is not reflected in the output. So your custom code needs to get values by name instead of by location.

If you need to return a single record and you already know the ID or number of the object such as Account, you can use the companion [Retrieve an account](/v1-api-reference/api/object-queries/queryaccountbykey) operation to get that specific record.


## Using expand[] query parameter

Using the `expand[]` query parameter allows you to expand the collection of fields you can obtain beyond the named base object to the fields of the associated objects as well. We use the base object, Account, throughout this guide.

The associated objects available for expanding varies by object but is documented in each API operation in the API Reference.

Taking [List Accounts](/v1-api-reference/api/object-queries/queryaccounts) as an example, in the Query Paremeters section, you can find all expandable objects in the `expand[]` parameter for Account like `billto`, `soldto`, `defaultpaymentmethod`, `subscriptions`, and so on.

Note that the last two, `rateplans` and `rateplancharges` are not directly associated to the Account object, but to other objects such as Subscriptions that do belong to an Account.


For example, we use the same basic Canadian Dollar filter, but we change the `fields[]` values and ask for the bill-to contact's first name and last name to be returned, and nothing else.


```bash cURL
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?account.fields[]=name,accountNumber,balance&expand[]=billto&billto.fields[]=firstname,lastname&filter[]=currency.EQ:CAD' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

The returned response is similar to this:

```json
{
  "data": [
    {
      "accountNumber": "A00000133",
      "balance": 2170.0,
      "name": "PercentageDiscountOverrideOrder",
      "billTo": {
          "firstName": "Amy",
          "lastName": "Lawrence"
      }
    },
    {
      "accountNumber": "A00000132",
      "balance": 3250.0,
      "name": "PercentageDiscountOverrideOrder",
      "billTo": {
          "firstName": "Amy",
          "lastName": "Lawrence"
      }
    },
    {...}
  ]
}
```


## Using filter[] query parameter

The `filter[]` query parameter allows you to filter the returned records by specifying spcific conditions. In our examples so far we've used a simple example: `filter[]=currency.EQ:CAD`.

Multiple filters in a single call are combined using AND logic, and Object Query does not support an OR operator. You can only filter on fields listed in the <code>filter[]</code> parameter section of each API operation in the [API reference](/v1-api-reference/api/object-queries/queryaccounts).


The following table lists all supported operators that you can use to construct a `filter[]` query, and an example for each operator.

| Operator | Description                                      | Example             |
| -------- | ------------------------------------------------ | ------------------- |
| EQ       | Exact match operator                             | currency.EQ:EUR     |
| NE       | Returns objects that do not match the clause     | currency.NE:CAN     |
| LT       | Less than operator                               | quantity.LT:200     |
| GT       | Greater than operator                            | quantity.GT:200     |
| SW       | Starts with operator                             | name.SW:Acc |
| IN       | Specifies a list of values that will be returned | name.IN:[Amy,Bella] |
| GE       | Greater than or equal with operator              | quantity.GE:200     |
| LE       | Less than or equal with operator                 | quantity.LE:200     |


All search fields support exact and case-insensitive matching with `EQ`, `NE`, and `IN`.

<br />
String type fields like email and name support case-insensitive matching with `SW`.

<br />
Numeric fields like amount and Date type fields like `updateddate` support numeric comparators like `LT`, `LE`, `GT` and `GE`.

<p></p>

For the example in the previous section, we've kept the 'CAD' filter on `currency`. Now we add another filter on `updateddate`, which is an auto-generated date timestamp of when the account was last updated.
The `updateddate.LT:2024-01-01T00:00:00Z` filter will exclude Accounts updated after the end of 2023.
Our two filters combined will only return accounts with a currency of CAD that haven't been updated recently.

```bash cURL
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?&filter[]=currency.EQ:CAD&filter[]=updateddate.LT:2024-01-01T00:00:00Z' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

If no accounts meet this criteria, you would get a '200 OK' response with an empty `data` array.

```json
{
  "data": []
}
```

To filter date fields, such as transaction dates like invoice date or payment date, you have to use the `YYYY-MM-DD` date format.
Do not use quotes around a date.

The following example shows how to include accounts with the CAD currency that were last invoiced before April 22nd, 2024:

```bash cURL
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?&filter[]=currency.EQ:CAD&filter[]=lastinvoicedate.LT:2024-04-22' \
-H "Authorization: Bearer $ztoken" \
-H "Content-Type: application/json"
```

The following example shows you how a space can be embedded into the filter condition. The name of the account we want to query is "Oh Canada":

```bash cURL
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?&filter[]=name.EQ:Oh%20Canada' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

If the records to be combined through the OR logic and are based on two or more values in a single field, you can use the `IN` operator. In the example in the operator table above, the records returned have either `Amy` OR `Bella` in the `name` field.
In the scenario where you need to filter on different fields combined together with the OR logic, use two Object Query calls and "OR" the results in your code.
<br />

You have to make extensive use of the URL encoded values in queries, similar to using `%20` for a space in the previous example.
When using the IN operator, you should URL encode the square brackets surrounding the IN list of values to match. A left square bracket is `%5B` and the right square bracket is `%5D`.
So a query for Canadian Dollar or UK Pound billing accounts would be:


```bash cURL
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?&filter[]=currency.IN:%5BCAD,GBP%5D' \
-H "Authorization: Bearer $ztoken" \
-H "Content-Type: application/json"
```

Failure to do so can result in the `curl: (3) bad range in URL position` error.

**Note**: To filter on a field with the `null` value, specify a filter condition using the `<field>.EQ:null` syntax.


## Using sort[] query parameter

You can sort query results using the supported `sort[]` parameters for the base object. For supported `sort[]` values for each operation, check the Query Parameters section for each operation in the [API reference](/v1-api-reference/api/object-queries/queryaccounts).
.
You can change the sorting order using `ASC` or `DESC` as appropriate.
You cannot sort on more than one field or any related object fields.

## Using custom fields

You can include custom fields in the returned results, or filter on [indexed custom fields](https://docs.zuora.com?resourceId=platform-custom-field-management-with-object-manager).



## Pagination

By default, records returned by your query are paginated 10 records at a time.
You can change this value to be any positive integer up to 99 using the `pageSize` parameter.
The following example specifies a `pageSize` to 2:

```bash cURL
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?pageSize=2&filter[]=currency.EQ:CAD&account.fields[]=name,accountNumber,balance&expand[]=billto&billto.fields[]=firstname,lastname' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

If multiple pages of records are returned, then a `nextPage` value is included in the results:

```json
{
  "nextPage": "W3sidmFsdWUiOiJPaCBDYW5hZGEiLCJvcmRlckJ5Ijp7ImZpZWxkIjoiTmFtZSIsIm8zZGVyIjoiREVTQyJ9fSx7InZhbHVlIjoiOGFkMDgxZGQ5MDRkYTE2NTAxOTA1MWIwMDFhMDJhM2IiLCJvcmRlckJ5Ijp7ImZpZWxkIjoiSWQiLCJvcmRlciI6IkRFU0MifX1d",
  "data": [
    {
      "accountNumber": "A00024278",
      "balance": 0.0,
      "name": "Toronto Storage Co",
      "billTo": {
        "firstName": "Michelle",
        "lastName": "Beckman"
      }
    },
    {...}
  ]
}
```
To obtain the next page of results, add the `nextPage` value returned as the value of the `cursor` parameter and resubmit your query. Nothing else needs to change. So in our example, it would mean resubmitting this:

```bash cURL
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?pageSize=2&filter[]=currency.EQ:CAD&account.fields[]=name,accountNumber,balance&expand[]=billto&billto.fields[]=firstname,lastname&cursor=W3sidmFsdWUiOiJPaCBDYW5hZGEiLCJvcmRlckJ5Ijp7ImZpZWxkIjoiTmFtZSIsIm8zZGVyIjoiREVTQyJ9fSx7InZhbHVlIjoiOGFkMDgxZGQ5MDRkYTE2NTAxOTA1MWIwMDFhMDJhM2IiLCJvcmRlckJ5Ijp7ImZpZWxkIjoiSWQiLCJvcmRlciI6IkRFU0MifX1d' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

When you've retrieved the last page of results, `nextPage` will no longer appear in the response.

Bear in mind that pagination focuses the base object and is not designed for expanded objects. It means that not all expandable object records can be exposed through Object Query.

Assume you have a billing account with 20 subscriptions and you ask to expand the response with subscription details. You might run an object query similar to this:

```bash cURL
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?filter[]=accountnumber.EQ:A00024824&expand[]=subscriptions' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

Since `pageSize` is not specified, the default value of 10 is used. It would result in one account with 10 subscription objects getting listed with no `nextPage` cursor because there are no more accounts to be returned.
To obtain the remaining 10 subscriptions, you should specify `pageSize=20` in the query.

<br />

To summarize, the `pageSize` cursor behavior primarily applies to the base object, and the expanded objects are truncated at `pageSize`.
You can increase the `pageSize` value to allow more expanded objects returned in the response. However, when an object has more than 99 expanded objects, the objects beyond 99 cannot be queried, which is a known limitation.


## cURL example for using expand[], filter[], sort[], and fields[] query parameters

The following cURL example demonstrates how to query products with the following requirements:

- Returns only the accounts with the default currency set to `CAD`
- Displays only the `name`, `accountNumber`, `balance` and `ACC_Banner__c`(indexed) fields of each account
- Expands the associated BillToContact object while only the first name and last name of the bill-to contact are returned
- The results are sorted by account name in the descending order


```bash cURL
curl --request GET \
--url 'https://rest.apisandbox.zuora.com/object-query/accounts?account.fields[]=name,accountNumber,balance,ACC_Banner__c&expand[]=billto&billto.fields[]=firstname,lastname&filter[]=currency.EQ:CAD&sort[]=name.DESC' \
  -H "Authorization: Bearer $ztoken" \
  -H "Content-Type: application/json"
```

For better understanding, we decompose the URL into different components and provide description for each component in the following table:

|URL Component| Description|
|:---|:---|
|`https://rest.apisandbox.zuora.com/object-query/accounts`| Object Query root URL, indicating that we're using an API Sandbox tenant and running an object query on Accounts. You need to modify this root URL based on the tenant you are using or the object you are querying against.|
|`account.fields[]=name,accountNumber,balance,ACC_Banner__c`| We're using `fields[]` to tell the server that we only want the listed fields. In this example, we've shown you how to include a custom field. Remove this field from the list if you want this example to work in your tenant. The "API name" of the custom field is used. You can look up the available custom fields on each object in your Zuora tenant using the **Object Manager** feature from the Zuora UI.|
|`expand[]=billto&billto.fields[]=firstname,lastname`| We are using `expand[]` to add the BillToContact object to our result set but we're also using `fields[]` so that only firstname and lastname from the BilltoContact object are returned.|
|`filter[]=currency.EQ:CAD`|This filter only returns accounts with a default currency of CAD, the Canadian Dollar.|
|`sort[]=name.DESC`|A basic sort on the account name ensuring the returned accounts will be listed in an descending order of the account name.|

There is no required sequence for the query parameters.



## SDK Examples

The same functionality is available using our client libraries, so you can also use these query parameters in our client libraries. Note that the v3 libraries (or v1 for C#) currently do not include support for `fields[]`.

The following code examples use the `expand[]`, `filter[]`, and `sort[]` query parameters to filter the accounts based on currency, expanding on subscriptions and the default payment method, and sorting the results by the ascending order of account number.
A subset of key fields are formatted and printed out to the console.

<Tabs>
  <Tab title="Java">
  ```java Java
  QueryAccountsResponse response = zuoraClient.objectQueriesApi()
          .queryAccountsApi()
          .filter(List.of("currency.EQ:CAD"))
          .expand(List.of("subscriptions","defaultpaymentmethod"))
          .sort(List.of("accountNumber.ASC"))
          .execute();

  // Process the response
  List<ExpandedAccount> accounts = response.getData();
  if (accounts != null) {
      for (ExpandedAccount account : accounts) {
          System.out.println("Account Number: " + account.getAccountNumber());
          System.out.println("Currency: " + account.getCurrency());
          System.out.println("Name: " + account.getName());
          System.out.println("MRR: " + account.getMrr());

          // Print subscriptions
          if (account.getSubscriptions() != null) {
              for (ExpandedSubscription sub : account.getSubscriptions()) {
                  System.out.println("Subscription: " + sub.getName());
              }
          }

          // Print default payment method
          ExpandedPaymentMethod defaultPaymentMethod = account.getDefaultPaymentMethod();
          if (defaultPaymentMethod != null) {
              System.out.println("Default Payment Method Type: " + defaultPaymentMethod.getType());
          }

          System.out.println("-".repeat(40));
  }
  }

  ```
  </Tab>
  <Tab title="Node.js">
  ```javascript Node.js
  const response = await zuoraClient.objectQueriesApi.queryAccounts({
    filter: ['currency.EQ:USD'],
    expand: ['subscriptions','defaultpaymentmethod'],
    sort: ['accountNumber.ASC'],
  });

  const accounts = response.data;
  accounts.forEach((account) => {
      console.log(`Account Number: ${account.accountNumber}`);
      console.log(`Currency: ${account.currency}`);
      console.log(`Name: ${account.name}`);
      console.log(`MRR: ${account.mrr}`);

      // Print subscriptions
      if (account.subscriptions) {
          account.subscriptions.forEach((sub) => {
              console.log(`Subscription: ${sub.name}`);
          });
      }

      // Print default payment method
      if (account.defaultPaymentMethod) {
          console.log(`Default Payment Method Type: ${account.defaultPaymentMethod.type}`);
      }

      console.log("-".repeat(40));
  });
  ```
  </Tab>
  <Tab title="Python">
  ```python Python
  response = client.object_queries_api().query_accounts(filter=['currency.EQ:CAD'],sort=['accountnumber.ASC'],expand=['subscriptions,defaultpaymentmethod'])
  resp_data = response.data
  # Iterating through each record in the 'data' list
  for record in resp_data:
    print(f"Account Number: {record.account_number}")
    print(f"Currency: {record.currency}")
    print(f"Name: {record.name}")
    print(f"MRR: {record.mrr}")
    for sub in record.subscriptions:
        print(f"Subscription: {sub.name}")
    if record.default_payment_method:
        print(f"Default Payment Method Type: {record.default_payment_method.type}")
    print("-" * 40)
  ```
  </Tab>
  <Tab title="C#">
  ```csharp C#
  QueryAccountsResponse response = await zuoraClient.ObjectQueriesApi.QueryAccountsAsync(
      expand:["subscriptions", "defaultpaymentmethod"],
      filter:["currency.EQ:CAD"],
      sort:["accountNumber.ASC"]
  );

  // Process the response
  List<ExpandedAccount> accounts = response.Data;
  foreach (var account in accounts)
  {
      Console.WriteLine($"Account Number: {account.AccountNumber}");
      Console.WriteLine($"Currency: {account.Currency}");
      Console.WriteLine($"Name: {account.Name}");
      Console.WriteLine($"MRR: {account.Mrr}");

      // Print subscriptions
      if (account.Subscriptions != null)
      {
          foreach (var sub in account.Subscriptions)
          {
              Console.WriteLine($"Subscription: {sub.Name}");
          }
      }

      // Print default payment method
      if (account.DefaultPaymentMethod != null)
      {
          Console.WriteLine($"Default Payment Method Type: {account.DefaultPaymentMethod.Type}");
      }

      Console.WriteLine(new string('-', 40));
  }
  ```
  </Tab>
</Tabs>


## Throttling

- Rate limits for Object Query operations are the same as the REST API rate limits. See [Rate Limits](/docs/guides/rate-limits#rate-limits) for more information.

## Limitations

- Filtering on non-indexed advanced custom fields is not supported. Although filtering on non-indexed legacy custom fields is allowed for backward compatibility, it is not recommended because it can cause performance degradation. For more information about advanced and legacy custom fields, see <a href="https://docs.zuora.com/en/zuora-platform/extensibility/custom-fields/custom-fields-and-legacy-custom-fields" target="_blank">Custom fields and legacy custom fields</a>. This limitation applies not only to direct Object Query API calls but also services that use the Object Query API, such as the Query function in Workflows.
- Filtering on base objects is supported, but you cannot filter on the associated expandable objects. For example, when calling the [List subscriptions](/v1-api-reference/api/object-queries/querysubscriptions) operation, you can only filter on the Subscription objects. Filtering on the Account object is not supported.
- To filter on an empty string, specify a filter condition using the `<field>.EQ:%02%03` syntax. `<field>.EQ:''` is not supported.
- If you want to expose a Relationship-type field on custom objects through Object Query, you must set the field name to be suffixed with `Id__c` (case-sensitive). For example, `RatePlanId__c`. Otherwise, it cannot be queried through the Object Query API.
- It is not supported to filter custom objects using the `SW` or `NE` operator.
- The pagination for Object Query is primarily designed for querying the base object. It means that not all expandable object items can be exposed through Object Query. For detailed example, see [Pagination](/docs/guides/pagination#how-pagination-works-for-the-object-query-api).
- The following objects are currently not supported:
  - Catalog Group
  - Product Rate Plan Definition
  - E-Invoicing objects
  - Payment Gateway
- Some object types are only available when specific features are enabled. For example, the Invoice Settlement or the Invoice

  Settlement Harmonization feature must be enabled to access the CreditMemo object.
  If there is a feature enablement change, the changes in object availability may not take effect immediately. There may be a delay before newly enabled object types and their related fields become accessible via the API due to caching refresh intervals in the related services.
- Object Query normalizes standard and custom field names to camelCase (with the first letter in lowercase) for consistency. For custom fields, the resulting field name may differ from the API name displayed in Object Manager.

</Tab>
<Tab title="Quickstart API">

When you query records from Zuora objects, the following query parameters enable you to flexibly customize the returned results:

- `expand[]`: With this query parameter specified, you can expect to reduce the number of requests you make to the Zuora API by expanding objects in responses.
- `filter[]`: The filter query string.
- `<object>.fields[]`: Allows you to specify which fields to be returned in the response.
- `sort[]`: A case-sensitive query parameter that specifies the sort order of the listed results in the response. e array-type properties are specified for the `sort[]` parameter, they are ignored.

## Expand responses

This guide describes how to request additional properties from the API. You will learn to modify your requests to include:

- properties from related objects
- properties from distantly related objects
- additional properties on all objects in a list

We also provide the supported fields on each expandable object.

### How it works

The Zuora API is organized into resources represented by objects with state, configuration, and contextual properties. These objects all have unique IDs that you can use to retrieve, update, and delete them. The API also uses these IDs to link related objects together. A Billing Document, for example, links to an Account by the Account ID.

```json
{
  "id": "2c93808457d787030157e031d86c4c57",
  "account_id": "402892c74c9193cd014c91d35b0a0132",
  ...
}
```

In cases where you need information from a linked object, you can retrieve the linked object in a new call using its ID. However, this approach requires two API requests to access just one value. If you need information from multiple linked objects, each would also require separate requests, which adds to the latency and complexity of your application.

The API has an `expand[]` query parameter that allows you to retrieve linked objects in a single call, adding the object with all its properties and values.

For example, if you want to access details of the subscriptions and payment methods associated with a customer account, you would retrieve the account and pass the `subscription` and `payment_method` properties to the expand array, which tells Zuora to include the entire Subscriptions and Payment Method objects in the response:

<Tabs>
  <Tab title="cURL">

  </Tab>
  <Tab title="Java">

  </Tab>
  <Tab title="Node.js">

  </Tab>
  <Tab title="Python">

  </Tab>
  <Tab title="C#">

  </Tab>
</Tabs>

<Tabs>
  <Tab title="cURL">

  ```bash cURL
  curl -X GET
  'https://rest.sandbox.na.zuora.com/v2/accounts?expand%5B%5D=subscriptions&expand%5B%5D=payment_methods'
  -H 'Authorization: Bearer aa69290d875f4cfb97b226135ce278ad'
  ```
  </Tab>
  <Tab title="Java">
  ```java Java
  Account account = zuoraClient.accounts().getAccount(
  "2c92c0f86cbe335a016cbece4a434ada",
  Arrays.asList("subscriptions", "payment_methods")
  );
  ```
  </Tab>
  <Tab title="Node">
  ```javascript Node
  const accounts = await zuoraClient.accounts.getAccounts({
      filter: [
        'account_number.EQ:A00000077',
      ],
      expand: [
        'subscriptions',
        'payment_methods',
      ]
  });
  ```
  </Tab>
</Tabs>

It will return the subscriptions and payment methods associated with the account:

```json
{
"id": "2c92c0f96abc17de016abd62bd0c5854",
...
"account_number": "RC-00000017",
"payment_methods": {
  "data": [
  {
    "id": "2c92c0f9710b79bd01711219e3ed2d9a",
    "account_id": "2c92c0f96abc17de016abd62bd0c5854",
    "type": "ach_debit",
  ...
  }
  ]
},
"subscriptions":
{
  "data": [
  {
    "id": "8ad0935e80bc8f360180c6f5a6e83ace",
    "subscription_number": "OpportunityNum1",
    "state": "Active",
    "account_id": "2c92c0f96abc17de016abd62bd0c5854",
  }
  ],
...
}
}
```

### Expand multiple levels

If the value you want is nested deeply across multiple linked resources, you can reach it by recursively expanding using dot notation. For instance, if you want to know the payment method and the subscription plans of the subscriptions associated with an account, you can expand the subscription plan of the subscription and the payment method by passing `subscriptions.subscription_plans` and `payment_methods` into the expand array.

<Tabs>
  <Tab title="cURL">
  ```bash cURL
  curl -X GET
  'https://rest.sandbox.na.zuora.com/v2/accounts?expand%5B%5D=subscriptions.subscription_plans&expand%5B%5D=payment_methods'
  -H 'Authorization: Bearer aa69290d875f4cfb97b226135ce278ad'
  ```
  </Tab>
  <Tab title="Java">
  ```java Java
  Account account = zuoraClient.accounts().getAccount(
  "2c92c0f86cbe335a016cbece4a434ada", Arrays.asList("subscriptions.subscription_plans", "payment_methods")
  );
  ```
  </Tab>
  <Tab title="Node">
  ```javascript Node
  const accounts = await zuoraClient.accounts.getAccounts({
    filter: [
      'account_number.EQ:A100032',
    ],
    expand: [
      'subscriptions.subscription_plans',
      'payment_methods',
    ]
  });
  ```
  </Tab>
</Tabs>

### Request non-default includable properties

If you query on a billing document, its included items are returned without details by default. You will not get any meaningful data in the returned `items` object. The details of this property is returned in responses only if the `expand[]` parameter is specified. For example:

<Tabs>
  <Tab title="cURL">
  ```bash cURL
  curl -X GET "https://rest.sandbox.na.zuora.com/v2/billing_documents/2c93808457d78703011d86c4c57"
  -d "expand[]=items"
  -H "Authorization: Bearer 6e3b8958cc2b4b4bbfca2e4ab8d75126"
  ```
  </Tab>
  <Tab title="Java">
  ```java Java
  BillingDocument Invoice = zuoraClient.billingDocuments().getBillingDocument("2c92c0f86cbe335a016cbece4a434ada", Arrays.asList("items");
  ```
  </Tab>
  <Tab title="Node">
  ```javascript Node
  const newInvoice = await zuoraClient.billingDocuments.getBillingDocument('2c92c0f86cbe335a016cbece4a434ada',{
    expand: ['items']
  });
  ```
  </Tab>
</Tabs>

### Expandable objects and fields

Not all objects or objects can be expanded. See the following table for a list of objects and the supported `expand[]` values.

<br />

**Note**: Up to three levels of associated objects are supported.
For example, when querying an order, expanding on `subscriptions.subscription_plans.subscription_items` is supported while expanding on `subscriptions.subscription_plans.subscription_items.price` is not.


| Resource | Supported `expand[]` value |
|:----|:----|
|Product| <ul><li>`plans`</li><li> `plans.prices`</li></ul>|
|Plan| <ul><li>`product`</li><li> `prices`</li></ul>|
|Price| <ul><li>`plan`</li></ul>|
|Account| <ul><li>`payment_methods`</li>  <li>`payments` and its expand[] values (such as `payments.payment_applied_to`)</li>  <li>`default_payment_method`</li><li>`billing_documents`</li> <li>`bill_to`</li><li>`sold_to`</li><li>`subscriptions` and its expand[] values (such as `subscriptions.subscription_plans.plan` and `subscriptions.subscription_plans.plan`)</li> <li>`usage_records`</li> <li>`invoices` and its expand[] values</li> <li>`credit_memos` and its expand[] values</li> <li>`debit_memos` and its expand[] values</li></ul>|
|Subscription|<ul><li>`subscription_plans` and its expand[] values</li><li> `account` and its supported values (such as `account.payment_methods`)</li><li>`invoice_owner_account`</li><li> `bill_to`</li><li>`sold_to`</li><li>`invoice_items` and its expand[] values</li><li>`prepaid_balances`</li><li>`prepaid_balance`</li></ul>|
|Subscription Plan|<ul><li>`subscription` and its expand[] values</li><li>`plan` and its expand[] values</li><li>`subscription_items` and its expand[] values</li></ul>|
|Subscription Item|<ul><li>`price`</li><li>`subscription_plan`</li></ul>|
|Invoice|<ul><li>`account` and its expand[] values</li><li>`items`(credit memo item or debit memo item) and its expand[] values</li><li>`bill_to`</li></ul>|
|Invoice Item|<ul><li>`subscription` and its expand[] values</li><li>`subscription_item` and its expand[] values</li><li>`taxation_items`</li><li>`invoice` and its expand[] values</li><li>`line_item`</li></ul> |
|Credit Memo|<ul><li>`account` and its expand[] values</li><li>`items`(credit memo item) and its expand[] values</li><li>`bill_to`</li><li>`applied_to`</li></ul>|
|Credit Memo Item|<ul><li>`subscription` and its expand[] values</li><li>`credit_memo` and its expand[] values</li><li>`subscription_item` and its expand[] values</li><li>`taxation_items`</li><li>`billing_document`</li></ul>|
|Debit Memo|<ul><li>`account` and its expand[] values</li><li>`items`(debit memo item) and its expand[] values</li><li>`bill_to`</li></ul>|
|Debit Memo Item|<ul><li>`subscription` and its expand[] values</li><li>`debit_memo` and its expand[] values</li><li>`subscription_item` and its expand[] values</li><li>`taxation_items`</li><li>`billing_document`</li></ul>|
|Refund|<ul><li>`account` and its expand[] values</li><li> `payment_method`</li><li>`applied_to`</li><li>`applied_to.payment`</li><li>`applied_to.items`</li></ul>|
|Payment Method| <ul><li>`account` and its expand[] values </li></ul> |
|Payment| <ul><li>`account` and its expand[] values</li><li>`payment_method`</li><li>`payment_applied_to`</li></ul>|
|Order| <ul><li>`account` and its expand[] values</li><li>`line_items`</li><li>`line_items.invoice_items`</li><li>`subscriptions` and its expand[] values (such as `subscriptions.subscription_plans` and `subscriptions.subscription_plans.subscription_items`)</li><li>`order_actions`</li></ul> |
|Usage Record| <ul><li>`account` and its expand[] values</li><li>`subscription` and its expand[] values (such as `subscriptions.subscription_plans.plan` and `subscriptions.subscription_plans.plan`)</li><li>`subscription_item` and its expand[] values</li></ul> |
|Custom Object| <ul><li>`account` and its expand[] values</li></ul> |



## Filter lists

### Filter query syntax

A filter query clause consists of the following components:

-   a field
-   an operator
-   a value

The filter query syntax is as follows:

`field.operator:value`

For example,
`email.EQ:alawrence@zuora.com` contains the following breakdown components:

|Component|Value|
| ---- | ---- |
|field|email|
|operator|EQ|
|value|alawrence@zuora.com|

You can combine multiple filter query clauses by separating them as different array elements. Note that the clauses are combined with the AND logic.

See the following sections for more information:

-   Supported operators and corresponding examples of using
-   Supported query fields for each object

**Note**: You can use any indexed custom field in your query filters and the fields documented here for each object.

### Supported operators

The following table lists all supported operators that you can use to construct a list filter query, and an example for each operator.

|Operator|Description|Example|
| -- | -------- | ---- |
|EQ|Exact match operator |currency.**EQ**:EUR|
|NE|Returns objects that do not match the clause |currency.**NE**:CAN|
|LT|Less than operator |quantity.**LT**:200|
|GT|Greater than operator |quantity.**GT**:200|
|SW|Starts with operator |account\_name.**SW**:Acc|
|IN|Specifies a list of values that will be returned |name.**IN**:[Amy,Bella]|

**Field types and operators**


All search fields support exact and case-sensitive matching with `EQ`, `NE`, and `IN`.

String type fields like `email` and `name` support case-sensitive matching with `SW`.

Numeric fields like `amount` and Date type fields like `updated_time` support numeric comparators like `LT` and `GT`.

## Supported query fields

This section describes all supported filterable fields on each object and corresponding examples.
Note that the `[a][b]` field indicates that you can filter results based on the `a`>`b` nested field.

#### Accounts

The following table summarizes the supported query fields for the Account object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:2c92c0f86a8dd422016a9e7a70116b0d|
|batch|batch.EQ:batch1|
|bill\_cycle\_day|bill\_cycle\_day.EQ:30|
|bill\_to\_id|bill\_to\_id.EQ:2c92c08a6246fdf101626b1b3fe0144b|
|sold\_to\_id|sold\_to\_id.NE:2c92c08a6246fdf101626b1b3fe0144b|
|communication\_profile\_id|communication\_profile\_id.EQ:2c92c0f95be68649015bf14e001f2760|
|crm\_id|crm\_id.SW:SF|
|currency|currency.NE:GBP|
|default\_payment\_method\_id|default\_payment\_method\_id.EQ:402892c74c9193cd014c96bbe7d901fd|
|invoice\_template\_id|invoice\_template\_id.SW:INV|
|name|name.SW:Amy|
|balance|balance.LT:500|
|last\_invoice\_date|last\_invoice\_date.GT:2020-03-10|
|parent\_account\_id|parent\_account\_id.EQ:402892c74c9193cd014c96bbe7c101f9|
|account\_number|account\_number.EQ:A100032|
|status|status.EQ:|
|[billing\_documents][id]|[billing\_documents][id].EQ:8ad0889d865429be018655c61c592aaa|
|[payment\_methods][type]|[payment\_methods][type].EQ:card|
|[subscriptions][state]|[subscriptions][state].EQ:active|

#### Contacts

The following table summarizes the supported query fields for the Contact object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8ad08c0f7d0972ea017d0a705e8059ba|
|first\_name|first\_name.SW:Amy|
|last\_name|last\_name.SW:Mc|
|account\_id|account\_id.EQ:402892c74c9193cd014c96bbe7c101f9|
|email|email.EQ:alawrence@zuora.com|
|work\_email|work\_email.EQ:amy.lawrence@gmail.com|
|work\_phone|work\_phone.EQ:(888) 976-9056|

#### Subscriptions

The following table summarizes the supported query fields for the Subscription object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8ad09b2186cb32bd0186cce8a0455282|
|account\_id|account\_id.EQ:402892c74c9193cd014c96bbe7c101f9|
|state|state.NE:paused|
|subscription\_number|subscription\_number.EQ:SUB10000|
|version|version.EQ:1|
|contract\_effective|contract\_effective.EQ:2022-01-01|
|invoice\_owner\_account\_id|invoice\_owner\_account\_id.EQ:8ad0823f8455bb400184633077e63aaf|
|start\_date|start\_date.GT:2022-07-01|
|end\_date|end\_date:LT:2022-12-31|
|latest\_version|latest\_version.EQ:true|
|[subscription\_plans][id]|[subscription\_plans][id].EQ:8ad0889d86834d1e0186932012214142|

#### Subscription Plans

The following table summarizes the supported query fields for the Subscription Plan object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8ad09e8086255d9c0186263fe0346c4a|
|subscription\_id|subscription\_id.EQ:8ad09c4b80da79ad0180dd1c0f5937cb|
|product\_id|product\_id.EQ:8ad08c0f7c9801a8017c9f3966864ee2|
|[subscription\_items][id]|[subscription\_items][id].EQ:8ad0889d86834d1e0186932012224143|

#### Subscription Items

The following table summarizes the supported query fields for the Subscription Item object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8ad0889d86da5d7f0186db4ad79f79dd|
|subscription\_plan\_id|subscription\_plan\_id.EQ:8ad0889d86da5d7f0186db4ad79f79db|
|subscription\_item\_number|subscription\_item\_number.EQ:C-00050021|


#### Orders

The following table summarizes the supported query fields for the Order object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2023-03-10T07:12:12-07:00|
|id|id.EQ:8ad093fb8a935d40018a94e199ad2456|
|order\_date|order\_date.GT:2023-03-10|
|order\_number|order\_number.EQ:O-00024364|
|account\_id|account\_id.EQ:8ad0889d86da5d7f0186db4ad79f79dd|
|[subscription][state]|[subscription][state].EQ:active|


#### Billing Documents

The following table summarizes the supported query fields for the Billing Document object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8ad09b2186e449290186e5bb40c04c3a|
|document\_date|document\_date.GT:2022-01-01|
|account\_id|account\_id.EQ:402892c74c9193cd014c96bbe7c101f9|
|state|state.NE:paid|
|type|type.EQ:invoice|
|total|total.LT:100|
|remaining\_balance|remaining\_balance.LT:100|
|billing\_document\_number|billing\_document\_number.NE:INV10001|
|[items][id]|[items][id].EQ:8ad08c84858672100185a2662c6c1b4b|


#### Billing Document Items

The following table summarizes the supported query fields for the Billing Document Item object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|type|type.EQ:credit_memo|
|subscription\_id|subscription\_id.EQ:402892c74c9193cd014c96bbe7c101f9|
|subscription\_item\_id|subscription\_item\_id.EQ:8ad08c84858672100185a2662c6c1b4b|
|price\_id|price\_id.EQ:8ad08d2986bfcd2b0186c3878afc5053|


#### Invoices

The following table summarizes the related objects that support nested filters in the Invoice resource:

|Field|Example usage|
| ---- | -------- |
|id|id.EQ:8ad08d2986bfcd2b0186c3878c725089|
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|account\_id|account\_id.EQ:8ad08d29857fc0ec0185829faf0507d7|
|document\_date|document\_date.GT:2023-03-10|
|billing\_document\_number|billing\_document\_number.EQ:INV00009299|
|remaining\_balance|remaining\_balance.GT:100|
|state|state.EQ:draft|
|reversed|reversed.EQ:true|
|total|total.GT:1000|
|[items][id]|[items][id].EQ:2c92c0856a8c7907016a9dda25dd796b|

#### Invoice Items

The following table summarizes the related objects that support nested filters in the Invoice Item resource:

|Field|Example usage|
| ---- | -------- |
|id|id.EQ:8ad09b2186a19cc50186a3cbd10116f0|
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|subscription\_id|subscription\_id.EQ:8ad08d2986bfcd2b0186c3878ad8504d|
|subscription\_item\_id|subscription\_item\_id.EQ:8ad08d2986bfcd2b0186c3878afc5053|
|invoice\_id|invoice\_id.EQ:8ad08d2986bfcd2b0186c3878c725089|
|price\_id|price\_id.EQ:8ad0823f84c8a4500184c8cd329c19b8|
|[taxation\_items][id]|[taxation\_items][id].EQ:2c92c0856d82b3ab016da7379aeb28ac|

#### Credit Memos

The following table summarizes the related objects that support nested filters in the Credit Memo resource:

|Field|Example usage|
| ---- | -------- |
|id|id.EQ:8ad0889d86bb645e0186bf2ada4a5f07|
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|account\_id|account\_id.EQ:8ad08d29857fc0ec0185829faf0507d7|
|document\_date|document\_date.GT:2023-03-10|
|billing\_document\_number|billing\_document\_number.EQ:CM000099|
|remaining\_balance|remaining\_balance.GT:100|
|state|state.EQ:posted|
|total|total.GT:1000|
|[items][id]|[items][id].EQ:8ad0823f84c8a4500184c8cd329c19b8|

#### Credit Memo Items

The following table summarizes the related objects that support nested filters in the Credit Memo Item resource:

|Field|Example usage|
| ---- | -------- |
|id|id.EQ:8ad0889d86bb645e0186bf2ada4a5f07|
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|subscription\_id|subscription\_id|
|invoice\_item\_id|invoice\_item\_id.EQ:8ad08d298659570101865b0f99183614|
|credit\_memo\_id|credit\_memo\_id.EQ:8ad0889d86bb645e0186bf2ada4a5f07|
|[taxation\_items][id]|[taxation\_items][id].EQ:8ad0823f84c8a4500184c8cd329919b7|
|subscription\_item\_id|subscription\_item\_id.EQ:8ad08c84858672100185a2662c6c1b4b|
|price\_id|price\_id.EQ:8ad08d2986bfcd2b0186c3878afc5053|


#### Debit Memos

The following table summarizes the related objects that support nested filters in the Debit Memo resource:

|Field|Example usage|
| ---- | -------- |
|id|id.EQ:8ad08e0184e174c00184e3d205584fd4|
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|account\_id|account\_id.EQ:8ad08d29857fc0ec0185829faf0507d7|
|document\_date|document\_date.GT:2023-03-10|
|billing\_document\_number|billing\_document\_number.EQ:DM00000256|
|remaining\_balance|remaining\_balance.GT:100|
|state|state.EQ:draft|
|total|total.GT:1000|
|[items][id]|[items][id].EQ:2c92c0f86a8dd422016a9ec8d52d6476|

#### Debit Memo Items

The following table summarizes the related objects that support nested filters in the Debit Memo Item resource:

|Field|Example usage|
| ---- | -------- |
|id|id.EQ:8ad0889d86bb645e0186bf2ada4a5f07|
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|subscription\_id|subscription\_id|
|invoice\_item\_id|invoice\_item\_id.EQ:8ad08d298659570101865b0f99183614|
|debit\_memo\_id|debit\_memo\_id.EQ:8ad09e2085bf590d0185c10942ec3130|
|[taxation\_items][id]|[taxation\_items][id].EQ:8ad09e2085bf590d0185c10943173133|
|subscription\_item\_id|subscription\_item\_id.EQ:8ad08c84858672100185a2662c6c1b4b|
|price\_id|price\_id.EQ:8ad08d2986bfcd2b0186c3878afc5053|


#### Payment Methods

The following table summarizes the supported query fields for the Payment Method object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8f64d4d703ae472b6e1aa6d92b79b210|
|account\_id|account\_id.EQ:402892c74c9193cd014c96bbe7c101f9|
|state|state.EQ:active|
|type|type.EQ:cc_ref|

#### Payments

The following table summarizes the supported query fields for the Payment object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|created\_time|created\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8ad09c4b82aa84900182ada00dca1e22|
|account\_id|account\_id.EQ:402892c74c9193cd014c96bbe7c101f9|
|payment\_date|payment\_date.GT:2022-01-01|
|gateway\_order\_id|gateway\_order\_id.EQ:12345678|
|gateway\_state|gateway\_state.EQ:settled|
|payment\_method\_id|payment\_method\_id.EQ:402892c74c9193cd014c96bbe7d901fd|
|payment\_number|payment\_number.NE:1a2b3c4d|
|state|state.NE:processed|
|amount|amount.GT:100|
|remaining\_balance|remaining\_balance.LT:100|

#### Payment Runs

The following table summarizes the supported query fields for the Payment object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8ad09c4b82aa84900182ada00dca1e22|
|state|state.EQ:completed|



#### Refunds

The following table summarizes the supported query fields for the Refund object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8ad09c4b82aa84900182ada00dca1e22|
|account\_id|account\_id.EQ:402892c74c9193cd014c96bbe7c101f9|
|payment\_method\_id|payment\_method\_id.EQ:402892c74c9193cd014c96bbe7d901fd|
|refund\_number|refund\_number.NE:RE1234|
|refund\_date|refund\_date.GT:2023-01-01|
|reason\_code|reason\_code.NE:null|
|amount|amount.GT:100|
|state|state.EQ:processed|

#### Products

The following table summarizes the supported query fields for the Product object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8ad081c686747d0101867b2ef24b783a|
|name|name.SW:ZUO|
|sku|sku.EQ:SKU123|
|start\_date|start\_date.GT:2022-01-01|
|end\_date|end\_date.LT:2023-01-01|
|[plans][id]|[plans][id].EQ:8ad088718561b84d018579f52e2a2093|

#### Plans

The following table summarizes the supported query fields for the Plan object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8ad081c686747d0101867b2ef24b783a|
|plan\_number|plan\_number.IN:[PL-002,PL-017]|
|name|name.SW:MONTHLY|
|product\_id|product\_id.NE:8ad08aef7ffdebb80180003bd3272789|
|start\_date|start\_date.GT:2022-01-01|
|end\_date|end\_date.LT:2023-01-01|
|[prices][id]|[prices][id].EQ:8ad08aef843cb3d701843fc06bf364ba|

#### Prices

The following table summarizes the supported query fields for the Price object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8ad081c686747d0101867b2ef24b783a|
|plan\_id|plan\_id.EQ:8ad08e017ffdeba30180003bd58533ea|
|charge\_model|charge\_model.EQ:flat\_fee|
|charge\_type|charge\_type.EQ:one_time|
|recurring\_on|recurring\_on.EQ:1|

#### Usage Records

The following table summarizes the supported query fields for the Usage Record object.

|Field|Example usage|
| ---- | -------- |
|updated\_time|updated\_time.GT:2020-03-10T07:12:12-07:00|
|id|id.EQ:8ad081c686747d0101867b2ef24b783a|
|account\_number|account\_number.EQ:A-12345|
|account\_id|account\_id.EQ:8ad08e017ffdeba30180003bd58533ea|
|end\_time|end\_time.LT:2020-03-10T07:12:12-07:00|
|start\_time|start\_time.GT:2022-04-10T07:12:12-07:00|
|unit\_of\_measure|unit\_of\_measure.EQ:Each|




## List only the fields you need in response

The Zuora Quickstart API allows you to select only the fields you want to be returned in the response.

### Syntax

By default, any GET calls return all fields on the queried object. If you only need a subset of fields in the response, you can use the `<object>.fields[]` query parameter to include only the specified fields in the response:

`<object>.fields[] = <field_name>`


This query parameter provides you extended flexibility to suit your use cases. The `<object>` in the query parameter can be the primary object you query or any supported associated objects. The `field_name` can be any top-level fields that exist on the primary object or associated objects, separated by commas (`,`) . For example, if you only want to retrieve the account name and created time for a created account, include this query string in your request:

`account.fields[]=created_time,name`

For the supported associated objects available for use in the `<object>.fields[]` parameter, see the "Query Parameters" section for each GET operation in the [Quickstart API Reference](/other-api/quickstart-api-intro).


### Examples

If you use the [List accounts](/other-api/quickstart-api/accounts/getaccounts) operation, by default, you will receive all fields on the Account objects in the response. If you are only interested in receiving the created time, account number, and custom fields in the response, you can include the `account.fields[]` query parameter in your request with `created_time,account_number,custom_fields` set as the value.

The following code snippet is an example for this case:

```bash cURL
curl --request GET \
     --url 'https://rest.na.zuora.com/v2/account?account.fields[]=created_time,account_number,custom_fields'
     --header 'Authorization: Bearer eeb5a22d679345ddaa1220640d2f440f'
```

After you send this request, the following response will be returned. Note that the custom fields can vary depending on the configured custom fields in your tenant.

```json
{
	"next_page": null,
	"data": [
		{
			"created_time": "2023-03-30T17:19:54-07:00",
			"custom_fields": {
				"GenerateStatement__c": "Test Statement",
				"legal_entity__c": null,
				"RetryStatus__c": null,
				"StatementTemplate__c": "Template 1"
			},
			"account_number": "RC-00021184"
		}
	]
}
```

If you want to retrieve a subset of fields from a secondary object such as Payment Method that is associated with the primary object, you should include an additional `expand[]` parameter.

For example, if you are using the same "List accounts" operation as before and you want to retrieve the `id`, `type`, and `state` fields of any payment methods associated with the account, you can specify the `expand[]=payment_methods` and `payment_methods.fields[]=type,state` query parameters in your request as follows:

```bash cURL
curl --request GET \
     --url 'https://rest.na.zuora.com/v2/account?account.fields[]=created_time,account_number,custom_fields&expand[]=payment_methods&payment_methods.fields[]=type,state' \
     --header 'Authorization: Bearer eeb5a22d679345ddaa1220640d2f440f'
```
With this request, you can get the following response:

<br />

Bear in mind the following key points for listing fields on the associated objects:

- You cannot request nested fields (for example, `custom_fields.legal_entity`) through the `<object>.fields[]` parameter. All nested fields will be returned when the top-level field such as `custom_fields` is specified.
- If you intend to retrieve the associated objects (secondary objects) on an object (primary object), you must also use the `expand[]` query parameter to expand on the secondary objects.

## Sorting fields in response

The `sort[]` query parameter is case-sensitive and it specifies the sort order of the listed results in the response. The value should be in the `field.ASC|DESC` format, which can be either ascending (for example, `account_number.ASC`) or descending (for example, `account_number.DESC`).

You cannot sort on properties in arrays. If the array-type properties are specified for the `sort[]` parameter, they are ignored.

</Tab>

</Tabs>
