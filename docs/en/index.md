---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "X lings"
  text: "Highly abstract [package manager]"
  tagline: "[Multi-version management + Everything can be a package]: Applications, libraries, project templates, environment configurations, plugins, scripts, game mods..."
  image:
    src: '/imgs/xlings-logo.png'
    alt: VitePress
  actions:
    - theme: alt
      text: 🚀 Quick Start
      link: /en/documents/quick-start/one-click-install.md
    - theme: alt
      text: 👥 Forum Section
      link: https://forum.d2learn.org/category/9/xlings
    - theme: alt
      text: Github
      link: https://github.com/d2learn/xlings
    - theme: brand
      text: 📥 Download & Install
      link: /en/documents/quick-start/one-click-install.md

features:
  - title: 📦 | Cross-platform Universal Package Manager
    details: Similar to apt/pacman/brew for installing software, with support for installing multiple versions and switching between them
    link: /en/documents/pkgmanager/intro.html

  - title: 🌍 | Everything Can Be a Package
    details: xpkg - Not just for describing software packages, but also for configuration combinations, plugins, scripts, workflows...
    link: /en/documents/xpkg/intro.html

  - title: 🧱 | Project Templates and Dependency Management
    details: Supports creating project templates and provides dependency management, enabling environment-free setup - create and run immediately
    link: /en/documents/d2x/intro.html

  - title: 🕸️ | Decentralized Package Index Ecosystem
    details: Everyone and organizations can quickly build their own ecosystem for sharing, distributing, and reusing packages internally or publicly
    link: /en/documents/pkgindex/intro.html
---
