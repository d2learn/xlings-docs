# Installation Manager Module

XIM (Xlings Installation Manager) is the core component of xlings, providing "xpkg package" installation management and automatic dependency handling functions, while supporting multiple package index repositories and private/self-built package index repositories. Here are some features and common usage:

- Supports multi-version coexistence and switching
- Supports namespaces to avoid package conflicts
- Custom package index repositories
- Supports regional mirror acceleration

## Installing Software

```bash
xlings install vscode
```

Or install specific version

```bash
xlings install vscode@1.93
```

## Managing Development Environment Installation

**Common Development Environments**

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

**Install Specific Version (using python as example)**

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

**Switch Version**

```bash
xlings use python 3.8.20
```

::: tip
xim supports installing multiple versions simultaneously and automatically registers them to [xvm](/en/documents/xvm/intro.md). You can freely switch versions according to different needs.
:::

## One-click Configuration

```bash
xlings install config:vim
```

::: tip
Packages supported by xlings can be queried at [xim package index website](https://d2learn.github.io/xim-pkgindex), you can also [add xpkg packages](/en/documents/xim/xpkg.md) to the official index repository.
:::