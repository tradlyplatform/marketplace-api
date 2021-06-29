---
id: subscription
title: Subscription revenue model
sidebar_label: Subscription
---

A marketplace which allow people to buy and sell with no middleman commmission charges on transaction. Your revenue model is like a SaaS business where you just charge sellers or buyers for the usage of the app on a monthly subscription fee


**Highly suitable for emerging markets**
In emerging markets, there is not lot of physical or digital infrastracture to handle activities like 
- Delivery (No matured players. The new players will need to have strong technologies,Hence we can integrate their system to TradlyPlatform)
- Payments (Even online payments is pretty much new to them. So the companies who are offering online payments has started grow. But those payment gateways doesn't provide split payments for marketplace business. ). We encountered this situations for many of our clients 
- Mindset of people sometimes they want to skip the marketplace to avoid commission fee. They do direct dealing between buyers and sellers. 

So in this case, you can easily launch a marketplace without complication on a monthly subscription fee and later add other functionality when the market is ready for it. 

Subscription based model is a new addition to our existing revenue model for the marketplaces. Platform owners can charge their account owners/store owners a monthly/yearly subscription fee for opening an account inside the platform. You can use it as a hybrid model to charge subscription fee + charging commission as well. 


## 1. Activate Subscription Model

## 2. Create Subscription Packages
You need to create subscription packages in payment platforms where each of them have different feature sets. 

### Stripe
If you are using Stripe, you can create different type of subscription packages as they offer variety of pricing structure

What we support is simply monthly package which supports one rule as of now. 
1. Navigate in Stripe > Subscription > Enter details , select MONTHLY or YEARLY or ONE TIME >  CREATE
2. Once it created, whenever the sellers receive an email from TradlyPlatform Amazon SES connection that there is a subscription package they need to buy. 
3. Get your customers to click the link > It opens a Stripe Powered Subscription Page > Your customers can purchase the package
4. Once they get confirmation from Stripe email that they subscribed to a package
5. Then the customers can go to the store and start posting listings

### PayDunya

## 3. Test Subscription 
Example1:
If your subscription model which you have configured to restrict ** people for 1st listing ** 
- When a user open a store (It won't restrict)
- when a user click sell button anywhere, a popup will show they need to check their email 
- A user will receive the email now from TradlyPlatform (like above step2), 
- They will be able to see and post in listing page only after they made the purchase

Example2:
If your subscription model which you have configured to restrict ** people for 10th listing ** 
- When a user open a store (System won't restrict)
- When a user click on sell button anywhere for first time (System won't restrict)
- A user have posted 10 listing before
- when a user click sell button anywhere, a popup will show they need to check their email 
- A user will receive the email now from TradlyPlatform (like above step2), 
- They will be able to see and post in listing page only after they made the purchase

## 4. Configuring Email Contents
The email which a user receive to become as a subscribed customer is sent from TradlyPlatform. You can send a customised email message for that. 

Configure that in superadmin as well. 

