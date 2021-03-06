'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3f6df3be15a69e6df0a38ba1a9c710f9",
".git/config": "318feaa4f35d1c05308abd43a3e10829",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2a63dae9e78a4a410a095e3a46096dca",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "c692996d7878b1a573196436f5893204",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e9145ec04dffaf9e96ab4e36e447a1a0",
".git/logs/refs/heads/master": "e9145ec04dffaf9e96ab4e36e447a1a0",
".git/logs/refs/remotes/origin/master": "ea5e1e8e7fbdccc9d6e4adfbef62ee2a",
".git/objects/0b/b360b873f5f168dd3ce43f452becce6ffa9701": "8aa0bea4d9078e89e9ea8bed08a253f3",
".git/objects/0f/88aa7596003c73253433049a89a02bbcf3de37": "362845ed517c7561359022be9262a894",
".git/objects/10/9c098a76f2189b1b6acf2b8fb7ca3e279a8b59": "307450cfa9646fea3f627a55a27ed3bb",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/16/57523744657e3d5b4d91e1d934c8a315afe471": "3a5b73f2057ba3e9d6fffe53ba29937b",
".git/objects/1d/4d495dda1d4d650c22511c8f283aae588a5d93": "a1196ca9b185b90bf99e3ef8b77769b5",
".git/objects/1d/b67ff370924a62326bf208f353e925c21f2204": "ec018403ab2fc1c3edc8c82f3f1d9d2f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/27/bed7ee567a99ce7739c6bd16a559c8957ed055": "9473d8884f373fc1738452f894f2beef",
".git/objects/2b/f0679c1e91d1bd670d7e568bce8579f74d10c1": "a1545b0ea372fb6bd8caa8f126d5628f",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/392deef79e69f07c39edefbf8ac411e39d1169": "0316b32ece2ced30a65dfb842f266f3c",
".git/objects/2f/cd2efcb0e2418d421d8f0f5d6084db97ac57a0": "0890a67586a17885129239de450d1032",
".git/objects/2f/d3705c164e81df95e01e25b7f7abe85d102f6a": "2241ffefe30d3a2b0773b577de7550a4",
".git/objects/32/17b54985d8bdf8f4711d0f6240d6ff04c3171c": "cb648340ca30292c61a3ae942090cedb",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/58603a5cd4e67d3de4c848a31aa6f76de78634": "18e24ce95e4c6ff9b039fba966177f1c",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/43/3f3157d9f9b97cac75f2bd6a835d84edf0c084": "3232b93bbf19c834a1c208ce2dff9577",
".git/objects/45/f06f677c1178236446a1008d4b3186f12cb7e2": "505d3933c0a1fe691941e6a1486ed2f7",
".git/objects/47/9596da545824917ace087bc11ec0c637b67b1f": "4f5c13db42de4c9e1243ebb0cfee4fc0",
".git/objects/48/b64febffabdbcc2c988b0442b53deb4d1ae1cb": "5229294e1c22d26aa608c44020755429",
".git/objects/50/8377c2a18a56b45ec1eb0492e73e05e2d9e398": "e6766709633510bbd0aa67844a3b03b6",
".git/objects/55/62a6560ee75ceb27e147f5e586e39e6fe234f4": "1d833043c19dd3b8038b67ac37549e1c",
".git/objects/56/b2c140f534534d97d8277b8aee6b29fb69be2d": "8f89e1957356208a2ffe711457944f55",
".git/objects/57/8a4d5e3c5c7f1fc3a6b92f30c2ec6abf8cefac": "fba1876c1742387e9493651d2412b14c",
".git/objects/58/ad9e8752a5663a44f0ddc4d6c8389850bc6b80": "c82f43adfe7675a6003136bf437994c4",
".git/objects/68/f3b42339c587a421e43465f8623fee4bbe470c": "c0982c8c984683cdf6c451145937d741",
".git/objects/6c/c5e22e6c4062dbdf77a6db414923e3ddd7ac3f": "1c71a8f969022bb3342c85fd2357a0f1",
".git/objects/6d/de9367edf93bc73a9bed4ff0701038dbd1a4b1": "70e92a56a1c4230db96a302ebad1cacd",
".git/objects/6e/1afc9ab1bd431fdbc4afe6809fd2280cf5adb3": "2f35d69103be617fd98db74e8d331eb4",
".git/objects/71/e5aa193f8788cde1a98f86f42539f50b568520": "d38c51bbd16a8b3deebf77bdad7fa200",
".git/objects/83/3dfee70473012a7c0fd51524e7cc44f326a551": "6efeb6fb09fb128828921738beda6152",
".git/objects/86/270bab28164318096f66a1240eebd21145c31c": "8e4b86f8d2709f6c263466d97b6875dd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/8dd1c766b828075a777f777ceb0d9b880b5de3": "03f58d8d0d83007080f9b29a9070b229",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/e43ec10add413608ea6aed5b5c1bdb35ab4fb1": "0ac5c66dc82426cb91a694474cd22056",
".git/objects/8e/6ede544b38eaf3cd1d83e8c1169cafaa383610": "24c49e087356b284770a21e2c6209841",
".git/objects/96/39b8d1614494f916d37f780c33051a79e891b7": "76052bf5bee54ab23dc25edf48c7f4f6",
".git/objects/9e/26dfeeb6e641a33dae4961196235bdb965b21b": "304148c109fef2979ed83fbc7cd0b006",
".git/objects/a0/50552d374c9def576ef70ff3f5763a6e0e58c4": "d55f6bb59540736c84e9a3d06a70ef81",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/d6a29fcc4b1d56d8c13e71a24350a827e7091c": "d21b6ba5af0aae0dfbbd9f5f69b5cf94",
".git/objects/ac/4dd53b95b675cdc7acac33c0074740620dde04": "6623234120cada1c50088e9d3da58975",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ae/52841210cf6232354b976a0ae3eae7e489acbc": "59fa6dd8ec25b91ab48c0ebd73707967",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b30f697d91215491bef3e9788ecf3a9c52f6a4": "5cc77bfba5f7898c6b037e9ff3de6c56",
".git/objects/bc/1db58fb49ef942b5f7ae21a80f8420d58c2a0d": "b5e771096a4f2e47521dd8b5bb1ba107",
".git/objects/bd/954c95fff4c557f9f7108b9e8b70cab40f8aa6": "63e85ae491f76738fb0bc8e7c1f71c03",
".git/objects/be/846f5ac0764d0d9995c5a7e541ce4fd755b0eb": "23263da9dea9b11303eb5315cf19333a",
".git/objects/bf/4d7278c889c552827315fd0845d75f8efc4c20": "9e261c81b0f9bd48c837d28c10f0fbe2",
".git/objects/c2/d6536d0d3499ae816a1f1868bba141549d297f": "301cd7ab446fe3508024c95111f41166",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/c7/7c09a30410df9ac280d61d1a08f004d18684c1": "1ca1327284d3d9e89471d0c0adf3a7fc",
".git/objects/cf/0df6eedee894e68a27214cd73209f5544f3a0a": "10a29cc8d33cf6a05c4076e6a8f627e4",
".git/objects/cf/ab2edc72deb8c4309bf7ddad0878ac0f507073": "8c665df61c52cb9490989c333a40481d",
".git/objects/d8/c16a86364bf04a9c072e88de7796b98365cc06": "539a5881182cead2490c736b45a9de21",
".git/objects/dc/5c07901979aa116fe274a08da623f357d86920": "e32e4d161d67c3173c27e1052c7dccf3",
".git/objects/dd/fdd8e525f9a49ea9d0bdd92d78596adc336e8b": "e89c0c2e35b1cdf0a269f12c1093d33d",
".git/objects/ec/50807c0deaba6e26414eccdc66852d354f2c06": "3435448c7ddb48cb4e34cd6bcb1ee97d",
".git/objects/ef/498eb4dfbb4ece4337593175a5b6da3e5f56f0": "f77aa5c9714c27de719f3a0b5b377678",
".git/objects/f1/f249961117da0c587cfaedac4275be178e5f16": "49aa9edbe1ae0defe109115c69107ad6",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f8/a2c5e72862d3b5c0a395034379f6ae8dc4da24": "d6aae62f5d6a6fb571889238ad833ddc",
".git/objects/f9/a1f6f5bc3585054c3fad963bfc09b2cbf11daf": "fa4bb1a3829497fe8dfac801b08aecfb",
".git/objects/f9/f3e0a37f8a428d5ff406ed4fc4681cd6948117": "cac63420aff6f3e965ee638576deffca",
".git/objects/fb/814f3cbdc87b4825471beb47b248e3905458cd": "ed1a38777fdd4553538df9abf9d9a59d",
".git/ORIG_HEAD": "32480de5c2ddff99f97160e1d5fc076d",
".git/refs/heads/master": "c03a06f65bbc4a8813c730c091ff6a0e",
".git/refs/remotes/origin/master": "c03a06f65bbc4a8813c730c091ff6a0e",
"assets/AssetManifest.json": "c5b405df7a99bd2b664b2d39ea673d2f",
"assets/assets/chronometer.png": "ab8378ba1dc220e174f1fb0eac563fde",
"assets/assets/deutschland.svg": "9f6bb7dfdfd1ff896c0261f7261428ca",
"assets/assets/england.svg": "8987950dedd49c12db107313dc0f3b85",
"assets/assets/turkiye.svg": "2d51b2a873c437aa4644b99f9a9a165a",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "29948a699a54bd0f5d80ac9f7c13dddd",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "dd5d0760e92deb350c3a87dd67b33c62",
"/": "dd5d0760e92deb350c3a87dd67b33c62",
"main.dart.js": "47669526e2b746d0a52aa479e667cfa0",
"manifest.json": "1b6a9ce60534f9f58484ab4830816783",
"version.json": "29bf4eada3054935329d8e55d767f5cc",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0"
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
