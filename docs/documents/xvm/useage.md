# XVM - 基本用法

## xvm add | 添加程序

> 支持添加不同版本, 也支持创建命令别名

```bash
xvm add [target] [version] --path [bin-path] --alias [command]
```

```bash
xvm add python 2.7.18 --path python2_dir --alias python2
xvm add python 3.12.3 --path python3_dir --alias python3.12
xvm add pv 0.0.1 --alias "python --version"
```

- `target`: 生效时可以使用的命令
- `version`: 这个是标识target的版本号, 建议和应用版本保持一致。如果是别名可以自定义
- `--path`: 程序所在的实际路径(可选)
- `--alias`: 在"所设置的路径"下实际执行的命令(可选), 默认为target

> 注: 默认第一次添加的版本作为全局工作空间的默认版本

## xvm list | 查询程序的所有版本

> 支持模糊查询

```bash
xvm list [target]
```

```bash
xvm list python
xvm list p
```

## xvm use | 切换版本

> 可以切换到对应的版本, 版本号支持模糊匹配

```bash
xvm use [target] [version]
```

```bash
xvm use python 3.12.3
xvm use python 2   # -> 2.7.18
```

## xvm current | 查询当前版本

> 支持模糊匹配

```bash
xvm current [target]
```

```bash
# xvm current [target]
xvm current p
```

## xvm remove | 移除之前被添加的程序

> 这里的移除只是从xvm的版本数据库中删除记录

```bash
xvm remove [target] [version]
```

```bash
# xvm remove [target] [version]
xvm remove pv 0.0.1
```