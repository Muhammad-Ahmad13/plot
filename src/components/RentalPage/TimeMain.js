import React from 'react'
import TimeCards from './TimeCards';
import "./TimeMain.css";
import clock1 from "../../assets/images/clock1.png";
import clock2 from "../../assets/images/clock2.png";
import clock3 from "../../assets/images/clock3.png";
const TimeMain = () =>{
  return (
    <div className="timemain">
        <div className="container">
            <div className="timecontent">
                <div className="timedata">
                    <TimeCards
                    timeImage = {clock1}
                    timePara = "Bespaar jezelf tijd door elke dag zelf te moeten zoeken"/>
                </div>
                <div className="timedata">
                    <TimeCards
                    timeImage = {clock2}
                    timePara = "Meer dan 2000 bronnen worden elke dag geanalyseerd, dat zou jezelf 4675 uur per dag kosten (onmogelijk dus)"/>
                </div>
                <div className="timedata">
                    <TimeCards
                    timeImage = {clock3}
                    timePara = "Wees als één van de eersten bij een woning."/>
                </div>
                

            </div>

        </div>


    </div>
  )
}

export default TimeMain;