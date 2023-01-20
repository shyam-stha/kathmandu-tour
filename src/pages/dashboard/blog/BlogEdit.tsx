import { Link, useNavigate, useParams } from 'react-router-dom'
import Title from '../../../components/common/Title'
import { useEffect, useState } from 'react'
import {
    APIChangeBlogStatus,
    APIGetBlogDetail,
    APIRemoveBlog,
} from '../../../api/blogAPI'
import { ActionIcon, Badge, Button } from '@mantine/core'
import { IconArrowLeft, IconArrowNarrowLeft } from '@tabler/icons'
import showNotify from '../../../utils/notify'
import { IBlogData } from '../../../utils/interfaces/IBlog'
const BlogEdit = () => {
    const navigate = useNavigate()
    const [blogDetail, setBlogDetail] = useState<IBlogData | {}>({})
    const { blogId } = useParams()

    const getBlogDetail = async (id: string) => {
        try {
            const res = await APIGetBlogDetail(id)
            setBlogDetail(res.data)
        } catch (e: any) {
            console.log(e)
        }
    }

    const handleDelete = async (blogId: string) => {
        try {
            // const res = await APIChangeBlogStatus(blogId, false)
            const res = await APIRemoveBlog(blogId)
            showNotify('success', 'Blog deleted successfully')
            navigate(-1)
        } catch {
            showNotify('error', 'Could not delete blog')
        }
    }

    const handeStatus = async (blogId: string, blogStatus: Boolean) => {
        try {
            const res = await APIChangeBlogStatus(blogId, blogStatus)
            showNotify('success', res.message)
            navigate(-1)
        } catch (e) {
            showNotify('error', 'Could not change status')
        }
    }
    useEffect(() => {
        if (blogId) {
            getBlogDetail(blogId)
        }
    }, [blogId])

    return (
        <section className='grid grid-cols-12 gap-5 px-10 pb-[90px] md:gap-10 '>
            <div className='col-span-12 '>
                <section className='flex flex-row items-center pb-4 text-gray-600'>
                    <div
                        className='flex h-10 w-10 cursor-pointer flex-row items-center justify-center rounded-full bg-gray-200'
                        onClick={() => navigate(-1)}>
                        <IconArrowLeft />
                    </div>
                    <div className='pl-4 text-2xl'>Back</div>
                </section>

                <div className='flex items-center justify-between pb-3'>
                    <h1>
                        <Title title={blogDetail?.blog_title} />
                    </h1>

                    <Badge
                        size='xl'
                        color={`${
                            blogDetail.is_active === true ? 'green' : 'red'
                        }`}>
                        {blogDetail.is_active === true
                            ? 'POSTED'
                            : 'DEACTIVATED'}
                    </Badge>
                </div>

                <img
                    src={blogDetail?.blog_cover_image || blogDetail.blog_title}
                    className='mb-5 w-full rounded-md'
                />
                <div className='text-justify'>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: blogDetail?.blog_description,
                        }}
                    />{' '}
                </div>
                {blogDetail.blog_video_url && (
                    <div className='my-5 grid grid-cols-12'>
                        <video
                            controls
                            className='col-span-full h-full w-full rounded-md sm:col-start-2 sm:col-end-12'>
                            <source src={blogDetail.blog_video_url} />
                        </video>
                    </div>
                )}
            </div>

            <div className='col-span-12 flex items-center justify-end gap-5'>
                <Button
                    type='reset'
                    onClick={() => handleDelete(blogDetail.id)}
                    color={'red'}
                    variant='outline'>
                    Delete
                </Button>
                <Button
                    type='submit'
                    variant='filled'
                    onClick={() =>
                        handeStatus(blogDetail.id, !blogDetail.is_active)
                    }
                    className=' bg-gdt-primary'>
                    {blogDetail.is_active === true ? 'Deactivate' : 'Activate'}
                </Button>
            </div>
        </section>
    )
}

export default BlogEdit
