---
title: "Which API should I use for integration?"
---
Zuora offers two sets of APIs for Billing, Payments, and Platform: Quickstart API and v1 API.

Zuora’s Quickstart API represents a simplified programmatic experience for common commerce use cases. Alternatively, Zuora’s REST API (also known as v1 API) provides complete coverage to Zuora applications, and associated features.

**Note**: Zuora is committed to both APIs from a development, management, and support perspective for the long haul.

For common use cases, leverage the Quickstart API. If or when there are coverage gaps, you should adopt Zuora v1 API or any other developer tool that provides adequate support. You should not be concerned with standardizing on one versus the other, the Quickstart API is not a replacement to the v1 API. In actuality these APIs were designed to interoperate together. It is common for Zuora customers to leverage a number of developer tools available based on the appropriate use case.


## Guidance

We recommend evaluating the Quickstart API to see if they provide any speed to your development projects, but pivot to the v1 API if they do not.

We do not expect nor recommend existing customers rebuild their v1 integrations using the Quickstart API unless they have a compelling reason to do so.

We will not support every attribute and use case in the Quickstart API because doing so will cause us to create complexity and cause us to clone our v1 API, which is likely to create more confusion.
