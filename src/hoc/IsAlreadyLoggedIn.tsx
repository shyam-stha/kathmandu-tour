import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const IsAlreadyLoggedInHoc = ({ children }: any) => {
    const isLoggedIn = localStorage.getItem('city-token')
    return !!isLoggedIn ? (
        <Navigate
            to={'/dashboard'}
            replace
        />
    ) : (
        children
    )
}

export default IsAlreadyLoggedInHoc
