---
seo:
  title: Basics of customer accounts, invoicing, and payments
---

# Basics of customer accounts, invoicing, and payments

This guide covers the basics of creating a customer account, generating an invoice, and applying a payment using Zuora's API. Ensure you've completed the "Get Started" section to authenticate with Zuora. This tutorial is part of the Essential Skills Path.

**Note**: This tutorial covers basic billing without recurring charges. For subscription billing, refer to the [advanced tutorials](/docs/get-started/tutorials/).

<p>
<strong>Estimated time to complete</strong>: 45 minutes
</p>

## Skills you will learn

In this tutorial you will learn:

* How to create a Zuora Billing customer account.
* How to raise or create an invoice.
* How to record a payment and apply the payment to the invoice.


## Prerequisites

Ensure that you have met the following requirements:

* You have a Zuora Billing sandbox tenant, and have created an OAuth client ID and secret.
* Know how to [create an OAuth token](/v1-api-reference/api/oauth/createtoken) using your client ID and secret. Remember that each token is valid for an hour.
* You have completed the [Get Started](/docs/get-started/introduction/) tutorial. Use the correct base URL for your assigned data center and environment. To confirm your base URL, compare your tenant URL with the **Tenant UI Login** entries in the [Data Center documentation](https://docs.zuora.com?resourceId=zuora-data-centers), and use the base URL in the **REST API** entry for the same environment when calling our REST API or use the corresponding **SDK enum value** when using our client libraries.

A Postman Collection is available for each of the API calls in this tutorial to use at your convenience. You can download the collection through <a href="/postman-collection/zuora_basics_tutorial_collection.json" title="Download" download>this link</a> and import into your Postman workspace. Check the video below for detailed walkthrough of how to import and run the collection.

<iframe width="800" height="500" src="https://share.vidyard.com/watch/uWNJBQzUuyYah6NaLHphSb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Tutorial


This tutorial assumes you are using either the [v1 API](/v1-api-reference/introduction/) or the [v3 or higher Zuora client libraries](/docs/guides/libraries/).


The samples in this guide use a Developer or Central Sandbox in one of our North American Data Centers. Use the correct base URL for your assigned data center and environment.


### Create a customer account

You'll start by capturing essential customer information. This example keeps it simple:

* **Auto-Pay**: Set to `false` to prevent automated payments being triggered by this tutorial.
* **BillCycleDay**: Use `0` to allow Zuora to assign the default billing day when the first invoice is created.
* **BillToContact**: Minimal details are used here. For real implementations, capture a full address for taxation purposes.

We're only [creating an account](/v1-api-reference/api/accounts/post_account) here and not attempting to save an order or create a subscription. We'll use the [Create an account](/v1-api-reference/api/accounts/post_account) operation or its SDK equivalent. There are other operations where you can create a billing account as part of some larger transaction such as placing an order or creating a subscription.

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl --request POST \
    --url https://rest.test.zuora.com/v1/accounts \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer {your_token}' \
    --data '{
        "autoPay": false,
        "billCycleDay": 0,
        "currency": "USD",
        "name": "Curl Account for Amy",
        "billToContact": {
          "country": "United States",
          "firstName": "Amy",
          "lastName": "Lawrence",
          "state": "CA"
        }
      }'
  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  // Create a billing contact
  CreateAccountContact contact = new CreateAccountContact()
          .firstName("Amy")
          .lastName("Lawrence")
          .state("CA")
          .country("United States");

  CreateAccountRequest request = new CreateAccountRequest()
          .name("Java Account for Amy")
          .billToContact(contact)
          .billCycleDay(0)
          .currency("USD")
          .autoPay(false);

  // Create an account
  CreateAccountResponse account = zuoraClient.accountsApi().createAccountApi(request).execute();
  System.out.println("Account is created. Number: " + account.getAccountNumber());
  ```
  {% /tab %}
  {% tab label="Node.js" %}
  ```javascript {% title="Node.js" %}
  const accountsApi = zuoraClient.accountsApi;

  // Create contact and account request
  const contact = {
    firstName: "Amy",
    lastName: "Lawrence",
    state: 'CA',
    country: 'USA'
  };

  const accountRequest = {
    billToContact: contact,
    currency: 'USD',
    name: 'Node Account For Amy',
    autoPay: false,
    billCycleDay: 0,
  };

  // Create the account using the AccountsApi
  const resp = await accountsApi.createAccount(accountRequest);
  console.log("Account created successfully:", JSON.stringify(resp, null, 2));
  console.log("Account Number:", resp.accountNumber);
  ```
  {% /tab %}
  {% tab label="Python" %}
  ```python {% title="Python" %}
  try:
    account = client.accounts_api().create_account(
        zclient.CreateAccountRequest(**{
            'name': 'Python Account For Amy',
            'bill_to_contact': zclient.CreateAccountContact(**{
                'firstName': 'Amy',
                'lastName': 'Lawrence',
                'state': 'California',
                'country': 'USA'
            }),
            'auto_pay': False,
            'currency': 'USD',
            'bill_cycle_day': '0'
        }))

    print(f"Account Number: {account.account_number} created!")
  except Exception as e:
      print("Exception: %s\n" % e)

  ```
  {% /tab %}
  {% tab label="C#" %}
  ```csharp {% title="C#" %}
  CreateAccountContact contact = new CreateAccountContact
  (
      firstName: "Amy",
      lastName: "Lawrence",
      country: "USA",
      state: "California"
  );

  CreateAccountRequest createAccountRequest = new CreateAccountRequest
  (
      name: "Amy Lawrence's account",
      billToContact: contact,
      billCycleDay: 30,
      soldToSameAsBillTo: true,
      autoPay: false,
      currency: "USD"
  );

  // Create the account using the CreateAccount() method of the AccountsApi;
  // You can alternatively use the CreateAccountAsync() method if you want to make the call asynchronously;
  CreateAccountResponse account = zuoraClient.AccountsApi.CreateAccount(createAccountRequest);

  Console.WriteLine(account.ToJson());
  ```
  {% /tab %}
{% /tabs %}


If the call succeeds, you should see an Account Number being returned in the response. Since we didn't specify an account number, Zuora automatically created a unique one. Account numbers must be unique, and you can specify one if you want.

If you log onto the Zuora UI, you can find your new account. You'll see a large collection of fields that have default values populated since we didn't specify a value when we created this new account.

The important Account fields that we haven't discussed include:

* **Account Name** - Names like 'Amy Lawrence', 'ACME Inc', and so on. You can pick the name but one must always be specified.
* **Currency** - Default currency for the account, for example, USD, CAD, or EUR.
* **Payment Term** - How long does your customer have to pay their invoice before it's deemed overdue. `Net 30` is the default value, but you can [configurable your own payment terms](https://docs.zuora.com?resourceId=billing-define-payment-terms).


### Create an invoice

To create an invoice you'll need the `accountNumber` from the account creation response in the previous section. For simplicity, this tutorial uses a fixed charge of $100.

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl -i -X POST \
    https://rest.test.zuora.com/v1/invoices \
    -H 'Authorization: Bearer {your_token}' \
    -H 'Content-Type: application/json' \
    -d '{
          "invoiceDate": "2024-10-30",
          "accountNumber": "A00024855",
          "autoPay": false,
          "status": "Posted",
          "invoiceItems": [
            {
              "amount": 100.0,
              "chargeName": "Standalone Invoice Item for $100",
              "serviceStartDate": "2024-10-30"
            }]
      }'
  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  // Create an invoice item
  CreateInvoiceItem invoiceItem1 = new CreateInvoiceItem()
          .amount(new BigDecimal(100))
          .chargeName("Standalone Invoice Item for $100")
          .serviceStartDate(LocalDate.of(2024,10,30));

  List<CreateInvoiceItem> invoiceItems = new ArrayList<>();
  invoiceItems.add(invoiceItem1);

  // Create an invoice request payload
  CreateInvoiceRequest request = new CreateInvoiceRequest()
          .invoiceDate(LocalDate.of(2024,10,30))
          .accountNumber(account.getAccountNumber())
          .autoPay(false)
          .status(BillingDocumentStatus.POSTED)
          .invoiceItems(invoiceItems);

  // Create the standalone invoice
  // You can alternatively use the createStandaloneInvoiceAsync() method if you want to make the call asynchronously
  InvoiceResponse invoice = zuoraClient.invoicesApi().createStandaloneInvoiceApi(request).execute();
  System.out.println("Invoice is created. ID: " + invoice.getId());
  System.out.println("Number: " + invoice.getInvoiceNumber());
  ```
  {% /tab %}
  {% tab label="Node.js" %}
  ```javascript {% title="Node.js" %}
  // Access the InvoicesApi
  const invoicesApi = zuoraClient.invoicesApi;

  const invoiceRequest = {
      invoiceDate: "2024-10-30",
      accountNumber: accountNumber,
      autoPay: false,
      invoiceItems: [{amount: 100.0,
        chargeName: "Standalone Invoice Item for $100",
        serviceStartDate: "2024-10-30"}]
  }

  // Create the standalone invoice
  const invoiceResponse = await invoicesApi.createStandaloneInvoice(invoiceRequest);
  console.log("Invoice created successfully:", JSON.stringify(invoiceResponse, null, 2));
  const invoiceNumber = invoiceResponse.invoiceNumber;
  const invoiceId = invoiceResponse.id;

  ```
  {% /tab %}
  {% tab label="Python" %}
  ```python {% title="Python" %}
  try:
    invoice = client.invoices_api().create_standalone_invoice(
          zclient.CreateInvoiceRequest(**{
            'account_number': account.account_number,
            'auto_pay': False,
            'invoice_date': '2024-10-30',
            'invoice_items': [zclient.CreateInvoiceItem(**{
                'amount': 100.0,
                'charge_name': 'Set Up Fee',
                'description': 'Setting you up',
                'quantity': 1.0,
                'service_start_date': '2024-01-01',
                'uom': 'Each'
            })],
            'status': 'Posted'}))
    print(f"Invoice {invoice.invoice_number} created with a balance of {invoice.balance:<5.2f}")
  except Exception as e:
      print("Exception: %s\n" % e)
  ```
  {% /tab %}
  {% tab label="C#" %}
  ```csharp {% title="C#" %}
  CreateInvoiceItem invoiceItem = new CreateInvoiceItem
  (
      amount: 100,
      chargeName:"Standalone Invoice Item for $100",
      serviceStartDate: DateOnly.FromDateTime(DateTime.Today)
  );

  CreateInvoiceRequest invoiceRequest = new CreateInvoiceRequest
  (
      invoiceDate: DateOnly.Parse("2024-10-30"),
      accountNumber: "A00024855",
      autoPay: false,
      status: BillingDocumentStatus.Posted,
      invoiceItems: [invoiceItem]
  );

  // Create the standalone invoice using the CreateStandaloneInvoice() method of the InvoicesApi
  // You can alternatively use the CreateStandaloneInvoiceAsync() method if you want to make the call asynchronously
  InvoiceResponse invoice = zuoraClient.InvoicesApi().createStandaloneInvoice(invoiceRequest);

  Console.WriteLine(invoice.ToJson());
  ```
  {% /tab %}
{% /tabs %}

Logging into the Zuora UI, you can search the returned invoice number, then you can see the created invoice.

Note that it is not how most invoices in Zuora are created. In most cases, a customer's order will capture the items in the product catalog the customer wants along with any relevant quantities and pricing information. Once the order is captured in Zuora Billing, an initial invoice is automatically generated. Zuora Billing will then auto-generate invoices on a monthly or other billing period basis.

### Create and apply a payment

Assuming that you received a check payment for $100, this step shows how to apply the payment to the invoice created earlier. You’ll need the `accountNumber` and `invoiceId` from previous steps.

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl -i -X POST \
    https://rest.test.zuora.com/v1/payments \
    -H 'Authorization: Bearer {your_token}' \
    -H 'Content-Type: application/json' \
    -d '{
          "accountNumber": "A00024855",
          "type": "External",
          "paymentMethodType": "Check",
          "amount": 100,
          "currency": "USD",
          "invoices":
            [{
              "amount": 100.0,
              "invoiceId": "8ad0970492555ff4019259fc46b93c14"
            }]
      }'
  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  CreatePaymentInvoiceApplication invoice1 = new CreatePaymentInvoiceApplication()
          .amount(100.0)
          .invoiceId(invoice.getId());

  List<CreatePaymentInvoiceApplication> invoices = new ArrayList<>();
  invoices.add(invoice1);

  CreatePaymentRequest request = new CreatePaymentRequest()
          .accountNumber(account.getAccountNumber())
          .type(PaymentType.EXTERNAL)
          .paymentMethodType("Check")
          .amount(100.0)
          .currency("USD")
          .invoices(invoices);

  PaymentResponse payment = zuoraClient.paymentsApi().createPaymentApi(request).execute();
  System.out.println("Payment is created. ID: " + payment.getId());
  System.out.println("Number: " + payment.getNumber());
  ```
  {% /tab %}
  {% tab label="Node.js" %}
  ```javascript {% title="Node.js" %}
  const paymentsApi = zuoraClient.paymentsApi;
  const paymentRequest = {
      accountNumber: accountNumber,
      type: "External",
      paymentMethodType: "Check",
      amount: 100,
      currency: "USD",
      invoices: [{amount: 100.0, invoiceId: invoiceId}]
  }

  // Create the payment and apply to the invoice
  const paymentResponse = await paymentsApi.createPayment(paymentRequest);
  console.log("Payment created successfully:", JSON.stringify(paymentResponse, null, 2));

  ```
  {% /tab %}
  {% tab label="Python" %}
  ```python {% title="Python" %}
  try:
    payment = client.payments_api().create_payment(
        zclient.CreatePaymentRequest(**{
            'account_number': account.account_number,
            'amount': 100.0,
            'currency': 'USD',
            'effective_date': '2024-11-30',
            'type': 'External',
            'payment_method_type': 'Check',
            'invoices': [zclient.CreatePaymentInvoiceApplication(**{
                'amount': 100.0,
                'invoice_id': invoice.id
            })]
        }))
    print(f"Payment created: {payment.number}")
  except ApiException as e:
      error_details = json.loads(e.body)
      error_code = error_details["reasons"][0]["code"]
      error_msg = error_details["reasons"][0]["message"]
      print(f"Error: {error_code} : {error_msg}")
  ```
  {% /tab %}
  {% tab label="C#" %}
  ```csharp {% title="C#" %}
  CreatePaymentInvoiceApplication invoiceApplication = new CreatePaymentInvoiceApplication
  (
      amount: 100,
      invoiceId: "8ad099b89444c565019444d7cd9f1501"
  );

  CreatePaymentRequest paymentRequest = new CreatePaymentRequest
  (
      currency: "USD",
      accountNumber: "A00024855",
      type: PaymentType.External,
      amount: 100.00,
      paymentMethodType: "Check",
      invoices: [invoiceApplication]
  );

  // Create the payment and apply to the invoice using the CreatePayment() method of the PaymentsApi
  // You can alternatively use the CreatePaymentAsync() method if you want to make the call asynchronously
  PaymentResponse payment = zuoraClient.PaymentsApi.CreatePayment(paymentRequest);

  Console.WriteLine(payment.ToJson());
  ```
  {% /tab %}
{% /tabs %}


### Generate an error

In case you want to see what an API error looks like, run the "Create a payment" exercise a second time. Zuora will return errors when the request cannot be successfully processed, such as applying a second payment to an invoice that has already been paid and has a zero balance. To learn more about errors that might be returned and how to handle them, check the [Error codes](/docs/guides/error-codes/) article.

## Troubleshooting

* If you're getting an "invalid login" or other authentication errors, it's likely that you're trying to connect to the wrong tenant. The correct base URL depends on your assigned data center and environment. To confirm if you're using the correct URL, check the [Data Center documentation](https://docs.zuora.com?resourceId=zuora-data-centers).

* If you get an error indicating you don't have the authority to create a customer account, invoice, or payment, discuss it with your company's Zuora administrator. If you're an administrator, review your user roles and uplevel them as needed.


## Summary

Congratulations! Now you have:

* Created a billing account for a new customer.
* Raised an invoice for $100 for the customer.
* Applied a $100 check payment to that invoice.
* Optionally you have verified the invoice has been paid and even deliberately generated a business error.

If you cannot resolve the encountered errors, submit a request at <a href="https://support.zuora.com/" target="_blank">Zuora Global Support</a>.

By following our tutorial, you're headed on a journey to where billing and payment collection will be highly automated. Zuora customers use our bill run features to generate millions of invoices each day and our payment run features to easily collect payments on those invoices.


## Additional resources

Supplemental materials for your consideration:

* Zuora University modules:
  - [Introduction to Zuora](https://university.zuora.com/series/courses-by-topic/introduction-to-zuora-1)
  - [Zuora's Object Model](https://university.zuora.com/series/courses-by-topic/zuoras-object-model)
  - [Standard Zuora Architecture](https://university.zuora.com/series/courses-by-topic/standard-zuora-architecture)
  - [Basics of Customer Accounts](https://university.zuora.com/series/courses-by-topic/isk-5-basics-of-customer-accounts).

  While you need to register, all of these self paced modules are free for you to consume. Check to see if your organization purchased a Zuora University seat, which provides access to live, instructor led, training and the option to become officially certified.

* Knowledge Center documentation: [Manage customer accounts in the Zuora UI](https://docs.zuora.com?resourceId=billing-cusomer-accounts-management)

* Our REST API documentation:
  * [Create an account](/v1-api-reference/api/accounts/post_account)
  * [Create an invoice](/v1-api-reference/api/invoices/post_standaloneinvoice)
  * [Create a payment](/v1-api-reference/api/payments/post_createpayment)


## Next Steps

* In case you haven't created product catalog items, follow [this tutorial](/docs/get-started/tutorials/set-up-products/) on setting up one.
* Review the [Billing FAQ](/faq/billing-faq/) and the [Payments FAQ](/faq/payments-faq/). A lot of questions are answered there.
* [Preview a customer order](/docs/get-started/tutorials/preview-order/)
* [Embed a payment form in your website](/docs/get-started/tutorials/collect-payments/)
* [Place a subscription order, generate an invoice and collect payment](/docs/get-started/tutorials/create-orders/)


## Quiz

1. **The account name is optional, you only have to specify an account number.** - True or false?

  <details>
  <summary>Check answer</summary>

  False. An account name must be specified, account number can be specified but is optional, Zuora will then create a unique one automatically if you don't specify your own.

  </details>

2. **Invoices must be generated each month using my custom code.** - True or false?

  <details>
  <summary>Check answer</summary>

   <p>False. Usually invoices will be generated automatically both when an order is placed. If the order contains recurring charges then invoices will be generated automatically each billing period.</p>

  </details>

3. **Zuora supports multiple payment terms.** - True or false?

  <details>
  <summary>Check answer</summary>

  <p> True. You can specify the payment terms your business uses as well as set a default. Check <a href="https://docs.zuora.com?resourceId=billing-define-payment-terms" target="_blank">Define payment terms</a>. After the payment term passes, the invoice is marked overdue. </p>

  </details>
