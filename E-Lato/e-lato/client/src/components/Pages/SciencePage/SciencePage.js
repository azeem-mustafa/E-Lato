import React from 'react'
import { Link } from 'react-router-dom';
import ImageNavBar from '../../ImageNavBar/ImageNavBar';
import '../_navpages.scss';
import Engineering from '../../../assets/images/pageimages/sci/Engineering.jpg'
import Chemistry from '../../../assets/images/pageimages/music/chem.jpg'
import Biology from '../../../assets/images/pageimages/sci/bio.jpg'
import ScienceImg from '../../../assets/images/icons/logos/Science-01.svg'

export default function SciencePage() {
    return (
        <main>
            <div className='main'>
                <img className='main__image' src={ScienceImg} alt='art icon' />
                <div className='main__text-flex'>
                    <h1>SCIENCE</h1>
                    <h3>Somewhere, something incredible is waiting to be known.</h3>
                    <p>― Carl Sagan </p>
                </div>
            </div>
            <ImageNavBar />

            <div className='main__page-news'>

                <div className='main__trending'>

                    <h2>Trending Classes</h2>

                    <div className='main__trending-block'>

                        <h3>Engineering</h3>
                        <img className='main__trending-image' src={Engineering} alt='Engineering' />

                    </div>
                    <div className='main__trending-block'>

                        <h3>Chemistry</h3>
                        <img className='main__trending-image' src={Chemistry} alt='Chemistry' />

                    </div>

                    <div className='main__trending-block'>

                        <h3>Biology</h3>
                        <img className='main__trending-image' src={Biology} alt='Biology' />

                    </div>
                </div>
            </div>

            <Link className='main__link' to='/techers'>
                <button className='main__page-button'>Find a teacher</button>
            </Link>

        </main>
    )
}