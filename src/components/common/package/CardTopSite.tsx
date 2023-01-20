type Props = {
    image: any
    title: string
}

const CardTopSite = ({ image, title }: Props) => {
    return (
        <div className='min-h-[450px] min-w-[300px] rounded-md bg-off-white shadow-sm  '>
            <img
                src={image}
                alt='image'
                className='h-[380px] w-full rounded-t-md object-cover'
            />
            <h2 className=' p-[10px] text-center  text-xl font-bold tracking-[1px]'>
                {title}
            </h2>
        </div>
    )
}

export default CardTopSite
