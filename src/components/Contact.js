import emailjs from "emailjs-com";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_6d5nfh8', 'template_op24ql8', e.target, 'user_Ti06uU9jhcvBBg5EQWXbP')
            .then((result) => {
                alert("Your Message Sent Successfully. Please Check your mail id. Have a Great Day 😃");
                e.target.reset();
            }, (error) => {
                alert("Sorry😞 your message is not Sent Successfully due to some Techical Error. Please Drop your message in Chiranjeebnayak.37@gmail.com. Have a Great Day 😃");
                console.log(error.text);
            });
        
    }

    return (
        <div className="contact-section paddingTB60 bg-dark" id="Contact">
            <div className="container">
                <div className="contact-heading my-auto mt-4">Contact Me</div><hr className="mx-auto"></hr>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto text-center">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" autoComplete="off" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" autoComplete="off" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" autoComplete="off" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-warning" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}