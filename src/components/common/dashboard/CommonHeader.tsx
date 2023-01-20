type Props = {
    heading: string
}

const CommonHeader = ({ heading }: Props) => {
    return <h1 className="text-xl md:text-2xl text-body">{heading}</h1>
}

export default CommonHeader
