import { TextInput, Select } from '@mantine/core'
import CardPackageDetails from '../../components/common/CardPackageDetails'

type Props = {}

const Booking = (props: Props) => {
    return (
        <div className='grid grid-cols-12 pb-5 pt-[90px]'>
            <div className='col-start-2 col-end-12 grid grid-cols-4 gap-10'>
                <div className='col-span-3'>
                    <form className='grid grid-cols-2 gap-x-10 gap-y-5'>
                        <TextInput
                            type='text'
                            label='Name'
                            placeholder='Enter your Name'
                            withAsterisk
                        />
                        <Select
                            label='Nationality(Optional)'
                            placeholder='Select Nationality'
                            data={['..']}
                        />
                        <TextInput
                            type='email'
                            label='Email'
                            placeholder='Enter your Email'
                            withAsterisk
                        />
                        <TextInput
                            type='number'
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
