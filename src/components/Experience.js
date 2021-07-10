import React from 'react'
import { faGraduationCap, faSchool, faUniversity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function Experience() {
    return (
        <div className="education-section paddingTB60" id="Experience">
            <div className="container mt-5">
                <div className="education-heading ">Experience</div><hr></hr>
                <section class="intro">
                    <div class="container">
                        <h1>Vertical Timeline &darr;</h1>
                    </div>
                </section>

                <section class="timeline">
                    <ul>
                        <li>
                            <div>
                                <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>1937</time> Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>1940</time> Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>1943</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>1946</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>1956</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>1957</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>1967</time> Aenean condimentum odio a bibendum rhoncus. Ut mauris felis, volutpat eget porta faucibus, euismod quis ante.
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>1977</time> Vestibulum porttitor lorem sed pharetra dignissim. Nulla maximus, dui a tristique iaculis, quam dolor convallis enim, non dignissim ligula ipsum a turpis.
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>1985</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>2000</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                            </div>
                        </li>
                        <li>
                            <div>
                                <time>2005</time> In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
                            </div>
                        </li>
                    </ul>
                </section>
                <footer class="page-footer">
                    <span>made by </span>
                    <a href="https://georgemartsoukos.com/" target="_blank">
                        <img width="24" height="24" src="https://assets.codepen.io/162656/george-martsoukos-small-logo.svg" alt="George Martsoukos logo" />
                    </a>
                </footer>
            </div>
        </div>
    )
}

export default Experience
