import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./SignUP.css";
const Forgot = () =>{
    // const firstRef = useRef(null);
    const [forgetMail, setForgetMail] = useState('');
    const handleForgetSubmit = (f) =>{
        f.preventDefault();
        console.log(forgetMail);
        setForgetMail('');
        // firstRef.current.value = ''
        // firstRef.value= setForgetMail(forgetMail);
    }
    return(
        <div className="sign-main">
            <div className="sign-sec shadow-none">
                {/* <h4>Forget Password</h4> */}
                <form onSubmit={handleForgetSubmit}>
                    <div className="sign-input">
                        <label>Email</label>
                        <input 
                        //   ref={firstRef}
                          type="email"
                          placeholder="Enter your Email"
                          name="getMail"
                          autoComplete="off"
                          value={forgetMail}
                          onChange ={(f) => setForgetMail(f.target.value)} 
                          required
                        />
                    </div>
                    <div className="sign-anc text-center">
                        <button type="submit">Reset Password</button>
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