import React from 'react';
import fbIcon from './facebook.png'; // Import the Facebook icon
import instaIcon from './insta.png'; // Import the Instagram icon
import twitterIcon from './X.png'; // Import the Twitter icon

const Footer = () => {
    return (
        <footer>
            <p>Copyright © {new Date().getFullYear()}</p>
            <p>
                <a href="https://www.facebook.com"><img src={fbIcon} alt="FB" style={{ width: '50px' }}/></a>
                <a href="https://www.instagram.com"><img src={instaIcon} alt="insta" style={{ width: '50px' }}/></a>
                <a href="https://twitter.com"><img src={twitterIcon} alt="X" style={{ width: '50px' }}/></a>
            </p>
        </footer>
    );
}

export default Footer;
