type Props = {
    image: any
    title: string
}

const CardTopSite = ({ image, title }: Props) => {
    return (
        <div className='h-[450px] w-[390px] rounded-md bg-white shadow-md shadow-gray-100 '>
            <img
                src={image}
                alt='image'
                className='h-[380px] rounded-t-md object-fill'
            />
            <h2 className='w-full p-[10px] text-center text-[24px] font-[700] leading-[28px] tracking-[1px]'>
                {title}
            </h2>
        </div>
    )
}

export default CardTopSite
