# 📦 模块：`log`

一个彩色日志输出模块，提供 `info`, `debug`, `warn`, `error` 等函数，用于在终端输出不同级别的彩色日志，统一格式为 `[xim:xpkg]` 前缀

```lua
import("xim.libxpkg.log")
```

## 📑 函数概览

| 函数名 | 描述 |
|--------|------|
| `log.info(text, ...)` | 输出绿色信息日志 |
| `log.debug(text, ...)` | 输出亮色调试日志 |
| `log.warn(text, ...)` | 输出黄色警告日志 |
| `log.error(text, ...)` | 输出红色错误日志 |

## 🧩 接口详情

### `log.info(text, ...)`

输出绿色的信息日志。

- **参数：**
  - `text` *(string)*：要输出的日志内容
  - `...` *(any)*：可选参数，传递给 `cprint` 用于格式化输出

**示例：**
```lua
log.info("Download successful")
```

---

### `log.debug(text, ...)`

输出亮色调试日志。

- **参数：**
  - `text` *(string)*：调试信息内容
  - `...` *(any)*：可选参数

**示例：**
```lua
log.debug("Debug value: %s", tostring(val))
```

---

### `log.warn(text, ...)`

输出黄色警告日志。

- **参数：**
  - `text` *(string)*：警告内容
  - `...` *(any)*：可选参数

**示例：**
```lua
log.warn("This API is deprecated")
```

---

### `log.error(text, ...)`

输出红色错误日志。

- **参数：**
  - `text` *(string)*：错误信息
  - `...` *(any)*：可选参数

**示例：**
```lua
log.error("File not found: %s", path)
```

## 📌 示例

```lua
log.info("Hello world")
log.warn("Low disk space")
log.error("Permission denied")
log.debug("x = %d", x)
```