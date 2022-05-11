import React from "react";
import { Link } from "react-router-dom";
import "./SignUP.css";
const SignUP = () =>{
    return(
        <div className="sign-main">
            <div className="sign-sec">
                 <h4>Signup</h4>
                <form>
                    <div className="sign-input">
                        <label>Name</label>
                        <input placeholder="Enter your Name" required/>
                    </div>
                    <div className="sign-input">
                        <label>Email</label>
                        <input placeholder="Enter your Email" required/>
                    </div>
                    <div className="sign-input">
                        <label>Password</label>
                        <input placeholder="Password" required/>
                    </div>
                    <div className="sign-input">
                        <label>Confirm Password</label>
                        <input placeholder="Confirm Password" required/>
                    </div>
                    <div className="sign-anc">
                        <button>Signup</button>
                    </div>
                </form>
                <div className="sign-data">
                    <p>Already have an Account ? <span><Link to="/login">Login</Link></span></p>
                </div>
            </div>
        </div>
    );
}
export default SignUP;