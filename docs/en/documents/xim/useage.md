# Advanced Usage

## Command Line Parameters

```bash
Usage: $ xim [command] [target]

Command List:
  -i,   install,   Install software package or environment
  -r,   remove,    Remove software package or environment
  -u,   update,    Update software package or environment
  -l,   list,      List all installed software packages or environments
  -s,   search,    Search for software packages
  -h,   help,      Display help information

System Commands:
  --detect,        Detect local software packages
  --update,        Update [self | index]
  --add-xpkg,      Add xpkg file to index database
  --xpkg-args,     xpkg arguments
  --add-indexrepo, Add indexrepo to index repository manager
  --disable-info,  Disable information display

Examples:
  xim vscode     -- Install vscode
  xim -r vscode  -- Uninstall vscode
  xim -l         -- List all installed software packages
  xim -s code    -- Search for software packages containing 'code'
```

## Usage Examples

### Add Custom Package

```bash
xim --add-xpkg yourPath/xxx.lua
```

::: tip
Supports both local package files and network package files
:::

### Add Custom Package Index Repository

```bash
xim --add-indexrepo namespace:https://xxx.git
```

- `namespace`: Prefix namespace for custom packages
- `https://xxx.git`: Package index repository address

### Update Package Index

```bash
xim --update index
```

### Query Installed Packages

```bash
xim -l pkgname
```

- `pkgname`: Package name, supports fuzzy matching