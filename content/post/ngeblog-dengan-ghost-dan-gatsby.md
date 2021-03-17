+++
author = "pemuda malkis"
date = 2021-03-14T21:00:00Z
image = "/img/gatsby-prismjs-cover-1-2.png"
tags = ["gatsby"]
title = "Ngeblog dengan Ghost dan Gatsby"
aliases = [
    "/gatsby-dan-ghost/",
    "/bagaimana-cara-membuat-twitter-for-dengan-label-sendiri/", 
    "/ngeblog-dengan-ghost-dan-gatsby/"
]

+++
Semalam tidak bisa tidur dengan tenang karena terlanjur kesal menunggu seseorang untuk bermain lama banget.

Karena sudah kepalang kesel, dan tidak bisa tidur akhirnya ngoprek blog, mencoba ghost dipasang di vps, awalnya masang konvensional lewat sudo apt lalu npm.

Namun kayaknya kurang efesien, jadi pasang di docker saja toh cuma buat headless cms nih ghost, blognya mau nyobain dari gatsby awalnya pake repo punya ghost/TryGhost namun kok jelek yah.

Mencari lagi akhirnya ada yang lumayan sinkron yaitu jamify, yah walaupun apa fitur yang harus dikorbankan sepertinya email subcriber dan masang disqus comment yang cukup ribet.

Untuk masalah cdn awalnya pake netlify tapi kok kureng gitu, terus nyoba cloudflare pages buset lama banget, pilihan yang paling tepat yah gatsbyjs cloud, build time-nya bisa cepet.

![](/img/ghost_-blogging_platform-_screenshot_-2013.png)

Tampilan ghost memang sederhana dan menyenangkan seperti medium namun hal ini juga yang membuat menyebalkan. 

Berbasis node.js otomatis kencang, yang terpenting open source bisa dipasang di vps, enggak tau kayaknya jarang ada hosting yang udah menyediakan cms ghos auto installer. 

Tapi kalo punya akses ssh di hosting dan sudah mendukung node js kayaknya bisa juga deh, lebih gampang sih install pake docker di cyberpanel terus reserve proxy biar terhubung sama domain. 

Pengalaman nulis dua postingan di ghost cms awalnya enak smooth gitu, tapi kelamaan kok ngeselin yah, paling minus enggak ada media manager, otomatis harus upload setiap kali mau posting. 

Kedua tidak ada fitur index pencarian, kalo ini emang masih maklum lah, soalnya hugo juga enggak ada. 

Ketiga enggak ada sistem default komentar, padahal enggak bisa dibilang statis blog generator, lebih tepatnya headless cms, baca tutorial di dokumentasi resmi cukup pusing wkkwk. 

Dari semua kekurangan diatas, pengalaman menggunakan ghost cms menyenangkan, bener-bener bikin fokus nulis dah, tapi bagi saya yang pemalas tetap saja 😂

![](/img/screenshot_2021-03-15-18-48-04-499_com-android-chrome.jpg)

Tampilan mode menulis di ghost, simple smooth dan keren, rasanya Gutenberg milik WordPress keliatan sangat ribet wkwk

![](/img/screenshot_2021-03-15-18-47-57-955_com-android-chrome.jpg)

Tampilan semua postingan bisa diatur berdasarkan penulis dan tags, tapi tetep enggak ada fitur pencarian itu yang bikin gemes. 

![](/img/screenshot_2021-03-15-18-48-14-951_com-android-chrome.jpg)

Menu Pengaturan yang minimalis namun menyangkut hal-hal yang mendasar seperti mengganti tema, menambah kode header dan footer, serta integrasi yang lumayan bisa diatur lewat pengaturan. 

Untuk integrasi yang lainnya kita harus mengubah kode di file manager atau ftp di hosting atau vps  lumayan ribet. 

Tapi hal yang bikin keren adanya integrasi dengan static site berbasis javascript seperti gatsbyjs dan nextjs. 

Saya sendiri untuk mendeploy website menggunakan gatsby dan Gatsby cloud, karena kalo pake vps kayaknya lemot deh wkwk. 

Yah terserah kalian jika ingin mencoba berbagai macam tema, silakan gunakan cms ghost saja, atau mau lebih yahud yah dijadiin static site menggunakan gatsby dan next js. 

Atau enggak mau ribet dan anda banyak uang coba saja berlangganan paket ghost pro lumayan mahal juga sih.