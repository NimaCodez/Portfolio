import React from 'react';
import '../styles/brandingCard.css';

const BrandingCard = () => {
    const data = [
        {
            Id: 1,
            title: 'Teen Coders',
            text: 'Where I Tell Programming Tips And Teach About it. (click the image)',
            imgPath: `${process.env.PUBLIC_URL}/tcProfile.jpg`,
            href: 'https://instagram.com/teen_coders/'
        },
        {
            Id: 2,
            title: 'Light W3b',
            text: 'And Here Is my Storage Of Examples And Real-World Applications Which My Team and I Have Built. (click the image)',
            imgPath: `${process.env.PUBLIC_URL}/tcProfile.jpg`,
            href: 'https://instagram.com/lightw3b/'
        }
    ]

    return (
        <div className='b-container'>
            <h1 id='branding'>Branding</h1>
            <div className='b-card-container'>
                {
                    data.map(dat => (
                        <div className="b-card" key={dat.Id}>
                            <a href={dat.href} className='b-img'>
                                <img src={dat.imgPath} alt={dat.title} />
                            </a>
                            <div className="b-title-wrap"><p className='b-title'>{dat.title}</p></div>
                            <div className="b-text-wrap"><p className='b-text'>{dat.text}</p></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default BrandingCard;