---
seo:
  title: Turning failures into gold - Zuora Developers Blog
markdown:
  toc:
    hide: true
disableLastModified: false
---

# Turning failure into gold

Our product processes millions of payments daily, and inevitably, some payments fail. Retrying these payments repeatedly seems logical, yet each retry may add costs without any increase in success rates. Enter our machine learning-driven **Smart Retry** feature.

First introduced in 2021. **Smart Retry** doesn't retry payments blindly on some fixed repeating schedule, instead it predicts the optimal moment to retry a failed payment. The moment when there is the greatest likelihood of getting paid. By intelligently timing retries, "smart retry", our model reduces costs associated with retries while also increasing the amount of money collected.

As gateway retry costs go down, collections go up. Our **Smart Retry** model turns payment failures into measurable revenue. Your mileage may vary, but one customer increased collections sufficiently to fully offset their entire Zuora service fee!

**Smart Retry** was trained on an anonymized history of millions of payments, both successful and unsuccessful. Each payment classified by over 30 attributes such as industry, retry count, retry window, payment value, currency, gateway response, gateway, payment method success history, issuing bank, credit card type, ARR and MRR. No names, no addresses, so no PII. There’s a list of [all the attributes used](https://docs.zuora.com?resourceId=payments-configurable-payment-retry) in our documentation. At Zuora we are always up front about which features have AI elements and how these features operate.

Improvements are measured using an industry-standard metric known as the Document Success Rate (DSR). DSR is defined as the "number of billing documents collected on" divided by the "number of billing documents attempted". All our **Smart Retry** customers can see their current DSR in our dashboard.

Our initial implementation in 2021 was expensive to run and based on customer feedback, we thought we could do better. So our Data Science team created an improved **Smart Retry,** released in late 2023. Not only did the team improve collection rates, the DSR our customers see, they also streamlined the operational aspects, cutting our costs for **Smart Retry** by 20x. The most impactful change involved transitioning from continuously spinning up resource-heavy AWS EC2 instances to a fully containerized, elastic architecture leveraging AWS Lambda and SageMaker.

Karl Goldstein, our VP of Data & Insights, emphasized that developing a predictive model is just the beginning. Operationalization required:

* Data transformation and enrichment.
* Model integration and deployment
* Continuous performance monitoring and retraining.

The model also needs periodic retraining every six months as the latest payment data reflects changes from the overall state of the economy down to individual payment gateway and card network changes.

Our **Smart Retry** feature isn’t static. Moving forward, we're developing tailored Smart Retry model variants optimized by payment gateway, region, and transaction characteristics. It enhances performance across diverse markets such as North America or Europe, thus pushing DSR higher.

If you'd like to explore **Smart Retry** or any other payment management features such as gateway specific routing based on the logic you define, please contact your Zuora Account Team.

Examples of Zuora’s other AI-based work:

* [Building reliable and secure AI based features](/blogs/2025-2-copilotforanalytics/)
* [Evolution of Zuora’s AI Copilot](/blogs/2025-3-6-zuoraaicopilotevolution/)

