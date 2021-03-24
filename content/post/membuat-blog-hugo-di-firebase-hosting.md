+++
author = "pemuda malkis"
date = 2021-03-24T00:00:00Z
draft = true
image = "/img/1_jbdo7u0l62vymfm1wxna1g.png"
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

Setelah itu berhasil menginisiasi dengan firebase dan akan ada file baru firebase.json .firebaserc dan foleder .firebase maka selanjutnya tinggal deploy dan relax. 