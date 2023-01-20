import { NavLink, Outlet } from 'react-router-dom'
import AboutHeader from '../../../components/common/about/AboutHeader'

const aboutNavlinks = [
    {
        title: 'Our Story',
        path: 'story',
    },
    {
        title: 'Team',
        path: 'team',
    },
    {
        title: 'Vision & Mission',
        path: 'vision',
    },
]

const About = () => {
    return (
        <div className='min-w-full pt-[80px] '>
            <AboutHeader />
            <section className='px-10 py-10 sm:px-32 md:px-24 lg:px-48 xl:px-56'>
                <ul className='mb-3 flex items-center justify-center gap-3 text-sm sm:gap-8 sm:text-lg'>
                    {aboutNavlinks?.map((navItems) => {
                        return (
                            <NavLink
                                to={navItems.path}
                                key={navItems.title}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'border-b-2 border-title-active font-semibold'
                                        : ''
                                }>
                                <li>{navItems.title}</li>
                            </NavLink>
                        )
                    })}
                </ul>
                <Outlet />
            </section>
        </div>
    )
}

export default About
