import React from "react";
import KunAccess from "./KunAccess";
import Kunnen from "./Kunnen";
import "./KunnenMain.css";
import ReceiveSec from "./ReceiveSec";
const KunnenMain= () =>{
    return(
        <div className="kunnenmain-sec">
            <div className="container">
                <Kunnen
                kunHead="Wat wij voor u kunnen doen"
                kunPara="Ontdek het geheim van de waarde van elk huis in Nederland. Met een Plotcore Plus abonnement
                 check je de feiten direct online."
                 />
                <KunAccess />
                <ReceiveSec />
            </div>
        </div>
    );
}
export default KunnenMain;