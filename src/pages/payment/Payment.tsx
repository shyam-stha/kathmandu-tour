import { useState } from 'react'
import { Button, Checkbox, Switch, TextInput } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { Link } from 'react-router-dom'
import CardPackageDetails from '../../components/common/CardPackageDetails'
import { useForm, Controller } from 'react-hook-form'

type Props = {}

const Payment = (props: Props) => {
    const [checked, setChecked] = useState(false)

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            card_no: '',
            exp_date: new Date(),
            cvc: '',
            amount: '',
            terms: false,
        },
    })

    return (
        <div className='grid grid-cols-12 gap-y-10 py-[90px] px-10 md:px-24 md:gap-x-10'>
            <div className='col-span-12 md:col-span-7 lg:col-span-9'>
                <div className='flex items-center gap-4'>
                    <h2 className='font-[600]'>Make Payment</h2>
                    <div>
                        <Switch
                            checked={checked}
                            onChange={(event) =>
                                setChecked(event.currentTarget.checked)
                            }
                        />
                    </div>
                </div>
                <form
                    className='grid grid-cols-8 gap-x-5 gap-y-2'
                    onSubmit={handleSubmit((data) => {
                        reset()
                        console.log(data)
                    })}>
                    <TextInput
                        disabled={!checked && true}
                        type='number'
                        className='col-span-4'
                        label='Card Number'
                        placeholder='Enter your Card Number'
                        {...register('card_no', {
                            required: 'Card number is required',
                        })}
                        error={errors.card_no?.message}
                        withAsterisk
                    />
                    <Controller
                        name='exp_date'
                        control={control}
                        rules={{ required: 'Expiry date is required' }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <DatePicker
                                disabled={!checked && true}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                className='col-span-2'
                                label='Ex.Date'
                                placeholder={Date.now().toLocaleString()}
                                error={errors.exp_date?.message}
                                withAsterisk
                            />
                        )}
                    />

                    <TextInput
                        type='number'
                        disabled={!checked && true}
                        className='col-span-2'
                        label='CVC'
                        placeholder='cvc no.'
                        {...register('cvc', {
                            required: 'CVC number is required',
                        })}
                        error={errors.cvc?.message}
                        withAsterisk
                    />
                    <TextInput
                        type='string'
                        disabled={!checked && true}
                        className='col-span-full'
                        label='Payment Amount'
                        placeholder='Payment amount you want to pay'
                        {...register('amount', {
                            required: 'Amount is required',
                        })}
                        error={errors.amount?.message}
                        withAsterisk
                    />
                    <Checkbox
                        className='col-span-full'
                        disabled={!checked && true}
                        {...register('terms', { required: true })}
                        label={
                            <>
                                I accept{' '}
                                <Link
                                    className='text-secondary underline'
                                    to='/terms'>
                                    Terms of use
                                </Link>{' '}
                                &{' '}
                                <Link
                                    className='text-secondary underline'
                                    to='/policy'>
                                    Privacy Policy
                                </Link>
                            </>
                        }
                    />
                    <Button
                        type='submit'
                        className='col-span-full place-self-end bg-title-active'>
                        Reserve Your Spot
                    </Button>
                </form>
            </div>
            <div className='col-start-2 col-end-12 md:col-span-5 lg:col-span-3'>
                <CardPackageDetails onlyDetails={true} />
            </div>
        </div>
    )
}

export default Payment
