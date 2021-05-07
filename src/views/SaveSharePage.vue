<template>
  <div>
    <NavBack />
    <div class="margin50 mt32">
      <div class="row" v-for="item in vote" :key="item.name">
        <div class="col-2">
          <q-radio v-model="votename" :val="item.name" />
        </div>
        <div class="col-10">
          <div class="font18">
            {{ item.name }}
            <q-linear-progress
              rounded
              size="10px"
              :value="progress"
              color="secondary"
              class="q-mt-sm"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="margin50">
      <q-btn color="primary" class="mt16 font18 full-width" label="โหวต" />
    </div>
    <div class="margin50">
      <q-btn
        color="primary"
        class="mt16 font18 full-width"
        label="ส่งให้เพื่อน"
      />
    </div>
    <router-link :to="`/edit/${key}`" class="link">
      <div class="font18 fontred mt16">แก้ไข</div>
    </router-link>
    <q-banner class="bg-grey-3 ads"> ADS </q-banner>
  </div>
</template>

<script>
import { db } from "../firebase/firebaseDb";
import NavBack from "../components/NavBack.vue";
import "../styles/main.css";
import { onMounted, reactive, ref } from "vue";
export default {
  components: { NavBack },
  setup() {
    const vote = reactive([]);
    const key = ref();
    const votename = ref();
    async function GetDatas() {
      db.collection("vote").onSnapshot((snapshotChange) => {
        snapshotChange.forEach((doc) => {
          Object.assign(vote, doc.data().items);
          key.value = doc.id;
        });
      });
    }
    onMounted(async () => {
      await GetDatas();
    });
    function copy() {}
    return {
      votename,
      vote,
      key,
      copy,
    };
  },
};
</script>
