import { TextInput, Select } from '@mantine/core'
import CardPackageDetails from '../../components/common/CardPackageDetails'
import { useForm, Controller } from 'react-hook-form'

type Props = {}

const Booking = (props: Props) => {
    const {
        register,
        reset,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            nationality: '',
            contact: '',
        },
    })

    return (
        <div className='grid grid-cols-12 pb-5 pt-[90px]'>
            <div className='col-start-2 col-end-12 grid grid-cols-4 gap-10'>
                <div className='col-span-3'>
                    <form
                        className='grid grid-cols-2 gap-x-10 gap-y-5'
                        onSubmit={handleSubmit((data) => {
                            reset()
                            console.log(data)
                        })}>
                        <TextInput
                            type='text'
                            label='Name'
                            {...register('name', {
                                required: 'Name is required',
                                maxLength: {
                                    value: 30,
                                    message: 'Must be 30 character or less',
                                },
                            })}
                            error={errors.name?.message}
                            placeholder='Enter your Name'
                            withAsterisk
                        />
                        <Controller
                            name='nationality'
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    label='Nationality(Optional)'
                                    placeholder='Select Nationality'
                                    data={['..']}
                                    error={errors.nationality?.message}
                                />
                            )}
                            control={control}
                        />

                        <TextInput
                            type='email'
                            label='Email'
                            {...register('email', {
                                required: 'Email is required',
                                maxLength: {
                                    value: 50,
                                    message: 'Must be 50 character or less',
                                },
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: 'Must be valid email',
                                },
                            })}
                            placeholder='Enter your Email'
                            error={errors.email?.message}
                            withAsterisk
                        />
                        <TextInput
                            type='number'
                            {...register('contact', {
                                maxLength: {
                                    value: 10,
                                    message: 'Should be at least 10 digit',
                                },
                            })}
                            error={errors.contact?.message}
                            label='Contacts(Optional)'
                            placeholder='Enter your Contacts'
                        />
                    </form>
                </div>
                <div>
                    <h1 className='mb-2 font-[600] text-title-active'>
                        Your package details
                    </h1>
                    <CardPackageDetails />
                </div>
            </div>
        </div>
    )
}

export default Booking
