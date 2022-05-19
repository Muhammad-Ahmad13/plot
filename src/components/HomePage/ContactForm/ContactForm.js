import React from "react";
import "./ContactForm.css";
const ContactForm = () =>{
    return(
        <div className="contact-main">
            <div className="container">
                <div className="contact-sec">
                    <div className="contact-content1">
                        <h4>
                            Vragen? Neem contact op.
                        </h4>
                        <p>
                            Lorem ipsum georening bukoska vaben. Dogyns eurong. 
                            Povisovis josm, emedan semis. Harat rar par. 
                        </p>
                    </div>
                    <div className="contact-content2">
                        <form>
                            <h4>
                                Contact Form
                            </h4>
                            <div className="contact-input">
                                <input type="text" placeholder="Name" required/>
                            </div>
                            <div className="contact-input">
                                <input type="phone" placeholder="Phone" required/>
                            </div>
                            <div className="contact-input">
                                <input type="email" placeholder="Email" required/>
                            </div>
                            <div className="contact-textarea">
                                <textarea placeholder="Message" rows="5"/>
                            </div>
                            <div className="contact-anc">
                                <button type="submit">Direct starten huurmarkt</button>
                                {/* <a href="#">Direct starten huurmarkt</a> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactForm;