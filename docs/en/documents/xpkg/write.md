# Writing xpkg

Before writing an xpkg package, you can first understand the [xpkg file structure](./structure.md). In addition to the specific structure, you can use Lua syntax to implement hooks functions.

::: details xpkg package file reference template

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

::: warning More xpkg package files for reference

- [mdbook.lua](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/m/mdbook.lua): Binary command-line tool type
- [code.lua](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/c/code.lua): Cross-platform graphical tool software type
- [gitcode-hosts](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/g/gitcode-hosts.lua): Environment configuration type
- More reference package files see -> [xim-pkgindex](https://github.com/d2learn/xim-pkgindex)

:::

## 1 Writing xpkg description area

### 1.1 Basic information

Fill in the basic information of the package, this information will be displayed when users install

- Required fields: `name`, `description`, `authors`, `type`, `namespace`
- Recommended fields: `licenses`, `repo`, `keywords`

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

### 1.2 xpm platform support and resource description

In `xpm`, you can add supported platforms and corresponding version numbers and resource information. For Linux distributions, xlings adopts a priority matching principle. For example: on Ubuntu systems, the matching order is ubuntu -> debian -> linux, meaning versions filled in linux will take effect on all computers.

Resource information corresponding to each version is optional. If a url resource is filled in, the xlings tool will automatically download the resource before executing the `install` function. If it's a compressed package, it will be automatically extracted. In hooks, you can get resource location information through the `libxpkg` library api. If no additional resources need to be downloaded, just leave `{ }`.

Supported url format types:

- Compressed package format: Those ending with .zip, .tar.gz, .tar.xz will be automatically extracted
- Repository format: Those ending with *.git will automatically pull the repository locally

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

### 1.3 Dependency declaration and automatic handling

In `xpm`, you can declare dependencies required during installation. The xlings tool will automatically detect dependent packages before executing hooks functions, and if they don't exist, it will first install the corresponding dependencies.

- `deps` specified at the system level are common dependencies for multiple platforms
- `deps` specified within the system level are additional dependencies for that platform

```lua
package = {
    name = "xpackage",
    --...

    xpm = {
        -- [!code focus]
        deps = { "nodejs", "cmake@4.0" }, -- Platform common dependencies
        linux = {
            ["0.0.1"] = {
                url = "https://xxx.tar.gz",
                sha256 = "xxx",
            },
        },
        macosx = {
            -- [!code focus]
            deps = { "python" }, -- Additional dependencies required for macosx system
            ["0.0.1"] = { },
        },
        -- ...
    },
}
```

::: warning Dependency declaration and package reuse

The dependency declaration mechanism improves the reusability of "packages" and makes writing new package files simpler.

For example:

- You write a script or environment configuration combination as an xpkg package. It then has modularity and reusability
- In other packages, you can use dependency declaration to have it complete related work

:::

## 2 Writing xpkg hooks area

In the hooks area, you can write hooks functions like writing Lua scripts.

### 2.1 xlings commands and hooks correspondence

- **xlings install**: installed ?-> [install -> config]
- **xlings remove**: uninstall

### 2.2 libxpkg standard library

Using `libxpkg` in hooks allows you to <mark>get runtime information</mark> during hooks function execution. For example: currently installed version, resource file location, target installation directory.

```lua
import("xim.libxpkg.pkginfo") -- Package information requested by user
import("xim.libxpkg.xvm") -- Multi-version manager api
import("xim.libxpkg.log") -- Print log
```

::: tip libxpkg api

More libxpkg module api usage introduction -> [libxpkg manual](/en/documents/libxpkg/intro.md)

:::

### 2.3 Required hooks

**install**

Generally, in this function, you do some building work and install the build products (such as: libraries or binary files) to the target location. For pre-built packages, you can directly move files to the specified installation directory: `pkginfo.install_dir()`

```lua
function install()
    -- If it's a single executable file
    os.mv(pkginfo.install_file(), pkginfo.install_dir())

    -- You can also build from source using commands
    --system.exec("cd sourcedir")
    --system.exec("make -j4")

    return true
end
```

**uninstall**

Generally, in this function, you do some uninstallation work and clean up some cache files, etc.

```lua
function uninstall()
    -- Deregister version information
    xvm.remove()

    -- Delete cache files
    os.tryrm(file)

    return true
end
```

### 2.3 Optional hooks

**installed**

When you need to implement your own logic to determine whether the package is installed, you can implement this function to override the default version provided by the tool.

The default version only takes effect for packages using the `xvm` mechanism, and its implementation logic is as follows:

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

If the package needs additional configuration after building and installation, it is recommended to implement it in this function. For example: xvm module information registration, environment variable configuration, etc.

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

Each hooks function must explicitly return false or true. When returning false or when an exception occurs during code execution, the tool package management module executor will catch the exception and output it, then terminate execution.

:::