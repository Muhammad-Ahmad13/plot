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
                kunPara="Lorem ipsum georening bukoska vaben. Dogyns eurong.
                Povisovis josm, emedan semis. Harat rar par."
                 />
                <KunAccess />
                <ReceiveSec />
            </div>
        </div>
    );
}
export default KunnenMain;