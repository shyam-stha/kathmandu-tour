import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import LandingPage from '../pages/landing/LandingPage'
import PackageDetails from '../pages/packageDetails/PackageDetails'
import PageNotFound from '../pages/Error/PageNotFound'

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
        </Route>
        <Route
            path='*'
            element={<PageNotFound />}
        />
    </>
)

export default Public
