parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.$=void 0;var e=function(e){if("undefined"==typeof jQuery){var r=document.querySelectorAll(e);if(r.length>1)return Array.from(r);if(1===r.length)return r[0]}};exports.$=e;
},{}],"DJk1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tabContainer=exports.tabNav=exports.tab=exports.agree=exports.notice=void 0;var e=require("./querySelectorAlias"),t=(0,e.$)("#notice");exports.notice=t;var r=(0,e.$)(".agree");exports.agree=r;var a=(0,e.$)(".tabs");exports.tab=a;var o=(0,e.$)(".tabNav");exports.tabNav=o;var s=(0,e.$)(".tabContainer");exports.tabContainer=s;
},{"./querySelectorAlias":"Focm"}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tabs=void 0;var t=require("../variables"),e=function(){if(!t.tab)return console.error("Tabcontainer does not exist"),!1;var e=function(e){var a=e.getAttribute("data-target");e.classList.add("active"),t.tabContainer.querySelectorAll(".tab").forEach(function(t){return t.classList.remove("active")}),t.tabContainer.querySelector(".tab[data-target=".concat(a,"]")).classList.add("active")};t.tabNav.querySelectorAll("li").forEach(function(t,a){if(0!==a)return!1;e(t)}),t.tab.addEventListener("click",function(a){if(t.tabContainer.contains(a.target))return!1;t.tabNav.querySelectorAll("li").forEach(function(t){t.classList.remove("active"),e(a.target)})})};exports.tabs=e;
},{"../variables":"DJk1"}]},{},["Focm"], null)