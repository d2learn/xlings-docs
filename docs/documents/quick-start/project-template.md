# 创建项目模板

> 通过项目模板创建命令, 不仅能生成项目模板, 还能自动处理该模板项目的依赖, 并配置好环境让项目处于开箱即用的状态

```bash
xlings new [YourProjectName] --template [TempatleName]
```

## 示例: 创建cmake的c++23项目模板并构建运行

- 生成最小项目结构及工程文件
- 自动检测安装所必须的依赖
- 构建项目并运行

### 1.创建hello项目

```bash
xlings new hello --template cpp23-cmake-helloworld
```

模板创建过程

```bash
[xligns]: checking templates cache... - ok
[xlings]: create project...
[xlings]: install project dependencies...
[xlings]: start deps check and install...
---
[xlings:xim]: create pm executor for <ninja> ... 
[xlings:xim]: ninja@system - already installed
---
[xlings:xim]: create pm executor for <gcc> ... 
[xlings:xim]: gcc@apt - already installed
---
[xlings:xim]: create pm executor for <cmake> ... 
[xlings:xim]: cmake@apt - already installed
[xligns:d2x]: hello | /home/speak/test/hello
```

`hello`项目目录

```
.
├── CMakeLists.txt
├── config.xlings
├── README.md
└── src
    └── main.cpp

2 directories, 4 files
```

### 2.构建并运行项目

> 由于上面自动配置好了环境, <mark>所以可以直接进入项目目录进行构建, 而不用考虑依赖问题</mark>

```bash
mkdir build && cd build
cmake -G Ninja ..
ninja -v
./helloworld
```

也可用d2x进行构建和运行

```bash
d2x init
d2x build
d2x run
```