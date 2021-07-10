import React from 'react'
import logo from '../logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
export default function Navbar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark fixed">
            <div className="container" id="Home">
                <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faHandsHelping} style={{color: "orange",fontSize:"3rem"}}></FontAwesomeIcon></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faBars} style={{color: "white"}}></FontAwesomeIcon>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#About">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#Education">Education</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#Projects">Projects</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#Experience">Experience</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#Contact">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}