# Add xpkg to Official Index Repository

## Steps

- Step 1: Create an issue through [Add XPackage](https://github.com/d2learn/xim-pkgindex/issues/new/choose) and fill in basic information
- Step 2: Refer to [xpkg package writing documentation](/en/documents/xpkg/write.md) to write the `pkgname.lua` file
- Step 3: Refer to [xpkg usage and testing documentation](/en/documents/xpkg/useage.md) to complete basic testing and verification locally
- Step 4: [Fork the project](https://github.com/d2learn/xim-pkgindex/fork) and place the package file in the corresponding location under the `pkgs` directory
- Step 5: Initiate a merge Pull-Request, add the PR address to the issue and mention [project maintainers](/en/documents/community/projects_and_contributors.md) in the comments
- Step 6: TODO (reviewer local verification & approval)

::: tip
- You can start with tools/software you develop/like/are familiar with or some environment configurations, add them to the [XIM package index repository](https://github.com/d2learn/xim-pkgindex), so more people can download, install, and configure environments with one click
- If the PR doesn't get a response for a long time, you can share the PR link in the [community discussion group](/en/documents/community/discussion_and_forum.md) to remind the project (module) maintainers
:::

## Update Latest Package Index

> After successfully merging into the package index repository, xlings users can execute the following command to obtain and use it

```
xim --update index
```
