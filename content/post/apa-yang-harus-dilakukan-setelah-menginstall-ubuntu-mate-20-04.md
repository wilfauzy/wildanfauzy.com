---
author: Linux Mania
tags:
- Linux
date: 2020-07-02T18:30:37Z
guid: https://wildanfauzy.com/?p=4756
image: /wp-content/uploads/2020/07/ubuntu-mate.png
title: Apa Yang Harus Dilakukan Setelah Menginstall Ubuntu Mate 20.04?
url: /apa-yang-harus-dilakukan-setelah-menginstall-ubuntu-mate-20-04/
---

Ubuntu MATE adalah distro ubuntu yang memggunakan desktop environment mate, jika bosan dengan desktop environment bawaan ubuntu yaitu gnome, ubuntu mate bisa jadi alternatif selain dari xubuntu yang tentunya masih dibilang cukup ringan diinstall di laptop.

Menginstall ubuntu mate sebenarnya sudah terpasang aplikasi yang cukup untuk menunjang kebutuhan dasar menggunakan sebuah laptop sudah terpasang libreoffice, pemutar musik dan video, tetapi lebih lengkap rasanya jika menginstall beberapa aplikasi berikut.

## Menginstall Google Chrome

![](https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/07/google-chrome.jpg?resize=642%2C345&#038;ssl=1)

Browser bawaan dari ubuntu mate adalah firefox, sebenarnya tidak ada masalah dengan firefox, jika kalian sudah terlanjur nyaman dengan sinkronisasi halaman web favorit atau bookmark pada browser chrome mobile di android kalian, menggunakan google chrome sangat berguna dan memudahkan sinkronisasi data di chrome mobie dan chrome yang terpasang di laptop.

cara memasang google chrome, kalian bisa mengunjungi halaman google chrome download <https://www.google.com/chrome/> perlu diingat bahwa google chrome hanya mendukung arsitektur 64-bit hehehe, setelah mendownload chrome lalu install dengan gdebi atau perintah berikut di terminal.

<pre class="wp-block-code"><code>sudo apt install ./google-chrome-stable_current_amd64.deb</code></pre>

Pastikan sebelum menginstall posisikan terminal di folder yang terdapat file google chrome, seperti _cd Downloads_ tergantung dimana kalian menyimpan file chrome, atau alternatif lain menginstall chromium kalian bisa memasangnya lewat toko aplikasi di ubuntu mate.

## Menginstall VLC Player

Pemutar video dan musik yang handal, sebenarnya sudah ada pemutar video bawaan dari ubuntu mate ini, cuma rasanya kaya kurang gitu, apa karena sudah terbiasa menggunakan vlc untuk maraton nonton drakor dari subuh ke subuh hehehe, memang andalan vlc sudah support banyak file video jadi asiklah, kalian bisa menginstall vlc player di toko aplikasi tulis aja &#8220;vlc&#8221; entar nongol, atau perintah snap di terminal.

<pre class="wp-block-code"><code>sudo snap install vlc</code></pre>

## Menginstall Microsoft Fonts

Jika kalian membututhkan font seperti time new roman untuk mengerjakaan tugas deadline dari bapak/ibu dosen yang terhormat, biasanya menggunakan microsoft office, secara default libreoffice tidak menyediakan fonts tersebut kaian bisa menginstallnya kok tenang aja, perintah di terminal.

<pre class="wp-block-code"><code>sudo apt install ttf-mscorefonts-installer</code></pre>

Sebelum microsoft font terpasang kalian harus menyetujui perpanjian Eula gitu lah pokoknya kli oke aja, tapi kalian mau baca juga engga apa-apa.<figure class="wp-block-image size-large">

![](https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/07/font-microft.png?resize=768%2C432&#038;ssl=1)

Klik Ok terus muncul licence terms, the &#8220;Truetype core fonts for the web EULA&#8221; klik yes untuk meanjutkan instalasi, terus tunggu sampe selesai, udah deh, akhirnya bisa mengunakan font time new roman dan kawan-kawan di libreoffice.

Masih banyak aplikasi yang berguna untuk menunjang produktifitas seperti gimp dan inkscape, dan masih banyak lainnya, tinggal kunjungi toko aplikasi _**software boutique**_ di ubuntu mate, selamat mencoba.