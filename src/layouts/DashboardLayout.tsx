import { Outlet } from 'react-router-dom'
import SideBar from '../components/container/dashboard/SideBar'

const DashboardLayout = () => {
    return (
        <div className='grid min-w-[350px] grid-cols-12 bg-background'>
            <div className='col-span-2 sm:col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-2'>
                <SideBar />
            </div>
            <div className='col-span-10 py-5 px-5 sm:col-span-8 sm:px-10 md:col-span-9 md:px-12 lg:col-span-10 lg:px-16 xl:col-span-10 xl:px-20 '>
                <Outlet />
            </div>
        </div>
    )
}

export default DashboardLayout
