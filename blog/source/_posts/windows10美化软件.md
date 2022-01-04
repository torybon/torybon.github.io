---
title: windows10美化软件
date: 2021-12-28 21:36:00
categories:
- 技术
- Windows
tags:
- windows10
- Tips
---
<center><img src="/images/windows10-logo.png" width=50% height=50% align=center/></center>

美化的核心是简洁风格，并且不受系统更新影响。不使用非themepack主题包并且不修改注册表。记录部分美化软件和操作。

<!--more-->

## 🌀 字体：更纱黑体

在浏览器中使用，_等距更纱黑体SC_
下载地址：https://github.com/be5invis/Sarasa-Gothic/releases  

更新：<font color=red>应用商店可以下载</font>


## 🌀 TranslucentTB

来源 | 作用
---|---
应用商店下载 | 任务栏透明

![](/images/windows10美化软件-1.png)

## 🌀 QuickLook

来源 | 作用
---|---
应用商店下载 | 空格键浏览文件

![](/images/windows10美化软件-2.png)

## 🌀 Listary

来源 | 作用
---|---
<font color=blue>net</font> | 双击ctrl，全局搜索，自定义快捷键访问应用和网址

![](/images/windows10美化软件-3.png)

## 🌀 windows-folder-remark-master

来源 | 作用
---|---
<font color=blue>net</font> | 文件 / 文件夹 添加备注，可以实现对文件夹的分类管理

**使用时，只给<font color=red>文件夹</font>添加备注，不对文件操作**  
文件夹添加备注，可以按备注进行分组，类似windows下载文件夹中的样式  
核心是添加文件夹配置项，会将文件夹修改成**受保护的系统操作文件**  

解除受保护的系统操作文件：  
```
attrib -s "target folder"

## HELP
attrib [{+r | -r}] [{+a | -a}] [{+s | -s}] [{+h | -h}]
attrib [[Drive:][Path] FileName] [/s[/d]]
参数
+r       设置只读文件属性。
-r       清除只读文件属性。
+a       设置存档属性。
-a       清除存档属性。
+s       设置系统文件属性。
-s       清除系统文件属性。
+h       设置隐藏文件属性。
-h       清除隐藏文件属性。
/s       将 attrib 和任意命令行选项应用到当前目录及其所有子目录中的匹配文件。
/d       将 attrib 和任意命令行选项应用到目录。
/?       在命令提示符下显示帮助。
```

## ~~🌀 Files~~

**目前不推荐，无法替代win+E快捷键**

来源 | 作用
---|---
应用商店下载 | 代替系统文件浏览器，UI更美观


## 🌀 Lockscreen as wallpaper

来源 | 作用
---|---
应用商店下载 | 获取锁屏页面上的每日聚焦图片
