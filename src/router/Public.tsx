import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LandingPage from '../pages/landing/LandingPage'
import PackageDetails from '../pages/packageDetails/PackageDetails'
import PageNotFound from '../pages/Error/PageNotFound'
import AvailablePackage from '../pages/packageDetails/AvailablePackage'
import Blogs from '../pages/blog/Blogs'
import Booking from '../pages/booking/Booking'
import Payment from '../pages/payment/Payment'
import About from '../pages/about/About'

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
                path='/about'
                element={<About />}
            />
            <Route
                path='/blogs'
                element={<Blogs />}
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
