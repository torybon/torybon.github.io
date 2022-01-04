---
title: VirtualBox Tips
data: 2021-12-27 23:50:00
categories:
- 技术
- VirtualBox
tags:
- VirtualBox
- Tips
---
<center><img src="/images/virtualbox.png" width=50% height=50% align=center/></center>

VirtualBox是开源软件，却做的像个闭源；VMware是闭源软件，却做的如同开源。  
记录VirtualBox的部分操作tips。

<!--more-->

## 🌀 网络设置

1. NAT网络
    * 混杂模式全部允许
2. 仅主机
    * 混杂模式全部允许

如果能ping通，但是ssh不通，需要<font color='red'>刷新一下MAC地址</font>。点击MAC地址后面的刷新按钮

## 🌀 Virtual Box 本地迁移

1. 迁移虚拟硬盘    
  ![迁移虚拟硬盘](/images/VirtualBoxSettings-1.png)
2. 迁移vbox配置    
  ![迁移vbox配置](/images/VirtualBoxSettings-2.png)
