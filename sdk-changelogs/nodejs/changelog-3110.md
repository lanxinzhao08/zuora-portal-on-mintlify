---
title: "Node.js client library 3.11.0 changelog"
sidebarTitle: "3.11.0"
---
## ObjectQueriesApi

* Added queryBundleByKey and queryBundles methods to support querying bundles with filters, expands, and sort capabilities.

## index
* Added ExpandedBundle model constructor.
* Added QueryBundlesResponse model constructor.

## ExpandedOrderLineItem

* Added a new property `soldToInfoId` to the `ExpandedOrderLineItem` class, allowing developers to handle additional information related to the `soldTo` entity.
