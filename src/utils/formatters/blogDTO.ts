import {
    IBlogData,
    IBlogDetailActive,
    IBlogPostData,
} from '../interfaces/IBlog'

export const blogDTO = {
    receive: (data: IBlogData[]) => {
        const res = data.map((dat: any) => {
            return {
                id: dat?.id,
                blugSlug: dat?.blog_slug || '--',
                blogTitle: dat?.blog_title || '--',
                blogDescription: dat?.blog_description || '--',
                blogCoverImage: dat?.blog_cover_image || '--',
                blogVideoUrl: dat?.blog_video_url || '--',
            }
        })
        return res
    },

    receiveActive: (data: IBlogDetailActive[]) => {
        const res = data.map((dat: IBlogDetailActive) => {
            return {
                blog_slug: dat?.blog_slug || '--',
                blog_title: dat?.blog_title || '--',
                blog_description: dat?.blog_description || '--',
                blog_cover_image: dat?.blog_cover_image || '--',
                blog_video_url: dat?.blog_video_url || '--',
            }
        })
        return res
    },

    send: (data: IBlogPostData) => {
        return {
            blog_title: data?.blog_title || '--',
            blog_description: data?.description || '--',
            blog_cover_image: data?.imgae_link || '--',
            blog_video_url: data?.video_link || '--',
        }
    },
}
