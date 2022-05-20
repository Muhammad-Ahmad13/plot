import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { Formik ,Form, ErrorMessage,useFormik } from "formik";
import * as Yup from 'yup';
import "./SignUP.css";

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
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
            .test('passwords-match', 'Passwords must match', function(value){
                return this.parent.password === value
                })
            })}
        onSubmit={(values, {resetForm}) => {
        
            console.log(values)
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
                        //  type="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        {formik.errors.password ? <div className="passerror">{formik.errors.password}</div> : null}
                    </div>
                    <div className="sign-input sign-abs">
                        <label htmlFor="Confirm Password">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            autoComplete="off"
                        //  type="password"
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                        />
                        {formik.errors.confirmPassword ? <div className="passerror">{formik.errors.confirmPassword}</div> : null}
                    </div>
                    <div className="sign-anc">
                        <button type="submit"  value="send">Signup</button>
                    </div>
                </form>
            </div>
        </div>
        )}
        </Formik>
    );
}
export default SignUP;