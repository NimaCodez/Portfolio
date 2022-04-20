import React from 'react';
import '../contentCardStyle.css';

const ContentCard = ({header, text, imgPath}) => {
    return (
        <div className='content-card'>
            <div className='content-wrapper'>
                <h1 className='con-header' data-aos="fade-down">
                    {header}
                </h1>
                <p className='con-text'>{text}</p>
            </div>
            <div className='image-container'>
                <img data-aos="fade-down" data-aos-duration="1450" className='con-img' src={imgPath} alt='illustartion'/>
            </div>
        </div>
    )
}

export default ContentCard;