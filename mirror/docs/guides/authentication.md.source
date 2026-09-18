---
seo:
  title: Authentication
markdown:
  toc:
    hide: true
redirects:
  /api-references/quickstart-api/tag/Authentication/: {}
  /rest-api/general-concepts/authentication/: {}
---

# Authentication

The Zuora API uses bearer tokens for authentication. See the [Get started tutorial](../get-started/introduction.md) to learn how to generate a bearer token.

All API requests should include a bearer token in an Authorization HTTP header as follows:
&nbsp;
&nbsp;
```bash
Authorization: Bearer $ZUORA_BEARER_TOKEN
```

## Organization (optional)

For users who belong to multiple organizations, you can pass a header to specify which organization, or organizations, to user for an API request.
&nbsp;
Example:

&nbsp;
&nbsp;
```bash
curl https://test.zuora.com/v2/accounts \
  -H "Authorization: Bearer $ZUORA_BEARER_TOKEN" \
  -H "Zuora-Org-Ids: YOUR_ORG_ID"
```
