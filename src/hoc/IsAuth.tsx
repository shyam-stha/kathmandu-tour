import { Navigate } from 'react-router-dom'
import { getCityToken } from '../utils/localStorage'

type IsAuthPropsType = {
    children: any
}

const IsAuth = ({ children }: IsAuthPropsType) => {
    const token = getCityToken()
    return !!token ? (
        children
    ) : (
        <Navigate
            to='/'
            replace
        />
    )
}

export default IsAuth
