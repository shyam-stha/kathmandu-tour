import { Link } from 'react-router-dom'
import { Rating, Select } from '@mantine/core'
import swayambhu from '../../assets/images/packageDetails/swayambhu.jpg'
import PackageReserveForm from '../../components/common/PackageReserveForm'
import SuggestedPackage from '../../components/container/SuggestedPackage'
import time from '../../assets/images/packageDetails/Time.svg'
import location from '../../assets/images/packageDetails/gis_location.svg'
import groups from '../../assets/images/packageDetails/groups.svg'
import dollor from '../../assets/images/packageDetails/dollor.svg'
import share from '../../assets/images/packageDetails/share.svg'
import task from '../../assets/images/packageDetails/task_alt.svg'
import avatar from '../../assets/images/packageDetails/avatar.svg'
import TourSchedule from '../../components/common/TourSchedule'

type Props = {}

const tourTypes = [
    'Bike Tour',
    'Food Tour',
    'Walking Tour',
    'Day Tour',
    'Family Friendly',
    'Night Tour',
]

const monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const extraServiceList = ['Guid', 'Breakfast']

const gearList = [
    'An umbrella or a rain jacket. You never know.',
    'Comfortable clothes - shorts are also fine of course..',
    'Some money (in case a souvenir tempts you, or you want to have a drink)',
    'Comfortable shoes - trainers are best!',
]

const locationDetails = [
    {
        title: ' Duration',
        value: '3 Hours',
        icon: time,
    },
    {
        title: 'Starting Location',
        value: 'Bhaktapur Darbar Square',
        icon: location,
    },
    {
        title: 'Average Group',
        value: '5-10',
        icon: groups,
    },
    {
        title: 'Price',
        value: '30 pp',
        icon: dollor,
    },
]

const intineraryList = [
    {
        time: '10:40 AM',
        place: 'Bhaktapur Darbar Square',
    },
    {
        time: '12:20 PM',
        place: 'Sanga Mandir',
    },
    {
        time: '01:15 PM',
        place: 'Chandeshwari Temple',
    },
    {
        time: '03:25 PM',
        place: 'Banepa Resort',
    },
    {
        time: '04:12 PM',
        place: 'Panauti Community Home Stay ',
    },
]

const PackageDetails = (props: Props) => {
    return (
        <div className=' grid grid-cols-12 gap-6 pb-10 pt-[90px]'>
            {/* package main detail section  */}
            <div className='col-start-2 col-end-12'>
                {/* package image section  */}
                <h1 className='text-[32px] font-[700] leading-[27px] tracking-[1px] pb-3'>
                    Sunset Walk at Swoyambhu
                </h1>
                <div className='grid grid-cols-3 gap-10'>
                    <div className='col-span-2'>
                        <div className='flex items-center gap-5 '>
                            <Rating defaultValue={2} />
                            <span className='text-[16px] text-label'>
                                34 reviews
                            </span>
                        </div>
                        <img
                            src={swayambhu}
                            alt=''
                            className='my-2 rounded-md'
                        />
                        {/* tour types section  */}
                        <div className='flex flex-wrap justify-between gap-2'>
                            {tourTypes?.map((type) => {
                                return (
                                    <div
                                        key={type}
                                        className={`flex items-center justify-center rounded-full bg-[#4B5563] px-[20px]  text-[14px] text-off-white`}>
                                        {type}
                                    </div>
                                )
                            })}
                            <Link
                                to='/intinerary'
                                className='underline'>
                                See Itinerary
                            </Link>
                        </div>
                    </div>
                    {/* package book form section  */}
                    <div className='flex flex-col gap-1'>
                        <div className='flex items-center justify-end gap-2 text-[16px] text-label'>
                            <img src={share} />
                            <h2> Share </h2>
                        </div>
                        <PackageReserveForm />
                    </div>
                </div>
            </div>

            {/* location section  */}
            <div className='col-start-2 col-end-12 grid grid-cols-3 justify-items-center'>
                {/* location details  */}
                <div className='grid grid-cols-2'>
                    {locationDetails?.map((detail) => {
                        return (
                            <div
                                key={detail.title}
                                className='text-[16px] '>
                                <div className='flex gap-2 text-label'>
                                    <img src={detail.icon} />
                                    <h1>{detail.title}</h1>
                                </div>
                                {detail.title !== 'Price' ? (
                                    <h2 className='px-6 text-[14px] text-body'>
                                        {detail.value}
                                    </h2>
                                ) : (
                                    <div className='flex px-4 text-[14px]'>
                                        <img src={detail.icon} />
                                        <h1>{detail.value}</h1>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* location map  */}
                <div className='place-self-end'>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4632274016067!2d85.4255273751553!3d27.67207437620279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aafec32df31%3A0xdda339e731af9bfd!2sBhaktapur%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1673226954578!5m2!1sen!2snp'
                        width=''
                        loading='lazy'></iframe>
                </div>
            </div>

            {/* overview section */}
            <div className='col-start-2 col-end-12 grid grid-cols-3 '>
                <div className='col-span-2'>
                    <h1 className='text-[32px] font-[700] tracking-[1px] text-title-active'>
                        Overview{' '}
                    </h1>
                    <p className='text-justify text-[14px] font-[400] tracking-[.75px]'>
                        This market walk was developed to help travellers
                        understand how the local market systems work in Nepal.
                        Within this two hour walk, you see everything from
                        residential areas, temples, readymade wear markets,
                        wedding markets, rock salt, chillies, vegetables, dried
                        herbs, bead necklaces and even a market for dentures!
                        <br />
                        "Suman was a terrific guide, knowledgable and easy to
                        talk to. Thanks for a great tour" <br />
                        - Alex, Apr 2018 <br />
                        Definitely something that opens your eyes with something
                        you had not noticed before!
                    </p>
                </div>
            </div>
            {/* Itinerary section  */}
            <div className='col-start-2 col-end-12 grid grid-cols-3 '>
                <div className='col-span-2'>
                    <h1 className='text-[32px] font-[700] tracking-[1px] text-title-active'>
                        Itinerary
                    </h1>
                    <div className='list-none px-4'>
                        {intineraryList?.map((item) => {
                            return (
                                <li key={item.place}>
                                    {item.time} - {item.place}
                                </li>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* scheduled tours section  */}
            <div className='col-start-2 col-end-12 grid grid-cols-3 '>
                <div className='col-span-2'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[32px] font-[700] tracking-[1px] text-title-active'>
                            Scheduled Tours
                        </h1>
                        <Select
                            placeholder='Filter'
                            data={monthList}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <TourSchedule />
                        <TourSchedule />
                        <TourSchedule />
                    </div>
                </div>
            </div>
            {/* pacake extra service section */}
            <div className='col-start-2 col-end-12 grid grid-cols-2'>
                <div className='col-span-2'>
                    <h1 className='text-[32px] font-[700] tracking-[1px] text-title-active'>
                        What Included
                    </h1>
                    <div className='list-none'>
                        {extraServiceList.map((service) => {
                            return (
                                <li
                                    key={service}
                                    className='flex gap-2'>
                                    <img src={task} />
                                    <span>{service}</span>
                                </li>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* gear list section  */}
            <div className='col-start-2 col-end-12 grid grid-cols-3'>
                <div className='col-span-2'>
                    <h1 className='text-[32px] font-[700] tracking-[1px] text-title-active'>
                        Gear List
                    </h1>
                    <div>
                        {gearList.map((gear) => {
                            return (
                                <li
                                    key={gear}
                                    className='flex gap-2'>
                                    <img src={task} />
                                    <span>{gear}</span>
                                </li>
                            )
                        })}
                    </div>
                </div>
            </div>
            {/* package review secton  */}
            <div className='col-start-2 col-end-12 grid grid-cols-3 '>
                <div className='col-span-2'>
                    <h1 className='text-[32px] font-[700] tracking-[1px] text-title-active'>
                        Customer Review
                    </h1>
                    {/* reviewer profile */}
                    <div className='grid grid-cols-12 gap-2'>
                        <img src={avatar} />
                        <div className='col-span-full col-start-2 text-label '>
                            <div className='flex gap-1 text-[16px]'>
                                <h2 className='text-title-active'>
                                    Rajkumar Rao
                                </h2>
                                |<h2>From India</h2> |<h2>Aug 21, 2022</h2>
                            </div>
                            <div className='flex items-center gap-5'>
                                <Rating defaultValue={4} />
                                <span className='text-[14px]'>
                                    5 - excellent
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* review  */}
                    <div>
                        <h3 className='font-[600] text-title-active'>
                            Awesome Scenery
                        </h3>
                        <p className='break-words text-justify'>
                            To honest very disappointed regarding health and
                            safety it theres!! No first aid at all transport
                            from hotel to the airport had to pay again and
                            triple price. No maps no rout trip.Young guides with
                            not much experience . But we...
                            <span className='text-label'> Read more </span>
                        </p>
                    </div>
                </div>
            </div>
            {/* suggested section  */}
            <div className='col-start-2 col-end-12'>
                <SuggestedPackage />
            </div>
        </div>
    )
}

export default PackageDetails
