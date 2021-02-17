---
author: pemuda malkis
catalog: true
date: 2021-01-31T00:35:00Z
image: /img/gatsby-website.png
header-mask: "0.4"
tags:
- gatsby
- cloudflare
- workers
title: Deploy Gatsby Website di Cloudflare Workers
url: /deploy-gatsby-website-di-cloudflare-workers/
---

Kali ini ingin membahas tentang framwork gatsbyJS dan Cloudflare Workers, sudah hampir satu bulan lebih menunggu cloudflare pages resmi realese namun sudah daftar beta request belum dapat saja aksesnya.

Akhirnya masih setia dengan workers-nya, sudah tidak perlu dijelaskan lagi apa itu cloudflare workers sudah pernah dibahas juga di blog ini, salah satu framework yang keren menurut saya adalah gasbyjs.

## Build Gatsby dengan Github Action

Pertama sebelum mendeploy gatsby website kalian di cloudflare workers sebelumnya harus mem-build di komputer lokal kalian dengan perintah _"gatsby build"_ atau dengan wrangler namun disini saya lebih memilih menggunakan github action untuk build gatsby webiste.

Salah satu alasanya kalo deploy secara lokal di komputer itu membutuhkan waktu lama kalo build gatsby karena laptop saya yang butut wkkwkw, harus ganti ke mekbuk m1 keknya.

Pertama siapkan repostory github kalian lalu masuk ke pilihan github action, dan masukan baris gatsby publish di workflows, seperti ini.

    name: Gatsby Publish
    
    on:
      push:
        branches:
          - main
    
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v1
          - uses: enriikke/gatsby-gh-pages-action@v2
            with:
              access-token: ${{ secrets.ACCESS_TOKEN }}
              deploy-branch: www
              gatsby-args: --prefix-paths

Sesuaikan branch yang ingin di build gasby webiste kalian, defaultnya master atau main, lalu pilih deploy-branch sebagai output dari hasil buildnya, disini saya menggunakan nama branch www sebagai hasil deploy.

Namun sebelumnya memerlukan akses token github kalian, cara mendapatkan akses token github kalian bisa membuat di pengaturan profil lalu pilih developer setiing, jika sudah berhasil dibuat simpan baik-baik.

Selanjutnya simpan akses token tersebut di pengaturan repo lalu pilih secret seperti ini.

![](https://i0.wp.com/wildanfauzy.com/img/token.png)Jika sudah lakukan push ke repostory untuk mentriger github-action yang sudah dibuat lalu tunggu beberapa detik sampai gatsby website kalian berhasil dibuat dan mendapatkan branch baru dengan hasil dari output tadi seperti ini.

![](https://i0.wp.com/wildanfauzy.com/img/gatsby.png)Selamat website dengan framework gatsby kalian berhasil dibuat, selanjutnya kalian bisa menggunakan dengan github pages atau yang lainnya, namun karena disini saya ingin menggunakan cloudflare workers.

## Deploy gatsby website ke workers

Selanjutnya mendeploy gatsby website ke cloudflare workers dengan github action, hal yang perlu diperhatikan kalian harus membuat api token cloudflare workers, bisa dibuat di profil cloudflare lalu pilih api token dan sesuaikan dengan akses ke workers, seperti ini.

![](https://i0.wp.com/wildanfauzy.com/img/api-workers.png)Pilih template "edit cloudflare workers" setelah berhasil membuat api cloudflare workers, simpan api token itu dengan baik-baik jangan sampai lupa, selanjutnya menyimpan api token tersebut di secret repostrory kalian.

Jika sudah menyimpan api token, sebelumnya membuat pengaturan wrangler.toml sesuai dengan info akun cloudflare kalian, seperti zona id dan account id, bisa kalian dapatkan di dashboard cloudflare, konfigurasi wrangler.toml seperti ini.

    name = "warkop"
    type = "javascript"
    account_id = "AKUN ID CLOUDFLARE KALIAN"
    workers_dev = true
    
    [env.production]
    workers_dev = false
    route = "https://www.aep.my.id/*"
    zone_id = "ZONE ID CLOUDFLARE KALIAN"
    
    [site]
    bucket = "./"
    entry-point = "workers-site"

Simpan konfigurasi wrangler.toml tersebut di branch dimana hasil output gatsby website, disini saya menyimpan di branch www, selanjutnya menjalankan github action untuk mendeploy ke cloudflare workers, seperti ini.

    name: Deploy
    
    on:
      push:
        branches:
          - www
    jobs:
      deploy:
        runs-on: ubuntu-latest
        name: Deploy
        steps:
          - uses: actions/checkout@master
          - name: Publish
            uses: cloudflare/wrangler-action@1.2.0
            env:
              USER: root
            with:
              apiToken: ${{ secrets.CF_API_TOKEN }}

Simpan pengaturan github-action itu sesuka kalian bisa di master atau branch hasil output build gatsby, dengan membuat workflows di folder ".github/workflows/cloudflare-workers.yml" lalu tunggu beberapa detik sampai proses deploy ke workers selesai.

![](https://i0.wp.com/wildanfauzy.com/img/worker.png)Jika berhasil selamat gatsby website kalian berhasil diupload ke workers, maka akan menghasilkan alamat webite dengan nama projek yang kalian buat dengan subdomain workers.dev, seperti disini hasil workers websitenya menghasilkan alamat warkop.aku.workers.dev seperti itu.

## Route website workers ke alamat domain

Setelah berhasil mendeploy, kalian mendapatkan alamat website dengan subdomain workers.dev namun rasanya kurang gitu, lalu bagaimana menghubungkan ke domain kalian?

Petama masuk ke dashboard cloudflare lalu klik tab workes, selanjutnya add route untuk mengbungkan ke alamat domain kalian.

![](https://i0.wp.com/wildanfauzy.com/img/route.png)

Seperti gambar diatas, sambungkan alamat domain dengan workers yang sudah kalian buat, perlu diingat awan orange di dns harus diaktifkan agar workers berjalan.

Sudah deh jadi, 

* Repostory projek: [https://github.com/wilfauzy/Warkop](https://github.com/wilfauzy/Warkop "https://github.com/wilfauzy/Warkop")
* Tema Gatsby: [Gatsby Absurd](https://www.gatsbyjs.com/starters/ajayns/gatsby-absurd "theme gatsby absurd") 

* Alamat website projek: [https://www.aep.my.id/](https://www.aep.my.id/ "https://www.aep.my.id/")

* Workers website: [https://warkop.aku.workers.dev/](https://warkop.aku.workers.dev/ "https://warkop.aku.workers.dev/")