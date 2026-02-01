import React from 'react'

import './contact.css';

import College from '../../assets/college.jpg';

import facebookIcon from '../../assets/facebook-icon.png';
import twitterIcon from '../../assets/twitter.png';
import youtubeIcon from '../../assets/youtube.png';
import instagramIcon from '../../assets/instagram.png';

/*import React, { useRef } from 'react';*/

/*import emailjs from '@emailjs/browser';*/

const Contact = () => {
   /* const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6phm4ar', 'template_zcxds5a', form.current, 'blaHt_5KIJ711DfGH')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };*/
    
    return (
        <div id='contactPage'>
            <div id="qualification">

                <h1 className="qualificationPageTitle">Qualification </h1>
                <span className="qualificationDesc"> 
                Bachelor of Engineering (B.E.) in 
                Computer Science and Engineering<br/>
                NMAM Institute of Technology, Nitte
                </span>
                <div className="collegeImgs">
                    <img src={College} alt="Qualification" className="collegeImg" />
                                   
                </div>
            </div>




            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>


                <form className="contactForm" >
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg' ></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <img src={facebookIcon} alt="Facebook" className="link" />
                        <img src={twitterIcon} alt="Twitter" className="link" />
                        <img src={youtubeIcon} alt="YouTube" className="link" />
                        <img src={instagramIcon} alt="Instagram" className="link" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;