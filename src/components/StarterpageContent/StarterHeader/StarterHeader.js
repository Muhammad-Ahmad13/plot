import React from "react";
import "../../HeadWrapper.css";
import "./StarterHeader.css";
import logo from "../../../assets/images/logo-image-white.png";
import icon from "../../../assets/images/burger-icon-icon.png";
import icon1 from "../../../assets/images/nav-burger.png";
import { Link } from "react-router-dom";
const StarterHeader=()=>{
    return(
        <header>
        <nav class="navbar navbar-expand-md  nav_main">
            <div class="container">
            <Link class="navbar-brand" to ="/"><img src={logo} alt="logo_image"/></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <img src={icon} alt="Buger-icon"/>
                </span>
            </button>
            <div class="ml-auto burger-nav">
                <div class="collapse navbar-collapse nav-content" id="navbarNav">
                    <div className="starter-anc">
                        <Link to ="#">Direct Starten</Link>
                    </div>
                    <div className="starter-icon">
                        <img src={icon1} alt="icondata"/>
                    </div>
                </div>
            </div>
            </div>
        </nav>        
    </header>
    );
}
export default StarterHeader;