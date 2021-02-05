'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "56b4f72e5d14659052ab23ca8faef32a",
"assets/assets/nishimiya.mp3": "6b9d4ffd153ae04529f5e865ddc5b475",
"assets/assets/Piano.sf2": "6ff87bce1b04c04b983ccf82d0968b10",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "43c6434d765a2cfd7432b28b30826827",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/sheet_music/assets/images/clef/bass_clef.png": "cc86c0622c521fd57b2c80c596ace757",
"assets/packages/sheet_music/assets/images/clef/treble_clef.png": "53688f18b2538562c6bb207b620f822b",
"assets/packages/sheet_music/assets/images/note/bass/a2.png": "c9ce55247ebfcdc39c2937c674bb3b0f",
"assets/packages/sheet_music/assets/images/note/bass/a3.png": "0655a28aea49c5487592f838521e4fcb",
"assets/packages/sheet_music/assets/images/note/bass/b1.png": "40fe0d402f1bdd55bc8b914f288e73c7",
"assets/packages/sheet_music/assets/images/note/bass/b2.png": "71dbbf27be3997139625229d52b7faf5",
"assets/packages/sheet_music/assets/images/note/bass/b3.png": "bb6306c9d9e043da68629ff627446af7",
"assets/packages/sheet_music/assets/images/note/bass/c2.png": "1aed5133184b29b377340759a4e3b1fa",
"assets/packages/sheet_music/assets/images/note/bass/c3.png": "70228b1c7264e4a825b0d1519094e382",
"assets/packages/sheet_music/assets/images/note/bass/c4.png": "ce5cb91e25e949bd7ba84003ba820813",
"assets/packages/sheet_music/assets/images/note/bass/d2.png": "348ce1fbeea69648f01edcfcb307693c",
"assets/packages/sheet_music/assets/images/note/bass/d3.png": "372568344b038670d6e0271a40d08c98",
"assets/packages/sheet_music/assets/images/note/bass/d4.png": "13d1ddaf43777b00667de20dec53c8d2",
"assets/packages/sheet_music/assets/images/note/bass/e2.png": "9d891f7dbce6d6e813ec6084f920b518",
"assets/packages/sheet_music/assets/images/note/bass/e3.png": "097326665d912f8b53cf39a64521c7a3",
"assets/packages/sheet_music/assets/images/note/bass/e4.png": "b9b017556641dbd07f1303226953dc52",
"assets/packages/sheet_music/assets/images/note/bass/f2.png": "0db60ade32fae1b6b455b2063fe6b9b5",
"assets/packages/sheet_music/assets/images/note/bass/f3.png": "0c9e3a8ceba59287665c6d837e558535",
"assets/packages/sheet_music/assets/images/note/bass/f4.png": "a1ad3873328f3c7b0206a96dc06fc460",
"assets/packages/sheet_music/assets/images/note/bass/g2.png": "1649694aac3f8eb6e4726f9a2c9c09b4",
"assets/packages/sheet_music/assets/images/note/bass/g3.png": "47d68ed320052a48c19aee50f2c20ccc",
"assets/packages/sheet_music/assets/images/note/none.png": "78498c67de82119f3ad049abe16728fd",
"assets/packages/sheet_music/assets/images/note/treble/a3.png": "f067df2e65eec95a58743822bce3479f",
"assets/packages/sheet_music/assets/images/note/treble/a4.png": "377b233961cb8487e42a4faabebb4f01",
"assets/packages/sheet_music/assets/images/note/treble/a5.png": "1f08ac0f73d0aa6072f4f5abbde9edb8",
"assets/packages/sheet_music/assets/images/note/treble/b3.png": "fe657a59ddfbb996c61d74347377cab0",
"assets/packages/sheet_music/assets/images/note/treble/b4.png": "49de4ffba53d8f2461949e75de06ba88",
"assets/packages/sheet_music/assets/images/note/treble/b5.png": "afbc93b3ec6a5fc7ced71f912219ad8d",
"assets/packages/sheet_music/assets/images/note/treble/c4.png": "06570bcc20362b0d113af3e1b3794f43",
"assets/packages/sheet_music/assets/images/note/treble/c5.png": "ac7ec66a995545b111f9d218e44b5ca5",
"assets/packages/sheet_music/assets/images/note/treble/c6.png": "61296e334e546dbd34ab4bf8a1ec98a1",
"assets/packages/sheet_music/assets/images/note/treble/d4.png": "6ace9e4054676bd362ceb337a7e3a9d8",
"assets/packages/sheet_music/assets/images/note/treble/d5.png": "5e13958042788ffa5c65d3368e6e1f58",
"assets/packages/sheet_music/assets/images/note/treble/d6.png": "57e6ef8c53a4d6ee7062ea7f20247a2a",
"assets/packages/sheet_music/assets/images/note/treble/e4.png": "c3155525d0243bcaf851db3ba9cb8c1d",
"assets/packages/sheet_music/assets/images/note/treble/e5.png": "111a0e73e0b5aefe49bcb807ae44b3cb",
"assets/packages/sheet_music/assets/images/note/treble/f4.png": "f6197b8d28b2e1956020602bebe6aee5",
"assets/packages/sheet_music/assets/images/note/treble/f5.png": "31f6aaeac9fa35218fb3e7dd8edd8f1f",
"assets/packages/sheet_music/assets/images/note/treble/g3.png": "4b349edda2f644a5e8d9f16f8ee202d9",
"assets/packages/sheet_music/assets/images/note/treble/g4.png": "71dbbf27be3997139625229d52b7faf5",
"assets/packages/sheet_music/assets/images/note/treble/g5.png": "3c6ebc4a1caee01a2498bcf89cc6cd1b",
"assets/packages/sheet_music/assets/images/scale/bass/ab_major.png": "593e1197cac2af3bb77bd66bd2e96e2c",
"assets/packages/sheet_music/assets/images/scale/bass/a_major.png": "c6afd65d80cab686e6d3283841e201a7",
"assets/packages/sheet_music/assets/images/scale/bass/bb_major.png": "e1b4db5486bcb7f3d665567044709a34",
"assets/packages/sheet_music/assets/images/scale/bass/b_major.png": "8e663df228a65a2e18a2c791b31e99c3",
"assets/packages/sheet_music/assets/images/scale/bass/cb_major.png": "406e5f0792a39d0b703d9ffb049d3b44",
"assets/packages/sheet_music/assets/images/scale/bass/cs_major.png": "7eb66a534fd0c67f50a3565b4254d155",
"assets/packages/sheet_music/assets/images/scale/bass/c_major.png": "b1fd486b6dd373643eeea9c8bbe58bc9",
"assets/packages/sheet_music/assets/images/scale/bass/db_major.png": "7cb8b33359ba7d15ce6c40339a495862",
"assets/packages/sheet_music/assets/images/scale/bass/d_major.png": "21234514d05074d1abba82071e2c0a99",
"assets/packages/sheet_music/assets/images/scale/bass/eb_major.png": "db7cd1c6aa8f02aa49f6d78cd84fc550",
"assets/packages/sheet_music/assets/images/scale/bass/e_major.png": "ce2498dd76a669b797bee0465abacc97",
"assets/packages/sheet_music/assets/images/scale/bass/fs_major.png": "dd9ab22a9a02f2e4c17f45d5c86fb91d",
"assets/packages/sheet_music/assets/images/scale/bass/f_major.png": "1f950aa648a48e2d049f6c5b3db54995",
"assets/packages/sheet_music/assets/images/scale/bass/gb_major.png": "8d960e8d8d8ed8eded55ef40bd7de4a8",
"assets/packages/sheet_music/assets/images/scale/bass/g_major.png": "ba92d4c337df87a854277b70b56e5c19",
"assets/packages/sheet_music/assets/images/scale/treble/ab_major.png": "e8770816e1be19565ca2dc40a8983fea",
"assets/packages/sheet_music/assets/images/scale/treble/a_major.png": "ee3b33061d82edf355ccf1341adadf4a",
"assets/packages/sheet_music/assets/images/scale/treble/bb_major.png": "84ff1f01f7965ce5313ed15c661f85d3",
"assets/packages/sheet_music/assets/images/scale/treble/b_major.png": "a16e7aa37768a2e235161a8a55516abe",
"assets/packages/sheet_music/assets/images/scale/treble/cb_major.png": "09f2b9f0b67011f9278396c7d181491b",
"assets/packages/sheet_music/assets/images/scale/treble/cs_major.png": "b8a281d2fda3efc54cac0718f816cf07",
"assets/packages/sheet_music/assets/images/scale/treble/c_major.png": "682ceaa8f745521254e0a48b8f6155a0",
"assets/packages/sheet_music/assets/images/scale/treble/db_major.png": "415db1bd24f3b1d9653e47a937715a5e",
"assets/packages/sheet_music/assets/images/scale/treble/d_major.png": "4ab62947f64c483de16bc8b72316ed68",
"assets/packages/sheet_music/assets/images/scale/treble/eb_major.png": "201e55a2be011636755e26b64772e0cf",
"assets/packages/sheet_music/assets/images/scale/treble/e_major.png": "5b6ce9ffd1ac1f0d72e18e6b307c6c08",
"assets/packages/sheet_music/assets/images/scale/treble/fs_major.png": "7dc058f33f7a5e5eb78f836321531a4f",
"assets/packages/sheet_music/assets/images/scale/treble/f_major.png": "344eaedc4a9542692a716bbc1cc467a5",
"assets/packages/sheet_music/assets/images/scale/treble/gb_major.png": "fee2b1ff4ad1ada6ccc9814ba93631b3",
"assets/packages/sheet_music/assets/images/scale/treble/g_major.png": "40b67cd3b2a73576a527ca08a4f61ba5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "93b1837318adbf9c3b765cb2be9ebf3f",
"/": "93b1837318adbf9c3b765cb2be9ebf3f",
"main.dart.js": "a9df2b63ed5602babb2ebab8cce464f6",
"manifest.json": "72c6aa1b1e1f6b62382a36c378d12e3d",
"version.json": "1a2bd9f50c073a352ed17c7ccfc89e65"
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
