<template>
    <div class="home">
      <h2>Welcome to the User Management System</h2>
      <p>{{ deployEnv }}</p>
      <p>
        This application allows you to manage users. You can view a list of users,
        register new users, and more.
      </p>
      <router-link to="/users">
        <button>View Users</button>
      </router-link>
      <router-link to="/register">
        <button>Register User</button>
      </router-link>
    </div>
  </template>
  
  <script setup>
    import { ref } from 'vue';
    // composition API 스타일 코딩
    const deployEnv = ref(process.env.VUE_APP_CUSTOM_ENV_001);
  </script>
  
  <style scoped>
  .home {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }
  
  h2 {
    color: #34495e;
    margin-bottom: 20px;
  }
  
  p {
    color: #2c3e50;
    margin-bottom: 30px;
  }
  
  button {
    padding: 10px 20px;
    margin: 10px;
    color: white;
    background-color: #42b983;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #358a68;
  }
  </style>
  