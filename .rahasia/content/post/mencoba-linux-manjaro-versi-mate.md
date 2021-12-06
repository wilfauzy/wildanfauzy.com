---
author: Linux Mania
date: 2020-08-21T18:19:50.000+00:00
guid: https://wildanfauzy.com/?p=7146
image: "/wp-content/uploads/2020/08/Screenshot-pada-2020-08-20-23-17-41-min.png"
header-mask: "0.4"
id: "7146"
tags:
- linux
- manjaro
- mate
title: Cara Install Linux Manjaro Versi Mate
url: "/mencoba-linux-manjaro-versi-mate/"

---
Sudah tidak asing lagi dengan distro linux yang satu ini, manjaro adalah distro linux yang selalu nangkring di urutan teratas distrowatch.com walaupun sudah tergeser dengan mx linux tapi masih dalam urutan tiga besar.

Ada berbagai macam versi desktop environment mulai dari xfce yang sudah terkenal sangat enteng di laptop ram dua giga pun ngacir, atau rada berat dikit kde dan gnome yang pasaran.

Percobaan kali ini bukan desktop environment yang disebutkan diatas melainkan DE Mate, bukan versi resmi dari manjaro melainkan versi komunitas, tapi masih di dukung oleh manjaro itu sendiri.

Tentu ada perbedaan dari versi yang sudah resmi, jika penasaran ingin mencobanya silahkan bisa download di link berikut Manjaro-Mate

Eittss tapi pertama-tama harus memburning iso yang sudah di download tadi, atau menggunakan usb sebagai media instalasi, setelah sudah tancapkan usb lagu setting boot ke flashdiks yang sudah ada instalasi manjaro.

## Mulai Instalasi 

![](https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-at-2020-08-20-15-57-59-min.png?w=768&ssl=1)

Setelah berhasil booting dari flashdiks akan masuk ke live manjaro, kalian bisa mencoba tanpa menginstall, atau bisa langsung memasang dengan mengklik launch installer maka akan muncul gambar seperti diatas.

## Mengatur Lokasi

![](https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-at-2020-08-20-22-58-51-min.png?resize=768%2C432&ssl=1)

Selanjutnya masuk pada menu pilihan lokasi, disini kalian harus memilih lokasi tinggal dimana, perlu di perhatikan karena Indonesia ada tiga zona waktu maka pilih sesuai tempat tinggal kalian biar sinkron aja gitu, secara otomatis setelah terhubung ke Internet maka waktu akan diatur secara otomatis enggak perlu setting waktu sendiri.

## Mengatur Papan Ketik atau Keyboard 

![](https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-at-2020-08-20-22-59-28-min.png?resize=768%2C432&ssl=1)

Setelah mengatur lokasi, langkah selanjutnya adalah memilih papan ketik atau layout keyboar kalian, perlu diingat karena sebelumnya memilih lokasi di indonesia, biasanya otomatis akan memilih papan ketik bahasa jawi atau bahasa daerah Indonesia lainnya, ubah ke layout keyboard kalian, pada umumnya layout keyboard laptop pasaran itu US atau UK.

## Mengatur Partisi

![](ttps://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-at-2020-08-20-22-59-41-min.png?resize=768%2C432&ssl=1)

Ini bagian yang lumayan sakral, yaitu memilih disk partisi untuk menginstall manjaro, ada empat pilihan bisa dual boot dengan os yang sudah terpasang di laptop kalian, atau memilih fresh install yaitu menghapus data semuanya dan mengganti dengan linux manjaro, saya sendiri sudah menyiapkan satu buah partisi untuk manjaro jadi pilihan yang terakhir yaitu manual partitioning.

## Mengatur Nama Pengguna

![](https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-at-2020-08-20-23-01-05-min.png?resize=768%2C432&ssl=1)

Selanjutnya mengisi data pengguna pc kalian terserah mau diisi apa, asal jangan sampai lupa password bisa enggak kebuka nanti, pertama nama kalian, lalu nama untuk login, dan password, kalian juga bisa mencentang pilihan username dan password yang sama untuk mengakses superuser di terminal, atau mencentang pilihan login tanpa menggunakan password tapi tetep kalian harus membuat password.

Jika sudah beres semua tinggal menunggu sistem terpasang di laptop kalian, waktu pemasangan tergantung dari tipe penyimpanan yang kalian gunakan kalo masih pake hardisk yah cukup lama, mending yang rpm 7200 lumayan lah, kalo pake ssd bisa lebih cepat proses pemasangan.

## Proses Instalasi 

![](https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-at-2020-08-20-23-12-37-min.png?resize=768%2C432&ssl=1)

Sabar menunggu karena masih pake hardisk akhirnya selesai juga instalasi manjaro versi mate, selanjutnya minum dulu biar rilek, terus restart laptop kalian jangan lupa mencabut media instalasinya yah.

## Update Setelah Beres Memasang 

![](https://i1.wp.com/wildanfauzy.com/wp-content/uploads/2020/08/Screenshot-pada-2020-08-20-23-39-53-min.png?resize=768%2C432&ssl=1)

Untuk mendapatkan pengalaman yang lebih asik kalian bisa langsung mengupdate, biar lebih update aja sih, enggak juga gapapa tapi bakal ribet nanti kalo enggak diupdate, mending perbarui yah, udah nurut aja walau gede juga update nya sampe satu giga enggak apa2 lah.

Perintah Manjaro sama ubuntu beda yah enggak pake apt lagi tapi pake pacman karena keturunan dari arch linux, ketik perintah di bawah ini untuk update sistem atau bisa langsung nongol pemberitahuan buat update.

<pre class="wp-block-code"><code>sudo pacman -Syu</code></pre>

Atau pake ini

<pre class="wp-block-code"><code>sudo pacman -Syyu</code></pre>

Setelah selesai update silakan menikmati manjaro versi mate, kelebihan dari manjaro update nya cepet kalian juga bisa ganti-ganti kernel linux sesuka kalian aja, bebas dah.