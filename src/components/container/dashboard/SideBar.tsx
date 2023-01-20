import { Navbar, Tooltip } from '@mantine/core'
import Logo from '../../partial/Logo'
import { sideBarLinkList } from '../../../utils/constants/sidebar'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { logout, logoMbl } from '../../../assets/images/dashboard'
import showNotify from '../../../utils/notify'

const SideBar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('city-token')
        showNotify('success', 'Logged out successfully')
        navigate('/')
    }

    return (
        <Navbar
            sx={{ minHeight: '100%', border: 'none' }}
            className=' gap-2 py-2 text-lg text-label'>
            <Navbar.Section className='flex justify-center border-b-2 border-background sm:justify-start sm:border-none sm:pl-5'>
                <div className='hidden sm:flex'>
                    <Logo type='black' />
                </div>
                <img
                    src={logoMbl}
                    className='h-16 w-16 sm:hidden'
                />
            </Navbar.Section>
            <Navbar.Section grow>
                {sideBarLinkList?.map((item) => {
                    return (
                        <Tooltip
                            label={item.tooltipText}
                            className='sm:hidden'
                            key={item.linkText}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? 'bg-background text-gdt-primary'
                                        : ''
                                }>
                                <li className=' flex list-none justify-center p-4 hover:bg-background sm:items-center sm:justify-start sm:gap-3 sm:py-2 sm:pl-5'>
                                    <img
                                        src={item.icon}
                                        className='h-6 w-6'
                                    />
                                    <span className='hidden sm:flex'>
                                        {item.linkText}
                                    </span>
                                </li>
                            </NavLink>
                        </Tooltip>
                    )
                })}
            </Navbar.Section>
            <Navbar.Section>
                <Tooltip label='Log'>
                    <div
                        className='cursor-pointer'
                        onClick={() => handleLogout()}>
                        <li className='flex list-none justify-center gap-2 p-4 hover:bg-background sm:justify-start sm:py-2 sm:pl-5 '>
                            <img src={logout} />
                            <span className='hidden sm:flex'>Logout</span>
                        </li>
                    </div>
                </Tooltip>
            </Navbar.Section>
        </Navbar>
    )
}

export default SideBar
