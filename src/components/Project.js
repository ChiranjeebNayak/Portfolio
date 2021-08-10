import React from 'react'
import todolist from '../asset/todolist.PNG'
import blog from '../asset/blog.PNG'
import scrapbook from '../asset/scrapbook.PNG'
function Project() {
    return (
        <div className=" paddingTB60 bg-dark" id="Projects">
            <div className="container mx-auto mt-2 project-item">
                <div className="project-heading my-auto">Projects<hr></hr></div>
                <div className="row">
                    <div className="col-md-4 m">
                        <div className="card" style={{ width: "20rem" }}>
                            <img src={todolist} className="card-img-top" alt="..." style={{height :"30vh"}}/>
                            <div className="card-body">
                                <h5 className="card-title">Todo List</h5>
                                <h6 className="card-subtitle mb-2 text-muted">React</h6>
                                <p className="card-text">A simple todo list app which have basic features of CRUD operation.</p>
                                <a href="https://chiranjeebnayak.github.io/React-Todo-List/" className="btn mr-2"><i className="fas fa-link"></i> Visit Site</a>
                                <a href="https://github.com/ChiranjeebNayak/React-Todo-List" className="btn "><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "20rem" }}>
                            <img src={blog} className="card-img-top" alt="..." style={{height :"30vh"}}/>
                            <div className="card-body">
                                <h5 className="card-title">Blog</h5>
                                <h6 className="card-subtitle mb-2 text-muted">React,RestAPI,MySQL,Expressjs</h6>
                                <p className="card-text">A Responsive React blog website with some features like login,signup, post (CRUD),comment.  </p>
                                <a href="#" className="btn  mr-2"><i className="fas fa-link"></i> Visit Site</a>
                                <a href="https://github.com/ChiranjeebNayak/-e-Blog-" className="btn"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "20rem" }}>
                            <img src={scrapbook} className="card-img-top" alt="..." style={{height :"30vh"}}/>
                            <div className="card-body">
                                <h5 className="card-title">Scrapbook</h5>
                                <h6 className="card-subtitle mb-2 text-muted">HTML,CSS,Javascript,Firebase</h6>
                                <p className="card-text">A Digital Scrapbook which will collect message from friend and bind it in a book with styles.It's have some feature like login,signup,link generater and pdf create using canva</p>
                                <a href="scrapbook.epizy.com" className="btn mr-2"><i className="fas fa-link"></i> Visit Site</a>
                                <a href="https://github.com/ChiranjeebNayak/Scrapbook" className="btn "><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="card" style={{ width: "20rem" }}>
                            <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..." style={{height :"30vh"}}/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn mr-2"><i className="fas fa-link"></i> Visit Site</a>
                                <a href="#" className="btn "><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "20rem" }}>
                            <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..." style={{height :"30vh"}}/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn  mr-2"><i className="fas fa-link"></i> Visit Site</a>
                                <a href="#" className="btn"><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" style={{ width: "20rem" }}>
                            <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..." style={{height :"30vh"}}/>
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn mr-2"><i className="fas fa-link"></i> Visit Site</a>
                                <a href="#" className="btn "><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>*/}
                </div> 
            </div>
        </div>
    )
}

export default Project
