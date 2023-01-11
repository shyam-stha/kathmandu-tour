import React from 'react'
import CardBlogsSmall from '../../components/common/CardBlogSmall'

type Props = {}

const Blogs = (props: Props) => {
    return (
        <div className='grid grid-cols-12 pb-5 pt-[90px]'>
            <div className='col-start-2 col-end-12'>
                <div>
                    <h1 className='text-[32px] font-[700] tracking-[1px] text-title-active pb-5'>
                        Blogs
                    </h1>
                </div>
                <div className='grid grid-cols-3 gap-5'>
                    <CardBlogsSmall />
                    <CardBlogsSmall />
                    <CardBlogsSmall />
                    <CardBlogsSmall />
                    <CardBlogsSmall />
                    <CardBlogsSmall />
                    <CardBlogsSmall />
                    <CardBlogsSmall />
                    <CardBlogsSmall />
                </div>
            </div>
        </div>
    )
}

export default Blogs
