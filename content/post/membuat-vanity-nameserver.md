+++
author = "pemuda malkis"
date = 2021-11-30T13:18:00Z
draft = true
image = "/gambar/vanity-nameserver.png"
tags = ["internet"]
title = "Membuat Vanity Nameserver "

+++
## Apa itu vanty nameserver?

Vanity nameserver kalo boleh diartikan ke bahasa indonesia nameserver cantik, menurut istilah menggunakan nama server dengan nama domain kamu sendiri seperti contohnya;

    ns1.dns-manager.com 
    ns2.dns-manager.com

dengan vanity nameserver bisa mengarahkan ke domain kamu seperti ini,

    ns1.nama-domain.com 
    ns2.nama-domain.com

kira-kira seperti itu gambaranya.

## Layanan gratis yang mendukung vanity nameserver

Pada tahap ini penulis mendapatkan dua layanan dns manager yang bisa digunakan untuk vanity nameserver yaitu Hurricane Electric dan Digital Ocean.

### DNS Hurricane Electric

Layanan dari he.net memberikan banyak fitur seperti Alias cname atau aname, dimana biasanya dns manager pada umumnya tidak memdukung cname pada root domain hanya pada subdomain seperti ke www.

dan masih banyak lagi seperti A, AAAA, ALIAS, CNAME, CAA, MX, NS, TXT, SRV, SSHFP, SPF, RP, NAPTR, HINFO, LOC and PTR records.

### DNS DigitalOcean

Jika kita mempunyai akun yang sudah terverifikasi di digitalocean, kita mendapatkan layanan dns gratis dari do, secara default kita diberikan dns manager untuk satu domain namun kita bisa meminta untuk tambahan domain secara free.

Kalau di he.net bisa menambahkan sampai 50 domain.

## Cara Membuat Nameserver dengan domain sendiri

Hal pertama jika ingin membuat kustom namesserver pastikan register domain kalian mempunyai fitur private nameserver, jika mempunyai layanan private ns mari kita lanjutkan.

### Mendaftar layanan dns

pertama adalah mendaftar ke layanan he.net disini [https://dns.he.net/](https://dns.he.net/ "https://dns.he.net/") atau jika kamu mempunyai akun digital ocean tinggal membuat domain di dns manager.

### Mengganti ns 

kedua jika berhasil mendaftar mengganti namserver dengan milik he.net seperti ns1.he.net dan seterusnya.

### Validasi ns

Jika sudah mengganti nameserver dengan milik he maka buka dns manager di he.net lakukan validasi agar domain sudah masuk ke layanan dns, tunggu lima menit untuk proses propagansi tapi tergantung bisa cepet bisa lama.

### Membuat private nameserver

disini domain sudah tervalidasi selanjutnya membuat private ns di register domain seperti ini.

![](/gambar/privete-ns.png)

Jika sudah membuat privete ns, selanjutnya ganti nameserver dengan private ns yang tadi dibuat.

![](/gambar/ns.png)

Cara diatas dengan menambahkan private ns dengan ipv4 milik ns he.net seperti ini daftar ip address.

    ns1.he.net 216.218.130.2 
    ns2.he.net 216.218.131.2
    ns3.he.net 216.218.132.2
    ns4.he.net 216.66.1.2
    ns5.he.net 216.66.80.18

Silakan ganti dengan nameserver dengan domain kalian.