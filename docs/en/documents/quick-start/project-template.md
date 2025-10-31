# Create Project Template

> Through the project template creation command, not only can project templates be generated, but dependencies for that template project can also be automatically handled, and the environment configured to make the project ready to use out of the box

```bash
xlings new [YourProjectName] --template [TemplateName]
```

## Example: Create a C++23 project template with cmake and build/run it

- Generate minimal project structure and project files
- Automatically detect and install necessary dependencies
- Build and run the project

### 1. Create hello project

```bash
xlings new hello --template cpp23-cmake-helloworld
```

Template creation process

```bash
[xlings]: checking templates cache... - ok
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
[xlings:d2x]: hello | /home/speak/test/hello
```

`hello` project directory

```
.
├── CMakeLists.txt
├── config.xlings
├── README.md
└── src
    └── main.cpp

2 directories, 4 files
```

### 2. Build and run the project

> Since the environment was automatically configured above, <mark>you can directly enter the project directory to build without worrying about dependency issues</mark>

```bash
mkdir build && cd build
cmake -G Ninja ..
ninja -v
./helloworld
```

You can also use d2x for building and running

```bash
d2x init
d2x build
d2x run
```
