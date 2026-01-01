import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// 引入Element Plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

// 引入路由
import router from "./router";

// 引入Pinia
import { createPinia } from "pinia";

const app = createApp(App);
// let a = 1;
// console.log(ElementPlusIconsVue);

// 注册Element图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
  // console.log(a++, component);
}

app.use(ElementPlus);
app.use(router);
app.use(createPinia());

app.mount("#app");
