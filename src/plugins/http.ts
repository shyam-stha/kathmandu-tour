import axios from './axios'

export const GetRequest = (url: string, config: {} = {}) => {
    return axios.get(url, config)
}

export const PostRequest = (url: string, data: {}, config: {} = {}) => {
    return axios.post(url, data, config)
}

export const PutRequest = (url: string, data: {}, config: {} = {}) => {
    return axios.put(url, data, config)
}

export const DeleteRequest = (url: string, config: {} = {}) => {
    return axios.delete(url, config)
}

export const PatchRequest = (url: string, data: {}, config: {} = {}) => {
    return axios.patch(url, data, config)
}
