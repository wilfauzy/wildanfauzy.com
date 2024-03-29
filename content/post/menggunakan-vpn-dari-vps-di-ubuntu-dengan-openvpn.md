---
author: Linux Mania
date: 2020-10-30T16:57:17Z
image: /wp-content/uploads/2020/10/vpnkonekkevps.jpeg
tags:
- openvpn
- ubuntu
- vps
- xubuntu
title: Menggunakan VPN dari VPS di Ubuntu dengan OpenVPN
url: /menggunakan-vpn-dari-vps-di-ubuntu-dengan-openvpn/
---

enggak tau bikin judulnya kayak gimana wkwkw, pokoknya make vpn (virtual private network) langsung ke server vps pokoknya gitu, jadi enggak pake aplikasi vpn gratis kaya 1.1.1.1 cloudflare atau yang lainnya.

Intinya koneksi vpn langsung ke vps kita sendiri, menggunakan ip publik yang sudah kita miliki, pertama pasang openvpn server dulu di vps kalian masuk ke ssh terminal.

<pre class="wp-block-code"><code>ssh username@ipvpskamu</code></pre>

Jika sudah berhasil masuk, cek dulu vpsnya apakah tun/tap sudah nyala.

<pre class="wp-block-code"><code>cat /dev/net/tun</code></pre>

kalo vpsnya pake kvm biasanya udah otomatis nyala, beda kalo openvz harus dicek dulu, karena vps di vultr menggunakan kvm jadi lewatin aja yang tadi hehe.

langsung aja install script openvpn dari github dibawah ini.

```
wget git.io/vpn --no-check-certificate -O openvpn-install.sh; bash openvpn-install.sh
```


![](/wp-content/uploads/2020/10/20201030_165125.jpg?resize=768%2C892&#038;ssl=1)

Maka akan muncul pilihan konfigurasi, tinggal next-next aja terakhir silakan masukan nama client openvpn sampe muncul konfigurasi. ovpn

Biasanya tersimpan di /root/blabla.ovpn selanjutnya download file konfigurasi yang sudah dibuat tadi, bisa lewat ftp atau kalo saya sendiri menggunakan aplikasi termius di android jadi bisa langsung ditansfer ke memori hp lewat sftp.

Selanjutnya tinggal install aplikasi client openvpn cari aja di play store pake kata kunci &#8220;openvpn connect&#8221;.

Jika sudah terinstall langsung buka dan pilih tombol plus masukan file konfigurasi ovpn yang sudah di download tadi seperti ini.

![](/wp-content/uploads/2020/10/20201030_163545.jpg?resize=768%2C1209&#038;ssl=1)


Tinggal klik import langsung jadi deh, tinggal konekin aja vpn nya tadi, udah deh nyambung ke vps, jadi secara otomatis ketik berselancar di internet menggunakan ip dari vps dan jaringannya.

![](/wp-content/uploads/2020/10/20201030_163738.jpg?resize=768%2C1199&#038;ssl=1)


Jadi vpn itu ibarat terowongan, seolah-olah kita berada di tempat servernya berada, misalnya vps saya ada di Singapura maka terdetek lokasinya di singapura, bebas dari segala sensor yang ada di indonesia wkwkwk.

Menggunakan vpn juga terbebas dari iklan operator yang sialan, masa halaman website yang tidak bisa diakses langsung diarahkan ke halaman milik operator yang isinya iklan semua.

Katanya sih namanya internet baik tapi iklannya bikin ganggu banget asli, kesel deh hehehe.

Untuk memasang openvpn client versi gui di ubuntu atau xubuntu tinggal buka terminal ctrl+alt+t lalu installl openvpn dan network manager dengan perintah di bawah ini

<pre class="wp-block-code"><code>sudo apt-get update
sudo apt-get install openvpn
sudo apt-get install network-manager-openvpn
sudo apt-get install network-manager-openvpn-gnome</code></pre>

Jika sudah terpasang semua tinggal klik icon koneksi di panel, edit koneksi dan tambahankan vpn, pilih import konfigurasi vpn, jika sudah berhasil kembali ke pilihan koneksi dan centang vpn, sudah deh selesai.
