import React from "react";
import "./HeadWrapper.css";
import logo from "../assets/images/logo-image.png";
import icon from "../assets/images/burger-icon-icon-removebg-preview.png";
const Headwrapper=()=>{
    return(
        <>
         <header>
        <nav className="navbar navbar-expand-md  nav_main">
            <div className="container">
            <a className="navbar-brand" href="/"><img src={logo} alt="logo_image"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <img src={icon} alt="Buger-icon"/>
                </span>
            </button>
            <div className="ml-auto burger-nav">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-data">
                    <li className="nav-item">
                        <a className="nav-link  text-black" aria-current="page" href="/">Coming Soon</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="/starter">Starter</a>
                    </li>
                    {/* <li class="nav-item">
                        <a class="nav-link text-black" href="#">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-black" href="#">About</a>
                    </li> */}
                    {/* <li class="nav-item">
                        <a class="nav-link text-black" href="#">CONTACT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-black" href="#">ABOUT</a>
                    </li> */}
                    </ul>
                </div>
            </div>
            </div>
        </nav>        
    </header>
        </>

    );
}
export default Headwrapper;