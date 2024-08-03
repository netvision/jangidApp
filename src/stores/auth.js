import { defineStore } from 'pinia'
import apiClient from '../composables/useApi'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: null,
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await apiClient.post('/auth/login', credentials)

        // console.log(response.data.data.token)
        this.token = response.data.token
        localStorage.setItem('token', this.token)
        await this.getProfile()
      }
      catch (error) {
        console.error('Failed to login:', error)
        throw error
      }
    },
    async getProfile() {
      try {
        const response = await apiClient.get('/auth/profile')
        this.user = response.data
      }
      catch (error) {
        console.error('Failed to fetch profile:', error)
      }
    },
    logout() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
    },
  },
  getters: {
    isAuthenticated: state => !!state.token,
    getUser: state => state.user,
  },
})
