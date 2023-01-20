export interface IBlogData {
    id: string
    blogSlug: string
    blogTitle: string
    blogDescription: string
    blogCoverImage: string
    blogVideoUrl: string
}

export interface IBlogDetailActive {
    blog_slug: string
    blog_title: string
    blog_description: string
    blog_cover_image: string
    blog_video_url: string
}

export interface IBlogPostData {
    blog_title: string
    blog_description: string
    blog_cover_image: string
    blog_video_url: string
}
