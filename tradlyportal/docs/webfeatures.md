---
id: webfeatures
title: Features available in tradly web app
sidebar_label: Webapp features
---

This document will cover most of the features available in the app. The terms used may vary based on business nature but the functional element are mostly applicable for many marketplace. 

For any doubts, feel free to message instantly on our chat or emails at team@tradly.app

### Listings
We call everything posted by the user as Listing. But it can also be called as Post, Product, Service Advertisement, Classified post, Task, Notes, Energy Stations, etc. However we try to create as much as personalised terms according to the business nature on the solutions(usecases) guide section.

### Account
When a user register in the app, he will be optionally able to create accounts based on his purpose of joining the platform. 
- For a retail product marketplace like Etsy/AliExpress, Accounts are called as stores. 
- For an educational marketplace like Coursera, Udemy, Accounts are called as Tutor Profiles
- For a property marketplace platform like Airbnb, it is called as Tenant Profile. 
We call them generally as accounts and it may vary based on your business model. As a functional element it is used to create accounts. 


## Different Login system
<b> User Story </b>:  An user who wants to register inside your apps to start using your services. 

Depends on the business nature, you may want to have different registration system for your users to register. We have the below list of registrations available in the app
- Facebook Registration: An user can use their facebook login to signin/signup
- Google Registration: An user can use their Google login to signin/signup
- Native email registration : An user can just any email which is not connected to 3rd party logins to Signin/signup
- Phone number based registration: An user can signin/signup using their phone number with OTP verification in their first registration. In the subsequent signin, the verified phone number and password can be used to signin.

In the subsequent documentation, we will mostly use terms and explanation based on typical retail marketplaces. 

## Social marketplace feed
<b> User Story </b>: An user who wants to have social media styled social feed where they can see the listings, follow stores and discover trending accounts/profiles/stores 

An important part of social marketplace platform is social features where you have many engagement generating features. Things like likes, follow, chat, etc can create more engagements between different users in the app instead of just browsing different listings.

Currently available , 
- Like listings
- Follow accounts 
- Chat with accounts
- User Ratings 
- User Reviews
- Wish list (private)
- Groups (Alpha release)

Coming Soon
- Comments on listings level
- Wish list (public)
- Stories like instagram 





## Customisable collections widgets
An user when he visit the home page of the app, should be able to find fresh collection of ideas. 

Currently  available
- Recent list of accounts/stores/profiles 
- Recent list of Listings/Ideas/Postings/Ads

Coming soon on self serve platform (Available immediately based on manual request) 
- Custom collections based on tags

## Banners
A platform owner able to use this media section to show any sort of communication on this prime placement. 

You can use this to 
- Important promotions
- How to Guides
- Explanation of some features 
- Specific product promotion that leads to that product page
- Advertisement placement 
- Towards a particular tag (A tag has collection of listings)
- And many other usages based on your ideas. 



## Hybrid Listing Page
A platform owner can configure custom fields/Attributes on listings submission personalised to categories 

[Image] 

* When a user add a listing >  on top of the title, description, category, images, List price, offer percent, tags (as you seen in the redbox)> we can add other attributes as a field to collect more information.  
* Example Scenarios  
    * Product type: used or new  
    * For fashion marketplace   Item material: Cotton, Linen OR  Item color: Red, blue, Green 
    * For agriculture marketplace> Price per: Gram, Kilogram 
    * For property marketplace> Rental Price: Per day, per week, per month.   

Configuration: You can configure attributes by all 4 level categories. 


## Advanced 4 Level category
As a platform owner when you want to build high level marketplace to have deeper categorisation. 

Example:
- Men
- - Clothing
- - - Tops, 
- - - Coats
- - - Beachwear, 
- - - BridalWear
- - - Jeans
- - - - Skinny Leg

Men is a first level category 
Clothing is a second level category
Tops, Coats, Beachwear, Bridal wear and Jeans are 3rd level category
Skinny leg is a 4th level category

- Based on your business nature, you can use this in different ways. You can use category to allow users to discover somethings or find different set of needs based on how you plan it. 
- You can add attributes based on 

Configuration: 
When you configure an attribute for 4th level , the attribute is only available for 4th level and not to its parent level categories. You need to select/add the parent categories and child categories wherever it’s applicable. [LINK] more info available here on how to configure this. 



## Flexible Account creation
As a platform owner, you can design different account creation form based on the type of accounts you have. 

- When you are building hybrid marketplace, you want to have different stake holders to open accounts. And the accounts perhaps need different information than the primary information.
- By Default, we only collect the Name and Description of the account registration 
- You can configure additional attributes (HOW TO CONFIGURE : LINK)  based on your business nature
- You can create multiple categories of accounts 
- You can create additional attributes specific to an account category rather than overall 



## Wishlist / Bookmarks / Save Listings / Favourites
User able to add an item to his Wishlist (also called as bookmarks, save, favourite) to refer that in future for further actions 

- When a user like a listing from any place while he discover, it’s get added to his wish list. 
- Like/Unlike activates/deactivates the item to be in wish list. 



## Advanced Search
User able to do advanced search of listings through search function to find the accurate things

Search feature allows the user to 
- Traditional listing name and description based search
- Advanced attributes as an filter to filter listings
- Sorting functions like price , recency

Coming soon
- Map level filters (Neaby miles/KM) 
- Location searches (by city, region and country) 


## Multiple Payment Options
User able to select different payment gateways based on his preference to checkout 

Current available
- Cash on delivery/pickup 
- Stripe Connect (Master, VISA, Apple Pay) 

## Multiple Shipping Address
User able to save multiple shipping address based on his circumstances to choose

- Add unlimited shipping address in his profiles
- Select different delivery address on every new orders 
- Edit, Delete shipping address. 

## Language Choosing
User able to select his personal choice of language for the app to use

- If the platform owner enables multi language option, the user able to select the language preferences under the settings of the app 


## My Orders / Bookings / Others
User able to keep track of the orders or bookings he made with other accounts and follow the updates from there

Currently available 
- User able to see the order details - Time , Order_ID
- User able to see the listing he purchased 

Coming soon
- Status of the order (Cancelled, Shipped) 
- Status of the shipping (If shipping/logistics partner API is connected) 

## Ratings & Reviews
User able to rate and review the listings he recently got serviced, purchased, made bookings, etc to share his experiences

Configuration: Similar like listing attributes, platform owner can design what sort of informations he wants to collect from the user on the rating and review page

Currently available: 
- Rating (5 Stars) 
- Type of ratings
- Photos 
- Descriptions 
- Short title 

Coming soon
- Configure the above informations to be optional or mandatory 
- Activate/Deactivate the above attributes from super admin panel 
- Add new attributes from super admin panel 


## Cart
User able to add multiple items to his shopping cart to make a single transaction 
- When a user make a purchase from different sellers, A single transaction is created to show his purchase amount, amount charged on card, time, etc.
- However unique orders will be created per seller to allow your users to track the shipment on seller level.


