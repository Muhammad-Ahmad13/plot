import React,{ useState } from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import passEyet from "../../assets/images/password-eye.png";
import passhidet from "../../assets/images/passhide.png";
import "./Tabingpass.css";
const Tabingpass = () => {
    const [passwordShowt , setPasswordShowt] = useState(false);
    const [confirmShowt , setConfirmShowt] = useState(false);
    const [eyeShowPasst, setEyeShowPasst] = useState(true);
    const [eyeShowCont, setEyeShowCont] = useState(true);
    const togglePasswordt = () =>{
        setPasswordShowt(!passwordShowt);
    }
    const toggleConfirmt = () =>{
        setConfirmShowt(!confirmShowt);
    }
    const handleEyePass = ()=>{
        setEyeShowPasst(!eyeShowPasst)
    }
    const handleEyeConfirm = ()=>{
        setEyeShowCont(!eyeShowCont)
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
            resetForm({values: ''})
        }}
        >
        {formik=>(
        <div className="">
            <div className="tpass-twidth">
                <form onSubmit={formik.handleSubmit}>
                    <div className="tpass-input tpass-width">
                        <label htmlFor="passw">Your Current Password</label>
                        <input
                            id="passw"
                            name="passw"
                            type="password"
                            autoComplete="off"
                            placeholder="Current Password"
                            onChange={formik.handleChange}
                            value={formik.values.passw}
                        />
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
                        <label htmlFor="Confirm Password">Confirm Your New Password</label>
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
                        position="top-center"
                        autoClose={3000}
                    />
            </div>
        </div>
        )}
        </Formik>

    </div>
  );
}
export default Tabingpass;