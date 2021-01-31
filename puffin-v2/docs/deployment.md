---
id: deployment
title: Deployment Process
sidebar_label: Deployment
---
Find the informations on how we deploy different Tradly Platform products into different tech stacks and list of activities you as a platform owner need to do and other informations from sandbox stage to production. 

## 1. Superadmin
Every platform owner whichever the products you subscribe from us will have super admin access. SuperAdmin Panel helps you to configure different settings of your apps and API in a user friendly way without coding involved. [Read more here] (superadmin.md). 

SuperAdmin panel are not hosted anywhere but in our own servers. Hence you will be accessing the production superAdmin panel from this link (Https://admin.tradly.app). Apart from the sandbox access we have shared with you for testing, you will get a unique tenantID for your platform on your successful subscribed users. 

 

## 2. Google PlayStore
Launching your apps in Google PlayStore through our managed apps will have this list of steps. 

1. You buying a Google Play Developer Licence in this link : https://play.google.com/apps/publish (Play publish account and not developer account)
2. Create your first app in Google play publish
3. You providing access to Google Play access to Tradly Launchpad team (The team will send you the email address) as we need to do below activities (Admin level access should be needed for the first release, later you can change to Developer only access) 
4. Filling the informations like favicon, name, Privacy URL, etc under Superadmin is mandatory step before we go for production APK creation process. 
5. You can fill the “Store Listing” fields also under Store Presence
6. APK Upload process: We Download & upload the SigningKey for your app, a mandatory process for Google. [Read more here on why it’s needed](https://support.google.com/googleplay/android-developer/answer/7384423).  
7. Our team can upload the app under your account 
8. Wait for review, and fix any issues if highlighted by Google
9. Let you know once it is approved. 


:::important Timelines
- Time taken to get a google Play licence: Instant
- Google Play licence: $25 per year and paid by you
- No of days Google takes to approve your app: 5-10 Working days
- No of days Google takes to approve your app updates from initial release: 3-5 Working days. 
:::

## 3. Apple AppStore
Launching your apps in Apple AppStore involves more process than Google Playstore. Our launch time depends on this process

1. Buy Apple Appstore developer licence 
2. Admin level access to Tradly Team for the first release, later you can change to developer only access (The team will send you the email address). Read different access level control here: https://developer.apple.com/support/roles/ 
3. If you are not enrolled as organisation, then we need your time to setup a call to get the provisioning certificates for our developers to send the build to be updated in Appstore for you to review. (So if you have registered as a company, suggest signing up as a organisation)

"If you’re enrolled as an organization, you have the option of adding additional members to your team. The role you assign them controls access to the development(including certificate creation) and distribution tools included with your membership."

:::important Timelines
- Time taken to get  Apple licence: Depends and involves DUNS verification. (5-10Days)
- Apple licence: $99 per year and paid by you 
- No of days Apple takes to approve your app: 5-10 Working days
- No of days Apple takes to approve your app updates from initial release: 3-5 Working days. 
:::


### AppStore Provisioning certificates 
if you provide admin access, you do not need to do the below provisioning creations
1. Creating Identifiers
2. Creating CSR
3. Creating Certificate
4. Creating Profile
5. Push notification certificate

Ask private video resources from the slack channel on how to create the above certificates. 

:::warning
You must have a macOS running computer/laptop to complete the provisioning exercises. If you do not have, setup a call with us
:::

## 4. 3rd Party Tools Signup
We provide free add on otherwise called 3rd party tools and utilities implemented for you. So you don't need to worry about implemementing marketing, tracking tools, etc. 

Read the integrations section for step by step information on how to signup and setup the accounts. 

Below is the list 
- [ ] [Branch.io](branch.md)
- [ ] [Firebase](firebase.md)
- [ ] AppStore access (Admin) 
- [ ] Appstore team ID ( )
- [ ] Android  access ( ) 
- [ ] Android keystore config(first name, last name, organisation)
- [ ] Stripe access 
- [ ] Stripe Standard or Express 


## 5. Media Assets

Free resources: 
-  ILLUSTRATIONS : https://undraw.co/search : You can use undraw an opensource website to download personalised and rich SVG/PNG illustrations. Its used from facebook to startups, make use of it (remember you can change the color there)
- GENERAL: https://www.canva.com: The famous canva also provide lot of free resources. 
- ICONS: https://www.figma.com/file/ALx9XJzeRb0n6kjUjGo1Iq/TradlyPlatform-Icons?node-id=0%3A1 : You can find icons from this figma file. We are trying to improve the resources here from contributors. 
- WEBAPP: https://www.figma.com/file/N6JWLSTi65569BOmasbOeG/TradlyPlatform---webapp---Public?node-id=1%3A2 (The webapp we will be releasing soon)
- DESIGN KIT: https://www.figma.com/file/CVL55dJAeCZm09qpepE9XQ/TradlyPlatform---DesignKit?node-id=8%3A0 if you want to play around on how your designs going to look in the app, you can share this with your design team to create mockups. (Just duplicate and use it)

## 6. Text Strings 
(applicable for multi language apps)

- TradlyTeam will share with you a google sheet. 
- There will be a default protected key column which you might not need to edit
- Fill the other columns whichever the language is applicable for you (For example: English, Spanish, Chinese-simplified, Chinese-traditional)



## 7. Company Details for app 
- [ ] Terms Condition  (Example: https://www.example.com/terms-conditions)
- [ ] Privacy URL (Example: https://www.example.com/privacy-policy)
 As we are not providing web app as of now, you might need to host this in your static websites like squarespace, wordpress, etc. 


