---
id: stripe-onboarding
title: Stripe Connect Onboarding
sidebar_label: Stripe Connect KYC
---

## Onboarding / KYC Verification
Applicable to STRIPE CONNECTED ACCOUNTS, STRIPE EXPRESS. 

**Introduction of Stripe Onboarding**

Refer: https://stripe.com/en-au/connect/marketplaces (You can choose your country)
<img src="/img/stripe-onboarding.png" alt="stripe-onboarding" width="800"/>

There is two types of connect account onboarding available, 
- Connect Onboarding
- OAuth

TradlyPlatform use Connect onboarding which has the advantage of where Stripe provides the portal for sellers/accounts to do the KYC process

With Express accounts, Stripe handles the onboarding and identity verification processes. The platform has the ability to specify charge types ( split charges, destination charges) and set the connected account’s payout settings programmatically (example condition: To send payout once item is received) . 

For Express account holders, Stripe provides an Express Dashboard (a lighter version of the Dashboard) that allows them to manage their personal information and see payouts to their bank.

With Express, Stripe will proactively collect information when requirements change. For best practices on how to communicate to your users when this happens, see the below stripe official guide for Express accounts. 

### How our system works? 

<img src="/img/stripe-onboarding-flow.png" alt="stripe-onboarding-flow" width="800"/>

### Stages in mobile flow
<img src="/img/stripe-mobile-flow1.png" alt="stripe-verification" width="300"/> 

<img src="/img/stripe-mobile-flow2.png" alt="stripe-verification" width="300"/>

<img src="/img/stripe-mobile-flow3.png" alt="stripe-verification" width="300"/>

<img src="/img/stripe-mobile-flow4.png" alt="stripe-verification" width="300"/>


## Email reminders
When a connect account have not finished their KYC process, Stripe will send out emails. 

<img src="/img/stripe-reminders-email.png" alt="stripe-reminders-email" width="800"/>


<img src="/img/stripe-reminders-email1.png" alt="stripe-reminders-email" width="800"/>


<img src="/img/stripe-reminders-email2.png" alt="stripe-reminders-email" width="800"/>






## FAQ for your users 


### What are the required documents? 
- What information are required: https://stripe.com/docs/connect/required-verification-information (change the country as per the below screenshot, find the information and platform owners should put in their support portal or somewhere. This way their users can onboard properly)
- Any connected accounts can receive the payments
- Payouts will happen ONCE the document verification is complete from Stripe side. (If platform owners want to check the status of connected account, visit stripe > Connected Accounts > Look for the user status) 
stripe-requirements

<img src="/img/stripe-requirements.png" alt="stripe-requirements" width="700"/>

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
