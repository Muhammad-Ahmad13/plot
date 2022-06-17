import React from 'react';
import ReportMiss1 from './ReportMiss1';
import ReportMiss2 from './ReportMiss2';
import "./ReportMissmain.css";
const ReportMissmain = () => {
  return (
    <div className="Rmissmain">
        <div className="container">
            <div className="Rmisssec">
                <div className="Rmisscontent1">
                    <ReportMiss1/>
                </div>
                <div className="Rmisscontent2">
                    <ReportMiss2/>
                </div>
            </div>
        </div>
    </div>
  );
}
export default ReportMissmain;