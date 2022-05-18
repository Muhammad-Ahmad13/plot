import React from "react";
import { Link } from "react-router-dom";
import "./SignUP.css";
const Forgot = () =>{
    return(
        <div className="sign-main">
            <div className="sign-sec shadow-none">
                {/* <h4>Forget Password</h4> */}
                <form>
                    <div className="sign-input">
                        <label>Email</label>
                        <input placeholder="Enter your Email" required/>
                    </div>
                    
                    <div className="sign-anc">
                        <button>Forgot Password</button>
                    </div>
                    {/* <Link to="">back to login</Link> */}
                </form>
                {/* <div className="sign-data">
                    <span><Link to="/changepass">Change Password ?</Link></span>
                    <p>Don't have an Account ? <span><Link to="/signup">Sign Up</Link></span></p>
                </div> */}
            </div>
        </div>
    );
}
export default Forgot;