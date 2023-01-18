import group from '../../assets/images/landing/group.svg'

type ModuleItemsPropsType = {
    step: string
    text: string
    description: string
}

export const ModuleItems = ({
    step,
    text,
    description,
}: ModuleItemsPropsType) => {
    return (
        <div className='col-span-12 flex w-full flex-col items-center border-b-2 pb-2 lg:col-span-3 lg:items-start lg:border-none'>
            <h1 className='flex gap-2 pb-2'>
                <img
                    src={group}
                    alt='Icon'
                />
                <span className='font-bold text-title-active'>{step}</span>
            </h1>
            <h2 className='font-semibold text-body'>{text}</h2>
            <h4 className='font-light '>{description}</h4>
        </div>
    )
}

const CityTourModules = () => {
    return (
        <section className='grid grid-cols-12 place-items-center gap-5 lg:border-b-2 lg:py-10 '>
            <div className='col-span-12 w-full border-b-2 text-center lg:col-span-3 lg:border-none'>
                <h1>How it works</h1>
            </div>
            <ModuleItems
                step='Step 1'
                text='Informs us of the type tour desire'
                description='The kind of tours you want'
            />
            <ModuleItems
                step='Step 2'
                text='Tell us about your travel plan'
                description='Share with us your trip schedule'
            />
            <ModuleItems
                step='Step 3'
                text='Reserve your spot'
                description='Secure your reservation'
            />
        </section>
    )
}

export default CityTourModules
