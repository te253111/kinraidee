import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/HomePage.vue";
import Random from "../views/RandomPage.vue";
import Setting from "../views/SettingPage.vue";
import MainVote from "../views/MainVotePage.vue";
import SaveShare from "../views/SaveSharePage.vue";
import Vote from "../views/VotePage.vue";
import VoteComplete from "../views/VoteCompletePage.vue";
import Edit from "../views/EditPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/random", component: Random },
  { path: "/setting", component: Setting },
  { path: "/mainvote", component: MainVote },
  { path: "/saveshare", component: SaveShare },
  { path: "/vote/:id", component: Vote },
  { path: "/votecomplete", component: VoteComplete },
  { path: "/edit/:id", component: Edit },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
