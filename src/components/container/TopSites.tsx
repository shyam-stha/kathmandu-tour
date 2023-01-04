import CardTopSite from '../common/CardTopSite'
import DarbarSqr from '../../assets/images/cards/darbar_sqr.jpg'

type Props = {}

const TopSites = (props: Props) => {
    return (
        <div className='mt-[100px]'>
            <h1 className='Font-sans mb-[30px] text-[32px] font-bold leading-[36px] tracking-[1px]'>
                Top Sites to visit
            </h1>
            <div className='flex flex-wrap justify-between'>
                <CardTopSite
                    image={DarbarSqr}
                    title='Kathmandu Darbar Square'
                />
                <CardTopSite
                    image={DarbarSqr}
                    title='Kathmandu Darbar Square'
                />
                <CardTopSite
                    image={DarbarSqr}
                    title='Kathmandu Darbar Square'
                />
            </div>
        </div>
    )
}

export default TopSites
