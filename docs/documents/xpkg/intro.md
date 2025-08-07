# xpkg包介绍

xpkg(或xpkg包)是类似其他包管理器工具中的软件包描述文件的东西, 但在xlings工具中他不仅仅可以描述一个软件包, 还可以作为一个 配置组合、插件、脚本、...

由于他本身是一个有特定格式的lua脚本文件, 所以<mark>你几乎可以用他来描述任何事情, 然后以"包"的概念使用xlings工具进行分发和复用</mark>

## 示例

- [vscode](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/c/code.lua): 一般工具软件, 类似通用包管理器
- [cpp](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/c/cpp.lua): 编程语言和开发环境, 根据不同平台一键安装并配置对应工具链
- [mcpp-standard](https://github.com/d2learn/xim-pkgindex-d2x/blob/main/pkgs/m/mcpp-standard.lua): 一个mcpp-standard教程项目以"包"的概念进行分发
- [gitcode-hosts](https://github.com/d2learn/xim-pkgindex/blob/main/pkgs/g/gitcode-hosts.lua): 网站的ip映射组hosts的配置, 支持安装和卸载