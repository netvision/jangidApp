<script setup>
import apiClient from '~/composables/useApi'

const theme = shallowRef(null)
const page = ref()
onMounted(async () => {
  const sd = window.location.hostname.split('.').length > 2 ? window.location.hostname.split('.')[0] : ''

  if (![null, '', 'www'].includes(sd)) {
    const data = await apiClient.get(`pages?filter[subdomain][like]=${sd}&expand=user,theme`)
    if (data.data.length > 0) {
      page.value = data.data[0]
      theme.value = defineAsyncComponent(() => import(`../components/themes/${page.value?.theme?.name}.vue`))
    }
  }
})
</script>

<template>
  <div v-if="theme">
    <Component :is="theme" :data="page" />
  </div>
  <div v-else class="relative h-screen w-full bg-cover bg-center bg-no-repeat" style="background-image: url('background.jpg')">
    <div class="">
      <img src="/images/logo.png">
    </div>
    <!-- source:https://codepen.io/owaiswiz/pen/jOPvEPB -->
    <div class="min-h-screen flex justify-center text-gray-900">
      <div class="m-0 max-w-screen-xl flex flex-1 justify-center sm:m-10 sm:rounded-lg">
        <div class="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
          <div class="mt-12 flex flex-col items-center">
            <h1 class="text-2xl font-extrabold xl:text-3xl">
              Sign up
            </h1>
            <div class="mt-8 w-full flex-1">
              <div class="mx-auto max-w-xs">
                <input
                  class="w-full border border-gray-200 rounded-lg bg-gray-100 px-8 py-4 text-sm font-medium focus:border-gray-400 focus:bg-white focus:outline-none placeholder-gray-500"
                  type="email" placeholder="Email"
                >
                <input
                  class="mt-5 w-full border border-gray-200 rounded-lg bg-gray-100 px-8 py-4 text-sm font-medium focus:border-gray-400 focus:bg-white focus:outline-none placeholder-gray-500"
                  type="password" placeholder="Password"
                >
                <button
                  class="focus:shadow-outline mt-5 w-full flex items-center justify-center rounded-lg bg-indigo-500 py-4 text-gray-100 font-semibold tracking-wide transition-all duration-300 ease-in-out hover:bg-indigo-700 focus:outline-none"
                >
                  <svg
                    class="h-6 w-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span class="ml-3">
                    Sign Up
                  </span>
                </button>
                <p class="mt-6 text-center text-xs text-gray-600">
                  I agree to abide by templatana's
                  <a href="#" class="border-b border-gray-500 border-dotted">
                    Terms of Service
                  </a>
                  and its
                  <a href="#" class="border-b border-gray-500 border-dotted">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden flex-1 text-center lg:flex">
          <div
            class="m-0 w-full bg-contain bg-center bg-no-repeat xl:m-16"
            style="background-image: url('/images/jangid-log.png'); height: 400px"
          />
        </div>
      </div>
    </div>
  </div>
</template>
