import React from "react";
import "../../HeadWrapper.css";
import "./StarterHeader.css";
import logo from "../../../assets/images/logo-image-white.png";
import icon from "../../../assets/images/burger-icon-icon.png";
import icon1 from "../../../assets/images/nav-burger.png";
const StarterHeader=()=>{
    return(
        <header>
        <nav class="navbar navbar-expand-md  nav_main">
            <div class="container">
            <a class="navbar-brand" href="/"><img src={logo} alt="logo_image"/></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <img src={icon} alt="Buger-icon"/>
                </span>
            </button>
            <div class="ml-auto burger-nav">
                <div class="collapse navbar-collapse nav-content" id="navbarNav">
                    <div className="starter-anc">
                        <a href="#">Direct Starten</a>
                    </div>
                    <div className="starter-icon">
                        <img src={icon1} alt="icondata"/>
                    </div>

                    {/* <ul class="navbar-nav nav-data">
                    <li class="nav-item">
                        <a class="nav-link  text-black" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-black" href="/info">Info</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-black" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-black" href="#">About</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link text-black" href="#">CONTACT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-black" href="#">ABOUT</a>
                    </li> 
                    </ul>*/}
                </div>
            </div>
            </div>
        </nav>        
    </header>
    );
}
export default StarterHeader;