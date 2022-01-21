import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

function LandingPage(props) {
    return (
        <div className="landing-page-container">
            <div className="hero-image">
                <h1>Identity <span className="sharpen-red">V</span> API</h1>
                <p>
                    Get data and images from <a className="hyperlink" href="https://id5.fandom.com/" rel="noreferrer" target="_blank">Identity V Fandom</a> in JSON effortlessly.</p>
                    <NavLink className="getStarted" to="/getting-started">Get Started</NavLink>            
            </div>
        </div>
    );
}

export default LandingPage;