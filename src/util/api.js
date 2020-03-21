import axios from 'axios'

const service = axios.create({
  baseURL: process.env.API_BASE_URL || `/api`,
  timeout: 5000
})

module.exports = service