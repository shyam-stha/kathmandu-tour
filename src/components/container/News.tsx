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
            <div className='grid grow grid-cols-1 gap-y-5 gap-x-5 2xl:grid-cols-3 2xl:place-content-between'>
                <div className='2xl:col-span-2'>
                    <CardBlog />
                </div>
                <div className='grid grid-cols-1 gap-y-5 gap-x-5 xl:grid-cols-2 2xl:flex 2xl:flex-col 2xl:justify-between 2xl:gap-0'>
                    <CardBlogsSmall />
                    <CardBlogsSmall />
                </div>
            </div>
        </div>
    )
}

export default News
