---
id: revenuemodel
title: Revenue Model
sidebar_label: Revenue Model
---

Based on your company strategy, you can opt for different revenue models. Currently through Superadmin Panel, you can configure commission based model on supply side. However, we allow commission on buyer side as well. 

- Currently commission based revenue model is using Stripe technologies. So the transaction fee and payout fee is defined by stripe and might vary on your business region, refer from there. [Refer here](https://stripe.com/au/connect/pricing)

For other revenue model and payment gateways, contact us to know about the roadmap and possibility.

## Understanding the fee in short
Taking Australia as example. [Refer pricing](https://stripe.com/au/pricing)

- When your customer buy an item for $100, Stripe charges a transaction fee of **1.75% + A$0.30.** Hence 2.05 goes to Stripe
- You are left with **97.95**
- Let's say you take 10% commission from the sales, you will deduct **A$9.79** which goes to your Stripe account 
- The seller will supposed to get **88.16** from your account
- Now we are using stripe connect again to do auto payout to seller account and avoiding manual work of this transfer
- Stripe connect payout charges are **0.25%+A$0.25 = A$0.47.**
- Seller get A$87.69 in his bank account

[Read here on how to configure](/docs/superadmin-guide#supply-commission)



