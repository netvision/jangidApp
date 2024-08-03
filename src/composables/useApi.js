import axios from 'axios'

const defaultOptions = {
  baseURL: 'https://api.netvisionindia.com',
  headers: {
    'Content-Type': 'application/json',
  },
}

// Create instance
const apiClient = axios.create(defaultOptions)

// Set the AUTH token for any request
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})

export default apiClient
