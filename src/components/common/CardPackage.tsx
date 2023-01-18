import { Group, Tooltip } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import CardItems from './CardItem'
import hero from '../../assets/images/landing/hero.png'
import { tourTripIcons, cardItemObj } from '../../utils/constants/packages'

type Props = {}

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
            className='flex  min-w-[300px] cursor-pointer flex-col overflow-hidden rounded-md bg-off-white font-sans shadow-sm '
            onClick={() => NavigateTo()}>
            <div className='relative '>
                <img
                    src={hero}
                    alt='image'
                    className='h-[250px] w-full object-cover'
                />
                <Group className='absolute bottom-3 left-3 text-white'>
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
