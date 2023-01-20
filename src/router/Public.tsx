import { Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LandingPage from '../pages/userspage/landing/LandingPage'
import PackageDetails from '../pages/userspage/packageDetails/PackageDetails'
import PageNotFound from '../pages/userspage/Error/PageNotFound'
import AvailablePackage from '../pages/userspage/packageDetails/AvailablePackage'
import Blogs from '../pages/userspage/blog/Blogs'
import Booking from '../pages/userspage/booking/Booking'
import Payment from '../pages/userspage/payment/Payment'
import About from '../pages/userspage/about/About'
import Story from '../components/common/about/Story'
import Team from '../components/common/about/Team'
import VisionMission from '../components/common/about/VisionMission'
import BlogDescription from '../pages/userspage/about/BlogDescription'
import AuthLayout from '../layouts/AuthLayout'

const Public = (
    <>
        <Route
            path='/'
            element={<MainLayout />}>
            <Route
                index
                element={<LandingPage />}
            />
            <Route
                path='/details'
                element={<PackageDetails />}
            />
            <Route
                path='/packages'
                element={<AvailablePackage />}
            />
            <Route
                path='/about/'
                element={<About />}>
                <Route
                    index
                    element={<Story />}
                />
                <Route
                    path='story'
                    element={<Story />}
                />
                <Route
                    path='team'
                    element={<Team />}
                />
                <Route
                    path='vision'
                    element={<VisionMission />}
                />
            </Route>
            <Route
                path='/blogs'
                element={<Blogs />}
            />

            <Route
                path='/blog-details'
                element={<BlogDescription />}
            />
            <Route
                path='/book'
                element={<Booking />}
            />
            <Route
                path='/payment'
                element={<Payment />}
            />
        </Route>
        <Route
            path='/login'
            element={<AuthLayout />}
        />
        <Route
            path='*'
            element={<PageNotFound />}
        />
    </>
)

export default Public
