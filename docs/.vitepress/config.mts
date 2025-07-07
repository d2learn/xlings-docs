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
        text: '示例',
        items: [
          { text: '交互式教程', link: '/examples/d2x.md' },
        ]
      },
      {
        text: '包索引',
        items: [
          { text: '添加包文件', link: '/documents/xim/xpkg.md' },
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
          { text: '基本用法', link: '/documents/quick-start/basic-useage.md' }
        ]
      },
      {
        text: 'XIM | 包管理器模块',
        collapsed: false,
        items: [
          { text: '基本介绍', link: '/documents/xim/intro.md' },
          { text: '高级用法', link: '/documents/xim/useage.md' },
          {
            text: '添加xpkg包',
            collapsed: true,
            items: [
              { text: 'xpkg包文件', link: '/documents/xim/xpkg.md' },
              { text: '添加xpkg到官方索引仓库', link: '/documents/xim/add-xpkg.md' },
            ]
          },
        ]
      },
      {
        text: 'XVM | 包管理器模块',
        collapsed: false,
        items: [
          { text: '基本介绍', link: '/documents/xvm/intro.md' },
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
