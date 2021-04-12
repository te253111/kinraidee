<template>
  <div id="nav" class="nav">
    <div class="row">
      <div class="col">
        <router-link to="/" router-link-active class="link">
          <q-icon :name="matHome" class="font24"
        /></router-link>
      </div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col">
        <router-link to="/setting" class="link"
          ><q-icon :name="matMenu" class="font24"
        /></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { matHome } from "@quasar/extras/material-icons";
import { matMenu } from "@quasar/extras/material-icons";
import "../styles/main.css";
export default {
  created() {
    this.matHome = matHome;
    this.matMenu = matMenu;
  },
};
</script>
