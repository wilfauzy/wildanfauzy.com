+++
author = "pemuda malkis"
date = 2021-03-19T06:53:00Z
image = "/img/pexels-negative-space-169573_lyyqxo.jpg"
tags = ["jamstack "]
title = "Adu Cepat Vercel Netlify dan Cloudflare "

+++
Semua berawal dari keisengan semata, karena lagi gabut akhirnya ngoprek deh, masih dalam dunia jamstack untuk membangun atau deploy blog ini. 

Jadi ceritanya iseng mau membandingkan antara vercel, netlify, dan cloudflare pages. 

Ketiga provider hosting untuk website jamstack seperti hugo dan Gatsby dll, sudah enak lah, selain gratis, mudah, dan cepat. 

Static site generator sepertinya makin jadi menarik untuk dilirik, apalagi cloudflare masuk wah jadi makin seru. 

Keisengan kali ini mau melihat ketiga performa dari hosting jamstack tersebut, asiknya jamstack itu website kita langsung di-host ke dalam cdn mereka masing-masing. 

Mari langsung saja duet lah 😂

## Build time dan performa Netlify 

Salah satu hosting website jamstack paling terkenal dan banyak fitur adalah netlify, pokoknya paket lengkap lah, bisw custom domain, optimisasi aset gambar, css, js dan banyak lagi. 

### Build time netlify 

![](/img/img_20210319_133939.jpg)

Disini saya menggunakan static site generator hugo versi 0.25 dengan jumlah postingan blog 300 artikel kurang lebih dan aset gambar hampir 500 gambar yang ada di repositori GitHub hasilnya build time netlify memang cepat hanya membutuhkan total build time 29 detik untuk mendeploy website ini. 

### Performa hosting netlify 

![](/img/img_20210319_133848.jpg)

Setelah mendapatkan rekor build time yang cepat ternyata performa dari hosting netlify memuaskan dimana ketika dites di sucuri mendapat skor A dan total kecepatan loading website di angka 0.471 ms

## Build time dan performa Vercel

Percobaan kedua dengan vercel adu cepat dengan netlify mari kita lihat jika keduanya diadu. 

### Build time Vercel 

![](/img/img_20210319_134024.jpg)

Vercel sebagai bapak dari nextjs, paling cocok untuk website yang berbasis javascript seperti gatsby, nextjs dll, disini saya masih menggunakan repositori yang sama dan menggunakan static site generator yang sama juga yaitu hugo, dan hasilnya build time dari vercel 31 detik. 

Saingan berat sama netlify, lumayan banyak fitur juga yang bisa digunakan di vercel seperti custom domain gratis dll. 

### Performa hosting vercel

![](/img/img_20210319_133909.jpg)

Jika dibandingkan dengan netlify hosting vercel seperti kalah cepat jika dilihat dari perbandingan diatas, disini vercel mendapatkan skor B dengan total waktu loading 0.743 ms. 

## Build time dan performa Cloudflare Pages 

Cloudflare pages bisa dibilang pemain baru, saya sendiri baru dapet akses bulan lalu, tapi tidak bisa dibilang pemain baru juga, sebelumnya sudah ada workers untuk mendeploy berbagai macam website. 

Namun cukup ribet dengan workers, tapi muncul cloudflare pages jadi makin mudah walaupun masih tahap beta. 

### Build time Cloudflare

![](/img/img_20210319_134049.jpg)

Diantara ketiganya mungkin cloudflare pages yang paling lama kalo dilihat dari gambar diatas, membutuhkan waktu satu menit tiga detik bisa dibilang dua kali lipat lebih lambat dari netlify dan vercel. 

Namun wajar saja namanya masih beta sebab, dilihat dari build logs  masih banyak steps untuk proses deploy. 

![](/img/deploy-hugo-cloudflare.jpg)

Seperti gambar diatas ada langkah-langkah yang tidak ada di vercel dan netlify, seperti inisiasi build environment dan clone repositori, kalo di vercel dan netlify biasanya menyimpan cache build bisa jadi karena ini, enggak tau juga sih. 

Namanya juga masih beta belum final hehe. 

### Performa hosting Cloudflare 

![](/img/img_20210319_133828.jpg)

Ini yang paling menarik perbandingan performa antara vercel, netlify dan cloudflare, bisa dilihat cloudflare pages menang dalam hal ini dengan kecepatan loading membutuhkan total waktu 0.315 detik dengan skor A+ hmm menarik. 

## Kesimpulan 

Dari hasil perbandingan netlify vs vercel vs cloudflare bisa kalian simpulkan sendiri hehe. 

Tapi menurut saya pemenangnya adalah netlify horee. 

Jika dilihat dari build time dan performa disatukan netlify menjadi domain menurut pandangan saya ditambah banyak fitur yang berlimbah. 

Ketiganya sama bagusnya, hal yang paling penting gratis ada juga paket berbayarnya, gratis custom domain, dan juga gratis ssl. 

Mungkin cukup sekian keisengan hari ini, terima kasih. 