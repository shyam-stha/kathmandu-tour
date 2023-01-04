import { useEffect, useState } from 'react'
import NavBar from '../partial/Navbar'

type Props = {}

const Hero = (props: Props) => {
    const [isChange, setIsChange] = useState(false)
    function changeNavbar() {
        if (window.scrollY >= 580) {
            setIsChange(true)
        } else {
            setIsChange(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar)
    }, [])

    return (
        <div className='flex h-screen justify-center  bg-hero bg-cover bg-center bg-no-repeat'>
            <NavBar isChange={isChange} />
        </div>
    )
}

export default Hero
