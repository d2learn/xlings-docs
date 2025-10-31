# xpkg Package Introduction

xpkg (or xpkg package) is similar to software package description files in other package manager tools, but in the xlings tool it can not only describe a software package, but also serve as a configuration combination, plugin, script, ...

Since it is itself a Lua script file with a specific format, <mark>you can use it to describe almost anything, and then use the xlings tool to distribute and reuse it using the "package" concept</mark>

## Examples

- [vscode](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/c/code.lua): General tool software, similar to universal package managers
- [cpp](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/c/cpp.lua): Programming language and development environment, one-click installation and configuration of corresponding toolchain according to different platforms
- [mcpp-standard](https://github.com/d2learn/xim-pkgindex-d2x/blob/main/pkgs/m/mcpp-standard.lua): A mcpp-standard tutorial project distributed using the "package" concept
- [gitcode-hosts](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/g/gitcode-hosts.lua): IP mapping group hosts configuration for websites, supporting installation and uninstallation