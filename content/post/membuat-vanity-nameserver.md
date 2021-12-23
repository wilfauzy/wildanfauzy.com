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