---
author: Linux Mania
date: 2020-06-02T13:09:42.000+00:00
image: "/wp-content/uploads/2020/06/xubuntu.png"
subtitle: ''
tags:
- plank
- vala appmenu
- xubuntu
title: Mempercantik Tampilan Linux Xubuntu 20.04
url: "/mempercantik-tampilan-linux-xubuntu-20-04/"

---
[Wildanfauzy.com](https://wildanfauzy.com/) – Linux xubuntu adalah distro turunan ubuntu yang menggunakan desktop environment xfce, ada beberapa alasan mangapa xubuntu lebih menarik daripada ubuntu itu sendiri, sebenarnya sama saja cuma beda desktop environment, di xubuntu versi 20.04 banyak perubahan dari versi sebelumnya, yang paling menonjol adalah tidak adanya versi 32-bit hanya tersedia versi 64-bit saja, dan hasilnya harus fresh install dari awal, selamat tinggal 32-bit.

Pembaruan selanjutnya adalah mendukung fitur dark mode dengan tema greybird-dark menjadi tema default, sebenarnya sudah lama di xubuntu 18.04 saya menggunakan dark mode, dengan banyaknya tema yang bisa didapat di xfce look.

Setelah menginstal xubuntu dengan tampilan yang sederhana, akhirnya mata ini bosan melihatnya, dan akhirnya memutuskan untuk mempercantik tampilan dari xubuntu 20.04, adapun beberap yang harus dipersiapkan adalah tema dark-olympic dan juga icon mojave circle, serta vala panel, catatan dalam xubuntu 20.04 ada masalah yang mucul vala panel tidak muncul di browser firefox, sampai saat ini belum menemukan solusinya.

## **Memasang tema dan icon**

Ada banyak pilihan jika mengunjungi xfce look, tetapi disini saya akan menggunakan tema dark-olympic dan icon mojave circle, tenang saja dalam pilhan tema terdapat opsi yang light dan dark tidak perlu khawatir. silakan mendownload tema dark-olympic <a rel="noreferrer noopener" href="https://www.pling.com/p/1302313" target="_blank">disini</a> dan juga icon mojave circle <a rel="noreferrer noopener" href="https://www.xfce-look.org/p/1305429/" target="_blank">disini</a> setelah mengunduh keduannya, selanjutnya memasang dua hal tersebut, install seperti biasanya.

## Download Themes and Icons

[Download Themes](/themes.tar.xz "tema ubuntu ")

[Download Icons](/icons.tar.xz "icons ubuntu ")

_Bagaimana cara menginstall tema dan icon di xubuntu?_ pertama kalian harus membuat folder .themes untuk memasang tema di folder home, dan membuat folder .icons untuk memasang icon di xubuntu, jika sebelumnya sudah ada kalian tinggal memindahkan tema atau icon yang sudah diunduh di masing-masing folder jangan lupa untuk mengekstrak jika file masih berbentuk .zip atau tar.gz , folder .themes untuk tema dan .icons untuk icon, tetapi biasanya keda folder tersebut tidak terlihat untuk melihat folder yang tersembunya cukup tekan tombol Ctrl+h untuk melihat folder yang tersembunyi.

## **Memasang vala panel**

Vala panel atau vala appmenu, berguna untuk menampilkan menu aplikasi di panel xfce, atau xfce global appmenu, kalian perlu memasang lewat terminal, perlu diingat bahwa vala panel tidak berfungsi di aplikasi firefox dan thunderbird, entah mengapa di xubuntu 20.04 ada error mungkin perlu waktu agar ada perbaikan, install vapa panel dengan perintah di terminal.

<pre class="wp-block-code"><code>sudo apt-get install xfce4-appmenu-plugin</code></pre>

Setelah memasang vala panel, selanjutnya tinggal menerepkan di panel xfce dengan menambahkan global appmenu tersebut di pengaturan panel.<figure class="wp-block-image size-large is-style-default">

![](https://i1.wp.com/wildanfauzy.com/wp-content/uploads/2020/06/vala-panel.png?resize=768%2C432&ssl=1)

Setelah selesai menambah item appmenu plugin pada panel xfce, selanjutnya menerapkan tema dan icon yang sudah dipasang, masuk di pengaturan xfce dan memilih appearance dan pilih dark-olympic, serta pada bagian icon pilih mojave circle.<figure class="wp-block-image size-large is-style-default">

![](https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/06/apperance-xfce.png?resize=768%2C432&ssl=1)

Setelah menerapkan tema dan icon, jangan lupa untuk mengganti window ke tema yang sudah dipilih, kembali ke setting manager dan klik window manager pilih dark-olympic, selamat tampilan xubuntu kalian sudah lebih cantik dan mempesona, jika kalian ingin menambahkan dock bisa diinstal lewat terminal atau aplikasi toko aplikasi xubuntu, install plank dock dengan perintah.

<pre class="wp-block-code"><code>sudo apt-get install plank</code></pre>

Untuk menampilkan plank pada awal booting atau starup, kalian cukup menambahkan aplikasi plank pada session and startup di setting manager, lalu pilih application autostart agar plank muncul ketika pertama kali menyalakan xubuntu, pilih add dan isi semua kolom dengan perintah plank, seperti gambar dibawah ini.<figure class="wp-block-image size-large is-style-default">

![](https://i1.wp.com/wildanfauzy.com/wp-content/uploads/2020/06/plank-dock.png?resize=768%2C432&ssl=1)

Jika sudah semua, agar semua fungsi aplikasi serta tema dan icon berjalan dengan sempurna, kalian tinggal log out atau restart, dan selamat menikmati tampilan xubuntu yang cantik dan menggoda hehehe, wallpaper yang saya pakai adalah wallpaper bawaan dari elemntary os, mungkin cukup sekian, jika ada pertanyaan jangan sungkan untuk bertanya di kolom komentar.