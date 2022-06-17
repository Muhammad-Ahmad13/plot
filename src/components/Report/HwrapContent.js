import React from 'react';
import { Link } from 'react-router-dom';

import "./HwrapContent.css";
const HwrapContent = (props) => {
  return (
    <div className="wrapcontentmian">
        <div className="container">
            <div className="wrapcontentsec">
                <div className="wrapcontentdata1">
                    <h4>
                        {props.wrapName}
                        {/* Zoutmanstraat 46, 3317XN, Dordrecht */}
                    </h4>
                    <h5>
                        PlotCore's Woningwaarde
                    </h5>
                    <p>
                        {props.wrapdescrip}
                        {/* Ontdek alles wat je wilt weten over dit huis. Extra paar ogen nodig? Deel dit rapport met familie, vrienden of bespreek
                        het met een aankoopexpert van Walter Alles-in-1. */}
                    </p>
                    <div className="wrapcontentanc mt-4">
                        <Link className="bg1" to="#">Dowload PDF</Link>
                        <Link className="bg2" to="#">Dowload Excel</Link>
                        {/* <button disabled>hello</button> */}
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