import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Master of Data Science (Unisa)",
    icon: "/assets/icon/unisa/unisa-logo.svg",
    prefix: "/unisa/",
    children: [
      {text: "Term1(2022SP5)", link: "2022SP5"},
      {text: "Term2(2023SP2)", link: "2023SP2"},
      {text: "Term3(2023SP5)", link: "2023SP5"},
    ]
  },
  {
    text: "Life in 42 Adelaide",
    icon: "/assets/icon/42adelaide/42_adelaide.svg",
    prefix: "/42adelaide/",
    children: [
      {text: "Piscine(Dolphin)", link: "piscine", icon: "/assets/icon/42adelaide/dolphin.svg"},
      {text: "42cursus(Sol)", link: "42cursus", icon: "/assets/icon/42adelaide/sol.svg"},
    ]
  },
  {
    text: "Techniques",
    icon: "building-columns",
    prefix: "/techniques/",
    children: [
      {text: "Geoscience", link: "geoscience"},
      {text: "Python", link: "coding/python"},
      {text: "R", link: "coding/R"},
      {text: "Github", link: "github"},
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
  {
    text: "Github",
    icon: "/github.svg",
    link: "https://github.com/seamice/",
  },
  */
]);
