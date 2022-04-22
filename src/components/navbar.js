import React from 'react';
import '../styles/navStyle.css';

const Navbar = ({ toggler }) => {
    return (
        <header className="header">
            <div className="navbar-container">
                <nav className="navbar">
                    <p className='name-holder'>
                        Nima Rahmati.
                    </p>
                    <div className="mobile-wrapper">
                        <i class="fa-solid fa-bars" onClick={toggler}></i>
                        <div className='mobile-nav close'>
                            <ul className="m-nav-menu">
                                <li className="m-list-item">
                                    <a href="https://github.com/DevNima-Pg/Portfolio" className="m-nav-link">Github</a>
                                </li>
                                <li className="m-list-item">
                                    <a href="#examples" className="m-nav-link">Examples</a>
                                </li>
                                <li className="m-list-item">
                                    <a href="#contact" className="m-nav-link">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="nav-menu">
                        <li className="list-item">
                            <a href="https://github.com/DevNima-Pg/Portfolio" className="nav-link">Github</a>
                        </li>
                        <li className="list-item">
                            <a href="#examples" className="nav-link">Examples</a>
                        </li>
                        <li className="list-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;