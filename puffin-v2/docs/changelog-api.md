---
id: changelog-api
title: Changelog - API
sidebar_label: Changelog - API
---

## 14 March 2021
Inventory & stock changes are done. Below are the changes and can be used as test cases

- New field stock has been introduced in listing object which will tell current stock of the listing
- By passing stock  (should be greater than -1) in add listing API will create inventory for the given stock
- By passing stock (should be greater than -1) in update listing API will update the stock but inventory won't be changed
- Sold key in listing obj is deprecated but has backward compatibility. while calling mark as sold API in older version of app, stock will be set as 0 . In new version of app we will remove Mark as Sold replaced by updating stock with positive values.
- Cart details API -> listing object will also have stock key, in case of stock as 0 show out of stock in line item (also you can show a banner at the top saying Some of your items in the cart are out of stock ) 
- While creating order having OOS itemsm, checkout API will throw error some of the item in cart is out of stock
- Once order is created, stock will be reduced for all listings in the cart based on the cart quantity
- Once order is canceled either by customer or seller, listings will be re-stocked based on quantity
- Listings with stock 0 will not be coming in listings list API but listing detail API will give response even though stock is 0 so ensure updating the UI with 'Out of stock' and don't show Add to Cart button


## 23 March 2021
New Payment Method for Latin America. 
- You will get PayU as one more payment method. once order is created call Commons -> Payments -> PayU Latam -> paymentIntent
- You will be getting html to use it in webview which will redirect to payU payment page

<img src="/img/payU-test-card-details.png" alt="payU-test-card-details" width="700"/>

- You can use this test details in screenshot to pay. You can change the page to English from top right based on your locale or client locale.
