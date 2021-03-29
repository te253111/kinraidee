<template>
  <div class="border">
    <h1>KinraiDee</h1>
    <img v-bind:src="selectedImage" class="responsive" />
    <h3>{{ selectedName }}</h3>
    <button
      :disabled="isActive"
      v-on:click="random()"
      v-bind:class="{ button: !isActive, 'button-disable': isActive }"
    >
      random
    </button>
    <hr />
    <input type="checkbox" value="01" v-model="checkedNames" />ประเภทผัด
    <input type="checkbox" value="02" v-model="checkedNames" />ประเภทน้ำ
    <input type="checkbox" value="03" v-model="checkedNames" />อื่นๆ
    <div class="border2">ADS</div>
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
  border: 1px solid black;
  border-radius: 5px;
  max-width: 1280px;
  height: auto;
  margin: 0 auto;
}

.border2 {
  border: 1px solid black;
  border-radius: 5px;
  max-width: 1280px;
  height: 100px;
  background-color: gray;
  color: white;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
}

.responsive {
  width: 100%;
  height: 300px;
  max-width: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid black;
}

.button {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: #008cba;
}

.button-disable {
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: gray;
}
</style>
