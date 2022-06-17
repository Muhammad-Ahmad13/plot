import React from 'react';
import "./ReportHP.css";
const ReportHP = (props) => {
  return (
    <div className="hpmain">
        <h3>
            {props.hphead}
        </h3>
        <p>
            {props.hppara}
        </p>
    </div>
  );
}
export default ReportHP;