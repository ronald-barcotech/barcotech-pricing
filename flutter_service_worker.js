'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6dce83fb4625df02ef3fef45a9cc0521",
"assets/AssetManifest.bin.json": "bf7181b58a67837b7f04774fedc72b9f",
"assets/AssetManifest.json": "068beb84bdf242ab428369e8312a0e58",
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
"assets/assets/images/Default.png": "c620b519541f6915cf70a8a6b4c909d0",
"assets/assets/images/DS2208.png": "cb9afc5299e693eb104ce169edad7559",
"assets/assets/images/Ecomm.png": "64f24ea042f2ba791ccf10963d55d0a6",
"assets/assets/images/EcommGlow.png": "15c5d2288ba2c960375bac6c6c6db98c",
"assets/assets/images/HomeBG.png": "9fcfa8a3907a6e4f8ae21c6b1eb02929",
"assets/assets/images/HomeBG2.png": "f74b7ab9bc39a0ee959351ecb19d6a7d",
"assets/assets/images/HPRT.png": "50e53d2143264a16848ec83ccf80d808",
"assets/assets/images/HPRT32.png": "646c028595b8a6e495bf82b19e7e0e02",
"assets/assets/images/HWSCANNER.png": "6fce105a43a458bdab6d38e81997b67f",
"assets/assets/images/Key.png": "840a6c3448d813fd64e8e37a65aa6950",
"assets/assets/images/Key3D.png": "bac396c9ee2fab2ae4c160a360c72a7d",
"assets/assets/images/KeyGlow.png": "f4177432ed52e5fea7b1df21a1fec46f",
"assets/assets/images/LABELRIBBON.png": "d37a278eddb361fb0618914625549179",
"assets/assets/images/MobileB.png": "a146ed941d19dfe332fc47b0ec9a00e2",
"assets/assets/images/Oldbox.png": "3e49077862185a7a93f45ce4478e9aa6",
"assets/assets/images/Oldies.png": "a19362a2413885dc77163174e2d29c94",
"assets/assets/images/OldiesGlow.png": "f37ef9438349e948434728b5182b96cc",
"assets/assets/images/PC42T.png": "cde87c8a882624d4357d94d5e13db32b",
"assets/assets/images/printer.png": "c31cecca32b2544e3100100139608ee4",
"assets/assets/images/ZD220.png": "24371c5eb3064e97a83fb1ccc0abb601",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9728afdae26f5756775e396ddc6e7823",
"assets/NOTICES": "a9a7e20bedd8c3711874565810684384",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"barcotech_pricing/barcotech-pricing/.git/COMMIT_EDITMSG": "dc13f0d51cdfc8a3e8fff60c1a7a44cf",
"barcotech_pricing/barcotech-pricing/.git/config": "f9f807e4e9120617f1fe2211c263c39a",
"barcotech_pricing/barcotech-pricing/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"barcotech_pricing/barcotech-pricing/.git/FETCH_HEAD": "85d9f841b2a0e20ccca3c03025fb55b4",
"barcotech_pricing/barcotech-pricing/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"barcotech_pricing/barcotech-pricing/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"barcotech_pricing/barcotech-pricing/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"barcotech_pricing/barcotech-pricing/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"barcotech_pricing/barcotech-pricing/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"barcotech_pricing/barcotech-pricing/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"barcotech_pricing/barcotech-pricing/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"barcotech_pricing/barcotech-pricing/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"barcotech_pricing/barcotech-pricing/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"barcotech_pricing/barcotech-pricing/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"barcotech_pricing/barcotech-pricing/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"barcotech_pricing/barcotech-pricing/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"barcotech_pricing/barcotech-pricing/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"barcotech_pricing/barcotech-pricing/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"barcotech_pricing/barcotech-pricing/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"barcotech_pricing/barcotech-pricing/.git/index": "4d922ab613e83c7fb1e81caadccbafe0",
"barcotech_pricing/barcotech-pricing/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"barcotech_pricing/barcotech-pricing/.git/logs/HEAD": "41b1a92f61849da5588a886f80651aef",
"barcotech_pricing/barcotech-pricing/.git/logs/refs/heads/main": "41b1a92f61849da5588a886f80651aef",
"barcotech_pricing/barcotech-pricing/.git/logs/refs/remotes/origin/HEAD": "2bce9d5f65565ba26b3fcad4bd6c71b3",
"barcotech_pricing/barcotech-pricing/.git/logs/refs/remotes/origin/main": "3c60ef78ecfc91f30e785e0bbc8d220f",
"barcotech_pricing/barcotech-pricing/.git/objects/01/a194944d61860c69474d1bd4a86dad7e875234": "47178c5f2e79716f6180d76b4e2a4fb1",
"barcotech_pricing/barcotech-pricing/.git/objects/08/5431fc92bf14318e77598f3407c373277681c8": "b51c9df78d22bfe1718a285243cdd04a",
"barcotech_pricing/barcotech-pricing/.git/objects/38/62f9a854d8d9a8eed5ee2436ab93938941e179": "7f53d028bb6899e814ca7fbf717f4b83",
"barcotech_pricing/barcotech-pricing/.git/objects/3d/c71c61a178d2f391bb61e7ac0704ba6c4e6bf5": "2df1c6b7c60cb8f2ec391bf21461439d",
"barcotech_pricing/barcotech-pricing/.git/objects/44/e8202594fdbebfe022b5c4b8d3d6c99f9c2bdd": "e9e2fe547256e0bf1048c352ab42e8c8",
"barcotech_pricing/barcotech-pricing/.git/objects/65/1aac5d398b66aca154c9afdcb158c4e8f75612": "6e2d8e98389a4d33cc20e9215fd83085",
"barcotech_pricing/barcotech-pricing/.git/objects/66/d08c75993b228132264e9226308b0766798d2f": "7ad6927234300437cf4a4af2676a5ca7",
"barcotech_pricing/barcotech-pricing/.git/objects/81/a05c7f6abb50dde93cccf4066686e2dc3844e2": "746d7496b75e7d28d106e73ffba89695",
"barcotech_pricing/barcotech-pricing/.git/objects/97/910fcc8b85d6f2e71c8359e091408a06a32efb": "e658121c53ad2e35029a0bb6b8f46107",
"barcotech_pricing/barcotech-pricing/.git/objects/b2/babcf7f94a37f6af9b55ef9add2b7690d78a11": "7a77b6e4f2a230fe731130449fd232e4",
"barcotech_pricing/barcotech-pricing/.git/objects/c5/e7fcd4fd98af7757d0df878da41b2fbb885a07": "d160f2897a4976ca790b0d0c79f8f574",
"barcotech_pricing/barcotech-pricing/.git/objects/ca/b3e417ecee60d8a64eb35b16b4adcda2433683": "c3b3f2b6d89239ba1d99b28b78f18d5d",
"barcotech_pricing/barcotech-pricing/.git/objects/d0/f49147d8f85ae6eb3554a7b8df62355c46c36d": "7dda59005858a576290ee904aef642b8",
"barcotech_pricing/barcotech-pricing/.git/objects/da/2ad73aa2e704c619a8ad4efce3b988a54ca920": "4a8642d33cfa9fdb5f8ba74736ba305d",
"barcotech_pricing/barcotech-pricing/.git/objects/f3/5115137fed7a32ed5eb0e224b15ac11004c911": "7d5fa70a7729ded1db631736cd3e4afa",
"barcotech_pricing/barcotech-pricing/.git/objects/fe/701b3b19e230f8c9560f991e4fbdae294979ca": "160bd3e8c5f7feaee39484bc00ab1050",
"barcotech_pricing/barcotech-pricing/.git/objects/ff/9aab180af172502960011e2fb745117d8837c7": "5d4e97251f3d728a7b8f07b8d547f838",
"barcotech_pricing/barcotech-pricing/.git/objects/pack/pack-e083e65e93ab22b18697e657b3d575cf842b8e0f.idx": "22b634d607a0f134ea9a338c97cfecfc",
"barcotech_pricing/barcotech-pricing/.git/objects/pack/pack-e083e65e93ab22b18697e657b3d575cf842b8e0f.pack": "4506e936b0c8e0b7f57cf2054da2f102",
"barcotech_pricing/barcotech-pricing/.git/objects/pack/pack-e083e65e93ab22b18697e657b3d575cf842b8e0f.rev": "288d54525b4cc14bc8e53161729b6547",
"barcotech_pricing/barcotech-pricing/.git/packed-refs": "8cebafb35b9feefd024f28d9f4013a2b",
"barcotech_pricing/barcotech-pricing/.git/refs/heads/main": "384831eea36ccea5ebf97ff4a3ba5ab9",
"barcotech_pricing/barcotech-pricing/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"barcotech_pricing/barcotech-pricing/.git/refs/remotes/origin/main": "384831eea36ccea5ebf97ff4a3ba5ab9",
"barcotech_pricing/barcotech-pricing/assets/AssetManifest.bin": "6dce83fb4625df02ef3fef45a9cc0521",
"barcotech_pricing/barcotech-pricing/assets/AssetManifest.bin.json": "bf7181b58a67837b7f04774fedc72b9f",
"barcotech_pricing/barcotech-pricing/assets/AssetManifest.json": "068beb84bdf242ab428369e8312a0e58",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Alabang.png": "231c57328ac347a54d5f18c1021db312",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Alabang3D.png": "c7659a0adf132a6044dfd0b68dc76e9b",
"barcotech_pricing/barcotech-pricing/assets/assets/images/AlabangGlow.png": "ae5e0edd9ad06ae4023a846607b194be",
"barcotech_pricing/barcotech-pricing/assets/assets/images/BarcotechBG.jpg": "cfedcf189edf397914bd63ec50a5529e",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Cainta.png": "6b731c208b7f4be3eff64a29dd065d79",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Cainta3D.png": "41f888c2e05f39443e90da87a0f4a2d9",
"barcotech_pricing/barcotech-pricing/assets/assets/images/CaintaGlow.png": "bfe23aeb21a5b90182ce3e4ae2a58e9e",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Cebu.png": "66f177dbc8800e6ab79927a8082ebb92",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Cebu3D.png": "4118b0cd4705fde9344fb904f7d7f8fb",
"barcotech_pricing/barcotech-pricing/assets/assets/images/CebuGlow.png": "1bc6258ef9b8c59d839460500e574741",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Clark.png": "26f4cbb668b2d6cbccb6a1a3081638fc",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Clark3D.png": "6a68b2f897cd3f563f7733bb5c6cd634",
"barcotech_pricing/barcotech-pricing/assets/assets/images/ClarkGlow.png": "722ccb0804db3838ec8844c95d243b6f",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Davao.png": "eec1450f6d81988ce835f4a18b2952d5",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Davao3D.png": "fc38361c04928f9ed1cf16bd2de1e384",
"barcotech_pricing/barcotech-pricing/assets/assets/images/DavaoGlow.png": "99c51a16253d0fe507df523dc11b0213",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Default.png": "c620b519541f6915cf70a8a6b4c909d0",
"barcotech_pricing/barcotech-pricing/assets/assets/images/DS2208.png": "cb9afc5299e693eb104ce169edad7559",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Ecomm.png": "64f24ea042f2ba791ccf10963d55d0a6",
"barcotech_pricing/barcotech-pricing/assets/assets/images/EcommGlow.png": "15c5d2288ba2c960375bac6c6c6db98c",
"barcotech_pricing/barcotech-pricing/assets/assets/images/HomeBG.png": "9fcfa8a3907a6e4f8ae21c6b1eb02929",
"barcotech_pricing/barcotech-pricing/assets/assets/images/HomeBG2.png": "f74b7ab9bc39a0ee959351ecb19d6a7d",
"barcotech_pricing/barcotech-pricing/assets/assets/images/HPRT.png": "50e53d2143264a16848ec83ccf80d808",
"barcotech_pricing/barcotech-pricing/assets/assets/images/HPRT32.png": "646c028595b8a6e495bf82b19e7e0e02",
"barcotech_pricing/barcotech-pricing/assets/assets/images/HWSCANNER.png": "6fce105a43a458bdab6d38e81997b67f",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Key.png": "840a6c3448d813fd64e8e37a65aa6950",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Key3D.png": "bac396c9ee2fab2ae4c160a360c72a7d",
"barcotech_pricing/barcotech-pricing/assets/assets/images/KeyGlow.png": "f4177432ed52e5fea7b1df21a1fec46f",
"barcotech_pricing/barcotech-pricing/assets/assets/images/LABELRIBBON.png": "d37a278eddb361fb0618914625549179",
"barcotech_pricing/barcotech-pricing/assets/assets/images/MobileB.png": "a146ed941d19dfe332fc47b0ec9a00e2",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Oldbox.png": "3e49077862185a7a93f45ce4478e9aa6",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Oldies.png": "a19362a2413885dc77163174e2d29c94",
"barcotech_pricing/barcotech-pricing/assets/assets/images/OldiesGlow.png": "f37ef9438349e948434728b5182b96cc",
"barcotech_pricing/barcotech-pricing/assets/assets/images/PC42T.png": "cde87c8a882624d4357d94d5e13db32b",
"barcotech_pricing/barcotech-pricing/assets/assets/images/Pre-Registered.png": "c620b519541f6915cf70a8a6b4c909d0",
"barcotech_pricing/barcotech-pricing/assets/assets/images/printer.png": "c31cecca32b2544e3100100139608ee4",
"barcotech_pricing/barcotech-pricing/assets/assets/images/ZD220.png": "24371c5eb3064e97a83fb1ccc0abb601",
"barcotech_pricing/barcotech-pricing/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"barcotech_pricing/barcotech-pricing/assets/fonts/MaterialIcons-Regular.otf": "9728afdae26f5756775e396ddc6e7823",
"barcotech_pricing/barcotech-pricing/assets/NOTICES": "a9a7e20bedd8c3711874565810684384",
"barcotech_pricing/barcotech-pricing/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"barcotech_pricing/barcotech-pricing/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"barcotech_pricing/barcotech-pricing/canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"barcotech_pricing/barcotech-pricing/canvaskit/canvaskit.js.symbols": "24c87ee10346542526414ce490c0be71",
"barcotech_pricing/barcotech-pricing/canvaskit/canvaskit.wasm": "603fd1837a86d8a161c9307466641dc4",
"barcotech_pricing/barcotech-pricing/canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"barcotech_pricing/barcotech-pricing/canvaskit/chromium/canvaskit.js.symbols": "b0e73c9788009dd1d1130cababfa02e9",
"barcotech_pricing/barcotech-pricing/canvaskit/chromium/canvaskit.wasm": "6669f963704e6527d5bc6f6dab99e2ee",
"barcotech_pricing/barcotech-pricing/canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"barcotech_pricing/barcotech-pricing/canvaskit/skwasm.js.symbols": "8d8bb24bcd734b65ae1a7f37fffedd81",
"barcotech_pricing/barcotech-pricing/canvaskit/skwasm.wasm": "80a894e1f2adcc40512722268d03e1d5",
"barcotech_pricing/barcotech-pricing/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"barcotech_pricing/barcotech-pricing/favicon.png": "39447011c80ee3d1d5de4e39571e5556",
"barcotech_pricing/barcotech-pricing/flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"barcotech_pricing/barcotech-pricing/flutter_bootstrap.js": "b83ce98339c27b67cbdaa29345bb9e48",
"barcotech_pricing/barcotech-pricing/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"barcotech_pricing/barcotech-pricing/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"barcotech_pricing/barcotech-pricing/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"barcotech_pricing/barcotech-pricing/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"barcotech_pricing/barcotech-pricing/index.html": "016ea1ccb1319d78f8d21b35866bd9f3",
"barcotech_pricing/barcotech-pricing/main.dart.js": "1dddb7dc223b3573a31bdc6ce595f20e",
"barcotech_pricing/barcotech-pricing/manifest.json": "cced5fab8d7dd3fd18165fd4a2a12c5a",
"barcotech_pricing/barcotech-pricing/version.json": "77a08372abb093a8307672e988f4ade1",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "24c87ee10346542526414ce490c0be71",
"canvaskit/canvaskit.wasm": "603fd1837a86d8a161c9307466641dc4",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "b0e73c9788009dd1d1130cababfa02e9",
"canvaskit/chromium/canvaskit.wasm": "6669f963704e6527d5bc6f6dab99e2ee",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "8d8bb24bcd734b65ae1a7f37fffedd81",
"canvaskit/skwasm.wasm": "80a894e1f2adcc40512722268d03e1d5",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "39447011c80ee3d1d5de4e39571e5556",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "216520eee98e5783cb78a8929064d1ac",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e1e3aeb3c3c32b6af9e9e07dce258acd",
"/": "e1e3aeb3c3c32b6af9e9e07dce258acd",
"main.dart.js": "f09ac3bfaffb33a4228be3880ea3e4bb",
"manifest.json": "cced5fab8d7dd3fd18165fd4a2a12c5a",
"version.json": "77a08372abb093a8307672e988f4ade1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
