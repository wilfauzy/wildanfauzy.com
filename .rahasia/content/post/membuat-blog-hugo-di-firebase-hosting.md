+++
author = "pemuda malkis"
date = 2021-03-24T00:00:00Z
image = "/img/firebase-hosting.jpeg"
tags = ["jamstack"]
title = "Membuat Blog Hugo di Firebase Hosting"

+++
Kalau bosan menggunakan cara yang mudah mengapa tidak memilih cara yang susah hehe, selain vercel dan netlify yang mudah untuk mendeploy statik blog, firebase hosting lumayan juga.

Untuk membuat blog hugo sebagai framework dengan firebase hosting, yang pertama mempunyai akun Google dan seperangkat konsol terminal linux.

install pake npm cli firebase terlebih dahulu.

    npm install -g firebase-tools

Selanjutnya login di konsol terminal

    firebase login

Maka setelah login akan diarahkan ke browser dan masuk menggunakan akun Google kalian, setelah berhasil autentifikasi, salin kode dan paste ke konsol terminal.

    firebase init

Masuk ke folder source code blog hugo kalian semisal cd my-site, setelah itu lakukan firebaase init, untuk memulai projek di firebase, pilih firebase hosting.

![](/img/img_20210324_193402.jpg)

Setelah itu berhasil menginisiasi dengan firebase dan akan ada file baru firebase.json .firebaserc dan foleder .firebase maka selanjutnya tinggal deploy dan relax.

Pastikan kalian sudah menginstall hugo selanjutnya membuat blog dan deploy ke firebase hosting.

Langkah terakhir membuild blog hugo dan deploy dengan perintah di bawah ini.

    hugo && firebase deploy

Pastikan kalian sudah berada di folder yang beriskan source code hugo, setelah itu tunggu beberapa saat, jikq berhasil masuk ke console firebase jika kalian ingin menambah domain.

Untuk continue deployment bisa menggunakan github action, cari aja di marketplace github banyak pilihan 😂

Cukup sekian dan terima kasih hehe.