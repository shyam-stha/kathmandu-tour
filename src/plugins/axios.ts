import axios from 'axios'
import { getCityToken } from '../utils/localStorage'
const axiosInstance: any = axios.create({
    // baseURL: 'http://localhost:8000/api/v1',
    baseURL: ' https://api-dev.citytours.app/api/v1',

    headers: {
        'Content-Type': 'application/json',
        // "X-Custom-Header": "foobar",
    },
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
    function (config: any) {
        const id_token = getCityToken()

        try {
            if (!!id_token) {
                // @ts-ignore
                config.headers['Authorization'] = `Bearer ${id_token}`
            }

            return config
        } catch (err) {
            // console.log("error in axios", err)
        }

        // Do something before request is sent
        return config
    },
    function (error: any) {
        // Do something with request error
        return Promise.reject(error)
    }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response: any) {
        return response.data
    },
    function (error: any) {
        if (error.response && error.response.status === 401) {
            //when 401 i.e unauthorized comes
            //write function to clear session
            // console.log('its 401')
        }

        if (error.response && error.response.status === 403) {
            // store.dispatch(errorNotify('not authorized'))
        }

        return Promise.reject(error?.response?.data?.message)
    }
)

export default axiosInstance
