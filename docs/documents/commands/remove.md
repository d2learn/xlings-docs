# xlings remove

通过命令可以卸载指定的xpkg包

## 命令模板解释

```bash
xlings remove [pkgname][@version]
```

- `pkgname`: xpkg包名 - 软件、环境配置、教程项目...
- `@version`(可选项): version为要切换的版本号(需是已安装的版本)

## 使用示例 - 卸载python

### 卸载当前使用的版本

```bash
xlings remove python
```

### 卸载指定的版本

```bash
xlings remove python@3.10
```

::: tip
示例前提需已经安装多个python版本 (如已存在多个版本可忽略)
```bash
xlings install python@3.8
xlings install python@3.10
xlings install python@3.12
```
:::