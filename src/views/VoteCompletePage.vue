<template>
  <div>
    <NavMenu />
    <div class="text-h3 mt32">โหวตสำเร็จ</div>
    <router-link to="/" class="link">
      <div class="margin50">
        <q-btn
          :disabled="isActive"
          color="red"
          class="mt16 font18 full-width"
          label="กลับหน้าหลัก"
        />
      </div>
    </router-link>
  </div>
</template>

<script>
import NavMenu from "../components/NavMenu.vue";
export default {
  components: { NavMenu },
  setup() {
    return {};
  },
};
</script>
