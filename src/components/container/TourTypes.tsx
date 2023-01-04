import CardTourType from '../common/CardTourType'
import bikeRide from '../../assets/images/cards/bike_tour.jpg'

type Props = {}

const TourTypes = (props: Props) => {
    return (
        <div className='mt-[100px]'>
            <h1 className='Font-sans mb-[30px] text-[32px] font-bold leading-[36px] tracking-[1px]'>
                Tour Types
            </h1>
        <div className='flex flex-wrap justify-between'>
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
