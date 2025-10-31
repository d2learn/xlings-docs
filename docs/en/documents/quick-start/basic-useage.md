# Basic Usage

### Multi-version Software Installation and Management

> Package management with **multi-version coexistence** support - not only supports software/tool installation, but also **environment configuration**

```bash
# Configure environment
xlings install c
xlings install python
# Install tools
xlings install devcpp
xlings install vscode

# Install specific version package@version and version switching
xlings install vscode@1.93.1
xlings use vscode 1.93.1

# Uninstall specific version
xlings remove vscode@1.93.1
```

Advanced usage see -> [xim-readme](https://github.com/d2learn/xlings/tree/main/core/xim) / [xvm-readme](https://github.com/d2learn/xlings/tree/main/core/xvm)

### Project Setup

> Build interactive public courses or tutorial projects, supporting automatic environment configuration, e-books, automatic exercise code detection...
>
> Example project: [d2ds | Hands-on Data Structures](https://github.com/d2learn/d2ds)

```bash
# Create project template - hello tutorial project
xlings new hello
cd hello
# Install project dependencies
xlings install
# Start automatic code detection (compiler-driven development mode)
xlings checker
```

Advanced usage see -> [d2x-readme](https://github.com/d2learn/xlings/tree/main/core/d2x)