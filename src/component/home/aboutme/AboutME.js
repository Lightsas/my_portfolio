import React from 'react';
import './AboutMe.css';
import shapeImage from '../../icon/16.png';
import mypic from '../../icon/11.png';

const AboutME = () => {
    return (
        <div className="section position-relative">
            <div className="shapeImage">
                <img src={shapeImage}></img>
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <div className="imageStyle">
                                    <img src={mypic}></img>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-6 aboutResume">
                            <div>
                                <div>
                                    <h1>ABOUT ME</h1>
                                </div>
                                <div style={{marginTop: '50px'}}>
                                    <ul className="timeline">
                                        <li className="timeline-inverted color1">
                                            <div className="timeline-badge"></div>
                                            <div className="timeline-panel">
                                                <h3 className="f-info">Univer of</h3>
                                                <div className="s-info">User Ex</div>
                                                <p>klfkjlskfjlskfjl klsk llsdfk</p>
                                            </div>
                                        </li>
                                        <li className="timeline-inverted color2">
                                            <div className="timeline-badge"></div>
                                            <div className="timeline-panel">
                                                <h3 className="f-info">Udemy</h3>
                                                <div className="s-info">Interaction Desing</div>
                                                <p>lfskjdflskjfkfs</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
  
        </div>
    );
};

export default AboutME;