# xlings install

通过命令可以安装对应的软件、库、环境的配置、教程项目等任何xpkg包

## 命令模板解释

```bash
xlings install [pkgname][@version] [-y]
```

- `pkgname`: xpkg包名 - 软件、环境配置、教程项目...
- `@version`(可选项): @是包名和版本的分割符, version为要安装的版本号
- `-y`(可选项): 跳过中间的确认项

## 使用示例 - 安装vscode和python3.8

### 安装vscode

```bash
xlings install vscode
```

### 安装python3.8

```bash
xlings install python@3.8
```