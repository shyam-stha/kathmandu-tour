import { Link } from 'react-router-dom'
import gosaikunda from '../../assets/images/about/gosaikunda.jpg'
import Title from '../../components/common/Title'

type Props = {}

const newsList = [
    { title: 'Trekking during the Pandemic | Gosainkunda Lakes', link: '/' },
    { title: 'Interesting Facts about the Himalayas', link: '/' },
    { title: 'KORA | Ride for a Cause', link: '/' },
    { title: 'Kathmandu | Walk with Locals', link: '/' },
]

const BlogDescription = (props: Props) => {
    return (
        <section className='grid grid-cols-12 gap-5 py-[90px] px-10 md:gap-10 '>
            <div className='col-span-12 sm:col-span-8 md:col-span-7'>
                <h1 className='pb-4'>
                    <Title title='Trekking during the Pandemic | Gosainkunda Lakes' />
                </h1>
                <img
                    src={gosaikunda}
                    className='mb-5 rounded-md'
                />
                <div className='text-justify'>
                    <p>
                        Sumitra travelled to the sacred lakes of Gosainkunda in
                        November 2020 and discovers how rejuvenating it is, and
                        how quiet it is due to the pandemic. She also brings
                        back valuable information on how best to trek during
                        these times.
                    </p>
                    <br />
                    <p>
                        Do you believe trekking is a perfect remedy to ease all
                        those stress, boredom, anxiety you built up during
                        lockdown period? Let me share, how I managed to pull off
                        necessary travel refreshment for my mental health and
                        unleashed my travelling spirits. The first thing I did
                        was to look for a potential trekking spot that is not
                        far from Kathmandu because staying in close contact with
                        my family members was my top most priority. Second, I
                        searched for few trekking routes opened for travel
                        enthusiastic. So, I chose Gosaikunda trekking route
                        which was of 3 nights 4 days. Depending upon your walk
                        and fitness level the travel period could be either
                        shorter or longer.
                    </p>
                    <br />
                    <p>
                        There are many routes available for Gosaikunda trek, the
                        one I chose was Ktm-Dhunche which took us 6 hrs to reach
                        Dhunche - the gateway for all Langtang route treks. I
                        found Gosaikunda trekking route to be one of the
                        difficult trek that I experienced so far. In the span of
                        10 kilometer you had to uphill from altitude of 2000m to
                        4400m. The climb is strenuous but result is worthy.
                        Well, talking about this place, Gosaikunda have its own
                        different stories of origin and how it was created. This
                        trek is a perfect recipe for those seeking bit of
                        historical knowledge, myths, folklores and Tibetan –
                        Buddhist inspired culture lifestyle. My most memorable
                        part of this trek was Sing Gompa 'village'. I have seen
                        a lot of sunsets in my lifetime but none was ever so
                        gorgeous as the one I saw there. The beautiful golden
                        hour of sunset rejuvenated all the stress, anxiety,
                        boredom that I had cumulated during lockdown period. The
                        tea houses on the way offer you the much needed rest but
                        don't get startled by the prices. It's extremely hard
                        work to get the essential stuff up the mountains hence
                        the cost seems justified.
                    </p>
                    <br />
                    <p>
                        In order to avoid crowd place in a trail I started early
                        in the morning. If it is not feasible then choose trails
                        that have wider spaces, where you can hike freely
                        without close in contact with other person. Always
                        remember to put on a buff around your neck. Because
                        wearing a mask all the time is not comfortable at all,
                        so buff is much easier, I pulled it down whenever there
                        was nobody within 20 ft from me and I pulled it up
                        again, the moment I saw someone approaching towards me.
                        This worked pretty well as I was comfortable during my
                        hike and also secured at same time. The new thing that I
                        experienced during my recent trip is paranoia of local
                        people towards visitors due to widespread of Corona
                        virus. I understood the situation was due to pandemic,
                        so if you face similar situation talk with them and
                        respect their decision.
                    </p>
                    <br />
                    <h1 className='block font-[600]'>Things to remember:</h1>
                    <br />

                    <li>
                        After 3500 mt, only 1 particular hotel is supposed to
                        give the service, they operate for 4 days and after 4
                        days another hotel will be operated (this way there will
                        be equal distribution of the business during this tough
                        time of covid). Hence a walk in guest might not get a
                        room for accommodation. Please make an advance booking
                        just to be on the safe side.
                    </li>
                    <li>
                        Water is expensive, Nrs. 80 per cup, so be responsible.
                    </li>
                    <li>
                        The night is very cold. Ensure you have proper winter
                        gears.
                    </li>

                    <li>
                        Always remember “Early to bed early to rise makes person
                        to reach on time.” So eat your dinner on time and have a
                        goodnight sleep so that you get pumped up for tomorrow.
                    </li>
                    <li>
                        Make sure you carry your power bank, charge everything
                        you can before ascending to the higher altitude as they
                        are dependent on solar energy.
                    </li>
                    <li>
                        Please carry dry meats, canned fish or any sort of meat
                        items if you are non vegetarian. (I really struggled)
                    </li>
                    <li>
                        There’s a sacred temple near the lake Gosaikunda, so if
                        you religious person, carry your own incense, Khata
                        (traditional ceremonial scarf in Tibetan Buddhism) or
                        anything to offer to god because you don’t get to buy it
                        once you leave Dhunche Bazaar.
                    </li>
                    <br />
                    <h1 className='my-5 block font-[600]'>
                        What did I do that was COVID safe?
                    </h1>
                    <p>
                        Shrinking my circle of interaction did help me to
                        prevent the spread of COVID-19. I did my best to avoid
                        most travelled trails and went to hike with people
                        already in contact with me, family members and neighbors
                        (who does not have travel history) I always pack out
                        what I pack in, including trash, toilet papers to
                        properly dispose of it. During this time, carrying hand
                        sanitizer or sanitizing wipes could also be useful to
                        keep your hands clean and avoid touching your face.
                    </p>
                    <br />
                    <strong>
                        Note: Prices here is as high as altitude. So, carry some
                        extra cash , no cards please.
                    </strong>
                </div>
                <div className='my-5 grid grid-cols-12'>
                    <video
                        controls
                        className='col-span-full h-full w-full rounded-md sm:col-start-2 sm:col-end-12'>
                        <source src='https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcTjjcgdViHPrSwqMFgII1sIWyAsnVpWwOEiGw' />
                    </video>
                </div>
            </div>
            <div className='col-span-12 sm:col-span-4 md:col-span-5'>
                <h1 className='pb-2'>
                    <Title title='Similar News' />
                </h1>
                {newsList?.map((news) => {
                    return (
                        <div key={news.title}>
                            <Link to={news.link}>
                                <li>{news.title}</li>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default BlogDescription
