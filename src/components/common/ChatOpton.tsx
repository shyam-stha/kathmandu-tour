import { NavLink } from 'react-router-dom'
import Chat from '../../assets/images/cards/Chat.svg'

const ChatOption = () => {
    return (
        <NavLink to='/chat'>
            <img
                src={Chat}
                alt='Chat'
                className='h-[50px] w-[50px]'
            />
        </NavLink>
    )
}

export default ChatOption
