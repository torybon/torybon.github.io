---
title: ArchLinux(1) 安装
date: 2022-01-01 11:30:00
top: 29
categories:
- 技术
- Linux
tags:
- Linux
- Arch
---
<center><img src="/images/Archlinux-logo.png" width=50% height=50% align=center/></center>   

Arch Linux不是一个开箱即用的系统，安装过程相比windows或者Pop_OS!等Linux发行版而言都更加复杂。但是Arch Linux的安装过程可以看成是一个学习Linux的好机会。另外，Arch可以自身不带有桌面环境，只有愿意花时间配置，可以依据个人审美配置出各种风格的桌面环境。

<!--more-->

## 🔍 关联导航

★ {% post_link 'ArchLinux(1)安装' 'ArchLinux 安装' %}    
☆ {% post_link 'ArchLinux(2)dwm安装' 'ArchLinux dwm安装' %}    
☆ {% post_link 'ArchLinux(3)dwm美化' 'ArchLinux dwm美化' %}    

## ✔️ 说明
1. Arch Linux的安装没有图形化界面，完全依赖命令行操作    
2. Arch Linux的发行非常积极，部分软件或者操作可能会存在过时的问题。此时请参照 **Arch Wiki**    

[Arch Wiki](https://wiki.archlinux.org/)
[Arch Wiki 中文版](https://wiki.archlinux.org/title/Main_page_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

## 1 🌀 安装准备
1. U盘：Arch Linux安装介质
2. 安装环境：Dell E7450

U盘安装介质可以使用 _Balena Etcher_    
如果要检查Arch对笔记本的支持程度，可以访问 [Arch Wiki Laptop](https://wiki.archlinux.org/title/Laptop)

>❗️由于E7450的硬件环境是 i7-5600U ，不含有Nvidia独显，所以安装过程不会涉及Nvidia驱动支持。

## 2 🌀 安装检查
1. 插入U盘启动介质，在Bios里设置U盘是第一启动项
2. 在Bios里关闭**安全启动(Security Boot)**
3. 检查笔记本是否支持UEFI启动：
  在使用Arch启动介质启动之后，输入命令查看输出，如果有输出信息，说明主板支持UEFI模式。
    ````
    ls /sys/firmware/efi/efivars
    ````

## 3 🌀 联网设置
1. 查看是否启动网络接口：
    ````
    ip link
    ## 如果网卡没有被启用
    ip link set dev {网卡名称} up
    ````
2. 连接wifi
    ````
    iwctl
    [iwd] device list
    [iwd] station {device name} scan
    [iwd] station {device name} get-networks
    [iwd] station {device name} connect {wifi SSID}
    ````
3. 验证网络连接
    ````
    ping baidu.com
    ````

## 4 🌀 校对时间
````
timedatectl set-ntp true
````

## 5 🌀 硬盘分区
1. 使用 ````fdisk -l```` 查看当前硬盘分区，确认当前硬盘编码，多为 ````/dev/sda````
2. 使用 ````cfdick /dev/sda```` 设置分区
    <table>
      <tr> <td>EFI文件系统</td> <td>EFI FAT</td> <td>512M</td> </tr>
      <tr> <td>Linux交换分区</td> <td>linux swap</td> <td> > 512M</td> </tr>
      <tr> <td>根目录</td> <td>linux</td> <td>剩余空间</td> </tr>
    </table>

    ![](/images/Arch-cfdisk.png)

3. 格式化分区
    ````
    mkfs.fat -F32 /dev/sda1
    mkfs.xfs /dev/sda3
    mkswap /dev/sda2
    swapon /dev/sda2
    ````
4. 挂载硬盘
    ````
    mount /dev/sda3 /mnt
    mkdir /mnt/boot
    mount /dev/sda1 /mnt/boot
    ````

## 6 🌀 安装基本软件包
1. 修改镜像源，修改 ````/etc/pacman.d/mirrorlist```` 文件
    ````
    ## 添加3行
    + Server = https://mirrors.sjtug.sjtu.edu.cn/archlinux/$repo/os/$arch
    + Server = https://mirror.redrock.team/archlinux/$repo/os/$arch
    + Server = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch
    ````
2. 安装基本软件包，内核，常规固件
    ````
    pacstrap /mnt linux linux-firmware base base-devel linux-headers vim networkmanager
    ````
> **🐞说明**
> 安装命令里的 /mnt 是之前分区挂载时设定的路径，为了后续安装，不要使用 mnt 以外的名称

3. 等待安装完成

## 7 🌀 其他设置
1. 生成 fstab
    ````
    genfstab -U /mnt >> /mnt/etc/fstab
    ````
2. change到新安装的系统
    ````
    arch-chroot /mnt
    ````
3. 设置时区并同步时间
    ````
    ln -sf /usr/share/zoneinfo/Asia/shanghai /etc/localtime
    hwclock --systohc

    vim /etc/locale.gen
    > 取消 en_US.UTF-8 UTF-8 和 zh_CN.UTF-8 UTF-8 的注释

    locale-gen
    ````
4. 编辑语言
    ````
    vim /etc/locale.conf
    > LANG=en_US.UTF-8
    ````
  > **🐞说明**
  > 不要使用中文，可能会导致部分文字乱码

5. 创建主机名，并在host中添加对应信息
    ````
    echo "{主机名}" >> /etc/hostname
    vim /etc/hosts
    > 127.0.0.1 localhost
    > ::1 localhost
    > 127.0.0.1 {主机名}:localdomain {主机名}
    ````

6. 设置root密码
    ````
    passwd
    ````

7. 安装intal驱动
    ````
    pacman -S intel-ucode
    ````
  > **🐞说明**
  > 仅intel用户安装

## 8 🌀 UEFI设置
1. 安装 ````grub efi```` 启动管理工具
    ````
    pacman -S grub efibootmgr
    ````

2. 生成grub efi
    ````
    grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
    ````
3. 生成UEFI引导文件
    ````
    grub-mkconfig -o /boot/grub/grub.cfg
    ````

## 9 🌀 额外设置
1. 笔记本额外安装
    ````
    pacman -S iw wpa_supplicant dialog netctl
    ````

2. dhcpcd服务
    ````
    systemctl enable dhcpcd
    systemctl start dhcpcd
    ````

## 10 🌀 完成安装
1. **exit 退出 chroot 环境**
2. 卸载被挂载的分区
    ````
    umount -R /mnt
    ````
3. reboot 重启
4. 在Bios中设置uefi启动，选择第8步生成的 ````grub.cfg```` 作为启动文件。
