import { hero } from '../../../assets/images/landing'

const CardBlogSmall = () => {
    return (
        <div className='relative min-h-[200px] min-w-[300px] flex-1 overflow-hidden rounded-md text-element-bg '>
            <img
                src={hero}
                alt='image'
                className='absolute inset-0 h-full w-full object-cover'
            />
            <div className=' absolute bottom-0 w-full p-[10px] backdrop-blur-[3px] backdrop-opacity-90 '>
                <h2 className='text-lg leading-6 tracking-[1px]'>
                    Walks Local Market
                </h2>
                <span className='text-sm tracking-[0.75px]'>Dec 15</span>
            </div>
        </div>
    )
}

export default CardBlogSmall
