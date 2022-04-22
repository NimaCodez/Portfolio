import React from 'react';
import '../styles/contentCardStyle.css';

const ContentCard = () => {

    const contents = [
        {
            Id: 1,
            header: 'Front-end, The Vision!',
            text: `One Of The Most Important Things In Each
          Website Is Front-end, The Thing Which Users See!
          It's Done! I'll use Html Css Js And React To Build it!`,
            imgPath: `${process.env.PUBLIC_URL}/FrontendMinified.png`,
        },
        {
            Id: 2,
            header: 'Back-end, The Barin!',
            text: `Done! How your website dares to break when
          you're using Node.js with Express.js for the
          brain?`,
            imgPath: `${process.env.PUBLIC_URL}/brainminified.png`,
        }
    ]

    return (
        <>
            {
                contents.map(content => (
                    <div className='content-card'>
                        <div className='content-wrapper'>
                            <h1 className='con-header' data-aos="fade-down">
                                {content.header}
                            </h1>
                            <p className='con-text'>{content.text}</p>
                        </div>
                        <div className='image-container'>
                            <img data-aos="fade-down" data-aos-duration="1400" className='con-img' src={content.imgPath} alt='illustartion' />
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default ContentCard;