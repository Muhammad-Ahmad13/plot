import React from 'react';
import Miss1Card from './Miss1Card';
import correctWhite from "../../assets/images/correct-white.png";
import "./ReportMiss1.css";
const ReportMiss1 = () => {
  return (
    <div className="miss1main">
        <h4>
            Mis deze huizenkoop essentials niet.
        </h4>
        <p>
            Kennis is macht tijdens de onderhandeling.
        </p>
        <div className="miss1sec mt-4">
            <Miss1Card
            miss1image={correctWhite}
            miss1imagehead="Weet de exacte koopsom van dit huis"
            />
        </div>
        <div className="miss1sec">
            <Miss1Card
            miss1image={correctWhite}
            miss1imagehead="De exacte afmeting van het perceel"
            />
        </div>
        <div className="miss1sec">
            <Miss1Card
            miss1image={correctWhite}
            miss1imagehead="Registratie zoals verklaringen van erfrecht"
            />
        </div>
        <div className="miss1sec">
            <Miss1Card
            miss1image={correctWhite}
            miss1imagehead="Alle info over de huidige hypotheek"
            />
        </div>

    </div>
  );
}
export default ReportMiss1;