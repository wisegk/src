import React from 'react';
import boatImage from './boat.jpg'; // Import the boat image
import noodlesImage from './noodles.jpg'; // Import the noodles image
import heroImage from './hero.jpg'; // Import the hero image

const Body = () => {
    return (
        <div id="wrapper">
            <div id="hero">
                <img src={heroImage} alt="Vera's Italian Cuisine" style={{ width: '960px', height: 'auto' }} />
                <h1>Welcome to Vera's Italian Cuisine!</h1>
                <div className="desc">"A Taste of Home"</div>
            </div>
            <main>
                <div id="col1">
                    <figure>
                        <img src={boatImage} alt="boat" width="325" height="450"/>
                        <figcaption>We use authentic ingredients straight from Venice!</figcaption>
                    </figure>
                </div>
                <div id="col2">
                    <figure>
                        <img src={noodlesImage} alt="noodles" width="325" height="450" />
                        <figcaption>Pasta pasta pasta!</figcaption>
                    </figure>
                </div>
                <div id="col3">
                    <figure>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.771297393004!2d-79.94914942409093!3d32.79832287365478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7b2cbceeeed7%3A0xb68973a0aa7bdf93!2sMelfi&#39;s!5e0!3m2!1sen!2sus!4v1697205419340!5m2!1sen!2sus"
                            width="310"
                            height="450"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <figcaption>Directions to Vera's!</figcaption>
                    </figure>
                </div>
            </main>
            </div>
       
    );
}

export default Body;
