<template>
    <div class="user-list">
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Custom Date</th>
            <th>DeleteAction</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.UserId">
            <td>{{ user.UserId }}</td>
            <td>{{ user.FirstName }}</td>
            <td>{{ user.LastName }}</td>
            <td>{{ user.Email }}</td>
            <td>{{ formatDate(user.CustomDate) }}</td>
            <td><button class="delete-button" @click="deleteUser(user.UserId)">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const users = ref([])
  
  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/v1/users')
        if (response.data.code === 200) {
        users.value = response.data.data
      } else {
        console.error('Failed to fetch users:', response.data.message)
      }
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }  
  const deleteUser = async (userId) => {
    if (confirm('Are you sure you want to delete this user?')) {
        try {
            // 비동기적으로 삭제 요청
            await axios.delete(`/api/v1/users/${userId}`);
            alert('User deleted successfully');
            
            // 사용자 목록을 새로 고침
            await fetchUsers();
        } catch (error) {
            // 오류가 발생한 경우
            console.error('Error deleting user:', error);
            alert('Failed to delete user');
        }
    }
  }

  const formatDate = (dateString) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }
  return new Date(dateString).toLocaleDateString(undefined, options) + 
         ' ' + new Date(dateString).toLocaleTimeString(undefined, options)
  }
  
  onMounted(() => {
    fetchUsers()
  })
  </script>
  
  <style scoped>
  .user-list {
    max-width: 800px;
    margin: 0 auto;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #2c3e50;
    color: white;
  }
  
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  tr:hover {
    background-color: #ddd;
  }
  
  td {
    color: #34495e;
  }

/* 버튼 기본 스타일 */
button {
  font-family: Arial, sans-serif;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px 20px;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
}

/* 삭제 버튼 스타일 */
.delete-button {
  background-color: #e74c3c; /* Red background */
  color: white;
}

.delete-button:hover {
  background-color: #c0392b; /* Darker red on hover */
}

.delete-button:active {
  transform: scale(0.98); /* Slightly shrink on click */
}
  </style>
  