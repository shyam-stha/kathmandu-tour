import { Divider, Text } from '@mantine/core'
import { NavLink } from 'react-router-dom'
import facebook from '../../assets/images/footer/facebook.svg'
import instagram from '../../assets/images/footer/instagram.svg'
import Logo from './Logo'

type Props = {}

const aboutLinks = [
    {
        text: 'Our story',
        path: '/story',
    },
    {
        text: 'Team',
        path: '/team',
    },
    {
        text: 'Our vision',
        path: '/vision',
    },
    {
        text: 'blog',
        path: '/blog',
    },
]

const supportLinks = [
    {
        text: 'Help center',
        path: '/help',
    },
    {
        text: 'Term & Conidtions',
        path: '/terms',
    },
    {
        text: 'Data Policies',
        path: '/policies',
    },
]

const socialLinks = [
    {
        text: 'Facebook',
        path: '/facebook',
        icon: facebook,
    },
    {
        text: 'Instagram',
        path: '/instagram',
        icon: instagram,
    },
]

const Footer = (props: Props) => {
    const aboutLinkItems = aboutLinks.map((item) => {
        return (
            <div
                key={item.text}
                className='pb-[8px]'>
                <NavLink to={item.path}>{item.text}</NavLink>
            </div>
        )
    })
    const supportLinkItems = supportLinks.map((item) => {
        return (
            <div
                key={item.text}
                className='pb-[8px]'>
                <NavLink to={item.path}>{item.text}</NavLink>
            </div>
        )
    })
    const socialLinkItems = socialLinks.map((item) => {
        return (
            <div
                key={item.text}
                className='flex items-center gap-3 pb-[8px]'>
                <img
                    src={item.icon}
                    alt={item.text}
                    className='h-[20px] w-[20px]'
                />
                <NavLink to={item.path}>{item.text}</NavLink>
            </div>
        )
    })

    return (
        <div className=' h-[300px] bg-[#14142B] px-[100px] pt-[30px] font-sans text-[#FCFCFC]'>
            <div className='grid grid-cols-4 justify-items-center pb-4'>
                <Logo type='white' />
                <div>
                    <h2 className='pb-4 text-[20px] font-bold'>About</h2>
                    {aboutLinkItems}
                </div>
                <div>
                    <h2 className='pb-4 text-[20px] font-bold'>Support</h2>
                    {supportLinkItems}
                </div>
                <div>
                    <h2 className='pb-4 text-[20px] font-bold'>Social</h2>
                    {socialLinkItems}
                </div>
            </div>
            <Divider color='#FCFCFC' />
            <div className='pt-[25px] text-[18px]'>
                <Text>&#169; 2022, All Rights Reserved</Text>
            </div>
        </div>
    )
}

export default Footer
