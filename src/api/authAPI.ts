import { PostRequest } from '../plugins/http'

export const APILoginUser = (data: any) => PostRequest('/', data)
