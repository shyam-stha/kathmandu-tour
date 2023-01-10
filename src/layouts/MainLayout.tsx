import React from 'react'
import LandingPage from '../pages/landing/LandingPage'
import Hero from '../components/container/Hero'
import Footer from '../components/partial/Footer'
import PackageDetails from '../pages/packageDetails/PackageDetails'
import { Outlet } from 'react-router-dom'

type Props = {}

const MainLayout = (props: Props) => {
    return (
        <div>
            <Hero />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
