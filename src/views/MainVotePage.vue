<template>
  <div>
    <NavBack />
    <div
      class="mt32 margin50"
      v-for="(item, index) in buffitems"
      :key="item.name"
    >
      <div class="row">
        <div class="col-10">
          <q-btn
            outline
            rounded
            size="md"
            color="red"
            :label="item.name"
            class="full-width"
          />
        </div>
        <div class="col-2">
          <q-icon :name="matClose" class="font32" @click="del(index)" />
        </div>
      </div>
    </div>
    <div class="margin50">
      <div class="row">
        <div class="col-10">
          <q-input v-model="text" placeholder="เพิ่มตัวเลือก" disabled />
        </div>
        <div class="col-2">
          <q-icon :name="matAdd" class="mt16 font32" @click="add()" />
        </div>
      </div>
    </div>
    <router-link to="/saveshare" class="link">
      <div class="margin50">
        <q-btn
          color="primary"
          class="mt16 font18 full-width"
          label="เปิดโหวต"
          @click="save()"
        />
      </div>
    </router-link>
    <q-banner class="bg-grey-3 ads"> ADS </q-banner>
  </div>
</template>
<script>
import { db } from "../firebase/firebaseDb";
import NavBack from "../components/NavBack.vue";
import { matAdd } from "@quasar/extras/material-icons";
import { matClose } from "@quasar/extras/material-icons";
import "../styles/main.css";
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
export default {
  components: { NavBack },
  created() {
    this.matAdd = matAdd;
    this.matClose = matClose;
  },
  setup() {
    const datas = reactive([]);
    const buffitems = reactive([]);
    const text = ref();
    async function GetDatas() {
      await axios.get("data.json").then((response) => {
        Object.assign(datas, response.data);
      });
    }
    onMounted(async () => {
      await GetDatas();
    });
    function save() {
      db.collection("vote").add({ items: buffitems });
    }
    function add() {
      buffitems.push({ name: text.value, vote: 0 });
    }
    function del(index) {
      buffitems.splice(buffitems.indexOf(index), 1);
    }
    return {
      add,
      del,
      save,
      text,
      datas,
      buffitems,
    };
  },
};
</script>
