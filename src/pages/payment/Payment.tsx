import { Button, Checkbox, Switch, TextInput } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import React from 'react'
import { Link } from 'react-router-dom'
import CardPackageDetails from '../../components/common/CardPackageDetails'

type Props = {}

const Payment = (props: Props) => {
    return (
        <div className='pb-10 pt-[90px] grid grid-cols-12'>
            <div className='col-start-2 col-end-12 grid grid-cols-4 gap-10'>
                <div className='col-span-3'>
                    <div className='flex items-center gap-4'>
                        <h2 className='font-[600]'>Make Payment</h2>
                        <div>
                            <Switch />
                        </div>
                    </div>
                    <form className='grid grid-cols-8 gap-x-5 gap-y-2'>
                        <TextInput
                            className='col-span-4'
                            label='Card Number'
                            placeholder='Enter your Card Number'
                            withAsterisk
                        />
                        <DatePicker
                            className='col-span-2'
                            label='Ex.Date'
                            placeholder={Date.now().toLocaleString()}
                            withAsterisk
                        />
                        <TextInput
                            className='col-span-2'
                            label='CVC'
                            placeholder='cvc no.'
                            withAsterisk
                        />
                        <TextInput
                            className='col-span-full'
                            label='Payment amount you want to pay'
                            withAsterisk
                        />
                        <Checkbox
                            className='col-span-full'
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
                        <Button className='col-span-full place-self-end bg-title-active'>
                            Reserve Your Spot
                        </Button>
                    </form>
                </div>
                <div>
                    <CardPackageDetails onlyDetails={true} />
                </div>
            </div>
        </div>
    )
}

export default Payment
