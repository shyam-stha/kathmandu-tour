import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Divider } from '@mantine/core'
import Logo from '../partial/Logo'
import {
    aboutLinks,
    socialLinks,
    supportLinks,
} from '../../utils/constants/footer'

type FooterItemPropsTypes = {
    path: string
    text: string
    icon?: any
}

type FooterHeadingsPropsTypes = {
    title: string
}

type FooterSectionPropsTypes = {
    children: JSX.Element | JSX.Element[]
    title: string
}

export const Heading = ({ title }: FooterHeadingsPropsTypes) => (
    <h1 className='mb-5 text-lg font-bold'>{title}</h1>
)

export const FooterItem: FC<FooterItemPropsTypes> = ({ path, text, icon }) => (
    <div className='mb-2 flex gap-2 text-sm'>
        {icon ? <img src={icon} /> : ''}
        <NavLink to={path}>{text}</NavLink>
    </div>
)

export const FooterSections: FC<FooterSectionPropsTypes> = ({
    children,
    title,
}) => (
    <div className='col-span-4 md:col-span-3'>
        <Heading title={title} />
        <div>{children}</div>
    </div>
)

const ResponsiveFooter = () => {
    return (
        <footer className='min-w-full bg-title-active  text-off-white sm:px-32 md:py-5 md:px-16 lg:py-7 lg:px-10 xl:px-24'>
            <section className='mb-5 grid grid-cols-12 justify-items-center gap-5'>
                <div className='col-span-12 md:col-span-3'>
                    <Logo
                        type='white'
                        className='w-40'
                    />
                </div>
                <FooterSections title='About'>
                    {aboutLinks?.map((item) => {
                        return (
                            <FooterItem
                                key={item.text}
                                text={item.text}
                                path={item.path}
                            />
                        )
                    })}
                </FooterSections>
                <FooterSections title='Support'>
                    {supportLinks?.map((item) => {
                        return (
                            <FooterItem
                                key={item.text}
                                text={item.text}
                                path={item.path}
                            />
                        )
                    })}
                </FooterSections>
                <FooterSections title='Social'>
                    {socialLinks?.map((item) => {
                        return (
                            <FooterItem
                                key={item.text}
                                text={item.text}
                                path={item.path}
                                icon={item.icon}
                            />
                        )
                    })}
                </FooterSections>
            </section>
            <Divider color={'#FCFCFC'} />
            <section className='flex justify-center md:justify-start'>
                <h1 className='py-3 text-sm'>
                    &#169; 2022, All Rights Reserved
                </h1>
            </section>
        </footer>
    )
}

export default ResponsiveFooter
