---
id: ga
title: Integrating Google Analytics
sidebar_label: Google Analytics
---


Google Analytics is a analytics service offered by Google that tracks and reports website traffic, measure your advertising ROI, etc. It comes on top of the Firebase(Mandatory) we integrate for you. 

https://analytics.google.com/


## Setup for App
You might not need to do anything specifically for this, apart from opening a firebase account. It is automatically created for you under the same email you. It look like the below screenshot
- ![ga-app](/img/ga-app.png)
- ![ga-app2](/img/ga-app2.png)

## Setup for Web
This is applicable only if you have subscribed to our webapp product. If you are subscribed to full package, then we will use the same trackingID for the mobile. Hence you can have consolidated data. If you want to have separate property for web, you can provide seperately though. 
1. Open an account [here](https://analytics.google.com/). 
2. Select 'Web' as property.
3. The tracking ID is a string like UA-000000-2. [learn more](https://support.google.com/analytics/answer/7372977?hl=en). 
4. Update the Tracking ID inside the SuperAdmin panel settings page
5. Our developers(for now) will update the tracking ID in your apps
6. You will start seeing the data in 24hours. You can use this [chrome plugin](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en) to see whether the update is done 