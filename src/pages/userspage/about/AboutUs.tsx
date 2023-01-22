import { instagram, linkedin, twitter } from '../../../assets/images/social'

const AboutUs = () => {
    return (
        <div className='flex h-screen  flex-col items-center justify-center'>
            <h1 className='mb-12 text-center text-3xl tracking-wide'>
                Who we are ?
            </h1>
            <article className=' space-y-8  px-56 text-justify text-xl text-title-active '>
                <p>
                    We are a collaboration of deep local expertise in immersive
                    travel and technology to streamline the finding and booking
                    process. Raj Gyawali , Enterpreneur, consultant, activist
                    and a wanderer, Raj heads travel companies in Nepal and
                    Norway focussed on ethical, responsible, transformational
                    travel. His key strengths are strategies, sustainable
                    tourism and developing new experiences.
                    <div className='flex gap-2'>
                        <span>
                            <a
                                href='https://www.linkedin.com/in/rajgyawali/'
                                target='_blank'
                                className='link-custom'>
                                <img
                                    src={linkedin}
                                    alt='LinkedIn'
                                    className='h-9 w-9'
                                />
                            </a>
                        </span>
                        <span>|</span>
                        <span>
                            <a
                                href='https://twitter.com/KingGyawali'
                                target={'_blank'}
                                className='link-custom'>
                                <img
                                    src={twitter}
                                    alt='Twitter'
                                />
                            </a>
                        </span>
                        <span>|</span>
                        <span>
                            <a
                                href='https://www.instagram.com/rajgyawali/'
                                target={'_blank'}
                                className='link-custom'>
                                <img
                                    src={instagram}
                                    alt='Instagram'
                                />
                            </a>
                        </span>
                    </div>
                </p>
                <p>
                    Prabhat Khadka is a tech graduate and adventurer who has
                    been marrying travel and technology for Product Development
                    since he started his career. He is an avid
                    off-the-beaten-track trekker and admires the Teamwork
                    inspired by the work culture of bees.
                    <div className='flex items-center gap-2'>
                        <span>
                            <a
                                href='https://www.linkedin.com/in/prabhat-khadka/'
                                target={'_blank'}
                                className='link-custom'>
                                <img
                                    src={linkedin}
                                    alt='LinkedIn'
                                    className='h-9 w-9'
                                />
                            </a>
                        </span>
                        <span>|</span>
                        <span>
                            <a
                                href='https://www.instagram.com/prabhat.khadka'
                                target={'_blank'}
                                className='link-custom'>
                                <img
                                    src={instagram}
                                    alt='Instagram'
                                />
                            </a>
                        </span>
                    </div>
                </p>
                <p>
                    <span className='pr-2'>
                        <a
                            href='https://www.socialtours.com'
                            target={'_blank'}
                            className='link-custom'>
                            Socialtours
                        </a>
                    </span>
                    is a fully licensed tour operator based in Kathmandu, Nepal
                    with a two-decade record of working in custom-tailored
                    immersive travel in the region.
                    <span className='pr-2 pl-1'>
                        <a
                            href='https://www.ktmbees.com'
                            target={'_blank'}
                            className='link-custom'>
                            KtmBees
                        </a>
                    </span>
                    is a tech company based in Kathmandu, that harnesses the
                    fast-growing IT developmental powerhouse Nepal is becoming.
                </p>
            </article>
        </div>
    )
}

export default AboutUs
