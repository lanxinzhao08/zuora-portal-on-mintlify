---
markdown:
  toc:
    hide: true
redirects:
  /api-references/quickstart-api/tag/Request-and-Response-Compression/: {}
---

# Request and response compression

The Zuora API supports uploading gzipped file as payload, and compressing responses that contain large volume of data.

## Request Compression


Include the `content-encoding: gzip` header if you want to compress a
request.


With this header specified, you should upload a gzipped file for the
request payload instead of sending the JSON payload. Zuora will decompress
the request payload before processing.



## Response Compression


Zuora compresses a response if the request contains an `accept-encoding:gzip` header.


Zuora automatically compresses responses that contain over 1000 bytes of
data. If a response is compressed, the response contains a
`content-encoding` header with the compression algorithm so that your
client knows to decompress it.


Gzip responses are enabled for the following MIME types:
- `application/json`
- `application/xml`
- `text/html`
- `text/csv`
- `text/plain`
