import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
//import { searchProPlugin } from "vuepress-plugin-search-pro";
//import { cut } from "nodejs-jieba";
import { getDirname, path } from "@vuepress/utils";
const __dirname = getDirname(import.meta.url);


export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Haiyue's Blog",
      description: "Haiyue's page",
    },
    //"/zh/": {
    //  lang: "zh-CN",
    //  title: "海越个人博客",
    //  description: "个人技术生活记录",
    //},
  },
  theme,
  plugins: [
    //searchProPlugin({
    //  customFields: [
    //    {
    //      getter: (page) => page.frontmatter.category,
    //      formatter: {
    //        "/": "Category: $content",
    //      },
    //    },
    //    {
    //      getter: (page) => page.frontmatter.tag,
    //      formatter: {
    //        "/": "Tag: $content",
    //      },
    //    },
    //  ],
    //}),
  ],
  alias: {
    "@Test": path.resolve(__dirname, "components/test.vue")
  },
  head: [
    ['script', {"async":"", src: 'https://www.googletagmanager.com/gtag/js?id=G-4BP2YK8NPN', type: "text/javascript"}],
    ['script', {src: '/src/gtag.js', type: "text/javascript"}],
  ]
  // Enable it with pwa
  // shouldPrefetch: false,
});
