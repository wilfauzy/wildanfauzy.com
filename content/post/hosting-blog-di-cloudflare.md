+++
author = "pemuda malkis "
date = 2021-03-17T19:00:00Z
image = "/img/cloudflare-pages.png"
tags = ["jamstack", "cloudflare"]
title = "Hosting Blog di Cloudflare"

+++
Dunia jamstack emang makin menarik, pada awal ngeblog taunya cuma blogger, namun semakin bertambahnya waktu sepertinya perkembangan dari blogger tidak banyak kemajuan.

Lalu beranjak bertemu dengan wordpress self hosted, dari sini mulai keluar modal beli domain dan hosting, namun karena jarang nulis kadang sempat nulis cuma satu tahun sekali, sayang sekali kalo bayar hosting tahunan.

Akhirnya terlepas dari langganan hosting, kembali ke jamstack website, banyak pilihan dan beragam fungsi dan esensi dari sedekar menulis di blog.

Loading blog menjadi kendala yang serius, apalagi arsitektur web yang kolot harus login cpanel, install cms, update tema, update plugin, belum lagi kalo pake hosting yang murah bikin kesel sering gangguan.

Namun itu dulu, kini sejak beralih ke jamstack website menjadi lebih murah dan mudah, biaya hanya dibebankan sama sewa domain pertahun saja hehehe.

Sebab banyak hosting cdn yang gratis untuk mendeploy website, seperti netlify, vercel, github pages, gatsby cloud, dan cloudflare pages.

Kali ini saya menggunakan cloudflare pages, karena akhirnya mendapatkan akses beta setelah menunggu beberapa bulan request access.

Langsung saja bagaimana menghost blog kita ke cloudflare, pertama harus menggunakan jamstack website seperti jekyll, hugo, gatsby dll.

Disini saya menggunakan hugo untuk membuat blog karena paling cepat proses buildnya dan asik saja gitu.

## Deploy Blog di Cloudflare

Pertama sudah mempunyai repositori files blog di github lalu masuk ke dashboard cloudflare dan pilih menu pages.

![](/img/cloudflare-jamstack.jpg)

Setelah menemukan menu pages klik dan perjalanan dimulai, langsung saja klik create project, jika belum terhubung dengan Github maka akan disuruh menghubungkan cloudflare dengan Github.

![](/img/cloudflare-github.jpg)

Setelah berhasil menghubungkan cloudflare dengan github, lalu pilih repositori mana yang akan kita bikin untuk dideploy di cloudflare pages.

![](/img/pilih-repository.jpg)

Setelah berhasil menghubungkan dengan repositori projek kita, selanjutnya setting build command dan environment variabel, sudah disediakan berbagai macam build setting untuk gatsby, hugo, hexo, jekyll dll.

![](/img/build-command.jpg)

Setelah benar semua setting build command dan environment variabel, langsung saja klik save and deploy, tinggal tunggu proses mendeploy blog jamstack kita di cloudflare global network.

![](/img/deploy-hugo-cloudflare.jpg)

Selamat blog kalian berhasil dihosting di cloudflare pages, kalian akan mendapatkan subdomain pages.dev sebagai preview blog, tahap terakhir tinggal setting custom domain dengan nama domain kalian.

![](/img/custom-domain-cloudflare.jpg)

Lalu pilih aktifkan domain, tunggu beberapa saat blog terhubung dengan domain kalian, dan menunggu beberapa menit untuk proses enable ssl, sudah deh jadi blog di hosting di cloudflare, lebih murah dan website menjadi cepat menggunakan jaringan cdn cloudflare yang sudah tersebar hampir di seluruh dunia.

Info lebih lanjut untuk memahi cloudflare pages bisa kunjungi dokumentasi di halaman [https://pages.cloudflare.com](https://pages.cloudflare.com "cloudflare hosting ")

Sekian dan terima kasih 😁