const CardItems = ({ icon, text, value }: any) => {
    return (
        <div className='grid grid-cols-4 '>
            <img
                src={icon}
                alt={text}
                className='place-self-center'
            />
            <div className='flex gap-1 text-[20px] font-[700]'>
                <span>{value}</span>
                <span>{text}</span>
            </div>
        </div>
    )
}

export default CardItems
