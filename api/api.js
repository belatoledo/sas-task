import axios from 'axios'

const API_URL = 'https://sys-dev.searchandstay.com/api/admin/' // API REST

const api = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: API_URL
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export default api
