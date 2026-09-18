---
title: "C# client library 1.3.0 changelog"
sidebarTitle: "1.3.0"
---
## ObjectQueriesApi
* Added new method QueryBundleByKey to query bundles using a key with optional parameters for idempotency, encoding, tracking, authorization, versioning, and pagination.
* Added new method QueryBundles to query multiple bundles with optional parameters for idempotency, encoding, tracking, authorization, versioning, and pagination.
* Introduced asynchronous versions of the new methods: QueryBundleByKeyAsync and QueryBundlesAsync for non-blocking operations.

## ExpandedOrderLineItem
* Added a new property `SoldToInfoId` to the ExpandedOrderLineItem class.
