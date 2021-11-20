import React from 'react';
import Fade from 'react-reveal/Fade';
import './AboutMe.css';
import shapeImage from '../../icon/16.png';
import mypic from '../../icon/Liton Final pic.png';

const AboutME = () => {
    return (
        <div id="about" className="section position-relative mt-5">
            <div className="shape-right">
                <img className="imageStyle" src={shapeImage}></img>
            </div>
                <div className="container">
                    <div className="row align-items-center">
                    <Fade left>
                    <div className="col-md-6">
                            <div>
                                <div>
                                    <img className="img-fluid" src={mypic}></img>
                                </div>

                            </div>
                        </div>
                    </Fade>
                    <Fade right> 
                        <div className="col-md-6 aboutResume">
                            <div>
                                <div className="abouttt" style={{marginLeft: '36px'}}>
                                    <h2>ABOUT ME</h2>
                                </div>
                                <div className="about-deails" style={{marginTop: '50px', padding: '10px'}}>
                                    <ul className="timeline respn">
                                        <li className="timeline-inverted color1">
                                            <div className="timeline-badge"></div>
                                            <div className="timeline-panel">
                                                <h3 className="f-info">CAREER OBJECTIVE</h3>
                                                <div className="s-info">Md. Liton Ali</div>
                                                <p style={{textAlign: 'justify'}}>I'm hardworking. There is a lot of interest in learning something new. I wish to build up a career in an organization at a challenging position where I will be able to improve my knowledge, skills, performance by giving my hard work and passion to raise that organizations value.</p>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted color2">
                                            <div className="timeline-badge"></div>
                                            <div className="timeline-panel">
                                                <h3 className="f-info">SKILLS</h3>
                                                <div className="s-info">Expertise</div>
                                                <p>HTML, CSS, Bootstrap, React Bootstrap, JavaScript (ES6), React.JS, Redux, Thunk, REST API, MongoDB, Firebase, Git</p>
                                                <div className="s-info">Comfortable</div>
                                                <p>Node.js, Express.js, JSON, SASS, Material UI, React Native, OOP.</p>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted color3">
                                            <div className="timeline-badge"></div>
                                            <div className="timeline-panel">
                                                <h3 className="f-info">EDUCATION</h3>
                                                 <div className="s-info">Shyamoli Ideal Polytechnic Institute</div>
                                                <p>Diploma in Computer Science and Engineering</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                     </Fade>    
                    </div>
                    
                    
                </div>
  
        </div>
    );
};

export default AboutME;