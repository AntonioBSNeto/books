import axios from 'axios'

const API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes'

const API = axios.create({
  baseURL: API_BASE_URL
})

API.interceptors.response.use(
  response => {
    return response
  },
  error => {
    throw error
  }
)

export default API