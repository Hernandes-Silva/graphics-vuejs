<template>
  <div>
    <Navbar />
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style scoped>
.body {
  display: flex;
  justify-content: center;
  background-color: aliceblue;
}
</style>
