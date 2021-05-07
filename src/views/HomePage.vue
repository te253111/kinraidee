<template>
  <div>
    <NavMenu />
    <router-link to="/random" class="link">
      <Button class="mt32 font18 circle250">สุ่มอาหาร</Button>
    </router-link>
    <router-link to="/random" class="link">
      <div class="mt16 font18 margin50">
        <q-btn
          size="lg"
          color="primary"
          label="สุ่มแบบละเอียด"
          class="full-width"
        />
      </div>
    </router-link>
    <router-link to="/mainvote" class="link">
      <div class="mt16 font18 margin50">
        <q-btn
          size="lg"
          color="primary"
          label="เปิดโหวต / ใส่ตัวเลือก"
          class="full-width"
        />
      </div>
    </router-link>
    <q-banner class="bg-grey-3 ads"> ADS </q-banner>
  </div>
</template>
<script>
import NavMenu from "../components/NavMenu.vue";
import "../styles/main.css";
export default {
  components: { NavMenu },
};
</script>
