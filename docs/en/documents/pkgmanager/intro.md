# 📦 Universal Package Manager

From a usage perspective, <mark>xlings is a universal package manager that supports multiple version coexistence and switching</mark>

Since [xpkg](/en/documents/pkgmanager/intro.html) can describe almost anything, xlings can be used to install and manage the lifecycle of software or environment configurations described by xpkg

## Installation Examples

**Application Software**

```bash
xlings install vscode
```

**Programming Language Environment**

```bash
xlings install cpp
```

**Font Configuration**

```bash
xlings install config:fontconfig-user-moyingji
```

**Tutorial Project**

> Install the mcpp-standard tutorial project and automatically configure the experimental environment for local practice code

```bash
xlings install d2x:mcpp-standard
```

**Project Development Environment**

> Install the software and tools required for the dragonos project and automatically configure the development environment

```bash
xlings install dragonos:dragonos-dev
```

**Project Source Code**

> Install the source code for the linux project

```bash
xlings install scode:linux
```

## Uninstallation Examples

```bash
xlings remove vscode
```

::: tip
Here we use vscode as an example, you can uninstall other packages by replacing with the corresponding package name
:::