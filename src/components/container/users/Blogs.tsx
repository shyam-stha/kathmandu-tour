import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { APIGetAllActiveBlogs } from '../../../api/blogAPI'
import { blogDTO } from '../../../utils/formatters/blogDTO'
import CardBlog from '../../common/blog/CardBlog'
import CardBlogSmall from '../../common/blog/CardBlogSmall'
import Title from '../../common/Title'

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const getActiveBlogs = async () => {
        try {
            const res = await APIGetAllActiveBlogs()
            const formattedData = blogDTO.receiveActive(res?.data)
            setBlogs(formattedData)
        } catch (e) {}
    }

    useEffect(() => {
        getActiveBlogs()
    }, [])
    return (
        <section className='flex flex-col gap-6'>
            <Title
                title='Blogs'
                linkText='View all'
                path='/blogs'
            />
            <div className='grid grid-cols-12 gap-5 '>
                <section className='col-span-12  lg:col-span-8'>
                    <CardBlog blogDetail={blogs[0]} />
                </section>
                <section className='col-span-12 flex flex-col gap-5 md:flex-row lg:col-span-4 lg:flex-col '>
                    <CardBlogSmall blogDetail={blogs[1]} />
                    <CardBlogSmall blogDetail={blogs[2]} />
                </section>
            </div>
        </section>
    )
}

export default Blogs
