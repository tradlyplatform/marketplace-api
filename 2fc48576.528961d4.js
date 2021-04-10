(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(7),o=(n(0),n(195)),a={id:"domain",title:"Things to setup in your Domain",sidebar_label:"Domain"},c={id:"domain",isDocsHomePage:!1,title:"Things to setup in your Domain",description:"As everybusiness you will have a website domain as primary URL for different activities. Below is the list of things we need from your side",source:"@site/docs/domain.md",permalink:"/docs/domain",editUrl:"https://github.com/TRADLY-PLATFORM/puffin/edit/master/puffin-v2/docs/domain.md",sidebar_label:"Domain",sidebar:"someSidebar",previous:{title:"Platform information that need to be filled",permalink:"/docs/platform"},next:{title:"Appstore Setup",permalink:"/docs/appstore"}},s=[{value:"Domain Verification",id:"domain-verification",children:[]},{value:"Subdomains",id:"subdomains",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As everybusiness you will have a website domain as primary URL for different activities. Below is the list of things we need from your side"),Object(o.b)("h2",{id:"domain-verification"},"Domain Verification"),Object(o.b)("p",null,"The below picture provide why we need domain verification. ",Object(o.b)("strong",{parentName:"p"},"This is applicable for apps which are using email based registration")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add the domain name in the superadmin ")),Object(o.b)("img",{src:"/img/verifydomain.png",alt:"Adding TXT record",width:"500"}),"## Add TXT - Go to your domain registar, access the DNS settings - Add the TXT record, your superadmin should show a TXT record for to enter in your DNS settings",Object(o.b)("p",null,"Example: Below pic"),Object(o.b)("img",{src:"/img/addingtxt.png",alt:"Adding TXT record",width:"500"}),Object(o.b)("h2",{id:"subdomains"},"Subdomains"),Object(o.b)("p",null,"This is not applicable for all. We are still testing this approach\nSubdomains for subscription payment (in future)"))}u.isMDXComponent=!0},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(a,".").concat(m)]||p[m]||d[m]||o;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);