---
id: appstore
title: Appstore Setup
sidebar_label: Appstore
---

Pre-requisite 
- Decide whether you want as a individual licence or Organization
- Organisation level licence provide more benefits in terms of access management (Especially creating provisioning certificates)

:::warning
You must have a macOS running computer/laptop to complete the provisioning exercises. If you do not have, setup a call with us
:::
Below are the steps to create provisioning certificates

## Official Resources 
**or Read below steps from our developers contribution (You can contribute if we are missing anything)**
- Creating Certificates https://help.apple.com/developer-account/#/deveedc0daa0
- Register app id : https://help.apple.com/developer-account/#/dev1b35d6f83
- Create appstore profile : https://help.apple.com/developer-account/#/devbd904d1a5

## If you are an organisation 
- Invite Tradly email we have given to you with Admin or Developer Access
- If you do add as a Developer access, you need to create the provisioning certificates (refer below steps) 
- If you do add as a admin access, we take care of creating provisioning certificates 

## Create new app in Appstore connect
1. Go to https://appstoreconnect.apple.com/apps
2. Click + Icon
3. Select ‘New App’
4. Select ‘iOS’ as platform
5. Name - This is your app name
6. Primary language for the app
7. Select the bundle id for the app.
8. SKU - just enter bundle id itself
9. Select ‘Full Access’ for the User Access
10. Click ‘Create’



### Creating Provisioning profile

1. Go to developer.apple.com
2. Select ‘Account’
3. Select ‘Certificates , Identifiers & Profiles’
4. Select ‘Profiles’
5. Click + Icon
6. Select ‘Appstore’ Under Distribution
7. Click ‘Continue’
8. Select the Bundle id 
9. Select the certificate 
10. Enter profile name (Example: appname_distributionprofile)
11. Click ‘Generate’
12. Download this file and save ( .mobileprovision )


### Creating Distribution Certificate

It has few main steps
1. Create CSR
2. Register Certificate
3. Export Certificate



#### Create CSR 
1. Open ‘Keychain Access App’ on your Mac
2. Click ‘Keychain Access’ in menu bar
3. Open sub menu under ‘Certificate Assistant’
4. Click ‘Request a certificate from certificate authority’
5. Enter your Apple ID email address and name
6. Select ‘Saved to Disk’ option
7. Click ‘Continue’
8. Save the file somewhere on your Mac ( .certSigningRequest )


#### Register Certificate
1. Go to developer.apple.com
2. Select ‘Account’
3. Select ‘Certificates , Identifiers & Profiles’
4. Select ‘Certificates’
5. Click + Icon
6. Select iOS Distribution under Software
7. Click ‘Continue’
8. Upload the file downloaded on previous step
9. Click ‘Process’
10. Click ‘Download’
11. Save this file somewhere on your Mac ( .cer )


#### Export Certificate 

1. Please double click the file that downloaded on previous step
2. This will open Keychain Access app
3. Go to My Certificates
4. Select the certificate you opened 
5. Right click that certificate
6. Select ‘Export …’ option
7. Save the file with password ( .p12 ) and password
8. Password can be empty. To keep it secure, please enter password and save/remember the password


### Create App Identifier
1. Go to developer.apple.com
2. Select ‘Account’
3. Select ‘Certificates , Identifiers & Profiles’
4. Select ‘Identifier’
5. Click + Icon
6. Select ‘App IDs’
7. Select ‘App’
8. Enter Description (you can put anything here for your reference)
9. Select ‘Explicit’ for Bundle ID.  
10. Enter your app ID. Ex: com.tradly.app
11. Please tick capabilities for the app. This might vary when we add more features to the product. For now, Please tick below -Associated Domains, Push Notifications
12. Click ‘Continue’
13. Click ‘Register’
14. This will generate your bundle id.


### Creating Push Key
- Go to developer.apple.com
- Click account
- Select ‘Cerificates , Identifiers & Profiles’
- Select Keys
- Click + Icon
- Enter Key Name (Example: appname_pushkey )
- Tick ‘Apple Push Notification service)
- Click Continue
- Confirm Register
- Download and share that file to our team



## Appstore Management 
- When the team has access to your appstore, we will directly upload the app(IPA) to your testflight 
- You can test this app through testflight apps in your iphone to make sure everything is working properly before the release

## FIRST Release
Once all is good with the testing, you can go ahead and setup a release. 
- Create new version 
:::warning Version Number
The version number is shown on the App Store and should match the one we used in Xcode.
:::

- Enter "What's new in this version"
- Update screenshots (You can take screenshots from the testflight app )
- Enter promotional text, descriptions, keywords, Support URL, MArketing URL 
- Add assets like App store icon, 
:::warning App Review Information
Provide WORKING sign-in information for apple to sign into your app and do the review. If you provide wrong information, it will delay your app review. 
:::

- Notes under App Review information. Below is an example of text what we provide to Apple to guide them how they can use the app. 
  - Steps to experience the app
  1. You need approved tenantID before login to the app. Use "tradlysocial" case sensitive in the first page
  2. Use the login address above to follow an store, making purchase with COD or adding listings, etc. 
  3. Logout option available in the MORE section through Navbar

VIDEO GUIDE: https://drive.google.com/file/d/1AZMB1CNFGUsNi4n_GM62a93Xvk9QIpen/view?usp=sharing



## App Review Management
Apple may review the app within a week. If you get approved, GREAT! If not, we will help you wherever you can. But remember you need to take care of this place by reading the messages you receive from them, reply properly. If any doubts on what to reply, ask us. 

## App Update
Similar to the app release, we will directly push the app to your testglight. You can do the same process of testing, creating a release and pushing the app to Appstore. 

