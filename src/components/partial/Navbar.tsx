import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../partial/Logo'
import { Burger } from '@mantine/core'
import search from '../../assets/images/nav/Search.svg'
import searchBlack from '../../assets/images/nav/search_black.svg'

const navLinkItems = [
    {
        title: 'Packages',
        path: '/packages',
    },
    {
        title: 'About Us',
        path: '/about',
    },
    {
        title: 'Blogs',
        path: '/blogs',
    },
]

const ResponsiveNav = () => {
    const [opened, setOpened] = useState(false)
    const [isLanding, setIsLanding] = useState(false)
    const location = useLocation()

    const title = opened ? 'Close navigation' : 'Open navigation'

    useEffect(() => {
        if (location.pathname == '/') {
            setIsLanding(true)
        } else if (location.pathname != '/') {
            setIsLanding(false)
        }
    }, [location])

    const navItems = navLinkItems.map((item) => {
        return (
            <NavLink
                key={item.title}
                to={item.path}
                onClick={() => setOpened(false)}
                className={({ isActive }) =>
                    isActive
                        ? 'border-b-2 border-title-active font-semibold'
                        : ''
                }>
                {item.title}
            </NavLink>
        )
    })

    return (
        <nav
            className={`fixed right-0 left-0 z-50 flex h-20 min-w-[300px] items-center justify-between border-b-[1px] border-b-off-white px-10 sm:border-none sm:px-32 md:px-16 lg:px-10 xl:px-24 ${
                isLanding
                    ? ' bg-transparent text-off-white'
                    : 'bg-white text-title-active'
            }`}>
            <section>
                <Logo
                    type={isLanding ? 'white' : 'black'}
                    className='h-14'
                />
            </section>
            <section className='md:32 hidden flex-1 px-20 lg:flex'>
                <div
                    className={`flex h-12 w-full items-center gap-5 overflow-hidden rounded-md bg-[#7E7E7E33] px-5 ${
                        isLanding ? 'bg-[#EFF0F633]' : 'bg-[#7E7E7E33]'
                    }`}>
                    <img
                        src={isLanding ? search : searchBlack}
                        alt='Search'
                        className={`h-5 w-5`}
                    />
                    <input
                        placeholder='Search...'
                        type='text'
                        className={`w-full bg-transparent py-2 text-lg font-[500]  focus:outline-none ${
                            isLanding
                                ? 'placeholder:text-line'
                                : 'placeholder:text-placeholder'
                        }`}
                    />
                </div>
            </section>
            <section className=''>
                <div className='flex flex-col sm:hidden'>
                    <Burger
                        opened={opened}
                        color={isLanding ? '#FCFCFC' : '#000'}
                        onClick={() => setOpened((prev) => !prev)}
                        title={title}
                    />
                    <div
                        className={`absolute top-20 right-0 ${
                            opened ? 'flex' : 'hidden'
                        } h-36 w-full flex-col justify-center gap-2 bg-label px-10`}>
                        {navItems}
                    </div>
                </div>
                <div className='hidden gap-10 sm:flex '>{navItems}</div>
            </section>
        </nav>
    )
}

export default ResponsiveNav
