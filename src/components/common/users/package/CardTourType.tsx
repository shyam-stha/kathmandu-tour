import { Badge } from '@mantine/core'

type Props = {
    image: any
    title: string
}

const CardTourType = ({ image, title }: Props) => {
    return (
        <div className='min-h-[380px] w-[280px] overflow-hidden rounded-md bg-off-white shadow-sm'>
            <img
                src={image}
                alt='image'
                className='min-h-[300px] w-full object-cover'
            />
            <div className='flex h-[80px] w-full items-center gap-5 pl-2'>
                <h2 className='text-lg font-bold'>{title}</h2>
                <div className='flex h-5 w-5 items-center justify-center rounded-full bg-body font-bold text-off-white'>
                    2
                </div>
            </div>
        </div>
    )
}

export default CardTourType
