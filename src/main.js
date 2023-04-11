import Vue from "vue";
import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";

const app = createApp(App);
app.use(router).mount("#app");
app.use(PrimeVue);

app.component("Button", Button);
