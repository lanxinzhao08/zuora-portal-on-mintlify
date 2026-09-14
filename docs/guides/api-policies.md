---
seo:
  title: Zuora API Policies - Zuora
redirects:
  /rest-api/general-concepts/api-policy/: {}
---

# Zuora API policies

This is a living document that defines forward compatibility, backward compatibility, versioning and lifecycle design patterns of Zuora APIs. Additions will be made over time as new style and design patterns are adopted and approved. In this spirit, please check in regularly and provide feedback using the Feedback widget or emailing <docs@zuora.com>.

## Compatibility policy


Zuora will make every effort to ensure resources and their representations are maintained in a compatible manner.

In circumstances where backwards compatibility cannot be achieved, we will version the resource with a new representation. Older versions can continue to be used, as long as they adhere to Zuora’s API deprecation policy.

Zuora reserves the right to make API changes without warning if an existing behavior is deemed a security vulnerability or incorrect behavior.

## Backwards compatibility


Zuora considers the following changes to be backwards-compatible:

*   Adding a new API resource.

*   Adding new attributes to an API response.

*   Adding new optional request parameters to an API.

*   Changing the order of attributes for an API response.

*   Adding new _optional_ attributes to an API request (POST, PUT).

*   Changing the length or format of strings, including field values and IDs.

*   Adding error codes, from our set of defined error codes, to any endpoint.

*   Changing the set of error codes and responses that an API endpoint can return, and the conditions under which an error response can occur.


## Limits


The following limits are applicable to Zuora API:

* Zuora API requests are subject to the [Rate and concurrent request limits](./rate-limits.md).
* Zuora API is subject to Zuora Data Retention Policy. The retention period of deleted data is 30 days. You can only retrieve deleted data for 30 days through Zuora API.


## Stay informed

The [API Changelog](../get-started/changelogs/v1-api-changelog.md) outlines the latest API updates and documentation updates.

We would love to hear your feedback on how we can improve it. If you have any comments on the API Changelog, please send an e-mail to <docs@zuora.com>. Thank you!
