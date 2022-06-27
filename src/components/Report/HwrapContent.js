import React from 'react';
import { Link } from 'react-router-dom';
import ReactDomServer from "react-dom/server";
import "./HwrapContent.css";
import jsPDF from "jspdf";
const HwrapContent = (props) => {
   
   
  return (
    <div className="wrapcontentmian">
        <div className="container">
            <div className="wrapcontentsec">
                <div className="wrapcontentdata1">
                    <h4>
                        {props.wrapName}
                    </h4>
                    <h5>
                        PlotCore's Woningwaarde
                    </h5>
                    <p>
                        {props.wrapdescrip}
                    </p>
                    <div className="wrapcontentanc mt-4">
                        <Link className="bg1" onClick={props.handlePdf} to="#">Dowload PDF</Link>
                        <Link className="bg2" onClick={props.handleExcel}  to="#">Dowload Excel</Link>
                    </div>
                </div>
                <div className="wrapcontentdata2">
                    <img src={props.headImage} alt="header-logo"/>
                </div>
            </div>
        </div>
    </div>
  );
}
export default HwrapContent;