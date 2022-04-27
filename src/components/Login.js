import React from "react";
import "./Login.css"
const Login=()=>{
    return(
        <section>
        <div class="container">
        <div class="loginmain d-flex align-items-center justify-content-center">
            <div class="logincontent">
                <h4>
                    Login
                </h4>
                <form>
                    <div class="formcontent">
                        <label>Email</label>
                        <input type="text" placeholder="Enter Your Email"/>
                    </div>
                    <div class="formcontent">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" />
                    </div>
                    <div class="login-btn">
                        <a href="#">Login</a>
                    </div>
                    <div class="forget-anc">
                        <a href="#">Forget Password ?</a>
                    </div>
                    <div class="already-account">
                        <p>Don't have an account ? <a href="#">Sign UP</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section>
    );
}
export default Login;