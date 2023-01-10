import hero from '../../assets/images/landing/hero.png'

const CardBlog = () => {
    return (
        <div className='relative h-[500px] overflow-hidden rounded-md font-sans w-full  '>
            <img
                src={hero}
                alt='image'
                className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute bottom-[40px] left-[30px] p-[10px] font-sans tracking-[1px] text-white '>
                <h2 className='text-[32px] font-bold'>
                    Sunset Walk at Swyambhu
                </h2>
                <div className='flex gap-3 text-[24px] tracking-[.75px]'>
                    <span>Written by</span>
                    <span> Prabhat Khadka</span>
                </div>
                <span className='text-[20px] tracking-[0.75px]'>Dec 15</span>
            </div>
        </div>
    )
}

export default CardBlog
