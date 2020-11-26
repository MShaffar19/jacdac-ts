/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-edb3107e4e56ca94668c.js"
  },
  {
    "url": "framework-3078d08ec5413fe4924e.js"
  },
  {
    "url": "app-8d8c47ccb120e4e0a2e4.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "25acb3f4fdb6d3213fa5e583c80547c5"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxK.woff2"
  },
  {
    "url": "static/webfonts/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4.woff2"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7542ec632975394c09bc.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "2072d98e02d4485a63f330f7050325a4"
  },
  {
    "url": "polyfill-0151a648e2fdd934da58.js"
  },
  {
    "url": "styles.1bcf0d809ee48396e628.css"
  },
  {
    "url": "styles-e9d24b1846c7d6eb9685.js"
  },
  {
    "url": "64b32d90096fd9ae25fd7f9485d4d348bcf9f765-1d149353f525f4707cc0.js"
  },
  {
    "url": "component---src-pages-404-mdx-1058db2afbe64e5c3852.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "fea1d7a7fe73fd6a94ee8107e2af37d7"
  },
  {
    "url": "page-data/sq/d/2214083594.json",
    "revision": "2926ef56ed97f775896f33742fa2c058"
  },
  {
    "url": "page-data/sq/d/2270080012.json",
    "revision": "34ea851603e237eb2062b2a4a6772672"
  },
  {
    "url": "page-data/sq/d/2461311362.json",
    "revision": "9c163590aa39db9be4e67023f5f0ed75"
  },
  {
    "url": "page-data/sq/d/2744294623.json",
    "revision": "7e16bdd8ebbd9fa712b916c63c2ea299"
  },
  {
    "url": "page-data/sq/d/3159585216.json",
    "revision": "c2a19842bac2ebad1401069111d856ae"
  },
  {
    "url": "page-data/sq/d/413816803.json",
    "revision": "775dd4a361fe5f2979c987059acfe4c8"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "0ef358c63ce8bb18f8adb15ea2b544c7"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "b2e58e1e4369775e0442ebd30889d4ec"
  },
  {
    "url": "component---src-pages-clients-mdx-b2f0ea5dd056dd78df36.js"
  },
  {
    "url": "page-data/clients/page-data.json",
    "revision": "967f4b012ebab966fb4d10ea9cb683ee"
  },
  {
    "url": "component---src-pages-devices-mdx-06db08d634b9018e406d.js"
  },
  {
    "url": "page-data/devices/page-data.json",
    "revision": "dd6e13fea94a3994796c69399ca408ca"
  },
  {
    "url": "component---src-pages-dtmi-mdx-44e9b22f4b300e07a5d3.js"
  },
  {
    "url": "page-data/dtmi/page-data.json",
    "revision": "4d16b9ced73aa2359df73019aa8f4aa8"
  },
  {
    "url": "component---src-pages-github-mdx-b12415d104ffb4c52900.js"
  },
  {
    "url": "page-data/github/page-data.json",
    "revision": "a2cb2967940b7b20a25d80d17b28b568"
  },
  {
    "url": "component---src-pages-index-mdx-757e5eafdb870115df96.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "60abf29b69db739dc65718c6cb6e0936"
  },
  {
    "url": "component---src-components-spec-tsx-5b5e966ffcbd698d05d1.js"
  },
  {
    "url": "page-data/reference/page-data.json",
    "revision": "933126549a31a59022326da74002c5e6"
  },
  {
    "url": "component---src-pages-services-mdx-f5b3ddfc612e3a02044c.js"
  },
  {
    "url": "page-data/services/page-data.json",
    "revision": "52a87321a4c66709786ff93f64a5beba"
  },
  {
    "url": "component---src-pages-tools-mdx-4e387b2875accd469578.js"
  },
  {
    "url": "page-data/tools/page-data.json",
    "revision": "45eeac4fa29132d0ef24419b38be985a"
  },
  {
    "url": "component---src-pages-traces-mdx-99ee6d99949adf9ce74b.js"
  },
  {
    "url": "page-data/traces/page-data.json",
    "revision": "836a2e833df7e847bcee04985b16f10b"
  },
  {
    "url": "page-data/reference/device-definition/page-data.json",
    "revision": "d5da1d425edf4cc7c327056f24abfc2c"
  },
  {
    "url": "page-data/reference/glossary/page-data.json",
    "revision": "0ee7591db4cc0c3a70836597cbbb24e3"
  },
  {
    "url": "page-data/reference/motivation/page-data.json",
    "revision": "819187928426d218879c9d84a27cdffe"
  },
  {
    "url": "page-data/reference/protocol/page-data.json",
    "revision": "fcdffbe4521226b44bb42ed8ac625df6"
  },
  {
    "url": "page-data/reference/service-specification/page-data.json",
    "revision": "8b18077fd15893fff51199534484cd0a"
  },
  {
    "url": "component---src-templates-service-mdx-18f2b6b97c305dfe4911.js"
  },
  {
    "url": "page-data/services/_base/page-data.json",
    "revision": "dbfbbb7d537ae2a389473c0c4158fc90"
  },
  {
    "url": "page-data/services/_sensor/page-data.json",
    "revision": "7997a8c4adb848a69b3b7d800ccd1dec"
  },
  {
    "url": "page-data/services/accelerometer/page-data.json",
    "revision": "1e60a576f366363675f4aaf292a23863"
  },
  {
    "url": "page-data/services/aggregator/page-data.json",
    "revision": "b369fb76c0bd96c1075b57ecb3e46dd8"
  },
  {
    "url": "page-data/services/bootloader/page-data.json",
    "revision": "1be1d030523679131a50230949cc4306"
  },
  {
    "url": "page-data/services/button/page-data.json",
    "revision": "40122295c68835131544fab375c68945"
  },
  {
    "url": "page-data/services/codalmessagebus/page-data.json",
    "revision": "bfbb0371fbcc679793f617616fdde7a9"
  },
  {
    "url": "page-data/services/control/page-data.json",
    "revision": "1d5d4b08250508a41129db4969ed362a"
  },
  {
    "url": "page-data/services/crank/page-data.json",
    "revision": "29833893a1ea96e14ac22f5f25f650c0"
  },
  {
    "url": "page-data/services/gamepad/page-data.json",
    "revision": "81c3949cd6ee2666d16fc2f6115380db"
  },
  {
    "url": "page-data/services/humidity/page-data.json",
    "revision": "807e74b345002e5ebccbc5b0a4f24123"
  },
  {
    "url": "page-data/services/iothub/page-data.json",
    "revision": "bafe4ac030c1c55cd5a51fc7300ea22f"
  },
  {
    "url": "page-data/services/keyboard/page-data.json",
    "revision": "db0e476e95e586280562dc9961a7003d"
  },
  {
    "url": "page-data/services/ledmatrixcontroller/page-data.json",
    "revision": "04deeea27f02989132777a7b979397e2"
  },
  {
    "url": "page-data/services/ledmatrixdisplay/page-data.json",
    "revision": "7bbcaf977ff5ca3bde98d91e7a060273"
  },
  {
    "url": "page-data/services/light/page-data.json",
    "revision": "f4efa475b949b7ace37ff11c948ddfa7"
  },
  {
    "url": "page-data/services/logger/page-data.json",
    "revision": "86c1513b6ab9721c93cd3efa4afa83fd"
  },
  {
    "url": "page-data/services/microphone/page-data.json",
    "revision": "7c7d94cc50eaaa082d13f3747f4b7071"
  },
  {
    "url": "page-data/services/modelrunner/page-data.json",
    "revision": "1fa83280bfcb01407670825474062d4a"
  },
  {
    "url": "page-data/services/motor/page-data.json",
    "revision": "2e0c0dc46222c91d32fb710a6d4e81e7"
  },
  {
    "url": "page-data/services/mouse/page-data.json",
    "revision": "ac02d5154021edcb91f6c9f9e337c21d"
  },
  {
    "url": "page-data/services/multitouch/page-data.json",
    "revision": "181c050ec881aee47f4d630139eaf098"
  },
  {
    "url": "page-data/services/music/page-data.json",
    "revision": "efd5d6fbed251196622c9cc140390dd3"
  },
  {
    "url": "page-data/services/power/page-data.json",
    "revision": "7f854456caada9a40bdd4bff73adb927"
  },
  {
    "url": "page-data/services/pwmlight/page-data.json",
    "revision": "c53cbeca66f70ec0b1596bfa9fc37cae"
  },
  {
    "url": "page-data/services/rolemanager/page-data.json",
    "revision": "e7c66378a44265187d258773b9a0bfd1"
  },
  {
    "url": "page-data/services/servo/page-data.json",
    "revision": "d3a7c13bab535bfeb46ed2fd923365c8"
  },
  {
    "url": "page-data/services/settings/page-data.json",
    "revision": "6adc657d1949400ecffb4f6bd522cab7"
  },
  {
    "url": "page-data/services/slider/page-data.json",
    "revision": "69beecb9ce2fcfa61b46f38a7a23cb68"
  },
  {
    "url": "page-data/services/tcp/page-data.json",
    "revision": "bfa92fb86bc8d2d8e31ae6a8c9c9e061"
  },
  {
    "url": "page-data/services/temperature/page-data.json",
    "revision": "3cf86e10159ff6033bc6865c0f0a76f2"
  },
  {
    "url": "page-data/services/wifi/page-data.json",
    "revision": "a107cd4ee6583cdb263e22c8a3035dc2"
  },
  {
    "url": "component---src-pages-tools-azure-iot-hub-mdx-705e3dc8837ec9818f28.js"
  },
  {
    "url": "page-data/tools/azure-iot-hub/page-data.json",
    "revision": "fdbcc3e317efdc95fb1eb244c409d897"
  },
  {
    "url": "component---src-pages-tools-azure-twin-designer-mdx-f4b0300feb5af6894cce.js"
  },
  {
    "url": "page-data/tools/azure-twin-designer/page-data.json",
    "revision": "86a2eb6f67dfec244225635629dfd01e"
  },
  {
    "url": "component---src-pages-tools-collector-mdx-1636fb3f74d4bb2a1950.js"
  },
  {
    "url": "page-data/tools/collector/page-data.json",
    "revision": "e794e1985cb4abf4e3496339193577da"
  },
  {
    "url": "component---src-pages-tools-device-designer-mdx-b88ca3bcdf41f1c14fce.js"
  },
  {
    "url": "page-data/tools/device-designer/page-data.json",
    "revision": "66cd6bdc9d2f1fbd86502191a9295844"
  },
  {
    "url": "component---src-pages-tools-edge-impulse-mdx-b065ba7f49cd4250a7f0.js"
  },
  {
    "url": "page-data/tools/edge-impulse/page-data.json",
    "revision": "e353a00467b35419c18a983f8e1516ef"
  },
  {
    "url": "component---src-pages-tools-jupyterlab-mdx-6d74e58ee31fefb1a4cc.js"
  },
  {
    "url": "page-data/tools/jupyterlab/page-data.json",
    "revision": "312c3ecfca56255b9067d034380928cd"
  },
  {
    "url": "component---src-pages-tools-model-uploader-mdx-e5d233797311d15e17fd.js"
  },
  {
    "url": "page-data/tools/model-uploader/page-data.json",
    "revision": "930148ed2d8dcf5c605cf00def46e4cc"
  },
  {
    "url": "component---src-pages-tools-packet-inspector-mdx-131dd767a9cd5a4dcb93.js"
  },
  {
    "url": "page-data/tools/packet-inspector/page-data.json",
    "revision": "c0fca0b4752772f0997c647159a71051"
  },
  {
    "url": "component---src-pages-tools-player-mdx-2747f1e1f84de4005c5f.js"
  },
  {
    "url": "page-data/tools/player/page-data.json",
    "revision": "b143b3245e2a0bac973323c207be1e77"
  },
  {
    "url": "component---src-pages-tools-role-manager-mdx-cb77056a5e860e86ae4b.js"
  },
  {
    "url": "page-data/tools/role-manager/page-data.json",
    "revision": "78567749eefd3cf7a91ebfb583f99272"
  },
  {
    "url": "component---src-pages-tools-service-editor-mdx-72955a808f721a87e988.js"
  },
  {
    "url": "page-data/tools/service-editor/page-data.json",
    "revision": "94f948cf0fa7517a3508b36fe7fa2f39"
  },
  {
    "url": "component---src-pages-tools-updater-mdx-f064a51763b9a74b5ff6.js"
  },
  {
    "url": "page-data/tools/updater/page-data.json",
    "revision": "2a7024aa52aa377dee0162d2381b18d8"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "2ffbc9c17984a3ace7a0231815151d14"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/jacdac-ts`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/jacdac-ts/app-8d8c47ccb120e4e0a2e4.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/jacdac-ts/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
