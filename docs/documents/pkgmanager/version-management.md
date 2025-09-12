# 版本管理和切换

xlings支持查询安装过的xpkg包, 并对于使用 XVM (Xlings Version Manager)的xpkg包, 还支持一键切换到对应的版本

## 示例 - nodejs

### 查询已安装的版本

```bash
xlings use node
```

```
speak@speak-pc ~> xlings use node
22.17.1
24.4.1
18.20.8 <-
```

::: tip
其中高亮的版本为当前使用的版本
:::

### 切换到对应的版本

```bash
xlings use node 22
```

```
speak@speak-pc ~> xlings use node 22
using -> target: node, version: 22.17.1
speak@speak-pc ~> xlings use node
22.17.1 <-
24.4.1
18.20.8
```