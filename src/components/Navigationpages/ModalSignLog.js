import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SignUP from "./SignUP";
import "./SignUP.css";
const ModalSignLog = () =>{
    return(
      <>
        {/* <div className="login-modal">
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="true" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                                {/* </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                        <Login />
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <SignUP/>
                                    </div> */}
                                    {/* <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div> */}
                                    {/* </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        {/* </div> */}





       
           
                            <div className="sign-main">
                                <div className="sign-sec">
                                    <div className="login-header d-flex justify-content-between">
                                        <h4>Please Login</h4>
                                        
                                    </div>
                                    <ul className="nav nav-tabs login-tabs" id="myTab" role="tablist">
                                        <li className="nav-item login-tab-item1" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Sign In</button>
                                        </li>
                                    <li className="nav-item login-tab-item1" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Sign Up</button>
                                    </li>
                                
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                                        <Login />
                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <SignUP/>
                                    </div>
                                   
                                    </div>
                                </div>
                            </div>
    </>
    );
}
export default ModalSignLog;