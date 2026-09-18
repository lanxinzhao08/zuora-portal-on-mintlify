---
title: "Python client library 3.11.0 changelog"
sidebarTitle: "3.11.0"
---
## object\_queries\_api

* Added `query_bundle_by_key` method to query a bundle by key with filters, expands, and sort capabilities.
* Added `query_bundle_by_key_with_http_info` method to query a bundle by key with HTTP info.
* Added `query_bundles` method to query multiple bundles with filters, expands, and sort capabilities.
* Added `query_bundles_with_http_info` method to query multiple bundles with HTTP info.

## expanded\_order\_line\_item

* Added `sold_to_info_id` field to the ExpandedOrderLineItem model, allowing for more detailed information about the `sold to` entity.
