import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faGoogle, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    return (
        <div className="footer-section">
            <footer className="container text-center text-lg-start bg-light text-muted">
                {/* <!-- Section: Social media --> */}
                <section
                    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    {/* <!-- Left --> */}
                    <div className="me-5 d-none d-lg-block footer-para">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div className="footer-social">
                        <a href=""  className="social-icons" id="social-fb" style={{fontSize: "1.5rem"}}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href=""  className="social-icons" id="social-in"style={{fontSize: "1.5rem"}}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href=""  className="social-icons" id="social-git" style={{fontSize: "1.5rem"}}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href=""  className="social-icons" id="social-ln"style={{fontSize: "1.5rem"}}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href=""  className="social-icons"  id="social-ut" style={{fontSize: "1.5rem"}}>
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
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <FontAwesomeIcon icon={faFacebook} />Company name
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Angular</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">React</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Vue</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Laravel</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">Pricing</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Settings</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><FontAwesomeIcon icon={faFacebook} /> New York, NY 10012, US</p>
                                <p><FontAwesomeIcon icon={faFacebook} /> info@example.com</p>
                                <p><FontAwesomeIcon icon={faFacebook} /> + 01 234 567 88</p>
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
                    <a className=" fw-bold" href="https://mdbootstrap.com/"> Chirannjeeb Nayak</a>
            </div>
            {/* <!-- Copyright --> */}
        </div >
    )
}

export default Footer
