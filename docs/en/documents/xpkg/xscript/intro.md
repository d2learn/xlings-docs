# Writing XScript

xscript is both an xpkg package and a cross-platform Lua script

When an xpkg package's `type` field is identified as script, and there is an `xpkg_main` entry point in the script, xlings will enable the reuse mechanism. And when xscript is installed by xlings, it will create a binary executable file with the same name to call this script.

## Dual Perspective/Reuse Mechanism

- Perspective 1 - Package Manager/xpkg: Installation/uninstallation and version switching - can be managed and distributed by xlings - **Natural attribute**
- Perspective 2 - Program: After installation, a binary program will be generated using the package name and can be used as a normal program

## Features

- Basic Lua syntax
- <mark>Naturally has [xpkg package attributes](/en/documents/pkgmanager/intro.html), can be distributed and managed by xlings package manager</mark>
- Cross-platform + binary usage habits + multi-version coexistence and switching
- Can use libxpkg runtime library, and reuse xpkg package ecosystem
- Program entry point: xpkg_main

## Applicable Scenarios

- Cross-platform scripts/command-line tools
- Abstract packaging of commonly used command combinations
- Creation of auxiliary commands that match personal habits
- Wrapper for other tools
- And any small tool development within 1000 lines

## xscript Examples

- [xpkg-helper](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/x/xpkg-helper.lua): xpkg package export helper, can export installed xpkg packages and resources to specified folders
- [linux-sysroot-create](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/l/linux-sysroot-create.lua): sysroot creation tool, can specify linux-header and glibc versions
- [musl-cross-make](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/m/musl-cross-make.lua): musl version gcc toolchain building tool, one-click build of specified version gcc from source code
- [configure-project-installer](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/c/configure-project-installer.lua): configure-style project installer, one-click build and install from project source code to specified directory

::: tip

You can use `xlings install` to install and experience these tools

For example:

```bash
xlings install xpkg-helper
xpkg-helper
```

:::