import axios from 'axios'

const instance = axios.create({
    baseURL: '/',
})

// instance.interceptors.response.use()
// instance.interceptors.request.use()

export default instance
