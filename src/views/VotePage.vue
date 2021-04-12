<template>
  <div>
    <NavMenu />
    <div class="text-h3 mt32">เปิดโหวต</div>
    <div class="normalVote mt16 font18" v-for="item in buffitems" :key="item">
      {{ item }}
    </div>
    <router-link to="/SaveShare" class="link">
      <div class="red mt32 font18">บันทึกและแชร์</div>
    </router-link>
    <q-banner class="bg-grey-3 ads"> ADS </q-banner>
  </div>
</template>
<script>
import NavMenu from '../components/NavMenu.vue';
import '../styles/main.css';
import axios from 'axios';
import { onMounted, reactive } from 'vue';

export default {
  components: { NavMenu },
  setup() {
    const datas = reactive([]);
    const buffitems = reactive([]);

    onMounted(() => {
      RandomVote();
    });

    const RandomVote = () => {
      axios.get('data.json').then((response) => {
        Object.assign(datas, response.data);
      });
    };

    return {
      datas,
      buffitems,
    };
  },
};
</script>
