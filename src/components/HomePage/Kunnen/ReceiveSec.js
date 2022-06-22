import React from "react";
import "./ReceiveSec.css";
import AccessContent from "./AccessContent";
import ValueSection from "./ValueSection";
const ReceiveSec=()=>{
    return(
        <div className="receive-main">
            <div className="receive-content1">
                <ValueSection/>
            </div>
            <div className="receive-content2">
                <AccessContent
                textFirst="Lörem ipsum trir bedade"
                textHeading="Ben jij een starter? Ontvang je eigen data gedreven assistent!"
                textPara="
                Laat technologie jou helpen bij het vinden van een woning. In de woningmarkt draait het onder andere om op
                tijd te zijn bij nieuwe woningen die op de woningmarkt verschijnen. Wij hebben hiervoor de juiste oplossing
                ontwikkelt. Starters kunnen een data gedreven assistent aanschaffen. Starters kunnen binnen hun account
                aangeven wat hun wensen en eisen zijn, denk hierbij aan maximale hypotheek, gewenste locatie, gewenste
                aantal kamers etc. De data gedreven assistent kijkt elke dag naar alle beschikbare woningen op alle
                platformen binnen Nederland en stuurt de gebruiker elke dag een lijst met nieuwe woningen die voldoen
                aan zijn of haar eisen. Hierdoor bespaart het de woningzoekende veel tijd, kunnen ze in één oogopslag
                zien welke woningen voldoen aan hun eisen, en kunnen ze als één van de eerste reageren op deze woningen."
                anchorAddress="#"
                textAnchor="Direct starten huuurmarkt"
                />
            </div>
        </div>
    );
}
export default ReceiveSec;