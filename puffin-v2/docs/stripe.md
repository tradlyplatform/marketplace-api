---
id: stripe
title: Setting up Stripe 
sidebar_label: Stripe Payments
---

TradlyPlatform uses two types of Stripe features

1. Stripe Payments/Billing (For subscription, this is mostly available for all countries)
2. Stripe Connect (Marketplace features with pay in and payout, Availabel only for 30+ countries only)
URL : https://dashboard.stripe.com/settings



## Understanding how payin and payout works in stripe connect
Taking Australia as example. [Refer pricing](https://stripe.com/au/pricing)

- When your customer buy an item for $100, Stripe charges a transaction fee of **1.75% + A$0.30.** Hence 2.05 goes to Stripe
- You are left with **97.95**
- Let's say you take 10% commission from the sales, you will deduct **A$9.79** which goes to your Stripe account 
- The seller will supposed to get **88.16** from your account
- Now we are using stripe connect again to do auto payout to seller account and avoiding manual work of this transfer
- Stripe connect payout charges are **0.25%+A$0.25 = A$0.47.**
- Seller get A$87.69 in his bank account

[Read here on how to configure](/docs/superadmin-guide#supply-commission)




## Refund
- Q: If I complete an order and want to cancel it but I already paid through online payment, how would the return process be done?
- A: When the return is initiated, seller will be notified and seller/platform owner has to arrange a pickup from buyer to get the product to seller. Once the return is confirmed by the seller, refund will be initiated. If seller see some defect in the returned product, seller will raise a dispute and platform owner has to intervene and resolve it.

## ADDING DETAILED STEPS SOON

Steps for Subscription only product
Example: A marketplace which allow people to buy and sell with no middleman commmission charges on transaction. Your revenue model is like a SaaS business where you just charge sellers or buyers for the usage of the app on a monthly subscription fee
