import React from 'react';
import { Link } from 'react-router-dom';
import "./ContactUsForm.css";
const ContactUsForm =() => {
  return (
    <div className="usform-main">
        <h4>
            Neem contact op
        </h4>
        <p>
           Vragen? Neem contact op
        </p>
       
        <div className="usform-form">
            <form>
                <div className='usform-contact'>
                    <div className="usform-input input-width1">
                        <label >Name </label>
                        <input
                        type="text"
                        placeholder="Name"
                        />
                    </div>
                    <div className="usform-input input-width1">
                        <label >Phone</label>
                        <input
                        type="tel"
                        placeholder="Phone"
                        />
                    </div>
                    <div className="usform-input input-width1">
                        <label >Email Address</label>
                        <input
                        type="email"
                        placeholder="Email Address"
                        />
                    </div>
                    <div className="usform-input input-width1">
                        <label >Country</label>
                        <input
                        type="text"
                        placeholder="Country"
                        />
                    </div>
                    <div className="usform-input input-width2">
                        <label >Subject</label>
                        <input
                        type="text"
                        placeholder="Subject"
                        />
                    </div>
                    <div className="usform-input input-width2">
                        <label >Message</label>
                        <textarea
                        type="text"
                        placeholder="Message"
                        rows="6"
                        />
                    </div>
                    <div className="usformanc">
                        <Link to = "#">Submit</Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactUsForm;