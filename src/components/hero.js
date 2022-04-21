import React from 'react';
import '../heroStyle.css';

const Hero = () => {
    return (
        <div className='hero'>
            <h1 data-aos="fade-down" className='hero-text'>
                Hey! I’m<b><span className="myname">Nima</span></b>,<br />
                A <span className='hoze'>Front-end</span> And <br/><span className='hoze'>Back-end </span> 
                Developer!;
            </h1>
            <img data-aos="fade-up-left" src={process.env.PUBLIC_URL + '/meminified.png'} alt="Nima" />
        </div>
    )
}

export default Hero;