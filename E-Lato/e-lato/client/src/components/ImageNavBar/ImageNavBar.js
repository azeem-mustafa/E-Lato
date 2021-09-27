import React from 'react'
import { Link } from 'react-router-dom'
import Art from '../../assets/images/icons/logos/Art-01.svg'
import English from '../../assets/images/icons/logos/English-01.svg'
import Music from '../../assets/images/icons/logos/Music-01.svg'
import Maths from '../../assets/images/icons/logos/Math-01.svg'
import Science from '../../assets/images/icons/logos/Science-01.svg'
import Misc from '../../assets/images/icons/logos/Misc-01.svg'
import './_imagenavbar.scss'

export default function ImageNavBar() {
    return (
        <>
            <nav className='image-nav'>
                <Link to='/art'>
                    <div className='hero__image-container'>
                        <img className='hero__logo' src={Art} alt='Art' />
                        <h3>Art</h3>
                    </div>
                </Link>

                <Link to='/music'>
                    <div className='hero__image-container'>
                        <img className='hero__logo' src={Music} alt='Music' />
                        <h3>Music</h3>
                    </div>
                </Link>

                <Link to='english'>
                    <div className='hero__image-container'>
                        <img className='hero__logo' src={English} alt='English' />
                        <h3>English</h3>
                    </div>
                </Link>






                <Link to='math'>
                    <div className='hero__image-container'>
                        <img className='hero__logo' src={Maths} alt='Math' />
                        <h3>Math</h3>
                    </div>
                </Link>

                <Link to='science'>
                    <div className='hero__image-container'>
                        <img className='hero__logo' src={Science} alt='Science' />
                        <h3>Science</h3>
                    </div>
                </Link>

                <Link to='misc'>
                    <div className='hero__image-container'>
                        <img className='hero__logo' src={Misc} alt='Misc' />
                        <h3>Misc</h3>
                    </div>
                </Link>

            </nav>
        </>

    )
}
