# xlings use

通过命令可以查看已经安装软件的所有版本, 或切换到指定版本

## 命令模板解释

```bash
xlings use [pkgname] [version]
```

- `pkgname`: xpkg包名 - 软件、环境配置、教程项目...
- `version`(可选项): version为要切换的版本号(需是已安装的版本)

## 使用示例 - 查看所有已经安装的python版本并切换到3.10

### 查看已经安装的版本列表

```bash
xlings use python
```

```bash
xlings use python
```

::: tip

- 安装多个python版本 (如已存在多个版本可忽略)
```bash
xlings install python@3.8
xlings install python@3.10
xlings install python@3.12
```
- 其中高亮的版本号, 为当前使用的版本
:::

### 切换到python3.10版本

```bash
xlings use python 3.10
```