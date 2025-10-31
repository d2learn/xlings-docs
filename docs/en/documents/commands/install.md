# xlings install

Install corresponding software, libraries, environment configurations, tutorial projects, and any xpkg packages through commands

## Command Template Explanation

```bash
xlings install [pkgname][@version] [-y]
```

- `pkgname`: xpkg package name - software, environment configuration, tutorial project...
- `@version`(optional): @ is the separator between package name and version, version is the version number to install
- `-y`(optional): Skip intermediate confirmation items

## Usage Examples - Installing vscode and python3.8

### Install vscode

```bash
xlings install vscode
```

### Install python3.8

```bash
xlings install python@3.8
```
