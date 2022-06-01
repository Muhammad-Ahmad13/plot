import React from 'react';
import { Link } from 'react-router-dom';
import "./ForStarterHead.css";

const ForStarterHead=()=> {
  return (
    <div className="starterHeadmain">
        <div className="container">
            <div className="starterHeadContent">
                <h4>
                    Jouw eigen data gedreven assistent.
                </h4>
                <p>
                    Slimme manier om een woning te bemachtigen.  
                </p>
                 <h5>
                    “Waarom moeilijk doen, als het makkelijk kan?”
                 </h5>
                 <div className="starterHead-anc">
                     <Link to="#">Direct starten</Link>
                 </div>
            </div>
             
        </div>

    </div>
  )
}

export default ForStarterHead;