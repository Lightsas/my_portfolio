import React, {useState} from 'react';
import './ProtfolioAll.css';
import prortfolioImage1 from '../../icon/55555.jpg';
import { BsCheckLg, BsGithub, BsLink45Deg } from "react-icons/bs";
import Nav from '../navbar/Nav';




function ProtfolioAll(props) {
    const [visible, setVisible] = React.useState(true);

    return (
        <>
        <div className="pt-5">
            <div className="container text-center pt-5">
                <div className="row">
                    <div className="protfolio-filter-wrapper p-3 mb-2 bg-danger text-white shadow">
                        <div class="btn-group me-2 protfolio-filter" role="group" aria-label="Second group">
                            <button type="button" class="btn btn-secondary">All</button>
                            <button type="button" class="btn btn-secondary">Vanilla JS App</button>
                            <button type="button" class="btn btn-secondary">React App</button>
                            <button type="button" class="btn btn-secondary">Node</button>
                            <button type="button" class="btn btn-secondary">HTML Template</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="protfolio-work-item shadow">
                                <div className="protfolio-work-item-img">
                                    <img src={prortfolioImage1}></img>
                                </div>
                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="flush-headingOne">
                                        <button onClick={() => setVisible(!visible)} class="accordion-button collapsed bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            <h4 className="title">Nouka Baich</h4>
                                        </button>
                                        </h2>
                                        <div id="flush-collapseOne" class="accordion-collapse collapse text-start" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="project-details bg-danger text-white p-4">
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
                                        </div>
                                        {visible &&
                                            <div className="bg-danger d-flex justify-content-between align-items-center">
                                                <div className="technology p-3">
                                                    <span>React JS</span>
                                                    <span>Node JS</span>
                                                </div> 
                                                <div className="project-link mt-3">
                                                    <a href="www.google.com"><BsGithub /></a>
                                                    <a className="mt-5" href="www.google.com"><BsLink45Deg /></a>
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