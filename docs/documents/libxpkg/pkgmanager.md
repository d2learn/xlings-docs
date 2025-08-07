# 📦 模块：`pkgmanager`

`pkgmanager` 模块封装了对xlings中 `xim`模块 的调用，用于简化安装、移除、卸载包的操作。通常用于脚本化地控制包的生命周期。

```lua
import("xim.libxpkg.pkgmanager")
```

## 📑 函数概览

| 函数名 | 描述 |
|--------|------|
| `pkgmanager.install(target)` | 安装指定包 |
| `pkgmanager.remove(target)` | 移除指定包 |

## 🧩 接口详情

### `pkgmanager.install(target)`

安装目标包。

- **参数：**
  - `target` *(string)*：包名称或路径

- **行为：**
  - 调用命令：
    ```
    xlings install <target> -y --disable-info
    ```

**示例：**
```lua
pkgmanager.install("mytool")
```

---

### `pkgmanager.remove(target)`

移除目标包。

- **参数：**
  - `target` *(string)*：包名称

- **行为：**
  - 调用命令：
    ```
    xlings remove <target> -y --disable-info
    ```

**示例：**
```lua
pkgmanager.remove("mytool")
```

## 🔧 附加说明

- 默认使用 `-y` 标志以跳过交互确认
- 默认使用 `--disable-info` 参数避免输出详细信息

## 📌 示例用法

```lua
-- 安装包
pkgmanager.install("mytool")
-- 安装指定版本的包
pkgmanager.install("mytool@0.0.1")

-- 移除包
pkgmanager.remove("mytool")
```