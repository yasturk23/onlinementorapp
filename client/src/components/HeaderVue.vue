<template>
  <header>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
    </nav>
  </header>
</template>

<script>
// export default {
//   name: "HeaderVue",
// };
</script>

<style scoped>
header {
  background-color: #607d8b;
  padding: 1em;
}
.nav-link {
  color: #fff;
  text-decoration: none;
  margin-right: 1em;
}
.nav-link:hover {
  color: #fff;
  background-color: #455a64;
  cursor: pointer;
}
</style>
