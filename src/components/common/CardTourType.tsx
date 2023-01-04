type Props = {
    image: any
    title: string
}

const CardTourType = ({ image, title }: Props) => {
    return (
        <div className='h-[180px] w-[200px] rounded-md bg-white shadow-md shadow-gray-100 '>
            <img
                src={image}
                alt='image'
                className=' h-[130px] rounded-t-md object-fill'
            />
            <h2 className='p-[10px] text-[20px] font-[700] '>{title}</h2>
        </div>
    )
}

export default CardTourType
