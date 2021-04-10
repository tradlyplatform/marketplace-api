(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),o=(n(0),n(195)),i={id:"changelog-api",title:"Changelog - API",sidebar_label:"Changelog - API"},c={id:"changelog-api",isDocsHomePage:!1,title:"Changelog - API",description:"14 March 2021",source:"@site/docs/changelog-api.md",permalink:"/docs/changelog-api",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/changelog-api.md",sidebar_label:"Changelog - API",sidebar:"someSidebar",previous:{title:"Contributing to TradlyPlatform documentation",permalink:"/docs/contribute"},next:{title:"Changelog - iOS",permalink:"/docs/changelog-ios"}},l=[{value:"14 March 2021",id:"14-march-2021",children:[]},{value:"23 March 2021",id:"23-march-2021",children:[]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"14-march-2021"},"14 March 2021"),Object(o.b)("p",null,"Inventory & stock changes are done. Below are the changes and can be used as test cases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"New field\xa0stock\xa0has been introduced in listing object which will tell current stock of the listing"),Object(o.b)("li",{parentName:"ul"},"By passing\xa0stock\xa0 (should be greater than -1) in add listing API will create inventory for the given stock"),Object(o.b)("li",{parentName:"ul"},"By passing\xa0stock\xa0(should be greater than -1) in update listing API will update the stock but inventory won't be changed"),Object(o.b)("li",{parentName:"ul"},"Sold\xa0key in listing obj is deprecated but has backward compatibility. while calling mark as sold API in older version of app, stock will be set as\xa00\xa0. In new version of app we will remove Mark as Sold replaced by updating stock with positive values."),Object(o.b)("li",{parentName:"ul"},"Cart details API -> listing object will also have stock key, in case of stock as\xa00\xa0show out of stock in line item (also you can show a banner at the top saying\xa0Some of your items in the cart are out of stock\xa0)\xa0"),Object(o.b)("li",{parentName:"ul"},"While creating order having OOS itemsm, checkout API will throw error\xa0some of the item in cart is out of stock"),Object(o.b)("li",{parentName:"ul"},"Once order is created, stock will be reduced for all listings in the cart based on the cart quantity"),Object(o.b)("li",{parentName:"ul"},"Once order is canceled either by customer or seller, listings will be re-stocked based on quantity"),Object(o.b)("li",{parentName:"ul"},"Listings with stock\xa00\xa0will not be coming in listings list API but listing detail API will give response even though stock is\xa00\xa0so ensure updating the UI with 'Out of stock' and don't show Add to Cart button")),Object(o.b)("h2",{id:"23-march-2021"},"23 March 2021"),Object(o.b)("p",null,"New Payment Method for Latin America. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You will get PayU as one more payment method. once order is created call Commons -> Payments -> PayU Latam -> paymentIntent"),Object(o.b)("li",{parentName:"ul"},"You will be getting html to use it in webview which will redirect to payU payment page")),Object(o.b)("img",{src:"/img/payU-test-card-details.png",alt:"payU-test-card-details",width:"700"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can use this test details in screenshot to pay. You can change the page to English from top right based on your locale or client locale.")))}u.isMDXComponent=!0},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);