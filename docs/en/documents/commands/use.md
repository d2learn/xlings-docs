# xlings use

Through this command, you can view all installed versions of software, or switch to a specified version

## Command Template Explanation

```bash
xlings use [pkgname] [version]
```

- `pkgname`: xpkg package name - software, environment configuration, tutorial project...
- `version`(optional): version is the version number to switch to (must be an already installed version)

## Usage Example - View all installed python versions and switch to 3.10

### View installed version list

```bash
xlings use python
```

```bash
xlings use python
```

::: tip

- Install multiple python versions (if multiple versions already exist, you can ignore this)
```bash
xlings install python@3.8
xlings install python@3.10
xlings install python@3.12
```
- The highlighted version number indicates the currently used version
:::

### Switch to python3.10 version

```bash
xlings use python 3.10
```
