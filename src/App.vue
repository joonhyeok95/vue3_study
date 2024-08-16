<template>
  <div id="app">
    <h1>User Management</h1>
    <router-link to="/">Home</router-link> |
    <router-link to="/users">View Users</router-link> |
    <router-link to="/register">Register User</router-link>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: #34495e;
  margin-bottom: 20px;
}

a {
  color: #42b983;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

nav {
  margin-bottom: 20px;
}
</style>
