---
id: appstore
title: Appstore Setup
sidebar_label: Appstore
---
Here is the list of steps you need to do in AppStore before the release, steps to update the app, etc

## Checklist
- [ ] Appstore access to us
- [ ] TeamID
- [ ] Below steps for prelaunch, launch and update
  
Pre-requisite 
- Decide whether you want as an individual licence or Organization
- Organisation level license provides more benefits in terms of access management (Especially creating provisioning certificates)

:::warning
You must have a macOS running computer/laptop to complete the provisioning exercises. If you do not have, set up a call with us
:::
Below are the steps to create provisioning certificates

## Official Resources 
**or Read below steps from our developer's contribution (You can contribute if we are missing anything)**
- Creating Certificates https://help.apple.com/developer-account/#/deveedc0daa0
- Register app id: https://help.apple.com/developer-account/#/dev1b35d6f83
- Create AppStore profile: https://help.apple.com/developer-account/#/devbd904d1a5

## If you are an organization 
- Invite Tradly email we have given to you with Admin or Developer Access
- If you do add as Developer access, you need to create the provisioning certificates (refer below steps) 
- If you do add as admin access, we take care of creating provisioning certificates 

## Create a new app in Appstore connect
1. Go to https://appstoreconnect.apple.com/apps
2. Click + Icon
3. Select ‘New App’
4. Select ‘iOS’ as a platform
5. Name - This is your app name
6. Primary language for the app
7. Select the bundle id for the app.
8. SKU - just enter bundle id itself
9. Select ‘Full Access’ for the User Access
10. Click ‘Create’


### Creating Provisioning profile
1. Go to developer.apple.com
2. Select ‘Account’
3. Select ‘Certificates, Identifiers & Profiles’
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
2. Click ‘Keychain Access’ in the menu bar
3. Open sub-menu under ‘Certificate Assistant’
4. Click ‘Request a certificate from certificate authority’
5. Enter your Apple ID email address and name
6. Select the ‘Saved to Disk’ option
7. Click ‘Continue’
8. Save the file somewhere on your Mac ( .certSigningRequest )


#### Register Certificate
1. Go to developer.apple.com
2. Select ‘Account’
3. Select ‘Certificates, Identifiers & Profiles’
4. Select ‘Certificates’
5. Click + Icon
6. Select iOS Distribution under Software
7. Click ‘Continue’
8. Upload the file downloaded in the previous step
9. Click ‘Process’
10. Click ‘Download’
11. Save this file somewhere on your Mac ( .cer )


#### Export Certificate 

1. Please double click the file that downloaded in the previous step
2. This will open the Keychain Access app
3. Go to My Certificates
4. Select the certificate you opened 
5. Right-click that certificate
6. Select the ‘Export …’ option
7. Save the file with password ( .p12 ) and password
8. Password can be empty. To keep it secure, please enter the password and save/remember the password


### Create App Identifier
1. Go to developer.apple.com
2. Select ‘Account’
3. Select ‘Certificates, Identifiers & Profiles’
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
- Select ‘Certificates, Identifiers & Profiles’
- Select Keys
- Click + Icon
- Enter Key Name (Example: appname_pushkey )
- Tick ‘Apple Push Notification service)
- Click Continue
- Confirm Register
- Download and share that file to our team

### Key ID
1. Go to developer.apple.com
2. Select ‘Account’
3. Select ‘Certificates , Identifiers and Profiles’
4. Select ‘Keys’
5. Select the key you shared above
6. You will see the Key ID there. Please share that ‘Key ID’ .

### Team ID
1. Go to developer.apple.com
2. Select ‘Account’ on Nav menu
3. Select ‘Membership’ on Side Menu
4. Please share that ‘Team ID’


## Appstore Management 
- When the team has access to your Appstore, we will directly upload the app(IPA) to your Testflight 
- You can test this app through Testflight apps on your iPhone to make sure everything is working properly before the release

## FIRST Release
Once all is good with the testing, you can go ahead and set up a release. 
- Create a new version 
:::warning Version Number
The version number is shown on the App Store and should match the one we used in Xcode.
:::

- Enter "What's new in this version"
- Update screenshots (You can take screenshots from the Testflight app )
- Enter promotional text, descriptions, keywords, Support URL, MArketing URL 
- Add assets like App store icon, 
:::warning App Review Information
Provide WORKING sign-in information for apple to sign in to your app and do the review. If you provide the wrong information, it will delay your app review. 
:::

- Notes under App Review information. Below is an example of text what we provide to Apple to guide them on how they can use the app. 
  - Steps to experience the app
  1. You need an approved tenantID before login in to the app. Use "tradlysocial" case sensitive on the first page
  2. Use the login address above to follow a store, making a purchase with COD or adding listings, etc. 
  3. Logout option available in the MORE section through Navbar

VIDEO GUIDE: https://drive.google.com/file/d/1AZMB1CNFGUsNi4n_GM62a93Xvk9QIpen/view?usp=sharing



## App Review Management
Apple may review the app within a week. If you get approved, GREAT! If not, we will help you wherever you can. But remember you need to take care of this place by reading the messages you receive from them, reply properly. If any doubts on what to reply, ask us. 

## App Update
Similar to the app release, we will directly push the app to your Testflight. You can do the same process of testing, creating a release, and pushing the app to Appstore. 
Releasing UPDATE BUILD
1. Go to https://appstoreconnect.apple.com/apps
2. Select your app
3. Create new version
4. Enter your version
5. Please fill ‘Whats new in the version’
6. Scroll down and Go to ‘Build’ section
7. Please select the latest build you have uploaded on last step ( you can identify by version number and build number )
8. Please select the Release options that you want. ( Automatic or Manual ) ( you can release automatically when apple approved , you can manually release after apple approved ) .
9. Click ‘Save’
10. Click ‘Submit for review’




## IPA Upload to Appstore via transporter
1. Uploading App to Appstore Connect via Transporter
2. Download Transporter app from Appstore - https://apps.apple.com/us/app/transporter/id1450874784?mt=12
3. Login using your apple account
4. Drag and drop the .ipa file delivered by us on Transporter app
5. Click ‘Delivery’ Button
6. It will take some to upload build to your app store connect 
7. Once build uploaded and it will be available on TestFlight for testing
8. Once testing done, you can create new release and upload build
