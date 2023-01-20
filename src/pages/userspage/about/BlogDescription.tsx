import { Link, useParams } from 'react-router-dom'
import Title from '../../../components/common/Title'
import gosaikunda from '../../../assets/images/about/gosaikunda.jpg'
import { useEffect, useState } from 'react'
import { APIGetBlogDetailByName } from '../../../api/blogAPI'

const newsList = [
    { title: 'Trekking during the Pandemic | Gosainkunda Lakes', link: '/' },
    { title: 'Interesting Facts about the Himalayas', link: '/' },
    { title: 'KORA | Ride for a Cause', link: '/' },
    { title: 'Kathmandu | Walk with Locals', link: '/' },
]

const BlogDescription = (props: any) => {
    const { blogSlug } = useParams()

    const [blogDetail, setBlogDetail] = useState<any>({})

    const getBlogDetailByName = async () => {
        try {
            const res = await APIGetBlogDetailByName(blogSlug)
            setBlogDetail(res.data)
        } catch (e) {}
    }
    useEffect(() => {
        getBlogDetailByName()
    }, [blogSlug])
    return (
        <section className='grid grid-cols-12 gap-5 py-[90px] px-10 md:gap-10 '>
            <div className='col-span-12 sm:col-span-8 md:col-span-7'>
                <h1 className='pb-4'>
                    <Title title={blogDetail?.blog_title} />
                </h1>
                <img
                    src={blogDetail?.blog_cover_image}
                    className='mb-5 rounded-md'
                />
                <div className='text-justify'>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: blogDetail?.blog_description,
                        }}
                    />{' '}
                </div>
                <div className='my-5 grid grid-cols-12'>
                    <video
                        controls
                        className='col-span-full h-full w-full rounded-md sm:col-start-2 sm:col-end-12'>
                        <source src='https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcTjjcgdViHPrSwqMFgII1sIWyAsnVpWwOEiGw' />
                    </video>
                </div>
            </div>
            <div className='col-span-12 sm:col-span-4 md:col-span-5'>
                <h1 className='pb-2'>
                    <Title title='Similar News' />
                </h1>
                {newsList?.map((news) => {
                    return (
                        <div key={news.title}>
                            <Link to={news.link}>
                                <li>{news.title}</li>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default BlogDescription
