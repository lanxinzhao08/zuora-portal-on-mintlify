---
title: "Manage payment methods and payments"
---
You can create a payment method using the "Create a payment method" operation. However, to guarantee PCI-compliance, we recommend that you create payment methods using Zuora’s Payment Pages 2.0 feature.

Zuora’s Payment Pages allow end subscribers to send payment method details to your company in a secure and PCI-compliant manner. The payment page is hosted in Zuora and iframed directly onto your company’s website.

Payment Pages are usually embedded into the customer acquisition flow and shown to the end subscribers prior to an order submission. When the payment method details have been captured in Zuora, subsequent payments can be processed through that payment method.

The following diagram shows the default workflow of Zuora Payment Pages:


![Payment Pages 2.0 flow](/static/HPM2workflow.jpeg)


For more information, see <a href="https://docs.zuora.com?resourceId=payments-paymentpages2.0-implementation-overview" target="_blank">Payment Pages 2.0 implementation overview</a>.

<Tabs>
  <Tab title="Quickstart API">


## Create payment methods

Suppose that you want to create a credit card payment method for your customer's account (`account_id`= `8ad093d07ae636bb017ae97518762aa3`) and this card needs to be the default payment method on this account. You must configure the following fields:

- `type`: Set this field to `card`.
- `card`: Provide the credit card information as appropriate. The following fields are mandatory:
  - `card_number`
  - `brand`
  - `expiry_month`
  - `expiry_year`
- `account_id`: Set this field to `8ad093d07ae636bb017ae97518762aa3`, the unique identifier of this account.

<Tabs>
  <Tab title="cURL">

  ```bash cURL
  curl --request POST \
    --url https://rest.test.zuora.com/v2/payment_methods \
    --header 'Authorization: Bearer 723aa66a78384cb69ddb067fc448a776' \
    --header 'Content-Type: application/json' \
    --data '{
    "type": "card",
    "billing_details": {
      "name": "Amy Lawrence",
      "address": {
        "line1": "Apt 101, 123 Street",
        "city": "Atlanta",
        "state": "Georgia",
        "country": "USA"
      }
    },
    "card": {
      "card_number": "41111111111",
      "brand": "visa",
      "expiry_month": 11,
      "expiry_year": 2025,
      "security_code": "123"
    },
    "is_default": true,
    "account_id": "8ad093d07ae636bb017ae97518762aa3"
  }'
  ```
  </Tab>
  <Tab title="Java">
  ```java Java
  Card cardInfo = new Card()
            .cardNumber("41111111111")
            .brand(Card.BrandEnum.VISA)
            .expiryMonth(new BigDecimal(11))
            .expiryYear(new BigDecimal(2025))
            .securityCode("123");

  AddressFieldDefinitions addressInfo = new AddressFieldDefinitions()
          .line1("Apt 101, 123 Street")
          .city("Atlanta")
          .state("Georgia")
          .country("USA");

  BillingDetails billingDetails = new BillingDetails()
          .name("Amy Lawrence")
          .address(addressInfo);

  PaymentMethodCreateRequest paymentMethodInfo = new PaymentMethodCreateRequest()
          .type(PaymentMethodCreateRequest.TypeEnum.CARD)
          .accountId("8ad093d07ae636bb017ae97518762aa3")
          .isDefault(true)
          .card(cardInfo)
          .billingDetails(billingDetails);

  PaymentMethod createdPaymentMethod = zuoraClient.paymentMethods().createPaymentMethod(paymentMethodInfo);

  System.out.print(createdPaymentMethod);
  ```
  </Tab>
  <Tab title="Node">
  ```javascript Node
  const cardInfo = {
    card_number: '41111111111',
    brand: 'visa',
    expiry_month: 11,
    expiry_year: 2025,
    security_code: '123'
  };

  const billingDetails = {
    name: 'Amy Lawrence',
    address:{
        line1: 'Apt 101, 123 Street',
        city: 'Atlanta',
        state: 'Georgia',
        country: 'USA',
    }
  };

  const paymentMethodInfo = {
    card: cardInfo,
    billing_details: billingDetails,
    type: 'card',
    is_default: true,
    account_id: '8ad093d07ae636bb017ae97518762aa3',
  }

  const creditCardRequest = await zuoraClient.paymentMethods.createPaymentMethod(paymentMethodInfo);

  console.log(creditCardRequest);

  ```
  </Tab>
</Tabs>

## Create payment runs

After invoices have been created in the bill run, they are ready to collect payments. This is where payment runs come in: they are used to collect cash from your customers.

Suppose that you have created an ad hoc bill run (id=`8ad094b98736ff1f01874b6f2f307eae`) for a batch of your customers (`Batch1`), you can create a payment run for this batch to collect payment. In addition, you want to apply credit memos to their invoices before using their default payment methods.

```bash cURL
curl --request POST \
  --url https://rest.test.zuora.com/v2/payment_runs \
  --header 'Authorization: Bearer ac8a7ba092414c9c96c7243699ee6a6b' \
  --header 'Content-Type: application/json' \
  --data '{
	"apply_credit_memos": true,
	"target_date": "2023-04-01",
	"batch": "Batch1",
  	"bill_run_id": "8ad094b98736ff1f01874b6f2f307eae"

}'
```

If the payment run request succeeds, you will get the following `201 Created` response:

```json
{
	"id": "8ad09e2087554ccb018755d12c7d4f62",
	"created_by_id": "8ad09bce80507dab0180688bdabc20cb",
	"created_time": "2023-04-06T02:06:24-07:00",
	"custom_fields": {},
	"custom_objects": {},
	"apply_credit_memos": true,
	"batch": "Batch1",
	"bill_run_id": "BR-00000128",
	"state_transitions": {},
	"payment_gateway_id": "",
	"payment_run_number": "PR-00000033",
	"payment_run_date": "2023-04-01",
	"target_date": "2023-04-01",
	"state": "pending"
}
```

## Create payments

The Payment object holds all of the information about a payment, including the payment amount and to which billing documents the payment is applied.

The following code sample creates a payment to the invoice created for your customer account, Amy Lawrence (`account_id=2c92c0f96abc17de016abd62bd0c5854`), using the payment method (`payment_method_id=8f64d4d7b1b989f6c571d931f84e0458`) associated with this account.

<Tabs>
  <Tab title="cURL">

  ```bash cURL
  curl -X POST "https://rest.test.zuora.com/v2/payments"
  -H "Authorization: Bearer 6d151216ef504f65b8ff6e9e9e8356d3"
  -H "Content-Type: application/json"
  -d '{
    "account_id": "2c92c0f96abc17de016abd62bd0c5854",
      "billing_documents": [{
      "id": "8ad093f27f54fa8d017f6b191ff02543",
      "amount": 50,
      "type": "invoice"
      }],
      "amount": 50,
      "currency": "USD",
      "payment_date": "2022-03-08",
      "payment_method_id": "8f64d4d7b1b989f6c571d931f84e0458",
      "external": true
  }'
  ```
  </Tab>
  <Tab title="Java">
  ```java Java
  LocalDate date = LocalDate.of(2022,3,8);

  BillingDocumentApplicationRequest invoiceApplicationRequest = new BillingDocumentApplicationRequest()
      .amount(new BigDecimal(30))
      .type(BillingDocumentApplicationRequest.TypeEnum.INVOICE)
      .id("8ad093f27f54fa8d017f6b191ff02543");

  PaymentCreateRequest paymentCreateRequest = new PaymentCreateRequest()
      .accountId("2c92c0f96abc17de016abd62bd0c5854")
      .amount(new BigDecimal(50))
      .paymentDate(date)
      .paymentMethodId("8f64d4d7b1b989f6c571d931f84e0458")
      .external(true)
      .currency("USD")
      .billingDocuments(Collections.singletonList(invoiceApplicationRequest));

  Payment newPayment = zuoraClient.payments().createPayment(paymentCreateRequest);
  ```
  </Tab>
  <Tab title="Node">
  ```javascript Node
  const invoiceApplicationRequest = {
      amount: 30,
      type: 'invoice',
      id: '8ad093f27f54fa8d017f6b191ff02543',
  };

  const paymentCreateRequest = {
      account_id: '2c92c0f96abc17de016abd62bd0c5854',
      amount: 50,
      payment_date: '2022-03-08',
      payment_method_id: '8f64d4d7b1b989f6c571d931f84e0458',
      external: true,
      currency: 'USD',
      billing_documents: [invoiceApplicationRequest]
  };

  const newPayment = await zuoraClient.payments.createPayment(paymentCreateRequest);
  ```
  </Tab>
</Tabs>

## Create refunds

In Zuora, you can refund fully or partially unapplied payments to your end subscribers by refunding from payment.

When you issue a refund, the `amount` field is required, which represents the total amount of the refund.

The total amount of the refund cannot exceed the unapplied amount of the associated payment. If you want to refund the applied amount of the associated payment, you must first unapply the applied amount from the billing documents, and then refund the unapplied amount to your end subscribers.

The `external` filed indicates whether this refund is an external refund or an electronic refund. External refunds are performed outside of Zuora and electronic refunds are issued by using supported payment gateways.

If the refund type is electronic, you cannot specify the refund date because the electronic refund will automatically refund money to the end subscriber’s credit card.

The following example uses the [Create a refund](/other-api/quickstart-api/refunds/createrefund) operation to refund part of the unapplied amount ($10) from the payment:

<Tabs>
  <Tab title="cURL">

  ```bash cURL
  curl -X POST "https://rest.test.zuora.com/v2/refunds"
      -H "Authorization: Bearer 6d151216ef504f65b8ff6e9e9e8356d3"
      -H "Content-Type: application/json"
      -d '{
              "account_id": "8ad09b7d8292b85d0182a4d6f875225a",
              "payment_id": "8ad0887e82d94f5d0182d967a49c1a63",
              "amount": 10,
              "external": false
            }'
  ```
  </Tab>
  <Tab title="Java">
  ```java Java
  String accountId = "8ad09b7d8292b85d0182a4d6f875225a";
  String paymentId = newPayment.getId();

  RefundCreateRequest refundRequest = new RefundCreateRequest()
      .amount(new BigDecimal(10))
      .accountId(accountId)
      .paymentId(paymentId)
      .external(false);

  Refund refund = zuoraClient.refunds().createRefund(refundRequest);
  ```
  </Tab>
  <Tab title="Node">
  ```javascript Node
  const refundRequest = {
      amount: 10,
      account_id: '8ad09b7d8292b85d0182a4d6f875225a',
      payment_id: '8ad0887e82d94f5d0182d967a49c1a63',
      external: false
  };

  const refund = await zuoraClient.refunds.createRefund(refundRequest);
```
  </Tab>
</Tabs>

  </Tab>
  <Tab title="v1 API">

In this guide, you will learn:
- How to create a credit card payment method
- How to create a payment

## Create Payment Methods

Zuora supports a variety of payment methods. End subscribers sometimes find the default payment methods they already have could not be used and want to add a new payment method to complete the order. The new payment method is expected to be set up and associated with their account directly.

**Note**: Zuora’s Payment Pages 2.0 allow subscribers to send payment details to your company in a secure and PCI-compliant manner. Alternative to using the REST API, you can also consider integrating a hosted payment page to your portal. For more information about Payment Pages 2.0, see <a href="https://docs.zuora.com?resourceId=payments-paymentpage2.0-overview" target="_blank">Payment Pages 2.0</a>.


In order to make a valid request, ensure that you have the following information:
  - `cardHolderInfo` (`cardHolderName` required)
  - `cardNumber` (required)
  - `cardType` (required)
  - `expirationMonth` (required)
  - `expirationYear` (required)

### Create a credit card payment method

Use the [Create a payment method](/v1-api-reference/api/payment-methods/post_paymentmethods) operation to create a credit card payment method.

The following cURL code sample creates a Discover credit card with `securityCode` = `123`. This card will expire on October, 2023.

```bash
curl --location --request POST 'https://rest.test.zuora.com/v1/payment-methods' \
    --header 'Authorization: Bearer e05fd08c256b4dd78c0eca181208dd16' \
    --header 'Content-Type: application/json' \
    --data-raw '{
      "cardHolderInfo": {
        "addressLine1": "77 Fallon Glen",
        "addressLine2": "",
        "cardHolderName": "Leo",
        "city": "Fremont",
        "country": "USA",
        "email": "smith@example.com",
        "phone": "4155551234",
        "state": "California",
        "zipCode": "94020"
      },
      "cardNumber": "1111222233334444",
      "cardType": "Discover",
      "makeDefault": false,
      "expirationMonth": 10,
      "expirationYear": 2023,
      "securityCode": "123",
      "type": "CreditCard"
    }'
```
### Verify the result

After the payment method is created, you can verify the result in the Zuora UI or through the GET operations for the Payment Method object.

To verify the result through the Zuora UI, you can find the created payment method displayed at the top of the All Payment Methods page by navigating to **Payments** > **Payment methods** in the Zuora UI.

## Create Payments

The Payment object holds all of the information about a payment, including the payment amount and to which billing documents the payment is applied.

You can create a new payment to apply a payment to one or more invoices.

Suppose that you have the invoice numbers retrieved from the [Create billing documents step](/docs/get-started/tutorials/deprecated-billing-documents). You now want to create an external payment with a total amount of 44.1 USD. Both the debit memo amount and the invoice balance should be considered and paid.

**Note**: This operation is only available if you have Invoice Settlement enabled.

### Create a payment

The following cURL code sample creates a payment that applies $4.1 to a debit memo and $40 to an invoice. The ID of the payment method used for payment is `402881e522cf4f9b0122cf5dc4020045`. Custom exchange rates are also defined in the request.

```bash
curl --location --request POST 'https://rest.test.zuora.com/v1/payments' \
--header 'Authorization: Bearer 5b54ae5dce244c3cbb26e781dc27c703' \
--header 'Content-Type: application/json' \
--data-raw '{
  "accountId": "4028905f5a87c0ff015a87d25ae90025",
  "amount": 44.1,
  "comment": "normal payment",
  "currency": "USD",
  "customRates": [
    {
      "currency": "CAD",
      "customFxRate": 2.22,
      "rateDate": "2022-10-21"
    },
    {
      "currency": "EUR",
      "customFxRate": 1.5,
      "rateDate": "2022-10-21"
    }
  ],
  "debitMemos": [
    {
      "amount": 4.1,
      "debitMemoId": "4028905f5a87c0ff015a87e49e6b0062",
      "items": [
        {
          "amount": 4,
          "debitMemoItemId": "4028905f5a87c0ff015a87e49e7a0063"
        },
        {
          "amount": 0.1,
          "taxItemId": "4028905f5a87c0ff015a87e49f5e0065"
        }
      ]
    }
  ],
  "effectiveDate": "2022-12-01",
  "invoices": [
    {
      "amount": 40,
      "invoiceId": "4028905f5a87c0ff015a87d3f8f10043",
      "items": [
        {
          "amount": 39,
          "invoiceItemId": "4028905f5a87c0ff015a87d3f90c0045"
        },
        {
          "amount": 1,
          "taxItemId": "4028905f5a87c0ff015a87d3f884003f"
        }
      ]
    }
  ],
  "paymentMethodId": "402881e522cf4f9b0122cf5dc4020045",
  "type": "External"
}'
```

### Verify the result

After the payment is created, you can verify the result in the Zuora UI or through the GET API operations for the Payment object.

To verify the result through the Zuora UI, you can find the payment displayed at the top of the All Payments page by navigating to **Payments** > **Payments** in the Zuora UI.


  </Tab>

</Tabs>
