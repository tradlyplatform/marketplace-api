---
id: appstore
title: Appstore Setup
sidebar_label: Appstore Setup
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


## Creating Provisioning profile
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


## Creating Distribution Certificate

It has few main steps
1. Create CSR
2. Register Certificate
3. Export Certificate



### Create CSR 
1. Open ‘Keychain Access App’ on your Mac
2. Click ‘Keychain Access’ in menu bar
3. Open sub menu under ‘Certificate Assistant’
4. Click ‘Request a certificate from certificate authority’
5. Enter your Apple ID email address and name
6. Select ‘Saved to Disk’ option
7. Click ‘Continue’
8. Save the file somewhere on your Mac ( .certSigningRequest )


### Register Certificate
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


### Export Certificate 

1. Please double click the file that downloaded on previous step
2. This will open Keychain Access app
3. Go to My Certificates
4. Select the certificate you opened 
5. Right click that certificate
6. Select ‘Export …’ option
7. Save the file with password ( .p12 ) and password
8. Password can be empty. To keep it secure, please enter password and save/remember the password


## Create App Identifier
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


## Creating Push Key
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
