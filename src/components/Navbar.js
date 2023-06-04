import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/marvel-logo-removebg-preview.png';
import Marvel from '../images/hero hunter.png';
import Thanos from '../images/thanos-removebg-preview.png';

function Navbar() {
    return (
        <header>
            <div className="title">
                <img className="logos" src={Logo} alt="image not found" />
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/creators">Creators</Link></li>
                    <li><Link to="/superheroes">Characters</Link></li>
                    <li><Link to="/comics">Comics</Link></li>
                    <li><Link to="/events">Events </Link></li>
                    <li><Link to="/Stories">Stories</Link></li>
                </ul>
            </div>
            <div className="navbar">
                <img className="logos" id='marvel' src={Marvel} alt="image not found" />
                <img className="avatar" src={Thanos} alt="image not found" />
            </div>
        </header>
    );
}

export default Navbar;




