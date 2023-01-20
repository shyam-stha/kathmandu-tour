import { GetRequest, PostRequest } from '../plugins/http'

export const APIGetAllPackages = () => GetRequest('/')
export const APICreatePackages = (data: any) => PostRequest('/', data)
