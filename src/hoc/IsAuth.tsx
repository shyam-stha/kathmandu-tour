import { Navigate } from 'react-router-dom'

const token = 975934

type IsAuthPropsType = {
    children: any
}

const IsAuth = ({ children }: IsAuthPropsType) => {
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
