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
      text: "42 Adelaide",
      prefix: "42adelaide/",
      children: "structure",
    },
    {
      text: "Techniques",
      icon: "book",
      prefix: "techniques/",
      children: "structure",
    },
    {
      text: "Work",
      icon: "list-check",
      prefix: "work/",
      children: "structure",
    },
    "intro"
  ],
});
