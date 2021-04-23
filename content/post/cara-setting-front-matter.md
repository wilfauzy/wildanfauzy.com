---
author: pemuda malkis
catalog: true
date: 2020-12-04T02:08:00Z
image: /img/tentang.jpg
header-mask: "0.4"
tags:
- blog
title: Cara Setting Front Matter
url: /cara-setting-front-matter/
---

Postingan ini adalah testing penggunaan front matter di static blog, sebagai contoh seperti ini.

## Contoh front matter

    ---
    layout: post
    title: "mencari kopi"
    subtitle: 'ngutang lagi di warung teh yuli'
    author: "hampa tuhan"
    header-image: text
    tags:
      - kapal api
      - rokok surya
    ---

Secara umum pengaturan default, pertama adalah _layout_ post atau page dan juga ada _tittle_ atau judul tulisan seperti ini.

## Mengatur layout post

    ---
    layout: post
    title: Ngeblog sambil boker
    ---

Secara otomatis jekyll akan membuat nama file tanggal postingan dan judul seperti ini 2020-12-03-tutorial-ngopi-sambil-boker.md, dengan settingan default bisa saja, namun ada beberapa field untuk menunjang postingan seperti tags, gambar, dekripsi dan nama penulis.

## Menambahkan gambar dan tags

    ---
    layout: post
    title:  "bucin sama sandal"
    categories: [ Jekyll, tutorial ]
    image: assets/images/3.jpg
    ---

Untuk menambahkan gambar pada postingan di jekyll atau hugo masukan field image: foldergambar/foto-orang.jpg atau untuk menambahkan tags bisa dengan field tags: atau categories: semua tergantung dengan struktur tema yang kalian gunakan.

## Pengaturan Permalink

    permalink:

Kolom permalink jika kalian ingin membuat alamat link yang berbeda dengan permalink default, contohnya seperti ini.

    ---
    permalink: /about/
    ---

Atau jika ingin mengatur permalink secara default bisa setting di file _config.yml.

    permalink: /:categories/:year/:month/:day/:title:output_ext
    permalink: /:collection/:name
    permalink: pretty
    permalink: /:title/

Lebih gampangnya memilih pretty permalink akan muncul dengan baris path tahun bulan tanggal dan judul postingan, atauh lebih simple bisa menggunakan /:tittle/  akan menampilkan alamat link dengan judul potingan.