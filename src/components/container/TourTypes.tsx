import CardTourType from '../common/CardTourType'
import bikeRide from '../../assets/images/cards/bike_tour.jpg'

type Props = {}

const TourTypes = (props: Props) => {
    return (
        <div className='mt-[100px]'>
            <h1 className='Font-sans mb-[30px] text-[32px] font-bold leading-[36px] tracking-[1px]'>
                Tour Types
            </h1>
            <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
                <CardTourType
                    image={bikeRide}
                    title='Bike Tour'
                />
                <CardTourType
                    image={bikeRide}
                    title='Bike Tour'
                />
                <CardTourType
                    image={bikeRide}
                    title='Bike Tour'
                />
                <CardTourType
                    image={bikeRide}
                    title='Bike Tour'
                />
                <CardTourType
                    image={bikeRide}
                    title='Bike Tour'
                />
                <CardTourType
                    image={bikeRide}
                    title='Bike Tour'
                />
            </div>
        </div>
    )
}

export default TourTypes
