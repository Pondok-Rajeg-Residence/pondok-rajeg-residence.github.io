# pondok-rajeg-residence.github.io

Halaman pengalihan alamat lama MY PRR (`pondok-rajeg-residence.github.io/my-prr/…`)
ke alamat baru **https://myprr.my.id**. Tidak berisi kode aplikasi maupun data.

- `my-prr/app/`, `my-prr/`, dan `404.html`: halaman "MY PRR pindah alamat". Di
  browser langsung dialihkan (parameter seperti `?refType=` ikut diteruskan); bila
  dibuka dari ikon layar utama lama, tampil panduan pasang ulang.
- `my-prr/service-worker.js`: pengganti service worker lama — menghapus cache
  versi lama di HP warga lalu melepas diri.
