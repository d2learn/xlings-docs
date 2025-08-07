# 问题处理和bug修复

## 处理社区中反馈的问题

社区中的用户会反馈一些遇到的问题和Bug, 可以在下面的链接找到自己熟悉或感兴趣的问题进行研究处理

- [项目issues列表](https://github.com/d2learn/xlings/issues)
- [项目论坛版块](https://forum.d2learn.org/category/9/xlings)

## 提交Bugfix

在上述的问题中, 存在部分问题是项目的Bug, 可以在研究处理后提交PR申请合入修复代码到主线分支

- fork项目
- clone项目到本地, 并修改代码
- 本地验证/测试是否解决问题及符合预期
- 提交修复到fork的项目
- 发起合入上游仓库的PR请求

## commit格式规范

推荐使用`-s`自动生成签名信息

```bash
git commit -s
```

```bash
模块: 简要概述

- #1 issues号引用或社区问题链接追踪

1.更详细的说明
2.更详细的说明
...

邮箱签名
```

示例 - [commit](https://github.com/d2learn/xlings/commit/83418817c2c1619f14714a87235967240fd0bd13)

```bash
xim: optimize detect for system version

- #104

1. add detect type(*.cmd and *.bat) for windows platform
2. optimize pkginfo set, avoid clear failed

Signed-off-by: sunrisepeak <speakshen@163.com>

```