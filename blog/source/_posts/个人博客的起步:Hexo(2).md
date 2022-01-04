---
title: 个人博客的起步(2) NexT主题应用
date: 2021-12-29 23:23:00
top: 18
categories:
- 技术
- Hexo
tags:
- Hexo
- nodejs
---
<center><img src="/images/Hexo-NexT.png" width=20% height=20% align=center/></center>   

NexT 是 Hexo 框架中最为流行的主题之一。优点是简洁，定制度高，并且由于代码是开源的，所以有很多开发者维护。但是开箱后需要进行部分个性化配置

<!--more-->

## 🔍 关联导航

- {% post_link '个人博客的起步:Hexo(1)' '个人博客的起步：Hexo部署' %}
- {% post_link '个人博客的起步:Hexo(2)' '▶️ 个人博客的起步：NexT主题的应用' %}
- {% post_link '个人博客的起步:Hexo(3)' '个人博客的起步：NexT主题的美化' %}

## 🌀 NexT主题的安装

````
# 下载主题
git clone git@github.com:theme-next/hexo-theme-next.git themes/next
# 主题应用
vim ~/hexo/blog/_config
  theme: next
````

## 🌀 基础配置

### 📖 修改头像
头像图片指向````themes/next/source/images````，修改主题配置文件
````
favicon:
  small: /images/logo-16x16.jpg
  medium: /images/logo-32x32.jpg
  apple_touch_icon: /images/apple-touch-icon-next.png
  safari_pinned_tab: /images/logo.svg
````

### 📖 修改样式模板
````
# Schemes
 #scheme: Muse
 #scheme: Mist
 #scheme: Pisces
 scheme: Gemini
````

1. 新建````hexo/source/_data/styles.styl````，即在````hexo````目录的````source````文件夹下新建````_data````文件夹，文件夹中新建````styles.styl````，编辑：
    ````
    //背景图片设置
    body {
        background-image: url(/images/background.jpg);
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: 100% 100%;
    }
    ````

## 🌀 文章布局

1. 对文章的标题做设置：
    ````
    title: XX
    date: 2021-01-01 01:01:01
    categories:
    - c
    tags:
    - tag1
    - tag2
    ````
  文章默认按data倒序排序。
2. 在文章中添加 ````<!--more-->```` 标签，可以使之后的文章内容在首页被隐藏
3. 图片居中设置
    ````
    ## 居中
    <center><img src="/images/{}.png" align=center/></center>   
    ## 居中，占比50&
    <center><img src="/images/{}.png" width=50% height=50% align=center/></center>   
    ````
