<template>
  <div class="border">
    <h1>KinraiDee</h1>
    <img v-bind:src="selectedImage" class="responsive" />
    <h3>{{ selectedName }}</h3>
    <button v-on:click="random()" class="button">random</button>
    <div class="border2">ADS</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: ["pic/food1.webp", "pic/food2.jpg", "pic/food3.jpg"],
      names: ["กระเพรา", "ก๋ยวเตี๋ยว", "ผัดไท"],
      selectedImage: "pic/food.webp",
      selectedName: "ชื่อ อาหาร",
    };
  },
  methods: {
    random() {
      const idx = Math.floor(Math.random() * this.images.length);
      this.selectedImage = this.images[idx];
      this.selectedName = this.names[idx];
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
</style>
