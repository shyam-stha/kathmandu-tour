import PolularPackage from '../../components/container/PopularPackage'
import FeaturedPackage from '../../components/container/FeaturedPackage'
import TourTypes from '../../components/container/TourTypes'
import TopSites from '../../components/container/TopSites'
import Blogs from '../../components/container/Blogs'
import CityTourModules from '../../components/container/CityTourModules'

const LandingPage = () => (
    // px-10 sm:px-32 md:px-16 lg:px-10 xl:px-24
    <div className='min-w-full'>
        <div className='flex h-[90vh] justify-center bg-hero bg-cover bg-center bg-no-repeat' />
        <CityTourModules />
        <section className='flex flex-col gap-12 py-12 px-10 sm:gap-14 sm:px-32 md:gap-16 md:px-16 lg:gap-20 lg:px-10 xl:gap-24 xl:px-24'>
            <PolularPackage />
            <TourTypes />
            <FeaturedPackage />
            <TopSites />
            <Blogs />
        </section>
    </div>
)

export default LandingPage
