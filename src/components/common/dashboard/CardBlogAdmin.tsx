import { ActionIcon } from '@mantine/core'
import {
    IconBatteryAutomotive,
    IconEdit,
    IconSettings,
    IconTrash,
} from '@tabler/icons'
import { useNavigate } from 'react-router-dom'
import { APIChangeBlogStatus } from '../../../api/blogAPI'
import { edit, remove, travel } from '../../../assets/images/dashboard'
import showNotify from '../../../utils/notify'
import Title from '../Title'

const CardBlogAdmin = (props: any) => {
    const navigate = useNavigate()
    const { blogDetail, handleDelete } = props

    return (
        <div
            className='relative h-[200px] min-w-[200px] overflow-hidden rounded-md '
            onClick={() => navigate(`detail/${blogDetail.id}`)}>
            <img
                src={blogDetail.blogCoverImage}
                className='-z-10 h-full w-full object-cover'
            />
            <div className=' text-md absolute bottom-0 left-0 right-0 h-16 flex items-center  text-white bg-blend-color-dodge  backdrop-blur-[3px] sm:text-lg'>
                {blogDetail.blogTitle}
            </div>
            <div className=' absolute top-3 right-6 flex cursor-pointer gap-2'>
                <ActionIcon
                    variant='filled'
                    onClick={() => navigate(`detail/${blogDetail.id}`)}>
                    <IconEdit size={32} />
                </ActionIcon>
                <ActionIcon
                    variant='filled'
                    onClick={() => handleDelete(blogDetail.id)}>
                    <IconTrash size={32} />
                </ActionIcon>
            </div>
        </div>
    )
}

export default CardBlogAdmin
