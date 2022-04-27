import React from "react";
import WerktCard from "./WerktCard";
import "./WorkComponent.css"
import cardimage1 from "../../assets/images/explore1.png";
import cardimage2 from "../../assets/images/explore2.png";

const WorkComponent=()=>{
    return(
        <div className="work_contain">
            <div className="container">
                <div className="work_content">
                    <h4>
                        Hoe werkt het?
                    </h4>
                    <div className="work-cards">
                        <div className="werkt-width">
                        <WerktCard
                        head="Feature#1" 
                        icon={cardimage1}
                        detail="U geeft uw voorkeurenen eisen aan uw data gedreven assistant"
                        anchor = "Explore More"
                        />
                        </div>
                        <div className="werkt-width">
                        <WerktCard
                        head="Feature#1"
                        icon={cardimage2}
                        detail="Eike dag ontvangt u een lijst met koop of huurwoningen in heel Nederland die voldoen aan uw eisen"
                        anchor ="Explore More"
                        />
                        </div>
                        <div className="werkt-width">
                        <WerktCard
                        head="Feature#1"
                        icon={cardimage1}
                        detail="U bent eike dag op de hoogte van de niewste woningen en kunt hierdoor snel reageren op woningen."
                        anchor = "Explore More"
                        />
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default WorkComponent;