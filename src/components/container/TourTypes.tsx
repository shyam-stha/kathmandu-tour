import CardTourType from '../common/CardTourType'
import bikeRide from '../../assets/images/cards/bike_tour.jpg'

type Props = {}

const TourTypes = (props: Props) => {
    return (
        <CardTourType
            image={bikeRide}
            title='Bike Tour'
        />
    )
}

export default TourTypes
