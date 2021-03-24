'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "4638fc5355b501bb608ad435a223879c",
"assets/assets/england.svg": "bd1aa534efbd224b6fcdef2f59b21dde",
"assets/assets/deutschland.svg": "2acd47098cedd9826c3eb41d921353d8",
"assets/assets/chronometer.png": "ab8378ba1dc220e174f1fb0eac563fde",
"assets/assets/turkiye.svg": "5389b666c062f33e90f5e56b0946d4b3",
"assets/AssetManifest.json": "c5b405df7a99bd2b664b2d39ea673d2f",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "4de9d93491ce54609bb6e178768da52f",
"main.dart.js": "e26cfb09f35bfd4bcdc86a9b87e00328",
"version.json": "29bf4eada3054935329d8e55d767f5cc",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0",
".git/objects/38/a0d421aa28c890148ca9698647375dc6513cd8": "80a036ddfd76fc0d46c0308e35402a45",
".git/objects/29/eb937a59a26e87f00d37f17704f6ee810d0298": "5b1358bd50b6cf69fde767ec3bff2d12",
".git/objects/f8/5b488f8c83af1f06ae504cff45c52c3317b551": "e675c980336252ef24fff1f2e0dbfd86",
".git/objects/73/c70c00acc792c495bd5033577d326c5064c06a": "fcffa7d159076cab2129fb994819d62e",
".git/objects/fe/d0875a6e35a79d6037b9a9dc663c4fc580f1c6": "3e1afe5629d71ba87758a620b62f5ab7",
".git/objects/04/5d0782c2f20a41cc21b8c3b2d8bef69fc2e2bb": "c77545da2b22ca06f1a3c683445ed4ad",
".git/objects/bd/c2fce056137ffa1d8b6a8956e91a572a44b9ab": "a849203b17b79c372e5af114044a1b7d",
".git/objects/b1/fb7c16bc87f4ee614e61f65f9b61bba367a71c": "9fa926033190dd3a61ffb5dbd3498254",
".git/objects/90/7a2b9fb32996735fd88bb120324f9450cdefa3": "827c7a7462ed27abd73a7dce9e555423",
".git/objects/c6/93311ff1849439df04922704acc525b2952f80": "71789ffc60547de2b0e12766a997b050",
".git/objects/d5/f18577b926e0cb18e85018074efd389d2049ec": "53d72423f0f9bd826e974eeb255acea3",
".git/objects/pack/pack-261c89c891a0bd28b3872a710230af3a7555a790.idx": "e7350b401e240aa05ce58a4c0df149c7",
".git/objects/pack/pack-261c89c891a0bd28b3872a710230af3a7555a790.pack": "ddda671ec1bf1253e0c419a56eedb630",
".git/objects/79/142cc6b14e309660efdd2eb36c8191847013fc": "5bd4ab2eb2f8626bbb15aea696620d82",
".git/objects/c3/d27d8aac2e288a91b48d43f89444d5bbabfe4d": "d9aa1810008d41704f352607b4d6bbe4",
".git/objects/54/5252a0a5a0952aadd68ee6cfbcf46f90664f85": "1df3e7cfc49c615c604e1eed3c0c6b9d",
".git/objects/1c/2ee52ee37217b3a573ad51ef2afe48c3bf6810": "33e615c5a36021160ba898c7c3ff3552",
".git/objects/ee/8269c61eacb0c88812191e60d00882b3bbed84": "adea3dc01aa21a4b4601bf205a05ad10",
".git/objects/9c/0c54b2d1b1a4d2cb4dede4b87e69a89eecce4f": "48821522d3b37c4e678c34fa5c1f29a1",
".git/objects/b3/c950b8f80c56e3ac29f3433adc2149a0d07d84": "6345e7a0d6231ec45ef5e1d92edbc147",
".git/objects/f3/d32aa6596781e6cb9371dcc6686ea7028da740": "fb69b191322ba1f00f1be6286fe73647",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "83bddbe59243f9cafa42c8b5c1dc4fcd",
".git/refs/heads/master": "a3e495f5b562ae7dc7c70c31d06f0dc2",
".git/refs/remotes/origin/master": "a3e495f5b562ae7dc7c70c31d06f0dc2",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/index": "39b197edc19021c357a1a65b72392a11",
".git/config": "f68a0ad1a01bc09f891f7f67d3b4c902",
".git/packed-refs": "b7f5a8ccff1c359a96564ec109c83d81",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/COMMIT_EDITMSG": "79fc1f5e1cc575cd4503d6faea858292",
".git/index.lock": "d41d8cd98f00b204e9800998ecf8427e",
".git/logs/refs/heads/master": "2489da584092cfcef872b7e8401dead2",
".git/logs/refs/remotes/origin/master": "351bcb87d14210a3088241d5e507ae88",
".git/logs/refs/remotes/origin/HEAD": "341c5ea74e78baca16b4ba2d73d01101",
".git/logs/HEAD": "2489da584092cfcef872b7e8401dead2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ea9d0d812eea24875ff7217a69a57b65",
"/": "ea9d0d812eea24875ff7217a69a57b65",
"manifest.json": "0a52df635c0db2a80577df048b416730"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
