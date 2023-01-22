import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navitems } from '../../utils/constants/navbar'
import { Burger, Drawer, useMantineTheme } from '@mantine/core'
import { logo, logofinal } from '../../assets/images/landing'

const NavbarResponsiv = () => {
    const [opened, setOpened] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const theme = useMantineTheme()

    const NavItems = navitems?.map((item) => {
        return (
            <NavLink
                to={item.path}
                key={item.linkText}
                className='flex flex-col items-center justify-center '>
                <span className='text-2xl font-extralight '>
                    {item.linkText}
                </span>
            </NavLink>
        )
    })

    const ChangeNavColor = () => {
        if (window.scrollY > 1) {
            setScrolled(true)
        } else if (window.scrollY < 1) {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', ChangeNavColor)
    }, [])

    return (
        <header
            className={` fixed top-0 right-0 left-0 flex items-center justify-between px-10 py-1 sm:px-16  ${
                scrolled ? 'bg-white text-label' : 'text-white'
            }`}>
            <img
                src={scrolled ? logo : logofinal}
                className={`${scrolled ? 'h-16 w-16' : 'h-20 w-20'}`}
            />
            <nav className=' hidden sm:flex sm:items-center sm:gap-6'>
                {NavItems}
            </nav>
            <nav className='sm:hidden'>
                <Burger
                    size={'lg'}
                    color={scrolled ? 'black' : 'white'}
                    opened={opened}
                    onClick={() => setOpened((prev: any) => !prev)}
                />
                <Drawer
                    opened={opened}
                    size={'sm'}
                    onClose={() => setOpened((prev) => !prev)}
                    position='right'
                    overlayColor={
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[9]
                            : theme.colors.gray[2]
                    }
                    overlayOpacity={0.55}
                    overlayBlur={3}>
                    <div>
                        {navitems?.map((item) => {
                            return (
                                <NavLink
                                    to={item.path}
                                    key={item.linkText}
                                    className={`flex hover:bg-placeholder`}>
                                    <span className='py-1 px-3 text-lg'>
                                        {item.linkText}
                                    </span>
                                </NavLink>
                            )
                        })}
                    </div>
                </Drawer>
            </nav>
        </header>
    )
}

export default NavbarResponsiv
