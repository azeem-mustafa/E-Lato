import React from 'react'
import Facebook from '../../assets/images/icons/logos/Facebook_f_logo__2019_.svg'
import Twitter from '../../assets/images/icons/logos/twitter-3-logo-svg-vector.svg'
import Instagram from '../../assets/images/icons/logos/Instagram-Logo.wine.png'
import './_footer.scss'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__flex'>
                <h1>E-Lato</h1>
                <aside className='footer__aside'>
                    <img className='footer__icons' src={Facebook} alt="facebook"/>
                    <img className='footer__icons' src={Twitter} alt='Twitter'/>
                    <img className='footer__icons' src={Instagram} alt="Instagram"/>
                </aside>

            </div>
            </footer>
    )
}
