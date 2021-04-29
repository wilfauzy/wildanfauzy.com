---
author: pemuda malkis
catalog: true
date: 2020-11-23T00:53:44Z
guid: https://wildanfauzy.com/?p=8647
image: /wp-content/uploads/2020/11/bulk-redirect.png
header-mask: "0.4"
id: 8647
tags:
- cloudflare
- serverless
- workers
title: Bulk Redirect Domain Dengan Workers
url: /bulk-redirect-domain-dengan-workers/
---

Gatel kalo liat diskonan, habis bangun tidur dapet notif diskonan domain .com setengah sadar akhirnya mencet checkout, wassalam akhirnya beli domain lagi, entah kayaknya bakal jadi kolektor domaian hehehe.

Akhirnya merenung setelah membeli domain, buat apa yah ini domain kalo bikin projek juga bingung bikin apa lagi, akhirnya dipake buat pendamping domain my.id di blog pribadi, awalnya jadi alias domain, tapi mikir lagi mending jadi primary domain saja.

Tapi kalo redirect satu per satu setiap postingan ke alamat baru kayaknya bakal capek, copy paste satu-satu alamat blog, akhirnya kembali lagi dengan cloudflare workers.

## Bagaimana bulk redirect domain dengan cloudflare Workers?

Pertama Bikin dulu workers, jika melihat di example workers website bisa dengan perintah bulk redirect tapi tetep saja harus masukin satu-satu alamatnya, redirect satu domain ke banyak domain dengan parameter /*.

    const base = "https://example.com"
    const statusCode = 301

    async function handleRequest(request) {
    const url = new URL(request.url)
    const { pathname, search, hash } = url

    const destinationURL = base + pathname + search + hash

    return Response.redirect(destinationURL, statusCode)
    }

    addEventListener("fetch", async event => {
    event.respondWith(handleRequest(event.request))
    })

Cara diatas lebih efesien daripada manual satu-satu redirect ke alamat baru, tinggal sesuaikan dengan alamat parameter blog kalian, jika di wordpress menggunakan pretty permalink, ganti destinasi url dengan base + pathname, di jekyll menggunakan parameter pretty permalink, seperti ini perintahnya.

    const base = "http://aidanblog.com/"
    const statusCode = 301

    async function handleRequest(request) {
    const url = new URL(request.url)
    const { pathname } = url

    const destinationURL = base + pathname

    return Response.redirect(destinationURL, statusCode)
    }

    addEventListener("fetch", async event => {
    event.respondWith(handleRequest(event.request))
    })

## Langkah-langkah bulk redirect

Pertama pastikan awan oren di dns cloudflare menyala agar worker bisa me-route dengan alamat domain yang dituju.

Mengganti ssl menjadi flexsibel, agar tidak mendapatkan peringatan too many redirection pada browser, di pengaturan dns, masukan alamat sesuka kalian hehehe, disini A record saya menggunakan ip 1.1.1. karena memang domain dipakai hanya untuk redirect.

Selanjutnya membuat workers dengan kode diatas tadi jika sudah kembali ke menu workers dan tambahkan add route, tidak lupa tambahkan parameter /* diakhir domain seperti ini.

![](https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/11/redirect.png?resize=768%2C432&ssl=1)

Setelah berhasil menambahkan route domain dengan workers, selanjutnya clear cache di cloudflare biar enggak ada cache yang tersisa, hasilnya jika mengakses sebuah postingan seperti alamat domainlama.com/membuat-anak akan otomatis ke redirect ke domainbaru.com/membuat-anak.

Tidak perlu menambahkan redirect satu-satu ke alamat domain baru, tinggal sesuaikan dengan paramater alamat domain kalian maka akan otomatis teralihkan, cukup sekian dan terima kasih.