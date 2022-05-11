import React from "react";
import { Link } from "react-router-dom";
import "./SignUP.css";
const Login = () =>{
    return(
        <div className="sign-main">
            <div className="sign-sec">
                <h4>Login</h4>
                <form>
                    <div className="sign-input">
                        <label>Email</label>
                        <input placeholder="Enter your Email" required/>
                    </div>
                    <div className="sign-input">
                        <label>Password</label>
                        <input placeholder="Password" required/>
                    </div>
                    <div className="sign-anc">
                        <button>Login</button>
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
export default Login;