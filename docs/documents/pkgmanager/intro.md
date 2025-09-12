# 📦 通用包管理器

从使用视角, <mark>xlings是一个 支持多版本共存和切换的 通用包管理器</mark>

由于 [xpkg](/documents/pkgmanager/intro.html) 几乎可以描述任何事物, 所以可以通过xlings来 安装和管理一些由xpkg描述的 软件 或 环境配置 的生命周期

## 安装示例

**应用软件**

```bash
xligns install vscode
```

**编程语言环境**

```bash
xlings install cpp
```

**字体配置**

```bash
xligns install config:fontconfig-user-moyingji
```

**教程项目**

> 安装mcpp-standard教程项目, 并自动配置本地练习代码的实验环境

```bash
xlings install d2x:mcpp-standard
```

**项目开发环境**

> 安装dragonos项目所需的软件和工具, 并自动配置好开发环境

```bash
xlings install dragonos:dragonos-dev
```

**项目源码**

> 安装linux项目的源代码

```bash
xlings install scode:linux
```

## 卸载示例

```bash
xlings remove vscode
```

::: tip
这里以vscode为示例, 换成对应的包名即可卸载其他包
:::