---
title: 个人博客的起步(1) Hexo部署
date: 2021-12-25 23:23:00
top: 19
categories:
- 技术
- Hexo
tags:
- Hexo
- nodejs
---
<center><img src="/images/Hexo-logo.png" width=50% height=50% align=center/></center>   

Hexo是一款基于Node.js的静态博客框架，依赖少易于安装使用，可以方便的生成静态网页托管在GitHub和Heroku上，是搭建博客的首选框架。另一方面，使用GitHub托管个人主页，最直观的优点就是：<font color='green'>免费</font>。省去了服务器的租借费用或者使用时的电费，非常的<font color='green'>绿色</font>。

<!--more-->

## 🔍 关联导航

★ {% post_link '个人博客的起步:Hexo(1)' '个人博客的起步：Hexo部署' %}
☆ {% post_link '个人博客的起步:Hexo(2)' '个人博客的起步：NexT主题的应用' %}
☆ {% post_link '个人博客的起步:Hexo(3)' '个人博客的起步：NexT主题的美化' %}

## 1 🌀 前言

最近下定决心，把原先写的一些东西归个档，迁移到博客上，最为新博客的第一篇文章，记录搭建过程再合适不过。  

## 2 🌀 操作流程

1. GitHub
    * GitHub上创建个人仓库
2. 本地调试
    * 本地安装Git，Nodejs，Hexo
3. 部署推送

## 3 🌀 步骤实操

### 3.1 📖 GitHub上创建个人仓库

登录到GitHub，如果没有需要先注册用户。此处基于<font color='green'>免费</font>原则，假定是免费用户。

> **🐞 坑01**
> 仓库命名：仓库的名称必须是 用户名.github.io，否则最终访问会报404。例如：
>> torybon.github.io

> **🐞 坑02**
> 免费用户的仓库必须要设置成开发仓库，否则不会对外暴露访问URL，付费用户才可以在私有仓库上对外暴露URL。

> **🐞 坑03**
> 需要构造GitHub-SSH密钥
> 1. git本地设置
> git config --global user.name "GitHub用户名"
> git config --global user.email "GitHub注册邮箱"
> 2. 获取id_rsa.pub
> ssh-keygen -t rsa -C "GitHub注册邮箱"
> 3. 打开GitHub，个人设定 -> SSH and GPG keys -> new SSH Key，将刚才构造的id_rsa.pub写入key

### 3.2 📖 本地安装Git，Nodejs，Hexo

1. 本地系统是Arch Linux，使用pacman安装
   ````bash
   pacman -S git nodejs-lts-gallium npm

   # git --version  ->  git version 2.34.1
   # node -v        ->  v16.13.1
   # npm -v         ->  8.3.0
   ````

2. 使用npm命令安装Hexo，输入
     ````
     mkdir ~/hexo
     cd ~/hexo
     npm install -g hexo-cli
     ````
3. 安装完成后，初始化博客，输入
     ````
     hexo init blog
     ````
4. 新建临时页面，检测Hexo
     ````
     hexo new test_my_site
     hexo g
     hexo s
     ````
5. 浏览器查看
     ```
     http://localhost:4000
     ```
后续全部的操作都在 ````hexo/blog```` 目录下进行

### 3.3 📖 Hexo常用命令
````
npm install hexo -g #安装Hexo
npm update hexo -g #升级
hexo init #初始化博客

命令简写
hexo n "我的博客" == hexo new "我的博客" #新建文章
hexo g == hexo generate #生成
hexo s == hexo server #启动服务预览
hexo d == hexo deploy #部署

hexo server #Hexo会监视文件变动并自动更新，无须重启服务器
hexo server -s #静态模式
hexo server -p 5000 #更改端口
hexo server -i 192.168.1.1 #自定义 IP
hexo clean #清除缓存，若是网页正常情况下可以忽略这条命令
````

### 3.4 📖 部署推送

在blog根目录里的 \_config.yml 文件是站点核心配置文件：推送配置在这里修改
![](/images/Hexo-folder.png)

在文件的最下面的部分，填写GitHub的仓库路径
![](/images/Hexo-gitConf.png)

安装推送插件并且推送部署
````
npm install hexo-deployer-git --save
hexo clean
hexo g
hexo d
````

访问GitHub仓库页面，settings -> pages。在这里能看到GitHub的发布URL。至此，初始的Blog构造并且发布完成。
