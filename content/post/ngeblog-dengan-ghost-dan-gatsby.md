+++
author = "pemuda malkis"
date = 2021-02-28T18:00:00Z
draft = true
image = "/img/gatsby-prismjs-cover-1-2.png"
tags = ["gatsby"]
title = "Ngeblog dengan Ghost dan Gatsby"

+++
Semalam tidak bisa tidur dengan tenang karena terlanjur kesal menunggu seseorang untuk bermain lama banget.

Karena sudah kepalang kesel, dan tidak bisa tidur akhirnya ngoprek blog, mencoba ghost dipasang di vps, awalnya masang konvensional lewat sudo apt lalu npm.

Namun kayaknya kurang efesien, jadi pasang di docker saja toh cuma buat headless cms nih ghost, blognya mau nyobain dari gatsby awalnya pake repo punya ghost/TryGhost namun kok jelek yah.

Mencari lagi akhirnya ada yang lumayan sinkron yaitu jamify, yah walaupun apa fitur yang harus dikorbankan sepertinya email subcriber dan masang disqus comment yang cukup ribet.

Untuk masalah cdn awalnya pake netlify tapi kok kureng gitu, terus nyoba cloudflare pages buset lama banget, pilihan yang paling tepat yah gatsbyjs cloud, build time-nya bisa cepet.