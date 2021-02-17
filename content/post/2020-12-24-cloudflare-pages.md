---
author: pemuda malkis
catalog: true
date: 2020-12-24T03:32:00Z
image: /img/cloudflare-pages.png
header-mask: "0.4"
tags:
- cloudflare
title: Cloudflare Pages Untuk Membuat Static Website
url: /cloudflare-pages/
---

Setelah kemarin mencoba cloudflare workers yang cukup rumit, kali ini ada yang baru dari cloudflare yaitu cloudflare pages, setelah mendapatkan email bahwa ada fitur baru.

> _Cloudflare Pages is a JAMstack platform for frontend developers to collaborate and deploy websites._

* Developer-focused with effortless Git integration.
* Advanced collaboration built-in with unlimited seats.
* Unmatched performance on Cloudflare’s edge network.

## Apa itu cloudflare pages?

Setelah membaca halaman homepage dari pages.cloudflare.com sepertinya menarik, fitur tersebut hampir sama seperti netlify atau github pages, dimana deploy static website langsung dari repo.

Wah mantap apalagi performa kecepatan dari cloudflare tidak perlu diragukan lagi, akhirnya langsung saja request beta access di [pages.cloudflare.com](https://pages.cloudflare.com "Cloudflare Pages ")

Namun cloudflare pages baru mendukung flatfrom static blog dari hugo, gatsby, vuepress, Jekyll dan react.

## Configurasi cloudflare pages

Jika sudah terbiasa menggunakan static site maka menggunakan cloudflare pages sama seperti itu.

1. Pertama adalah menghubungkan cloudflare pages dengan akun github kalian lalu pilih project repository untuk mendeploy.
2. Kedua setting build comman sesuai dengan framework yang kaliam gunakan misalnya jekyll build command dengan jekyll build dan publish directory _site, atau gatsby build command gatsby build publish directory public.
3. setting custom domain projek yang telah dibuat dengan domain kamu, semisalnya domainkamu.com cname  custom.pages.dev

Tidak sabar ingin mencoba cloudflare pages, masih menunggu email balasan untuk mendapatkan akses beta.

Sekian dan terima kasih.