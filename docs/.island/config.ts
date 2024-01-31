import { defineConfig } from "islandjs";

export default defineConfig({
  base: '/test-islandjs/',
  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/test-islandjs/",
      },
    ],
    sidebar: {
      "/": [
        {
          text: "文章列表",
          items: [
            {
              text: "Fresh",
              link: "/test-islandjs/article/fresh",
            },
            {
              text: "Astro",
              link: "/test-islandjs/article/astro",
            },
          ],
        },
      ],
    },
  },
});
