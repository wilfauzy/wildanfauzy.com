+++
author = "pemuda malkis"
date = 2021-12-12T16:00:00Z
image = "/img/aws-logo.png"
tags = ["vps"]
title = "Setelah Mencoba AWS Amazon Free Tier"

+++
Tidak ada angin tidak ada petir tiba-tiba hujan, malam itu iseng karena terjaga di malam hari, bukan tanpa alasan memang sengaja begadang untuk menghabiskan kuota malam yang manih menunmpuk bergiga-giga.

Iseng mendaftar di amazon web service, karena habis blogwalking dan kebetulan ada yang membahas tentang free tier tentang aws amazon, katanya banyak layanan gratis yang bisa dinikmati selama dua belas bulan.

Wah manarik juga, akhirnya langsung meluncur ke website aws, cara daftarnya lumayan panjang juga ternyata, tapi setelah dua puluh menit akhirnya beres juga.

Hanya kendala di bagian payment, tapi anehnya langsung terverifikasi kartu debit-nya biasanya dulu pernah daftar ke digital ocean verifikasi kartu dipotong satu dollar terus dibalikin lagi, tapi pas daftar di aws enggak ada daftar transaksi dipotong satu dollar.

![](/img/aws-free-tier.png)

Setelah berhasil daftar langung dapat email bahwa akun aws free tier bisa digunakan, banyak sumber daya yang bisa digunakan secara gratis, diantaranya;

* Amazon EC2 750 jam setiap bulan selama 12 bulan
* Amazon S3 5 GB
* Amazon Amplify 12 Bulan
* Amazon Lightsail 3 bulan
* Dll

Pengalaman pertama masuk ke console aws anjir pusing amat sama menunya, sangat tidak user friendly menurut saya, asli langsung pusing di kepala, banyak bener pilihannya.

Untuk layanan sederhana seperti netlify atau vercel di aws namanya amplify tapi build time nya lama bet hampir dua menit lebih udah gitu banya step-nya lagi, tapi konfigurasinya sih sama aja.

Tinggal hubungkan ke repostory nanti langsung detect kode dan muncul rekomendasi buildnya terus tinggal deploy aja.

Selanjutnya nyoba amazon lightsail kalo ini layanan vps sederhana kaya di digitalocean atau upcloud, lebih simple lah tinggal pilih distro kalo mau sekalian pasang aplikasi tinggal pilih banyak pilihan kaya wordpress, ghost, drupal dll.

Terakhir saya coba amazon EC2 yang katanya gratis selama 12 bulan, disini mulai bikin kepala pusing bikin virtual machine banyak banget menunya pertama milih distro terus konfigurasi keamanan, konfigurasi jaringan dll.

Bikin instance terus terminate lagi gara-gara pusing, udah gitu dipisah-pisah lagi menu volume disk, elastic ip, jaringan, load balancing, ada kali bikin terus hapus beberapa kali, sampe subuh.

Keesokan harinya bukan console aws lagi buka menu pengaturan profil lalu pilih close akun wkwkwk, udah gitu aja pusing, cuma sekedar nyoba aws aja sih, belum butuh kaya begituan masih nyaman sama netlify dan vercel.

Sekian dan terima kasih.