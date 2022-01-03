<template>
  <div class="nav">
    <router-link :to="{ name: 'Home' }" class="nav-link"> Home </router-link>
    <router-link :to="{ name: 'CreateOrder' }" class="nav-link">
      Fazer um pedido
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
<style scoped>
.nav {
  
  margin: 0;
  background-color: #222;
  border-bottom: 4px solid #111;
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.nav-link {
  text-decoration: none;
  margin-left: 5px;
  margin-right: 5px;
  transition: 0.2s;
}
.nav-link:hover {
  color: #fff;
}
</style>