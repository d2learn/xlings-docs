# 常见问题

::: warning 交流或反馈问题

- 可以在[xlings交流版块](https://forum.d2learn.org/category/9/xlings)类似的问题交流贴, 如果没有找到可以重新创建一个新的

:::

## Q1: 安装xlings成功后, 但运行时报错说命令找不到

部分环境在xlings安装过后, 可能系统没有及时的刷新环境变量, 可以使用命令刷新环境(例如: bash环境的`source ~/.bashrc`)或重新打开一个控制台或cmd(会自动刷新环境), 然后重新运行`xlings -h`命令进行尝试

## Q2: 安装中依赖的xmake安装失败

部分环境在使用一键安装脚本中可能存在依赖的xmake没有安装成功或找不到, 可以用下面分两步安装的方式解决

先安装xmake

::: code-group

```bash [windows]
irm https://xmake.io/psget.text | iex
```

```bash [linux]
curl -fsSL https://xmake.io/shget.text | bash
```

:::

再刷新环境或重新打开一个命令窗口, 重新运行xlings的一键安装命令

::: code-group

```bash [windows]
irm https://d2learn.org/xlings-install.ps1.txt | iex
```

```bash [linux]
curl -fsSL https://d2learn.org/xlings-install.sh | bash
```

:::