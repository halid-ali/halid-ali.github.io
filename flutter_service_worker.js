'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon.png": "4638fc5355b501bb608ad435a223879c",
"assets/assets/tr.png": "a61f4d5561474e64ed3f68976556b3dc",
"assets/assets/de.png": "c9610f0d2105dc26c2fc25fa4c41d190",
"assets/assets/en.png": "a8530a96e01c7d218faf8ac83f999662",
"assets/assets/chronometer.png": "ab8378ba1dc220e174f1fb0eac563fde",
"assets/AssetManifest.json": "62e3a7574c46d09b7b63e496ed9db65c",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "4de9d93491ce54609bb6e178768da52f",
"main.dart.js": "bd99caaae433ec5949fb0d3b4c5c5c56",
"version.json": "29bf4eada3054935329d8e55d767f5cc",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0",
".git/objects/38/a0d421aa28c890148ca9698647375dc6513cd8": "80a036ddfd76fc0d46c0308e35402a45",
".git/objects/29/eb937a59a26e87f00d37f17704f6ee810d0298": "5b1358bd50b6cf69fde767ec3bff2d12",
".git/objects/9a/6e2e2ba9cdb674bdf5c7e8999a6c1b69713631": "fe6971232738e37650c121aa79e3aa3a",
".git/objects/f8/5b488f8c83af1f06ae504cff45c52c3317b551": "e675c980336252ef24fff1f2e0dbfd86",
".git/objects/17/f533dafe78b55c9bc05d155ceb7b7f25229890": "06eb23594ccec6f2809bd0bfe55f187f",
".git/objects/73/c70c00acc792c495bd5033577d326c5064c06a": "fcffa7d159076cab2129fb994819d62e",
".git/objects/fe/d0875a6e35a79d6037b9a9dc663c4fc580f1c6": "3e1afe5629d71ba87758a620b62f5ab7",
".git/objects/04/5d0782c2f20a41cc21b8c3b2d8bef69fc2e2bb": "c77545da2b22ca06f1a3c683445ed4ad",
".git/objects/bd/c2fce056137ffa1d8b6a8956e91a572a44b9ab": "a849203b17b79c372e5af114044a1b7d",
".git/objects/d6/194bec481fd11d076240636647cfed2f3d9f22": "9f37e68ea0e4f8feb079f372c82f2ddc",
".git/objects/b1/fb7c16bc87f4ee614e61f65f9b61bba367a71c": "9fa926033190dd3a61ffb5dbd3498254",
".git/objects/5e/9813995ea185caadaa3f9506ca0ca4b43492c7": "b674fa3139168a5380e4f90693653df5",
".git/objects/ac/d5c800b1936e41c7a2957ad3cf937d63a29346": "3dbd3deb8005b1080dbf09437013b2c9",
".git/objects/90/7a2b9fb32996735fd88bb120324f9450cdefa3": "827c7a7462ed27abd73a7dce9e555423",
".git/objects/e3/906c169b00b031345ce7a0587be56142409f0d": "1d1084b956ccf0ea10b0cb3db8179277",
".git/objects/3e/dbc660a63f391e5c8620516ccb670388680cd8": "a106185ec862b5c0d5c70e824ef5a728",
".git/objects/d2/100cbfc70ce54c9608de037aa5c18370ac59f9": "324fe17a8f06dddf05e1b709c7b71395",
".git/objects/c6/93311ff1849439df04922704acc525b2952f80": "71789ffc60547de2b0e12766a997b050",
".git/objects/d5/f18577b926e0cb18e85018074efd389d2049ec": "53d72423f0f9bd826e974eeb255acea3",
".git/objects/pack/pack-261c89c891a0bd28b3872a710230af3a7555a790.idx": "e7350b401e240aa05ce58a4c0df149c7",
".git/objects/pack/pack-261c89c891a0bd28b3872a710230af3a7555a790.pack": "ddda671ec1bf1253e0c419a56eedb630",
".git/objects/79/142cc6b14e309660efdd2eb36c8191847013fc": "5bd4ab2eb2f8626bbb15aea696620d82",
".git/objects/c3/d27d8aac2e288a91b48d43f89444d5bbabfe4d": "d9aa1810008d41704f352607b4d6bbe4",
".git/objects/a2/8e3c3308a7e363d76dee074c4e581733dd4875": "4ba2b90ed13b68df6850026aae1e2b54",
".git/objects/54/bcfed77e8f80b1b8c50c38cf38cfc9c3197430": "c03781f9b4acb7b8c9952d8492222ac0",
".git/objects/54/5252a0a5a0952aadd68ee6cfbcf46f90664f85": "1df3e7cfc49c615c604e1eed3c0c6b9d",
".git/objects/42/4abecd9e94781e2d0f0935fb7c62733f22067c": "b1774f54bca35cb6668579a3035b5c57",
".git/objects/ea/d96facd158723a58ad9a278ba5ac15b5fc5499": "91f7c9a988ed63edb59e0560ae361d15",
".git/objects/2a/b4748afcb1555f63694eeaf0f45c6811d07890": "5427cdd9bc122cfe0d95eb1046e6d4c0",
".git/objects/1c/2ee52ee37217b3a573ad51ef2afe48c3bf6810": "33e615c5a36021160ba898c7c3ff3552",
".git/objects/ee/8269c61eacb0c88812191e60d00882b3bbed84": "adea3dc01aa21a4b4601bf205a05ad10",
".git/objects/2b/d73b91aa2a5fdd49e74b649b38bc81506d9bb5": "c7482e58ae726138dddad9389cd1aa40",
".git/objects/a7/937d63f633373d622a152eb1ce702897d93d8e": "e1c346d8d223bdaf69c27b9af41f34a8",
".git/objects/10/a4e1ec7290686c0b5d931d6f1dabd4dc8f9d8f": "175bea7aafd3c35b4afe13ac35bbaa2f",
".git/objects/31/e85457406064844de4a88c58b2e2014ce4187f": "1d8905bb5f8bac88fe21adaa459dd443",
".git/objects/9c/0c54b2d1b1a4d2cb4dede4b87e69a89eecce4f": "48821522d3b37c4e678c34fa5c1f29a1",
".git/objects/b3/c950b8f80c56e3ac29f3433adc2149a0d07d84": "6345e7a0d6231ec45ef5e1d92edbc147",
".git/objects/56/3f90a30f173f198a433ce9ae7280c463061bf6": "7dcf5b55027202f5221db3b73498308b",
".git/objects/f3/d32aa6596781e6cb9371dcc6686ea7028da740": "fb69b191322ba1f00f1be6286fe73647",
".git/objects/60/9e114c1015e535fabf9b63665a7f71267c86cb": "ff6c648c00ed713193f6f378480895d1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/FETCH_HEAD": "9dcfebc1eb42324fb3afb4f04952501b",
".git/refs/heads/master": "becc9373b3a5b649e40221278503c2b6",
".git/refs/remotes/origin/master": "becc9373b3a5b649e40221278503c2b6",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/index": "28df60ca92321616ac3ea912441fb1eb",
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
".git/COMMIT_EDITMSG": "83539da5dd2886e7a4e0e54b1241a3f1",
".git/logs/refs/heads/master": "5f7e66f2e5af7adc2724911d7da80818",
".git/logs/refs/remotes/origin/master": "6d9eb8b1ff6a302e782eb99cae59d54a",
".git/logs/refs/remotes/origin/HEAD": "341c5ea74e78baca16b4ba2d73d01101",
".git/logs/HEAD": "5f7e66f2e5af7adc2724911d7da80818",
"icons/Icon-192.png": "2d2726f7420ec1ea5fdbda76a4d6f897",
"icons/Icon-512.png": "ab8378ba1dc220e174f1fb0eac563fde",
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
