import React from 'react'
import './_lowercontent.scss'
import { Link } from 'react-router-dom'
import ELogo from '../../assets/images/icons/logos/elatologo_svg-02.svg'

export default function LowerContent() {
    return (
        <section className='lower-content'>
            <div className='lower-content__bg-img'>
            </div>
            <div className='lower-content__column-one'>
                <img className='lower-content__logo' src={ELogo} alt='E logo' />

                <div className='lower-content__block lower-content__block-forum'>
                    <h2>EDUCATIONAL DISCUSSION FORUMS</h2>
                    <h2>SPEAK TO OUR SUPPORT TEAM</h2>
                </div>

                <div className='lower-content__block lower-content__block-phone'>
                    <h2 className='lower-content__title'>CONTACT US BY PHONE</h2>
                    <h3>1-800-338-2283</h3>
                    <h3>1-800-EDU-CATE</h3>
                </div>

                <div className='lower-content__block lower-content__block-cta'>
                    <h2 className='lower-content__title'>GET STARTED TODAY</h2>
                    <Link className='lower-content__button' to='/signup'>LEARN SOMETHING NEW
                    </Link>
                </div>


            </div>

            <div className='lower-content__column-two'>
                <div className='lower-content__block lower-content__block-works'>
                    <h2 className='lower-content__title'>HOW IT WORKS</h2>
                    <h3>Overview</h3>
                    <h3>Reviews</h3>
                    <h3>Pricing</h3>
                    <h3>ABOUT OUR STORY</h3>
                </div>

                <div className='lower-content__block lower-content__block-curricula'>
                    <h2 className='lower-content__title'>CURRICULA FOR:</h2>
                    <h3>Elementary</h3>
                    <h3>Middle School</h3>
                    <h3>High School</h3>
                    <h3>Adaptive Learning Methods</h3>
                </div>
            </div>
            <div className='lower-content__column-three'>
                <div className='lower-content__block lower-content__block-support'>
                    <h2 className='lower-content__title'>SUPPORT</h2>
                    <h3>FAQ</h3>
                    <h3>User Guide</h3>
                    <h3>Download App</h3>
                </div>

                <div className='lower-content__block lower-content__block-policies'>
                    <h2 className='lower-content__title'>POLICIES</h2>
                    <h3>Privacy Policy</h3>
                    <h3>Terms and Conditions</h3>
                </div>
            </div>
        </section>
    )
}
