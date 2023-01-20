import Button from '../form/Button'

type ScheduleLayoutPropsType = {
    title: string
    value: string
}

export const ScheduleLayout = ({ title, value }: ScheduleLayoutPropsType) => {
    return (
        <div className='col-span-4 sm:col-span-3'>
            <h1 className='text-sm text-label'>{title}</h1>
            <span className='text-sm'>{value}</span>
        </div>
    )
}

const TourSchedule = () => {
    return (
        <div className=' grid min-w-[300px] grid-cols-12 gap-1 rounded-md p-2 ring-[.5px] ring-placeholder'>
            <ScheduleLayout
                title='Departure Date'
                value={'Mon 22, 2023'}
            />
            <ScheduleLayout
                title='Available Seats'
                value='3'
            />
            <ScheduleLayout
                title='Price'
                value='$ 30 pp'
            />
            <Button className=' col-span-12 bg-title-active text-sm text-element-bg sm:col-span-3'>
                Join Group
            </Button>
        </div>
    )
}

export default TourSchedule
