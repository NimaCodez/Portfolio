import React from 'react';
import '../whywebStyle.css';

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
                <p className='description text'>
                    Today Everything is <span className='highlight'>Online!</span><br />
                    even emotions and <span className='highlight-fill'>90% </span>of other
                    stuff.. So What is better than an Online Shop
                    or bussiness
                </p>
            </div>
            <div className='middle-part'>
                <img src={process.env.PUBLIC_URL + '/networkmini.png'} alt='network' className='network' />
            </div>
            <div className='con2'>
                <p className='desc text'>
                    Also Another benefit of online bussiness<br/>
                    is a <span className='highlight-fill'>low-need</span> physical Department
                </p>
            </div>
            <div className='center'>
                <img src={process.env.PUBLIC_URL + '/locationmini.png'} alt='location' />
            </div>
            <div className='con'>
                <p className='bdesc text'>
                    And So On With Decreasing the Need to People
                    come and go, traffic decreases and environment
                    would be <span className='highlight-fill'>cleaner.</span>
                </p>
            </div>
        </div>
    )
}

export default WhyWebsite;