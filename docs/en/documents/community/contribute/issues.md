# Issue Handling and Bug Fixing

## Handling Issues Reported by the Community

Users in the community will report some encountered issues and bugs. You can find issues you are familiar with or interested in at the following links for research and handling:

- [Project Issues List](https://github.com/d2learn/xlings/issues)
- [Project Forum Section](https://forum.d2learn.org/category/9/xlings)

## Submitting Bugfixes

Among the above issues, some are project bugs. After research and handling, you can submit a PR request to merge the fix code into the main branch.

- Fork the project
- Clone the project locally and modify the code
- Locally verify/test if the problem is solved and meets expectations
- Submit the fix to the forked project
- Initiate a PR request to merge into the upstream repository

## Commit Format Specification

It is recommended to use `-s` to automatically generate signature information

```bash
git commit -s
```

```bash
Module: Brief Overview

- #1 Issue number reference or community issue link tracking

1. More detailed description
2. More detailed description
...

Email signature
```

Example - [commit](https://github.com/d2learn/xlings/commit/83418817c2c1619f14714a87235967240fd0bd13)

```bash
xim: optimize detect for system version

- #104

1. add detect type(*.cmd and *.bat) for windows platform
2. optimize pkginfo set, avoid clear failed

Signed-off-by: sunrisepeak <speakshen@163.com>

```
