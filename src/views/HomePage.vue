<template>
  <div>
    <q-icon :name="matHome" />
    <q-icon :name="matMenu" />
    <div class="text-h4">กินไรดี?</div>
    <p class="normal">Normal border</p>
    <p class="red">Normal border</p>
  </div>
</template>
<script>
import { matHome } from "@quasar/extras/material-icons";
import { matMenu } from "@quasar/extras/material-icons";

export default {
  created() {
    this.matHome = matHome;
    this.matMenu = matMenu;
  },
};
</script>
<style>
p.normal {
  border: 1px solid orangered;
  border-radius: 5px;
}
p.red {
  border: 1px solid orangered;
  background-color: orangered;
  border-radius: 5px;
}
</style>
