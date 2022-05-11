import React from "react";
import "./StarterForm.css"
import formimage from "../../assets/images/touch-img.png";
const StarterForm=()=>{
    return(
        <div className="container">
        <div className="starterform-main">
            <div className="starter-content1">
                <h4>
                    Get In Touch
                </h4>
                <form>
                    <div className="starter-form">
                        <div className="starter-form-input">
                            <label>Full name*</label>
                            <input type="text" placeholder="Full name"/>
                        </div>
                        <div className="starter-form-input">
                            <label>Email Address*</label>
                            <input type="email" placeholder="Email" required/>
                        </div>
                    </div>
                    <div className="starter-form-area">
                        <label>Message*</label>
                        <textarea rows="5" cols="10" placeholder="Message"></textarea>
                    </div>
                    <div className="starter-form-anc">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="starter-content2">
                <div className="starter-image">
                    <img src={formimage} alt="form-image"/>
                </div>
            </div>

        </div>
        </div>
    );
}
export default StarterForm;