---
id: appcustomisation
title: Understanding the app customisation
sidebar_label: Customising App
---


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


As a platform owner you may wish to customise your platform UI, functionalities, wordings, etc. We have shared below on what sort of features you can customise by yourself, what features need our developer assistance, what features cannot be customised under validation package. If there is anything which is not listed here, feel free to message us on the chat. 

:::important
- This documentation is for Validation and Growth Package subscribers and not meant for Enterprise/Gov
- Read about this features in details [here](appfeatures.md) before reading on whether it is customisable.
:::

** Undestand the Highlights ** 
- <Highlight color="#25c2a0"> Green color means customisable through Superadmin Panel.  </Highlight> 
- <Highlight color="#1877F2"> Blue color customisation need developer assistance. </Highlight>
- <Highlight color="#fa383e"> Cannot be customised </Highlight>

## Dynamic Customisation 
This below list of customisation will be able to synchronised as make changes in the superadmin panel and reflected in apps. (Except the UI)

### <Highlight color="#25c2a0"> Listing submission </Highlight>
As a platform owner, you can manage what sort of fields need to be in the listing submission page
- You can activate, deactivate certain fields
- You can add new attributes(fields) for all listings or specific attributes per listing category

### <Highlight color="#25c2a0"> Listing Categories Section </Highlight>

As a platform owner, you can configure multiple parent categories and sub categories for 3 more level from the superadmin panel

### <Highlight color="#25c2a0"> Listing Detail Page</Highlight>
- Listing detail page contents is dynamic based on the listing attributes configuration you make
- If you want to change the UI of the listing detail page, It is available under Growth package with our developer assistance.



### <Highlight color="#25c2a0"> Banners  </Highlight>

As a platform owner, you can manage your banners from the superadmin panel. 
- Add new banners for web and app separately
- Activate or Deactivate existing banners
- Schedule time for banners to be live
- You can link the banners to Listing ID or just leave it as a static banners

Note: There is no limit for number of banners to be active



### <Highlight color="#25c2a0"> Account Creation  </Highlight>
- Platform owners can configure the fields need to be in account creation page
- Extra attributes can be added based on categories of account (Example:Grocery platform wants to have Shop, Farm, Home Garden)

### <Highlight color="#25c2a0"> Collection Widget </Highlight>
Coming soon.  You can have multiple collection widget on the home page

## One time pre launch customization you can make
You will be able to make the below customisation before the app gets published in the respective stores. This is done after you make the first payment with return policy if you are not happy about it. 
- Color of the app. Example: All the things you see as primary color(mostly in our demo apps, you will find gree) can be changed to your brand primary 
- Logo, Favicons, 
- Base language of the app (+ Additional languages: You need to provide a translated file after we shared you the source)
- Base currency 
- Terms & Conditions URL
- Privacy URL 
- Texts used in the app 
- Login method and Login API-Keys & Credentials
- And the below things based on the details below

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
- Free customisation available on request
- Customisation like moving around different navbar items

### <Highlight color="#1877F2"> Social Feed </Highlight>
- Not possible under validation package.
- Available under Growth Package subscribers with our developer assistance.
- You can deactivate this whole screen under validation package

### <Highlight color="#1877F2"> More Section </Highlight>
- Adding iframe items or rearrangement of existing items on the menu 
- Available under Validation package with our developer assistance.

### <Highlight color="#fa383e"> Search Screen </Highlight>
- Available under Growth Package subscribers with our developer assistance.
- Can deactivate the whole feature

### <Highlight color="#fa383e"> Branch Invite </Highlight>
- Cannot be customisable except the branding colors
- Can deactivate the whole feature

### <Highlight color="#fa383e"> Chat screens </Highlight>
Cannot be customisable except the branding colors
