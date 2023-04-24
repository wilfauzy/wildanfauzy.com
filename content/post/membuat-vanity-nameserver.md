
+++
author = "pemuda malkis"
date = 2021-12-23T02:18:00.000Z
image = "/gambar/vanity-nameserver.png"
tags = [ "dns", "internet" ]
title = "Membuat Vanity Nameserver "
+++

## Apa itu vanity nameserver?

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

### Mengganti ns di dns manager

Jika sudah membuat private ns dan mengganti nameserver selanjutnya masuk ke dns.he untuk mengganti nameserver dan menambahkan ip di dns manager, seperti ini.

![](/gambar/nameserver-sendiri.png)

Ganti nameserver dengan private ns yang sudah kalian buat, tidak lupa menambahkan ip address ke privete ns, kalian juga bisa menambahkan ipv6.

Jika sudah maka namaserver dengan nama domain kalian bisa digunakan, perlu diingat pengaturan SOA tidak bisa diubah itu milik he.net jika ingin membuat SOA sendiri silakan bikin dns server wkwkwk.

## Vanity Nameserver di Digital Ocean

Caranya hampir sama dengan he.net namun cukup lebih mudah, pertama mengganti nameserver di digital ocean

![](/gambar/nameserver-digitalocean.png)

* pertama membuat domain di do, lalu ganti ns dengan private nameserver kalian.
* kedua menambahkan ip address dari ns digital ocean

      ns1.digitalocean.com 173.245.58.51  
      ns2.digitalocean.com 173.245.59.41 
      ns3.digitalocean.com 198.41.222.173

  terakhir ganti nameserver dengan private ns di register domain, sudah deh.

Untuk lebih lanjut tentang vanity nameserver digitalocean bisa dibaca [disini](https://www.digitalocean.com/community/tutorials/how-to-create-vanity-or-branded-nameservers-with-digitalocean-cloud-servers "vanity namserver do")

Cukup sekian dan terima kasih.
