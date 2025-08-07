# xpkg文件结构

xpkg是用来描述xlings软件包的基本信息, 及其安装和卸载动作的lua脚本

```lua{2-4,7-21}
-- 描述区域
package = {
    --...
}

-- hooks区域
function installed()
    -- ...
end

function install()
    -- ...
end

function config()
    -- ...
end

function uninstall()
    -- ...
end

```

## 结构说明

> xpkg文件可以分成两个区域, 一个是包信息描述区, 另一个是对应hooks函数实现区域

- `package`: 包信息描述区
  - 基础信息
    - `name`: 包名字, 一般和文件明保持一致
    - `description`: 对应包的基础简介
    - `authors`: 包/软件的作者或所属组织
    - `homepages`(可选): 对于有官方软件的工具工具可以填写
    - `licenses`(可选): 开源协议
    - `repo`(可选): 对应的开源仓库
  - 包的属性信息
    - `type`: 包的类型, 常见: package, app, config, courses, lib, plugin, script
    - `namespace`: 用来隔离包名, 防止命名重复
  - `xpm`: 包版本和资源描述区域
    - `系统字段`: windows、macosx、linux及其发行版本
      - `版本信息`: 格式是`["0.0.0"] = { url = "xxx", sha256 = "xxx" }`, url和sha256是可选的
- `hooks`: 在特定动作对应要执行的函数实现
  - `installed`(可选): 包是否安装的判断逻辑实现
  - `install`: 包的安装逻辑实现
  - `config`(可选): 安装后的和包相关的配置逻辑实现
  - `uninstall`: 卸载包的具体实现, 一般用于清理而外的配置项和数据

## 包文件示例

- `xpakcage`: 包文件的最简结构
- `mdbook`: 一个真实的mdbook包文件实现

::: code-group

```lua [xpackage]
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
        ubuntu = { ref = "linux" },
        archlinux = { ref = "linux" },
        manjaro = { ref = "linux" },
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

```lua [mdbook]
package = {
    -- base info
    name = "mdbook",
    description = "Create book from markdown files. Like Gitbook but implemented in Rust",

    authors = "Mathieu David, Michael-F-Bryan, Matt Ickstadt",
    contributors = "https://github.com/rust-lang/mdBook/graphs/contributors",
    licenses = "MPL-2.0",
    repo = "https://github.com/rust-lang/mdBook",
    docs = "https://rust-lang.github.io/mdBook",

    -- xim pkg info
    type = "package",
    archs = {"x86_64"},
    status = "stable", -- dev, stable, deprecated
    categories = {"book", "markdown"},
    keywords = {"book", "gitbook", "rustbook", "markdown"},

    -- xvm: xlings version management
    xvm_enable = true,

    xpm = {
        windows = {
            ["latest"] = { ref = "0.4.40" },
            ["0.4.43"] = {
                url = "https://github.com/rust-lang/mdBook/releases/download/v0.4.43/mdbook-v0.4.43-x86_64-pc-windows-msvc.zip",
                sha256 = nil
            },
            ["0.4.40"] = {
                url = "https://gitee.com/sunrisepeak/xlings-pkg/releases/download/mdbook/mdbook-v0.4.40-x86_64-pc-windows-msvc.zip",
                sha256 = nil
            },
        },
        linux = {
            ["latest"] = { ref = "0.4.43" },
            ["0.4.43"] = "XLINGS_RES",
            ["0.4.40"] = {
                url = "https://github.com/rust-lang/mdBook/releases/download/v0.4.40/mdbook-v0.4.40-x86_64-unknown-linux-gnu.tar.gz",
                sha256 = "9ef07fd288ba58ff3b99d1c94e6d414d431c9a61fdb20348e5beb74b823d546b"
            },
        },
        macosx = {
            ["latest"] = { ref = "0.4.43" },
            ["0.4.43"] = "XLINGS_RES",
        },
    },
}

import("xim.libxpkg.pkginfo")

local mdbook_file = {
    windows = "mdbook.exe",
    linux = "mdbook",
    macosx = "mdbook"
}

function installed()
    return os.iorun("xvm list mdbook")
end

function install()
    return os.trymv(mdbook_file[os.host()], pkginfo.install_dir())
end

function config()
    -- config xvm
    os.exec(format(
        "xvm add mdbook %s --path %s",
        pkginfo.version(), pkginfo.install_dir()
    ))
    return true
end

function uninstall()
    os.exec("xvm remove mdbook " .. pkginfo.version())
    return true
end
```

:::