import { NavLink } from 'react-router-dom'
import CardBlog from '../common/CardBlog'
import CardBlogsSmall from '../common/CardBlogSmall'

type Props = {}

const News = (props: Props) => {
    return (
        <div className='mt-[100px] mb-[50px] '>
            <div className='mb-[30px] flex h-10 items-center justify-between font-sans'>
                <h1 className='Font-sans text-[32px] font-bold leading-[36px] tracking-[1px]'>
                    News
                </h1>
                <NavLink
                    to='/'
                    className='Font-sans text-[20px] leading-[24px] tracking-[0.75px]'>
                    View all
                </NavLink>
            </div>
            <div className='flex justify-between'>
                <CardBlog />
                <div className='flex flex-col justify-between'>
                    <CardBlogsSmall />
                    <CardBlogsSmall />
                </div>
            </div>
        </div>
    )
}

export default News
