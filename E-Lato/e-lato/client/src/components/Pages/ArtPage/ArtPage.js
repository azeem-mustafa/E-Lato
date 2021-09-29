import React from 'react'
import { Link } from 'react-router-dom';
import ImageNavBar from '../../ImageNavBar/ImageNavBar';
import '../_navpages.scss';
import Painting from '../../../assets/images/pageimages/painting.jpg'
import Caligraphy from '../../../assets/images/pageimages/Calligraphy-writing.jpg'
import DigitalArt from '../../../assets/images/pageimages/digitalart.jpg'
import ArtImage from '../../../assets/images/icons/logos/Art-01.svg'

export default function ArtPage() {
    return (
        <main>
            <div className='main'>
                <img className='main__image' src={ArtImage} alt='art icon' />
                <div className='main__text-flex'>
                    <h1>ART</h1>
                    <h3>As I work at my drawings, day after day, what seemed unattainable before is now gradually becoming possible. Slowly, I'm learning to observe and measure. I don't stand quite so helpless before nature any longer. </h3>
                    <p>―  Vincent van Gogh</p>
                </div>
            </div>
            <ImageNavBar />

            <div className='main__page-news'>

                <div className='main__trending'>

                    <h2>Trending Classes</h2>

                    <div className='main__trending-block'>

                        <h3>Painting</h3>
                        <img className='main__trending-image' src={Painting} alt='Painting Image' />

                    </div>
                    <div className='main__trending-block'>

                        <h3>Caligraphy</h3>
                        <img className='main__trending-image' src={Caligraphy} alt='Caligraphy' />

                    </div>

                    <div className='main__trending-block'>

                        <h3>Digital Art</h3>
                        <img className='main__trending-image' src={DigitalArt} alt='Digital Art' />

                    </div>
                </div>
            </div>

            <Link className='main__link' to='/classes'>
                <button className='main__page-button'>Find a teacher</button>
            </Link>

        </main>
    )
}
