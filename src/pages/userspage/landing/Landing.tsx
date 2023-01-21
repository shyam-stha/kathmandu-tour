import {
    exp,
    expwhite,
    ktmcity,
    nepalwithflag,
    participate,
    participatewhite,
    shop,
} from '../../../assets/images/landing'

const Landing = () => {
    return (
        <div className=''>
            <div className=' flex h-screen flex-col items-center justify-end gap-10 bg-bgimg bg-cover bg-bottom bg-no-repeat py-16'>
                <h1 className='absolute right-5 bottom-2 font-fira text-sm font-extralight text-white'>
                    Photo Credit - Christopher Noel
                </h1>
                <div className='flex flex-col gap-2 text-center text-white'>
                    <h1 className='font-[Urban Grotesk Black] text-6xl font-extrabold'>
                        moments to memories
                    </h1>
                    <h2 className='font-[Urban Grotesk Black] text-4xl font-medium'>
                        through locally curated city experiences
                    </h2>
                </div>
                <div className='grid grid-cols-12 place-items-center gap-24 text-center text-xl text-white'>
                    <figure className=' col-span-4'>
                        <div>
                            <img
                                src={expwhite}
                                className='w-40 object-cover'
                            />
                        </div>
                        <figcaption className=''>experience</figcaption>
                    </figure>
                    <figure className=' col-span-4'>
                        <div>
                            <img
                                src={participatewhite}
                                className='w-full object-cover'
                            />
                        </div>
                        <figcaption className=''>participate</figcaption>
                    </figure>
                    <figure className=' col-span-4'>
                        <div>
                            <img
                                src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABvklEQVR4nO2YLUzDUBSFP0OAhJDg+HGzSAwCHIYAEgsOJBJJ5SwOLBIJOBwQ1CwSw8hwJIQECKbkJXfkpXmlXdeFtTtfctS9e3s9ez+nAyGEEEII8ScbwDMQV0RtYJ0SaQ/BQ/WqpzINiCsqGVAWcUUlA8ogCjh74tW3AvWWV5/P+euEeua8eitQ3/Tqp4F6cxAPfw+MW30SeAz07GUYlNcA/wH3A3X33RNWHwNuyjQhCgz2Aixk9LwD0xk9eQ1wn+0yBbwFeo68ntmUvNKzCVFgkG9g1etpAJ8Z28Nx1YcBl4me0DL/sLl0WQa++jEhSpmMv6yxyYX6lhJ9nT4McCvOZyml7yLRt5vSl8uEuI8JV7GvchOWAWgFMNAtIIT4xd87LvS8mjoWQ7t6sKzudAdcm1xWOPd0ZmHG6dju5aZlj0NPB5Y7nHaAbZOL1WueViwbOC1aIGrY+8eMp8LENZEMKEpcE8mAosQ1kQwoSjxAd8sa799XQFFkAFoBaAugMwAdgugWQNcgygEoCJEvWA3du0BRio438gbcjvoKSCIDqNn/Ab0iA9AKQFsAnQHoEES3AKVfg0IIIYSgtvwAPsgGNKt65NIAAAAASUVORK5CYII='
                                className='w-full invert'
                            />
                        </div>
                        <figcaption className=''>shop & eat</figcaption>
                    </figure>
                </div>
            </div>
            <div className='flex flex-col gap-8 px-36 py-5'>
                <div className='px-32 text-center font-extralight text-black'>
                    Understand and immerse yourself in a city's culture,
                    history, and way of life through locally curated
                    experiences. Get a unique perspective on the city and a
                    deeper understanding of its people, customs and traditions.
                </div>
                <div className='grid grid-cols-12 text-black'>
                    <figure className=' col-span-6 grid grid-cols-12 gap-2 '>
                        <div className='col-span-4'>
                            <img
                                src={nepalwithflag}
                                className='h-40 w-full object-cover'
                            />
                        </div>
                        <figcaption className='col-span-6 font-extralight'>
                            Nepal is home to a rich tapestry of cultures and
                            ethnicities. From the traditional Newari communities
                            of Kathmandu to the Tamang people of the Himalayas,
                            each group has its own unique customs, traditions
                            and ways of life.
                        </figcaption>
                    </figure>
                    <figure className=' col-span-6 grid grid-cols-12 gap-2 '>
                        <div className='col-span-4 '>
                            <img
                                src={ktmcity}
                                className='h-40 w-full object-cover'
                            />
                        </div>
                        <figcaption className='col-span-6 font-extralight'>
                            Discover ancient temples, traditional markets, and
                            immerse yourself in the rich culture and history of
                            Nepal's capital. From walking tours to cooking
                            classes, there's something for everyone to
                            experience.
                        </figcaption>
                    </figure>
                </div>
                <div className='grid grid-cols-12 text-lg text-black '>
                    <figure className=' col-span-2 col-start-3'>
                        <div>
                            <img
                                src={exp}
                                className='h-28 w-44 object-cover'
                            />
                        </div>
                        <figcaption className='text-center text-lg'>
                            experience
                        </figcaption>
                    </figure>
                    <figure className='col-span-2 col-start-6 '>
                        <div>
                            <img
                                src={participate}
                                className='h-32 w-full object-cover'
                            />
                        </div>
                        <figcaption className='text-center text-lg'>
                            participate
                        </figcaption>
                    </figure>
                    <figure className='col-span-2 col-start-9'>
                        <div>
                            <img
                                src={shop}
                                className='h-32 w-full object-cover'
                            />
                        </div>
                        <figcaption className='text-center text-lg'>
                            shop & eat
                        </figcaption>
                    </figure>
                </div>

                <div className='grid grid-cols-12 place-content-between gap-10 px-24'>
                    <div className='col-span-3 flex h-48 items-center  justify-center bg-[#d9d9d9]'>
                        <h1 className='text-center text-lg text-white'>
                            hang on <br />
                            it' comming!
                        </h1>
                    </div>
                    <div className='col-span-3 flex h-48 items-center  justify-center bg-[#d9d9d9]'>
                        <h1 className='text-center text-lg text-white'>
                            hang on <br />
                            it' comming!
                        </h1>
                    </div>
                    <div className='col-span-3 flex h-48 items-center  justify-center bg-[#d9d9d9]'>
                        <h1 className='text-center text-lg text-white'>
                            hang on <br />
                            it' comming!
                        </h1>
                    </div>
                    <div className='col-span-3 flex h-48 items-center  justify-center bg-[#d9d9d9]'>
                        <h1 className='text-center text-lg text-white'>
                            hang on <br />
                            it' comming!
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
