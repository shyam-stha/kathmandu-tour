import { useState } from 'react'
import { Group } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import {
    calender,
    schedule,
    visitors,
} from '../../../../assets/images/packageDetails'
import DatePicker from '../../form/DatePicker'
import TimeInput from '../../form/TimeInput'
import Button from '../../form/Button'

const PackageReserveForm = () => {
    const [toggle, setToggle] = useState(false)
    const [noa, setNoa] = useState(0)
    const [noc, setNoc] = useState(0)
    const navigate = useNavigate()

    const methods = useForm({
        defaultValues: {
            book_date: '',
            book_time: '',
            noc: 0,
            noa: 0,
        },
    })

    const Decrement = (e: any, value: any, setValue: any) => {
        e.preventDefault()
        value > 0 && setValue((prev: any) => prev - 1)
    }

    const Increment = (e: any, setValue: any) => {
        e.preventDefault()
        setValue((prev: any) => prev + 1)
    }

    const OnSubmit = (data: any) => {
        navigate('/book')
        data.noc = noc
        data.noa = noa
        console.log(data)
    }

    return (
        <div className='flex items-center rounded-md bg-element-bg p-5 ring-1 ring-placeholder'>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(OnSubmit)}>
                    <Group spacing={20}>
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
                        <div
                            className='flex w-full items-center gap-3 rounded-md border-[1px] py-2 px-3 text-left text-sm text-placeholder hover:cursor-pointer'
                            onClick={() => setToggle((prev) => !prev)}>
                            <img
                                src={visitors}
                                alt='icon'
                            />
                            <span>2 Adults, 1 Children</span>
                        </div>

                        <section
                            className={`${toggle ? 'block' : 'hidden'} w-full`}>
                            <div className='flex w-full flex-col gap-2 '>
                                <section className='flex w-full items-center justify-between rounded-md border-[1px] py-1 px-4'>
                                    <h1 className='text-body'>No of Adults</h1>
                                    <div className='flex items-center gap-4'>
                                        <button
                                            className='textlg h-10 w-10 rounded-full border-2 border-gdt-secondary font-bold active:translate-y-1'
                                            onClick={(e) =>
                                                Decrement(e, noa, setNoa)
                                            }>
                                            -
                                        </button>
                                        <span>{noa}</span>
                                        <button
                                            className='h-10 w-10 rounded-full border-2 border-error text-lg font-bold active:translate-y-1'
                                            onClick={(e) =>
                                                Increment(e, setNoa)
                                            }>
                                            +
                                        </button>
                                    </div>
                                </section>
                                <section className='flex w-full items-center justify-between rounded-md border-[1px] py-1 px-4'>
                                    <h1 className='text-body'>
                                        No of Children
                                    </h1>
                                    <div className='flex items-center gap-4'>
                                        <button
                                            className='textlg h-10   w-10 rounded-full border-2 border-gdt-secondary font-bold active:translate-y-1'
                                            onClick={(e) =>
                                                Decrement(e, noc, setNoc)
                                            }>
                                            -
                                        </button>
                                        <span>{noc}</span>
                                        <button
                                            className='h-10 w-10 rounded-full border-2 border-error text-lg font-bold active:translate-y-1'
                                            onClick={(e) =>
                                                Increment(e, setNoc)
                                            }>
                                            +
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </section>

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
