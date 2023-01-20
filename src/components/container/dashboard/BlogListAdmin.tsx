import { Button } from '@mantine/core'
import CardBlogAdmin from '../../common/dashboard/CardBlogAdmin'
import CommonHeader from '../../common/dashboard/CommonHeader'
import { notification, search } from '../../../assets/images/dashboard'
import { useMediaQuery } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
    APIChangeBlogStatus,
    APIGetAllBlogs,
    APIRemoveBlog,
} from '../../../api/blogAPI'
import { blogDTO } from '../../../utils/formatters/blogDTO'
import showNotify from '../../../utils/notify'

const BlogListAdmin = () => {
    const [blogs, setBlogs] = useState([])
    const largerScreen = useMediaQuery('(min-width: 768px)')
    const navigate = useNavigate()
    const createBlog = () => {
        navigate('add_blog')
    }

    const getBlogs = async () => {
        const blogRes = await APIGetAllBlogs()
        const formattedData = blogDTO.receive(blogRes.data)
        setBlogs(formattedData)
    }

    const handleDelete = async (blogId: string) => {
        console.log('here')

        try {
            // const res = await APIChangeBlogStatus(blogId, false)
            const res = await APIRemoveBlog(blogId)
            showNotify('success', 'Blog deleted successfully')
            getBlogs()
        } catch {
            showNotify('error', 'Could not delete blog')
        }
    }

    useEffect(() => {
        getBlogs()
    }, [])
    return (
        <div>
            <section className='mb-5 flex items-center justify-between md:mb-8'>
                <CommonHeader heading='Blog' />
                <div className='flex items-center gap-4'>
                    <button className='rounded-md border-[1px] border-label p-1 md:p-2'>
                        <img
                            src={search}
                            alt='Search'
                        />
                    </button>
                    <button className='rounded-md border-[1px] border-label p-1 md:p-2'>
                        <img
                            src={notification}
                            alt='Notification'
                        />
                    </button>
                    <Button
                        onClick={() => createBlog()}
                        className='bg-gdt-primary'
                        size={largerScreen ? 'md' : 'xs'}>
                        Create Blog
                    </Button>
                </div>
            </section>
            <section className=' grid grid-cols-12 gap-5'>
                {blogs.map((blog, idx) => (
                    <div
                        className='col-span-12 cursor-pointer md:col-span-6 lg:col-span-4 2xl:col-span-3'
                        key={idx}>
                        <CardBlogAdmin
                            blogDetail={blog}
                            handleDelete={handleDelete}
                        />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default BlogListAdmin
