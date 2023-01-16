import CardTopSite from '../common/CardTopSite'
import darbarSqr from '../../assets/images/cards/darbar_sqr.jpg'
import Title from '../common/Title'

function TopSites() {
    return (
        <section className='flex flex-col gap-6'>
            <Title title='Top Sites to Visit' />
            <div className='grid grid-cols-12 gap-y-5 sm:gap-x-5 md:place-content-between lg:place-content-between'>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <CardTopSite
                        title='Visit Darbar Square'
                        image={darbarSqr}
                    />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <CardTopSite
                        title='Visit Darbar Square'
                        image={darbarSqr}
                    />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <CardTopSite
                        title='Visit Darbar Square'
                        image={darbarSqr}
                    />
                </div>
            </div>
        </section>
    )
}

export default TopSites
