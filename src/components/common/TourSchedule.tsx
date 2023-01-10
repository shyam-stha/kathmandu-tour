import Button from './Button'
import dollor from '../../assets/images/packageDetails/dollor.svg'

type Props = {}

const titleStyle = `text-label text-[14px]`
const valueStyle = ` text-[18px]`
const containerStyle = `

`

const TourSchedule = (props: Props) => {
    return (
        <div className='grid grid-cols-5 place-items-center rounded-md p-2 ring-[.5px] ring-placeholder'>
            <div className={containerStyle}>
                <h1 className={titleStyle}>Departure Date</h1>
                <h2 className={valueStyle}>Jan 5, 2022</h2>
            </div>
            <div className={containerStyle}>
                <h1 className={titleStyle}>Start Time</h1>
                <h2 className={valueStyle}>8:15 AM</h2>
            </div>
            <div className={containerStyle}>
                <h1 className={titleStyle}>Available Seats</h1>
                <h2 className={valueStyle}>3</h2>
            </div>
            <div className={containerStyle}>
                <h1 className={titleStyle}>Price</h1>
                <h2 className={` ${valueStyle} flex gap-1`}>
                    <img src={dollor} />
                    30 pp
                </h2>
            </div>
            <Button className='bg-title-active text-[14px] text-element-bg'>
                Join Group
            </Button>
        </div>
    )
}

export default TourSchedule
