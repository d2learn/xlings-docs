# libxpkg Introduction

libxpkg is a set of standard libraries that help with writing [xpkg package files](/en/documents/xpkg/intro.md). Using it allows convenient access to xlings runtime information and implementation of multi-version coexistence.

## Main Goals

- Cross-platform and portability, improving compatibility of xpkg package files
- Provide easy-to-use interfaces for obtaining runtime information
- Interfaces related to xlings tool modules
- Some convenient functional modules for xpkg writing

## Module Introduction

| Module | Description |
| --- | --- |
| [xim.libxpkg.pkginfo](/en/documents/libxpkg/pkginfo.md) | Get runtime package information |
| [xim.libxpkg.xvm](/en/documents/libxpkg/xvm.md) | Multi-version manager API |
| [xim.libxpkg.system](/en/documents/libxpkg/system.md) | Get runtime-related system information and some system tools |
| [xim.libxpkg.log](/en/documents/libxpkg/log.md) | Log printing module |
| [xim.libxpkg.pkgmanager](/en/documents/libxpkg/pkgmanager.md) | Package management module, providing installation and uninstallation dependency interfaces |

## Usage Example

```lua
package = {
    -- ...
}

-- [!code focus:3]
-- Import related modules
import("xim.libxpkg.pkginfo")
import("xim.libxpkg.log")

-- ...

function install()

    -- [!code focus:4]
    -- Use API to print the version of the currently requested installation package, and its expected installation directory
    log.warn("this is a debug...")
    log.info("version: %s", pkginfo.version())
    log.info("installdir: %s", pkginfo.install_dir())

    return true
end

--- ...

```

::: warning libxpkg source code implementation

- https://github.com/d2learn/xlings/tree/main/core/xim/libxpkg

:::