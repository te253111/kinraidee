import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomePage.vue";
import Random from "../views/RandomPage.vue";
import Setting from "../views/SettingPage.vue";
import Vote from "../views/VotePage.vue";
import SaveShare from "../views/SaveSharePage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/random", component: Random },
  { path: "/setting", component: Setting },
  { path: "/vote", component: Vote },
  { path: "/SaveShare", component: SaveShare },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
