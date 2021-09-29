import React from 'react'
import './_aboutus.scss'
import ElatoLogo from '../../../assets/images/icons/logos/elatologo_svg-02.svg'

export default function AboutUs() {
    return (

        <div className='about-us'>
            <div className="about-us__flex">
                <h1 className='about-us__logo'>OUR STORY</h1>
                <p className='about-us-one'>E-Lato is a marketplace solution for the education sector. It allows users the freedom to dictate all aspects of their learning and/or teaching journey.</p>

                <p className='about-us-two'>
                    E-Lato is a community of teachers and students that comes together for the greater good. We will replicate the lyceum of old in a modern, more technical fashion. A digitized melting pot of ideas, experiments, skills, and philosophies.
                </p>

                <p className='about-us-three'>
                    E-Lato does take any money from teachers and does not set any price for lessons. Additionally, we do not force students into any rigid schedule or curriculum. Our belief is that the freedom to choose will nurture passion to learn.
                </p>

                <p className='about-us-four'>
                    Join us today, and help keep education global, affordable, and accessible for everyone.
                </p>
            </div>
            <div className='about-us__logo'>
                <img className='about-us__icon' src={ElatoLogo} alt='logo' />
                <h1>Let’s learn something new today!</h1>

            </div>

        </div>

    )
}
