---
title: "Tutorials"
sidebarTitle: "Business tutorials"
---
This tutorial walks you through the typical use cases for setting up the B2C checkout flow,
and the corresponding sample codes of using the Zuora API or client libraries.

## Overview

The following diagram illustrates the typical checkout flow for a B2C website.


<img src="/static/images/Tutorials/B2C-checkout-flow.svg" alt="B2C checkout flow" />

The checkout flow consists of the following steps:

1. End users come to your website and browse the products or services you offer.
2. End users look into different products and pricing details, then select one and proceed to the checkout page.
   Note that this step might require creating a new billing account.
3. End users confirm order details.
4. End users enter their payment method details, then click "Pay".
5. Once the payment is made, end users will receive the order and payment details, and the invoices.


<br />

In this tutorial, we will use the Object Query API as the primary query method.
The Object Query API contains GET operations that allow you to query objects in your Zuora tenant in an efficient, consistent, and flexible manner.
With the `expand[]` and `filter[]` query parameters, you have the flexibility to retrieve related object information in a single call and define the returned response that best suits your needs.
For more information, see [Object Queries](/v1-api-reference/api/object-queries/queryaccounts).

## Scenario

Suppose that you're running a B2C corporation offering portable tablets. Your flagship product is called **SmartLearn Tablet** with the following information:
- **Product**: SmartLearn Tablet
- **Currency**: USD
- **Pricing plans and charges**:

| Basic Package | Premium Package | Elite Package | VIP Package |
| :---: | :---: | :---: | :---: |
| 19.99 USD <br /> per month | 29.99 USD/License <br /> per month | 39.99 USD/License <br /> per month | 49.99 USD/License <br /> per month |


You want to achieve the following business purposes with Zuora:

- **Browse products**:
  - Showcase your products to customers
  - Allow your customers to select the product they prefer and check the details of this product, including its pricing.
- **Sign up new customers**:
  - Your customers can sign up for a new billing account.
- **Place orders and pay**:
  - Your customers can subscribe to your products after logging into their accounts.
  - When placing an order, they can pay for the product.
  - You customers will receive the order details and can view the generated invoice.
- **User management** - After your customers log into their accounts, they can do the following things on the "My Account" management page:
  - Cancel a specific subscription
  - Check account details
  - View all invoices they have received
