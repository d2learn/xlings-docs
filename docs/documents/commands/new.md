# xlings new

通过命令可以一键创建对应的模板项目, 并且会 自动安装该项目的依赖以及配置好环境, 让其能达到直接构建或运行的状态

## 命令模板解释

```bash
xlings new [projectName] --template [templateName]
```

- `projectName`: 生成的本地项目(文件夹)名
- `--template`: 目标模板项目名参考, 用于指定要生成的模板项目
- `projectName`: xlings支持的模板项目名
  - 例如: cpp-cmake-helloworld, cpp-xmake-helloworld

## 使用示例 - 创建支持c++23的cmake项目

### 创建命令

> 运行命令后, 会在当前目录下创建一个支持cpp23名为`hello`的camke项目, 并且会自动检查/安装项目的依赖

```bash
xlings new hello --template cpp-cmake-helloworld
```

```
[xligns]: checking templates cache... - ok
[xlings]: create project...
[xlings]: install project dependencies...
[xlings]: start deps check and install...
---
[xlings:xim]: create pm executor for <cmake> ... 
[xlings:xim]: cmake@4.0.2 - already installed
---
[xlings:xim]: create pm executor for <ninja> ... 
[xlings:xim]: ninja@system - already installed
---
[xlings:xim]: create pm executor for <gcc> ... 
[xlings:xim]: gcc@apt - already installed
[xligns:d2x]: hello | /home/xxx/test/hello
```

### 项目目录结构

```
.
├── CMakeLists.txt
├── config.xlings -- 项目描述文件
├── README.md
└── src
    └── main.cpp

2 directories, 4 files
```

### 查看项目构建命令

```bash
d2x
```
其中`User Commands`部分就是该项目的自定义命令
```bash
d2x version: pre-v0.0.4

Usage: $ d2x [command] [target]

Commands:
	 new,      	 create new d2x project
	 book,     	 open project's book
	 run,      	 run sourcecode file
	 checker,  	 run checker for d2x project's exercises
	 help,     	 help info

User Commands:
	 build,      	cmake --build build
	 clean,      	rm -r build
	 init,      	cmake -S . -B build -G Ninja
	 run,      	./build/helloworld
```

### 项目构建&运行

> 可以使用d2x的自定义命令进行项目构建运行, 或直接使用cmake进行构建

```bash
d2x init
d2x build
d2x run
```

或

```bash
mkdir build && cd build
cmake -G Ninja ..
ninja -v
./helloworld
```

