---
author: pemuda malkis
catalog: true
date: 2021-02-08T22:30:00Z
image: /img/quicker.jpg
header-mask: "0.4"
tags:
- litespeed
- quic cloud
title: Cara Setting Quic Cloud di Plugin LiteSpeed Cache
url: /cara-setting-quic-cloud-di-plugin-litespeed-cache/
---

Banyak pertanyaan bagaimana cara verifikasi dns quic cloud yang selalu gagal dengan plugin litespeed cache, sebelumnya untuk menggunakan quic cloud pastikan hosting yang kalian gunakan sudah menggunakan litespeed web server.

## Install Plugin LiteSpeed Cache

![](https://i0.wp.com/wildanfauzy.com/img/litespeed.png)Pertama harus menginstall dan mengaktifkan plugin litespeed cache di wordpress kalian untuk menggunakan cdn gratis dari quic cloud, selanjutnya setelah berhasil memasang plugin tersebut adalah.

## Request Domain Key

![](https://i0.wp.com/wildanfauzy.com/img/domain-key.png)Setelah terpasang plugin litespeed cache, lakukan request domain key, caranya klik tab pengaturan plugin pilih general lalu klik request domain key agar bisa menikmati semua fitur yang tersedia seperti cdn, image optimisasi critical css dan masih banyak lagi, tunggu beberapa menit sampai mendapatkan domain key.

Setelah berhasil mendapatkan domain key, selanjutnya klik link to quic.cloud akun, jika belum punya akun maka nanti akan diarahkan ke halaman pendaftaran, setelah berhasil menghubungkan ke akun quic cloud selanjutnya adalah.

## Enable Quic Cloud CDN

![](https://i0.wp.com/wildanfauzy.com/img/enable-cdn.png)Langkah selanjutnya setelah berhasil mendapatkan domain key dan berhasil menghubungkan dengan akun quic cloud, kembali ke dashboard wordpress kalian, buka plugin litespeed lalu buka pengaturan cdn, selanjutnya klik "ON" pada pilihan quic cloud cdn jika sudah simpan pengaturan, selanjutnya adalah.

## Aktifkan Quic Cloud

![](https://i0.wp.com/wildanfauzy.com/img/quic-cloud-enable.png)

Oke selanjutnya kembali ke akun quic cloud lalu klik tab cdn, dan untuk mengaktifkan quic cloud cdn klik tombol "enable CDN" seperti gambar diatas.

Setelah berhasil meng-enable cdn maka selanjutnya adalah.

## Mengatur CNAME Quic Cloud

![](https://i0.wp.com/wildanfauzy.com/img/cname-quic-cloud.png)Pada tahap ini banyak yang gagal melakukan verifikasi dns, hal yang pertama harus dilakukan adalah mengubah alamat ip domain kamu dengan cname yang telah diberikan oleh quic cloud untuk melakukan verifikasi dns.

Pertama catat cname yang diberikan quic cloud, lalu masuk ke manajer dns kalian, disini saya menggunakan layanan dns dari cloudflare.

![](https://i0.wp.com/wildanfauzy.com/img/setting-dns.png)Tambahkan setting dns cname masukan nama domain seperti www.domainkamu.com lalu isi target dengan cname yang telah diberikan oleh quic cloud, jika menggunakan cloudflare jangan centang icon awan orange. lalu klik save.

Jika menggunakan dns management hosting konvensional, masuk ke client area pilih domain yang kalian gunakan, lalu klik dns management selanjutnya tambahkan cname.

![](https://i0.wp.com/wildanfauzy.com/img/dns-manager.png)Seperti gambar diatas, klik save, perlu diingat bahwa pengaturan cname tidak bisa diimplementasikan di apex domain atau root domain seperti domainkamu.com, jika ingin menggunakan apex domain dns management yang sudah memiliki fitur aname atau cname flattening di cloudflare.

Alternatifnya jika ingin menggunakan domain utama setting dengan menggunakan www, jika sudah mengganti ip domain kalian dengan cname dari quic cloud adalah.

## Verifikasi DNS

![](https://i0.wp.com/wildanfauzy.com/img/verifikasi-cname.png)Setelah berhasil mengganti ip domain dengan cname quic cloud lakukan verifikasi, jika cname sudah benar di pengaturan dns maka proses verifikasi dns membutuhkan waktu sekitar dua menit, jika kalian punya sertifikat ssl, tambahkan ssl milik kamu agar proses lebih cepat.

Namun jika tidak punya maka quic cloud akan meng-generate ssl baru yang memakan waktu kurang lebih sepuluh menit, tunggu dengan sabar, berhasil deh.

![](https://i0.wp.com/wildanfauzy.com/img/sukes-cname.png)Mungkin cukup sekian, jika ada hal yang bikin bingung bisa berdiskusi di kolom komentar terima kasih.