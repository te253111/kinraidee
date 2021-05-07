<template>
  <div id="nav" class="nav">
    <div class="row">
      <div class="col-6">
        <q-icon
          :name="matArrowBackIos"
          class="font24"
          @click="$router.go(-1)"
        />
        กลับไปหน้าแรก
      </div>
      <div class="col-2"></div>
      <div class="col-2"></div>
      <div class="col-2"></div>
    </div>
  </div>
</template>
<script>
import { matArrowBackIos } from "@quasar/extras/material-icons";
import "../styles/main.css";
export default {
  created() {
    this.matArrowBackIos = matArrowBackIos;
  },
};
</script>
