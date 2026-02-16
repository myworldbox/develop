'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b0f0de10c6dafaac3422216e8ce806df",
"assets/AssetManifest.bin.json": "6480eec2c6300b1e60bb0f091e34bbd4",
"assets/assets/l10n/intl_en.arb": "a6c800c794954880367930eb5ecd6c6c",
"assets/assets/l10n/intl_hk.arb": "5cf3928e87f16c7f642308c33527e402",
"assets/assets/l10n/intl_zh.arb": "d1f51f5d7b70f15c65fb58cebfbaffa3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0e3e6eb1d3be57ff14ba60dab7f8b786",
"assets/NOTICES": "969d06985d3e1e8a9e7d0e0f78cd5231",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "0ed6806d30980655d86567a0ad6de41c",
"index.html": "b9c8d1e1f2da556a27c312d7b0ee3e16",
"/": "b9c8d1e1f2da556a27c312d7b0ee3e16",
"main.dart.js": "429d281b8f61e104c1098f43308a3ddf",
"main.dart.js_1.part.js": "6313cb85cd8911d09881a665109ce751",
"main.dart.js_12.part.js": "b854abd1d427bb7ffdba595471bd5fc3",
"main.dart.js_13.part.js": "87bcf7f383a03c9618fabeb195a7649c",
"main.dart.js_14.part.js": "1d0061d91a5a83e581a467f167f3999b",
"main.dart.js_16.part.js": "4dc35b3a72bc916b53912f3c6e97b17b",
"main.dart.js_17.part.js": "d50cbf149b5849c1b1be2a3d0b211944",
"main.dart.js_18.part.js": "fca7dd11af34467868c8d007569f3861",
"main.dart.js_19.part.js": "f0d03109e132b48fd37daa4e95af9edf",
"main.dart.js_2.part.js": "c2c8398b0e83960b43a924f7c7b024fd",
"main.dart.js_20.part.js": "e24e215e32eb5c4f20c0bdba8cfafeb1",
"main.dart.js_21.part.js": "5eeb96674776ac4afc44b281a19b5106",
"main.dart.js_24.part.js": "d99a6440d67d719989d5438fdd70de0f",
"main.dart.js_25.part.js": "049659eed74cbb72aa1586d0af8e3fd9",
"main.dart.js_26.part.js": "608fbcf1f969457cabf17dec9ba32f2e",
"main.dart.js_27.part.js": "06048d2e7219242045bb6129ab8b2f6d",
"main.dart.js_28.part.js": "9628d5977d0da8ccd1cee9013b922459",
"main.dart.js_3.part.js": "77d757e40cef351716b49374d12895d8",
"main.dart.js_30.part.js": "b834e2ca877c76185702b243a894c429",
"main.dart.js_31.part.js": "3e3b1b196766d11d66ea2fd8d778e78a",
"main.dart.js_32.part.js": "b78440803ebf4de83509b1363fef9aeb",
"main.dart.js_33.part.js": "daa0048f97b87a73cc524d3f57d66c3d",
"main.dart.js_34.part.js": "d01e0f474724b59c4b6fe965667f574e",
"main.dart.js_35.part.js": "25ccc14d7cdfc5e5a2a680ba9500de09",
"main.dart.js_36.part.js": "83e4a42c86bfaf5d9a6d3a738c4e06fc",
"main.dart.js_37.part.js": "67601f24e97b6175d92e2747f11d4a05",
"main.dart.js_5.part.js": "1e7109177af98dd45621eace9e5aa160",
"main.dart.js_7.part.js": "0c42e34c29fa32ef95f118519f01a2a2",
"service_worker.js": "218180f095bfce8913412dc21c609af2",
"version.json": "ededbfb1cdd95d316566d50c31d591ea"};
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
