"use strict";var precacheConfig=[["/index.html","a4a9b6ade7889be664d933d1a86ecad2"],["/static/css/main.464bd1b9.css","02051b0c7f2a47dcb085943e9e66b4d2"],["/static/js/main.a92f2407.js","bacc8f55b66894599a312a066299f04d"],["/static/media/Conversations.391a6440.png","391a64407be9a309e7cea2aa832c3914"],["/static/media/DocsPage.e07d3b5a.png","e07d3b5ad28dbf93163687eefa87b84a"],["/static/media/Document.16ddcbe8.png","16ddcbe881feb1d83758ba7aec4d5d1c"],["/static/media/addcontacts.cc099c09.gif","cc099c0982e8c7ee4aa877c847525cfb"],["/static/media/blockstack.621177f3.png","621177f346598a742925855451884cce"],["/static/media/diagram.9157e33f.png","9157e33fbe7f9eea4d46c5833ec454ae"],["/static/media/editdoc.3977bc10.png","3977bc10713aee8035eb991cbdb5a790"],["/static/media/layout.9fda62c2.jpg","9fda62c226f3dfc91f82ae51c6fdd990"],["/static/media/newdoc.7ef2c466.png","7ef2c4662044c0c425ee576ea2f6d4a7"],["/static/media/personal.03a485c0.jpg","03a485c070109709a5e1f7fc1ce0368d"],["/static/media/retrieve.b0136837.png","b0136837767ac0097122b1d3e74a73d5"],["/static/media/share.d11f974d.png","d11f974d417b0d184711ce9d0431c927"],["/static/media/shareddoc.bc82f44a.png","bc82f44a2c81f0a7130c88d9daac119d"],["/static/media/sharing.5569317e.png","5569317ee5c76d3c7ed82b0d753407a4"],["/static/media/sheet.50dc276f.png","50dc276f1e488deff3eb89f9291d2333"],["/static/media/sheets.1d02c152.png","1d02c152cc4f221296cbf06fa4d80975"],["/static/media/stats.dc131dbf.png","dc131dbf0147df4f718852a2ccc210e0"],["/static/media/tweets.6ac7a0f1.png","6ac7a0f105e9f27f99008087eaf087fe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});