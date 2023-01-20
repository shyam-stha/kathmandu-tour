import axios from './axios'

const axiosInstance: any = axios.create({
    baseURL: 'https://api-dev.citytours.app/api/v1',
})

// axiosInstance.interceptors.request.use()
axiosInstance.interceptors.response.use(
    function (response: any) {
        if (response.status === 200 && !!response.data.message) {
            return response.data
        }
    },
    function (error: any) {
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
