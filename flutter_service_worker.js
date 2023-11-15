'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a27a548aae4cb0735181f3d3baf4168b",
"assets/AssetManifest.json": "c836e765f721bc7962cb00a2623658b9",
"assets/assets/images/Alabang.png": "231c57328ac347a54d5f18c1021db312",
"assets/assets/images/Alabang3D.png": "c7659a0adf132a6044dfd0b68dc76e9b",
"assets/assets/images/AlabangGlow.png": "ae5e0edd9ad06ae4023a846607b194be",
"assets/assets/images/BarcotechBG.jpg": "cfedcf189edf397914bd63ec50a5529e",
"assets/assets/images/Cainta.png": "6b731c208b7f4be3eff64a29dd065d79",
"assets/assets/images/Cainta3D.png": "41f888c2e05f39443e90da87a0f4a2d9",
"assets/assets/images/CaintaGlow.png": "bfe23aeb21a5b90182ce3e4ae2a58e9e",
"assets/assets/images/Cebu.png": "66f177dbc8800e6ab79927a8082ebb92",
"assets/assets/images/Cebu3D.png": "4118b0cd4705fde9344fb904f7d7f8fb",
"assets/assets/images/CebuGlow.png": "1bc6258ef9b8c59d839460500e574741",
"assets/assets/images/Clark.png": "26f4cbb668b2d6cbccb6a1a3081638fc",
"assets/assets/images/Clark3D.png": "6a68b2f897cd3f563f7733bb5c6cd634",
"assets/assets/images/ClarkGlow.png": "722ccb0804db3838ec8844c95d243b6f",
"assets/assets/images/Davao.png": "eec1450f6d81988ce835f4a18b2952d5",
"assets/assets/images/Davao3D.png": "fc38361c04928f9ed1cf16bd2de1e384",
"assets/assets/images/DavaoGlow.png": "99c51a16253d0fe507df523dc11b0213",
"assets/assets/images/DS2208.png": "cb9afc5299e693eb104ce169edad7559",
"assets/assets/images/HomeBG.png": "9fcfa8a3907a6e4f8ae21c6b1eb02929",
"assets/assets/images/HomeBG2.png": "f74b7ab9bc39a0ee959351ecb19d6a7d",
"assets/assets/images/HWSCANNER.png": "6fce105a43a458bdab6d38e81997b67f",
"assets/assets/images/Key.png": "840a6c3448d813fd64e8e37a65aa6950",
"assets/assets/images/Key3D.png": "bac396c9ee2fab2ae4c160a360c72a7d",
"assets/assets/images/KeyGlow.png": "f4177432ed52e5fea7b1df21a1fec46f",
"assets/assets/images/LABELRIBBON.png": "d37a278eddb361fb0618914625549179",
"assets/assets/images/MobileB.png": "a146ed941d19dfe332fc47b0ec9a00e2",
"assets/assets/images/PC42T.png": "cde87c8a882624d4357d94d5e13db32b",
"assets/assets/images/Pre-Registered.png": "c620b519541f6915cf70a8a6b4c909d0",
"assets/assets/images/printer.png": "c31cecca32b2544e3100100139608ee4",
"assets/assets/images/ZD220.png": "24371c5eb3064e97a83fb1ccc0abb601",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "45d179b8e04d8f0c022260d2aa7907c9",
"assets/NOTICES": "c3c47e4259a2f28eb09349b00d45bb70",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "3bd93dfe6f74ec4261f82b4d4c2c63dc",
"canvaskit/canvaskit.wasm": "6ffce9c3ddf777b94b3440833f068792",
"canvaskit/chromium/canvaskit.js": "2829bb10a7eb9912e12b452dfd671141",
"canvaskit/chromium/canvaskit.wasm": "c6822f58a32aa7bd158f63ae21b94847",
"canvaskit/skwasm.js": "5256dd3e40ec9fe1fc9faa51a116bcfd",
"canvaskit/skwasm.wasm": "d0a733306cddba8fca65dd165628283c",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "39447011c80ee3d1d5de4e39571e5556",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "255f7e42b9703302e67097b031f7f463",
"/": "255f7e42b9703302e67097b031f7f463",
"main.dart.js": "8f0d1d7b36de618ac698302e41fa5a0a",
"manifest.json": "cced5fab8d7dd3fd18165fd4a2a12c5a",
"version.json": "77a08372abb093a8307672e988f4ade1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
