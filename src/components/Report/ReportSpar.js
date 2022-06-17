import React from 'react';
import SparCard from './SparCard';
import "./ReportSpar.css";
import spar1 from "../../assets/images/spar1.png";
import spar2 from "../../assets/images/spar2.png";
import spar3 from "../../assets/images/spar3.png";
import spar4 from "../../assets/images/spar4.png";
import ReportHP from './ReportHP';
import { Link } from 'react-router-dom';
const ReportSpar = () => {
  return (
      <>
    <div className="reportsparmain">
        <div className="container">  
        <div className="reportsparhead">
            <ReportHP
             hphead = "Koop een huis met een beetje van jezelf, en het beste van Walter Living."
             hppara = "Met Alles-in-1 weet je altijd hoe hoog je moet gaan. En het bieden? Dat laat je lekker aan ons over. We houden je altijd op de hoogte."
            />
            <div className="reportsparheadanc">
                <Link to="#">Ik wil een informatiegesprek</Link>
                <Link to="#">Direct aan de slag</Link>
            </div>
            </div>

            </div>
            </div>
            <div className="container">

            <div className="reportsparsec">
                <div className="reportsparcontent">
                    <SparCard
                    sparimage={spar1}
                    sparhead="1 op 1 sparren"
                    sparpara="Beste van twee werelden: data en persoonlijk advies."/>
                </div>
                <div className="reportsparcontent">
                    <SparCard
                    sparimage={spar2}
                    sparhead="Krachtige technologie"
                    sparpara="Beste van twee werelden: data en persoonlijk advies."/>
                </div>
                <div className="reportsparcontent">
                    <SparCard
                    sparimage={spar3}
                    sparhead="Altijd bereikbaar"
                    sparpara="Beste van twee werelden: data en persoonlijk advies."/>
                </div>
                <div className="reportsparcontent">
                    <SparCard
                    sparimage={spar4}
                    sparhead="Vast bedrag"
                    sparpara="Beste van twee werelden: data en persoonlijk advies."/>
                </div>
            </div>
        </div>
        </>
    
  );
}
export default ReportSpar;