import { Group, Tooltip } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import CardItems from './CardItem'
import hero from '../../assets/images/landing/hero.png'
import cost from '../../assets/images/cards/cost.svg'
import booking from '../../assets/images/cards/booking.svg'
import time from '../../assets/images/cards/time.svg'
import views from '../../assets/images/cards/views.svg'
import nightStay from '../../assets/images/cards/night_stay.svg'
import bike from '../../assets/images/cards/bike.svg'
import foodBank from '../../assets/images/cards/food_bank.svg'
import familyRestroom from '../../assets/images/cards/family_restroom.svg'
import walk from '../../assets/images/cards/walk.svg'

type Props = {}

const cardItemObj = [
    {
        icon: cost,
        text: 'pp',
        value: '34',
    },
    {
        icon: booking,
        text: 'booking',
        value: '5',
    },
    {
        icon: time,
        text: 'Hours',
        value: '1',
    },
    {
        icon: views,
        text: 'Views',
        value: '8',
    },
]

const tourTripIcons = [
    {
        icon: bike,
        visible: true,
        tooltip: 'Bike',
    },
    {
        icon: familyRestroom,
        visible: true,
        tooltip: 'Family Restroom',
    },
    {
        icon: foodBank,
        visible: true,
        tooltip: 'Food Bank',
    },
    {
        icon: walk,
        visible: true,
        tooltip: 'Walk',
    },
    {
        icon: nightStay,
        visible: true,
        tooltip: 'Night Stay',
    },
]

const CardPackage = (props: Props) => {
    const navigate = useNavigate()
    const items = cardItemObj?.map((item) => {
        return (
            <CardItems
                key={item.text}
                text={item.text}
                value={item.value}
                icon={item.icon}
            />
        )
    })

    const NavigateTo = () => {
        navigate('/details')
    }

    return (
        <div
            className='bg-off-white  flex min-w-[300px] cursor-pointer flex-col overflow-hidden rounded-md font-sans shadow-sm '
            onClick={() => NavigateTo()}>
            <div className='relative '>
                <img
                    src={hero}
                    alt='image'
                    className='h-[250px] w-full object-cover'
                />
                <Group className='text-white absolute bottom-3 left-3'>
                    {tourTripIcons?.map((icon) => {
                        return (
                            <Tooltip
                                label={icon.tooltip}
                                key={icon.tooltip}>
                                <div
                                    className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-md backdrop-blur-[2px] ${
                                        !icon.visible ? 'hidden' : ''
                                    }`}>
                                    <img
                                        src={icon.icon}
                                        alt={icon.tooltip}
                                    />
                                </div>
                            </Tooltip>
                        )
                    })}
                </Group>
            </div>
            <div className=' p-3'>
                <h2 className='text-lg font-bold'>Experience nepal now</h2>
                <div className='grid grid-cols-2 pt-1 font-bold '>{items}</div>
            </div>
        </div>
    )
}

export default CardPackage
