# Manage Project Dependencies

> Create a `config.xlings` configuration file in the project directory and add dependencies to the file. Other users can then use xlings to install the project's required dependencies with one click

**config.xlings configuration file example**

```lua
xname = "ProjectName"
xim = {
    cpp = "",
    python = "3.12",
    cmake = "4.0",
    -- postprocess cmds
    xppcmds = {
        "echo hello xlings",
    }
}
```

**One-click installation of project dependencies**

```bash
xlings install
```
