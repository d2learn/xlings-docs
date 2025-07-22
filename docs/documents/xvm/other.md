# 临时关闭xvm版本管理功能

通过设置全局workspace的状态, 可以控制xvm的版本管理是否生效

```bash
xvm workspace global --active false
xvm workspace global --active true
```