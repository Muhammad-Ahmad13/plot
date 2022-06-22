import React, { useState } from "react";
import "./ContactForm.css";
const ContactForm = () =>{
    const [conName, setConName] = useState("");
    const [conPhone, setConPhone] = useState("");
    const [conMail, setConMail] = useState("");
    const [conText, setConText] = useState("");

    const handleContactForm = (e) =>{
        e.preventDefault();
        setConMail('')
        setConName('')
        setConPhone('')
        setConText('')
    }
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
                        <form onSubmit={handleContactForm}>
                            <h4>
                                Contact Form
                            </h4>
                            <div className="contact-input">
                                <input type="text"
                                 placeholder="Name"
                                 value={conName}
                                 onChange = {(e)=> setConName(e.target.value)}
                                 required
                                />
                            </div>
                            <div className="contact-input">
                                <input type="phone" 
                                  placeholder="Phone"
                                  value={conPhone}
                                  onChange = {(e)=> setConPhone(e.target.value)} 
                                  required
                                />
                            </div>
                            <div className="contact-input">
                                <input type="email"
                                 placeholder="Email"
                                 value={conMail}
                                 onChange = {(e)=> setConMail(e.target.value)} 
                                 required
                                />
                            </div>
                            <div className="contact-textarea">
                                <textarea
                                 placeholder="Message" 
                                 value={conText}
                                 onChange = {(e)=> setConText(e.target.value)} 
                                 rows="5"
                                />
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