import React from 'react';
import '../navStyle.css';

const Navbar = () => {
    return (
        <header className="header">
            <div className="navbar-container">
                <nav className="navbar">
                    <p className='name-holder'>
                        Nima Rahmati.
                    </p>
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