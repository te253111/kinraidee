<template>
  <div>
    <NavMenu />
    <div class="text-h3 mt32">โหวต</div>
    <div v-for="item in vote" :key="item.name" class="marginradio">
      <div class="row">
        <div class="col-2">
          <q-radio
            keep-color
            v-model="select"
            :val="item.name"
            color="red"
            class="mt16"
            @click="onclick()"
          />
        </div>
        <div class="col-10">
          <div class="mt16 font18">
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
    </div>
    <router-link to="/votecomplete" class="link">
      <div class="margin50">
        <q-btn
          :disabled="isActive"
          color="red"
          class="mt16 font18 full-width"
          label="โหวต"
          @click="update()"
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
import { useRoute } from "vue-router";
import { onMounted, reactive, ref } from "vue";
export default {
  components: { NavMenu },
  setup() {
    const route = useRoute();
    const vote = reactive([]);
    const select = ref();
    const isActive = ref(true);
    async function GetDatas() {
      await db
        .collection("vote")
        .doc(route.params.id)
        .get()
        .then((snapshot) => Object.assign(vote, snapshot.data().items));
    }
    onMounted(async () => {
      await GetDatas();
    });
    function update() {
      vote.filter((r) => r.name == select.value)[0].vote++;
      db.collection("vote").doc(route.params.id).update({ items: vote });
    }
    function onclick() {
      isActive.value = false;
    }
    return { vote, select, update, isActive, onclick };
  },
};
</script>
