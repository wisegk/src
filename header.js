import React from 'react';
import logoPath from './logo.png'; // Import the image using the correct path

const Header = () => {
    return (
        <div id="topArea">
            <header>
                <div id="logo">
                <img src={logoPath} alt="logo" style={{ width: '150px' }} />
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#">Locations</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
