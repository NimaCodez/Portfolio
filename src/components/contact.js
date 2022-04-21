import React from 'react';
import '../contactStyle.css';

const Contact = () => {

    const ContactOptions = [
        {
            Id: 1,
            title: 'Gmail',
            Icon: 'fa-solid fa-envelope',
            link: 'https://mailto:nimacodes@gmail.com'
        },
        {
            Id: 2,
            title: 'Telegram',
            Icon: 'fa-solid fa-paper-plane',
            link: 'https://t.me/internalserverrerror'
        },
        {
            Id: 3,
            title: 'Instagram',
            Icon: 'fa-brands fa-instagram',
            link: 'https://www.instagram.com/callmeniima/'
        },
        {
            Id: 4,
            title: 'Github',
            Icon: 'fa-brands fa-github',
            link: 'https://github.com/DevNima-Pg/'
        },
    ]

    return (
        <div id='contact'>
            <h1 className='section-text'>Contact</h1>
            <div className='co-container'>
                {
                    ContactOptions.map(co => (
                        <a href={co.link}>
                            <div className='contact-card' key={co.Id}>
                                <i className={co.Icon}></i> {co.title}
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
}

export default Contact;