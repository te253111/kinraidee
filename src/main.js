import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import router from "./router";

createApp(App).use(Quasar, router, quasarUserOptions).mount("#app");
