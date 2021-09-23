import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './_heromain.scss'
import Art from '../../assets/images/icons/logos/Art-01.svg'
import English from '../../assets/images/icons/logos/English-01.svg'
import Music from '../../assets/images/icons/logos/Music-01.svg'
import Maths from '../../assets/images/icons/logos/Math-01.svg'
import Science from '../../assets/images/icons/logos/Science-01.svg'
import Misc from '../../assets/images/icons/logos/Misc-01.svg'


export default function HeroMain() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="hero">
            <h1 className='hero__header'>Learn Something New Everyday!</h1>
            <div className="hero__container">
                <button
                    className={toggleState === 1 ? "hero__tabs active-tabs" : "hero__tabs"}
                    onClick={() => toggleTab(1)}
                >
                    Find A Class
                </button>
                <button
                    className={toggleState === 2 ? "hero__tabs active-tabs" : "hero__tabs"}
                    onClick={() => toggleTab(2)}
                >
                    Become A Teacher
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={toggleState === 1 ? "content  active-content" : "content"}
                >
                    <h2>What Are You Trying To Learn?</h2>

                    <div className='content__flex-images-1'>

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

                    </div>

                    
                    <div className='content__flex-images-2'>

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

                    </div>


                </div>

                <div
                    className={toggleState === 2 ? "content content-2  active-content" : "content"}
                >  
                    <p>
                        Teach to the best of YOUR abilities, on YOUR schedule, at YOUR price!
                    </p>

                    <button className='content__button'>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

