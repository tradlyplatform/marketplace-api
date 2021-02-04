---
id: delivery
title: Delivery Methods
sidebar_label: Delivery
---

Delivery is one of the important functionality of a product marketplace. You need to decide the delivery method you want to offer in your marketplace very carefully. Depends on how you charge your customers, you can opt for different methods

**Less operation centric:**
- You totally leave the delivery and shipping to your customers(sellers)
- They take care from accepting the order, updating the order status and delivering the product
- Our functionality provides where they can change order status in order detail page (Read more about it on [Notifications page](notification.md) )
- Highly suitable for business which want to take less commission % from every sales OR Software monthly subscription where you just want to charge for the usage of your app OR open marketplace with just discovery and free 

**Balanced operation: (In Roadmap)**
- Your app provides the integration with logistics players like DHL, UPL, etc (Read more on below integration section)
- So whenever the order status is moved from order success page, our system can notify your logistic partner to pickup and deliver the product
- Suitable for business which want to take commission not more than 15% or subscription based revenue model or other custom options.

**Highly regulated operation: (In Roadmap)**
One of the tough and lot of operation work needed in this approach. Operational team is must for this.
- You care of every step from order happened to delivery to return to disputes (you need to monitor, manage and execute the delivery)
- Product marketplace like Amazon does this model
- On demand delivery like deliveroo, postmates, etc work on this model  
- You work with multiple logistics partner to achieve this. 
- OR You own a fleet of delivery boys and logistics to handle the delivery options 

There are different types of delivery methods we provide. One of the emerging mode of user behaviour after covid is order online and pick up from store. 

## ORDER ONLINE > PICK UP 
Your sellers can choose if they want to allow any or both of 
- Pickup 
- Delivery 
AND you can control this from marketplace level as well. 

Example:
- if you allow delivery only, your sellers left with one option of delivery 
- If you allow delivery or pickup, your sellers can choose which is their preference when they create their store/account


**Highly suitable **
- For stores which can't do delivery easily. Applicable for most local stores, shopping mall based stores
- For cities which doesn't have delivery network or on demand delivery services  
<img src="/img/shipment.png" alt="navbar" width="400"/>

## CASH ON DELIVERY 
Your sellers can opt to deliver the product by themselves without logistic player or using delivery boys. Or even they can use other 3rd party to prvoide the delivery and just update the order status through TradlyPlatform powered apps. 

Suitable for
- Local, Nearby based marketplace where the sellers and buyers are located closely (within 15-25km)
- They can do their own delivery options 


## Delivery Return Flow
The return flow is simple and straightforward.

**Return Initiate: **
When a customer wants to make a return for any reason, he can initiate it by going to the order detail page and selecting “Custom Return initiation” option.
**Return Restriction: **
The merchant can decide the return policy for the product. The return policy will govern if the product is returnable or not. The return policy may include a "No returns" product, "n Day returns", or "# Days replacement only".

**Marketplace Support & accepting returns: **
The seller will have an option to chat with the customer for the relevant customer to identify and rectify the problem if possible. However, if the problem couldn’t be rectified then the seller can choose to accept the return, & could plan a return pickup & communicate with the delivery partner for the same.
Both the merchant and the customer can check the return status from the return status page.



## OUR ROADMAP

###  Releasing our on-demand delivery app 
We are working towards launching our ondemand delivery app. To highly transparent on how we release new products, we prioritise and deprioritise based on the resource planning. If we have many clients onboarding at a same time, we will slow down new product launch and focus on launching client apps. 

**Current status**
- Apps for delivery boys to handle your ondemand delivery (Version1)
- No fleet management system 
- All UI/UX finished, App coded. we just need to connect with the API and test it properly before the beta release

### Integrating with Shippo / Easypost
Shippo and Easypost are aggregators of logistic players like DHL, UPX, etc. They have 50+ players connected under them. So by integrating our orderAPI with those platforms, you will be able to use any logistic players they support.

