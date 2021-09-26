import React from 'react';
import './Header.css';
import banner from '../../images/banner.jpg'; 

const Header = () => {
    return (
        <div className="header-container">
           {/* Header-information about the website */}
            <div className="title">
                <h1>Rock On!</h1>
                <h3>Live Music Festival, 2021</h3>
                <p>This is a charity concert held for the people who are diagnosed cancer.All the funds will be given to the ones who are unable to treat cancer due to poverty.</p>
                <h2>Total Budget: $ <span className="budget">70 million</span></h2>
            </div>
            
            {/* Header Banner */}
            <div className="image-div">
                <img className="image-size-one" src={banner} alt="concert-banner" />
            </div>
        </div>
    );
};

export default Header;