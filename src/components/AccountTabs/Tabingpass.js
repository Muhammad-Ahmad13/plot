import React,{ useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from "formik";
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import passEyet from "../../assets/images/password-eye.png";
import passhidet from "../../assets/images/passhide.png";
import axios from 'axios';
import "./Tabingpass.css";
const Tabingpass = () => {
    const {usersEmail} = useSelector(state => state.auth);
    let email = usersEmail;
    const [passwordShowt , setPasswordShowt] = useState(false);
    const [oldPasst, setOldpasst] = useState(false);
    const [confirmShowt , setConfirmShowt] = useState(false);
    const [eyeShowPasst, setEyeShowPasst] = useState(true);
    const [eyeShowCont, setEyeShowCont] = useState(true);
    const [eyeOldPass, setEyeOldPass] = useState(true);
    const togglePasswordt = () =>{
        setPasswordShowt(!passwordShowt);
    }
    const toggleOldpass = () =>{
        setOldpasst(!oldPasst);
    }
    const toggleConfirmt = () =>{
        setConfirmShowt(!confirmShowt);
    }
    const handleEyePass = ()=>{
        setEyeShowPasst(!eyeShowPasst);
    }
    const handleEyeConfirm = ()=>{
        setEyeShowCont(!eyeShowCont);
    }
    const handleEyeOld = () => {
        setEyeOldPass(!eyeOldPass);
    }
  return (
    <div className="tpassmain">
        <Formik
          initialValues = {{
            passw: '',
            password:'',
            confirmPassword:''
        }}
        validationSchema= {Yup.object({
            passw: Yup.string()
            .min(8 , "Must be 8 Characters").required('Password is required'),
            password: Yup.string()
            .min(8 , "Must be 8 Characters").required('Password is required'),
            confirmPassword: Yup.string()
            .test('passwords-match', 'Passwords must match', function(value){
                return this.parent.password === value;
                })
            })}
        onSubmit={(values, {resetForm}) => {
            const old_password = values.passw;
            const password = values.password;
            const updateData = {old_password, password, email};
            axios.put('https://34.90.29.163:90:/api/change-password/',updateData).then(response=>{
            switch(response.status){
                case 202:
                toast.success("Password updated successfully");
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
        <div className="">
            <div className="tpass-twidth">
                <form onSubmit={formik.handleSubmit}>
                    <div className="tpass-input tpass-width tpass-abs">
                        <label htmlFor="passw">Your Current Password</label>
                        <input
                            id="passw"
                            name="passw"
                            type= {oldPasst ? "text":"password"}
                            autoComplete="off"
                            placeholder="Current Password"
                            onChange={formik.handleChange}
                            value={formik.values.passw}
                        />
                        <span onClick={handleEyeOld}>
                                {eyeOldPass ?
                                <div className="passeye">
                                    <img src={passEyet} onClick={toggleOldpass} alt="password_eye"/>
                                </div> 
                                : 
                                <div className="passeye">
                                    <img src={passhidet} onClick={toggleOldpass} alt="passhide_eye"/>
                                </div>
                                }
                                </span>
                        {formik.errors.passw ? <div className="passerror">{formik.errors.passw}</div> : null}
                    </div>
                   <div className="tpass-flex">
                    <div className="tpass-input tpass-width1 tpass-abs">
                        <label htmlFor="password">Your New Password</label>
                        <input
                            id="password"
                            name="password"
                            autoComplete="off"
                            placeholder='New Password'
                            type={passwordShowt ? "text":"password"}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                       <span onClick={handleEyePass}>
                                {eyeShowPasst ?
                                <div className="passeye">
                                    <img src={passEyet} onClick={togglePasswordt} alt="password_eye"/>
                                </div> 
                                : 
                                <div className="passeye">
                                    <img src={passhidet} onClick={togglePasswordt} alt="passhide_eye"/>
                                </div>
                                }
                                </span>
                        {formik.errors.password ? <div className="passerror">{formik.errors.password}</div> : null}
                    </div>
                    <div className="tpass-input tpass-width1 tpass-abs">
                        <label htmlFor="Confirm Password">Confirm New Password</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            autoComplete="off"
                            placeholder="Confirm New Password"
                            type={confirmShowt ? "text":"password"}
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                        />
                       <span onClick={handleEyeConfirm}>
                            {eyeShowCont ?
                            <div className="passeye">
                                <img src={passEyet} onClick={toggleConfirmt} alt="password_eye"/>
                            </div> 
                            : 
                            <div className="passeye">
                                <img src={passhidet} onClick={toggleConfirmt} alt="passhide_eye"/>
                            </div>
                            }
                        </span>
                        {formik.errors.confirmPassword ? <div className="passerror">{formik.errors.confirmPassword}</div> : null}
                    </div>

</div>

                    <div className="tpass-anc">
                        <button type="submit"  value="send">Change Password</button>
                    </div>
                </form>
                <ToastContainer 
                        position="top-right"
                        autoClose={500}
                    />
            </div>
        </div>
        )}
        </Formik>

    </div>
  );
}
export default Tabingpass;