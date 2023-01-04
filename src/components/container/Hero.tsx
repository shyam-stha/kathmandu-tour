import NavBar from '../partial/Navbar'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className='bg-hero h-screen bg-cover bg-scroll bg-center bg-no-repeat'>
            <NavBar />
        </div>
    )
}

export default Hero
