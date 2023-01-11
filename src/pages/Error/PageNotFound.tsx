import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const PageNotFound = (props: Props) => {
    return (
        <div className='flex h-screen flex-col w-screen items-center justify-center'>
            <h1 className='text-[30px] text-primary'>Page Not Found</h1>
            <Link to='/'>Back to Home</Link>
        </div>
    )
}

export default PageNotFound
