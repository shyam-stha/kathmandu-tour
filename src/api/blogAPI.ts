import {
    DeleteRequest,
    GetRequest,
    PostRequest,
    PutRequest,
} from '../plugins/http'

export const APIGetAllBlogs = () => GetRequest('/')
export const APIAddNewBlog = (data: any) => PostRequest('/', data)
export const APIEditBlog = (data: any) => PutRequest('/', data)
export const APIRemoveBlog = () => DeleteRequest('/')
