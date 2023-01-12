import Logo from './Logo'
import Search from '../../assets/images/nav/search.svg'
import SearchBlack from '../../assets/images/nav/search_black.svg'
import { NavLink } from 'react-router-dom'

const navLinkItems = [
    { label: 'Packages', path: '/packages' },
    { label: 'About Us', path: '/about' },
    { label: 'Blogs', path: '/blogs' },
]

const NavBar = ({ isChange, variant }: any) => {
    const links = navLinkItems.map((link) => {
        return (
            <NavLink
                className={({ isActive }) => (isActive ? 'border-b-2' : '')}
                to={link.path}
                key={link.label}>
                {link.label}
            </NavLink>
        )
    })

    if (variant == 'black') {
        return (
            <div
                className={` container fixed z-50 flex h-[90px] w-[100vw] items-center justify-between px-[80px]`}>
                <div className='shrink-0'>
                    <Logo type='black' />
                </div>
                <div
                    className={` hidden h-[55px] w-[535px] cursor-text items-center rounded-[8px] ${
                        isChange ? ' bg-[#eff0f686]' : ' bg-[#EFF0F633]'
                    } py-[8px] px-[24px] md:hidden xl:flex`}>
                    <img
                        src={SearchBlack}
                        alt='Search'
                        className={`text-gray-700' h-[20px] w-[20px]  `}
                    />
                    <input
                        type='text'
                        placeholder='Search'
                        className={`text-gray-900 placeholder:text-gray-700 ml-[16px] w-full bg-transparent focus:outline-none`}
                    />
                </div>
                <div className='flex gap-[40px]'>{links}</div>
            </div>
        )
    } else {
        return (
            <div
                className={`container fixed z-50 flex h-[80px] w-[100vw] items-center justify-between px-[80px] text-[#FCFCFC] ${
                    isChange ? 'bg-gray-300 text-black' : ''
                }`}>
                <div className='shrink-0'>
                    <Logo type={isChange ? 'black' : 'colored'} />
                </div>
                <div
                    className={` hidden h-[55px] w-[535px] cursor-text items-center rounded-[8px] ${
                        isChange ? ' bg-[#eff0f686]' : ' bg-[#EFF0F633]'
                    } py-[8px] px-[24px] md:hidden xl:flex`}>
                    <img
                        src={isChange ? SearchBlack : Search}
                        alt='Search'
                        className={`h-[20px] w-[20px] ${
                            isChange ? 'text-gray-700' : ''
                        } `}
                    />
                    <input
                        type='text'
                        placeholder='Search'
                        className={`w-ful ml-[16px] w-full bg-transparent  ${
                            isChange
                                ? 'placeholder:text-gray-700'
                                : 'placeholder:text-[#D9DBE9]'
                        } focus:outline-none`}
                    />
                </div>
                <div className='flex gap-[40px]'>{links}</div>
            </div>
        )
    }
}

export default NavBar
