# Building Your Own Package Index/Software Ecosystem

## Specific Steps

- step1: Create a basic package index repository using [xim-pkgindex-template](https://github.com/new?template_name=xim-pkgindex-template&template_owner=d2learn)
- step2: Refer to [xpkg](https://xlings.d2learn.org/documents/xpkg/intro.html) and [libxpkg](https://xlings.d2learn.org/documents/libxpkg/intro.html) documentation to write package files, and add them to your self-built package index repository
- step3: Use `xim --add-indexrepo namespace:xxx.git` to automatically establish the package index and use the written packages
- step4 (optional): Add your self-built package index repository to this [xim-pkgindex-awesome](https://github.com/d2learn/xim-pkgindex-awesome), then other users can use `xlings install awesome:yourNamespace` to get your maintained package index and software ecosystem

> Note: If your package index repository is only accessible within the intranet, correspondingly only intranet users can use it