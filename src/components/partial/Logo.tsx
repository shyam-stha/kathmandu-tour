import logoWhite from '../../assets/images/nav/logo_white.svg'
import logoBlack from '../../assets/images/nav/logo_black.svg'
import logoColored from '../../assets/images/nav/logo_colored.svg'
import { Link } from 'react-router-dom'

const Logo = ({ type, ...props }: any) => {
    if (type == 'white') {
        return (
            <Link to='/'>
                <img
                    src={logoWhite}
                    alt='City Tours'
                    {...props}
                />
            </Link>
        )
    } else if (type == 'black') {
        return (
            <Link to='/'>
                <img
                    src={logoBlack}
                    alt='City Tours'
                    {...props}
                />
            </Link>
        )
    } else {
        return (
            <Link to='/'>
                <img
                    src={logoColored}
                    alt='City Tours'
                    {...props}
                />
            </Link>
        )
    }
}

export default Logo
