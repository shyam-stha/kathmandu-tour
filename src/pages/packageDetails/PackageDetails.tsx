import { Rating, Select, Spoiler } from '@mantine/core'
import {
    tourTypes,
    locationDetails,
    intineraryList,
    monthList,
    extraServiceList,
    gearList,
} from '../../utils/constants/packages'
import swayambhu from '../../assets/images/packageDetails/swayambhu.jpg'
import task from '../../assets/images/packageDetails/task.svg'
import avatar from '../../assets/images/packageDetails/Avatar.svg'
import { Link } from 'react-router-dom'
import Title from '../../components/common/Title'
import TourSchedule from '../../components/common/TourSchedule'
import PackageReserveForm from '../../components/common/PackageReserveForm'
import SuggestedPackage from '../../components/container/SuggestedPackage'

const PackageDetails = () => {
    return (
        <div className='grid grid-cols-12 gap-5 py-[90px] px-10 lg:gap-x-10'>
            <section className='col-span-12'>
                <Title title='Sunset Walk at Swayambhu' />
                <div className='flex gap-5'>
                    <Rating defaultValue={4} />
                    <span className='text-sm font-light'>32 review </span>
                </div>
            </section>
            <section className='col-span-12 flex flex-col gap-5 md:col-span-8 '>
                <section className='flex flex-col gap-5'>
                    <img
                        src={swayambhu}
                        alt='Image'
                        className='w-full rounded-md object-cover'
                    />
                    <div className='flex flex-wrap items-center gap-1 sm:justify-between'>
                        {tourTypes?.map((item) => (
                            <li
                                className='min-w-max list-none rounded-full bg-[#4B5563] px-3 text-xs text-off-white sm:text-lg'
                                key={item.title}>
                                {item.title}
                            </li>
                        ))}
                        <Link
                            to='/intinerary'
                            className='pl-2 text-sm font-[400] underline sm:text-lg'>
                            See Itinerary
                        </Link>
                    </div>
                    <div className='grid grid-cols-7 gap-5'>
                        <div className='col-span-full grid grid-cols-12 place-items-start gap-2 md:col-span-3'>
                            {locationDetails?.map((detail) => {
                                return (
                                    <div
                                        className='col-span-6 grid grid-cols-12 text-sm sm:text-lg'
                                        key={detail.title}>
                                        <div className='col-span-full flex items-center gap-3'>
                                            <img
                                                src={detail.icon}
                                                className='h-4 w-4'
                                            />
                                            <h1 className='text-label'>
                                                {detail.title}
                                            </h1>
                                        </div>
                                        <div className='col-span-full col-start-2'>
                                            <span className='pl-2 text-body'>
                                                {detail.value}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='col-span-full flex justify-center md:col-span-4'>
                            <iframe
                                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4632274016067!2d85.4255273751553!3d27.67207437620279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aafec32df31%3A0xdda339e731af9bfd!2sBhaktapur%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1673226954578!5m2!1sen!2snp'
                                width={'100%'}
                                height={'250px'}
                                loading='lazy'
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <Title title='Overview' />
                    <p className='text-justify'>
                        This market walk was developed to help travellers
                        understand how the local market systems work in Nepal.
                        Within this two hour walk, you see everything from
                        residential areas, temples, readymade wear markets,
                        wedding markets, rock salt, chillies, vegetables, dried
                        herbs, bead necklaces and even a market for dentures!
                        <br />
                        "Suman was a terrific guide, knowledgable and easy to
                        talk to. Thanks for a great tour" <br />
                        <li className='list-disc'>Alex, Apr 2018</li>
                        Definitely something that opens your eyes with something
                        you had not noticed before!
                    </p>
                </section>
                <section>
                    <Title title='Itinerary' />
                    <div className='pl-2'>
                        {intineraryList?.map((item) => {
                            return (
                                <li
                                    key={item.place}
                                    className='list-none'>
                                    {item.time} - {item.place}
                                </li>
                            )
                        })}
                    </div>
                </section>
                <section>
                    <div className='mb-2 flex items-center justify-between'>
                        <Title title='Scheduled Tours' />
                        <Select
                            placeholder='Filter'
                            data={monthList}
                            className='hidden md:flex'
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <TourSchedule />
                        <TourSchedule />
                        <TourSchedule />
                    </div>
                </section>
                <section>
                    <Title title='What Included' />
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
                </section>
                <section>
                    <Title title='Gear List' />
                    <div>
                        {gearList.map((gear) => {
                            return (
                                <li
                                    key={gear}
                                    className='flex items-start gap-2'>
                                    <img src={task} />
                                    <span>{gear}</span>
                                </li>
                            )
                        })}
                    </div>
                </section>
                <section>
                    <Title title='Customer Review' />
                    <div className='mb-3 grid grid-cols-12 text-sm'>
                        <img
                            src={avatar}
                            className='col-span-2 h-10 place-self-center md:col-span-1'
                        />
                        <div className='col-span-10 text-label '>
                            <div className='flex flex-wrap'>
                                <h1 className='text-title-active'>
                                    Rajkumar Rao
                                </h1>
                                |<span>From India</span> |
                                <span>Aug 21, 2022</span>
                            </div>
                            <div className='flex items-center gap-5'>
                                <Rating defaultValue={4} />
                                <span>5 - excellent</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-semibold text-title-active'>
                            Awesome Scenery
                        </h3>
                        <Spoiler
                            maxHeight={100}
                            showLabel='Read More...'
                            hideLabel='Hide'>
                            <p className='break-words text-justify'>
                                To honest very disappointed regarding health and
                                safety it theres!! No first aid at all transport
                                from hotel to the airport had to pay again and
                                triple price. No maps no rout trip.Young guides
                                with not much experience . But we...
                            </p>
                        </Spoiler>
                    </div>
                </section>
            </section>
            <section className='col-span-12 md:col-span-4 '>
                <PackageReserveForm />
            </section>
            <section className='col-span-12'>
                <SuggestedPackage />
            </section>
        </div>
    )
}

export default PackageDetails
