import React from 'react';
import "./Contact.css";
import ContactUsForm from './ContactUsForm';
import ContactContent from './ContactContent';
const Contact = () =>{
  return (
    <>
    <div className="contactmaster">
      <div className="container">
          <div className="contact-major">
              <div className="contact-major-content1">
                  <ContactContent/>
              </div>
              <div className="contact-major-content2">
                  <ContactUsForm/>
              </div>
          </div>
      </div>
    </div>
    </>
  )
} 
export default Contact;