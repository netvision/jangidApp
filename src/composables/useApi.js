import axios from 'axios'

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'https://api.netvisionindia.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

// Response interceptor to handle 401 errors and refresh the token
apiClient.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      const refreshToken = localStorage.getItem('refreshToken')

      if (refreshToken) {
        try {
          const response = await axios.post('https://api.netvisionindia.com/auth/refresh-token', { refreshToken })
          const newAccessToken = response.data.accessToken

          // Save the new access token
          localStorage.setItem('accessToken', newAccessToken)

          // Update the original request with the new access token
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

          // Retry the original request
          return apiClient(originalRequest)
        }
        catch (refreshError) {
          // Handle the case where the refresh token is invalid or expired
          console.error('Refresh token expired or invalid', refreshError)
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
          // Redirect to login or show an error message
        }
      }
    }
    return Promise.reject(error)
  },
)

export default apiClient
