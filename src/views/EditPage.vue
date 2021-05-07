<template>
  <div>
    <NavBack />
    {{route.params.id}}
  </div>
</template>

<script>
import NavBack from "../components/NavBack.vue";
import { useRoute } from "vue-router";
export default {
  components: { NavBack },
  setup() {
    const route = useRoute();
    return { route };
  },
};
</script>
