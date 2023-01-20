import { useState } from 'react'
import { Button, Group, TextInput, Textarea, Notification } from '@mantine/core'
import { useForm, Controller } from 'react-hook-form'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { arrowBack, upload } from '../../../assets/images/dashboard'
import CommonHeader from '../../common/dashboard/CommonHeader'
import { useNavigate } from 'react-router-dom'

const AddBlog = () => {
    const [file, setFile] = useState({})
    const [error, setError] = useState({})
    const navigate = useNavigate()

    const {
        control,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm({
        defaultValues: {
            blog_title: '',
            video_link: '',
            description: '',
            imgae_link: '',
        },
    })
    const OnSubmit = (data: any) => {
        reset()
        console.log(data)
        console.log(file)
        console.log(error)
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
                onSubmit={handleSubmit(OnSubmit)}
                className='grid grid-cols-12 gap-5'>
                <Controller
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            size='md'
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
                            size='md'
                            {...field}
                            label='Video Link'
                            placeholder='Enter video link'
                            className='col-span-12 md:col-span-6'
                        />
                    )}
                    name='video_link'
                    control={control}
                />
                <div className='col-span-12 md:col-start-7 md:col-end-13 md:row-span-2 md:row-start-1 '>
                    <Dropzone
                        onDrop={(files) => setFile(files)}
                        onReject={(files) => setError(files)}
                        maxSize={3 * 1024 ** 2}
                        accept={IMAGE_MIME_TYPE}
                        className='h-full rounded-md bg-transparent'>
                        <Group
                            position='center'
                            style={{ pointerEvents: 'none' }}>
                            <Dropzone.Idle>
                                <img
                                    src={upload}
                                    className='h-12 w-12'
                                />
                            </Dropzone.Idle>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-lg font-semibold text-title-active'>
                                    Upload cover image
                                </h1>
                                <h2 className='text-label '>
                                    Drag'n drop files here to upload, each file
                                    should not exceed 5mb
                                </h2>
                            </div>
                        </Group>
                    </Dropzone>
                </div>
                <Controller
                    render={({ field }) => (
                        <Textarea
                            {...field}
                            label='Description'
                            placeholder='Description here...'
                            className='col-span-12 '
                            error={errors.description?.message}
                            size='md'
                        />
                    )}
                    control={control}
                    name='description'
                    rules={{ required: 'Blog Description is required  ' }}
                />
                <div className='col-span-12 flex justify-end gap-5'>
                    <Button
                        type='reset'
                        variant='outline'
                        className='w-20'>
                        Cancel
                    </Button>
                    <Button
                        type='submit'
                        variant='filled'
                        className='w-20 bg-gdt-primary '>
                        Post
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default AddBlog
