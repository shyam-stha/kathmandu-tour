import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APIGetBlogDetail } from '../../../api/blogAPI'
import { IBlogDetailActive } from '../../../utils/interfaces/IBlog'
import AddBlog from './AddBlog'

const BlogEditAdmin = () => {
    const [blogDetails, setBlogDeatils] = useState<IBlogDetailActive>()
    const { blogId } = useParams()

    const getBlogDetail = async (id: string) => {
        try {
            const res = await APIGetBlogDetail(id)
            setBlogDeatils(res.data)
        } catch (e: any) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (blogId) {
            getBlogDetail(blogId)
        }
    }, [blogId])

    return (
        <div>
            <h1>Edit Blog</h1>
            <AddBlog blogDeatils={blogDetails} />
        </div>
    )
}

export default BlogEditAdmin
