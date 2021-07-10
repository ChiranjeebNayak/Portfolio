import React from 'react'
import chiranjeeb from "../chiranjeeb.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faGithub,faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function About() {
    return (
        <div className="about-section paddingTB60 " id="About">
            <div className="container mt-5">
                <div className="row ">
                <div className="col-12 col-md-6">
                        <div className="about-img">
                            <img src={chiranjeeb} alt="Chiranjeeb..."  className=" img-fluid profile-img"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-12">
                        <div className="about-title">
                            <h1>About Me</h1>
                            <h3>Lorem ipsum dolor sit amet </h3>
                            <p className="about-paddingB">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquet dolor libero, eget venenatis mauris finibus dictum. Vestibulum quis elit eget neque porttitor congue non sit amet dolor. Proin pretium purus a lorem ornare </p>
                            <p>sed lobortis pulvinar. Integer laoreet mi id eros porta euismod. Suspendisse potenti. Nulla eros mauris, convallis et sem tempus, viverra hendrerit sapien</p>
                            <h3>Follow me on </h3>
                            <div className="about-icons">
                                <ul >
                                    <li><a href="https://www.facebook.com/chiranjeebnayak.371"><FontAwesomeIcon icon={faFacebook} className="social-icons" id="social-fb"></FontAwesomeIcon></a> </li>
                                    <li><a href="https://github.com/ChiranjeebNayak"><FontAwesomeIcon icon={faGithub} className="social-icons" id="social-git" ></FontAwesomeIcon></a> </li>
                                    <li> <a href="https://www.instagram.com/chiranjeebnayak.371"><FontAwesomeIcon icon={faInstagram} className="social-icons" id="social-in"></FontAwesomeIcon> </a></li>
                                    <li> <a href="mailto:chiranjeebnayak.37@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} className="social-icons" id="social-en"></FontAwesomeIcon></a> </li>
                                    <li> <a href="https://www.linkedin.com/in/chiranjeeb-nayak-b6218b182/"><FontAwesomeIcon icon={faLinkedin} className="social-icons" id="social-ln"></FontAwesomeIcon></a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About
