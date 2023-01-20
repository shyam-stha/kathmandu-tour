import { Carousel } from '@mantine/carousel'
import CardTourType from '../../common/users/package/CardTourType'
import { bikeTour } from '../../../assets/images/cards'
import Title from '../../common/Title'

const TourTypes = () => (
    <section className='flex flex-col gap-6'>
        <Title title='Tour Types' />
        <div>
            <Carousel
                align={'start'}
                slideGap={'sm'}
                slideSize={'18%'}
                height={'400px'}
                miw={'300px'}
                withControls
                loop>
                <Carousel.Slide>
                    <CardTourType
                        image={bikeTour}
                        title='Bike Tour'
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <CardTourType
                        image={bikeTour}
                        title='Bike Tour'
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <CardTourType
                        image={bikeTour}
                        title='Bike Tour'
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <CardTourType
                        image={bikeTour}
                        title='Bike Tour'
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <CardTourType
                        image={bikeTour}
                        title='Bike Tour'
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <CardTourType
                        image={bikeTour}
                        title='Bike Tour'
                    />
                </Carousel.Slide>
            </Carousel>
        </div>
    </section>
)

export default TourTypes
