import CardPackage from '../common/CardPackage'
import { NavLink } from 'react-router-dom'

type Props = {}

const PopularPackage = (props: Props) => {
    return (
        <div className='mt-[50px] shrink-0'>
            <div className='mb-[30px] flex h-10 items-center justify-between font-sans'>
                <h1 className='Font-sans text-[32px] font-bold leading-[36px] tracking-[1px]'>
                    Popular Experiences
                </h1>
                <NavLink
                    to='/'
                    className='Font-sans text-[20px] leading-[24px] tracking-[0.75px]'>
                    All things to do
                </NavLink>
            </div>
            <div className='flex flex-wrap justify-between'>
                <CardPackage />
                <CardPackage />
                <CardPackage />
            </div>
        </div>
    )
}

export default PopularPackage
