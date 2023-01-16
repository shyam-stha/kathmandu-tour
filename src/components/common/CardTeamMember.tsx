import { Spoiler } from '@mantine/core'

type CardTeamMemberPropsType = {
    image: any
    name: string
    position: string
    description: string
    imgPosition?: string
}

const CardTeamMember = ({
    image,
    name,
    position,
    description,
    imgPosition = 'left',
}: CardTeamMemberPropsType) => {
    return (
        <div className='grid grid-cols-12 gap-5'>
            <img
                src={image}
                alt='Image'
                className={`col-span-12 h-60 w-full object-cover sm:col-span-5 md:h-80 ${
                    imgPosition == 'right' ? 'order-2' : ''
                }`}
            />
            <div className='col-span-12 text-body sm:col-span-7 '>
                <h1 className='text-lg font-[400] text-title-active'>{name}</h1>
                <span className='mb-3 block text-sm font-light'>
                    {position}
                </span>
                <Spoiler
                    maxHeight={242}
                    showLabel='Read More...'
                    hideLabel='Hide'>
                    <p className='text-justify'>{description}</p>
                </Spoiler>
            </div>
        </div>
    )
}

export default CardTeamMember
