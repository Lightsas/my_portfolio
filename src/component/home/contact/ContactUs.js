import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div id="contact" className="container-contact100">
            <div className="wrap-contact100">
                <from className="contact100-from validate-from">
                    <span className="contact100-form-title">
                        Send Us A Message
                    </span>
                    <div className="wrap-input100 validate-input" data-validate="Please Enter your Name">
                        <input className="input100" type="text" name="name" placeholder="Full Name">
                        </input>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please Enter your Name">
                        <input className="input100" type="text" name="name" placeholder="E-mail">
                        </input>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Please Enter your E-mail">
                        <textarea className="input100" type="text" name="name" placeholder="Your Message">
                        </textarea>
                    </div>
                    <div className="container-contact100-from-btn">
                        <button className="contact100-from-btn">
                            <p style={{marginBottom: '0', fontSize: '20px'}}>Send</p>
                        </button>
                    </div>
                                 
                </from>
            </div>
            
        </div>
    );
};

export default ContactUs;