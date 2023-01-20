export const blogDTO = {
    receive: (data: any) => {
        return {
            blog: {
                blugSlug: data?.blog_slug || '--',
                blogTitle: data?.blog_title || '--',
                blogDescription: data?.blog_description || '--',
                blogCoverImage: data?.blog_cover_image || '--',
                blogVideoUrl: data?.blog_video_url || '--',
            },
        }
    },
}
