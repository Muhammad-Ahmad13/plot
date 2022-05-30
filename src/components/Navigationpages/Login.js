import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Forgot from "./Forgot";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import passEye1 from "../../assets/images/password-eye.png";
import passhide from "../../assets/images/passhide.png";
// import mailicon from "../../assets/images/email-icon.png";
// import lockicon from "../../assets/images/lock-image.png";
import "./SignUP.css";
const Login = () =>{
    const [loginMail,setLoginMail] = useState("");
    const [passwordLogin , setPasswordLogin] = useState("");
    const [show , setShow] = useState(true);
    const [passLogShow , setPassLogShow] = useState(false);
    const [eyeShow, setEyeShow] = useState(true)
    const toggleLogPass = () =>{
        setPassLogShow(!passLogShow);
    }
    // const [count , setCount] = useState(0);
    const navigate = useNavigate();
    const handleSubmitLogin = (e) =>{
        e.preventDefault();
        let logRes;
        const email = loginMail;
        const password = passwordLogin;
        const logData = {email, password}
        console.log(logData)
        axios.post("http://127.0.0.1:8000/api/token/", logData).then(res=>{
            console.log(res)
            console.log(logData)
            logRes = res.status;
            switch(logRes){
                case 200:
                toast.success("data submit successfully");
                break;
                case 400:
                toast.error("Invalid Data");
                break;
                case 500:
                toast.info("data already exist");
                break;
                default:
                toast.info("data does not submit");
            }  
        }).catch(err=>{
            console.log(err)
        })
        setLoginMail('');
        setPasswordLogin('');
    }
    const handleClickBtn = () =>{
        setShow(!show)
    } 
    const handleEye = ()=>{
        setEyeShow(!eyeShow)
    }
    useEffect(() =>{
        return() =>{
        }
    },[]);
    return(
        <>
            <div className="sign-main" >
                <div className="sign-sec shadow-none"  >
                    {show ?
                    <div id="sign-visible">
                        <form onSubmit={handleSubmitLogin}>
                            <div className="sign-input sign-abs">
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
                                {/* <div className="mail-image">
                                    <img src={mailicon} alt="mail-icon"/>
                                </div> */}
                            </div>
                            <div className="sign-input sign-abs">
                                <label>Password</label>
                                <input 
                                   type={passLogShow ? "text":"password"}
                                    placeholder="Password"
                                    autoComplete="off"
                                    name="lpassword" 
                                    onChange={(e) => setPasswordLogin(e.target.value)}
                                    value={passwordLogin}
                                    required
                                />
                                 {/* <div className="mail-image">
                                    <img src={lockicon} alt="mail-icon"/>
                                </div> */}
                                <span onClick={handleEye}>
                                {eyeShow ?
                                <div className="passeye">
                                    <img src={passEye1} onClick={toggleLogPass} alt="password_eye"/>
                                </div> 
                                : 
                                <div className="passeye">
                                    <img src={passhide} onClick={toggleLogPass} alt="passhide_eye"/>
                                </div>
                                }
                                </span>
                            </div>
                            <div className="sign-anc">
                                <button type="submit" onClick={() => {navigate("/")}}>Login</button>
                                {/* <a type="submit" href="/">Login</a> */}
                            </div>
                        </form>
                        <ToastContainer 
                        position="top-center"
                        autoClose={3000}
                    />
                    </div>
                    :
                    <div className="sign-data" id="sign-forgot">
                        <div class="card card-body">
                            <Forgot />
                        </div>
                    </div> 
                    }
                    <span><Link to=""  onClick={handleClickBtn}>{show === true ? "Forgot Password ?": "Back to Login" }</Link></span>
                </div>                     
            </div>        
        </>
    );
}
export default Login;