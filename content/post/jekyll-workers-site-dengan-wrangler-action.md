---
author: pemuda malkis
catalog: true
date: 2021-02-05T14:00:00Z
image: /img/workers-social.png
header-mask: "0.4"
tags:
- jekyll
- workers-site
title: Jekyll Workers Site Dengan Wrangler Action
url: /jekyll-workers-site-dengan-wrangler-action/
---

Setelah penghujung akhir tahun blog ini pindah dari wordpress ke jekyll lalu dihost dengan github pages, akhirnya mencoba dengan workers site salah fitur yang sudah ada sejak lama di dahbord cloudflare namun hanya diklik.

## Belajar cloudflare workers

Percobaan yang panjang belajar tentang workers, pertama hanya menggunakan konsol javascript dengan fungsi untuk mengalihkan alamat lama ke alamat baru dengan massal [bulk redirect](https://wildanfauzy.com/bulk-redirect-domain-dengan-workers/ "bulk redirect").

Masa transisi ke static site memang cukup menyita banyak waktu. mulai dari meng-convert semua postingan ke format yang baru, sialnya jumlah postingan dari 2012 sampai sekarang banyak yang tidak singkron.

Alhasil tidak semua tertata dengan rapih, yang terpentik permalink postingan tidak berubah dan gambar thumbnail masih tersimpan, mungkin ada beberapa  gambar dalam postingan yang rusak.

Setelah berhasil pindah ke static site yang kami rasakan semakin produktif, tidak ada lagi setiap ingin menulis postingan terganggu oleh notifikasi update tema atau plugins, atau komentar spam yang banyak, apalagi sering sekali blog terkena brute force attack membuat blog sering internal server error.

## Masa Percobaan Trial and Error

Hal yang dirasakan setelah pindah ke ssg jekyll di github pages kini mencoba workers site, sebelum menerapkan cloudflare workers di blog ini, percobaan adalah di blog aidanblog.com.

Banyak error dan trial, tapi setelah percobaan yang berulang akhirnya berhasil, perlu diingat workers site versi gratis ada limitasi, sehingga perlu diperhatikan deploy time yang efesien.

Pertama mencoba dengan wrangler CLI, namun proses instalasi wrangler di laptop cuku sulit, install melalui NPM banyak masalah seperti permission denied, lalu berhasil install wrangler menggunakan cargo.

    npm install -g @cloudflare/wrangler
    wrangler config
    wrangler generate --site my-site
    cd my-site
    wrangler publish

Percobaan deploy local di komputer tetapi membutuhkan waktu yang cukup lama karena harus mendeploy jekyll sebelumnya lalu publih ke KV namespace menggunakan wrangler.

Lalu Percobaan kedua dengan landing page menggunakan gatsby yang saya sudah posting [deploy gatsby ke cloudflare workers](https://wildanfauzy.com/deploy-gatsby-website-di-cloudflare-workers/ "deploy gatsby to workers") namun car tersebut kurang efesien jika kalian mengupdate postingan setiap hari.

## Deploy dan Publish dengan Wrangler Github Action

Lalu percobaan selanjutnya dengan blog portofolio di a.idan.my.id (gatsby) dan blog gado-gado catatan sehari-hari di aidanblog.com (jekyll) akhirnya mendapatkan yang efesien.

Pertama build jekyll site dengan docker mendapatkan build time yang efesien yaitu 32 detik dengan postingan ratusan, sebelumnya dengan menginstall bundler dan bundle exec yang memakan waktu empat menit, build jekyll site with docker.

    name: Jekyll site CI
    
    on:
      push:
        branches: [ master ]
      pull_request:
        branches: [ master ]
    
    jobs:
      build:
    
        runs-on: ubuntu-latest
    
        steps:
        - uses: actions/checkout@v2
        - name: Build the site in the jekyll/builder container
          run: |
            docker run \
            -v ${{ github.workspace }}:/srv/jekyll -v ${{ github.workspace }}/_site:/srv/jekyll/_site \
            jekyll/builder:latest /bin/bash -c "chmod 777 /srv/jekyll && jekyll build --future"
    

Menggunakan docker walapun cepat namun menggenerate setiap saat melakukan push ke repo, tidak bisa menggunakan cache. setelah berhasil build jekyll selanjutnya menginstall wrangler action.

    name: Deploy
    
    on:
      push:
        branches:
          - master
    
    jobs:
      deploy:
        runs-on: ubuntu-latest
        name: Deploy
        steps:
          - uses: actions/checkout@v2
          - name: Publish
            uses: cloudflare/wrangler-action@1.3.0
            with:
              apiToken: ${{ secrets.CF_API_TOKEN }}

Namun di cloudflare workers free ada batasan yang paling sering mengganggu adalah masalah write and read yang dibatasi 1000 request setiap harinya, alhasil selalu kena limit, untuk mengatasinya dengan menyetel cron jobs di workflows.

    on:
      schedule:
        - cron: '0 * * * *'
    
    jobs:
      deploy:
        runs-on: ubuntu-latest
        name: Deploy
        steps:
          - uses: actions/checkout@master
          - name: Publish app
            uses: cloudflare/wrangler-action@1.2.0
            with:
              apiToken: ${{ secrets.CF_API_TOKEN }}

Hasil akhir mendapatkan build time satu menit sampai berhasil publish ke cloudflare dengan steps build jekyll site dengan docker dan install wrangler setelah itu publish site, lalu mengatur cron jobs setiap enam jam sekali untuk meminimalisir limits, seperti ini pangaturan workflows yang digunakan di blog ini.

    name: Deploy to workers-site
    
    on:
      schedule:
        - cron: '0 */6 * * *'
    
    jobs:
      build:
    
        runs-on: ubuntu-latest
    
        steps:
        - uses: actions/checkout@v2
          
        - name: Build the site in the jekyll/builder container
          run: |
            docker run \
            -v ${{ github.workspace }}:/srv/jekyll -v ${{ github.workspace }}/_site:/srv/jekyll/_site \
            jekyll/builder:latest /bin/bash -c "chmod 777 /srv/jekyll && jekyll build"
        - name: Install Wrangler
          run: sudo npm i @cloudflare/wrangler -g
    
        - name: Publish
          uses: cloudflare/wrangler-action@1.2.0
          env:
            USER: root
          with:
            apiToken: ${{ secrets.CF_API_TOKEN }}
            environment: 'production'

Setelah itu berhasil menggunakan workers-site dengan build time yang efesien, selanjutnya membuat konfigurasi wrangler.toml dan akhirnya bisa memilih bucket ke _site setelah build jekyll dengan docker.

Selamat mencoba, jika ingin melihat repo gihub blog ini bisa dilihat di bagiang footer dan klik ([view source](https://github.com/NgopiBrek/WildanFauzy.com "jekyll workers")) untuk melihat pengaturan yang saya gunakan dengan wrangler github action, terinspirasi oleh repostory [vences/hugo-workers](https://github.com/vences/hugo-workers "hugo workers")