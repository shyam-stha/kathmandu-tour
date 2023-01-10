import Hero from '../../components/container/Hero'
import PolularPackage from '../../components/container/PopularPackage'
import FeaturedPackage from '../../components/container/FeaturedPackage'
import TourTypes from '../../components/container/TourTypes'
import TopSites from '../../components/container/TopSites'
import Footer from '../../components/partial/Footer'
import News from '../../components/container/News'
import ChatOption from '../../components/common/ChatOpton'

type Props = {}

const LandingPage = (props: Props) => {
    return (
        <div>
            <div className=' fixed right-5 bottom-8 z-10'>
                <ChatOption />
            </div>
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
