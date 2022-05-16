import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SignUP from "./SignUP";
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
        {/* <div className="login-modal">
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-transparent">   
                        <div className="modal-body p-0">
                            <div className="sign-main">
                                <div className="sign-sec">
                                    <div className="d-flex justify-content-between">
                                        <h4>Login</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <form>
                                        <div className="sign-input">
                                            <label>Email</label>
                                            <input 
                                                type="email"
                                                placeholder="Enter your Email"
                                                autoComplete="off" 
                                                name="lemail"
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
                                                required
                                            />
                                        </div>
                                        <div className="sign-anc">
                                            <button type="submit">Login</button>
                                        </div>
                                    </form>
                                    <div className="sign-data">
                                        <span><Link to="/forgot">Forgot Password ?</Link></span>
                                        <p>Don't have an Account ? <span><Link to="/signup">Sign Up</Link></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}




        <div className="login-modal">
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-transparent">   
                        <div className="modal-body">
                            <div className="sign-main">
                                <div className="sign-sec">
                                    <div className="login-header d-flex justify-content-between">
                                        <h4>Please Login</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <ul className="nav nav-tabs login-tabs" id="myTab" role="tablist">
                                        <li className="nav-item login-tab-item1" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Sign In</button>
                                        </li>
                                    <li className="nav-item login-tab-item1" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Sign Up</button>
                                    </li>
                                {/* <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
                                </li> */}
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <form>
                                            <div className="sign-input">
                                                <label>Email</label>
                                                <input 
                                                    type="email"
                                                    placeholder="Enter your Email"
                                                    autoComplete="off" 
                                                    name="lemail"
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
                                                    required
                                                />
                                            </div>
                                            <div className="sign-anc">
                                                <button type="submit">Login</button>
                                            </div>
                                        </form>
                                        <div className="sign-data">
                                            <span><Link to="/forgot">Forgot Password ?</Link></span>
                                            {/* <p>Don't have an Account ? <span><Link to="/signup">Sign Up</Link></span></p> */}
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="sign-main">
                                            <div className="sign-sec shadow-none">
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
                                                    {/* <p>Already have an Account ? <span><Link to="/">Login</Link></span></p> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default Login;