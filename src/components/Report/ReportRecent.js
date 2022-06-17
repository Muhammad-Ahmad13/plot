import React from 'react';
import ReportHP from './ReportHP';
import "./ReportRecent.css";
import dottedgraph from "../../assets/images/graphdot.png";
const ReportRecent = () => {
  return (
    <div className="recentmain">
        <div className="container">
            <div className="recentsec">
                <div className="recentcontent">
                    <ReportHP
                        hphead = "Hoe vergelijkt deze woning zich met 100 recente verkopen in de buurt?"
                        hppara = "De grafiek toont de koopsommen van woningen in vierkantemeterprijzen."
                    />
                </div>
                <div className="recentImage">
                    <img src={dottedgraph}/>
                </div>
            </div>
        </div>
    </div>
  );
}
export default ReportRecent;