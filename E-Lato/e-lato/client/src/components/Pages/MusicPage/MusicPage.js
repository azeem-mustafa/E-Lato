import React from 'react'
import { Link } from 'react-router-dom';
import ImageNavBar from '../../ImageNavBar/ImageNavBar';
import '../_navpages.scss';
import Singing from '../../../assets/images/pageimages/music/singing.jpg'
import Dance from '../../../assets/images/pageimages/music/dance.jpg'
import Piano from '../../../assets/images/pageimages/music/piano.jpg'
import MusicImg from '../../../assets/images/icons/logos/Music-01.svg'

export default function MusicPage() {
    return (
        <main>
            <div className='main'>
                <img className='main__image' src={MusicImg} alt='art icon' />
                <div className='main__text-flex'>
                    <h1>MUSIC</h1>
                    <h3>Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.</h3>
                    <p>― Kahlil Gibran </p>
                </div>
            </div>
            <ImageNavBar />

            <div className='main__page-news'>

                <div className='main__trending'>

                    <h2>Trending Classes</h2>

                    <div className='main__trending-block'>

                        <h3>Singing</h3>
                        <img className='main__trending-image' src={Singing} alt='Singing' />

                    </div>
                    <div className='main__trending-block'>

                        <h3>Piano</h3>
                        <img className='main__trending-image' src={Piano} alt='Piano' />

                    </div>

                    <div className='main__trending-block'>

                        <h3>Dance</h3>
                        <img className='main__trending-image' src={Dance} alt='Dance' />

                    </div>
                </div>
            </div>

            <Link className='main__link' to='/techers'>
                <button className='main__page-button'>Find a teacher</button>
            </Link>

        </main>
    )
}