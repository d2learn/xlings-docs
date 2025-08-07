# 使用或测试xpkg

在完成[xpkg包的编](./write.md)写后, 可以用下面的步骤进行使用或测试


## 1.添加自定义包到索引管理器

```bash
xim --add-xpkg yourPath/pkgname.lua
```

```
[xlings:xim]: convert xpkg-file to runtime path - pkgs/m/pkgname.lua
[xlings:xim]: add xpkg - pkgs/m/pkgname.lua
[xlings:xim]: update index database
```

::: tip
xim(Xlinsg Installation Manager)不仅支持添加本地xpkg文件, 也支持添加网络的xpkg文件, 这极大的方便了xpkg包的共享和分发
```bash
xim --add-xpkg https://.../pkgname.lua
```
:::

## 3.查询是否注册成功

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

一般本地注册的包名前面会有一个local的命名空间做标识, 这里对应的就是`local:pkgname`

:::

## 4.安装

> 添加成功后即可按正常的方式进行安装了

```bash
xlings install local:pkgname
```

## 5.验证是否安装成功

> 查看安装列表中是否存在

```bash
xlings use pkgname
```

## 6.卸载

```bash
xlings remove local:pkgname
```