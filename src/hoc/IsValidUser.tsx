import { Outlet, useNavigate } from 'react-router-dom'

const isvalidUser = false


const IsValidUser = () => {
    const navigate = useNavigate()
    return isvalidUser ? <Outlet /> : navigate('/')
}

export default IsValidUser
