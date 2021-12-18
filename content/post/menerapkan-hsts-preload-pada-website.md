---
author: pemuda malkis
date: 2020-08-22T08:38:49.000+00:00
guid: https://wildanfauzy.com/?p=7182
image: "/wp-content/uploads/2020/07/google-chrome.jpg"
header-mask: "0.4"
id: "7182"
tags:
- hsts
- ssl
title: Menerapkan HSTS Preload Pada Website
url: "/menerapkan-hsts-preload-pada-website/"

---
Sebelumnya tidak begitu peduli dengan yang namanya keamanan, baru kejadian beberapa hari yang lalu table meta comment rusak di database entah apa penyebabnya, ketika dicek, ukuran database jadi gede banget sampai overload.

Sebelumnya menggunakan askimet untuk menangkal spam komen, hal tersebut tidak terlalu membantu walau mampu meminimalisir, setelah menghapuskan spam yang begitu banyak, jadi rusak itu table meta comment, sampai sekarang enggak tau benerinnya gimana.

Walaupun ssudah bersih dari spam, masalah sekarang tidak bisa menampilkan komentar di bawah postingan, sedih juga sih udah space hosting kecil diserang spam bertubi-tubi, rasanya mau ngopi.

Akhirnya mengecek website ke observatory.mozilla.org yah betul setelah melihat hasilnya website mendapatkan peringkat F alias gampang banget dibobol.

Langsung memperbaiki HTTP header dengan menambahkan CSP (Content Security Policy) dan Strict-Transport-Security atau lebih dikenal dengan HSTS.

## Apa itu HSTS?

HTTP Strict Transport Security (HSTS) adalah mekanisme kebijakan keamanan web yang membantu melindungi situs web terhadap serangan man-in-the-middle seperti serangan downgrade protokol dan pembajakan cookie. Menurut (<a rel="noreferrer noopener" href="https://en.m.wikipedia.org/wiki/HTTP_Strict_Transport_Security" target="_blank">Wikipedia</a>).

Secara singkat dengan mengaktifkan hsts preload di http header memberitahu browser untuk selalu menggunakan koneksi yang aman yaitu https dan membatalkan koneksi yang kurang aman seperti http.

Sebelum memasang perlu diingat kalian harus mempunyai sertifikat ssl yang valid agar tidak error dan melakukan pengalihan semua url ke https.

Lalu bagaimana menerapkan hsts di website? caranya cukup mudah kok kalian tinggal menambahkan perintah di http header, kalian bisa menemukannya di server kalian file tersembunyi .htaccsess tambahkan bari kode berikut.

<pre class="wp-block-code"><code>Strict-Transport-Security: max-age=31536000; includeSubDomains</code></pre>

Untuk server yang menggunakan Apache tambahkan Header always set, jika masih error kalian bisa mencari plugins di wordpress untuk mengatur http header.

Setelah berhasil memasang pastikan sudah benar dengan mengecek di securityheaders.com, selanjutnya submit alamat website kalian ke hstspreload.org agar masuk list di berbagai browser seperti chrome edge dan Firefox.

Syarat agar website masuk list hsts preload ada tiga pertama mempunyai sertifikat ssl yang valid, kedua mengalihkan semua url ke https:// dan terakhir minimal waktu 31536000 detik atau satu tahun bisa juga selama enam bulan.

Jika sudah memenuhi sarat silakan submit ke hstspreload dan tunggu beberapa hari cek kembali apakah sudah masuk listh atau belum.<figure class="wp-block-image size-large">

<img loading="lazy" width="768" height="791" src="https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/08/20200822_083056.jpg?resize=768%2C791&ssl=1" alt="" class="wp-image-7186" data-recalc-dims="1" /> </figure>

Sudah berhasil, maka website kalian lebih aman, ada kekurangan jika sertifikat ssl tidak valid maka akan error dan website kalian tidak bisa diakses pastikan sertifikat valid dan masa berlakunya masih panjang agar tidak error.