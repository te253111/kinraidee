<template>
  <div id="nav" class="nav">
    <div class="row">
      <div class="col">
        <router-link to="/setting" class="link"
          ><q-icon :name="matMenu" class="font24"
        /></router-link>
      </div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
import { matMenu } from "@quasar/extras/material-icons";
import "../styles/main.css";
export default {
  created() {
    this.matMenu = matMenu;
  },
};
</script>
