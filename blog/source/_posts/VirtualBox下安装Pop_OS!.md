---
title: VirtualBox下安装Pop_OS!
data: 2022-01-04 21:35:00
categories:
- 技术
- VirtualBox
tags:
- Linux
- VirtualBox
- Pop_OS!
---
<center><img src="/images/Pop_OS.png" width=50% height=50% align=center/></center>   

Pop_OS!是System76为了推行自家的硬件产品而推出的Linux发行版。  
Pop_OS!基于Ubuntu，本身坐享Ubuntu的社区支持，设置也更加简单，是一个用来试水Linux的优秀选择。
[Pop_OS! 官网](https://pop.system76.com/)

<!--more-->

## 1 🌀 安装系统（基于VirtualBox）

1. **Pop!_OS基于Ubuntu，安装时选择基于Ubuntu**
    ![](/images/virtualbox-popos-1.png)
2. 安装时，在设置->存储->IDE控制器中选择安装镜像。相当于从镜像启动Live环境。
    ![](/images/virtualbox-popos-2.png)
3. 之后默认安装
4. 安装完成之后，在设备 -> 分配光驱 -> 弹出光驱

## 2 🌀 显示

1. 显存拉到128M
2. VirtualBox设置
    * 设置 -> 显示 -> 屏幕 -> 显卡控制器 = VMSVGA
    * 启用3D加速
    * 安装拓展
3. 虚拟机 -> 视图 -> 自动调整显示尺寸

![](/images/virtualbox-popos-3.png)

## 3 🌀 Pop!_Shop
Pop_Shop是Pop_OS!内置的应用商店，但是打开后会遇到卡死的情况，可以在设置中添加代理：
````
http://cn.archive.ubuntu.com/ubuntu/
https://mirrors.aliyun.com/ubuntu/
````

## 4 🌀 开机启动项
同ubuntu    
````
# 查看开机启动项目
sudo systemctl list-unit-files --type=service
sudo systemctl list-unit-files --type=service | grep enabled
````
> pop_shop 不执行开机自动更新  
> sudo systemctl list-unit-files --type=service | grep pop    
> sudo systemctl disable pop-upgrade.service    
````
root@pop-os:/home/bowen# systemctl list-unit-files --type=service | grep pop
pop-upgrade-init.service                   static          -
pop-upgrade.service                        enabled         enabled
root@pop-os:/home/bowen# systemctl disable pop-upgrade.service
Removed /etc/systemd/system/multi-user.target.wants/pop-upgrade.service.
root@pop-os:/home/bowen# systemctl list-unit-files --type=service | grep pop
pop-upgrade-init.service                   static          -
pop-upgrade.service                        disabled        enabled
root@pop-os:/home/bowen#
````
