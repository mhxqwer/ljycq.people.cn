﻿!function(){var o={9898:function(e,t,o){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var a=o(9724),n=o(1643);function r(e,t){if(!e||!t)return!1;if(void 0===(t=!t.keyCode?{keyCode:t}:t).status&&(t.status=!0),t.status&&!a.get(n.keys().status))return!1;var o=e.keyCode||e.which||e.charCode;if(o&&!("number"==typeof t.keyCode&&t.keyCode!=o||"object"==i(t.keyCode)&&[].indexOf.call(t.keyCode,o)<0)){var r=e.ctrlKey,o=e.shfitKey,e=e.altKey;return!(t.ctrlKey&&!r)&&(!(t.shfitKey&&!o)&&!(t.altKey&&!e))}}var s={wakeup:{shiftKey:!1,ctrlKey:!0,altKey:!1,status:!1,keyCode:192},wakupConfig:{shiftKey:!1,ctrlKey:!0,altKey:!0,status:!0,keyCode:76},dialogClose:{shiftKey:!1,ctrlKey:!1,altKey:!1,keyCode:27},changeRegion:{next:{shiftKey:!1,ctrlKey:!0,altKey:!0,status:!0,keyCode:[34,40]},pre:{shiftKey:!1,ctrlKey:!0,altKey:!0,status:!0,keyCode:[33,38]}},opVoice:{shiftKey:!1,ctrlKey:!0,altKey:!0,status:!0,keyCode:86},vocierate:{shiftKey:!1,ctrlKey:!0,altKey:!0,status:!0,keyCode:75},mouseb:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:77},mouseten:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:78},reset:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:67},readsrc:{shiftKey:!1,ctrlKey:!0,altKey:!0,status:!1,keyCode:82},bigsrc:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:66},readtype:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:70},exitservice:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:69},changeTheme:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:84},fontTob:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:[187,107]},fontTos:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:[189,109]},help:{shiftKey:!1,ctrlKey:!0,altKey:!0,keyCode:191},showImg:{shiftKey:!1,ctrlKey:!1,altKey:!0,keyCode:[57,105]},showQrcode:{shiftKey:!1,ctrlKey:!1,altKey:!0,keyCode:[48,96]}};e.exports={eventKeyCode:function(e){return e.keyCode||e.which||e.charCode},checkKeyCode:r,keyCodeSettings:s,toWakeUpRead:function(e){var t=e.altKey,o=e.keyCode||e.which||e.charCode;return!(!t||!(48<=o&&o<=57||96<=o&&o<=105))||(!!r(e,s.wakeup)||void 0)}}},1643:function(e){var n={val:function(e,t){if(t=t||location.search.substring(1),!new RegExp("(^|/?|&)"+e+"=([^&]*)(/s|&|$)","i").test(t))return"";try{return JSON.parse(RegExp.$2)}catch(e){return RegExp.$2}}};function t(){for(var e=document.scripts,t="aria.",o={},r=0;r<e.length;r++){var i=e[r],a=i.src.indexOf("/"+t);if(a<=0&&(a=i.src.indexOf("/_"+t)),null!==i.src&&-1<a){o.road=i.src.substr(0,a+1),o.appid=n.val("appid",i.src),o.success=!0;break}}return o}var s=t().appid;window.ariaAppId||(window.ariaAppId=s);var o=null;var r={en:"When a blind user enters the intelligent blind lane, press the shortcut key Ctrl + Alt + R; To read the detailed operation instructions, press the shortcut key Ctrl + Alt + question mark","zh-CN":"盲人用户进入智能盲道请按快捷键Ctrl+Alt+R；阅读详细操作说明请按快捷键Ctrl+Alt+问号键。"};e.exports={keys:function(){function e(){return"aria/"+s}function t(){return e()+"/runtime/settings"}function o(){return e()+"/data/settings"}function r(){return e()+"/runtime"}function i(){return e()+"/data"}var a="aria/userSettings";return{base:"aria",status:"aria/status",userSettings:{root:a,defaultTheme:a+"/defaultTheme",scale:a+"/scale",ariaPointerRead:a+"/ariaPointerRead",bigpoint:a+"/bigpoint",leftfixed:a+"/leftfixed",topfixed:a+"/fixed",readtype:a+"/readtype",readsrc:a+"/readsrc",voice:{root:a+"/voice",enable:a+"/voice/enable",rate:a+"/voice/rate"},mousemode:a+"/mousemode",mouseten:a+"/mouseten",py:a+"/py",big5:a+"/big5",bigsrc:a+"/bigsrc",canRead:a+"/canRead"},road:e()+"/road",root:e(),runtime:{root:r(),serviceUrl:r()+"/serviceUrl",security:r()+"/security",appid:r()+"/appid",settings:{root:t(),highlight:{root:t()+"/highlight",enable:t()+"/highlight/enable",rate:t()+"/highlight/rate",mode:t()+"/highlight/mode"},voice:{root:t()+"/voice",enable:t()+"/voice/enable",maxRate:t()+"/voice/maxRate",minRate:t()+"/voice/minRate",rate:t()+"/voice/rate"},curregion:{id:t()+"/curregion/id"},golabSkipScale:t()+"/golabSkipScale",golabSkipAll:t()+"/golabSkipAll",golabSkipTheme:t()+"/golabSkipTheme",golabFocus:t()+"/golabFocus",golabRegion1:t()+"/golabRegion1",golabRegion2:t()+"/golabRegion2",golabRegion3:t()+"/golabRegion3",golabRegion4:t()+"/golabRegion4",golabReplaceBg:t()+"/golabReplaceBg",tellerMode:t()+"/tellerMode",defaultLanguage:t()+"/defaultLanguage",shortCutIcon:t()+"/shortCutIcon",css:t()+"/css",closeShortIcon:t()+"/closeShortIcon",bodyfont:t()+"/bodyfont",reticle:t()+"/reticle",spacing:t()+"/spacing",padding:t()+"/padding",maxZoom:t()+"/maxZoom",minZoom:t()+"/minZoom"}},data:{root:i(),version:"aria/version",languages:i()+"/languages",themes:i()+"/theme",golbalElems:i()+"/golbalElems",roles:i()+"/roles",conf:{root:i()+"/conf",region:i()+"/conf/region"},settings:{root:o(),enable:o()+"/enable",topfixed:o()+"/fixed",highlight:{root:o()+"/highlight",enable:o()+"/highlight/enable",rate:o()+"/highlight/rate",mode:o()+"/highlight/mode"},voice:{root:o()+"/voice",enable:o()+"/voice/enable",rate:o()+"/voice/rate"},tellerMode:o()+"/tellerMode",defaultTheme:o()+"/defaultTheme",defaultLanguage:o()+"/defaultLanguage",shortCutIcon:o()+"/shortCutIcon",scale:o()+"/scale",golabFixedCss:o()+"/golabFixedCss",golabCss:o()+"/golabCss",spacing:o()+"/spacing",padding:o()+"/padding"}}}},getAppid:t,queryString:n,AppIdChangeAddListen:function(e){o=setInterval(function(){s=t().appid,window.ariaAppId!=s&&e&&"function"==typeof e&&(window.ariaAppId=s,e())},1500)},AppIdChangeRemoveListen:function(){clearInterval(o),o=null},addWelcomeContent:function(){var e=document.querySelector("html").getAttribute("lang")||"zh-CN",t=r[e];t&&(t=t.replace("{0}",document.title),(e=document.querySelector("#ariaTipText"))||((e=document.createElement("a")).id="ariaTipText",e.setAttribute("role","li"),e.setAttribute("aria-label",t),e.setAttribute("href","javascript:void(0)"),document.body.insertBefore(e,document.body.firstElementChild)))}}},3969:function(e,t,o){var r=o(3334);e.exports={get status(){var e=r.getCookie("ariaStatus");if(void 0!==e)return JSON.parse(e)},set status(e){r.setCookie("ariaStatus",e)},get bigsrc(){var e=r.getCookie("ariaBigsrc");if(void 0!==e)return JSON.parse(e)},set bigsrc(e){r.setCookie("ariaBigsrc",e)},get defaultTheme(){return r.getCookie("ariaDefaultTheme")},set defaultTheme(e){r.setCookie("ariaDefaultTheme",e)},get fixed(){var e=r.getCookie("ariaFixed");if(void 0!==e)return JSON.parse(e)},set fixed(e){r.setCookie("ariaFixed",e)},get mousemode(){var e=r.getCookie("ariaMousemode");if(void 0!==e)return JSON.parse(e)},set mousemode(e){r.setCookie("ariaMousemode",e)},get mouseten(){var e=r.getCookie("ariaMouseten");if(void 0!==e&&"undefined"!=e)return JSON.parse(e)},set mouseten(e){r.setCookie("ariaMouseten",e)},get scale(){var e=r.getCookie("ariaScale");return void 0!==e&&"undefined"!=e?JSON.parse(e):1},set scale(e){r.setCookie("ariaScale",e)},get readtype(){var e=r.getCookie("ariaReadtype");if(void 0!==e&&"undefined"!=e)return JSON.parse(e)},set readtype(e){r.setCookie("ariaReadtype",e)},clearAll:function(){r.devareCookie("ariaBigsrc"),r.devareCookie("ariaReadtype"),r.devareCookie("ariaFixed"),r.devareCookie("ariaMouseten"),r.devareCookie("ariaScale"),r.devareCookie("ariaMousemode"),r.devareCookie("ariaDefaultTheme")}}},3334:function(e){function t(){}function r(){var e=document.domain.split("."),t=e.length,o=e[t-2]+"."+e[t-1];return"."+(o=2<o.length&&-1<[].indexOf.call(["com","gov","net"],e[t-2])?e[t-3]+"."+o:o)}t.prototype.devareCookie=function(e){var t=new Date;t.setTime(t.getTime()-1e4),document.cookie=e+"=v; expires="+t.toGMTString()+";path=/;domain="+r()},t.prototype.setCookie=function(e,t){this.devareCookie(e);var o=new Date;o.setTime(o.getTime()+864e6),document.cookie=e+"="+t+"; expires="+o.toGMTString()+";path=/;domain="+r()},t.prototype.getCookie=function(e){for(var t=document.cookie.split("; "),o=0;o<t.length;o++){var r=t[o].split("=");if(r[0]==e)return r[1]}},t.prototype.getCookies=function(e){for(var t=document.cookie.split("; "),o=0;o<t.length;o++)if(t[o].split("=")[0]==e)return t[o].substring(t[o].indexOf("=")+1)},t.prototype.getAllCookie=function(){var e=document.cookie.split("; ");return 0<arrcookie.length?e:""};var o=new t;e.exports=o},9724:function(e){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){if(null===e)return"null";if(e!=e)return"nan";if("function"==typeof Array.isArray){if(Array.isArray(e))return"array"}else if("[object Array]"===Object.prototype.toString.call(e))return"array";return i(e).toLowerCase()}function t(){this.name="Store"}t.prototype={init:function(e){return this.store=window[e],this},set:function(e,t){if(null!=(e="object"===i(e)?e.root:e)){var o=e.split("/"),r=(r=this.get(o[0]))||{};switch(a(r=1<o.length?function e(t,o,r,i){return(t=t||{})[o[i]]||(t[o[i]]={}),i>=o.length-1?void 0===r?delete t[o[i]]:t[o[i]]=r:e(t[o[i]],o,r,i+1),t}(r,o,t,1):r)){case"object":case"array":this.store.setItem(o[0],JSON.stringify(r));break;default:this.store.setItem(o[0],r)}}},get:function(e){e=e.split("/");return function e(t,o,r){if(null===t)return null;try{t="number"===a(+t)?t:JSON.parse(t)}catch(e){}return 1===o.length?t:("object"===i(t)&&(t=t[o[r]]),(r+=1)>o.length-1?t:e(t,o,r))}(this.store.getItem(e[0]),e,1)},getAll:function(){var e,t=JSON.parse(JSON.stringify(this.store)),o={},r="";for(e in t){try{r="number"===a(+(r=t[e]))?r:JSON.parse(r)}catch(e){}o[e]=r}return o},remove:function(e){this.set(e,void 0)},clear:function(){this.store.clear()}};var o=(new t).init("localStorage");(new t).init("sessionStorage");e.exports=o}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;t=r[e]={exports:{}};return o[e](t,t.exports,i),t.exports}var t,a,n,s,e,l,c,u,d,y;y={browserSupport:{error:function(){}}},window.ariaImport?setTimeout(function(){y.browserSupport&&y.browserSupport.error&&"function"==typeof y.browserSupport.error&&y.browserSupport.error()},100):(t=function(e){s.toWakeUpRead(e)&&(a.set(n.keys().userSettings.bigsrc,!0),a.set(n.keys().userSettings.readsrc,!0),a.set(n.keys().userSettings.voice.enable,!1),y.start()),s.checkKeyCode(e,s.keyCodeSettings.wakeup)&&y.start()},a=i(9724),n=i(1643),s=i(9898),e=i(3969),n.addWelcomeContent(),y.clearCache=function(){a.clear(n.keys().base)},"1"==(l=n.queryString.val("aria"))&&a.set(n.keys().status,!0),"0"==l&&a.set(n.keys().status,!1),c=!(y.status=function(){return e.status||a.get(n.keys().status)}),u=!1,y.start=function(){var e;u||(u=!0,document.getElementById("cniil_wza")&&document.getElementById("cniil_wza").removeEventListener("click",y.start),0<document.getElementsByClassName("cnwza").length&&document.getElementsByClassName("cnwza")[0].removeEventListener("click",y.start),document.getElementById("cnwza")&&document.getElementById("cnwza").removeEventListener("click",y.start),document.removeEventListener("keydown",t),a.set(n.keys().status,!0),(e=n.getAppid()).success&&(a.set(n.keys().runtime.appid,e.appid),a.set(n.keys().road,e.road)),e.success,(e=document.createElement("script")).src="http://43.250.238.165/dist/_aria.js?appid=711624bde0b07f55d40e87189b692549",document.body.appendChild(e))},y.status()?y.start():(document.addEventListener("keydown",t),d=setInterval(function(){document.getElementById("cniil_wza")&&(c=!0,document.getElementById("cniil_wza").addEventListener("click",y.start)),0<document.getElementsByClassName("cnwza").length&&(c=!0,document.getElementsByClassName("cnwza")[0].addEventListener("click",y.start)),document.getElementById("cnwza")&&(c=!0,document.getElementById("cnwza").addEventListener("click",y.start)),c&&(clearInterval(d),d=null)},200))),window.ariaImport||(window.aria=y,window.ariaImport=!0)}();