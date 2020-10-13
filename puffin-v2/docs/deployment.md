---
id: deployment
title: Deployment Process
sidebar_label: Deployment
---
Find the informations on how we deploy different Tradly Platform products into different tech stacks and list of activities you as a platform owner need to do and other informations from sandbox stage to live. 

## Superadmin
Every platform owner whichever the products you subscribe from us will have super admin access. SuperAdmin Panel helps you to configure different settings of your apps and API in a user friendly way without coding involved. [Read more here] (superadmin.md). 

SuperAdmin panel are not hosted anywhere but in our own servers. Hence you will be accessing the production superAdmin panel from this link (Https://admin.tradly.app). Apart from the sandbox access we have shared with you for testing, you will get a unique tenantID for your platform on your successful subscribed users. 


Coming Soon: You can have multiple staffs account to access your production SuperAdmin Panel. 

## Google PlayStore
Launching your apps in Google PlayStore through our managed apps will have this list of steps. 

1. You buying a Google Play Developer Licence 
2. You providing access to Google Play access to Tradly Launchpad team (The team will send you the email address) as we need to do below activities (Admin level access should be needed for the first release, later you can change to Developer only access) 
3. Filling the informations like favicon, name, Privacy URL, etc under Superadmin is mandatory step before we go for production APK creation process. 
4. You can fill the “Store Listing” fields also under Store Presence
5. APK Upload process: We Download & upload the SigningKey for your app, a mandatory process for Google. [Read more here on why it’s needed](https://support.google.com/googleplay/android-developer/answer/7384423).  
6. Our team can upload the app under your account 
7. Wait for review, and fix any issues if highlighted by Google
8. Let you know once it is approved. 

:::important Timelines
- Time taken to get a google Play licence: Instant
- Google Play licence: $25 per year and paid by you
- No of days Google takes to approve your app: 5-10 Working days
- No of days Google takes to approve your app updates from initial release: 3-5 Working days. 
:::

## Apple AppStore
Launching your apps in Apple AppStore involves more process than Google Playstore. Our launch time depends on this process

1. Buy Apple Appstore developer licence 
2. Admin level access to Tradly Team for the first release, later you can change to developer only access (The team will send you the email address). Read different access level control here: https://developer.apple.com/support/roles/ 
3. If you are not enrolled as organisation, then we need your time to setup a call to get the provisioning certificates for our developers to send the build to be updated in Appstore for you to review.

"If you’re enrolled as an organization, you have the option of adding additional members to your team. The role you assign them controls access to the development(including certificate creation) and distribution tools included with your membership."

:::important Timelines
- Time taken to get  Apple licence: Depends and involves DUNS verification. (5-10Days)
- Apple licence: $99 per year and paid by you 
- No of days Apple takes to approve your app: 5-10 Working days
- No of days Apple takes to approve your app updates from initial release: 3-5 Working days. 
:::


### AppStore Provisioning certificates
1. Creating Identifiers
2. Creating CSR
3. Creating Certificate
4. Creating Profile
5. Push notification certificate
:::Warning
You must have a macOS running computer/laptop to complete the provisioning exercises. If you do not have, setup a call with us
:::

- You can access this certificates creations from this link: https://developer.apple.com/account/#/overview and not from Appstoreconnect (https://appstoreconnect.apple.com/)

Creating Identifiers

Creating CSR

Creating Certificate

Creating Profile

Push notification certificate