---
title: "Collect payments with payment form"
---
<Steps>

  #### Payment Form Implementation Guide

  <p>Discover comprehensive code samples demonstrating integration with <a href="https://docs.zuora.com?resourceId=payments-payment-form-overview" target="_blank">Payment Form</a>. Understand how to swiftly implement hosted payment forms on your website.</p>

  <a className="download-button" href="https://github.com/zuora/payment-hpf-sample/archive/refs/heads/main.zip" download="payment-hpf-sample-main.zip">Download Sample Code</a>

  <p>Don't code? Use Zuora <a href="https://docs.zuora.com?resourceId=payments-overview-of-zuora-payment-link" target="_blank">Payment Link</a>.</p>

  ## 1. Quick Start

  <Step title="Configure a Zuora client instance">
    **Server | Server.java**

  Configure a Zuora client instance with your <a href="https://docs.zuora.com?resourceId=platform-create-oauth-client" target="_blank">client ID and client secret</a>. If you don't have them, contact your administrator.
  </Step>

  #### Review the payment form and copy the publishable key

  1. In the Zuora UI, click your username in the upper right and navigate to **Settings > Payments > Payment Form**.

  2. Verify that the payment form you want to use in this guide is configured as expected.

  3. Copy the publishable key.

  <Step title="Initialize an instance of the Zuora object">
   **Client | checkout.js**

  Initialize an instance of the Zuora object with your publishable key copied from the previous step.
  </Step>

  #### Run the payment form

  1. Build the server: <code>mvn package</code>

  2. Run the server: <code>java -cp target/sample-jar-with-dependencies.jar com.zuora.sample.Server</code>

  3. Run the payment form by navigating to [http://localhost:8888/checkout.html](http://localhost:8888/checkout.html).

  #### Try it out

  <p>On the page, enter <code>4111 1111 1111 1111</code> in the card number field, fill in the remaining card information, and then click the Pay button.</p>

  You will be redirected to a return page. The string displayed after "Your order:" is the ID of the created payment. You can find the successful payments in Zuora through the UI, API, Data Source Export, and Data Query.

  <Tip>
    Congratulations! You now have a basic integration working.
  </Tip>

  ## 2. Customize

  <Step title="Customize the checkout page">
  **Client | checkout.html**

  Customize the order summary section on the checkout page for your needs.
  </Step>

  <Step title="Customize the return page">
  **Client | return.html**

  Customize the layout of the return page for your needs.
  </Step>

  <Step title="Handle payment result">
  **Client | checkout.js**

  <p>Use the callback function to handle the payment processing result.</p>

  <p>The `onComplete` function returns `result` in the following structure:</p>

  <p>On success:</p>
  <p><code>&#123;</code></p>
  <p><code>&nbsp;&nbsp;success: true,</code></p>
  <p><code>&nbsp;&nbsp;paymentMethodId?: string;</code></p>
  <p><code>&nbsp;&nbsp;paymentId?: string;</code></p>
  <p><code>&#125;</code></p>

  <p>On error:</p>
  <p><code>&#123;</code></p>
  <p><code>&nbsp;&nbsp;success: false,</code></p>
  <p><code>&nbsp;&nbsp;error: &#123;</code></p>
  <p><code>&nbsp;&nbsp;&nbsp;&nbsp;type: string;</code></p>
  <p><code>&nbsp;&nbsp;&nbsp;&nbsp;code: string;</code></p>
  <p><code>&nbsp;&nbsp;&nbsp;&nbsp;message: string;</code></p>
  <p><code>&nbsp;&nbsp;&#125;</code></p>
  <p><code>&#125;</code></p>

  </Step>

  ## 3. Integrate

  To integrate the payment form with your website, complete a few more steps.

  <Step title="Import Zuora Java client library to your project">
  **Server | pom.xml**

  Add the highlighted dependency to your POM build and import the library. Replace the version with the latest Zuora API library version. See <a href="https://mvnrepository.com/artifact/com.zuora.sdk/zuora-sdk-java" target="_blank">Zuora Java SDK on Maven Central</a> for the version information.

  To use the sample code, you must use <a href="https://maven.apache.org/install.html" target="_blank">Maven</a> for the build.
  </Step>

  <Step title="Implement support for multi-entity">
  **Server | Server.java**

  <p>If there are multiple entities within your tenant, incorporate the following code line into the highlighted code block to support the <a href="https://docs.zuora.com?resourceId=platform-multi-entity-overview" target="_blank">multi-entity</a> feature:</p>

  <code>
  zuoraClient.setEntityId("REPLACE_WITH_ENTITY_ID");
  </code>

  <p>Here is an example:</p>

  <code>port(8888);</code>

  <p><code>staticFiles.externalLocation(Paths.get("public").toAbsolutePath().toString());</code></p>

  <p><b><code>zuoraClient.setEntityId("8a80825556ff28a4015709096c5d6f5d");</code></b></p>

  <p><code>zuoraClient.initialize();</code></p>

  <p><code>zuoraClient.setDebugging(true);</code></p>

  </Step>

  <Step title="Implement backend API to create a payment session">
  **Server | Server.java**

  In your server, add an endpoint to <a href="/v1-api-reference/api/payment-methods/post_createpaymentsession" target="_blank">create a payment session</a>. A one-time token will be returned.

  You can specify parameters to define the payment flow mode as one of the following:
     - Create and save a payment method.
     - Process a one-time payment without saving the payment method.
     - Process the first payment and save the payment method for subsequent recurring payments.

  See <a href="/v1-api-reference/api/payment-methods/post_createpaymentsession" target="_blank">Create a payment session</a> for more information about the parameters.
  </Step>

  <Step title="Load zuora.js">

  **Client | checkout.html**

  Import the Zuora JavaScript client library.

  **Script versions and URLs**

  Zuora provides two ways to load `zuora.js`:
  - A **rolling, non-versioned script**, currently at version **1.4.0**, which always includes the latest updates.
  - A **pinned, versioned script** that is fixed to that specific release.

  **Non-versioned URL**

  For sandbox environments, use `<script src="https://js.zuora.com/payment/sandbox/1.4.0/zuora.js"></script>`

  For production environments, use `<script src="https://js.zuora.com/payment/1.4.0/zuora.js"></script>`

  **Versioned URL**

  Zuora now supports **versioned URLs** for `zuora.js`, which you can use when you need to **pin a specific script version** and optionally configure **Subresource Integrity (SRI)** to cryptographically verify the script content.

  For 2025.Q4.1.0 sandbox environments, use `<script src="https://js.zuora.com/payment/sandbox/7.1.0/zuora.js" integrity="sha256-NsGvSSP6JjTH3hHqo2AdBWOzTjBC7kUUUt2F7t0YKzE=" crossorigin="anonymous"></script>`

  For 2025.Q4.1.0 production environments, use `<script src="https://js.zuora.com/payment/7.1.0/zuora.js" integrity="sha256-NsGvSSP6JjTH3hHqo2AdBWOzTjBC7kUUUt2F7t0YKzE=" crossorigin="anonymous"></script>`

  **Important:**
  - The **non-versioned URL** continues to be supported and will always deliver the **latest** `zuora.js` updates.
  - The **versioned URL** is **locked to that version** and **will not automatically receive future updates**. To adopt new changes, you must update the version in the URL explicitly.

  </Step>

  <Step title="Create a container for the payment form">
  **Client | checkout.html**

  Create a container and place it where you want the payment form to be rendered.
  </Step>

  <Step title="Initialize an instance of the Zuora object">
  **Client | checkout.js**

  Initialize an instance of the Zuora object with your publishable key.
  </Step>

  <Step title="Populate the payment form configuration">
  **Client | checkout.js**

  Generate a payment session when the end-customers click the Pay button.

  Unless otherwise specified, the pre-defined default payment form is used. To use a specific payment form, copy its payment form number from the Zuora UI and incorporate the following code line into the highlighted code block:

  <code>profile: "REPLACE_WITH_PAYMENT_FORM_NUMBER",</code>

  <p>Here is an example for specifying a payment form and other configuration parameters:</p>

  <b><code>profile: "PF-00000006",</code></b>
  <p><code>locale: "en",</code></p>
  <p><code>region: "US",</code></p>
  <p><code>currency: "USD",</code></p>
  <p><code>amount: "1599.00",</code></p>

  </Step>

  <Step title="Create and mount the payment form">
  **Client | checkout.js**

  Create an instance of the payment form component, and mount the form component to the container for displaying the hosted payment form.
  </Step>

</Steps>
