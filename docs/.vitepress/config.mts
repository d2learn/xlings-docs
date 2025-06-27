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
      { text: '文档', link: '/quick-start/one-click-install.md' },
      {
        text: 'd2learn社区',
        items: [
          { text: 'd2learn论坛', link: 'https://forum.d2learn.org' },
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
          { text: '一键安装', link: '/quick-start/one-click-install.md' },
          { text: '基本用法', link: '/quick-start/basic-useage.md' }
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
          { text: '常见问题', link: '/qa.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/d2learn/xlings' }
    ]
  }
})
