import React from 'react';
import '../styles/whywebStyle.css';

const WhyWebsite = () => {
    return (
        <div className='wrapper'>
            <div className='top-part'>
                <h1 className='whyweb text'>
                    Why A Website?
                </h1>
                <img src={process.env.PUBLIC_URL + '/linemini.png'} alt='line' className='line' />
            </div>
            <div className='con'>
                <p className='description text m-text'>
                    Today Everything is <span className='highlight'>Online!</span><br />
                    even emotions and <span className='highlight-fill'>90% </span>of other
                    stuff.. So What is better than an Online Shop
                    or business
                </p>
            </div>
            <div className='middle-part'>
                <img src={process.env.PUBLIC_URL + '/networkmini.png'} alt='network' className='network' />
            </div>
            <div className='con'>
                <p className='desc text m-text'>
                    Also Another benefit of an online business, <br/>
                    is a <span className='highlight-fill'>low-need</span> physical Department
                </p>
            </div>
            <div className='center'>
                <img src={process.env.PUBLIC_URL + '/locationmini.png'} alt='location' />
            </div>
            <div className='con'>
                <p className='bdesc text m-text'>
                    And So On With Decreasing the Need to People
                    come and go, traffic decreases and environment
                    would be <span className='highlight-fill'>cleaner.</span>
                </p>
            </div>
            <div className='clean'>
                <img src={process.env.PUBLIC_URL + '/cleanmini.png'} alt='clean' className='clean' />
            </div>
        </div>
    )
}

export default WhyWebsite;