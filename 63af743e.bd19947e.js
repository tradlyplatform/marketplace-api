(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(7),o=(r(0),r(195)),i={id:"stripe",title:"Setting up Stripe",sidebar_label:"Stripe Payments"},s={id:"stripe",isDocsHomePage:!1,title:"Setting up Stripe",description:"TradlyPlatform uses two types of Stripe features",source:"@site/docs/stripe.md",permalink:"/docs/stripe",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/stripe.md",sidebar_label:"Stripe Payments",sidebar:"someSidebar",previous:{title:"Stripe Connect Onboarding",permalink:"/docs/stripe-onboarding"},next:{title:"Getting to know about SuperAdmin",permalink:"/docs/superadmin"}},l=[{value:"How our System process flow connected with Stripe Connect?",id:"how-our-system-process-flow-connected-with-stripe-connect",children:[]},{value:"How payment and payout works?",id:"how-payment-and-payout-works",children:[]},{value:"Timeline of TradlyPlatform transaction triggers",id:"timeline-of-tradlyplatform-transaction-triggers",children:[]},{value:"FAQ for Platform Owners",id:"faq-for-platform-owners",children:[{value:"What&#39;s the difference between Stripe Standard and Stripe Express?",id:"whats-the-difference-between-stripe-standard-and-stripe-express",children:[]},{value:"Can I use Stripe Standard?",id:"can-i-use-stripe-standard",children:[]},{value:"Can I use Stripe Express?",id:"can-i-use-stripe-express",children:[]},{value:"Can I move from Stripe Express to Standard?",id:"can-i-move-from-stripe-express-to-standard",children:[]},{value:"Can the seller release the payout himself?",id:"can-the-seller-release-the-payout-himself",children:[]},{value:"Don&#39;t activate automated payout",id:"dont-activate-automated-payout",children:[]}]},{value:"Refund",id:"refund",children:[{value:"Refund for Platform Owners",id:"refund-for-platform-owners",children:[]},{value:"Issuing refunds",id:"issuing-refunds",children:[]}]}],c={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"TradlyPlatform uses two types of Stripe features"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Stripe Payments/Billing (For subscription, this is mostly available for all countries)"),Object(o.b)("li",{parentName:"ol"},"Stripe Connect (Marketplace features with pay in and payout, Availabel only for 30+ countries only)\nURL : ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://stripe.com/global"}),"https://stripe.com/global"))),Object(o.b)("h2",{id:"how-our-system-process-flow-connected-with-stripe-connect"},"How our System process flow connected with Stripe Connect?"),Object(o.b)("p",null,"We are publishing the flow chart soon. "),Object(o.b)("h2",{id:"how-payment-and-payout-works"},"How payment and payout works?"),Object(o.b)("p",null,"Taking Australia as example. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stripe.com/au/pricing"}),"Refer pricing")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Set minimum price for items that can be purchases online , so you don't make loss"),Object(o.b)("li",{parentName:"ul"},"Explicitly inform clients anywhere you think is best to explain \"Averagely our payment process charge us #% - #% for payments and payouts. So your users understand that you don't charge a lot of commission"),Object(o.b)("li",{parentName:"ul"},"Set commission % properly in SuperAdmin Panel to avoid bearing fee on your wallet"),Object(o.b)("li",{parentName:"ul"},"When your stripe balance gets reduced due to stripe fee like this, the payout will not be on time due to insufficient balance")))),Object(o.b)("p",null,"Here is some example scenarios"),Object(o.b)("img",{src:"/img/stripe-express-example1.png",alt:"stripe-express-example1",width:"700"}),Object(o.b)("hr",null),Object(o.b)("img",{src:"/img/stripe-express-example2.png",alt:"stripe-express-example2",width:"700"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"View in full screen: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.google.com/spreadsheets/d/e/2PACX-1vRoRCUGXnu1Lmu5f6-qOa4fKFHX0vWWozt1jiUDB5cz3tcNqzUy1eddiLEU60Biz_yRxbZ6EZ-KwUbb/pubhtml?gid=2108306743&single=true"}),"https://docs.google.com/spreadsheets/d/e/2PACX-1vRoRCUGXnu1Lmu5f6-qOa4fKFHX0vWWozt1jiUDB5cz3tcNqzUy1eddiLEU60Biz_yRxbZ6EZ-KwUbb/pubhtml?gid=2108306743&single=true"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Here is the Google Sheet link for you to play around this calculation :\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.google.com/spreadsheets/d/1JVmwtW1cFccYc-nCoK6pndIGYNTl4Ny2WAy1ErTtos0/edit#gid=2108306743"}),"https://docs.google.com/spreadsheets/d/1JVmwtW1cFccYc-nCoK6pndIGYNTl4Ny2WAy1ErTtos0/edit#gid=2108306743"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/superadmin-guide#supply-commission"}),"Read here on how to configure commission % in SuperAdmin")))),Object(o.b)("h2",{id:"timeline-of-tradlyplatform-transaction-triggers"},"Timeline of TradlyPlatform transaction triggers"),Object(o.b)("p",null,"(Right click and view as full image)"),Object(o.b)("img",{src:"/img/tradly-transactions-timeline.png",alt:"tradly-transactions-timeline",width:"700"}),Object(o.b)("h2",{id:"faq-for-platform-owners"},"FAQ for Platform Owners"),Object(o.b)("h3",{id:"whats-the-difference-between-stripe-standard-and-stripe-express"},"What's the difference between Stripe Standard and Stripe Express?"),Object(o.b)("p",null,"You can read the official updated information here\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stripe.com/docs/connect/accounts"}),"https://stripe.com/docs/connect/accounts")),Object(o.b)("h3",{id:"can-i-use-stripe-standard"},"Can I use Stripe Standard?"),Object(o.b)("p",null,"You cannot use Stripe Standard if you want to take commission % from the transaction.\nAccording to official definition, this is called DIRECT CHARGES. Whatever the money you receive from Seller will directly go to standard."),Object(o.b)("p",null,"Examples of platforms that would use Standard accounts include, but are not limited to: a storebuilder like Shopify, or a software as a service like Invoice2go."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Suitable for companies which wants to have only subscription billing where you charge users for opening a store or selling listings or other custom options. ")),Object(o.b)("h3",{id:"can-i-use-stripe-express"},"Can I use Stripe Express?"),Object(o.b)("p",null,"Stripe Express is mandatory for platforms which has SPLIT CHARGES (Stripe definition is called DESTINATION CHARGES).\nExample: Deliveroo, Etsy, Depop\nSuitable when "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"When you as platform owner wants to deduct ",Object(o.b)("strong",{parentName:"li"},"10% commission from every sale ")),Object(o.b)("li",{parentName:"ul"},"When you want to send payout to sellers on your preferred time (Current scenario where TradlyPlatform send a notification to Stripe only when the delivery is confirmed, check the above flow chart) ")),Object(o.b)("h3",{id:"can-i-move-from-stripe-express-to-standard"},"Can I move from Stripe Express to Standard?"),Object(o.b)("p",null,"Stripe doesn't allow you to migrate like this. This is because the fundamental of onboarding stripe connected account is totally different. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Stripe standard accounts can be created by anyone and the end users can create one STANDARD account to work with MULTPLE platforms like yours. (Example: Steve can his single stripe standard account connected to Deliveroo, Uber Eats, Postmates)"),Object(o.b)("li",{parentName:"ul"},"Stripe express accounts are created especially for your platform. Every user who register a Stripe Express connected account can use that account only for your platform. All the KYC they provide is only for you. You can customise this onboarding like however you prefer ")),Object(o.b)("h3",{id:"can-the-seller-release-the-payout-himself"},"Can the seller release the payout himself?"),Object(o.b)("p",null,"Only the platform owner can control the transfers. (In another words, Platform is managed by TradlyPlatform, so it will be our system triggers which process the transfer and payouts)"),Object(o.b)("h3",{id:"dont-activate-automated-payout"},"Don't activate automated payout"),Object(o.b)("img",{src:"/img/stripe-automated-payout.png",alt:"stripe-automated-payout",width:"500"}),Object(o.b)("h2",{id:"refund"},"Refund"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Q: If I complete an order and want to cancel it but I already paid through online payment, how would the return process be done?")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A: When the return is initiated, seller will be notified and seller/platform owner has to arrange a pickup from buyer to get the product to seller. Once the return is confirmed by the seller, refund will be initiated. If seller see some defect in the returned product, seller will raise a dispute and platform owner has to intervene and resolve it.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Q: Is there any fee stripe takes to do refund? ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A: No the refund has no charges. The time taken to refund is instant"))),Object(o.b)("h3",{id:"refund-for-platform-owners"},"Refund for Platform Owners"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Stripe official information about Refunds/cancellation "),"\n-- All info below are from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stripe.com/docs/refunds#issuing"}),"stripe")),Object(o.b)("p",null,"You can refund charges made to your account, either in whole or in part. Refunds use your available Stripe balance-this doesn\u2019t include any pending balance. If your available balance doesn\u2019t cover the amount of the refund, Stripe debits the remaining amount from your bank account."),Object(o.b)("p",null,"\u200b\u200bIf Stripe can\u2019t debit the remaining amount from your bank account, your refunds may go into a pending status until you add funds to your Stripe balance. You can view a list of all your pending refunds in the Dashboard."),Object(o.b)("p",null,"If the original charge underwent currency conversion, the refunded amount converts back using the same process. There are no fees to refund a charge, but the fees from the original charge aren\u2019t returned."),Object(o.b)("p",null,"We submit refund requests to your customer\u2019s bank or card issuer. Your customer sees the refund as a credit approximately 5-10 business days later, depending upon the bank. Refunds can\u2019t be canceled after they\u2019re issued. Disputes and chargebacks aren\u2019t possible on credit card charges that are fully refunded."),Object(o.b)("p",null,"We\u2019ll also send an email to your customer notifying them of the refund, if all of these conditions apply:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The original charge was created on a Customer object in your Stripe account"),Object(o.b)("li",{parentName:"ul"},"The Customer object has a stored email address"),Object(o.b)("li",{parentName:"ul"},"You have Email customers for refunds enabled")),Object(o.b)("p",null,"Some refunds\u2014those issued shortly after the original charge\u2014appear in the form of a reversal instead of a refund. In the case of a reversal, the original charge drops off the customer\u2019s statement, and a separate credit isn\u2019t issued."),Object(o.b)("h3",{id:"issuing-refunds"},"Issuing refunds"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Refunds can be issued using the Stripe Dashboard and are processed immediately. When issued, refunds can\u2019t be canceled."),Object(o.b)("li",{parentName:"ul"},"You can issue more than one refund against a charge, but you can\u2019t refund a total greater than the original charge amount.")))}u.isMDXComponent=!0},195:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return r?a.a.createElement(m,s(s({ref:t},c),{},{components:r})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);