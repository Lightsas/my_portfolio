import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactFrom.css';
import { BsFillChatSquareQuoteFill, BsFillTelephoneOutboundFill, BsGlobe, BsGithub, BsLinkedin} from "react-icons/bs";

export default function ContactFrom() {

    const form = useRef();
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_lth6civ', 'template_geullpw', form.current, 'user_zeFG4Zu8M2PfTrgSEZpB7')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        };


    return (
        <section id="contact" className="background mt-5">
            <div className="container">
                <div className="contact-from-socal-meaid-link mt-5">
                    <div className="row">
                        <div className="col-lg-8 col-md-7 col-sm-6">
                            <div className="contact-from shadow p-5 mb-5 bg-body rounded">
                                <div className="contact-from-body">
                                    <div className="contact-from-body-text text-center text-danger">
                                        <h5>HAVE ANY QUESTION?</h5>
                                    </div>
                                    <form ref={form} onSubmit={sendEmail} className="contact100-from validate-from">
                                        <span className="contact100-form-title">
                                            Send Us A Message
                                        </span>
                                        <div className="wrap-input100 validate-input" data-validate="Please Enter your Name">
                                            <input className="input100" type="text" name="name" placeholder="Full Name">
                                            </input>
                                        </div>
                                        <div className="wrap-input100 validate-input" data-validate="Please Enter your Name">
                                            <input className="input100" type="email" name="email" placeholder="E-mail">
                                            </input>
                                        </div>
                                        <div className="wrap-input100 validate-input" data-validate="Please Enter your Name">
                                            <input className="input100" type="text" name="subject" placeholder="Subject">
                                            </input>
                                        </div>
                                        <div className="wrap-input100 validate-input" data-validate="Please Enter your E-mail">
                                            <textarea className="input100" type="text" name="message" placeholder="Your Message">
                                            </textarea>
                                        </div>
                                        <div className="container-contact100-from-btn">
                                            <button value="Send" className="contact100-from-btn">
                                                <p style={{marginBottom: '0', fontSize: '20px'}}>Send</p>
                                            </button>
                                        </div>       
                                    </form>
                                </div>
                            </div>
                        </div>    
                        <div className="col-lg-4 col-md-5">
                            <div className="contact-from-infromation">
                                <div className="contact-from shadow p-3 mb-5 bg-body rounded">
                                    <div className="contact-from-body align-items-center d-flex">
                                        <div className="contact-from-icon text-danger p-2">
                                            <BsFillChatSquareQuoteFill />
                                        </div>
                                        <div className="contact-from-details px-2">
                                            <h5 className="text-danger">E-mail</h5>
                                            <p>litonahmedlitu575@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-from-infromation">
                                <div className="contact-from shadow p-3 mb-5 bg-body rounded">
                                    <div className="contact-from-body align-items-center d-flex">
                                        <div className="contact-from-icon text-danger p-2">
                                            <BsFillTelephoneOutboundFill />
                                        </div>
                                        <div className="contact-from-details px-2">
                                            <h5 className="text-danger">Phone</h5>
                                            <p>+88 01777 389 1177</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-from-infromation">
                                <div className="contact-from shadow p-3 mb-5 bg-body rounded">
                                    <div className="contact-from-body align-items-center d-flex">
                                        <div className="contact-from-icon text-danger p-2">
                                            <BsGlobe />
                                        </div>
                                        <div className="contact-from-details px-2">
                                            <h5 className="text-danger">Web Site</h5>
                                            <p>visit website</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-from-infromation">
                                <div className="contact-from shadow p-3 mb-5 bg-body rounded">
                                    <div className="contact-from-body align-items-center d-flex">
                                        <div className="contact-from-icon text-danger p-2">
                                            <BsGithub />
                                        </div>
                                        <div className="contact-from-details px-2">
                                            <h5 className="text-danger">Github</h5>
                                            <a href="https://github.com/Lightsas"><p>View Profile</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-from-infromation">
                                <div className="contact-from shadow p-3 mb-5 bg-body rounded">
                                    <div className="contact-from-body align-items-center d-flex">
                                        <div className="contact-from-icon text-danger p-2">
                                            <BsLinkedin />
                                        </div>
                                        <div className="contact-from-details px-2">
                                            <h5 className="text-danger">Linkedin</h5>
                                            <a href="https://www.linkedin.com/in/md-liton-ali-b03123174/"><p>View Profile</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div> 
                </div>
            </div>
            
        </section>
    );
};
