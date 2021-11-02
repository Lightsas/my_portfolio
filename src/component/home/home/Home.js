import React from 'react';
import './Home.css';
import Typed from "react-typed";
import mypic from '../../icon/me pic.PNG';
import Navbar from '../navbar/Navbar';
import Nav from '../navbar/Nav';
import AboutME from '../aboutme/AboutME';
import Protfolio from '../protfolio/Protfolio';
import Future from '../future/Future';
import ContactFrom from '../contactFrom/ContactFrom';


const Home = () => {
    return (
        <>

            <section style={{ backgroundColor:' #EFF0F4'}} className="home-section section">
               <div class="effect-warp">
                   <div class="effect effect-1"></div>
                   <div class="effect effect-2">
                       <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                   </div>
                   <div className="effect effect-3">
                       <div></div>
                   </div>
               </div>
                <div className="container">
                    <div className="row full-screen align-items-center">
                        <div className="home-text">
                            <p>Hello, my name is</p>
                            <h2>Md. Liton Ali</h2>
                            <h3 className="tye2">I'm Web</h3>
                            <Typed className="tye"
                                strings={["MERN stack developer", "Front-End Developer", "Designer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop
                            /><br></br>
                            <a href="https://drive.google.com/file/d/1VbF1Nh23Ufzfqgpk445DEnPAmGRo1911/view?usp=sharing" download="Md Liton Ali" target="_blank" className="btn-1 outer-shadow hover-in-shadow">View Resume</a>
                            <a href="https://github.com/Lightsas" className="btn-1 outer-shadow hover-in-shadow">Github</a>
                            <a href="https://linkedin.com/in/md-liton-ali-b03123174" className="btn-1 outer-shadow hover-in-shadow">Linkid</a>
                        </div>
                        <div className="home-img">
                            <div className="img-box inner-shadow">
                                <img className="outer-shadow" src={mypic} alt="profilo-pic"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AboutME></AboutME>
            <Protfolio></Protfolio>
            <Future></Future>
            <ContactFrom></ContactFrom>
        </>    
            
    );
};

export default Home;