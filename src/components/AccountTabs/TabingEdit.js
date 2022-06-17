import React,{useState} from 'react';
import { Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import passEyee from "../../assets/images/password-eye.png";
import passhidee from "../../assets/images/passhide.png";
import "./TabingEdit.css";
const TabingEdit = () => {
  const [emailt , setEmailt] = useState(false);
  const [confirmEmailt , setEmailShowt] = useState(false);
  const [eyeEmailt, setEyeEmailt] = useState(true);
  const [eyeEmailCont, setEyeEmailCont] = useState(true);
  // const togglePassworde = () =>{
  //     setEmailt(!emailt);
  // }
  // const toggleConfirme = () =>{
  //     setEmailShowt(!confirmEmailt);
  // }
  // const handleEyePasse = ()=>{
  //     setEyeEmailt(!eyeEmailt)
  // }
  // const handleEyeConfirme = ()=>{
  //     setEyeEmailCont(!eyeEmailCont)
  // }
  return (
    <div className="teditmain">
       <div className="tpassmain">
        <Formik
          initialValues = {{
            ename: '',
            surname:'',
            eemail:'',
            nemail:''
        }}
        validationSchema= {Yup.object({
            ename: Yup.string()
            .max(10 , "Must be 10 Characters").required('Required'),
            surname: Yup.string()
            .min(10 , "Must be 10 Characters").required('Required'),
            eemail: Yup.string().email('Invalid email address').required('Required'),
            nemail: Yup.string()
            .test('email-match', 'email must match', function(value){
              return this.parent.eemail === value;
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
                  <div className="tabedit-flex">
                    <div className="tpass-input tedit-width sign-abs">
                        <label htmlFor="ename">Your First Name</label>
                        <input
                            id="ename"
                            name="ename"
                            type="text"
                            autoComplete="off"
                            placeholder="First Name"
                            onChange={formik.handleChange}
                            value={formik.values.ename}
                        />
                        {formik.errors.ename ? <div className="passerror">{formik.errors.ename}</div> : null}
                    </div>
                    <div className="tpass-input tedit-width sign-abs">
                        <label htmlFor="surname">Your Surname</label>
                        <input
                            id="surname"
                            name="surname"
                            type="text"
                            autoComplete="off"
                            placeholder="Surname"
                            onChange={formik.handleChange}
                            value={formik.values.surname}
                        />
                        {formik.errors.surname ? <div className="passerror">{formik.errors.surname}</div> : null}
                    </div>
                    <div className="tpass-input tedit-width tpass-abs">
                        <label htmlFor="eemail">Your Email Address</label>
                        <input
                            id="eemail"
                            name="eemail"
                            autoComplete="off"
                            placeholder='Your Email Address'
                            type={emailt ? "text":"email"}
                            onChange={formik.handleChange}
                            value={formik.values.eemail}
                        />
                       {/* <span onClick={handleEyePasse}>
                                {eyeEmailt ?
                                <div className="passeye">
                                    <img src={passEyee} onClick={togglePassworde} alt="mail_eye"/>
                                </div> 
                                : 
                                <div className="passeye">
                                    <img src={passhidee} onClick={togglePassworde} alt="mail_eye"/>
                                </div>
                                }
                                </span> */}
                        {formik.errors.eemail ? <div className="passerror">{formik.errors.eemail}</div> : null}
                    </div>
                    <div className="tpass-input tedit-width tpass-abs">
                        <label htmlFor="Confirm Password">Your New Email Address</label>
                        <input
                            id="nemail"
                            name="nemail"
                            autoComplete="off"
                            placeholder="New Email Address"
                            type={confirmEmailt ? "text":"email"}
                            onChange={formik.handleChange}
                            value={formik.values.nemail}
                        />
                       {/* <span onClick={handleEyeConfirme}>
                            {eyeEmailCont ?
                            <div className="passeye">
                                <img src={passEyee} onClick={toggleConfirme} alt="password_eye"/>
                            </div> 
                            : 
                            <div className="passeye">
                                <img src={passhidee} onClick={toggleConfirme} alt="passhide_eye"/>
                            </div>
                            }
                        </span> */}
                        {formik.errors.nemail ? <div className="passerror">{formik.errors.nemail}</div> : null}
                    </div>
                    </div>
                    <div className="tpass-anc">
                        <button type="submit"  value="send">Save Changes</button>
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

    </div>
  );
}
export default TabingEdit;