import DefaultTheme from "vitepress/theme";
// 组件
import Iframe from '../components/Iframe.vue'
import Global from '../components/Global.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Iframe", Iframe);
    app.component("Global", Global);
  },
};
