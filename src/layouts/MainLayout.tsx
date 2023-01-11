import Hero from '../components/container/Hero'
import Footer from '../components/partial/Footer'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/partial/Navbar'

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <div>
            <NavBar variant='black'/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
