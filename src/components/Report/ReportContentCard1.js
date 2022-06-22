import React from 'react'
import RcontentCard from './RcontentCard';
import "./ReportContentCard1.css";
const ReportContentCard1 = () => {
  return (
    <div className="reportcontentcard">
        <div className="contentcarddata">
          <h3>100 vergelijkbare woningen verkocht in de buurt</h3> 
          <div className="contentCardsec">
            <div className="contentCardpor">
              <RcontentCard
              Cstylehead="91"
              Cstylepara="Overboden"
              />
            </div>
            <div className="contentCardpor por1">
              <RcontentCard
              Cstylehead="5"
              Cstylepara="Vraagprijs"
              />
            </div>
            <div className="contentCardpor por2">
              <RcontentCard
              Cstylehead="4"
              Cstylepara="Onderboden"
              />
            </div>
          </div>
        </div>
    </div>
  );
}
export default ReportContentCard1;