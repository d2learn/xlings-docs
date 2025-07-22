# 工作空间和环境隔离

目前xvm支持基于目录的工作空间, 可以和全局工作空间进行隔离(默认有一个全局工作空间)

### 基础命令

**创建工作空间**

```bash
# xvm workspace [target]
xvm workspace test
```

> 注: 工作空间, 默认时激活和继承全局工作空间版本情况的

**设置当前工作空间激活状态**

> 当工作空间未激活时就会使用默认的全局空间, 激活时会覆盖全局空间

```bash
# xvm workspace [target]
xvm workspace test --active false
xvm workspace test --active true
```

**设置当前工作空间是否继承全局空间**

```bash
# xvm workspace [target]
xvm workspace test --inherit false
xvm workspace test --inherit true
```

### 使用示例

> 在指定目录创建工作空间, 使用特定的版本

```bash
# 假设全局空间中python使用的版本是3
xvm workspace test # 创建工作空间
xvm use python 2   # 切换python版本
xvm current python # 查询当前版本
python --version   # 验证 - python2
cd ..
python --version   # 返回上级目录/版本会自动切换到全局版本python3
```
