import React from 'react';
import "./HomeFinder.css";
import finder1 from "../../assets/images/finder1.png";

const HomeFinder = () => {
  return (
    <div className="findermain">
        <div className="container">
            <div className="findersec">
                <div className="findercontent1">
                    <h3>
                        Laat technologie jou helpen bij het vinden van een woning. 
                    </h3>
                    <p>
                        In de woningmarkt draait het onder andere om op tijd te zijn bij nieuwe woningen die op de woningmarkt verschijnen. Woningzoekende kunnen 
                        bij ons een data gedreven assistent aanschaffen. 
                    </p>
                    <p>
                        Hier kan jij binnen account aangeven watje wensen en eisen zijn, denk hierbij aan maximale huurprijs, gewenste locatie, gewenste aantal kamers etc.
                    </p>
                    <p>
                        De data gedreven assistent kijkt elke dag naar alle beschikbare woningen op alle platformen binnen Nederland en stuurt jou elke dag een lijst met
                        nieuwe woningen die voldoen aan jouw eisen. Hierdoor bespaart het de woningzoekende veel tijd, kunnen ze in één oogopslag zien welke woningen
                        voldoen aan hun eisen, en kunnen ze als één van de eerste reageren op deze woningen.
                    </p>
                </div>
                <div className="findercontent2">
                    <img src={finder1} alt = "finder1"/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default HomeFinder;