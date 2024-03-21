// .vitepress/config.js
export default {
  // 站点级选项
  title: '网站导航',
  titleTemplate: ':title - Custom Suffix',
  description: 'Just playing around.',
  //设置防止md文件的根目录
  //srcDir: './myvitpress',
  //是否清除后缀的html
  cleanUrls: false,
  //白色和暗黑模式，默认为 true，可以设置为 false
  appearance: true,
  lastUpdated: true,
  //设置这个值是为了让项目放到GitHub Pages上也有样式，这个值是GitHub项目的名称
  base: "/myvitpress/",
  themeConfig: {
    // 主题级选项
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide',
        items: [
          { text: 'api示例', link: '/api-examples' },
          { text: 'markdown示例', link: '/markdown-examples' },
          { text: 'about', link: '/readme' }
        ]
      }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'API Examples', link: '/api-examples' },
          { text: 'README', link: '/readme' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ghostasoul' },
      { icon: 'twitter', link: 'https://github.com/Ghostasoul' },
      { icon: 'youtube', link: 'https://youtube.com' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Zhangyushuo'
    },
    search: {
      provider: 'local'
    }
  }
}
