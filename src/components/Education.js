import React from 'react'
import { faGraduationCap, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Education() {
    return (
        <div className="education-section paddingTB60" id="Education">
            <div className="container mt-4">
                <div className="education-heading my-auto">Education</div><hr></hr>
                <div className="row mb-4 mt-4">
                    <div className="col-12">
                        <div className="education-details">
                            <div className="education-logo">
                                <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
                                <h1>2018-2022</h1>
                            </div>
                            
                            <div className="college-details">
                                <h2>Bachelor of Technology</h2>
                                <span>National Institue of Science and Technology, Berhampur,Odisha</span>
                                <span>CGPA : 8.62</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4 mt-4">
                    <div className="col-12">
                        <div className="education-details">
                            <div className="education-logo">
                                <FontAwesomeIcon icon={faUniversity}></FontAwesomeIcon>
                                <h1>2016-2018</h1>
                            </div>
                            
                            <div className="college-details">
                                <h2>Intermediate</h2>
                                <span>Naidu Science College, Bhubneswar,Odisha</span>
                                <span>Percentage : 73</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  mt-4">
                    <div className="col-12">
                        <div className="education-details">
                            <div className="education-logo">
                                <FontAwesomeIcon icon={faSchool}></FontAwesomeIcon>
                                <h1>2015-2016</h1>
                            </div>
                            
                            <div className="college-details">
                                <h2>Schooling</h2>
                                <span>Saraswati Sishu Vidya Mandira, Bhadrak,Odisha</span>
                                <span>Percentage : 88.3</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Education
