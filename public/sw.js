if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,n)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=n(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-a8b10d99"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/3f777152e8def3be47ae90e3dcff5d43e0b31bad.ed4aa1ea089c88c2d827.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/chunks/529c357af1008b159c36ddf308fef285119a421c.447c038fb5edc33952aa.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/chunks/framework.972e47ad649981044547.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/chunks/main-2a7b3f28426c0db279e6.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/chunks/pages/_app-1c7c93bf72854bef70dc.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/chunks/pages/_error-76045887fb83986371d4.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/chunks/pages/about-deff8b6ae967e97a8461.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/chunks/pages/contact-bd6beeef2a6707d20e45.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/chunks/pages/home-bbe81799741df2ab51a2.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/chunks/pages/index-0a107d2da76b3babde84.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/chunks/pages/services-66d3b31bc180bf0dfc9a.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/chunks/polyfills-761982c2fac2274a18f7.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/chunks/webpack-95c2b224bccf352ee870.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/css/59272bacb58683286353.css",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/css/6b1346b6a78927bf1a95.css",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/css/848ac7b09972e3dc1ee5.css",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/css/b740022dac9e6d56d207.css",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/css/db8a8e2f2c094c0f31b3.css",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/k_BpjHGHcTKRD2souMi4-/_buildManifest.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/_next/static/k_BpjHGHcTKRD2souMi4-/_ssgManifest.js",revision:"k_BpjHGHcTKRD2souMi4-"},{url:"/android-chrome-192x192.png",revision:"482e77364ee814d08964e625d2b58c36"},{url:"/android-chrome-512x512.png",revision:"5d90c8877a5560c68f634beff2014b3c"},{url:"/apple-touch-icon.png",revision:"446b9619ed00b737793527c15020bdaa"},{url:"/browserconfig.xml",revision:"61bfd064535af0c276bb63b3fd579733"},{url:"/favicon-16x16.png",revision:"4ab11f33537c25627b340e33547020f8"},{url:"/favicon-32x32.png",revision:"8a88b1b95ccf1fa7e1e1dafa9d6825fa"},{url:"/favicon.ico",revision:"42401dddfcd94c50cae10ab707169f47"},{url:"/images/NWDog.png",revision:"cabfe4ab52c38f7c94ec129c5124a7bf"},{url:"/images/dogAtPlay.jpeg",revision:"71ac99977bed72df44926ec54f2953a0"},{url:"/images/dogBowl.png",revision:"0ad4e07bdfbdf7ae9e86edfd65b3fded"},{url:"/images/dogFace.png",revision:"002735b23097b933e5efe2451b400794"},{url:"/images/erika-bonzo.jpg",revision:"da753110556259d9e171c8d846fb55fa"},{url:"/images/group-dogs.jpeg",revision:"e83402c740f635d727b73d004399e1eb"},{url:"/images/in-person.jpeg",revision:"98f6e37abb7f0315963919243d428130"},{url:"/images/logo_inverted.png",revision:"4c290e5598d79e48a7e2df0999a00ef1"},{url:"/images/makeFetchHappen.png",revision:"004983f02b924e6f88bf9543de33327b"},{url:"/images/pawHouse.png",revision:"e855a14a92fb7f2b0f3b66003a5f6512"},{url:"/images/paws4training.png",revision:"6877cda18fea20b38aaa26ad9ba2ba9c"},{url:"/images/puppies.jpeg",revision:"18d5df230156f042676796375504590c"},{url:"/images/puppyworks.png",revision:"ddcbaf706e0aace0318562785857a260"},{url:"/images/socialIcons/fb.svg",revision:"99464e4540a3bf11ea94ba551de72414"},{url:"/images/socialIcons/instagram.svg",revision:"f1e0e266d54bdac4a27eec5ecc777e33"},{url:"/images/socialIcons/linkedin.svg",revision:"8d101a428e1ed0472b8b90ebdf0e993e"},{url:"/images/twitter.svg",revision:"1adaa64e7efbaafeb264a23083e1fc00"},{url:"/images/zoom-dog.jpeg",revision:"79b5f73976e3945248676d70e6e05493"},{url:"/maskable_icon_192x192.png",revision:"8555694af00e17581252958e14e8e910"},{url:"/mstile-150x150.png",revision:"28da0c9564d3c227690fbbeca2ae1f54"},{url:"/safari-pinned-tab.svg",revision:"a0d3c1c0e04923209cb1aa607410a202"},{url:"/site.webmanifest",revision:"d73fd16172b176cb5a68fbfabe322e32"},{url:"/sitemap.xml",revision:"9ff61d2fd7e69afd3d11a8ba49e0038b"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));