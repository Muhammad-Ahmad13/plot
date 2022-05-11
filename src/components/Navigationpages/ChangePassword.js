import React from "react";
import { Link } from "react-router-dom";
import "./SignUP.css";
const ChangePassword = () =>{
    return(
        <div className="sign-main">
            <div className="sign-sec">
                <h4>Change Password</h4>
                <form>
                    <div className="sign-input">
                        <label>Old Password</label>
                        <input placeholder="Enter your old password" required/>
                    </div>
                    <div className="sign-input">
                        <label>New Password</label>
                        <input placeholder="Enter your New password" required/>
                    </div>
                    <div className="sign-input">
                        <label>Confirm New Password</label>
                        <input placeholder="Confirm New password" required/>
                    </div>
                    <div className="sign-anc">
                        <button>Reset Password</button>
                    </div>
                </form>
                <div className="sign-data">
                    <span><Link to="/forgot">Forgot Password ?</Link></span>
                    <p>Don't have an Account ? <span><Link to="/signup">Sign Up</Link></span></p>
                </div> 
            </div>
        </div>
    );
}
export default ChangePassword;