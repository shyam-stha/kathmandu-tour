import Logo from './Logo'
import Search from '../../assets/images/nav/Search.svg'
import { NavLink } from 'react-router-dom'

const navLinkItems = [
    { label: 'Packages', path: '/packages' },
    { label: 'About Us', path: '/about' },
    { label: 'Blogs', path: '/blogs' },
]

const NavBar = ({ isChange }: any) => {
    const links = navLinkItems.map((link) => {
        return (
            <NavLink
                to={link.path}
                key={link.label}>
                {link.label}
            </NavLink>
        )
    })

    return (
        <div
            className={`container fixed z-50 flex h-[90px] w-[100vw] items-center justify-between px-[80px] text-[#FCFCFC] ${
                isChange ? 'bg-gray-900/10 font-bold text-black' : ''
            }`}>
            <div className='shrink-0'>
                <Logo type={isChange ? 'black' : 'colored'} />
            </div>
            <div
                className={` hidden h-[55px] w-[535px] cursor-text items-center rounded-[8px] ${
                    isChange ? ' bg-[#eff0f686]' : ' bg-[#EFF0F633]'
                } py-[8px] px-[24px] md:hidden xl:flex`}>
                <img
                    src={Search}
                    alt='Search'
                    className={`h-[20px] w-[20px] ${
                        isChange ? 'text-gray-700' : ''
                    } `}
                />
                <input
                    type='text'
                    placeholder='Search'
                    className={`ml-[16px] w-full bg-transparent  ${
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

export default NavBar
