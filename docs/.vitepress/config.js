/*
 * @FilePath: \front-dev-docs\docs\.vitepress\config.js
 * @Author: itmanyong itmanyong@gmail.com
 * @CreateDate: Do not edit
 * @LastEditors: itmanyong itmanyong@gmail.com
 * @LastEditTime: 2022-07-10 13:13:04
 * @Description:
 */
/*
 * @FilePath: \vitepress-starter\docs\.vitepress\config.js
 * @Author: itmanyong itmanyong@gmail.com
 * @CreateDate: Do not edit
 * @LastEditors: itmanyong itmanyong@gmail.com
 * @LastEditTime: 2022-07-09 22:30:55
 * @Description:
 */
import { defineConfig } from "vitepress";
export default defineConfig({
  title: "前端开发文档",
  description: "前端开发资源文档汇聚",
  lang: "zh-CN",
  base: "/front-dev-docs/",
  // 暗夜模式
  appearance: true,
  // 忽略文中死链接
  ignoreDeadLinks: true,
  // 最近更新时间
  lastUpdated: true,
  // markdown渲染配置
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: "",
    nav: [{ text: "前端", link: "/front/react/zh-docs",activeMatch:'/front/' }],
    sidebar: {
      "/front/": [
        {
          text: "REACT",
          collapsible: true,
          items: [
            { text: "文档-REACT", link: "/front/react/zh-docs" },
            { text: "UI库-Arco", link: "/front/react/ui/arco" },
          ],
        },
        {
          text: "VUE",
          collapsible: true,
          items: [
            { text: "文档-VUE3", link: "/front/vue/zh-docs-vue3" },
            { text: "文档-VUE2", link: "/front/vue/zh-docs-vue2" },
            { text: "文档-VueRouter4", link: "/front/vue/zh-docs-vue-router4" },
            { text: "钩子-Vueuse", link: "/front/vue/hooks/vueuse" },
            { text: "UI库-Element-Plus", link: "/front/vue/ui/elementPlus" },
            { text: "UI库-Element2", link: "/front/vue/ui/element2" },
            { text: "钩子-Antd3", link: "/front/vue/ui/antd3" },
            { text: "钩子-Arco", link: "/front/vue/ui/arco" },
          ],
        },
        {
          text: "VITE插件",
          collapsible: true,
          items: [],
        },
        {
          text: "WEBPACK插件",
          collapsible: true,
          items: [],
        },
      ],
    },
    footer: {
      message: `message`,
      copyright: `copyright`,
    },
    // 最后更新文本
    lastUpdatedText: true,
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
});
