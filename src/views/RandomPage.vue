<template>
  <div>
    <NavMenu />
    <q-img
      v-bind:src="selectedImage"
      spinner-color="white"
      class="responsive"
    />
    <div class="font24 mt16" v-if="visible">{{ selectedName }}</div>
    <hr class="line" />
    <div
      class="mt16 font18"
      :class="{ fontred: visible }"
      v-on:click="random()"
    >
      {{ buttomText }}
    </div>
    <q-banner class="bg-grey-3 ads"> ADS </q-banner>
  </div>
</template>
<script>
import NavMenu from "../components/NavMenu.vue";
import "../styles/main.css";
import axios from "axios";
export default {
  components: { NavMenu },
  created() {
    axios.get("data.json").then((response) => (this.items = response.data));
  },
  mounted() {
    this.random();
  },
  data() {
    return {
      items: [],
      selectedImage: "pic/food.webp",
      selectedName: "ชื่อ อาหาร",
      buttomText: "สุ่มอีกครั้ง",
      visible: false,
    };
  },
  methods: {
    random() {
      const idx = Math.floor(Math.random() * this.items.length);
      this.selectedImage = "pic/Loading.gif";
      this.buttomText = "กำลังสุ่ม...";
      this.visible = false;
      let timer = 0;
      let interval = setInterval(() => {
        if (timer == this.items.length - 1) {
          this.selectedImage = this.items[idx].img;
          this.selectedName = this.items[idx].name;
          this.buttomText = "สุ่มอีกครั้ง";
          this.visible = true;
          clearInterval(interval);
        } else {
          timer++;
        }
      }, 200);
    },
  },
};
</script>
