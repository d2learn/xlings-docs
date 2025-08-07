# 编写xpkg

编写xpkg包前可以先了解[xpkg文件结构](./structure.md), 除了特定的结构外你可以使用lua的语法来实现hooks函数

::: details xpkg包文件参考模板

```lua
package = {
    -- base info
    name = "xpackage",
    description = "XIM Package File Template",

    authors = "sunrisepeak",
    licenses = "Apache-2.0",
    repo = "https://github.com/d2learn/xim-pkgindex",

    -- xim pkg info
    type = "package",

    xpm = {
        windows = {
            ["0.0.0"] = { },
        },
        linux = {
            ["0.0.0"] = { },
        },
        macosx = {
            ["0.0.0"] = { },
        },
    },
}

import("libxpkg.pkginfo")
import("libxpkg.xvm")

function installed()
    return os.iorun("xvm list xpackage")
end

function install()
    print("install xpackage...")

    -- your install implementation
    -- ...

    return true
end

function config()
    -- your config implementation
    -- ...

    -- config xvm
    config = {
        -- ...
    }

    xvm.add("xpackage", confg)

    return true
end

function uninstall()
    xvm.remove("xpackage")

    -- your uninstall implementation
    -- ...

    return true
end
```

::: warning 更多可参考的xpkg包文件

- [mdbook.lua](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/m/mdbook.lua): 二进制命令行工具类型
- [code.lua](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/c/code.lua): 支持跨平台的图形化工具软件类型
- [gitcode-hosts](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/g/gitcode-hosts.lua): 环境配置类型
- 更多可参考包文件见 -> [xim-pkgindex](https://github.com/d2learn/xim-pkgindex)

:::

## 1 编写xpkg的描述域

### 1.1 基础信息

填写包的基础信息, 这些信息会在用户安装时进行展示

- 必填项: `name`、`description`、`authors`、`type`、`namespace`
- 建议填写项: `licenses`、`repo`、`keywords`

```lua
package = {

    homepages = "https://xxx",

    -- base info
    name = "xpackage", -- [!code focus:3]
    description = "XIM Package File Template",
    authors = "sunrisepeak",
    licenses = "Apache-2.0",
    repo = "https://github.com/d2learn/xim-pkgindex",

    -- xim pkg info
    type = "package", -- [!code focus:2]
    namespace = "xxx",
    keywords = { "template", "tools" },

    xpm = {
        --...
    },
}
```

### 1.2 xpm平台支持和资源描述

在`xpm`中可以添加支持的平台和对应的版本号以及资源信息。其中对于linux发行版本xlings采取优先级批评原则, 例如: 在ubuntu系统上, 匹配顺序是 ubuntu -> debian -> linux, 即填写到linux中的版本意味在所有电脑上生效

每个版本对应的资源信息是可选项. 如有填写url资源, xlings工具会执行`install`函数前, 自动下载资源, 如果是压缩包会自动解压, 在hooks中可以通过`libxpkg`库的api获取资源位置信息. 没有而外资源需要下载留`{ }`即可

url支持的格式形式:

- 压缩包格式: 以.zip、.tar.gz、.tar.xz结尾的会自动解压
- 仓库格式: 以*.git结尾, 会自动拉取仓库到本地

```lua
package = {

    homepages = "https://xxx",
    -- base info
    name = "xpackage",
    --...
    -- xim pkg info
    type = "package",
    --...

    -- [!code focus:10]
    xpm = {
        linux = {
            ["0.0.1"] = {
                url = "https://xxx.tar.gz",
                sha256 = "xxx",
            },
        },
        macosx = {
            ["0.0.1"] = { },
        },
        -- ...
    },
}
```

### 1.3 依赖声明及自动处理

在`xpm`中可以声明安装时所需要的依赖, xlings工具会在执行hooks函数前, 自动检测依赖的包, 如果不存在会先安装对应的依赖

- 在系统层级指定的`deps`为多平台的公共依赖
- 系统层级内指定的`deps`为该平台额外的依赖

```lua
package = {
    name = "xpackage",
    --...

    xpm = {
        -- [!code focus]
        deps = { "nodejs", "cmake@4.0" }, -- 平台公共依赖
        linux = {
            ["0.0.1"] = {
                url = "https://xxx.tar.gz",
                sha256 = "xxx",
            },
        },
        macosx = {
            -- [!code focus]
            deps = { "python" }, -- macosx系统额外需要的依赖
            ["0.0.1"] = { },
        },
        -- ...
    },
}
```

::: warning 依赖声明与包复用

依赖声明机制, 提高了"包"的复用性, 也让编写新的包文件时变得简单。

例如: 

- 你把一个脚本或环境配置组合, 写成一个xpkg包. 他就具备了模块化和可复用性
- 在其他包中可以通过依赖声明, 让他来完成相关的工作

:::

## 2 编写xpkg的hooks域

在hooks域中, 你可以像写lua脚本一些编写hooks函数

### 2.1 xlings命令和hooks对应关系

- **xlings install**: installed ?-> [install -> config]
- **xlings remove**: uninstall

### 2.2 libxpkg标准库

在hooks中使用`libxpkg`可以在hooks函数执行中<mark>获取运行时信息</mark>。例如: 当前安装的版本、资源文件位置、目标安装目录

```lua
import("xim.libxpkg.pkginfo") -- 用户请求的包信息
import("xim.libxpkg.xvm") -- 多版本管理器api
import("xim.libxpkg.log") -- 打印log
```

::: tip libxpkg api

更多libxpkg模块api的使用介绍 -> [libxpkg手册](/documents/libxpkg/intro.md)

:::

### 2.3 必须实现的hooks

**install**

一般在这个函数里面做一些构建工作, 以及把构建产物(如: 库或二进制文件)安装到目标位置. 对于预构建包则可以直接移动文件到指定的安装目录: `pkginfo.install_dir()`

```lua
function install()
    -- 如果是单可执行文件
    os.mv(pkginfo.install_file(), pkginfo.install_dir())

    -- 也可以使用命令从源码构建
    --system.exec("cd sourcedir")
    --system.exec("make -j4")

    return true
end
```

**uninstall**

一般在这个函数里面做一些卸载的工作, 以及一些缓存文件的清理等

```lua
function uninstall()
    -- 注销版本信息
    xvm.remove()

    -- 删除缓存文件
    os.tryrm(file)

    return true
end
```

### 2.3 可选实现的hooks

**installed**

当需要自己实现 包有没有安装的判断逻辑时, 可以实现这个函数对工具提供的默认版本进行覆盖。

其中默认版本只对使用`xvm`机制的包生效, 其实现逻辑如下:

```lua
function installed()
    local installed_version_list = os.iorun("xvm list ", pkginfo.name())
    if string.find(installed_version_list, pkginfo.version()) then
        return true
    else
        return false
    end
end
```

**config**

通过如果包在构建并安装后, 还需要进行额外配置的部分推荐实现在这个函数中。例如: xvm模块的信息注册、环境变量配置等等

```lua
function config()

    local config = {
        -- ...
    }

    xvm.add("mytool", config)

    -- ...

    return true
end
```

::: warning

每个hooks函数必须明确返回false 或 true。当返回false会代码运行中发生异常时, 工具包管理模块的执行器会捕获异常并输出, 然后终止运行

:::