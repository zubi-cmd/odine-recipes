/*! For license information please see ta-pagesocial-sdk.js.LICENSE.txt */
(()=>{var t={531:(t,e,r)=>{"use strict";var n,o,i,s,a,c,u=r(362),h=r(293),f=r(472),l=r(57),p=[],d=window.document;function y(){}function m(){var t;return"string"==typeof n&&n.length>0?t=encodeURIComponent(n):"function"==typeof n?t="string"==typeof(t=n())&&t.length>0?encodeURIComponent(t):void 0:Array.isArray(n)&&n.length>0&&0===(t=n.filter((function(t){return"string"==typeof t&&t.length>0})).map((function(t){return encodeURIComponent(t)}))).length&&(t=void 0),t}function g(t){t.scripts&&t.scripts.forEach(l.loadScript),p.push("responded "+JSON.stringify(t))}function v(){var t=new URL(ia_document.shareURL),e=[t.protocol,"//",t.host,t.pathname].join(""),r=ia_document.title,n=ia_document.referrer,o=encodeURIComponent(t.href),i=m();i&&e&&h.simplePageView(i,e,e,n,o,r)}function b(t,e,r){var n,l,d,v,b,w=window!==window.top,_=window.location,A=c||_.search;f.isBot()?p.push("is a bot page load"):f.is404NotFound()?p.push("is a custom 404 page"):o&&o===t?p.push("pushState did not change the location"):(o=t,A&&A.length>1&&"?"===A[0]&&(A=A.substring(1)),setTimeout((function(){var t=m();t?(s?(n=s(),d=n.canonical,l=n.meta||{"og:url":n["og:url"],"og:type":n["og:type"]}):(d=u.canonical(),l=u.meta()),v=u.openGraphURL(l),b=l["og:type"],w&&(A=void 0,e=a),(i&&i(d,v,e,b,l)||function(t,e,r,n,o){if(!t&&!e)return p.push("missing both canonical and og:url meta data"),!1;if(r){if(t&&0===r.indexOf(t))return p.push("reload with matching canonical"),!1;if(e&&0===r.indexOf(e))return p.push("reload with matching og:url"),!1}return u.isValidPageType(n)?!u.isPageNotFound(o)||(p.push('page title contains "page not found"'),!1):(p.push("is an unsupported page type: "+n),!1)}(d,v,e,b,l))&&(n={canonical:d,clientID:t,ogURL:v,image:l["og:image"],published:l["article:published_time"]||l["video:release_date"],referrer:e,search:A,title:l["og:title"]||l["twitter:title"],version:15},p.push("requesting"),h.sendPageView(n,g,y))):p.push("missing client ID")}),r))}t.exports={configure:function(t,e){var r,u,h,l,y=!1,m="am.tru.popstate";h=function(t){return function(){var e;t.apply(window.history,arguments);try{e=new window.CustomEvent(m),window.dispatchEvent(e)}catch(t){(e=d.createEvent("CustomEvent")).initEvent(m,!0,!0),window.dispatchEvent(e)}}},n=t,f.isFacebookInstantArticle()?v():f.isBot()?p.push("is a bot page load"):f.is404NotFound()?p.push("is a custom 404 page"):this.isConfigured?p.push("already configured"):(this.isConfigured=!0,e&&(e.referrer&&(a=e.referrer),e.search&&(c=e.search),"function"==typeof e.canFire&&(i=e.canFire),"function"==typeof e.page&&(s=e.page),"boolean"==typeof e.disableHistoryChangeTrigger&&(y=e.disableHistoryChangeTrigger)),l=function(){b(d.URL,o,1e3)},b(d.URL,d.referrer,1),!y&&"history"in window&&"pushState"in window.history&&(window.addEventListener("popstate",l),window.addEventListener(m,l),r=window.history.pushState,window.history.pushState=h(r),u=window.history.replaceState,window.history.replaceState=h(u)))},diagnostics:function(){return p},isValidPageType:u.isValidPageType}},472:t=>{"use strict";var e=/(bot|facebook|yahoo)/i;t.exports={is404NotFound:function(){return null!==document.querySelector(".notfound")},isBot:function(){return e.test(window.navigator.userAgent)},isFacebookInstantArticle:function(){return"undefined"!=typeof ia_document&&"ia.facebook.com"===ia_document.referrer}}},880:(t,e,r)=>{"use strict";r(147),r(310);var n=r(531);window.TRUE_ANTHEM=window.TRUE_ANTHEM||{};var o=window.TRUE_ANTHEM;o.configure=n.configure,o.diagnostics=n.diagnostics,o.isValidPageType=n.isValidPageType},362:(t,e,r)=>{"use strict";var n=r(90),o=window.document,i=/^[0-9]+$/,s=/page not found/i,a=["og:type","og:url","og:title","og:image","article:published_time","video:release_date","twitter:title"],c=String.prototype.endsWith||function(t,e){var r=this.toString();(void 0===e||e>r.length)&&(e=r.length),e-=t.length;var n=r.indexOf(t,e);return-1!==n&&n===e};function u(t,e,r){return c.call(t,e,r)}var h,f=String.prototype.trim||(h=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,function(){return this.replace(h,"")});function l(t){return f.call(t)}function p(t){var e=n.parse(t);return e.protocol&&e.hostname&&e.pathname}function d(t){var e=o.querySelector(t);if(e)return e.textContent}function y(t){return function(t,e){var r=o.querySelector(t);if(r)return r.getAttribute("href")}("link[rel="+t+"]")}function m(t){var e,r,o,s,a,c=y("prev"),h=y("next"),f=-1,l=u(t,"/");if(c&&p(c)||h&&p(h)){if(0===(o=(r=(e=n.parse(t)).pathname.split("/")).length))return t;if(!(s=r[o+f])&&o>1&&(s=r[o+(f-=1)]),i.test(s))return e.pathname=r.slice(0,f).concat("").join("/"),a=n.format(e),l?u(a,"/")||(a+="/"):u(a,"/")&&(a=a.slice(0,-1)),a}return t}t.exports={canonical:function(){var t=y("canonical");if(t&&p(t))return m(t)},isPageNotFound:function(t){var e=d("title")||"",r=t["og:title"]||"",n=t["twitter:title"]||"";return s.test(e)||s.test(r)||s.test(n)},isValidPageType:function(t){return(t=(t=t||"").toLowerCase())&&("article"===t||"gallery"===t||"story"===t||0===t.indexOf("video")||u(t,"product")||u(t,"album")||u(t,"playlist")||u(t,"song")||u(t,"radio_station"))},meta:function(){var t,e,r,n,i={},s=o.querySelectorAll("meta"),c=s?s.length:0;for(e=0;e<c;e+=1)(r=(t=s[e]).getAttribute("property")||t.getAttribute("name"))&&(r=(r=l(r)).toLowerCase(),i.hasOwnProperty(r)||-1!==a.indexOf(r)&&(n=t.getAttribute("content")||t.getAttribute("value"))&&(i[r]=l(n)));return i["og:title"]||i["twitter:title"]||(i["og:title"]=d("title")),i},openGraphURL:function(t){var e=t["og:url"];if(e&&p(e))return m(e)},stringTrim:l}},57:t=>{"use strict";t.exports={loadScript:function(t){var e=document,r=e.getElementsByTagName("script")[0],n=e.createElement("script");n.async=!0,n.src=t,r.parentNode.insertBefore(n,r)}}},293:(t,e,r)=>{"use strict";var n=r(726),o=r(362).stringTrim;function i(t){if(t.ok)return t;var e=new Error(t.statusText);throw e.response=t,e}function s(t){var e,r="Content-Type",n=t.headers;if(n.has(r)&&n.get(r).indexOf("application/json")>-1)return t.json();throw(e=new Error("Content-Type must be application/json")).response=t,e}t.exports={sendPageView:function(t,e,r){var a,c;a={clientID:t.clientID,version:t.version},t.canonical&&(a.canonical=t.canonical),t.ogURL&&(a.ogURL=t.ogURL),t.published&&(a.published=t.published),t.referrer&&(a.referrer=o(t.referrer)),t.search&&(a.search=decodeURIComponent(t.search)),t.title&&(a.title=t.title),t.image&&(a.image=t.image),fetch(n.URL_ROOT+"/beacon",{cache:"no-store",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},mode:"cors",body:(c=a,Object.keys(c).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(c[t])})).join("&"))}).then(i).then(s).then(e).catch(r)},simplePageView:function(t,e,r,o,i,s){var a=n.URL_ROOT+"/pageview?cid="+t+"&canonical="+r+"&ogURL="+e+"&referrer="+o+"&search="+i+"&title="+s;fetch(a,{cache:"no-store",method:"GET",mode:"cors"})}}},726:t=>{t.exports={URL_ROOT:"//beacon.tru.am"}},310:(t,e,r)=>{"use strict";t.exports=r(702).polyfill()},702:function(t,e,r){t.exports=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},n=0,o=void 0,i=void 0,s=function(t,e){p[n]=t,p[n+1]=e,2===(n+=2)&&(i?i(d):b())};var a="undefined"!=typeof window?window:void 0,c=a||{},u=c.MutationObserver||c.WebKitMutationObserver,h="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),f="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function l(){var t=setTimeout;return function(){return t(d,1)}}var p=new Array(1e3);function d(){for(var t=0;t<n;t+=2)(0,p[t])(p[t+1]),p[t]=void 0,p[t+1]=void 0;n=0}var y,m,g,v,b=void 0;function w(t,e){var r=this,n=new this.constructor(T);void 0===n[A]&&I(n);var o=r._state;if(o){var i=arguments[o-1];s((function(){return S(o,n,i,r._result)}))}else C(r,n,t,e);return n}function _(t){if(t&&"object"==typeof t&&t.constructor===this)return t;var e=new this(T);return x(e,t),e}b=h?function(){return process.nextTick(d)}:u?(m=0,g=new u(d),v=document.createTextNode(""),g.observe(v,{characterData:!0}),function(){v.data=m=++m%2}):f?((y=new MessageChannel).port1.onmessage=d,function(){return y.port2.postMessage(0)}):void 0===a?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(d)}:l()}catch(t){return l()}}():l();var A=Math.random().toString(36).substring(2);function T(){}var E=void 0;function U(e,r,n){r.constructor===e.constructor&&n===w&&r.constructor.resolve===_?function(t,e){1===e._state?R(t,e._result):2===e._state?j(t,e._result):C(e,void 0,(function(e){return x(t,e)}),(function(e){return j(t,e)}))}(e,r):void 0===n?R(e,r):t(n)?function(t,e,r){s((function(t){var n=!1,o=function(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}(r,e,(function(r){n||(n=!0,e!==r?x(t,r):R(t,r))}),(function(e){n||(n=!0,j(t,e))}),t._label);!n&&o&&(n=!0,j(t,o))}),t)}(e,r,n):R(e,r)}function x(t,e){if(t===e)j(t,new TypeError("You cannot resolve a promise with itself"));else if(o=typeof(n=e),null===n||"object"!==o&&"function"!==o)R(t,e);else{var r=void 0;try{r=e.then}catch(e){return void j(t,e)}U(t,e,r)}var n,o}function O(t){t._onerror&&t._onerror(t._result),P(t)}function R(t,e){t._state===E&&(t._result=e,t._state=1,0!==t._subscribers.length&&s(P,t))}function j(t,e){t._state===E&&(t._state=2,t._result=e,s(O,t))}function C(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=r,o[i+2]=n,0===i&&t._state&&s(P,t)}function P(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?S(r,n,o,i):o(i);t._subscribers.length=0}}function S(e,r,n,o){var i=t(n),s=void 0,a=void 0,c=!0;if(i){try{s=n(o)}catch(t){c=!1,a=t}if(r===s)return void j(r,new TypeError("A promises callback cannot return that same promise."))}else s=o;r._state!==E||(i&&c?x(r,s):!1===c?j(r,a):1===e?R(r,s):2===e&&j(r,s))}var B=0;function I(t){t[A]=B++,t._state=void 0,t._result=void 0,t._subscribers=[]}var F=function(){function t(t,r){this._instanceConstructor=t,this.promise=new t(T),this.promise[A]||I(this.promise),e(r)?(this.length=r.length,this._remaining=r.length,this._result=new Array(this.length),0===this.length?R(this.promise,this._result):(this.length=this.length||0,this._enumerate(r),0===this._remaining&&R(this.promise,this._result))):j(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===E&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===_){var o=void 0,i=void 0,s=!1;try{o=t.then}catch(t){s=!0,i=t}if(o===w&&t._state!==E)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===L){var a=new r(T);s?j(a,i):U(a,t,o),this._willSettleAt(a,e)}else this._willSettleAt(new r((function(e){return e(t)})),e)}else this._willSettleAt(n(t),e)},t.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===E&&(this._remaining--,2===t?j(n,r):this._result[e]=r),0===this._remaining&&R(n,this._result)},t.prototype._willSettleAt=function(t,e){var r=this;C(t,void 0,(function(t){return r._settledAt(1,e,t)}),(function(t){return r._settledAt(2,e,t)}))},t}();var L=function(){function e(t){this[A]=B++,this._result=this._state=void 0,this._subscribers=[],T!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){x(t,e)}),(function(e){j(t,e)}))}catch(e){j(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var r=this,n=r.constructor;return t(e)?r.then((function(t){return n.resolve(e()).then((function(){return t}))}),(function(t){return n.resolve(e()).then((function(){throw t}))})):r.then(e,e)},e}();return L.prototype.then=w,L.all=function(t){return new F(this,t).promise},L.race=function(t){var r=this;return e(t)?new r((function(e,n){for(var o=t.length,i=0;i<o;i++)r.resolve(t[i]).then(e,n)})):new r((function(t,e){return e(new TypeError("You must pass an array to race."))}))},L.resolve=_,L.reject=function(t){var e=new this(T);return j(e,t),e},L._setScheduler=function(t){i=t},L._setAsap=function(t){s=t},L._asap=s,L.polyfill=function(){var t=void 0;if(void 0!==r.g)t=r.g;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=L},L.Promise=L,L}()},90:(t,e,r)=>{"use strict";r.r(e),r.d(e,{parse:()=>b,format:()=>i,resolve:()=>f,resolveObject:()=>l,Url:()=>p});var n=r(673),o=/https?|ftp|gopher|file/;function i(t){"string"==typeof t&&(t=b(t));var e=function(t,e,r){var n=t.auth,o=t.hostname,i=t.protocol||"",s=t.pathname||"",a=t.hash||"",c=t.query||"",u=!1;n=n?encodeURIComponent(n).replace(/%3A/i,":")+"@":"",t.host?u=n+t.host:o&&(u=n+(~o.indexOf(":")?"["+o+"]":o),t.port&&(u+=":"+t.port)),c&&"object"==typeof c&&(c=e.encode(c));var h=t.search||c&&"?"+c||"";return i&&":"!==i.substr(-1)&&(i+=":"),t.slashes||(!i||r.test(i))&&!1!==u?(u="//"+(u||""),s&&"/"!==s[0]&&(s="/"+s)):u||(u=""),a&&"#"!==a[0]&&(a="#"+a),h&&"?"!==h[0]&&(h="?"+h),{protocol:i,host:u,pathname:s=s.replace(/[?#]/g,encodeURIComponent),search:h=h.replace("#","%23"),hash:a}}(t,n,o);return""+e.protocol+e.host+e.pathname+e.search+e.hash}var s="http://",a="w.w",c=s+a,u=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,h=/https?|ftp|gopher|file/;function f(t,e){var r="string"==typeof t?b(t):t;t="object"==typeof t?i(t):t;var n=b(e),o="";r.protocol&&!r.slashes&&(o=r.protocol,t=t.replace(r.protocol,""),o+="/"===e[0]||"/"===t[0]?"/":""),o&&n.protocol&&(o="",n.slashes||(o=n.protocol,e=e.replace(n.protocol,"")));var a=t.match(u);a&&!n.protocol&&(t=t.substr((o=a[1]+(a[2]||"")).length),/^\/\/[^/]/.test(e)&&(o=o.slice(0,-1)));var f=new URL(t,c+"/"),l=new URL(e,f).toString().replace(c,""),p=n.protocol||r.protocol;return p+=r.slashes||n.slashes?"//":"",!o&&p?l=l.replace(s,p):o&&(l=l.replace(s,"")),h.test(l)||~e.indexOf(".")||"/"===t.slice(-1)||"/"===e.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),o&&(l=o+("/"===l[0]?l.substr(1):l)),l}function l(t,e){return b(f(t,e))}function p(){}p.prototype.parse=b,p.prototype.format=i,p.prototype.resolve=f,p.prototype.resolveObject=f;var d=/^https?|ftp|gopher|file/,y=/^(.*?)([#?].*)/,m=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,g=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function b(t,e,r){if(void 0===e&&(e=!1),void 0===r&&(r=!1),t&&"object"==typeof t&&t instanceof p)return t;var o=(t=t.trim()).match(y);t=o?o[1].replace(/\\/g,"/")+o[2]:t.replace(/\\/g,"/"),v.test(t)&&"/"!==t.slice(-1)&&(t+="/");var s=!/(^javascript)/.test(t)&&t.match(m),u=g.test(t),h="";s&&(d.test(s[1])||(h=s[1].toLowerCase(),t=""+s[2]+s[3]),s[2]||(u=!1,d.test(s[1])?(h=s[1],t=""+s[3]):t="//"+s[3]),3!==s[2].length&&1!==s[2].length||(h=s[1],t="/"+s[3]));var f,l=(o?o[1]:t).match(/^https?:\/\/[^/]+(:[0-9]+)(?=\/|$)/),b=l&&l[1],w=new p,_="",A="";try{f=new URL(t)}catch(T){_=T,h||r||!/^\/\//.test(t)||/^\/\/.+[@.]/.test(t)||(A="/",t=t.substr(1));try{f=new URL(t,c)}catch(T){return w.protocol=h,w.href=h,w}}w.slashes=u&&!A,w.host=f.host===a?"":f.host,w.hostname=f.hostname===a?"":f.hostname.replace(/(\[|\])/g,""),w.protocol=_?h||null:f.protocol,w.search=f.search.replace(/\\/g,"%5C"),w.hash=f.hash.replace(/\\/g,"%5C");var T,E=t.split("#");!w.search&&~E[0].indexOf("?")&&(w.search="?"),w.hash||""!==E[1]||(w.hash="#"),w.query=e?n.decode(f.search.substr(1)):w.search.substr(1),w.pathname=A+(s?(T=f.pathname).replace(/['^|`]/g,(function(t){return"%"+t.charCodeAt().toString(16).toUpperCase()})).replace(/((?:%[0-9A-F]{2})+)/g,(function(t,e){try{return decodeURIComponent(e).split("").map((function(t){var e=t.charCodeAt();return e>256||/^[a-z0-9]$/i.test(t)?t:"%"+e.toString(16).toUpperCase()})).join("")}catch(t){return e}})):f.pathname),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),_&&"/"!==t[0]&&(w.pathname=w.pathname.substr(1)),h&&!d.test(h)&&"/"!==t.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[f.username,f.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=f.port,b&&!w.host.endsWith(b)&&(w.host+=b,w.port=b.slice(1)),w.href=A?""+w.pathname+w.search+w.hash:i(w);var U=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach((function(t){~U.indexOf(t)||(w[t]=w[t]||null)})),w}},587:t=>{"use strict";function e(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,r,n,o){r=r||"&",n=n||"=";var i={};if("string"!=typeof t||0===t.length)return i;var s=/\+/g;t=t.split(r);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var c=t.length;a>0&&c>a&&(c=a);for(var u=0;u<c;++u){var h,f,l,p,d=t[u].replace(s,"%20"),y=d.indexOf(n);y>=0?(h=d.substr(0,y),f=d.substr(y+1)):(h=d,f=""),l=decodeURIComponent(h),p=decodeURIComponent(f),e(i,l)?Array.isArray(i[l])?i[l].push(p):i[l]=[i[l],p]:i[l]=p}return i}},361:t=>{"use strict";var e=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,r,n,o){return r=r||"&",n=n||"=",null===t&&(t=void 0),"object"==typeof t?Object.keys(t).map((function(o){var i=encodeURIComponent(e(o))+n;return Array.isArray(t[o])?t[o].map((function(t){return i+encodeURIComponent(e(t))})).join(r):i+encodeURIComponent(e(t[o]))})).join(r):o?encodeURIComponent(e(o))+n+encodeURIComponent(e(t)):""}},673:(t,e,r)=>{"use strict";e.decode=e.parse=r(587),e.encode=e.stringify=r(361)},147:(t,e,r)=>{"use strict";r.r(e),r.d(e,{Headers:()=>d,Request:()=>_,Response:()=>T,DOMException:()=>U,fetch:()=>x});var n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==n&&n,o="URLSearchParams"in n,i="Symbol"in n&&"iterator"in Symbol,s="FileReader"in n&&"Blob"in n&&function(){try{return new Blob,!0}catch(t){return!1}}(),a="FormData"in n,c="ArrayBuffer"in n;if(c)var u=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],h=ArrayBuffer.isView||function(t){return t&&u.indexOf(Object.prototype.toString.call(t))>-1};function f(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function l(t){return"string"!=typeof t&&(t=String(t)),t}function p(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return i&&(e[Symbol.iterator]=function(){return e}),e}function d(t){this.map={},t instanceof d?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function m(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function g(t){var e=new FileReader,r=m(e);return e.readAsArrayBuffer(t),r}function v(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:s&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:a&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:o&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():c&&s&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=v(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c&&(ArrayBuffer.prototype.isPrototypeOf(t)||h(t))?this._bodyArrayBuffer=v(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},s&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer)):this.blob().then(g)}),this.text=function(){var t,e,r,n=y(this);if(n)return n;if(this._bodyBlob)return t=this._bodyBlob,r=m(e=new FileReader),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},a&&(this.formData=function(){return this.text().then(A)}),this.json=function(){return this.text().then(JSON.parse)},this}d.prototype.append=function(t,e){t=f(t),e=l(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},d.prototype.delete=function(t){delete this.map[f(t)]},d.prototype.get=function(t){return t=f(t),this.has(t)?this.map[t]:null},d.prototype.has=function(t){return this.map.hasOwnProperty(f(t))},d.prototype.set=function(t,e){this.map[f(t)]=l(e)},d.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},d.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),p(t)},d.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),p(t)},d.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),p(t)},i&&(d.prototype[Symbol.iterator]=d.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function _(t,e){if(!(this instanceof _))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,n,o=(e=e||{}).body;if(t instanceof _){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new d(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,o||null==t._bodyInit||(o=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new d(e.headers)),this.method=(n=(r=e.method||this.method||"GET").toUpperCase(),w.indexOf(n)>-1?n:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var i=/([?&])_=[^&]*/;i.test(this.url)?this.url=this.url.replace(i,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function A(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}})),e}function T(t,e){if(!(this instanceof T))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"",this.headers=new d(e.headers),this.url=e.url||"",this._initBody(t)}_.prototype.clone=function(){return new _(this,{body:this._bodyInit})},b.call(_.prototype),b.call(T.prototype),T.prototype.clone=function(){return new T(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},T.error=function(){var t=new T(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];T.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new T(null,{status:e,headers:{location:t}})};var U=n.DOMException;try{new U}catch(t){(U=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack}).prototype=Object.create(Error.prototype),U.prototype.constructor=U}function x(t,e){return new Promise((function(r,o){var i=new _(t,e);if(i.signal&&i.signal.aborted)return o(new U("Aborted","AbortError"));var a=new XMLHttpRequest;function u(){a.abort()}a.onload=function(){var t,e,n={status:a.status,statusText:a.statusText,headers:(t=a.getAllResponseHeaders()||"",e=new d,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}})),e)};n.url="responseURL"in a?a.responseURL:n.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;setTimeout((function(){r(new T(o,n))}),0)},a.onerror=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},a.ontimeout=function(){setTimeout((function(){o(new TypeError("Network request failed"))}),0)},a.onabort=function(){setTimeout((function(){o(new U("Aborted","AbortError"))}),0)},a.open(i.method,function(t){try{return""===t&&n.location.href?n.location.href:t}catch(e){return t}}(i.url),!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&(s?a.responseType="blob":c&&i.headers.get("Content-Type")&&-1!==i.headers.get("Content-Type").indexOf("application/octet-stream")&&(a.responseType="arraybuffer")),!e||"object"!=typeof e.headers||e.headers instanceof d?i.headers.forEach((function(t,e){a.setRequestHeader(e,t)})):Object.getOwnPropertyNames(e.headers).forEach((function(t){a.setRequestHeader(t,l(e.headers[t]))})),i.signal&&(i.signal.addEventListener("abort",u),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",u)}),a.send(void 0===i._bodyInit?null:i._bodyInit)}))}x.polyfill=!0,n.fetch||(n.fetch=x,n.Headers=d,n.Request=_,n.Response=T)}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(147),r(880)})();