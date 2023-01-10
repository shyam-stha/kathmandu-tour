import { Link } from 'react-router-dom'
import { Rating } from '@mantine/core'
import swayambhu from '../../assets/images/packageDetails/swayambhu.jpg'
import PackageReserveForm from '../../components/common/PackageReserveForm'
import FeaturedPackage from '../../components/container/FeaturedPackage'
import time from '../../assets/images/packageDetails/Time.svg'
import location from '../../assets/images/packageDetails/gis_location.svg'
import groups from '../../assets/images/packageDetails/groups.svg'
import dollor from '../../assets/images/packageDetails/dollor.svg'
import share from '../../assets/images/packageDetails/share.svg'

type Props = {}

const tourTypes = [
    'Bike Tour',
    'Food Tour',
    'Walking Tour',
    'Day Tour',
    'Family Friendly',
    'Night Tour',
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
        <div className=' grid grid-cols-12 gap-6'>
            {/* package main detail section  */}
            <div className='col-start-2 col-end-12'>
                {/* package image section  */}
                <h1 className='text-[32px] font-[700] leading-[27px] tracking-[1px]'>
                    Sunset Walk at Swoyambhu
                </h1>
                <div className='grid grid-cols-3 gap-3'>
                    <div className='col-span-2'>
                        <div className='flex items-center gap-5'>
                            <Rating defaultValue={2} />
                            <span className='text-[16px] text-label'>
                                34 reviews
                            </span>
                        </div>
                        <img
                            src={swayambhu}
                            alt=''
                            className='mb-2 rounded-md'
                        />
                        {/* tour types section  */}
                        <div className='flex flex-wrap justify-between gap-2'>
                            {tourTypes?.map((type) => {
                                return (
                                    <div
                                        key={type}
                                        className={`flex items-center justify-center rounded-full bg-[#4B5563] px-[10px]  text-[14px] text-off-white`}>
                                        {type}
                                    </div>
                                )
                            })}
                            <Link to='/intinerary'>See Itinerary</Link>
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
            <div className='col-start-2 col-end-12 grid grid-cols-3'>
                <div className='col-span-2'>
                    <div className='flex justify-between'>
                        <h1>Scheduled Tours</h1>
                        <h2>Filter input</h2>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            {/* pacake extra feature section */}
            {/* <div>
                <h1>What Included</h1>
                <li>Guide</li>
                <li>Breakfast</li>
                </div> */}
            {/* gear list section  */}
            {/* <div>
                <h1>Gear List</h1>
                <li>An umbrella or a rain jacket. You never know.</li>
                <li>Comfortable clothes - shorts are also fine of course.</li>
                <li>
                Some money (in case a souvenir tempts you, or you want to
                    have a drink)
                    </li>
                </div> */}
            {/* package review secton  */}
            {/* <div>
                <h1>Customer Review</h1>
                <div>Rajkumar Rau | From india | Aug 25, 2022</div>
                <div>
                <h2>Awesome Scenery</h2>
                    <p>
                    To honest very disappointed regarding health and safety
                    it theres!! No first aid at all transport from hotel to
                    the airport had to pay again and triple price. No maps
                    no rout trip.Young guides with not much experience . But
                    we...Read more
                    </p>
                </div> */}
            {/* suggested section  */}
            {/* <div>
                    <FeaturedPackage />
                    </div>
                </div> */}
        </div>
    )
}

export default PackageDetails
