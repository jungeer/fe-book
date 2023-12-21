import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "前端工作入门小册 📚",
  description: "前端，前端学习，前端自学，给小白和前端初学者的工作入门小册 📚",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "关于我", link: "https://jungeer.github.io/" },
    ],

    search: {
      provider: "local",
    },

    sidebar: [
      {
        text: "Html",
        items: [{ text: "html基本简介", link: "/markdown-examples" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jungeer/fe-book" },
    ],

    base: "/fe-book/",
  },
});
