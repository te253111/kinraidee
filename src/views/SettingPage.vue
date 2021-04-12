<template>
  <div id="nav" class="nav">
    <div class="row">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col">
        <q-icon :name="matClose" class="font24" @click="$router.go(-1)" />
      </div>
    </div>
  </div>
  <div>Setting</div>
</template>
<script>
import { matClose } from "@quasar/extras/material-icons";
import "../styles/main.css";
export default {
  created() {
    this.matClose = matClose;
  },
};
</script>
