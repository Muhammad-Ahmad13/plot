import React from "react";
import "./Login.css"
const SignUP=()=>{
    return(
        <section>
        <div class="container">
        <div class="loginmain d-flex align-items-center justify-content-center">
            <div class="logincontent">
                <h4>
                    Sign Up
                </h4>
                <form>
                    <div class="formcontent">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Your Name"/>
                    </div>
                    <div class="formcontent">
                        <label>Enter Your Email Address</label>
                        <input type="text" placeholder="Enter Your Email"/>
                    </div>
                    <div class="formcontent">
                        <label>Password</label>
                        <input type="text" placeholder="Password"/>
                    </div>
                    <div class="formcontent">
                        <label>Confirm Password</label>
                        <input type="text" placeholder="Confirm Password"/>
                    </div>
                    <div class="login-btn">
                        <a href="#">Sign Up</a>
                    </div>
                    <div class="already-account">
                        <p>Already Have an Account ?<a href="#">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section>
    );
}
export default SignUP;