import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Memo from "../components/Memo.vue";
import Page from "../components/Page.vue";
import Setting from "../components/Setting.vue";

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
