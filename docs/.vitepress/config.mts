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
          { text: '包管理器', link: '/documents/xim/intro.md' },
          { text: '版本管理', link: '/documents/xvm/intro.md' },
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

    sidebar: [
      {
        text: '快速开始',
        collapsed: false,
        items: [
          { text: '一键安装', link: '/documents/quick-start/one-click-install.md' },
          { text: '安装软件及多版本管理', link: '/documents/quick-start/install-and-version.md' },
          { text: '创建项目模板', link: '/documents/quick-start/project-template.md' },
          { text: '管理项目依赖', link: '/documents/quick-start/project-config.md' },
          { text: '更新与卸载', link: '/documents/quick-start/update-and-uninstall.md' },
        ]
      },
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
      {
        text: '社区',
        collapsed: false,
        items: [
          { text: '交流讨论', link: '/community.md' },
        ]
      },
      {
        items: [
          { text: '常见问题', link: '/documents/qa.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/d2learn/xlings-docs' }
    ]
  }
})
