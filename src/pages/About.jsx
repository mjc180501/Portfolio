import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-page">
            <h1>About Me :D</h1>
            <img src={window.location.origin + '/Portfolio/assets/me.jpg'} alt="Megan Campbell"
                 className="profile-pic"/>
            <p> Description yeah</p>
        </div>
    );
}

export default About;