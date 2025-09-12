# 编写XScript

xscript即是xpkg包, 也是一个跨平台的lua脚本

当一个xpkg包的`type`字段被标识为script, 同时脚本种有一个`xpkg_main`入口, xlings就会开启复用机制。并且在xscript被xlings安装时, 会创建一个同名的二进制可执行文件用于调用这个脚本


## 双重视角/复用机制

- 视角1 - 包管理器/xpkg: 安装/卸载以及版本切换 - 即可被xlings管理和分发 - **天然属性**
- 视角2 - 程序: 被安装后 会用包名生成一个二进制程序 当成正常程序使用

## 功能特性

- lua基本语法
- <mark>天然具备[xpkg包属性](/documents/pkgmanager/intro.html), 可被xlings包管理器分发和管理</mark>
- 跨平台 + 二进制使用习惯 + 多版本共存切换
- 可以使用libxpkg运行时库, 以及复用xpkg包生态
- 程序进入点: xpkg_main

## 适用场景

- 跨平台脚本/命令行工具
- 常用命令组合的抽象打包
- 符合个人习惯的辅助命令制作
- 对其他工具的wrapper
- 以及任何1000行内的小工具开发

## xscript示例

- [xpkg-helper](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/x/xpkg-helper.lua): xpkg包的导出助手, 可以把安装的xpkg包及资源导出到指定文件夹
- [linux-sysroot-create](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/l/linux-sysroot-create.lua): sysroot创建工具, 可指定linux-header和glibc版本
- [musl-cross-make](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/m/musl-cross-make.lua): musl版gcc工具链构建工具, 一键从源码构建指定版本的gcc
- [configure-project-installer](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/c/configure-project-installer.lua): configure风格项目安装器, 一键从项目源码构建及安装到指定目录

::: tip

可以使用`xlings install`安装并体验这些工具

例如:

```bash
xlings install xpkg-helper
xpkg-helper
```

:::