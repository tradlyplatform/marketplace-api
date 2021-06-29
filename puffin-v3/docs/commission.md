---
id: commission
title: Commission revenue model
sidebar_label: Commission
---
Commission based revenue models are the most commen in marketplace business. Companies like Amazon, Aliexpress, airbnb Etsy, depop, farfetch, udemy, upwork charges you on the commission of suppply side or demand side. 


## % commission from each sales and deals
1. % of Commmission from seller/merchants/accounts (Amazon)
2. % of commmission from Buyer (Property marketplaces)
3. % of commission from both buyer and seller (airbnb) 
4. % of commission from buyer, seller and delivery people (Deliveroo, Uber Eats)


## How to Configure Commission Model

Currently through Superadmin Panel, you can configure commission based model on supply side. However, we allow commission on buyer side as well. 

- Currently commission based revenue model is using Stripe Connect. So the transaction fee and payout fee is defined by stripe and might vary on your business region, refer from there. [Refer here](https://stripe.com/au/connect/pricing)

- Go to SuperAdmin Panel > Revenue Model > Supply commission
- You will find list of commissions already created or empty. You will have only one active commission model. And you can other commission model planned and activate for any special occassion (Example: For 3months, you can charge very less commission. 
- Create new. 
![supply-commission](/img/supply-commission.png)

1. You can configure default fee if you don't prefer a category fee. If there is category based commission applied, the default fee will be overrided with this new fee. If there is a case when you have fifteen(15)categories, you have created category based commission only for five(5) categories, other categories will take the default commission rate
2. Multi-Selection field allow you to select multi-categories
3. If you want to have slab based commission for a specific category, you can apply as well. Let's say if you want to have SLAB based across all categories, then you will have to select all categories in the MULTI-SELECTION(2) field and save.
4. Commission percentage. Enter a number without % symbol
5. Add another line of category using the CTA
6. An example view of how to configure SLAB based percentages. 