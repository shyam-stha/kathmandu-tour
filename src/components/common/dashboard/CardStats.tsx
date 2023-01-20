import { booking } from '../../../assets/images/dashboard'

const CardStats = () => {
    return (
        <div className='flex min-h-[100px] min-w-[200px] items-center justify-center gap-5 rounded-md border-[1px] border-label flex-grow'>
            <img
                src={booking}
                className='h-12 w-12'
            />
            <div className='flex flex-col justify-center gap-1'>
                <h1 className='text-xl'>Booking</h1>
                <span className='text-3xl'>390</span>
            </div>
        </div>
    )
}

export default CardStats
