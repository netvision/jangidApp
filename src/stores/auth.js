import { defineStore } from 'pinia'
import apiClient from '../composables/useApi'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    accessToken: localStorage.getItem('accessToken') || '',
    refreshToken: localStorage.getItem('refreshToken') || '',
    user: null,
  }),
  actions: {
    async login(credentials) {
      try {
        const response = await apiClient.post('/auth/login', credentials)

        // console.log(response.data.data.token)
        this.accessToken = response.data.accessToken
        this.refreshToken = response.data.refreshToken
        localStorage.setItem('accessToken', this.accessToken)
        localStorage.setItem('refreshToken', this.refreshToken)
        // await this.getProfile()
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
      this.accessToken = ''
      this.refreshToken = ''
      this.user = null
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    },
  },
  getters: {
    isAuthenticated: state => !!state.token,
    getUser: state => state.user,
  },
})
