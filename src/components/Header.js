import React from 'react';
import Typed from "react-typed";
function Header() {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <canvas></canvas>
                <h1>I am <span className="name">Chiranjeeb Nayak</span></h1>
                <h2> I am a <u>
                <Typed 
                className="typed-text"
                strings={[" Frontend Developer"," Backend Developer"," Competitive Progammer"," You Tuber"]}
                typeSpeed={90}
                backSpeed={50}
                loop
                />
                </u>
                </h2>
                <a href="#Contact" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    );
}

export default Header;
