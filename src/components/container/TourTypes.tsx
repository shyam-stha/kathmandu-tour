import { Carousel } from '@mantine/carousel'
import CardTourType from '../common/CardTourType'
import rider from '../../assets/images/cards/bike_tour.jpg'
import Title from '../common/Title'

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
                        image={rider}
                        title='Bike Tour'
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <CardTourType
                        image={rider}
                        title='Bike Tour'
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <CardTourType
                        image={rider}
                        title='Bike Tour'
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <CardTourType
                        image={rider}
                        title='Bike Tour'
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <CardTourType
                        image={rider}
                        title='Bike Tour'
                    />
                </Carousel.Slide>
                <Carousel.Slide>
                    <CardTourType
                        image={rider}
                        title='Bike Tour'
                    />
                </Carousel.Slide>
            </Carousel>
        </div>
    </section>
)

export default TourTypes
