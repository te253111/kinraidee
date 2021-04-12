<template>
  <div>
    <NavMenu />
    <div class="text-h3 mt32">กินไรดี?</div>
    <router-link to="/random" class="link">
      <div class="red mt32 font18">กดสุ่มอาหาร 1 อย่าง</div>
    </router-link>
    <router-link to="/vote" class="link">
      <div class="normal mt16 font18">เปิดโหวตกับเพื่อน</div>
    </router-link>
    <div class="font14 fontred mt16">เลือกประเภทอาหาร</div>
    <q-banner class="bg-grey-3 ads"> ADS </q-banner>
  </div>
</template>
<script>
import NavMenu from '../components/NavMenu.vue';
import '../styles/main.css';
export default {
  components: { NavMenu },
};
</script>
