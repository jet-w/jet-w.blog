// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar([
  "/",
  {
    text: "Master of Data Science (Unisa)",
    icon: "/assets/icon/unisa/unisa-logo.svg",
    prefix: "/unisa/",
    children: [
      { text: "Term1(2022SP5)", link: "2022SP5" },
      { text: "Term2(2023SP2)", link: "2023SP2" },
      { text: "Term3(2023SP5)", link: "2023SP5" }
    ]
  },
  {
    text: "Life in 42 Adelaide",
    icon: "/assets/icon/42adelaide/42_adelaide.svg",
    prefix: "/42adelaide/",
    children: [
      { text: "Piscine(Dolphin)", link: "piscine", icon: "/assets/icon/42adelaide/dolphin.svg" },
      { text: "42cursus(Sol)", link: "42cursus", icon: "/assets/icon/42adelaide/sol.svg" }
    ]
  },
  {
    text: "Techniques",
    icon: "building-columns",
    prefix: "/techniques/",
    children: [
      { text: "Geoscience", link: "geoscience" },
      { text: "Python", link: "python" },
      { text: "R", link: "R" },
      { text: "Github", link: "github" }
    ]
  },
  //All the sample below
  /*
  {
    text: "Blog Guidance",
    link: "/demo/"
  },
  {
    text: "Post Sample",
    icon: "pen-to-square",
    prefix: "/demo/posts/",
    children: [
      {
        text: "Apple",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
          { text: "Applexxx", icon: "author-icon", link: "xxx" },
        ],
      },
      {
        text: "Banana",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  }
  */
  {
    text: "Github",
    icon: "/github.svg",
    link: "https://github.com/seamice/"
  }
]);

// src/.vuepress/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";
var zhNavbar = navbar2([
  "/zh/",
  "/zh/demo/",
  {
    text: "\u535A\u6587",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "\u82F9\u679C",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "\u82F9\u679C1", icon: "pen-to-square", link: "1" },
          { text: "\u82F9\u679C2", icon: "pen-to-square", link: "2" },
          "3",
          "4"
        ]
      },
      {
        text: "\u9999\u8549",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "\u9999\u8549 1",
            icon: "pen-to-square",
            link: "1"
          },
          {
            text: "\u9999\u8549 2",
            icon: "pen-to-square",
            link: "2"
          },
          "3",
          "4"
        ]
      },
      { text: "\u6A31\u6843", icon: "pen-to-square", link: "cherry" },
      { text: "\u706B\u9F99\u679C", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry"
    ]
  },
  {
    text: "V2 \u6587\u6863",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/"
  }
]);

// src/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Unisa",
      icon: "/assets/icon/unisa/unisa-logo.svg",
      prefix: "unisa/",
      children: "structure"
    },
    {
      text: "Life in 42 Adelaide",
      icon: "/assets/icon/42adelaide/42_adelaide.svg",
      prefix: "42adelaide/",
      children: "structure"
    },
    {
      text: "Techniques",
      icon: "book",
      prefix: "techniques/",
      children: "structure"
    },
    {
      text: "Math",
      icon: "square-root-variable",
      prefix: "Math/",
      children: "structure"
    },
    {
      text: "Task",
      icon: "list-check",
      prefix: "Task/",
      children: "structure"
    },
    "intro"
  ]
});

// src/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
var zhSidebar = sidebar2({
  "/zh/": [
    "",
    {
      text: "\u5982\u4F55\u4F7F\u7528",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "\u6587\u7AE0",
      icon: "book",
      prefix: "posts/",
      children: "structure"
    },
    "intro",
    "slides"
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://seamice.github.io/blog/",
  author: {
    name: "Haiyue",
    url: "https://seamice.github.io/blog/"
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/haiyue.jpg",
  //repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "src",
  blog: {
    medias: {
      //Baidu: "https://example.com",
      //BiliBili: "https://example.com",
      //Bitbucket: "https://example.com",
      //Dingding: "https://example.com",
      //Discord: "https://example.com",
      //Dribbble: "https://example.com",
      //Email: "mailto:info@example.com",
      //Evernote: "https://example.com",
      //Facebook: "https://example.com",
      //Flipboard: "https://example.com",
      //Gitee: "https://example.com",
      //GitHub: "https://example.com",
      //Gitlab: "https://example.com",
      //Gmail: "mailto:info@example.com",
      //Instagram: "https://example.com",
      //Lark: "https://example.com",
      //Lines: "https://example.com",
      Linkedin: "https://www.linkedin.com/in/haiyue-wang-9b5410103/"
      //Pinterest: "https://example.com",
      //Pocket: "https://example.com",
      //QQ: "https://example.com",
      //Qzone: "https://example.com",
      //Reddit: "https://example.com",
      //Rss: "https://example.com",
      //Steam: "https://example.com",
      //Twitter: "https://example.com",
      //Wechat: "https://example.com",
      //Weibo: "https://example.com",
      //Whatsapp: "https://example.com",
      //Youtube: "https://example.com",
      //Zhihu: "https://example.com",
      //MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    }
  },
  locales: {
    "/": {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      headerDepth: 4,
      footer: "Email me if needed",
      displayFooter: true,
      blog: {
        //description: "A fullstack programmer",
        description: "A data science student",
        intro: "/intro.html"
      },
      metaLocales: {
        editLink: "Edit this page on GitHub"
      }
    }
    //,
    ///**
    // * Chinese locale config
    // */
    //"/zh/": {
    //  // navbar
    //  navbar: zhNavbar,
    //  // sidebar
    //  sidebar: zhSidebar,
    //  footer: "默认页脚",
    //  displayFooter: true,
    //  blog: {
    //    description: "一个前端开发者",
    //    intro: "/zh/intro.html",
    //  },
    //  // page meta
    //  metaLocales: {
    //    editLink: "在 GitHub 上编辑此页",
    //  },
    //},
  },
  encrypt: {
    config: {
      "/unisa/2023SP5/AdvancedAnalyticTechniques1/Prac": ["#1234"],
      "/unisa/2023SP5/AdvancedAnalyticTechniques2/assignment1": ["#Thuc"],
      "/Task/task_details.html": ["#1234"],
      "/demo/*": ["1234"],
      "/demo/encrypt.html": ["1234"]
      //"/zh/demo/encrypt.html": ["1234"],
    }
  },
  plugins: {
    blog: true,
    components: {
      // components you want
      components: [
        "PDF",
        "YouTube",
        "VideoPlayer"
      ]
    },
    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://m8w2khda.api.lncldglobal.com"
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    }
    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Haiyue's Blog",
      description: "Haiyue's page"
    }
    //"/zh/": {
    //  lang: "zh-CN",
    //  title: "海越个人博客",
    //  description: "个人技术生活记录",
    //},
  },
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci96aC50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovd29ya3NwYWNlLzExLmJsb2cvbXlnaXRibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdvcmtzcGFjZVxcXFwxMS5ibG9nXFxcXG15Z2l0YmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd29ya3NwYWNlLzExLmJsb2cvbXlnaXRibG9nL3NyYy8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcclxuaW1wb3J0IHsgc2VhcmNoUHJvUGx1Z2luIH0gZnJvbSBcInZ1ZXByZXNzLXBsdWdpbi1zZWFyY2gtcHJvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICBiYXNlOiBcIi9cIixcclxuICBsb2NhbGVzOiB7XHJcbiAgICBcIi9cIjoge1xyXG4gICAgICBsYW5nOiBcImVuLVVTXCIsXHJcbiAgICAgIHRpdGxlOiBcIkhhaXl1ZSdzIEJsb2dcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiSGFpeXVlJ3MgcGFnZVwiLFxyXG4gICAgfSxcclxuICAgIC8vXCIvemgvXCI6IHtcclxuICAgIC8vICBsYW5nOiBcInpoLUNOXCIsXHJcbiAgICAvLyAgdGl0bGU6IFwiXHU2RDc3XHU4RDhBXHU0RTJBXHU0RUJBXHU1MzVBXHU1QkEyXCIsXHJcbiAgICAvLyAgZGVzY3JpcHRpb246IFwiXHU0RTJBXHU0RUJBXHU2MjgwXHU2NzJGXHU3NTFGXHU2RDNCXHU4QkIwXHU1RjU1XCIsXHJcbiAgICAvL30sXHJcbiAgfSxcclxuICB0aGVtZSxcclxuICAvLyBFbmFibGUgaXQgd2l0aCBwd2FcclxuICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L3dvcmtzcGFjZS8xMS5ibG9nL215Z2l0YmxvZy9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcMTEuYmxvZ1xcXFxteWdpdGJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd29ya3NwYWNlLzExLmJsb2cvbXlnaXRibG9nL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5pbXBvcnQgeyBlbk5hdmJhciwgemhOYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXIvaW5kZXguanNcIjtcclxuaW1wb3J0IHsgZW5TaWRlYmFyLCB6aFNpZGViYXIgfSBmcm9tIFwiLi9zaWRlYmFyL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7IGNvbXBvbmVudHNQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLWNvbXBvbmVudHNcIjtcclxuXHJcbmNvbnN0IE1SX0hPUEVfQVZBVEFSID1cclxuICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDEwMDAgMTAwMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48ZGVmcz48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjI0NzggLjc4MTMzIC0yLjU0Nzk3IC42MzYyMiA5MTAuMzUgMjgxLjU4KVwiIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiIGlkPVwiYVwiIHgxPVwiMzcuODI3XCIgeDI9XCIxNTkuOTg4XCIgeTE9XCIyNzIuOTE2XCIgeTI9XCIyNzQuNjNcIj48c3RvcCBvZmZzZXQ9XCIuNzVcIiBzdG9wLWNvbG9yPVwiI2UzMzkzOVwiLz48c3RvcCBvZmZzZXQ9XCIuOTk4XCIgc3RvcC1jb2xvcj1cIiNmZmZcIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgZ3JhZGllbnRUcmFuc2Zvcm09XCJtYXRyaXgoLjEzODE0IC44MDc5NyAyLjU1NTk5IC0uNjAzMiAzNC4wODcgNDk0LjM2OSlcIiBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiBpZD1cImJcIiB4MT1cIjM3LjgyN1wiIHgyPVwiMTU5Ljk4OFwiIHkxPVwiMjcyLjkxNlwiIHkyPVwiMjc0LjYzXCI+PHN0b3Agb2Zmc2V0PVwiLjgxNVwiIHN0b3AtY29sb3I9XCIjZTMzOTM5XCIvPjxzdG9wIG9mZnNldD1cIjFcIiBzdG9wLWNvbG9yPVwiI2ZmZlwiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPVwiTTEzNS42MzcgNTg4LjA2N2MtNDguODkxLTIwMS4zMzQgNzQuNjA1LTQwNC4xNjIgMjc1LjgzNy00NTMuMDI4IDIwMS4yMzMtNDguODY2IDQwMy45OTggNzQuNzM0IDQ1Mi44ODkgMjc2LjA2OCA0OC44OTIgMjAxLjMzNS03NC42MDYgNDA0LjE2Mi0yNzUuODM4IDQ1My4wMjktMjAxLjIzMyA0OC44NjYtNDAzLjk5Ny03NC43MzQtNDUyLjg4OC0yNzYuMDY5WlwiIGZpbGw9XCIjZmRlNjhhXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMFwiLz48cGF0aCBkPVwiTTU5Ni4wNzYgMTk3LjA0NGMtMy4zNDItNTYuMDkgNTYuODk3LTc3LjgzMSA4OS4wMTctNTEuMzYxbS00MTAuNjUgMTI4LjgxOWMtMjIuNzUzLTUxLjM3Ny04Ni4yNTYtNDMuMDctMTAyLjY1OS00LjgxNlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiIzZkNWU1NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjExXCIvPjxwYXRoIGQ9XCJNODMzLjU2OCAyODguMDJjLjA1IDE4LjA0Ni0xMi41ODQgMzAuNjk5LTIxLjM0NiAzMi4yMTEtOC43NjIgMS41MTItMTcuMDMxLTEuMDk5LTE4LjU4NC0xLjM0MSAwIDAtNjEuMzYzLTYuMTAzLTEwNS42MjcgNi45MjEtNDQuMjY1IDEzLjAyNi04Ny4wNCA0Ny4zODctOTQuNjM3IDUxLjg5Mi02LjYyNyAzLjkyOC0yOS4xMTIgNy42OTctNDQuNDYyLTEyLjkzOC0xNS4zNTEtMjAuNjM2LjAyNC00MS41MjYuMDI0LTQxLjUyNnMxMi42ODUtMTguMjc5IDQwLjc3MS0zNS4xMjNjMjguMDg4LTE2Ljg0NCAyNC42MjQtMTMuMjI2IDUyLjMyNi0yNS42OTYgMTUuMjQ3LTYuODY1IDQzLjMxOS0xNC4xODYgNjcuNDI5LTE3LjA2OSAyNS4xOTMtMy4wMTEgNDYuMzQ4LTEuMzg0IDU3LjY3My43NjkgMjIuMTY1IDQuMjEyIDI4LjYzMiA1LjkzIDM5LjE2OSA5LjIyOSAxMi40NTEgMy44OTggMjcuMjE0IDE0LjUxNiAyNy4yNjQgMzIuNjcxWlwiIGZpbGw9XCIjZmZmXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCI4XCIvPjxwYXRoIGQ9XCJNNTU4LjM1MSAzNDUuNjMyYy0zLjQ1OC0xNC4yMzcgNS4yMTQtMjguNTY2IDE5LjM2Ny0zMi4wMDMgMTQuMTU0LTMuNDM3IDI4LjQzIDUuMzIgMzEuODg3IDE5LjU1NyAzLjQ1OCAxNC4yMzgtNS4yMTIgMjguNTY3LTE5LjM2NyAzMi4wMDQtMTQuMTUyIDMuNDM3LTI4LjQzLTUuMzE5LTMxLjg4Ny0xOS41NThaXCIgZmlsbD1cIiM2ZDVlNTZcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiIzZkNWU1NlwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjYuMjY4XCIvPjxwYXRoIGQ9XCJNMjIwLjI0OSA0ODMuNDE2YzQ2LjgxLTExLjY4OSA5MS4zMjMtLjQ2NyA5OS40MiAyNS4wNjQgOC4wOTggMjUuNTMyLTIzLjI4NiA1NS43MDYtNzAuMDk3IDY3LjM5My00Ni44MTEgMTEuNjg5LTkxLjMyMy40NjctOTkuNDItMjUuMDY0LTguMDk3LTI1LjUzMiAyMy4yODYtNTUuNzA2IDcwLjA5Ny02Ny4zOTNaXCIgZmlsbD1cInVybCgjYSlcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgb3BhY2l0eT1cIi4yNjFcIi8+PHBhdGggZD1cIk03MzkuOSAzNTcuMjI2Yy00Ni45NTkgMTEuMDgyLTgxLjM2NyA0MS40NjktNzYuODUzIDY3Ljg3MSA0LjUxNCAyNi40MDIgNDYuMjQxIDM4LjgyMSA5My4xOTggMjcuNzM4IDQ2Ljk1OC0xMS4wODEgODEuMzY2LTQxLjQ2NyA3Ni44NTMtNjcuODY5LTQuNTE0LTI2LjQwMy00Ni4yNDEtMzguODIxLTkzLjE5OC0yNy43NFpcIiBmaWxsPVwidXJsKCNiKVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBvcGFjaXR5PVwiLjI2MVwiLz48cGF0aCBkPVwiTTQwMC45MzQgMzk4LjkxN2MtLjU5OSAxOC4wMzQtMTMuNjgxIDMwLjIxOC0yMi40OTQgMzEuNDA5LTguODEyIDEuMTkyLTE2Ljk4Mi0xLjcxNi0xOC41MjYtMi4wMTQgMCAwLTYxLjEwOS04LjMzNC0xMDUuODE5IDMuMDctNDQuNzA5IDExLjQwNC04OC42OTYgNDQuMTgxLTk2LjQ1MiA0OC40MDYtNi43NjMgMy42ODMtMjkuMzcyIDYuNjMyLTQzLjk3Mi0xNC41NDYtMTQuNi0yMS4xOCAxLjUxOS00MS40OTQgMS41MTktNDEuNDk0czEzLjMzNS0xNy44MDMgNDIuMDEzLTMzLjYxMmMyOC42NzctMTUuODA5IDI1LjA4NS0xMi4zMTkgNTMuMjIyLTIzLjc3MiAxNS40ODQtNi4zMDQgNDMuODAzLTEyLjU5OCA2OC4wMDUtMTQuNiAyNS4yODgtMi4wOTMgNDYuMzczLjMwNSA1Ny42MTYgMi44NjcgMjIgNS4wMTYgMjguNDAxIDYuOTY4IDM4LjgxMyAxMC42NDkgMTIuMzA0IDQuMzQ4IDI2LjY3NyAxNS40OTYgMjYuMDc1IDMzLjYzN1pcIiBmaWxsPVwiI2ZmZlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiOFwiLz48cGF0aCBkPVwiTTEyOS4wNSA0NDUuNTQ2Yy0zLjQ1OC0xNC4yMzkgNS4yMTMtMjguNTY2IDE5LjM2Ny0zMi4wMDMgMTQuMTUzLTMuNDM3IDI4LjQyOSA1LjMxOCAzMS44ODcgMTkuNTU3IDMuNDU4IDE0LjIzOC01LjIxMyAyOC41NjYtMTkuMzY3IDMyLjAwMy0xNC4xNTMgMy40MzctMjguNDMtNS4zMTgtMzEuODg3LTE5LjU1N1pcIiBmaWxsPVwiIzZkNWU1NlwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjNmQ1ZTU2XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiNi4yNjhcIi8+PHBhdGggZD1cIk00MjQuMzgxIDY5Ni4zODZzNjQuNDI3IDEzLjY0NiAxMDEuOTk2IDUuNzU3QzY0MC42NTMgNjc4LjE0NiA2OTAuOCA1MjEuODk0IDY5MC44IDUyMS44OTRcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNkMDg4MTlcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBzdHJva2Utd2lkdGg9XCIxMVwiLz48cGF0aCBkPVwiTTc5Ni4wNCA2NjYuNzc0cy0xMC43MzQtNDQuMTY1LTQxLjQwNS0xMS4zNDhjLTkuNjgxIDEwLjM1OS0xMC40MzggNDAuNjA0LTI4LjIxNyA4MS44OS0xNS45NDIgMzcuMDItMzkuNTY0IDYwLjcyOC00Mi45MzggNzYuMDYzLTMuMzc0IDE1LjMzNS40NTEgMzUuOTkyIDI2LjM1MiA0MS41MzcgMjUuOTAyIDUuNTQ1IDQxLjk2Ny0yMy4zODEgNDEuOTY3LTIzLjM4MWw0NC4yNDEtMTY0Ljc2MVpcIiBmaWxsPVwiI2ZkZTY4YVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBzdHJva2U9XCIjZDA4ODE5XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMTBcIi8+PHBhdGggZD1cIk03OTMuMzM3IDY2NC43MzRjLTM3LjA3NSAxNjAuMDQ1LTUxLjczIDE2My4xNDUtNDAuMzQzIDE4NC44NDUgMTEuMzg3IDIxLjcwMSA1MS40MTcgMzMuNzE2IDcxLjg3Ni03LjMxMyA2LjczNC0xMy41MDUtMS4zMS00My4zMTctMS41MTEtNzguMDc3LS4zMDctNTMuMDYgMTYuODY1LTg2LjExMSAxMC40MDMtOTguMS0xNS4zMzItMjguNDUyLTM5LjM3Ny01Ljg3NS00MC40MjUtMS4zNTVaXCIgZmlsbD1cIiNmZGU2OGFcIiBmaWxsLXJ1bGU9XCJldmVub2RkXCIgc3Ryb2tlPVwiI2QwODgxOVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIHN0cm9rZS13aWR0aD1cIjEwXCIvPjwvc3ZnPic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xyXG4gIGhvc3RuYW1lOiBcImh0dHBzOi8vc2VhbWljZS5naXRodWIuaW8vYmxvZy9cIixcclxuXHJcbiAgYXV0aG9yOiB7XHJcbiAgICBuYW1lOiBcIkhhaXl1ZVwiLFxyXG4gICAgdXJsOiBcImh0dHBzOi8vc2VhbWljZS5naXRodWIuaW8vYmxvZy9cIixcclxuICB9LFxyXG5cclxuICBpY29uQXNzZXRzOiBcImZvbnRhd2Vzb21lLXdpdGgtYnJhbmRzXCIsXHJcblxyXG4gIGxvZ286IFwiL2hhaXl1ZS5qcGdcIixcclxuXHJcbiAgLy9yZXBvOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUvdnVlcHJlc3MtdGhlbWUtaG9wZVwiLFxyXG5cclxuICBkb2NzRGlyOiBcInNyY1wiLFxyXG5cclxuICBibG9nOiB7XHJcbiAgICBtZWRpYXM6IHtcclxuICAgICAgLy9CYWlkdTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vQmlsaUJpbGk6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvL0JpdGJ1Y2tldDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vRGluZ2Rpbmc6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvL0Rpc2NvcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvL0RyaWJiYmxlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy9FbWFpbDogXCJtYWlsdG86aW5mb0BleGFtcGxlLmNvbVwiLFxyXG4gICAgICAvL0V2ZXJub3RlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy9GYWNlYm9vazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vRmxpcGJvYXJkOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy9HaXRlZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vR2l0SHViOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy9HaXRsYWI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvL0dtYWlsOiBcIm1haWx0bzppbmZvQGV4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vSW5zdGFncmFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy9MYXJrOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy9MaW5lczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIExpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9oYWl5dWUtd2FuZy05YjU0MTAxMDMvXCIsXHJcbiAgICAgIC8vUGludGVyZXN0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy9Qb2NrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvL1FROiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy9Rem9uZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vUmVkZGl0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy9Sc3M6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvL1N0ZWFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy9Ud2l0dGVyOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy9XZWNoYXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvL1dlaWJvOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgLy9XaGF0c2FwcDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vWW91dHViZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXHJcbiAgICAgIC8vWmhpaHU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxyXG4gICAgICAvL01ySG9wZTogW1wiaHR0cHM6Ly9taXN0ZXItaG9wZS5jb21cIiwgTVJfSE9QRV9BVkFUQVJdLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBsb2NhbGVzOiB7XHJcbiAgICBcIi9cIjoge1xyXG4gICAgICAvLyBuYXZiYXJcclxuICAgICAgbmF2YmFyOiBlbk5hdmJhcixcclxuXHJcbiAgICAgIC8vIHNpZGViYXJcclxuICAgICAgc2lkZWJhcjogZW5TaWRlYmFyLFxyXG4gICAgICBoZWFkZXJEZXB0aDogNCwgXHJcblxyXG4gICAgICBmb290ZXI6IFwiRW1haWwgbWUgaWYgbmVlZGVkXCIsXHJcblxyXG4gICAgICBkaXNwbGF5Rm9vdGVyOiB0cnVlLFxyXG5cclxuICAgICAgYmxvZzoge1xyXG4gICAgICAgIC8vZGVzY3JpcHRpb246IFwiQSBmdWxsc3RhY2sgcHJvZ3JhbW1lclwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgZGF0YSBzY2llbmNlIHN0dWRlbnRcIixcclxuICAgICAgICBpbnRybzogXCIvaW50cm8uaHRtbFwiLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgbWV0YUxvY2FsZXM6IHtcclxuICAgICAgICBlZGl0TGluazogXCJFZGl0IHRoaXMgcGFnZSBvbiBHaXRIdWJcIixcclxuICAgICAgfSxcclxuICAgIH1cclxuICAgIC8vLFxyXG5cclxuICAgIC8vLyoqXHJcbiAgICAvLyAqIENoaW5lc2UgbG9jYWxlIGNvbmZpZ1xyXG4gICAgLy8gKi9cclxuICAgIC8vXCIvemgvXCI6IHtcclxuICAgIC8vICAvLyBuYXZiYXJcclxuICAgIC8vICBuYXZiYXI6IHpoTmF2YmFyLFxyXG4gICAgLy8gIC8vIHNpZGViYXJcclxuICAgIC8vICBzaWRlYmFyOiB6aFNpZGViYXIsXHJcbiAgICAvLyAgZm9vdGVyOiBcIlx1OUVEOFx1OEJBNFx1OTg3NVx1ODExQVwiLFxyXG4gICAgLy8gIGRpc3BsYXlGb290ZXI6IHRydWUsXHJcbiAgICAvLyAgYmxvZzoge1xyXG4gICAgLy8gICAgZGVzY3JpcHRpb246IFwiXHU0RTAwXHU0RTJBXHU1MjREXHU3QUVGXHU1RjAwXHU1M0QxXHU4MDA1XCIsXHJcbiAgICAvLyAgICBpbnRybzogXCIvemgvaW50cm8uaHRtbFwiLFxyXG4gICAgLy8gIH0sXHJcbiAgICAvLyAgLy8gcGFnZSBtZXRhXHJcbiAgICAvLyAgbWV0YUxvY2FsZXM6IHtcclxuICAgIC8vICAgIGVkaXRMaW5rOiBcIlx1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1XCIsXHJcbiAgICAvLyAgfSxcclxuICAgIC8vfSxcclxuICB9LFxyXG5cclxuICBlbmNyeXB0OiB7XHJcbiAgICBjb25maWc6IHtcclxuICAgICAgXCIvdW5pc2EvMjAyM1NQNS9BZHZhbmNlZEFuYWx5dGljVGVjaG5pcXVlczEvUHJhY1wiOiBbXCIjMTIzNFwiXSxcclxuICAgICAgXCIvdW5pc2EvMjAyM1NQNS9BZHZhbmNlZEFuYWx5dGljVGVjaG5pcXVlczIvYXNzaWdubWVudDFcIjogW1wiI1RodWNcIl0sXHJcbiAgICAgIFwiL1Rhc2svdGFza19kZXRhaWxzLmh0bWxcIjogW1wiIzEyMzRcIl0sXHJcbiAgICAgIFwiL2RlbW8vKlwiOiBbXCIxMjM0XCJdLFxyXG4gICAgICBcIi9kZW1vL2VuY3J5cHQuaHRtbFwiOiBbXCIxMjM0XCJdLFxyXG4gICAgICAvL1wiL3poL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHBsdWdpbnM6IHtcclxuICAgIGJsb2c6IHRydWUsXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIC8vIGNvbXBvbmVudHMgeW91IHdhbnRcclxuICAgICAgY29tcG9uZW50czogW1xyXG4gICAgICAgIFwiUERGXCIsXHJcbiAgICAgICAgXCJZb3VUdWJlXCIsXHJcbiAgICAgICAgXCJWaWRlb1BsYXllclwiLFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuXHJcbiAgICBjb21tZW50OiB7XHJcbiAgICAgIC8vIFlvdSBzaG91bGQgZ2VuZXJhdGUgYW5kIHVzZSB5b3VyIG93biBjb21tZW50IHNlcnZpY2VcclxuICAgICAgcHJvdmlkZXI6IFwiV2FsaW5lXCIsXHJcbiAgICAgIHNlcnZlclVSTDogXCJodHRwczovL204dzJraGRhLmFwaS5sbmNsZGdsb2JhbC5jb21cIixcclxuICAgIH0sXHJcblxyXG4gICAgLy8gYWxsIGZlYXR1cmVzIGFyZSBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGZlYXR1cmVzIHlvdSBuZWVkIGhlcmVcclxuICAgIG1kRW5oYW5jZToge1xyXG4gICAgICBhbGlnbjogdHJ1ZSxcclxuICAgICAgYXR0cnM6IHRydWUsXHJcbiAgICAgIGNoYXJ0OiB0cnVlLFxyXG4gICAgICBjb2RldGFiczogdHJ1ZSxcclxuICAgICAgZGVtbzogdHJ1ZSxcclxuICAgICAgZWNoYXJ0czogdHJ1ZSxcclxuICAgICAgZmlndXJlOiB0cnVlLFxyXG4gICAgICBmbG93Y2hhcnQ6IHRydWUsXHJcbiAgICAgIGdmbTogdHJ1ZSxcclxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXHJcbiAgICAgIGltZ1NpemU6IHRydWUsXHJcbiAgICAgIGluY2x1ZGU6IHRydWUsXHJcbiAgICAgIGthdGV4OiB0cnVlLFxyXG4gICAgICBtYXJrOiB0cnVlLFxyXG4gICAgICBtZXJtYWlkOiB0cnVlLFxyXG4gICAgICBwbGF5Z3JvdW5kOiB7XHJcbiAgICAgICAgcHJlc2V0czogW1widHNcIiwgXCJ2dWVcIl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHByZXNlbnRhdGlvbjogW1wiaGlnaGxpZ2h0XCIsIFwibWF0aFwiLCBcInNlYXJjaFwiLCBcIm5vdGVzXCIsIFwiem9vbVwiXSxcclxuICAgICAgc3R5bGl6ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hdGNoZXI6IFwiUmVjb21tZW5kZWRcIixcclxuICAgICAgICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxyXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJSZWNvbW1lbmRlZFwiLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIHN1YjogdHJ1ZSxcclxuICAgICAgc3VwOiB0cnVlLFxyXG4gICAgICB0YWJzOiB0cnVlLFxyXG4gICAgICB2UHJlOiB0cnVlLFxyXG4gICAgICB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1bmNvbW1lbnQgdGhlc2UgaWYgeW91IHdhbnQgYSBQV0FcclxuICAgIC8vIHB3YToge1xyXG4gICAgLy8gICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxyXG4gICAgLy8gICBjYWNoZUhUTUw6IHRydWUsXHJcbiAgICAvLyAgIGNhY2hlUGljOiB0cnVlLFxyXG4gICAgLy8gICBhcHBlbmRCYXNlOiB0cnVlLFxyXG4gICAgLy8gICBhcHBsZToge1xyXG4gICAgLy8gICAgIGljb246IFwiL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTUyLnBuZ1wiLFxyXG4gICAgLy8gICAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIG1zVGlsZToge1xyXG4gICAgLy8gICAgIGltYWdlOiBcIi9hc3NldHMvaWNvbi9tcy1pY29uLTE0NC5wbmdcIixcclxuICAgIC8vICAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIG1hbmlmZXN0OiB7XHJcbiAgICAvLyAgICAgaWNvbnM6IFtcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay01MTIucG5nXCIsXHJcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcclxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay0xOTIucG5nXCIsXHJcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxyXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtNTEyLnBuZ1wiLFxyXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXHJcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAge1xyXG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTIucG5nXCIsXHJcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgXSxcclxuICAgIC8vICAgICBzaG9ydGN1dHM6IFtcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgbmFtZTogXCJEZW1vXCIsXHJcbiAgICAvLyAgICAgICAgIHNob3J0X25hbWU6IFwiRGVtb1wiLFxyXG4gICAgLy8gICAgICAgICB1cmw6IFwiL2RlbW8vXCIsXHJcbiAgICAvLyAgICAgICAgIGljb25zOiBbXHJcbiAgICAvLyAgICAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9ndWlkZS1tYXNrYWJsZS5wbmdcIixcclxuICAgIC8vICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcclxuICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6IFwibWFza2FibGVcIixcclxuICAgIC8vICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAvLyAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgXSxcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgXSxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIH0sXHJcbiAgfSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovd29ya3NwYWNlLzExLmJsb2cvbXlnaXRibG9nL3NyYy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFx3b3Jrc3BhY2VcXFxcMTEuYmxvZ1xcXFxteWdpdGJsb2dcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxuYXZiYXJcXFxcZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3dvcmtzcGFjZS8xMS5ibG9nL215Z2l0YmxvZy9zcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZW5OYXZiYXIgPSBuYXZiYXIoW1xyXG4gIFwiL1wiLFxyXG4gIHtcclxuICAgIHRleHQ6IFwiTWFzdGVyIG9mIERhdGEgU2NpZW5jZSAoVW5pc2EpXCIsXHJcbiAgICBpY29uOiBcIi9hc3NldHMvaWNvbi91bmlzYS91bmlzYS1sb2dvLnN2Z1wiLFxyXG4gICAgcHJlZml4OiBcIi91bmlzYS9cIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHt0ZXh0OiBcIlRlcm0xKDIwMjJTUDUpXCIsIGxpbms6IFwiMjAyMlNQNVwifSxcclxuICAgICAge3RleHQ6IFwiVGVybTIoMjAyM1NQMilcIiwgbGluazogXCIyMDIzU1AyXCJ9LFxyXG4gICAgICB7dGV4dDogXCJUZXJtMygyMDIzU1A1KVwiLCBsaW5rOiBcIjIwMjNTUDVcIn0sXHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIkxpZmUgaW4gNDIgQWRlbGFpZGVcIixcclxuICAgIGljb246IFwiL2Fzc2V0cy9pY29uLzQyYWRlbGFpZGUvNDJfYWRlbGFpZGUuc3ZnXCIsXHJcbiAgICBwcmVmaXg6IFwiLzQyYWRlbGFpZGUvXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7dGV4dDogXCJQaXNjaW5lKERvbHBoaW4pXCIsIGxpbms6IFwicGlzY2luZVwiLCBpY29uOiBcIi9hc3NldHMvaWNvbi80MmFkZWxhaWRlL2RvbHBoaW4uc3ZnXCJ9LFxyXG4gICAgICB7dGV4dDogXCI0MmN1cnN1cyhTb2wpXCIsIGxpbms6IFwiNDJjdXJzdXNcIiwgaWNvbjogXCIvYXNzZXRzL2ljb24vNDJhZGVsYWlkZS9zb2wuc3ZnXCJ9LFxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJUZWNobmlxdWVzXCIsXHJcbiAgICBpY29uOiBcImJ1aWxkaW5nLWNvbHVtbnNcIixcclxuICAgIHByZWZpeDogXCIvdGVjaG5pcXVlcy9cIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHt0ZXh0OiBcIkdlb3NjaWVuY2VcIiwgbGluazogXCJnZW9zY2llbmNlXCJ9LFxyXG4gICAgICB7dGV4dDogXCJQeXRob25cIiwgbGluazogXCJweXRob25cIn0sXHJcbiAgICAgIHt0ZXh0OiBcIlJcIiwgbGluazogXCJSXCJ9LFxyXG4gICAgICB7dGV4dDogXCJHaXRodWJcIiwgbGluazogXCJnaXRodWJcIn0sXHJcbiAgICBdXHJcbiAgfSxcclxuXHJcbiAgLy9BbGwgdGhlIHNhbXBsZSBiZWxvd1xyXG4gIC8qXHJcbiAge1xyXG4gICAgdGV4dDogXCJCbG9nIEd1aWRhbmNlXCIsXHJcbiAgICBsaW5rOiBcIi9kZW1vL1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlBvc3QgU2FtcGxlXCIsXHJcbiAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcclxuICAgIHByZWZpeDogXCIvZGVtby9wb3N0cy9cIixcclxuICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkFwcGxlXCIsXHJcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImFwcGxlL1wiLFxyXG4gICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiQXBwbGUxXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIjFcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIkFwcGxlMlwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCIyXCIgfSxcclxuICAgICAgICAgIFwiM1wiLFxyXG4gICAgICAgICAgXCI0XCIsXHJcbiAgICAgICAgICB7IHRleHQ6IFwiQXBwbGV4eHhcIiwgaWNvbjogXCJhdXRob3ItaWNvblwiLCBsaW5rOiBcInh4eFwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiQmFuYW5hXCIsXHJcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgcHJlZml4OiBcImJhbmFuYS9cIixcclxuICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIkJhbmFuYSAxXCIsXHJcbiAgICAgICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIjFcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiQmFuYW5hIDJcIixcclxuICAgICAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiMlwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiM1wiLFxyXG4gICAgICAgICAgXCI0XCIsXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgeyB0ZXh0OiBcIkNoZXJyeVwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJjaGVycnlcIiB9LFxyXG4gICAgICB7IHRleHQ6IFwiRHJhZ29uIEZydWl0XCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcImRyYWdvbmZydWl0XCIgfSxcclxuICAgICAgXCJ0b21hdG9cIixcclxuICAgICAgXCJzdHJhd2JlcnJ5XCIsXHJcbiAgICBdLFxyXG4gIH1cclxuICAqL1xyXG4gIHtcclxuICAgIHRleHQ6IFwiR2l0aHViXCIsXHJcbiAgICBpY29uOiBcIi9naXRodWIuc3ZnXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9zZWFtaWNlL1wiLFxyXG4gIH0sXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L3dvcmtzcGFjZS8xMS5ibG9nL215Z2l0YmxvZy9zcmMvLnZ1ZXByZXNzL25hdmJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd29ya3NwYWNlXFxcXDExLmJsb2dcXFxcbXlnaXRibG9nXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcbmF2YmFyXFxcXHpoLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi93b3Jrc3BhY2UvMTEuYmxvZy9teWdpdGJsb2cvc3JjLy52dWVwcmVzcy9uYXZiYXIvemgudHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHpoTmF2YmFyID0gbmF2YmFyKFtcclxuICBcIi96aC9cIixcclxuICBcIi96aC9kZW1vL1wiLFxyXG4gIHtcclxuICAgIHRleHQ6IFwiXHU1MzVBXHU2NTg3XCIsXHJcbiAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcclxuICAgIHByZWZpeDogXCIvemgvcG9zdHMvXCIsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTgyRjlcdTY3OUNcIixcclxuICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcclxuICAgICAgICBwcmVmaXg6IFwiYXBwbGUvXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTgyRjlcdTY3OUMxXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIjFcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1ODJGOVx1Njc5QzJcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiMlwiIH0sXHJcbiAgICAgICAgICBcIjNcIixcclxuICAgICAgICAgIFwiNFwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1OTk5OVx1ODU0OVwiLFxyXG4gICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gICAgICAgIHByZWZpeDogXCJiYW5hbmEvXCIsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJcdTk5OTlcdTg1NDkgMVwiLFxyXG4gICAgICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcclxuICAgICAgICAgICAgbGluazogXCIxXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1OTk5OVx1ODU0OSAyXCIsXHJcbiAgICAgICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIjJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcIjNcIixcclxuICAgICAgICAgIFwiNFwiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHsgdGV4dDogXCJcdTZBMzFcdTY4NDNcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiY2hlcnJ5XCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1NzA2Qlx1OUY5OVx1Njc5Q1wiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJkcmFnb25mcnVpdFwiIH0sXHJcbiAgICAgIFwidG9tYXRvXCIsXHJcbiAgICAgIFwic3RyYXdiZXJyeVwiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRleHQ6IFwiVjIgXHU2NTg3XHU2ODYzXCIsXHJcbiAgICBpY29uOiBcImJvb2tcIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly90aGVtZS1ob3BlLnZ1ZWpzLnByZXNzL3poL1wiLFxyXG4gIH0sXHJcbl0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L3dvcmtzcGFjZS8xMS5ibG9nL215Z2l0YmxvZy9zcmMvLnZ1ZXByZXNzL3NpZGViYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdvcmtzcGFjZVxcXFwxMS5ibG9nXFxcXG15Z2l0YmxvZ1xcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxcZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3dvcmtzcGFjZS8xMS5ibG9nL215Z2l0YmxvZy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBlblNpZGViYXIgPSBzaWRlYmFyKHtcclxuICBcIi9cIjogW1xyXG4gICAgXCJcIixcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJVbmlzYVwiLFxyXG4gICAgICBpY29uOiBcIi9hc3NldHMvaWNvbi91bmlzYS91bmlzYS1sb2dvLnN2Z1wiLFxyXG4gICAgICBwcmVmaXg6IFwidW5pc2EvXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJMaWZlIGluIDQyIEFkZWxhaWRlXCIsXHJcbiAgICAgIGljb246IFwiL2Fzc2V0cy9pY29uLzQyYWRlbGFpZGUvNDJfYWRlbGFpZGUuc3ZnXCIsXHJcbiAgICAgIHByZWZpeDogXCI0MmFkZWxhaWRlL1wiLFxyXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiVGVjaG5pcXVlc1wiLFxyXG4gICAgICBpY29uOiBcImJvb2tcIixcclxuICAgICAgcHJlZml4OiBcInRlY2huaXF1ZXMvXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJNYXRoXCIsXHJcbiAgICAgIGljb246IFwic3F1YXJlLXJvb3QtdmFyaWFibGVcIixcclxuICAgICAgcHJlZml4OiBcIk1hdGgvXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJUYXNrXCIsXHJcbiAgICAgIGljb246IFwibGlzdC1jaGVja1wiLFxyXG4gICAgICBwcmVmaXg6IFwiVGFzay9cIixcclxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXHJcbiAgICB9LFxyXG4gICAgXCJpbnRyb1wiXHJcbiAgXSxcclxufSk7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovd29ya3NwYWNlLzExLmJsb2cvbXlnaXRibG9nL3NyYy8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcd29ya3NwYWNlXFxcXDExLmJsb2dcXFxcbXlnaXRibG9nXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcc2lkZWJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd29ya3NwYWNlLzExLmJsb2cvbXlnaXRibG9nL3NyYy8udnVlcHJlc3Mvc2lkZWJhci96aC50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHpoU2lkZWJhciA9IHNpZGViYXIoe1xyXG4gIFwiL3poL1wiOiBbXHJcbiAgICBcIlwiLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIlx1NTk4Mlx1NEY1NVx1NEY3Rlx1NzUyOFwiLFxyXG4gICAgICBpY29uOiBcImxhcHRvcC1jb2RlXCIsXHJcbiAgICAgIHByZWZpeDogXCJkZW1vL1wiLFxyXG4gICAgICBsaW5rOiBcImRlbW8vXCIsXHJcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJcdTY1ODdcdTdBRTBcIixcclxuICAgICAgaWNvbjogXCJib29rXCIsXHJcbiAgICAgIHByZWZpeDogXCJwb3N0cy9cIixcclxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXHJcbiAgICB9LFxyXG4gICAgXCJpbnRyb1wiLFxyXG4gICAgXCJzbGlkZXNcIixcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVCxTQUFTLHdCQUF3Qjs7O0FDQW5DLFNBQVMsaUJBQWlCOzs7QUNBVixTQUFTLGNBQWM7QUFFalYsSUFBTSxXQUFXLE9BQU87QUFBQSxFQUM3QjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxNQUNSLEVBQUMsTUFBTSxrQkFBa0IsTUFBTSxVQUFTO0FBQUEsTUFDeEMsRUFBQyxNQUFNLGtCQUFrQixNQUFNLFVBQVM7QUFBQSxNQUN4QyxFQUFDLE1BQU0sa0JBQWtCLE1BQU0sVUFBUztBQUFBLElBQzFDO0FBQUEsRUFDRjtBQUFBLEVBQ0E7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxNQUNSLEVBQUMsTUFBTSxvQkFBb0IsTUFBTSxXQUFXLE1BQU0sc0NBQXFDO0FBQUEsTUFDdkYsRUFBQyxNQUFNLGlCQUFpQixNQUFNLFlBQVksTUFBTSxrQ0FBaUM7QUFBQSxJQUNuRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixVQUFVO0FBQUEsTUFDUixFQUFDLE1BQU0sY0FBYyxNQUFNLGFBQVk7QUFBQSxNQUN2QyxFQUFDLE1BQU0sVUFBVSxNQUFNLFNBQVE7QUFBQSxNQUMvQixFQUFDLE1BQU0sS0FBSyxNQUFNLElBQUc7QUFBQSxNQUNyQixFQUFDLE1BQU0sVUFBVSxNQUFNLFNBQVE7QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQTBERjtBQUNGLENBQUM7OztBRHJPRCxJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUY7QUFBQSxFQUNBO0FBQUE7QUFBQTtBQUdGLENBQUM7IiwKICAibmFtZXMiOiBbIm5hdmJhciIsICJuYXZiYXIiLCAic2lkZWJhciIsICJzaWRlYmFyIl0KfQo=
