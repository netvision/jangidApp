<!-- eslint-disable no-console -->
<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useAuthStore } from '~/stores/auth'

const username = ref('')
const password = ref('')
const authStore = useAuthStore()

async function login() {
  try {
    await authStore.login({
      username: username.value,
      password: password.value,
    })
  }
  catch (error) {
    console.error('Failed to login:', error)
  }
}

async function logout() {
  try {
    await authStore.logout()
  }
  catch (error) {
    console.error('Failed to login:', error)
  }
}

function getProfile() {
  if (authStore.token) {
    axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('token')}`
    // Or set it per request
    axios.get('https://api.netvisionindia.com/user/profile')
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error:', error.response)
      })
  }
}
</script>

<template>
  <div v-if="!authStore.token">
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username">
      <input v-model="password" type="password" placeholder="Password">
      <button type="submit">
        Login
      </button>
    </form>
  </div>
  <div v-else>
    <pre>{{ authStore.token }}</pre>
    <pre>{{ authStore.user }}</pre>
    <button @click="logout">
      Logout
    </button>
    <button @click="getProfile">
      profile
    </button>
  </div>
</template>
