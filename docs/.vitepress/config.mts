import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xlings",
  description: "xlings's official website and documents",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/imgs/d2learn-logo.png',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '文档',
        items: [
          { text: '快速开始', link: '/documents/quick-start/one-click-install.md' },
          { text: '常用命令', link: '/documents/commands/install.md' },
          { text: '添加xpkg包', link: '/documents/xpkg/intro.md' },
          { text: '社区项目&贡献者', link: '/documents/community/projects_and_contributors.md' },
          { text: '常见问题', link: '/documents/qa.md' }
        ]
      },
      {
        text: '使用场景',
        items: [
          { text: '交互式教程', link: '/examples/d2x.md' },
        ]
      },
      {
        text: '包索引',
        items: [
          { text: '包索引站点', link: 'https://d2learn.github.io/xim-pkgindex' },
          { text: '包索引仓库', link: 'https://github.com/d2learn/xim-pkgindex' },
        ]
      },
      {
        text: '社区',
        items: [
          { text: 'd2learn论坛', link: 'https://forum.d2learn.org/category/9/xlings' },
          { text: 'd2learn开源', link: 'https://github.com/d2learn' },
          { text: 'd2learn主页', link: 'https://d2learn.org' }
        ]
      }
    ],

    sidebar: {
      '/documents/' : [
        {
          text: '快速开始',
          collapsed: false,
          items: [
            { text: '一键安装', link: '/documents/quick-start/one-click-install.md' },
            { text: '软件安装及多版本管理', link: '/documents/quick-start/install-and-version.md' },
            { text: '创建项目模板', link: '/documents/quick-start/project-template.md' },
            { text: '管理项目依赖', link: '/documents/quick-start/project-config.md' },
            { text: '更新与卸载', link: '/documents/quick-start/update-and-uninstall.md' },
            { text: '常见问题', link: '/documents/qa.md' },
          ]
        },
        {
          text: '常用命令介绍',
          collapsed: false,
          items: [
            { text: 'install', link: '/documents/commands/install.md' },
            { text: 'new', link: '/documents/commands/new.md' },
            { text: 'use', link: '/documents/commands/use.md' },
            { text: 'remove', link: '/documents/commands/remove.md' },
            { text: 'checker', link: '/documents/commands/checker.md' },
            { text: 'self', link: '/documents/commands/self.md' },
          ]
        },
        {
          text: 'xpkg包',
          collapsed: false,
          items: [
            { text: '简介', link: '/documents/xpkg/intro.md' },
            { text: '文件结构', link: '/documents/xpkg/structure.md' },
            { text: '编写xpkg', link: '/documents/xpkg/write.md' },
            { text: '使用或测试xpkg', link: '/documents/xpkg/useage.md' },
            { text: '如何添加到索引仓库?', link: '/documents/xpkg/add-to-xim-pkgindex.md' },
          ]
        },
        {
          text: '社区',
          collapsed: false,
          items: [
            { text: '项目和贡献者', link: '/documents/community/projects_and_contributors.md' },
            { text: '群组和论坛', link: '/documents/community/discussion_and_forum.md' },
            {
              text: '参与贡献',
              collapsed: false,
              items: [
                { text: '问题处理', link: '/documents/community/contribute/issues.md' },
                { text: '文档编写', link: '/documents/community/contribute/docs.md' },
                { text: '添加新xpkg包', link: '/documents/community/contribute/add-xpkg.md' },
                { text: '项目维护', link: '/documents/community/contribute/maintenance.md' },
              ]
            },
          ]
        },
        {
          text: '更多高级用法',
          collapsed: true,
          items: [
            { text: 'XIM 包管理', link: '/documents/xim/intro.md' },
            { text: 'XVM 版本管理', link: '/documents/xvm/intro.md' },
            { text: 'D2X 项目管理', link: '/documents/xvm/intro.md' },
            { text: 'libxpkg手册', link: '/documents/libxpkg/intro.md' },
          ]
        },
      ],
      '/documents/xim/': [
        { text: '<-上级目录', link: '/documents/quick-start/one-click-install.md' },
        {
          text: 'XIM | 包管理器模块',
          collapsed: false,
          items: [
            { text: '基本介绍', link: '/documents/xim/intro.md' },
            { text: '高级用法', link: '/documents/xim/useage.md' },
            { text: 'xpkg包文件', link: '/documents/xim/xpkg.md' },
            { text: '自定义xpkg包的使用', link: '/documents/xim/xpkg-useage.md' },
            { text: '添加xpkg到官方索引仓库', link: '/documents/xim/add-xpkg.md' },
          ]
        },
      ],
      '/documents/xvm/': [
        { text: '<-上级目录', link: '/documents/quick-start/one-click-install.md' },
        {
          text: 'XVM | 包管理器模块',
          collapsed: false,
          items: [
            { text: '介绍', link: '/documents/xvm/intro.md' },
            { text: '基本用法', link: '/documents/xvm/useage.md' },
            { text: '工作空间', link: '/documents/xvm/workspace.md' },
            { text: '其他', link: '/documents/xvm/other.md' },
          ]
        },
      ],
      '/documents/libxpkg/': [
        { text: '<-上级目录', link: '/documents/quick-start/one-click-install.md' },
        {
          text: 'libxpkg | api手册',
          collapsed: false,
          items: [
            { text: '介绍', link: '/documents/libxpkg/intro.md' },
            { text: 'lua基本语法', link: '/documents/libxpkg/lua-base.md' },
            { text: 'xim.libxpkg.pkginfo', link: '/documents/libxpkg/pkginfo.md' },
            { text: 'xim.libxpkg.xvm', link: '/documents/libxpkg/xvm.md' },
            { text: 'xim.libxpkg.system', link: '/documents/libxpkg/system.md' },
            { text: 'xim.libxpkg.log', link: '/documents/libxpkg/log.md' },
            { text: 'xim.libxpkg.pkgmanager', link: '/documents/libxpkg/pkgmanager.md' },
          ]
        },
      ]
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/d2learn/xlings-docs/tree/main/docs/:path'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/d2learn/xlings-docs' }
    ]
  }
})
