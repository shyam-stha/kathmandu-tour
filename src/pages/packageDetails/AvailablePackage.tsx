import React from 'react'
import CardPackage from '../../components/common/CardPackage'
import { Select } from '@mantine/core'

type Props = {}

const AvailablePackage = (props: Props) => {
    return (
        <div className='grid grid-cols-12 pb-10 pt-[90px]'>
            <div className='col-start-2 col-end-12'>
                <div className='flex items-center justify-between pb-10'>
                    <h1 className='text-[32px] font-[700] tracking-[1px] text-title-active'>
                        Available Packages
                    </h1>
                    <Select
                        placeholder='Filter'
                        data={['By location', 'By name', 'By date']}
                    />
                </div>
                <div className='grid grid-cols-3 gap-x-10 gap-y-5'>
                    <CardPackage />
                    <CardPackage />
                    <CardPackage />
                    <CardPackage />
                    <CardPackage />
                    <CardPackage />
                    <CardPackage />
                    <CardPackage />
                    <CardPackage />
                </div>
            </div>
        </div>
    )
}

export default AvailablePackage
