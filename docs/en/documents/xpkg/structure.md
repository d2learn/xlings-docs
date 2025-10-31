# xpkg File Structure

xpkg is a Lua script used to describe the basic information of xlings software packages, as well as their installation and uninstallation actions.

```lua{2-4,7-21}
-- Description area
package = {
    --...
}

-- Hooks area
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

## Structure Explanation

> xpkg files can be divided into two areas: one is the package information description area, and the other is the corresponding hooks function implementation area

- `package`: Package information description area
  - Basic information
    - `name`: Package name, generally consistent with the file name
    - `description`: Basic introduction of the corresponding package
    - `authors`: Author or organization of the package/software
    - `homepages`(optional): Can be filled for tools with official software
    - `licenses`(optional): Open source license
    - `repo`(optional): Corresponding open source repository
  - Package attribute information
    - `type`: Package type, common: package, app, config, courses, lib, plugin, script
    - `namespace`: Used to isolate package names and prevent naming conflicts
  - `xpm`: Package version and resource description area
    - `System fields`: windows, macosx, linux and their distributions
      - `Version information`: Format is `["0.0.0"] = { url = "xxx", sha256 = "xxx" }`, url and sha256 are optional
- `hooks`: Function implementations to be executed for specific actions
  - `installed`(optional): Implementation of logic to determine if the package is installed
  - `install`: Implementation of package installation logic
  - `config`(optional): Implementation of package-related configuration logic after installation
  - `uninstall`: Specific implementation of package uninstallation, generally used for cleaning additional configuration items and data

## Package File Examples

- `xpackage`: Minimal structure of package file
- `mdbook`: A real mdbook package file implementation

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

    xvm.add("xpackage", config)

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