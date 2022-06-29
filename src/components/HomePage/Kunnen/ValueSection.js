import React from "react";
import "./ValueSection.css";
import valueImage from "../../../assets/images/logo-image.png";
import valueImage1 from "../../../assets/images/value-icon.png";
import valueImage3 from "../../../assets/images/condition-img.png";
import valueProperty1 from "../../../assets/images/value1.png";
import valueProperty2 from "../../../assets/images/value2.png";
import valueProperty3 from "../../../assets/images/value3.png";
import PlotCondition from "./PlotCondition";
import BestPlatform from "./BestPlatform";
const ValueSection = () =>{
    return(
        <div className="value-main">
            <div className="value-sec">
                <div className="value-image">
                    <img src={valueImage}/>
                </div>
                <div className="value-icon">
                    <img src={valueImage1}/>
                </div>
            </div>
            <div className="plotData">
            <PlotCondition 
                conditionImage = {valueProperty1}
                conditionHeading = ""
                conditionPara = ""
                conditionprice1 = "€ 277.000"
                conditionprice2 = "€ 2.972 m"
                bottomHeading = "Plotcores Woningwaarde"
                bottomPara = "Goede conditie"
                />
            </div>
            <div className="plotData">
            <PlotCondition 
                conditionImage = {valueProperty2}
                conditionHeading = ""
                conditionPara = ""
                conditionprice1 = "€ 195.000"
                conditionprice2 = "€ 1.753 m"
                bottomHeading = "Plotcores Woningwaarde"
                bottomPara = "Goede conditie"
                />
            </div>
            <div className="plotData">
            <PlotCondition 
                conditionImage = {valueProperty3}
                conditionHeading = ""
                conditionPara = ""
                conditionprice1 = "€ 307.000"
                conditionprice2 = "€ 3.172 m"
                bottomHeading = "Plotcores Woningwaarde"
                bottomPara = "Goede conditie"
                />
            </div> 
            <div className="value-abs1">
                <img src={valueImage3}/>
            </div>
            <div className="value-abs2">
               <BestPlatform/>
            </div>

        </div>
    );
}
export default ValueSection;