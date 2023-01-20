import { PostRequest } from '../plugins/http'


interface ILoginData {
    username:string,
    password:string
}
export const APILoginUser = (data: ILoginData) => PostRequest('/auth/login', data)
