import React from "react";
import "../HomeWrapper/HomeWrapper.css";
import headImage from "../../../assets/images/modern-image.png";
import { Link } from "react-router-dom";
const HomeWrapper = () =>{
    return(
        <div className="modern-main">
            <div className="container">
                <div className="modern-sec">
                    <div className="modern-content1">
                        <h4>
                            De moderne manier van een huis <span>kopen.</span> 
                        </h4>
                        <p>
                            Laat technologie jou helpen bij het zoeken naar een woning.
                        </p>
                        <div className="modern-anc">
                            <Link to ="/pricing">Direct starten</Link>
                        </div>
                    </div>
                    <div className="modern-content2">
                        <div>
                            <img src={headImage} alt="header-logo"/>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}
export default HomeWrapper;