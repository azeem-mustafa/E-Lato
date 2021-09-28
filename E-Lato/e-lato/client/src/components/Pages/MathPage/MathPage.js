import React from 'react'
import { Link } from 'react-router-dom';
import ImageNavBar from '../../ImageNavBar/ImageNavBar';
import '../_navpages.scss';
import Geometry from '../../../assets/images/pageimages/math/geo.jpg'
import Basics from '../../../assets/images/pageimages/math/basics.png'
import Algebra from '../../../assets/images/pageimages/math/alg.jpg'
import MathImg from '../../../assets/images/icons/logos/Math-01.svg'

export default function MathPage() {
    return (
        <main>
            <div className='main'>
                <img className='main__image' src={MathImg} alt='art icon' />
                <div className='main__text-flex'>
                    <h1>MATH</h1>
                    <h3>Pure mathematics is, in its way, the poetry of logical ideas.</h3>
                    <p> — Albert Einstein </p>
                </div>
            </div>
            <ImageNavBar />

            <div className='main__page-news'>

                <div className='main__trending'>

                    <h2>Trending Classes</h2>

                    <div className='main__trending-block'>

                        <h3>Algebra</h3>
                        <img className='main__trending-image' src={Algebra} alt='Algebra' />

                    </div>
                    <div className='main__trending-block'>

                        <h3>Basics</h3>
                        <img className='main__trending-image' src={Basics} alt='Basics' />

                    </div>

                    <div className='main__trending-block'>

                        <h3>Geometry</h3>
                        <img className='main__trending-image' src={Geometry} alt='Geometry' />

                    </div>
                </div>
            </div>

            <Link className='main__link' to='/techers'>
                <button className='main__page-button'>Find a teacher</button>
            </Link>

        </main>
    )
}