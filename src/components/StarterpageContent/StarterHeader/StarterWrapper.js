import React from "react";
import "./StarterWrapper.css";
import headerimage from "../../../assets/images/image-header.png"
const StarterWrapper=()=>{
    return(
        <div className="wrapper-sec">
            <div className="container">
                <div className="wrapper-main">
                    <div className="wrapper-content">
                        <h5>Jouw eigen data gedreven assistent.</h5>
                        <h6>
                            Slimme manier om een woning te bemachtigen.
                        </h6>
                        <p>
                            "Waarom moeilijk doen, als het makkelijk kan?"
                        </p>
                        <div className="wrapper-anc">
                            <a href="#">Koopwoning vinden</a>
                            <a href="#">Huurwoning Vinden</a>
                        </div>
                    </div>
                    <div className="wrapper-content2">
                        <img src={headerimage} alt="header-img"/>
                    </div>
                </div> 
            </div>
        </div>
    );
}
export default StarterWrapper;