type Props = {
    icon: any
    text: string
    value: string
}

const CardItems = ({ icon, text, value }: Props) => {
    return (
        <div className='grid grid-cols-6 gap-1 '>
            <img
                src={icon}
                alt={text}
                className='place-self-center'
            />
            <div className='flex gap-1 '>
                <span>{value}</span>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default CardItems
