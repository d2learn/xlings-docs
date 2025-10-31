# Using or Testing xpkg

After completing the [writing of the xpkg package](./write.md), you can use or test it using the following steps.

## 1. Add custom package to index manager

```bash
xim --add-xpkg yourPath/pkgname.lua
```

```
[xlings:xim]: convert xpkg-file to runtime path - pkgs/m/pkgname.lua
[xlings:xim]: add xpkg - pkgs/m/pkgname.lua
[xlings:xim]: update index database
```

::: tip
xim (Xlings Installation Manager) not only supports adding local xpkg files, but also supports adding network xpkg files, which greatly facilitates the sharing and distribution of xpkg packages.
```bash
xim --add-xpkg https://.../pkgname.lua
```
:::

## 2. Query if registration was successful

```bash
xim -s pkgname
```

```
{ 
  "local:pkgname@0.4.40" = { },
  "local:pkgname@0.4.43" = { 
    "local:pkgname@latest",
    "local:pkgname" 
  },
}
```

::: tip

Generally, locally registered package names will have a local namespace identifier in front, which corresponds to `local:pkgname`

:::

## 3. Install

> After successful addition, you can install in the normal way

```bash
xlings install local:pkgname
```

## 4. Verify if installation was successful

> Check if it exists in the installation list

```bash
xlings use pkgname
```

## 5. Uninstall

```bash
xlings remove local:pkgname
```
