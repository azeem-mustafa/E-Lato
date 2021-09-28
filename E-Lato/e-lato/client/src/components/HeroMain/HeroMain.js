import React from 'react'
import { Link } from 'react-router-dom'
import './_heromain.scss'
import StudentImg from '../../assets/images/icons/logos/reading-book.png';
import TeacherImg from '../../assets/images/icons/logos/education.png'
import Art from '../../assets/images/icons/logos/Art-01.svg'
import English from '../../assets/images/icons/logos/English-01.svg'
import Music from '../../assets/images/icons/logos/Music-01.svg'
import Maths from '../../assets/images/icons/logos/Math-01.svg'
import Science from '../../assets/images/icons/logos/Science-01.svg'
import Misc from '../../assets/images/icons/logos/Misc-01.svg';
import ELogo from '../../assets/images/icons/logos/elatologo_svg-02.svg';


export default function HeroMain() {

    return (
        <div className="hero">
            <div className='hero__bg-img'>
            </div>


            <div className='hero__wrapper'>
                <div className='hero__logo-container'>
                    <img className='hero__banner-img' src={ELogo} alt='e Logo' />
                </div>

                <div className='hero__icons'>
                    <div className='hero__icons-1'>

                        <Link to='/art'>
                            <div className='hero__image-container'>
                                <img className='hero__images' src={Art} alt='Art' />
                                <h3>Art</h3>
                            </div>
                        </Link>

                        <Link to='/music'>
                            <div className='hero__image-container'>
                                <img className='hero__images' src={Music} alt='Music' />
                                <h3>Music</h3>
                            </div>
                        </Link>

                        <Link to='english'>
                            <div className='hero__image-container'>
                                <img className='hero__images' src={English} alt='English' />
                                <h3>English</h3>
                            </div>
                        </Link>

                    </div>

                    <div className='hero__icons-2'>

                        <Link to='math'>
                            <div className='hero__image-container'>
                                <img className='hero__images' src={Maths} alt='Math' />
                                <h3>Math</h3>
                            </div>
                        </Link>

                        <Link to='science'>
                            <div className='hero__image-container'>
                                <img className='hero__images' src={Science} alt='Science' />
                                <h3>Science</h3>
                            </div>
                        </Link>

                        <Link to='misc'>
                            <div className='hero__image-container'>
                                <img className='hero__images' src={Misc} alt='Misc' />
                                <h3>Misc</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <section className='path-box'>
                <div className='path-box__flex'>
                    <Link to='classes'
                        className='path-box__box'>
                        <h2>FIND A CLASS</h2>
                        <img className='path-box__image' src={StudentImg} alt='student' />
                    </Link>
                    <Link to='/login'
                        className='path-box__box'>
                        <h2>BECOME A TEACHER</h2>
                        <img className='path-box__image' src={TeacherImg} alt='teacher' />
                    </Link>
                </div>
            </section>
        </div>
    );
}