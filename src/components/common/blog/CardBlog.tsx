import { hero } from '../../../assets/images/landing'
import { useNavigate } from 'react-router-dom'

const CardBlog = (props: any) => {
    const { blogDetail } = props
    const navigate = useNavigate()

    return (
        <div
            className='relative min-h-[420px] min-w-[300px] overflow-hidden rounded-md font-sans tracking-[0.75px] text-element-bg '
            onClick={() => navigate(`/blog-details/${blogDetail.blog_slug}`)}>
            <img
                src={blogDetail?.blog_cover_image}
                alt='image'
                className='absolute inset-0 h-full w-full object-cover '
            />
            <div className=' absolute bottom-[30px] left-[30px] p-[10px] font-sans tracking-[1px] '>
                <h2 className='text-xl font-bold'>{blogDetail?.blog_title}</h2>
                <div className='text-md flex gap-3 font-semibold '>
                    <span>Written by</span>
                    <span> Prabhat Khadka</span>
                </div>
                <span className='text-md font-light'>Dec 15</span>
            </div>
        </div>
    )
}

export default CardBlog
