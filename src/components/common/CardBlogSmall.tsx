import hero from '../../assets/images/landing/hero.png'

const CardBlogsSmall = () => {
    return (
        <div className='relative h-[245px] w-full overflow-hidden rounded-md '>
            <img
                src={hero}
                alt='image'
                className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute bottom-0 h-[100px] w-full p-[10px] font-sans text-white backdrop-blur-[3px] '>
                <h2 className='text-[24px] leading-6 tracking-[1px]'>
                    Walks Local Market
                </h2>
                <span className='text-[20px] tracking-[0.75px]'>Dec 15</span>
            </div>
        </div>
    )
}

export default CardBlogsSmall
