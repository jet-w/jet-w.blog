import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Unisa",
      icon: "/assets/icon/unisa/unisa-logo.svg",
      prefix: "unisa/",
      children: "structure",
    },
    {
      text: "Life in 42 Adelaide",
      icon: "/assets/icon/42adelaide/42_adelaide.svg",
      prefix: "42adelaide/",
      children: "structure",
    },
    {
      text: "Techniques",
      icon: "book",
      prefix: "techniques/",
      children: "structure",
    },
    "intro"
  ],
});
