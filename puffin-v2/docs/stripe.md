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

- Q: Is there any fee stripe takes to do refund? 
- No the refund has no charges. The time taken to refund is instant




## Stripe official information about Refunds/cancellation 
-- All info below are from [stripe](https://stripe.com/docs/refunds#issuing)

You can refund charges made to your account, either in whole or in part. Refunds use your available Stripe balance-this doesn’t include any pending balance. If your available balance doesn’t cover the amount of the refund, Stripe debits the remaining amount from your bank account.

​​If Stripe can’t debit the remaining amount from your bank account, your refunds may go into a pending status until you add funds to your Stripe balance. You can view a list of all your pending refunds in the Dashboard.

If the original charge underwent currency conversion, the refunded amount converts back using the same process. There are no fees to refund a charge, but the fees from the original charge aren’t returned.

We submit refund requests to your customer’s bank or card issuer. Your customer sees the refund as a credit approximately 5-10 business days later, depending upon the bank. Refunds can’t be canceled after they’re issued. Disputes and chargebacks aren’t possible on credit card charges that are fully refunded.

We’ll also send an email to your customer notifying them of the refund, if all of these conditions apply:
- The original charge was created on a Customer object in your Stripe account
- The Customer object has a stored email address
- You have Email customers for refunds enabled

Some refunds—those issued shortly after the original charge—appear in the form of a reversal instead of a refund. In the case of a reversal, the original charge drops off the customer’s statement, and a separate credit isn’t issued.


### Issuing refunds 
Refunds can be issued using the Stripe Dashboard and are processed immediately. When issued, refunds can’t be canceled.

You can issue more than one refund against a charge, but you can’t refund a total greater than the original charge amount.



## Subscription Based Revenue Model

Steps for Subscription only product
Example: A marketplace which allow people to buy and sell with no middleman commmission charges on transaction. Your revenue model is like a SaaS business where you just charge sellers or buyers for the usage of the app on a monthly subscription fee