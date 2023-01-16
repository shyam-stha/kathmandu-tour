import Footer from '../components/partial/Footer'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/partial/Navbar'
import ChatOption from '../components/common/ChatOpton'

const MainLayout = () => {
    return (
        <div className='relative bg-white'>
            <NavBar />
            <div className='fixed right-6 top-[88vh] z-50'>
                <ChatOption />
            </div>
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
