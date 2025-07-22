---
layout: home
---

# d2x | 交互式教程 mcpp-standard

::: info

mcpp-standard是一个交互式的C++基础教程项目. __xlings工具为项目提供了如下支撑:__

- 生成基础的<mark>[book + video + code + x]</mark>项目结构
- 自动化的练习代码检测
- 像包管理器一样获取项目 <mark>一键安装教程项目 + 自动配置好实验环境</mark>

更多详情 -> [github](https://github.com/Sunrisepeak/mcpp-standard)

:::

---

<div align=center><img width="640" src="/imgs/mcpp-standard.png"></div>

---

<div style="text-align: center;">
  <a href="https://forum.d2learn.org/category/20" target="_blank" style="display: inline-block; margin: 0 0.2rem;">
    <img src="https://img.shields.io/badge/D2Learn-mcpp_standard-blue" />
  </a>
  <a href="https://d2learn.org" target="_blank" style="display: inline-block; margin: 0 0.2rem;">
    <img src="https://img.shields.io/badge/License-Apache2.0-success" alt="License" />
  </a>
  <a href="https://space.bilibili.com/65858958/lists/5208246" target="_blank" style="display: inline-block; margin: 0 0.2rem;">
    <img src="https://img.shields.io/badge/Video-bilibili-teal" alt="Bilibili" />
  </a>
</div>

<div align="center">
  <a href="https://github.com/Sunrisepeak/mcpp-standard/blob/main/book/src/chapter_1.md" target="_blank">电子书</a>
  |
  <a href="https://www.bilibili.com/video/BV182MtzPEiX" target="_blank">介绍</a>
  |
  <a href="https://github.com/Sunrisepeak/mcpp-standard/blob/main/videos" target="_blank">视频/动画</a>
  |
  <a href="https://forum.d2learn.org/category/20" target="_blank">论坛</a>
  |
  <a href="https://github.com/d2learn/xlings" target="_blank">工具</a>
</div>

<div align=center><b>动手学现代C++核心语言特性</b> | 交互式的代码练习</div>

## 目标

- **1.** 任何人都可以在网上**免费获取**课程资源
- **2.** 强调通过**动手实践/代码练习**的方式来学习
- **3.** 提供**自动化的代码练习 + 方便的环境搭建**的工具支持
- **4.** 通过社区共享、共建、互助实现良性循环 - **开源 + 论坛**

## 交互式代码练习

- 🌍练习进度/状态显示
- 📍自动定位练习代码文件
- ✅实时的代码检查和结果验证
- 🤖AI智能**代码引导**

<div align=center><img width="840" src="/imgs/mcpp-standard-demo.gif"></div>

## 快速开始

> 通过使用[xlings](https://github.com/d2learn/xlings)获取项目并运行**编译器驱动开发模式**(自动化检测)来进行代码练习
>
> - 环境搭建演示视频: [windows](https://www.bilibili.com/video/BV1L4KuzEEcE) - [linux](https://www.bilibili.com/video/BV182MtzPEiX?p=2) - [macos](https://www.bilibili.com/video/BV182MtzPEiX?p=2)

<details>
  <summary>点击查看xlings安装命令</summary>

---

#### Linux/MacOS

```bash
curl -fsSL https://d2learn.org/xlings-install.sh | bash
```

#### Windows - PowerShell

```bash
irm https://d2learn.org/xlings-install.ps1.txt | iex
```

> 注: xlings包含所需的xim和d2x工具 -> [详情](https://d2learn.org/xlings)

---

</details>

### 获取项目

> 下载项目到当前目录并自动配置本地环境

```bash
xlings install d2x:mcpp-standard
```

### 本地文档/电子书(可选)

> 可以在项目目录执行`d2x book`命令, 打开本地文档(包含使用说明和电子书)

```bash
d2x book
```

### 练习代码自动检测

> 在项目目录`mcpp-standard`运行checker命令, 进入练习代码自动检测程序

```bash
xlings checker
```

### 同步最新的练习代码

> 由于项目处于持续更新阶段, 可以使用下面的命令进行自动同步(如果同步失败, 可能需要手动用git进行更新项目代码)

```bash
d2x update
```

## 社区 | 交流

- **即时交流(QQ群):** 167535744
- [**论坛版块:**](https://forum.d2learn.org/category/20): 项目相关的练习代码、技术交流和讨论

> **注:** 复杂性问题(技术、环境搭建等问题)推荐在论坛发帖, 并详细描述问题细节, 能更有效于问题的解决和复用

## 参与项目 | 社区贡献

- **参与社区交流:** 反馈问题、参与社区问题讨论
- **参与项目维护和开发:** 参与社区中问题处理、修复Bug、开发&优化新功能/模块

**📑开源协议与贡献许可(License & CLA)**

- 本项目欢迎自由使用与分发！你可以在 [Apache License 2.0](https://github.com/Sunrisepeak/mcpp-standard/blob/main/LICENSE-CODE) 和 [CC-BY-NC-SA 4.0](https://github.com/Sunrisepeak/mcpp-standard/blob/main/LICENSE-BOOK) 协议下**免费**使用、修改和分享本项目的代码与文档内容  
- 如希望参与贡献代码或文档，请先阅读[贡献者许可协议（CLA）](https://github.com/Sunrisepeak/mcpp-standard/blob/main/CLA.md)

**👥贡献者**

<a href="https://github.com/Sunrisepeak/mcpp-standard/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Sunrisepeak/mcpp-standard" />
</a>

