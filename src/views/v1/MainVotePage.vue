<template>
  <div>
    <NavMenu />
    <div class="text-h3 mt32">เปิดโหวต</div>
    <div class="row margin50" v-for="item in buffitems" :key="item.name">
      <div class="col-12">
        <div class="mt16 font18 margin">
          <q-btn
            outline
            rounded
            size="md"
            color="red"
            :label="item.name"
            class="full-width"
          />
        </div>
      </div>
    </div>

    <div class="mt16 font18 margin50">
      <q-btn
        outline
        rounded
        size="md"
        color="black"
        label="เพิ่มตัวเลือก"
        class="full-width"
      />
    </div>
    <router-link to="/saveshare" class="link">
      <div class="margin50">
        <q-btn
          color="red"
          class="mt16 font18 full-width"
          label="บันทึกและแชร์"
          @click="save()"
        />
      </div>
    </router-link>
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
        buffitems.push({ name: datas[idx].name, vote: 0 });
        Object.assign(datas, [...datas.filter((r) => r.name != obj.name)]);
      }
    };
    function save() {
      db.collection("vote").add({ items: buffitems });
    }
    return {
      save,
      datas,
      buffitems,
    };
  },
};
</script>
