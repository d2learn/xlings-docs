# Lua 基本语法

Lua 编程中最常用的基础语法，包括变量、表、控制结构、循环、字符串等内容。

```
-- 单行注释

--[[ 多行注释

]]
```

## 🔹 1. 变量

```lua
-- 全局变量（默认）
x = 10

-- 局部变量
local y = 20

-- 多变量赋值
a, b, c = 1, 2, 3

-- 交换变量
a, b = b, a
```

## 🔹 2. 表（Table）

表是 Lua 中唯一的数据结构，既可作为数组，也可作为字典。

```lua
-- 数组风格
local numbers = {10, 20, 30}
print(numbers[1])  -- 输出 10（Lua 索引从 1 开始）

-- 字典风格
local person = {
    name = "Alice",
    age = 25
}
print(person.name)  -- 输出 Alice

-- 添加字段
person.gender = "female"

-- 嵌套表
local config = {
    window = {
        width = 800,
        height = 600
    }
}
```

## 🔹 3. 控制语句（条件判断）

```lua
local score = 85

if score > 100 and score < 120 then
    print("?")
    -- return
end

if score >= 90 then
    print("优秀")
elseif score >= 60 then
    print("及格")
else
    print("不及格")
end
```

## 🔹 4. 循环语句

### while 循环

```lua
local i = 1
while i <= 5 do
    print(i)
    i = i + 1
end
```

### for 数值循环

```lua
for i = 1, 5 do
    print(i)
end

-- 步长为 2
for i = 1, 10, 2 do
    print(i)
end
```

### 泛型 for（遍历表）

```lua
local fruits = {"apple", "banana", "cherry"}

-- ipairs: 顺序索引
for i, v in ipairs(fruits) do
    print(i, v)
end

-- pairs: 任意键值对
local person = {name = "Tom", age = 30}
for k, v in pairs(person) do
    print(k, v)
end
```

## 🔹 5. 字符串操作

```lua
local s = "hello"

-- 拼接字符串
local name = "Lua"
print("Hello, " .. name)

-- 字符串长度
print(#s)  -- 输出 5

-- 格式化字符串
print(string.format("Pi = %.2f", 3.14159))

-- 查找子串
local found = string.find("hello world", "world")  -- 返回起止位置

-- 替换
local result = string.gsub("Lua is great", "great", "awesome")
print(result)  -- 输出 Lua is awesome

-- 子串截取
local part = string.sub("abcdefg", 2, 4)  -- 输出 bcd
```

## 📌 附加说明

- Lua 中没有 `++` / `--` 操作符
- 所有控制结构都以 `end` 结尾
- `nil` 表示空值，`false` 和 `nil` 被视为“假”，其他都为“真”

## 文件操作

| 函数名 | 描述 |
|--------|------|
| `os.cd(dir)` | 切换到目录 |
| `os.mv(file1, file2)` | 移动或重命名文件 |
| `os.tryrm(file)` | 尝试删除文件 |
| `os.isdir(filePath)` | 判断是否存在并为目录 |
| `os.isfile(filePath)` | 判断是否存在并为文件 |