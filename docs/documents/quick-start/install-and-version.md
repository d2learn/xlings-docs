# 软件安装及多版本管理

> 支持**多版本共存**的包管理 - 不仅支持软件/工具安装、还支持**环境配置**

## 软件安装

应用软件

```bash
xlings install vscode
```

教程项目

```bash
xlings install d2x:mcpp-standard
```

安装配置项

```bash
xlings install config:xxx
```

## 多版本管理

安装指定版本

```bash
xlings install python@3.13
xlings isntall python@3.8
```

切换版本

```bash
xlings use python 3.8
```

卸载指定版本

```bash
xlings remove python@3.8
```

::: tip
如果3.8为当前版本, 卸载后会自动切换到其他已经安装的版本. 例如: 3.13
:::