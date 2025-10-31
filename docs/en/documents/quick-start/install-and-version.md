# Software Installation and Multi-version Management

> Package management with **multi-version coexistence** support - not only supports software/tool installation, but also **environment configuration**

## Installing X

Application software

```bash
xlings install vscode
```

Tutorial project

```bash
xlings install d2x:mcpp-standard
```

Environment configuration

```bash
xlings install config:xxx
```

## Multi-version Management

Install specific version

```bash
xlings install python@3.13
xlings install python@3.8
```

Switch to specific version

```bash
xlings use python 3.8
```

Uninstall specific version

```bash
xlings remove python@3.8
```

::: tip
If 3.8 is the current version, after uninstallation it will automatically switch to other installed versions. For example: 3.13
:::