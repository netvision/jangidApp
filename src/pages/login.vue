<!-- eslint-disable no-console -->
<script setup>
import { ref } from 'vue'
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
  authStore.getProfile()
}
</script>

<template>
  <div v-if="!authStore.accessToken">
    <div class="mx-auto max-w-screen-xl bg-gray-100 px-4 py-16 lg:px-8 sm:px-6">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">
          Get started today!
        </h1>

        <p class="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
          ipsa culpa autem, at itaque nostrum!
        </p>
      </div>

      <form action="#" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label for="email" class="sr-only">Email</label>

          <div class="relative">
            <input
              type="email"
              class="w-full border-gray-200 rounded-lg p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            >
            <span>Error</span>

            <span class="absolute start-0 inset-t-5 grid place-content-center px-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">Password</label>

          <div class="relative">
            <input
              type="password"
              class="w-full border-gray-200 rounded-lg p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            >

            <span class="absolute end-0 inset-y-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            No account?
            <a class="underline" href="#">Sign up</a>
          </p>

          <button
            type="submit"
            class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm text-white font-medium"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username">
      <input v-model="password" type="password" placeholder="Password">
      <button type="submit">
        Login
      </button>
    </form>
  </div>
  <div v-else>
    <pre>{{ authStore.accessToken }}</pre>
    <pre>{{ authStore.user }}</pre>
    <button @click="logout">
      Logout
    </button>
    <button @click="getProfile">
      profile
    </button>
  </div>
</template>
