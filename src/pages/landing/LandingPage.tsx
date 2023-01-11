import PolularPackage from '../../components/container/PopularPackage'
import FeaturedPackage from '../../components/container/FeaturedPackage'
import TourTypes from '../../components/container/TourTypes'
import TopSites from '../../components/container/TopSites'
import News from '../../components/container/News'
import ChatOption from '../../components/common/ChatOpton'

type Props = {}

const LandingPage = (props: Props) => {
    return (
        <div>
            <div className='flex h-screen justify-center  bg-hero bg-cover bg-center bg-no-repeat'></div>
            <div className='mx-[90px]'>
                <PolularPackage />
                <TourTypes />
                <FeaturedPackage />
                <TopSites />
                <News />
            </div>
        </div>
    )
}

export default LandingPage
