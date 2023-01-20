import { edit, remove, travel } from '../../../assets/images/dashboard'
import Title from '../Title'

const CardBlogAdmin = () => {
    return (
        <div className='relative h-[200px] min-w-[200px] overflow-hidden rounded-md '>
            <img
                src={travel}
                className='-z-10 h-full w-full object-cover'
            />
            <h1 className='absolute bottom-5 left-5 text-sm text-white sm:text-lg'>
                Cook Like a Local
            </h1>
            <div className=' absolute top-3 right-6 flex cursor-pointer gap-2'>
                <img
                    src={remove}
                    alt='remove'
                />
                <img
                    src={edit}
                    alt='edit'
                />
            </div>
        </div>
    )
}

export default CardBlogAdmin
