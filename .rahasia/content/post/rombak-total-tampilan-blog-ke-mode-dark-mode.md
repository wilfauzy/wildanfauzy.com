+++
author = "pemuda malkis"
date = 2021-10-29T17:00:00Z
image = "/img/stairs-lights-abstract-bubbles1.jpg"
tags = ["hugo"]
title = "Rombak Total Tampilan Blog ke Mode Dark Mode"

+++
Hampir semua aplikasi dan web modern menerapkan mode galap atau dark mode, selain membuat tampilan dan juga nyaman dilihat lama oleh mata, tidak jarang kadang perih kalau membaca portal berita berwarna dasar cerah membuat mata cepat letih.

Sebelum mode dark mode menjadi tren sekarang, sudah ada tampilan web yang lebih lama sudah menerapkan mode gelap yaitu tampilan homepage dari dracoola hosting, sejak sma main kaskus dan pertama kali membeli hosting, tampilan website dracoola masih konsisten dengan kesan menyaramkan.

Namun tampilan dark mode sekarang sudah banyak diterapkan, akhirnya mencoba menerapkan mode gelap di blog ini, karena masih bingung mana yang harus diedit di tema casper hugo ini, hal pertama menggunakan jasa converter ke dark mode menggunakan layanan dari night eye.

## CSS Dark Mode Generator

Hal yang paling mudah adalah menggunakan css dark mode generator dari night eye bisa kunjungi [https://nighteye.app/dark-css-generator/](https://nighteye.app/dark-css-generator/ "https://nighteye.app/dark-css-generator/") tinggal masukan alamat blog kalian lalu akan muncul kode css untuk mengconvert ke tampilan dark mode, selanjutnya masukan kode css ke file css tema kalian.

Namun karena hal ini bersifat menambah kode css membuat tampilan blog tidak begitu alami, pengalaman scrolling rada berat dan loading website cukup lama.

##  Mengedit File CSS

Jika menggunakan hugo terdapat file css di folder static/css, perlu kesabaran karena merombak satu persatu-satu dari komponen yang ada di file css sehingga menjadi mode dark mode.

Sebagai contoh hal yang pertama mengedit bagian body background

    body {
      background-color: black;
      color: white;
    }
    
    @media screen and (prefers-color-scheme: light) {
      body {
        background-color: white;
        color: black;
      }
    }

Tergantung dari file css tema blog kalian, pada tema casper hugo default tampilan berada di static/css/screen.css

    body {
        height: 100%;
        max-height: 100%;
        font-family: "Merriweather", serif;
        letter-spacing: 0.01rem;
        font-size: 1.8rem;
        line-height: 1.75em;
        color: #3A4145;
        -webkit-font-feature-settings: 'kern' 1;
        -moz-font-feature-settings: 'kern' 1;
        -o-font-feature-settings: 'kern' 1;
        text-rendering: geometricPrecision;
    }
    
    ::-moz-selection {
        background: #D6EDFF;
    }
    
    ::selection {
        background: #D6EDFF;
    }

Lalu saya ganti warna putih menjadi hitam dan huga sebaliknya, karena saya sedikit rabun tentang warna jadi mengganti dengan warna dasar hitam dan putih hehe, menjadi seperti ini.

    body {
        height: 100%;
        max-height: 100%;
        font-family: "Merriweather", serif;
        letter-spacing: 0.01rem;
        font-size: 1.8rem;
        line-height: 1.75em;
        color: #ffffff;
        -webkit-font-feature-settings: 'kern' 1;
        -moz-font-feature-settings: 'kern' 1;
        -o-font-feature-settings: 'kern' 1;
        text-rendering: geometricPrecision;
    }
    
    ::-moz-selection {
        background: #fff;
    }
    
    ::selection {
        background: #fff;
    }

Komponen esensial sudah dirombak menjadi dark mode, langkah selanjutnya tinggal inspect halaman di browser chrome atau firefox untuk menseleksi bagian yang harus diubah warnanya.

Selamat mencoba :)