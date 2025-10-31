# xlings new

Through this command, you can create corresponding template projects with one click, and it will automatically install the project's dependencies and configure the environment, making it ready for direct building or running.

## Command Template Explanation

```bash
xlings new [projectName] --template [templateName]
```

- `projectName`: Generated local project (folder) name
- `--template`: Target template project name reference, used to specify the template project to generate
- `templateName`: Template project names supported by xlings
  - For example: cpp-cmake-helloworld, cpp-xmake-helloworld

## Usage Example - Create a C++23 supported cmake project

### Creation Command

> After running the command, a cmake project named `hello` supporting cpp23 will be created in the current directory, and it will automatically check/install the project's dependencies

```bash
xlings new hello --template cpp-cmake-helloworld
```

```
[xlings]: checking templates cache... - ok
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
[xlings:d2x]: hello | /home/xxx/test/hello
```

### Project Directory Structure

```
.
├── CMakeLists.txt
├── config.xlings -- Project description file
├── README.md
└── src
    └── main.cpp

2 directories, 4 files
```

### View Project Build Commands

```bash
d2x
```
The `User Commands` section contains the custom commands for this project
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

### Project Build & Run

> You can use d2x's custom commands for project building and running, or directly use cmake for building

```bash
d2x init
d2x build
d2x run
```

or

```bash
mkdir build && cd build
cmake -G Ninja ..
ninja -v
./helloworld
```
