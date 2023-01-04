import logoWhite from '../../assets/images/nav/logo_white.svg'
import logoBlack from '../../assets/images/nav/logo_black.svg'
import logoColored from '../../assets/images/nav/logo_colored.svg'

const Logo = ({ type, ...props }: any) => {
    if (type == 'white') {
        return (
            <img
                src={logoWhite}
                alt='City Tours'
                {...props}
            />
        )
    } else if (type == 'black') {
        return (
            <img
                src={logoBlack}
                alt='City Tours'
                {...props}
            />
        )
    } else {
        return (
            <img
                src={logoColored}
                alt='City Tours'
                {...props}
            />
        )
    }
}

export default Logo
