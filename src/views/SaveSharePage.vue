<template>
  <div>
    <NavMenu />
    <div class="normalVote mt16 font18" v-for="item in vote" :key="item.name">
      {{ item.name }}
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/firebaseDb";
import NavMenu from "../components/NavMenu.vue";
import "../styles/main.css";
import { onMounted, reactive } from "vue";
export default {
  components: { NavMenu },
  setup() {
    const vote = reactive([]);
    async function GetDatas() {
      db.collection("vote").onSnapshot((snapshotChange) => {
        snapshotChange.forEach((doc) => {
          Object.assign(vote, doc.data().items);
        });
      });
    }
    onMounted(async () => {
      await GetDatas();
    });
    return {
      vote,
    };
  },
};
</script>
