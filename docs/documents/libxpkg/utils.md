# 🧭 模块：`utils`

一个集合常用工具方法的模块，提供路径规范化与存在性检查、受控下载并校验、以及命令行参数解析的便捷封装，适用于 xlings/xim 生态脚本。

```lua
import("xim.libxpkg.utils")
```

## 📑 函数概览

| 函数名 | 描述 |
|--------|------|
| `utils.filepath_to_absolute(filepath)` | 将文件路径转换为绝对路径，并检查目标是否存在（普通文件） |
| `utils.try_download_and_check(url, dir, sha256)` | 下载指定 URL 至目录并进行 SHA256 校验 |
| `utils.input_args_process(cmds_kv, args)` | 解析并规范化命令行参数（键值映射） |

## 🧩 接口详情

### `utils.filepath_to_absolute(filepath)`

将传入路径转换为绝对路径；若为相对路径，则以 `system.rundir()` 为基准进行拼接。函数同时返回该路径是否存在且为普通文件。

- 参数：
    - `filepath` (string)：原始文件路径，可为相对或绝对路径

- 返回：
    - `(exists, abs_path)`：
    - `exists` (boolean)：是否存在且为普通文件
    - `abs_path` (string)：归一化后的绝对路径

- 行为说明：
    - 不抛出异常；即便文件不存在，也返回 `false, <绝对路径>`，便于调用方决定后续处理。

- 示例：
```lua
local ok, abs = utils.filepath_to_absolute("data/config.json")
```

---

### `utils.try_download_and_check(url, dir, sha256)`

下载指定资源到目标目录并进行 SHA256 校验。

- 参数：
    - `url` (string)：下载地址
    - `dir` (string)：保存目录
    - `sha256` (string)：期望的 SHA256 校验和（可选）

- 返回：
    - `status` (boolean): 状态
    - `filename` (string): 文件路径

- 典型用法：
```lua
local ok, fname = utils.try_download_and_check(
    "https://example.com/pkg.tar.gz",
    "yourDir",
    -- sha256 可省略
    "f5d1278e8109edd..."
)
```

---

### `utils.input_args_process(cmds_kv, args)`

对命令行输入进行解析与规范化，将参数映射到预定义的键值结构。

- 参数：
    - `cmds_kv` (table)：命令定义的键值映射表，用于描述可接受的参数及其别名、类型、默认值等
    - `args` (table)：原始参数数组或命令行字符串

- 返回：
    - `cmds` (table)：解析后的参数表，值为对应的解析结果

- 示例：
```lua
local __xscript_input = {
    ["--force"] = false,
    ["--output"] = false,
}

local _, cmds = utils.input_args_process(
    __xscript_input,
    { "--force", "--output", "myOutputPath" }
)
```