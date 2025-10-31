# xlings remove

Through this command, you can uninstall specified xpkg packages

## Command Template Explanation

```bash
xlings remove [pkgname][@version]
```

- `pkgname`: xpkg package name - software, environment configuration, tutorial project...
- `@version`(optional): version is the version number to switch to (must be an already installed version)

## Usage Example - Uninstall python

### Uninstall currently used version

```bash
xlings remove python
```

### Uninstall specified version

```bash
xlings remove python@3.10
```

::: tip
Example prerequisite requires multiple python versions to be already installed (if multiple versions already exist, you can ignore this)
```bash
xlings install python@3.8
xlings install python@3.10
xlings install python@3.12
```
:::