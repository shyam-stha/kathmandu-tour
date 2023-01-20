type TitleAboutPropsType = {
    title: string
    style?: string
}

const TitleAbout = ({ title, style }: TitleAboutPropsType) => (
    <h1
        className={`py-1 text-left text-lg font-[400] text-title-active sm:text-xl ${style} `}>
        {title}
    </h1>
)

export default TitleAbout
