// Pengganti service worker MY PRR lama. HP yang masih menyimpan versi lama
// mengunduh file ini saat aplikasi lama dibuka: cache dihapus, tab dimuat
// ulang (menampilkan halaman "MY PRR pindah ke myprr.my.id"), lalu service
// worker ini melepas dirinya sendiri.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (event) {
  event.waitUntil((async function () {
    var keys = await caches.keys();
    await Promise.all(keys.map(function (k) { return caches.delete(k); }));
    await self.clients.claim();
    var wins = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    wins.forEach(function (c) { try { c.navigate(c.url); } catch (e) {} });
    await self.registration.unregister();
  })());
});
