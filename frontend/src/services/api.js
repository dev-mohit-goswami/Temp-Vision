import axios from 'axios'

// Points at the Spring Boot backend from the project spec.
// Set VITE_API_BASE_URL in .env once the backend is running.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api',
})

api.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('tempvision-token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api
