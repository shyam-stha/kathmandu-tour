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
import { IBlogDetail } from '../../../utils/interfaces/IBlog'
import { useAppDispatch } from '../../../store/hooks'
import { editBlog } from '../../../store/reducers/blogSlice'

const CardBlogAdmin = (props: any) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { blogDetail, handleDelete } = props
    const handleEdit = (e: any, blogId: string) => {
        // dispatch(editBlog(blogDetail))
        // navigate(`detail/${blogDetail?.id}`)

        e.stopPropagation()
        navigate(`edit/${blogId}`)
    }

    return (
        <div
            className='relative h-[200px] min-w-[200px] overflow-hidden rounded-md '
            onClick={() => navigate(`detail/${blogDetail?.id}`)}>
            <img
                src={blogDetail?.blogCoverImage}
                className='-z-10 h-full w-full object-cover'
            />
            <div className=' text-md absolute bottom-0 left-0 right-0 flex h-16 items-center  text-white bg-blend-color-dodge  backdrop-blur-[3px] sm:text-lg'>
                {blogDetail?.blogTitle}
            </div>
            <div className=' absolute top-3 right-6 flex cursor-pointer gap-2'>
                <ActionIcon
                    variant='filled'
                    onClick={(e) => handleEdit(e, blogDetail?.id)}>
                    <IconEdit size={32} />
                </ActionIcon>
                <ActionIcon
                    variant='filled'
                    onClick={() => handleDelete(blogDetail?.id)}>
                    <IconTrash size={32} />
                </ActionIcon>
            </div>
        </div>
    )
}

export default CardBlogAdmin
