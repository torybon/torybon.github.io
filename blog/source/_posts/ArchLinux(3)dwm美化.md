---
title: ArchLinux(3) dwm美化
date: 2022-01-03 19:05:00
top: 27
categories:
- 技术
- Linux
tags:
- Linux
- Arch
---
<center><img src="/images/dwm-2.png" width=50% height=50% align=center/></center>   

开箱即用的dwm非常简陋，在实际使用时可以进行相应的美化操作。

<!--more-->

## 🔍 关联导航

☆ {% post_link 'ArchLinux(1)安装' 'ArchLinux 安装' %}
☆ {% post_link 'ArchLinux(2)dwm安装' 'ArchLinux dwm安装' %}
★ {% post_link 'ArchLinux(3)dwm美化' 'ArchLinux dwm美化' %}

## 🌀 字体安装
````
git clone https://github.com/ryanoasis/nerd-fonts.git --depth=1
cd nerd-fonts
./install.sh
````

## 🌀 安装alacritty终端
默认的终端st不支持上下滚动翻页。体验非常不好，更换成alacritty终端
````
sudo pacman -S alacritty
````
修改alacritty配置，新建配置文件：[~/.config/alacritty/alacritty.yml](/download/alacritty.t)
````
live_config_reload: true

scrolling:
  history: 500
  multiplier: 3

font:
  normal:
    family: Hack Nerd Font
    style: Regular
  bold:
    family: Hack Nerd Font
    style: Bold
  italic:
    family: Hack Nerd Font
    style: Italic
  bold_italic:
    family: Hack Nerd Font
    style: Bold Italic
  size: 7
  offset:
    x: 0
    y: 0
  glyph_offset:
    x: 2
    y: 2

background_opacity: 0.9
````

## 🌀 安装rofi启动器
````
sudo pacman -S rofi
````

## 🌀 config.def.h
dwm的美化基于 [Nerd特殊字符](https://www.nerdfonts.com/cheat-sheet)

[dwm 配置文件下载](/download/dwm-config.def.h)
[slstatus 配置文件下载](/download/slstatus-config.def.h)
[slock 配置文件下载](/download/slock-config.def.h)

在dwm配置文件里关联了alacritty终端和rofi启动器

## 🌀 修改启动配置
在启动配置 ````~/.xinitrc```` 里添加背景图片的处理和slstatus的启动配置
````
sudo pacman -S picom feh
````
````
picom -CGb &
feh --bg-fill --no-fehbg -z {图片绝对路径}
slstatus &
exec dwm
````
