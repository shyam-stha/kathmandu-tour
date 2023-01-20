import CardBlog from '../../../components/common/blog/CardBlog'
import { Select } from '@mantine/core'
import Title from '../../../components/common/Title'

const AvailablePackage = () => {
    return (
        <section className='px-10 pb-12 pt-32 sm:px-32 md:px-16 lg:px-10 xl:px-24'>
            <div className='mb-7 flex justify-between   '>
                <Title title='All Blogs' />
                <Select
                    placeholder='Filter'
                    data={['..']}
                    className='hidden md:flex '
                />
            </div>
            <div className='grid grid-cols-12 gap-5 lg:gap-10'>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 '>
                    <CardBlog />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 '>
                    <CardBlog />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 '>
                    <CardBlog />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 '>
                    <CardBlog />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 '>
                    <CardBlog />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 '>
                    <CardBlog />
                </div>
                <div className='col-span-12 md:col-span-6 lg:col-span-4 '>
                    <CardBlog />
                </div>
            </div>
        </section>
    )
}

export default AvailablePackage
