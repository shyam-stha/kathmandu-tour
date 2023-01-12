import { FormProvider, useForm } from 'react-hook-form'
import calender from '../../assets/images/packageDetails/calender.svg'
import schedule from '../../assets/images/packageDetails/schedule.svg'
import visitors from '../../assets/images/packageDetails/visitors.svg'
import { useNavigate } from 'react-router-dom'
import { Group } from '@mantine/core'
import InputField from './InputField'
import DatePicker from './DatePicker'
import TimeInput from './TimeInput'
import Button from './Button'

const PackageReserveForm = (props: any) => {
    const methods = useForm({
        defaultValues: {
            book_date: '',
            book_time: '',
            visitors: '',
        },
    })

    const navigate = useNavigate()

    return (
        <div className='rounded-md bg-element-bg p-5 ring-1 ring-placeholder'>
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit((data) => {
                        navigate('/book')
                        console.log(data)
                    })}>
                    <Group spacing={10}>
                        <DatePicker
                            name='book_date'
                            placeholder={new Date().toDateString()}
                            defaultValue={new Date().toDateString()}
                            className='w-full '
                            icon={<img src={calender} />}
                            rules={{ required: 'This is required' }}
                            clearable
                        />
                        <TimeInput
                            name='book_time'
                            defaultValue={new Date()}
                            format='12'
                            amLabel='am'
                            pmLabel='pm'
                            icon={<img src={schedule} />}
                            className='w-full'
                            clearable
                        />
                        <InputField
                            name='visitors'
                            placeholder='2 Adult, 1 Children'
                            rules={{
                                required: 'This is required',
                                maxLength: {
                                    value: 20,
                                    message: 'Max length 5',
                                },
                                validate: (data: any) => {
                                    if (data !== '2 Adults, 1 children') {
                                        return 'Invalid value property '
                                    }
                                },
                            }}
                            icon={<img src={visitors} />}
                            className='w-full text-error'
                        />
                        <Button
                            type='submit'
                            variant='fill'
                            children='Reserve Your Spot'
                            fullWidth
                            className='bg-title-active ring-1 ring-off-white '
                        />
                    </Group>
                </form>
            </FormProvider>
        </div>
    )
}

export default PackageReserveForm
