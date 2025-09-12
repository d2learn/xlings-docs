# 编写XScript

xscript本身也是一个xpkg包

所以只需要在`package`的`type`字段标识为script, 并添加一个入口函数`xpkg_main`及会被xlings识别为xscript

::: warning 提示
建议编写xscript前, 先了解[xpkg介绍](/documents/pkgmanager/intro.html)、[编写xpkg](/documents/xpkg/write.html)、[测试xpkg](/documents/xpkg/useage.html)这三个章节, 熟悉xpkg的相关概念, 然后就能很快上手xscript
:::

## 示例 - Hello XScript

被识别为xscirpt的xpkg包, xlings会提供默认的hooks实现。所以最简模式可以只有一个`xpkg_main`入口

<mark>**hello-xscript.lua**</mark>

```lua
package = {

    homepage = "https://xlings.d2learn.org",

    -- base info
    name = "hello-xscript",
    description = [[
            简单的XScript示例程序
        Simple XScript Demo/Template
    ]],

    authors = "d2learn",
    licenses = "Apache-2.0",
    repo = "https://github.com/d2learn/xim-pkgindex",

    -- xim pkg info
    type = "script", -- [!code focus:1]
    status = "stable",
    categories = { "demo", "template" "xscript" },
    keywords = { "demo", "template" },

    programs = { "hello-xscript" },

    -- xvm: xlings version management
    xvm_enable = true,

    xpm = {
        linux = {
            ["latest"] = { ref = "0.0.1" },
            ["0.0.1"] = { },
        },
    },
}

function xpkg_main(...) -- [!code focus:5]
    local args = { ... }
    print(args)
    print("hello xscrit - 0.0.1")
end
```

::: tip

package中的字段很多是可以选的, 具体参考[编写xpkg](/documents/xpkg/write.html)章节

:::


## 使用libxpkg库

libxpkg库提供了一些系统、工具以及和xpkg相关生态模块的API -> [libxpkg手册](/documents/libxpkg/intro.html)

```lua
-- ...

import("xim.libxpkg.utils") -- 辅助工具模块
import("xim.libxpkg.system") -- 系统模块

local __xscript_input = {
    ["--output"] = false, -- 默认需要设置为false
}

function xpkg_main(...) 

    -- 使用utils中的input_args_process辅助命令行参数的解析及自动填充
    local _, cmds = utils.input_args_process(__xscript_input, {...})

    if cmds["--output"] then
        print("output: " .. cmds["--output"])
    end

    print(cmds)

    system.exec("echo hello") -- 调用命令行
end
```

## 测试及使用

参考 [使用或测试xpkg](/documents/xpkg/useage.html) 进行编写的xscript脚本, 然后会获取一个同名二进制程序。在命令行运行他, 对应就会执行编写脚本中的`xpkg_main`

```bash
xim --add-xpkg yourPath/hello-xscript.lua
xlings install hello-xscript
hello-xscript
xlings remove hello-xscript
```