import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
//import { searchProPlugin } from "vuepress-plugin-search-pro";
//import { cut } from "nodejs-jieba";

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
  // Enable it with pwa
  // shouldPrefetch: false,
  head: [
    // Other head elements...
    ['script', { async:"", src: 'https://www.googletagmanager.com/gtag/js?id=G-DEMNZ1E6YS' }],
    ['script', { src: '/src/js/gtag.js' }],
  ],
});
