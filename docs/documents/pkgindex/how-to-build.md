# 自建包索引/软件生态

## 具体步骤

- step1: 通过 [xim-pkgindex-template](https://github.com/new?template_name=xim-pkgindex-template&template_owner=d2learn) 创建一个基础包索引仓库
- step2: 参考[xpkg](https://xlings.d2learn.org/documents/xpkg/intro.html)和[libxpkg](https://xlings.d2learn.org/documents/libxpkg/intro.html)文档编写包文件, 并添加到自建的包索引仓库中
- step3: 使用`xim --add-indexrepo namespace:xxx.git`即可自动建立包索引并使用所编写的包
- step4 (可选) : 添加自建的包索引仓库, 到该[xim-pkgindex-awesome](https://github.com/d2learn/xim-pkgindex-awesome)中, 其他用户即可以使用`xlings install awesome:yourNamespace`来获取你维护的包索引及软件生态

> 注: 如果你的包索引仓库只有内网可以访问, 对应的也就只有内网用户可以使用