# 自定义xpkg包的使用

xim支持自定义包文件, 以及单包文件的分发和手动注册到xlings的包索引管理器中

## 1.编写xpkg包文件

具体参考 -> [xpkg包文件](/documents/xim/xpkg.md)

## 2.注册自定义包到索引管理器

```bash
xim --add-xpkg [yourXpkgFile]
```

这里以为`mdbook.lua`例

```bash
xim --add-xpkg pkgs/m/mdbook.lua
```
```
[xlings:xim]: convert xpkg-file to runtime path - pkgs/m/mdbook.lua
[xlings:xim]: add xpkg - pkgs/m/mdbook.lua
[xlings:xim]: update index database
```

## 3.查询是否注册成功

```bash
xim -s mdbook
```

```
{ 
  "local:mdbook@0.4.40" = { },
  "local:mdbook@0.4.43" = { 
    "local:mdbook@latest",
    "local:mdbook" 
  },
  "mdbook@0.4.40" = { },
  "mdbook@0.4.43" = { 
    "mdbook",
    "mdbook@latest" 
  } 
}
```

::: tip

一般本地注册的包名前面会有一个local的命名空间做标识, 这里对应的就是`local:mdbook`

:::

## 4.安装

> 注册成功后即可按正常的方式进行安装了

```bash
xim -i local:mdbook
```

或

```bash
xim -i local:mdbook
```

## 5.验证是否安装成功

> 查看安装列表中是否存在

```bash
xim -l mdbook
```

## 6.卸载

```bash
# xlings remove local:mdbook
xim -r local:mdbook
```