---
author: Redaksi
catalog: true
date: 2020-12-03T23:38:00Z
image: /wp-content/uploads/jekyll.png
header-mask: "0.4"
redirect_from:
- /2020/12/03/pindah-ke-jekyll/
- /2020/12/01/pindah-ke-jekyll/
subtitle: ""
tags:
- static site
- jekyll
title: Pindah Ke Jekyll
url: /pindah-ke-jekyll/
---

Semua bermula ketika ingin menulis di tengah malam, seperti biasanya menulis di aplikasi wordpress versi android, tapi ada yang aneh, tidak bisa dibuka terus, wahh sepertinya error nih aplikasi, padahal kuota malam masih melimpah banyak.

## Alasan Pindah Ke Static Blog

Dapat email dari jetpack bahwa website not responding, sudah hampir tiga kali mendapatkan pemberitahuan blog tidak bisa diakses, niat nulis pun jadi males sudah keburu tidak mood.

Akhirnya mengakses dashboard wordpress time out terus, cek koneksi lancar, menghapus cache browser sudah tapi tetap tidak bisa diakses, akhirnya masuk ke hosting dan membuka cpanel muter terus time out.

Mengecek website lain yang menyewa hosting yang sama ternyata sama-sama time out, akhirnya ngechat sama custumer service, ternyata dijawab begadang kayaknya tuh orang, ditanyain nama domain.

> mas server yang ini lagi gangguan?

> nama domain? jawabnya

Chatting lumayan panjang malah kaya diintrogasi disangka bukan nyewa hosting di tempat ini, si cs liat dari whois domain, soalnya memang saya beli domain ditempat lain, malah dituduh bukan hosting disini, vangke.

Hasilnya pertanyaan tidak terjawab, padahal dicek lah kalau error atau lagi gangguan, bukannya nanya balik ngalor ngidul, akhirnya masih ngelanjutin chat sama cs.

Keesokan harinya bisa diakses lagi, tapi rasa kesal masih ada sama si cs, seharusnya tau lah pelanggannya kan ada data pelanggan, ahh sudahlah.

## Memilih Pindah Layanan

Walaupun jatuh tempo hosting masih ada lima bulan lagi, akhirnya memilih pindah saja ke static site generator jekyll, karena sebelumnya sudah pernah buat iseng-iseng deploy hugo dan jekyll di blog pribadi [aidanblog.com](https://aidanblog.com "Aidan")

Niat untuk menulis hilang, migrasi dari wordpress ke jekyll, memang banyak masalah yang dihadapi, pertama setelah menunggu hosting pulih langsung mengimpor semua postingan dengan plugin export to jekyll.

Setelah itu membuat script shell untuk mencocokan dengan front matter agar sesuai dengan format di jekyll.

Karena postingan terlalu banyak ratusan, alhasil waktu deploy lumayan lama, ditambah error yang bermunculan, seperti gambar tidak muncul, semalaman akhirnya beres.

## Banyak Fitur

Salah satu niat migrasi ke static site generator adalah banyaknya fitur, yah kalau di wordpress self hosted memang jangan ditanya lagi plugin berhampuran mau nyari plugin apa saja ada.

Namun fokus saya disini adalah cuma menulis, di blog wordpress cuma masang empat plugin yaitu.

* Jetpack
* Askimet
* Litespeed Cache
* Simple Seo

Dan hampir semua plugin diatas minim konfigurasi, tapi masalah di wordpress adalah gutenberg yang bikin lemot kalau sedang mengetik, jarang sekali memposting lewat gutenberg, seringnya lewat aplikasi wordpress mobile terintegrasi dengan jetpack.

Sedangkan di static site tidak kalau menarik karena selain bisa menulis secara tradisional di lokal komputer dengan aplikasi typora lalu push ke repo dengan perintah git push.

Banyak pilihan CMS yang smooth, salah satunya Forestry sangat responsive untuk menulis, tidak opsi yang kadang bikin hilang fokus ketika menulis, dan tampilannya sangat minimalis entah itu di desktop maupun mobile.

Selain Forestry ada juga CMS CloudCannon, layanan satu ini mah all in one bisa dihandle semua dari hosting optimisasi assest gambar dan juga editor untuk menulis, tinggal fokus menulis saja sisanya dilakukan oleh mesin dari cloudcannon otomatis sinkronisasi dengan repository.

Alternatif github pages dan forestry tapi repostori harus public, jika ingin repo private bisa menggunakan netlify dan forestry atau netlifycms, pokokny masih banyak pilihan lainnya.

## Kesimpulan

Memilih pindah dari dinamis blog ke static blog banyak faktor yang menentukan, pertama karena hosting sering timeout memang seringnya tengah malam, tapi waktu tengah malam waktu saya sering ngepost.

Memang ada saja kekurangannya ketika pindah ke jekyll, karena beda format dengan wordpress banyak broken link, terutama di bagian kategori dan tags, tapi tidak mengapa, yang pentung alamat url postingan masih sama, karena menggunakan pretty permalink.

Mungkin sekian saja sambat dari saya hehe.
