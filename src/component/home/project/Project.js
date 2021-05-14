import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import './Project.css';
import bg from '../../icon/bg-2.png';
import webPic2 from '../../icon/my web 2.PNG';
import webPic3 from '../../icon/web site pic3.PNG';
import webPic4 from '../../icon/web site pic 4.PNG';
import ScrollAnimation from 'react-animate-on-scroll';

const Project = () => {

    return (
        <div id="project">
            <div className="sec_title mt-5">
                <h2>PROJECT</h2>
                <div className="chose_demo_area mt-5">
                    <div className="chose_demo_inner">
                        <div className="container">                     
                            <div className="row">
                                <div className="col-md-5">
                                <Slide left>
                                    <div className="effectProject">
                                        <div></div>
                                    </div>
                                </Slide>
                                <Slide left>
                                    <div className="demo_item">
                                        <a href="https://rofik-it.web.app/">
                                            <img className="protImg" src={webPic2}></img>
                                        </a>
                                        <h2>Rofik IT</h2>
                                    </div>
                                </Slide>
                                </div>
                                <div className="col-md-2">

                                </div>
                                <div className="col-md-5">
                                    <ul className="describtion">
                                        <li>I will create a three page responsive web application.</li>
                                        <li>Front-end made with HTML, CSS, Bootstrap and React, Back-end with Node, Express, MongoDB and Login Authentication Firebase.</li>                
                                        <li>This page can be added by another admin if one admin wants. He can add another service if  he wants. Again, any client can give a review.</li>                
                                    </ul>
                                    <a href="https://github.com/Lightsas/complet-rofik-if" className="btn btn-warning"> Repository</a>
                                    <a href="https://rofik-it.web.app/" style={{margin: '30px'}} className="btn btn-warning">Demo</a>
                                    <img className="element" src={bg}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chose_demo_inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <ul  className="describtion">
                                        <li>This is a one page web application. Where there are so many players. If you want, you can make a team with a few people. The total amount of money that will be spent on them can be calculated.</li>
                                    </ul>
                                    <a href="https://github.com/Lightsas/khacha-bazar" className="btn btn-warning"> Repository</a>
                                    <a href="https://mobile-velly.web.app/" style={{margin: '30px'}} className="btn btn-warning">Demo</a>
                                    <img className="element_2" src={bg}></img>
                                </div>
                                <div className="col-md-2"></div>
                                    <div className="col-md-5">
                                    <Slide right>
                                        <div className="demo_item">
                                            <a href="https://mobile-velly.web.app/">
                                                <img className="protImg" src={webPic3}></img>
                                            </a>
                                            <h2>Kachabazar Velly</h2>
                                        </div>
                                    </Slide>   
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="chose_demo_inner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5">
                                    <Slide left>
                                        <div className="demo_item">
                                            <a href="https://nilphamri-riders.web.app/">
                                                <img className="protImg" src={webPic4}></img>
                                            </a>
                                            <h2>Nilphamari Rider</h2>
                                        </div>
                                    </Slide>
                                </div>
                                <div className="col-md-2">

                                </div>
                                <div className="col-md-5">
                                    <ul  className="describtion">
                                        <li>A ride share web application. Anyone can travel by selecting a car and a Google map has also been used. I will create a three page responsive web application.</li>
                                        <li>Front-end made with HTML, CSS, Bootstrap and React, fake data and Login Auth Firebase.</li>
                                    </ul>
                                    <a href="https://github.com/Lightsas/nilphamri-rider" className="btn btn-warning"> Repository</a>
                                    <a href="https://nilphamri-riders.web.app/" style={{margin: '30px'}} className="btn btn-warning">Demo</a>
                                    <img className="element" src={bg}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;