import { NavLink } from 'react-router-dom'

type Props = {
    title: string
    path?: string
    linkText?: string
}

const Title = ({ title, path = '/', linkText }: Props) => {
    return (
        <div className='sm:flex sm:items-center sm:justify-between'>
            <h1 className='text-lg font-bold text-title-active lg:text-3xl'>
                {title}
            </h1>
            <NavLink
                to={path}
                className={` hidden text-lg sm:flex`}>
                {linkText}
            </NavLink>
        </div>
    )
}

export default Title
