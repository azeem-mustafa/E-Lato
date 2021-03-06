import React from 'react'
import { Link } from 'react-router-dom';
import ImageNavBar from '../../ImageNavBar/ImageNavBar';
import '../_navpages.scss';
import Chess from '../../../assets/images/pageimages/misc/chess.jpeg'
import Robotics from '../../../assets/images/pageimages/misc/robotics.jpg'
import Coding from '../../../assets/images/pageimages/misc/coding.jpg'
import MusicImg from '../../../assets/images/icons/logos/Music-01.svg'

export default function MiscPage() {
    return (
        <main>
            <div className='main'>
                <img className='main__image' src={MusicImg} alt='art icon' />
                <div className='main__text-flex'>
                    <h1>Learn Something Different</h1>
                    <h3>You don’t learn to walk by following rules. You learn by doing, and by falling over.</h3>
                    <p>― Richard Branson </p>
                </div>
            </div>
            <ImageNavBar />

            <div className='main__page-news'>

                <div className='main__trending'>

                    <h2>Trending Classes</h2>

                    <div className='main__trending-block'>

                        <h3>Robotics</h3>
                        <img className='main__trending-image' src={Robotics} alt='Robotics' />

                    </div>
                    <div className='main__trending-block'>

                        <h3>Coding</h3>
                        <img className='main__trending-image' src={Coding} alt='Coding' />

                    </div>

                    <div className='main__trending-block'>

                        <h3>Chess</h3>
                        <img className='main__trending-image' src={Chess} alt='Chess' />

                    </div>
                </div>
            </div>

            <Link className='main__link' to='/classes'>
                <button className='main__page-button'>Find a teacher</button>
            </Link>

        </main>
    )
}