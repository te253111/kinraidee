<template>
  <div class="q-pa-md border">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h4 maginB">KinraiDee</div>
        <q-img
          v-bind:src="selectedImage"
          spinner-color="white"
          class="responsive maginB"
        />
        <div class="text-h6 maginB">{{ selectedName }}</div>
        <q-btn
          :disabled="isActive"
          v-on:click="random()"
          color="primary"
          label="Random"
          class="maginB"
        />
        <hr />
        <div class="q-gutter-sm">
          <q-checkbox v-model="checkedNames" val="01" label="ประเภทผัด" />
          <q-checkbox v-model="checkedNames" val="02" label="ประเภทน้ำ" />
          <q-checkbox v-model="checkedNames" val="03" label="อื่นๆ" />
        </div>
        <q-banner class="bg-grey-3"> ADS </q-banner>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  created() {
    axios.get("data.json").then((response) => (this.items = response.data));
  },
  data() {
    return {
      items: [],
      buffitems: [],
      checkedNames: [],
      checked: true,
      selectedImage: "pic/food.webp",
      selectedName: "ชื่อ อาหาร",
      isActive: false,
    };
  },
  methods: {
    random() {
      this.buffitems = this.filteredItems();
      const idx = Math.floor(Math.random() * this.buffitems.length);
      this.selectedImage = "pic/Loading.gif";
      this.isActive = true;
      let timer = 0;
      let interval = setInterval(() => {
        if (timer == this.buffitems.length - 1) {
          this.selectedImage = this.buffitems[idx].img;
          this.selectedName = this.buffitems[idx].name;
          this.isActive = false;
          clearInterval(interval);
        } else {
          this.selectedName = this.buffitems[timer].name;
          console.log(timer);
          timer++;
        }
      }, 200);
    },
    filteredItems() {
      if (!this.checkedNames.length) return this.items;
      return this.items.filter((j) => this.checkedNames.includes(j.type));
    },
  },
};
</script>
<style>
.border {
  max-width: 1280px;
  height: auto;
  margin: 0 auto;
}

.responsive {
  height: 300px;
  max-width: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid black;
}

.maginB {
  margin-bottom: 10px;
}
</style>
