import React from 'react'
import { Link } from 'react-router-dom';
import ImageNavBar from '../ImageNavBar/ImageNavBar';
import './_artpage.scss';
import Painting from '../../assets/images/pageimages/painting.jpg'
import Caligraphy from '../../assets/images/pageimages/Calligraphy-writing.jpg'
import DigitalArt from '../../assets/images/pageimages/digitalart.jpg'



export default function ArtPage() {
    return (
        <main>
            <div className='main__image'>
            </div>
            <ImageNavBar />

            <div className='main__page-title'>
                <h1>Art is the expression of the soul</h1>
            </div>

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

            <Link className='main__link' to='/techers'>
            <button className='main__page-button'>Find a teacher</button>
            </Link>

        </main>
    )
}
