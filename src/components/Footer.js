import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome, faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {  faEnvelopeOpen, faHandsHelping, faMapMarker, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
        <div className="footer-section bg-dark">
            <footer className="container text-center text-lg-start text-muted">
                {/* <!-- Section: Social media --> */}
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    {/* <!-- Left --> */}
                    <div className="me-5 d-none d-lg-block footer-para">
                        <span>Get connected with me on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div className="footer-social">
                        <a href="https://www.facebook.com/chiranjeebnayak.371"  className="social-icons" id="social-fb" style={{fontSize: "1.5rem"}}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/chiranjeebnayak.371/"  className="social-icons" id="social-in"style={{fontSize: "1.5rem"}}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://github.com/ChiranjeebNayak"  className="social-icons" id="social-git" style={{fontSize: "1.5rem"}}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/chiranjeeb-nayak-b6218b182/"  className="social-icons" id="social-ln"style={{fontSize: "1.5rem"}}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCXUkUF9D1c2lugsF_iQ9N_g"  className="social-icons"  id="social-ut" style={{fontSize: "1.5rem"}}>
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4 ">
                                    <FontAwesomeIcon icon={faHandsHelping} className="footer-logo" />Chiranjeeb Nayak
                                </h6>
                                <p>
                                Currently looking for a job in Software Engineer ,Frontend Developer ,Backend Developer ,FullStack Developer , Mern Stack Developer ,Progamming Analysist
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footer-link">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Links
                                </h6>
                                <p>
                                    <a href="#" className="text-reset">Home</a>
                                </p>
                                <p>
                                    <a href="#About" className="text-reset">About</a>
                                </p>
                                <p>
                                    <a href="#Education" className="text-reset">Education</a>
                                </p>
                                <p>
                                    <a href="#Projects" className="text-reset">Projects</a>
                                </p>
                                <p>
                                    <a href="#Contact" className="text-reset">Contact</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><FontAwesomeIcon icon={faMapMarker} /> Naripur,Bhadrak,Odisha,India</p>
                                <p><FontAwesomeIcon icon={faMapPin} /> 756100</p>
                                <p><FontAwesomeIcon icon={faEnvelopeOpen} /> ChiranjeebNayak.37@gmail.com</p>
                                <p><FontAwesomeIcon icon={faChrome} /> <a href="#">info@example.com</a></p>
                                <p><FontAwesomeIcon icon={faPhone} /> +91 6372117831</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}
            </footer>
            {/* <!-- Footer --> */}

            {/* <!-- Copyright --> */}
            <div className=" text-white text-center p-4" style={{backgroundColor: "black"}}>
                    © 2021 Copyright:
                    <a className=" fw-bold" href="#"> Chirannjeeb Nayak</a>
            </div>
            {/* <!-- Copyright --> */}
        </div >
    )
}

export default Footer
