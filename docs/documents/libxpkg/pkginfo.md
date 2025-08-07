# 📦 模块：`pkginfo`

用于访问当前运行环境中包的基础信息，如名称、版本、安装路径等

```lua
import("xim.libxpkg.pkginfo")
```

## 📑 函数概览

| 函数名 | 描述 |
|--------|------|
| `pkginfo.name()` | 获取当前包的名称 |
| `pkginfo.version()` | 获取当前包的版本号 |
| `pkginfo.install_file()` | 获取当前包的安装文件路径 |
| `pkginfo.install_dir()` | 获取当前包的安装目录路径 |

## 🧩 接口详情

### `pkginfo.name()`

返回当前包的名称。

- **返回值：**
  - *(string)* 包名

**示例：**
```lua
print(pkginfo.name())  -- 输出例如 "mytool"
```

---

### `pkginfo.version()`

返回当前包的版本号。

- **返回值：**
  - *(string)* 版本号

**示例：**
```lua
print(pkginfo.version())  -- 输出例如 "1.2.3"
```

---

### `pkginfo.install_file()`

返回当前包的安装或资源文件路径（通常是 `.pkg` 或 `.zip` 安装文件的路径）。

- **返回值：**
  - *(string)* 安装文件完整路径

**示例：**
```lua
print(pkginfo.install_file())  -- 输出例如 "/home/.../.xlings_data/xim/pkgname.zip"
```

---

### `pkginfo.install_dir()`

返回当前包的期望的安装目录。每个版本的安装目录不一样, 可以做到隔离

- **返回值：**
  - *(string)* 安装目录路径

**示例：**
```lua
print(pkginfo.install_dir())  -- 输出例如 "/home/.../xpkg/packages/version"
```


## 🔧 附加说明

- 所有函数都通过 `runtime.get_pkginfo()` 获取元信息。
- 本模块是只读的，用于查询包状态，不会进行写操作。


## 📌 示例用法

```lua
print("当前包名: " .. pkginfo.name())
print("版本号: " .. pkginfo.version())
print("安装文件: " .. pkginfo.install_file())
print("安装目录: " .. pkginfo.install_dir())
```