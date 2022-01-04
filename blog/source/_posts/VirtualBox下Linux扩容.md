---
title: VirtualBox下Linux扩容
data: 2021-12-27 23:50:10
categories:
- 技术
- VirtualBox
tags:
- Linux
- VirtualBox
---
<center><img src="/images/virtualbox-centos.png" width=50% height=50% align=center/></center>

VirtualBox搭建的centOS 7.2 环境下，/dev/mapper/centos-root 空间不足，需要扩容。记录操作。

<!--more-->

## 1 🌀 root确认故障
````
sudo -s
df -h
````

## 2 🌀 在虚拟机中添加一块物理的磁盘，重起虚拟机
````
# 虚拟机设置界面中选中需要扩容的磁盘, 然后在右下方处点击扩展按钮, 即可启动扩展任务
````

## 3 🌀 查看磁盘编号
````
[user@localhost ~]$ ls /dev/sd*
/dev/sda  /dev/sda1  /dev/sda2

[root@localhost user]# fdisk -l

磁盘 /dev/sda：16.1 GB, 16106127360 字节，31457280 个扇区
Units = 扇区 of 1 * 512 = 512 bytes
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
磁盘标签类型：dos
磁盘标识符：0x000398a7

   设备 Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048     2099199     1048576   83  Linux
/dev/sda2         2099200    20971519     9436160   8e  Linux LVM

磁盘 /dev/mapper/centos-root：8585 MB, 8585740288 字节，16769024 个扇区
Units = 扇区 of 1 * 512 = 512 bytes
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节


磁盘 /dev/mapper/centos-swap：1073 MB, 1073741824 字节，2097152 个扇区
Units = 扇区 of 1 * 512 = 512 bytes
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
````

## 4 🌀 挂载
````
[root@localhost user]# fdisk /dev/sda
欢迎使用 fdisk (util-linux 2.23.2)。

更改将停留在内存中，直到您决定将更改写入磁盘。
使用写入命令前请三思。


命令(输入 m 获取帮助)：m
命令操作
   a   toggle a bootable flag
   b   edit bsd disklabel
   c   toggle the dos compatibility flag
   d   delete a partition
   g   create a new empty GPT partition table
   G   create an IRIX (SGI) partition table
   l   list known partition types
   m   print this menu
   n   add a new partition
   o   create a new empty DOS partition table
   p   print the partition table
   q   quit without saving changes
   s   create a new empty Sun disklabel
   t   change a partition's system id
   u   change display/entry units
   v   verify the partition table
   w   write table to disk and exit
   x   extra functionality (experts only)

命令(输入 m 获取帮助)：n
Partition type:
   p   primary (2 primary, 0 extended, 2 free)
   e   extended
Select (default p): p
分区号 (3,4，默认 3)：3
起始 扇区 (20971520-31457279，默认为 20971520)：
将使用默认值 20971520
Last 扇区, +扇区 or +size{K,M,G} (20971520-31457279，默认为 31457279)：
将使用默认值 31457279
分区 3 已设置为 Linux 类型，大小设为 5 GiB

命令(输入 m 获取帮助)：w
The partition table has been altered!

Calling ioctl() to re-read partition table.

WARNING: Re-reading the partition table failed with error 16: 设备或资源忙.
The kernel still uses the old table. The new table will be used at
the next reboot or after you run partprobe(8) or kpartx(8)
正在同步磁盘。
[root@localhost user]#
````

## 5 🌀 支持LVM
````
[root@localhost user]# fdisk /dev/sda
欢迎使用 fdisk (util-linux 2.23.2)。

更改将停留在内存中，直到您决定将更改写入磁盘。
使用写入命令前请三思。


命令(输入 m 获取帮助)：m
命令操作
   a   toggle a bootable flag
   b   edit bsd disklabel
   c   toggle the dos compatibility flag
   d   delete a partition
   g   create a new empty GPT partition table
   G   create an IRIX (SGI) partition table
   l   list known partition types
   m   print this menu
   n   add a new partition
   o   create a new empty DOS partition table
   p   print the partition table
   q   quit without saving changes
   s   create a new empty Sun disklabel
   t   change a partition's system id
   u   change display/entry units
   v   verify the partition table
   w   write table to disk and exit
   x   extra functionality (experts only)

命令(输入 m 获取帮助)：t
分区号 (1-3，默认 3)：3
Hex 代码(输入 L 列出所有代码)：8e
已将分区“Linux”的类型更改为“Linux LVM”

命令(输入 m 获取帮助)：w
The partition table has been altered!

Calling ioctl() to re-read partition table.

WARNING: Re-reading the partition table failed with error 16: 设备或资源忙.
The kernel still uses the old table. The new table will be used at
the next reboot or after you run partprobe(8) or kpartx(8)
正在同步磁盘。
````

## 6 🌀 reboot & 确认
````
[root@localhost user]# reboot

[root@localhost user]# fdisk -l

磁盘 /dev/sda：16.1 GB, 16106127360 字节，31457280 个扇区
Units = 扇区 of 1 * 512 = 512 bytes
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
磁盘标签类型：dos
磁盘标识符：0x000398a7

   设备 Boot      Start         End      Blocks   Id  System
/dev/sda1   *        2048     2099199     1048576   83  Linux
/dev/sda2         2099200    20971519     9436160   8e  Linux LVM
/dev/sda3        20971520    31457279     5242880   8e  Linux LVM

磁盘 /dev/mapper/centos-root：8585 MB, 8585740288 字节，16769024 个扇区
Units = 扇区 of 1 * 512 = 512 bytes
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节


磁盘 /dev/mapper/centos-swap：1073 MB, 1073741824 字节，2097152 个扇区
Units = 扇区 of 1 * 512 = 512 bytes
扇区大小(逻辑/物理)：512 字节 / 512 字节
I/O 大小(最小/最佳)：512 字节 / 512 字节
````

## 7 🌀 格式化该新添加的分区
````
[root@localhost user]# mkfs -t ext3 /dev/sda3
mke2fs 1.42.9 (28-Dec-2013)
文件系统标签=
OS type: Linux
块大小=4096 (log=2)
分块大小=4096 (log=2)
Stride=0 blocks, Stripe width=0 blocks
327680 inodes, 1310720 blocks
65536 blocks (5.00%) reserved for the super user
第一个数据块=0
Maximum filesystem blocks=1342177280
40 block groups
32768 blocks per group, 32768 fragments per group
8192 inodes per group
Superblock backups stored on blocks:
        32768, 98304, 163840, 229376, 294912, 819200, 884736

Allocating group tables: 完成
正在写入inode表: 完成
Creating journal (32768 blocks): 完成
Writing superblocks and filesystem accounting information: 完成
````

## 8 🌀 确认根分区信息
````
[root@localhost user]# lvs
  LV   VG     Attr       LSize  Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  root centos -wi-ao---- <8.00g
  swap centos -wi-ao----  1.00g


[root@localhost user]# pvcreate /dev/sda3
WARNING: ext3 signature detected on /dev/sda3 at offset 1080. Wipe it? [y/n]: y
  Wiping ext3 signature on /dev/sda3.
  Physical volume "/dev/sda3" successfully created.
[root@localhost user]# df -h
文件系统                 容量  已用  可用 已用% 挂载点
/dev/mapper/centos-root  8.0G  6.1G  1.9G   77% /
devtmpfs                 898M     0  898M    0% /dev
tmpfs                    910M     0  910M    0% /dev/shm
tmpfs                    910M  9.6M  901M    2% /run
tmpfs                    910M     0  910M    0% /sys/fs/cgroup
/dev/sda1               1014M  146M  869M   15% /boot
tmpfs                    182M     0  182M    0% /run/user/0
tmpfs                    182M     0  182M    0% /run/user/1000
[root@localhost user]# vgextend centos /dev/sda3
  Volume group "centos" successfully extended
[root@localhost user]# vgdisplay
  --- Volume group ---
  VG Name               centos
  System ID
  Format                lvm2
  Metadata Areas        2
  Metadata Sequence No  4
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                2
  Open LV               2
  Max PV                0
  Cur PV                2
  Act PV                2
  VG Size               13.99 GiB
  PE Size               4.00 MiB
  Total PE              3582
  Alloc PE / Size       2303 / <9.00 GiB
  Free  PE / Size       1279 / <5.00 GiB
  VG UUID               drQqLf-ibdG-E4IB-bAR1-ExjT-Ec6J-dUc3ts
````

## 9 🌀 向跟分区拓展
````
[root@localhost user]# lvextend -L +4.99G /dev/centos/root /dev/sda3
  Rounding size to boundary between physical extents: 4.99 GiB.
  Size of logical volume centos/root changed from <8.00 GiB (2047 extents) to <12.99 GiB (3325 extents).
  Logical volume centos/root successfully resized.

[root@localhost user]# xfs_growfs /dev/mapper/centos-root
meta-data=/dev/mapper/centos-root isize=512    agcount=4, agsize=524032 blks
         =                       sectsz=512   attr=2, projid32bit=1
         =                       crc=1        finobt=0 spinodes=0
data     =                       bsize=4096   blocks=2096128, imaxpct=25
         =                       sunit=0      swidth=0 blks
naming   =version 2              bsize=4096   ascii-ci=0 ftype=1
log      =internal               bsize=4096   blocks=2560, version=2
         =                       sectsz=512   sunit=0 blks, lazy-count=1
realtime =none                   extsz=4096   blocks=0, rtextents=0
data blocks changed from 2096128 to 3404800
````

## 10 🌀 check
````
[root@localhost user]# df -h
文件系统                 容量  已用  可用 已用% 挂载点
/dev/mapper/centos-root   13G  6.1G  6.9G   47% /
devtmpfs                 898M     0  898M    0% /dev
tmpfs                    910M     0  910M    0% /dev/shm
tmpfs                    910M  9.6M  901M    2% /run
tmpfs                    910M     0  910M    0% /sys/fs/cgroup
/dev/sda1               1014M  146M  869M   15% /boot
tmpfs                    182M     0  182M    0% /run/user/0
tmpfs                    182M     0  182M    0% /run/user/1000
````
