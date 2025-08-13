import React from 'react';
import './About.css';
import me from '../assets/me.jpg';

function About() {
    return (
        <div className = "about-page">
            <h1>About Me :D</h1>
            <img src={me} alt="Megan Campbell" className="profile-pic" />
            <p> Description yeah</p>
        </div>
    );
}

export default About;