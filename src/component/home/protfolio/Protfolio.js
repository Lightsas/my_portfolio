import React from 'react';
import './Protfolio.css';
import projectImage1 from '../../icon/Final PIV.jpg';
import projectImage2 from '../../icon/Rofik It.jpg';
import projectImage3 from '../../icon/Kachabar verlly.png';
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
                                <h4 className="title">Doctors Portal</h4>
                                <p className="project-describtion">A single page application for clinic where patient can make appointment with doctor. It is fully responsive for all devices And users can pay with stripe.</p>
                                <div className="feature">
                                    <h5>Feature</h5>
                                    <ul className="feature-list">
                                        <li><BsCheckLg /> Appointment with date and time</li>
                                        <li><BsCheckLg /> Appointment management</li>
                                        <li><BsCheckLg /> Doctor Management</li>
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
                                    <a href="https://github.com/Lightsas/doctor_protal"><BsGithub /></a>
                                    <a className="mt-5" href="https://doctors-portal-8d80a.web.app/"><BsLink45Deg /></a>
                                </div>
                            </div>
                            </Slide>
                        </div>  
                    </div>
                    <div className="work-item row d-flex align-items-center">
                        <div className="col-md-7 ">
                        <Slide left>
                            <div className="project-image shadow p-3 mb-5 bg-body rounded">
                                <img src={projectImage2}></img>
                            </div>
                        </Slide>    
                        </div>
                        <div className="col-md-5">
                            <Slide right>
                            <div className="project-details bg-danger text-white p-4 mb-5">
                                <h4 className="title">Rofik IT</h4>
                                <p className="project-describtion">A single page application where user can hire their service.</p>
                                <div className="feature">
                                    <h5>Feature</h5>
                                    <ul className="feature-list">
                                        <li><BsCheckLg /> Buy Now Service</li>
                                        <li><BsCheckLg /> Google Login Authentication</li>
                                        <li><BsCheckLg /> Client Review Post</li>
                                        <li><BsCheckLg /> Separate User and admin panel</li>
                                        <li><BsCheckLg /> Payment System</li>
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
                                    <a href="https://github.com/Lightsas/complet-rofik-if"><BsGithub /></a>
                                    <a className="mt-5" href="https://rofik-it.web.app/"><BsLink45Deg /></a>
                                </div>
                            </div>
                            </Slide>
                        </div>  
                    </div>
                    <div className="work-item row d-flex align-items-center">
                        <div className="col-md-7 ">
                        <Slide left>
                            <div className="project-image shadow p-3 mb-5 bg-body rounded">
                                <img src={projectImage3}></img>
                            </div>
                        </Slide>    
                        </div>
                        <div className="col-md-5">
                            <Slide right>
                            <div className="project-details bg-danger text-white p-4 mb-5">
                                <h4 className="title">Khacha Bazar</h4>
                                <p className="project-describtion">An ecommerce application where user can buy products. A dashboard is added for maintenance.</p>
                                <div className="feature">
                                    <h5>Feature</h5>
                                    <ul className="feature-list">
                                        <li><BsCheckLg /> Check Out</li>
                                        <li><BsCheckLg /> Product management</li>
                                        <li><BsCheckLg /> order history</li>
                                    </ul>
                                </div>
                                <div className="technology mt-3">
                                    <span>React JS</span>
                                    <span>Node JS</span>
                                    <span>MongoDB</span>
                                    <span>Express JS</span>
                                    <span>React Router</span>
                                    <span>Firebase</span>
                                </div>
                                <div className="project-link mt-3">
                                    <a href="https://github.com/Porgramming-Hero-web-course/full-stack-client-Lightsas"><BsGithub /></a>
                                    <a className="mt-5" href="https://mobile-velly.web.app/"><BsLink45Deg /></a>
                                </div>
                            </div>
                            </Slide>
                        </div>  
                    </div> 
                    <div className="container-contact100-from-btn mb-5">
                        {/* <Link to="/homee">
                            <button className="contact100-from-btn ">
                                <p style={{marginBottom: '0', fontSize: '20px'}}>See All Project</p>
                            </button>
                        </Link> */}
                    </div>                        
                </div>
            </div>
        </section>
    );
}

export default Protfolio;