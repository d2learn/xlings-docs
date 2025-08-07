# 📦 模块：`system`

`system` 模块是 `xim.libxpkg` 的一部分，提供运行相关路径获取、命令执行（带重试机制）、Shell 配置环境注入等功能。

```lua
import("xim.libxpkg.system")
```

## 📑 函数概览

| 函数名 | 描述 |
|--------|------|
| `system.xpkg_args()` | 获取当前运行时传入的 `--sysxpkg-args` 参数 |
| `system.rundir()` | 获取当前运行目录 |
| `system.bindir()` | 获取当前运行环境的 bin 目录 |
| `system.exec(cmd, opt)` | 执行系统命令（支持重试） |
| `system.unix_api()` | 获取适用于 Unix 系统的操作 API（例如配置 shell profile） |

## 🧩 接口详情

### `system.xpkg_args()`

返回当前运行时传入的 `sysxpkg_args` 参数。

- **返回值：**
  - *(table)* 命令行参数表

**示例：**
```lua
--- 例如命令行运行了 xlings install pkgname --xpkg-args "1, 2, 3"
local args = system.xpkg_args()
if args then
    print(args) -- 1, 2, 3
end
```

---

### `system.rundir()`

获取当前运行目录。

- **返回值：**
  - *(string)* 路径字符串

**示例：**
```lua
print("运行目录: " .. system.rundir())
```

---

### `system.bindir()`

获取当前运行环境的 `bin` 目录路径。

- **返回值：**
  - *(string)* 路径字符串

**示例：**
```lua
print("可执行文件目录: " .. system.bindir())
```

---

### `system.exec(cmd, opt)`

执行系统命令，可配置重试机制。

- **参数：**
  - `cmd` *(string)*：要执行的命令
  - `opt` *(table, 可选)*：可选参数表
    - `retry` *(number)*：失败时最大重试次数

- **行为：**
  - 若设置了 `retry`，当执行失败时会自动重试，直到成功或次数用尽
  - 每次失败会输出异常并打印重试日志

**示例：**
```lua
system.exec("make", { retry = 3 })
```

---

### `system.unix_api()`

返回一个包含 Unix 平台相关 API 的表，目前包含：

- `append_to_shell_profile(config)`

**返回值：**
```lua
{
    append_to_shell_profile = function
}
```

**示例：**
```lua
local unix = system.unix_api()
unix.append_to_shell_profile({
    posix = 'export PATH="/my/bin:$PATH"',
    fish  = 'set -gx PATH /my/bin $PATH'
})
```

## 🔧 附加说明

- 依赖模块：
  - `xim.libxpkg.log`：用于日志输出（支持彩色日志）
- 支持 POSIX 和 Fish Shell 的 profile 自动配置

## 📌 示例用法

```lua
-- 获取命令行参数
local args = system.xpkg_args()

-- 执行命令，失败重试 3 次
system.exec("make", { retry = 3 })

-- 追加环境变量到 shell 启动文件
local unix = system.unix_api()
unix.append_to_shell_profile({
    posix = 'export PATH="/opt/tools:$PATH"',
    fish  = 'set -gx PATH /opt/tools $PATH'
})
```