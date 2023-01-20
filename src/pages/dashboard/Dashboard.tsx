import { notification, search } from '../../assets/images/dashboard'
import CardStats from '../../components/common/dashboard/CardStats'
import CommonHeader from '../../components/common/dashboard/CommonHeader'

type Props = {}

const Dashboard = ({}: Props) => {
    return (
        <div>
            <section className='mb-5 flex items-center justify-between md:mb-8'>
                <CommonHeader heading='Dashboard' />
                <div className='flex items-center gap-4'>
                    <button className='rounded-md border-[1px] border-label p-1 md:p-2'>
                        <img
                            src={search}
                            alt='Search'
                        />
                    </button>
                    <button className='rounded-md border-[1px] border-label p-1 md:p-2'>
                        <img
                            src={notification}
                            alt='Notification'
                        />
                    </button>
                </div>
            </section>
            <section className='grid grid-cols-12 gap-5'>
                <div className='col-span-12 sm:col-span-6 md:col-span-5'>
                    <CardStats />
                </div>
                <div className='col-span-12 sm:col-span-6 md:col-span-5'>  
                    <CardStats />
                </div>
            </section>
        </div>
    )
}

export default Dashboard
