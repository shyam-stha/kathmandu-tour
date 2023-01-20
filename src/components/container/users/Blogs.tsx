import { Outlet } from 'react-router-dom'
import CardBlog from '../../common/users/blog/CardBlog'
import CardBlogSmall from '../../common/users/blog/CardBlogSmall'
import Title from '../../common/Title'

const Blogs = () => {
    return (
        <section className='flex flex-col gap-6'>
            <Title
                title='Blogs'
                linkText='View all'
                path='/blogs'
            />
            <div className='grid grid-cols-12 gap-5 '>
                <section className='col-span-12  lg:col-span-8'>
                    <CardBlog />
                </section>
                <section className='col-span-12 flex flex-col gap-5 md:flex-row lg:col-span-4 lg:flex-col '>
                    <CardBlogSmall />
                    <CardBlogSmall />
                </section>
            </div>
        </section>
    )
}

export default Blogs
