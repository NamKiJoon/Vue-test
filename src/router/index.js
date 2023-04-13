import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../Pages/Home.vue";
import Memo from "../Pages/Memo.vue";
import Page from "../Pages/Page.vue";
import Page2 from "../Pages/Page2.vue";
import Page3 from "../Pages/Page3.vue";
import Setting from "../Pages/Setting.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Memo",
    path: "/memo",
    component: Memo,
  },
  {
    name: "page",
    path: "/page",
    component: Page,
  },
  {
    name: "page2",
    path: "/page2",
    component: Page2,
  },
  {
    name: "page3",
    path: "/page3",
    component: Page3,
  },
  {
    name: "setting",
    path: "/setting",
    component: Setting,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
