import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import Forgot from "./Forgot";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import passEye1 from "../../assets/images/password-eye.png";
import passhide from "../../assets/images/passhide.png";
import {login} from "../../store/slice/AuthSlice";
import {tokenData} from "../../store/slice/TokenSlice";
import "./SignUP.css";
const Login = () =>{
    const [loginMail,setLoginMail] = useState("");
    const [passwordLogin , setPasswordLogin] = useState("");
    const [show , setShow] = useState(true);
    const [passLogShow , setPassLogShow] = useState(false);
    const [eyeShow, setEyeShow] = useState(true);
    const [logData , setLogData] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    // const {usersName,usersEmail,isLoggedIn} = useSelector(state => state.auth);
    const {isLoggedIn} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    //const abc = useSelector(state => state.auth)
    // const [token, setToken] = useState("");
    const {tokenSet} = useSelector(state => state.tok);
    const dispatchTok = useDispatch();
    const toggleLogPass = () =>{
        setPassLogShow(!passLogShow);
    }
    const navigate = useNavigate();
    let tokenResponse = "";
    const handleSubmitLogin = (e) =>{
        e.preventDefault();
        let logRes;
        const email = loginMail;
        const password = passwordLogin;
        const logData = {email, password}
        axios.post("https://34.90.29.163:90/api/token/", logData).then(res=>{
            logRes = res.status;
            dispatchTok(tokenData(res.data));
            switch(res.status){
                case 200:   
                // dispatchTok(tokenData(res.data));
                // console.log(tokenSet);
                setLogData(true);
                toast.success("Login successfully...");
                // navigate("/");
                // const getToken = async () => {
                    let accessHeader1 = {
                        headers: {'Authorization':"Bearer " + res.data.access}
                    };
                    axios.get("https://34.90.29.163:90/api/user-data/", accessHeader1).then(resp=>{
                    dispatch(login(resp.data));
                    navigate("/");
                }).catch(errp=>{
                    console.log(errp.status)
                })  
                break;
                case 405:
                toast.info("Invalid Request");
                break;
                case 400:
                toast.info("Invalid Password");
                break;
                default:
                toast.info("Invalid Data");
            }  
        }).catch(err=>{
            toast.error("Invalid UserName or Password");
            console.log(err)
        })
        setPasswordLogin('');
    }
    // const getToken = async () => {
    //     let accessHeader = {
    //         headers: {'Authorization':"Bearer " +token}
    //     }
    //     console.log(token);
    //     const reponseToken =await axios.get("http://127.0.0.1:8000/api/user-data/", accessHeader);
    //     console.log(reponseToken);
    //     navigate("/");

    //     }
    const handleClickBtn = () =>{
        setShow(!show)
    } 
    const handleEye = ()=>{
        setEyeShow(!eyeShow)
    }
    useEffect(() =>{
        // return() =>{
        // }
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
                                 <button type="submit">Login</button>
                            </div>
                        </form>
                        {/* <ToastContainer 
                        position="top-center"
                        autoClose={3000}
                    /> */}
                    </div>
                    :
                    <div className="sign-data" id="sign-forgot">
                        <div className="card card-body">
                            <Forgot />
                        </div>
                    </div> 
                    }
                    <span><Link to=""  onClick={handleClickBtn}>{show === true ? "Forgot Password ?": "Back to Login" }</Link></span>
                </div>                     
            </div> 
            <ToastContainer 
                position="top-right"
                autoClose={500}
            />       
        </>
    );
}
export default Login;