import React from "react";
import "./HomeHeader.css";
import logo from "../../../assets/images/logo-image.png";
import icon from "../../../assets/images/burger-icon-icon-removebg-preview.png";
const HomeHeader = () =>{
    return(
    <header>
        <nav className="navbar navbar-expand-lg  home-main">
            <div className="container">
            <a className="navbar-brand" href="/"><img src={logo} alt="logo_image"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <img src={icon} alt="Buger-icon"/>
                </span>
            </button>
            <div className="ml-auto home-nav">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav home-data">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">
                            Kopen met Plotcore
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Zelf berekenen</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Hoe het werkt</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Prijzen</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">For Expats</a>
                    </li>
                    <div className="home-list-btn">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Gratis infomatiegesprek</a>
                    </li>
                    </div>
                    </ul>
                </div>
            </div>
            </div>
        </nav>        
    </header>
    );
}
export default HomeHeader;
