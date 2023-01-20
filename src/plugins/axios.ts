import axios from './axios'

const axiosInstance = axios.create({
    baseURL: '/',
})

// axiosInstance.interceptors.request.use()
axiosInstance.interceptors.response.use(
    function (response) {
        if (response.status === 200 && !!response.data.message) {
            return response.data
        }
    },
    function (error) {
        if (error.response && error.response.status === 401) {
            console.log('unauthorized', error.response.data.message)
        }
        if (error.response && error.response.status === 403) {
            console.log('Forbidden access', error.response.data.message)
        }

        return Promise.reject(error?.response?.data?.message)
    }
)

export default axiosInstance
