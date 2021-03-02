---
id: stripe
title: Setting up Stripe 
sidebar_label: Stripe Payments
---

TradlyPlatform uses two types of Stripe features

1. Stripe Payments/Billing (For subscription, this is mostly available for all countries)
2. Stripe Connect (Marketplace features with pay in and payout, Availabel only for 30+ countries only)
URL : https://stripe.com/global


## How our System process flow connected with Stripe Connect? 
We are publishing the flow chart soon. 

## How payment and payout works?
Taking Australia as example. [Refer pricing](https://stripe.com/au/pricing)

:::warning
- Set minimum price for items that can be purchases online , so you don't make loss
- Explicitly inform clients anywhere you think is best to explain "Averagely our payment process charge us #% - #% for payments and payouts. So your users understand that you don't charge a lot of commission
- Set commission % properly in SuperAdmin Panel to avoid bearing fee on your wallet
- When your stripe balance gets reduced due to stripe fee like this, the payout will not be on time due to insufficient balance
:::

Here is some example scenarios
<img src="/img/stripe-express-example1.png" alt="stripe-express-example1" width="700"/>

---- 

<img src="/img/stripe-express-example2.png" alt="stripe-express-example2" width="700"/>

- View in full screen: https://docs.google.com/spreadsheets/d/e/2PACX-1vRoRCUGXnu1Lmu5f6-qOa4fKFHX0vWWozt1jiUDB5cz3tcNqzUy1eddiLEU60Biz_yRxbZ6EZ-KwUbb/pubhtml?gid=2108306743&single=true
- Here is the Google Sheet link for you to play around this calculation : 
https://docs.google.com/spreadsheets/d/1JVmwtW1cFccYc-nCoK6pndIGYNTl4Ny2WAy1ErTtos0/edit#gid=2108306743

- [Read here on how to configure commission % in SuperAdmin](/docs/superadmin-guide#supply-commission)

## FAQ for Platform Owners

### What's the difference between Stripe Standard and Stripe Express? 
You can read the official updated information here 
https://stripe.com/docs/connect/accounts

### Can I use Stripe Standard?
You cannot use Stripe Standard if you want to take commission % from the transaction. 
According to official definition, this is called DIRECT CHARGES. Whatever the money you receive from Seller will directly go to standard.

Examples of platforms that would use Standard accounts include, but are not limited to: a storebuilder like Shopify, or a software as a service like Invoice2go.

**Suitable for companies which wants to have only subscription billing where you charge users for opening a store or selling listings or other custom options. **

### Can I use Stripe Express?
Stripe Express is mandatory for platforms which has SPLIT CHARGES (Stripe definition is called DESTINATION CHARGES). 
Example: Deliveroo, Etsy, Depop 
Suitable when 
- When you as platform owner wants to deduct **10% commission from every sale **
- When you want to send payout to sellers on your preferred time (Current scenario where TradlyPlatform send a notification to Stripe only when the delivery is confirmed, check the above flow chart) 


### Can I move from Stripe Express to Standard? 
Stripe doesn't allow you to migrate like this. This is because the fundamental of onboarding stripe connected account is totally different. 
- Stripe standard accounts can be created by anyone and the end users can create one STANDARD account to work with MULTPLE platforms like yours. (Example: Steve can his single stripe standard account connected to Deliveroo, Uber Eats, Postmates)
- Stripe express accounts are created especially for your platform. Every user who register a Stripe Express connected account can use that account only for your platform. All the KYC they provide is only for you. You can customise this onboarding like however you prefer 

### Can the seller release the payout himself?
Only the platform owner can control the transfers. (In another words, Platform is managed by TradlyPlatform, so it will be our system triggers which process the transfer and payouts)

### Don't activate automated payout

<img src="/img/stripe-automated-payout.png" alt="stripe-automated-payout" width="500"/>



## Refund
- Q: If I complete an order and want to cancel it but I already paid through online payment, how would the return process be done?
- A: When the return is initiated, seller will be notified and seller/platform owner has to arrange a pickup from buyer to get the product to seller. Once the return is confirmed by the seller, refund will be initiated. If seller see some defect in the returned product, seller will raise a dispute and platform owner has to intervene and resolve it.

- Q: Is there any fee stripe takes to do refund? 
- A: No the refund has no charges. The time taken to refund is instant

### Refund for Platform Owners 
**Stripe official information about Refunds/cancellation **
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
- Refunds can be issued using the Stripe Dashboard and are processed immediately. When issued, refunds can’t be canceled.
- You can issue more than one refund against a charge, but you can’t refund a total greater than the original charge amount.



## Subscription Based Revenue Model
Steps for Subscription only product
Example: A marketplace which allow people to buy and sell with no middleman commmission charges on transaction. Your revenue model is like a SaaS business where you just charge sellers or buyers for the usage of the app on a monthly subscription fee