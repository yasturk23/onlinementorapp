<script lang="ts">
import HeaderVue from "./components/HeaderVue.vue";

import { defineComponent } from "vue";
// import HomeVue from "./components/HomeVue.vue";
import { useRouter } from "vue-router";

const router = useRouter();

export default defineComponent({
  name: "App",
  components: {
    // HomeVue,
    HeaderVue,
  },
});
</script>
<template>
  <HeaderVue />

  <router-view />
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
