import React from 'react'
import Miss2Card from './Miss2Card';
import miss21 from "../../assets/images/service1.png";
import miss22 from "../../assets/images/service2.png";
import miss23 from "../../assets/images/service3.png";
import { Link } from 'react-router-dom';
import "./ReportMiss2.css";
const ReportMiss2 = () => {
  return (
    //   <div className="Rmiss2sec">
        <div className="Rmiss2main">
            <div className="Rmiss2data">
            <Miss2Card
            miss2image={miss21}
            miss2head="Eigendoms informatie"
            miss2anc="Kadaster PDF"
            />
            </div>
            <div className="Rmiss2data">
            <Miss2Card
            miss2image={miss22}
            miss2head="Hypotheek informatie"
            miss2anc="Kadaster PDF"
            />
            </div>
            <div className="Rmiss2data">
            <Miss2Card
            miss2image={miss23}
            miss2head="Kadastrale kaart"
            miss2anc="Kadaster PDF"
            />
            </div>
            <div className="Rmiss2anc text-center">
             <Link to ="">Koop alle PDF's — € 14,95</Link>
           </div>
            <h6>Alle documenten zijn direct downloadbaar</h6>
        </div>
       
    // </div>
  );
}

export default ReportMiss2;