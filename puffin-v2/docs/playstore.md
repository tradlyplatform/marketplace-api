---
id: playstore
title: Things to setup in playstore
sidebar_label: Playstore
---

There are few things that need to be done from your side for launch, prelaunch, and update of the app. 

## Checklist
- [ ] Playstore access to us
- [ ] Keystore config to us
- [ ] Below steps for prelaunch, launch and update

### Keystore Config
When publishing app to Google Play, we should also opt in to Play App Signing. 
We need three information
1. first name | last name: ________
2. organisation name: ______
As per Google 
https://developer.android.com/studio/publish/app-signing#sign-apk

## Prelaunch 
- Create App 
- Store Listing informations 
- App Content


### Create App
Fill in all the information on the playstore create app section 
- Name
- Language 
- Store settings (App)
- Free
- Declarations (Tick both Program policies, US export laws )

###  Store Listing information 
- Name
- App information
- App screenshots
- App icon
- Featured image

### Pricing Distributions
- Select FREE if your app is free. 
- Input the countries your app needs to be published and shown. If you have selected the US as the available countries, any play store users who have not registered under the US country will not be eligible to download this app. 


### App Content 
1. Privacy Policy URL (Privacy URL of your business hosted on your website. A simple HTML would be enough) 
2. App Access
     1. As your apps have login functionality that needs users to like an item, follow the store, buy items, etc. We need to provide one access for Google to test this functionality to see whether everything looks legally okay for users. 
3.  Ads: If your product is going to have ads inside the app, you need to explicitly mention them to the users. 
4. Target Audience
     1. Select here the appropriate age group your app is targeted. The objective for google is to make sure your app doesn’t go to children or other age groups if they are not planned to be. So they require this informations upfront. 
5. Content Rating
After or before providing the AAB, you need to do this step. As per Google, it will be used to 
Your rating will be used to:
- Inform consumers about the age appropriateness of your app.
- Block or filter your content in certain territories or to specific users where legally required.
- Evaluate your app's eligibility for special developer programs.


## On launch
- App Signing 
- App AAB file upload (TradlyPlatform team will send this)

### App Signing
Follow the steps to prepare & roll out your release to create a new release: https://support.google.com/googleplay/android-developer/answer/9859348?visit_id=637480240879917296-738086813&rd=1

:::important
After you choose a release track, configure app signing under the **"Let Google create and manage my app signing"** 
:::

the key section as follows:
To have Google Play generate an app signing key for you and use it to sign your app, select Continue. The key you use to sign your first release becomes your upload key, and you should use it to sign future releases.

Refer more: https://developer.android.com/studio/publish/app-signing#enroll


## App Updates
- Every time we give AAB file, you can go ahead and upload the file in PRODUCTION RELEASE management (sometimes if time permits, we can directly upload that for you)
- It will be straightforward adding a release name and providing a short brief on what's this update has 


** OFFICIAL RESOURCES**
https://support.google.com/googleplay/android-developer/answer/9859152?hl=en


:::warning Other Notes
Whenever you receive an email or seen an app console with any warnings about app updates, read the information carefully. If you are not sure ask us. 
:::

## Video Explanation except app content setup

<iframe width="560" height="315" src="https://www.youtube.com/embed/rGusFO9_Ias" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## On Update
Visit your playstore https://play.google.com/console/ and do the following steps to update your apps

**1. Go to Production**

**2. Create Release **

<img src="/img/update1.png" alt="navbar" width="700"/>


**3. Upload the AAB**

<img src="/img/update2.png" alt="navbar" width="700"/>


**4. Add short information on what has been updated **

<img src="/img/update3.png" alt="navbar" width="700"/>

**5. Start ROLL OUT PRODUCTION **

<img src="/img/update4.png" alt="navbar" width="700"/>

**6. Production > Releases **

<img src="/img/update5.png" alt="navbar" width="700"/>



