import CardPackage from '../common/CardPackage'
import Title from '../common/Title'

const PopularPackage = () => {
    return (
        <section className='flex flex-col gap-6'>
            <Title
                title='Popular Experiences'
                linkText='All things to do'
                path='/packages'
            />
            <div className='grid grid-cols-12 gap-y-5 sm:gap-x-5 md:place-content-between lg:place-content-between'>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <CardPackage />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <CardPackage />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <CardPackage />
                </div>
            </div>
        </section>
    )
}

export default PopularPackage
