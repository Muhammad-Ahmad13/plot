import React from "react";
import "./HomeHeader.css";
import logo from "../../../assets/images/logo-image.png";
import icon from "../../../assets/images/burger-icon-icon-removebg-preview.png";
import { Link } from "react-router-dom";
const HomeHeader = () =>{
    return(
    <header>
        <nav className="navbar navbar-expand-lg  home-main">
            <div className="container">
            <Link className="navbar-brand" to="/"><img src={logo} alt="logo_image"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                    <img src={icon} alt="Buger-icon"/>
                </span>
            </button>
            <div className="ml-auto home-nav">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav home-data">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to ="#">
                            Kopen met Plotcore
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to ="#">Zelf berekenen</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to ="#">Hoe het werkt</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to ="#">Prijzen</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to ="#">For Expats</Link>
                    </li>
                    <div className="home-list-btn">
                    <li class="nav-item">
                        <Link className="nav-link" to ="/starter">Gratis infomatiegesprek</Link>
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
