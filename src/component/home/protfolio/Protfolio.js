import React from 'react';
import './Protfolio.css';
import projectImage1 from '../../icon/1.7e293f66.jpg';
import { BsCheckLg, BsGithub, BsLink45Deg } from "react-icons/bs";
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';


function Protfolio() {
    return (
        <section id="project" className="project-handle pt-5 py-1">
            <div className="container">
                <div className="section-title text-center">
                    <h5>PROTFOLIO</h5>
                    <h3>Some of my featured projects</h3>
                </div>
                <div className="work-project-item">
                    <div className="work-item row d-flex align-items-center">
                        <div className="col-md-7 ">
                        <Slide left>
                            <div className="project-image shadow p-3 mb-5 bg-body rounded">
                                <img src={projectImage1}></img>
                            </div>
                        </Slide>    
                        </div>
                        <div className="col-md-5">
                            <Slide right>
                            <div className="project-details bg-danger text-white p-4 mb-5">
                                <h4 className="title">Nouka Baich</h4>
                                <p className="project-describtion">A single page application where user can hire their desired boat. And users can pay with stripe.</p>
                                <div className="feature">
                                    <h5>Feature</h5>
                                    <ul className="feature-list">
                                        <li><BsCheckLg /> Users can payment with Stripe</li>
                                        <li><BsCheckLg /> Admin can update Booking status</li>
                                        <li><BsCheckLg /> Review system integrated</li>
                                        <li><BsCheckLg /> Separate User and admin panel</li>
                                    </ul>
                                </div>
                                <div className="technology mt-3">
                                    <span>React JS</span>
                                    <span>Node JS</span>
                                    <span>MongoDB</span>
                                    <span>Express JS</span>
                                    <span>React Router</span>
                                    <span>Firebase</span>
                                    <span>Stripe</span>
                                </div>
                                <div className="project-link mt-3">
                                    <a href="www.google.com"><BsGithub /></a>
                                    <a className="mt-5" href="www.google.com"><BsLink45Deg /></a>
                                </div>
                            </div>
                            </Slide>
                        </div>  
                    </div>
                    <div className="work-item row d-flex align-items-center">
                        <div className="col-md-7 ">
                        <Slide left>
                            <div className="project-image shadow p-3 mb-5 bg-body rounded">
                                <img src={projectImage1}></img>
                            </div>
                        </Slide>    
                        </div>
                        <div className="col-md-5">
                            <Slide right>
                            <div className="project-details bg-danger text-white p-4 mb-5">
                                <h4 className="title">Nouka Baich</h4>
                                <p className="project-describtion">A single page application where user can hire their desired boat. And users can pay with stripe.</p>
                                <div className="feature">
                                    <h5>Feature</h5>
                                    <ul className="feature-list">
                                        <li><BsCheckLg /> Users can payment with Stripe</li>
                                        <li><BsCheckLg /> Admin can update Booking status</li>
                                        <li><BsCheckLg /> Review system integrated</li>
                                        <li><BsCheckLg /> Separate User and admin panel</li>
                                    </ul>
                                </div>
                                <div className="technology mt-3">
                                    <span>React JS</span>
                                    <span>Node JS</span>
                                    <span>MongoDB</span>
                                    <span>Express JS</span>
                                    <span>React Router</span>
                                    <span>Firebase</span>
                                    <span>Stripe</span>
                                </div>
                                <div className="project-link mt-3">
                                    <a href="www.google.com"><BsGithub /></a>
                                    <a className="mt-5" href="www.google.com"><BsLink45Deg /></a>
                                </div>
                            </div>
                            </Slide>
                        </div>  
                    </div>
                    <div className="work-item row d-flex align-items-center">
                        <div className="col-md-7 ">
                        <Slide left>
                            <div className="project-image shadow p-3 mb-5 bg-body rounded">
                                <img src={projectImage1}></img>
                            </div>
                        </Slide>    
                        </div>
                        <div className="col-md-5">
                            <Slide right>
                            <div className="project-details bg-danger text-white p-4 mb-5">
                                <h4 className="title">Nouka Baich</h4>
                                <p className="project-describtion">A single page application where user can hire their desired boat. And users can pay with stripe.</p>
                                <div className="feature">
                                    <h5>Feature</h5>
                                    <ul className="feature-list">
                                        <li><BsCheckLg /> Users can payment with Stripe</li>
                                        <li><BsCheckLg /> Admin can update Booking status</li>
                                        <li><BsCheckLg /> Review system integrated</li>
                                        <li><BsCheckLg /> Separate User and admin panel</li>
                                    </ul>
                                </div>
                                <div className="technology mt-3">
                                    <span>React JS</span>
                                    <span>Node JS</span>
                                    <span>MongoDB</span>
                                    <span>Express JS</span>
                                    <span>React Router</span>
                                    <span>Firebase</span>
                                    <span>Stripe</span>
                                </div>
                                <div className="project-link mt-3">
                                    <a href="www.google.com"><BsGithub /></a>
                                    <a className="mt-5" href="www.google.com"><BsLink45Deg /></a>
                                </div>
                            </div>
                            </Slide>
                        </div>  
                    </div> 
                    <div className="container-contact100-from-btn mb-5">
                        <Link to="/homee">
                            <button className="contact100-from-btn ">
                                <p style={{marginBottom: '0', fontSize: '20px'}}>See All Project</p>
                            </button>
                        </Link>
                    </div>                        
                </div>
            </div>
        </section>
    );
}

export default Protfolio;