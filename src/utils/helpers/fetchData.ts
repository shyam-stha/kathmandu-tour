import axios from '../../plugins/axios/Axios'

export const getData = async (endpoint: string) => {
    try {
        const response = await axios.get(endpoint)
        const data = response.data
        return [data, null]
    } catch (error) {
        return [error, null]
    }
}

export const postData = async (endpoint: string, postData: any) => {
    try {
        const response = await axios.post(endpoint, postData)
        const data = response.data
        return [data, null]
    } catch (error) {
        return [error, null]
    }
}

export const updateData = async (endpoint: string, id: any) => {
    try {
        const response = await axios.patch(endpoint + '/' + id)
        const data = response.data
        return [data, null]
    } catch (error) {
        return [error, null]
    }
}

export const deleteData = async (endpoint: string, id: any) => {
    try {
        const response = await axios.delete(endpoint + '/' + id)
        const data = response.data
        return [data, null]
    } catch (error) {
        return [error, null]
    }
}

export const getSingleData = async (endpoint: string, id: any) => {
    try {
        const response = await axios.get(endpoint + '/' + id)
        const data = response.data
        return [data, null]
    } catch (error) {
        return [error, null]
    }
}
