---
author: pemuda malkis
catalog: true
date: 2020-09-28T15:29:47Z
guid: https://wildanfauzy.com/?p=8290
image: /wp-content/uploads/2020/09/cloudflare.png
header-mask: "0.4"
id: 8290
tags:
- cloudflare
- quic.cloud
- wordpress
title: Setelah Menggunakan Quic Cloud Selama Empat Bulan
url: /setelah-menggunakan-quic-cloud-selama-empat-bulan/
---

Berkenalan dengan quic cloud tidak terlalu lama, bertemu dengan cara tidak segaja, waktu itu setelah perpanjang hosting dan pindah server dari singapura ke amerika, tepatnya pada bulan mei, akhirnya bertemu lagi dengan cpanel, sudah lama login ke cpanel.

Sebab jarang sekali ngoprek dibagian hosting, karena males aja ngeliat tampilan cpanel yang kaku wkkwkw, akhirnya setelah perpanjang hosting dan memindahkan data backup dan merestore, baru ngeh ada menu Litespeed Web Cache Manager di tab advanced, rasa penasaran pun muncul.

Sebelumnya sudah nyaman dengan cloudflare free, akhirnya nyoba mengaktifkan lwcm di cpanel, langsung bingung deh enggak tau harus ngapain, terus buka dashboard wordpress udah ada plugins yang keinstall sendiri, karena belum tau apa2 jadi curiga, melihat nama plugins hmmm kayaknya karena mengenable LSCache di cpanel.

Semalaman tidak bisa tidur karena rasa penasaran, mencoba mencari referensi tentang litespeed, benda apaan sih ini, jujur ketika awal beli hosting tidak terlalu ngehh tentang spesifikasi web hosting pokoknya yang penting cepet dan harga bersahabat tidak terlalu murah, tidak terlalu mahal.

Ngulik satu persatu menu yang ada di plugins cache tersebut, semua opsi dicobain hingga akhirnya nemu quic cloud yang masih asing di telinga, masuk ke tab general dan berhasil mendapatkan domain key untuk mengakses ke layanan quic cloud seperti critical css dll.

## Setting Cname flattening dan Aname

Cara setting quic cloud cukup sulit pas awal memang, setelah coba-coba akhirnya berhasil dengan cname flattening atau menggunakan aname, pertama karena sudah menggunakan dns manager dari clouflare nyoba deh pake cname flattening, kalau di dns domain atau cpanel enggak bisa pake apex domain harus subdomain ke www.

Awalnya masih bingung seiring berjalannya waktu ternyata mudah juga, tinggal menambahkan record cname cukup masukan di kolom name dengan @ dan content dengan cname quic.cloud seperti xxx.tier1.quic.cloud kalo mau nambahin www sama caranya kaya tadi kolom name dengan www.

Cara kedua dengan aname, Aname adalah Rekam A memetakan nama ke satu atau beberapa alamat IP saat IP dikenal dan stabil. Data CNAME memetakan nama ke nama lain. Ini hanya boleh digunakan jika tidak ada catatan lain pada nama itu. Catatan ALIAS memetakan nama ke nama lain, tetapi dapat berdampingan dengan catatan lain pada nama itu. menurut (<a rel="noreferrer noopener" href="https://support.dnsimple.com/articles/differences-between-a-cname-alias-url/#:\~:text=The%20A%20record%20maps%20a,other%20records%20on%20that%20name." target="_blank">Dnsimple</a>)

Kebanyakan fitur tersebut ada dilayanan dns manager berbayar, tapi tenang akhirnya menemukan dns manager yang free atau gratis di <a rel="noreferrer noopener" href="https://www.arvancloud.com/en/products/dns" data-type="URL" data-id="https://www.arvancloud.com/en/products/dns" target="_blank">ArvanCloud</a> yang sudah ada fitur aname, setting aname sama seperti menambahkan A record.

## Pengalaman Menggunakan Quic Cloud

Awalnya sempat berpikir dua kali untuk pindah ke layanan cdn baru, tapi karena penasaran dan sayang juga ada fitur itu tapi enggak dipake, akhirnya memberanikan diri, setelah trial dan error, cdn tersebut tersetting dengan benar dan lancar.

Mulai deh dari situ mengahapus google amp, karena lebih cepet mengguanak cdn quic cloud daripada amp, jadi percuma juga, <s>fuck you</s> amp xixixi, persetan dengan seo dan laoding cepat, pada kenyataanya amp akan menyimpan salinan dari blog kita dan dihost oleh server google, memang menjanjikan loading cepat tapi visitor tidak benar-benar mengunjungi blog kita.

Google bukanah tujuan, hanya gerbang pintu masuk ke berbagai macam web yang ada di dunia, jadi menggunakan amp menurut saya sendiri tidak terlalu membutuhkanya, toh tetep blog masih keindek google.

Mendisable fitur amp real url di cloudflare, dan sepenuhnya menggunakan quic cloud xixixi, pengalaman selama empat bulan tidak terbilang lama juga sih, banyak perbedaan yang terasa, loading jadi cepet banget makanya saya menghapus amp, itu pendapat pribadi tidak ada maksud menjelekkan google amp, pis hehehe.

## Perbandingan Quic cloud dan tidak menggunakannya

Disini saya melakukan perbandingan antar menggunakan cdn dan tidak menggunakan cdn alias default, untuk pengetesan pakai alat dari loader.io dan performance dari sucuri untuk kecepatan loading, atau dengan feeling pas akses langsung wkkw, tidak menggunakan pagespeed insight atau gtmetrix karena hasilnya tidak beda jauh.

### Test Kecepatan tanpa menggunakan quic cloud<figure class="wp-block-image size-large">


![](https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/09/performa-no-cdn-min.png?resize=768%2C432&ssl=1)
test loader.io tanpa cdn 

![](https://i0.wp.com/wildanfauzy.com/wp-content/uploads/2020/09/tanpa-cdn-min.png?resize=768%2C432&ssl=1)
test performance tanpa cdn

Gambar diatas adalah hasil tets tanpa menggunakan cdn, server hosting ada di amerika jadi akses dari amerika dan kanada cepat, dan hasil test dari loader.io mendaptkan rata-tasa 63-64 lumayan cepet dengan konfigurasi 250 client over 1 minute.

### Test Kecepatan menggunakan cdn quic cloud<figure class="wp-block-image size-large">


![](https://i2.wp.com/wildanfauzy.com/wp-content/uploads/2020/09/respon-min.png?resize=768%2C432&ssl=1)
test loader.io menggunakan cdn

![](https://i1.wp.com/wildanfauzy.com/wp-content/uploads/2020/09/performa-min.png?resize=768%2C432&ssl=1)
test performance mengguanakan cdn

Silakan bandingkan menggunakan dan tanpa menggunakan quic cloud, pengetesan tanpa cdn dengan loader io dapat 63-64 ms dengan tiga kali pengetesan agar mendapatkan hasil yang stabil dan score performance sucuri mendapatkan nilai B.

Sedangkan menggunakan quic cloud mendpatkan score performance A+ dan test loader io rata-rata 5-6 ms dengan enam kali pengetesan, karena awalnya saya engga percaya bisa kecil gitu ms-nya, dan memang stabil.

## Kelebihan dan Kekurangan

Tentu saja semua ada kelebihan dan kekurangnnya, oke langsung saja.

### **Kelebihan**

* Gratis
* Mendukung koneksi QUIC atau http/3
* Jaringan global untuk pengiriman konten yang cepat
* Caching konten statis seperti gambar, CSS, dan JavaScript
* Server Push untuk meminimalkan jumlah permintaan
* Perlindungan dari serangan DDoS dan spoofing
* Dukungan ESI untuk caching e-commerce

### **Kekurangan**

* Cara setting yang cukup ribet
* Kuota tergantung tier hosting
* Masih beta belum final jadi harap maklum kalo ada error xixixi

Perlu dicatat untuk menggunakan quic cloud, hosting kalian pastikan sudah mendukung litespeed webserver dan lscache, bisa sih pake litespeed saja tanpa modul lscache tapi hasil kurang maksimal, percobaan pake hosting pacar saya yang tidak ada modul lscache hasilnya kurang joss.