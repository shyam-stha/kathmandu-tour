import { Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LandingPage from '../pages/landing/LandingPage'
import PackageDetails from '../pages/packageDetails/PackageDetails'
import PageNotFound from '../pages/Error/PageNotFound'
import AvailablePackage from '../pages/packageDetails/AvailablePackage'
import Blogs from '../pages/blog/Blogs'
import Booking from '../pages/booking/Booking'
import Payment from '../pages/payment/Payment'
import About from '../pages/about/About'
import Story from '../components/common/Story'
import Team from '../components/common/Team'
import VisionMission from '../components/common/VisionMission'
import BlogDescription from '../pages/about/BlogDescription'

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
            path='*'
            element={<PageNotFound />}
        />
    </>
)

export default Public
