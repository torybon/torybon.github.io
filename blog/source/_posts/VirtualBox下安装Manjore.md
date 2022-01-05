---
title: VirtualBox下安装Manjore
data: 2022-01-04 21:35:00
categories:
- 技术
- VirtualBox
tags:
- Linux
- VirtualBox
- Manjore
---
<center><img src="/images/manjore.png" width=50% height=50% align=center/></center>   

Manjaro是一款基于Arch Linux的Linux发行版。在继承了Arch Linux的滚动更新支持和AUR软件仓库之外，<font color="red">着重解决了Arch Linux对新手不友好的缺点</font>，使用图形化界面，简化安装过程的同时，也简化了安装后大量的软件支持。   
Manjore下载镜像分为 xfce，kde，gnome，Architect。使用虚拟机安装Manjore也可以体验不同的桌面环境。    
[Manjore 官网](https://manjaro.org.cn/)

<!--more-->

## 1 🌀 安装系统（基于VirtualBox）

1. **同Pop!_OS的安装，基于Arch，安装类型选择Arch x64**
2. 安装增强功能。如果自动安装不成功，那么
    1. 使用root用户登录
    2. 点开文件管理，看到新挂载的磁盘镜像，如果没有挂载尝试使用 mount 命令
    3. 运行 VboxLinuxAddtions.run

## 2 🌀 安装中文输入法
````
sudo pacman -S fcitx
sudo pacman -S fcitx-configtool   ----配置工具
sudo pacman -S fcitx-sogoupinyin  ----可选安装，fcitx默认已有中文输入

# 需要新建隐藏文件
sudo nano ～/.xprofile

export GTK_IM_MODULE=fcitx
export QT_IM_MODULE=fcitx
export XMODIFIERS=@im=fcitx

注销重新登录
````

## 3 🌀 pacman包管理系统
````
sudo -s
pacman-mirrors -i -c China -m rank
pacman -Syy

# 下载密钥环，导入 GPG key
pacman -S archlinuxcn-keyring
pacman -Syy
````
![](/images/manjore-1.png)

> vim /etc/pacman.conf     
>> 2021-08-20 只有https://mirrors.ustc.edu.cn/archlinuxcn/$arch可用。    
>> 其他会报：无法从 mirrors.ustc.edu.cn : The requested URL returned error: 404 获取文件 'archlinuxcn.db'    

````
# 在最后添加
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = https://mirrors.ustc.edu.cn/archlinuxcn/$arch
````
![image](/images/manjore-2.png)

## 4 🌀 基于pacman更新系统
````
sudo pacman -Syyu
````
![image](/images/manjore-3.png)

## 5 🌀 Aur工具【Arch系安装核心】
````
sudo pacman -S yay
````
避免以 root/sudo 运行 yay  
