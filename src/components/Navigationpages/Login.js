import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Forgot from "./Forgot";
import "./SignUP.css";
const Login = () =>{
    const [loginMail,setLoginMail] = useState("");
    const [passwordLogin , setPasswordLogin] = useState("");
    const [show , setShow] = useState(true)
    // const [count , setCount] = useState(0);
    const handleSubmitLogin = (e) =>{
        e.preventDefault();
        console.log(passwordLogin)
        console.log(loginMail)
        setLoginMail('');
        setPasswordLogin('');
    }
    const handleClick = () =>{
        setShow(!show)
    } 
    useEffect(() =>{
       
        return() =>{
        
        }
    },[]);
    return(
        // <div className="sign-main">
        //     <div className="sign-sec">
        //         <h4>Login</h4>
        //         <form onSubmit={handleSubmitLogin}>
        //             <div className="sign-input">
        //                 <label>Email</label>
        //                 <input type="email"
        //                  placeholder="Enter your Email"
        //                  autoComplete="off"
        //                  value={loginMail} 
        //                  name="lemail"
        //                  onChange={(e) => setLoginMail(e.target.value)} 
        //                  required
        //                 />
        //             </div>
        //             <div className="sign-input">
        //                 <label>Password</label>
        //                 <input type="password"
        //                  placeholder="Password"
        //                  autoComplete="off"
        //                  name="lpassword"
        //                  value={passwordLogin}
        //                  onChange={(e) => setPasswordLogin(e.target.value)} 
        //                  required
        //                 />
        //             </div>
        //             <div className="sign-anc">
        //                 <button onClick={()=>setCount((c) => c+1)} type="submit">Login</button>
        //             </div>
        //             <h1>I've rendered {count} times!</h1>
        //         </form>
        //         <div className="sign-data">
        //             <span><Link to="/forgot">Forgot Password ?</Link></span>
        //             <p>Don't have an Account ? <span><Link to="/signup">Sign Up</Link></span></p>
        //         </div>
        //     </div>
        // </div>
        <>
            <div className="sign-main" >
                <div className="sign-sec shadow-none"  >
                    {show ?
                    <div id="sign-visible">
                        <form onSubmit={handleSubmitLogin}>
                            <div className="sign-input">
                                <label>Email</label>
                                <input 
                                    type="email"
                                    placeholder="Enter your Email"
                                    autoComplete="off" 
                                    name="lemail"
                                    value={loginMail}
                                    onChange={(e) => setLoginMail(e.target.value)} 
                                    required
                                />
                            </div>
                            <div className="sign-input">
                                <label>Password</label>
                                <input 
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                    name="lpassword" 
                                    onChange={(e) => setPasswordLogin(e.target.value)}
                                    value={passwordLogin}
                                    required
                                />
                            </div>
                            <div className="sign-anc">
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                    :
                    <div className="sign-data" id="sign-forgot">
                        <div class="card card-body">
                            <Forgot />
                        </div>
                    </div> 
                    }
                    <span><Link to=""  onClick={handleClick}>{show === true ? "Forgot Password ?": "Back to Login" }</Link></span>
                </div>                     
            </div>        
        </>
    );
}
export default Login;