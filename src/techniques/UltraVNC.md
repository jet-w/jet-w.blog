---
title: UltraVNC
date: 2023-09-22
icon: /assets/icon/common/hammer.svg
author: Haiyue
category:
  - make
tag:
  - skills
star: false
sticky: false
---
## How to install Repeater in CentOS

### 01.Download
Download source code from https://github.com/qian-jiahong/uvncrep017-ws

### 02.Decompress
``` bash
tar -xvf uvncrep017-ws.tar
```

### 03.Compile and Install
``` bash
cd uvncrep017-ws
make & make install
```

### 04.Add a user for UltraVNC Repeater Service
``` bash
useradd uvncrep
```

### 05.Start the service
``` bash {2}
# Please config according to your needs before start.
# Configuration file: /etc/uvnc/uvncrepeater.ini

/etc/init.d/uvncrepeater start
```

::: warning Problems when start service
The service need a tool named `start-stop-daemon`, my centos is 8, and cannot install the tool from the default repo source.

Please install the tool from the source below.
[start-stop-daemon](https://codeload.github.com/willgarcia/start-stop-daemon/tar.gz/refs/tags/v1.0.0)

A package named [`dpkg_1.18.2.tar.xz`](http://ftp.ubk.hu/src/debian/dpkg/dpkg_1.18.2.tar.xz) is needed during install `start-stop-daemon`, please [download it from the link](http://ftp.ubk.hu/src/debian/dpkg/dpkg_1.18.2.tar.xz).
:::

## How to use

### Server connect to repeater
``` bash
// 命令行参数如下
// id number: 被控制端编号（只能是数字，唯一，且至少三位，即最小是 100，最大是 2147483647，源码中此为 int 类型）
// ip: repeater 中继器服务器 IP
// port: 中继器 UltraVNC Server 监听端口
winvnc.exe -autoreconnect ID:[id number]-connect [repeater ip]:[server listen port] -run
```

### Viewer connect to repeater
``` bash
// 命令行参数如下
// id number: 被控制端编号（只能是数字，唯一，且至少三位，即最小是 100，最大是 2147483647，源码中此为 int 类型）
// ip: repeater 中继器服务器 IP
// port: 中继器 UltraVNC Viewer 监听端口
vncviewer.exe -proxy [repeater ip]:[viewer listen port] ID:[id number]

// 示例如下
vncviewer.exe -proxy 192.168.1.2:5901 ID:10001
```

## References
[远程桌面中转，基于 UltraVNC Repeater（中继器）的远程桌面服务搭建，用于复杂网络环境](https://blog.csdn.net/WTUDAN/article/details/100214799)
[远程桌面中转，基于 UltraVNC Repeater（中继器）的远程桌面服务搭建](http://zj.lzycn.vip:8082/%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE-%E5%9F%BA%E4%BA%8E%20UltraVNC%20Repeater%EF%BC%88%E4%B8%AD%E7%BB%A7%E5%99%A8%EF%BC%89%E7%9A%84%E8%BF%9C%E7%A8%8B%E6%A1%8C%E9%9D%A2%E6%9C%8D%E5%8A%A1%E6%90%AD%E5%BB%BA.pdf)
[远程桌面中转，基于 UltraVNC Repeater（中继器）的远程桌面服务搭建](https://www.moyann.com/archives/209/)








