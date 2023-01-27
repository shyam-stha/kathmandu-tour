import {
    IBlogDetailActive,
    IBlogPostData,
    IBlogReceivedData,
} from '../interfaces/IBlog'

export const blogDTO = {
    receive: (data: IBlogReceivedData[]) => {
        const res = data.map((dat: IBlogReceivedData) => {
            return {
                id: dat?.id,
                blog_slug: dat?.blog_slug || '--',
                blog_title: dat?.blog_title || '--',
                blog_description: dat?.blog_description || '--',
                blog_cover_image: dat?.blog_cover_image || '--',
                blog_video_url: dat?.blog_video_url || '--',
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
            blog_teaser: data?.blog_teaser || '--',
            blog_description: data?.blog_description || '--',
            blog_cover_image: data?.blog_cover_image || '--',
            blog_video_url: data?.blog_video_url || '--',
        }
    },
}
