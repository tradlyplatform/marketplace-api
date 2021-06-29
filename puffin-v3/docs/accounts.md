---
id: accounts
title: Accounts
sidebar_label: Accounts
---

### Account
When a user register in the app, he will be optionally able to create accounts based on his purpose of joining the platform. 
- For a retail product marketplace like Etsy/AliExpress, Accounts are called as Stores Profiles. 
- For an educational marketplace like Coursera, Udemy, Accounts are called as Tutor Profiles
- For a property marketplace platform like Airbnb, it is called as Tenant Profile. 
We call them generally as accounts and it may vary based on your business model. As a functional element it is used to create accounts. 


#### Account Attributes
You can create additional attributes(fields) of information to be collected when user open an account.
Example such as 
- Fashion Marketplace ( can have location, What type of products they sell, etc)
- EduTech marketplace (Tutor availability, Expertise, Academic qualifications , etc) 
- Grocery Marketplace( Shop Location , Type of product they sell, Growing method(Organic), Procurement(home made or Direct farm buy or resell) 

## Flexible Account creation
As a platform owner, you can design different account creation form based on the type of accounts you have. 

- When you are building hybrid marketplace, you want to have different stake holders to open accounts. And the accounts perhaps need different information than the primary information.
- By Default, we only collect the Name and Description of the account registration 
- You can configure additional attributes 
- You can create multiple categories of accounts 
- You can create additional attributes specific to an account category rather than overall 

## Accounts (Users/Profiles)

This is visible only in production/live SuperAdmin panel and not on sandbox accounts. 

### Account Category

![Account Categories](/img/account-categories.png)
After onboarding users with simple signup, you might want to allow them to have personalised account opening. Accounts can be called in different way based on business model. 

So you can have multiple account types based on user persona. You will see through account attribute values, how this can useful having categories. To activate that, you need to setup account categories. 

:::important
By default, account creations fields are only image, Name, Descriptions. All other fields are created via attributes.
:::

Latest video 
<iframe width="560" height="315" src="https://www.youtube.com/embed/T1sN1C9qUSI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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



### Auto approval having issues 
I have enabled auto account approval and listing approval but the items are not approved yet

- For existing accounts, the configuration will not approve by itself. It need to approve manually first and then auto approve. 


