import { Button, Group } from '@mantine/core'
import { darbarSqr } from '../../../assets/images/cards'
import { useNavigate } from 'react-router-dom'

const packageDetails = [
    {
        title: 'Tour Date',
        value: 'Jan 23, 2022',
    },
    {
        title: 'Start Time',
        value: '8:00 AM ',
    },
    {
        title: 'Duration',
        value: '3 Hours',
    },
    {
        title: 'People',
        value: '3',
    },
]

const CardPackageDetails = ({ onlyDetails }: any) => {
    const navigate = useNavigate()

    const ReserveNow = () => {
        navigate('/payment')
    }
    return (
        <div className='min-w-[200px] rounded-md border-2 border-placeholder p-2'>
            <img
                src={darbarSqr}
                className='h-[150px] w-full rounded-md object-cover'
            />
            <div>
                <h1 className='mt-4 mb-2 font-[700]'>Experience Nepal Now</h1>
                {packageDetails?.map((detail) => {
                    return (
                        <div
                            className='flex justify-between'
                            key={detail.title}>
                            <h1>{detail.title}</h1>
                            <p>{detail.value}</p>
                        </div>
                    )
                })}
                <div className='flex justify-between '>
                    <h1>Price( $ 30 * 3 = $ 90 )</h1>
                    <p>$90</p>
                </div>
                {onlyDetails ? (
                    ''
                ) : (
                    <Group
                        spacing={10}
                        className='mt-8'>
                        <Button
                            variant='filled'
                            className='bg-title-active'
                            fullWidth
                            onClick={() => ReserveNow()}>
                            Reserve Your Spot
                        </Button>
                        <Button
                            variant='outline'
                            fullWidth>
                            Join Group
                        </Button>
                    </Group>
                )}
            </div>
        </div>
    )
}

export default CardPackageDetails
