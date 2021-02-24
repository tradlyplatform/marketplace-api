(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{151:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return s})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return l}));var o=r(2),t=r(7),i=(r(0),r(190)),a={id:"commission",title:"Commission revenue model",sidebar_label:"Commission"},s={id:"commission",isDocsHomePage:!1,title:"Commission revenue model",description:"Commission based revenue models are the most commen in marketplace business. Companies like Amazon, Aliexpress, airbnb Etsy, depop, farfetch, udemy, upwork charges you on the commission of suppply side or demand side.",source:"@site/docs/commission.md",permalink:"/docs/commission",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/commission.md",sidebar_label:"Commission",sidebar:"someSidebar",previous:{title:"Subscription revenue model",permalink:"/docs/subscription"},next:{title:"Location across apps",permalink:"/docs/location"}},c=[{value:"% commission from each sales and deals",id:"-commission-from-each-sales-and-deals",children:[]}],m={rightToc:c};function l(e){var n=e.components,r=Object(t.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},m,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Commission based revenue models are the most commen in marketplace business. Companies like Amazon, Aliexpress, airbnb Etsy, depop, farfetch, udemy, upwork charges you on the commission of suppply side or demand side. "),Object(i.b)("h2",{id:"-commission-from-each-sales-and-deals"},"% commission from each sales and deals"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"% of Commmission from seller/merchants/accounts (Amazon)"),Object(i.b)("li",{parentName:"ol"},"% of commmission from Buyer (Property marketplaces)"),Object(i.b)("li",{parentName:"ol"},"% of commission from both buyer and seller (airbnb) "),Object(i.b)("li",{parentName:"ol"},"% of commission from buyer, seller and delivery people (Deliveroo, Uber Eats)")),Object(i.b)("p",null,"Currently through Superadmin Panel, you can configure commission based model on supply side. However, we allow commission on buyer side as well. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Currently commission based revenue model is using Stripe Connect. So the transaction fee and payout fee is defined by stripe and might vary on your business region, refer from there. ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://stripe.com/au/connect/pricing"}),"Refer here"))))}l.isMDXComponent=!0},190:function(e,n,r){"use strict";r.d(n,"a",(function(){return p})),r.d(n,"b",(function(){return b}));var o=r(0),t=r.n(o);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,o,t=function(e,n){if(null==e)return{};var r,o,t={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var m=t.a.createContext({}),l=function(e){var n=t.a.useContext(m),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=l(e.components);return t.a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},d=t.a.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,b=p["".concat(a,".").concat(d)]||p[d]||u[d]||i;return r?t.a.createElement(b,s(s({ref:n},m),{},{components:r})):t.a.createElement(b,s({ref:n},m))}));function b(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var m=2;m<i;m++)a[m]=r[m];return t.a.createElement.apply(null,a)}return t.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);