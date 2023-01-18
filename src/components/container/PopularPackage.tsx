import { Carousel } from '@mantine/carousel'
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
            <div className='hidden md:grid md:grid-cols-12 md:place-content-between md:gap-5'>
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
            <div className='md:hidden'>
                <Carousel
                    withIndicators
                    sx={{ maxWidth: '100%' }}
                    loop
                    mx={'auto'}
                    slideGap={'sm'}
                    slidesToScroll={1}>
                    <Carousel.Slide>
                        <CardPackage />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <CardPackage />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <CardPackage />
                    </Carousel.Slide>
                </Carousel>
            </div>
        </section>
    )
}

export default PopularPackage
