import React from "react";
import FeaturesSec from "./FeaturesSec";
import Worthy from "./Worthy";
import "./FeatureMain.css"
const FeatureMain=()=>{
    return(
        <div className="Feat-sec">
            <div className="container">
                <div className="Feat-main">
                    <div className="Feat-content1">
                        <FeaturesSec></FeaturesSec>

                    </div>
                    <div className="Feat-content2">
                        <Worthy></Worthy>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default FeatureMain;