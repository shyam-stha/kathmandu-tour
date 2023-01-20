import {
    DeleteRequest,
    GetRequest,
    PatchRequest,
    PostRequest,
    PutRequest,
} from '../plugins/http'

export const APIGetAllBlogs = () => GetRequest('/blogs')
export const APIGetAllActiveBlogs = () => GetRequest('/blogs/active')

export const APIGetBlogDetail = (blogId:string) => GetRequest(`/blogs/${blogId}`)
export const APIGetBlogDetailByName = (blogSlug:string | undefined) => GetRequest(`/blogs/name/${blogSlug}`)


export const APIAddNewBlog = (data: any) => PostRequest('/blogs', data)
export const APIEditBlog = (data: any) => PutRequest('/blogs', data)

export const APIChangeBlogStatus = (blogId:string, isActive:Boolean) => PatchRequest(`/blogs/${blogId}`, {
    activate:isActive
})
export const APIRemoveBlog = (blogId:string) => DeleteRequest(`/blogs/${blogId}`)
