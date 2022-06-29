import React from "react";
import "./ImprovementMain.css";
import { Link } from "react-router-dom";
const ImprovementMain = () =>{
    return(
        <div className="improve-main">
            <div className="container">
                <div className="improve-sec">
                    <div className="improve-content1">
                        <h3>
                            Idee of verbetervoorstel voor Plotcore?
                        </h3>
                        <p>
                            Mocht je een goed idee hebben voor Plotcore, verbeteringen omtrent onze data of een ander verbetervoorstel hebben,
                            schroom dan niet. Neem contact met ons op en wij zorgen er direct voor dat ons team aan specialisten dit voor u realiseert.
                        </p>
                        <div className="improve-anc">
                            <Link to="#">Help Plotcore Verbeteren!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ImprovementMain;