# xlings self

通过self命令可以管理xlings自身的更新、配置、卸载等

```
xlings self [update | clean | uninstall]
```

## 使用示例

### 获取更新

```bash
xlings self update
```

### 清除缓存/临时文件

> 当环境受影响时, 清除缓存常常能解决问题

```bash
xlings self clean
```

### 卸载xlings

```bash
xlings self uninstall
```

:::tip
卸载时会有提示, 可以选择保留已经安装的软件或完全清除
:::