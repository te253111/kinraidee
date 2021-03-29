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
      selectedImage: "pic/food.webp",
      selectedName: "ชื่อ อาหาร",
      isActive: false,
    };
  },
  methods: {
    random() {
      const idx = Math.floor(Math.random() * this.items.length);
      this.selectedImage = "pic/Loading.gif";
      this.isActive = true;
      let timer = 0;
      let interval = setInterval(() => {
        if (timer == this.items.length - 1) {
          this.selectedImage = this.items[idx].img;
          this.selectedName = this.items[idx].name;
          this.isActive = false;
          clearInterval(interval);
        } else {
          this.selectedName = this.items[timer].name;
          console.log(timer);
          timer++;
        }
      }, 200);
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
