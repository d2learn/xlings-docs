# Writing XScript

xscript itself is also an xpkg package

So you only need to identify the `type` field in `package` as script, and add an entry function `xpkg_main` to be recognized as xscript by xlings.

::: warning Tip
Before writing xscript, it is recommended to understand these three chapters: [xpkg introduction](/en/documents/pkgmanager/intro.html), [writing xpkg](/en/documents/xpkg/write.html), [testing xpkg](/en/documents/xpkg/useage.html), familiarize yourself with xpkg related concepts, and then you can quickly get started with xscript.
:::

## Example - Hello XScript

For xpkg packages identified as xscript, xlings will provide default hooks implementations. So the minimal mode can have only one `xpkg_main` entry.

<mark>**hello-xscript.lua**</mark>

```lua
package = {

    homepage = "https://xlings.d2learn.org",

    -- base info
    name = "hello-xscript",
    description = [[
            Simple XScript example program
        Simple XScript Demo/Template
    ]],

    authors = "d2learn",
    licenses = "Apache-2.0",
    repo = "https://github.com/d2learn/xim-pkgindex",

    -- xim pkg info
    type = "script", -- [!code focus:1]
    status = "stable",
    categories = { "demo", "template", "xscript" },
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
    print("hello xscript - 0.0.1")
end
```

::: tip

Many fields in package are optional, specifically refer to the [writing xpkg](/en/documents/xpkg/write.html) chapter.

:::

## Using libxpkg Library

The libxpkg library provides APIs for systems, tools, and xpkg-related ecosystem modules -> [libxpkg manual](/en/documents/libxpkg/intro.html)

```lua
-- ...

import("xim.libxpkg.utils") -- Auxiliary tool module
import("xim.libxpkg.system") -- System module

local __xscript_input = {
    ["--output"] = false, -- Default needs to be set to false
}

function xpkg_main(...) 

    -- Use input_args_process in utils to assist with command line parameter parsing and automatic filling
    local _, cmds = utils.input_args_process(__xscript_input, {...})

    if cmds["--output"] then
        print("output: " .. cmds["--output"])
    end

    print(cmds)

    system.exec("echo hello") -- Call command line
end
```

## Testing and Usage

Refer to [Using or Testing xpkg](/en/documents/xpkg/useage.html) for the written xscript script, then you will get a binary program with the same name. When you run it in the command line, it will execute the `xpkg_main` in the written script.

```bash
xim --add-xpkg yourPath/hello-xscript.lua
xlings install hello-xscript
hello-xscript
xlings remove hello-xscript
```
