# 📦 模块：`xvm`

`xvm` 模块用于管理包的多版本配置，通过封装对 `xvm` 命令的调用，实现添加版本、切换使用版本、以及移除版本等功能。支持设定别名、环境变量等参数。对于支持多版本共存的包, 必须把版本信息注册到xvm模块

```lua
import("xim.libxpkg.xvm")
```

## 📑 函数概览

| 函数名 | 描述 |
|--------|------|
| `xvm.add(name, config)` | 添加当前包（或指定包）的版本信息到 `xvm` |
| `xvm.use(name, version)` | 切换使用指定版本的包 |
| `xvm.remove(name, version)` | 移除指定版本的包 |

## 🧩 接口详情

### `xvm.add(name, config)`

向 `xvm` 注册一个包及其版本信息。

- **参数：**
  - `name` *(string, 可选)*：包名，默认为当前运行包名
  - `config` *(table, 可选)*：配置表，字段如下：

    | 字段名 | 类型 | 描述 |
    |--------|------|------|
    | `version` | string | 包的版本号，默认取当前运行版本 |
    | `bindir` | string | 可执行文件目录，默认取当前包安装目录 |
    | `alias` | string | 可选别名，如 `cmd` |
    | `envs` | table | 环境变量键值对，如 `{ PATH = "/my/bin" }` |

- **行为：**
  - 自动构建 `xvm add` 命令并执行
  - 如果启用了全局安装（`input_args.enable_global = true`）并运行在 Linux 上，会尝试创建 `/usr/bin/<name>` 符号链接
  - 符号链接通过 `sudo` 创建，依赖 `privilege.sudo`

**示例：**
```lua
xvm.add("mytool", {
    version = "1.0.0",
    bindir = "/opt/mytool/bin",
    alias = "mt",
    envs = {
        PATH = "/opt/mytool/bin"
    }
})
```

---

### `xvm.use(name, version)`

切换当前使用的包版本。

- **参数：**
  - `name` *(string, 可选)*：包名，默认取当前包名
  - `version` *(string, 可选)*：版本号，默认取当前包版本

- **行为：**
  - 构建 `xvm use <name> <version>` 命令行并执行

**示例：**
```lua
xvm.use("mytool", "1.2.0")
```

---

### `xvm.remove(name, version)`

移除指定版本的包。

- **参数：**
  - `name` *(string, 可选)*：包名，默认取当前包名
  - `version` *(string, 可选)*：版本号，默认取当前包版本

- **行为：**
  - 执行 `xvm remove <name> <version>`
  - 当前未实现符号链接移除（TODO）

**示例：**
```lua
xvm.remove("mytool", "1.0.0")
```

## 🔧 附加说明

- 依赖模块：
  - `xim.libxpkg.pkginfo`：获取当前包信息（如版本、安装目录）
  - `xim.libxpkg.system`：用于获取 `system.bindir()` 等路径信息

- 在 Linux 上启用 `enable_global` 时会尝试使用 `ln -s` 创建 `/usr/bin/<name>` 链接。

## 📌 示例用法

```lua
-- 添加当前包为可用版本
xvm.add()

-- 添加指定版本和别名, 例如实际bin执行文件为mytool-13
xvm.add("mytool", {
    version = "2.0.0",
    alias = "mytool-13",
    envs = {
        PATH = "/opt/mytool/bin"
    }
})

-- 切换使用指定版本
xvm.use("mytool", "2.0.0")

-- 移除版本
xvm.remove("mytool", "1.0.0")
```