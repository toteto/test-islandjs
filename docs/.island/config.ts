import { defineConfig } from "islandjs";

export default defineConfig({
  base: '/test-islandjs/',
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "Group",
          items: [
            {
              text: "Fresh",
              link: "/article/fresh",
            },
            {
              text: "Astro",
              link: "/article/astro",
            },
          ],
        },
      ],
    },
  },
});
