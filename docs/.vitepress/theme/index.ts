import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import LangRedirect from "../components/LangRedirect.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register global components
    app.component("LangRedirect", LangRedirect);
  },
} satisfies Theme;
