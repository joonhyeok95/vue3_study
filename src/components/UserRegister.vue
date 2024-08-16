<template>
  <div class="user-register">
    <h2>Register a New User</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="UserId">User ID</label>
        <input type="text" v-model="userId" id="UserId" required />
      </div>

      <div class="form-group">
        <label for="FirstName">First Name</label>
        <input type="text" v-model="firstName" id="FirstName" required />
      </div>

      <div class="form-group">
        <label for="LastName">Last Name</label>
        <input type="text" v-model="lastName" id="LastName" required />
      </div>

      <div class="form-group">
        <label for="Email">Email</label>
        <input type="email" v-model="email" id="Email" required />
      </div>

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const userId = ref('')
const firstName = ref('')
const lastName = ref('')
const email = ref('')

const router = useRouter()

const registerUser = async () => {
  const userData = {
    UserId: userId.value,
    FirstName: firstName.value,
    LastName: lastName.value,
    Email: email.value
  }

  try {
      const response = await axios.put('/api/v1/users', userData, {
        headers: {
        'Content-Type': 'application/json'
      }
    })
    if (response.data.code === 200) {
      alert('User registered successfully!')
      router.push('/users')
    } else {
      console.error('Registration failed:', response.data.message)
      alert('Failed to register user. Please try again.')
    }
  } catch (error) {
    if (error.response) {
      // 서버 응답 오류
      console.error('Response error:', error.response.data);
      alert(`Server error: ${error.response.data.message || 'Unknown error occurred'}`);
    } else if (error.request) {
      // 요청은 했으나 응답이 없는 경우
      console.error('Request error:', error.request);
      alert('No response received from the server. Please check your network connection.');
    } else {
      // 기타 오류
      console.error('Error message:', error.message);
      alert(`An error occurred: ${error.message}`);
    }
  }
}
</script>

<style scoped>
.user-register {
  max-width: 400px;
  margin: 0 auto;
  text-align: left;
}

h2 {
  color: #34495e;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #2c3e50;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 20px;
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
