import { useEffect, useState } from 'react'
import { Button, Group, TextInput, Textarea, Notification } from '@mantine/core'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { arrowBack, upload } from '../../../assets/images/dashboard'
import CommonHeader from '../../common/dashboard/CommonHeader'
import { useNavigate } from 'react-router-dom'
import { RichTextEditor } from '@mantine/rte'
import ImageUpload from '../../common/ImageUpload'
import { APIAddNewBlog, APIEditBlog } from '../../../api/blogAPI'
import showNotify from '../../../utils/notify'
import { blogDTO } from '../../../utils/formatters/blogDTO'
import { IBlogPostData } from '../../../utils/interfaces/IBlog'

const AddBlog = (props: any) => {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const handleLoading = (condition: boolean) => {
        setLoading(condition)
    }
    const {
        control,
        reset,
        setValue,
        getValues,
        formState: { errors },
        handleSubmit,
    } = useForm<IBlogPostData>({
        defaultValues: {
            blog_title: '',
            blog_video_url: '',
            blog_description: '',
            blog_cover_image: '',
        },
    })

    useEffect(() => {
        if (props.blogDeatils) {
            setValue('blog_title', props.blogDeatils.blog_title)
            setValue('blog_video_url', props.blogDeatils.blog_title)
            setValue('blog_cover_image', props.blogDeatils.blog_title)
            setValue('blog_description', props.blogDeatils.blog_title)
        }
    }, [props])

    const OnSubmit: SubmitHandler<IBlogPostData> = async (
        data: IBlogPostData
    ) => {
        try {
            const formattedData = blogDTO.send(data)
            const res = await APIAddNewBlog(formattedData)
            showNotify('success', 'Blog posted')
            navigate(-1)
        } catch {
            showNotify('error', 'Could not create blog')
        }
    }

    const handleEdit: SubmitHandler<IBlogPostData> = async (
        data: IBlogPostData
    ) => {
        try {
            const formattedData = blogDTO.send(data)
            const res = await APIEditBlog(formattedData, props.blogDeatils.id)
            showNotify('sucess', 'Blog Edited')
            navigate(-1)
        } catch (error) {
            showNotify('error', 'Could not edit blog')
        }
    }

    return (
        <section>
            <section className='mb-5 flex items-center gap-6 md:mb-8'>
                <button onClick={() => navigate(-1)}>
                    <img
                        src={arrowBack}
                        alt='Back'
                        className='h-4 w-4'
                    />
                </button>
                <CommonHeader heading='Blog' />
            </section>
            <form
                onSubmit={handleSubmit(props ? handleEdit : OnSubmit)}
                className='grid grid-cols-12 gap-5'>
                <Controller
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            size='lg'
                            label='Blog Title'
                            placeholder='Enter blog Title'
                            className='col-span-12 md:col-span-6'
                            error={errors.blog_title?.message}
                        />
                    )}
                    name='blog_title'
                    control={control}
                    rules={{ required: 'Blog title is required' }}
                />
                <Controller
                    render={({ field }) => (
                        <TextInput
                            size='lg'
                            {...field}
                            label='Video Link (optional)'
                            placeholder='Enter video link'
                            className='col-span-12 md:col-span-6'
                            error={errors.blog_video_url?.message}
                        />
                    )}
                    name='blog_video_url'
                    control={control}
                />
                <div className='col-span-12 md:col-start-7 md:col-end-13 md:row-span-2 md:row-start-1 '>
                    <div className='py-1 text-xl'>Blog Image</div>

                    <ImageUpload
                        control={control}
                        setValue={setValue}
                        getValues={getValues}
                        errors={errors}
                        value={'blog_cover_image'}
                        handleLoading={handleLoading}
                    />
                </div>

                <div className='col-span-12 '>
                    <div className='py-1 text-xl'>Blog description</div>
                    <Controller
                        render={({ field: { value, onChange } }) => (
                            <RichTextEditor
                                value={value}
                                onChange={onChange}></RichTextEditor>
                        )}
                        control={control}
                        name='blog_description'
                        rules={{ required: 'required' }}
                    />
                    <div className={'text-red-600'}>
                        {errors?.blog_description?.message}
                    </div>
                </div>

                <div className='col-span-12 flex justify-end gap-5'>
                    <Button
                        type='reset'
                        onClick={() => navigate(-1)}
                        variant='outline'>
                        Back
                    </Button>
                    <Button
                        type='submit'
                        variant='filled'
                        disabled={loading}
                        className={`bg-gdt-primary ${props ? 'hidden' : ''}`}>
                        Post
                    </Button>
                    <Button
                        type='submit'
                        variant='filled'
                        disabled={loading}
                        className={`bg-gdt-primary ${props ? '' : 'hidden'}`}>
                        Edit
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default AddBlog
