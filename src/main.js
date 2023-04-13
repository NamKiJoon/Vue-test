import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faUserSecret);

const app = createApp(App);

app.use(router).use(createVuestic()).mount("#app");
app.use(PrimeVue);
app.component("Button", Button);
app.component("font-awesome-icon", FontAwesomeIcon);
