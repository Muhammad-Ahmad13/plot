import React from 'react';
import { Link } from 'react-router-dom';
import "./ReportAdvice.css";
import advice1 from "../../assets/images/advice1.png";
import advice2 from "../../assets/images/advice2.png";
import advice3 from "../../assets/images/advice3.png";
const ReportAdvice = () => {
  return (
    <div className="advicemain">
        <div className="adviceimage">
            <img src={advice1}/>
            <img src={advice2}/>
            <img src={advice3}/>
        </div>
        <h5>
            Beste van twee werelden: data en persoonlijk advies.
        </h5>
        <p>
            Met Alles-in-1 weet je altijd hoe hoog je moet gaan. En het bieden? Dat laat je lekker aan ons over. We houden je altijd op de hoogte.
        </p>
        <div className="adviceanc">
            <Link to="#">Ik wil een informatiegesprek</Link>
        </div>
    </div>
  );
}

export default ReportAdvice;