---
id: appcustomisation
title: Understanding the app customisation
sidebar_label: Customising App

---

As a platform owner you may wish to customise your platform UI, functionalities, wordings, etc. We have shared below on what sort of features you can customise by yourself, what features need our developer assistance, what features cannot be customised under validation package. If there is anything which is not listed here, feel free to message us on the chat. 

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);



:::important
- This documentation is for Validation and Growth Package subscribers and not meant for Enterprise/Gov
- Read about this features in details [here](appfeatures.md) before reading on whether it is customisable.
:::

** Undestand the Highlights ** 
- <Highlight color="#25c2a0"> Green color means customisable through Superadmin Panel.  </Highlight> 
- <Highlight color="#1877F2"> Blue color customisation need developer assistance. </Highlight>
- <Highlight color="#fa383e"> Cannot be customised </Highlight>

## One time pre launch customizations
You will be able to make the below customisation before the app gets published in the respective stores. This is done after you make the first payment with return policy if you are not happy about it. 
- [ ] App Primary Color
- [ ] App Icon, Logo
- [ ] Base language of the app (+ Additional languages: You need to provide a translated file after we share you the source)
- [ ] Base currency 
- [ ] Terms & Conditions URL
- [ ] Privacy URL 
- [ ] Important texts that need to be changed
- [ ] Login method and Login API-Keys & Credentials
- [ ] And the below things based on the details below



### App Primary Color
- All the things you see as primary color(mostly in our demo apps, you will find green) can be changed to your brand primary color. The current color: 13B58C
- You can duplicate our design template from Figma and apply different color using our design palette to see how it going to look
https://www.figma.com/file/CVL55dJAeCZm09qpepE9XQ/TradlyPlatform-DesignKit?node-id=0%3A1
- @AgencyPartners: You can also use the components to build your own UI or take it as reference on how each things are structured. 

### Logo / Splash Screen
Splashscreen which is the first screen will have a background color (the brand primary color) and your logo. See below for reference
<img src="/img/splash.png" alt="splash Screen" width="200"/>

- Transparent background
- Dimension: 150*150 or similar range if the logo is not square
- IOS: Upload your logo for iOS in PNG format with 3 variance 1PX, 2PX & 3PX. 
- Android: SVG format 

### App Icon / Favicon
App Icon are used in push notifications alerts, app launch icon and also which are visible whem users are searching for your app on playstore and appstore. 
- iOS Specification: https://developer.apple.com/design/human-interface-guidelines/ios/icons-and-images/app-icon/
- Android Specification: https://developer.android.com/google-play/resources/icon-design-specifications
- Upload both of them according to the spec. Uploading wrong spec can delay the launch. 

** Quick Tip **
Since app have different resolutions, you need to provide app icons in different sizes. For that you can use third party tool. Here is how to use the ‘Make App Icon’ tool.
1. Go to https://makeappicon.com/
2. Upload your app icon ( png file )
3. It will ask few questions. You can skip those questions
4. At the end, it will your email id to send app icon files. ( Note: you can untick the newsletter )
5. Zip file will be sent to your email id
6. Download that zip file and upload in mobile app config in SuperAdmin V2.

### Onboarding Images
This are getting started images before user signup. You can use this to educate on what your app can do or explaining other important features of the app. In the below image red higlighted section. 
<img src="/img/onboarding.png" alt="onboarding" width="200"/>

- iOS Specification: - Upload in PNG format with 3 variance 1PX, 2PX & 3PX. 
- Android: SVG format 
- Size: Less than 200KB per image for faster app load.

** Quick Tip **
- You can download open source illustrations with your branding color from https://undraw.co

### Top bar / Tool bar text
The top text in the tool. It is always your app name. 
- Update the app name 
- Color code of that text: default is white. Suggested to keep white if your primary color is dark. 
- Default font: Montserrat

### Main Action bottom navbar Icon
The main action you want to make user to do often. you can consider this as main call to action which will be always seen in the botton navbar. A simple + would be doable but if you want to go more than that, you can share that. 
<img src="/img/navbar.png" alt="navbar" width="300"/>

- iOS: PNG format with 3 variance 1PX, 2PX & 3PX. 
- Android: SVG(Scalable vector image) format.
- Transparent background
- Dimension: 150px*150px

### Important Texts
- Onboarding Screens Text: 5-10 Words line for 3 screens.
- Registration Page Text: Example: "Welcome to Brandname" or "Welcome to Brand name - Short tag line"


### URL Changes
As a mandatory practice for you, you will need to provide Privacy URL and T&C to make sure all the users are of your terms and conditions. Also the privacy URL to share how you going to use users private data. Plus this two things will be needed for appstore and playstore listings submission as well. 
- Privacy URL: example.com/terms-condition
- Terms & Condition URL: example.com/privacy-policy/

### Email Verification
If you are using email registration method, then an email address would be needed to use from address and replyto address. 
- Example:  contact@example.com, hello@example.com, support@example.com 
- A mandatory email that need to be verified with our email service provider. 
- This email address will be used to send welcome email, OTP verification emails and also in future for listing approved, etc. 

- The system will send an email to you when you update this section, it has the steps to verify

Further reading if you are exploring why need to verify: https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html?icmpid=docs_ses_console 

### Domain Verification
- Example:  if your email is going to be support@example.com, then it should be example.com
- Once you enter this, you will receive an email in a hour to update the TXT record in your DNS settings.
- Contact your Domain provider to identify where to add TXT record or simple google search like "Adding TXT record in Godaddy or name.com, etc" 
- You might not need to delete or modify any existing TXT records. 

Further reading if you are exploring why need to verify domain: https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-domains.html?icmpid=docs_ses_console

## Dynamic Customisation 
This below list of customisation will be able to synchronised as make changes in the superadmin panel and reflected in apps. (Except the UI)

### <Highlight color="#25c2a0"> Listing submission </Highlight>
As a platform owner, you can manage what sort of fields need to be in the listing submission page
- You can activate, deactivate certain fields
- You can add new attributes(fields) for all listings or specific attributes per listing category

![attributes](/img/attributes.png)

### <Highlight color="#25c2a0"> Listing Categories Section </Highlight>

As a platform owner, you can configure multiple parent categories and sub categories for 3 more level from the superadmin panel

![Category](/img/category.png)

### <Highlight color="#25c2a0"> Listing Detail Page</Highlight>
- Listing detail page contents is dynamic based on the listing attributes configuration you make
- If you want to change the UI of the listing detail page, It is available under Growth package with our developer assistance.

![product-detail](/img/product-detail.png)


### <Highlight color="#25c2a0"> Banners  </Highlight>

As a platform owner, you can manage your banners from the superadmin panel. 
- Add new banners for web and app separately
- Activate or Deactivate existing banners
- Schedule time for banners to be live
- You can link the banners to Listing ID or just leave it as a static banners

Note: There is no limit for number of banners to be active

![promobanner](/img/promobanner.png)

### <Highlight color="#25c2a0"> Account Creation  </Highlight>
- Platform owners can configure the fields need to be in account creation page
- Extra attributes can be added based on categories of account (Example:Grocery platform wants to have Shop, Farm, Home Garden)

![account-creation](/img/account-creation.png)

### <Highlight color="#25c2a0"> Collection Widget </Highlight>
You can have multiple collection widget on the home page. Example: Currently you can see below two widgets like "Stores to follow" an account widget and "Latest products" a listing widget. 
![collection-widget](/img/collection-widget.png)





### <Highlight color="#1877F2"> Groups </Highlight>
As a platform owner, you can let the developers know if you want to activate groups feature.
- By default, we don't activate groups features until manually requested.
- Groups features are in beta testing


### <Highlight color="#fa383e"> Top Header </Highlight>
- This is the place 90% cases where you will see app names, notification icons, chat icons and also search bar
- Not possible to customise under validation package if there is drastic change. But if you want to rearrange the placement, it is possible to change based on your request. 
- You need to subscribe growth plan for drastic changes with our developer assistance
 
### <Highlight color="#1877F2"> SuperApp Widget </Highlight>
SuperApp widget allows to combination of different actions with different objectives. Mostly you would have seen in fintech apps, Uber, etc. 
- Currently it needs developer assistance. 
- We are releasing superadmin level customisation on Q4,2020

### <Highlight color="#1877F2"> Navigation Bar / Footer </Highlight>
The navigation bar in the footer of the app where you can navigate between home, social feed, more section, etc. 
- Customisation available on request with the Growth plan
- Free to change the "T" icon

![navbar](/img/navbar.png)

### <Highlight color="#1877F2"> Social Feed </Highlight>
- Not possible under validation package.
- Available under Growth Package subscribers with our developer assistance.
- You can deactivate this whole screen under validation package

### <Highlight color="#1877F2"> More Section </Highlight>
- Adding iframe items or rearrangement of existing items on the menu 
- Available under Validation package with our developer assistance.

![Moresection](/img/Moresection.png)

### <Highlight color="#fa383e"> Search Screen </Highlight>
- Available under Growth Package subscribers with our developer assistance.
- Can deactivate the whole feature

### <Highlight color="#fa383e"> Branch Invite </Highlight>
- Cannot be customisable except the branding colors
- Can deactivate the whole feature

### <Highlight color="#fa383e"> Chat screens </Highlight>
Cannot be customisable except the branding colors
