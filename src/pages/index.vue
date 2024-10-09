<!-- eslint-disable no-alert -->
<!-- eslint-disable no-console -->
<script setup>
import apiClient from '~/composables/useApi'
import { useAuthStore } from '~/stores/auth'

const theme = shallowRef(null)
const page = ref()
const pages = ref([])
const authStore = useAuthStore()
const user = ref({})
const formLogin = ref(true)
const showModal = ref(false)

async function register(e) {
  e.preventDefault()
  if (user.value.password !== user.value.c_password) {
    alert('Passwords doesn\'t match!')
  }
  else {
    const res = await apiClient.post('auth/register', user.value)
    // console.log(res)
    if (res.data.status === 'success') {
      alert(res.data.message)
      formLogin.value = !formLogin.value
    }
    else {
      const errors = res.data.errors
      if (errors?.username)
        alert(errors.username[0])
      else if (errors?.email)
        alert(errors.email[0])
      else
        alert(JSON.stringify(errors))
    }
  }
}

async function login(e) {
  e.preventDefault()
  await authStore.login(user.value)
  await authStore.getProfile()
  user.value = authStore.user
  pages.value = await apiClient.get(`pages?filter[user_id][eq]=${user.value.id}&expand=theme`).then(r => r.data)
}

function logout() {
  authStore.logout()
  user.value = {}
}

onMounted(async () => {
  if (authStore.accessToken) {
    await authStore.getProfile()
    user.value = authStore.user
  }
  const sd = window.location.hostname.split('.').length > 2 ? window.location.hostname.split('.')[0] : ''

  if (![null, '', 'www'].includes(sd)) {
    const data = await apiClient.get(`pages?filter[subdomain][like]=${sd}&expand=user,theme`)
    if (data.data.length > 0) {
      page.value = data.data[0]
      theme.value = defineAsyncComponent(() => import(`../components/themes/${page.value?.theme?.name}.vue`))
    }
  }
  if (user.value?.id) {
    console.log(user.value.id)
    pages.value = await apiClient.get(`pages?filter[user_id][eq]=${user.value.id}&expand=theme`).then(r => r.data)
    console.log(pages.value)
  }
})
</script>

<template>
  <div v-if="theme">
    <Component :is="theme" :data="page" />
  </div>
  <div v-else class="relative h-screen w-full bg-cover bg-center bg-no-repeat">
    <div class="flex place-content-between">
      <div class="object-fit h-100px h-auto w-200px">
        <img src="/images/logo.png">
      </div>
    </div>

    <div class="hero bg-base-200 relative min-h-screen">
      <div class="absolute right-0 top-0 h-350px w-auto">
        <img src="/images/jangid-log.png" class="h-350px object-cover">
      </div>
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">
            A Creative Community
          </h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div class="card bg-base-100 max-w-sm w-full shrink-0 shadow-2xl">
          <div v-if="!authStore.user" class="card-body">
            <div v-if="formLogin">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Username</span>
                </label>
                <input v-model="user.username" type="text" placeholder="usetname" class="input input-bordered" required>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input v-model="user.password" type="password" placeholder="password" class="input input-bordered" required>
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div class="form-control mt-6 flex">
                <button class="btn-primary btn" @click="login">
                  Login
                </button>
                <button @click="() => formLogin = !formLogin">
                  Or Register Now
                </button>
              </div>
            </div>
            <div v-else>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Username</span>
                </label>
                <input v-model="user.username" type="text" placeholder="usetname" class="input input-bordered" required>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email Id</span>
                </label>
                <input v-model="user.email" type="text" placeholder="email id" class="input input-bordered" required>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">password</span>
                </label>
                <input v-model="user.password" type="password" class="input input-bordered" required>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Confirm Password</span>
                </label>
                <input v-model="user.c_password" type="password" class="input input-bordered" required>
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div class="form-control mt-6 flex">
                <button class="btn-primary btn" @click="register">
                  Register
                </button>
                <button @click="() => formLogin = !formLogin">
                  Already Registered! Login here
                </button>
              </div>
            </div>
          </div>
          <div v-else>
            <div v-if="pages.length > 0">
              <Card v-for="p in pages" :key="p.id" :page="p" />
            </div>
            <div v-else>
              <button id="show-modal" @click="showModal = true">
                Add Card
              </button>
            </div>
            <Teleport to="body">
              <!-- use the modal component, pass in the prop -->
              <CardEditor :show="showModal" @close="showModal = false" />
            </Teleport>
            <button @click="logout">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
