# 添加xpkg到官方索引仓库

## 步骤

- 第一步: 通过[Add XPackage](https://github.com/d2learn/xim-pkgindex/issues/new/choose)创建issues并填写基础信息
- 第二步: 参考[xpkg包编写文档](/documents/xpkg/write.md), 编写`pkgname.lua`文件
- 第三步: 参考[xpkg的使用和测试文档](/documents/xpkg/useage.md), 在本地完成基础测试和验证
- 第四步: [fork项目](https://github.com/d2learn/xim-pkgindex/fork), 并把包文件放到`pkgs`目录下的对应位置
- 第五步: 发起合入Pull-Request, 把PR地址补充到问题里并在评论区[@项目维护人员](/documents/community/projects_and_contributors.md)
- 第六步: TODO (reviewer本地验证&approval)

::: tip
- 可以从你开发/喜欢/熟悉的工具软件或一些环境的配置开始, 添加他们到[XIM的包索引仓库](https://github.com/d2learn/xim-pkgindex)中, 让更多人能一键下载安装和配置环境
- 如果PR长时间没有人回复, 可以把PR链接分享到[社区的交流群](/documents/community/discussion_and_forum.md)中, 提醒项目(模块)维护者
:::

## 更新最新包索引

> 成功合入包索引仓库后, xlings用户执行下面命令即可获取和使用

```
xim --update index
```