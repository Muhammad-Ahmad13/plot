import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SignUP.css";
const Login = () =>{
    const [loginMail,setLoginMail] = useState("");
    const [passwordLogin , setPasswordLogin] = useState("");
    const [count , setCount] = useState(0);
    const handleSubmitLogin = (e) =>{
        e.preventDefault();
        console.log("works")
        console.log(passwordLogin)
        console.log(loginMail)
    }
    
    useEffect(() =>{
        // setTimeout(() => {
        //     setCount((count)=> count + 1);
        // }, 1000);
        return() =>{
        //    setPasswordLogin(passwordLogin)
        //    setLoginMail(loginMail)
        }
    },[setLoginMail, setPasswordLogin]);

    return(
        <div className="sign-main">
            <div className="sign-sec">
                <h4>Login</h4>
                <form onSubmit={handleSubmitLogin}>
                    <div className="sign-input">
                        <label>Email</label>
                        <input type="email"
                         placeholder="Enter your Email"
                         autoComplete="off"
                         value={loginMail} 
                         name="lemail"
                         onChange={(e) => setLoginMail(e.target.value)} 
                         required
                        />
                    </div>
                    <div className="sign-input">
                        <label>Password</label>
                        <input type="password"
                         placeholder="Password"
                         autoComplete="off"
                         name="lpassword"
                         value={passwordLogin}
                         onChange={(e) => setPasswordLogin(e.target.value)} 
                         required
                        />
                    </div>
                    <div className="sign-anc">
                        <button onClick={()=>setCount((c) => c+1)} type="submit">Login</button>
                    </div>
                    <h1>I've rendered {count} times!</h1>
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