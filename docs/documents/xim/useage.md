# 高级用法

## 命令行参数

```bash
用法: $ xim [命令] [目标]

命令列表:
  -i,   install,   安装软件包或环境
  -r,   remove,    移除软件包或环境
  -u,   update,    更新软件包或环境
  -l,   list,      列出所有已安装的软件包或环境
  -s,   search,    搜索软件包
  -h,   help,      显示帮助信息

系统命令:
  --detect,        检测本地软件包
  --update,        更新 [self | index]
  --add-xpkg,      添加 xpkg 文件到索引数据库
  --xpkg-args,     xpkg 参数
  --add-indexrepo, 添加 indexrepo 到索引仓库管理器
  --disable-info,  关闭信息显示

示例:
  xim vscode     -- 安装 vscode
  xim -r vscode  -- 卸载 vscode
  xim -l         -- 列出所有已安装软件包
  xim -s code    -- 搜索包含 'code' 的软件包
```

## 用法示例

### 添加自定义包

```bash
xim --add-xpkg yourPath/xxx.lua
```

::: tip
支持本地包文件和网络包文件
:::

### 添加自定义包索引仓库

```bash
xim --add-indexrepo namespace:https://xxx.git
```

- `namespace`: 为自定义的包的前缀命令空间
- `https://xxx.git`: 为包索引仓库的地址

### 更新包索引

```bash
xim --update index
```

### 查询已安装的包

```bash
xim -l pkgname
```

- `pkgname`: 为包名, 且支持模糊匹配