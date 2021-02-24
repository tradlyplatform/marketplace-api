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

<img src="/img/stripe-express-example2.png" alt="stripe-express-example2" width="700"/>

- View in full screen: https://docs.google.com/spreadsheets/d/e/2PACX-1vRoRCUGXnu1Lmu5f6-qOa4fKFHX0vWWozt1jiUDB5cz3tcNqzUy1eddiLEU60Biz_yRxbZ6EZ-KwUbb/pubhtml?gid=2108306743&single=true
- Here is the Google Sheet link for you to play around this calculation : 
https://docs.google.com/spreadsheets/d/1JVmwtW1cFccYc-nCoK6pndIGYNTl4Ny2WAy1ErTtos0/edit#gid=2108306743

- [Read here on how to configure commission % in SuperAdmin](/docs/superadmin-guide#supply-commission)

## FAQ for Platform Owners

### What's the difference between Stripe Standard and Stripe Express? 
You can read the official updated information here 
https://stripe.com/docs/connect/accounts

### Can i use Stripe Standard?
You cannot use Stripe Standard if you want to take commission % from the transaction. 
According to official definition, this is called DIRECT CHARGES. Whatever the money you receive from Seller will directly go to standard.

Examples of platforms that would use Standard accounts include, but are not limited to: a storebuilder like Shopify, or a software as a service like Invoice2go.

**Suitable for companies which wants to have only subscription billing where you charge users for opening a store or selling listings or other custom options. **

### Can i use Stripe Express?
Stripe Express is mandatory for platforms which has SPLIT CHARGES (Stripe definition is called DESTINATION CHARGES). 
Example: Deliveroo, Etsy, Depop 
Suitable when 
- When you as platform owner wants to deduct **10% commission from every sale **
- When you want to send payout to sellers on your preferred time (Current scenario where TradlyPlatform send a notification to Stripe only when the delivery is confirmed, check the above flow chart) 


### Can i move from Stripe Express to Standard? 
Stripe doesn't allow you to migrate like this. This is because the fundamental of onboarding stripe connected account is totally different. 
- Stripe standard accounts can be created by anyone and the end users can create one STANDARD account to work with MULTPLE platforms like yours. (Example: Steve can his single stripe standard account connected to Deliveroo, Uber Eats, Postmates)
- Stripe express accounts are created especially for your platform. Every user who register a Stripe Express connected account can use that account only for your platform. All the KYC they provide is only for you. You can customise this onboarding like however you prefer 

## Onboarding / KYC Verification
Applicable to EXPRESS STRIPE CONNECTED ACCOUNTS
There is two types of connect account onboarding available, 
- Connect Onboarding
- OAuth
TradlyPlatform use Connect onboarding which has the advantage of where Stripe provides the portal for sellers/accounts to do the KYC process

With Express accounts, Stripe handles the onboarding and identity verification processes. The platform has the ability to specify charge types ( split charges, destination charges) and set the connected account’s payout settings programmatically (example condition: To send payout once item is received) . 

For Express account holders, Stripe provides an Express Dashboard (a lighter version of the Dashboard) that allows them to manage their personal information and see payouts to their bank.

With Express, Stripe will proactively collect information when requirements change. For best practices on how to communicate to your users when this happens, see the below stripe official guide for Express accounts. 

### Onboarding Stages

<img src="/img/stripe-onboarding-flow.png" alt="stripe-express-example2" width="800"/>

**Stages in mobile flow **
<img src="/img/stripe-mobile-flow1.png" alt="stripe-verification" width="300"/>
<img src="/img/stripe-mobile-flow2.png" alt="stripe-verification" width="300"/>
<img src="/img/stripe-mobile-flow3.png" alt="stripe-verification" width="300"/>
<img src="/img/stripe-mobile-flow4.png" alt="stripe-verification" width="300"/>
<img src="/img/stripe-mobile-flow5.png" alt="stripe-verification" width="300"/>

## FAQ for your users 


### What are the required documents? 
- What information are required: https://stripe.com/docs/connect/required-verification-information (change the country as per the below screenshot, find the information and platform owners should put in their support portal or somewhere. This way their users can onboard properly)
- Any connected accounts can receive the payments
- Payouts will happen ONCE the document verification is complete from Stripe side. (If platform owners want to check the status of connected account, visit stripe > Connected Accounts > Look for the user status) 
stripe-requirements

<img src="/img/stripe-express-example1.png" alt="stripe-verification" width="700"/>

Additional information on the individual
 You might need to collect a scan of an ID document (stripe official)  to 
- ID needed: https://stripe.com/docs/connect/identity-verification-api#acceptable-verification-documents



### Is there a way to upload the documents by any other means? Does stripe provide any hosted panel for this?
Yes according to stripe official resources, users can login to Stripe.com directly to upload their documents. (They can use the credentials they used when they try to signup with STRIPE on your app PAYMENT page, If they don’t remember the password, they can use FORGET PASSWORD function). They need to use the same email they used for signing up with your app.

"For Express account holders, Stripe provides an Express Dashboard (a lighter version of the Dashboard) that allows them to manage their personal information and see payouts to their bank." - Stripe

This way when they cannot complete the onboarding on our mobile app (where they missed any step, They can still do the rest on desktop browser or mobile browser

Some reference screenshots: 
<img src="/img/stripe-express-desktop1.png" alt="stripe-verification" width="700"/>
<img src="/img/stripe-express-desktop2.png" alt="stripe-verification" width="700"/>
<img src="/img/stripe-express-desktop3.png" alt="stripe-verification" width="700"/>
<img src="/img/stripe-express-desktop4.png" alt="stripe-verification" width="700"/>
<img src="/img/stripe-express-desktop5.png" alt="stripe-verification" width="700"/>


:::important For Platform Owners
- When onboarding Express accounts to a Connect platform, you collect the required information for each account, and Stripe verifies it. If you update verified user information, Stripe must review it. If Stripe can’t verify it, you have a grace period of 7 days to resolve any issues and complete verification.
- During this grace period, the account functionality remains the same. For example, if charges or payouts were previously enabled, they’ll continue to be enabled until the grace period ends. The value of requirements.current_deadline determines the end of the grace period and isn’t extended if you update additional information. Resolve all requirements by the end of the grace period to prevent charges or payouts from being disabled.
- If your express users are having issued with verification even after you have made efforts helping them, please have them reach to stripe  directly so we can assist.
:::

## Questions you might receive from your connected accounts
source: Stripe
Feel free to adapt any of these responses for any communications to your users.

If you are using Connect with Standard or Express accounts, Stripe will proactively reach out and collect information about your accounts whenever requirements change. This article covers best practices for communicating these changes to your accounts, as well as answers to a few common questions you may receive.

Global compliance requirements are evolving, so information requirements are often updated. If your connected accounts are concerned or have questions about needing to supply additional information, reinforce that this is expected and that there should be no issues with their accounts—you (and Stripe) are here to help them.

### I just received an email from Stripe. Who is Stripe? Is this email real?
We work with Stripe to enable payments for your business. Updating information about your account is important and required. These updates help protect against fraud and keep your account current with global Know Your Customer (KYC) regulations.

### Why am I being asked for information about who owns and manages my company?
In certain countries, Stripe is required to collect, verify, and maintain information about a company’s beneficial owners and directors. These requirements come from government regulators and help promote transparency and prevent financial crimes.

### What happens if I do not update my information by the deadline?
If you cannot update your account information by the deadline, payouts to your bank account and your ability to accept payments will be paused. We want to make sure that does not happen, so please let us know how we can help.

### How do I update my information?
Follow the link from Stripe’s email—the form will prompt you with instructions on how to update your information. It should take less than 5 minutes to update your information. If you need help, you can reach out directly to support@stripe.com or via chat and phone support.

### Refund
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