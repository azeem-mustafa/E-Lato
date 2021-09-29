import React from 'react'
import { Link } from 'react-router-dom';
import ImageNavBar from '../../ImageNavBar/ImageNavBar';
import '../_navpages.scss';
import Speech from '../../../assets/images/pageimages/eng/speech.jpg'
import Literature from '../../../assets/images/pageimages/eng/lit.jpg'
import Debate from '../../../assets/images/pageimages/eng/debate.jfif'
import EnglishImg from '../../../assets/images/icons/logos/English-01.svg'

export default function EnglishPage() {
    return (
        <main>
            <div className='main'>
                <img className='main__image' src={EnglishImg} alt='art icon' />
                <div className='main__text-flex'>
                    <h1>ENGLISH</h1>
                    <h3>You are never too old to set another goal or to dream a new dream.</h3>
                    <p> – C.S.Lewis </p>
                </div>
            </div>
            <ImageNavBar />

            <div className='main__page-news'>

                <div className='main__trending'>

                    <h2>Trending Classes</h2>

                    <div className='main__trending-block'>

                        <h3>Debate</h3>
                        <img className='main__trending-image' src={Debate} alt='Debate' />

                    </div>
                    <div className='main__trending-block'>

                        <h3>Speech</h3>
                        <img className='main__trending-image' src={Speech} alt='Speech' />

                    </div>

                    <div className='main__trending-block'>

                        <h3>Literature</h3>
                        <img className='main__trending-image' src={Literature} alt='Literature' />

                    </div>
                </div>
            </div>

            <Link className='main__link' to='/classes'>
                <button className='main__page-button'>Find a teacher</button>
            </Link>

        </main>
    )
}