import {
    exp,
    expwhite,
    ktmfinal,
    nepalwithflag,
    participate,
    participatefinalwhite,
    shop,
} from '../../../assets/images/landing'

const Landing = () => {
    return (
        <div>
            <div className=' flex h-screen flex-col items-center justify-end gap-5 bg-bgimg bg-bottom bg-no-repeat py-24 lg:gap-10 lg:bg-cover lg:bg-left-bottom lg:py-10'>
                <h1 className='absolute right-5 bottom-2 font-fira text-xs font-extralight text-white lg:text-sm'>
                    Photo Credit - Christophe Noel
                </h1>
                <div className='flex flex-col gap-1 text-center text-white'>
                    <h1 className='font-[Urban Grotesk Black] lg:text-62xl text-6xl font-bold lg:font-extrabold'>
                        moments to memories
                    </h1>
                    <h2 className='font-[Urban Grotesk Black] text-2xl lg:text-4xl '>
                        through locally curated city experiences
                    </h2>
                </div>
                <div className='grid grid-cols-12 place-content-between gap-y-8 pl-32 text-center text-3xl text-white lg:place-items-baseline lg:gap-24'>
                    <figure className='col-span-4'>
                        <div>
                            <img
                                src={expwhite}
                                className='container mx-auto w-16 object-cover lg:w-40'
                            />
                        </div>
                        <figcaption>experience</figcaption>
                    </figure>
                    <figure className=' col-span-4'>
                        <div>
                            <img
                                src={participatefinalwhite}
                                className='container mx-auto w-12 object-cover lg:w-full'
                            />
                        </div>
                        <figcaption>participate</figcaption>
                    </figure>
                    <figure className=' col-span-4'>
                        <div>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvklEQVR4nO2YLUzDUBSFP0OAhJDg+HGzSAwCHIYAEgsOJBJJ5SwOLBIJOBwQ1CwSw8hwJIQECKbkJXfkpXmlXdeFtTtfctS9e3s9ez+nAyGEEEII8ScbwDMQV0RtYJ0SaQ/BQ/WqpzINiCsqGVAWcUUlA8ogCjh74tW3AvWWV5/P+euEeua8eitQ3/Tqp4F6cxAPfw+MW30SeAz07GUYlNcA/wH3A3X33RNWHwNuyjQhCgz2Aixk9LwD0xk9eQ1wn+0yBbwFeo68ntmUvNKzCVFgkG9g1etpAJ8Z28Nx1YcBl4me0DL/sLl0WQa++jEhSpmMv6yxyYX6lhJ9nT4McCvOZyml7yLRt5vSl8uEuI8JV7GvchOWAWgFMNAtIIT4xd87LvS8mjoWQ7t6sKzudAdcm1xWOPd0ZmHG6dju5aZlj0NPB5Y7nHaAbZOL1WueViwbOC1aIGrY+8eMp8LENZEMKEpcE8mAosQ1kQwoSjxAd8sa799XQFFkAFoBaAugMwAdgugWQNcgygEoCJEvWA3du0BRio438gbcjvoKSCIDqNn/Ab0iA9AKQFsAnQHoEES3AKVfg0IIIYSgtvwAPsgGNKt65NIAAAAASUVORK5CYII='
                                className='container mx-auto h-24 w-12 object-cover invert lg:w-full'
                            />
                        </div>
                        <figcaption>shop & eat</figcaption>
                    </figure>
                </div>
            </div>
            <div className='flex flex-col gap-10 pb-32 pt-8 lg:gap-12 lg:px-24'>
                <div className=' text-center text-xl font-extralight leading-8 text-black lg:px-32'>
                    Understand and immerse yourself in a city's culture,
                    history, and way of life through locally <br /> curated
                    experiences. Get a unique perspective on the city and a
                    deeper understanding of its <br /> people, customs and
                    traditions.
                </div>
                <div className='grid grid-cols-12 place-items-center gap-5 text-black lg:gap-0'>
                    <figure className=' col-span-full grid grid-cols-12 place-items-center gap-2 lg:col-span-6 '>
                        <div className='col-span-full lg:col-span-4'>
                            <img
                                src={nepalwithflag}
                                className=' h-40 w-full object-cover lg:object-cover'
                            />
                        </div>
                        <figcaption className='col-span-full font-extralight lg:col-span-6'>
                            Nepal is home to a rich tapestry of cultures and
                            ethnicities. From the traditional Newari communities
                            of Kathmandu to the Tamang people of the Himalayas,
                            each group has its own unique customs, traditions
                            and ways of life.
                        </figcaption>
                    </figure>
                    <figure className=' col-span-full grid grid-cols-12 place-items-center gap-2 lg:col-span-6 '>
                        <div className='col-span-full lg:col-span-4 '>
                            <img
                                src={ktmfinal}
                                className=' h-full w-full object-cover lg:object-cover'
                            />
                        </div>
                        <figcaption className='col-span-full font-extralight lg:col-span-6'>
                            Discover ancient temples, traditional markets, and
                            immerse yourself in the rich culture and history of
                            Nepal's capital. From walking tours to cooking
                            classes, there's something for everyone to
                            experience.
                        </figcaption>
                    </figure>
                </div>
                <div className='grid grid-cols-12 place-items-center text-2xl text-black lg:place-items-baseline '>
                    <figure className=' col-span-full lg:col-span-2 lg:col-start-3'>
                        <div>
                            <img
                                src={exp}
                                className='h-32 w-32 object-cover'
                            />
                        </div>
                        <figcaption className='text-center text-3xl'>
                            experience
                        </figcaption>
                    </figure>
                    <figure className='col-span-full lg:col-span-2 lg:col-start-6'>
                        <div>
                            <img
                                src={participate}
                                className='h-32 w-full object-cover'
                            />
                        </div>
                        <figcaption className='text-center text-3xl'>
                            participate
                        </figcaption>
                    </figure>
                    <figure className='2xlcol-span-2 col-span-full lg:col-start-9'>
                        <div>
                            <img
                                src={shop}
                                className='h-32 w-full object-cover'
                            />
                        </div>
                        <figcaption className='text-center text-3xl'>
                            shop & eat
                        </figcaption>
                    </figure>
                </div>

                <div className='grid grid-cols-12 place-content-between gap-2 lg:gap-10 lg:px-32'>
                    <div className='col-span-6 flex h-52 items-center justify-center  bg-[#d9d9d9] lg:col-span-3'>
                        <h1 className='text-center text-2xl leading-10'>
                            hang on <br />
                            it's coming!
                        </h1>
                    </div>
                    <div className='col-span-6 flex h-52 items-center justify-center  bg-[#d9d9d9] lg:col-span-3'>
                        <h1 className='text-center text-2xl leading-10'>
                            hang on <br />
                            it's coming!
                        </h1>
                    </div>
                    <div className='col-span-6 flex h-52 items-center justify-center  bg-[#d9d9d9] lg:col-span-3'>
                        <h1 className='text-center text-2xl leading-10'>
                            hang on <br />
                            it' coming!
                        </h1>
                    </div>
                    <div className='col-span-6 flex h-52 items-center justify-center  bg-[#d9d9d9] lg:col-span-3'>
                        <h1 className='text-center text-2xl leading-10'>
                            hang on <br />
                            it's coming!
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
