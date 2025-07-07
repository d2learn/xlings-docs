# 安装管理器模块

XIM(Xlings Installation Manager)是xlings的最核心的组件, 提供了"xpkg包"的安装管理和自动处理依赖等功能, 同时支持多包索引仓库和私有/自建包索引仓库的支持. 以下是一些功能特性和常见用法:

## 安装软件

```bash
xlings install vscode
```

或安装指定版本

```bash
xlings install vscode@1.93
```

## 安装管理开发环境

**常见开发环境**

::: code-group

```bash [python]
xlings install python
```

```bash [cpp]
xlings install cpp
```

```bash [java]
xlings install java
```

```bash [nodejs]
xlings install nodejs
```

```bash [rust]
xlings install rust
```

```bash [dotnet]
xlings install dotnet
```

:::

**安装指定版本(以python为例)**

::: code-group

```bash [latest]
xlings install python@latest
```

```bash [3.13.1]
xlings install python@3.13.1
```

```bash [3.12.6]
xlings install python@3.12.6
```

```bash [3.11.11]
xlings install python@3.11.11
```

```bash [3.10.16]
xlings install python@3.10.16
```

```bash [3.9.21]
xlings install python@3.9.21
```

```bash [3.8.20]
xlings install python@3.8.20
```

:::

**切换版本**

```bash
xlings use python 3.8.20
```

::: tip
xim支持同时安装多个版本, 并会自动注册到[xvm](/documents/xvm/intro.md)中. 可以根据不同需求自由切换版本进行使用
:::

## 一键配置

```bash
xlings install config:vim
```

::: tip
xlings支持的包, 可以在[xim包索引网站](https://d2learn.github.io/xim-pkgindex)进行查询, 你也可以[添加xpkg包](/documents/xim/xpkg.md)到官方索引仓库
:::