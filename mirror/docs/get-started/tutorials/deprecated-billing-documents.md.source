---
excludeFromSearch: true
markdown:
  toc:
    hide: true
redirects:
  /quickstart-api/tutorial/create-billing-documents/: {}
  /quickstart-api/tutorial/create-bill-runs/: {}
  /quickstart-api/tutorial/view-billing-documents/: {}
  /rest-api/api-guides/7-create-billing-document/: {}
---

# Create billing documents

Billing documents represent your customer's invoices, credit memos, and debit memos.

Invoices are statements of amounts owed by a customer, and are either generated one-off or periodically from a subscription. They contain invoice items, and proration adjustments that may be caused by changes to a subscription.

If your invoice is configured to be charged automatically, Zuora automatically finalizes your invoice and attempts payment; otherwise Zuora will email the invoice to your customer and await payment. Any credit memos may be applied before determining the amount due for the invoice, which is the amount that will be charged.

{% tabsComponent %}
  {% tabComponent title="Quickstart API" %}

## Create an invoice

Assume the billing timing of the recurring price that your customer subscribes to is `in_advance`. After your customer has created a subscription, you need to create an invoice and bill it to your customer.

The following code sample creates an invoice for the subscription of the Gold product and post it to your customer's account.

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl --request POST \
      --url https://rest.test.zuora.com/v2/invoices \
      --header 'Authorization: Bearer 36d7146ffe674eb5988c6838dfe370ae' \
      --header 'Content-Type: application/json' \
      --data '{
        "account_id": "2c92c0f96abc17de016abd62bd0c5854",
        "pay": false,
        "description": "invoice of subscription for Gold product",
        "document_date": "2023-02-01",
        "post": true,
        "items": [
        {
              "amount": 100,
              "booking_reference": "PE2FGW",
              "name": "Subscription item 1",
              "description": "A new invoice item",
              "service_start": "2023-01-01"
          }]
      }'
  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
    LocalDate startDate = LocalDate.of(2022,11,1);
    LocalDate endDate = LocalDate.of(2023,11,1);

    BillingDocumentItemCreateRequest invoiceItemRequest = new BillingDocumentItemCreateRequest()
        .amount(new BigDecimal(300.00))
        .bookingReference("PE2FGW")
        .name("subscription item 1")
        .description("a new invoice item")
        .quantity(new BigDecimal(2))
        .serviceEnd(endDate)
        .serviceStart(startDate);

    BillingDocumentCreateRequest invoiceRequest = new BillingDocumentCreateRequest()
        .accountId("8ad09b7d8292b85d0182a4d6f875225a")
        .pay(false)
        .description("new invoice")
        .documentDate(startDate)
        .type(BillingDocumentCreateRequest.TypeEnum.INVOICE)
        .post(true)
        .items(Collections.singletonList(invoiceItemRequest));

    BillingDocument newInvoice = zuoraClient.billingDocuments().postBillingDocument(invoiceRequest);
    System.out.println(newInvoice);
  ```
  {% /tab %}
  {% tab label="Node" %}
  ```javascript {% title="Node" %}
  const invoiceItemRequest = {
      amount: 300,
      booking_reference: 'PE2FGW',
      name: 'subscription item 1',
      description: 'a new invoice item',
      quantity: 2,
      service_start: '2022-11-01',
      service_end: '2023-11-01',
  };

  const invoiceRequest = {
      account_id: '8ad09b7d8292b85d0182a4d6f875225a',
      pay: false,
      description: 'new invoice',
      document_date: '2022-11-01',
      type: 'invoice',
      post: true,
      items: [invoiceItemRequest]
  };

  const newInvoice = await zuoraClient.billingDocuments.postBillingDocument(invoiceRequest);
  ```
  {% /tab %}
{% /tabs %}

## Create a credit memo

Credit memos are legal documents used to correct charge mistakes on invoices and manage the balance on a particular invoice or customer account.

You can use the [Create a credit memo](/other-api/quickstart-api/credit-memos/createcreditmemo) operation to create credit memos in either of the following ways:

* Create a credit memo from an invoice

  Note that you can create a credit memo from an invoice only if you have the Billing user role permission. See <a href="https://docs.zuora.com?resourceId=platform-billing-roles" target="_blank">Billing Roles</a> for more information.

* Create a credit memo from a price

  These memos are recognized as standalone credit memos. The purpose of standalone credit memos is to raise an ad hoc price or credit not related to a specific invoice. The memo items refer to one-time prices. These prices do not have to be part of any subscription. Standalone credit memos can be applied to any invoice or debit memo with a positive balance.

### Create a credit memo from an invoice

The following example creates a credit memo from an invoice with `invoice_id` = `8ad0889d8736ecc50187460849231ae2`. The credit memo item is created based on the invoice item with `invoice_item_id` = `8ad0889d8736ecc501874608493d1ae3`:

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl --request POST \
    --url https://rest.apisandbox.zuora.com/v2/credit_memos \
    --header 'Authorization: Bearer 8c839831b0c74af9af01d0171647019b' \
    --header 'Content-Type: application/json' \
    --data '{
              "account_id": "2c92c0f96abc17de016abd62bd0c5854",
              "description": "credit memo from invoice",
              "document_date": "2023-04-01",
              "invoice_id": "8ad0889d8736ecc50187460849231ae2",
              "items": [
                {
                  "invoice_item_id": "8ad0889d8736ecc501874608493d1ae3",
                  "amount": 10,
                  "quantity": 5,
                  "service_start": "2023-01-01",
                  "service_end": "2023-04-01",
                  "name": "credit memo item 1"
                }
              ],
              "reason_code": "Charge Dispute"
  }'
  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  LocalDate startDate = LocalDate.of(2022,9,20);
  LocalDate endDate = LocalDate.of(2022,9,30);

  BillingDocumentItemCreateRequest invoiceItem = new BillingDocumentItemCreateRequest()
      .amount(new BigDecimal(10))
      .quantity(new BigDecimal(5))
      .serviceStart(startDate)
      .serviceEnd(endDate)
      .sku("SKU-123")
      .invoiceItemId("8ad0855182b04d010182b0ccd9d33e79");

  List<BillingDocumentItemCreateRequest> billingDocumentItemList = new ArrayList<BillingDocumentItemCreateRequest>();
  billingDocumentItemList.add(invoiceItem);

  BillingDocumentCreateRequest creditMemoRequest = new BillingDocumentCreateRequest()
      .accountId("8ad09b7d8292b85d0182a4d6f875225a")
      .description("credit memo from invoice")
      .documentDate(todayDate)
      .type(BillingDocumentCreateRequest.TypeEnum.CREDIT_MEMO)
      .invoiceId(invoice.getId())
      .items(billingDocumentItemList)
      .reasonCode("Charge Dispute");

  BillingDocument creditMemoFromInvoice = zuoraClient.billingDocuments().postBillingDocument(creditMemoRequest);
  ```
  {% /tab %}
  {% tab label="Node" %}
  ```javascript {% title="Node" %}
  const invoiceItem = {
      amount: 10,
      quantity: 5,
      service_start: '2022-09-20',
      service_end: '2022-09-30',
      sku: 'SKU-123',
      invoice_item_id: '8ad0855184eab9e10184efdac7917c6d',
  };

  const creditMemoRequest = {
      account_id: '8ad09b7d8292b85d0182a4d6f875225a',
      description: 'credit memo from invoice',
      document_date: '2022-11-02',
      type: 'credit_memo',
      invoice_id: '8ad0855184eab9e10184efdac77d7c6c',
      items: [invoiceItem],
      reason_code: 'Charge Dispute',
  };

  const newCreditMemo = await zuoraClient.billingDocuments.postBillingDocument(creditMemoRequest);
  ```
  {% /tab %}
{% /tabs %}

### Create a credit memo from a price

The following example creates a credit memo from a price where `price_id` = `8ad0887182afa5d00182b017730c5fcb`:

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl --request POST \
      --url https://rest.apisandbox.zuora.com/v2/credit_memos \
      --header 'Authorization: Bearer 38fcea81ac494dfdb1ff9832689ef510' \
      --header 'Content-Type: application/json' \
      --data '{
      "account_id": "2c92c0f96abc17de016abd62bd0c5854",
      "description": "credit memo from price",
      "document_date": "2023-04-01",
      "items": [
        {
          "price_id": "8ad0887182afa5d00182b017730c5fcb",
          "amount": 10,
          "quantity": 5,
          "description": "Description of the credit memo item",
          "service_start": "2022-12-01"
        }
      ],
      "reason_code": "Ad hoc credit"
    }'

  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  LocalDate date = LocalDate.of(2022,9,20);

  BillingDocumentItemCreateRequest priceItem = new BillingDocumentItemCreateRequest()
      .amount(new BigDecimal(10))
      .quantity(new BigDecimal(5))
      .serviceStart(date)
      .description("Test item description")
      .priceId(price.getId());

  List<BillingDocumentItemCreateRequest> billingDocumentItemList = new ArrayList<BillingDocumentItemCreateRequest>();
  billingDocumentItemList.add(priceItem);

  BillingDocumentCreateRequest creditMemoRequest = new BillingDocumentCreateRequest()
      .accountId("8ad09b7d8292b85d0182a4d6f875225a")
      .description("credit memo from price")
      .documentDate(date)
      .type(BillingDocumentCreateRequest.TypeEnum.CREDIT_MEMO)
      .items(billingDocumentItemList)
      .reasonCode("Ad hoc credit");

  BillingDocument creditMemoFromPrice = zuoraClient.billingDocuments().postBillingDocument(creditMemoRequest);
  ```
  {% /tab %}
  {% tab label="Node" %}
  ```javascript {% title="Node" %}
  const priceItem = {
      amount: 10,
      quantity: 5,
      description: 'Test item description',
      service_start: '2022-09-20',
      price_id: '8ad0887182afa5d00182b017730c5fcb',
  };

  const creditMemoRequest = {
      account_id: '8ad09b7d8292b85d0182a4d6f875225a',
      description: 'credit memo from price',
      document_date: '2022-09-20',
      type: 'credit_memo',
      items: [priceItem],
      reason_code: 'Ad hoc credit',
  };

  const newCreditMemoFromPrice = await zuoraClient.billingDocuments.postBillingDocument(creditMemoRequest);
  ```
  {% /tab %}
{% /tabs %}

## Create bill runs

An ad hoc bill run lets you create a bill run for a specific and usually one-time purpose.  Invoices or credit memos are generated from the bill run depending on the changes made to the subscriptions.
You can use the [Create a bill run](/other-api/quickstart-api/bill-runs/createbillrun) operation to create an ad hoc bill run.

To create a bill run, you must specify the following required fields:
- `invoice_date`: the date displayed on the billing document.
- `target_date`: all unbilled items before this date will be included in the bill run.

Suppose that a batch of your customers (`Batch1`) subscribed to your delivery service for 1 year, and you have posted the 1 year’s invoices to them. However, on April 10th, some customers canceled their recurring and one-time subscriptions starting from July 1st. In this case, the `target_date` should be specified as a date on or later than `2023-07-01`, and the invoice date can be specified as `2023-04-10`.

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl --request POST \
    --url https://rest.test.zuora.com/v2/bill_runs \
    --header 'Authorization: Bearer 9ebfa50a12ef4d77b3de8c2c17923250' \
    --header 'Content-Type: application/json' \
    --data '{
            "invoice_date": "2023-04-10",
              "target_date": "2023-07-01",
              "batches": "Batch1",
              "charges_excluded": "Usage"
  }'
  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  LocalDate invoiceDate = LocalDate.of(2023,4,10);
  LocalDate targetDate = LocalDate.of(2023,7,1);

  BillRunCreateRequest billRunRequest = new BillRunCreateRequest()
          .invoiceDate(invoiceDate)
          .targetDate(targetDate)
          .batches(Collections.singletonList("Batch1"))
          .chargesExcluded(Collections.singletonList("Usage"));

  BillRun billRun = zuoraClient.billRuns().createBillRun(billRunRequest);
  System.out.print(billRun);
  ```
  {% /tab %}
  {% tab label="Node" %}
  ```javascript {% title="Node" %}
  const billRunRequest = {
      invoice_date: '2023-04-10',
      target_date: '2023-07-01',
      batches: 'Batch1',
      charges_excluded: 'Usage',
  }

  const billRuns =  await zuoraClient.billRuns.createBillRun(billRunRequest);

  console.log(billRuns);
  ```
  {% /tab %}
{% /tabs %}

If the bill run request succeeds, you will get the following `201 Created` response:

```json
{
	"id": "8ad094b987554ccd018755d23115741f",
	"updated_by_id": "8ad09bce80507dab0180688bdabc20cb",
	"updated_time": "2023-04-06T02:07:31-07:00",
	"created_by_id": "8ad09bce80507dab0180688bdabc20cb",
	"created_time": "2023-04-06T02:07:31-07:00",
	"custom_fields": {},
	"custom_objects": {},
	"account_id": "",
	"email": false,
	"post": false,
	"renew": false,
	"day_of_month": "AllBillCycleDays",
	"bill_run_number": "BR-00000130",
	"bill_run_time": "",
	"invoice_date": "2023-04-10",
	"target_date": "2023-07-01",
	"state": "pending",
	"batches": "Batch1",
	"charges_excluded": "Usage",
	"email_zero_amount_invoices": true,
	"invoices_sent": false,
	"last_invoice_sent_time": "",
	"accounts_processed": 0,
	"invoices_generated": 0,
	"credit_memos_generated": 0
}
```

## View billing documents

The List and Retrieve operations of Invoice, Credit Memo, and Debit Memo are invoked when end subscribers want to view their billing documents or the details of a single billing document.

Use the following operations to view invoices, credit memos, or debit memos in your tenant:
- [List invoices](/other-api/quickstart-api/invoices/getinvoices)
- [List credit memos](/other-api/quickstart-api/credit-memos/getcreditmemos)
- [List debit memos](/other-api/quickstart-api/debit-memos/getdebitmemoes)

To further filter the results, specify the `filter[]` query parameter. For example, to list all posted invoices, you can set the `filter[]` parameter to `state.EQ:posted`. For the full list of filterable fields on each object, see [Expands, filter, fields, and sort](/docs/guides/expand-filter-fields-sort/).

### List invoices

The following example lists all invoices in your tenant:

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl --request GET \
        --url 'https://rest.test.zuora.com/v2/invoices' \
        --header 'Authorization: Bearer 406c9801b1cb4899a8dec61ed4fb5111' \
        --header 'Content-Type: application/json'
  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  InvoiceListResponse invoiceListResponse = zuoraClient.invoices().getinvoices(null,Collections.singletonList("account"),null);
  System.out.println(invoiceListResponse);
  ```
  {% /tab %}
  {% tab label="Node" %}
  ```javascript {% title="Node" %}
  const invoiceList = await zuoraClient.invoices.getInvoices(({
          filter: [
          'document_date.GT:2023-01-01'
          ]
    }));

  console.log(invoiceList);
  ```
  {% /tab %}
{% /tabs %}


### List credit memos

The following example lists all credit memos in your tenant:

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl --request GET \
        --url https://rest.test.zuora.com/v2/credit_memos \
        --header 'Authorization: Bearer e6f7611768fd4297aade3e9e68a56f8f' \
        --header 'Content-Type: application/json'
  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  CreditMemoListResponse creditMemoListResponse = zuoraClient.creditMemos().getCreditMemos(null,Collections.singletonList("account"),null);
  System.out.println(creditMemoListResponse);
  ```
  {% /tab %}
  {% tab label="Node" %}
  ```javascript {% title="Node" %}
  const creditMemoList = await zuoraClient.creditMemos.getCreditMemos(({
      filter: [
      'document_date.GT:2023-01-01'
      ]
  }));

  console.log(creditMemoList);
  ```
  {% /tab %}
{% /tabs %}


### List debit memos

The following example lists all debit memos in your tenant:

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl --request GET \
        --url https://rest.test.zuora.com/v2/debit_memos \
        --header 'Authorization: Bearer 5e8a3e540235449cb6615465411f445b' \
        --header 'Content-Type: application/json'
  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  DebitMemoListResponse debitMemoListResponse = zuoraClient.debitmemo().getDebitMemoes(null,Collections.singletonList("account"),null);
  System.out.println(debitMemoListResponse);
  ```
  {% /tab %}
  {% tab label="Node" %}
  ```javascript {% title="Node" %}
  const debitMemoList = await zuoraClient.debitMemos.getDebitMemoes(({
      filter: [
      'document_date.GT:2023-01-01'
      ]
  }));

  console.log(debitMemoList);
  ```
  {% /tab %}
{% /tabs %}

  {% /tabComponent %}
  {% tabComponent title="v1 API" %}

Suppose you are trying to generate two invoices at the same time.

In this guide, you will learn:
- How to create invoices
- How to post invoices
- How to create a credit memo from an invoice
- How to create a debit memo from an invoice

Note that to use this operation, you must have the "Create Standalone Invoice" and "Modify Invoice" user permissions. See [Billing Roles](https://docs.zuora.com?resourceId=platform-billing-roles) for more information.

As of Zuora Release 2022.03.R5, newly created standard Billing users have the “Create Standalone Invoice” permission enabled by default.


## Create invoices

*API Sample payload with curl*

```bash
curl --location --request POST 'https://rest.test.zuora.com/v1/invoices/batch' \
--header 'Authorization: Bearer 476c8614d7fe4aa78de9fbc20f49cea4' \
--header 'Content-Type: application/json' \
--data-raw '{
    "invoices": [
        {
            "accountId": "8a90876c84ae5ef70184c6c45f6f69fb",
            "autoPay": false,
            "comments": "comments",
            "invoiceDate": "2022-10-01",
            "invoiceItems": [
                {
                  "amount": 100,
                  "bookingReference": "bookingReference",
                  "chargeDate": "2022-10-01 00:00:00",
                  "description": "description",
                  "discountItems": [
                      {
                          "amount": -10,
                          "bookingReference": "discountBookingReference",
                          "chargeDate": "2022-10-01 11:00:00",
                          "chargeName": "discount",
                          "description": "description",
                          "sku": "SKU-0002",
                          "taxItems": [
                              {
                                  "exemptAmount": 0,
                                  "jurisdiction": "jurisdiction",
                                  "locationCode": "locationCode",
                                  "name": "country tax",
                                  "taxAmount": -1,
                                  "taxCode": "country tax code",
                                  "taxCodeDescription": "country tax code, tax rate 10%",
                                  "taxDate": "2022-10-01",
                                  "taxMode": "TaxExclusive",
                                  "taxRate": 0.1,
                                  "taxRateDescription": "country tax",
                                  "taxRateType": "Percentage"
                              }
                          ]
                      }
                  ],
                  "productRatePlanChargeId": "ff8080817cda56fa017cda87999d071b",
                  "purchaseOrderNumber": "PO-000303",
                  "quantity": 1,
                  "serviceEndDate": "2022-10-12",
                  "serviceStartDate": "2022-10-01",
                  "taxItems": [
                      {
                          "exemptAmount": 0,
                          "jurisdiction": "juristiction",
                          "locationCode": "locationCode",
                          "name": "country tax",
                          "taxAmount": 10,
                          "taxCode": "tax code",
                          "taxCodeDescription": "tax code description",
                          "taxDate": "2020-02-01",
                          "taxMode": "TaxExclusive",
                          "taxRate": 0.01,
                          "taxRateDescription": "tax rate description",
                          "taxRateType": "Percentage"
                      }
                  ]
              },
              {
                  "amount": 100,
                  "bookingReference": "bookingReference",
                  "chargeDate": "2022-10-01 00:00:00",
                  "chargeName": "charge name",
                  "description": "description",
                  "purchaseOrderNumber": "PO-000303",
                  "quantity": 1,
                  "serviceEndDate": "2022-10-12",
                  "serviceStartDate": "2022-10-01",
                  "sku": "sku-001",
                  "uom": "each"
              }
          ]
      },
      {
          "accountId": "8a90876c84ae5ef70184c6c45f6f69fb",
          "autoPay": false,
          "comments": "comments",
          "invoiceDate": "2022-10-01",
          "invoiceItems": [
              {
                  "amount": 100,
                  "bookingReference": "bookingReference",
                  "chargeDate": "2022-10-01 00:00:00",
                  "description": "description",
                  "productRatePlanChargeId": "ff8080817cda56fa017cda87999d071b",
                  "purchaseOrderNumber": "PO-000303",
                  "quantity": 1,
                  "serviceEndDate": "2022-10-12",
                  "serviceStartDate": "2022-10-01",
                  "taxItems": [
                      {
                          "exemptAmount": 0,
                          "jurisdiction": "juristiction",
                          "locationCode": "locationCode",
                          "name": "country tax",
                          "taxAmount": 10,
                          "taxCode": "tax code",
                          "taxCodeDescription": "tax code description",
                          "taxDate": "2022-10-01",
                          "taxMode": "TaxExclusive",
                          "taxRate": 0.01,
                          "taxRateDescription": "tax rate description",
                          "taxRateType": "Percentage"
                      }
                  ]
              },
              {
                  "amount": 100,
                  "bookingReference": "bookingReference",
                  "chargeDate": "2022-10-12 00:00:00",
                  "chargeName": "charge name",
                  "description": "description",
                  "purchaseOrderNumber": "PO-000303",
                  "quantity": 1,
                  "serviceEndDate": "2022-10-12",
                  "serviceStartDate": "2022-10-01",
                  "sku": "sku-001",
                  "uom": "each"
              }
          ]
        }
    ],
    "useSingleTransaction": false
}'
```

Note that this operation has the following limitations:

 - You can create a maximum of 50 invoices in one request.
 - You can create a maximum of 1,000 invoice items in one request.

## Post invoices


*API Sample payload with curl*

```bash
curl --location --request POST 'https://rest.test.zuora.com/v1/invoices/bulk-post' \
--header 'Authorization: Bearer 476c8614d7fe4aa78de9fbc20f49cea4' \
--header 'Content-Type: application/json' \
--data-raw '{
  "invoices": [
    {
      "id": "402890555a7e9791015a7f15fe440123",
      "invoiceDate": "2022-10-12"
    },
    {
      "id": "402890555a7e9791015a7f15fe44013a",
      "invoiceDate": "2022-10-12"
    }
  ]
}'
```

## Create a credit memo or a debit memo from an invoice

Credit memos reduce invoice and account balances. By applying one or more credit memos to invoices with positive balances, you can reduce the invoice balances in the same way that applying a payment to an invoice.

Debit memos increase the amount a customer owes. It is a separate document from the invoice. Debit memos can be used to correct undercharging on an invoice or to levy ad hoc charges outside the context of a subscription. Just like an invoice, debit memo balances can be settled by applying either a payment or a credit memo.

This step might be useful when you find there should be some adjustments for the invoice amount.

### Create a credit memo from an invoice

*API Sample payload with curl*

```bash
curl --location --request POST 'https://rest.test.zuora.com/v1/invoices/402890555a7e9791015a7f15fe440123/creditmemos' \
--header 'Authorization: Bearer 476c8614d7fe4aa78de9fbc20f49cea4' \
--header 'Content-Type: application/json' \
--data-raw '{
  "autoApplyToInvoiceUponPosting": false,
  "autoPost": false,
  "comment": "the comment",
  "effectiveDate": "2022-10-12",
  "excludeFromAutoApplyRules": false,
  "items": [
    {
      "amount": 1,
      "comment": "This is comment!",
      "invoiceItemId": "4028905558b483220158b48983dd0015",
      "quantity": 1,
      "serviceEndDate": "2022-10-12",
      "serviceStartDate": "2022-10-01",
      "skuName": "sku-001",
      "taxItems": [
        {
          "amount": 0.01,
          "jurisdiction": "CALIFORNIA",
          "locationCode": "06",
          "sourceTaxItemId": "4028905558b483220158b48983150010",
          "taxCode": null,
          "taxCodeDescription": "This is tax code description!",
          "taxDate": "2022-10-01",
          "taxExemptAmount": 0,
          "taxName": "STATE TAX",
          "taxRate": 0.0625,
          "taxRateDescription": "This is tax rate description!",
          "taxRateType": "Percentage"
        }
      ],
      "taxMode": "TaxExclusive",
      "unitOfMeasure": "Test_UOM"
    }
  ],
  "reasonCode": "Write-off"
}'
```

### Create a debit memo from an invoice

*API Sample payload with curl*

```bash
curl --location --request POST 'https://rest.test.zuora.com/v1/invoices/402890555a7e9791015a7f15fe440123/debitmemos' \
--header 'Authorization: Bearer 476c8614d7fe4aa78de9fbc20f49cea4' \
--header 'Content-Type: application/json' \
--data-raw '{
  "autoPay": true,
  "comment": "the comment",
  "effectiveDate": "2017-11-30",
  "items": [
    {
      "amount": 1,
      "comment": "This is comment!",
      "invoiceItemId": "402890555a7d4022015a7dadb3b700a6",
      "quantity": 1,
      "serviceEndDate": "2017-11-30",
      "serviceStartDate": "2017-11-01",
      "skuName": "SKU-30",
      "taxItems": [
        {
          "amount": 0.01,
          "jurisdiction": "CALIFORNIA",
          "locationCode": "06",
          "sourceTaxItemId": "402890555a7d4022015a7dadb39b00a1",
          "taxCode": null,
          "taxCodeDescription": null,
          "taxDate": "2017-11-30",
          "taxExemptAmount": 0,
          "taxName": "STATE TAX",
          "taxRate": 0.0625,
          "taxRateDescription": "This is tax rate description!",
          "taxRateType": "Percentage"
        }
      ],
      "taxMode": "TaxExclusive",
      "unitOfMeasure": "Test_UOM"
    }
  ],
  "reasonCode": "Charge Dispute"
}'
```

## Verify the result

After the above order actions are done, you can verify the result in the Zuora UI or through the GET API operations for the Invoices/Credit Memos/Debit Memos.

You can search the invoices by ID at the All Invoices page by navigating to **Billing** > **Invoices** in the Zuora UI.

You can also search the credit memo and debit memo by ID at the All Credit Memos or All Debit Memos page by navigating to **Billing** > **Credit and Debit Memos** in the Zuora UI.


  {% /tabComponent %}

{% /tabsComponent %}
