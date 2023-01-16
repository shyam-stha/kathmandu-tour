type Props = {
    image: any
    title: string
}

const CardTourType = ({ image, title }: Props) => {
    return (
        <div className='bg-off-white min-h-[380px] w-[280px] rounded-md shadow-sm overflow-hidden'>
            <img
                src={image}
                alt='image'
                className='min-h-[300px] w-full object-cover'
            />
            <div className='flex h-[80px] w-full items-center pl-2'>
                <h2 className='text-lg font-bold'>{title}</h2>
            </div>
        </div>
    )
}

export default CardTourType
