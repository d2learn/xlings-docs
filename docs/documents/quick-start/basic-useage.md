# 基本用法

### 多版本软件安装及管理

> 支持**多版本共存**的包管理 - 不仅支持软件/工具安装、还支持**环境配置**

```bash
# 配置环境
xlings install c
xlings install python
# 安装工具
xlings install devcpp
xlings install vscode

# 安装指定版本package@version和版本切换
xlings install vscode@1.93.1
xlings use vscode 1.93.1

# 卸载指定版本
xlings remove vscode@1.93.1
```

高级用法见 -> [xim-readme](https://github.com/d2learn/xlings/tree/main/core/xim) / [xvm-readme](https://github.com/d2learn/xlings/tree/main/core/xvm)

### 项目搭建

> 搭建交互式的公开课或教程项目, 支持环境自动配置、电子书、练习代码自动检测...
>
> 示例项目: [d2ds | 动手学数据结构](https://github.com/d2learn/d2ds)

```bash
# 创建项目模板 - hello教程项目
xlings new hello
cd hello
# 安装项目依赖
xlings install
# 启动自动代码检测(编译器驱动开发模式)
xlings checker
```

高级用法见 -> [d2x-readme](https://github.com/d2learn/xlings/tree/main/core/d2x)

