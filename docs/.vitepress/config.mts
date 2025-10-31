import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xlings",
  description: "xlings's official website and documents",
  ignoreDeadLinks: true,
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        nav: [
          { text: "主页", link: "/" },
          {
            text: "文档",
            items: [
              {
                text: "快速开始",
                link: "/documents/quick-start/one-click-install.md",
              },
              { text: "包管理器", link: "/documents/pkgmanager/intro.html" },
              { text: "添加xpkg包", link: "/documents/xpkg/intro.md" },
              { text: "自建包索引", link: "/documents/pkgindex/intro.html" },
              { text: "libxpkg手册", link: "/documents/libxpkg/intro.md" },
              { text: "常见问题", link: "/documents/qa.md" },
            ],
          },
          {
            text: "使用场景",
            items: [
              { text: "交互式教程", link: "/examples/d2x.md" },
              { text: "自建软件生态", link: "/documents/pkgindex/intro.html" },
            ],
          },
          {
            text: "包索引",
            items: [
              {
                text: "包索引站点",
                link: "https://d2learn.github.io/xim-pkgindex",
              },
              {
                text: "包索引仓库",
                link: "https://github.com/d2learn/xim-pkgindex",
              },
              {
                text: "Awesome索引列表",
                link: "https://github.com/d2learn/xim-pkgindex-awesome",
              },
            ],
          },
          {
            text: "社区",
            items: [
              {
                text: "项目&贡献者",
                link: "/documents/community/projects_and_contributors.md",
              },
              {
                text: "d2learn论坛",
                link: "https://forum.d2learn.org/category/9/xlings",
              },
              { text: "d2learn开源", link: "https://github.com/d2learn" },
              { text: "d2learn主页", link: "https://d2learn.org" },
            ],
          },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      title: "xlings",
      description: "xlings official website and documentation",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          {
            text: "Documentation",
            items: [
              {
                text: "Quick Start",
                link: "/en/documents/quick-start/one-click-install.md",
              },
              {
                text: "Package Manager",
                link: "/en/documents/pkgmanager/intro.html",
              },
              { text: "Add xpkg Package", link: "/en/documents/xpkg/intro.md" },
              {
                text: "Build Package Index",
                link: "/en/documents/pkgindex/intro.html",
              },
              {
                text: "libxpkg Manual",
                link: "/en/documents/libxpkg/intro.md",
              },
              { text: "FAQ", link: "/en/documents/qa.md" },
            ],
          },
          {
            text: "Use Cases",
            items: [
              { text: "Interactive Tutorials", link: "/en/examples/d2x.md" },
              {
                text: "Build Software Ecosystem",
                link: "/en/documents/pkgindex/intro.html",
              },
            ],
          },
          {
            text: "Package Index",
            items: [
              {
                text: "Package Index Site",
                link: "https://d2learn.github.io/xim-pkgindex",
              },
              {
                text: "Package Index Repository",
                link: "https://github.com/d2learn/xim-pkgindex",
              },
              {
                text: "Awesome Index List",
                link: "https://github.com/d2learn/xim-pkgindex-awesome",
              },
            ],
          },
          {
            text: "Community",
            items: [
              {
                text: "Projects & Contributors",
                link: "/en/documents/community/projects_and_contributors.md",
              },
              {
                text: "d2learn Forum",
                link: "https://forum.d2learn.org/category/9/xlings",
              },
              {
                text: "d2learn Open Source",
                link: "https://github.com/d2learn",
              },
              { text: "d2learn Homepage", link: "https://d2learn.org" },
            ],
          },
        ],
      },
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/imgs/d2learn-logo.png",

    localeLinks: {
      text: "Language",
      items: [
        { text: "简体中文", link: "/" },
        { text: "English", link: "/en/" },
      ],
    },

    sidebar: {
      "/documents/": [
        {
          text: "快速开始",
          collapsed: false,
          items: [
            {
              text: "一键安装",
              link: "/documents/quick-start/one-click-install.md",
            },
            {
              text: "软件安装及多版本管理",
              link: "/documents/quick-start/install-and-version.md",
            },
            {
              text: "更新与卸载",
              link: "/documents/quick-start/update-and-uninstall.md",
            },
            { text: "常见问题", link: "/documents/qa.md" },
          ],
        },
        {
          text: "📦 通用包管理器 - XIM",
          collapsed: false,
          items: [
            { text: "简介", link: "/documents/pkgmanager/intro.md" },
            {
              text: "常用命令介绍",
              collapsed: false,
              items: [
                { text: "install", link: "/documents/commands/install.md" },
                { text: "new", link: "/documents/commands/new.md" },
                { text: "use", link: "/documents/commands/use.md" },
                { text: "remove", link: "/documents/commands/remove.md" },
                { text: "checker", link: "/documents/commands/checker.md" },
                { text: "self", link: "/documents/commands/self.md" },
              ],
            },
            {
              text: "版本管理和切换",
              link: "/documents/pkgmanager/version-management.md",
            },
          ],
        },
        {
          text: "🌍 万物皆可成包 - XPKG",
          collapsed: false,
          items: [
            { text: "简介", link: "/documents/xpkg/intro.md" },
            { text: "文件结构", link: "/documents/xpkg/structure.md" },
            { text: "编写xpkg", link: "/documents/xpkg/write.md" },
            { text: "使用或测试xpkg", link: "/documents/xpkg/useage.md" },
            {
              text: "xscript脚本",
              collapsed: true,
              items: [
                { text: "简介", link: "/documents/xpkg/xscript/intro.md" },
                {
                  text: "编写xscript",
                  link: "/documents/xpkg/xscript/write-xscript.md",
                },
              ],
            },
            {
              text: "如何添加到索引仓库?",
              link: "/documents/xpkg/add-to-xim-pkgindex.md",
            },
          ],
        },
        {
          text: "🧱 项目模板和依赖管理",
          collapsed: false,
          items: [
            { text: "简介", link: "/documents/d2x/intro.md" },
            {
              text: "创建项目模板",
              link: "/documents/quick-start/project-template.md",
            },
            {
              text: "管理项目依赖",
              link: "/documents/quick-start/project-config.md",
            },
          ],
        },
        {
          text: "🕸️ 去中心化的包索引生态",
          collapsed: false,
          items: [
            { text: "简介", link: "/documents/pkgindex/intro.md" },
            {
              text: "如何自建包索引/软件生态?",
              link: "/documents/pkgindex/how-to-build.md",
            },
            {
              text: "xim-pkgindex-awesome",
              link: "/documents/pkgindex/xim-pkgindex-awesome.md",
            },
            {
              text: "基于区块链的分布式存储",
              link: "/documents/pkgindex/blockchain.md",
            },
          ],
        },
        {
          text: "社区",
          collapsed: false,
          items: [
            {
              text: "项目和贡献者",
              link: "/documents/community/projects_and_contributors.md",
            },
            {
              text: "群组和论坛",
              link: "/documents/community/discussion_and_forum.md",
            },
            {
              text: "参与贡献",
              collapsed: false,
              items: [
                {
                  text: "问题处理",
                  link: "/documents/community/contribute/issues.md",
                },
                {
                  text: "文档编写",
                  link: "/documents/community/contribute/docs.md",
                },
                {
                  text: "添加新xpkg包",
                  link: "/documents/community/contribute/add-xpkg.md",
                },
                {
                  text: "项目维护",
                  link: "/documents/community/contribute/maintenance.md",
                },
              ],
            },
          ],
        },
        {
          text: "更多高级用法",
          collapsed: true,
          items: [
            { text: "XIM 包管理", link: "/documents/xim/intro.md" },
            { text: "XVM 版本管理", link: "/documents/xvm/intro.md" },
            { text: "D2X 项目管理", link: "/documents/xvm/intro.md" },
            { text: "libxpkg手册", link: "/documents/libxpkg/intro.md" },
          ],
        },
      ],
      "/en/documents/": [
        {
          text: "Quick Start",
          collapsed: false,
          items: [
            {
              text: "One-click Installation",
              link: "/en/documents/quick-start/one-click-install.md",
            },
            {
              text: "Software Installation & Multi-version Management",
              link: "/en/documents/quick-start/install-and-version.md",
            },
            {
              text: "Update & Uninstall",
              link: "/en/documents/quick-start/update-and-uninstall.md",
            },
            { text: "FAQ", link: "/en/documents/qa.md" },
          ],
        },
        {
          text: "📦 Universal Package Manager - XIM",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/en/documents/pkgmanager/intro.md" },
            {
              text: "Common Commands",
              collapsed: false,
              items: [
                { text: "install", link: "/en/documents/commands/install.md" },
                { text: "new", link: "/en/documents/commands/new.md" },
                { text: "use", link: "/en/documents/commands/use.md" },
                { text: "remove", link: "/en/documents/commands/remove.md" },
                { text: "checker", link: "/en/documents/commands/checker.md" },
                { text: "self", link: "/en/documents/commands/self.md" },
              ],
            },
            {
              text: "Version Management & Switching",
              link: "/en/documents/pkgmanager/version-management.md",
            },
          ],
        },
        {
          text: "🌍 Everything Can Be a Package - XPKG",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/en/documents/xpkg/intro.md" },
            { text: "File Structure", link: "/en/documents/xpkg/structure.md" },
            { text: "Writing xpkg", link: "/en/documents/xpkg/write.md" },
            {
              text: "Using or Testing xpkg",
              link: "/en/documents/xpkg/useage.md",
            },
            {
              text: "xscript Scripts",
              collapsed: true,
              items: [
                {
                  text: "Introduction",
                  link: "/en/documents/xpkg/xscript/intro.md",
                },
                {
                  text: "Writing xscript",
                  link: "/en/documents/xpkg/xscript/write-xscript.md",
                },
              ],
            },
            {
              text: "How to Add to Index Repository?",
              link: "/en/documents/xpkg/add-to-xim-pkgindex.md",
            },
          ],
        },
        {
          text: "🧱 Project Templates & Dependency Management",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/en/documents/d2x/intro.md" },
            {
              text: "Create Project Template",
              link: "/en/documents/quick-start/project-template.md",
            },
            {
              text: "Manage Project Dependencies",
              link: "/en/documents/quick-start/project-config.md",
            },
          ],
        },
        {
          text: "🕸️ Decentralized Package Index Ecosystem",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/en/documents/pkgindex/intro.md" },
            {
              text: "How to Build Package Index/Software Ecosystem?",
              link: "/en/documents/pkgindex/how-to-build.md",
            },
            {
              text: "xim-pkgindex-awesome",
              link: "/en/documents/pkgindex/xim-pkgindex-awesome.md",
            },
            {
              text: "Blockchain-based Distributed Storage",
              link: "/en/documents/pkgindex/blockchain.md",
            },
          ],
        },
        {
          text: "Community",
          collapsed: false,
          items: [
            {
              text: "Projects & Contributors",
              link: "/en/documents/community/projects_and_contributors.md",
            },
            {
              text: "Groups & Forum",
              link: "/en/documents/community/discussion_and_forum.md",
            },
            {
              text: "Participate in Contribution",
              collapsed: false,
              items: [
                {
                  text: "Issue Handling",
                  link: "/en/documents/community/contribute/issues.md",
                },
                {
                  text: "Documentation Writing",
                  link: "/en/documents/community/contribute/docs.md",
                },
                {
                  text: "Add New xpkg Package",
                  link: "/en/documents/community/contribute/add-xpkg.md",
                },
                {
                  text: "Project Maintenance",
                  link: "/en/documents/community/contribute/maintenance.md",
                },
              ],
            },
          ],
        },
        {
          text: "More Advanced Usage",
          collapsed: true,
          items: [
            {
              text: "XIM Package Management",
              link: "/en/documents/xim/intro.md",
            },
            {
              text: "XVM Version Management",
              link: "/en/documents/xvm/intro.md",
            },
            {
              text: "D2X Project Management",
              link: "/en/documents/xvm/intro.md",
            },
            { text: "libxpkg Manual", link: "/en/documents/libxpkg/intro.md" },
          ],
        },
      ],
      "/documents/xim/": [
        {
          text: "<-上级目录",
          link: "/documents/quick-start/one-click-install.md",
        },
        {
          text: "XIM | 包管理器模块",
          collapsed: false,
          items: [
            { text: "基本介绍", link: "/documents/xim/intro.md" },
            { text: "高级用法", link: "/documents/xim/useage.md" },
            { text: "xpkg包文件", link: "/documents/xim/xpkg.md" },
            {
              text: "自定义xpkg包的使用",
              link: "/documents/xim/xpkg-useage.md",
            },
            {
              text: "添加xpkg到官方索引仓库",
              link: "/documents/xim/add-xpkg.md",
            },
          ],
        },
      ],
      "/en/documents/xim/": [
        {
          text: "<-Parent Directory",
          link: "/en/documents/quick-start/one-click-install.md",
        },
        {
          text: "XIM | Package Manager Module",
          collapsed: false,
          items: [
            { text: "Basic Introduction", link: "/en/documents/xim/intro.md" },
            { text: "Advanced Usage", link: "/en/documents/xim/useage.md" },
            { text: "xpkg Package Files", link: "/en/documents/xim/xpkg.md" },
            {
              text: "Custom xpkg Package Usage",
              link: "/en/documents/xim/xpkg-useage.md",
            },
            {
              text: "Add xpkg to Official Index Repository",
              link: "/en/documents/xim/add-xpkg.md",
            },
          ],
        },
      ],
      "/documents/xvm/": [
        {
          text: "<-上级目录",
          link: "/documents/quick-start/one-click-install.md",
        },
        {
          text: "XVM | 包管理器模块",
          collapsed: false,
          items: [
            { text: "介绍", link: "/documents/xvm/intro.md" },
            { text: "基本用法", link: "/documents/xvm/useage.md" },
            { text: "工作空间", link: "/documents/xvm/workspace.md" },
            { text: "其他", link: "/documents/xvm/other.md" },
          ],
        },
      ],
      "/en/documents/xvm/": [
        {
          text: "<-Parent Directory",
          link: "/en/documents/quick-start/one-click-install.md",
        },
        {
          text: "XVM | Package Manager Module",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/en/documents/xvm/intro.md" },
            { text: "Basic Usage", link: "/en/documents/xvm/useage.md" },
            { text: "Workspace", link: "/en/documents/xvm/workspace.md" },
            { text: "Other", link: "/en/documents/xvm/other.md" },
          ],
        },
      ],
      "/documents/libxpkg/": [
        {
          text: "<-上级目录",
          link: "/documents/quick-start/one-click-install.md",
        },
        {
          text: "libxpkg | api手册",
          collapsed: false,
          items: [
            { text: "介绍", link: "/documents/libxpkg/intro.md" },
            { text: "lua基本语法", link: "/documents/libxpkg/lua-base.md" },
            {
              text: "xim.libxpkg.pkginfo",
              link: "/documents/libxpkg/pkginfo.md",
            },
            { text: "xim.libxpkg.xvm", link: "/documents/libxpkg/xvm.md" },
            {
              text: "xim.libxpkg.system",
              link: "/documents/libxpkg/system.md",
            },
            { text: "xim.libxpkg.log", link: "/documents/libxpkg/log.md" },
            {
              text: "xim.libxpkg.pkgmanager",
              link: "/documents/libxpkg/pkgmanager.md",
            },
            { text: "xim.libxpkg.utils", link: "/documents/libxpkg/utils.md" },
          ],
        },
      ],
      "/en/documents/libxpkg/": [
        {
          text: "<-Parent Directory",
          link: "/en/documents/quick-start/one-click-install.md",
        },
        {
          text: "libxpkg | API Manual",
          collapsed: false,
          items: [
            { text: "Introduction", link: "/en/documents/libxpkg/intro.md" },
            {
              text: "Lua Basic Syntax",
              link: "/en/documents/libxpkg/lua-base.md",
            },
            {
              text: "xim.libxpkg.pkginfo",
              link: "/en/documents/libxpkg/pkginfo.md",
            },
            { text: "xim.libxpkg.xvm", link: "/en/documents/libxpkg/xvm.md" },
            {
              text: "xim.libxpkg.system",
              link: "/en/documents/libxpkg/system.md",
            },
            { text: "xim.libxpkg.log", link: "/en/documents/libxpkg/log.md" },
            {
              text: "xim.libxpkg.pkgmanager",
              link: "/en/documents/libxpkg/pkgmanager.md",
            },
            {
              text: "xim.libxpkg.utils",
              link: "/en/documents/libxpkg/utils.md",
            },
          ],
        },
      ],
    },

    search: {
      provider: "local",
    },

    editLink: {
      pattern: "https://github.com/d2learn/xlings-docs/tree/main/docs/:path",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/d2learn/xlings" },
      { icon: "bilibili", link: "https://space.bilibili.com/65858958" },
      { icon: "youtube", link: "https://www.youtube.com/@sunrisepeak" },
      { icon: "zhihu", link: "https://www.zhihu.com/people/SPeakShen" },
      { icon: "gitbook", link: "https://github.com/d2learn/xlings-docs" },
    ],
  },
});
