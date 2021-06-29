---
id: checklist
title: Top 10 things that need to be filled in your SuperAdmin
sidebar_label: Checklist
---
Checklist from stard to end on what you need to build a marketplace using Tradly Platform.
  
Tradly Platform solution is catered to different groups separately
- For developers: Headless API solution. Using the API solution, developers can build apps on top of it
- For non-coders: A simple toggle based SuperAdmin Panel to configure features in the already pre-built apps (also called as storefront, front end apps, templated apps).

## For developers

- Signup for a free sandbox account
- Get the API keys in the SuperAdmin > Settings > API section
= Refer the API documentation to start building the app

## 5 Steps for non-coders
⭐⭐⭐
- Signup for a free sandbox account
- Prototype your app using our SuperAdmin builder
- Visualise your app through test apps.
- When you are ready to launch, Subscribe to our plans and get a white label app build

There will be 5 type of works you will be doing to configure the app to work fully functional for a MVP launch to the market.

## 1. Signing up the Sandbox (Selecting mandatory informations)
You will be asked to enter this informations when you signup, read the below reference link for each part when you are stuck.

- Default things (Example: Appname, currency, Language, registration method, country you want to launch, ) 
- Choose your business Model (Product Marketplace, Service Marketplace, etc) 
- Choose Revenue Model : See here for the available revenue model for your business and how it works
- Choose Delivery Method: Available delivery methods and how it works
- Choose Payment Gateways
- Choose Location & Map if you are planning to have location specific features

NICE! When you reach the SuperAdmin home page, you will be able to find your APP NAME. That’s the APP NAME you should be using to experience your test app via Tradly Test apps. Whatever the type of marketplaces, mostly these are the fundamental blocks you should need to configure. The rest of the steps are mostly according to your business

## 2. Platform Fundamentals
You must configure this below things for the system to be able to open accounts, submit listings and make purchases.

- Configure accounts: Settings > accounts(categories, attributes)
- Configure listings: Settings > listings (Setting up listings information to be collected. Categories, attributes) 
- Stripe/other payment gateways configuration (under native integrations) 
- Configure revenue model, commissions: Settings > commissions OR Settings > Subscriptions OR Settings > Special Fees

## 3. Configure 3rd Party integrations
When you don’t setup this, below features may not work.

- Configure email if you want the emails to be whitelisted
- Configure domain if you want good deliverability of emails
- Chat setup via Firebase ,
- Optionally referral / sharing features via Branch
- Optionally later legal informations (privacy, terms, etc) 

## 4. Customising your look and feel of the App
When you request a build from us, whatever the branding and customisation you have configured in mobile config (under SuperAdmin) will be available for you.

Settings > mobile app config > add app related informations

- App Name
- Choose your app colour 
- App Icon
- Splash launch images 
- Onboarding images , Onboarding Text
- Registration Text
- Sell Icon (optional) 
- App title in Home Screen (Default will be app name) 
And others

## 5. Appstore / Playstore related informations
If we are helping you to launch apps on playstore and appstore, we need the below things to be ready. For Appstore, we need access to send the build to your account.

- Appstore access & Provisioning
- Playstore access & Provisioning
