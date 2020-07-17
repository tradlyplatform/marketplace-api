---
id: superadmin-guide
title: SuperAdmin guide 
sidebar_label: How To
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

Most of the features we have in SuperAdmin are designed in simple & user friendly manner. And we are constantly looking way to improve the app. [Ideas are welcomed](support). 

3 sections 
1. Sidemenu which has all important menus which we will cover below + A small info on the sidebar which tells the current tenantID you are logged in. 
2. The body section for all the input and output with optionally filters, export, etc. 
3. Top left menu which has logout/notifications section 

## Approve Listing

![Approve Listings](/img/approve-listings.png)
To be on control with the quality/business logics of your platform is “Approval” feature. You can approve or disapprove
- You will find a small count label based notification next to that menu. That conveys the number of listings pending to be actioned
- You can approve or disapprove listings after use posted. 


## Listings 
### Add Listings
![Add Listings](/img/addlisting.png)
<highlight color="#25c2a0"> Applicable to B2C </highlight> 

You can create listings from this section. 

1. Listing titles which is mandatory
2. listing descriptions which are optional
3. Listing Images: You can add until 4images. First image will be used as a featured image
4. Currency is considered mandatory as well. However we are making the default currency pre-populated, so you might not need to select always. If you are business with multi-currency, you can use different currency whenever you create listings. 
5. Offer Percent: Optional: If you are a marketplace platform with products having discounts, you can use this feature. It shows a slashed price in the user end app. 
 

### Listing Categories

if you have read from about the 
[Advanced 4 Level category](/docs/appfeatures#advanced-4-level-category), you can configure nested categories.

![Category Level](/img/category-level.png)
Let's understand the category level through this image
1. Whenever you create a parent(1st level) category, you select the parent which is by default there. 
2. When you create a second level, you can select for example MEN as shown in the image. When you create, it is shows as for example T-Shirt
3. When you create a third level, then you can select something like "--Tshirt" here. Each hyphen is considered as a hierarchy level

### Creating a Category
![Adding category](/img/adding-category.gif)
As shown in the gif on how to creategories
1. Click on the CATEGORY.
2. Click ADD CATEGORY
3. You will then be directed to a page where you can create your own categoroes. 
4. You will then select your category level, the name of your category, and upload an image to describe that category.
5. You will then click submit, and your category should be added to the category list.

### Category Management
Once you create a category, you can edit them, it's get an update to the existing data as a standard procedure.  
![Category Management](/img/category-management1.png)



### Creating Attributes
Go to Listings > Attributes > Add Attribute 
![Managing Attributes](/img/managing-attributes.png)
1. Add attributes
2. Edit or Delete Attributes
3. Find the number of attributes VALUES under each attributes(Count), you can click to find the existing values. By Clicking the PLUS button will lead you to add new attributes values a


![Creating Listings Attributes Values](/img/adding-attributes.png)
Listings > Attributes > On to the respective attributes > Click on the count > view all attribute values. 
Once you are into specific attribute, you can find the existing values and ADD new values as shown in the reference image. 
1. Add new values from here
2. EDIT to activate or deactivate certain values. 

This example values how attribute values could be used. For an digital gadgets marketplace, it might want to allow users to submit listings with details like SPACE or VERSION of a certain device, so that the buyers can filter the right products.




## Accounts (Users/Profiles)
[Explanation of accounts available here](docs/appfeatures#account)
This is visible only in production/live SuperAdmin panel and not on sandbox accounts. 

### Account Category

![Account Categories](/img/account-categories.png)
After onboarding users with simple signup, you might want to allow them to have personalised account opening. Accounts can be called in different way based on business model. 

So you can have multiple account types based on user persona. You will see through account attribute values, how this can useful having categories. To activate that, you need to setup account categories. 

:::important
By default, account creations fields are only image, Name, Descriptions. All other fields are created via attributes.
:::
### Creating Account Category
![Add Account Category](/img/add-accounts-category.png)
- It is simple as listing categories in all technicalities
- Select the category (Default: Parent) 
- Enter category name
- Select the icon as per the dimension. Crop it before uploading
- Submit

To test: You can go to app > signup up as a new user > Then before submitting listing or open shop/account, you will be able to find the category. 

### Creating Account Attributes
![Creating Account Attributes](/img/account-attributes.png)
So now you have created categories as per your plan. You can configure different fields(Attributes) that need to be in account creation page apart from default config. 

In the image,

1. Categories: You can find the 4 attributes as an example. And how they are configured only for specific category types. (Shop Govt registration no only for Govt.Registered shop category) 
2. Operation Days Attribute: Operation days can have multiple values. That's why you are able to see + sign to add values 
3. Attributes: A. shop registrations - mostly one number AND B. Whatsapp one number is sufficient. Both of them as they don't have multiple values, they do not have option to ADD VALUES. We will see how they are configured on the next step. 


![Account Attributes Creation](/img/account-attributes1.png)
Accounts > Attributes > Add Attributes.
- This steps lead you to create attributes as shown in the image. 
- Currently, it shows how the "Shop Govt Registration No" has been created. 
- You can make the attributes (fields to be entered) as optional or mandatory as well. 
- And this attribute is been configured only for "Govt.Registered Shop"



![Attributes Types](/img/Attribute-types.png)
So when you create attributes, you must need to select the type of attributs. Currently we have 4 types of attributes and others will be released progressively. 

|   Field Type     |   Example          |   Value             |
|------------------|--------------------|---------------------|
|   Single Select  |   Gender           |   - Male OR Female  |
|   Multi Select   |   Available sizes  |   S, M, L, XXL      |
|   Single Value   |   Phone number     |   +60123456789      |
|   Multi Value    |   Sizes            |   32,34,36          |

### Adding attribute values 
![Attributes Values](/img/attribute-values.png)

In the "Operation Days" Attribute values which is a multi value, you can find 7days we have added there. It can be used creatively in many different ways. 


## Banners
Here got details on [the use cases of banners](/appfeatures#banners)

### Adding Banners
![Banner Creation](/img/banner-destination.png)
- Give out a name for you to differntiate different banners. We recommnd names with month_campaigntype_optionalnote as you can export this data in future to analyze performance and other campaign metrics. In future, we are planning to supply this name to marketing analytical tools which can provide you how many people clicked, viewwed this banners, etc. 

- Upload an image which will lead you to crop the images based on the requirement. 
- Select the target destination of the banner. 
- Schedule the banner to run on specific days using the START DATE and END DATE
- And also activate or deactivate the banners. Even if a banner falls under a scheduled dates, you can still use STATUS function to switch off or switch on the banner. 

### Banner Placement
You can upload different banners for Mobile application and WebApplication with diffent dimensions/settings. 

![Select banner placements](/img/banner-medium2.png)

![Banner Mediums](/img/banner-medium.png)

### Banner Destination
Banners can be configured for different actions. 

- You can use the banners as a static informational or promotion banners
- ![General Destination](/img/general-destination.png)

- OR You can use the banners destined to a particular listings (We suggest you to put CTA button for people to differentiate this banner types)
- ![Product Destination](/img/product-destination.png)

:::note COMING SOON. 
Banners destined to a particular collection of listings through TAG features
:::

## Multi Currency
![Currency Management](/img/currency-management.png)
Currently you can configure different currency on top of your default currency. 

Let's use USD to MYR as example
- Names can be just ISO Currency code or Name of the currency. EXAMPLE: MYR or Malaysian Ringgit
- CODE: MYR 
- Exchange Rate: If your base currency is USD and you are adding MYR as currency. It should be the conversion from USD to MYR. 
- FORMAT: You can format how you want the currency should look like with the amount in front end apps. Example: @ {amount}. Here '@' -> you an replace any symbols here. It could be a dollar or a unicode symbol
- ![Google conversion](/img/google-conversion.png)

