import React from "react";
import "./Login.css"
const Forget=()=>{
    return(
        <section>
        <div class="container">
        <div class="loginmain d-flex align-items-center justify-content-center">
            <div class="logincontent">
                <h4>
                    Forget Password
                </h4>
                <form>
                    <div class="formcontent">
                        <label>Enter Your Email Address</label>
                        <input type="text"  placeholder="Enter Your Email"/>
                    </div>
                    <div class="login-btn">
                        <a href="#">Submit</a>
                    </div>
                    <div class="already-account">
                        <p><a href="#">Sign UP</a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </section>
    );
}
export default Forget;