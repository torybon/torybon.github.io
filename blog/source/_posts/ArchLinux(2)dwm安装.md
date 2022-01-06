---
title: ArchLinux(2) dwm安装
date: 2022-01-02 13:05:00
top: 28
categories:
- 技术
- Linux
tags:
- Linux
- Arch
---
<center><img src="/images/dwm.png" width=30% height=30% align=center/></center>   

Arch Linux自身不带有任何图形化界面，所以，可以在Arch上安装任何GUI,如：GNOME，KDE，xfce等。这些图形化界面都是以鼠标作为主要交互输入。而DWM是以键盘作为主要交互输入的。

<!--more-->

## 🔍 关联导航

☆ {% post_link 'ArchLinux(1)安装' 'ArchLinux 安装' %}
★ {% post_link 'ArchLinux(2)dwm安装' 'ArchLinux dwm安装' %}
☆ {% post_link 'ArchLinux(3)dwm美化' 'ArchLinux dwm美化' %}

## ✔️ 说明
Dwm是Xorg下的一个动态窗口管理器。采用平铺的布局方式。用C语言编写，被设计的目标是控制在2000行以下的代码。    
[Suckless Dwm](http://dwm.suckless.org/)

## 1 🌀 安装准备
1. 确保此时已经联网，可以使用 ````nmtui```` 进行联网设置
2. 新建非root用户，<font color="red">**从此时开始，后续所有操作都在新建的非root用户上**</font>
    ````
    useradd -m -G wheel {用户名}
    ````
3. dwm是基于Xorg的，并且需要从本地编译，所以需要安装必须的包
    ````
    sudo pacman -S xorg-server xorg-apps xorg-xinit base-devel
    ````
4. 安装archlinuxcn支持，修改````/etc/pacman.conf````，
    1. 取消multilib的注释
    2. 在最后添加
    ````
    [archlinuxcn]
    Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch
    ````
    3. 更新pacman缓存
    ````
    sudo pacmnan -Syy
    ````
    4. 安装钥匙环
    ````
    sudo pacman -S archlinuxcn-keyring
    ````

## 2 🌀 下载dwm安装文件
1. 下载官方源码（下载方式很多，只要能下载tar就行）
    ````
    sudo pacman -S w3m
    w3m suckless.org
    ````
2. 获得：````dwm-6.2.tar.gz````，````slstatus.tar.gz````，````slock-1.4.tar.gz````，````dmenu-5.0.tar.gz````，````st-0.8.4.tar.gz````
    <table>
      <tr> <td>dwm</td> <td>dwm主体</td> </tr>
      <tr> <td>slstatus</td> <td>dwm菜单栏</td> </tr>
      <tr> <td>slock</td> <td>dwm锁屏</td> </tr>
      <tr> <td>dmenu</td> <td>dwm默认启动器（后期替换）</td> </tr>
      <tr> <td>st</td> <td>dwm默认终端（后期替换）</td> </tr>
    </table>
3. 解压

## 3 🌀 编译启动
1. 进入每个组件的解压路径下，编译
    ````
    rm config.h
    sudo make clean install
    ````
2. 新建 ````~/.xinitrc````，写入dwn启动命令
    ````
    exec dwm
    ````
3. 执行命令 ````startx````，就能看到最原始的dwm界面了

    ![](/images/dwm-1.png)   
