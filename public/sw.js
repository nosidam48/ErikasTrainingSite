if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,n)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-21b21c9a"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/35eCCymVP8zEM9N0FeRsa/_buildManifest.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/35eCCymVP8zEM9N0FeRsa/_ssgManifest.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/3f777152e8def3be47ae90e3dcff5d43e0b31bad.76c89280345daaeea25f.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/529c357af1008b159c36ddf308fef285119a421c.6269cf143b13c1e525be.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/commons.2916c37b7d3f68787e26.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/framework.d2ae4074d0a54d95f68e.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/main-a5d6c9f8c9754c8959f0.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/pages/_app-38387e94f2a3b9519772.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/pages/_error-bfd96314f92e22962591.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/pages/about-15a4e3e8c0c3de9abd32.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/pages/contact-3257c19ad677e13493b1.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/pages/home-3e3ed65bac34be2d5995.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/pages/index-4cc191cc05d5da835142.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/pages/services-abb89a86efd205debb20.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/polyfills-feb8a7604fa7fce626b2.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/css/45595596ecb4955d934f.css",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/css/a5ce0376852c7e8ff014.css",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/css/a74ee4d2ecf507276a92.css",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/css/b59e515fb7967a94f4fd.css",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/_next/static/css/f0a6d9c5770c40e9c7c4.css",revision:"35eCCymVP8zEM9N0FeRsa"},{url:"/android-chrome-192x192.png",revision:"482e77364ee814d08964e625d2b58c36"},{url:"/android-chrome-512x512.png",revision:"5d90c8877a5560c68f634beff2014b3c"},{url:"/apple-touch-icon.png",revision:"446b9619ed00b737793527c15020bdaa"},{url:"/browserconfig.xml",revision:"61bfd064535af0c276bb63b3fd579733"},{url:"/favicon-16x16.png",revision:"4ab11f33537c25627b340e33547020f8"},{url:"/favicon-32x32.png",revision:"8a88b1b95ccf1fa7e1e1dafa9d6825fa"},{url:"/favicon.ico",revision:"42401dddfcd94c50cae10ab707169f47"},{url:"/images/NWDog.png",revision:"cabfe4ab52c38f7c94ec129c5124a7bf"},{url:"/images/dogAtPlay.jpeg",revision:"876a64153c5ed332707798f52fba4a24"},{url:"/images/dogBowl.png",revision:"0ad4e07bdfbdf7ae9e86edfd65b3fded"},{url:"/images/dogFace.png",revision:"002735b23097b933e5efe2451b400794"},{url:"/images/erika-bonzo.jpg",revision:"da753110556259d9e171c8d846fb55fa"},{url:"/images/group-dogs.jpeg",revision:"e83402c740f635d727b73d004399e1eb"},{url:"/images/in-person.jpeg",revision:"98f6e37abb7f0315963919243d428130"},{url:"/images/logo_inverted.png",revision:"4c290e5598d79e48a7e2df0999a00ef1"},{url:"/images/makeFetchHappen.png",revision:"004983f02b924e6f88bf9543de33327b"},{url:"/images/pawHouse.png",revision:"e855a14a92fb7f2b0f3b66003a5f6512"},{url:"/images/paws4training.png",revision:"6877cda18fea20b38aaa26ad9ba2ba9c"},{url:"/images/puppies.jpeg",revision:"18d5df230156f042676796375504590c"},{url:"/images/puppyworks.png",revision:"ddcbaf706e0aace0318562785857a260"},{url:"/images/socialIcons/fb.svg",revision:"99464e4540a3bf11ea94ba551de72414"},{url:"/images/socialIcons/instagram.svg",revision:"f1e0e266d54bdac4a27eec5ecc777e33"},{url:"/images/socialIcons/linkedin.svg",revision:"8d101a428e1ed0472b8b90ebdf0e993e"},{url:"/images/twitter.svg",revision:"1adaa64e7efbaafeb264a23083e1fc00"},{url:"/images/zoom-dog.jpeg",revision:"79b5f73976e3945248676d70e6e05493"},{url:"/maskable_icon_192x192.png",revision:"8555694af00e17581252958e14e8e910"},{url:"/mstile-150x150.png",revision:"28da0c9564d3c227690fbbeca2ae1f54"},{url:"/safari-pinned-tab.svg",revision:"a0d3c1c0e04923209cb1aa607410a202"},{url:"/site.webmanifest",revision:"d73fd16172b176cb5a68fbfabe322e32"},{url:"/sitemap.xml",revision:"9ff61d2fd7e69afd3d11a8ba49e0038b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
