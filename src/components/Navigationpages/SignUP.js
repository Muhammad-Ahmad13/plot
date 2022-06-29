import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { Formik ,Form, ErrorMessage,useFormik } from "formik";
import * as Yup from 'yup';
import "./SignUP.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import passEye from "../../assets/images/password-eye.png";
import passhide1 from "../../assets/images/passhide.png";
// const validate = values => {
//     const errors = {};
//     if (!values.firstName) {
//       errors.firstName = 'Required';
//     } else if (values.firstName.length > 15) {
//       errors.firstName = 'Must be 15 characters or less';
//     }
  
//     if (!values.password) {
//       errors.password = 'Required';
//     } else if (values.password.length > 10) {
//       errors.password = 'Must be 10 characters or less';
//     }
//     if (!values.confirmPassword) {
//         errors.confirmPassword = 'Required';
//       } else if (values.confirmPassword.length > 10) {
//         errors.confirmPassword = 'Must be 10 characters or less';
//       }
//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }
  
//     return errors;
//   };
const SignUP = (props) =>{
    const [passwordShow , setPasswordShow] = useState(false);
    const [confirmShow , setConfirmShow] = useState(false);
    const [eyeShowPass, setEyeShowPass] = useState(true);
    const [eyeShowCon, setEyeShowCon] = useState(true);
    const togglePassword = () =>{
        setPasswordShow(!passwordShow);
    }
    const toggleConfirm = () =>{
        setConfirmShow(!confirmShow);
    }
    const handleEyePass = ()=>{
        setEyeShowPass(!eyeShowPass)
    }
    const handleEyeConfirm = ()=>{
        setEyeShowCon(!eyeShowCon)
    }
    return(
        <Formik
          initialValues = {{
            firstName: '',
            email: '',
            password:'',
            confirmPassword:''
        }}
        validationSchema= {Yup.object({
            firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
            .min(8 , "Must be 8 Characters").required('Password is required'),
            confirmPassword: Yup.string()
            .test('passwords-match', 'Passwords must match', function(value){
                return this.parent.password === value;
                })
            })}
        onSubmit={(values, {resetForm}) => {
        let res;
            const username = values.firstName;
            const email = values.email;
            const password1 = values.password;
            const blog = {username, email, password1}
            axios.post('https://34.90.29.163:90/api/register/', blog).then(response=>{
                res = response.status;
                    switch(res){
                        case 201:
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
            resetForm({values: ''})
        }}
        >
        {formik=>(
        <div className="sign-main ">
            <div className="sign-sec shadow-none">
                <form onSubmit={formik.handleSubmit}>
                    <div className="sign-input sign-abs">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            name="firstName"
                            type="text"
                            autoComplete="off"
                            placeholder="Enter your Name"
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                        />
                        {formik.errors.firstName ? <div className="passerror">{formik.errors.firstName}</div> : null}
                    </div>
                    <div className="sign-input sign-abs">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="off"
                            onChange={formik.handleChange}
                            placeholder = "example@mail.com"
                            value={formik.values.email}
                        />
                        {formik.errors.email ? <div className="passerror">{formik.errors.email}</div> : null}
                     </div>
                    <div className="sign-input sign-abs">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            autoComplete="off"
                            type={passwordShow ? "text":"password"}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        
                       <span onClick={handleEyePass}>
                                {eyeShowPass ?
                                <div className="passeye">
                                    <img src={passEye} onClick={togglePassword} alt="password_eye"/>
                                </div> 
                                : 
                                <div className="passeye">
                                    <img src={passhide1} onClick={togglePassword} alt="passhide_eye"/>
                                </div>
                                }
                                </span>
                        {formik.errors.password ? <div className="passerror">{formik.errors.password}</div> : null}
                    </div>
                    <div className="sign-input sign-abs">
                        <label htmlFor="Confirm Password">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            autoComplete="off"
                            type={confirmShow ? "text":"password"}
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                        />
                       <span onClick={handleEyeConfirm}>
                            {eyeShowCon ?
                            <div className="passeye">
                                <img src={passEye} onClick={toggleConfirm} alt="password_eye"/>
                            </div> 
                            : 
                            <div className="passeye">
                                <img src={passhide1} onClick={toggleConfirm} alt="passhide_eye"/>
                            </div>
                            }
                        </span>
                        {formik.errors.confirmPassword ? <div className="passerror">{formik.errors.confirmPassword}</div> : null}
                    </div>
                    <div className="sign-anc">
                        <button type="submit"  value="send">Signup</button>
                    </div>
                </form>
                <ToastContainer 
                        position="top-center"
                        autoClose={3000}
                    />
            </div>
        </div>
        )}
        </Formik>
    );
}
export default SignUP;