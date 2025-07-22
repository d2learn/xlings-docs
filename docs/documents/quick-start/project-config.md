# 管理项目依赖

> 在项目目录创建`config.xlings`配置文件, 并添加依赖到文件中.其他用户即可通过xlings一键安装项目所需的依赖

**config.xlings配置文件示例**

```lua
xname = "ProjectName"
xim = {
    cpp = "",
    python = "3.12",
    vs = "2022",
    -- postprocess cmds
    xppcmds = {
        "echo hello xlings",
    }
}
```

**一键安装项目依赖**

```bash
xlings install
```