---
excludeFromSearch: true
markdown:
  toc:
    hide: true
redirects:
  /rest-api/api-guides/6-renew-suspend-resume-subscription/: {}
---

# Renew, suspend, or resume subscriptions

When a subscription expires or before it expires, you can renew the subscription.

If an end subscriber requests to suspend or pause a subscription, you can use the "Pause a subscription" operation to do it.

When a subscription is in the Suspended status, the only action you can take is to resume a suspended subscription with the "Resume a subscription" operation.

In this guide, you will learn:

- How to renew a subscription
- How to suspend a subscription
- How to resume a subscription

{% tabsComponent %}
  {% tabComponent title="Quickstart API" %}

## Renew a subscription

The [Update a subscription](/other-api/quickstart-api/subscriptions/patchsubscription) API operation allows you to renew a subscription that is about to expire.

Note that only termed subscriptions can be renewed.

The following code example renews the subscription (`id` = `8ad08f74803a5e3e01803f340e3c2148`) on 2023-01-01. The renewal term is 12 months.

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl -X PATCH "https://rest.test.zuora.com/v2/subscriptions/8ad08f74803a5e3e01803f340e3c2148"
    -H "Authorization: Bearer 6d151216ef504f65b8ff6e9e9e8356d3"
    -H "Content-Type: application/json"
    -d '{
          "description": "Renew a subscription",
          "renew":{
              "start_on": {
                  "contract_effective": "2023-01-01"
              }
            },
          "terms": {
              "renewal_term": {
                  "interval": "month",
                  "interval_count": 12,
                  "type": "termed"
              }
          }
        }'
  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  LocalDate renewStartDate = LocalDate.of(2023,1,1);
  String subscriptionId = createdSubscription.getId();

  SubscriptionTermPatchRequest renewalTerm = new SubscriptionTermPatchRequest()
      .renewalTerm(new Term()
          .type(Term.TypeEnum.TERMED)
          .interval(Term.IntervalEnum.MONTH)
          .intervalCount(12));

  SubscriptionRenewPatchRequest renewSubscriptionRequest = new SubscriptionRenewPatchRequest()
      .startOn((new StartOn()
          .contractEffective(renewStartDate)));

  SubscriptionPatchRequest updateRequest = new SubscriptionPatchRequest()
      .renew(renewSubscriptionRequest)
      .terms(renewalTerm)
      .description("Renew a subscription");

  Subscription updatedSubscription = zuoraClient.subscriptions().patchSubscription(subscriptionId,updateRequest);
  ```
  {% /tab %}
  {% tab label="Node" %}
  ```javascript {% title="Node" %}
  const renewRequest = {
    description: 'Renew a subscription',
    renew:{
      start_on: {
        contract_effective: '2023-01-01',
      }
    },
    terms: {
      renewal_term: {
        interval: 'month',
        interval_count: 12,
        type: 'termed',
      }
    }
  };

  const renewSubscription = await zuoraClient.subscriptions.patchSubscription('8ad092478455c5f3018460fd67d9444c',renewRequest);
  ```
  {% /tab %}
{% /tabs %}

## Suspend a subscription

If the end subscriber requests to suspend a subscription, you can use the [Pause a subscription](/other-api/quickstart-api/subscriptions/pausesubscription) operation to do it.

It is also required to specify the rules for pause a subscription. For example, the subscription can be paused on a specific date or after a certain number of periods from today.

- To pause a date on a certain date, specify `pause_date`.
- To pause a date at the end of the current billing period, specify the following fields:
  -  `pause_at`
  - `pause_interval`
  - `pause_interval_count`

You can optionally specify the `resume_behavior` field to define the behavior when the paused subscription resumes.

The following example pauses an active subscription for one month at the end of the current billing period. Subsequently, when the subscription is resumed, the subscription term is automatically extended by one month.

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl --request POST
      --url 'https://rest.test.zuora.com/v2/subscriptions/A-S00000035/pause'
      --header 'Authorization: Bearer 6d151216ef504f65b8ff6e9e9e8356d3'
      --header 'Content-Type: application/json'
      --data '{
                  "pause_at":"specific_period",
                  "pause_interval": "month",
                  "pause_interval_count": 1,
                  "resume_behavior": {
                      "extend_term": true
                  }
                }

  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  String subscriptionId = createdSubscription.getId();

  PauseSubscriptionRequest pauseRequest = new PauseSubscriptionRequest()
      .pauseAt(PauseSubscriptionRequest.PauseAtEnum.SPECIFIC_PERIOD)
      .pauseInterval(PauseSubscriptionRequest.PauseIntervalEnum.MONTH)
      .pauseIntervalCount(new BigDecimal(1))
      .resumeBehavior(new ResumeSubscriptionRequest().extendTerm(true));

  Subscription pausedSubscription = zuoraClient.subscriptions().pauseSubscription(subscriptionId, pauseRequest);
  ```
  {% /tab %}
  {% tab label="Node" %}
  ```javascript {% title="Node" %}
  const pausedSubscription = await zuoraClient.subscriptions.pauseSubscription('8ad095b8844282ff0184528d63f3242f',
      {
        pause_date: '2022-12-20',
        pause_interval_count: '1',
        pause_interval: 'month',
        resume_behavior: {
          extend_term: true,
        },
      }
  );
  ```
  {% /tab %}
{% /tabs %}

## Resume a subscription

When a subscription is in the Suspended status, the only action you can take is to resume a suspended subscription with the [Resume a subscription](/other-api/quickstart-api/subscriptions/resumesubscription) operation.

The resume date cannot be earlier than the suspend date and cannot be later than the subscription term end date.

The following example resumes the subscription that is suspended.

{% tabs %}
  {% tab label="cURL" %}

  ```bash {% title="cURL" %}
  curl --request POST
      --url 'https://rest.test.zuora.com/v2/subscriptions/8ad08f74803a5e3e01803f340e3c2148/resume'
      --header 'Authorization: Bearer 6d151216ef504f65b8ff6e9e9e8356d3'
      --header 'Content-Type: application/json'
      --data '{
                  "extend_term": true,
                  "resume_date": "2022-09-10"
              }'

  ```
  {% /tab %}
  {% tab label="Java" %}
  ```java {% title="Java" %}
  ResumeSubscriptionRequest resumeRequest = new ResumeSubscriptionRequest()
      .extendTerm(true)
      .resumeDate("2022-09-10");

  Subscription resumedSubscription = zuoraClient.subscriptions().resumeSubscription(pausedSubscription.getId(), resumeRequest);
  ```
  {% /tab %}
  {% tab label="Node" %}
  ```javascript {% title="Node" %}
  const resumedSubscription = await zuoraClient.subscriptions.resumeSubscription('8ad08ccf80efe77c0180f1f5f80d39c9',
      {
        extend_term: true,
        resume_date: '2022-09-10',
      }
  );
  ```
  {% /tab %}
{% /tabs %}

  {% /tabComponent %}
  {% tabComponent title="v1 API" %}


## Renew a subscription

The following cURL code sample renews the subscription A-S00000272 with a pre-configured renewal term.

Note that only termed subscriptions can be renewed.

```bash
curl --location --request POST 'https://rest.test.zuora.com/v1/orders' \
--header 'Authorization: Bearer 39cdc89ece8741fb97b8a2477622bc09' \
--header 'Content-Type: application/json' \
--data-raw '{
  "description": "Renew a subscription",
  "existingAccountNumber": "A00000521",
  "orderDate": "2024-01-01",
  "subscriptions": [
    {
      "orderActions": [
        {

          "triggerDates": [
            {
              "name": "ContractEffective",
              "triggerDate": "2024-01-01"
            },
            {
              "name": "ServiceActivation",
              "triggerDate": "2024-01-01"
            },
            {
              "name": "CustomerAcceptance",
              "triggerDate": "2024-01-01"
            }
          ],
          "type": "RenewSubscription"
        }
      ],
      "subscriptionNumber": "A-S00000272"
    }
  ]
}'
```

## Suspend a subscription

The following cURL code sample suspends the subscription A-S00000272 from 2024-01-01:

```bash
curl --location --request POST 'https://rest.test.zuora.com/v1/orders' \
--header 'Authorization: Bearer 39cdc89ece8741fb97b8a2477622bc09' \
--header 'Content-Type: application/json' \
--data-raw '{
  "description": "Suspend a subscription",
  "existingAccountNumber": "A00000521",
  "orderDate": "2024-01-01",
  "subscriptions": [
    {
      "orderActions": [
        {
          "suspend": {
            "suspendPolicy": "Today"
          },
          "triggerDates": [
            {
              "name": "ContractEffective",
              "triggerDate": "2024-01-01"
            },
            {
              "name": "ServiceActivation",
              "triggerDate": "2024-01-01"
            },
            {
              "name": "CustomerAcceptance",
              "triggerDate": "2024-01-01"
            }
          ],
          "type": "Suspend"
        }
      ],
      "subscriptionNumber": "A-S00000272"
    }
  ]
}'
```

## Resume a subscription

The following cURL code sample resumes the suspended subscription A-S00000272 from 2024-10-01:

```bash
curl --location --request POST 'https://rest.test.zuora.com/v1/orders' \
--header 'Authorization: Bearer 39cdc89ece8741fb97b8a2477622bc09' \
--header 'Content-Type: application/json' \
--data-raw '{
  "description": "Resume a subscription",
  "existingAccountNumber": "A00000521",
  "orderDate": "2024-01-01",
  "subscriptions": [
    {
      "orderActions": [
        {
          "resume": {
            "extendsTerm": true,
            "resumePolicy": "SpecificDate",
            "resumeSpecificDate": "2024-10-01"
          },
          "triggerDates": [
            {
              "name": "ContractEffective",
              "triggerDate": "2024-01-01"
            },
            {
              "name": "ServiceActivation",
              "triggerDate": "2024-01-01"
            },
            {
              "name": "CustomerAcceptance",
              "triggerDate": "2024-01-01"
            }
          ],
          "type": "Resume"
        }
      ],
      "subscriptionNumber": "A-S00000272"
    }
  ]
}'
```

## Other options

If you want to perform only one action on a single subscription for each request, you can also use the Subscription API operations to renew, suspend, or resume a subscription.


### Renew a subscription

You can use the [Renew a subscription](/v1-api-reference/api/subscriptions/put_renewsubscription/) to renew a subscription.

The following cURL code sample renews the subscription A-S00000272:

```bash
curl -i -X PUT \
  'https://rest.test.zuora.com/v1/subscriptions/A-S00000272/renew' \
  -H 'Authorization: Bearer 39cdc89ece8741fb97b8a2477622bc09' \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d '{
    "collect": false,
    "creditMemoReasonCode": "Unsatisfactory service",
    "runBilling": true
  }'
```

### Suspend a subscription

You can use the [Suspend a subscription](/v1-api-reference/api/subscriptions/put_suspendsubscription/) to suspend a subscription.

The following cURL code sample suspends the subscription A-S00000272 in 10 days (starting from the day you make this request):

```bash
curl -i -X PUT \
  'https://rest.test.zuora.com/v1/subscriptions/A-S00000272/suspend' \
  -H 'Authorization: Bearer 39cdc89ece8741fb97b8a2477622bc09' \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d '{
    "collect": false,
    "contractEffectiveDate": "2022-02-01",
    "creditMemoReasonCode": "Unsatisfactory service",
    "extendsTerm": true,
    "resume": true,
    "resumePolicy": "SpecificDate",
    "resumeSpecificDate": "2023-01-01",
    "runBilling": true,
    "suspendPeriods": 10,
    "suspendPeriodsType": "Day",
    "suspendPolicy": "FixedPeriodsFromToday"
  }'
```

### Resume a subscription

You can use the [Resume a subscription](/v1-api-reference/api/subscriptions/put_resumesubscription/) to resume a suspended subscription.

The following cURL code sample resumes the subscription A-S00000272 on 2022-10-01:

```bash
curl -i -X PUT \
  'https://rest.test.zuora.com/v1/subscriptions/A-S00000272/resume' \
  -H 'Authorization: Bearer 39cdc89ece8741fb97b8a2477622bc09' \
  -H 'Content-Type: application/json; charset=utf-8' \
  -d '{
    "collect": false,
    "contractEffectiveDate": "2022-02-01",
    "creditMemoReasonCode": "Unsatisfactory service",
    "extendsTerm": true,
    "resumePolicy": "SpecificDate",
    "resumeSpecificDate": "2022-10-01",
    "runBilling": true
  }'
```


### Verify the result

After the preceding API calls are done, you can verify the result in the Zuora UI.

To verify the result through the Zuora UI, you can search the subscription by ID at the All Subscriptions page by navigating to **Customers** > **Subscriptions** in the Zuora UI.
By clicking the subscription, you will be able to find the status of the subscription, which allows you to verify if the subscription has been suspended, resumed, or renewed.


  {% /tabComponent %}

{% /tabsComponent %}
