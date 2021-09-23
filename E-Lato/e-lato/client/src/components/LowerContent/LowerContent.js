import React from 'react'
import './_lowercontent.scss'
import MusicNews from '../../assets/images/news/musicNews.jpg'
import Egg from '../../assets/images/news/egg.jpg'
import Mars from '../../assets/images/news/mars.jpg'
import Swims from '../../assets/images/news/swims.jpg'

export default function LowerContent() {
    return (
        <div className='info'>
            <div className='info__flex-box'>
                <a href='https://www.huffpost.com/entry/is-there-proof-that-stude_b_14105092'><div className='info__container'>
                    <img className='info__img' src={MusicNews} />
                    <h3 className='info__title'>Is There Proof That Students Can learn From Video Games?</h3>
                    <p className='info__desc'>What is the real implications on children when it comes to video games</p>
                </div></a>
                <a href='https://www.sciencedaily.com/releases/2021/08/210827133748.htm'><div className='info__container'>
                    <img className='info__img' src={Egg} />
                    <h3 className='info__title'>A universal equation for the shape of an egg</h3>
                    <p className='info__desc'>Researchers have discovered a universal mathematical formula that can describe any bird's egg existing in nature</p>
                </div></a>
                <a href='https://www.sciencedaily.com/releases/2021/08/210826111716.htm'><div className='info__container'>
                    <img className='info__img' src={Mars} />
                    <h3 className='info__title'>Will it be safe for humans to fly to Mars?</h3>
                    <p className='info__desc'>A human space mission would be viable if it doesn't exceed four years, an international research team concludes in new research.</p>
                </div></a>
                <a href='https://www.grammarly.com/blog/10-interesting-english-facts-guest'><div className='info__container'>
                    <img className='info__img' src={Swims} />
                    <h3 className='info__title'>10 Interesting Facts About the English Language that You Didn’t Know</h3>
                    <p className='info__desc'>Did you know that "Swims" is written the same even if upside down</p>
                </div></a>
            </div>
        </div> 
    )
}
