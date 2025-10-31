# Version Management and Switching

xlings supports querying installed xpkg packages, and for xpkg packages using XVM (Xlings Version Manager), it also supports one-click switching to corresponding versions.

## Example - nodejs

### Query installed versions

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
The highlighted version indicates the currently used version.
:::

### Switch to corresponding version

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
