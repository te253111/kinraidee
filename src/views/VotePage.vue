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
      axios.get('data.json').then((response) => {
        Object.assign(datas, response.data);
        RandomVote();
      });
    });

    const RandomVote = () => {
      let idx = Math.floor(Math.random() * datas.length);
      const obj = datas[idx];
      buffitems.push(datas[idx].name);
      Object.assign(datas, [...datas.filter((r) => r.name != obj.name)]);
    };

    return {
      datas,
      buffitems,
    };
  },
};
</script>

<!--export default {
  components: { NavMenu },
  created() {
    axios.get("data.json").then((response) => (this.datas = response.data));
  },
  mounted() {
    this.randomVote();
  },
  data() {
    return {
      datas: [],
      buffitems: [],
    };
  },
  methods: {
    randomVote() {
      const idx = Math.floor(Math.random() * this.datas.length);
      this.buffitems.push(this.datas[idx].name);
      this.datas.slice(idx);
    },
  },
};
</script>
-->
