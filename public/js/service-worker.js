const APP_PREFIX = "my-budget-tracker";
const VERSION = "version_01";
const CACHE_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
  "./index.html",
  "./public/css/style.css",
  "./models/transaction.js",
  "./public/js/idb.js",
  "./public/js/index.js",
  "./public/css/bootstrap.css",
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("installing cache : " + CACHE_NAME);
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});
