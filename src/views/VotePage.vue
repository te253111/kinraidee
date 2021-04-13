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
    <div class="red mt32 font18" @click="save()">test</div>
    <q-banner class="bg-grey-3 ads"> ADS </q-banner>
  </div>
</template>
<script>
import { db } from "../firebase/firebaseDb";
import NavMenu from "../components/NavMenu.vue";
import "../styles/main.css";
import axios from "axios";
import { onMounted, reactive } from "vue";
export default {
  components: { NavMenu },
  setup() {
    const datas = reactive([]);
    const buffitems = reactive([]);
    async function GetDatas() {
      await axios.get("data.json").then((response) => {
        Object.assign(datas, response.data);
      });
    }
    onMounted(async () => {
      await GetDatas();
      RandomVote();
    });
    const RandomVote = () => {
      for (var i = 0; i < 3; i++) {
        let idx = Math.floor(Math.random() * datas.length);
        const obj = datas[idx];
        buffitems.push(datas[idx].name);
        Object.assign(datas, [...datas.filter((r) => r.name != obj.name)]);
      }
    };
    function save() {
      console.log("test");
    }
    return {
      save,
      datas,
      buffitems,
    };
  },
};
</script>
