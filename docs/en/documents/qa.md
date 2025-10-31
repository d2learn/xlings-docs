# Frequently Asked Questions

::: warning Communication or Feedback Issues

- You can check for similar discussion posts in the [xlings discussion section](https://forum.d2learn.org/category/9/xlings), if you don't find one you can create a new one

:::

## Q1: xlings installation succeeded, but running it reports command not found

In some environments, after xlings installation, the system may not refresh environment variables promptly. You can refresh the environment using commands (for example: `source ~/.bashrc` for bash environment) or reopen a console or cmd (which will automatically refresh the environment), then try running the `xlings -h` command again

## Q2: xmake dependency installation failed during installation

In some environments, the dependent xmake may not be installed successfully or cannot be found when using the one-click installation script. You can solve this by using the two-step installation method below

First install xmake

::: code-group

```bash [windows]
irm https://xmake.io/psget.text | iex
```

```bash [linux]
curl -fsSL https://xmake.io/shget.text | bash
```

:::

Then refresh the environment or reopen a command window, and run the xlings one-click installation command again

::: code-group

```bash [windows]
irm https://d2learn.org/xlings-install.ps1.txt | iex
```

```bash [linux]
curl -fsSL https://d2learn.org/xlings-install.sh | bash
```

:::