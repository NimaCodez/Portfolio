import React from 'react';
import '../exampleCard.css';

const Card = () => {
    const data = [
        {
            Id: 1,
            title: 'recipe Store',
            text: 'Where you can search ingradient and get food...',
            imgPath: `${process.env.PUBLIC_URL}/fortmini.png`,
            href: 'https://fortnitestore.netlify.app'
                },
        {
            Id: 2,
            title: 'Fortnite Store',
            text: 'Where you can search upcoming items in Fortnite...',
            imgPath: `${process.env.PUBLIC_URL}/fgmini.png`,
            href: 'https://foodygoods.netlify.app'
        }
        // {
        //     Id: 3,
        //     title: 'Coming Soon...',
        //     text: 'Where you can search books...',
        //     imgPath: `${process.env.PUBLIC_URL}/`,
        //     href: '#examples'
        // },
    ]

    return (
        <div className='c-container'>
            <h1 id='examples'>Examples</h1>
            <div className='card-container'>
                {
                    data.map(dat => (
                        <div className="card" key={dat.Id}>
                            <div className="ctitle">{dat.title}</div>
                            <a href={dat.href}>
                                <img src={dat.imgPath} alt='example' />
                            </a>
                            <div className="ctext">{dat.text}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Card;