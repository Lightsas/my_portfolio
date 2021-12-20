import React, {useState} from 'react';
import './ProtfolioAll.css';
import prortfolioImage1 from '../../icon/Final PIV.jpg';
import prortfolioImage2 from '../../icon/Rofik It.jpg';
import prortfolioImage3 from '../../icon/Kachabar verlly.png';
import prortfolioImage4 from '../../icon/Niphamari Raider.jpg';
import { BsCheckLg, BsGithub, BsLink45Deg } from "react-icons/bs";
import Nav from '../navbar/Nav';




function ProtfolioAll(props) {
    const [visible, setVisible] = React.useState(true);
    const [visibleTwo, setVisibleTwo] = React.useState(true);
    const [visibleThree, setVisibleThree] = React.useState(true);
    const [visibleFour, setVisibleFour] = React.useState(true);


    return (
        <>
        <div className="pt-5">
            <div className="container text-center pt-5">
                <div className="row">
                    <div className="protfolio-filter-wrapper p-3 rounded-pill  bg-primary text-white shadow">
                        <div class="btn-group px-5 rounded-pill bg-warning text-dark protfolio-filter" role="group" aria-label="Second group">
                            <button type="button" class="px-3 p-2">All</button>
                            <button type="button" class="px-3">Vanilla JS App</button>
                            <button type="button" class="px-3">React App</button>
                            <button type="button" class="px-3">Node</button>
                            <button type="button" class="px-3">HTML Template</button>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                            <div className="protfolio-work-item shadow">
                                <div className="protfolio-work-item-img">
                                    <img src={prortfolioImage1}></img>
                                </div>
                                <div class="accordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                        <button onClick={() => setVisible(!visible)} class="accordion-button collapsed bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <h4 className="title">Doctors Portal</h4>
                                        </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse text-start" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="project-details bg-danger text-white p-4">
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
                                                <h5>Technology Stack</h5>
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
                                        </div>
                                        {visible &&
                                            <div className="bg-danger d-flex justify-content-between align-items-center">
                                                <div className="technology p-3">
                                                    <span>React JS</span>
                                                    <span>Node JS</span>
                                                </div> 
                                                <div className="project-link mt-3">
                                                    <a href="https://github.com/Lightsas/doctor_protal"><BsGithub /></a>
                                                    <a className="mt-5" href="https://doctors-portal-8d80a.web.app/"><BsLink45Deg /></a>
                                                </div>   
                                            </div>
                                        }                              
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="protfolio-work-item shadow">
                                <div className="protfolio-work-item-img">
                                    <img src={prortfolioImage2}></img>
                                </div>
                                <div class="accordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingTwo">
                                        <button onClick={() => setVisibleTwo(!visibleTwo)} class="accordion-button collapsed bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            <h4 className="title">Rofik IT</h4>
                                        </button>
                                        </h2>
                                        <div id="flush-collapseTwo" class="accordion-collapse collapse text-start" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="project-details bg-danger text-white p-4">
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
                                                <h5>Technology Stack</h5>
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
                                        </div>
                                        {visibleTwo &&
                                            <div className="bg-danger d-flex justify-content-between align-items-center">
                                                <div className="technology p-3">
                                                    <span>React JS</span>
                                                    <span>Node JS</span>
                                                </div> 
                                                <div className="project-link mt-3">
                                                    <a href="https://github.com/Lightsas/complet-rofik-if"><BsGithub /></a>
                                                    <a className="mt-5" href="https://rofik-it.web.app/"><BsLink45Deg /></a>
                                                </div>   
                                            </div>
                                        }                              
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="protfolio-work-item shadow">
                                <div className="protfolio-work-item-img">
                                    <img src={prortfolioImage3}></img>
                                </div>
                                <div class="accordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingThree">
                                        <button onClick={() => setVisibleThree(!visibleThree)} class="accordion-button collapsed bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            <h4 className="title">Khacha Bazar</h4>
                                        </button>
                                        </h2>
                                        <div id="flush-collapseThree" class="accordion-collapse collapse text-start" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="project-details bg-danger text-white p-4">
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
                                                <h5>Technology Stack</h5>
                                                <span>React JS</span>
                                                <span>Node JS</span>
                                                <span>MongoDB</span>
                                                <span>Express JS</span>
                                                <span>React Router</span>
                                                <span>Firebase</span>
                                            </div>
                                            <div className="project-link mt-3">
                                                <a href="https://github.com/Lightsas/complet-rofik-if"><BsGithub /></a>
                                                <a className="mt-5" href="https://rofik-it.web.app/"><BsLink45Deg /></a>
                                            </div>
                                        </div>
                                        </div>
                                        {visibleThree &&
                                            <div className="bg-danger d-flex justify-content-between align-items-center">
                                                <div className="technology p-3">
                                                    <span>React JS</span>
                                                    <span>Node JS</span>
                                                </div> 
                                                <div className="project-link mt-3">
                                                    <a href="https://github.com/Lightsas/complet-rofik-if"><BsGithub /></a>
                                                    <a className="mt-5" href="https://rofik-it.web.app/"><BsLink45Deg /></a>
                                                </div>   
                                            </div>
                                        }                              
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 pt-5">
                            <div className="protfolio-work-item shadow">
                                <div className="protfolio-work-item-img">
                                    <img src={prortfolioImage4}></img>
                                </div>
                                <div class="accordion">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingFour">
                                        <button onClick={() => setVisibleFour(!visibleFour)} class="accordion-button collapsed bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            <h4 className="title">Nilphamari Riders</h4>
                                        </button>
                                        </h2>
                                        <div id="flush-collapseFour" class="accordion-collapse collapse text-start" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="project-details bg-danger text-white p-4">
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
                                                <h5>Technology Stack</h5>
                                                <span>React JS</span>
                                                <span>React Router</span>
                                                <span>Firebase</span>
                                            </div>
                                            <div className="project-link mt-3">
                                                <a href="https://github.com/Lightsas/complet-rofik-if"><BsGithub /></a>
                                                <a className="mt-5" href="https://rofik-it.web.app/"><BsLink45Deg /></a>
                                            </div>
                                        </div>
                                        </div>
                                        {visibleFour &&
                                            <div className="bg-danger d-flex justify-content-between align-items-center">
                                                <div className="technology p-3">
                                                    <span>React JS</span>
                                                </div> 
                                                <div className="project-link mt-3">
                                                    <a href="https://github.com/Lightsas/complet-rofik-if"><BsGithub /></a>
                                                    <a className="mt-5" href="https://rofik-it.web.app/"><BsLink45Deg /></a>
                                                </div>   
                                            </div>
                                        }                              
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ProtfolioAll;