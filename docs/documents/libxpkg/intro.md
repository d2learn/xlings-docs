# libxpkg 介绍

libxpkg是一组帮助[xpkg包文件](/documents/xpkg/intro.md)编写的标准库, 使用他能方便的获取xlings运行时的信息以及多版本共存的实现

## 主要目标

- 跨平台、和可移植性, 提高xpkg包文件的兼容性
- 提供易用的运行时信息获取的接口
- xlings工具模块相关的接口
- 一些方便xpkg编写的功能模块

## 模块简介

| 模块 | 简介 |
| --- | --- |
| [xim.libxpkg.pkginfo](/documents/libxpkg/pkginfo.md) | 获取运行时的包信息 |
| [xim.libxpkg.xvm](/documents/libxpkg/xvm.md) | 多版本管理器的api |
| [xim.libxpkg.system](/documents/libxpkg/system.md) | 获取运行时相关的系统信息以及一些系统工具 |
| [xim.libxpkg.log](/documents/libxpkg/log.md) | log打印模块 |
| [xim.libxpkg.pkgmanager](/documents/libxpkg/pkgmanager.md) | 包管理模块, 提供安装和卸载依赖接口 |

## 使用示例

```lua
package = {
    -- ...
}

-- [!code focus:3]
-- 导入相关模块
import("xim.libxpkg.pkginfo")
import("xim.libxpkg.log")

-- ...

function install()

    -- [!code focus:4]
    -- 使用api打印出当前请求安装包的版本, 以及其期望的安装目录
    log.warn("this is a debug...")
    log.info("version: %s", pkginfo.version())
    log.info("installdir: %s", pkginfo.install_dir())

    return true
end

--- ...

```

::: warning libxpkg的源码实现

- https://github.com/d2learn/xlings/tree/main/core/xim/libxpkg

:::