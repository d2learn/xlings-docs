# 去中心化的包索引生态

xlings支持去中心化的包索引仓库以及对应的资源服务器, 即<mark>每个人和组织(社区/公司/..)都可以快速搭建一套自己的软件生态, 用于在内部或公开区域进行共享分发和复用</mark>

**xlings**本身是一个开源的包管理工具, **支持多版本共存和管理 + 万物皆可成包的设计理念**, 他<mark>本身并不持有和控制包索引和包资源, 而只做包索引的建立和管理, 以及[xpkg包](https://xlings.d2learn.org/documents/xpkg/intro.html)的执行器</mark>

一些可能的应用场景

- 个人软件/脚本工具/库/配置的管理及分发
- 开源社区的软件生态管理和分发
- 公司内部的软件版本, 开发环境管理及复用
- ...

::: tip

这里的包或xpkg可能是 `软件、库、脚本、插件、配置组合、环境搭建...` 等, 而不是传统的软件包的概念。例如: 这个[`xim-pkgindex-awesome`](https://github.com/d2learn/xim-pkgindex-awesome)仓库管理的"包", 就是其他的包索引仓库

:::

::: warning

这里的 去中心化 是指 [xlings软件](https://github.com/d2learn/xlings) 或 [d2learn社区](https://github.com/d2learn) 不持有或控制包索引及资源

每个人都可以自建生态, 公开或私有, 去中心化(基于分布式存储)或中心化管理是由具体的维护者决定

:::