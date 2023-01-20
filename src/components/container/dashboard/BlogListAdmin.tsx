import { Button } from '@mantine/core'
import CardBlogAdmin from '../../common/dashboard/CardBlogAdmin'
import CommonHeader from '../../common/dashboard/CommonHeader'
import { notification, search } from '../../../assets/images/dashboard'
import { useMediaQuery } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'

const BlogListAdmin = () => {
    const largerScreen = useMediaQuery('(min-width: 768px)')
    const navigate = useNavigate()
    const CreateBlog = () => {
        navigate('add_blog')
    }
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
                        onClick={() => CreateBlog()}
                        className='bg-gdt-primary'
                        size={largerScreen ? 'md' : 'xs'}>
                        Create Blog
                    </Button>
                </div>
            </section>
            <section className=' grid grid-cols-12 gap-5'>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3'>
                    <CardBlogAdmin />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3'>
                    <CardBlogAdmin />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3'>
                    <CardBlogAdmin />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3'>
                    <CardBlogAdmin />
                </div>
            </section>
        </div>
    )
}

export default BlogListAdmin
