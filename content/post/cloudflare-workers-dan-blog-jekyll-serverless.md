---
author: pemuda malkis
catalog: true
date: 2020-11-18T19:27:57Z
guid: https://wildanfauzy.com/?p=8635
image: /wp-content/uploads/2020/11/serverless-cloudflare-workers.png
header-mask: "0.4"
id: 8635
tags:
- cloudflare
- serverless
- workers
title: Cloudflare Workers dan Blog Jekyll Serverless
url: /cloudflare-workers-dan-blog-jekyll-serverless/
---

Apa itu “Cloudflare Worker” adalah JavaScript yang Anda tulis yang berjalan di edge Cloudflare. “Cloudflare Service Worker” secara khusus adalah pekerja yang menangani lalu lintas HTTP dan ditulis pada Service Worker API. menurut (<a rel="noreferrer noopener" href="https://blog.cloudflare.com/introducing-cloudflare-workers/" target="_blank">cloudflare</a>)

## Apa itu Workers

Sebelumnya pernah kenal workers ini pada awalnya ketika menerapkan PWA pada blog, jika memasang plugin superPWA di wordpress, maka akan ada script service-workers.js di root folder, gunanya untuk menjalankan pwa, menyimpan cache website yang sudah terdownload di browser pengguna.

Akibatnya website bisa diakses tanpa internet sekalipun, dan memberi respon 200 OK di header, selama cache masih tersimpan dan website bisa diakses tanpa jaringan internet, selain itu mempercepat loading blog dan banyak manfaat lainnya.

Akhir ini sering mencoba blog static atau lebih dikenal SSG (static site generator) seperti Jekyll, Hugo, Hexo, Vuepress, Gatsby dan banyak macamnya, kelebihannya memang banyak dibandingkan dengan website dinamis seperti wordpress yang membutuhkan proses data setiap saat, database terus-terusan berkerja.

Sedangkan SSG hanya menghasilkan static file tanpa perlu database atau query yang tertulis setiap saat, kecepatan loading lebih mantap, jika di wordpress perlu waktu banyak untuk tuning agar kecepatan menjadi optimal, seperti memasang plugin cache, dan optimisasi file css, html dan javascript.

Setelah mencoba static blog seperti hugo lalu mencoba jekyll karena langsung terintegrasi langsug dengan github pages, memang waktu deploy antara jekyll dan hugo sangat berbeda jauh, hugo hanya membutuhkan waktu 22 detik, sedangkan jekyll membutuhkan satu menit, tergantung seberapa besar file juga.

Iseng-iseng mencoba cloudflare workers, ada dua paket bundle plan bisa langsung membuat workers site dengan wrangler, tapi kalo mau coba gratis bisa mendapatkan workers dengan limitasi 100k request perhari dan mendapatkan KV storage sebesar 1 GB.

## Membuat Workers

Jadi karena hanya ingin coba-coba dengan workers milih yang gratis saja hehe, cara membuat workers cukup mudah.

* masuk ke dashbord cloudflare
* pilih menu workers
* pilih manage workers
* lalu pilih create workers

Setelah berhasil membuat workers maka kalian akan mendapatkan subdomain untuk mengakses workes yang kalian buat seperti blablabla.workers.dev, selanjutnya membuat script javascript untuk memerintahkan workers.

Contoh template workers bisa diakses <a rel="noreferrer noopener" href="https://developers.cloudflare.com/workers/examples" data-type="URL" data-id="https://developers.cloudflare.com/workers/examples" target="_blank">disini</a> atau bisa kunjungi halaman build with workers <a rel="noreferrer noopener" href="https://workers.cloudflare.com/built-with/" data-type="URL" data-id="https://workers.cloudflare.com/built-with/" target="_blank">disini</a>.

Percobaan kali ini dengan blog static yang pernah saya buat dengan Jekyll, pilih quick edit dan masukan perintah js di workers, dibawah ini ganti alamat domain idan.my.id dengan alamat domain kalian.

    async function handleRequest(request) {

    const url = new URL(request.url)

    // Where to proxy the requests through to
    const origin = 'https://idan.my.id';

    // We want to send any redirects back to the client,
    // not follow them here.
    const fetch_opts = {
    redirect: 'manual'
    }

    // Fetch the destination and respond
    return fetch(origin + url.pathname, fetch_opts)
    }

    addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
    })

<img loading="lazy" width="768" height="432" src="https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers-site.png?resize=768%2C432&ssl=1" alt="" class="wp-image-8642" srcset="https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers-site.png?resize=1024%2C576&ssl=1 1024w, https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers-site.png?resize=300%2C169&ssl=1 300w, https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers-site.png?resize=150%2C84&ssl=1 150w, https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers-site.png?resize=768%2C432&ssl=1 768w, https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers-site.png?resize=373%2C210&ssl=1 373w, https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers-site.png?w=1366&ssl=1 1366w" sizes="(max-width: 768px) 100vw, 768px" data-recalc-dims="1" /> </figure>

Lalu test dengan klik send dan sampai mendapatkan repon 200 OK, halaman berhasil, lalu klik save and deploy, sudah workers berhasil dibuat.

## Menghungkan workers dengan domain

Selanjutnya hubungkan workers dengan domain kalian, dengan kembali ke menu utama workers dan pilih add route masukan nama domain yang ingin dihubungkan dengan workers.

Sebagai contoh disini saya membuat halaman workers di alamat https://idan.aep.workers.dev lalu dihubungkan ke alamat blog https://idan.my.id sudah selamat menikmati serverless.

Dan hasilnya cukup memuaskan ketika cek di pagesepeed, kebetulan blog jekyll tanpa optimisasi awalnya cukup lama jadi cepat.<figure class="wp-block-image size-large">

<img loading="lazy" width="768" height="432" src="https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/serverless.png?resize=768%2C432&ssl=1" alt="" class="wp-image-8637" srcset="https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/serverless.png?resize=1024%2C576&ssl=1 1024w, https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/serverless.png?resize=300%2C169&ssl=1 300w, https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/serverless.png?resize=150%2C84&ssl=1 150w, https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/serverless.png?resize=768%2C432&ssl=1 768w, https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/serverless.png?resize=373%2C210&ssl=1 373w, https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/serverless.png?w=1366&ssl=1 1366w" sizes="(max-width: 768px) 100vw, 768px" data-recalc-dims="1" /> </figure>

Berikut konsumsi cpu time pada workers<figure class="wp-block-image size-large">

<img loading="lazy" width="768" height="432" src="https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers.png?resize=768%2C432&ssl=1" alt="" class="wp-image-8638" srcset="https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers.png?resize=1024%2C576&ssl=1 1024w, https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers.png?resize=300%2C169&ssl=1 300w, https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers.png?resize=150%2C84&ssl=1 150w, https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers.png?resize=768%2C432&ssl=1 768w, https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers.png?resize=373%2C210&ssl=1 373w, https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/workers.png?w=1366&ssl=1 1366w" sizes="(max-width: 768px) 100vw, 768px" data-recalc-dims="1" /> </figure>

Selanjutnya mau coba bikin workers site denga wrangler, mungkin cukup sekian membahas tentang workers dan serverless, terima kasih.