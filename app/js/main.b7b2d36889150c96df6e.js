(()=>{var e={712:()=>{var e=document.getElementById("burger"),t=document.querySelector(".aside"),o=document.getElementById("icon-close"),n=document.querySelector(".main-content"),s=document.querySelector(".main");e.onclick=function(){t.classList.add("show-burger"),n.classList.add("opacity")},o.onclick=function(){t.classList.remove("show-burger"),n.classList.remove("opacity")},s.onclick=function(){t.classList.remove("show-burger"),n.classList.remove("opacity")}},62:()=>{var e=document.querySelectorAll(".call-icon"),t=document.querySelector(".callback"),o=document.querySelector(".main-content"),n=document.querySelector(".main"),s=document.querySelectorAll(".icon-close"),c=document.querySelector(".aside");e.forEach((function(e){e.addEventListener("click",(function(){t.classList.add("show-feedback"),o.classList.add("opacity"),c.classList.add("opacity")}))})),s.forEach((function(e){e.addEventListener("click",(function(){t.classList.remove("show-feedback"),o.classList.remove("opacity"),c.classList.remove("opacity")}))})),n.onclick=function(){t.classList.remove("show-feedback"),o.classList.remove("opacity"),c.classList.remove("show-burger"),c.classList.remove("opacity")}},450:()=>{var e=document.querySelectorAll(".feedback-icon"),t=document.querySelector(".feedback"),o=document.querySelector(".main-content"),n=document.querySelectorAll(".main"),s=document.querySelectorAll(".icon-close"),c=document.querySelector(".aside");e.forEach((function(e){e.addEventListener("click",(function(){t.classList.add("show-feedback"),o.classList.add("opacity"),c.classList.add("opacity")}))})),s.forEach((function(e){e.addEventListener("click",(function(){t.classList.remove("show-feedback"),o.classList.remove("opacity"),c.classList.remove("opacity")}))})),n.forEach((function(e){e.addEventListener("click",(function(){t.classList.remove("show-feedback"),o.classList.remove("opacity"),c.classList.remove("show-burger"),c.classList.remove("opacity")}))}))},507:()=>{var e=document.querySelector(".show-button"),t=document.querySelector(".hide-button"),o=document.querySelector(".hide-big"),n=document.querySelector(".hide-medium");t.onclick=function(){o.classList.toggle("hide"),e.classList.toggle("show"),t.classList.toggle("hide"),n.classList.toggle("hide")},e.onclick=function(){n.classList.toggle("hide"),e.classList.toggle("show"),t.classList.toggle("hide"),o.classList.toggle("hide")},document.addEventListener("DOMContentLoaded",e.onclick);var s=document.querySelector(".show-button2"),c=document.querySelector(".hide-button2"),i=document.querySelector(".hide-big2"),r=document.querySelector(".hide-medium2");c.onclick=function(){i.classList.toggle("hide"),s.classList.toggle("show"),c.classList.toggle("hide"),r.classList.toggle("hide")},s.onclick=function(){r.classList.toggle("hide"),s.classList.toggle("show"),c.classList.toggle("hide"),i.classList.toggle("hide")},document.addEventListener("DOMContentLoaded",s.onclick)},298:()=>{new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:1.3,spaceBetween:16})},483:function(){!function(){"use strict";function e(e){var t=!0,o=!1,n=null,s={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function i(e){var t=e.type,o=e.tagName;return!("INPUT"!==o||!s[t]||e.readOnly)||"TEXTAREA"===o&&!e.readOnly||!!e.isContentEditable}function r(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function d(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function a(o){o.metaKey||o.altKey||o.ctrlKey||(c(e.activeElement)&&r(e.activeElement),t=!0)}function u(e){t=!1}function l(e){c(e.target)&&(t||i(e.target))&&r(e.target)}function m(e){c(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(o=!0,window.clearTimeout(n),n=window.setTimeout((function(){o=!1}),100),d(e.target))}function p(e){"hidden"===document.visibilityState&&(o&&(t=!0),v())}function v(){document.addEventListener("mousemove",f),document.addEventListener("mousedown",f),document.addEventListener("mouseup",f),document.addEventListener("pointermove",f),document.addEventListener("pointerdown",f),document.addEventListener("pointerup",f),document.addEventListener("touchmove",f),document.addEventListener("touchstart",f),document.addEventListener("touchend",f)}function L(){document.removeEventListener("mousemove",f),document.removeEventListener("mousedown",f),document.removeEventListener("mouseup",f),document.removeEventListener("pointermove",f),document.removeEventListener("pointerdown",f),document.removeEventListener("pointerup",f),document.removeEventListener("touchmove",f),document.removeEventListener("touchstart",f),document.removeEventListener("touchend",f)}function f(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,L())}document.addEventListener("keydown",a,!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",p,!0),v(),e.addEventListener("focus",l,!0),e.addEventListener("blur",m,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()},370:e=>{"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},392:(e,t,o)=>{"use strict";e.exports=o.p+"img/Group 10.bee0d0375084c511b6e2.png"},621:(e,t,o)=>{"use strict";e.exports=o.p+"img/Group 101.b1e8d31988bedc4a7f3b.png"},837:(e,t,o)=>{"use strict";e.exports=o.p+"img/Group.2747c3338793be941993.png"},791:(e,t,o)=>{"use strict";e.exports=o.p+"img/acer.389d5a2aab2e2bef617b.png"},776:(e,t,o)=>{"use strict";e.exports=o.p+"img/apple.ffa619e40f762e19e723.png"},351:(e,t,o)=>{"use strict";e.exports=o.p+"img/bosh.ed6936cd1071347580e2.png"},704:(e,t,o)=>{"use strict";e.exports=o.p+"img/cat1.7e467002e567ef1619a4.png"},556:(e,t,o)=>{"use strict";e.exports=o.p+"img/cat2.2de5b2569f71208ca921.png"},302:(e,t,o)=>{"use strict";e.exports=o.p+"img/cat3.e121b12dff23a82304b4.png"},946:(e,t,o)=>{"use strict";e.exports=o.p+"img/cat4.0aed5a18523464557202.png"},917:(e,t,o)=>{"use strict";e.exports=o.p+"img/hp.b7642dc10b869992acc1.png"},686:(e,t,o)=>{"use strict";e.exports=o.p+"img/img-big.bc9f801e27c08f79ed90.jpg"},786:(e,t,o)=>{"use strict";e.exports=o.p+"img/img-medium.23b75a4738cc1a94afa2.jpg"},497:(e,t,o)=>{"use strict";e.exports=o.p+"img/img-mobile.0521a6a6c7922a87ecb5.jpg"},296:(e,t,o)=>{"use strict";e.exports=o.p+"img/lenovo.0b1d2726ba5acb422d7e.png"},465:(e,t,o)=>{"use strict";e.exports=o.p+"img/samsung.f06ff2dba0ec1888300f.png"},732:(e,t,o)=>{"use strict";e.exports=o.p+"img/sony.7f1d61dcd72ac43c0995.png"},766:(e,t,o)=>{"use strict";e.exports=o.p+"img/viewsonic.7528e940b4e4c02d48f8.png"},418:(e,t,o)=>{"use strict";e.exports=o.p+"img/favicon.6922ae43bb974df9ecb7.ico"}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var c=t[n]={exports:{}};return e[n].call(c.exports,c,c.exports,o),c.exports}o.m=e,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.p="",o.b=document.baseURI||self.location.href,(()=>{"use strict";o(483);var e=o(370),t=o.n(e),n=new URL(o(418),o.b),s=new URL(o(497),o.b),c=new URL(o(786),o.b),i=new URL(o(686),o.b),r=new URL(o(296),o.b),d=new URL(o(465),o.b),a=new URL(o(776),o.b),u=new URL(o(766),o.b),l=new URL(o(351),o.b),m=new URL(o(917),o.b),p=new URL(o(791),o.b),v=new URL(o(732),o.b),L=new URL(o(704),o.b),f=new URL(o(556),o.b),b=new URL(o(302),o.b),g=new URL(o(946),o.b),h=new URL(o(392),o.b),y=new URL(o(837),o.b),w=new URL(o(621),o.b);t()(n),t()(s),t()(c),t()(i),t()(r),t()(d),t()(a),t()(u),t()(l),t()(m),t()(p),t()(v),t()(L),t()(f),t()(b),t()(g),t()(h),t()(y),t()(w);o(507),o(298),o(712),o(62),o(450)})()})();