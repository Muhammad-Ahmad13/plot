import React from "react";
import AccessContent from "./AccessContent";
import AccessImage from "./AccessImage";
import "./KunAccess.css";
import KunnenDimension from "./KunnenDimension";
import dimen1 from "../../../assets/images/dimen1.png";
import dimen2 from "../../../assets/images/dimen2.png";
import PlotCondition from "./PlotCondition";
const KunAccess = () =>{
    return(
        <div className="access-mian">
            <div className="access-content">
                <AccessContent
                textFirst="Lorem ipsum trir bedade"
                textHeading="Toegang tot alle woninginformatie"
                textPara="Laat technologie jou helpen bij het verzamelen van alle informatie over een woning. In de woningmarkt
                is informatie het belangrijkste wat er is. Wie de juiste informatie in handen heeft binnen de woningmarkt is
                koning. Kom nu alle informatie te weten over een specifieke woning."
                anchorAddress="#"
                textAnchor="Direct starten"
                />
            </div>
            <div className="access-content2">
                <AccessImage />
                <div className="access-abs1">
                <KunnenDimension
                dimenImage={dimen1}
                dimenHead="€ 277.000"
                dimenPara="Woningwaardering"
                />
            </div>
            <div className="access-abs2">
                <KunnenDimension
                dimenImage={dimen2}
                dimenHead="245 m"
                dimenPara="Tuinoppervlakte"
                />
            </div>
            <div className="access-abs3">
                <PlotCondition 
                conditionImage = ""
                conditionHeading = ""
                conditionPara = ""
                conditionprice1 = "€ 277.000"
                conditionprice2 = "€ 2.972 m"
                bottomHeading = "Plotcores Woningwaarde"
                bottomPara = "Goede conditie"
                />
            </div>
            </div>
            
        </div>
    );
}
export default KunAccess;